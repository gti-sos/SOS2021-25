<script>
import {
    Button,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
} from "sveltestrap";
</script>

<main>

      <div class="team">
        <h2><b>-Team</b></h2>
        <p><a href="https://github.com/AlbertoTNJ">- José Alberto Trancoso Nieto</a></p>
        <p><a href="https://github.com/ajpalma28">- Antonio Javier Palma Guerrero</a></p>
        <p><a href=" https://github.com/PepeDeSoto">- José María de Soto Oncins</a></p>
      </div>
    
      
      <div class="description">
        <p><b>-Project description:</b>
          <div class="parraf">
              <p>- Venta de pisos: comunidad, año, total de ventas, ventas de viviendas protegidas, ventas de pisos nuevos y ventas de casas de segunda mano</p><br>
              <p>- Ejecuciones hipotecarias: comunidad, año, total de desahucios, desahucios de fincas rústicas, desahucios de viviendas urbanas, desahucios de solares y otros desahucios</p><br>
              <p>- Alquileres de pisos: comunidad, año, precio por metro cuadrado, porcentaje de variación anual de precio, máximo histórico de precio del metro cuadrado, y variación del precio máximo</p><br>
          
          </div>
          <p><b>-Repository:</b> <a href="https://github.com/gti-sos/SOS2021-25">gti-sos/SOS2021-25</a></p>
        <p><b>-URL:</b> <a href="http://sos2021-25.herokuapp.com">http://sos2021-25.herokuapp.com</a></p>
      </div>
      
      
      <div class="api">
        <h3>-APIs:</h3>
        <card class="mb-3">
         <cardHeader>
            <CardTitle><h5>Sales</h5></CardTitle>
         </cardHeader>
         <cardBody>
            <a href="/api/v1/sales"><Button color="primary">Backend</Button></a>
           <a href="/#/sales"><Button color="primary">Frontend</Button></a>
           <a href="https://documenter.getpostman.com/view/14947805/TzJoDg1U"><Button color="primary">Postman Documentation</Button></a>
          </cardBody>
         <CardFooter>
            developed by <a href="https://github.com/AlbertoTNJ">José Alberto Trancoso Nieto</a>
          </CardFooter>
        </card>
        <p>- <a href="https://sos2021-25.herokuapp.com/api/v1/evictions">[https://sos2021-25.herokuapp.com/api/v1/evictions]</a> (developed by <a href="https://github.com/ajpalma28">Antonio Javier Palma Guerrero)</a></p>
        <p>- <a href="https://sos2021-25.herokuapp.com/api/v1/rentals">[https://sos2021-25.herokuapp.com/api/v1/rentals]</a> (developed by <a href="https://github.com/PepeDeSoto">José María de Soto Oncins</a>)</p>
      </div>

      <div class="postman">
        <h3>-Postman:</h3>
        <p>- <a href="https://documenter.getpostman.com/view/14966088/TzJoDKvD">[https://documenter.getpostman.com/view/14966088/TzJoDKvD]</a> (developed by <a href="https://github.com/ajpalma28">Antonio Javier Palma Guerrero)</a></p>
        <p>- <a href="https://documenter.getpostman.com/view/10637326/TzJu9xPa">[https://documenter.getpostman.com/view/10637326/TzJu9xPa]</a> (developed by <a href="https://github.com/PepeDeSoto">José María de Soto Oncins</a>)</p>
      </div>
</main>
