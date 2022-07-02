// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, getDocs, getDoc, query, where, doc, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_oWFcHcpEHX9HYDplnfuRi48uIKeataQ",
  authDomain: "coderhouse37070.firebaseapp.com",
  projectId: "coderhouse37070",
  storageBucket: "coderhouse37070.appspot.com",
  messagingSenderId: "611775867241",
  appId: "1:611775867241:web:f3ca52aa39e6ea6b9575f8"
};

//1. inicializamos la app de Firebase
const appFirebase = initializeApp(firebaseConfig);

//2. inicializamos la instancia a la base de datos de Firestore
const appFirestore = getFirestore(appFirebase);

//3. obtenemos todos los items
export async function traerProductos(){
    // A. Instanciamos una colección (appfirestore, nombre-colecccion)
    const plantCollection = collection(appFirestore, "plants");

    //B. Obtenemos los documentos con getDocs(referncia-de-la-coleccion)
    const plantsSnapshot = await getDocs(plantCollection)

    //C. Del snapshot, mapeamos los documentos
    let respuesta = plantsSnapshot.docs.map( doc => { 
        return {
            ...doc.data(),
            id: doc.id
        }
    })

   return respuesta;
}

export async function traerProductosDeCategoria(idcategory){
    /* query "where" */
    
    const plantCollection = collection(appFirestore, "plants");

    const q = query(plantCollection, where("category", "==", idcategory));

    const plantsSnapshot = await getDocs(q);

    let respuesta = plantsSnapshot.docs.map( doc => { 
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    return respuesta
}

export async function traerUnProducto(itemId){
    const docref = doc(appFirestore, "plants", itemId);
    
    const docSnapshot = await getDoc(docref);
    

    return { id: docSnapshot.id, ...docSnapshot.data()};
}   

export default appFirestore

