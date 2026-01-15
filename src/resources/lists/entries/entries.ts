// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OptionsAPI from '../../attributes/options';
import * as StatusesAPI from '../../attributes/statuses';
import * as AttributesAPI from './attributes';
import { AttributeListValuesParams, AttributeListValuesResponse, Attributes } from './attributes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entries extends APIResource {
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);

  /**
   * Adds a record to a list as a new list entry. This endpoint will throw on
   * conflicts of unique attributes. Multiple list entries are allowed for the same
   * parent record
   *
   * Required scopes: `list_entry:read-write`, `list_configuration:read`.
   *
   * @example
   * ```ts
   * const entry = await client.lists.entries.create(
   *   '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
   *   {
   *     data: {
   *       entry_values: {
   *         '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
   *         multiselect_attribute: [
   *           'Select option 1',
   *           'Select option 2',
   *         ],
   *       },
   *       parent_object: 'people',
   *       parent_record_id:
   *         '891dcbfc-9141-415d-9b2a-2238a6cc012d',
   *     },
   *   },
   * );
   * ```
   */
  create(list: string, body: EntryCreateParams, options?: RequestOptions): APIPromise<EntryCreateResponse> {
    return this._client.post(path`/v2/lists/${list}/entries`, { body, ...options });
  }

  /**
   * Gets a single list entry by its `entry_id`.
   *
   * Required scopes: `list_entry:read`, `list_configuration:read`.
   *
   * @example
   * ```ts
   * const entry = await client.lists.entries.retrieve(
   *   '2e6e29ea-c4e0-4f44-842d-78a891f8c156',
   *   { list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0' },
   * );
   * ```
   */
  retrieve(
    entryID: string,
    params: EntryRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EntryRetrieveResponse> {
    const { list } = params;
    return this._client.get(path`/v2/lists/${list}/entries/${entryID}`, options);
  }

  /**
   * Use this endpoint to update list entries by `entry_id`. If the update payload
   * includes multiselect attributes, the values supplied will be created and
   * prepended to the list of values that already exist (if any). Use the `PUT`
   * endpoint to overwrite or remove multiselect attribute values.
   *
   * Required scopes: `list_entry:read-write`, `list_configuration:read`.
   *
   * @example
   * ```ts
   * const entry = await client.lists.entries.update(
   *   '2e6e29ea-c4e0-4f44-842d-78a891f8c156',
   *   {
   *     list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
   *     data: {
   *       entry_values: {
   *         '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
   *         multiselect_attribute: [
   *           'Select option 1',
   *           'Select option 2',
   *         ],
   *       },
   *     },
   *   },
   * );
   * ```
   */
  update(
    entryID: string,
    params: EntryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntryUpdateResponse> {
    const { list, ...body } = params;
    return this._client.patch(path`/v2/lists/${list}/entries/${entryID}`, { body, ...options });
  }

  /**
   * Lists entries in a given list, with the option to filter and sort results.
   *
   * Required scopes: `list_entry:read`, `list_configuration:read`.
   *
   * @example
   * ```ts
   * const entries = await client.lists.entries.list(
   *   '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
   * );
   * ```
   */
  list(list: string, body: EntryListParams, options?: RequestOptions): APIPromise<EntryListResponse> {
    return this._client.post(path`/v2/lists/${list}/entries/query`, { body, ...options });
  }

  /**
   * Deletes a single list entry by its `entry_id`.
   *
   * Required scopes: `list_entry:read-write`, `list_configuration:read`.
   *
   * @example
   * ```ts
   * const entry = await client.lists.entries.delete(
   *   '2e6e29ea-c4e0-4f44-842d-78a891f8c156',
   *   { list: 'enterprise_sales' },
   * );
   * ```
   */
  delete(entryID: string, params: EntryDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { list } = params;
    return this._client.delete(path`/v2/lists/${list}/entries/${entryID}`, options);
  }

  /**
   * Use this endpoint to create or update a list entry for a given parent record. If
   * an entry with the specified parent record is found, that entry will be updated.
   * If no such entry is found, a new entry will be created instead. If there are
   * multiple entries with the same parent record, this endpoint with return the
   * "MULTIPLE_MATCH_RESULTS" error. When writing to multi-select attributes, all
   * values will be either created or deleted as necessary to match the list of
   * values supplied in the request body.
   *
   * Required scopes: `list_entry:read-write`, `list_configuration:read`.
   *
   * @example
   * ```ts
   * const response = await client.lists.entries.assert(
   *   '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
   *   {
   *     data: {
   *       entry_values: {
   *         '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
   *         multiselect_attribute: [
   *           'Select option 1',
   *           'Select option 2',
   *         ],
   *       },
   *       parent_object: 'people',
   *       parent_record_id:
   *         '891dcbfc-9141-415d-9b2a-2238a6cc012d',
   *     },
   *   },
   * );
   * ```
   */
  assert(list: string, body: EntryAssertParams, options?: RequestOptions): APIPromise<EntryAssertResponse> {
    return this._client.put(path`/v2/lists/${list}/entries`, { body, ...options });
  }

  /**
   * Use this endpoint to update list entries by `entry_id`. If the update payload
   * includes multiselect attributes, the values supplied will overwrite/remove the
   * list of values that already exist (if any). Use the `PATCH` endpoint to add
   * multiselect attribute values without removing those value that already exist.
   *
   * Required scopes: `list_entry:read-write`, `list_configuration:read`.
   *
   * @example
   * ```ts
   * const response = await client.lists.entries.overwrite(
   *   '2e6e29ea-c4e0-4f44-842d-78a891f8c156',
   *   {
   *     list: '33ebdbe9-e529-47c9-b894-0ba25e9c15c0',
   *     data: {
   *       entry_values: {
   *         '41252299-f8c7-4b5e-99c9-4ff8321d2f96': [{}],
   *         multiselect_attribute: [
   *           'Select option 1',
   *           'Select option 2',
   *         ],
   *       },
   *     },
   *   },
   * );
   * ```
   */
  overwrite(
    entryID: string,
    params: EntryOverwriteParams,
    options?: RequestOptions,
  ): APIPromise<EntryOverwriteResponse> {
    const { list, ...body } = params;
    return this._client.put(path`/v2/lists/${list}/entries/${entryID}`, { body, ...options });
  }
}

/**
 * Success
 */
export interface EntryCreateResponse {
  data: EntryCreateResponse.Data;
}

export namespace EntryCreateResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When this entry was created.
     */
    created_at: string;

    /**
     * A list of attribute values for the list entry (not attribute values for its
     * parent record).
     */
    entry_values: {
      [key: string]: Array<
        | Data.UnionMember0
        | Data.UnionMember1
        | Data.UnionMember2
        | Data.UnionMember3
        | Data.UnionMember4
        | Data.UnionMember5
        | Data.UnionMember6
        | Data.UnionMember7
        | Data.UnionMember8
        | Data.UnionMember9
        | Data.UnionMember10
        | Data.UnionMember11
        | Data.UnionMember12
        | Data.UnionMember13
        | Data.UnionMember14
        | Data.UnionMember15
        | Data.UnionMember16
      >;
    };

    /**
     * A UUID or slug identifying the object that the parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record that is parent of the list entry.
     */
    parent_record_id: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * A UUID identifying this entry.
       */
      entry_id: string;

      /**
       * A UUID identifying the list this entry is in.
       */
      list_id: string;

      /**
       * A UUID identifying the workspace this entry belongs to.
       */
      workspace_id: string;
    }

    export interface UnionMember0 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'actor-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember0.CreatedByActor;

      /**
       * The ID of the referenced actor.
       */
      referenced_actor_id: string | null;

      /**
       * The type of the referenced actor.
       * [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'api-token' | 'workspace-member' | 'system' | 'app';
    }

    export namespace UnionMember0 {
      /**
       * The actor that created this value.
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

    export interface UnionMember1 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'checkbox';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember1.CreatedByActor;

      /**
       * A boolean representing whether the checkbox is checked or not. The string values
       * 'true' and 'false' are also accepted.
       */
      value: boolean;
    }

    export namespace UnionMember1 {
      /**
       * The actor that created this value.
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

    export interface UnionMember2 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'currency';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember2.CreatedByActor;

      /**
       * A numerical representation of the currency value. A decimal with a max of 4
       * decimal places.
       */
      currency_value: number;

      /**
       * The ISO4217 currency code representing the currency that the value is stored in.
       */
      currency_code?:
        | 'ARS'
        | 'AUD'
        | 'BRL'
        | 'BGN'
        | 'CAD'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'HKD'
        | 'ISK'
        | 'INR'
        | 'ILS'
        | 'JPY'
        | 'KES'
        | 'KRW'
        | 'MYR'
        | 'MXN'
        | 'NTD'
        | 'NZD'
        | 'NGN'
        | 'NOK'
        | 'XPF'
        | 'PEN'
        | 'PHP'
        | 'PLN'
        | 'GBP'
        | 'RWF'
        | 'SAR'
        | 'SGD'
        | 'ZAR'
        | 'SEK'
        | 'CHF'
        | 'THB'
        | 'AED'
        | 'UYU'
        | 'USD'
        | null;
    }

    export namespace UnionMember2 {
      /**
       * The actor that created this value.
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

    export interface UnionMember3 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'date';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember3.CreatedByActor;

      /**
       * A date represents a single calendar year, month and day, independent of
       * timezone. If hours, months, seconds or timezones are provided, they will be
       * trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01",
       * and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00",
       * "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will
       * all be coerced to "2023-01-02". If a timezone is provided that would result in a
       * different calendar date in UTC, the date will be coerced to UTC and then the
       * timezone component will be trimmed. For example, the value
       * "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date
       * is "9999-12-31".
       */
      value: string;
    }

    export namespace UnionMember3 {
      /**
       * The actor that created this value.
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

    export interface UnionMember4 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'domain';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember4.CreatedByActor;

      domain: string;

      root_domain: string;
    }

    export namespace UnionMember4 {
      /**
       * The actor that created this value.
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

    export interface UnionMember5 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'email-address';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember5.CreatedByActor;

      email_address: string;

      email_domain: string;

      email_local_specifier: string;

      email_root_domain: string;

      original_email_address: string;
    }

    export namespace UnionMember5 {
      /**
       * The actor that created this value.
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

    export interface UnionMember6 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'record-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember6.CreatedByActor;

      /**
       * A slug identifying the object that the referenced record belongs to.
       */
      target_object: string;

      /**
       * A UUID to identify the referenced record.
       */
      target_record_id: string;
    }

    export namespace UnionMember6 {
      /**
       * The actor that created this value.
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

    export interface UnionMember7 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'interaction';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember7.CreatedByActor;

      /**
       * When the interaction occurred.
       */
      interacted_at: string;

      /**
       * The type of interaction e.g. calendar or email.
       */
      interaction_type: 'calendar-event' | 'call' | 'chat-thread' | 'email' | 'in-person-meeting' | 'meeting';

      /**
       * The actor that created this value.
       */
      owner_actor: UnionMember7.OwnerActor;
    }

    export namespace UnionMember7 {
      /**
       * The actor that created this value.
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

      /**
       * The actor that created this value.
       */
      export interface OwnerActor {
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

    export interface UnionMember8 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'location';

      /**
       * The ISO 3166-1 alpha-2 country code for the country this location is in.
       */
      country_code:
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
       * The actor that created this value.
       */
      created_by_actor: UnionMember8.CreatedByActor;

      /**
       * The latitude of the location. Validated by the regular expression
       * `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal
       * places of precision. Note that this value is not currently represented in the UI
       * but will be persisted and readable through API calls.}
       */
      latitude: string | null;

      /**
       * The first line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_1: string | null;

      /**
       * The second line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_2: string | null;

      /**
       * The third line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_3: string | null;

      /**
       * The fourth line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_4: string | null;

      /**
       * The town, neighborhood or area the location is in.
       */
      locality: string | null;

      /**
       * The longitude of the location. Validated by the regular expression
       * `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with
       * up to 9 decimal places of precision. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      longitude: string | null;

      /**
       * The postcode or zip code for the location. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      postcode: string | null;

      /**
       * The state, county, province or region that the location is in.
       */
      region: string | null;
    }

    export namespace UnionMember8 {
      /**
       * The actor that created this value.
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

    export interface UnionMember9 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'number';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember9.CreatedByActor;

      /**
       * Numbers are persisted as 64 bit floats.
       */
      value: number;
    }

    export namespace UnionMember9 {
      /**
       * The actor that created this value.
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

    export interface UnionMember10 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'personal-name';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember10.CreatedByActor;

      /**
       * The first name.
       */
      first_name: string;

      /**
       * The full name.
       */
      full_name: string;

      /**
       * The last name.
       */
      last_name: string;
    }

    export namespace UnionMember10 {
      /**
       * The actor that created this value.
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

    export interface UnionMember11 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'phone-number';

      /**
       * The ISO 3166-1 alpha-2 country code representing the country that this phone
       * number belongs to.
       */
      country_code:
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
        | 'AC';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember11.CreatedByActor;

      /**
       * The raw, original phone number, as inputted.
       */
      original_phone_number: string;

      phone_number: string;
    }

    export namespace UnionMember11 {
      /**
       * The actor that created this value.
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

    export interface UnionMember12 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember12.CreatedByActor;

      status: StatusesAPI.Status;
    }

    export namespace UnionMember12 {
      /**
       * The actor that created this value.
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

    export interface UnionMember13 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'rating';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember13.CreatedByActor;

      /**
       * A number between 0 and 5 (inclusive) to represent a star rating.
       */
      value: number;
    }

    export namespace UnionMember13 {
      /**
       * The actor that created this value.
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

    export interface UnionMember14 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember14.CreatedByActor;

      option: OptionsAPI.SelectOption;
    }

    export namespace UnionMember14 {
      /**
       * The actor that created this value.
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

    export interface UnionMember15 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'text';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember15.CreatedByActor;

      /**
       * A raw text field. Values are limited to 10MB.
       */
      value: string;
    }

    export namespace UnionMember15 {
      /**
       * The actor that created this value.
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

    export interface UnionMember16 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'timestamp';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember16.CreatedByActor;

      /**
       * A timestamp value represents a single, universal moment in time using an ISO
       * 8601 formatted string. This means that a timestamp consists of a date, a time
       * (with nanosecond precision), and a time zone. Attio will coerce timestamps which
       * do not provide full nanosecond precision and UTC is assumed if no time zone is
       * provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00",
       * "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced
       * to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For
       * example, writing a timestamp value using the string
       * "2023-01-02T13:00:00.000000000+02:00" will result in the value
       * "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is
       * "9999-12-31T23:59:59.999999999Z".
       */
      value: string;
    }

    export namespace UnionMember16 {
      /**
       * The actor that created this value.
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
}

/**
 * Success
 */
export interface EntryRetrieveResponse {
  data: EntryRetrieveResponse.Data;
}

export namespace EntryRetrieveResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When this entry was created.
     */
    created_at: string;

    /**
     * A list of attribute values for the list entry (not attribute values for its
     * parent record).
     */
    entry_values: {
      [key: string]: Array<
        | Data.UnionMember0
        | Data.UnionMember1
        | Data.UnionMember2
        | Data.UnionMember3
        | Data.UnionMember4
        | Data.UnionMember5
        | Data.UnionMember6
        | Data.UnionMember7
        | Data.UnionMember8
        | Data.UnionMember9
        | Data.UnionMember10
        | Data.UnionMember11
        | Data.UnionMember12
        | Data.UnionMember13
        | Data.UnionMember14
        | Data.UnionMember15
        | Data.UnionMember16
      >;
    };

    /**
     * A UUID or slug identifying the object that the parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record that is parent of the list entry.
     */
    parent_record_id: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * A UUID identifying this entry.
       */
      entry_id: string;

      /**
       * A UUID identifying the list this entry is in.
       */
      list_id: string;

      /**
       * A UUID identifying the workspace this entry belongs to.
       */
      workspace_id: string;
    }

    export interface UnionMember0 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'actor-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember0.CreatedByActor;

      /**
       * The ID of the referenced actor.
       */
      referenced_actor_id: string | null;

      /**
       * The type of the referenced actor.
       * [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'api-token' | 'workspace-member' | 'system' | 'app';
    }

    export namespace UnionMember0 {
      /**
       * The actor that created this value.
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

    export interface UnionMember1 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'checkbox';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember1.CreatedByActor;

      /**
       * A boolean representing whether the checkbox is checked or not. The string values
       * 'true' and 'false' are also accepted.
       */
      value: boolean;
    }

    export namespace UnionMember1 {
      /**
       * The actor that created this value.
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

    export interface UnionMember2 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'currency';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember2.CreatedByActor;

      /**
       * A numerical representation of the currency value. A decimal with a max of 4
       * decimal places.
       */
      currency_value: number;

      /**
       * The ISO4217 currency code representing the currency that the value is stored in.
       */
      currency_code?:
        | 'ARS'
        | 'AUD'
        | 'BRL'
        | 'BGN'
        | 'CAD'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'HKD'
        | 'ISK'
        | 'INR'
        | 'ILS'
        | 'JPY'
        | 'KES'
        | 'KRW'
        | 'MYR'
        | 'MXN'
        | 'NTD'
        | 'NZD'
        | 'NGN'
        | 'NOK'
        | 'XPF'
        | 'PEN'
        | 'PHP'
        | 'PLN'
        | 'GBP'
        | 'RWF'
        | 'SAR'
        | 'SGD'
        | 'ZAR'
        | 'SEK'
        | 'CHF'
        | 'THB'
        | 'AED'
        | 'UYU'
        | 'USD'
        | null;
    }

    export namespace UnionMember2 {
      /**
       * The actor that created this value.
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

    export interface UnionMember3 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'date';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember3.CreatedByActor;

      /**
       * A date represents a single calendar year, month and day, independent of
       * timezone. If hours, months, seconds or timezones are provided, they will be
       * trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01",
       * and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00",
       * "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will
       * all be coerced to "2023-01-02". If a timezone is provided that would result in a
       * different calendar date in UTC, the date will be coerced to UTC and then the
       * timezone component will be trimmed. For example, the value
       * "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date
       * is "9999-12-31".
       */
      value: string;
    }

    export namespace UnionMember3 {
      /**
       * The actor that created this value.
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

    export interface UnionMember4 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'domain';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember4.CreatedByActor;

      domain: string;

      root_domain: string;
    }

    export namespace UnionMember4 {
      /**
       * The actor that created this value.
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

    export interface UnionMember5 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'email-address';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember5.CreatedByActor;

      email_address: string;

      email_domain: string;

      email_local_specifier: string;

      email_root_domain: string;

      original_email_address: string;
    }

    export namespace UnionMember5 {
      /**
       * The actor that created this value.
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

    export interface UnionMember6 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'record-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember6.CreatedByActor;

      /**
       * A slug identifying the object that the referenced record belongs to.
       */
      target_object: string;

      /**
       * A UUID to identify the referenced record.
       */
      target_record_id: string;
    }

    export namespace UnionMember6 {
      /**
       * The actor that created this value.
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

    export interface UnionMember7 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'interaction';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember7.CreatedByActor;

      /**
       * When the interaction occurred.
       */
      interacted_at: string;

      /**
       * The type of interaction e.g. calendar or email.
       */
      interaction_type: 'calendar-event' | 'call' | 'chat-thread' | 'email' | 'in-person-meeting' | 'meeting';

      /**
       * The actor that created this value.
       */
      owner_actor: UnionMember7.OwnerActor;
    }

    export namespace UnionMember7 {
      /**
       * The actor that created this value.
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

      /**
       * The actor that created this value.
       */
      export interface OwnerActor {
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

    export interface UnionMember8 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'location';

      /**
       * The ISO 3166-1 alpha-2 country code for the country this location is in.
       */
      country_code:
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
       * The actor that created this value.
       */
      created_by_actor: UnionMember8.CreatedByActor;

      /**
       * The latitude of the location. Validated by the regular expression
       * `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal
       * places of precision. Note that this value is not currently represented in the UI
       * but will be persisted and readable through API calls.}
       */
      latitude: string | null;

      /**
       * The first line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_1: string | null;

      /**
       * The second line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_2: string | null;

      /**
       * The third line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_3: string | null;

      /**
       * The fourth line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_4: string | null;

      /**
       * The town, neighborhood or area the location is in.
       */
      locality: string | null;

      /**
       * The longitude of the location. Validated by the regular expression
       * `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with
       * up to 9 decimal places of precision. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      longitude: string | null;

      /**
       * The postcode or zip code for the location. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      postcode: string | null;

      /**
       * The state, county, province or region that the location is in.
       */
      region: string | null;
    }

    export namespace UnionMember8 {
      /**
       * The actor that created this value.
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

    export interface UnionMember9 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'number';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember9.CreatedByActor;

      /**
       * Numbers are persisted as 64 bit floats.
       */
      value: number;
    }

    export namespace UnionMember9 {
      /**
       * The actor that created this value.
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

    export interface UnionMember10 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'personal-name';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember10.CreatedByActor;

      /**
       * The first name.
       */
      first_name: string;

      /**
       * The full name.
       */
      full_name: string;

      /**
       * The last name.
       */
      last_name: string;
    }

    export namespace UnionMember10 {
      /**
       * The actor that created this value.
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

    export interface UnionMember11 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'phone-number';

      /**
       * The ISO 3166-1 alpha-2 country code representing the country that this phone
       * number belongs to.
       */
      country_code:
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
        | 'AC';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember11.CreatedByActor;

      /**
       * The raw, original phone number, as inputted.
       */
      original_phone_number: string;

      phone_number: string;
    }

    export namespace UnionMember11 {
      /**
       * The actor that created this value.
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

    export interface UnionMember12 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember12.CreatedByActor;

      status: StatusesAPI.Status;
    }

    export namespace UnionMember12 {
      /**
       * The actor that created this value.
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

    export interface UnionMember13 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'rating';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember13.CreatedByActor;

      /**
       * A number between 0 and 5 (inclusive) to represent a star rating.
       */
      value: number;
    }

    export namespace UnionMember13 {
      /**
       * The actor that created this value.
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

    export interface UnionMember14 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember14.CreatedByActor;

      option: OptionsAPI.SelectOption;
    }

    export namespace UnionMember14 {
      /**
       * The actor that created this value.
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

    export interface UnionMember15 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'text';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember15.CreatedByActor;

      /**
       * A raw text field. Values are limited to 10MB.
       */
      value: string;
    }

    export namespace UnionMember15 {
      /**
       * The actor that created this value.
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

    export interface UnionMember16 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'timestamp';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember16.CreatedByActor;

      /**
       * A timestamp value represents a single, universal moment in time using an ISO
       * 8601 formatted string. This means that a timestamp consists of a date, a time
       * (with nanosecond precision), and a time zone. Attio will coerce timestamps which
       * do not provide full nanosecond precision and UTC is assumed if no time zone is
       * provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00",
       * "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced
       * to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For
       * example, writing a timestamp value using the string
       * "2023-01-02T13:00:00.000000000+02:00" will result in the value
       * "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is
       * "9999-12-31T23:59:59.999999999Z".
       */
      value: string;
    }

    export namespace UnionMember16 {
      /**
       * The actor that created this value.
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
}

/**
 * Success
 */
export interface EntryUpdateResponse {
  data: EntryUpdateResponse.Data;
}

export namespace EntryUpdateResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When this entry was created.
     */
    created_at: string;

    /**
     * A list of attribute values for the list entry (not attribute values for its
     * parent record).
     */
    entry_values: {
      [key: string]: Array<
        | Data.UnionMember0
        | Data.UnionMember1
        | Data.UnionMember2
        | Data.UnionMember3
        | Data.UnionMember4
        | Data.UnionMember5
        | Data.UnionMember6
        | Data.UnionMember7
        | Data.UnionMember8
        | Data.UnionMember9
        | Data.UnionMember10
        | Data.UnionMember11
        | Data.UnionMember12
        | Data.UnionMember13
        | Data.UnionMember14
        | Data.UnionMember15
        | Data.UnionMember16
      >;
    };

    /**
     * A UUID or slug identifying the object that the parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record that is parent of the list entry.
     */
    parent_record_id: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * A UUID identifying this entry.
       */
      entry_id: string;

      /**
       * A UUID identifying the list this entry is in.
       */
      list_id: string;

      /**
       * A UUID identifying the workspace this entry belongs to.
       */
      workspace_id: string;
    }

    export interface UnionMember0 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'actor-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember0.CreatedByActor;

      /**
       * The ID of the referenced actor.
       */
      referenced_actor_id: string | null;

      /**
       * The type of the referenced actor.
       * [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'api-token' | 'workspace-member' | 'system' | 'app';
    }

    export namespace UnionMember0 {
      /**
       * The actor that created this value.
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

    export interface UnionMember1 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'checkbox';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember1.CreatedByActor;

      /**
       * A boolean representing whether the checkbox is checked or not. The string values
       * 'true' and 'false' are also accepted.
       */
      value: boolean;
    }

    export namespace UnionMember1 {
      /**
       * The actor that created this value.
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

    export interface UnionMember2 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'currency';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember2.CreatedByActor;

      /**
       * A numerical representation of the currency value. A decimal with a max of 4
       * decimal places.
       */
      currency_value: number;

      /**
       * The ISO4217 currency code representing the currency that the value is stored in.
       */
      currency_code?:
        | 'ARS'
        | 'AUD'
        | 'BRL'
        | 'BGN'
        | 'CAD'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'HKD'
        | 'ISK'
        | 'INR'
        | 'ILS'
        | 'JPY'
        | 'KES'
        | 'KRW'
        | 'MYR'
        | 'MXN'
        | 'NTD'
        | 'NZD'
        | 'NGN'
        | 'NOK'
        | 'XPF'
        | 'PEN'
        | 'PHP'
        | 'PLN'
        | 'GBP'
        | 'RWF'
        | 'SAR'
        | 'SGD'
        | 'ZAR'
        | 'SEK'
        | 'CHF'
        | 'THB'
        | 'AED'
        | 'UYU'
        | 'USD'
        | null;
    }

    export namespace UnionMember2 {
      /**
       * The actor that created this value.
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

    export interface UnionMember3 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'date';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember3.CreatedByActor;

      /**
       * A date represents a single calendar year, month and day, independent of
       * timezone. If hours, months, seconds or timezones are provided, they will be
       * trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01",
       * and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00",
       * "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will
       * all be coerced to "2023-01-02". If a timezone is provided that would result in a
       * different calendar date in UTC, the date will be coerced to UTC and then the
       * timezone component will be trimmed. For example, the value
       * "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date
       * is "9999-12-31".
       */
      value: string;
    }

    export namespace UnionMember3 {
      /**
       * The actor that created this value.
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

    export interface UnionMember4 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'domain';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember4.CreatedByActor;

      domain: string;

      root_domain: string;
    }

    export namespace UnionMember4 {
      /**
       * The actor that created this value.
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

    export interface UnionMember5 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'email-address';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember5.CreatedByActor;

      email_address: string;

      email_domain: string;

      email_local_specifier: string;

      email_root_domain: string;

      original_email_address: string;
    }

    export namespace UnionMember5 {
      /**
       * The actor that created this value.
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

    export interface UnionMember6 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'record-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember6.CreatedByActor;

      /**
       * A slug identifying the object that the referenced record belongs to.
       */
      target_object: string;

      /**
       * A UUID to identify the referenced record.
       */
      target_record_id: string;
    }

    export namespace UnionMember6 {
      /**
       * The actor that created this value.
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

    export interface UnionMember7 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'interaction';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember7.CreatedByActor;

      /**
       * When the interaction occurred.
       */
      interacted_at: string;

      /**
       * The type of interaction e.g. calendar or email.
       */
      interaction_type: 'calendar-event' | 'call' | 'chat-thread' | 'email' | 'in-person-meeting' | 'meeting';

      /**
       * The actor that created this value.
       */
      owner_actor: UnionMember7.OwnerActor;
    }

    export namespace UnionMember7 {
      /**
       * The actor that created this value.
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

      /**
       * The actor that created this value.
       */
      export interface OwnerActor {
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

    export interface UnionMember8 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'location';

      /**
       * The ISO 3166-1 alpha-2 country code for the country this location is in.
       */
      country_code:
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
       * The actor that created this value.
       */
      created_by_actor: UnionMember8.CreatedByActor;

      /**
       * The latitude of the location. Validated by the regular expression
       * `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal
       * places of precision. Note that this value is not currently represented in the UI
       * but will be persisted and readable through API calls.}
       */
      latitude: string | null;

      /**
       * The first line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_1: string | null;

      /**
       * The second line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_2: string | null;

      /**
       * The third line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_3: string | null;

      /**
       * The fourth line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_4: string | null;

      /**
       * The town, neighborhood or area the location is in.
       */
      locality: string | null;

      /**
       * The longitude of the location. Validated by the regular expression
       * `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with
       * up to 9 decimal places of precision. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      longitude: string | null;

      /**
       * The postcode or zip code for the location. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      postcode: string | null;

      /**
       * The state, county, province or region that the location is in.
       */
      region: string | null;
    }

    export namespace UnionMember8 {
      /**
       * The actor that created this value.
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

    export interface UnionMember9 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'number';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember9.CreatedByActor;

      /**
       * Numbers are persisted as 64 bit floats.
       */
      value: number;
    }

    export namespace UnionMember9 {
      /**
       * The actor that created this value.
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

    export interface UnionMember10 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'personal-name';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember10.CreatedByActor;

      /**
       * The first name.
       */
      first_name: string;

      /**
       * The full name.
       */
      full_name: string;

      /**
       * The last name.
       */
      last_name: string;
    }

    export namespace UnionMember10 {
      /**
       * The actor that created this value.
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

    export interface UnionMember11 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'phone-number';

      /**
       * The ISO 3166-1 alpha-2 country code representing the country that this phone
       * number belongs to.
       */
      country_code:
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
        | 'AC';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember11.CreatedByActor;

      /**
       * The raw, original phone number, as inputted.
       */
      original_phone_number: string;

      phone_number: string;
    }

    export namespace UnionMember11 {
      /**
       * The actor that created this value.
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

    export interface UnionMember12 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember12.CreatedByActor;

      status: StatusesAPI.Status;
    }

    export namespace UnionMember12 {
      /**
       * The actor that created this value.
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

    export interface UnionMember13 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'rating';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember13.CreatedByActor;

      /**
       * A number between 0 and 5 (inclusive) to represent a star rating.
       */
      value: number;
    }

    export namespace UnionMember13 {
      /**
       * The actor that created this value.
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

    export interface UnionMember14 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember14.CreatedByActor;

      option: OptionsAPI.SelectOption;
    }

    export namespace UnionMember14 {
      /**
       * The actor that created this value.
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

    export interface UnionMember15 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'text';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember15.CreatedByActor;

      /**
       * A raw text field. Values are limited to 10MB.
       */
      value: string;
    }

    export namespace UnionMember15 {
      /**
       * The actor that created this value.
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

    export interface UnionMember16 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'timestamp';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember16.CreatedByActor;

      /**
       * A timestamp value represents a single, universal moment in time using an ISO
       * 8601 formatted string. This means that a timestamp consists of a date, a time
       * (with nanosecond precision), and a time zone. Attio will coerce timestamps which
       * do not provide full nanosecond precision and UTC is assumed if no time zone is
       * provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00",
       * "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced
       * to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For
       * example, writing a timestamp value using the string
       * "2023-01-02T13:00:00.000000000+02:00" will result in the value
       * "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is
       * "9999-12-31T23:59:59.999999999Z".
       */
      value: string;
    }

    export namespace UnionMember16 {
      /**
       * The actor that created this value.
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
}

/**
 * Success
 */
export interface EntryListResponse {
  data: Array<EntryListResponse.Data>;
}

export namespace EntryListResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When this entry was created.
     */
    created_at: string;

    /**
     * A list of attribute values for the list entry (not attribute values for its
     * parent record).
     */
    entry_values: {
      [key: string]: Array<
        | Data.UnionMember0
        | Data.UnionMember1
        | Data.UnionMember2
        | Data.UnionMember3
        | Data.UnionMember4
        | Data.UnionMember5
        | Data.UnionMember6
        | Data.UnionMember7
        | Data.UnionMember8
        | Data.UnionMember9
        | Data.UnionMember10
        | Data.UnionMember11
        | Data.UnionMember12
        | Data.UnionMember13
        | Data.UnionMember14
        | Data.UnionMember15
        | Data.UnionMember16
      >;
    };

    /**
     * A UUID or slug identifying the object that the parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record that is parent of the list entry.
     */
    parent_record_id: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * A UUID identifying this entry.
       */
      entry_id: string;

      /**
       * A UUID identifying the list this entry is in.
       */
      list_id: string;

      /**
       * A UUID identifying the workspace this entry belongs to.
       */
      workspace_id: string;
    }

    export interface UnionMember0 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'actor-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember0.CreatedByActor;

      /**
       * The ID of the referenced actor.
       */
      referenced_actor_id: string | null;

      /**
       * The type of the referenced actor.
       * [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'api-token' | 'workspace-member' | 'system' | 'app';
    }

    export namespace UnionMember0 {
      /**
       * The actor that created this value.
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

    export interface UnionMember1 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'checkbox';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember1.CreatedByActor;

      /**
       * A boolean representing whether the checkbox is checked or not. The string values
       * 'true' and 'false' are also accepted.
       */
      value: boolean;
    }

    export namespace UnionMember1 {
      /**
       * The actor that created this value.
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

    export interface UnionMember2 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'currency';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember2.CreatedByActor;

      /**
       * A numerical representation of the currency value. A decimal with a max of 4
       * decimal places.
       */
      currency_value: number;

      /**
       * The ISO4217 currency code representing the currency that the value is stored in.
       */
      currency_code?:
        | 'ARS'
        | 'AUD'
        | 'BRL'
        | 'BGN'
        | 'CAD'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'HKD'
        | 'ISK'
        | 'INR'
        | 'ILS'
        | 'JPY'
        | 'KES'
        | 'KRW'
        | 'MYR'
        | 'MXN'
        | 'NTD'
        | 'NZD'
        | 'NGN'
        | 'NOK'
        | 'XPF'
        | 'PEN'
        | 'PHP'
        | 'PLN'
        | 'GBP'
        | 'RWF'
        | 'SAR'
        | 'SGD'
        | 'ZAR'
        | 'SEK'
        | 'CHF'
        | 'THB'
        | 'AED'
        | 'UYU'
        | 'USD'
        | null;
    }

    export namespace UnionMember2 {
      /**
       * The actor that created this value.
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

    export interface UnionMember3 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'date';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember3.CreatedByActor;

      /**
       * A date represents a single calendar year, month and day, independent of
       * timezone. If hours, months, seconds or timezones are provided, they will be
       * trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01",
       * and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00",
       * "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will
       * all be coerced to "2023-01-02". If a timezone is provided that would result in a
       * different calendar date in UTC, the date will be coerced to UTC and then the
       * timezone component will be trimmed. For example, the value
       * "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date
       * is "9999-12-31".
       */
      value: string;
    }

    export namespace UnionMember3 {
      /**
       * The actor that created this value.
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

    export interface UnionMember4 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'domain';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember4.CreatedByActor;

      domain: string;

      root_domain: string;
    }

    export namespace UnionMember4 {
      /**
       * The actor that created this value.
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

    export interface UnionMember5 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'email-address';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember5.CreatedByActor;

      email_address: string;

      email_domain: string;

      email_local_specifier: string;

      email_root_domain: string;

      original_email_address: string;
    }

    export namespace UnionMember5 {
      /**
       * The actor that created this value.
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

    export interface UnionMember6 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'record-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember6.CreatedByActor;

      /**
       * A slug identifying the object that the referenced record belongs to.
       */
      target_object: string;

      /**
       * A UUID to identify the referenced record.
       */
      target_record_id: string;
    }

    export namespace UnionMember6 {
      /**
       * The actor that created this value.
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

    export interface UnionMember7 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'interaction';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember7.CreatedByActor;

      /**
       * When the interaction occurred.
       */
      interacted_at: string;

      /**
       * The type of interaction e.g. calendar or email.
       */
      interaction_type: 'calendar-event' | 'call' | 'chat-thread' | 'email' | 'in-person-meeting' | 'meeting';

      /**
       * The actor that created this value.
       */
      owner_actor: UnionMember7.OwnerActor;
    }

    export namespace UnionMember7 {
      /**
       * The actor that created this value.
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

      /**
       * The actor that created this value.
       */
      export interface OwnerActor {
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

    export interface UnionMember8 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'location';

      /**
       * The ISO 3166-1 alpha-2 country code for the country this location is in.
       */
      country_code:
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
       * The actor that created this value.
       */
      created_by_actor: UnionMember8.CreatedByActor;

      /**
       * The latitude of the location. Validated by the regular expression
       * `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal
       * places of precision. Note that this value is not currently represented in the UI
       * but will be persisted and readable through API calls.}
       */
      latitude: string | null;

      /**
       * The first line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_1: string | null;

      /**
       * The second line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_2: string | null;

      /**
       * The third line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_3: string | null;

      /**
       * The fourth line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_4: string | null;

      /**
       * The town, neighborhood or area the location is in.
       */
      locality: string | null;

      /**
       * The longitude of the location. Validated by the regular expression
       * `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with
       * up to 9 decimal places of precision. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      longitude: string | null;

      /**
       * The postcode or zip code for the location. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      postcode: string | null;

      /**
       * The state, county, province or region that the location is in.
       */
      region: string | null;
    }

    export namespace UnionMember8 {
      /**
       * The actor that created this value.
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

    export interface UnionMember9 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'number';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember9.CreatedByActor;

      /**
       * Numbers are persisted as 64 bit floats.
       */
      value: number;
    }

    export namespace UnionMember9 {
      /**
       * The actor that created this value.
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

    export interface UnionMember10 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'personal-name';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember10.CreatedByActor;

      /**
       * The first name.
       */
      first_name: string;

      /**
       * The full name.
       */
      full_name: string;

      /**
       * The last name.
       */
      last_name: string;
    }

    export namespace UnionMember10 {
      /**
       * The actor that created this value.
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

    export interface UnionMember11 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'phone-number';

      /**
       * The ISO 3166-1 alpha-2 country code representing the country that this phone
       * number belongs to.
       */
      country_code:
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
        | 'AC';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember11.CreatedByActor;

      /**
       * The raw, original phone number, as inputted.
       */
      original_phone_number: string;

      phone_number: string;
    }

    export namespace UnionMember11 {
      /**
       * The actor that created this value.
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

    export interface UnionMember12 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember12.CreatedByActor;

      status: StatusesAPI.Status;
    }

    export namespace UnionMember12 {
      /**
       * The actor that created this value.
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

    export interface UnionMember13 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'rating';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember13.CreatedByActor;

      /**
       * A number between 0 and 5 (inclusive) to represent a star rating.
       */
      value: number;
    }

    export namespace UnionMember13 {
      /**
       * The actor that created this value.
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

    export interface UnionMember14 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember14.CreatedByActor;

      option: OptionsAPI.SelectOption;
    }

    export namespace UnionMember14 {
      /**
       * The actor that created this value.
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

    export interface UnionMember15 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'text';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember15.CreatedByActor;

      /**
       * A raw text field. Values are limited to 10MB.
       */
      value: string;
    }

    export namespace UnionMember15 {
      /**
       * The actor that created this value.
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

    export interface UnionMember16 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'timestamp';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember16.CreatedByActor;

      /**
       * A timestamp value represents a single, universal moment in time using an ISO
       * 8601 formatted string. This means that a timestamp consists of a date, a time
       * (with nanosecond precision), and a time zone. Attio will coerce timestamps which
       * do not provide full nanosecond precision and UTC is assumed if no time zone is
       * provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00",
       * "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced
       * to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For
       * example, writing a timestamp value using the string
       * "2023-01-02T13:00:00.000000000+02:00" will result in the value
       * "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is
       * "9999-12-31T23:59:59.999999999Z".
       */
      value: string;
    }

    export namespace UnionMember16 {
      /**
       * The actor that created this value.
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
}

/**
 * Success
 */
export type EntryDeleteResponse = unknown;

/**
 * Success
 */
export interface EntryAssertResponse {
  data: EntryAssertResponse.Data;
}

export namespace EntryAssertResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When this entry was created.
     */
    created_at: string;

    /**
     * A list of attribute values for the list entry (not attribute values for its
     * parent record).
     */
    entry_values: {
      [key: string]: Array<
        | Data.UnionMember0
        | Data.UnionMember1
        | Data.UnionMember2
        | Data.UnionMember3
        | Data.UnionMember4
        | Data.UnionMember5
        | Data.UnionMember6
        | Data.UnionMember7
        | Data.UnionMember8
        | Data.UnionMember9
        | Data.UnionMember10
        | Data.UnionMember11
        | Data.UnionMember12
        | Data.UnionMember13
        | Data.UnionMember14
        | Data.UnionMember15
        | Data.UnionMember16
      >;
    };

    /**
     * A UUID or slug identifying the object that the parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record that is parent of the list entry.
     */
    parent_record_id: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * A UUID identifying this entry.
       */
      entry_id: string;

      /**
       * A UUID identifying the list this entry is in.
       */
      list_id: string;

      /**
       * A UUID identifying the workspace this entry belongs to.
       */
      workspace_id: string;
    }

    export interface UnionMember0 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'actor-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember0.CreatedByActor;

      /**
       * The ID of the referenced actor.
       */
      referenced_actor_id: string | null;

      /**
       * The type of the referenced actor.
       * [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'api-token' | 'workspace-member' | 'system' | 'app';
    }

    export namespace UnionMember0 {
      /**
       * The actor that created this value.
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

    export interface UnionMember1 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'checkbox';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember1.CreatedByActor;

      /**
       * A boolean representing whether the checkbox is checked or not. The string values
       * 'true' and 'false' are also accepted.
       */
      value: boolean;
    }

    export namespace UnionMember1 {
      /**
       * The actor that created this value.
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

    export interface UnionMember2 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'currency';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember2.CreatedByActor;

      /**
       * A numerical representation of the currency value. A decimal with a max of 4
       * decimal places.
       */
      currency_value: number;

      /**
       * The ISO4217 currency code representing the currency that the value is stored in.
       */
      currency_code?:
        | 'ARS'
        | 'AUD'
        | 'BRL'
        | 'BGN'
        | 'CAD'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'HKD'
        | 'ISK'
        | 'INR'
        | 'ILS'
        | 'JPY'
        | 'KES'
        | 'KRW'
        | 'MYR'
        | 'MXN'
        | 'NTD'
        | 'NZD'
        | 'NGN'
        | 'NOK'
        | 'XPF'
        | 'PEN'
        | 'PHP'
        | 'PLN'
        | 'GBP'
        | 'RWF'
        | 'SAR'
        | 'SGD'
        | 'ZAR'
        | 'SEK'
        | 'CHF'
        | 'THB'
        | 'AED'
        | 'UYU'
        | 'USD'
        | null;
    }

    export namespace UnionMember2 {
      /**
       * The actor that created this value.
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

    export interface UnionMember3 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'date';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember3.CreatedByActor;

      /**
       * A date represents a single calendar year, month and day, independent of
       * timezone. If hours, months, seconds or timezones are provided, they will be
       * trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01",
       * and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00",
       * "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will
       * all be coerced to "2023-01-02". If a timezone is provided that would result in a
       * different calendar date in UTC, the date will be coerced to UTC and then the
       * timezone component will be trimmed. For example, the value
       * "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date
       * is "9999-12-31".
       */
      value: string;
    }

    export namespace UnionMember3 {
      /**
       * The actor that created this value.
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

    export interface UnionMember4 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'domain';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember4.CreatedByActor;

      domain: string;

      root_domain: string;
    }

    export namespace UnionMember4 {
      /**
       * The actor that created this value.
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

    export interface UnionMember5 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'email-address';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember5.CreatedByActor;

      email_address: string;

      email_domain: string;

      email_local_specifier: string;

      email_root_domain: string;

      original_email_address: string;
    }

    export namespace UnionMember5 {
      /**
       * The actor that created this value.
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

    export interface UnionMember6 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'record-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember6.CreatedByActor;

      /**
       * A slug identifying the object that the referenced record belongs to.
       */
      target_object: string;

      /**
       * A UUID to identify the referenced record.
       */
      target_record_id: string;
    }

    export namespace UnionMember6 {
      /**
       * The actor that created this value.
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

    export interface UnionMember7 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'interaction';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember7.CreatedByActor;

      /**
       * When the interaction occurred.
       */
      interacted_at: string;

      /**
       * The type of interaction e.g. calendar or email.
       */
      interaction_type: 'calendar-event' | 'call' | 'chat-thread' | 'email' | 'in-person-meeting' | 'meeting';

      /**
       * The actor that created this value.
       */
      owner_actor: UnionMember7.OwnerActor;
    }

    export namespace UnionMember7 {
      /**
       * The actor that created this value.
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

      /**
       * The actor that created this value.
       */
      export interface OwnerActor {
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

    export interface UnionMember8 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'location';

      /**
       * The ISO 3166-1 alpha-2 country code for the country this location is in.
       */
      country_code:
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
       * The actor that created this value.
       */
      created_by_actor: UnionMember8.CreatedByActor;

      /**
       * The latitude of the location. Validated by the regular expression
       * `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal
       * places of precision. Note that this value is not currently represented in the UI
       * but will be persisted and readable through API calls.}
       */
      latitude: string | null;

      /**
       * The first line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_1: string | null;

      /**
       * The second line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_2: string | null;

      /**
       * The third line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_3: string | null;

      /**
       * The fourth line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_4: string | null;

      /**
       * The town, neighborhood or area the location is in.
       */
      locality: string | null;

      /**
       * The longitude of the location. Validated by the regular expression
       * `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with
       * up to 9 decimal places of precision. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      longitude: string | null;

      /**
       * The postcode or zip code for the location. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      postcode: string | null;

      /**
       * The state, county, province or region that the location is in.
       */
      region: string | null;
    }

    export namespace UnionMember8 {
      /**
       * The actor that created this value.
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

    export interface UnionMember9 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'number';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember9.CreatedByActor;

      /**
       * Numbers are persisted as 64 bit floats.
       */
      value: number;
    }

    export namespace UnionMember9 {
      /**
       * The actor that created this value.
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

    export interface UnionMember10 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'personal-name';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember10.CreatedByActor;

      /**
       * The first name.
       */
      first_name: string;

      /**
       * The full name.
       */
      full_name: string;

      /**
       * The last name.
       */
      last_name: string;
    }

    export namespace UnionMember10 {
      /**
       * The actor that created this value.
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

    export interface UnionMember11 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'phone-number';

      /**
       * The ISO 3166-1 alpha-2 country code representing the country that this phone
       * number belongs to.
       */
      country_code:
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
        | 'AC';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember11.CreatedByActor;

      /**
       * The raw, original phone number, as inputted.
       */
      original_phone_number: string;

      phone_number: string;
    }

    export namespace UnionMember11 {
      /**
       * The actor that created this value.
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

    export interface UnionMember12 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember12.CreatedByActor;

      status: StatusesAPI.Status;
    }

    export namespace UnionMember12 {
      /**
       * The actor that created this value.
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

    export interface UnionMember13 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'rating';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember13.CreatedByActor;

      /**
       * A number between 0 and 5 (inclusive) to represent a star rating.
       */
      value: number;
    }

    export namespace UnionMember13 {
      /**
       * The actor that created this value.
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

    export interface UnionMember14 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember14.CreatedByActor;

      option: OptionsAPI.SelectOption;
    }

    export namespace UnionMember14 {
      /**
       * The actor that created this value.
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

    export interface UnionMember15 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'text';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember15.CreatedByActor;

      /**
       * A raw text field. Values are limited to 10MB.
       */
      value: string;
    }

    export namespace UnionMember15 {
      /**
       * The actor that created this value.
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

    export interface UnionMember16 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'timestamp';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember16.CreatedByActor;

      /**
       * A timestamp value represents a single, universal moment in time using an ISO
       * 8601 formatted string. This means that a timestamp consists of a date, a time
       * (with nanosecond precision), and a time zone. Attio will coerce timestamps which
       * do not provide full nanosecond precision and UTC is assumed if no time zone is
       * provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00",
       * "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced
       * to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For
       * example, writing a timestamp value using the string
       * "2023-01-02T13:00:00.000000000+02:00" will result in the value
       * "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is
       * "9999-12-31T23:59:59.999999999Z".
       */
      value: string;
    }

    export namespace UnionMember16 {
      /**
       * The actor that created this value.
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
}

/**
 * Success
 */
export interface EntryOverwriteResponse {
  data: EntryOverwriteResponse.Data;
}

export namespace EntryOverwriteResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When this entry was created.
     */
    created_at: string;

    /**
     * A list of attribute values for the list entry (not attribute values for its
     * parent record).
     */
    entry_values: {
      [key: string]: Array<
        | Data.UnionMember0
        | Data.UnionMember1
        | Data.UnionMember2
        | Data.UnionMember3
        | Data.UnionMember4
        | Data.UnionMember5
        | Data.UnionMember6
        | Data.UnionMember7
        | Data.UnionMember8
        | Data.UnionMember9
        | Data.UnionMember10
        | Data.UnionMember11
        | Data.UnionMember12
        | Data.UnionMember13
        | Data.UnionMember14
        | Data.UnionMember15
        | Data.UnionMember16
      >;
    };

    /**
     * A UUID or slug identifying the object that the parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record that is parent of the list entry.
     */
    parent_record_id: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * A UUID identifying this entry.
       */
      entry_id: string;

      /**
       * A UUID identifying the list this entry is in.
       */
      list_id: string;

      /**
       * A UUID identifying the workspace this entry belongs to.
       */
      workspace_id: string;
    }

    export interface UnionMember0 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'actor-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember0.CreatedByActor;

      /**
       * The ID of the referenced actor.
       */
      referenced_actor_id: string | null;

      /**
       * The type of the referenced actor.
       * [Read more information on actor types here](/docs/actors).
       */
      referenced_actor_type: 'api-token' | 'workspace-member' | 'system' | 'app';
    }

    export namespace UnionMember0 {
      /**
       * The actor that created this value.
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

    export interface UnionMember1 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'checkbox';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember1.CreatedByActor;

      /**
       * A boolean representing whether the checkbox is checked or not. The string values
       * 'true' and 'false' are also accepted.
       */
      value: boolean;
    }

    export namespace UnionMember1 {
      /**
       * The actor that created this value.
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

    export interface UnionMember2 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'currency';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember2.CreatedByActor;

      /**
       * A numerical representation of the currency value. A decimal with a max of 4
       * decimal places.
       */
      currency_value: number;

      /**
       * The ISO4217 currency code representing the currency that the value is stored in.
       */
      currency_code?:
        | 'ARS'
        | 'AUD'
        | 'BRL'
        | 'BGN'
        | 'CAD'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CZK'
        | 'DKK'
        | 'EUR'
        | 'HKD'
        | 'ISK'
        | 'INR'
        | 'ILS'
        | 'JPY'
        | 'KES'
        | 'KRW'
        | 'MYR'
        | 'MXN'
        | 'NTD'
        | 'NZD'
        | 'NGN'
        | 'NOK'
        | 'XPF'
        | 'PEN'
        | 'PHP'
        | 'PLN'
        | 'GBP'
        | 'RWF'
        | 'SAR'
        | 'SGD'
        | 'ZAR'
        | 'SEK'
        | 'CHF'
        | 'THB'
        | 'AED'
        | 'UYU'
        | 'USD'
        | null;
    }

    export namespace UnionMember2 {
      /**
       * The actor that created this value.
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

    export interface UnionMember3 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'date';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember3.CreatedByActor;

      /**
       * A date represents a single calendar year, month and day, independent of
       * timezone. If hours, months, seconds or timezones are provided, they will be
       * trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01",
       * and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00",
       * "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will
       * all be coerced to "2023-01-02". If a timezone is provided that would result in a
       * different calendar date in UTC, the date will be coerced to UTC and then the
       * timezone component will be trimmed. For example, the value
       * "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date
       * is "9999-12-31".
       */
      value: string;
    }

    export namespace UnionMember3 {
      /**
       * The actor that created this value.
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

    export interface UnionMember4 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'domain';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember4.CreatedByActor;

      domain: string;

      root_domain: string;
    }

    export namespace UnionMember4 {
      /**
       * The actor that created this value.
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

    export interface UnionMember5 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'email-address';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember5.CreatedByActor;

      email_address: string;

      email_domain: string;

      email_local_specifier: string;

      email_root_domain: string;

      original_email_address: string;
    }

    export namespace UnionMember5 {
      /**
       * The actor that created this value.
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

    export interface UnionMember6 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'record-reference';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember6.CreatedByActor;

      /**
       * A slug identifying the object that the referenced record belongs to.
       */
      target_object: string;

      /**
       * A UUID to identify the referenced record.
       */
      target_record_id: string;
    }

    export namespace UnionMember6 {
      /**
       * The actor that created this value.
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

    export interface UnionMember7 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'interaction';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember7.CreatedByActor;

      /**
       * When the interaction occurred.
       */
      interacted_at: string;

      /**
       * The type of interaction e.g. calendar or email.
       */
      interaction_type: 'calendar-event' | 'call' | 'chat-thread' | 'email' | 'in-person-meeting' | 'meeting';

      /**
       * The actor that created this value.
       */
      owner_actor: UnionMember7.OwnerActor;
    }

    export namespace UnionMember7 {
      /**
       * The actor that created this value.
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

      /**
       * The actor that created this value.
       */
      export interface OwnerActor {
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

    export interface UnionMember8 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'location';

      /**
       * The ISO 3166-1 alpha-2 country code for the country this location is in.
       */
      country_code:
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
       * The actor that created this value.
       */
      created_by_actor: UnionMember8.CreatedByActor;

      /**
       * The latitude of the location. Validated by the regular expression
       * `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal
       * places of precision. Note that this value is not currently represented in the UI
       * but will be persisted and readable through API calls.}
       */
      latitude: string | null;

      /**
       * The first line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_1: string | null;

      /**
       * The second line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_2: string | null;

      /**
       * The third line of the address. Note that this value is not currently represented
       * in the UI but will be persisted and readable through API calls.
       */
      line_3: string | null;

      /**
       * The fourth line of the address. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.
       */
      line_4: string | null;

      /**
       * The town, neighborhood or area the location is in.
       */
      locality: string | null;

      /**
       * The longitude of the location. Validated by the regular expression
       * `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with
       * up to 9 decimal places of precision. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      longitude: string | null;

      /**
       * The postcode or zip code for the location. Note that this value is not currently
       * represented in the UI but will be persisted and readable through API calls.}
       */
      postcode: string | null;

      /**
       * The state, county, province or region that the location is in.
       */
      region: string | null;
    }

    export namespace UnionMember8 {
      /**
       * The actor that created this value.
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

    export interface UnionMember9 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'number';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember9.CreatedByActor;

      /**
       * Numbers are persisted as 64 bit floats.
       */
      value: number;
    }

    export namespace UnionMember9 {
      /**
       * The actor that created this value.
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

    export interface UnionMember10 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'personal-name';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember10.CreatedByActor;

      /**
       * The first name.
       */
      first_name: string;

      /**
       * The full name.
       */
      full_name: string;

      /**
       * The last name.
       */
      last_name: string;
    }

    export namespace UnionMember10 {
      /**
       * The actor that created this value.
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

    export interface UnionMember11 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'phone-number';

      /**
       * The ISO 3166-1 alpha-2 country code representing the country that this phone
       * number belongs to.
       */
      country_code:
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
        | 'AC';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember11.CreatedByActor;

      /**
       * The raw, original phone number, as inputted.
       */
      original_phone_number: string;

      phone_number: string;
    }

    export namespace UnionMember11 {
      /**
       * The actor that created this value.
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

    export interface UnionMember12 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember12.CreatedByActor;

      status: StatusesAPI.Status;
    }

    export namespace UnionMember12 {
      /**
       * The actor that created this value.
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

    export interface UnionMember13 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'rating';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember13.CreatedByActor;

      /**
       * A number between 0 and 5 (inclusive) to represent a star rating.
       */
      value: number;
    }

    export namespace UnionMember13 {
      /**
       * The actor that created this value.
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

    export interface UnionMember14 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember14.CreatedByActor;

      option: OptionsAPI.SelectOption;
    }

    export namespace UnionMember14 {
      /**
       * The actor that created this value.
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

    export interface UnionMember15 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'text';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember15.CreatedByActor;

      /**
       * A raw text field. Values are limited to 10MB.
       */
      value: string;
    }

    export namespace UnionMember15 {
      /**
       * The actor that created this value.
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

    export interface UnionMember16 {
      /**
       * The point in time at which this value was made "active". `active_from` can be
       * considered roughly analogous to `created_at`.
       */
      active_from: string;

      /**
       * The point in time at which this value was deactivated. If `null`, the value is
       * active.
       */
      active_until: string | null;

      /**
       * The attribute type of the value.
       */
      attribute_type: 'timestamp';

      /**
       * The actor that created this value.
       */
      created_by_actor: UnionMember16.CreatedByActor;

      /**
       * A timestamp value represents a single, universal moment in time using an ISO
       * 8601 formatted string. This means that a timestamp consists of a date, a time
       * (with nanosecond precision), and a time zone. Attio will coerce timestamps which
       * do not provide full nanosecond precision and UTC is assumed if no time zone is
       * provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00",
       * "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced
       * to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For
       * example, writing a timestamp value using the string
       * "2023-01-02T13:00:00.000000000+02:00" will result in the value
       * "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is
       * "9999-12-31T23:59:59.999999999Z".
       */
      value: string;
    }

    export namespace UnionMember16 {
      /**
       * The actor that created this value.
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
}

export interface EntryCreateParams {
  data: EntryCreateParams.Data;
}

export namespace EntryCreateParams {
  export interface Data {
    /**
     * An object with an attribute `api_slug` or `attribute_id` as the key, and a
     * single value (for single-select attributes), or an array of values (for single
     * or multi-select attributes) as the values. For complete documentation on values
     * for all attribute types, please see our
     * [attribute type docs](/docs/attribute-types).
     */
    entry_values: { [key: string]: Array<unknown> };

    /**
     * A UUID or slug identifying the object that the added parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record you want to add to the list. The record will
     * become the 'parent' of the created list entry.
     */
    parent_record_id: string;
  }
}

export interface EntryRetrieveParams {
  /**
   * A UUID or slug identifying the list the entry is in.
   */
  list: string;
}

export interface EntryUpdateParams {
  /**
   * Path param: A UUID or slug of the list the list entry belongs to.
   */
  list: string;

  /**
   * Body param
   */
  data: EntryUpdateParams.Data;
}

export namespace EntryUpdateParams {
  export interface Data {
    /**
     * An object with an attribute `api_slug` or `attribute_id` as the key, and a
     * single value (for single-select attributes), or an array of values (for single
     * or multi-select attributes) as the values. For complete documentation on values
     * for all attribute types, please see our
     * [attribute type docs](/docs/attribute-types).
     */
    entry_values: { [key: string]: Array<unknown> };
  }
}

export interface EntryListParams {
  /**
   * An object used to filter results to a subset of results. See the
   * [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
   */
  filter?: { [key: string]: unknown };

  /**
   * The maximum number of results to return. Defaults to 500. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  limit?: number;

  /**
   * The number of results to skip over before returning. Defaults to 0. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  offset?: number;

  /**
   * An object used to sort results. See the
   * [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
   */
  sorts?: Array<EntryListParams.UnionMember0 | EntryListParams.UnionMember1>;
}

export namespace EntryListParams {
  /**
   * Sort by attribute
   */
  export interface UnionMember0 {
    /**
     * A slug or ID to identify the attribute to sort by.
     */
    attribute: string;

    /**
     * The direction to sort the results by.
     */
    direction: 'asc' | 'desc';

    /**
     * Which field on the value to sort by e.g. "last_name" on a name value.
     */
    field?: string;
  }

  /**
   * Sort by path
   */
  export interface UnionMember1 {
    /**
     * The direction to sort the results by.
     */
    direction: 'asc' | 'desc';

    /**
     * You may use the `path` property to traverse record reference attributes and
     * parent records on list entries. `path` accepts an array of tuples where the
     * first element of each tuple is the slug or ID of a list/object, and the second
     * element is the slug or ID of an attribute on that list/object. The first element
     * of the first tuple must correspond to the list or object that you are querying.
     * For example, if you wanted to sort by the name of the parent record (a company)
     * on a list with the slug "sales", you would pass the value
     * `[['sales', 'parent_record'], ['companies', 'name']]`.
     */
    path: Array<Array<string>>;

    /**
     * Which field on the value to sort by e.g. "last_name" on a name value.
     */
    field?: string;
  }
}

export interface EntryDeleteParams {
  /**
   * A UUID or slug identifying the list the entry is in.
   */
  list: string;
}

export interface EntryAssertParams {
  data: EntryAssertParams.Data;
}

export namespace EntryAssertParams {
  export interface Data {
    /**
     * An object with an attribute `api_slug` or `attribute_id` as the key, and a
     * single value (for single-select attributes), or an array of values (for single
     * or multi-select attributes) as the values. For complete documentation on values
     * for all attribute types, please see our
     * [attribute type docs](/docs/attribute-types).
     */
    entry_values: { [key: string]: Array<unknown> };

    /**
     * A UUID or slug identifying the object that the added parent record belongs to.
     */
    parent_object: string;

    /**
     * A UUID identifying the record you want to add to the list. The record will
     * become the 'parent' of the created list entry.
     */
    parent_record_id: string;
  }
}

export interface EntryOverwriteParams {
  /**
   * Path param: A UUID or slug of the list the list entry belongs to.
   */
  list: string;

  /**
   * Body param
   */
  data: EntryOverwriteParams.Data;
}

export namespace EntryOverwriteParams {
  export interface Data {
    /**
     * An object with an attribute `api_slug` or `attribute_id` as the key, and a
     * single value (for single-select attributes), or an array of values (for single
     * or multi-select attributes) as the values. For complete documentation on values
     * for all attribute types, please see our
     * [attribute type docs](/docs/attribute-types).
     */
    entry_values: { [key: string]: Array<unknown> };
  }
}

Entries.Attributes = Attributes;

export declare namespace Entries {
  export {
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

  export {
    Attributes as Attributes,
    type AttributeListValuesResponse as AttributeListValuesResponse,
    type AttributeListValuesParams as AttributeListValuesParams,
  };
}
