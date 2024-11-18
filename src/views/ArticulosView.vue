<script>
import '@/assets/Articulos.css';

export default {
  name: 'ArticulosView',
}

</script>


<template>
<header id="head-articulos">
  <router-link to="/" class="logo-link">
    <img alt="Blog logo" class="Blog_Logo" src="@/assets/Images/Blog_Logo.png">
  </router-link>
<div>
    <h1 class="Titulo_Princ">Artículos</h1>
</div>
</header>

<div id="cont-row1">
  <router-link to="/articulo_1" class="articulo_router">
  <div id="cont-art-1">
      <img id="foto-art-1" src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/201907/770_1562576640blog_post_viajarperros_1.jpg" alt="Articulo1" class="Imagen_Articulo">
      <div id="p-cont1">
        <h4>Consejos</h4>
        <h3 class="Titulo_Articulo">Viajar con perros:</h3> 
        <p>Ya se acercan las vacaciones de verano.<br> Notamos ese nerviosismo sano que nos<br> entra cuando pensamos en nuestros<br> planes de viaje. ¡Y no olvidamos a nuestro<br> perro!...</p> 
      </div>
  </div> 
  </router-link>
  <router-link to="/articulo_2" class="articulo_router">
  <div id="cont-art-2">
      <img id="foto-art-2" src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/202207/770_1658237010blog_post_suenan_perros_1.jpg" alt="Articulo2" class="Imagen_Articulo">
    <div id="p-cont2">
        <h4>Curiosidades</h4>
        <h3 class="Titulo_Articulo">¿Qué sueñan los perros?</h3> 
        <p>Según la confirmación de un estudio de<br> una universidad americana, se demostró<br> que los perros sueñan como lo hacemos<br> los humanos, recordando cosas que hacen<br> en su día a día, como la relación con...</p> 
      </div>
  </div>
</router-link>  
<router-link to="/articulo_3" class="articulo_router">
  <div id="cont-art-3">
      <img id="foto-art-3" src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/201905/770_1557224440blog_post_parasito-gusano-redondo-gatos_1.jpg" alt="Articulo3" class="Imagen_Articulo">
    <div id="p-cont3">
        <h4>Parásitos</h4>
        <h3 class="Titulo_Articulo">Dipylidiums y tenias en gatos:<br> ladrones silenciosos</h3> 
        <p>Parece que a los gatos no se les escapa<br> nada, atentos y observadores, con esos<br> ojos vivarachos detectan cualquier<br> movimiento, por muy sigiloso que sea el<br> extraño que se aproxime...</p> 
      </div>
  </div>
</router-link> 
</div>

<div id="cont-row2">
  <router-link to="/articulo_4" class="articulo_router">
  <div id="cont-art-4">
      <img id="foto-art-4" src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/201907/770_1564411817blog_post_convivencia_gato_perro_1.jpg" alt="Articulo4" class="Imagen_Articulo">
    <div id="p-cont4">
        <h4>Consejos</h4>
        <h3 class="Titulo_Articulo">10 claves para la mejor convivencia<br> entre el perro y el gato</h3> 
        <p>Se trata sin duda de las dos especies de<br> mascotas más habituales y que más<br> éxito tienen como animales de<br> compañía. Sin embargo, son bastante<br> diferentes. Entender esas diferencias...</p> 
      </div>
  </div>
</router-link> 
  <router-link to="/articulo_5" class="articulo_router">
  <div id="cont-art-5">
      <img id="foto-art-5" src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/201901/770_1548750724blog_post_gusano_redondo_1.jpg" alt="Articulo5" class="Imagen_Articulo">
    <div id="p-cont5">
        <h4>Parásitos</h4>
        <h3 class="Titulo_Articulo">El gusano redondo: cachorros y<br> niños compartiendo un mismo<br> riesgo</h3> 
        <p>Qué bonita es la maternidad!<br>Cachorros y niños disfrutando de una<br> madre que les quiere y les protege.<br>Un amor desinteresado que los alimenta<br> y les da cobijo. En esos primeros<br> días de su...</p> 
      </div>
  </div>
</router-link>  
<router-link to="/articulo_6" class="articulo_router">
  <div id="cont-art-6">
      <img id="foto-art-6" src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/201807/770_1532703566blog_post_olores_no_soporta_1.jpg" alt="Articulo6" class="Imagen_Articulo">
    <div id="p-cont6">
        <h4>Curiosidades</h4>
        <h3 class="Titulo_Articulo">Olores que tu perro no soporta</h3> 
        <p>¿Sabías que los perros tienen unas 40<br> veces más desarrollado el sentido del<br> olfato que nosotros? Por eso debemos<br> tener un cuidado especial con los olores<br> en nuestro entorno...</p> 
      </div>
  </div>
</router-link> 
</div>

<footer>
  <p id="p-footer">ESTE SERVICIO ESTÁ A TU DISPOSICIÓN CON EL OBJETIVO DE PROTEGER A <br> TU MASCOTA Y A TU FAMILIA</p>
  <img id="icono-footer" src="../assets/Images/icono-footer.png" alt="icono-footer" />
</footer>
    
  </template>