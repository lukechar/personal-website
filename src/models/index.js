// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Article } = initSchema(schema);

export {
  Comment,
  Article
};