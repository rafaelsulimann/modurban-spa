import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Header from "../Header";

export default function ErrorPage() {
  return (
    <div>
      <Header />
      <div className="m-auto flex max-w-6xl flex-col items-center justify-center">
        <h1 className="text-4xl text-zinc-950">Página não encontrada!</h1>
        <div className="mt-5">
          <Link to="/">
            <Button variant="default">Voltar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
