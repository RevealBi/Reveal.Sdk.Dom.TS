/**
 * This is just a class we use to mark any property of type Record<sring, any> so we can deserialize it
 */
export class JsonRecord implements Record<string, any> {}