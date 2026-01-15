// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntriesAPI from './entries/entries';
import {
  Entries,
  EntryAssertParams,
  EntryAssertResponse,
  EntryCreateParams,
  EntryCreateResponse,
  EntryDeleteParams,
  EntryDeleteResponse,
  EntryListParams,
  EntryListResponse,
  EntryOverwriteParams,
  EntryOverwriteResponse,
  EntryRetrieveParams,
  EntryRetrieveResponse,
  EntryUpdateParams,
  EntryUpdateResponse,
} from './entries/entries';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lists extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * Creates a new list.
   *
   * Once you have your list, add attributes to it using the
   * [Create attribute](/rest-api/endpoint-reference/attributes/create-an-attribute)
   * API, and add records to it using the
   * [Add records to list](/rest-api/endpoint-reference/entries/create-an-entry-add-record-to-list)
   * API.
   *
   * New lists must specify which records can be added with the `parent_object`
   * parameter which accepts either an object slug or an object ID. Permissions for
   * the list are controlled with the `workspace_access` and
   * `workspace_member_access` parameters.
   *
   * Please note that new lists must have either `workspace_access` set to
   * `"full-access"` or one or more element of `workspace_member_access` with a
   * `"full-access"` level. It is also possible to receive a `403` billing error if
   * your workspace is not on a plan that supports either advanced workspace or
   * workspace member-level access for lists.
   *
   * Required scopes: `list_configuration:read-write`.
   *
   * @example
   * ```ts
   * const list = await client.lists.create({
   *   data: {
   *     api_slug: 'enterprise_sales',
   *     name: 'Enterprise Sales',
   *     parent_object: 'people',
   *     workspace_access: 'read-and-write',
   *     workspace_member_access: [
   *       {
   *         level: 'read-and-write',
   *         workspace_member_id:
   *           '50cf242c-7fa3-4cad-87d0-75b1af71c57b',
   *       },
   *     ],
   *   },
   * });
   * ```
   */
  create(body: ListCreateParams, options?: RequestOptions): APIPromise<ListCreateResponse> {
    return this._client.post('/v2/lists', { body, ...options });
  }

  /**
   * Gets a single list in your workspace that your access token has access to.
   *
   * Required scopes: `list_configuration:read`.
   *
   * @example
   * ```ts
   * const list = await client.lists.retrieve(
   *   '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
   * );
   * ```
   */
  retrieve(list: string, options?: RequestOptions): APIPromise<ListRetrieveResponse> {
    return this._client.get(path`/v2/lists/${list}`, options);
  }

  /**
   * Updates an existing list. Permissions for the list are controlled with the
   * `workspace_access` and `workspace_member_access` parameters. Please note that
   * lists must have either `workspace_access` set to `"full-access"` or one or more
   * element of `workspace_member_access` with a `"full-access"` level. It is also
   * possible to receive a `403` billing error if your workspace is not on a plan
   * that supports either advanced workspace or workspace member level access for
   * lists. Changing the parent object of a list is not possible through the API as
   * it can have unintended side-effects that should be considered carefully. If you
   * wish to carry out a parent object change you should do so through the UI.
   *
   * Required scopes: `list_configuration:read-write`.
   *
   * @example
   * ```ts
   * const list = await client.lists.update(
   *   '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
   *   { data: {} },
   * );
   * ```
   */
  update(list: string, body: ListUpdateParams, options?: RequestOptions): APIPromise<ListUpdateResponse> {
    return this._client.patch(path`/v2/lists/${list}`, { body, ...options });
  }

  /**
   * List all lists that your access token has access to. lists are returned in the
   * order that they are sorted in the sidebar.
   *
   * Required scopes: `list_configuration:read`.
   *
   * @example
   * ```ts
   * const lists = await client.lists.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListListResponse> {
    return this._client.get('/v2/lists', options);
  }
}

export interface List {
  id: List.ID;

  /**
   * A human-readable slug for use in URLs and responses.
   */
  api_slug: string;

  /**
   * When the list was created.
   */
  created_at: string;

  /**
   * The actor which created this list.
   */
  created_by_actor: List.CreatedByActor;

  /**
   * The name of the list, as viewed in the UI.
   */
  name: string;

  /**
   * A UUID or slug to identify the allowed object type for records added to this
   * list. All new Lists are expected to have exactly one parent object. However,
   * some legacy lists may have multiple allowed parents so the return type of this
   * field is an array.
   */
  parent_object: Array<string>;

  /**
   * The level of access granted to all members of the workspace for this list.
   * `null` values represent a private list that only grants access to specific
   * workspace members via the `workspace_member_access` property.
   */
  workspace_access: 'full-access' | 'read-and-write' | 'read-only' | null;

  /**
   * The level of access granted to specific workspace members for this list. An
   * empty array represents a list that has granted access to no workspace members.
   */
  workspace_member_access: Array<List.WorkspaceMemberAccess>;
}

export namespace List {
  export interface ID {
    /**
     * A UUID to identify this list.
     */
    list_id: string;

    /**
     * A UUID to identify the workspace this list belongs to.
     */
    workspace_id: string;
  }

  /**
   * The actor which created this list.
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

  export interface WorkspaceMemberAccess {
    /**
     * The level of access to the list.
     */
    level: 'full-access' | 'read-and-write' | 'read-only';

    /**
     * A UUID to identify the workspace member to grant access to.
     */
    workspace_member_id: string;
  }
}

/**
 * Success
 */
export interface ListCreateResponse {
  data: List;
}

/**
 * Success
 */
export interface ListRetrieveResponse {
  data: List;
}

/**
 * Success
 */
export interface ListUpdateResponse {
  data: List;
}

/**
 * Success
 */
export interface ListListResponse {
  data: Array<List>;
}

export interface ListCreateParams {
  data: ListCreateParams.Data;
}

export namespace ListCreateParams {
  export interface Data {
    /**
     * A unique, human-readable slug to access the list through API calls. Should be
     * formatted in snake case.
     */
    api_slug: string;

    /**
     * The human-readable name of the list.
     */
    name: string;

    /**
     * A UUID or slug to identify the allowed object type for records added to this
     * list.
     */
    parent_object: string;

    /**
     * The level of access granted to all members of the workspace for this list. Pass
     * `null` to keep the list private and only grant access to specific workspace
     * members.
     */
    workspace_access: 'full-access' | 'read-and-write' | 'read-only' | null;

    /**
     * The level of access granted to specific workspace members for this list. Pass an
     * empty array to grant access to no workspace members.
     */
    workspace_member_access: Array<Data.WorkspaceMemberAccess>;
  }

  export namespace Data {
    export interface WorkspaceMemberAccess {
      /**
       * The level of access to the list.
       */
      level: 'full-access' | 'read-and-write' | 'read-only';

      /**
       * A UUID to identify the workspace member to grant access to.
       */
      workspace_member_id: string;
    }
  }
}

export interface ListUpdateParams {
  data: ListUpdateParams.Data;
}

export namespace ListUpdateParams {
  export interface Data {
    /**
     * A unique, human-readable slug to access the list through API calls. Should be
     * formatted in snake case.
     */
    api_slug?: string;

    /**
     * The human-readable name of the list.
     */
    name?: string;

    /**
     * The level of access granted to all members of the workspace for this list. Pass
     * `null` to keep the list private and only grant access to specific workspace
     * members.
     */
    workspace_access?: 'full-access' | 'read-and-write' | 'read-only' | null;

    /**
     * The level of access granted to specific workspace members for this list. Pass an
     * empty array to grant access to no workspace members.
     */
    workspace_member_access?: Array<Data.WorkspaceMemberAccess>;
  }

  export namespace Data {
    export interface WorkspaceMemberAccess {
      /**
       * The level of access to the list.
       */
      level: 'full-access' | 'read-and-write' | 'read-only';

      /**
       * A UUID to identify the workspace member to grant access to.
       */
      workspace_member_id: string;
    }
  }
}

Lists.Entries = Entries;

export declare namespace Lists {
  export {
    type List as List,
    type ListCreateResponse as ListCreateResponse,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type ListListResponse as ListListResponse,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
  };

  export {
    Entries as Entries,
    type EntryCreateResponse as EntryCreateResponse,
    type EntryRetrieveResponse as EntryRetrieveResponse,
    type EntryUpdateResponse as EntryUpdateResponse,
    type EntryListResponse as EntryListResponse,
    type EntryDeleteResponse as EntryDeleteResponse,
    type EntryAssertResponse as EntryAssertResponse,
    type EntryOverwriteResponse as EntryOverwriteResponse,
    type EntryCreateParams as EntryCreateParams,
    type EntryRetrieveParams as EntryRetrieveParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryListParams as EntryListParams,
    type EntryDeleteParams as EntryDeleteParams,
    type EntryAssertParams as EntryAssertParams,
    type EntryOverwriteParams as EntryOverwriteParams,
  };
}
