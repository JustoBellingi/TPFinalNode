// Configuración y conexión con Firebase / Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Chequeo al arrancar: si falta alguna variable o quedó con comillas/comas
// pegadas del firebaseConfig, avisamos en la terminal con un mensaje claro.
for (const [key, value] of Object.entries(firebaseConfig)) {
  if (!value) {
    console.warn(`⚠️  Falta el valor de "${key}" en el archivo .env`);
  } else if (/["',\s]/.test(value)) {
    console.warn(`⚠️  "${key}" tiene comillas, comas o espacios: ${JSON.stringify(value)}`);
  }
}
console.log(`Conectando a Firebase, proyecto: ${JSON.stringify(firebaseConfig.projectId)}`);

const app = initializeApp(firebaseConfig);

// Exportamos la instancia de la base de datos para usarla en los modelos
export const db = getFirestore(app);
