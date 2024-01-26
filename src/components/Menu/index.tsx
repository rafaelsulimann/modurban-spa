import { Link } from "react-router-dom";

type Props = {
  to: string;
  title: string;
  slideTo?: string;
};

export default function Menu({ to, title, slideTo }: Props) {
  function handleSlideTo() {
    if (slideTo !== undefined) {
      const element = document.getElementById(slideTo);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <Link to={to}>
      <li
        className="underline-offset-4 hover:text-zinc-950 hover:underline"
        onClick={handleSlideTo}
      >
        {title}
      </li>
    </Link>
  );
}
