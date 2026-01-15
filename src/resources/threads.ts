// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CommentsAPI from './comments';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Threads extends APIResource {
  /**
   * Get all comments in a thread.
   *
   * To view threads on records, you will need the `object_configuration:read` and
   * `record_permission:read` scopes.
   *
   * To view threads on list entries, you will need the `list_configuration:read` and
   * `list_entry:read` scopes.
   *
   * Required scopes: `comment:read`.
   */
  retrieve(threadID: string, options?: RequestOptions): APIPromise<ThreadRetrieveResponse> {
    return this._client.get(path`/v2/threads/${threadID}`, options);
  }

  /**
   * List threads of comments on a record or list entry.
   *
   * To view threads on records, you will need the `object_configuration:read` and
   * `record_permission:read` scopes.
   *
   * To view threads on list entries, you will need the `list_configuration:read` and
   * `list_entry:read` scopes.
   *
   * Required scopes: `comment:read`.
   */
  list(
    query: ThreadListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadListResponse> {
    return this._client.get('/v2/threads', { query, ...options });
  }
}

export interface Thread {
  id: Thread.ID;

  /**
   * An array of comments in the thread, sorted by `created_at`.
   */
  comments: Array<CommentsAPI.Comment>;

  /**
   * When the thread was created.
   */
  created_at: string;
}

export namespace Thread {
  export interface ID {
    /**
     * The ID of the thread.
     */
    thread_id: string;

    /**
     * The ID of the workspace the thread belongs to.
     */
    workspace_id: string;
  }
}

/**
 * Success
 */
export interface ThreadRetrieveResponse {
  data: Thread;
}

/**
 * Success
 */
export interface ThreadListResponse {
  data: Array<Thread>;
}

export interface ThreadListParams {
  /**
   * Use this parameter to filter to threads on a specific entry. Must be passed with
   * `list`.
   */
  entry_id?: string;

  /**
   * The maximum number of results to return. The default is `10` and the maximum is
   * `50`. See the [full guide to pagination here](/rest-api/guides/pagination).
   */
  limit?: number;

  /**
   * Use this parameter to filter to threads on a specific entry. Must be passed with
   * `entry_id`. Accepts either a slug or an ID.
   */
  list?: string;

  /**
   * Use this parameter to filter to threads on a specific record. Must be passed
   * with `record_id`. Accepts either a slug or an ID.
   */
  object?: string;

  /**
   * The number of results to skip over before returning. The default is `0`. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  offset?: number;

  /**
   * Use this parameter to filter to threads on a specific record. Must be passed
   * with `object`.
   */
  record_id?: string;
}

export declare namespace Threads {
  export {
    type Thread as Thread,
    type ThreadRetrieveResponse as ThreadRetrieveResponse,
    type ThreadListResponse as ThreadListResponse,
    type ThreadListParams as ThreadListParams,
  };
}
