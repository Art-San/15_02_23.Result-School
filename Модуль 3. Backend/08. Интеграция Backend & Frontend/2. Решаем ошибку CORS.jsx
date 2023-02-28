// утанавливаем на сервер доп пакет 
// npm install cors

const express = require('express')
const mongoose = require('mongoose') 
const chalk = require('chalk')
const cors = require('cors')
const initDatabase = require('./start/initDatabase')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// ================
app.use(cors())   // такой не хитрый способ
// =================                              


app.use('/api', routes)

const PORT = config.get('port') ?? 8080

// if (process.env.NODE_ENV === 'production') {
//     console.log(chalk.bgBlueBright('Production'))
// } else {
//     console.log(chalk.bgMagentaBright('Development'))
// }

async function start() {
    try {
        mongoose.connection.once('open', () => {
            initDatabase()
        })
        await mongoose.connect(config.get('mongoUrl'))
        console.log(chalk.cyanBright('MongoDB connected'))
        app.listen(PORT, () => 
        console.log(chalk.green(`Server has started on port ${PORT}...`))
    ) 
    } catch (e) {
        console.log(chalk.red(e.message))
        process.exit(1)
    }
}

start()