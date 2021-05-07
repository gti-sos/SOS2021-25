<script>
    import { onMount } from "svelte";

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
        Pagination,
        PaginationItem,
        PaginationLink,
    } from "sveltestrap";

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

    let evictionsData = [];
    let newEviction = {
        location: "",
        year: "",
        total: "",
        rustic: "",
        household: "",
        buildinglot: "",
        other: "",
    };
    let error = null;

    //Pagination
    let current_offset = 0;
    let limit = 10;
    let current_page = 1;
    let last_page = 1;
    let total = 0;

    let visitado = "no";
    let alertError = "";
    let alertOk = "";
    let fullQuery = "";
    var queryT = "";
    let busqueda = "no";
    let evictionsDataTocho = [];

    async function loadData() {
        console.log("Loading data...");
        const res = await fetch("api/v1/evictions/loadInitialData").then(
            function (res) {
                if (res.ok) {
                    console.log("Ok");
                    getData();
                    getNumData();
                    error = 0;
                } else if (res.status == 409) {
                    error = 409;
                    console.log("Conflict");
                } else {
                    error = 404;
                    console.log("Error");
                }
            }
        );
    }

    async function getData() {
        console.log("Fetching data...");
        const res = await fetch(
            "api/v1/evictions?limit=" + limit + "&offset=" + current_offset
        );
        if (res.ok) {
            busqueda = "no";
            console.log("Ok");
            const json = await res.json();
            evictionsData = json;
            console.log(`We have received ${evictionsData.length} resources.`);
        } else {
            console.log("Error");
        }
    }

    async function getDataSearch(query) {
        console.log("Fetching data...");
        const res = await fetch(
            "api/v1/evictions" +
                query +
                "&limit=" +
                limit +
                "&offset=" +
                current_offset
        );
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            evictionsData = json;
            console.log(`We have received ${evictionsData.length} resources.`);
            busqueda = "si";
        } else {
            console.log("Error");
        }
        //getNumDataSearch(query);
    }

    async function getNumDataSearch(query) {
        console.log("LA QUERY: " + query + "LIMITE: " + limit + "OFFSET: " + current_offset);
        //const res = await fetch("api/v1/evictions" + query + "&limit=" + limit + "&offset="+current_offset);
        const res = await fetch("api/v1/evictions" + query);
        if (res.ok) {
            const json = await res.json();
            total = json.length;
            console.log("Number of stats : " + total);
            queryT = query;
            console.log("queryT = " + queryT);

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
        }
        console.log("---------Exit change page-------");
    }

    async function getNumData() {
        const res = await fetch("api/v1/evictions");
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
                Object.entries(newEviction).filter((o) => {
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
            }else{
                getData();
                getNumData();
            }
            
        }
        console.log("---------Exit change page-------");
    }

    async function insertEviction() {
        console.log("Inserting eviction " + JSON.stringify(newEviction));
        const res = await fetch("api/v1/evictions/", {
            method: "POST",
            body: JSON.stringify(newEviction),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            getData();
        });
    }

    async function searchData() {
        visitado="si";
        console.log("Searching data...");
        var campos = new Map(
            Object.entries(newEviction).filter((o) => {
                return o[1] != "";
            })
        );
        let querySymbol = "?";
        for (var [clave, valor] of campos.entries()) {
            querySymbol += clave + "=" + valor + "&";
        }
        fullQuery = querySymbol.slice(0, -1);
        if (fullQuery != "") {
            const limityOffset = "&limit=" + limit +
                    "&offset="+current_offset;
            const res = await fetch("api/v1/evictions" + fullQuery + limityOffset);
            console.log("FULL QUERY: "+fullQuery + limityOffset);
            if (res.ok) {
                console.log("OK");
                const json = await res.json();
                evictionsDataTocho = evictionsData;
                evictionsData = json;
                console.log(`We have received ${evictionsData.length} resources.`);
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
            //getDataSearch();
            //getData();
        }
        
        getNumDataSearch(fullQuery);
        //getNumData(fullQuery);
    }

    async function deleteEviction(data) {
        console.log("Deleting eviction " + JSON.stringify(data));
        const res = await fetch(
            "api/v1/evictions/" + data.location + "/" + data.year,
            {
                method: "DELETE",
            }
        ).then((res) => {
            getData();
            getNumData();
        });
    }

    async function deleteData() {
        console.log("Deleting data...");
        const res = await fetch("api/v1/evictions/", {
            method: "DELETE",
        }).then(function (res) {
            if (res.ok) {
                console.log("OK");
                evictionsData = [];
                error = 0;
                getData();
                getNumData();
            } else if ((res.status = 404)) {
                error = 404;
                console.log("Error Data not found");
            } else {
                error = 1000;
                console.log("Error");
            }
        });
    }
    onMount(getData);
    getNumData();
</script>

<main>
    <div class="container">
        <h2>Deshaucios</h2>
    </div>
    <Nav>
        <NavItem>
            <NavLink href="/">Volver</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" on:click={toggle1}>Cargar datos inciales</NavLink>
            <Modal isOpen={open1} {toggle1}>
                <ModalHeader {toggle1}>¿Cargar los datos iniciales?</ModalHeader
                >
                <ModalBody>
                    Esta acción cargará los datos siempre y cuando no existan
                    previamente.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" on:click={toggle1P}>Cargar</Button>
                    <Button color="secondary" on:click={toggle1}
                        >Cancelar</Button
                    >
                </ModalFooter>
            </Modal>
        </NavItem>
        <NavItem>
            {#if evictionsData.length == 0}
                <NavLink disabled href="#" on:click={toggle2}
                    >Borrar todos los datos</NavLink
                >
            {:else}
                <NavLink href="#" on:click={toggle2}
                    >Borrar todos los datos</NavLink
                >
                <Modal isOpen={open2} {toggle2}>
                    <ModalHeader {toggle2}>¿Borrar todos los datos?</ModalHeader
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
        <UncontrolledAlert color="danger">Error desconocido.</UncontrolledAlert>
    {/if}

    <!-- Table -->
    {#if evictionsData.length == 0}
        <p>No se han encontrado datos, por favor carga los datos iniciales.</p>
    {:else}
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>Localización</th>
                        <th>Año</th>
                        <th>Total</th>
                        <th>Rústicas</th>
                        <th>Viviendas</th>
                        <th>Solares</th>
                        <th>Otros</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input bind:value={newEviction.location} /></td>
                        <td><input bind:value={newEviction.year} /></td>
                        <td><input bind:value={newEviction.total} /></td>
                        <td><input bind:value={newEviction.rustic} /></td>
                        <td><input bind:value={newEviction.household} /></td>
                        <td><input bind:value={newEviction.buildinglot} /></td>
                        <td><input bind:value={newEviction.other} /></td>
                        <td><Button on:click={insertEviction}>Insertar</Button></td>
                        <td><Button on:click={searchData}>Buscar</Button></td>
                    </tr>
                    {#each evictionsData as data}
                        <tr>
                            <td>{data.location}</td>
                            <td>{data.year}</td>
                            <td>{data["total"]}</td>
                            <td>{data["rustic"]}</td>
                            <td>{data["household"]}</td>
                            <td>{data["buildinglot"]}</td>
                            <td>{data["other"]}</td>
                            <td
                                ><a
                                    href="#/evictions/{data.location}/{data.year}"
                                    ><Button color="primary">Editar</Button></a
                                ></td
                            >
                            <td
                                ><Button on:click={deleteEviction(data)}
                                    >Eliminar</Button
                                ></td
                            >
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
    <Pagination ariaLabel="Web pagination">
        <PaginationItem class={current_page == 1 ? "disabled" : ""}>
            <PaginationLink
                previous
                href="#/evictions"
                on:click={() =>
                    changePage(current_page - 1, current_offset - 10)}
            />
        </PaginationItem>
        {#each range(last_page, 1) as page}
            <PaginationItem class={current_page == page ? "active" : ""}>
                <PaginationLink
                    previous
                    href="#/evictions"
                    on:click={() => changePage(page, (page - 1) * 10)}
                    >{page}</PaginationLink
                >
            </PaginationItem>
        {/each}
        <PaginationItem class={current_page == last_page ? "disabled" : ""}>
            <PaginationLink
                next
                href="#/evictions"
                on:click={() =>
                    changePage(current_page + 1, current_offset + 10)}
            />
        </PaginationItem>
    </Pagination>
</main>

<style>
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
    h2 {
        padding: 5px;
        color: #fdfd96;
    }

    /*a {
            text-decoration: none;
            color: #e2e2e2;
            transition: 0.2s ease-in-out;
        }*/
    /*a:hover {
            color: #fdfd96;
        }*/

    p/*,
        a*/ {
        font-size: 20px;
        line-height: 30px;
        margin: 15px;
    }
    /*.repourl {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .group {
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
        background: #191919;
        font-size: 12px;
        margin: 45px;
        width: 90%;
        text-align: left;
        border-collapse: collapse;
    }

    /*th {
            font-size: 16px;
            font-weight: bold;
            padding: 8px;
            border-top: 4px solid #242323;
            border-bottom: 4px solid #242323;
            color: #fdfd96;
        }*/

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
