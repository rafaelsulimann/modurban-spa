import formaPagamento from "../../assets/formapagamento.png";
import seguranca from "../../assets/seguranca.png";
import FooterSection from "./footer-section";
import LogoIcon from "../LogoIcon";
import Menu from "../Menu";

export default function Footer() {
  return (
    <footer className="footer-title footer-link">
      <div className="max-w-6l mb-14 flex w-full gap-32 pl-4 pr-4 pt-4">
        <FooterSection nome="Institucional">
          <Menu title="Sobre nós" to="/sobre-nos" />
        </FooterSection>
        <FooterSection nome="Sua Conta">
          <Menu title="Minha conta" to="/conta" />
          <Menu title="Minhas compras" to="/compras" />
          <Menu title="Meu Carrinho" to="/carrinho" />
        </FooterSection>
        <FooterSection nome="Dúvidas">
          <Menu title="Fale conosco" to="/fale-conosco" />
          <Menu title="Política de privacidade" to="/politica-de-privacidade" />
          <Menu title="Termos de uso" to="/termos-de-uso" />
          <Menu title="Cupons ativos" to="/cupons-ativos" />
          <Menu title="Trocas e devoluções" to="/trocas-e-devolucoes" />
          <Menu title="Meus pedidos" to="/meus-pedidos" />
        </FooterSection>
        <FooterSection nome="Dúvidas">
          <Menu title="Facebook" to="/facebook" />
          <Menu title="Instagram" to="/instagram" />
        </FooterSection>
        <FooterSection nome="Atendimento" className="max-w-56">
          <p>
            <span className="font-bold text-zinc-950">loja física</span>:
            segunda à sábado das 10hs às 18hs
          </p>
          <p>
            <span className="font-bold text-zinc-950">online</span>: segunda à
            sexta das 9hs às 18hs
          </p>
        </FooterSection>
      </div>
      <div className="flex justify-between pl-4 pr-4 pt-4">
        <FooterSection nome="Formas de pagamento">
          <img
            src={formaPagamento}
            alt="Formas de pagamento"
            className="w-80"
          />
        </FooterSection>
        <FooterSection nome="Segurança">
          <img src={seguranca} alt="Segurança" />
        </FooterSection>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-zinc-200 p-4">
        <LogoIcon slideTo="header" />
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
  );
}
