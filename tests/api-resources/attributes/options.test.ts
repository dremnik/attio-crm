// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AttioCRM from 'attio-crm';

const client = new AttioCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource options', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.attributes.options.create('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: { title: 'Medium' },
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
    const response = await client.attributes.options.create('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: { title: 'Medium' },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.attributes.options.update('Medium', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      attribute: '41252299-f8c7-4b5e-99c9-4ff8321d2f96',
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
    const response = await client.attributes.options.update('Medium', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      attribute: '41252299-f8c7-4b5e-99c9-4ff8321d2f96',
      data: { is_archived: false, title: 'Medium' },
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.attributes.options.list('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.attributes.options.list('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      show_archived: true,
    });
  });
});
