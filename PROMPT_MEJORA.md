# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: src/components/TaskList.js ===
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;

// === ARCHIVO: src/components/TaskForm.js ===
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;

// === ARCHIVO: src/components/Task.js ===
import React from 'react';

const Task = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggleComplete(task.id)}>Toggle Complete</button>
    </li>
  );
};

export default Task;

// === ARCHIVO: src/containers/TaskManager.js ===
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import taskService from '../services/taskService';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then(setTasks);
  }, []);

  const handleAddTask = (newTask) => {
    taskService.addTask(newTask).then((task) => setTasks([...tasks, task]));
  };

  const handleDeleteTask = (taskId) => {
    taskService.deleteTask(taskId).then(() => setTasks(tasks.filter(task => task.id!== taskId)));
  };

  const handleToggleComplete = (taskId) => {
    taskService.toggleComplete(taskId).then((updatedTask) => {
      setTasks(tasks.map(task => task.id === taskId? updatedTask : task));
    });
  };

  return (
    <div>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default TaskManager;

// === ARCHIVO: src/containers/App.js ===
import React from 'react';
import TaskManager from './TaskManager';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskManager />
    </div>
  );
};

export default App;

// === ARCHIVO: src/utils/taskUtils.js ===
export const generateId = () => Math.random().toString(36).substr(2, 9);

// === ARCHIVO: src/services/taskService.js ===
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTasks = () => axios.get(API_URL).then(response => response.data);
const addTask = (task) => axios.post(API_URL, task).then(response => response.data);
const deleteTask = (taskId) => axios.delete(`${API_URL}/${taskId}`).then(() => ({}));
const toggleComplete = (taskId) => axios.patch(`${API_URL}/${taskId}`, { completed: true }).then(response => response.data);

export default {
  getTasks,
  addTask,
  deleteTask,
  toggleComplete,
};

// === ARCHIVO: src/models/Task.js ===
export default class Task {
  constructor(id, title, description, completed = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

// === ARCHIVO: src/config/appConfig.js ===
export const APP_NAME = 'Task Manager';
export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// === ARCHIVO: package.json ===
{
  "name": "task-manager",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "axios": "^0.27.2"
  }
}

// === ARCHIVO: index.js ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/containers/App';

ReactDOM.render(<App />, document.getElementById('root'));
```
