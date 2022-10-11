interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

interface SeedData {
  entries: Array<SeedEntry>;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'PENDING: Irure officia consectetur non ex amet laborum in sint laboris ex deserunt.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'IN-PROGRESS: Ad consectetur exercitation et reprehenderit ad sint culpa est.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'FINISHED: Laboris nostrud aliqua aute proident cupidatat excepteur laboris quis exercitation non ex anim.',
      status: 'finished',
      createdAt: Date.now() - 2000000,
    },
  ],
};
