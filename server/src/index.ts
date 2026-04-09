
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import express from "express"
import { errorHandler } from "./middleware/errorHandler"
import apiRoutes from "./routes/api.routes"

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use("/api", apiRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`)
})
