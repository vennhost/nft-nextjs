import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tokenId = req.query.id as string;

  res.status(200).json({
    image: `https://media.giphy.com/media/X7IoVUJXtO3wk/giphy.gif`,
    name: `Giphy #${tokenId}`,
  });
}

export default handler;