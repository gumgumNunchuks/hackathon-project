import cors from 'cors'
import figlet from 'figlet'
import express from 'express'
import process from 'process'
import logger from './middlewares/logger'
import router from './routes'
import chalk from 'chalk'
import sequelize from './db'

const app = express()
const PORT = 8000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger)
app.use('/api', router)

sequelize.authenticate()
    .then(() => {
        app.listen(PORT, () => {
            figlet('Travel Planner', (_, res) => {
                console.log(res)
            })
            console.log(`Server started on :${PORT}`)
        })
    }).catch((err) => {
        console.log(chalk.red('Error Connecting to Database'))
        console.log(err)
    })

process.on('SIGINT', () => {
    console.log('ByeBye')
    process.exit()
})

