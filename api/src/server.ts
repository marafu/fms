import 'express-async-errors'
import express from 'express'
import cors from 'cors'

const api = express()
api.use(express.json())
api.use(cors())
import router from './router'

api.use('/api/v1', router)

api.listen(8888)