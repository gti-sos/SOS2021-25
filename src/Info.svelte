<script lang="ts">
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
  } from "sveltestrap";
</script>

<main class="main">
  <div class="container">
    <h1>SOS2021-25</h1>
  </div>
  <div class="container">
    <b><h2>Equipo</h2></b>
    <div class="group">
      <a href="https://github.com/AlbertoTNJ">
        <div class="article cambioNegro">
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
          <p>
            José Alberto Trancoso Nieto
          </p>
        </div>
      </a>
      <a href="https://github.com/ajpalma28">
        <div class="article cambioNegro">
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
          <p>
            Antonio Javier Palma Guerrero
          </p>
        </div>
      </a>
      <a href=" https://github.com/PepeDeSoto">
        <div class="article cambioNegro">
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
          <p>
            José María de Soto Oncins
          </p>
        </div>
      </a>
        
    </div>
  </div>

  <div class="description">
    <div class="container">
      <b><h2>Descripcion del proyecto</h2></b>
      <div class="parraf">
        <p>
          <b>- Venta de pisos:</b><br>comunidad, año, total de ventas, ventas de viviendas
          protegidas, ventas de pisos nuevos y ventas de casas de segunda mano
        </p>
        <p>
          <b>- Ejecuciones hipotecarias:</b><br>comunidad, año, total de desahucios,
          desahucios de fincas rústicas, desahucios de viviendas urbanas,
          desahucios de solares y otros desahucios
        </p>
        <p>
          <b>- Alquileres de pisos:</b><br>comunidad, año, precio por metro cuadrado,
          porcentaje de variación anual de precio, máximo histórico de precio
          del metro cuadrado, y variación del precio máximo
        </p>
      </div>
    </div>
    <div class="repository container">
      <div class="repourl">
        <a href="https://github.com/gti-sos/SOS2021-25">
          <div class="article cambioNegro">
            <img src="https://img.icons8.com/ios/452/repository.png" alt="Imagen Repositorio">
            <h2>
              Repositorio
            </h2>
          </div>
        </a>
        <a href="http://sos2021-25.herokuapp.com/#/info">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/44/44493.png" alt="Imagen URL">
            <h2><b>URL</b></h2>
          </div>
        </a>
      </div>
    </div>
    <div class="api container">
      <h2><b>API</b></h2>
      <div class="group">
        <div class="article">
          <CardTitle><h5>Ventas</h5></CardTitle>
          <a href="/api/v1/sales"><Button color="secondary">Backend</Button></a>
          <a href="/#/sales"><Button color="secondary">Frontend</Button></a><br><br>
          <a href="https://documenter.getpostman.com/view/14947805/TzJoDg1U"
            ><Button color="info">Pocumentacion Postman</Button></a
          >
          <CardFooter>
            Desarrollado por <a href="https://github.com/AlbertoTNJ"
              >José Alberto Trancoso Nieto</a
            >
          </CardFooter>
        </div>
        <div class="article">
          <CardTitle><h5>Deshaucios</h5></CardTitle>
          <a href="/api/v1/evictions"
            ><Button color="secondary">Backend</Button></a
          >
          <a href="/#/evictions"><Button color="secondary">Frontend</Button></a><br><br>
          <a href="https://documenter.getpostman.com/view/14966088/TzJoDKvD"
            ><Button color="info">Documentacion Postman</Button></a
          >
          <CardFooter>
            Desarrollado por <a href="https://github.com/ajpalma28"
              >Antonio Javier Palma Guerrero</a
            >
          </CardFooter>
        </div>
        <div class="article">
          <CardTitle><h5>Alquileres</h5></CardTitle>
          <a href="/api/v1/rentals"><Button color="secondary">Backend</Button></a>
          <a href="/#/rentals"><Button color="secondary">Frontend</Button></a><br><br>
          <a href="https://documenter.getpostman.com/view/10637326/TzJu9xPa"
            ><Button color="info">Documentacion Postman</Button></a
          >
          <CardFooter>
            Desarrollado por <a href="https://github.com/PepeDeSoto"
              >José María de Soto Oncins</a
            >
          </CardFooter>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1%;
    padding-left: 15%;
    padding-right: 15%;
    margin: 0 auto;
    color: rgb(226, 226, 226);
    background: #e2e2e2;
  }

  .container {
    padding: 45px;
    background: #191919;
    margin-top: 50px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
  .article{
    min-height: 300px;
    background: #242424;
    border-radius: 5px;
    margin: 3px;
    padding: 5px;
    transition: 0.4s ease-in-out;
  }
  .article:hover{
    background-color: #e2e2e2;
  }
  .parraf {
    padding-left: 5%;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  h1 {
    font-size: 4em;
    font-weight: 100;
  }
  h5{
    font-size: 2em;
  }
  h1,
  h2,
  b {
    padding: 5px;
    color: #fdfd96;
  }
  h2:hover{
    color: #191919;
  }

  a {
    text-decoration: none;
    color: #e2e2e2;
    transition: 0.2s ease-in-out;
  }
  a:hover {
    color: #fdfd96;
  }

  p,
  a {
    font-size: 20px;
    line-height: 30px;
    margin: 15px;
  }
  .cambioNegro,.cambioNegro p{
    
    transition: 0.4s ease-in-out;
  }
  .cambioNegro:hover,.cambioNegro:hover p{
    font-size: 24px;
    font-weight: 600;
    color: #191919;
  }
  .cambioNegro img{
    transition: 0.4s ease-in-out;
    transform: scale(.7);
    width: 200px;
  }
  .cambioNegro:hover img{
    transform: scale(1);
  }
  .api h2:hover{
    color: #fdfd96;
  }
  .api .group .article:hover{
    background-color: #242424;
  }
  .repourl{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1080px) {
    .group {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>
