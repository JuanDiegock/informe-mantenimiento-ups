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
generarReporteFotografico();
});

function crearDatosGenerales(numero){

    return `

    <div class="equipo-card">

        <div class="equipo-header">
            EQUIPO ${numero}
        </div>

        <div class="seccion">

            <h2 class="seccion-titulo">
                DATOS GENERALES
            </h2>

            <div class="grid-datos">

                <div class="campo">
                    <label>Cliente</label>
                    <input type="text">
                </div>

                <div class="campo">
                    <label>RUC</label>
                    <input type="text">
                </div>

                <div class="campo">
                    <label>Ubicación</label>
                    <input type="text">
                </div>

                <div class="campo">
                    <label>Equipo</label>
                    <input type="text">
                </div>

                <div class="campo">
                    <label>Servicio</label>
                    <input type="text">
                </div>

                <div class="campo">
                    <label>Fecha del Servicio</label>
                    <input type="date">
                </div>

            </div>

            <div class="alcance-box">

                <h2 class="seccion-titulo">
                    I. ALCANCE
                </h2>

                <textarea>

El presente informe tiene como alcance describir las actividades realizadas durante el mantenimiento preventivo y/o correctivo del sistema UPS, verificando su correcto funcionamiento, estado operativo y condiciones generales de los componentes asociados.

                </textarea>

            </div>

            <div style="margin-top:25px;">

                <h2 class="seccion-titulo">
                    EQUIPO INTERVENIDO
                </h2>

                <table class="tabla-info">

                    <thead>

                        <tr>

                            <th>Equipo</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Capacidad</th>
                            <th>Serie</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>
                                <input type="text">
                            </td>

                            <td>
                                <input type="text">
                            </td>

                            <td>
                                <input type="text">
                            </td>

                            <td>
                                <input type="text">
                            </td>

                            <td>
                                <input type="text">
                            </td>

                        </tr>

                    </tbody>
            </table>

        </div>

<div class="inspeccion-box">

    <h2 class="seccion-titulo">
        II. INSPECCIÓN PRELIMINAR
    </h2>

    <textarea>

Los equipos detallados fueron instalados en el cuarto de tableros, en formato torre (piso), pertenecen al Tablero TD-UPS1. Durante la inspección, se verificó el estado del UPS existente (inoperativo), el estado de las conexiones eléctricas de entrada y salida, el sistema de puesta a tierra, así como el ambiente y las condiciones del tablero eléctrico para la instalación del nuevo UPS. Asimismo, se verifico el estado del banco externo de baterias y sus conexiones.   El UPS existente, marca LEGRAND, se encontró inoperativo, con fallas en la etapa de potencia (inversor), trabajando en modo bypass con la red comercial. Asimismo, se verifico el estado de las baterias del banco externo (60 unidades, capacidad 12V-18Ah), marca RITAR, año de fabricación 2024, las cuales se encontraron en buenas condiciones físicas y eléctricas.  

    </textarea>

</div>
<div class="actividades-box">

    <h2 class="seccion-titulo">
        III. ACTIVIDADES REALIZADAS
    </h2>

    <p style="margin-bottom:15px;">
        Durante el servicio de instalación y conexionado del sistema UPS/SAI y banco externo de baterías, se realizaron las siguientes actividades:
    </p>
    <div class="checklist-actividades">

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_1">
    <label for="act${numero}_1">
            Inspección visual del sistema UPS.
        </label>
    </div>

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_2">
    <label for="act${numero}_2">
            Verificación del estado general de conexiones eléctricas.
        </label>
    </div>

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_3">
    <label for="act${numero}_3">
            Limpieza interna y externa del equipo.
        </label>
    </div>

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_4">
    <label for="act${numero}_4">
            Ajuste y reapriete de terminales.
        </label>
    </div>

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_5">
    <label for="act${numero}_5">
            Verificación del sistema de ventilación.
        </label>
    </div>

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_6">
    <label for="act${numero}_6">
            Comprobación de alarmas y eventos registrados.
        </label>
    </div>

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_7">
    <label for="act${numero}_7">
            Verificación del estado del banco de baterías.
        </label>
    </div>

    <div class="checklist-item">
    <input type="checkbox" id="act${numero}_8">
    <label for="act${numero}_8">
            Pruebas funcionales del sistema UPS.
        </label>
    </div>

</div>

    <div style="margin-top:20px;">

        <label><strong>Observaciones adicionales</strong></label>

        <textarea
            placeholder="Ingrese observaciones adicionales..."
            rows="5">
        </textarea>

    </div>

</div>

<table class="tabla-mediciones">

    <tbody>
 <h2 class="seccion-titulo">
        IV. MEDICIONES ELECTRICAS
    </h2>

        <tr>
            <th colspan="4">
                MEDICIONES ELÉCTRICAS
            </th>
        </tr>

        <tr>
            <td><strong>Parámetros de tensión</strong></td>
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
            <td><strong>Parámetros de carga</strong></td>
            <th>R</th>
            <th>S</th>
            <th>T</th>
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
<div class="baterias-box">

    <h3 style="margin-top:30px;color:#003f73;">
        Mediciones en el BANCO DE BATERÍAS
    </h3>

    <table class="tabla-baterias">

        <tbody>

            <tr>
                <th colspan="2">
                    BANCO DE BATERÍAS
                </th>
            </tr>

            <tr>
                <td>Modelo</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Capacidad</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Cantidad</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Configuración</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Tensión nominal</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Tensión de flotación</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Tensión de descarga</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Autonomía estimada</td>
                <td><input type="text"></td>
            </tr>

            <tr>
                <td>Año de fabricación</td>
                <td><input type="text"></td>
            </tr>

        </tbody>

    </table>

</div>

<h2 class="seccion-titulo">
    V. PRUEBAS DE FUNCIONAMIENTO
</h2>

<p>
Con el fin de verificar la operatividad del sistema de respaldo, se ejecutaron las pruebas de funcionamiento correspondientes. Los resultados son los siguientes:
</p>

<table class="tabla-pruebas">

    <tr>
        <th>PRUEBA EJECUTADA</th>
        <th>RESULTADO</th>
    </tr>

    <tr>
        <td>Encendido y operación inicial sin alarmas</td>
        <td>
            <select>
                <option>Conforme</option>
                <option>Desconforme</option>
            </select>
        </td>
    </tr>

    <tr>
        <td>Funcionamiento en modo Línea (Online)</td>
        <td>
            <select>
                <option>Conforme</option>
                <option>Desconforme</option>
            </select>
        </td>
    </tr>

    <tr>
        <td>Transferencia a bypass y retorno</td>
        <td>
            <select>
                <option>Conforme</option>
                <option>Desconforme</option>
            </select>
        </td>
    </tr>

    <tr>
        <td>Operación del inversor bajo carga</td>
        <td>
            <select>
                <option>Conforme</option>
                <option>Desconforme</option>
            </select>
        </td>
    </tr>

    <tr>
        <td>Estabilidad de tensión y frecuencia en salida</td>
        <td>
            <select>
                <option>Conforme</option>
                <option>Desconforme</option>
            </select>
        </td>
    </tr>

    <tr>
        <td>Verificación del banco de baterías</td>
        <td>
            <select>
                <option>Conforme</option>
                <option>Desconforme</option>
            </select>
        </td>
    </tr>

    <tr>
        <td>Restablecimiento a condiciones normales</td>
        <td>
            <select>
                <option>Conforme</option>
                <option>Desconforme</option>
            </select>
        </td>
    </tr>

</table>
<h2 class="seccion-titulo">
    VI. CONCLUSIONES
</h2>

<div class="campo-conclusiones">

    <textarea
        rows="8"
        placeholder="Ingrese las conclusiones del servicio realizado..."
    ></textarea>

</div>
<h2 class="seccion-titulo">
    VII. RECOMENDACIONES
</h2>

<div class="campo-recomendaciones">
    <textarea
        rows="8"
        placeholder="Ingrese las recomendaciones del servicio realizado..."
    ></textarea>
</div>
<h2 class="seccion-titulo">
    VIII. ESTADO FINAL DEL EQUIPO
</h2>

<div class="estado-final">

    <label class="estado-opcion">
        <input type="radio" name="estadoEquipo${numero}" value="Operativo">
        OPERATIVO
    </label>

    <label class="estado-opcion">
        <input type="radio" name="estadoEquipo${numero}" value="Operativo con observación">
        OPERATIVO CON OBSERVACIÓN
    </label>

    <label class="estado-opcion">
        <input type="radio" name="estadoEquipo${numero}" value="Inoperativo">
        INOPERATIVO
    </label>

</div>
<table class="tabla-responsable">

    <tr>

        <td class="titulo-responsable">
            PROFESIONAL RESPONSABLE:
        </td>

        <td>
            <input type="text" placeholder="Nombre del responsable">

            <br><br>

            <input
                type="email"
                placeholder="Correo electrónico">
        </td>

        <td>
            <input
                type="text"
                placeholder="Área / Cargo">
        </td>

    </tr>

</table>
<h2 class="seccion-titulo">
    IX. REPORTE FOTOGRÁFICO
</h2>

<div class="reporteFotografico reporte-fotos"></div>

`;

}
const descripcionesFotos = [

"Vista del ambiente de trabajo",
"Vista del UPS antiguo (inoperativo)",
"Alarma presente en el UPS antiguo (fallas DC)",
"Vista del banco externo de baterías",
"Vista del tablero eléctrico",
"Circuitos conectados en el Tablero TD-UPS1",
"Desconexión del UPS antiguo",
"Desconexión del UPS antiguo",
"Vista del nuevo UPS, marca SALICRU",
"Placa de características del UPS",
"Vista del conexionado del UPS",
"Vista interna del banco de baterías",
"Modificación de configuración del banco",
"Vista de las baterías, marca RITAR",
"Mediciones individuales de las baterías",
"Mediciones generales del banco",
"Puesta en marcha del sistema UPS",
"Configuración de los valores nominales",
"Configuración de los valores nominales",
"Pruebas de funcionamiento en modo Bypass",
"Pruebas de funcionamiento en modo Inversor",
"Parámetros eléctricos de entrada",
"Parámetros eléctricos de salida",
"Parámetros eléctricos de baterías",
"Pruebas de funcionamiento en modo Baterías",
"Parámetros eléctricos en modo baterías",
"Mediciones eléctricas de salida",
"Mediciones eléctricas de salida",
"Mediciones de corriente de entrada",
"Mediciones de corriente de salida",
"Vista del nuevo UPS después de la instalación",
"Vista de los equipos finalizado el servicio",
"Vista del ambiente de trabajo finalizado el servicio",
"Vista final del UPS inoperativo"

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

                    <input
                        type="file"
                        accept="image/*">

                </div>
            `;

        });

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

    const pdf = new jsPDF("p","mm","a4");

    const codigo =
    document.getElementById("codigoInforme").value;

    const equipos =
document.querySelectorAll(".equipo-card");

    

    const logo = new Image();

    logo.src = "Infrasol.png";

logo.onload = async function(){

    for(let indice = 0; indice < equipos.length; indice++){
        const codigoEquipo =
`ITMU-${String(contador + indice).padStart(4,"0")}`;

        const equipoActual = equipos[indice];

const cliente =
equipoActual.querySelector(".grid-datos .campo:nth-child(1) input")?.value || "";

const ruc =
equipoActual.querySelector(".grid-datos .campo:nth-child(2) input")?.value || "";

const ubicacion =
equipoActual.querySelector(".grid-datos .campo:nth-child(3) input")?.value || "";

const equipo =
equipoActual.querySelector(".grid-datos .campo:nth-child(4) input")?.value || "";

const servicio =
equipoActual.querySelector(".grid-datos .campo:nth-child(5) input")?.value || "";

const fecha =
equipoActual.querySelector(".grid-datos .campo:nth-child(6) input")?.value || "";

        const pdf =
        new jsPDF("p","mm","a4");

        pdf.addImage(
            logo,
            "PNG",
            8,
            8,
            10,
            10
        );

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
            cellWidth:25,
            fontStyle:"bold",
            fillColor:[220,220,220]
        },
        1:{
            cellWidth:65
        },
        2:{
            cellWidth:25,
            fontStyle:"bold",
            fillColor:[220,220,220]
        },
        3:{
            cellWidth:65
        }
    },

    body:[

        [
            "CLIENTE:",
            cliente,
            "EQUIPO:",
            equipo
        ],

        [
            "RUC:",
            ruc,
            "SERVICIO:",
            servicio
        ],

        [
            "UBICACIÓN:",
            ubicacion,
            "FECHA:",
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

pdf.autoTable({

    startY: yTabla,

margin:{
    left:25
},

tableWidth:130,

    theme: "grid",
columnStyles:{
    0:{cellWidth:35},
    1:{cellWidth:25},
    2:{cellWidth:45},
    3:{cellWidth:25},
    4:{cellWidth:25}
},

    styles:{
        fontSize:8,
        halign:"center",
        valign:"middle",
        lineColor:[0,0,0],
        lineWidth:0.2
    },

    headStyles:{
        fillColor:[150,150,150],
        textColor:[255,255,255],
        fontStyle:"bold"
    },

    head:[[
        "EQUIPO",
        "MARCA",
        "MODELO",
        "CAPACIDAD",
        "SERIE"
    ]],

    body:[[
        eq,
        marca,
        modelo,
        capacidad,
        serie
    ]]

});

const alturaCaja =
(pdf.lastAutoTable.finalY - y) + 10;

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
    "1. ALCANCE:",
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
const inspeccion =
equipoActual.querySelector(
".inspeccion-box textarea"
)?.value || "";

let yInspeccion =
pdf.lastAutoTable.finalY + 15;

const textoInspeccion =
pdf.splitTextToSize(
    inspeccion,
    160
);

const alturaInspeccion =
(textoInspeccion.length * 5) + 25;

pdf.rect(
    15,
    yInspeccion,
    180,
    alturaInspeccion
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
    "2. INSPECCIÓN PRELIMINAR:",
    20,
    yInspeccion + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    textoInspeccion,
    22,
    yInspeccion + 20
);

pdf.rect(
    15,
    yInspeccion,
    180,
    alturaInspeccion
);


const actividades = [];

equipoActual.querySelectorAll(".checklist-item").forEach(item => {

    const check = item.querySelector("input[type='checkbox']");
    const texto = item.querySelector("label").textContent.trim();

    if(check.checked){
        actividades.push("• " + texto);
    }

});

const observaciones =
equipoActual.querySelector(".actividades-box textarea")?.value || "";

if(observaciones.trim() !== ""){
    actividades.push("");
    actividades.push("Observaciones:");
    actividades.push(observaciones);
}

pdf.addPage();

let yActividades = 15;

const textoActividades = [];

actividades.forEach(linea => {

    const partes = pdf.splitTextToSize(linea,160);

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
    "3. ACTIVIDADES REALIZADAS:",
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
    "4. MEDICIONES ELÉCTRICAS:",
    20,
    yMediciones + 7
);

pdf.setFont(
    "times",
    "normal"
);

pdf.setFontSize(10);

pdf.text(
    "Para validar el desempeño del equipo y confirmar que los parámetros operan dentro de los valores establecidos, se registraron las mediciones eléctricas correspondientes al UPS y el banco externo de baterías.",
    22,
    yMediciones + 20,
    { maxWidth: 160 }
);

pdf.text(
    "• Mediciones eléctricas en el UPS:",
    28,
    yMediciones + 45
);
const filasMediciones =
equipoActual.querySelectorAll(
".tabla-mediciones tr"
);
console.log(filasMediciones);
console.log("Cantidad:", filasMediciones.length);

// Tensión de entrada
const teRS = filasMediciones[2].querySelectorAll("input")[0].value;
const teST = filasMediciones[2].querySelectorAll("input")[1].value;
const teTR = filasMediciones[2].querySelectorAll("input")[2].value;

// Tensión bypass
const tbRS = filasMediciones[3].querySelectorAll("input")[0].value;
const tbST = filasMediciones[3].querySelectorAll("input")[1].value;
const tbTR = filasMediciones[3].querySelectorAll("input")[2].value;

// Tensión salida
const tsRS = filasMediciones[4].querySelectorAll("input")[0].value;
const tsST = filasMediciones[4].querySelectorAll("input")[1].value;
const tsTR = filasMediciones[4].querySelectorAll("input")[2].value;

// Corriente entrada
const ceR = filasMediciones[6].querySelectorAll("input")[0].value;
const ceS = filasMediciones[6].querySelectorAll("input")[1].value;
const ceT = filasMediciones[6].querySelectorAll("input")[2].value;

// Corriente salida
const csR = filasMediciones[7].querySelectorAll("input")[0].value;
const csS = filasMediciones[7].querySelectorAll("input")[1].value;
const csT = filasMediciones[7].querySelectorAll("input")[2].value;

// Frecuencia
const frecuencia =
filasMediciones[8].querySelector("input").value;

// Temperatura
const temperatura =
filasMediciones[9].querySelector("input").value;
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

    head:[[
        "MEDICIONES ELÉCTRICAS",
        "R-S",
        "S-T",
        "T-R"
    ]],
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

["Parámetros de tensión","R-S","S-T","T-R"],

["Tensión de entrada",teRS,teST,teTR],

["Tensión de bypass",tbRS,tbST,tbTR],

["Tensión de salida",tsRS,tsST,tsTR],

["Parámetros de carga","R","S","T"],

["Corriente de entrada",ceR,ceS,ceT],

["Corriente de salida",csR,csS,csT],

["Frecuencia",frecuencia,"",""],

["Temperatura ambiente",temperatura,"",""]

]

});
const filasBanco =
equipoActual.querySelectorAll(".tabla-baterias tr");

const modeloBat =
filasBanco[1].querySelector("input").value;

const capacidadBat =
filasBanco[2].querySelector("input").value;

const cantidadBat =
filasBanco[3].querySelector("input").value;

const configuracionBat =
filasBanco[4].querySelector("input").value;

const tensionNominalBat =
filasBanco[5].querySelector("input").value;

const tensionFlotacionBat =
filasBanco[6].querySelector("input").value;

const tensionDescargaBat =
filasBanco[7].querySelector("input").value;

const autonomiaBat =
filasBanco[8].querySelector("input").value;

const anioBat =
filasBanco[9].querySelector("input").value;
let yBanco =
pdf.lastAutoTable.finalY + 15;

pdf.text(
    "• Mediciones en el BANCO DE BATERÍAS:",
    28,
    yBanco
);

pdf.autoTable({
    columnStyles:{
    0:{
        cellWidth:55,
        fontStyle:"bold"
    },
    1:{
        cellWidth:85
    }
},
    startY: yBanco + 5,
margin:{
    left:30,
    right:30
},

    theme:"grid",
    headStyles:{
    fillColor:[220,220,220],
    textColor:[0,0,0],
    fontStyle:"bold"
},

    styles:{
        fontSize:8,
        lineColor:[0,0,0],
        lineWidth:0.2
    },


head:[[
    "BANCO DE BATERÍAS",
    ""
]],

body:[

    ["Modelo", modeloBat],
    ["Capacidad", capacidadBat],
    ["Cantidad", cantidadBat],
    ["Configuración", configuracionBat],
    ["Tensión nominal", tensionNominalBat],
    ["Tensión de flotación", tensionFlotacionBat],
    ["Tensión de descarga", tensionDescargaBat],
    ["Autonomía estimada", autonomiaBat],
    ["Año de fabricación", anioBat]

],

});
const finMediciones =
pdf.lastAutoTable.finalY + 10;

pdf.rect(
    15,
    yMediciones,
    180,
    finMediciones - yMediciones
);
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
    "5. PRUEBAS DE FUNCIONAMIENTO:",
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

const conclusiones =
equipoActual.querySelector(
".campo-conclusiones textarea"
)?.value || "";

let yConclusiones =
finPruebas + 10;

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
    "6. CONCLUSIONES:",
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
    "7. RECOMENDACIONES:",
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

pdf.text(
    "8. ESTADO FINAL DEL EQUIPO:",
    15,
    yEstado
);

pdf.autoTable({

    startY: yEstado + 5,

    theme:"grid",

    styles:{
        fontSize:9,
        halign:"center",
        valign:"middle",
        lineColor:[0,0,0],
        lineWidth:0.2
    },
    columnStyles:{
    0:{cellWidth:42},
    1:{cellWidth:78},
    2:{cellWidth:60}
},

    body:[

        [
            estadoSeleccionado === "Operativo"
          ? "OPERATIVO [X]"
            : "OPERATIVO [ ]",  

            estadoSeleccionado === "Operativo con observación"
            ? "OPERATIVO CON OBSERVACIÓN [X]"
: "OPERATIVO CON OBSERVACIÓN [ ]",

            estadoSeleccionado === "Inoperativo"
            ? "INOPERATIVO [X]"
: "INOPERATIVO [ ]",
        ],

        [
            "PROFESIONAL\nRESPONSABLE:",

            responsableNombre +
            "\n" +
            responsableCorreo,

            responsableCargo
        ]

    ]

});
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
    "9. REPORTE FOTOGRÁFICO:",
    15,
    15
);
const fotos =
equipoActual.querySelectorAll(
'.reporteFotografico input[type="file"]'
);
let x = 15;
let yFoto = 25;

let contadorFotos = 0;

const posiciones = [

    {x:15,  y:25},
    {x:110, y:25},

    {x:15,  y:140},
    {x:110, y:140}

];

for(let i = 0; i < fotos.length; i++){

    if(!fotos[i].files[0]) continue;

    const imagenBase64 =
    await leerImagen(
        fotos[i].files[0]
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
        descripcionesFotos[i],
        posicion.x,
        posicion.y + 63,
        { maxWidth:80 }
    );

    contadorFotos++;

    if(
        contadorFotos % 4 === 0 &&
        i < fotos.length - 1
    ){

        pdf.addPage();

        pdf.setFont(
            "times",
            "bold"
        );

        pdf.setFontSize(11);

        pdf.text(
            "9. REPORTE FOTOGRÁFICO:",
            15,
            15
        );

    }

}
  
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

    };

}
