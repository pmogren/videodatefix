import dotenv = require('dotenv-safe');
dotenv.config({ allowEmptyValues: false });

describe('My test', () => {
  beforeAll(async () => {
    //
  });

  afterAll(async () => {
    //
  });

  test('Should list integrations', async () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
