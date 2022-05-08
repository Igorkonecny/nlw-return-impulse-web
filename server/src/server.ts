import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

// app.use(cors({
//   origin: 'http://localhost:3000'
// }));
app.use(cors())
app.use(express.json())
app.use(routes);
app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
})


// SQLite
// Prisma ORM 
// yarn add express
// yarn add @types/express -D
// yarn add prisma -D
// yarn add @prisma/client
// yarn prisma init