export default function Layout({ children }) {
  return (
    <div className="flex justify-center items-center py-16 mt-8 bg-dark-100 shadow-inner shadow-light-100/10">
      {children}
    </div>
  );
}
