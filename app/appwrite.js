import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.APPWRITE_COLLECTION_ID;
const ENDPOINT = process.env.APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const database = new Databases(client);

export async function updateSearchCount(searchTerm, movie) {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("search_term", searchTerm),
    ]);

    if (result.documents.length > 0) {
      const document = result.documents[0];
      await database.updateDocument(DATABASE_ID, COLLECTION_ID, document.$id, {
        count: document.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        search_term: searchTerm,
        count: 1,
        id: movie.id,
        title: movie.title || "",
        poster_path: movie.poster_path || "",
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
}

export async function getTrendingMovies() {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return result.documents;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
