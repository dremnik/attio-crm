// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AttioCRM from 'attio-crm';

const client = new AttioCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource records', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.objects.records.create('people', {
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
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
    const response = await client.objects.records.create('people', {
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.objects.records.retrieve('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
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
    const response = await client.objects.records.retrieve('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.objects.records.list('people', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.objects.records.delete('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.objects.records.delete('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
    });
  });

  // Prism tests are disabled
  test.skip('assert: only required params', async () => {
    const responsePromise = client.objects.records.assert('people', {
      matching_attribute: '41252299-f8c7-4b5e-99c9-4ff8321d2f96',
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
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
  test.skip('assert: required and optional params', async () => {
    const response = await client.objects.records.assert('people', {
      matching_attribute: '41252299-f8c7-4b5e-99c9-4ff8321d2f96',
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('listEntries: only required params', async () => {
    const responsePromise = client.objects.records.listEntries('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
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
  test.skip('listEntries: required and optional params', async () => {
    const response = await client.objects.records.listEntries('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
      limit: 10,
      offset: 5,
    });
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.objects.records.search({
      objects: ['people', 'deals', '1b31b79a-ddf9-4d57-a320-884061b2bcff'],
      query: 'alan mathis',
      request_as: { type: 'workspace' },
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
  test.skip('search: required and optional params', async () => {
    const response = await client.objects.records.search({
      objects: ['people', 'deals', '1b31b79a-ddf9-4d57-a320-884061b2bcff'],
      query: 'alan mathis',
      request_as: { type: 'workspace' },
      limit: 25,
    });
  });

  // Prism tests are disabled
  test.skip('updateAppend: only required params', async () => {
    const responsePromise = client.objects.records.updateAppend('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
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
  test.skip('updateAppend: required and optional params', async () => {
    const response = await client.objects.records.updateAppend('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('updateOverwrite: only required params', async () => {
    const responsePromise = client.objects.records.updateOverwrite('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
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
  test.skip('updateOverwrite: required and optional params', async () => {
    const response = await client.objects.records.updateOverwrite('891dcbfc-9141-415d-9b2a-2238a6cc012d', {
      object: 'people',
      data: {
        values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
      },
    });
  });
});
