import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Client() {
  return (
    <div className="flex h-screen flex-col bg-zinc-50 font-['Assistant']">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
