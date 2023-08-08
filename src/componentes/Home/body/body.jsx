import img from "../../../assets/img/5WFSF32YAJEFTNYFFLQC7PGNG4.jpg";

export function Body() {
  return (
    <>
      <div class="about-section">
        <h2>TIPS DE SALUD Y VIDA</h2>
        <h3>PROGRAMACIÓN</h3>
        <hr/>
        <iframe src="https://www.youtube.com/embed/2UR95l8tf1w" title="Salud Channel - Canal de TV On Line" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>NUESTROS PROGRAMAS</h2>
        <p class="ppp">
        A través de programas realizados por los mas destacados especialistas en medicina y estilo de vida, encontrarás los tips mas útiles de salud, medicina y vida sana.
        </p>
        <input type="submit" text="OBTENER MAS INFORMACIÓN" value="OBTENER MAS INFORMACIÓN"/>
        <div class="about-maine">
          <div class="ab-left">
            <img src={img} alt="" />
          </div>
          
          <div class="ab-right">
            <div class="ab-r-content">
              <h3>VIDA</h3>
              <p>
              Información útil y los mejores tips para disfrutar la vida sanamente en el Mundo Global, con una premisa: Mente y Cuerpo Sano.
              </p>
            </div>
          </div>
        </div>
        <hr/>
        <div class="about-maine">
          <div class="ab-left">
            <img src={img} alt="" />
          </div>
          
          <div class="ab-right">
            
            <div class="ab-r-content">
              <h5>SALUD</h5>
              <p>
              Todos los temas que abarcan nuestra salud  presentados de la mejor manera por destacados profesionales de cada especialidad.
              </p>
            </div>
          </div>
        </div>
        
        <p>Tu lugar favorito en la Web</p>
        <h3>Vida & Salud Channel</h3>
        <p>Porque tu eres único, un canal on line único para ti.</p>
        <p>Descubre los mejores tips de salud, alimentación y vida sana junto a  la última información internacional sobre salud y medicina.</p>
        <input type="submit" text="OBTENER MAS INFORMACIÓN" value="OBTENER MAS INFORMACIÓN"/>
        <hr/>
        <h2>COMENTARIOS</h2><br/>
        <div className="contenText">
          <h3>¡Pronto llegan las reseñas!</h3>
        </div><br/>
        <h2>SUSCRIBIRSE</h2><br/>
        <p>Suscríbete para recibir noticias sobre tips de salud y vida.</p>
        <input type="text" placeholder="Correo electrónico" width="300"/>
        <input type="submit" text="OBTENER MAS INFORMACIÓN" value="REGISTRARSE"/>
        <div className="contenText">
          <h3>CONÉCTE CON NOSOTROS</h3>
        </div><br/>
        <p><p>Copyright © 2022 Vida & Salud  Channel - Todos los derechos reservados.</p></p>
      </div>
    </>
  );
}
