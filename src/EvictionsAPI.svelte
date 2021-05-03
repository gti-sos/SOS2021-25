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
        location:"",
        year:"",
        total:"",
        rustic:"",
        household:"",
        buildinglot:"",
        other:""
    }
    let error = null;

    async function loadData() {
        console.log("Loading data...");
        const res = await fetch("api/v1/evictions/loadInitialData").then(
            function (res) {
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
            }
        );
    }

    async function getData() {
        console.log("Fetching data...");
        const res = await fetch("api/v1/evictions/");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            evictionsData = json;
            console.log(`We have received ${evictionsData.length} resources.`);
        } else {
            console.log("Error");
        }
    }

    async function insertEviction() {
        console.log("Inserting eviction "+JSON.stringify(newEviction));
        const res = await fetch("api/v1/evictions/", 
                    {
                        method: "POST",
                        body: JSON.stringify(newEviction),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then( (res) => {
                        getData();
                    })
    }

    async function deleteEviction(data) {
        console.log("Deleting eviction "+JSON.stringify(data));
        const res = await fetch("api/v1/evictions/"+data.location+"/"+data.year, 
                    {
                        method: "DELETE"
                    }).then( (res) => {
                        getData();
                    })
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
            } else if ((res.status = 404)) {
                error = 404;
                console.log("Error Data not found");
            } else {
                error = 1000;
                console.log("Error");
            }
        });
    }
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
                        <td><input bind:value="{newEviction.location}"></td>
                        <td><input bind:value="{newEviction.year}"></td>
                        <td><input bind:value="{newEviction.total}"></td>
                        <td><input bind:value="{newEviction.rustic}"></td>
                        <td><input bind:value="{newEviction.household}"></td>
                        <td><input bind:value="{newEviction.buildinglot}"></td>
                        <td><input bind:value="{newEviction.other}"></td>
                        <td><Button on:click={insertEviction}>Insertar</Button></td>
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
                            <td><a href="#/evictions/{data.location}/{data.year}"><Button color="primary">Editar</Button></a></td>
                            <td><Button on:click={deleteEviction(data)}>Eliminar</Button></td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
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
