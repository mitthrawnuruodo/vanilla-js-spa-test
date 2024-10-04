import { getData } from '../data.js';

test('getData returns data', async () => {
  const data = await getData();
  expect(data).not.toBeNull();
});
