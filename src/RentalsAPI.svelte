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
        PaginationLink,
    } from "sveltestrap";
    import { onMount } from "svelte";
import { get } from "svelte/store";
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

    let rentalsData = [];
    let newRentals = {
        location: "",
        year: "",
        pricesquaremeter: "",
        annualvariation: "",
        alltimehigh: "",
        maxvariation: "",
    };
    let visitado = "no";
    let alertError = "";
    let alertOk = "";
    //Pagination
    let current_offset = 0;
    let limit = 10;
    let current_page = 1;
    let last_page = 1;
    let total = 0;
    let fullQuery = "";

    async function insertData() {
        console.log("Inserting data: " + JSON.stringify(newRentals));

        const res = await fetch("api/v1/rentals/", {
            method: "POST",
            body: JSON.stringify(newRentals),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function (res) {
            if (res.ok) {
                console.log("OK");
                getData();
                alertError = "";
                alertOk = `${newRentals.location} ${newRentals.year} ha sido insertado correctamente`;
            } else {
                if (res.status == 409) {
                    alertOk = "";
                    alertError = `${newRentals.location} ${newRentals.year} ya se encuentra cargado`;
                } else if (res.status == 500) {
                    alertOk = "";
                    alertError = "Error al acceder a la base de datos";
                } else {
                    alertOk = "";
                    alertError = "Todas las casillas deben ser rellenas correctamente";
                }
            }
            console.log("Error: "+ alertError);
        });
        resetInputs(2);
    }
    async function loadData() {
        console.log("Loading data...");
        const res = await fetch("api/v1/rentals/loadInitialData").then(function (
            res
        ) {
            if (res.ok) {
                console.log("Ok");
                getData();
                //error = 0;
                alertError = "";
                alertOk ="Datos cargados correctamente";
            /*} else if (res.status == 409) {
                error = 409;
                console.log("Conflict");*/
            } else if (res.status == 409){
                alertOk = "";
                alertError = "Hay un conflicto al cargar los datos";        
            } else {
                /*error = 404;
                console.log("Error");*/
                alertOk = "";
                alertError = "Error general";
            }
            getNumData();
        });
    }

    async function getData() {
        console.log("Fetching data...");
        const res = await fetch("api/v1/rentals?limit=" + limit + "&offset=" + current_offset);
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            rentalsData = json;
            //ordenar tabla
            rentalsData.sort((a, b) => new Date(a.year) > new Date(b.year));
            rentalsData.sort(
                (a, b) => new String(a.location) > new String(b.location)
            );
            console.log(`We have received ${rentalsData.length} resources.`);
        } else {
            console.log("Error");
        }
        getNumData();
    }
    async function getDataSearch(query) {
        console.log("Fetching data...");
        const res = await fetch("api/v1/rentals?"+query+"&limit=" + limit + "&offset=" + current_offset);
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            rentalsData = json;
            //ordenar tabla
            rentalsData.sort((a, b) => new Date(a.year) > new Date(b.year));
            rentalsData.sort(
                (a, b) => new String(a.location) > new String(b.location)
            );
            console.log(`We have received ${rentalsData.length} resources.`);
        } else {
            console.log("Error");
        }
        getNumDataSearch(query);
    }

    async function getNumData() {
        const res = await fetch("api/v1/rentals");
        if (res.ok) {
            const json = await res.json();
            total = json.length;
            console.log("Number of stats : " + total);
            changePage(current_page, current_offset);
        } else if (res.status == 404) {
            total = 0;
            changePage(current_page, current_offset);
        } else {
            alertError = "No se han encontrado datos.";
        }
    }
    async function getNumDataSearch(query) {
        console.log("LA QUERY: "+query+ "LIMITE: "+limit+"OFFSET: ");
        const res = await fetch("api/v1/rentals"+query+"&limit="+limit);
        if (res.ok) {
            const json = await res.json();
            total = json.length;
            console.log("Number of stats : " + total);
            
            changePageSearch(current_page, current_offset,query,total);
        } else if (res.status == 404) {
            total = 0;
            changePageSearch(current_page, current_offset,query,total);
        } else {
            alertError = "No se han encontrado datos.";
        }
    }
    function changePageSearch(page, offset, query, total) {
        console.log("------Change page------");
        console.log("Params page: " + page + " offset: " + offset);
        last_page = Math.ceil(total / 10);
        console.log("new last page: " + last_page);
        console.log(page,current_page, offset,query, total);
        if (page !== current_page) {
            current_offset = offset;
            current_page = page;
            console.log("page: " + page);
            console.log("current_offset: " + current_offset);
            console.log("current_page: " + current_page);
            console.log("la query es: "+query);
            getDataSearch(query);
        }
        console.log("---------Exit change page-------");
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
        const res = await fetch("api/v1/rentals/", {
            method: "DELETE",
        }).then(function (res) {
            if (res.ok) {
                alertError = "";
                alertOk = "OK";
                rentalsData = [];
                getNumData();
               // error = 0;
            } else if ((res.status = 404)) {
                //error = 404;
                alertError = "Error: Data not found";
            } else {
                //error = 1000;
                alertError = "Error";
            }
            console.log("Error: " + alertError);
        });
    }
    async function searchData() {
        visitado="si";
        console.log("Searching data...");
        var campos = new Map(
            Object.entries(newRentals).filter((o) => {
                return o[1] != "";
            })
        );
        let querySymbol = "?";
        for (var [clave, valor] of campos.entries()) {
            querySymbol += clave + "=" + valor + "&";
        }
        fullQuery = querySymbol.slice(0, -1);
        if (fullQuery != "") {
            const res = await fetch("api/v1/rentals" + fullQuery);
            console.log(fullQuery);
            if (res.ok) {
                console.log("OK");
                const json = await res.json();
                rentalsData = json;
                alertError = "";
                alertOk = "Búsqueda realizada con éxito";
            } else {
                if (res.status == 404) {
                    alertOk = "";
                    alertError = "No se encuentra el dato solicitado: "+ valor;
                } else if (res.status == 500) {
                    alertOk = "";
                    alertError = "No se han podido acceder a la base de datos";
                }
                alertOk = "";
                console.log("Error: " + alertError);
            }
        } else {
            alertError = "";
            alertOk = "Búsqueda realizada con éxito";
            getDataSearch();
        }
        
        getNumDataSearch(fullQuery);
    }

    async function deleteResource(location, year) {
        console.log(`Deleting data`);
        const res = await fetch("/api/v1/rentals/" + location + "/" + year, {
            method: "DELETE",
        }).then(function (res) {
            if (res.ok) {
                alertError = "";
                alertOk = location + " y año " + year +" ha sido borrado correctamente";
                if (rentalsData.length == 1) {
                    rentalsData = [];
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
            console.log("Error: "+alertError);
        });
    }
    onMount(getData);
    //getNumData();
</script>

<main>
    <div class="container">
        <h2>Alquileres</h2>
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
                {#if rentalsData.length == 0}
                    <Button color="danger" on:click={toggle2}
                        >Borrar todos los datos</Button
                    >
                    <!--  <NavLink disabled href="#" on:click={toggle2}
                        >Borrar todos los datos</NavLink
                    >-->
                {:else}
                    <Button color="danger" on:click={toggle2}
                        >Borrar todos los datos</Button
                    >
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
        <!--{#if error == 0}
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
        {/if} -->
        {#if alertError}
        <p>{alertError}</p>
        {:else if alertOk}
        <p>{alertOk}</p>
        <!-- Table -->
        {/if}
        {#if rentalsData.length == 0 && visitado=="no"}
            <div class="borrado">
                <p>
                No se han encontrado datos, por favor carga los datos iniciales.</p>
            </div>
        {:else}
        <!--{#if alertError}
            <UncontrolledAlert color="success">
                Operación realizada correctamente.
            </UncontrolledAlert>
        {/if}-->

            <table responsive="true" bordered="true">
                <thead>
                    <tr>
                        <th>Localizacion </th>
                        <th>Año </th>
                        <th>Precio m2 </th>
                        <th>Variacion Anual</th>
                        <th>Mas Alto Historico </th>
                        <th>Maxima Variacion </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="insertadatos">
                        <td
                            ><input
                                type="text"
                                placeholder="Localizacion"
                                bind:value={newRentals.location}
                            /></td
                        >
                        <td
                            ><input
                                type="text"
                                placeholder="Año"
                                bind:value={newRentals.year}
                            /></td
                        >
                        <td
                            ><input
                                type="text"
                                placeholder="Precio m2"
                                min="0"
                                bind:value={newRentals["pricesquaremeter"]}
                            /></td
                        >
                        <td
                            ><input
                                type="text"
                                placeholder="Viviendas protegidas"
                                min="0"
                                bind:value={newRentals["annualvariation"]}
                            /></td
                        >
                        <td
                            ><input
                                type="text"
                                placeholder="Nuevas"
                                min="0"
                                bind:value={newRentals["alltimehigh"]}
                            /></td
                        >
                        <td
                            ><input
                                type="text"
                                placeholder="Segunda mano"
                                min="0"
                                bind:value={newRentals["maxvariation"]}
                            /></td
                        >
                        <td
                            ><Button color="primary" on:click={insertData}
                                >Insertar</Button
                            ></td
                        >
                        <td
                            ><Button color="primary" on:click={searchData}
                                >Buscar</Button
                            ></td
                        >
                    </tr>
                    {#if rentalsData.length != 0}
                        {#each rentalsData as data}
                            <tr>
                                <td>{data.location}</td>
                                <td>{data.year}</td>
                                <td>{data["pricesquaremeter"]}</td>
                                <td>{data["annualvariation"]}</td>
                                <td>{data["alltimehigh"]}</td>
                                <td>{data["maxvariation"]}</td>
                                <!--<td><span class="editar" onclick="transformarEnEditable(this)">Editar</span></td>-->
                                <td
                                    ><a
                                        href="#/rentals/{data.location}/{data.year}"
                                        ><Button color="primary">Editar</Button
                                        ></a
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
        {/if}
        <div id="contenedorForm" />
    </div>
    <Pagination ariaLabel="Web pagination">
        <PaginationItem class={current_page == 1 ? "disabled" : ""}>
            <PaginationLink
                previous
                href="#/rentals"
                on:click={() =>
                    changePage(current_page - 1, current_offset - 10)}
            />
        </PaginationItem>
        {#each range(last_page, 1) as page}
            <PaginationItem class={current_page == page ? "active" : ""}>
                <PaginationLink
                    previous
                    href="#/rentals"
                    on:click={() => changePage(page, (page - 1) * 10)}
                    >{page}</PaginationLink
                >
            </PaginationItem>
        {/each}
        <PaginationItem class={current_page == last_page ? "disabled" : ""}>
            <PaginationLink
                next
                href="#/rentals"
                on:click={() =>
                    changePage(current_page + 1, current_offset + 10)}
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
