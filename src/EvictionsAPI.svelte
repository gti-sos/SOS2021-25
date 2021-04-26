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
    let error = null;

    async function loadData() {
        console.log("Loading data...");
        const res = await fetch("api/v1/evictions/loadInitialData").then(function (
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
        });
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
    <h2>Evictions</h2>

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
        <Table borderer>
            <thead>
                <tr>
                    <td>Localización</td>
                    <td>Año</td>
                    <td>Total</td>
                    <td>Rústicas</td>
                    <td>Viviendas</td>
                    <td>Solares</td>
                    <td>Otros</td>
                </tr>
            </thead>
            <tbody>
                {#each evictionsData as data}
                    <tr>
                        <td>{data.location}</td>
                        <td>{data.year}</td>
                        <td>{data["total"]}</td>
                        <td>{data["rustic"]}</td>
                        <td>{data["household"]}</td>
                        <td>{data["buildinglot"]}</td>
                        <td>{data["other"]}</td>
                    </tr>
                {/each}
            </tbody>
        </Table>
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
</style>
