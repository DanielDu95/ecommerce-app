import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const product = await prisma.product.findUnique({
      where: { id: id as string },
    });
    return res.status(200).json(product);
  }

  if (req.method === "PUT") {
    const { title, description, price, image, inStock } = req.body;
    const updated = await prisma.product.update({
      where: { id: id as string },
      data: { title, description, price, image, inStock },
    });
    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await prisma.product.delete({ where: { id: id as string } });
    return res.status(204).end();
  }

  return res.status(405).json({ message: "Method not allowed" });
}
