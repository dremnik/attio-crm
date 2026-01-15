// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RecordsAPI from './records/records';
import {
  RecordAssertParams,
  RecordAssertResponse,
  RecordCreateParams,
  RecordCreateResponse,
  RecordDeleteParams,
  RecordDeleteResponse,
  RecordListEntriesParams,
  RecordListEntriesResponse,
  RecordListParams,
  RecordListResponse,
  RecordRetrieveParams,
  RecordRetrieveResponse,
  RecordSearchParams,
  RecordSearchResponse,
  RecordUpdateAppendParams,
  RecordUpdateAppendResponse,
  RecordUpdateOverwriteParams,
  RecordUpdateOverwriteResponse,
  Records,
} from './records/records';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Objects extends APIResource {
  records: RecordsAPI.Records = new RecordsAPI.Records(this._client);

  /**
   * Creates a new custom object in your workspace.
   *
   * Required scopes: `object_configuration:read-write`.
   *
   * @example
   * ```ts
   * const object = await client.objects.create({
   *   data: {
   *     api_slug: 'people',
   *     plural_noun: 'People',
   *     singular_noun: 'Person',
   *   },
   * });
   * ```
   */
  create(body: ObjectCreateParams, options?: RequestOptions): APIPromise<ObjectCreateResponse> {
    return this._client.post('/v2/objects', { body, ...options });
  }

  /**
   * Gets a single object by its `object_id` or slug.
   *
   * Required scopes: `object_configuration:read`.
   *
   * @example
   * ```ts
   * const object = await client.objects.retrieve('people');
   * ```
   */
  retrieve(object: string, options?: RequestOptions): APIPromise<ObjectRetrieveResponse> {
    return this._client.get(path`/v2/objects/${object}`, options);
  }

  /**
   * Updates a single object. The object to be updated is identified by its
   * `object_id`.
   *
   * Required scopes: `object_configuration:read-write`.
   *
   * @example
   * ```ts
   * const object = await client.objects.update('people', {
   *   data: {},
   * });
   * ```
   */
  update(
    object: string,
    body: ObjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectUpdateResponse> {
    return this._client.patch(path`/v2/objects/${object}`, { body, ...options });
  }

  /**
   * Lists all system-defined and user-defined objects in your workspace.
   *
   * Required scopes: `object_configuration:read`.
   *
   * @example
   * ```ts
   * const objects = await client.objects.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ObjectListResponse> {
    return this._client.get('/v2/objects', options);
  }
}

export interface Object {
  id: Object.ID;

  /**
   * A unique, human-readable slug to access the object through URLs and API calls.
   * Formatted in snake case.
   */
  api_slug: string | null;

  /**
   * When the object was created.
   */
  created_at: string;

  /**
   * The plural form of the object's name.
   */
  plural_noun: string | null;

  /**
   * The singular form of the object's name.
   */
  singular_noun: string | null;
}

export namespace Object {
  export interface ID {
    /**
     * A UUID to identify the object.
     */
    object_id: string;

    /**
     * A UUID to identify the workspace this object belongs to.
     */
    workspace_id: string;
  }
}

/**
 * Success
 */
export interface ObjectCreateResponse {
  data: Object;
}

/**
 * Success
 */
export interface ObjectRetrieveResponse {
  data: Object;
}

/**
 * Success
 */
export interface ObjectUpdateResponse {
  data: Object;
}

/**
 * Success
 */
export interface ObjectListResponse {
  data: Array<Object>;
}

export interface ObjectCreateParams {
  data: ObjectCreateParams.Data;
}

export namespace ObjectCreateParams {
  export interface Data {
    /**
     * A unique, human-readable slug to access the object through URLs and API calls.
     * Should be formatted in snake case.
     */
    api_slug: string;

    /**
     * The plural form of the object's name.
     */
    plural_noun: string;

    /**
     * The singular form of the object's name.
     */
    singular_noun: string;
  }
}

export interface ObjectUpdateParams {
  data: ObjectUpdateParams.Data;
}

export namespace ObjectUpdateParams {
  export interface Data {
    /**
     * A unique, human-readable slug to access the object through URLs and API calls.
     * Should be formatted in snake case.
     */
    api_slug?: string;

    /**
     * The plural form of the object's name.
     */
    plural_noun?: string;

    /**
     * The singular form of the object's name.
     */
    singular_noun?: string;
  }
}

Objects.Records = Records;

export declare namespace Objects {
  export {
    type Object as Object,
    type ObjectCreateResponse as ObjectCreateResponse,
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectUpdateResponse as ObjectUpdateResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectCreateParams as ObjectCreateParams,
    type ObjectUpdateParams as ObjectUpdateParams,
  };

  export {
    Records as Records,
    type RecordCreateResponse as RecordCreateResponse,
    type RecordRetrieveResponse as RecordRetrieveResponse,
    type RecordListResponse as RecordListResponse,
    type RecordDeleteResponse as RecordDeleteResponse,
    type RecordAssertResponse as RecordAssertResponse,
    type RecordListEntriesResponse as RecordListEntriesResponse,
    type RecordSearchResponse as RecordSearchResponse,
    type RecordUpdateAppendResponse as RecordUpdateAppendResponse,
    type RecordUpdateOverwriteResponse as RecordUpdateOverwriteResponse,
    type RecordCreateParams as RecordCreateParams,
    type RecordRetrieveParams as RecordRetrieveParams,
    type RecordListParams as RecordListParams,
    type RecordDeleteParams as RecordDeleteParams,
    type RecordAssertParams as RecordAssertParams,
    type RecordListEntriesParams as RecordListEntriesParams,
    type RecordSearchParams as RecordSearchParams,
    type RecordUpdateAppendParams as RecordUpdateAppendParams,
    type RecordUpdateOverwriteParams as RecordUpdateOverwriteParams,
  };
}
