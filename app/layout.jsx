import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MovieProvider } from "@/context/movieContext";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "MovieFlix",
  description: "Your ultimate destination for movies",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      appearance={{
        baseTheme: dark,
      }}
    >
      <MovieProvider>
        <html lang="en">
          <body>
            <main>
              <div className="pattern" />

              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </main>
            <ToastContainer />
          </body>
        </html>
      </MovieProvider>
    </ClerkProvider>
  );
}
