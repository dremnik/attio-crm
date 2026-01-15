// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Attio from 'attio-crm';

const client = new Attio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource statuses', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.attributes.statuses.create('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: { title: 'In Progress' },
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
    const response = await client.attributes.statuses.create('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      data: {
        title: 'In Progress',
        celebration_enabled: true,
        target_time_in_status: 'P0Y0M1DT0H0M0S',
      },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.attributes.statuses.update('In Progress', {
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
    const response = await client.attributes.statuses.update('In Progress', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      attribute: '41252299-f8c7-4b5e-99c9-4ff8321d2f96',
      data: {
        celebration_enabled: true,
        is_archived: false,
        target_time_in_status: 'P0Y0M1DT0H0M0S',
        title: 'In Progress',
      },
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.attributes.statuses.list('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
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
    const response = await client.attributes.statuses.list('41252299-f8c7-4b5e-99c9-4ff8321d2f96', {
      target: 'lists',
      identifier: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
      show_archived: true,
    });
  });
});
