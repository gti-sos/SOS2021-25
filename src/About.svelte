<script lang="ts">
  import {
    Button,
    Nav,
    NavItem,
  } from "sveltestrap";
</script>

<main class="main">
  <div class="container">
    <Nav>
      <NavItem>
          <a href="/#/info"><Button style="margin: 0 5px 10px 50px;" color="primary">Volver</Button></a>
      </NavItem>
  </Nav>
    <h1>SOS2021-25</h1>
  </div>
  <div class="container">
    <b><h2>Videos</h2></b>
    <div class="group">
      <a href="https://youtu.be/GjMcAGP6Sio">
        <div class="article cambioNegro">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt="Imagen GitHub">
          <p>
            José Alberto Trancoso Nieto -Sales (Ventas)
          </p>
        </div>
      </a>
      <a href="https://youtu.be/PpwISCD4irI">
        <div class="article cambioNegro">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt="Imagen GitHub">
          <p>
            Antonio Javier Palma Guerrero
          </p>
        </div>
      </a>
      <a href="https://www.youtube.com/watch?v=r7XZUruVk30">
        <div class="article cambioNegro">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" alt="Imagen GitHub">
          <p>
            José María de Soto Oncins
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
