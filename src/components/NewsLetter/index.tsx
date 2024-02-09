export default function NewsLetter() {
  return (
    <section className="flex h-48 flex-col items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="flex h-full max-w-lg flex-col items-center py-7">
        <h2 className="text-2xl font-bold tracking-wide">
          Cadastra-se e Ganhe
        </h2>
        <p className="text-center">
          Ganhe R$10 OFF em seu primeiro pedido conosco, receba tudo em primeira
          mão neste clubinho vip
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
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
  );
}
