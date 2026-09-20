let contador =
localStorage.getItem(
    "contadorMantenimientoUPS"
);

if(!contador){

    contador = 1;

    localStorage.setItem(
        "contadorMantenimientoUPS",
        contador
    );

}

actualizarCodigo();

function actualizarCodigo(){

    document
    .getElementById("codigoInforme")
    .value =
    `ITMU-${String(contador).padStart(4,"0")}`;

}

document
.getElementById("resetCounter")
.addEventListener("click",()=>{

    contador = 1;

    localStorage.setItem(
        "contadorMantenimientoUPS",
        contador
    );

    actualizarCodigo();

});

document
.getElementById("generarEquipos")
.addEventListener("click",()=>{

    const cantidad =
    parseInt(
        document.getElementById(
            "cantidadEquipos"
        ).value
    );
console.log("Cantidad:", cantidad);
    const contenedor =
    document.getElementById(
        "equiposContainer"
    );

    contenedor.innerHTML = "";

    for(let i=1;i<=cantidad;i++){
        console.log("Creando equipo", i);
        contenedor.innerHTML +=
        crearDatosGenerales(i);

    }
function configurarClientes(){

    const equipos = document.querySelectorAll(".equipo-card");

    equipos.forEach(equipo=>{

        const cliente =
        equipo.querySelector(".cliente-select");

        const local =
        equipo.querySelector(".local-select");

        const ruc =
        equipo.querySelector(".ruc-input");

        cliente.addEventListener("change",()=>{
            switch(cliente.value){
                case "cliente1":

    ruc.value = "20608300393";

    local.innerHTML = `
        <option value="">Seleccione un local</option>

        <option>Jockey Plaza - PVH</option>
        <option>Higuereta - PVH</option>
        <option>Brasil - PVH</option>
        <option>Cortijo - PVH</option>
        <option>Callao - PVH</option>
        <option>Ate - PVH</option>
        <option>Bolichera - PVH</option>
        <option>Risso - PVH</option>
        <option>Los Olivos - PVH</option>
        <option>Comas - PVH</option>
        <option>Trujillo - PVH</option>
        <option>Chiclayo - PVH</option>
        <option>Arequipa - PVH</option>
        <option>Ceres - PVH</option>
        <option>Pro - PVH</option>
        <option>Huancayo - PVH</option>
        <option>Izaguirre - PVH</option>
        <option>Alfonso Ugarte - PVH</option>
        <option>Universitaria - PVH</option>
        <option>Puente Piedra - PVH</option>
        <option>SJ Lurigancho - PVH</option>
        <option>Ica - PVH</option>
        <option>El Chacarero - PVH</option>
        <option>Santa Clara - PVH</option>
        <option>Colonial - PVH</option>
        <option>Centro Civico - PVH</option>
        <option>Chimbote - PVH</option>
        <option>Chosica - PVH</option>
        <option>Chincha - PVH</option>
        <option>Piura - PVH</option>
        <option>Huacho - PVH</option>
        <option>Nvo Chimbote - PVH</option>
        <option>Tacna - PVH</option>
        <option>Juliaca - PVH</option>
        <option>Guardia Civil - PVH</option>
        <option>LurIn - PVH</option>
        <option>Talara - PVH</option>
        <option>Puno - PVH</option>
        <option>San Borja - PVH</option>
        <option>Acho - PVH</option>
        <option>Huanuco - PVO</option>
        <option>Rimac Alcazar - PVH</option>
        <option>Huaral - PVH</option>
        <option>Sullana - PVH</option>
        <option>San Isidro - PVH</option>
        <option>Salaverry - PVH</option>
        <option>Paita - PVH</option>
        <option>Cusco Mall - PVH</option>
        <option>Barranca - PVH</option>
        <option>Cajamarca - PVH</option>
        <option>Brena - PVH</option>
        <option>Ventanilla - PVH</option>
        <option>Valle Hermoso - PVH</option>
        <option>La Molina - PVH</option>
        <option>Pucallpa - PVO</option>
        <option>Grifo Mexico - PVH</option>
        <option>Pisco - PVH</option>
        <option>Jaen - PVO</option>
        <option>Moquegua - PVH</option>
        <option>Talara Municipalidad - PVH</option>
        <option>El Agustino - PVH</option>
        <option>Armado de canastas</option>
        <option>La Curva - PVH</option>
        <option>Ves Placita - PVH</option>
        <option>Sucre - PVH</option>
        <option>Tarapoto - PVO</option>
        <option>Ilo - PVH</option>
        <option>Tumbes - PVH</option>
        <option>Puruchuco - PVH</option>
        <option>Chiclayo Aventura - PVH</option>
        <option>Miraflores - PVH</option>
        <option>Caminos del Inca - PVS</option>
        <option>Art Express - PVS</option>
        <option>El Ejercito - PVS</option>
        <option>Salamanca - PVS</option>
        <option>Ayacucho - PVS</option>
        <option>Corpac - PVS</option>
        <option>Dasso - PVS</option>
        <option>San Jorge - PVS</option>
        <option>Alameda Sur - PVS</option>
        <option>El Tambo Huancayo - PVS</option>
        <option>Villa el Salvador - PVS</option>
        <option>Multiplaza - PVS</option>
        <option>Trujillo Mansiche - PVS</option>
        <option>Chorrillos Iglesias - PVS</option>
        <option>Magdalena - PVS</option>
        <option>Cine Rimac - PVS</option>
        <option>Grifo Kio - PVS</option>
        <option>La Paz - PVS</option>
        <option>Villa Marina - PVS</option>
        <option>Proceres - PVS</option>
        <option>La Victoria - PVS</option>
        <option>La Perla - PVS</option>
        <option>Trujillo Valcarcel - PVS</option>
        <option>Chaclacayo - PVS</option>
        <option>Bolognesi - PVE</option>
        <option>Santa Cruz - PVE</option>
        <option>Supermercados SKA - PVE</option>
        <option>Centro Trujillo - PVE</option>
        <option>Jiron de la Union - PVE</option>
        <option>San Miguel - PVH</option>
        <option>Cusco Wanchaq - PVH</option>
        <option>Mercaderes - PVS</option>
        <option>Primavera - PVH</option>
        <option>Aventura SJL - PVH</option>
        <option>Pezet - VIV</option>
        <option>Benavides - VIV</option>
        <option>Dos de Mayo - VIV</option>
        <option>Monterrico - VIV</option>
        <option>Javier Prado - VIV</option>
        <option>Libertadores - VIV</option>
        <option>Asia - VIV</option>
        <option>Destinos del Sabor - VIV</option>
        <option>Pardo - VIV</option>
        <option>Alm. Santa Rosa</option>
        <option>Oficinas Morelli</option>
    `;

    break;

    case "cliente2":

    ruc.value = "20492092313";

    local.innerHTML = `
        <option value="">Seleccione un local</option>

        <option>Zarate 2 - MK</option>
        <option>Cusco - MK</option>
        <option>Piura 2 - MK</option>
        <option>Arequipa 2 - MK</option>
        <option>Sullana - MK</option>
        <option>Independencia - MK</option>
        <option>Callao - MK</option>
        <option>Santa Anita - MK</option>
        <option>Surco - MK</option>
        <option>Arequipa - MK</option>
        <option>Chiclayo - MK</option>
        <option>Zarate - MK</option>
        <option>Trujillo - MK</option>
        <option>Piura - MK</option>
        <option>Comas - MK</option>
        <option>Villa El Salvador - MK</option>
        <option>Huancayo - MK</option>
        <option>Chincha - MK</option>
        <option>Ica - MK</option>
        <option>Huacho - MK</option>
        <option>Trujillo 2 - MK</option>
        <option>Cercado - MK</option>
        <option>Chorrillos - MK</option>
        <option>Chimbote - MK</option>
        <option>Cañete - MK</option>
        <option>SMP - MK</option>
        <option>SJM - MK</option>
        <option>HO (Oficina Central) - MK</option>
        <option>Cusco - MK (Centro Comercial)</option>
    `;

    break;
    case "cliente3":

    ruc.value = "20607281921";

    local.innerHTML = `
        <option value="">Seleccione un local</option>

        <option>Punta Negra</option>
        <option>VES Aldea</option>
        <option>Arequipa</option>
        <option>Arequipa 2</option>
        <option>Callao LATAM</option>
        <option>Chiclayo</option>
        <option>Chiclayo 2</option>
        <option>Huachipa</option>
        <option>Huachipa Merkao</option>
        <option>Huancayo</option>
        <option>Piura Aldeas</option>
        <option>Punta Hermosa</option>
        <option>Trujillo Ventanilla</option>
        <option>Ventanilla</option>
    `;

    break;
     case "cliente4":

    ruc.value = "20493020618";

    local.innerHTML = `
        <option value="">Seleccione un local</option>

        <option>Arequipa - OE</option>
        <option>Cajamarca - OE</option>
        <option>Cusco - OE</option>
        <option>Huanuco - OE</option>
        <option>Juliaca - OE</option>
        <option>Lima Norte - OE</option>
        <option>Megaplaza - OE</option>
        <option>Miraflores - OE</option>
        <option>Pucallpa - OE</option>
        <option>Salaverry - OE</option>
        <option>San Borja - OE</option>
        <option>SJL - OE</option>
        <option>Barranca - OE</option>
        <option>Centro Civico - OE</option>
        <option>Huancayo - OE</option>
        <option>Jiron - OE</option>
        <option>Jockey - OE</option>
        <option>Mall del Sur - OE</option>
        <option>Piura - OE</option>
        <option>Primavera - OE</option>
        <option>Puruchuco - OE</option>
        <option>Sfera Puruchuco - OE</option>
        <option>Trujillo - OE</option>
    `;

    break;
    case "cliente5":

    ruc.value = "20605900012";

    local.innerHTML = `
        <option value="">
        </option>
    `;

    break;

    local.innerHTML = `
        <option value="">Seleccione un local</option>

        <option>Arequipa - OE</option>
        <option>Cajamarca - OE</option>
        <option>Cusco - OE</option>
        <option>Huanuco - OE</option>
        <option>Juliaca - OE</option>
        <option>Lima Norte - OE</option>
        <option>Megaplaza - OE</option>
        <option>Miraflores - OE</option>
        <option>Pucallpa - OE</option>
        <option>Salaverry - OE</option>
        <option>San Borja - OE</option>
        <option>SJL - OE</option>
        <option>Barranca - OE</option>
        <option>Centro Civico - OE</option>
        <option>Huancayo - OE</option>
        <option>Jiron - OE</option>
        <option>Jockey - OE</option>
        <option>Mall del Sur - OE</option>
        <option>Piura - OE</option>
        <option>Primavera - OE</option>
        <option>Puruchuco - OE</option>
        <option>Sfera Puruchuco - OE</option>
        <option>Trujillo - OE</option>
    `;

    break;


    default:

        ruc.value = "";

        local.innerHTML = `
            <option value="">
                Seleccione un cliente primero
            </option>
        `;
}
        });

    });

}
configurarClientes();
generarReporteFotografico();

document.querySelectorAll(".equipo-card").forEach(equipo => {

    const fechaInput =
        equipo.querySelector(".fecha-input");

    const fechaTexto =
        equipo.querySelector(".fecha-trabajos");

    function actualizarFechaTrabajos(){

        if(!fechaInput.value){
            fechaTexto.textContent = "__________";
            return;
        }

        const partes = fechaInput.value.split("-");

        const año = partes[0];
        const mes = parseInt(partes[1]) - 1;
        const dia = partes[2];

        const fecha = new Date(año, mes, dia);

        const nombreMes =
            fecha.toLocaleString("es-PE", {
                month: "long"
            });

        fechaTexto.textContent =
            `${dia} de ${nombreMes} de ${año}`;
    }

    fechaInput.addEventListener(
        "change",
        actualizarFechaTrabajos
    );

    actualizarFechaTrabajos();

});
});

function crearDatosGenerales(numero){

    return `

    <div class="equipo-card">

        <div class="equipo-header">
            INFORME DE INSTALACIÓN
        </div>

        <div class="seccion">

            <h2 class="seccion-titulo">
                DATOS GENERALES
            </h2>

            <div class="grid-datos">

                <div class="campo">

                    <label>Cliente</label>

                    <select class="cliente-select">

                        <option value="">
                            Seleccione un cliente
                        </option>

                        <option value="cliente1">
                            COMPAÑÍA FOOD RETAIL
                        </option>

                        <option value="cliente2">
                            MAKRO SUPERMAYORISTA
                        </option>

                        <option value="cliente3">
                            OSLO
                        </option>

                        <option value="cliente4">
                            TIENDAS PERUANAS (OECHSLE)
                        </option>

                        <option value="cliente5">
                            FARMACIAS PERUANAS
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label>RUC</label>

                    <input
                        type="text"
                        class="ruc-input"
                        readonly>

                </div>


                <div class="campo">

                    <label>Ubicación</label>

                    <input
                        type="text"
                        class="ubicacion-input"
                        placeholder="Ingrese la ubicación">

                </div>


                <div class="campo">

                    <label>Local</label>

                    <select class="local-select">

                        <option value="">
                            Seleccione un cliente primero
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label>Equipos Energizados</label>

                    <select class="equipos-energizados-input">

                        <option value="">
                            Seleccione una opción
                        </option>

                        <option value="Servicio 1">
                            Caja de Transferencia
                        </option>

                        <option value="Servicio 2">
                            Sistemas
                        </option>

                        <option value="Servicio 3">
                            Servidores
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label>Servicio</label>

                    <input
                        type="text"
                        class="servicio-input"
                        value="Instalación de UPS + Caja de Transferencia">

                </div>


                <div class="campo">

                    <label>Fecha del Servicio</label>

                    <input
                        type="date"
                        class="fecha-input">

                </div>

            </div>


            <!-- =========================
                 I. PRESENTACIÓN
            ========================== -->

            <div class="alcance-box">

                <h2 class="seccion-titulo">
                    I. PRESENTACIÓN
                </h2>

                <textarea readonly>
En el presente informe se detalla el servicio de instalación de un sistema de alimentación ininterrumpida (UPS) y una caja de transferencia.
                </textarea>

            </div>


            <!-- =========================
                 II. EPPS Y EQUIPO
            ========================== -->

            <div class="inspeccion-box">

                <h2 class="seccion-titulo">
                    II. EPPS Y EQUIPO PARA LA EJECUCIÓN DEL SERVICIO
                </h2>


                <div class="checklist-actividades">

                    <div class="checklist-item">

                        <input
                            type="checkbox"
                            id="epp${numero}_1">

                        <label for="epp${numero}_1">
                            Casco de seguridad
                        </label>

                    </div>


                    <div class="checklist-item">

                        <input
                            type="checkbox"
                            id="epp${numero}_2">

                        <label for="epp${numero}_2">
                            Guantes de seguridad
                        </label>

                    </div>


                    <div class="checklist-item">

                        <input
                            type="checkbox"
                            id="epp${numero}_3">

                        <label for="epp${numero}_3">
                            Lentes de seguridad
                        </label>

                    </div>


                    <div class="checklist-item">

                        <input
                            type="checkbox"
                            id="epp${numero}_4">

                        <label for="epp${numero}_4">
                            Botas de seguridad
                        </label>

                    </div>

                </div>


                <!-- UPS ANTIGUO -->

                <h3 style="margin-top:30px;color:#003f73;">
                    UPS ANTIGUO
                </h3>

                <table class="tabla-info">

                    <thead>

                        <tr>

                            <th colspan="2">
                                DATOS TÉCNICOS DEL EQUIPO
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>Equipo</td>

                            <td>
                                <input type="text" value="UPS">
                            </td>

                        </tr>

                        <tr>

                            <td>Marca</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Modelo</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Serie</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Potencia</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                    </tbody>

                </table>


                <!-- UPS NUEVO -->

                <h3 style="margin-top:30px;color:#003f73;">
                    UPS NUEVO
                </h3>

                <table class="tabla-info">

                    <thead>

                        <tr>

                            <th colspan="2">
                                DATOS TÉCNICOS DEL EQUIPO
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>Equipo</td>

                            <td>
                                <input type="text" value="UPS">
                            </td>

                        </tr>

                        <tr>

                            <td>Marca</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Modelo</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Serie</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Potencia</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                    </tbody>

                </table>


                <!-- CAJA DE TRANSFERENCIA ANTIGUA -->

                <h3 style="margin-top:30px;color:#003f73;">
                    CAJA DE TRANSFERENCIA ANTIGUA
                </h3>

                <table class="tabla-info">

                    <thead>

                        <tr>

                            <th colspan="2">
                                DATOS TÉCNICOS DEL EQUIPO
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>Equipo</td>

                            <td>
                                <input
                                    type="text"
                                    value="CAJA DE TRANSFERENCIA">
                            </td>

                        </tr>

                        <tr>

                            <td>Marca</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Modelo</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Serie</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                    </tbody>

                </table>


                <!-- CAJA DE TRANSFERENCIA NUEVA -->

                <h3 style="margin-top:30px;color:#003f73;">
                    CAJA DE TRANSFERENCIA NUEVA
                </h3>

                <table class="tabla-info">

                    <thead>

                        <tr>

                            <th colspan="2">
                                DATOS TÉCNICOS DEL EQUIPO
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>Equipo</td>

                            <td>
                                <input
                                    type="text"
                                    value="CAJA DE TRANSFERENCIA">
                            </td>

                        </tr>

                        <tr>

                            <td>Marca</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Modelo</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                        <tr>

                            <td>Serie</td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>


            <!-- =========================
                 III. ANTECEDENTES
            ========================== -->

            <div class="inspeccion-box">

                <h2 class="seccion-titulo">
                    III. ANTECEDENTES
                </h2>

<textarea readonly >
El cliente solicitó la ejecución del servicio de instalación de un sistema de alimentación ininterrumpida (UPS) y la instalación de una caja de transferencia, con la finalidad de proporcionar alimentación eléctrica estabilizada y respaldo a las cargas críticas correspondientes a la línea de cajas.

El servicio comprendió el traslado y ubicación de los equipos en el área destinada, instalación física del UPS, instalación y fijación de la caja de transferencia, ejecución de los conexionados eléctricos correspondientes, conexión al sistema de puesta a tierra, identificación de los circuitos de alimentación y salida, configuración inicial del UPS, puesta en marcha y ejecución de las pruebas funcionales.

La intervención fue realizada considerando las condiciones existentes de la instalación eléctrica y coordinando previamente con el personal responsable del establecimiento, a fin de ejecutar los trabajos de manera segura y controlada.
</textarea>

            </div>


<!-- =========================
     IV. TRABAJOS REALIZADOS
========================== -->

<div class="actividades-box">

    <h2 class="seccion-titulo">
        IV. TRABAJOS REALIZADOS
    </h2>

    <p>
        El día <span class="fecha-trabajos">__________</span>, el personal técnico de INFRASOL S.A.C. ingresó a las instalaciones de Plaza Vea para ejecutar el servicio de instalación del nuevo sistema UPS y caja de transferencia. Antes de iniciar los trabajos, se verificaron las condiciones de seguridad del área y se coordinó con el personal de tienda el procedimiento para realizar la intervención sin afectar la operación.
    </p>

    <p style="margin-top:25px;">
        <strong>ACTIVIDADES EJECUTADAS:</strong>
    </p>

    <p style="margin-top:25px;">
        <strong>Instalación física del UPS</strong>
    </p>

    <ul>
        <li>
            <strong>Ubicación:</strong> Colocamos el UPS en un lugar ventilado y de fácil acceso.
        </li>

        <li>
            <strong>Conexión a Tierra:</strong> Conectamos el UPS a una toma de tierra adecuada para protección.
        </li>

        <li>
            <strong>Conexión Eléctrica:</strong>
        </li>
    </ul>

    <ul style="margin-left:40px;">
        <li>
            <strong><em>Entrada:</em></strong> Conectamos a la salida del transformador (baja tensión).
        </li>

        <li>
            <strong><em>Salida:</em></strong> conectamos al tablero eléctrico de distribución.
        </li>
    </ul>

    <ul>
        <li>
            Configuración inicial y puesta en marcha del equipo.
        </li>

        <li>
            Ejecución de pruebas funcionales, verificando parámetros de entrada, salida, frecuencia, autonomía y correcto funcionamiento del sistema.
        </li>

        <li>
            Monitoreo del equipo durante la operación para confirmar la estabilidad del suministro eléctrico.
        </li>
    </ul>

    <p style="margin-top:25px;">
        <strong>Instalación de la caja de transferencia</strong>
    </p>

    <ul>
        <li>
            Ubicación de la caja de transferencia en el punto definido para la instalación.
        </li>

        <li>
            Fijación mecánica de la caja.
        </li>

        <li>
            Identificación de los circuitos de alimentación.
        </li>

        <li>
            Identificación de la alimentación proveniente del UPS.
        </li>

        <li>
            Identificación de la alimentación de bypass.
        </li>

        <li>
            Identificación de la salida hacia las cargas críticas.
        </li>

        <li>
            Conexionado de los conductores correspondientes.
        </li>

        <li>
            Verificación del ajuste de las conexiones eléctricas.
        </li>

        <li>
            Ordenamiento y aseguramiento del cableado.
        </li>
    </ul>

</div>
            <!-- =========================
                 V. MEDICIONES ELÉCTRICAS
            ========================== -->

            <div class="mediciones-box">

                <h2 class="seccion-titulo">
                    V. MEDICIONES ELÉCTRICAS
                </h2>

                <p>

                    Para validar el desempeño del equipo y confirmar que los parámetros operan dentro de los valores establecidos, se registraron las mediciones eléctricas correspondientes al UPS y la caja de transferencia.

                </p>


                <h3 style="margin-top:25px;color:#003f73;">
                    - Mediciones eléctricas del UPS
                </h3>


                <table class="tabla-mediciones">

                    <tbody>

                        <tr>

                            <th>
                                MEDICIONES ELÉCTRICAS
                            </th>

                            <th>R-S</th>
                            <th>S-T</th>
                            <th>T-R</th>

                        </tr>


                        <tr>
                            <td>Parámetros de tensión</td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                        </tr>   


                        <tr>

                            <td>Tensión de entrada</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Tensión de bypass</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Tensión de salida</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>
                            <td>Parámetros de carga</td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>
                        </tr>


                        <tr>

                            <td>Corriente de entrada</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Corriente de salida</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Frecuencia</td>

                            <td colspan="3">
                            <input type="text">
                            </td>

                        </tr>


                     <tr>

                            <td>Temperatura ambiente</td>

                            <td colspan="3">
                            <input type="text">
                            </td>

                    </tr>

                    </tbody>

                </table>


                <h3 style="margin-top:30px;color:#003f73;">
                    - Mediciones eléctricas de la caja de transferencia
                </h3>


                <table class="tabla-mediciones">

                    <tbody>

                        <tr>

                            <th>
                                MEDICIONES ELÉCTRICAS
                            </th>

                            <th>R-S</th>
                            <th>S-T</th>
                            <th>T-R</th>

                        </tr>


                        <tr>

                            <td>Tensión de entrada</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Tensión de salida hacia UPS</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Tensión de bypass</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Corriente de entrada</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Corriente de salida</td>

                            <td><input type="text"></td>
                            <td><input type="text"></td>
                            <td><input type="text"></td>

                        </tr>


                        <tr>

                            <td>Frecuencia</td>

                            <td colspan="3">
                                <input type="text">
                            </td>

                        </tr>


                        <tr>

                            <td>Temperatura ambiente</td>

                            <td colspan="3">
                                <input type="text">
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>


            <!-- =========================
                 VI. PRUEBAS DE FUNCIONAMIENTO
            ========================== -->

            <div class="actividades-box">

                <h2 class="seccion-titulo">
                    VI. PRUEBAS DE FUNCIONAMIENTO
                </h2>

                <p>

                    Con el fin de verificar la operatividad del UPS y la caja de transferencia se ejecutaron las pruebas de funcionamiento correspondientes. Los resultados son los siguientes:

                </p>


                <h3 style="margin-top:25px;color:#003f73;">
                    - Pruebas de funcionamiento del UPS
                </h3>


                <table class="tabla-pruebas">

                    <tr>

                        <th>
                            PRUEBA EJECUTADA
                        </th>

                        <th>
                            RESULTADO
                        </th>

                    </tr>


                    <tr>

                        <td>
                            Encendido y operación inicial sin alarmas
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Funcionamiento en modo Línea (Online)
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Transferencia a bypass y retorno
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Operación del inversor bajo carga
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Estabilidad de tensión y frecuencia en salida
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Verificación de funcionamiento del UPS bajo carga
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Restablecimiento a condiciones normales
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>

                </table>


                <h3 style="margin-top:30px;color:#003f73;">
                    - Pruebas de funcionamiento de la caja de transferencia
                </h3>


                <table class="tabla-pruebas">

                    <tr>

                        <th>
                            PRUEBA EJECUTADA
                        </th>

                        <th>
                            RESULTADO
                        </th>

                    </tr>


                    <tr>

                        <td>
                            Comprobación de conexiones de entrada y salida
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Verificación de tensión en entrada y salida
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Prueba de transferencia manual
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Prueba de transferencia automática
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Ensayo de transferencia de carga y retorno a fuente principal
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>


                    <tr>

                        <td>
                            Restablecimiento a condiciones normales de operación
                        </td>

                        <td>
                            <select>
                                <option>Conforme</option>
                                <option>Desconforme</option>
                            </select>
                        </td>

                    </tr>

                </table>

            </div>


            <!-- =========================
                 VII. REGISTRO VISUAL
            ========================== -->

            <h2 class="seccion-titulo">
                VII. REGISTRO VISUAL
            </h2>

            <div class="reporteFotografico reporte-fotos"></div>


            <!-- =========================
                 VIII. RESULTADOS
            ========================== -->

            <h2 class="seccion-titulo">
                VIII. RESULTADOS DE LA INSTALACIÓN
            </h2>

            <div class="campo-conclusiones">

            <textarea
            rows="8"
            readonly>Finalizada la instalación, el nuevo sistema UPS y caja de transferencia quedaron operando de manera correcta. Se verificó el correcto funcionamiento de los circuitos de entrada y salida, así como la ausencia de alarmas o eventos de falla durante las pruebas operativas. Los equipo quedó en condiciones adecuadas para su operación continua.</textarea>

            </div>

<!-- =========================
     IX. OBSERVACIÓN
========================== -->

<h2 class="seccion-titulo">
    IX. OBSERVACIÓN
</h2>

<div class="campo-conclusiones">

    <textarea rows="8"
        placeholder="Ingrese las observaciones correspondientes al servicio."></textarea>

</div>


<!-- =========================
     X. RECOMENDACIONES
========================== -->

<h2 class="seccion-titulo">
    X. RECOMENDACIONES
</h2>

<div class="campo-recomendaciones">

    <textarea
        rows="8"
        placeholder="Ingrese las recomendaciones correspondientes al servicio."
    ></textarea>

</div>

    </div>

    `;

}

const descripcionesFotos = [

    "DIAGRAMA DE TABLERO",

    "TABLERO ELECTRICO",

    "UPS DE ANTIGUO",

    "INSTALACION DE UPS NUEVO",

    "PRUEBAS DE AUTONOMIA DE UPS",

    "SITUACION FINAL",

    "CAJA DE TRANSFERENCIA ANTIGUA",

    "CAJA DE TRANSFERENCIA ANTIGUA",

    "CAJA DE TRANSFERENCIA ANTIGUA",

    "CAJA DE TRANSFERENCIA ANTIGUA"

];

function generarReporteFotografico() {

    const contenedores =
    document.querySelectorAll(
        ".reporteFotografico"
    );

    contenedores.forEach(
        (contenedor)=>{

        contenedor.innerHTML = "";

        descripcionesFotos.forEach(
            (descripcion,index)=>{

            const numero = index + 1;

            contenedor.innerHTML += `
                <div class="foto-item">

                    <div class="foto-titulo">
                        ${numero}. ${descripcion}
                    </div>

                    <div>
                        <input
                            type="file"
                            accept="image/*">

                        <input
                            type="file"
                            accept="image/*">
                    </div>

                </div>
            `;

        });

        // =========================
        // BOTÓN AGREGAR PUNTO
        // =========================

            const botonAgregar =
                document.createElement("button");

            botonAgregar.type = "button";

            botonAgregar.textContent =
                "+ AGREGAR IMAGEN";

            botonAgregar.className =
            "btn-agregar-punto";

        botonAgregar.addEventListener(
            "click",
            ()=>{

                const puntosActuales =
                    contenedor.querySelectorAll(
                        ".foto-item"
                    ).length;

                const nuevoNumero =
                    puntosActuales + 1;

const nuevoPunto =
    document.createElement("div");

nuevoPunto.className =
    "foto-item foto-item-extra";

nuevoPunto.innerHTML = `

    <div class="foto-titulo">

        ${nuevoNumero}.

        <input
            type="text"
            class="titulo-foto-extra"
            placeholder="ESCRIBA EL TÍTULO"
            style="text-transform:uppercase;">

        <button
    type="button"
    class="btn-eliminar-punto">
    ELIMINAR
</button>

    </div>

    <div>
        <input
            type="file"
            accept="image/*">

        <input
            type="file"
            accept="image/*">
    </div>

`;

                contenedor.appendChild(
                    nuevoPunto
                );

                const titulo =
                    nuevoPunto.querySelector(
                        ".titulo-foto-extra"
                    );

                titulo.addEventListener(
                    "input",
                    ()=>{
                        titulo.value =
                            titulo.value.toUpperCase();
                    }
                );
                const botonEliminar =
                nuevoPunto.querySelector(
                    ".btn-eliminar-punto"
                );

            botonEliminar.addEventListener(
                "click",
                ()=>{
                    nuevoPunto.remove();
                }
            );

            }
        );

        contenedor.appendChild(
            botonAgregar
        );

    });

}
document
.getElementById("btnPDF")
.addEventListener(
    "click",
    generarPDF
);
function dibujarSeccion(
    pdf,
    titulo,
    texto,
    y
){

    pdf.setDrawColor(0);

    pdf.rect(
        5,
        y,
        190,
        60
    );

    pdf.setFillColor(
        220,
        220,
        220
    );

    pdf.rect(
        5,
        y,
        190,
        10,
        "F"
    );

  pdf.line(
    5,
    y + 10,
    195,
    y + 10
);

    pdf.setFont(
        "times",
        "bold"
    );

    pdf.setFontSize(11);

    pdf.text(
        titulo,
        12,
        y + 7
    );

    pdf.setFont(
        "times",
        "normal"
    );

    pdf.setFontSize(10);

    const textoFormateado =
    pdf.splitTextToSize(
        texto,
        165
    );

    pdf.text(
        textoFormateado,
        12,
        y + 20
    );

    return {
        textoFormateado,
        finalY : y + 60
    };

}
async function generarPDF(){

    const { jsPDF } = window.jspdf;

    const codigo =
    document.getElementById("codigoInforme").value;

    const equipos =
document.querySelectorAll(".equipo-card");

    
const logo = new Image();

logo.src = "Infrasol.png";

await new Promise((resolve) => {
    logo.onload = resolve;
    logo.onerror = resolve;
});

    for(let indice = 0; indice < equipos.length; indice++){
        const codigoEquipo =
`ITMU-${String(contador + indice).padStart(4,"0")}`;

        const equipoActual = equipos[indice];

const cliente =
equipoActual.querySelector(".cliente-select")?.selectedOptions[0].text || "";
const ruc =
equipoActual.querySelector(".ruc-input")?.value || "";

const ubicacion =
equipoActual.querySelector(".ubicacion-input")?.value || "";

const local =
equipoActual.querySelector(".local-select")?.value || "";

const equipo =
equipoActual.querySelector(".equipo-input")?.value || "";

const equiposEnergizados =
    equipoActual.querySelector(".equipos-energizados-input")?.selectedOptions[0]?.text.trim() || "";

    const servicio =
equipoActual.querySelector(".servicio-input")?.value || "";

const fecha =
equipoActual.querySelector(".fecha-input")?.value || "";

        const pdf =
        new jsPDF("p","mm","a4");

   if (logo.complete && logo.naturalWidth > 0) {
    pdf.addImage(
        logo,
        "PNG",
        8,
        8,
        10,
        10
    );
}

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(14);

pdf.text(
    "INFORME TÉCNICO DE MANTENIMIENTO UPS",
    100,
    18,
    { align:"center" }
);

pdf.setFontSize(9);

pdf.text(
    "N° " + codigoEquipo,
    190,
    15,
    { align:"right" }
);

pdf.text(
    "EQUIPO " + (indice + 1),
    190,
    25,
    { align:"right" }
);

pdf.line(
    10,
    35,
    200,
    35
);
const eq =
equipoActual.querySelector(
".tabla-info tbody tr td:nth-child(1) input"
)?.value || "";

const marca =
equipoActual.querySelector(
".tabla-info tbody tr td:nth-child(2) input"
)?.value || "";

const modelo =
equipoActual.querySelector(
".tabla-info tbody tr td:nth-child(3) input"
)?.value || "";

const capacidad =
equipoActual.querySelector(
".tabla-info tbody tr td:nth-child(4) input"
)?.value || "";

const serie =
equipoActual.querySelector(
".tabla-info tbody tr td:nth-child(5) input"
)?.value || "";
const tipoRack =
equipoActual.querySelectorAll(
".tabla-info"
)[1]?.querySelector(
"tbody tr td:nth-child(1) input"
)?.value || "";

const tarjetaRed =
equipoActual.querySelectorAll(
".tabla-info"
)[1]?.querySelector(
"tbody tr td:nth-child(2) input"
)?.value || "";

const soporteTorre =
equipoActual.querySelectorAll(
".tabla-info"
)[1]?.querySelector(
"tbody tr td:nth-child(3) input"
)?.value || "";

const cajaTransferencia =
equipoActual.querySelectorAll(
".tabla-info"
)[1]?.querySelector(
"tbody tr td:nth-child(4) input"
)?.value || "";

pdf.autoTable({

    startY: 45,

    theme: "grid",

    styles:{
        fontSize:9,
        lineColor:[0,0,0],
        lineWidth:0.2,
        cellPadding:2
    },

    columnStyles:{
        0:{
            cellWidth:30,
            fontStyle:"bold",
            fillColor:[220,220,220]
        },
        1:{
            cellWidth:60
        },
        2:{
            cellWidth:30,
            fontStyle:"bold",
            fillColor:[220,220,220]
        },
        3:{
            cellWidth:60
        }
    },
body:[

    [
        "CLIENTE",
        cliente,
        "RUC",
        ruc
    ],

    [
        "UBICACIÓN",
        ubicacion,
        "LOCAL",
        local
    ],

    [
        "EQUIPOS ENERGIZADOS",
        equiposEnergizados,
        "",
        ""
    ],

    [
        "SERVICIO",
        servicio,
        "FECHA",
        fecha
    ]

]
});
const alcance =
equipoActual.querySelector(
    ".alcance-box textarea"
)?.value || "";

let y =
pdf.lastAutoTable.finalY + 8;

const textoAlcance =
pdf.splitTextToSize(
    alcance,
    165
);

const alturaTexto =
textoAlcance.length * 5;

let yTabla =
y + alturaTexto + 5;

const alturaCaja =
    alturaTexto + 25;

pdf.rect(
    15,
    y,
    180,
    alturaCaja
);
pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    y,
    180,
    10,
    "F"
);

pdf.line(
    15,
    y + 10,
    195,
    y + 10
);
pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
"I. PRESENTACIÓN",
    20,
    y + 7
);
pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    textoAlcance,
    22,
    y + 16
);
pdf.rect(
    15,
    y,
    180,
    alturaCaja
);
const epps = [];

equipoActual.querySelectorAll(
    ".inspeccion-box .checklist-item"
).forEach(item => {
    const check = item.querySelector("input[type='checkbox']");
    const texto = item.querySelector("label")?.textContent.trim();

    if (check?.checked && texto) {
        epps.push("• " + texto);
    }
});
const tablasEquipo =
equipoActual.querySelectorAll(
    ".inspeccion-box .tabla-info"
);

const datosUPSAntiguo =
[...tablasEquipo[0].querySelectorAll("tbody tr")]
.map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

const datosUPSNuevo =
[...tablasEquipo[1].querySelectorAll("tbody tr")]
.map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

const datosCajaAntigua =
[...tablasEquipo[2].querySelectorAll("tbody tr")]
.map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

const datosCajaNueva =
[...tablasEquipo[3].querySelectorAll("tbody tr")]
.map(fila => fila.querySelector("td:nth-child(2) input")?.value || "");

let yInspeccion =
    y + alturaCaja + 15;

const antecedentes =
equipoActual.querySelector(
    ".inspeccion-box textarea"
)?.value || "";

const textoAntecedentes =
pdf.splitTextToSize(
    antecedentes,
    160
);

// =========================
// II. EPPS Y EQUIPO
// =========================

const alturaEpps =
    Math.max(
        35,
        25 + (epps.length * 6)
    );

pdf.rect(
    15,
    yInspeccion,
    180,
    alturaEpps
);

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yInspeccion,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yInspeccion + 10,
    195,
    yInspeccion + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "II. EPPS Y EQUIPO PARA LA EJECUCIÓN DEL SERVICIO",
    20,
    yInspeccion + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

let yEpps =
    yInspeccion + 20;

if (epps.length > 0) {

    epps.forEach(item => {

        pdf.text(
            item,
            22,
            yEpps
        );

        yEpps += 6;

    });

} else {

    pdf.text(
        "No se seleccionaron EPP.",
        22,
        yEpps
    );

}


// =========================
// DATOS DE LOS EQUIPOS
// =========================

let yEquipos =
    yInspeccion + alturaEpps + 10;


function tablaEquipoPDF(
    titulo,
    datos,
    incluirPotencia = false
) {

    const filas = [

        ["Equipo", datos[0] || ""],
        ["Marca", datos[1] || ""],
        ["Modelo", datos[2] || ""],
        ["Serie", datos[3] || ""]

    ];

    if (incluirPotencia) {

        filas.push(
            ["Potencia", datos[4] || ""]
        );

    }

    pdf.autoTable({

        startY: yEquipos,
        pageBreak: "avoid",
        margin:{
            left:20,
            right:20
        },

        theme:"grid",

        styles:{
            fontSize:8,
            lineColor:[0,0,0],
            lineWidth:0.2,
            cellPadding:2
        },

        headStyles:{
            fillColor:[220,220,220],
            textColor:[0,0,0],
            fontStyle:"bold"
        },

        head:[
            [
                titulo,
                "DATOS TÉCNICOS DEL EQUIPO"
            ]
        ],

        body: filas

    });

    yEquipos =
        pdf.lastAutoTable.finalY + 8;

}


// UPS ANTIGUO

tablaEquipoPDF(
    "UPS ANTIGUO",
    datosUPSAntiguo,
    true
);


// UPS NUEVO

tablaEquipoPDF(
    "UPS NUEVO",
    datosUPSNuevo,
    true
);


// =========================
// SEGUNDA PARTE DEL II
// =========================

yEquipos =
    pdf.lastAutoTable.finalY + 8;


// CAJA DE TRANSFERENCIA ANTIGUA

tablaEquipoPDF(
    "CAJA DE TRANSFERENCIA ANTIGUA",
    datosCajaAntigua,
    false
);


// CAJA DE TRANSFERENCIA NUEVA

tablaEquipoPDF(
    "CAJA DE TRANSFERENCIA NUEVA",
    datosCajaNueva,
    false
);


// =========================
// III. ANTECEDENTES
// =========================

let yAntecedentes =
    pdf.lastAutoTable.finalY + 15;

const alturaAntecedentes =
    (textoAntecedentes.length * 6) + 25;

if (
    yAntecedentes + alturaAntecedentes > 275
) {

    pdf.addPage();

    yAntecedentes = 15;

}

pdf.rect(
    15,
    yAntecedentes,
    180,
    alturaAntecedentes
);

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yAntecedentes,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yAntecedentes + 10,
    195,
    yAntecedentes + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "III. ANTECEDENTES",
    20,
    yAntecedentes + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    textoAntecedentes,
    22,
    yAntecedentes + 20
);

const bloqueTrabajos =
    equipoActual.querySelector(".actividades-box");

const textoTrabajos =
    bloqueTrabajos
        ? bloqueTrabajos.innerText
            .replace("IV. TRABAJOS REALIZADOS", "")
            .trim()
        : "";

const actividades =
    textoTrabajos
        .split("\n")
        .map(linea => linea.trim())
        .filter(linea => linea !== "");

pdf.addPage();

let yActividades = 15;

const textoActividades = [];

actividades.forEach(linea => {

    const partes =
    pdf.splitTextToSize(
        linea,
        160
    );

    textoActividades.push(...partes);

});
const alturaActividades =
(textoActividades.length * 6) + 15;

pdf.rect(
    15,
    yActividades,
    180,
    alturaActividades
);

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yActividades,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yActividades + 10,
    195,
    yActividades + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "IV. TRABAJOS REALIZADOS",
    20,
    yActividades + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

let yTexto = yActividades + 18;

for(let i = 0; i < textoActividades.length; i++){

    if(yTexto > 260){

        pdf.addPage();

        yTexto = 20;
    }

    pdf.text(
        textoActividades[i],
        22,
        yTexto
    );

    yTexto += 6;
}
console.log(textoActividades.length);
pdf.rect(
    15,
    yActividades,
    180,
    alturaActividades
);
pdf.addPage();

let yMediciones = 15;


pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yMediciones,
    180,
    10,
    "F"
);
pdf.line(
    15,
    yMediciones + 10,
    195,
    yMediciones + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "V. MEDICIONES ELÉCTRICAS",
    20,
    yMediciones + 7
);
pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    "Para validar el desempeño de los equipos y confirmar que los parámetros operan dentro de los valores establecidos, se registraron las mediciones eléctricas correspondientes al UPS y la caja de transferencia.",
    22,
    yMediciones + 20,
    { maxWidth: 160 }
);

pdf.text(
    "• Mediciones eléctricas en el UPS:",
    28,
    yMediciones + 45
);
const tablasMediciones =
equipoActual.querySelectorAll(
    ".tabla-mediciones"
);

const filasMedicionesUPS =
tablasMediciones[0].querySelectorAll("tr");

const filasMedicionesCaja =
tablasMediciones[1].querySelectorAll("tr");
console.log(filasMedicionesUPS);
console.log("Cantidad:", filasMedicionesUPS.length);

// Parámetros de tensión
const ptRS = filasMedicionesUPS[1].querySelectorAll("input")[0].value;
const ptST = filasMedicionesUPS[1].querySelectorAll("input")[1].value;
const ptTR = filasMedicionesUPS[1].querySelectorAll("input")[2].value;
// Tensión de entrada
const teRS = filasMedicionesUPS[2].querySelectorAll("input")[0].value;
const teST = filasMedicionesUPS[2].querySelectorAll("input")[1].value;
const teTR = filasMedicionesUPS[2].querySelectorAll("input")[2].value;

// Tensión bypass
const tbRS = filasMedicionesUPS[3].querySelectorAll("input")[0].value;
const tbST = filasMedicionesUPS[3].querySelectorAll("input")[1].value;
const tbTR = filasMedicionesUPS[3].querySelectorAll("input")[2].value;

// Tensión salida
const tsRS = filasMedicionesUPS[4].querySelectorAll("input")[0].value;
const tsST = filasMedicionesUPS[4].querySelectorAll("input")[1].value;
const tsTR = filasMedicionesUPS[4].querySelectorAll("input")[2].value;

// Parámetros de carga
const pcR = filasMedicionesUPS[5].querySelectorAll("input")[0].value;
const pcS = filasMedicionesUPS[5].querySelectorAll("input")[1].value;
const pcT = filasMedicionesUPS[5].querySelectorAll("input")[2].value;
// Corriente entrada
const ceR = filasMedicionesUPS[6].querySelectorAll("input")[0].value;
const ceS = filasMedicionesUPS[6].querySelectorAll("input")[1].value;
const ceT = filasMedicionesUPS[6].querySelectorAll("input")[2].value;

// Corriente salida
const csR = filasMedicionesUPS[7].querySelectorAll("input")[0].value;
const csS = filasMedicionesUPS[7].querySelectorAll("input")[1].value;
const csT = filasMedicionesUPS[7].querySelectorAll("input")[2].value;

// Frecuencia
const frecuencia =
filasMedicionesUPS[8].querySelector("input").value;

const temperatura =
filasMedicionesUPS[9].querySelector("input").value;
pdf.autoTable({

    startY: yMediciones + 55,

    margin:{
        left:30,
        right:30
    },

    theme:"grid",

    styles:{
        fontSize:8,
        halign:"center",
        lineColor:[0,0,0],
        lineWidth:0.2
    },

    headStyles:{
        fillColor:[220,220,220],
        textColor:[0,0,0],
        fontStyle:"bold"
    },

 
    didParseCell: function(data){

    if(data.row.index === 5 || data.row.index === 6){

        if(data.column.index === 1){
            data.cell.colSpan = 3;
        }

        if(data.column.index === 2 || data.column.index === 3){
            data.cell.text = "";
        }
    }

},
    didParseCell: function(data){

    if(data.row.index === 7 || data.row.index === 8){

        if(data.column.index === 1){
            data.cell.colSpan = 3;
        }

        if(data.column.index === 2 || data.column.index === 3){
            data.cell.text = "";
        }
    }

},
body:[

["Parámetros de tensión",ptRS,ptST,ptTR],

["Tensión de entrada",teRS,teST,teTR],

["Tensión de bypass",tbRS,tbST,tbTR],

["Tensión de salida",tsRS,tsST,tsTR],

["Parámetros de carga",pcR,pcS,pcT],

["Corriente de entrada",ceR,ceS,ceT],

["Corriente de salida",csR,csS,csT],

["Frecuencia",frecuencia,"",""],

["Temperatura ambiente",temperatura,"",""]

]

});

const finMediciones =
pdf.lastAutoTable.finalY + 10;

pdf.rect(
    15,
    yMediciones,
    180,
    finMediciones - yMediciones
);


// =========================
// MEDICIONES CAJA DE TRANSFERENCIA
// =========================

let yMedicionesCaja =
    pdf.lastAutoTable.finalY + 15;

pdf.rect(
    15,
    yMedicionesCaja,
    180,
    125
);

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yMedicionesCaja,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yMedicionesCaja + 10,
    195,
    yMedicionesCaja + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "V. MEDICIONES ELÉCTRICAS",
    20,
    yMedicionesCaja + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    "• Mediciones eléctricas de la caja de transferencia:",
    28,
    yMedicionesCaja + 25
);


// =========================
// DATOS CAJA DE TRANSFERENCIA
// =========================

const cteRS =
filasMedicionesCaja[1].querySelectorAll("input")[0].value;

const cteST =
filasMedicionesCaja[1].querySelectorAll("input")[1].value;

const cteTR =
filasMedicionesCaja[1].querySelectorAll("input")[2].value;


const ctsRS =
filasMedicionesCaja[2].querySelectorAll("input")[0].value;

const ctsST =
filasMedicionesCaja[2].querySelectorAll("input")[1].value;

const ctsTR =
filasMedicionesCaja[2].querySelectorAll("input")[2].value;


const ctbRS =
filasMedicionesCaja[3].querySelectorAll("input")[0].value;

const ctbST =
filasMedicionesCaja[3].querySelectorAll("input")[1].value;

const ctbTR =
filasMedicionesCaja[3].querySelectorAll("input")[2].value;


const cceR =
filasMedicionesCaja[4].querySelectorAll("input")[0].value;

const cceS =
filasMedicionesCaja[4].querySelectorAll("input")[1].value;

const cceT =
filasMedicionesCaja[4].querySelectorAll("input")[2].value;


const ccsR =
filasMedicionesCaja[5].querySelectorAll("input")[0].value;

const ccsS =
filasMedicionesCaja[5].querySelectorAll("input")[1].value;

const ccsT =
filasMedicionesCaja[5].querySelectorAll("input")[2].value;


const frecuenciaCajaInputs =
filasMedicionesCaja[6].querySelectorAll("input");

const frecuenciaCajaRS =
frecuenciaCajaInputs[0]?.value || "";

const frecuenciaCajaST =
frecuenciaCajaInputs[1]?.value || "";

const frecuenciaCajaTR =
frecuenciaCajaInputs[2]?.value || "";


const temperaturaCajaInputs =
filasMedicionesCaja[7].querySelectorAll("input");

const temperaturaCajaRS =
temperaturaCajaInputs[0]?.value || "";

const temperaturaCajaST =
temperaturaCajaInputs[1]?.value || "";

const temperaturaCajaTR =
temperaturaCajaInputs[2]?.value || "";

pdf.autoTable({

    startY: yMedicionesCaja + 35,

    margin:{
        left:30,
        right:30
    },

    theme:"grid",

    styles:{
        fontSize:8,
        halign:"center",
        lineColor:[0,0,0],
        lineWidth:0.2
    },

    headStyles:{
        fillColor:[220,220,220],
        textColor:[0,0,0],
        fontStyle:"bold"
    },

 head:[[
    "MEDICIONES ELÉCTRICAS",
    "R-S",
    "S-T",
    "T-R"
]],

didParseCell: function(data){

    if(data.row.index === 5 || data.row.index === 6){

        if(data.column.index === 1){
            data.cell.colSpan = 3;
        }

        if(data.column.index === 2 || data.column.index === 3){
            data.cell.text = "";
        }
    }

},

body:[

        ["Tensión de entrada",cteRS,cteST,cteTR],

        ["Tensión de salida hacia UPS",ctsRS,ctsST,ctsTR],

        ["Tensión de bypass",ctbRS,ctbST,ctbTR],

        ["Corriente de entrada",cceR,cceS,cceT],

        ["Corriente de salida",ccsR,ccsS,ccsT],

        ["Frecuencia",frecuenciaCajaRS,frecuenciaCajaST,frecuenciaCajaTR],

        ["Temperatura ambiente",temperaturaCajaRS,temperaturaCajaST,temperaturaCajaTR]

    ]

});


// =========================
// CONTINUAR CON VI
// =========================

pdf.addPage();

let yPruebas = 15;

pdf.rect(
    15,
    yPruebas,
    180,
    120
);

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yPruebas,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yPruebas + 10,
    195,
    yPruebas + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "VI. PRUEBAS DE FUNCIONAMIENTO",
    20,
    yPruebas + 7
);
pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    "Con el fin de verificar la operatividad del sistema de respaldo, se ejecutaron las pruebas de funcionamiento correspondientes. Los resultados son los siguientes:",
    22,
    yPruebas + 20,
    { maxWidth: 160 }
);
const resultadosPruebas =
equipoActual.querySelectorAll(
    ".tabla-pruebas select"
);
pdf.autoTable({

    startY: yPruebas + 35,

    margin:{
        left:25,
        right:25
    },

    theme:"grid",

    styles:{
        fontSize:8,
        lineColor:[0,0,0],
        lineWidth:0.2
    },

    headStyles:{
        fillColor:[220,220,220],
        textColor:[0,0,0],
        fontStyle:"bold"
    },

    head:[[
        "PRUEBA EJECUTADA",
        "RESULTADO"
    ]],
    body:[

    [
        "Encendido y operación inicial sin alarmas",
        resultadosPruebas[0]?.value || ""
    ],

    [
        "Funcionamiento en modo Línea (Online)",
        resultadosPruebas[1]?.value || ""
    ],

    [
        "Transferencia a bypass y retorno",
        resultadosPruebas[2]?.value || ""
    ],

    [
        "Operación del inversor bajo carga",
        resultadosPruebas[3]?.value || ""
    ],

    [
        "Estabilidad de tensión y frecuencia en salida",
        resultadosPruebas[4]?.value || ""
    ],

    [
        "Verificación del banco de baterías",
        resultadosPruebas[5]?.value || ""
    ],

    [
        "Restablecimiento a condiciones normales",
        resultadosPruebas[6]?.value || ""
    ]

]

});

const finPruebas =
pdf.lastAutoTable.finalY + 10;

pdf.rect(
    15,
    yPruebas,
    180,
    finPruebas - yPruebas
);


// =========================
// PRUEBAS CAJA DE TRANSFERENCIA
// =========================

let yPruebasCaja =
    pdf.lastAutoTable.finalY + 15;

pdf.rect(
    15,
    yPruebasCaja,
    180,
    120
);

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yPruebasCaja,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yPruebasCaja + 10,
    195,
    yPruebasCaja + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "VI. PRUEBAS DE FUNCIONAMIENTO",
    20,
    yPruebasCaja + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);



pdf.autoTable({

    startY: yPruebasCaja + 35,

    margin:{
        left:25,
        right:25
    },

    theme:"grid",

    styles:{
        fontSize:8,
        lineColor:[0,0,0],
        lineWidth:0.2
    },

    headStyles:{
        fillColor:[220,220,220],
        textColor:[0,0,0],
        fontStyle:"bold"
    },

    head:[[
        "PRUEBA EJECUTADA",
        "RESULTADO"
    ]],

    body:[

        [
            "Comprobación de conexiones de entrada y salida",
            resultadosPruebas[7]?.value || ""
        ],

        [
            "Verificación de tensión en entrada y salida",
            resultadosPruebas[8]?.value || ""
        ],

        [
            "Prueba de transferencia manual",
            resultadosPruebas[9]?.value || ""
        ],

        [
            "Prueba de transferencia automática",
            resultadosPruebas[10]?.value || ""
        ],

        [
            "Ensayo de transferencia de carga y retorno a fuente principal",
            resultadosPruebas[11]?.value || ""
        ],

        [
            "Restablecimiento a condiciones normales de operación",
            resultadosPruebas[12]?.value || ""
        ]

    ]

});

const finPruebasCaja =
pdf.lastAutoTable.finalY + 10;

pdf.rect(
    15,
    yPruebasCaja,
    180,
    finPruebasCaja - yPruebasCaja
);
function leerImagen(file){

    return new Promise((resolve)=>{

        const reader =
        new FileReader();

        reader.onload = function(e){

            resolve(
                e.target.result
            );

        };

        reader.readAsDataURL(file);

    });

}
pdf.addPage();

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "VII. REGISTRO VISUAL",
    15,
    15
);
const contenedoresFotos =
    equipoActual.querySelectorAll(
        ".reporteFotografico .foto-item"
    );

let contadorFotos = 0;

const posiciones = [
    {x:15,  y:25},
    {x:110, y:25},
    {x:15,  y:140},
    {x:110, y:140}
];

for(let i = 0; i < contenedoresFotos.length; i++){

    const contenedorFoto =
        contenedoresFotos[i];

const tituloInput =
    contenedorFoto.querySelector(
        ".titulo-foto-extra"
    );

let titulo = "";

if(tituloInput){

    const numero =
        contenedorFoto.querySelector(
            ".foto-titulo"
        )?.childNodes[0]?.textContent.trim() || "";

    titulo =
        `${numero} ${tituloInput.value.toUpperCase()}`.trim();

}else{

    titulo =
        contenedorFoto.querySelector(
            ".foto-titulo"
        )?.textContent.trim() || "";

}

    const archivos =
        contenedorFoto.querySelectorAll(
            'input[type="file"]'
        );

    for(let j = 0; j < archivos.length; j++){

        if(!archivos[j].files[0]){
            continue;
        }

        const imagenBase64 =
            await leerImagen(
                archivos[j].files[0]
            );

        const posicion =
            posiciones[
                contadorFotos % 4
            ];

        pdf.rect(
            posicion.x,
            posicion.y,
            80,
            70
        );

        pdf.addImage(
            imagenBase64,
            posicion.x + 2,
            posicion.y + 2,
            76,
            55
        );

        pdf.setFontSize(8);

        pdf.text(
            titulo,
            posicion.x,
            posicion.y + 63,
            {
                maxWidth:80
            }
        );

        contadorFotos++;

        if(
            contadorFotos % 4 === 0
        ){

            pdf.addPage();

            pdf.setFont(
                "times",
                "bold"
            );

            pdf.setFontSize(11);

            pdf.text(
                "VII. REGISTRO VISUAL",
                15,
                15
            );
        }
    }
}
const conclusiones =
equipoActual.querySelector(
".campo-conclusiones textarea"
)?.value || "";

pdf.addPage();

let yConclusiones = 15;

const textoConclusiones =
pdf.splitTextToSize(
    conclusiones,
    160
);

const alturaConclusiones =
(textoConclusiones.length * 5) + 25;



pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yConclusiones,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yConclusiones + 10,
    195,
    yConclusiones + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "VIII. RESULTADOS DE LA INSTALACIÓN",
    20,
    yConclusiones + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    textoConclusiones,
    22,
    yConclusiones + 20
);
pdf.rect(
    15,
    yConclusiones,
    180,
    alturaConclusiones
);


// =========================
// IX. OBSERVACIÓN
// =========================

pdf.addPage();

const observacion =
equipoActual.querySelectorAll(
    ".campo-conclusiones textarea"
)[1]?.value || "";

let yObservacion = 15;

const textoObservacion =
pdf.splitTextToSize(
    observacion,
    160
);

const alturaObservacion =
(textoObservacion.length * 5) + 25;

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yObservacion,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yObservacion + 10,
    195,
    yObservacion + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "IX. OBSERVACIÓN",
    20,
    yObservacion + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    textoObservacion,
    22,
    yObservacion + 20
);

pdf.rect(
    15,
    yObservacion,
    180,
    alturaObservacion
);


// =========================
// X. RECOMENDACIONES
// =========================

pdf.addPage();

const recomendaciones =
equipoActual.querySelector(
    ".campo-recomendaciones textarea"
)?.value || "";

let yRecomendaciones = 15;

const textoRecomendaciones =
pdf.splitTextToSize(
    recomendaciones,
    160
);

const alturaRecomendaciones =
(textoRecomendaciones.length * 5) + 25;

pdf.setFillColor(
    220,
    220,
    220
);

pdf.rect(
    15,
    yRecomendaciones,
    180,
    10,
    "F"
);

pdf.line(
    15,
    yRecomendaciones + 10,
    195,
    yRecomendaciones + 10
);

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);

pdf.text(
    "X. RECOMENDACIONES",
    20,
    yRecomendaciones + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    textoRecomendaciones,
    22,
    yRecomendaciones + 20
);

pdf.rect(
    15,
    yRecomendaciones,
    180,
    alturaRecomendaciones
);
const estadoSeleccionado =
equipoActual.querySelector(
'input[type="radio"]:checked'
)?.value || "";
const responsableNombre =
equipoActual.querySelector(
    '.tabla-responsable input[type="text"]'
)?.value || "";

const responsableCorreo =
equipoActual.querySelector(
    '.tabla-responsable input[type="email"]'
)?.value || "";

const responsableCargo =
equipoActual.querySelectorAll(
    '.tabla-responsable input[type="text"]'
)[1]?.value || "";

let yEstado =
yRecomendaciones +
alturaRecomendaciones +
20;

pdf.setFont(
    "times",
    "bold"
);

pdf.setFontSize(11);



  
 pdf.save(
    codigoEquipo + ".pdf"
);
    }
contador += equipos.length;

localStorage.setItem(
    "contadorMantenimientoUPS",
    contador
);

actualizarCodigo();

    }

