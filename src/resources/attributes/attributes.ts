// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AttributesAPI from './attributes';
import * as OptionsAPI from './options';
import {
  OptionCreateParams,
  OptionCreateResponse,
  OptionListParams,
  OptionListResponse,
  OptionUpdateParams,
  OptionUpdateResponse,
  Options,
  SelectOption,
} from './options';
import * as StatusesAPI from './statuses';
import {
  Status as StatusesAPIStatus,
  StatusCreateParams,
  StatusCreateResponse,
  StatusListParams,
  StatusListResponse,
  StatusUpdateParams,
  StatusUpdateResponse,
  Statuses,
} from './statuses';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Attributes extends APIResource {
  options: OptionsAPI.Options = new OptionsAPI.Options(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);

  /**
   * Creates a new attribute on either an object or a list.
   *
   * For record-reference attributes, you can optionally create a bidirectional
   * relationship by providing a `relationship` object. This will create two
   * entangled attributes: one on the specified object and a reverse attribute on the
   * related object.
   *
   * To create an attribute on an object, you must also have the
   * `object_configuration:read-write` scope.
   *
   * To create an attribute on a list, you must also have the
   * `list_configuration:read-write` scope.
   */
  create(
    identifier: string,
    params: AttributeCreateParams,
    options?: RequestOptions,
  ): APIPromise<AttributeCreateResponse> {
    const { target, ...body } = params;
    return this._client.post(path`/v2/${target}/${identifier}/attributes`, { body, ...options });
  }

  /**
   * Gets information about a single attribute on either an object or a list.
   *
   * Required scopes: `object_configuration:read`.
   */
  retrieve(
    attribute: string,
    params: AttributeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AttributeRetrieveResponse> {
    const { target, identifier } = params;
    return this._client.get(path`/v2/${target}/${identifier}/attributes/${attribute}`, options);
  }

  /**
   * Updates a single attribute on a given object or list.
   *
   * Required scopes: `object_configuration:read-write`.
   */
  update(
    attribute: string,
    params: AttributeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AttributeUpdateResponse> {
    const { target, identifier, ...body } = params;
    return this._client.patch(path`/v2/${target}/${identifier}/attributes/${attribute}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all attributes defined on a specific object or list. Attributes are
   * returned in the order that they are sorted by in the UI.
   *
   * Required scopes: `object_configuration:read`.
   */
  list(
    identifier: string,
    params: AttributeListParams,
    options?: RequestOptions,
  ): APIPromise<AttributeListResponse> {
    const { target, ...query } = params;
    return this._client.get(path`/v2/${target}/${identifier}/attributes`, { query, ...options });
  }
}

export interface Attribute {
  id: Attribute.ID;

  /**
   * A unique slug for the attribute for use in API responses and URLs. Formatted in
   * snake case.
   */
  api_slug: string;

  /**
   * Additional, type-dependent configuration for the attribute.
   */
  config: Attribute.Config;

  /**
   * When this attribute was created.
   */
  created_at: string;

  /**
   * The default value for this attribute. Static values are used to directly
   * populate values using their contents. Dynamic values are used to lookup data at
   * the point of creation. For example, you could use a dynamic value to insert a
   * value for the currently logged in user. Which default values are available is
   * dependent on the type of the attribute.
   */
  default_value: Attribute.UnionMember0 | Attribute.UnionMember1 | null;

  /**
   * A text description of the attribute.
   */
  description: string | null;

  /**
   * Whether this attribute has been archived. Archived attributes are hidden from
   * most UI, but can be restored either over the API or in workspace settings. See
   * the [guide on archiving and deleting](/docs/archiving-vs-deleting)for more
   * information.
   */
  is_archived: boolean;

  /**
   * Whether this attribute has a default value enabled. Must be `true` when
   * `is_required` is `true`.
   */
  is_default_value_enabled: boolean;

  /**
   * Whether or not this attribute can have multiple values. Multiselect is only
   * available on some value types.
   */
  is_multiselect: boolean;

  /**
   * When `is_required` is `true`, new records/entries must have a value for this
   * attribute. If `false`, values may be `null`. This value does not affect existing
   * data and you do not need to backfill `null` values if changing `is_required`
   * from `false` to `true`.
   */
  is_required: boolean;

  /**
   * `true` if this is an Attio system-defined attribute, `false` if defined by a
   * user or non-Attio system.
   */
  is_system_attribute: boolean;

  /**
   * Whether or not new values for this attribute must be unique. Uniqueness
   * restrictions are only applied to new data and do not apply retroactively to
   * previously created data.
   */
  is_unique: boolean;

  /**
   * Whether or not this attribute can be written to. Can only be false when
   * `is_system_attribute` is `true` (user-defined attributes are always writeable).
   * If `false`, this usually means the attribute is enriched by Attio.
   */
  is_writable: boolean;

  /**
   * If this attribute is related to another attribute, this is an object that
   * includes an `id` property that identifies the other attribute. `null` means no
   * relationship exists. See
   * [the help center](https://attio.com/help/reference/managing-your-data/attributes#relationship-attributes)
   * for more details about relationship attributes.
   */
  relationship: Attribute.Relationship | null;

  /**
   * A title for the attribute, to be displayed across the app.
   */
  title: string;

  /**
   * The type of the attribute.
   */
  type:
    | 'text'
    | 'number'
    | 'checkbox'
    | 'currency'
    | 'date'
    | 'timestamp'
    | 'rating'
    | 'status'
    | 'select'
    | 'record-reference'
    | 'actor-reference'
    | 'location'
    | 'domain'
    | 'email-address'
    | 'phone-number'
    | 'interaction'
    | 'personal-name';
}

export namespace Attribute {
  export interface ID {
    /**
     * A UUID to identify this attribute.
     */
    attribute_id: string;

    /**
     * A UUID to identify the object or list that this attribute belongs to
     */
    object_id: string;

    /**
     * A UUID representing the workspace this attribute belongs to.
     */
    workspace_id: string;
  }

  /**
   * Additional, type-dependent configuration for the attribute.
   */
  export interface Config {
    /**
     * Configuration available for attributes of type "currency".
     */
    currency: Config.Currency;

    /**
     * Configuration available for attributes of type "record-reference".
     */
    record_reference: Config.RecordReference;
  }

  export namespace Config {
    /**
     * Configuration available for attributes of type "currency".
     */
    export interface Currency {
      /**
       * The ISO4217 code representing the currency that values for this attribute should
       * be stored in.
       */
      default_currency_code:
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

      /**
       * How the currency should be displayed across the app. "code" will display the ISO
       * currency code e.g. "USD", "name" will display the localized currency name e.g.
       * "British pound", "narrowSymbol" will display
       * "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
       */
      display_type: 'code' | 'name' | 'narrowSymbol' | 'symbol' | null;
    }

    /**
     * Configuration available for attributes of type "record-reference".
     */
    export interface RecordReference {
      /**
       * A list of UUIDs to indicate which objects records are allowed to belong to.
       * Leave empty to to allow records from all object types.
       */
      allowed_object_ids: Array<string> | null;
    }
  }

  export interface UnionMember0 {
    /**
     * For actor reference attributes, you may pass a dynamic value of
     * `"current-user"`. When creating new records or entries, this will cause the
     * actor reference value to be populated with either the workspace member or API
     * token that created the record/entry.
     */
    template: 'current-user' | (string & {});

    type: 'dynamic';
  }

  export interface UnionMember1 {
    template: Array<
      | UnionMember1.UnionMember0
      | UnionMember1.UnionMember1
      | UnionMember1.UnionMember2
      | UnionMember1.UnionMember3
      | UnionMember1.UnionMember4
      | UnionMember1.UnionMember5
      | UnionMember1.UnionMember6
      | UnionMember1.UnionMember7
      | UnionMember1.UnionMember8
      | UnionMember1.UnionMember9
      | UnionMember1.UnionMember10
      | UnionMember1.UnionMember11
      | UnionMember1.UnionMember12
      | UnionMember1.UnionMember13
      | UnionMember1.UnionMember14
      | UnionMember1.UnionMember15
      | UnionMember1.UnionMember16
      | UnionMember1.UnionMember17
      | UnionMember1.UnionMember18
    >;

    type: 'static';
  }

  export namespace UnionMember1 {
    export interface UnionMember0 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'actor-reference';

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

    export interface UnionMember1 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'checkbox';

      /**
       * A boolean representing whether the checkbox is checked or not. The string values
       * 'true' and 'false' are also accepted.
       */
      value: boolean;
    }

    export interface UnionMember2 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'currency';

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

    export interface UnionMember3 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'date';

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

    export interface UnionMember4 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'domain';

      domain: string;

      root_domain: string;
    }

    export interface UnionMember5 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'email-address';

      email_address: string;

      email_domain: string;

      email_local_specifier: string;

      email_root_domain: string;

      original_email_address: string;
    }

    export interface UnionMember6 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'record-reference';

      /**
       * A slug identifying the object that the referenced record belongs to.
       */
      target_object: string;

      /**
       * A UUID to identify the referenced record.
       */
      target_record_id: string;
    }

    export interface UnionMember7 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'interaction';

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

    export interface UnionMember9 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'number';

      /**
       * Numbers are persisted as 64 bit floats.
       */
      value: number;
    }

    export interface UnionMember10 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'personal-name';

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

    export interface UnionMember11 {
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
       * The raw, original phone number, as inputted.
       */
      original_phone_number: string;

      phone_number: string;
    }

    export interface UnionMember12 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      /**
       * The UUID identifying the selected status.
       */
      status: string;
    }

    export interface UnionMember13 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'status';

      status: StatusesAPI.Status;
    }

    export interface UnionMember14 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'rating';

      /**
       * A number between 0 and 5 (inclusive) to represent a star rating.
       */
      value: number;
    }

    export interface UnionMember15 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      /**
       * The UUID identifying the selected select option.
       */
      option: string;
    }

    export interface UnionMember16 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'select';

      option: OptionsAPI.SelectOption;
    }

    export interface UnionMember17 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'text';

      /**
       * A raw text field. Values are limited to 10MB.
       */
      value: string;
    }

    export interface UnionMember18 {
      /**
       * The attribute type of the value.
       */
      attribute_type: 'timestamp';

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
  }

  /**
   * If this attribute is related to another attribute, this is an object that
   * includes an `id` property that identifies the other attribute. `null` means no
   * relationship exists. See
   * [the help center](https://attio.com/help/reference/managing-your-data/attributes#relationship-attributes)
   * for more details about relationship attributes.
   */
  export interface Relationship {
    id: Relationship.ID;

    /**
     * The API slug identifying the related attribute.
     */
    api_slug: string;

    /**
     * Whether the related attribute supports selecting multiple values. Combined with
     * the parent attribute's `is_multiselect`, this determines the relationship type:
     * both `false` = one-to-one, parent `true` + related `false` = many-to-one, parent
     * `false` + related `true` = one-to-many, both `true` = many-to-many.
     */
    is_multiselect: boolean;

    /**
     * The slug of the object that the related attribute belongs to.
     */
    object_slug: string;

    /**
     * The title of the related attribute.
     */
    title: string;
  }

  export namespace Relationship {
    export interface ID {
      /**
       * A UUID to identify this attribute.
       */
      attribute_id: string;

      /**
       * A UUID to identify the object or list that this attribute belongs to
       */
      object_id: string;

      /**
       * A UUID representing the workspace this attribute belongs to.
       */
      workspace_id: string;
    }
  }
}

/**
 * A union of possible value types, as required in request bodies.
 */
export type InputValue =
  | InputValue.UnionMember0
  | InputValue.WorkspaceMemberEmailAddress
  | InputValue.Value
  | InputValue.CurrencyValue
  | InputValue.Value
  | InputValue.Domain
  | InputValue.EmailAddress
  | InputValue.UnionMember7
  | InputValue.UnionMember8
  | InputValue.UnionMember9
  | InputValue.UnionMember10
  | InputValue.Value
  | InputValue.UnionMember12
  | InputValue.UnionMember13
  | InputValue.Status
  | InputValue.Value
  | InputValue.Option
  | InputValue.Value
  | InputValue.Value;

export namespace InputValue {
  export interface UnionMember0 {
    /**
     * The ID of the referenced Actor.
     */
    referenced_actor_id: string;

    /**
     * The type of the referenced actor. Currently, only workspace members can be
     * written into actor reference attributes.
     * [Read more information on actor types here](/docs/actors).
     */
    referenced_actor_type: 'workspace-member';
  }

  export interface WorkspaceMemberEmailAddress {
    /**
     * Workspace member actors can be referenced by email address as well as actor ID.
     */
    workspace_member_email_address: string;
  }

  export interface Value {
    /**
     * A boolean representing whether the checkbox is checked or not. The string values
     * 'true' and 'false' are also accepted.
     */
    value: boolean;
  }

  export interface CurrencyValue {
    /**
     * A numerical representation of the currency value. A decimal with a max of 4
     * decimal places.
     */
    currency_value: number;
  }

  export interface Value {
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

  export interface UnionMember7 {
    /**
     * A UUID or slug to identify the object that the referenced record belongs to.
     */
    target_object: string;

    /**
     * A UUID to identify the referenced record.
     */
    target_record_id: string;
  }

  export interface UnionMember8 {
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
      | UnionMember8.Domain
      | UnionMember8.EmailAddress
      | UnionMember8.Value
      | UnionMember8.UnionMember3
      | UnionMember8.Value
    >;

    /**
     * A UUID or slug to identify the object that the referenced record belongs to.
     */
    target_object: string;
  }

  export namespace UnionMember8 {
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

  export interface UnionMember9 {
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
    owner_actor: UnionMember9.OwnerActor;
  }

  export namespace UnionMember9 {
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

  export interface UnionMember10 {
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

  export interface Value {
    /**
     * Numbers are persisted as 64 bit floats.
     */
    value: number;
  }

  export interface UnionMember12 {
    /**
     * The first name.
     */
    first_name?: string;

    /**
     * The full name.
     */
    full_name?: string;

    /**
     * The last name.
     */
    last_name?: string;
  }

  export interface UnionMember13 {
    /**
     * A phone number which is either a) prefixed with a country code (e.g. `+44....`)
     * or b) a local number, where `country_code` is specified in addition.
     */
    original_phone_number: string;

    /**
     * The ISO 3166-1 alpha-2 country code representing the country that this phone
     * number belongs to. Optional if `original_phone_number` includes a country code
     * prefix.
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
  }

  export interface Status {
    /**
     * The UUID or status title identifying the selected status.
     */
    status: string;
  }

  export interface Value {
    /**
     * A number between 0 and 5 (inclusive) to represent a star rating.
     */
    value: number;
  }

  export interface Option {
    /**
     * The UUID or select option title identifying the selected select option.
     */
    option: string;
  }

  export interface Value {
    /**
     * A raw text field. Values are limited to 10MB.
     */
    value: string;
  }

  export interface Value {
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
}

/**
 * Success
 */
export interface AttributeCreateResponse {
  data: Attribute;
}

/**
 * Success
 */
export interface AttributeRetrieveResponse {
  data: Attribute;
}

/**
 * Success
 */
export interface AttributeUpdateResponse {
  data: Attribute;
}

/**
 * Success
 */
export interface AttributeListResponse {
  data: Array<Attribute>;
}

export interface AttributeCreateParams {
  /**
   * Path param: Whether the attribute is to be created on an object or a list.
   */
  target: 'objects' | 'lists';

  /**
   * Body param
   */
  data: AttributeCreateParams.Data;
}

export namespace AttributeCreateParams {
  export interface Data {
    /**
     * A unique, human-readable slug to access the attribute through URLs and API
     * calls. Formatted in snake case.
     */
    api_slug: string;

    config: Data.Config;

    /**
     * A text description for the attribute.
     */
    description: string | null;

    /**
     * Whether or not this attribute can have multiple values. Multiselect is only
     * available on some value types.
     */
    is_multiselect: boolean;

    /**
     * When `is_required` is `true`, new records/entries must have a value for this
     * attribute. If `false`, values may be `null`. This value does not affect existing
     * data and you do not need to backfill `null` values if changing `is_required`
     * from `false` to `true`.
     */
    is_required: boolean;

    /**
     * Whether or not new values for this attribute must be unique. Uniqueness
     * restrictions are only applied to new data and do not apply retroactively to
     * previously created data.
     */
    is_unique: boolean;

    /**
     * The name of the attribute. The title will be visible across Attio's UI.
     */
    title: string;

    /**
     * The type of the attribute. This value affects the possible `config` values.
     * Attributes of type "status" are not supported on objects.
     */
    type:
      | 'text'
      | 'number'
      | 'checkbox'
      | 'currency'
      | 'date'
      | 'timestamp'
      | 'rating'
      | 'status'
      | 'select'
      | 'record-reference'
      | 'actor-reference'
      | 'location'
      | 'domain'
      | 'email-address'
      | 'phone-number';

    /**
     * The default value for this attribute. Static values are used to directly
     * populate values using their contents. Dynamic values are used to lookup data at
     * the point of creation. For example, you could use a dynamic value to insert a
     * value for the currently logged in user. Which default values are available is
     * dependent on the type of the attribute. Default values are not currently
     * supported on people or company objects.
     */
    default_value?: Data.UnionMember0 | Data.UnionMember1 | null;

    /**
     * Optional relationship configuration. When provided, creates a bidirectional
     * relationship between two objects. Can only be used with attributes of type
     * "record-reference". If `config.record_reference.allowed_objects` is also
     * provided, it must contain only the relationship object.
     */
    relationship?: Data.Relationship | null;
  }

  export namespace Data {
    export interface Config {
      /**
       * Configuration available for attributes of type "currency".
       */
      currency?: Config.Currency;

      /**
       * Configuration available for attributes of type "record-reference".
       */
      record_reference?: Config.RecordReference;
    }

    export namespace Config {
      /**
       * Configuration available for attributes of type "currency".
       */
      export interface Currency {
        /**
         * The ISO4217 code representing the currency that values for this attribute should
         * be stored in.
         */
        default_currency_code:
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
          | 'USD';

        /**
         * How the currency should be displayed across the app. "code" will display the ISO
         * currency code e.g. "USD", "name" will display the localized currency name e.g.
         * "British pound", "narrowSymbol" will display
         * "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
         */
        display_type: 'code' | 'name' | 'narrowSymbol' | 'symbol';
      }

      /**
       * Configuration available for attributes of type "record-reference".
       */
      export interface RecordReference {
        /**
         * A list of slugs or UUIDs to indicate which objects records are allowed to belong
         * to. If `relationship` is also provided, this must contain only the relationship
         * object.
         */
        allowed_objects: Array<string>;
      }
    }

    export interface UnionMember0 {
      /**
       * For actor reference attributes, you may pass a dynamic value of
       * `"current-user"`. When creating new records or entries, this will cause the
       * actor reference value to be populated with either the workspace member or API
       * token that created the record/entry.
       */
      template: 'current-user' | (string & {});

      type: 'dynamic';
    }

    export interface UnionMember1 {
      template: Array<AttributesAPI.InputValue>;

      type: 'static';
    }

    /**
     * Optional relationship configuration. When provided, creates a bidirectional
     * relationship between two objects. Can only be used with attributes of type
     * "record-reference". If `config.record_reference.allowed_objects` is also
     * provided, it must contain only the relationship object.
     */
    export interface Relationship {
      /**
       * The API slug for the reverse relationship attribute.
       */
      api_slug: string;

      /**
       * Whether the related attribute supports selecting multiple values. Combined with
       * the parent attribute's `is_multiselect`, this determines the relationship type:
       * both `false` = one-to-one, parent `true` + related `false` = many-to-one, parent
       * `false` + related `true` = one-to-many, both `true` = many-to-many.
       */
      is_multiselect: boolean;

      /**
       * The slug or UUID of the object to create the reverse relationship attribute on.
       */
      object: string;

      /**
       * The title for the reverse relationship attribute.
       */
      title: string;
    }
  }
}

export interface AttributeRetrieveParams {
  /**
   * Whether the attribute is on an object or a list.
   */
  target: 'objects' | 'lists';

  /**
   * A UUID or slug to identify the object or list the attribute belongs to.
   */
  identifier: string;
}

export interface AttributeUpdateParams {
  /**
   * Path param: Whether the attribute is on an object or a list.
   */
  target: 'objects' | 'lists';

  /**
   * Path param: A UUID or slug to identify the object or list the attribute belongs
   * to.
   */
  identifier: string;

  /**
   * Body param
   */
  data: AttributeUpdateParams.Data;
}

export namespace AttributeUpdateParams {
  export interface Data {
    /**
     * A unique, human-readable slug to access the attribute through URLs and API
     * calls. Formatted in snake case.
     */
    api_slug?: string;

    /**
     * Additional, type-dependent configuration for the attribute.
     */
    config?: Data.Config;

    /**
     * The default value for this attribute. Static values are used to directly
     * populate values using their contents. Dynamic values are used to lookup data at
     * the point of creation. For example, you could use a dynamic value to insert a
     * value for the currently logged in user. Which default values are available is
     * dependent on the type of the attribute. Default values are not currently
     * supported on people or company objects.
     */
    default_value?: Data.UnionMember0 | Data.UnionMember1 | null;

    /**
     * A text description for the attribute.
     */
    description?: string | null;

    /**
     * Whether the attribute has been archived or not. See our
     * [archiving guide](/docs/archiving-vs-deleting) for more information on
     * archiving.
     */
    is_archived?: boolean;

    /**
     * When `is_required` is `true`, new records/entries must have a value for this
     * attribute. If `false`, values may be `null`. This value does not affect existing
     * data and you do not need to backfill `null` values if changing `is_required`
     * from `false` to `true`.
     */
    is_required?: boolean;

    /**
     * Whether or not new values for this attribute must be unique. Uniqueness
     * restrictions are only applied to new data and do not apply retroactively to
     * previously created data.
     */
    is_unique?: boolean;

    /**
     * The name of the attribute. The title will be visible across Attio's UI.
     */
    title?: string;
  }

  export namespace Data {
    /**
     * Additional, type-dependent configuration for the attribute.
     */
    export interface Config {
      /**
       * Configuration available for attributes of type "currency".
       */
      currency?: Config.Currency;

      /**
       * Configuration available for attributes of type "record-reference".
       */
      record_reference?: Config.RecordReference;
    }

    export namespace Config {
      /**
       * Configuration available for attributes of type "currency".
       */
      export interface Currency {
        /**
         * The ISO4217 code representing the currency that values for this attribute should
         * be stored in.
         */
        default_currency_code:
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
          | 'USD';

        /**
         * How the currency should be displayed across the app. "code" will display the ISO
         * currency code e.g. "USD", "name" will display the localized currency name e.g.
         * "British pound", "narrowSymbol" will display
         * "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
         */
        display_type: 'code' | 'name' | 'narrowSymbol' | 'symbol';
      }

      /**
       * Configuration available for attributes of type "record-reference".
       */
      export interface RecordReference {
        /**
         * A list of slugs or UUIDs to indicate which objects records are allowed to belong
         * to. If `relationship` is also provided, this must contain only the relationship
         * object.
         */
        allowed_objects: Array<string>;
      }
    }

    export interface UnionMember0 {
      /**
       * For actor reference attributes, you may pass a dynamic value of
       * `"current-user"`. When creating new records or entries, this will cause the
       * actor reference value to be populated with either the workspace member or API
       * token that created the record/entry.
       */
      template: 'current-user' | (string & {});

      type: 'dynamic';
    }

    export interface UnionMember1 {
      template: Array<AttributesAPI.InputValue>;

      type: 'static';
    }
  }
}

export interface AttributeListParams {
  /**
   * Path param: Whether the attributes are on an object or a list.
   */
  target: 'objects' | 'lists';

  /**
   * Query param: The maximum number of results to return. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  limit?: number;

  /**
   * Query param: The number of results to skip over before returning. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  offset?: number;

  /**
   * Query param: Whether archived attributes should be included in the results. See
   * the [full guide to archiving here](/docs/archiving-vs-deleting).
   */
  show_archived?: boolean;
}

Attributes.Options = Options;
Attributes.Statuses = Statuses;

export declare namespace Attributes {
  export {
    type Attribute as Attribute,
    type InputValue as InputValue,
    type AttributeCreateResponse as AttributeCreateResponse,
    type AttributeRetrieveResponse as AttributeRetrieveResponse,
    type AttributeUpdateResponse as AttributeUpdateResponse,
    type AttributeListResponse as AttributeListResponse,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeRetrieveParams as AttributeRetrieveParams,
    type AttributeUpdateParams as AttributeUpdateParams,
    type AttributeListParams as AttributeListParams,
  };

  export {
    Options as Options,
    type SelectOption as SelectOption,
    type OptionCreateResponse as OptionCreateResponse,
    type OptionUpdateResponse as OptionUpdateResponse,
    type OptionListResponse as OptionListResponse,
    type OptionCreateParams as OptionCreateParams,
    type OptionUpdateParams as OptionUpdateParams,
    type OptionListParams as OptionListParams,
  };

  export {
    Statuses as Statuses,
    type StatusesAPIStatus as Status,
    type StatusCreateResponse as StatusCreateResponse,
    type StatusUpdateResponse as StatusUpdateResponse,
    type StatusListResponse as StatusListResponse,
    type StatusCreateParams as StatusCreateParams,
    type StatusUpdateParams as StatusUpdateParams,
    type StatusListParams as StatusListParams,
  };
}
