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
    function resetInputs() {
        console.log("Reseting inputs");
        let resetData = {
            location: "",
            year: "",
            total: "",
            protectedhousing: "",
            new: "",
            secondhand: "",
        };
        newSales = resetData;
    }
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
    let busqueda = "no";

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
                alertError = "";
                alertOk = `${newSales.location} ${newSales.year} ha sido insertado correctamente`;
            } else {
                if (res.status == 409) {
                    alertOk = "";
                    alertError = `${newSales.location} ${newSales.year} es una entrada conflictiva`;
                } else if (res.status == 500) {
                    alertOk = "";
                    alertError = "Error al acceder a la base de datos";
                } else {
                    alertOk = "";
                    alertError =
                        "Todas las casillas deben ser rellenas correctamente";
                }
            }
            console.log("Error: " + alertError);
        });
        resetInputs();
    }
    async function loadData() {
        console.log("Loading data...");
        const res = await fetch("api/v1/sales/loadInitialData").then(function (
            res
        ) {
            if (res.ok) {
                console.log("Ok");
                getData();
                //error = 0;
                alertError = "";
                alertOk = "Datos cargados correctamente";
                /*} else if (res.status == 409) {
                error = 409;
                console.log("Conflict");*/
            } else if (res.status == 409) {
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
        const res = await fetch(
            "api/v1/sales?limit=" + limit + "&offset=" + current_offset
        );
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
    async function getDataSearch(query) {
        console.log("Fetching data...");
        const res = await fetch(
            "api/v1/sales?" +
                query +
                "&limit=" +
                limit +
                "&offset=" +
                current_offset
        );
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            salesData = json;
            //ordenar tabla
            salesData.sort((a, b) => new Date(a.year) > new Date(b.year));
            salesData.sort(
                (a, b) => new String(a.location) > new String(b.location)
            );
            busqueda = "si";
            console.log(`We have received ${salesData.length} resources.`);
        } else {
            console.log("Error");
        }
        getNumDataSearch(query);
    }

    async function getNumData() {
        const res = await fetch("api/v1/sales");
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
    function botonCancelar() {
        var cancelar = document.getElementById("cancelar").innerHTML;
        console.log("Boton cancelar " + cancelar);
        document.getElementById("cancelar").innerHTML =
            '<button style="border-radius:5px; margin-left:18px; padding:10px 8px; background-color: #dc3545; color:#fff; border-color: #dc3545;" onClick="window.location.reload();">Cancelar</button>';
    }
    async function getNumDataSearch(query) {
        botonCancelar();
        console.log("LA QUERY: " + query + "LIMITE: " + limit + " OFFSET: ");
        const res = await fetch("api/v1/sales" + query);
        if (res.ok) {
            const json = await res.json();
            total = json.length;
            console.log("Number of stats : " + total);

            changePageSearch(current_page, current_offset, query, total);
        } else if (res.status == 404) {
            total = 0;
            changePageSearch(current_page, current_offset, query, total);
        } else {
            alertError = "No se han encontrado datos.";
        }
    }
    function changePageSearch(page, offset, query, total) {
        console.log("------Change page------");
        console.log("Params page: " + page + " offset: " + offset);
        last_page = Math.ceil(total / 10);
        console.log("new last page: " + last_page);
        console.log(page, current_page, offset, query, total);
        if (page !== current_page) {
            current_offset = offset;
            current_page = page;
            console.log("page: " + page);
            console.log("current_offset: " + current_offset);
            console.log("current_page: " + current_page);
            console.log("la query es: " + query);
            getDataSearch(query);
            //NUEVO
            var campos = new Map(
                Object.entries(newSales).filter((o) => {
                    return o[1] != "";
                })
            );
            let querySymbol = "?";
            for (var [clave, valor] of campos.entries()) {
                querySymbol += clave + "=" + valor + "&";
            }
            fullQuery = querySymbol.slice(0, -1);
            if (fullQuery != "") {
                searchData();
            } else {
                getData();
                getNumData();
            }
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
            //NUEVO
            var campos = new Map(
                Object.entries(newSales).filter((o) => {
                    return o[1] != "";
                })
            );
            let querySymbol = "?";
            for (var [clave, valor] of campos.entries()) {
                querySymbol += clave + "=" + valor + "&";
            }
            fullQuery = querySymbol.slice(0, -1);
            if (fullQuery != "") {
                searchData();
            } else {
                getData();
                getNumData();
            }
        }

        console.log("---------Exit change page-------");
    }
    async function deleteData() {
        console.log("Deleting data...");
        const res = await fetch("api/v1/sales/", {
            method: "DELETE",
        }).then(function (res) {
            if (res.ok) {
                alertError = "";
                alertOk = "OK";
                salesData = [];
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
        visitado = "si";
        console.log("Searching data...");
        var campos = new Map(
            Object.entries(newSales).filter((o) => {
                return o[1] != "";
            })
        );
        let querySymbol = "?";
        let aux = "";
        for (var [clave, valor] of campos.entries()) {
            querySymbol += clave + "=" + valor + "&";
            if (clave == "year") {
                aux = aux + "Año=" + valor + " ";
            } else if (clave == "location") {
                aux = aux + "Localizacion=" + valor + " ";
            } else if (clave == "total") {
                aux = aux + "Total=" + valor + " ";
            } else if (clave == "protectedhousing") {
                aux = aux + "Viviendas protegidas=" + valor + " ";
            } else if (clave == "new") {
                aux = aux + "Nuevas=" + valor + " ";
            } else if (clave == "secondhand") {
                aux = aux + "Segunda mano=" + valor + " ";
            }
        }
        fullQuery = querySymbol.slice(0, -1);
        if (fullQuery != "") {
            const limityOffset =
                "&limit=" + limit + "&offset=" + current_offset;
            const res = await fetch("api/v1/sales" + fullQuery + limityOffset);
            console.log(fullQuery);
            if (res.ok) {
                console.log("OK");
                const json = await res.json();
                salesData = json;
                alertError = "";
                alertOk = "Búsqueda realizada con éxito: " + aux;
            } else {
                if (res.status == 404) {
                    alertOk = "";
                    alertError = "No se encuentra el dato solicitado: " + aux;
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
            //getDataSearch();
        }

        getNumDataSearch(fullQuery);
    }

    async function deleteResource(location, year) {
        console.log(`Deleting data`);
        const res = await fetch("/api/v1/sales/" + location + "/" + year, {
            method: "DELETE",
        }).then(function (res) {
            if (res.ok) {
                alertError = "";
                alertOk =
                    location +
                    " y año " +
                    year +
                    " ha sido borrado correctamente";
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
            console.log("Error: " + alertError);
        });
    }
    onMount(getData);
    //getNumData();
</script>

<main>
    <div class="container">
        <h2>Ventas</h2>
    </div>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/"
                    ><Button style="margin: 0 5px 10px 50px;" color="primary"
                        >Volver</Button
                    ></a
                >
                <a href="/#/sales/salesGraph"
                    ><Button color="light">Ver gráfica</Button></a
                >
            </NavItem>
            <NavItem>
                <Button
                    style="margin: 0 25px 5px 0;"
                    color="success"
                    on:click={toggle1}>Cargar datos inciales</Button
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
                    <Button
                        style="margin: 0 5px 5px 15px;"
                        color="danger"
                        on:click={toggle2}>Borrar todos los datos</Button
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
        {#if salesData.length == 0 && visitado == "no"}
            <div class="borrado">
                <p>
                    No se han encontrado datos, por favor carga los datos
                    iniciales.
                </p>
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
                                id="location"
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
                        <td>
                            <Button color="primary" on:click={insertData}
                                >Insertar</Button
                            >
                        </td>
                        <td
                            ><Button id="search" color="primary" on:click={searchData}
                                >Buscar</Button
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
                                    ><a
                                        href="#/sales/{data.location}/{data.year}"
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
                href="#/sales"
                on:click={() =>
                    changePage(current_page - 1, current_offset - 10)}
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
        font-weight: 600;
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

    @media (max-width: 1290px) {
        input {
            width: 100px;
        }
    }
</style>
