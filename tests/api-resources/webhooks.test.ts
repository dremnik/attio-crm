// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AttioCRM from 'attio-crm';

const client = new AttioCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webhooks.create({
      data: {
        subscriptions: [
          {
            event_type: 'note.created',
            filter: {
              $and: [
                {
                  field: 'parent_object_id',
                  operator: 'equals',
                  value: '97052eb9-e65e-443f-a297-f2d9a4a7f795',
                },
              ],
            },
          },
        ],
        target_url: 'https://example.com/webhook',
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
    const response = await client.webhooks.create({
      data: {
        subscriptions: [
          {
            event_type: 'note.created',
            filter: {
              $and: [
                {
                  field: 'parent_object_id',
                  operator: 'equals',
                  value: '97052eb9-e65e-443f-a297-f2d9a4a7f795',
                },
              ],
            },
          },
        ],
        target_url: 'https://example.com/webhook',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.webhooks.retrieve('23e42eaf-323a-41da-b5bb-fd67eebda553');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.webhooks.update('23e42eaf-323a-41da-b5bb-fd67eebda553', { data: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.webhooks.update('23e42eaf-323a-41da-b5bb-fd67eebda553', {
      data: {
        subscriptions: [
          {
            event_type: 'note.created',
            filter: {
              $and: [
                {
                  field: 'parent_object_id',
                  operator: 'equals',
                  value: '97052eb9-e65e-443f-a297-f2d9a4a7f795',
                },
              ],
            },
          },
        ],
        target_url: 'https://example.com/webhook',
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.webhooks.list();
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
      client.webhooks.list({ limit: 10, offset: 5 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AttioCRM.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.webhooks.delete('23e42eaf-323a-41da-b5bb-fd67eebda553');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
