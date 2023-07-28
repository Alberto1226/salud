
export function Head(){
    return(<>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Salud</title>

    <header>
        <div class="container">
            <div class="header-left">
                <a href="#">Salud</a>
            </div>
            <div class="headre-right">
                
                <input type="checkbox" id="toggle"/>
                <label for="toggle"><i class="fa-solid fa-bars"></i></label>
                <ul className="menuham">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Información</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="banner-section">
       
        <h1>Bienvenido a tu portal de salud</h1>
        <h4>Servicios de salud</h4>
        <a href="#">Ver más</a>
    </div>
   
    </>)
}