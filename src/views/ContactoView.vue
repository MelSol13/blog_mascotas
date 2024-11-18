<script>
import '@/assets/Contacto.css';

export default {
  name: 'ContactoView',
}

</script>


<template>
  
<header id="head-contacto">
  <router-link to="/" class="logo-link">
    <img alt="Blog logo" class="Blog_Logo" src="@/assets/Images/Blog_Logo.png">
  </router-link>
<div>
    <h1 class="Titulo_Princ">Contacto</h1>
</div>
</header>

<div id="p-contacto">
  <h3>¡Nos encanta ayudarte!</h3>
  <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>
  <p>Si necesitas más información o quieres contactar con nosotros, <br>envía un correo con tus datos y la consulta a la siguiente dirección:<br>
    <a href="mailto:ptesblog@gmail.com">petsblog@gmail.com</a></p>
  <h3>Datos De Contacto</h3>
  <p>Guápiles, Pococí, Limón (Costa Rica)<br>
    Guápiles Contiguo a los Bomberos <br>
    Tel. +506 8574 9650</p>
  <p>Si tienes alguna sospecha de acontecimiento adverso relacionado con<br> un medicamento veterinario por favor, comunícalo cuanto antes a:<br>
    <a href="mailto:veterinaria@gmail.com">veterinaria@gmail.com</a></p>
  <p> Te informamos que no cederemos tus datos a terceros.</p>
  <img id="contacto-banner" src="https://www.desparasitaatumascota.es/img/contacto_banner_end_pc.jpg?opti" alt="contacto-banner" />
</div>

<footer>
  <p id="p-footer">ESTE SERVICIO ESTÁ A TU DISPOSICIÓN CON EL OBJETIVO DE PROTEGER A <br> TU MASCOTA Y A TU FAMILIA</p>
  <img id="icono-footer" src="../assets/Images/icono-footer.png" alt="icono-footer" />
</footer>
    
  </template>