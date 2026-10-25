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

  // Nodo que construye este equipo (uno de: luz, presencia, aire, ruido,
  // consumo, suelo, red). Define qué sensor específico se destaca.
  nodoAsignado: "suelo",

  // --- Acceso al proyecto ---
  // previewUrl: dirección pública del dashboard (GitHub Pages, Netlify, Grafana
  // con acceso público, etc.). Mientras esté vacía se muestra el aviso "sin publicar".
  previewUrl: "",
  repoUrl: "https://github.com/sofiaav6995-sudo/sexto-proyecto2026",                        // repositorio del código (GitHub)

  // Carta Gantt en Google Sheets: Archivo → Compartir → Publicar en la Web →
  // Insertar → copiar la dirección de src="…" (termina en /pubhtml?...)
  ganttSheetUrl: "https://docs.google.com/spreadsheets/d/1hxVVxGKrQ8d4_hzwxXjZPC_Tk9PpDAv138S7JZd0DAw/edit?usp=sharing",

  // --- Integrantes ---
  // rol: "pm" | "desarrollo" | "aplicaciones" | "infraestructura"
  // foto: ruta a una imagen (ej. "assets/img/integrantes/ana.jpg") o "" para iniciales
  integrantes: [
    { nombre: "Ávila, Sofía", rol: "pm", foto: "", github: "" },
    { nombre: "Coronel, Camila", rol: "aplicaciones", foto: "", github: "" },
    { nombre: "Diez, Emiliano", rol: "desarrollo", foto: "", github: "" },
    { nombre: "Madariaga, Juliana", rol: "infraestructura", foto: "", github: "" },
    { nombre: "Raimondo, Mía", rol: "desarrollo", foto: "", github: "" }
  ],


  // --- Docentes (el auditor recibe los reportes del Project Manager) ---
  docentes: [
    { asignatura: "Laboratorio de Hardware", nombre: "A completar" },
    { asignatura: "Laboratorio de Sistemas Operativos", nombre: "A completar" },
    { asignatura: "Laboratorio de Aplicaciones", nombre: "A completar" },
    { asignatura: "Desarrollo de Software", nombre: "A completar" },
    { asignatura: "Investigación Operativa", nombre: "A completar" },
    { asignatura: "Seguridad Informática", nombre: "A completar" }
  ],
  auditor: "A completar",

  // --- Control de cambios: agreguen una fila por cada cambio de alcance ---
  cambios: [
    { version: "0.1", fecha: "", responsable: "PM", detalle: "Versión inicial: objetivo, alcance, equipo y roles a partir de la propuesta ejecutiva." },
    { version: "0.2", fecha: "", responsable: "Equipo", detalle: "Carta Gantt y plan de sprints. Selección del nodo asignado y primer BOM." },
    { version: "0.3", fecha: "", responsable: "Infraestructura", detalle: "Diagrama de servicios del servidor y matriz de riesgos inicial." }
  ],

  // --- Carta Gantt: fechas en formato AAAA-MM-DD ---
  // area: pm | hardware | so | desarrollo | aplicaciones | io | seginfo
  // hito: true -> se dibuja como rombo (entregable)
  gantt: [
    { etapa: "Etapa 1 · Lanzamiento y análisis", tareas: [
      { nombre: "Presentación del desafío y formación de equipos", area: "pm", inicio: "2026-03-02", fin: "2026-03-13" },
      { nombre: "Definición del problema e investigación de antecedentes", area: "pm", inicio: "2026-03-09", fin: "2026-03-27" },
      { nombre: "Definición de variables a medir", area: "hardware", inicio: "2026-03-23", fin: "2026-04-03" },
      { nombre: "Bosquejo de arquitectura", area: "so", inicio: "2026-03-30", fin: "2026-04-17" },
      { nombre: "Inventario de activos y riesgos iniciales", area: "seginfo", inicio: "2026-04-06", fin: "2026-04-17" },
      { nombre: "Anteproyecto + diagrama inicial", area: "pm", inicio: "2026-04-17", fin: "2026-04-17", hito: true }
    ]},
    { etapa: "Etapa 2 · Diseño técnico", tareas: [
      { nombre: "Selección de sensores y pruebas individuales", area: "hardware", inicio: "2026-04-20", fin: "2026-05-15" },
      { nombre: "Matriz de decisión de sensores", area: "io", inicio: "2026-04-20", fin: "2026-05-01" },
      { nombre: "Definición de tópicos MQTT", area: "desarrollo", inicio: "2026-05-04", fin: "2026-05-15" },
      { nombre: "Diseño del servidor", area: "so", inicio: "2026-05-04", fin: "2026-05-22" },
      { nombre: "Wireframe del dashboard", area: "aplicaciones", inicio: "2026-05-11", fin: "2026-05-29" },
      { nombre: "Red PERT/CPM del proyecto", area: "io", inicio: "2026-05-18", fin: "2026-05-29" },
      { nombre: "Diseño del nodo + primer BOM", area: "pm", inicio: "2026-05-29", fin: "2026-05-29", hito: true }
    ]},
    { etapa: "Etapa 3 · Prototipo funcional", tareas: [
      { nombre: "Nodo ESP32 en protoboard", area: "hardware", inicio: "2026-06-01", fin: "2026-06-26" },
      { nombre: "Firmware: lectura de sensores", area: "desarrollo", inicio: "2026-06-08", fin: "2026-07-03" },
      { nombre: "Servidor Linux + Mosquitto", area: "so", inicio: "2026-06-01", fin: "2026-06-26" },
      { nombre: "Hardening básico del servidor", area: "seginfo", inicio: "2026-06-22", fin: "2026-07-10" },
      { nombre: "Primeras pruebas MQTT", area: "desarrollo", inicio: "2026-06-29", fin: "2026-07-10" },
      { nombre: "Dashboard mínimo", area: "aplicaciones", inicio: "2026-06-15", fin: "2026-07-17" },
      { nombre: "Demo parcial funcional", area: "pm", inicio: "2026-07-17", fin: "2026-07-17", hito: true }
    ]},
    { etapa: "Etapa 4 · Integración", tareas: [
      { nombre: "Integración nodos ↔ servidor", area: "desarrollo", inicio: "2026-08-03", fin: "2026-08-28" },
      { nombre: "Base de datos histórica", area: "so", inicio: "2026-08-03", fin: "2026-08-21" },
      { nombre: "Seguridad MQTT: usuarios, ACL y TLS", area: "seginfo", inicio: "2026-08-17", fin: "2026-09-04" },
      { nombre: "Visualización unificada", area: "aplicaciones", inicio: "2026-08-17", fin: "2026-09-18" },
      { nombre: "Mejoras de firmware (reconexión, errores)", area: "desarrollo", inicio: "2026-08-24", fin: "2026-09-11" },
      { nombre: "Optimización de ubicación y presupuesto", area: "io", inicio: "2026-08-31", fin: "2026-09-18" },
      { nombre: "Pruebas de estabilidad", area: "pm", inicio: "2026-09-07", fin: "2026-09-25" },
      { nombre: "Versión beta del sistema", area: "pm", inicio: "2026-09-25", fin: "2026-09-25", hito: true }
    ]},
    { etapa: "Etapa 5 · Producto final", tareas: [
      { nombre: "Montaje prolijo y gabinete definitivo", area: "hardware", inicio: "2026-09-28", fin: "2026-10-23" },
      { nombre: "Auditoría de seguridad del sistema", area: "seginfo", inicio: "2026-10-05", fin: "2026-10-23" },
      { nombre: "Documentación completa", area: "pm", inicio: "2026-10-05", fin: "2026-10-30" },
      { nombre: "Pruebas finales y validación", area: "pm", inicio: "2026-10-19", fin: "2026-10-30" },
      { nombre: "Versión candidata final", area: "pm", inicio: "2026-10-30", fin: "2026-10-30", hito: true }
    ]},
    { etapa: "Etapa 6 · Presentación y defensa", tareas: [
      { nombre: "Afiche, panel y video breve", area: "aplicaciones", inicio: "2026-11-02", fin: "2026-11-13" },
      { nombre: "Ensayo de demo en vivo", area: "pm", inicio: "2026-11-09", fin: "2026-11-20" },
      { nombre: "Defensa interdisciplinaria", area: "pm", inicio: "2026-11-20", fin: "2026-11-20", hito: true }
    ]}
  ],
  // Períodos sin clases que se sombrean en la Gantt
  receso: [{ nombre: "Receso invernal", inicio: "2026-07-20", fin: "2026-07-31" }],
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
