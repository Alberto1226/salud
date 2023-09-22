export function Recientes(props) {
  return (
    <>
    
        <div className="container">
          <div className="box">
            <span className="badge new">New</span>
            <img src={props.img1} className="imgcardNew"/>
            <div className="box-lower-section">
              <h4>
              {props.nombre
                .split(" ")
                .slice(0, 5)
                .join(" ")
                .concat(props.nombre.split(" ").length > 5 ? "..." : "")}
              </h4>
              
             
            </div>
          </div>
        </div>
      
        
    </>
  );
}
