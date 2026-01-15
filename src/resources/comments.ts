// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Comments extends APIResource {
  /**
   * Creates a new comment related to an existing thread, record or entry.
   *
   * To create comments on records, you will need the `object_configuration:read` and
   * `record_permission:read` scopes.
   *
   * To create comments on list entries, you will need the `list_configuration:read`
   * and `list_entry:read` scopes.
   *
   * Required scopes: `comment:read-write`.
   */
  create(body: CommentCreateParams, options?: RequestOptions): APIPromise<CommentCreateResponse> {
    return this._client.post('/v2/comments', { body, ...options });
  }

  /**
   * Get a single comment by ID.
   *
   * To view comments on records, you will need the `object_configuration:read` and
   * `record_permission:read` scopes.
   *
   * To view comments on list entries, you will need the `list_configuration:read`
   * and `list_entry:read` scopes.
   *
   * Required scopes: `comment:read`.
   */
  retrieve(commentID: string, options?: RequestOptions): APIPromise<CommentRetrieveResponse> {
    return this._client.get(path`/v2/comments/${commentID}`, options);
  }

  /**
   * Deletes a comment by ID. If deleting a comment at the head of a thread, all
   * messages in the thread are also deleted.
   *
   * Required scopes: `comment:read-write`.
   */
  delete(commentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v2/comments/${commentID}`, options);
  }
}

export interface Comment {
  id: Comment.ID;

  /**
   * Who wrote this comment. Note that the API provides the ability for API tokens to
   * write comments on behalf of other actors.
   */
  author: Comment.Author;

  /**
   * A plaintext representation of the content of the comment. References to
   * workspace members are cast into email addresses, all other stylistic elements
   * are removed.
   */
  content_plaintext: string;

  /**
   * When the note was created.
   */
  created_at: string;

  /**
   * The entry the comment belongs to, `null` for comments on records.
   */
  entry: Comment.Entry | null;

  /**
   * The record the comment belongs to.
   */
  record: Comment.Record;

  /**
   * Whether the comment is resolved.
   */
  resolved_at: string | null;

  /**
   * The actor that resolved this comment.
   */
  resolved_by: Comment.ResolvedBy;

  /**
   * The ID of the thread the comment belongs to.
   */
  thread_id: string;
}

export namespace Comment {
  export interface ID {
    /**
     * The ID of the comment.
     */
    comment_id: string;

    /**
     * The ID of the workspace the comment belongs to.
     */
    workspace_id: string;
  }

  /**
   * Who wrote this comment. Note that the API provides the ability for API tokens to
   * write comments on behalf of other actors.
   */
  export interface Author {
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
   * The entry the comment belongs to, `null` for comments on records.
   */
  export interface Entry {
    /**
     * The ID of the entry the comment belongs to.
     */
    entry_id: string;

    /**
     * The ID of the list the entry belongs to.
     */
    list_id: string;
  }

  /**
   * The record the comment belongs to.
   */
  export interface Record {
    /**
     * The ID of the object the record belongs to.
     */
    object_id: string;

    /**
     * The ID of the record the comment belongs to.
     */
    record_id: string;
  }

  /**
   * The actor that resolved this comment.
   */
  export interface ResolvedBy {
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

/**
 * Success
 */
export interface CommentCreateResponse {
  data: Comment;
}

/**
 * Success
 */
export interface CommentRetrieveResponse {
  data: Comment;
}

/**
 * Success
 */
export type CommentDeleteResponse = unknown;

export interface CommentCreateParams {
  data:
    | CommentCreateParams.UnionMember0
    | CommentCreateParams.UnionMember1
    | CommentCreateParams.UnionMember2;
}

export namespace CommentCreateParams {
  export interface UnionMember0 {
    /**
     * The workspace member who wrote this comment. Note that other types of actors are
     * not currently supported.
     */
    author: UnionMember0.Author;

    /**
     * The content of the comment itself. Workspace members can be mentioned using
     * their email address, otherwise email addresses will be presented to users as
     * clickable mailto links.
     */
    content: string;

    /**
     * The format that the comment content is provided in. The `plaintext` format uses
     * the line feed character `\n` to create new lines within the note content. Rich
     * text formatting and links are not supported.
     */
    format: 'plaintext';

    /**
     * If responding to an existing thread, this would be the ID of that thread.
     */
    thread_id: string;

    /**
     * `created_at` will default to the current time. However, if you wish to backdate
     * a comment for migration or other purposes, you can override with a custom
     * `created_at` value. Note that dates before 1970 or in the future are not
     * allowed.
     */
    created_at?: string;
  }

  export namespace UnionMember0 {
    /**
     * The workspace member who wrote this comment. Note that other types of actors are
     * not currently supported.
     */
    export interface Author {
      id: string;

      type: 'workspace-member';
    }
  }

  export interface UnionMember1 {
    /**
     * The workspace member who wrote this comment. Note that other types of actors are
     * not currently supported.
     */
    author: UnionMember1.Author;

    /**
     * The content of the comment itself. Workspace members can be mentioned using
     * their email address, otherwise email addresses will be presented to users as
     * clickable mailto links.
     */
    content: string;

    /**
     * The format that the comment content is provided in. The `plaintext` format uses
     * the line feed character `\n` to create new lines within the note content. Rich
     * text formatting and links are not supported.
     */
    format: 'plaintext';

    record: UnionMember1.Record;

    /**
     * `created_at` will default to the current time. However, if you wish to backdate
     * a comment for migration or other purposes, you can override with a custom
     * `created_at` value. Note that dates before 1970 or in the future are not
     * allowed.
     */
    created_at?: string;
  }

  export namespace UnionMember1 {
    /**
     * The workspace member who wrote this comment. Note that other types of actors are
     * not currently supported.
     */
    export interface Author {
      id: string;

      type: 'workspace-member';
    }

    export interface Record {
      /**
       * If creating a top-level comment on a record, this is the slug or ID of that
       * object.
       */
      object: string;

      /**
       * If creating a top-level comment on a record, this is the ID of that record.
       */
      record_id: string;
    }
  }

  export interface UnionMember2 {
    /**
     * The workspace member who wrote this comment. Note that other types of actors are
     * not currently supported.
     */
    author: UnionMember2.Author;

    /**
     * The content of the comment itself. Workspace members can be mentioned using
     * their email address, otherwise email addresses will be presented to users as
     * clickable mailto links.
     */
    content: string;

    entry: UnionMember2.Entry;

    /**
     * The format that the comment content is provided in. The `plaintext` format uses
     * the line feed character `\n` to create new lines within the note content. Rich
     * text formatting and links are not supported.
     */
    format: 'plaintext';

    /**
     * `created_at` will default to the current time. However, if you wish to backdate
     * a comment for migration or other purposes, you can override with a custom
     * `created_at` value. Note that dates before 1970 or in the future are not
     * allowed.
     */
    created_at?: string;
  }

  export namespace UnionMember2 {
    /**
     * The workspace member who wrote this comment. Note that other types of actors are
     * not currently supported.
     */
    export interface Author {
      id: string;

      type: 'workspace-member';
    }

    export interface Entry {
      /**
       * If creating a top-level comment on a list entry, this is the ID of that entry.
       */
      entry_id: string;

      /**
       * If creating a top-level comment on a list entry, this is the slug or ID of that
       * list.
       */
      list: string;
    }
  }
}

export declare namespace Comments {
  export {
    type Comment as Comment,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentRetrieveResponse as CommentRetrieveResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentCreateParams as CommentCreateParams,
  };
}
