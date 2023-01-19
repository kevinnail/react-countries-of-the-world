import { checkError, client } from './client';

export async function fetchFlags() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
