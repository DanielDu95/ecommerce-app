import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany({ include: { user: true } });
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const { title, description, price, image, userId } = req.body;
    const product = await prisma.product.create({
      data: { title, description, price, image, userId },
    });
    return res.status(201).json(product);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
