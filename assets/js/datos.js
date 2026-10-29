/* =====================================================================
   DATOS DEL EQUIPO — este es el ÚNICO archivo que tienen que editar
   para personalizar la documentación. Cambien los textos entre comillas.
   ===================================================================== */

window.PROYECTO = {
  // --- Identidad del producto (elijan un nombre: Smart Campus IoT, Aula Viva,
  //     Campus Sense, Escuela Inteligente, Nodo Escolar, EduSense u otro) ---
  nombre: "Smart Campus IoT",
  bajada: "Estación de monitoreo ambiental autónoma, portátil y de bajo costo con ESP32 Super mini",
  equipo: "Equipo 6",                 // nombre del equipo
  curso: "6º Info \"A\"",
  institucion: "Instituto Leonardo Murialdo",
  ciclo: "2026",

  // Nodo que construye este equipo (uno de: luz, suelo [Nodo exterior], red). Define qué sensor específico se destaca.
  nodoAsignado: "suelo",

  // --- Acceso al proyecto ---
  // previewUrl: dirección pública del dashboard (GitHub Pages, Netlify, Grafana
  // con acceso público, etc.). Mientras esté vacía se muestra el aviso "sin publicar".
  previewUrl: "",
  repoUrl: "https://github.com/sofiaav6995-sudo/sexto-proyecto2026",                        // repositorio del código (GitHub)

  // (Ya no se usa: la Carta Gantt se arma desde "gantt", más abajo.)
  ganttSheetUrl: "",

  // --- Integrantes ---
  // rol: "pm" | "desarrollo" | "aplicaciones" | "infraestructura"
  // foto: ruta a una imagen (ej. "assets/img/integrantes/ana.jpg") o "" para iniciales
  integrantes: [
    { nombre: "Ávila Sofía", rol: "pm", foto: "", github: "" },
    { nombre: "Coronel Camila", rol: "aplicaciones", foto: "", github: "" },
    { nombre: "Diez Emiliano", rol: "desarrollo", foto: "", github: "" },
    { nombre: "Madariaga Juliana", rol: "infraestructura", foto: "", github: "" },
    { nombre: "Raimondo Mía", rol: "desarrollo", foto: "", github: "" }
  ],


  // --- Docentes (el auditor recibe los reportes del Project Manager) ---
  docentes: [
    { asignatura: "Laboratorio de Hardware", nombre: "Werner Gustavo" },
    { asignatura: "Laboratorio de Sistemas Operativos", nombre: "Martini Diego" },
    { asignatura: "Laboratorio de Aplicaciones", nombre: "De Donato Marcelo" },
    { asignatura: "Desarrollo de Software", nombre: "Barral Martín" },
    { asignatura: "Investigación Operativa", nombre: "Santisi Gabriel" },
    { asignatura: "Seguridad Informática", nombre: "Pedaci Lourdes" }
  ],
  auditor: "A completar",

  // --- Control de cambios: agreguen una fila por cada cambio de alcance ---
  cambios: [
    { version: "0.1", fecha: "", responsable: "PM", detalle: "Versión inicial: objetivo, alcance, equipo y roles a partir de la propuesta ejecutiva." },
    { version: "0.2", fecha: "", responsable: "Equipo", detalle: "Carta Gantt y plan de sprints. Selección del nodo asignado y primer BOM." },
    { version: "0.3", fecha: "", responsable: "Infraestructura", detalle: "Diagrama de servicios del servidor y matriz de riesgos inicial." }
  ],

  // --- Carta Gantt (planificación del equipo, según la planilla actualizada) ---
  // area: pm | aplicaciones | desarrollo | hardware (infraestructura) | io (documentación)
  // resp / avance (0-100) / bitacora se muestran en la tabla 8.1; hito: true -> rombo
  gantt: [
    { etapa: "Etapa 1 · Equipo y roles", tareas: [
      { nombre: "Armado de equipo", area: "pm", inicio: "2026-08-11", fin: "2026-08-14", resp: "Todo el equipo", avance: 100, bitacora: "Se conformó el equipo de trabajo y se organizaron los integrantes para comenzar con el proyecto." },
      { nombre: "Definimos Roles", area: "pm", inicio: "2026-08-14", fin: "2026-08-14", resp: "Todo el equipo (PM: Ávila · Aplicaciones: Coronel · Desarrollo: Diez · Infraestructura: Madariaga · Documentación: Raimondo)", avance: 100, bitacora: "Se realizó la reunión inicial de equipo donde definimos y distribuimos las responsabilidades y roles principales del proyecto (PM, Aplicaciones, Desarrollo, Infraestructura y Documentación) para garantizar un seguimiento estructurado." }
    ]},
    { etapa: "Etapa 2 · Materiales y compra", tareas: [
      { nombre: "Lista de materiales", area: "pm", inicio: "2026-08-18", fin: "2026-08-18", resp: "Todo el equipo", avance: 100, bitacora: "Ya tenemos la bateria de 12v, la caja de herramientas (faltan herramientas). Estuvimos observando en la pagina web los materiales necesarios para el proyecto." },
      { nombre: "Busqueda, seleccion", area: "pm", inicio: "2026-08-20", fin: "2026-08-21", resp: "Todo el equipo", avance: 100, bitacora: "Se realizó la búsqueda de los materiales necesarios para el proyecto en una página web, comparando las opciones disponibles y seleccionando los materiales adecuados." },
      { nombre: "Juntar dinero", area: "pm", inicio: "2026-08-20", fin: "2026-08-21", resp: "Todo el equipo", avance: 100, bitacora: "Se reunio el dinero necesario para la compra de materiales." },
      { nombre: "Compra de materiales", area: "desarrollo", inicio: "2026-08-20", fin: "2026-08-21", resp: "Diez Emiliano", avance: 100, bitacora: "" },
      { nombre: "Recepcion de materiales", area: "desarrollo", inicio: "2026-08-21", fin: "2026-08-21", resp: "Diez Emiliano", avance: 100, bitacora: "Se recibieron los materiales necesarios para comenzar el desarrollo del proyecto." }
    ]},
    { etapa: "Etapa 3 · ESP32 y display", tareas: [
      { nombre: "Mac adress", area: "pm", inicio: "2026-08-25", fin: "2026-08-28", resp: "Ávila Sofia · Diez Emiliano · Madariaga Juliana", avance: 100, bitacora: "Pudimos encontrar la direccion MAC de este ESP32" },
      { nombre: "Documentacion", area: "pm", inicio: "2026-08-25", fin: "2026-08-28", resp: "Ávila Sofia · Raimondo Mia", avance: 50, bitacora: "Actualizacion de la documentacion" },
      { nombre: "Display", area: "pm", inicio: "2026-08-25", fin: "2026-08-28", resp: "Ávila Sofia · Diez Emiliano · Madariaga Juliana", avance: 100, bitacora: "" }
    ]},
    { etapa: "Etapa 4 · Sensores, código y diseño", tareas: [
      { nombre: "Prueba de conexión de sensores", area: "hardware", inicio: "2026-09-22", fin: "2026-09-22", resp: "Madariaga Juliana", avance: 100, bitacora: "Conexión del sensor de humedad de suelo, calidad de aire y luz ambiente a los pines asignados del ESP32." },
      { nombre: "Pruebas individuales de código", area: "desarrollo", inicio: "2026-09-22", fin: "2026-09-22", resp: "Diez Emiliano", avance: 100, bitacora: "Verificación de lecturas independientes de cada sensor desde el entorno de desarrollo y monitor serie." },
      { nombre: "Boceto de interfaz visual", area: "aplicaciones", inicio: "2026-09-22", fin: "2026-09-22", resp: "Coronel Camila", avance: 100, bitacora: "Armado del esquema visual y distribución de los datos de los 3 sensores para la pantalla/aplicación." },
      { nombre: "Registro de las actividades", area: "io", inicio: "2026-09-22", fin: "2026-09-22", resp: "Raimondo Mia", avance: 100, bitacora: "Documentación técnica de pines utilizados, fichas de sensores y actualización de la bitácora diaria." },
      { nombre: "Diseño de la infraestructura", area: "hardware", inicio: "2026-09-29", fin: "2026-09-29", resp: "Madariaga Juliana", avance: 100, bitacora: "Ubicamos donde irian los sensores y los componentes en la caja de paso estanca." },
      { nombre: "Calibración y escala de datos", area: "desarrollo", inicio: "2026-09-29", fin: "2026-09-29", resp: "Diez Emiliano", avance: 100, bitacora: "lecturas de la unidad reales (porcentaje de humedad, nivel de luz y temperatura en el display)." },
      { nombre: "Conexion de los sensores (con usb)", area: "hardware", inicio: "2026-09-29", fin: "2026-09-29", resp: "Madariaga Juliana", avance: 100, bitacora: "Reorganización en el protoboard." },
      { nombre: "Control de cronograma", area: "pm", inicio: "2026-09-29", fin: "2026-09-29", resp: "Ávila Sofia", avance: 100, bitacora: "Verificación de las tareas para evitar demoras." },
      { nombre: "Continuacion de la documentacion", area: "io", inicio: "2026-09-29", fin: "2026-09-29", resp: "Raimondo Mia", avance: 100, bitacora: "Continuamos con la documentacion actualizando la informacion." }
    ]},
    { etapa: "Etapa 5 · WiFi, plataforma y circuito", tareas: [
      { nombre: "instalacion de antena WIFI", area: "hardware", inicio: "2026-10-06", fin: "2026-10-06", resp: "Madariaga Juliana · Ávila Sofia", avance: 100, bitacora: "Configuración de la red WiFi en el ESP32 para transmisión en tiempo real a la nube/plataforma." },
      { nombre: "Vinculación con plataforma web", area: "aplicaciones", inicio: "2026-10-06", fin: "2026-10-06", resp: "Coronel Camila", avance: 100, bitacora: "Configuración del tablero web/app para la recepción continua de parámetros ambientales." },
      { nombre: "Diseño físico de caja", area: "pm", inicio: "2026-10-06", fin: "2026-10-06", resp: "Ávila Sofia · Madariaga Juliana · Raimondo Mia", avance: 100, bitacora: "Planificación de espacio interior y perforaciones para sensores expuestos en la caja de herramientas." },
      { nombre: "Diseño del circuito", area: "hardware", inicio: "2026-10-07", fin: "2026-10-07", resp: "Madariaga Juliana · Ávila Sofia", avance: 50, bitacora: "Realizamos el diseño de la placa experimental con las conexiones" },
      { nombre: "Soldar los componentes", area: "hardware", inicio: "2026-10-08", fin: "2026-10-08", resp: "Madariaga Juliana", avance: 0, bitacora: "Soldamos los componentes a la placa experimental" },
      { nombre: "Conectar la bateria y el regulador", area: "hardware", inicio: "2026-10-09", fin: "2026-10-09", resp: "Madariaga Juliana", avance: 0, bitacora: "Planificación de la alimentación" },
      { nombre: "Validación de flujo completo", area: "pm", inicio: "2026-10-06", fin: "2026-10-06", resp: "Ávila Sofia", avance: 50, bitacora: "Control de transmisión integral (Sensor -> ESP32 -> WiFi -> Aplicación)." },
      { nombre: "Programacion de envio WIFI", area: "desarrollo", inicio: "2026-10-06", fin: "2026-10-07", resp: "Diez Emiliano", avance: 100, bitacora: "Elaboración de la sección de comunicaciones y protocolos en el informe técnico." }
    ]},
    { etapa: "Etapa 6 · Montaje, pruebas y documentación", tareas: [
      { nombre: "Montaje final en gabinete", area: "hardware", inicio: "2026-10-13", fin: "2026-10-13", resp: "Madariaga Juliana", avance: 0, bitacora: "Fijación de batería, ESP32, display y sensores de manera fija y limpia dentro del gabinete." },
      { nombre: "Panel de control y alertas", area: "aplicaciones", inicio: "2026-10-13", fin: "2026-10-13", resp: "Coronel Camila", avance: 100, bitacora: "Incorporación de alertas visuales en la aplicación ante valores fuera de rango normal." },
      { nombre: "Reconexión y frecuencia de muestreo", area: "desarrollo", inicio: "2026-10-13", fin: "2026-10-13", resp: "Diez Emiliano", avance: 100, bitacora: "Ajuste del tiempo entre mediciones y programación de reconexión automática ante caídas de WiFi." },
      { nombre: "Inspección de prototipo ensamblado", area: "pm", inicio: "2026-10-13", fin: "2026-10-13", resp: "Ávila Sofia", avance: 0, bitacora: "Pruebas generales de resistencia y funcionalidad del conjunto armado." },
      { nombre: "Fotografía y Manual Técnico", area: "io", inicio: "2026-10-13", fin: "2026-10-13", resp: "Raimondo Mia", avance: 50, bitacora: "Registro fotográfico del ensamble y redacción del Manual Técnico del sistema." },
      { nombre: "Poster del proyecto", area: "aplicaciones", inicio: "2026-10-14", fin: "2026-10-23", resp: "Coronel Camila", avance: 50, bitacora: "Realizamos el poster para presentar el proyecto." },
      { nombre: "Pruebas de campo en entorno real", area: "desarrollo", inicio: "2026-10-20", fin: "2026-10-20", resp: "Diez Emiliano · Madariaga Juliana", avance: 100, bitacora: "Medición real de humedad en tierra, variaciones de luz y detección de calidad de aire en vivo." },
      { nombre: "Validación de historial y alertas", area: "aplicaciones", inicio: "2026-10-20", fin: "2026-10-20", resp: "Coronel Camila", avance: 0, bitacora: "Verificación de persistencia de datos históricos y recepción correcta de notificaciones de alerta." },
      { nombre: "Gestión de correcciones", area: "pm", inicio: "2026-10-20", fin: "2026-10-20", resp: "Ávila Sofia", avance: 50, bitacora: "Coordinación para la resolución rápida de fallas detectadas en la prueba de campo." },
      { nombre: "Manual de Usuario", area: "io", inicio: "2026-10-20", fin: "2026-10-20", resp: "Raimondo Mia", avance: 0, bitacora: "Redacción de la guía de uso del dispositivo para el usuario final." }
    ]},
    { etapa: "Etapa 7 · Cierre y presentación", tareas: [
      { nombre: "Cierre de carpeta técnica", area: "io", inicio: "2026-10-27", fin: "2026-10-27", resp: "Raimondo Mia", avance: 0, bitacora: "Consolidación y revisión final del informe técnico, la bitácora y la documentación." },
      { nombre: "Organización de presentación oral", area: "pm", inicio: "2026-10-27", fin: "2026-10-27", resp: "Ávila Sofia", avance: 0, bitacora: "Definición de la estructura de la exposición, asignación de temas y ensayo general." },
      { nombre: "Congelamiento de código y hardware", area: "desarrollo", inicio: "2026-10-27", fin: "2026-10-27", resp: "Diez Emiliano · Madariaga Juliana · Coronel Camila", avance: 0, bitacora: "Verificación final de que el sistema físico, firmware y app funcionen sin hacer más modificaciones." },
      { nombre: "Presentación en vivo", area: "pm", inicio: "2026-11-03", fin: "2026-11-03", resp: "Todo el equipo", avance: 0, bitacora: "Exposición oral del proyecto, demostración del dispositivo midiendo en tiempo real y entrega de carpeta.", hito: true }
    ]}
  ],
  // Períodos sin clases que se sombrean en la Gantt (ninguno por ahora)
  receso: [],
  // Duración de cada sprint en semanas (Scrum recomienda entre 1 y 4)
  semanasPorSprint: 3,

  // --- Presupuesto / BOM: precios en pesos argentinos (completar) ---
  bom: [
    { item: "ESP32 Super mini", cant: 1, unit: 0 },
    { item: "Sensor DHT22 (temperatura + humedad)", cant: 1, unit: 0 },
    { item: "Sensor BH1750 (intensidad lumínica)", cant: 1, unit: 0 },
    { item: "Sensor capacitivo de humedad de suelo", cant: 1, unit: 0 },
    { item: "Display LCD con módulo I2C", cant: 1, unit: 0 },
    { item: "Batería 12 V", cant: 1, unit: 0 },
    { item: "Step-down (regulador de tensión)", cant: 1, unit: 0 },
    { item: "Placa experimental 5x7", cant: 1, unit: 0 },
    { item: "Pines", cant: 1, unit: 0 },
    { item: "Cables macho-hembra", cant: 1, unit: 0 },
    { item: "Borneras", cant: 1, unit: 0 },
    { item: "Caja de paso estanca", cant: 1, unit: 0 }
  ],


  // --- Bitácora de pruebas: una fila por prueba ---
  pruebas: [
    { fecha: "", prueba: "Lectura del DHT22 por monitor serie", esperado: "Valores estables cada 5 s", resultado: "", estado: "pendiente" },
    { fecha: "", prueba: "Lectura del BH1750 (lux) por monitor serie", esperado: "Valor en lux que cambia al tapar y destapar el sensor", resultado: "", estado: "pendiente" },
    { fecha: "", prueba: "Lectura del sensor capacitivo de humedad de suelo", esperado: "Valor distinto en tierra seca y en tierra húmeda", resultado: "", estado: "pendiente" },
    { fecha: "", prueba: "Display LCD con todos los sensores juntos", esperado: "Se muestran temperatura, humedad, luz y humedad de suelo", resultado: "", estado: "pendiente" },
    { fecha: "", prueba: "Publicación MQTT al broker", esperado: "Mensaje visible con mosquitto_sub", resultado: "", estado: "pendiente" },
    { fecha: "", prueba: "Corte de WiFi durante 2 minutos", esperado: "El nodo se reconecta solo", resultado: "", estado: "pendiente" },
    { fecha: "", prueba: "Publicar sin usuario/contraseña", esperado: "El broker rechaza la conexión", resultado: "", estado: "pendiente" }
  ]
};
