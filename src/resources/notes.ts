// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Creates a new note for a given record.
   *
   * Required scopes: `note:read-write`, `object_configuration:read`,
   * `record_permission:read`.
   */
  create(body: NoteCreateParams, options?: RequestOptions): APIPromise<NoteCreateResponse> {
    return this._client.post('/v2/notes', { body, ...options });
  }

  /**
   * Get a single note by ID.
   *
   * Required scopes: `note:read`, `object_configuration:read`,
   * `record_permission:read`.
   */
  retrieve(noteID: string, options?: RequestOptions): APIPromise<NoteRetrieveResponse> {
    return this._client.get(path`/v2/notes/${noteID}`, options);
  }

  /**
   * List notes for all records or for a specific record.
   *
   * Required scopes: `note:read`, `object_configuration:read`,
   * `record_permission:read`.
   */
  list(
    query: NoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NoteListResponse> {
    return this._client.get('/v2/notes', { query, ...options });
  }

  /**
   * Delete a single note by ID.
   *
   * Required scopes: `note:read-write`.
   */
  delete(noteID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v2/notes/${noteID}`, options);
  }
}

export interface Note {
  id: Note.ID;

  /**
   * The markdown representation of the note content. Supports a subset of markdown
   * features including:
   *
   * - Headings (levels 1-3 only with `#`, `##`, `###`)
   * - Unordered lists (`-`, `*`, `+`)
   * - Ordered lists (`1.`, `2.`, etc.)
   * - Text styling: `**bold**`, `*italic*`, `~~strikethrough~~`, `==highlighted==`
   * - Links: `[link text](https://example.com)`
   *
   * Note that note images are not returned as part of the markdown API
   * representation.
   */
  content_markdown: string;

  /**
   * The plaintext representation of the note content. The line feed character `\n`
   * represents new lines within the note content.
   */
  content_plaintext: string;

  /**
   * When the note was created.
   */
  created_at: string;

  /**
   * The actor that created this note.
   */
  created_by_actor: Note.CreatedByActor;

  /**
   * The ID of the meeting associated with this note, or null if no meeting is
   * associated.
   */
  meeting_id: string | null;

  /**
   * The slug or ID of the parent object the note belongs to.
   */
  parent_object: string;

  /**
   * The ID of the parent record the note belongs to.
   */
  parent_record_id: string;

  /**
   * An array of records or workspace members that are @-tagged in the note content.
   */
  tags: Array<Note.UnionMember0 | Note.UnionMember1>;

  /**
   * The note title. The title is plaintext only and has no formatting.
   */
  title: string;
}

export namespace Note {
  export interface ID {
    /**
     * The ID of the note.
     */
    note_id: string;

    /**
     * The ID of the workspace the note belongs to.
     */
    workspace_id: string;
  }

  /**
   * The actor that created this note.
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

  export interface UnionMember0 {
    /**
     * The type of entity tagged in the note. Can be either 'workspace-member' or
     * 'record'
     */
    type: 'workspace-member';

    /**
     * The ID of the workspace member that is tagged in the note.
     */
    workspace_member_id: string;
  }

  export interface UnionMember1 {
    /**
     * The slug or ID of the object that the tagged record belongs to.
     */
    object: string;

    /**
     * The ID of the record that is tagged in the note.
     */
    record_id: string;

    /**
     * The type of entity tagged in the note. Can be either 'workspace-member' or
     * 'record'
     */
    type: 'record';
  }
}

/**
 * Success
 */
export interface NoteCreateResponse {
  data: Note;
}

/**
 * Success
 */
export interface NoteRetrieveResponse {
  data: Note;
}

/**
 * Success
 */
export interface NoteListResponse {
  data: Array<Note>;
}

/**
 * Success
 */
export type NoteDeleteResponse = unknown;

export interface NoteCreateParams {
  data: NoteCreateParams.Data;
}

export namespace NoteCreateParams {
  export interface Data {
    /**
     * The main content of the note, formatted according to the value provided in the
     * `format` field. Use `\n` for line breaks in `plaintext`. For `markdown`, utilize
     * the supported syntax elements to structure and style your note.
     */
    content: string;

    /**
     * Specify the format for the note's content. Choose from:
     *
     * - `plaintext`: Standard text format where `\n` signifies a new line.
     * - `markdown`: Enables rich text formatting using a subset of Markdown syntax:
     *
     *   - **Headings**: Levels 1-3 (`#`, `##`, `###`).
     *   - **Lists**: Unordered (`-`, `*`, `+`) and ordered (`1.`, `2.`).
     *   - **Text styles**: Bold (`**bold**` or `__bold__`), italic (`*italic*` or
     *     `_italic_`), strikethrough (`~~strikethrough~~`), and highlight
     *     (`==highlighted==`).
     *   - **Links**: Standard Markdown links (`[link text](https://example.com)`).
     *
     *   _Note: While the Attio interface supports image embeds, they cannot currently
     *   be added or retrieved via the API's markdown format._
     */
    format: 'plaintext' | 'markdown';

    /**
     * The ID or slug of the parent object the note belongs to.
     */
    parent_object: string;

    /**
     * The ID of the parent record the note belongs to.
     */
    parent_record_id: string;

    /**
     * The note title. The title is plaintext only and has no formatting.
     */
    title: string;

    /**
     * `created_at` will default to the current time. However, if you wish to backdate
     * a note for migration or other purposes, you can override with a custom
     * `created_at` value. Note that dates before 1970 or in the future are not
     * allowed.
     */
    created_at?: string;

    /**
     * An optional ID to associate this note with a meeting. If provided, the meeting
     * must exist. Use `null` to explicitly set no meeting association.
     */
    meeting_id?: string | null;
  }
}

export interface NoteListParams {
  /**
   * The maximum number of results to return. The default is `10` and the maximum is
   * `50`. See the [full guide to pagination here](/rest-api/guides/pagination).
   */
  limit?: number;

  /**
   * The number of results to skip over before returning. The default is `0`. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  offset?: number;

  /**
   * The slug or ID of the parent object the notes belong to.
   */
  parent_object?: string;

  /**
   * The ID of the parent record the notes belong to.
   */
  parent_record_id?: string;
}

export declare namespace Notes {
  export {
    type Note as Note,
    type NoteCreateResponse as NoteCreateResponse,
    type NoteRetrieveResponse as NoteRetrieveResponse,
    type NoteListResponse as NoteListResponse,
    type NoteDeleteResponse as NoteDeleteResponse,
    type NoteCreateParams as NoteCreateParams,
    type NoteListParams as NoteListParams,
  };
}
