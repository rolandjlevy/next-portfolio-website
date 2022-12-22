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
    await connectMongoDb();
    const group = await Projects.aggregate([
      {
        "$group": {
          _id: "$category"
        }
      }
    ]);
    const categories:any = group.map(item => item._id);
    res.status(200).json(categories);
  } catch (error:any) {
		res.status(error.response.status).json(error);
  }
}