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
      <h1>INTEGRACIONES</h1>
    </div>
    <div class="container">
      <b><h2>Apis Sales</h2></b>
      <div class="group">
        <a href="/#/Integrations/unenployementIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Grupo 07 - Desempleados
            </p>
          </div>
        </a> 
        <a href="/#/Integrations/sanityIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Grupo 10 - Sanidad
            </p>
          </div>
        </a>          
        <a href="/#/Integrations/expensesIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Externa - Gasto medio
            </p>
          </div>
        </a>  
        <a href="/#/Integrations/rentIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Externa - Renta media mixta
            </p>
          </div>
        </a>  
      </div>
    </div>
    <div class="container">
      <b><h2>Apis Evictions</h2></b>
      <div class="group">
        <a href="/#/Integrations/rentalsIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Grupo 07 - Alquileres
            </p>
          </div>
        </a>
        <a href="/#/Integrations/culturaBASEIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Grupo 26 - CulturaBASE
            </p>
          </div>
        </a>         
      </div>
    </div>
    <div class="container">
      <b><h2>Apis Rentas</h2></b>
      <div class="group">
        <a href="/#/Integrations/buySellIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Grupo 07  Compraventa
            </p>
          </div>
        </a>
        <a href="/#/Integrations/cutsIntegrationGraph">
          <div class="article cambioNegro">
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Imagen GitHub">
            <p>
              Grupo 09 <br>Notas de Corte
            </p>
          </div>
        </a>      
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
  