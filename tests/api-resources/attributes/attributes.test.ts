// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Attio from 'attio-crm';

const client = new Attio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.attributes.create('97052eb9-e65e-443f-a297-f2d9a4a7f795', {
      target: 'lists',
      data: {
        api_slug: 'my-attribute',
        config: {},
        description: 'Lorem ipsum',
        is_multiselect: true,
        is_required: true,
        is_unique: true,
        title: 'Your Attribute',
        type: 'text',
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
    const response = await client.attributes.create('97052eb9-e65e-443f-a297-f2d9a4a7f795', {
      target: 'lists',
      data: {
        api_slug: 'my-attribute',
        config: {
          currency: { default_currency_code: 'USD', display_type: 'symbol' },
          record_reference: { allowed_objects: ['people'] },
        },
        description: 'Lorem ipsum',
        is_multiselect: true,
        is_required: true,
        is_unique: true,
        title: 'Your Attribute',
        type: 'text',
        default_value: { template: [{ domain: 'app.attio.com' }], type: 'static' },
        relationship: {
          api_slug: 'team_members',
          is_multiselect: false,
          object: 'companies',
          title: 'Team members',
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.attributes.retrieve('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.attributes.retrieve('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.attributes.update('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: {},
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
  test.skip('update: required and optional params', async () => {
    const response = await client.attributes.update('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: {
        api_slug: 'my-attribute',
        config: {
          currency: { default_currency_code: 'USD', display_type: 'symbol' },
          record_reference: { allowed_objects: ['people'] },
        },
        default_value: { template: [{ domain: 'app.attio.com' }], type: 'static' },
        description: 'Lorem ipsum',
        is_archived: false,
        is_required: true,
        is_unique: true,
        title: 'Your Attribute',
      },
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.attributes.list('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {
      target: 'lists',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.attributes.list('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {
      target: 'lists',
      limit: 10,
      offset: 5,
      show_archived: true,
    });
  });
});
