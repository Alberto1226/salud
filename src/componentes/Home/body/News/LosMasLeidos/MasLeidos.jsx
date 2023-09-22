
export function MasLeidos(props) {
  return (
    <>
      
        <div className="container">
          <div className="box">
            <span className="rating-badge gold">{props.con}</span>
            <div className="recent-reviews-image">
              <img src={props.img1} className="imagen-ajustada"/>
            </div>
            <div>
              <h6 className="tituloMas">
              {props.nombre
                .split(" ")
                .slice(0, 6)
                .join(" ")
                .concat(props.nombre.split(" ").length > 6 ? "..." : "")}
              </h6>
              
            </div>
          </div>
        </div>
      
    </>
  );
}
