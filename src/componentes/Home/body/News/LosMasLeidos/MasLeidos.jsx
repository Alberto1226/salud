
export function MasLeidos(props) {
  return (
    <>
      
        <div className="container">
          <div className="box">
            <span className="rating-badge gold">{props.con}</span>
            <div className="recent-reviews-image">
              <img src={props.img1} />
            </div>
            <div>
              <h6>{props.nombre}</h6>
              <p>
                {props.des
                .split(" ")
                .slice(0, 10)
                .join(" ")
                .concat(props.des.split(" ").length > 8 ? "..." : "")}
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
}
