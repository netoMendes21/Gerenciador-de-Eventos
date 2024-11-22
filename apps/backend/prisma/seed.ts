import { PrismaClient } from '@prisma/client';
import { eventos } from 'core';

async function seed() {
  const prisma = new PrismaClient();

  eventos.forEach(async (evento) => {
    await prisma.evento.create({
      data: evento,
    });
  });
}

seed();
