import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX-N4lkTTXfSRMgzndb0rSNhwsR7sGJ-4",
  authDomain: "coderhouse-d6224.firebaseapp.com",
  projectId: "coderhouse-d6224",
  storageBucket: "coderhouse-d6224.appspot.com",
  messagingSenderId: "151325580739",
  appId: "1:151325580739:web:10c3888485514c86bbb176",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreApp = getFirestore(firebaseApp);

async function getAllItems() {
  const plantsColec = collection(firestoreApp, "plants");
  const plantsSnapshot = await getDocs(plantsColec);

  let arrayItemsFromFirebase = plantsSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return arrayItemsFromFirebase;
}

export default getAllItems;
