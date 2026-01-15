// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Statuses extends APIResource {
  /**
   * Add a new status to a status attribute on either an object or a list.
   *
   * Required scopes: `object_configuration:read-write`.
   */
  create(
    attribute: string,
    params: StatusCreateParams,
    options?: RequestOptions,
  ): APIPromise<StatusCreateResponse> {
    const { target, identifier, ...body } = params;
    return this._client.post(path`/v2/${target}/${identifier}/attributes/${attribute}/statuses`, {
      body,
      ...options,
    });
  }

  /**
   * Update a status on an status attribute on either an object or a list.
   *
   * Required scopes: `object_configuration:read-write`.
   */
  update(
    status: string,
    params: StatusUpdateParams,
    options?: RequestOptions,
  ): APIPromise<StatusUpdateResponse> {
    const { target, identifier, attribute, ...body } = params;
    return this._client.patch(path`/v2/${target}/${identifier}/attributes/${attribute}/statuses/${status}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all statuses for a particular status attribute on either an object or a
   * list.
   *
   * Required scopes: `object_configuration:read`.
   */
  list(
    attribute: string,
    params: StatusListParams,
    options?: RequestOptions,
  ): APIPromise<StatusListResponse> {
    const { target, identifier, ...query } = params;
    return this._client.get(path`/v2/${target}/${identifier}/attributes/${attribute}/statuses`, {
      query,
      ...options,
    });
  }
}

export interface Status {
  id: Status.ID;

  /**
   * Whether arriving at this status triggers a celebration effect in the UI
   */
  celebration_enabled: boolean;

  /**
   * Whether or not to archive the status. See our
   * [archiving guide](/docs/archiving-vs-deleting) for more information on
   * archiving.
   */
  is_archived: boolean;

  /**
   * Target time for a record to spend in given status expressed as a ISO-8601
   * duration string
   */
  target_time_in_status: string | null;

  /**
   * The title of the status
   */
  title: string;
}

export namespace Status {
  export interface ID {
    /**
     * The ID of the attribute
     */
    attribute_id: string;

    /**
     * The ID of the object
     */
    object_id: string;

    /**
     * The ID of the status
     */
    status_id: string;

    /**
     * The ID of the workspace
     */
    workspace_id: string;
  }
}

/**
 * Success
 */
export interface StatusCreateResponse {
  data: Status;
}

/**
 * Success
 */
export interface StatusUpdateResponse {
  data: Status;
}

/**
 * Success
 */
export interface StatusListResponse {
  data: Array<Status>;
}

export interface StatusCreateParams {
  /**
   * Path param: Whether the attribute is on an object or a list. Please note that
   * company and person objects do not support status attributes at this time.
   */
  target: 'lists' | 'objects';

  /**
   * Path param: A UUID or slug to identify the object or list the status attribute
   * belongs to.
   */
  identifier: string;

  /**
   * Body param
   */
  data: StatusCreateParams.Data;
}

export namespace StatusCreateParams {
  export interface Data {
    /**
     * The Title of the status
     */
    title: string;

    /**
     * Whether arriving at this status triggers a celebration effect
     */
    celebration_enabled?: boolean;

    /**
     * Target time for a record to spend in given status expressed as a ISO-8601
     * duration string
     */
    target_time_in_status?: string | null;
  }
}

export interface StatusUpdateParams {
  /**
   * Path param: Whether the attribute is on an object or a list. Please note that
   * company and person objects do not support status attributes at this time.
   */
  target: 'lists' | 'objects';

  /**
   * Path param: A UUID or slug to identify the object or list the status attribute
   * belongs to.
   */
  identifier: string;

  /**
   * Path param: A UUID or slug to identify the attribute to update the status on.
   */
  attribute: string;

  /**
   * Body param
   */
  data: StatusUpdateParams.Data;
}

export namespace StatusUpdateParams {
  export interface Data {
    /**
     * Whether arriving at this status triggers a celebration effect
     */
    celebration_enabled?: boolean;

    /**
     * Whether or not to archive the status. See our
     * [archiving guide](/docs/archiving-vs-deleting) for more information on
     * archiving.
     */
    is_archived?: boolean;

    /**
     * Target time for a record to spend in given status expressed as a ISO-8601
     * duration string
     */
    target_time_in_status?: string | null;

    /**
     * The Title of the status
     */
    title?: string;
  }
}

export interface StatusListParams {
  /**
   * Path param: Whether the attribute is on an object or a list. Please note that
   * the company and people objects do not support status attributes at this time.
   */
  target: 'lists' | 'objects';

  /**
   * Path param: A UUID or slug to identify the object or list the status attribute
   * belongs to.
   */
  identifier: string;

  /**
   * Query param: `true` if you want the results to include archived statuses. See
   * our [archiving guide](/docs/archiving-vs-deleting) for more information on
   * archiving.
   */
  show_archived?: boolean;
}

export declare namespace Statuses {
  export {
    type Status as Status,
    type StatusCreateResponse as StatusCreateResponse,
    type StatusUpdateResponse as StatusUpdateResponse,
    type StatusListResponse as StatusListResponse,
    type StatusCreateParams as StatusCreateParams,
    type StatusUpdateParams as StatusUpdateParams,
    type StatusListParams as StatusListParams,
  };
}
