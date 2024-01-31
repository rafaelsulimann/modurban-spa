import { ShoppingCart, Search } from "lucide-react";
import LogoIcon from "../LogoIcon";
import Menu from "../Menu";
import Login from "../Login";

export default function HeaderNav() {
  return (
    <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between">
      <div className="flex items-center">
        <LogoIcon />
        <ul className="flex gap-6 text-sm tracking-wider text-zinc-700">
          <Menu title="Início" to="/" />
          <Menu title="Catálogo" to="/" slideTo="vitrine" />
          <Menu title="Entrar em contato" to="/contato" />
        </ul>
      </div>
      <div className="flex w-32 items-center justify-between">
        <Search className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
        <Login />
        <ShoppingCart className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
      </div>
    </nav>
  );
}
