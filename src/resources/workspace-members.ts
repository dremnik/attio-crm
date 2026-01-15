// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WorkspaceMembers extends APIResource {
  /**
   * Gets a single workspace member by ID.
   *
   * Required scopes: `user_management:read`.
   */
  retrieve(workspaceMemberID: string, options?: RequestOptions): APIPromise<WorkspaceMemberRetrieveResponse> {
    return this._client.get(path`/v2/workspace_members/${workspaceMemberID}`, options);
  }

  /**
   * Lists all workspace members in the workspace.
   *
   * Required scopes: `user_management:read`.
   */
  list(options?: RequestOptions): APIPromise<WorkspaceMemberListResponse> {
    return this._client.get('/v2/workspace_members', options);
  }
}

export interface WorkspaceMember {
  id: WorkspaceMember.ID;

  /**
   * Whether the workspace member is suspended or not and what level of privileges
   * they have inside the workspace. We do not delete workspace members so that you
   * can successfully attribute past actions to suspended workspace members.
   */
  access_level: 'admin' | 'member' | 'suspended';

  /**
   * A URL to the user's avatar image.
   */
  avatar_url: string | null;

  /**
   * When the workspace member was created.
   */
  created_at: string;

  /**
   * The user's email address.
   */
  email_address: string;

  /**
   * The first name of the user.
   */
  first_name: string;

  /**
   * The last name of the user.
   */
  last_name: string;
}

export namespace WorkspaceMember {
  export interface ID {
    /**
     * The ID of the workspace the workspace member belongs to.
     */
    workspace_id: string;

    /**
     * The ID of the workspace member.
     */
    workspace_member_id: string;
  }
}

/**
 * Success
 */
export interface WorkspaceMemberRetrieveResponse {
  data: WorkspaceMember;
}

/**
 * Success
 */
export interface WorkspaceMemberListResponse {
  data: Array<WorkspaceMember>;
}

export declare namespace WorkspaceMembers {
  export {
    type WorkspaceMember as WorkspaceMember,
    type WorkspaceMemberRetrieveResponse as WorkspaceMemberRetrieveResponse,
    type WorkspaceMemberListResponse as WorkspaceMemberListResponse,
  };
}
