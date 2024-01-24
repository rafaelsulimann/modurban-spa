import { Search, ShoppingCart, User } from "lucide-react";
import bannerImg from "./assets/banner2.png";
import produto11 from "./assets/produto11.png";
import produto14 from "./assets/produto14.png";
import formaPagamento from "./assets/formapagamento.png";
import seguranca from "./assets/seguranca.png";

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-zinc-50 font-['Assistant']">
      <header id="header">
        <div className="flex h-10 items-center justify-center border-b border-zinc-200">
          <h2 className="text-sm tracking-wider text-zinc-800">
            Eu sou o melhor
          </h2>
        </div>
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between">
          <div className="flex items-center">
            <h1>
              <a
                href="#"
                className="mr-10 text-2xl tracking-wide text-rose-600 hover:text-rose-500"
              >
                Mod Urban
              </a>
            </h1>
            <ul className="flex gap-6 text-sm tracking-wider text-zinc-700">
              <li>
                <a
                  href="#"
                  className="underline-offset-4 hover:text-zinc-950 hover:underline"
                >
                  Início
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("produtos");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="underline-offset-4 hover:text-zinc-950 hover:underline"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="underline-offset-4 hover:text-zinc-950 hover:underline"
                >
                  Entrar em contato
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-32 items-center justify-between">
            <Search className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
            <User className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
            <ShoppingCart className="size-7 cursor-pointer stroke-[0.5] text-zinc-800 hover:stroke-1 hover:text-rose-600" />
          </div>
        </nav>
      </header>
      <main>
        <section id="banner" className="h-auto w-full">
          <img src={bannerImg} alt="Banner" className="w-full" />
        </section>
        <section id="produtos" className="m-auto max-w-6xl py-12">
          <h2 className="mb-6 text-3xl text-zinc-900">Produtos</h2>
          <div className="grid grid-cols-4 gap-2">
            <div className="group">
              <img
                src={produto14}
                alt="Produto14"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 underline-offset-4 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
            <div className="group">
              <img
                src={produto14}
                alt="Produto14"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
            <div className="group">
              <img
                src={produto14}
                alt="Produto14"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
            <div className="group">
              <img
                src={produto14}
                alt="Produto14"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
            <div className="group">
              <img
                src={produto11}
                alt="Produto11"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
            <div className="group">
              <img
                src={produto11}
                alt="Produto11"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
            <div className="group">
              <img
                src={produto11}
                alt="Produto11"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
            <div className="group">
              <img
                src={produto11}
                alt="Produto11"
                className="h-72 w-72 cursor-pointer rounded-sm"
              />
              <h3 className="mt-4 text-sm text-zinc-700 group-hover:underline">
                Exemplo de título do produto
              </h3>
              <p className="text-2xl font-semibold text-zinc-950">
                <span>R$</span> 19,99
              </p>
            </div>
          </div>
        </section>
        <section className="flex h-48 flex-col items-center justify-center bg-zinc-950 text-zinc-100">
          <div className="flex h-full max-w-lg flex-col items-center py-7">
            <h2 className="text-2xl font-bold tracking-wide">
              Cadastra-se e Ganhe
            </h2>
            <p className="text-center">
              Ganhe R$10 OFF em seu primeiro pedido conosco, receba tudo em
              primeira mão neste clubinho vip
            </p>
            <form action="#" onSubmit={() => {}}>
              <input
                type="text"
                placeholder="E-mail"
                className="mt-2 w-80 rounded-l-sm border border-zinc-100 bg-transparent p-2 outline-none placeholder:text-zinc-100"
              />
              <button
                type="submit"
                className="mt-2 w-40 rounded-r-sm border border-zinc-100 p-2"
              >
                Increver-se
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer-title footer-link">
        <div className="max-w-6l mb-14 flex w-full gap-32 pl-4 pr-4 pt-4">
          <div className="flex flex-col">
            <h3 className="mb-6">Institucional</h3>
            <a href="">Sobre nós</a>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-6">Sua conta</h3>
            <a href="">Minha conta</a>
            <a href="">Minhas compras</a>
            <a href="">Meu carrinho</a>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-6">Dúvidas</h3>
            <a href="">Fale conosco</a>
            <a href="">Política de privacidade</a>
            <a href="">Termos de uso</a>
            <a href="">Cupons ativos</a>
            <a href="">Trocas e devoluções</a>
            <a href="">Meus pedidos</a>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-6">Siga-nos</h3>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
          </div>
          <div className="flex max-w-56 flex-col">
            <h3 className="mb-6">Atendimento</h3>
            <p>
              <span className="font-bold text-zinc-950">loja física</span>:
              segunda à sábado das 10hs às 18hs
            </p>
            <p>
              <span className="font-bold text-zinc-950">online</span>: segunda à
              sexta das 9hs às 18hs
            </p>
          </div>
        </div>
        <div className="flex justify-between pl-4 pr-4 pt-4">
          <div>
            <h3 className="mb-6">Formas de pagamento</h3>
            <img
              src={formaPagamento}
              alt="Formas de pagamento"
              className="w-80"
            />
          </div>
          <div>
            <h3 className="mb-6">Segurança</h3>
            <img src={seguranca} alt="Segurança" />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-zinc-200 p-4">
          <div>
            <h1 className="mr-10 text-3xl text-rose-600 hover:text-rose-500">
              <button
                onClick={() => {
                  const element = document.getElementById("header");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Mod Urban
              </button>
            </h1>
          </div>
          <div>
            <p className="text-right text-sm">
              Desenvolvimento <span className="font-bold">Rafael Sulimann</span>
            </p>
            <p className="text-sm">
              Todos direitos reservados à Mod Urban | Canoas, Rio Grande do Sul.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
