<template>
<header>
    <router-link to="/" class="logo-link">
        <img alt="Blog logo" class="Blog_Logo" src="@/assets/Images/Blog_Logo.png">
    </router-link>
<div id="Barra_Princ">
    <h1 id="Titulo_Princ">Blog De Mascotas</h1>
    <nav>
        <router-link to="/articulos">Articulos</router-link> |
        <router-link to="/contacto">Contacto</router-link>
    </nav>
</div>
</header>
</template>

<script>
export default {
    name: 'HeaderInicio',
};
</script>

<style scoped>
header{
    background: linear-gradient(to right,#44ddd0, #2c849d, #0c8768);
    color: white;
    height: 150px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;   
}

nav {
    padding: 20px;
    font-size: 20px;
    
}

nav a {
    font-weight: bold;
    color: #fcfefe;
}

nav a.router-link-exact-active {
    color: #f1f2f2;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.Blog_Logo{
    width: 200px;
    height: 200px;
    margin-left: 100px;
}

#Barra_Princ{
    display: flex;
    flex-direction: column;
    margin-left: 430px;
    text-align: center;
}

#Titulo_Princ{
    font-family:'Rock Salta', cursive;
    font-size: 40px;
}
</style>