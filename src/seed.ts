import type { Payload } from 'payload';

export const seed = async (payload: Payload) => {
  const { totalDocs } = await payload.count({
    collection: 'users',
  });

  if (!totalDocs) {
    for (let i = 0; i < 20; i++) {
      await payload.create({
        collection: 'users',
        data: {
          email: `user${i}@test.com`,
          password: 'password',
        },
      });
    }
  }
};
