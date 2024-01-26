import { ReactNode } from "react";

type Props = {
  nome: string;
  children: ReactNode;
  className?: string;
};

export default function FooterSection({ nome, children, className }: Props) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="mb-6 text-xl font-semibold text-zinc-700">{nome}</h3>
      <ul>{children}</ul>
    </div>
  );
}
