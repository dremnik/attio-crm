// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Self extends APIResource {
  /**
   * Identify the current access token, the workspace it is linked to, and any
   * permissions it has.
   */
  retrieve(options?: RequestOptions): APIPromise<SelfRetrieveResponse> {
    return this._client.get('/v2/self', options);
  }
}

export type SelfRetrieveResponse = SelfRetrieveResponse.Active | SelfRetrieveResponse.UnionMember1;

export namespace SelfRetrieveResponse {
  export interface Active {
    active: false;
  }

  export interface UnionMember1 {
    /**
     * Whether the token is currently active and usable.
     */
    active: boolean;

    /**
     * The intended audience for this token, for Bearer tokens this is the same as the
     * client_id.
     */
    aud: string;

    /**
     * The ID of the workspace member who authorised this token initially.
     */
    authorized_by_workspace_member_id: string;

    /**
     * The app ID of the OAuth application that requested this token
     */
    client_id: string;

    /**
     * The time at which this token will expire, if set, as a number of seconds since
     * January 1 1970 UTC.
     */
    exp: number | null;

    /**
     * The time at which this token was issued, as a number of seconds since January 1
     * 1970 UTC.
     */
    iat: number;

    /**
     * The issuer of the token. Always attio.com
     */
    iss: 'attio.com';

    /**
     * A space-separated list of scopes associated with this token
     */
    scope: string;

    /**
     * Since Bearer tokens grant Workspace-level permissions, this property contains
     * the workspace_id.
     */
    sub: string;

    /**
     * The type of token, always Bearer for tokens acquired via the OAuth 2.0 flow.
     */
    token_type: 'Bearer';

    /**
     * The ID of the workspace the token is scoped to.
     */
    workspace_id: string;

    /**
     * The logo URL of the workspace the token is scoped to.
     */
    workspace_logo_url: string | null;

    /**
     * The name of the workspace the token is scoped to.
     */
    workspace_name: string;

    /**
     * The slug of the workspace the token is scoped to.
     */
    workspace_slug: string;
  }
}

export declare namespace Self {
  export { type SelfRetrieveResponse as SelfRetrieveResponse };
}
