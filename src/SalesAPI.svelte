<script>
    import {
        Nav,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        NavItem,
        NavLink,
        Button,
        Table,
        UncontrolledAlert,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
        Pagination,
    PaginationItem,
    PaginationLink
    } from "sveltestrap";
    import { onMount } from "svelte";
    //Load
    let open1 = false;
    const toggle1 = () => (open1 = !open1);
    const toggle1P = () => {
        open1 = !open1;
        loadData();
    };
    //Delete
    let open2 = false;
    const toggle2 = () => (open2 = !open2);
    const toggle2P = () => {
        open2 = !open2;
        deleteData();
    };

    //Alerts
    let visible = true;

    let salesData = [];
    let newSales = {
        location: "",
        year: "",
        total: "",
        protectedhousing: "",
        new: "",
        secondhand: "",
    };
    let error = null;
    let alertError = "";
    let alertOk = "";
    //Pagination
    let current_offset = 0;
    let limit = 10;
    let current_page = 1;
    let last_page = 1;
    let total = 0;

    async function insertData() {
        console.log("Inserting data: " + JSON.stringify(newSales));

        const res = await fetch("api/v1/sales/", {
            method: "POST",
            body: JSON.stringify(newSales),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (res) {
            if (res.ok) {
                console.log("OK");
                getData();
                console.log(
                    `${newSales.location} ${newSales.year} has been inserted`
                );
            } else {
                if (res.status == 409) {
                    console.log(
                        `${newSales.location} ${newSales.year} ya se encuentra cargado`
                    );
                } else if (res.status == 500) {
                    console.log(`Database error`);
                } else {
                    console.log(`All fields must be filled out correctly`);
                }
            }
        });
        resetInputs(2);
    }
    async function loadData() {
        console.log("Loading data...");
        const res = await fetch("api/v1/sales/loadInitialData").then(function (
            res
        ) {
            if (res.ok) {
                console.log("Ok");
                getData();
                error = 0;
            } else if (res.status == 409) {
                error = 409;
                console.log("Conflict");
            } else {
                error = 404;
                console.log("Error");
            }
            getNumData();
        });
    }

    async function getData() {
        console.log("Fetching data...");
        const res = await fetch("api/v1/sales?limit="+limit+"&offset="+current_offset);
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            salesData = json;
            //ordenar tabla
            salesData.sort((a, b) => new Date(a.year) > new Date(b.year));
            salesData.sort(
                (a, b) => new String(a.location) > new String(b.location)
            );
            console.log(`We have received ${salesData.length} resources.`);
        } else {
            console.log("Error");
        }
        getNumData();
    }


    async function getNumData() {
    const res = await fetch("api/v1/sales");
    if (res.ok) {
      const json = await res.json();
      total = json.length;
      console.log("Number of stats : " + total);
      changePage(current_page, current_offset);
    } else {
      alertError = "No se han encontrado datos.";
    }
  }
   //Calcula el rango entre dos valores
  function range(size, startAt = 0) {
    return [...Array(size).keys()].map((i) => i + startAt);
  }
  function changePage(page, offset) {
    console.log("------Change page------");
    console.log("Params page: " + page + " offset: " + offset);
    last_page = Math.ceil(total / 10);
    console.log("new last page: " + last_page);
    if (page !== current_page) {
      current_offset = offset;
      current_page = page;
      console.log("page: " + page);
      console.log("current_offset: " + current_offset);
      console.log("current_page: " + current_page);
      getData();
    }
    console.log("---------Exit change page-------");
  }
    async function deleteData() {
        console.log("Deleting data...");
        const res = await fetch("api/v1/sales/", {
            method: "DELETE",
        }).then(function (res) {
            if (res.ok) {
                console.log("OK");
                salesData = [];
                console.log("llego aqui");
                getNumData();
                error = 0;
            } else if ((res.status = 404)) {
                error = 404;
                console.log("Error: Data not found");
            } else {
                error = 1000;
                console.log("Error");
            }
        });
        
    }
    async function deleteResource(location, year) {
        console.log(`Deleting data`);
        const res = await fetch("/api/v1/sales/" + location + "/" + year, {
            method: "DELETE",
        }).then(function (res) {
            if (res.ok) {
                console.log("OK");
                if (salesData.length == 1) {
                    salesData = [];
                    currentPage = 1;
                }
                console.log(`Resource has been deleted`);
                getData();
                getNumData();
            } else {
                if (res.status == 404) {
                    console.log = `Resource not found`;
                } else if (res.status == 500) {
                    console.log(`Database error`);
                }
            }
        });
    }
    onMount(getData);
    getNumData();
</script>

<main>
    <div class="container">
        <h2>Ventas</h2>
    </div>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/"><Button color="primary">Volver</Button></a>
            </NavItem>
            <NavItem>
                <Button color="success" on:click={toggle1}
                    >Cargar datos inciales</Button
                >
                <Modal isOpen={open1} {toggle1}>
                    <ModalHeader {toggle1}>
                        <p style="color:black">
                            <b>¿Cargar los datos iniciales?</b>
                        </p></ModalHeader
                    >
                    <ModalBody>
                        <p style="color:black">
                            <b
                                >Esta acción cargará los datos siempre y cuando
                                no existan previamente.</b
                            >
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" on:click={toggle1P}
                            >Cargar</Button
                        >
                        <Button color="secondary" on:click={toggle1}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </NavItem>
            <NavItem>
                {#if salesData.length == 0}
                    <Button color="danger" on:click={toggle2}
                    >Borrar todos los datos</Button>
                  <!--  <NavLink disabled href="#" on:click={toggle2}
                        >Borrar todos los datos</NavLink
                    >-->
                {:else}
                <Button color="danger" on:click={toggle2}
                >Borrar todos los datos</Button>
                    <!--<NavLink href="#" on:click={toggle2}
                        >Borrar todos los datos</NavLink
                    >-->
                    <Modal isOpen={open2} {toggle2}>
                        <ModalHeader {toggle2}
                            >¿Borrar todos los datos?</ModalHeader
                        >
                        <ModalBody>Esta acción no se puede deshacer.</ModalBody>
                        <ModalFooter>
                            <Button color="danger" on:click={toggle2P}
                                >Borrar</Button
                            >
                            <Button color="secondary" on:click={toggle2}
                                >Cancelar</Button
                            >
                        </ModalFooter>
                    </Modal>
                {/if}
            </NavItem>
        </Nav>

        <!-- Alerts -->
        {#if error == 0}
            <UncontrolledAlert color="success">
                Operación realizada correctamente.
            </UncontrolledAlert>
            
        {/if}

        {#if error == 409}
            <UncontrolledAlert color="warning">
                Los datos ya se encuentran cargados.
            </UncontrolledAlert>
        {:else if error == 404}
            <UncontrolledAlert color="danger">
                No se encuentra en la base de datos.
            </UncontrolledAlert>
        {:else if error == 1000}
            <UncontrolledAlert color="danger"
                >Error desconocido.</UncontrolledAlert
            >
        {/if}
        <!-- Table -->
        <table responsive="true" bordered="true">
            <thead>
                <tr>
                    <th>Localizacion</th>
                    <th>Año</th>
                    <th>Total</th>
                    <th>Viviendas protegidas</th>
                    <th>Nuevas</th>
                    <th>Segunda mano</th>
                </tr>
            </thead>
            <tbody>
                <tr class="insertadatos">
                    <td
                        ><input
                            type="text"
                            placeholder="Localizacion"
                            bind:value={newSales.location}
                        /></td
                    >
                    <td
                        ><input
                            type="text"
                            placeholder="Año"
                            bind:value={newSales.year}
                        /></td
                    >
                    <td
                        ><input
                            type="text"
                            placeholder="Total"
                            min="0"
                            bind:value={newSales["total"]}
                        /></td
                    >
                    <td
                        ><input
                            type="text"
                            placeholder="Viviendas protegidas"
                            min="0"
                            bind:value={newSales["protectedhousing"]}
                        /></td
                    >
                    <td
                        ><input
                            type="text"
                            placeholder="Nuevas"
                            min="0"
                            bind:value={newSales["new"]}
                        /></td
                    >
                    <td
                        ><input
                            type="text"
                            placeholder="Segunda mano"
                            min="0"
                            bind:value={newSales["secondhand"]}
                        /></td
                    >
                    <td
                        ><Button color="primary" on:click={insertData}
                            >Insertar</Button
                        ></td
                    >
                </tr>
                {#if salesData.length != 0}
                    {#each salesData as data}
                        <tr>
                            <td>{data.location}</td>
                            <td>{data.year}</td>
                            <td>{data["total"]}</td>
                            <td>{data["protectedhousing"]}</td>
                            <td>{data["new"]}</td>
                            <td>{data["secondhand"]}</td>
                            <!--<td><span class="editar" onclick="transformarEnEditable(this)">Editar</span></td>-->
                            <td
                                ><a href="#/sales/{data.location}/{data.year}"
                                    ><Button color="primary">Editar</Button></a
                                ></td
                            >
                            <td
                                ><Button
                                    color="danger"
                                    on:click={deleteResource(
                                        data.location,
                                        data.year
                                    )}>Borrar</Button
                                ></td
                            >
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
        <div id="contenedorForm" />
    </div>
    <Pagination ariaLabel="Web pagination">
        <PaginationItem class={current_page == 1 ? "disabled" : ""}>
          <PaginationLink
            previous
            href="#/sales"
            on:click={() => changePage(current_page - 1, current_offset - 10)}
          />
        </PaginationItem>
        {#each range(last_page, 1) as page}
          <PaginationItem class={current_page == page ? "active" : ""}>
            <PaginationLink
              previous
              href="#/sales"
              on:click={() => changePage(page, (page - 1) * 10)}
              >{page}</PaginationLink
            >
          </PaginationItem>
        {/each}
        <PaginationItem class={current_page == last_page ? "disabled" : ""}>
          <PaginationLink
            next
            href="#/sales"           
            on:click={() => changePage(current_page + 1, current_offset + 10)}
          />
        </PaginationItem>
      </Pagination>
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
    }
    h2 {
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
    main {
        text-align: center;
        margin: 0 auto;
        color: rgb(226, 226, 226);
        background: #e2e2e2;
    }

    .container {
        padding: 45px 0;
        background: #191919;
        width: 100%;
        margin-top: 50px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
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
    /*.repourl {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }*/
    /*.group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }*/

    @media (max-width: 1080px) {
        /*.group {
            display: grid;
            grid-template-columns: 1fr;
        }*/
    }

    table {
        border-radius: 5px;
        background: #191919;
        font-size: 12px;
        margin: 45px 10px;
        width: 0 auto;
        text-align: left;
        border-collapse: collapse;
    }

    th {
        font-size: 16px;
        font-weight: bold;
        padding: 8px;
        border-top: 4px solid #242323;
        border-bottom: 4px solid #242323;
        color: #fdfd96;
    }

    td {
        font-size: larger;
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
