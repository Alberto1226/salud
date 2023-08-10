import { NavBar } from "../NavBar/NavBar";
import "./headre.css";

export function Head() {
  return (
    <>
      <NavBar />

      <div class="banner-section">
        <h1>Bienvenido a tu portal de salud</h1>
        <h4>Servicios de salud</h4>
        <a href="#">Ver más</a>
      </div>
    </>
  );
}
