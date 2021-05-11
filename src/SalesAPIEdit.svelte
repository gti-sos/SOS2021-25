<script>
    import { onMount } from "svelte";
    import { Table, Button, Nav, NavItem, NavLink } from "sveltestrap";
    const BASE_CONTACT_API_PATH = "/api/v1";
    export let params = {};
    let stat = {};
    let updateLocation = "XXXX";
    let updateYear = 1999;
    let updateTotal = 999;
    let updateProtectedhousing = 999;
    let updateNew = 999;
    let updateSecondhand = 999.9;
    let alertError = "";
    let alertOk = "";
    
    async function getData() {
      console.log("Fetching stat..." + params.location + " " + params.year);
      const res = await fetch(
        BASE_CONTACT_API_PATH +"/sales/" + params.location +"/" + params.year
      );
      if (res.ok) {
        console.log("Ok:");
        const json = await res.json();
        stat = json;
        updateLocation = stat.location;
        updateYear = stat.year;
        updateTotal = stat["total"];
        updateProtectedhousing = stat["protectedhousing"];
        updateNew = stat["new"];
        updateSecondhand = stat["secondhand"];
        console.log("Received stat.");
        
      } else {
        if(res.status==404){
            alertError = "No se encuentra el dato solicitado";
          }else if(res.status ==500){
            alertError = "No se han podido acceder a la base de datos";
          }        
          alertOk = "";
          console.log("ERROR!" + alertError);
      }
    }
    async function updateStat() {
      console.log(
        "Updating stat..." +
          JSON.stringify(params.location) +
          JSON.stringify(params.year)
      );
      const res = await fetch(
        BASE_CONTACT_API_PATH +
          "/sales/" +
          params.location +
          "/" +
          params.year,
        {
          method: "PUT",
          body: JSON.stringify({
            "location": params.location,
            "year": params.year,
            "total": updateTotal,
            "protectedhousing": updateProtectedhousing,
            "new": updateNew,
            "secondhand": updateSecondhand,
          }),
          headers: {
            "Content-Type": "application/json",
          }
        }
      ).then(function (res) {
        if (res.ok) {
          console.log("OK");
          getData();
          alertError = "";
          alertOk = `${params.location} ${params.year} ha sido actualizado correctamente`;
        } else {
           if(res.status ==500){
            alertError = "No se han podido acceder a la base de datos";
          }else if(res.status ==404){
            alertError = "No se han encontrado el dato solicitado";
          }        
          alertOk = "";
          getData();
          console.log("ERROR!" + alertError);
        }
      });
    }
    onMount(getData);
  </script>
  
  <main>
    <div class="container">
      <h2>Editar campo <strong>{params.location}</strong>
        <strong>{params.year}</strong></h2>
    </div>
    <div class="container">
      <Nav>
        <NavItem>
                <a href="#/sales"><Button style="margin: 0 5px 10px 50px;" color="primary">Volver</Button></a>
            </NavItem>
      </Nav>
    
      <h1>
        
      </h1>
      <table>
        <thead>
          <tr>
            <th>Localizacion </th>
            <th>Año </th>
            <th>Total </th>
            <th>Viviendas protegidas </th>
            <th>Nuevas </th>
            <th>Segunda mano </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{updateLocation}</td>
            <td>{updateYear}</td>
            <td><input type="text" placeholder="2000" min="1"   bind:value={updateTotal} /></td>
            <td><input type="text" placeholder="1000" min="1"   bind:value={updateProtectedhousing} /></td>
            <td><input type="text" placeholder="1000" min="1"   bind:value={updateNew} /></td>
            <td><input type="text" placeholder="10.2" min="1.0" bind:value={updateSecondhand} /></td>
            <td>
              <Button outline color="primary" on:click={updateStat}>Actualizar</Button>
            </td>
          </tr>
        </tbody>
      </table>
        {#if alertError}
          <p style="color: red">ERROR: {alertError}</p>
        {/if}
        {#if alertOk}
        <p style="color: green">{alertOk}</p>
        {/if}
    </div>
  </main>
  
  <style>
    * {
        margin: 0;
        padding: 0;
    }
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        color: rgb(226, 226, 226);
        background: #e2e2e2;
        padding-left: auto;
        padding-right: auto;
        margin: 0 auto;
        
    }
    h2 {
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .container {
        min-width: 100%;
        padding: 60px 0;
        background: #191919;
        margin-top: 50px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        text-align: center;
    }
    h2 {
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

    @media (max-width: 1290px) {
        input{
            width: 100px;
        }
    }

    table {
        border-radius: 5px;
        background: #191919;
        font-size: 12px;
        width: 0 auto;
        text-align: left;
        border-collapse: collapse;
        padding: 10px;
        margin: 0 auto;
        text-align: left;
    }

    th {
        font-size: 18px;
        font-weight: bold;
        padding: 8px;
        border-top: 4px solid #242323;
        border-bottom: 4px solid #242323;
        color: #fdfd96;
    }

    td {
        font-size: 18px;
        padding: 8px;
        border-bottom: 4px solid #242323;
        color: #e2e2e2;
        border-top: 1px solid transparent;
        transition: 0.2s ease-in-out;
    }

    tr:hover td {
        background: #242323;
        color: #fdfd96;
    }
</style>
