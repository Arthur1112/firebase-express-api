import functions from "firebase-functions";
import express from 'express';
import { db } from "./connectDB.js";
const app = express();

app.get('/test', (req, res) => {
    res.send('🔥 This is actually working! 🔥');
});

// const car1 = {
//     name: "Shelby Mustang",
//     year: "2021",
//     engineSize: "V8",
//     color: "Black"
// }

// const car2 = {
//     name: "Lambo",
//     year: "2022",
//     engineSize: "V12",
//     color: "White"
// }

const car3 = {
    name: "Audi RS7",
    year: "2023",
    engineSize: "V8",
    color: "Black"
}

app.post('/addCar', async (req, res) => {
    const newDoc = await db.collection('CarsToGet').add(car1)
    res.status(200).send(`Vehicle added, ID ${newDoc.id}`);
} )

app.post('/addCar2', async (req, res) => {
    const newDoc = await db.collection('CarsToGet').add(car2)
    res.status(200).send(`Vehicle added, ID ${newDoc.id}`);
} )

app.post('/addCar3', async (req, res) => {
    const newDoc = await db.collection('CarsToGet').add(car3)
    res.status(200).send(`Vehicle added, ID ${newDoc.id}`);
} )

// app.get('/cars', async (req, res) => {
//     const snapshot = await db.collection('carsToGet')
//     const cars = snapshot.docs.map(doc => {
//         return doc.data()
//     });
//     res.send(cars);});

app.get('/cars', (req, res) => {
    db.collection('CarsToGet').get()
    .then(snapshot => {
        const car = snapshot.docs.map(doc => {
            let col = doc.data();
            return col;
        })
        res.status(200).send(car)
    })
    .catch(console.end)
})

export const api = functions.https.onRequest(app); // dark blue and light blue 'app' are different here. 
// light blue is the cloud function 


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

