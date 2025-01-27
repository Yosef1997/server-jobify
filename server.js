import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
const app = express()

import morgan from "morgan"

//routers
import jobRouter from "./routes/jobRouter.js"

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.post("/", (req, res) => {
  res.json({ message: "data received", data: req.body })
})

app.use("/api/v1/jobs", jobRouter)

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ msg: "something went wrong" })
})

const port = process.env.PORT || 5100

app.listen(port, () => {
  console.log(`server is running on PORT ${port}...`)
})
