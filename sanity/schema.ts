import { type SchemaTypeDefinition } from 'sanity'
import { bookSchema } from './schemas/bookSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bookSchema],
}
