import cors from 'cors'
import express from 'express'
import helmet from "helmet"
import morgan from 'morgan'

const app = express()
app.use(morgan("short"))
app.use(helmet({ //adjust
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "same-site" },
    frameguard: false,
    permittedCrossDomainPolicies: { permittedPolicies: "none" }
}))
app.disable("x-powered-by")
app.use(cors({ origin: "*" }))
app.use(express.json())


app.get('/', async (req, res) => {
    return res.send("Connected")
})
app.get('/test',(req,res)=>{
    return res.send("Test proxy")
})



export default app

// docker-compose -f docker-compose.dev.yml up --build