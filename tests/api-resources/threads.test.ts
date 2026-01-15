// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AttioCRM from 'attio-crm';

const client = new AttioCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource threads', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.threads.retrieve('a649e4d9-435c-43fb-83ba-847b4876f27a');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.threads.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.threads.list(
        {
          entry_id: '2e6e29ea-c4e0-4f44-842d-78a891f8c156',
          limit: 10,
          list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
          object: 'people',
          offset: 5,
          record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AttioCRM.NotFoundError);
  });
});
