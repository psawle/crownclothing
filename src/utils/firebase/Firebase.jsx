
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,collection, writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqpIW2zgpq7lj8_VI_2cu9A8o3GsOpo38",
  authDomain: "crown-db-8763a.firebaseapp.com",
  databaseURL: "https://crown-db-8763a.firebaseio.com",
  projectId: "crown-db-8763a",
  storageBucket: "crown-db-8763a.appspot.com",
  messagingSenderId: "69062872299",
  appId: "1:69062872299:web:0606d5dfda1c565b6742ae",
};

const firebaseApp = initializeApp(firebaseConfig);
console.log("firebase",firebaseApp)
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionsAndDocument = async (collectionKey,objectToAdd) => {
   const collectionRef = collection(db,collectionKey)
   const batch = writeBatch(db)

   objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef,object)
   });

   await batch.commit()
  
}

export const getCategoriesAndDocuments = async () => {
   const collectionRef = collection(db,'categories')
   const q = query(collectionRef)

   const querySnapshot = await getDocs(q)
   const categoryMap = querySnapshot.docs.reduce((acc,DocumentSnapshot) => {
    const {title,items} = DocumentSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
   },{})

   return categoryMap;
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  const userValue =  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      return errorCode;
    });
    return userValue;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const logedinuser = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error message inside firebase",errorMessage)
    return errorCode;
  });
  return logedinuser;
};

export const signOutUser = async () => await signOut(auth);
