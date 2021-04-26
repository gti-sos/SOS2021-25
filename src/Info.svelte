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

<main>
      <h1><Card>SOS2021-25</Card></h1>
      <div class="team">
      <Card class="mb-3">
        <CardHeader>
          <b><h2>Team</h2></b>
        </CardHeader>
        <CardBody>
          <p><a href="https://github.com/AlbertoTNJ">- José Alberto Trancoso Nieto</a></p>
          <p><a href="https://github.com/ajpalma28">- Antonio Javier Palma Guerrero</a></p>
          <p><a href=" https://github.com/PepeDeSoto">- José María de Soto Oncins</a></p>
        </CardBody>
      </Card>
    </div>
      
      <div class="description">
        <Card class="mb-3">
          <CardHeader>
            <b><h2>Project description</h2></b>
          </CardHeader>
          <CardBody>
            <div class="parraf">
              <p>- Venta de pisos: comunidad, año, total de ventas, ventas de viviendas protegidas, ventas de pisos nuevos y ventas de casas de segunda mano</p>
              <p>- Ejecuciones hipotecarias: comunidad, año, total de desahucios, desahucios de fincas rústicas, desahucios de viviendas urbanas, desahucios de solares y otros desahucios</p>
              <p>- Alquileres de pisos: comunidad, año, precio por metro cuadrado, porcentaje de variación anual de precio, máximo histórico de precio del metro cuadrado, y variación del precio máximo</p>
          </CardBody>
        </Card>
        <div class="repository">
          <Card class="mb-3">
            <CardHeader>
              <b><h2>Repository</h2></b>
            </CardHeader>
            <CardBody>
             <a href="https://github.com/gti-sos/SOS2021-25">gti-sos/SOS2021-25</a>
            </CardBody>
          </Card>
        </div>
        <div class="url">
          <Card class="mb-3">
            <CardHeader>
              <b><h2>URL</h2></b>
            </CardHeader>
            <CardBody>
             <a href="http://sos2021-25.herokuapp.com">http://sos2021-25.herokuapp.com</a>
            </CardBody>
          </Card>
        </div>
  
      
      <div class="api">
        <Card class="mb-3">
          <CardHeader>
            <b><h2>API</h2></b>
          </CardHeader>
         <CardHeader>
            <CardTitle><h5>Sales</h5></CardTitle>
         </CardHeader>
         <CardBody>
           <CardSubtitle></CardSubtitle>
           <CardText></CardText>
           <a href="/api/v1/sales"><Button color="success">Backend</Button></a>
           <a href="/#/sales"><Button color="danger">Frontend</Button></a>
           <a href="https://documenter.getpostman.com/view/14947805/TzJoDg1U"><Button color="info">Postman Documentation</Button></a>
          </CardBody>
         <CardFooter>
            developed by <a href="https://github.com/AlbertoTNJ">José Alberto Trancoso Nieto</a>
          </CardFooter>
        </Card>
        <Card class="mb-3">
          <CardHeader>
            <CardTitle><h5>Evictions</h5></CardTitle>
          </CardHeader>
          <CardBody>
            <a href="/api/v1/evictions"><Button color="success">Backend</Button></a>
            <a href="/#/evictions"><Button color="danger">Frontend</Button></a>
            <a href="https://documenter.getpostman.com/view/14966088/TzJoDKvD"><Button color="info">Postman Documentation</Button></a>
          </CardBody>
          <CardFooter>
            Developed by <a href="https://github.com/ajpalma28">Antonio Javier Palma Guerrero</a>
          </CardFooter>
        </Card>
        <Card class="mb-3">
          <CardHeader>
            <CardTitle><h5>Rentals</h5></CardTitle>
          </CardHeader>
          <CardBody>
            <a href="/api/v1/rentals"><Button color="success">Backend</Button></a>
            <a href="/#/rentals"><Button color="danger">Frontend</Button></a>
            <a href="https://sos2021-25.herokuapp.com/api/v1/rentals"><Button color="info">Postman Documentation</Button></a>
          </CardBody>
          <CardFooter>
            Developed by <a href="https://github.com/PepeDeSoto">José María de Soto Oncins</a>
          </CardFooter>
        </Card>

</main>
<style>
  main {
    text-align: center;
    padding: 1%;
    padding-left: 15%;
    padding-right: 15%;
    max-width: 240px;
    margin: 0 auto;
  }
  .parraf{
    padding-left: 5%;
    text-align: left;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  b {
    color: #f0840a;
  }
  
  @media (min-width: 320px) {
    main {
      max-width: none;
    }
  }
</style>