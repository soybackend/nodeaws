const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'formularios',
  host: 'localhost',
  database: 'formularios',
  password: 'f0rm8l4r10s',
  port: 5432
})		

app.get('/', (request, response) => {
  pool.query('SELECT * FROM web_grupo ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).	json(results.rows)
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
