import { CardsNews } from "./News/CardsNews/CardNews";
import { ContactAndPosrt } from "./News/ContactAndPostComment/ContactAndPost";
import { Eventos } from "./News/Eventos/Eventos";
import { MasLeidos } from "./News/LosMasLeidos/MasLeidos";
import { Recientes } from "./News/Recientes/Recientes";
import "./body.css";

export function Body() {
  return (
    <>
       <div>
        
        <main>
          
          <section id="latest-news">
            <div className="flex">
              <h5>Ultimas publicaciones</h5>
              <div id="latest-news-container">
                <div className="latest-news-item">
                  <span className="badge new">New</span>
                  <span className="latest-news-text">
                  "Explora las Últimas Publicaciones Médicas: Mantente al día con los avances más recientes en el mundo de la salud, investigaciones innovadoras, tratamientos emergentes y consejos expertos para cuidar tu bienestar."
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/**componente */}
          <CardsNews/>
          <Recientes/>
          <Eventos/>
          <MasLeidos/>
          <ContactAndPosrt/>
        </main>
        
      </div>
    </>
  );
}
