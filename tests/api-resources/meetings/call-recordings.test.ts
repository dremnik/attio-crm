// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Attio from 'attio-crm';

const client = new Attio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource callRecordings', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.meetings.callRecordings.create('cb59ab17-ad15-460c-a126-0715617c0853', {
      data: { video_url: 'https://example.com/recording.mp4' },
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
    const response = await client.meetings.callRecordings.create('cb59ab17-ad15-460c-a126-0715617c0853', {
      data: { video_url: 'https://example.com/recording.mp4' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.meetings.callRecordings.retrieve('e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a', {
      meeting_id: 'cb59ab17-ad15-460c-a126-0715617c0853',
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
    const response = await client.meetings.callRecordings.retrieve('e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a', {
      meeting_id: 'cb59ab17-ad15-460c-a126-0715617c0853',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.meetings.callRecordings.list('cb59ab17-ad15-460c-a126-0715617c0853');
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
      client.meetings.callRecordings.list(
        'cb59ab17-ad15-460c-a126-0715617c0853',
        { cursor: 'eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr', limit: 50 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Attio.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.meetings.callRecordings.delete('e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a', {
      meeting_id: 'cb59ab17-ad15-460c-a126-0715617c0853',
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
    const response = await client.meetings.callRecordings.delete('e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a', {
      meeting_id: 'cb59ab17-ad15-460c-a126-0715617c0853',
    });
  });

  // Prism tests are disabled
  test.skip('getTranscript: only required params', async () => {
    const responsePromise = client.meetings.callRecordings.getTranscript(
      'e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a',
      { meeting_id: 'cb59ab17-ad15-460c-a126-0715617c0853' },
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
  test.skip('getTranscript: required and optional params', async () => {
    const response = await client.meetings.callRecordings.getTranscript(
      'e8f2a3b7-9b4d-4c5e-8a1f-3d7b2c5e8f9a',
      {
        meeting_id: 'cb59ab17-ad15-460c-a126-0715617c0853',
        cursor: 'eyJkZXNjcmlwdGlvbiI6ICJ0aGlzIGlzIGEgY3Vyc29yIn0=.eM56CGbqZ6G1NHiJchTIkH4vKDr',
      },
    );
  });
});
