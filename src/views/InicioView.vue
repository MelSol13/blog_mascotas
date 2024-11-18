<template>

    <div class="container">
        <img src="../assets/Images/foto-inicio.avif" alt="Foto-Inicio" />
        <p>En este blog podrás encontrar curiosidades, consejos y muchas cosas más.<br><br/>
        Si buscas todo lo relacionado con nuestras mascotas, estás en el lugar ideal.<br><br/>
        Visita la sección de artículos para acceder a toda la información.</p>
    </div>

    <footer>
        <div id="iconos-redes">
            <ul id="contacto">
            <li>
                <a id="icono-footer"
                    href="https://www.linkedin.com/in/melissa-solano-webdeveloper-fullstackmern-front-end-back-end-javascript-bootstrap-html-css/"><img
                        class="linkedin" src="../assets/Images/img15.png" alt="Mi Icono" /></a>
            </li>
            <li>
                <a id="icono-footer" href="https://github.com/MelSol13"><img class="github" src="../assets/Images/img17.png"
                        alt="Mi Icono" /></a>
            </li>
            <li>
                <a id="icono-footer" href="mailto: m.solanof13@gmail.com"><img class="email" src="../assets/Images/img14.png"
                        alt="Mi Icono" /></a>
            </li>
        </ul>
        </div>
        <div id="form">
            <h4> ¿Deseas información personalizada? </h4>
        <form action="correo" method="post">
            <input type="email" id="email" name="email" placeholder="Dejanos tu correo" required>
        </form>
        </div>
    </footer>
    
</template>

<script>

import '@/assets/Inicio.css';

export default {
    name: 'InicioView',
};
</script>