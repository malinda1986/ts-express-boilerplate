import expressLoader from './express';

export default async ({ expressApp }) => {

  await expressLoader({ app: expressApp });
  console.info(`✌️ Express loaded `);

  console.info('✌️ Loaders completed');
};
