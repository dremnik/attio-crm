// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AttioCRM from 'attio-crm';

const client = new AttioCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lists', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.lists.create({
      data: {
        api_slug: 'enterprise_sales',
        name: 'Enterprise Sales',
        parent_object: 'people',
        workspace_access: 'read-and-write',
        workspace_member_access: [
          { level: 'read-and-write', workspace_member_id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b' },
        ],
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
    const response = await client.lists.create({
      data: {
        api_slug: 'enterprise_sales',
        name: 'Enterprise Sales',
        parent_object: 'people',
        workspace_access: 'read-and-write',
        workspace_member_access: [
          { level: 'read-and-write', workspace_member_id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b' },
        ],
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.lists.retrieve('33ebdbe9-e529-47c9-b894-0ba25e9c15c0');
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
    const responsePromise = client.lists.update('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', { data: {} });
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
    const response = await client.lists.update('33ebdbe9-e529-47c9-b894-0ba25e9c15c0', {
      data: {
        api_slug: 'enterprise_sales',
        name: 'Enterprise Sales',
        workspace_access: 'read-and-write',
        workspace_member_access: [
          { level: 'read-and-write', workspace_member_id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b' },
        ],
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.lists.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
