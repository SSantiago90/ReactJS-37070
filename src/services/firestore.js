// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, getDocs, getDoc, doc, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_oWFcHcpEHX9HYDplnfuRi48uIKeataQ",
  authDomain: "coderhouse37070.firebaseapp.com",
  projectId: "coderhouse37070",
  storageBucket: "coderhouse37070.appspot.com",
  messagingSenderId: "611775867241",
  appId: "1:611775867241:web:f3ca52aa39e6ea6b9575f8"
};

const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export function testDatabase(){
    console.log(appFirestore)
}

export async function traerProductos(){
    const plantCollection = collection(appFirestore, "plants");
    const plantsSnapshot = await getDocs(plantCollection);

    let respuesta = plantsSnapshot.docs.map( doc => { 
        return {
            ...doc.data(),
            id: doc.id
        }
    })

   return respuesta;
}

export async function traerUnProducto(itemId){
    const docref = doc(appFirestore, "plants", itemId);
    
    const docSnapshot = await getDoc(docref);
    

    return { id: docSnapshot.id, ...docSnapshot.data()};
}   

export default appFirestore

