import { NavBar } from "../NavBar/NavBar";
import { FullNav } from "../NavBar/NavCompleto";
import "./headre.css";

export function Head() {
  return (
    <>
      <FullNav/>
      

      <div class="banner-section">
        <h1>Bienvenido a tu portal de salud</h1>
        <h4>Servicios de salud</h4>
        <a href="#">Ver más</a>
      </div>
    </>
  );
}
