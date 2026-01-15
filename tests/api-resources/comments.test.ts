// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Attio from 'attio-crm';

const client = new Attio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource comments', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.comments.create({
      data: {
        author: { id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b', type: 'workspace-member' },
        content:
          'If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.',
        format: 'plaintext',
        thread_id: 'aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.comments.create({
      data: {
        author: { id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b', type: 'workspace-member' },
        content:
          'If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.',
        format: 'plaintext',
        thread_id: 'aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2',
        created_at: '2023-01-01T15:00:00.000000000Z',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.comments.retrieve('aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.comments.delete('aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
