import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToHash from "./ScrollToHash";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
