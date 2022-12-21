import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDb } from '../../utils/connect-mongodb';
import Projects from '../../models/projects';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const [key, category] = req.query.category;
    await connectMongoDb();
    const categoryData:any = await Projects.aggregate([
      {
        $match: {
          category,
        }
      }
    ]);
    res.status(200).json(categoryData);
  } catch (error:any) {
    res.json(error);
  }
}
