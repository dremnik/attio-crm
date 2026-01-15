// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Attio from 'attio-crm';

const client = new Attio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entries', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.lists.entries.create('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {
      data: {
        entry_values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
        parent_object: 'people',
        parent_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d',
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
    const response = await client.lists.entries.create('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {
      data: {
        entry_values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
        parent_object: 'people',
        parent_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.lists.entries.retrieve('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
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
    const response = await client.lists.entries.retrieve('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.lists.entries.update('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: {
        entry_values: {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.lists.entries.update('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: {
        entry_values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.lists.entries.list('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {});
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
    const responsePromise = client.lists.entries.delete('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: 'enterprise_sales',
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
    const response = await client.lists.entries.delete('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: 'enterprise_sales',
    });
  });

  // Prism tests are disabled
  test.skip('assert: only required params', async () => {
    const responsePromise = client.lists.entries.assert('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {
      data: {
        entry_values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
        parent_object: 'people',
        parent_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d',
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
    const response = await client.lists.entries.assert('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {
      data: {
        entry_values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
        parent_object: 'people',
        parent_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d',
      },
    });
  });

  // Prism tests are disabled
  test.skip('overwrite: only required params', async () => {
    const responsePromise = client.lists.entries.overwrite('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: {
        entry_values: {
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
  test.skip('overwrite: required and optional params', async () => {
    const response = await client.lists.entries.overwrite('2e6e29ea-c4e0-4f44-842d-78a891f8c156', {
      list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: {
        entry_values: {
          '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
          multiselect_attribute: ['Select option 1', 'Select option 2'],
        },
      },
    });
  });
});
