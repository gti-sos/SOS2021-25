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
  <div class="team container">
    <b><h2>Team</h2></b>
    <div class="group">
      <p>
        <a href="https://github.com/AlbertoTNJ">José Alberto Trancoso Nieto</a>
      </p>
      <p>
        <a href="https://github.com/ajpalma28">Antonio Javier Palma Guerrero</a>
      </p>
      <p>
        <a href=" https://github.com/PepeDeSoto">José María de Soto Oncins</a>
      </p>
    </div>
  </div>

  <div class="description">
    <div class="container">
      <b><h2>Project description</h2></b>
      <div class="parraf">
        <p>
          - Venta de pisos: comunidad, año, total de ventas, ventas de viviendas
          protegidas, ventas de pisos nuevos y ventas de casas de segunda mano
        </p>
        <p>
          - Ejecuciones hipotecarias: comunidad, año, total de desahucios,
          desahucios de fincas rústicas, desahucios de viviendas urbanas,
          desahucios de solares y otros desahucios
        </p>
        <p>
          - Alquileres de pisos: comunidad, año, precio por metro cuadrado,
          porcentaje de variación anual de precio, máximo histórico de precio
          del metro cuadrado, y variación del precio máximo
        </p>
      </div>
    </div>
    <div class="repository container">
      <div class="repourl">
        <div class="article">
          <b><h2>Repository</h2></b>
          <a href="https://github.com/gti-sos/SOS2021-25">gti-sos/SOS2021-25</a>
        </div>
        <div class="article">
          <b><h2>URL</h2></b>
          <a href="http://sos2021-25.herokuapp.com">
            http://sos2021-25.herokuapp.com</a
          >
        </div>
      </div>
    </div>
    <div class="api container">
      <b><h2>API</h2></b>
      <div class="group">
        <div class="article">
          <CardTitle><h5>Sales</h5></CardTitle>
          <a href="/api/v1/sales"><Button color="secondary">Backend</Button></a>
          <a href="/#/sales"><Button color="secondary">Frontend</Button></a><br><br>
          <a href="https://documenter.getpostman.com/view/14947805/TzJoDg1U"
            ><Button color="info">Postman Documentation</Button></a
          >
          <CardFooter>
            Developed by <a href="https://github.com/AlbertoTNJ"
              >José Alberto Trancoso Nieto</a
            >
          </CardFooter>
        </div>
        <div class="article">
          <CardTitle><h5>Evictions</h5></CardTitle>
          <a href="/api/v1/evictions"
            ><Button color="secondary">Backend</Button></a
          >
          <a href="/#/evictions"><Button color="secondary">Frontend</Button></a><br><br>
          <a href="https://documenter.getpostman.com/view/14966088/TzJoDKvD"
            ><Button color="info">Postman Documentation</Button></a
          >
          <CardFooter>
            Developed by <a href="https://github.com/ajpalma28"
              >Antonio Javier Palma Guerrero</a
            >
          </CardFooter>
        </div>
        <div class="article">
          <CardTitle><h5>Rentals</h5></CardTitle>
          <a href="/api/v1/rentals"><Button color="secondary">Backend</Button></a>
          <a href="/#/rentals"><Button color="secondary">Frontend</Button></a><br><br>
          <a href="https://sos2021-25.herokuapp.com/api/v1/rentals"
            ><Button color="info">Postman Documentation</Button></a
          >
          <CardFooter>
            Developed by <a href="https://github.com/PepeDeSoto"
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
    background: #242424;
    border-radius: 5px;
    margin: 3px;
    padding: 5px;
  }
  .parraf {
    padding-left: 5%;
    text-align: left;
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
