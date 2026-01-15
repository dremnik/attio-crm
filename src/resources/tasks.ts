// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tasks extends APIResource {
  /**
   * Creates a new task.
   *
   * At present, tasks can only be created from plaintext without record reference
   * formatting.
   *
   * Required scopes: `task:read-write`, `object_configuration:read`,
   * `record_permission:read`, `user_management:read`.
   */
  create(body: TaskCreateParams, options?: RequestOptions): APIPromise<TaskCreateResponse> {
    return this._client.post('/v2/tasks', { body, ...options });
  }

  /**
   * Get a single task by ID.
   *
   * Required scopes: `task:read`, `object_configuration:read`,
   * `record_permission:read`, `user_management:read`.
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<TaskRetrieveResponse> {
    return this._client.get(path`/v2/tasks/${taskID}`, options);
  }

  /**
   * Updates an existing task by `task_id`. At present, only the `deadline_at`,
   * `is_completed`, `linked_records`, and `assignees` fields can be updated.
   *
   * Required scopes: `task:read-write`, `object_configuration:read`,
   * `record_permission:read`, `user_management:read`.
   */
  update(taskID: string, body: TaskUpdateParams, options?: RequestOptions): APIPromise<TaskUpdateResponse> {
    return this._client.patch(path`/v2/tasks/${taskID}`, { body, ...options });
  }

  /**
   * List all tasks. Results are sorted by creation date, from oldest to newest.
   *
   * Required scopes: `task:read`, `object_configuration:read`,
   * `record_permission:read`, `user_management:read`.
   */
  list(
    query: TaskListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskListResponse> {
    return this._client.get('/v2/tasks', { query, ...options });
  }

  /**
   * Delete a task by ID.
   *
   * Required scopes: `task:read-write`.
   */
  delete(taskID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v2/tasks/${taskID}`, options);
  }
}

export interface Task {
  id: Task.ID;

  /**
   * Workspace members assigned to this task.
   */
  assignees: Array<Task.Assignee>;

  /**
   * The plaintext representation of the task content. Inline linked records will
   * appear as "@record name" and are returned in the `linked_records` property.
   */
  content_plaintext: string;

  /**
   * When the task was created.
   */
  created_at: string;

  /**
   * The actor that created this task.
   */
  created_by_actor: Task.CreatedByActor;

  /**
   * The deadline date of the task. Returned as an ISO 8601 timestamp.
   */
  deadline_at: string | null;

  /**
   * Whether the task has been completed.
   */
  is_completed: boolean;

  /**
   * Records linked to the task. Creating record links within task content text is
   * not possible via the API at present.
   */
  linked_records: Array<Task.LinkedRecord>;
}

export namespace Task {
  export interface ID {
    /**
     * The ID of the task.
     */
    task_id: string;

    /**
     * The ID of the workspace the task belongs to.
     */
    workspace_id: string;
  }

  export interface Assignee {
    /**
     * The ID of the workspace member actor assigned to this task.
     */
    referenced_actor_id: string;

    /**
     * The type of actor. [Read more information on actor types here](/docs/actors).
     */
    referenced_actor_type: 'api-token' | 'workspace-member' | 'system' | 'app';
  }

  /**
   * The actor that created this task.
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

  export interface LinkedRecord {
    /**
     * The ID of the parent object the task refers to. At present, only `people` and
     * `companies` are supported.
     */
    target_object_id: string;

    /**
     * The ID of the parent record the task refers to.
     */
    target_record_id: string;
  }
}

/**
 * Success
 */
export interface TaskCreateResponse {
  data: Task;
}

/**
 * Success
 */
export interface TaskRetrieveResponse {
  data: Task;
}

/**
 * Success
 */
export interface TaskUpdateResponse {
  data: Task;
}

/**
 * Success
 */
export interface TaskListResponse {
  data: Array<Task>;
}

/**
 * Success
 */
export type TaskDeleteResponse = unknown;

export interface TaskCreateParams {
  data: TaskCreateParams.Data;
}

export namespace TaskCreateParams {
  export interface Data {
    /**
     * Workspace members assigned to this task.
     */
    assignees: Array<Data.UnionMember0 | Data.WorkspaceMemberEmailAddress>;

    /**
     * The text content of the task, in the format specified by the `format` property.
     * A max length of 2000 characters is enforced.
     */
    content: string;

    /**
     * The deadline of the task, in ISO 8601 format.
     */
    deadline_at: string | null;

    /**
     * The format of the task content to be created. Rich text formatting, links and
     * @references are not supported.
     */
    format: 'plaintext';

    /**
     * Whether the task has been completed.
     */
    is_completed: boolean;

    /**
     * Records linked to the task. Creating record links within task content text is
     * not possible via the API at present.
     */
    linked_records: Array<Data.UnionMember0 | Data.UnionMember1>;
  }

  export namespace Data {
    export interface UnionMember0 {
      /**
       * The ID of the actor assigned to this task.
       */
      referenced_actor_id: string;

      /**
       * The actor type of the task assignee. Only `workspace-member` actors can be
       * assigned to tasks. [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'workspace-member';
    }

    export interface WorkspaceMemberEmailAddress {
      /**
       * Workspace member actors can be referenced by email address as well as actor ID.
       */
      workspace_member_email_address: string;
    }

    export interface UnionMember0 {
      /**
       * The ID or slug of the parent object the tasks refers to. This can reference both
       * standard and custom objects.`
       */
      target_object: string;

      /**
       * The ID of the parent record the task refers to.
       */
      target_record_id: string;
    }

    export interface UnionMember1 {
      /**
       * In addition to referencing records directly by record ID, you may also reference
       * by a matching attribute of your choice. For example, if you want to add a
       * reference to the person record with email "alice@website.com", you should pass a
       * value with `target_object` set to `"people"` and `email_addresses` set to
       * `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the
       * matching attribute you would like to use and the value should be an array
       * containing a single value of the appropriate attribute type (as specified
       * below). Matching on multiple values is not currently supported. Matching
       * attributes must be unique. This process is similar to how you use the
       * `matching_attribute` query param in Attio's
       * [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record).
       */
      '[slug_or_id_of_matching_attribute]': Array<
        | UnionMember1.Domain
        | UnionMember1.EmailAddress
        | UnionMember1.Value
        | UnionMember1.UnionMember3
        | UnionMember1.Value
      >;

      /**
       * A UUID or slug to identify the object that the referenced record belongs to.
       */
      target_object: string;
    }

    export namespace UnionMember1 {
      export interface Domain {
        /**
         * The full domain of the website.
         */
        domain?: string;
      }

      export interface EmailAddress {
        /**
         * An email address string
         */
        email_address?: string;
      }

      export interface Value {
        /**
         * Numbers are persisted as 64 bit floats.
         */
        value?: number;
      }

      export interface UnionMember3 {
        /**
         * The ISO 3166-1 alpha-2 country code representing the country that this phone
         * number belongs to.
         */
        country_code?:
          | 'AF'
          | 'AX'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GG'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IM'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JE'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MK'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'ME'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'AN'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'BL'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'MF'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SS'
          | 'RS'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'US'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'BQ'
          | 'KP'
          | 'SX'
          | 'XK'
          | 'AC'
          | null;

        /**
         * The raw, original phone number, as inputted.
         */
        original_phone_number?: string;
      }

      export interface Value {
        /**
         * A raw text field. Values are limited to 10MB.
         */
        value?: string;
      }
    }
  }
}

export interface TaskUpdateParams {
  data: TaskUpdateParams.Data;
}

export namespace TaskUpdateParams {
  export interface Data {
    /**
     * Workspace members assigned to this task.
     */
    assignees?: Array<Data.UnionMember0 | Data.WorkspaceMemberEmailAddress>;

    /**
     * The deadline of the task, in ISO 8601 format.
     */
    deadline_at?: string | null;

    /**
     * Whether the task has been completed.
     */
    is_completed?: boolean;

    /**
     * Records linked to the task. Creating record links within task content text is
     * not possible via the API at present.
     */
    linked_records?: Array<Data.UnionMember0 | Data.UnionMember1>;
  }

  export namespace Data {
    export interface UnionMember0 {
      /**
       * The ID of the actor assigned to this task.
       */
      referenced_actor_id: string;

      /**
       * The actor type of the task assignee. Only `workspace-member` actors can be
       * assigned to tasks. [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'workspace-member';
    }

    export interface WorkspaceMemberEmailAddress {
      /**
       * Workspace member actors can be referenced by email address as well as actor ID.
       */
      workspace_member_email_address: string;
    }

    export interface UnionMember0 {
      /**
       * The ID or slug of the parent object the tasks refers to. This can reference both
       * standard and custom objects.`
       */
      target_object: string;

      /**
       * The ID of the parent record the task refers to.
       */
      target_record_id: string;
    }

    export interface UnionMember1 {
      /**
       * In addition to referencing records directly by record ID, you may also reference
       * by a matching attribute of your choice. For example, if you want to add a
       * reference to the person record with email "alice@website.com", you should pass a
       * value with `target_object` set to `"people"` and `email_addresses` set to
       * `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the
       * matching attribute you would like to use and the value should be an array
       * containing a single value of the appropriate attribute type (as specified
       * below). Matching on multiple values is not currently supported. Matching
       * attributes must be unique. This process is similar to how you use the
       * `matching_attribute` query param in Attio's
       * [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record).
       */
      '[slug_or_id_of_matching_attribute]': Array<
        | UnionMember1.Domain
        | UnionMember1.EmailAddress
        | UnionMember1.Value
        | UnionMember1.UnionMember3
        | UnionMember1.Value
      >;

      /**
       * A UUID or slug to identify the object that the referenced record belongs to.
       */
      target_object: string;
    }

    export namespace UnionMember1 {
      export interface Domain {
        /**
         * The full domain of the website.
         */
        domain?: string;
      }

      export interface EmailAddress {
        /**
         * An email address string
         */
        email_address?: string;
      }

      export interface Value {
        /**
         * Numbers are persisted as 64 bit floats.
         */
        value?: number;
      }

      export interface UnionMember3 {
        /**
         * The ISO 3166-1 alpha-2 country code representing the country that this phone
         * number belongs to.
         */
        country_code?:
          | 'AF'
          | 'AX'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GG'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IM'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JE'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MK'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'ME'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'AN'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'BL'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'MF'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SS'
          | 'RS'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'US'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'BQ'
          | 'KP'
          | 'SX'
          | 'XK'
          | 'AC'
          | null;

        /**
         * The raw, original phone number, as inputted.
         */
        original_phone_number?: string;
      }

      export interface Value {
        /**
         * A raw text field. Values are limited to 10MB.
         */
        value?: string;
      }
    }
  }
}

export interface TaskListParams {
  /**
   * Filter tasks by workspace member assignees. Workspace members can be referenced
   * by either their email address or ID. Pass an empty value or the string `null` to
   * find tasks with no assignee.
   */
  assignee?: string | null;

  /**
   * Filter tasks by whether they have been completed. By default, both completed and
   * non-completed tasks are returned. Specify `true` to only return completed tasks,
   * or `false` to only return non-completed tasks.
   */
  is_completed?: boolean;

  /**
   * The maximum number of results to return. Defaults to 500. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  limit?: number;

  /**
   * Pass a value to this parameter to filter results to only those tasks that
   * contain the specified record in the `linked_records` property of the task. This
   * parameter should identify the object that the linked record belongs to. For
   * example, if filtering to tasks that link to a specific person record, this
   * parameter should be `people`. If provided, `linked_record_id` must also be
   * provided.
   */
  linked_object?: string;

  /**
   * Pass a value to this parameter to filter results to only those tasks that
   * contain the specified record in the `linked_records` property of the task. This
   * parameter should contain the record ID of the linked record. If provided,
   * `linked_object` must also be provided.
   */
  linked_record_id?: string;

  /**
   * The number of results to skip over before returning. Defaults to 0. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  offset?: number;

  /**
   * Optionally sort the results. "created_at:asc" returns oldest results first,
   * "created_at:desc" returns the newest results first. If unspecified, defaults to
   * "created_at:asc" (oldest results first).
   */
  sort?: 'created_at:asc' | 'created_at:desc';
}

export declare namespace Tasks {
  export {
    type Task as Task,
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskListResponse as TaskListResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskCreateParams as TaskCreateParams,
    type TaskUpdateParams as TaskUpdateParams,
    type TaskListParams as TaskListParams,
  };
}
