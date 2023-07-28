//css
import "../../css/general.css";
import "../../css/swiper.css";
//bootstrap

//paginas
import { Head } from "../../componentes/head/head";
import { Footer } from "../../componentes/footer/footer";
import { SliderVideos } from "../../componentes/sliderVideo/sliderVideos";
import { Body } from "../../componentes/body/body";

export function Home() {
  return (
    <>
      <Head />
      <SliderVideos />
      <Body />
      <Footer />
    </>
  );
}
