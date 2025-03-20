import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-[#0a121b]">
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
