// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Attio from 'attio-crm';

const client = new Attio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.tasks.create({
      data: {
        assignees: [
          {
            referenced_actor_id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b',
            referenced_actor_type: 'workspace-member',
          },
        ],
        content: 'Follow up on current software solutions',
        deadline_at: '2023-01-01T15:00:00.000000000Z',
        format: 'plaintext',
        is_completed: false,
        linked_records: [
          { target_object: 'people', target_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d' },
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
    const response = await client.tasks.create({
      data: {
        assignees: [
          {
            referenced_actor_id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b',
            referenced_actor_type: 'workspace-member',
          },
        ],
        content: 'Follow up on current software solutions',
        deadline_at: '2023-01-01T15:00:00.000000000Z',
        format: 'plaintext',
        is_completed: false,
        linked_records: [
          { target_object: 'people', target_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d' },
        ],
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.tasks.retrieve('649e34f4-c39a-4f4d-99ef-48a36bef8f04');
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
    const responsePromise = client.tasks.update('649e34f4-c39a-4f4d-99ef-48a36bef8f04', { data: {} });
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
    const response = await client.tasks.update('649e34f4-c39a-4f4d-99ef-48a36bef8f04', {
      data: {
        assignees: [
          {
            referenced_actor_id: '50cf242c-7fa3-4cad-87d0-75b1af71c57b',
            referenced_actor_type: 'workspace-member',
          },
        ],
        deadline_at: '2023-01-01T15:00:00.000000000Z',
        is_completed: false,
        linked_records: [
          { target_object: 'people', target_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d' },
        ],
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.tasks.list();
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
      client.tasks.list(
        {
          assignee: '50cf242c-7fa3-4cad-87d0-75b1af71c57b',
          is_completed: true,
          limit: 10,
          linked_object: 'people',
          linked_record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d',
          offset: 5,
          sort: 'created_at:desc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Attio.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.tasks.delete('649e34f4-c39a-4f4d-99ef-48a36bef8f04');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
