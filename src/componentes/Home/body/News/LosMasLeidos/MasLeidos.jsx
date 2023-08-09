import img from "../../../../../assets/img/cards/art1.png";
import img1 from "../../../../../assets/img/cards/art2 (1).png";
import img2 from "../../../../../assets/img/cards/art3.png";
import img3 from "../../../../../assets/img/cards/art4.png";
export function MasLeidos() {
  return (
    <>
      <section id="recent-reviews">
        <h1>Articulos mas leidos</h1>
        <div className="flex">
          <div className="box">
            <span className="rating-badge gold">9.3</span>
            <div className="recent-reviews-image">
              <img src={img1} />
            </div>
            <div>
              <h4>Avances Prometedores en la Terapia Genética para el Tratamiento del Cáncer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="box">
            <span className="rating-badge purple">9.5</span>
            <div className="recent-reviews-image">
              <img src={img3} />
            </div>
            <div>
              <h4>Impacto de la Tecnología Wearable en el Monitoreo de Enfermedades Cardíacas</h4>
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="box">
            <span className="rating-badge green">9.1</span>
            <div className="recent-reviews-image">
              <img src={img} />
            </div>
            <div>
              <h4>Nuevas Perspectivas sobre la Relación entre Microbioma Intestinal y Salud Mental</h4>
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="box">
            <span className="rating-badge violet">9.7</span>
            <div className="recent-reviews-image">
              <img src={img3} />
            </div>
            <div>
              <h4>Explorando las Implicaciones Clínicas de la Edición de Genes CRISPR-Cas9 en Enfermedades Hereditarias</h4>
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing ipsum dolor
                sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
