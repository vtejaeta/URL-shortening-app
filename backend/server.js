import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import linkRoutes from './routes/linkRoutes.js'

dotenv.config()

//Intialising app
const app = express()

//connecting mongodb
connectDB()

//allows app to accept JSON data in body
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/link', linkRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

//Error middleware
app.use(notFound)

//Error Handler middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})
