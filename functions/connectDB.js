import admin from 'firebase-admin';

import serviceAccount from "./credentials.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore()


// const getCarCollection = async () => {
//     const carCollect = await db().collection(CarsToGet);
// }