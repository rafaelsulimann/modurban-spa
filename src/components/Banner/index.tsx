import bannerImg from "../../assets/banner2.png";

export default function Banner() {
  return (
    <section id="banner" className="h-auto w-full">
      <img src={bannerImg} alt="Banner" className="w-full" />
    </section>
  );
}
