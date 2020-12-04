import path from 'path'
import express from 'express'
const app = express()
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/client/build')))
app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
)

const PORT =  5000

app.listen(
  PORT,
  console.log(
    `Server running in port ${PORT}`
  )
)
