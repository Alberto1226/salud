import img from "../../../../../assets/img/cards/img1.png";
import img1 from "../../../../../assets/img/cards/img2.png";
import img2 from "../../../../../assets/img/cards/img3.png";

export function Recientes() {
  return (
    <>
      <section id="recent-games">
        <h1>Ultimas Publicaciones</h1>
        <div className="flex">
          <div className="box">
            <span className="badge new">New</span>
            <img src={img} />
            <div className="box-lower-section">
              <h4>Suspendisse ut justo tem por, rutrum</h4>
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                ipsum dolor sit amet.
              </p>
              <a href="#" className="comments">
                3 Comments
              </a>
            </div>
          </div>
          <div className="box">
            <span className="badge racing">Racing</span>
            <img src={img1} />
            <div className="box-lower-section">
              <h4>Susce pulvinar metus nulla, vel facilisis sem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                ipsum dolor sit amet.
              </p>
              <a href="#" className="comments">
                3 Comments
              </a>
            </div>
          </div>
          <div className="box">
            <span className="badge adventure">Adventure</span>
            <img src={img2} />
            <div className="box-lower-section">
              <h4>Suspendisse ut justo tem por, rutrum</h4>
              <p>
                Lorem ipsum dolor sit amet, consectectur adipiscing elit lorem
                ipsum dolor sit amet.
              </p>
              <a href="#" className="comments">
                3 Comments
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
