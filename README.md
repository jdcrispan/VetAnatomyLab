1. Descripción de la App

VetAnatomyLab es una aplicación móvil desarrollada con React Native y Expo para la gestión de prácticas de laboratorio en Anatomía Veterinaria.


La aplicación permite diferenciar dos roles:

Profesor
- Crear nuevas prácticas.
- Seleccionar especie (canino, felino, equino).
- Definir fecha del laboratorio.
- Especificar materiales necesarios.
- Editar prácticas existentes.

Estudiante
- Visualizar todas las prácticas creadas.
- Filtrar prácticas por especie.
- Consultar fecha y materiales.
- Ver estado (Pendiente / Completada).
- Identificar prácticas nuevas mediante badge visual.

La información se almacena localmente mediante AsyncStorage, permitiendo persistencia de datos incluso después de cerrar la aplicación.

---

 2. Instrucciones de Instalación

### Requisitos Previos
- Node.js instalado
- npm instalado
- Expo (utilizado mediante npx)

1. Clonar el repositorio o descargar la carpeta del proyecto.
2. Abrir la terminal dentro de la carpeta del proyecto.
3. Instalar las dependencias:
npm install
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npx expo install @react-native-async-storage/async-storage
npx expo install @react-native-picker/picker
npx expo install @expo/vector-icons
npx expo install @react-native-async-storage/async-storage
npx expo install react-dom react-native-web

Ejecución del proyecto
npx expo start

