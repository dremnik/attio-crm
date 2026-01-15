// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallRecordingsAPI from './call-recordings';
import {
  CallRecordingCreateParams,
  CallRecordingCreateResponse,
  CallRecordingDeleteParams,
  CallRecordingDeleteResponse,
  CallRecordingGetTranscriptParams,
  CallRecordingGetTranscriptResponse,
  CallRecordingListParams,
  CallRecordingListResponse,
  CallRecordingRetrieveParams,
  CallRecordingRetrieveResponse,
  CallRecordings,
} from './call-recordings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Meetings extends APIResource {
  callRecordings: CallRecordingsAPI.CallRecordings = new CallRecordingsAPI.CallRecordings(this._client);

  /**
   * Get a single meeting by ID.
   *
   * This endpoint is in beta. We will aim to avoid breaking changes, but small
   * updates may be made as we roll out to more users.
   *
   * Required scopes: `meeting:read`, `record_permission:read`.
   */
  retrieve(meetingID: string, options?: RequestOptions): APIPromise<MeetingRetrieveResponse> {
    return this._client.get(path`/v2/meetings/${meetingID}`, options);
  }

  /**
   * Lists all meetings in the workspace using a deterministic sort order.
   *
   * This endpoint is in beta. We will aim to avoid breaking changes, but small
   * updates may be made as we roll out to more users.
   *
   * Required scopes: `meeting:read`, `record_permission:read`.
   */
  list(
    query: MeetingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeetingListResponse> {
    return this._client.get('/v2/meetings', { query, ...options });
  }

  /**
   * Finds an existing meeting or creates a new one if it doesn't yet exist.
   * [Please see here](/rest-api/guides/syncing-meetings) for a full guide on syncing
   * meetings to Attio.
   *
   * This endpoint is in alpha and may be subject to breaking changes as we gather
   * feedback.
   *
   * Required scopes: `meeting:read-write`, `record_permission:read`.
   */
  findOrCreate(
    body: MeetingFindOrCreateParams,
    options?: RequestOptions,
  ): APIPromise<MeetingFindOrCreateResponse> {
    return this._client.post('/v2/meetings', { body, ...options });
  }
}

export interface Meeting {
  id: Meeting.ID;

  /**
   * Timestamp representing when the meeting was created.
   */
  created_at: string;

  /**
   * The actor that created this meeting.
   */
  created_by_actor: Meeting.CreatedByActor;

  /**
   * The description of the meeting.
   */
  description: string;

  end: Meeting.UnionMember0 | Meeting.Date;

  /**
   * Whether or not the meeting is an all day event. All day events may span multiple
   * days.
   */
  is_all_day: boolean;

  /**
   * A list of records that are linked to the meeting. Participants with matching
   * person records are automatically linked to the meeting but other records may
   * also be linked explicitly.
   */
  linked_records: Array<Meeting.LinkedRecord>;

  participants: Array<Meeting.Participant>;

  start: Meeting.UnionMember0 | Meeting.Date;

  /**
   * The title of the meeting.
   */
  title: string;
}

export namespace Meeting {
  export interface ID {
    /**
     * The ID of the Attio meeting.
     */
    meeting_id: string;

    /**
     * The ID of the workspace the meeting belongs to.
     */
    workspace_id: string;
  }

  /**
   * The actor that created this meeting.
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

  export interface UnionMember0 {
    /**
     * A datetime representing when the meeting ends. All day meetings will return a
     * date whereas non-all day meetings will return a datetime. Datetimes do not
     * include timezone information; please refer to `timezone` for timezone
     * information. Following iCalendar RFC 5545, the `end_at` property is exclusive,
     * meaning that the meeting ends before the specified time, not at it. For example,
     * a one day meeting on June 3rd would have an `end_at` of June 4th, not June 3rd;
     * a one hour meeting starting at 14:00 would have an `end_at` of 15:00, not 14:00.
     */
    datetime: string;

    /**
     * The IANA timezone in which the meeting ends, if available.
     */
    timezone: string | null;
  }

  export interface Date {
    /**
     * If an all day event, a date representing when the meeting ends.
     */
    date: string;
  }

  export interface LinkedRecord {
    /**
     * The ID of the object the meeting linked record belongs to.
     */
    object_id: string;

    /**
     * The slug of the object the meeting linked record belongs to.
     */
    object_slug: string;

    /**
     * The ID of the meeting linked record.
     */
    record_id: string;
  }

  export interface Participant {
    /**
     * The normalized email address of the meeting participant.
     */
    email_address: string | null;

    /**
     * Whether or not the participant is the organizer of the meeting.
     */
    is_organizer: boolean;

    /**
     * The status of the individual meeting participant.
     */
    status: 'accepted' | 'tentative' | 'declined' | 'pending';
  }

  export interface UnionMember0 {
    /**
     * If a non-all day event, a datetime representing when the meeting starts.
     * Datetimes are formatted as UTC if no timezone is available. If a timezone is
     * available, the datetime will offset using the specified timezone.
     */
    datetime: string;

    /**
     * The IANA timezone in which the meeting starts, if available.
     */
    timezone: string | null;
  }

  export interface Date {
    /**
     * If an all day event, a date representing when the meeting starts.
     */
    date: string;
  }
}

/**
 * Success
 */
export interface MeetingRetrieveResponse {
  data: Meeting;
}

/**
 * Success
 */
export interface MeetingListResponse {
  data: Array<Meeting>;

  pagination: MeetingListResponse.Pagination;
}

export namespace MeetingListResponse {
  export interface Pagination {
    next_cursor: string | null;
  }
}

/**
 * Success
 */
export interface MeetingFindOrCreateResponse {
  data: Meeting;
}

export interface MeetingListParams {
  /**
   * A pagination cursor used to fetch the next page of meetings. Responses with more
   * meetings will include a cursor for you to use here. If not provided, the first
   * page will be returned.
   */
  cursor?: string;

  /**
   * Use `ends_from` to filter meetings to only those that end after the specified
   * timestamp. `ends_from` is inclusive, meaning that meetings that end at the exact
   * timestamp will be included in results. When evaluating all-day meetings, we
   * filter results from the perspective of a specific timezone (see `timezone` for
   * more information).
   */
  ends_from?: string | null;

  /**
   * The maximum number of meetings to return. Must be between 1 and 200. Defaults
   * to 50.
   */
  limit?: number;

  /**
   * The object to filter meetings by. Must be a valid object slug or ID. If
   * provided, linked_record_id must also be provided.
   */
  linked_object?: string;

  /**
   * Used to filter meetings to only those values that include a specific linked
   * record. Must be a valid record ID. If provided, linked_object must also be
   * provided.
   */
  linked_record_id?: string;

  /**
   * A comma-separated list of emails to filter meetings by. If provided, meetings
   * will be filtered to only include meetings that include at least one of the
   * provided emails as participants.
   */
  participants?: string;

  /**
   * The order in which to sort the meetings. Defaults to start_asc.
   */
  sort?: 'start_asc' | 'start_desc';

  /**
   * Use `starts_before` to filter meetings to only those that start before the
   * specified timestamp. `starts_before` is exclusive, meaning that meetings that
   * start at the exact timestamp will not be included in results. When evaluating
   * all-day meetings, we filter results from the perspective of a specific timezone
   * (see `timezone` for more information).
   */
  starts_before?: string | null;

  /**
   * The timezone to use when filtering meetings using `ends_from` and
   * `starts_before`. Defaults to UTC. This property has no effect for non-all-day
   * meetings.
   */
  timezone?: string;
}

export interface MeetingFindOrCreateParams {
  data: MeetingFindOrCreateParams.Data;
}

export namespace MeetingFindOrCreateParams {
  export interface Data {
    /**
     * The description of the meeting.
     */
    description: string;

    /**
     * When the meeting ends. Use a datetime and optional timezone for non-all day
     * meetings, or a date for all day meetings.
     */
    end: Data.UnionMember0 | Data.Date;

    /**
     * A consistent external reference used to match and de-duplicate meetings. Can be
     * either a plain string (for external system IDs) or an object with `ical_uid` and
     * `provider`. If you are writing data into Attio which is based upon calendar
     * events that you have synced from a Google or Microsoft calendar, you must use
     * the iCal format to avoid creating duplicate meetings inside Attio.
     */
    external_ref: string | Data.UnionMember1;

    /**
     * Whether or not the meeting is an all day event. All day events may span multiple
     * days. When true, start and end must use date format. When false, start and end
     * must use datetime with timezone format.
     */
    is_all_day: boolean;

    participants: Array<Data.Participant>;

    /**
     * When the meeting starts. Use a datetime and optional timezone for non-all day
     * meetings, or a date for all day meetings.
     */
    start: Data.UnionMember0 | Data.Date;

    /**
     * The title of the meeting.
     */
    title: string;

    /**
     * A list of records to link to the meeting. Each record is specified by its object
     * (slug or UUID) and record ID (UUID). Attio will automatically link the meeting
     * participants' companies to the meeting; this behavior is asynchronous.
     */
    linked_records?: Array<Data.LinkedRecord>;
  }

  export namespace Data {
    export interface UnionMember0 {
      /**
       * An ISO 8601 datetime indicating when a non-all day meeting ends. Note that this
       * value is exclusive, meaning that the meeting ends before the specified time, not
       * at it. For example, a one hour meeting starting at 14:00 would end at 15:00, not
       * 15:59:59.
       */
      datetime: string;

      /**
       * The IANA timezone the meeting ends in. If a datetime value is provided without
       * an offset, this timezone will be used to convert the datetime to UTC using the
       * timezone offset. If a datetime value is provided with an offset, this timezone
       * will not be used to apply any additional offset to the datetime. Invalid
       * timezones will be treated as UTC.
       */
      timezone?: string | null;
    }

    export interface Date {
      /**
       * An ISO 8601 date indicating when an all day meeting ends. Note that dates are
       * exclusive, meaning that the meeting ends before the specified time, not at it.
       * For example, a one day meeting on June 3rd would end on June 4th, not June 3rd.
       */
      date: string;
    }

    export interface UnionMember1 {
      /**
       * The ical uid of the meeting.
       */
      ical_uid: string;

      /**
       * Whether or not the meeting is recurring.
       */
      is_recurring: boolean;

      /**
       * The email provider used to sync the meeting.
       */
      provider: 'google' | 'microsoft';

      /**
       * The original start time of the meeting. Use a timestamp with a specified offset
       * for all day and non-all day meetings. This property is required for recurring
       * event exceptions and optional otherwise.
       */
      original_start_time?: string;
    }

    export interface Participant {
      /**
       * The email address of the participant. New person records and companies will
       * automatically be created based upon the email address values provided.
       */
      email_address: string;

      /**
       * Whether or not the participant is the organizer of the meeting.
       */
      is_organizer: 'true' | 'false' | boolean;

      /**
       * The status of the individual meeting participant.
       */
      status: 'accepted' | 'tentative' | 'declined' | 'pending';
    }

    export interface UnionMember0 {
      /**
       * An ISO 8601 datetime indicating when a non-all day meeting starts.
       */
      datetime: string;

      /**
       * The IANA timezone the meeting starts in. If a datetime value is provided without
       * an offset, this timezone will be used to convert the datetime to UTC using the
       * timezone offset. If a datetime value is provided with an offset, this timezone
       * will not be used to apply any additional offset to the datetime. Invalid
       * timezones will be treated as UTC.
       */
      timezone?: string | null;
    }

    export interface Date {
      /**
       * An ISO 8601 date indicating when an all day meeting starts.
       */
      date: string;
    }

    export interface LinkedRecord {
      /**
       * The slug or UUID of the object that the record being linked belongs to.
       */
      object: string;

      /**
       * The UUID of the record being linked.
       */
      record_id: string;
    }
  }
}

Meetings.CallRecordings = CallRecordings;

export declare namespace Meetings {
  export {
    type Meeting as Meeting,
    type MeetingRetrieveResponse as MeetingRetrieveResponse,
    type MeetingListResponse as MeetingListResponse,
    type MeetingFindOrCreateResponse as MeetingFindOrCreateResponse,
    type MeetingListParams as MeetingListParams,
    type MeetingFindOrCreateParams as MeetingFindOrCreateParams,
  };

  export {
    CallRecordings as CallRecordings,
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
