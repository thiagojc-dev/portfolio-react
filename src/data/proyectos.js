
export const proyectos = [
  {
    id: "todo-list",
    tag: "Vanilla JS",
    titulo: "To-Do List",
    descripcionCorta: "Lista de tareas con guardado en localStorage.",
    descripcionLarga:
      "Aplicación de tareas con agregar, completar, filtrar y borrar. El estado se persiste en localStorage usando JSON.stringify/parse, y la UI se re-renderiza manualmente en cada cambio.",
    demo: "https://thiagojc-dev.github.io/todo-list/",
    codigo: "https://github.com/thiagojc-dev/todo-list",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "buscador-clima",
    tag: "API",
    titulo: "Buscador de Clima",
    descripcionCorta: "Consulta el clima de cualquier ciudad en tiempo real.",
    descripcionLarga:
      "Consume la API pública de Open-Meteo en dos pasos: primero geocoding para convertir el nombre de la ciudad en coordenadas, y después el clima actual con esas coordenadas. Maneja estados de carga, error y guarda búsquedas recientes en localStorage.",
    demo: "https://thiagojc-dev.github.io/buscador-clima/",
    codigo: "https://github.com/thiagojc-dev/buscador-clima",
    stack: ["JavaScript", "Fetch API", "Open-Meteo"],
  },
  {
    id: "calculadora",
    tag: "Vanilla JS",
    titulo: "Calculadora",
    descripcionCorta: "Calculadora funcional con operaciones encadenadas.",
    descripcionLarga:
      "Maneja el estado con 3 variables (operando anterior, operador, operando actual) para resolver operaciones encadenadas. Incluye soporte de teclado y redondeo para evitar errores de precisión decimal en JavaScript.",
    demo: "https://thiagojc-dev.github.io/calculadora/",
    codigo: "https://github.com/thiagojc-dev/calculadora",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
