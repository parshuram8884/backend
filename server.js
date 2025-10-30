import express from "express";
const app = express()
const port = 3000
import connectDB from "./db/db.connection.js"


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectDB()
// ;(async () =>{
//   try {
//     const connection = await mongoose.connect("")
//     console.log(`connect get successfully ${connection.connection.host}` )
//   } catch (error) {
//     console.log("database don't connect", error)
//   }
// })()
