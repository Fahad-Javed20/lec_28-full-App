import express from "express";
import cors from "cors";

const app = express()
const port = 3000;

const employee = [
    {
        id:1,
        name:"Fahad",
        salary:4000000000},
         address:{
            city:"lahore" ,
             country:"Pakistan"
            },
    {id:1,name:"Usama",salary:4000000000},
    {id:1,name:"Shehroz",salary:4000000000}
]


app.use(cors())
app.use(express.json())


app.get("/",(req,res) =>{
    res.send("Home Page")
})

app.get("/products",(req,res) =>{
    res.send("Product Page")
})

app.get("/users",(req,res) =>{
    res.send("Users Page")
})

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})