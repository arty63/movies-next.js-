import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const createMovie = await prisma.movie.create({
    data
  })
  res.json(createMovie)
}