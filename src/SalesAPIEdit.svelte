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
    <Nav>
      <NavItem>
        <NavLink href="#/sales/">Volver</NavLink>
      </NavItem>
    </Nav>
  
    <h2>
      Editar campo <strong>{params.location}</strong>
      <strong>{params.year}</strong>
    </h2>
    <Table bordered>
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
    </Table>
    {#if alertError}
      <p style="color: red">ERROR: {alertError}</p>
    {/if}
    {#if alertOk}
    <p style="color: green">{alertOk}</p>
    {/if}
  
  </main>
  
  <style>
    main{
      text-align: center;
      padding: 1em;
      margin: 0 auto;
    }
  </style>