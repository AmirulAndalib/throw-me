import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default function handler(req, res) {
if (req.method !== 'POST') {
  res.status(400).send({ message: 'Only POST requests allowed' })
  return
}else{

  async function main() {
     
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json')
       res.end(await prisma.urls.create({
       data: {
         url: req.body.name,
         name: req.body.url
       },
     }))
  }

  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
  }
}
