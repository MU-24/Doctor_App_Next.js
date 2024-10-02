import { type SchemaTypeDefinition } from 'sanity'
import doctor from './Doctors'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [doctor],
}
