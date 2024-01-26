import { Link } from "react-router-dom";

type Props = {
  slideTo?: string;
};

export default function LogoIcon({ slideTo }: Props) {
  function handleSlideTo() {
    if (slideTo !== undefined) {
      const element = document.getElementById(slideTo);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <Link to="/">
      <h1
        className="mr-10 text-2xl tracking-wide text-rose-600 hover:text-rose-500"
        onClick={handleSlideTo}
      >
        Mod Urban
      </h1>
    </Link>
  );
}
