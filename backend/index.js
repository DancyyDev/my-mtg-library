import express from "express";
import { PORT, mongodbURL } from "./config.js"
import mongoose from "mongoose"
import cardRoutes from "./routes/myCardRoutes.js"
import cors from 'cors'

const app = express();

app.use(express.json());

//Middleware handling CORS policy
//Option1: Allow all origins with default of cors
app.use(cors())

//Option2: Allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:9000/',
//         methods: ['GET','POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

//The home page
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Hello World") 
});

app.use('/myCards', cardRoutes);

mongoose.connect(mongodbURL)
    .then(()=> {
        console.log("Connected to database")
        app.listen(PORT, () => {
            console.log(`App is live on ${PORT}`)
        })
    })
    .catch((error)=> {
        console.log(error)
    })