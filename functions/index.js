//What is this function Folder ???
//This is the folder we created using the firebase which is the backend by the firebase 
//To create this we first have to write firebase init
//Then select the cloud function option after answer some questions and we are good to gooo.....

//The firebase backend is different from this .....this is the backend we created using the express

const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const Stripe = require("stripe")
const stripe = Stripe('sk_test_51MomSaSBv4arkVCPi0E0uZ3uEC2CtCh4SkNCZgX6ckt9qHewwMiZn9sGMPTAC0gqKK3bezEog6FYQ9svQNHmoMR300NdghU1gy');
const app = express()

// cors....we know about it
app.use(cors({ origin : true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>Hello World...</h1>")
})
app.get("/ritesh",(req,res)=>{
    res.send("<h1>Hello Ritesh...</h1>")
})

app.post("/payments/create",async (req,res)=>{
    const total = req.query.total

    console.log("Payment Request Received" , total);

    var elements = stripe.elements({
        clientSecret: 'CLIENT_SECRET',
      });
      
      var elements = stripe.elements({
        currency: 'usd',
        amount: total,
      });

    res.status(201).send({
        clientSecret : elements.client_secret
    })
})


// //This is our normal deploy 
// app.listen(8000,()=>{
//     console.log('Listening...');
// })

//Now this is from the firebase to listen the backend
exports.api = functions.https.onRequest(app)

//After doing this write firebase emulators:start in the terminal 
//And after this it will provide us with two links...first is console where we can see all the logs of our backend and second is the ui of our backend 
//Example of logs url is : http://127.0.0.1:4000/functions
//Emample of ui url is : http://127.0.0.1:5001/fir-32f4c/us-central1/api