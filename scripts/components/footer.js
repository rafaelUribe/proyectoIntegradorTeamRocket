console.log("Código de footer conectado")

const footer = () => {
    const ft = document.querySelector("footer");
    
    ft.innerHTML = 
            `<section class="footer p-5">
                <div class="grupo-1">
                    <div class="box">
                    <!-- Logo -->
                        <figure>
                            <a href="./home.html">
                                <img src="../assets/images/flor-guiedani-white.png" alt="Logo Guiedani">
                            </a>
                        </figure>
                    </div>
                <!-- Links navbar -->
                    <div class="box">
                        <a href="./home.html">Home</a><br>
                        <a href="./catalogue.html">Productos</a><br>
                        <a href="./acerca.html">Nosotros</a><br>
                        <a href="./contacto.html">Contacto</a><br>
                        <!-- <a href="#">Blog</a><br> -->
                        <a href="./term-y-cond.html">Términos y condiciones</a><br>
                        <a href="./politicas-priv.html">Políticas de privacidad</a>
                    </div>
                    <!-- Redes sociales -->
                    <div class="container-sm">
                        <h2 class="text-center text-light">Síguenos</h2>
                        <div class="red-social row justify-content-center">
                            <a href="https://www.facebook.com/" target="_blank" class="col-4 text-center">
                                <img src="https://i.ibb.co/56c8NPm/facebook-icon-1.png" alt="logo facebook" class="">
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" class="col-4 text-center">
                                <img src="https://i.ibb.co/rpkRmNh/instagram-icon.png" alt="logo instagram" class="">
                            </a>
                            <a href="https://twitter.com/?lang=es" target="_blank" class="col-4 text-center">
                                <img src="https://i.ibb.co/1d0pgHX/twitter-icon.png" alt="logo instagram" class="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="grupo-2">
                    <small>&copy; 2022 <strong>Guiedani</strong> Todos los derechos reservados</small>
                </div>
            </section>`
}

    export default footer