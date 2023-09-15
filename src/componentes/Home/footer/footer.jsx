import { SwiperPatrocinadores } from "./patrocinadores/slider";

export function Footer() {
  return (
    <>
    <SwiperPatrocinadores/>
      <footer>

          <div className="flex">
          
  

            <small>
              Copyright © 2023 All rights reserved | Salud Chanel{" "}
              <span className="footer-heart">♥</span> by{" "}
              <a href="https://www.ideasysolucionestecnologicas.com/" target="_blank">
                ISOTECH
              </a>
              .
            </small>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
       
    </>
  );
}
