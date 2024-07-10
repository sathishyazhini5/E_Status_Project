import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const insertMetadata = async (req, res) => {
  try {
    const { screen_code, meta_code, screen_name, meta_code_name } = req.body;

    const result = await prisma.metadata_mst.create({
      data: {
        screen_code,
        meta_code,
        screen_name,
        meta_code_name,
      },
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
