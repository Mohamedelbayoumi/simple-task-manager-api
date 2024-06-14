import express from 'express'

import taskRoutes from './routes/task.routes'

const app = express()

app.use(express.json())

app.use(taskRoutes)

app.listen(5000, () => {
    console.log("Listening on port 5000")
})