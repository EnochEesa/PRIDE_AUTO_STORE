import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import { globalLimiter } from './middleware/rateLimiter'
import productsRouter from './routes/products'
import inquiriesRouter from './routes/inquiries'
import adminRouter from './routes/admin'
import healthRouter from './routes/health'
import { requestLogger } from './config/logger'

const app = express()

app.set('trust proxy', 1)
app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))
app.use(express.json({ limit: '10kb' }))
app.use(mongoSanitize())
app.use(globalLimiter)
app.use(requestLogger)

app.use('/api/products',   productsRouter)
app.use('/api/inquiries',  inquiriesRouter)
app.use('/api/admin',      adminRouter)
app.use('/api/health',     healthRouter)

export default app