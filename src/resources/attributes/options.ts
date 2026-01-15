// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Options extends APIResource {
  /**
   * Adds a select option to a select attribute on an object or a list.
   *
   * Required scopes: `object_configuration:read-write`.
   */
  create(
    attribute: string,
    params: OptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<OptionCreateResponse> {
    const { target, identifier, ...body } = params;
    return this._client.post(path`/v2/${target}/${identifier}/attributes/${attribute}/options`, {
      body,
      ...options,
    });
  }

  /**
   * Updates a select option on an attribute on either an object or a list.
   *
   * Required scopes: `object_configuration:read-write`.
   */
  update(
    option: string,
    params: OptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OptionUpdateResponse> {
    const { target, identifier, attribute, ...body } = params;
    return this._client.patch(path`/v2/${target}/${identifier}/attributes/${attribute}/options/${option}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all select options for a particular attribute on either an object or a
   * list.
   *
   * Required scopes: `object_configuration:read`.
   */
  list(
    attribute: string,
    params: OptionListParams,
    options?: RequestOptions,
  ): APIPromise<OptionListResponse> {
    const { target, identifier, ...query } = params;
    return this._client.get(path`/v2/${target}/${identifier}/attributes/${attribute}/options`, {
      query,
      ...options,
    });
  }
}

export interface SelectOption {
  id: SelectOption.ID;

  /**
   * Whether or not to archive the select option. See our
   * [archiving guide](/docs/archiving-vs-deleting) for more information on
   * archiving.
   */
  is_archived: boolean;

  /**
   * The title of the select option
   */
  title: string;
}

export namespace SelectOption {
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
     * The ID of the select option
     */
    option_id: string;

    /**
     * The ID of the workspace
     */
    workspace_id: string;
  }
}

/**
 * Success
 */
export interface OptionCreateResponse {
  data: SelectOption;
}

/**
 * Success
 */
export interface OptionUpdateResponse {
  data: SelectOption;
}

/**
 * Success
 */
export interface OptionListResponse {
  data: Array<SelectOption>;
}

export interface OptionCreateParams {
  /**
   * Path param: Whether the attribute is on an object or a list.
   */
  target: 'objects' | 'lists';

  /**
   * Path param: A UUID or slug to identify the object or list the select attribute
   * belongs to.
   */
  identifier: string;

  /**
   * Body param
   */
  data: OptionCreateParams.Data;
}

export namespace OptionCreateParams {
  export interface Data {
    /**
     * The Title of the select option
     */
    title: string;
  }
}

export interface OptionUpdateParams {
  /**
   * Path param: Whether the attribute is on an object or a list.
   */
  target: 'objects' | 'lists';

  /**
   * Path param: A UUID or slug to identify the object or list the select attribute
   * belongs to.
   */
  identifier: string;

  /**
   * Path param: A UUID or slug to identify the select attribute.
   */
  attribute: string;

  /**
   * Body param
   */
  data: OptionUpdateParams.Data;
}

export namespace OptionUpdateParams {
  export interface Data {
    /**
     * Whether or not to archive the select option. See our
     * [archiving guide](/docs/archiving-vs-deleting) for more information on
     * archiving.
     */
    is_archived?: boolean;

    /**
     * The Title of the select option
     */
    title?: string;
  }
}

export interface OptionListParams {
  /**
   * Path param: Whether the attribute is on an object or a list.
   */
  target: 'objects' | 'lists';

  /**
   * Path param: A UUID or slug to identify the object or list the select attribute
   * belongs to.
   */
  identifier: string;

  /**
   * Query param: `true` if you want the results to include archived select options.
   */
  show_archived?: boolean;
}

export declare namespace Options {
  export {
    type SelectOption as SelectOption,
    type OptionCreateResponse as OptionCreateResponse,
    type OptionUpdateResponse as OptionUpdateResponse,
    type OptionListResponse as OptionListResponse,
    type OptionCreateParams as OptionCreateParams,
    type OptionUpdateParams as OptionUpdateParams,
    type OptionListParams as OptionListParams,
  };
}
