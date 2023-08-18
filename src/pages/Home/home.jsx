//css
import "../../css/general.css";
import "../../css/movill.css";
import "../../css/swiper.css";
//bootstrap

//paginas
import { Head } from "../../componentes/Home/head/head";
import { Footer } from "../../componentes/Home/footer/footer";
import { Body } from "../../componentes/Home/body/body";

export function Home() {
  return (
    <>
      <Head />
      <Body />
      <Footer />
    </>
  );
}
