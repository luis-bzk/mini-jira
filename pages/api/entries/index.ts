import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';
import { disconnect } from '../../../database/db';

type Data = { message: string } | Array<IEntry> | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);

    case 'POST':
      return postEntry(req, res);

    default:
      res.status(400).json({ message: 'This endpoint does not exists' });
  }

  res.status(200).json({ message: 'Example' });
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const entries = await Entry.find().sort({ createdAt: 'ascending' });

  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = '' } = req.body;

  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connect();

    await newEntry.save();

    await db.disconnect();

    res.status(201).json(newEntry);
  } catch (error) {
    await db.disconnect();
    console.log(error);

    return res.status(500).json({ message: 'Something went wrong, check server terminal' });
  }
};
