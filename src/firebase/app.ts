import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { Chord } from "types/chord";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBepTBgW3A1SBKR43YwZkIZ1nBRPcd6mP0",
  authDomain: "hanalyzer-app.firebaseapp.com",
  projectId: "hanalyzer-app",
  storageBucket: "hanalyzer-app.appspot.com",
  messagingSenderId: "361857683158",
  appId: "1:361857683158:web:7ee34e214c348f34fc8377",
};

const app = initializeApp(firebaseConfig);

export function storeHarmonicField(
  userId: string,
  harmonicField: { name: string; harmonicField: Chord[] }
) {
  const db = getDatabase(app);
  const reference = ref(
    db,
    "users/" + userId + "/harmonic-fields/" + harmonicField.name
  );
  set(reference, harmonicField);
}

export async function getHarmonicField(userId: string) {
  const db = getDatabase(app);
  const reference = ref(db, "users/" + userId + "/harmonic-fields");
  const response = await get(reference);

  return response.val();
}

export async function deleteHarmonicField(id: string) {
  const db = getDatabase(app);
  const reference = ref(db, "users/matheus/harmonic-fields/" + id);
  await remove(reference);
}
