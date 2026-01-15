// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CallRecordings extends APIResource {
  /**
   * Create a call recording for a meeting. This endpoint is rate limited to 1
   * request per second.
   *
   * This endpoint is in alpha and may be subject to breaking changes as we gather
   * feedback.
   *
   * Required scopes: `meeting:read`, `call_recording:read-write`.
   */
  create(
    meetingID: string,
    body: CallRecordingCreateParams,
    options?: RequestOptions,
  ): APIPromise<CallRecordingCreateResponse> {
    return this._client.post(path`/v2/meetings/${meetingID}/call_recordings`, { body, ...options });
  }

  /**
   * Get a single call recording by ID.
   *
   * This endpoint is in beta. We will aim to avoid breaking changes, but small
   * updates may be made as we roll out to more users.
   *
   * Required scopes: `meeting:read`, `call_recording:read`.
   */
  retrieve(
    callRecordingID: string,
    params: CallRecordingRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CallRecordingRetrieveResponse> {
    const { meeting_id } = params;
    return this._client.get(path`/v2/meetings/${meeting_id}/call_recordings/${callRecordingID}`, options);
  }

  /**
   * List all call recordings for a meeting.
   *
   * This endpoint is in beta. We will aim to avoid breaking changes, but small
   * updates may be made as we roll out to more users.
   *
   * Required scopes: `meeting:read`, `call_recording:read`.
   */
  list(
    meetingID: string,
    query: CallRecordingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallRecordingListResponse> {
    return this._client.get(path`/v2/meetings/${meetingID}/call_recordings`, { query, ...options });
  }

  /**
   * Deletes the specified call recording. This will remove the call recording and
   * all associated data.
   *
   * This endpoint is in alpha and may be subject to breaking changes as we gather
   * feedback.
   *
   * Required scopes: `meeting:read`, `call_recording:read-write`.
   */
  delete(
    callRecordingID: string,
    params: CallRecordingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { meeting_id } = params;
    return this._client.delete(path`/v2/meetings/${meeting_id}/call_recordings/${callRecordingID}`, options);
  }

  /**
   * Get the transcript for a call recording.
   *
   * This endpoint is in beta. We will aim to avoid breaking changes, but small
   * updates may be made as we roll out to more users.
   *
   * Required scopes: `meeting:read`, `call_recording:read`.
   */
  getTranscript(
    callRecordingID: string,
    params: CallRecordingGetTranscriptParams,
    options?: RequestOptions,
  ): APIPromise<CallRecordingGetTranscriptResponse> {
    const { meeting_id, ...query } = params;
    return this._client.get(path`/v2/meetings/${meeting_id}/call_recordings/${callRecordingID}/transcript`, {
      query,
      ...options,
    });
  }
}

/**
 * Success
 */
export interface CallRecordingCreateResponse {
  data: CallRecordingCreateResponse.Data;
}

export namespace CallRecordingCreateResponse {
  export interface Data {
    id: Data.ID;

    /**
     * The timestamp of when the call recording was created.
     */
    created_at: string;

    /**
     * The actor that created this call recording.
     */
    created_by_actor: Data.CreatedByActor;

    /**
     * The status of the call recording. When a call recording is first created, it
     * will have a status of `PROCESSING`. Once the recording is ready, it will
     * transition to `COMPLETED`. If the recording fails for any reason, the status
     * will be `FAILED`.
     */
    status: 'processing' | 'completed' | 'failed';

    /**
     * A URL that links directly to the call recording in the Attio web application.
     */
    web_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The call recording ID of the call recording.
       */
      call_recording_id: string;

      /**
       * The ID of the meeting associated with this call recording.
       */
      meeting_id: string;

      /**
       * The ID of the workspace this call recording belongs to.
       */
      workspace_id: string;
    }

    /**
     * The actor that created this call recording.
     */
    export interface CreatedByActor {
      /**
       * An ID to identify the actor.
       */
      id?: string | null;

      /**
       * The type of actor. [Read more information on actor types here](/docs/actors).
       */
      type?: 'api-token' | 'workspace-member' | 'system' | 'app' | null;
    }
  }
}

/**
 * Success
 */
export interface CallRecordingRetrieveResponse {
  data: CallRecordingRetrieveResponse.Data;
}

export namespace CallRecordingRetrieveResponse {
  export interface Data {
    id: Data.ID;

    /**
     * The timestamp of when the call recording was created.
     */
    created_at: string;

    /**
     * The actor that created this call recording.
     */
    created_by_actor: Data.CreatedByActor;

    /**
     * The status of the call recording. When a call recording is first created, it
     * will have a status of `PROCESSING`. Once the recording is ready, it will
     * transition to `COMPLETED`. If the recording fails for any reason, the status
     * will be `FAILED`.
     */
    status: 'processing' | 'completed' | 'failed';

    /**
     * A URL that links directly to the call recording in the Attio web application.
     */
    web_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The call recording ID of the call recording.
       */
      call_recording_id: string;

      /**
       * The ID of the meeting associated with this call recording.
       */
      meeting_id: string;

      /**
       * The ID of the workspace this call recording belongs to.
       */
      workspace_id: string;
    }

    /**
     * The actor that created this call recording.
     */
    export interface CreatedByActor {
      /**
       * An ID to identify the actor.
       */
      id?: string | null;

      /**
       * The type of actor. [Read more information on actor types here](/docs/actors).
       */
      type?: 'api-token' | 'workspace-member' | 'system' | 'app' | null;
    }
  }
}

/**
 * Success
 */
export interface CallRecordingListResponse {
  data: Array<CallRecordingListResponse.Data>;

  pagination: CallRecordingListResponse.Pagination;
}

export namespace CallRecordingListResponse {
  export interface Data {
    id: Data.ID;

    /**
     * The timestamp of when the call recording was created.
     */
    created_at: string;

    /**
     * The actor that created this call recording.
     */
    created_by_actor: Data.CreatedByActor;

    /**
     * The status of the call recording. When a call recording is first created, it
     * will have a status of `PROCESSING`. Once the recording is ready, it will
     * transition to `COMPLETED`. If the recording fails for any reason, the status
     * will be `FAILED`.
     */
    status: 'processing' | 'completed' | 'failed';

    /**
     * A URL that links directly to the call recording in the Attio web application.
     */
    web_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The call recording ID of the call recording.
       */
      call_recording_id: string;

      /**
       * The ID of the meeting associated with this call recording.
       */
      meeting_id: string;

      /**
       * The ID of the workspace this call recording belongs to.
       */
      workspace_id: string;
    }

    /**
     * The actor that created this call recording.
     */
    export interface CreatedByActor {
      /**
       * An ID to identify the actor.
       */
      id?: string | null;

      /**
       * The type of actor. [Read more information on actor types here](/docs/actors).
       */
      type?: 'api-token' | 'workspace-member' | 'system' | 'app' | null;
    }
  }

  export interface Pagination {
    next_cursor: string | null;
  }
}

/**
 * Success
 */
export type CallRecordingDeleteResponse = unknown;

/**
 * Success
 */
export interface CallRecordingGetTranscriptResponse {
  data: CallRecordingGetTranscriptResponse.Data;

  pagination: CallRecordingGetTranscriptResponse.Pagination;
}

export namespace CallRecordingGetTranscriptResponse {
  export interface Data {
    id: Data.ID;

    /**
     * The raw transcript of the call recording.
     */
    raw_transcript: string;

    /**
     * The transcript segments with speech, timing, and speaker information.
     */
    transcript: Array<Data.Transcript>;

    /**
     * A URL that links directly to the call recording transcript in the Attio web
     * application.
     */
    web_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The ID of the call recording this transcript belongs to.
       */
      call_recording_id: string;

      /**
       * The ID of the meeting associated with this transcript.
       */
      meeting_id: string;

      /**
       * The ID of the workspace this transcript belongs to.
       */
      workspace_id: string;
    }

    export interface Transcript {
      /**
       * The end time of this speech segment in seconds, measured from the start of the
       * recording.
       */
      end_time: number;

      /**
       * The speaker of this transcript segment.
       */
      speaker: Transcript.Speaker;

      /**
       * The spoken text for this segment of the transcript.
       */
      speech: string;

      /**
       * The start time of this speech segment in seconds, measured from the start of the
       * recording.
       */
      start_time: number;
    }

    export namespace Transcript {
      /**
       * The speaker of this transcript segment.
       */
      export interface Speaker {
        /**
         * The name of the speaker.
         */
        name: string;
      }
    }
  }

  export interface Pagination {
    next_cursor: string | null;
  }
}

export interface CallRecordingCreateParams {
  data: CallRecordingCreateParams.Data;
}

export namespace CallRecordingCreateParams {
  export interface Data {
    /**
     * A publicly accessible URL to a video file of the call recording. Attio will
     * download the video from this URL asynchronously.
     *
     * **Requirements:**
     *
     * - **Protocol:** The URL must use the `https` protocol.
     * - **File type:** The file must be a `.mp4` file.
     * - **File size:** The file must not exceed 500MB in size.
     * - **Accessibility:** For the request to be accepted, the URL must be publicly
     *   accessible. Attio will make a `HEAD` request to the URL to verify its
     *   accessibility and retrieve file metadata. The response to this request must
     *   include a `Content-Length` header.
     */
    video_url: string;
  }
}

export interface CallRecordingRetrieveParams {
  /**
   * The ID of the meeting this recording belongs to.
   */
  meeting_id: string;
}

export interface CallRecordingListParams {
  /**
   * A cursor for pagination. Use the `next_cursor` from the previous response to get
   * the next page of results.
   */
  cursor?: string;

  /**
   * The maximum number of results to return. Defaults to 50 with a maximum of 200.
   */
  limit?: number;
}

export interface CallRecordingDeleteParams {
  /**
   * The ID of the meeting this call recording belongs to.
   */
  meeting_id: string;
}

export interface CallRecordingGetTranscriptParams {
  /**
   * Path param: The ID of the meeting.
   */
  meeting_id: string;

  /**
   * Query param: A cursor for pagination through transcript segments. Use the
   * `next_cursor` from the previous response to get the next page of speech segments
   * within this transcript.
   */
  cursor?: string;
}

export declare namespace CallRecordings {
  export {
    type CallRecordingCreateResponse as CallRecordingCreateResponse,
    type CallRecordingRetrieveResponse as CallRecordingRetrieveResponse,
    type CallRecordingListResponse as CallRecordingListResponse,
    type CallRecordingDeleteResponse as CallRecordingDeleteResponse,
    type CallRecordingGetTranscriptResponse as CallRecordingGetTranscriptResponse,
    type CallRecordingCreateParams as CallRecordingCreateParams,
    type CallRecordingRetrieveParams as CallRecordingRetrieveParams,
    type CallRecordingListParams as CallRecordingListParams,
    type CallRecordingDeleteParams as CallRecordingDeleteParams,
    type CallRecordingGetTranscriptParams as CallRecordingGetTranscriptParams,
  };
}
