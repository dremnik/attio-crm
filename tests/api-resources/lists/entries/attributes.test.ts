// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Attio from 'attio-crm';

const client = new Attio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  // Prism tests are disabled
  test.skip('listValues: only required params', async () => {
    const responsePromise = client.lists.entries.attributes.listValues(
      '41252299-f8c7-4b5e-99c9-4ff8321d2f96',
      { list: 'enterprise_sales', entry_id: '2e6e29ea-c4e0-4f44-842d-78a891f8c156' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listValues: required and optional params', async () => {
    const response = await client.lists.entries.attributes.listValues(
      '41252299-f8c7-4b5e-99c9-4ff8321d2f96',
      {
        list: 'enterprise_sales',
        entry_id: '2e6e29ea-c4e0-4f44-842d-78a891f8c156',
        limit: 10,
        offset: 5,
        show_historic: true,
      },
    );
  });
});
