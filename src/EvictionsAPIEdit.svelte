<script>
    import { onMount } from "svelte";
    import { pop } from "svelte-spa-router";
    import { Table, Button, Nav, NavItem, NavLink } from "sveltestrap";
    const BASE_CONTACT_API_PATH = "/api/v1";
    export let params = {};
    let stat = {};
    let updateLocation = "XXXX";
    let updateYear = 1999;
    let updateTotal = 999;
    let updateRustic = 999;
    let updateHousehold = 999;
    let updateBuildinglot = 999;
    let updateOther = 999;
    let errorMsg = "";
    let okMsg = "";
    
    async function getData() {
      console.log("Fetching stat..." + params.location + " " + params.year);
      const res = await fetch(
        BASE_CONTACT_API_PATH +"/evictions/" + params.location +"/" + params.year
      );
      if (res.ok) {
        console.log("Ok:");
        const json = await res.json();
        stat = json;
        updateLocation = stat.location;
        updateYear = stat.year;
        updateTotal = stat["total"];
        updateRustic = stat["rustic"];
        updateHousehold = stat["household"];
        updateBuildinglot = stat["buildinglot"];
        updateOther = stat["other"];
        console.log("Received stat.");
        
      } else {
        if(res.status==404){
            errorMsg = `No se encuentra el dato solicitado: ${params.location} ${params.year}`;
          }else if(res.status ==500){
            errorMsg = "No se han podido acceder a la base de datos";
          }        
          okMsg = "";
          console.log("ERROR!" + errorMsg);
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
          "/evictions/" +
          params.location +
          "/" +
          params.year,
        {
          method: "PUT",
          body: JSON.stringify({
            "location": params.location,
            "year": params.year,
            "total": updateTotal,
            "rustic": updateRustic,
            "household": updateHousehold,
            "buildinglot": updateBuildinglot,
            "other": updateOther
          }),
          headers: {
            "Content-Type": "application/json",
          }
        }
      ).then(function (res) {
        if (res.ok) {
          console.log("OK");
          getData();
          errorMsg = "";
          okMsg = `${params.location} ${params.year} ha sido actualizado correctamente`;
        } else {
           if(res.status ==500){
            errorMsg = "No se han podido acceder a la base de datos";
          }else if(res.status ==404){
            errorMsg = `No se han encontrado el dato solicitado: ${params.location} ${params.year}`;
          }else if(res.status==409){
            errorMsg = "Por favor, revise que los campos numéricos están rellenos con datos numéricos";
          }else if(res.status==400){
            errorMsg = "Por favor, no deje campos vacíos";
          }
          okMsg = "";
          getData();
          console.log("ERROR!" + errorMsg);
        }
      });
    }
    onMount(getData);
  </script>
  
  <main>
    <Nav>
      <NavItem>
        <!--<NavLink href="#/evictions/">Volver</NavLink>-->
        <NavLink on:click="{pop}">Volver</NavLink>
      </NavItem>
    </Nav>
  
    <h2>
      Editar campo <strong>{params.location}</strong>
      <strong>{params.year}</strong>
    </h2>
    <Table bordered>
      <thead>
        <tr>
          <th>Localización</th>
          <th>Año </th>
          <th>Total </th>
          <th>Rústicas </th>
          <th>Viviendas</th>
          <th>Solares</th>
          <th>Otros</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{updateLocation}</td>
          <td>{updateYear}</td>
          <td><input type="text" placeholder="2000" min="0"   bind:value={updateTotal} /></td>
          <td><input type="text" placeholder="1000" min="0"   bind:value={updateRustic} /></td>
          <td><input type="text" placeholder="1000" min="0"   bind:value={updateHousehold} /></td>
          <td><input type="text" placeholder="1000" min="0"   bind:value={updateBuildinglot} /></td>
          <td><input type="text" placeholder="1000" min="0"   bind:value={updateOther} /></td>
          <td>
            <Button outline color="primary" on:click={updateStat}>Actualizar</Button>
          </td>
        </tr>
      </tbody>
    </Table>
    {#if errorMsg}
      <p style="color: red">ERROR: {errorMsg}</p>
    {/if}
    {#if okMsg}
    <p style="color: green">{okMsg}</p>
    {/if}
  
  </main>
  
  <style>
    main{
      text-align: center;
      padding: 1em;
      margin: 0 auto;
    }
  </style>