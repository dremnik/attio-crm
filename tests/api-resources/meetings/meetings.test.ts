// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AttioCRM from 'attio-crm';

const client = new AttioCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource meetings', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.meetings.retrieve('cb59ab17-ad15-460c-a126-0715617c0853');
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
    const responsePromise = client.meetings.list();
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
      client.meetings.list(
        {
          cursor: 'cursor',
          ends_from: 'ends_from',
          limit: 50,
          linked_object: 'x',
          linked_record_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          participants: 'participants',
          sort: 'start_asc',
          starts_before: 'starts_before',
          timezone: 'timezone',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AttioCRM.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('findOrCreate: only required params', async () => {
    const responsePromise = client.meetings.findOrCreate({
      data: {
        description: 'Getting you up to speed with the platform and answering any questions you have.',
        end: { datetime: '2019-12-27T18:11:19.117Z' },
        external_ref: 'external_meeting_12345',
        is_all_day: false,
        participants: [
          {
            email_address: 'person@company.com',
            is_organizer: true,
            status: 'accepted',
          },
        ],
        start: { datetime: '2027-11-27T14:00:00Z' },
        title: 'Onboarding Session',
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
  test.skip('findOrCreate: required and optional params', async () => {
    const response = await client.meetings.findOrCreate({
      data: {
        description: 'Getting you up to speed with the platform and answering any questions you have.',
        end: { datetime: '2019-12-27T18:11:19.117Z', timezone: 'America/New_York' },
        external_ref: 'external_meeting_12345',
        is_all_day: false,
        participants: [
          {
            email_address: 'person@company.com',
            is_organizer: true,
            status: 'accepted',
          },
        ],
        start: { datetime: '2027-11-27T14:00:00Z', timezone: 'America/New_York' },
        title: 'Onboarding Session',
        linked_records: [{ object: 'people', record_id: '891dcbfc-9141-415d-9b2a-2238a6cc012d' }],
      },
    });
  });
});
