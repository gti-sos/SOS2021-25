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
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEXTIyL////TIB/SHRz229vVJiXuubjTFxXo4ODSGhnpoKDqoqLRAADwvr765eXWMzLrp6f+9/f76+vZRkXzxsb98/P39PT209PdXVzWLy7XOzrp6eno3d3bTk7x7Ozo4+Pgb2/cVlXur67li4rRDQvifn70zc3yxMPomZnhcXHhZWTjh4bm0dHq8vL54N/lkZHWTU3benrkv7/isLDgpqbm09LWPz7hqqrlxsbto6K1ONmcAAAIP0lEQVR4nO2d2WKiSBRAoRAJyiKLYTGMioBbIond7XT+/8cGNCZGKTRJFXCZOg/91AInF2qvuhzfdri6H4A6zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zBA+zLAEY2hq2qbjOEmS2PZ8Plf3dDP2/3yPw0Wyq9l2kjiO09lomjk0qjM0hhvH7oaD/iJdx8vJZOVOA8va+b7ueWIGJ+yRZVn6Gtkv9r9EXHYVz/N0399ZVjB1V5NlHK/TRT/sqrajDekZGpodLtbxxH22fE9E8ttj7Z8LfcD9lJNrvf2t8lvJAhJ135q6k3i2CBPt9qDeZmjai9g9iOVKJES+pb4XRqLnW268sE1ChkaSBiI6RKoGryIO0UVekDrXY3nF0ExiXYma43ZK5hkpepxcCWWZobHpBZHURLkPkBQFvU1ZJPGGRmdhKULdBjcgKNai8w1Dsx9IEPxyBCnoY99VnKGzFOW6H/wLyOLS+Zrh3JKb/f2dg2Rr/hVDFcwL+oEgFysWGtoNL0CLQbJ9q6FjwYtgjmAVfYsFhuYEUhlzijwpKFEvDY2eCPEdzUFi77LuvzR0AqghzIIYXL6nF4bDVKr7OX+AlF70Hy8MOx7UdzQH6Rftt3NDYxbV/ZQ/Ipqdf4nnhiboEGZB9M6L03PDUKn7GX+IEl4xnMItSA/I03JDE/ZXmBNppYYD6C9pZjgoNVxBf0mz13RVZmgAL0lzkGeUGCZCCwyFpMRwAbPb9BlhUWK4bIXhEm9oTFthODWwhhugnfvPCNYGazj34Rc0WVHjz7GGgxZUFnl1McAapm0QzBRTrGEMv0WTI8c4wyHYQbbPyJMhxlBzW2LoahhD57kNlUVeIToYQ7sV1WFeIdoYw24rqsO8QuxiDEPS1WFNPRXkhRjDgUj2TqLF1TMLKQ4whj2yn6HgdQfPUR3Fs9DDGKZkn0YQN7yzsGpwlNNiQ2NNdsZCEDs8f++kelR1ES2tjULDYUzBMHN8fBEqHqOU4mGhobmkYpg5/l0pUZVFjrQ0Cw01ws3Sd0Oef9q6qMJiVZ5ohYYbwoOlJ4b80+jXyqvMUV5tCg07hBvep4b8/dPD74lY0RoP2e0UGjqEx6E+GfL396M/v12pEsdPTe9Tw4CmYeY4Gj3+rqQJIATFhgnhrsW5Ic//Mx7/6e3oL3gUrARjSPYNujTk78fj0Z8U0XZEGEObcOepwDAL49346eEF0V03h3y7PsMsjA/jp78vukzREWc416swzMN4NxptX3x6cUT6yZjwqSHhDjDOMAtj5nj368Wj1ZRDXrGhWpUhf5+FcTx6+DUR6DgiTy02JLxiD294CGPu6EY01pghsX7D/dd4Nx7f/Wsp5JsAzTDk7+8e8jiOBzpxR6whV6nhIYxZ9ThOdzLZbgfiMIakxxKvGe6/xtzxMbVkonFExYZdwvXTdcO3MGbV49/Ukgg6CidDwjUbvoXxbjT+m3rkRqyaZHgMY1bkbF84UtVjswwPheq+6thOJDKjcg0zPIYxcxxtpwqJJgDOkHC1dLvh8WvMvsenLYmtAnLTYvgexuxNfSQx4te8GB7CmDVUt2TGx5sYw73j9oXQHEcjY8jzSUysU9zIGHbWBDv9DYyhOSM6qNG4GJqkBxgbVuObrx7pHmKjDLWQQi+/QYZa6EoURmowhtX3gM3BiqMyGYXpAVc+ihGuKE0oYkcxqh2JUl068eMaMtaWuBRPTanf0HDoLs7AGlY0qj/sxBHdxSe4Uf1qZmYMZ+ZRnyHFzMxUMruWpDv6M/m42bUKZkidNdFhURy1zQHnHYhKVg3hDJMdVcPhorJFiriVClRXm5h94h2IkjtjDCmuGKLSgSi5M2bFELVVX1rXJTLOe/udMau+KK3cM0Na0/VYcCv3qKy+NMKJV/mpU7jVl+RX0G54deXVcGwYbgUt8VXQ+mAi1HJqGG4VNOmV7Byn1HTKBm4lO+ndCPWB241AekdJfeB2lJDeFVQf2F1Bg7qfjBi4nV3Ed+fVBH53Xvt3WLZ/l2xrdjo/43Y6t3+3evtPHGj/qRH/g5M/+q2oEJHXxxqqragQka9iDTutqBDLTlFq/0lY7T/N7H9wIp3dCkO7xHDYguoCecMSQ74FLVPZ5csMX1twBm35Ca1aCwzLT9nlAR85f0AO+HLDAfQgKoMrhhrw0hR52hVDYw07iNH62qnzvNPI/Fy3gtBF+ofL7A8zyLMX0ux69gewWWZyijLNFGRhWQDOwrK4JQsLr4E9mF1enRekxYZ8soP5ngq7pMCmMKOVCvJodnS6j+SKIR8q8BSRUiiIyyynisDCiARRLVbBZgd0RUgfoyC6X8wOmO9FsmgekkMUQbbSL2d4zHPIznaVn+n4HYRoN0vwmUjxhlkDzkmDag5Y+z5IkoLUKUv0XGaYZ5NVYz9qbLpHQYr8WC3NJHvNMJc057GvKJLcqD4HQrKkKP56bl5NeXzVcI/Wnbk+hw5ZxYlk3/6eFjo+Aue7M5VU1uoPzfnreuk+WzvdEzNbWX5Ph04w7/jR5CT3+NudkOh5/s4K3OX6dV7Q/iRgeMDcJN3wNZ3lueNX7nQaBHnueF/XD8njuWPW7PdHO3KZLf6D4w8Of6J9+ng9Tx+fCQVTd59Afj1bvIZqsqGYPf4CY2hqHcdJ7Lna7XbDnMGB/pHebbz///7h9/trZddU53biOBvNHN6eLJ6kIRCYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXyYIXzab/gfdHTigHvTgOYAAAAASUVORK5CYII=" alt="Imagen GitHub">
          <p>
            José Alberto Trancoso Nieto -Sales (Ventas)
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
