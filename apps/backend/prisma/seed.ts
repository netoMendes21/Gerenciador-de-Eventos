import { PrismaClient } from '@prisma/client';

async function seed() {
  const prisma = new PrismaClient();
  
  eventos.forEach(async (evento) =>
    {
    await prisma.evento.create({
  data: {
    id: evento.id,
    alias: evento.alias,
    
  }
    })

  }
}

seed();
