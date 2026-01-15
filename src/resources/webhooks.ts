// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Create a webhook and associated subscriptions.
   *
   * Required scopes: `webhook:read-write`.
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/v2/webhooks', { body, ...options });
  }

  /**
   * Get a single webhook.
   *
   * Required scopes: `webhook:read`.
   */
  retrieve(webhookID: string, options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get(path`/v2/webhooks/${webhookID}`, options);
  }

  /**
   * Update a webhook and associated subscriptions.
   *
   * Required scopes: `webhook:read-write`.
   */
  update(
    webhookID: string,
    body: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    return this._client.patch(path`/v2/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Get all of the webhooks in your workspace.
   *
   * Required scopes: `webhook:read`.
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/v2/webhooks', { query, ...options });
  }

  /**
   * Delete a webhook by ID.
   *
   * Required scopes: `webhook:read-write`.
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v2/webhooks/${webhookID}`, options);
  }
}

/**
 * Success
 */
export interface WebhookCreateResponse {
  data: WebhookCreateResponse.Data;
}

export namespace WebhookCreateResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When the webhook was created.
     */
    created_at: string;

    /**
     * The key which is used to sign the webhook events. This is only shown when
     * setting up the webhook initially.
     */
    secret: string;

    /**
     * The state of the webhook. Webhooks marked as active and degraded will receive
     * events, inactive ones will not. If a webhook remains in the degraded state for 7
     * days, it will be marked inactive.
     */
    status: 'active' | 'degraded' | 'inactive';

    /**
     * One or more events the webhook is subscribed to.
     */
    subscriptions: Array<Data.Subscription>;

    /**
     * URL where the webhook events will be delivered to.
     */
    target_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The ID of the webhook.
       */
      webhook_id: string;

      /**
       * The ID of the workspace the webhook belongs to.
       */
      workspace_id: string;
    }

    export interface Subscription {
      /**
       * Type of event the webhook is subscribed to.
       */
      event_type:
        | 'call-recording.created'
        | 'comment.created'
        | 'comment.resolved'
        | 'comment.unresolved'
        | 'comment.deleted'
        | 'list.created'
        | 'list.updated'
        | 'list.deleted'
        | 'list-attribute.created'
        | 'list-attribute.updated'
        | 'list-entry.created'
        | 'list-entry.updated'
        | 'list-entry.deleted'
        | 'object-attribute.created'
        | 'object-attribute.updated'
        | 'note.created'
        | 'note-content.updated'
        | 'note.updated'
        | 'note.deleted'
        | 'record.created'
        | 'record.merged'
        | 'record.updated'
        | 'record.deleted'
        | 'task.created'
        | 'task.updated'
        | 'task.deleted'
        | 'workspace-member.created';

      /**
       * Filters to determine whether the webhook event should be sent. If null, the
       * filter always passes.
       */
      filter: Subscription.Or | Subscription.And | null;
    }

    export namespace Subscription {
      export interface Or {
        $or: Array<Or.UnionMember0 | Or.UnionMember1>;
      }

      export namespace Or {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }

      export interface And {
        $and: Array<And.UnionMember0 | And.UnionMember1>;
      }

      export namespace And {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }
    }
  }
}

/**
 * Success
 */
export interface WebhookRetrieveResponse {
  data: WebhookRetrieveResponse.Data;
}

export namespace WebhookRetrieveResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When the webhook was created.
     */
    created_at: string;

    /**
     * The state of the webhook. Webhooks marked as active and degraded will receive
     * events, inactive ones will not. If a webhook remains in the degraded state for 7
     * days, it will be marked inactive.
     */
    status: 'active' | 'degraded' | 'inactive';

    /**
     * One or more events the webhook is subscribed to.
     */
    subscriptions: Array<Data.Subscription>;

    /**
     * URL where the webhook events will be delivered to.
     */
    target_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The ID of the webhook.
       */
      webhook_id: string;

      /**
       * The ID of the workspace the webhook belongs to.
       */
      workspace_id: string;
    }

    export interface Subscription {
      /**
       * Type of event the webhook is subscribed to.
       */
      event_type:
        | 'call-recording.created'
        | 'comment.created'
        | 'comment.resolved'
        | 'comment.unresolved'
        | 'comment.deleted'
        | 'list.created'
        | 'list.updated'
        | 'list.deleted'
        | 'list-attribute.created'
        | 'list-attribute.updated'
        | 'list-entry.created'
        | 'list-entry.updated'
        | 'list-entry.deleted'
        | 'object-attribute.created'
        | 'object-attribute.updated'
        | 'note.created'
        | 'note-content.updated'
        | 'note.updated'
        | 'note.deleted'
        | 'record.created'
        | 'record.merged'
        | 'record.updated'
        | 'record.deleted'
        | 'task.created'
        | 'task.updated'
        | 'task.deleted'
        | 'workspace-member.created';

      /**
       * Filters to determine whether the webhook event should be sent. If null, the
       * filter always passes.
       */
      filter: Subscription.Or | Subscription.And | null;
    }

    export namespace Subscription {
      export interface Or {
        $or: Array<Or.UnionMember0 | Or.UnionMember1>;
      }

      export namespace Or {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }

      export interface And {
        $and: Array<And.UnionMember0 | And.UnionMember1>;
      }

      export namespace And {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }
    }
  }
}

/**
 * Success
 */
export interface WebhookUpdateResponse {
  data: WebhookUpdateResponse.Data;
}

export namespace WebhookUpdateResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When the webhook was created.
     */
    created_at: string;

    /**
     * The state of the webhook. Webhooks marked as active and degraded will receive
     * events, inactive ones will not. If a webhook remains in the degraded state for 7
     * days, it will be marked inactive.
     */
    status: 'active' | 'degraded' | 'inactive';

    /**
     * One or more events the webhook is subscribed to.
     */
    subscriptions: Array<Data.Subscription>;

    /**
     * URL where the webhook events will be delivered to.
     */
    target_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The ID of the webhook.
       */
      webhook_id: string;

      /**
       * The ID of the workspace the webhook belongs to.
       */
      workspace_id: string;
    }

    export interface Subscription {
      /**
       * Type of event the webhook is subscribed to.
       */
      event_type:
        | 'call-recording.created'
        | 'comment.created'
        | 'comment.resolved'
        | 'comment.unresolved'
        | 'comment.deleted'
        | 'list.created'
        | 'list.updated'
        | 'list.deleted'
        | 'list-attribute.created'
        | 'list-attribute.updated'
        | 'list-entry.created'
        | 'list-entry.updated'
        | 'list-entry.deleted'
        | 'object-attribute.created'
        | 'object-attribute.updated'
        | 'note.created'
        | 'note-content.updated'
        | 'note.updated'
        | 'note.deleted'
        | 'record.created'
        | 'record.merged'
        | 'record.updated'
        | 'record.deleted'
        | 'task.created'
        | 'task.updated'
        | 'task.deleted'
        | 'workspace-member.created';

      /**
       * Filters to determine whether the webhook event should be sent. If null, the
       * filter always passes.
       */
      filter: Subscription.Or | Subscription.And | null;
    }

    export namespace Subscription {
      export interface Or {
        $or: Array<Or.UnionMember0 | Or.UnionMember1>;
      }

      export namespace Or {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }

      export interface And {
        $and: Array<And.UnionMember0 | And.UnionMember1>;
      }

      export namespace And {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }
    }
  }
}

/**
 * Success
 */
export interface WebhookListResponse {
  data: Array<WebhookListResponse.Data>;
}

export namespace WebhookListResponse {
  export interface Data {
    id: Data.ID;

    /**
     * When the webhook was created.
     */
    created_at: string;

    /**
     * The state of the webhook. Webhooks marked as active and degraded will receive
     * events, inactive ones will not. If a webhook remains in the degraded state for 7
     * days, it will be marked inactive.
     */
    status: 'active' | 'degraded' | 'inactive';

    /**
     * One or more events the webhook is subscribed to.
     */
    subscriptions: Array<Data.Subscription>;

    /**
     * URL where the webhook events will be delivered to.
     */
    target_url: string;
  }

  export namespace Data {
    export interface ID {
      /**
       * The ID of the webhook.
       */
      webhook_id: string;

      /**
       * The ID of the workspace the webhook belongs to.
       */
      workspace_id: string;
    }

    export interface Subscription {
      /**
       * Type of event the webhook is subscribed to.
       */
      event_type:
        | 'call-recording.created'
        | 'comment.created'
        | 'comment.resolved'
        | 'comment.unresolved'
        | 'comment.deleted'
        | 'list.created'
        | 'list.updated'
        | 'list.deleted'
        | 'list-attribute.created'
        | 'list-attribute.updated'
        | 'list-entry.created'
        | 'list-entry.updated'
        | 'list-entry.deleted'
        | 'object-attribute.created'
        | 'object-attribute.updated'
        | 'note.created'
        | 'note-content.updated'
        | 'note.updated'
        | 'note.deleted'
        | 'record.created'
        | 'record.merged'
        | 'record.updated'
        | 'record.deleted'
        | 'task.created'
        | 'task.updated'
        | 'task.deleted'
        | 'workspace-member.created';

      /**
       * Filters to determine whether the webhook event should be sent. If null, the
       * filter always passes.
       */
      filter: Subscription.Or | Subscription.And | null;
    }

    export namespace Subscription {
      export interface Or {
        $or: Array<Or.UnionMember0 | Or.UnionMember1>;
      }

      export namespace Or {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }

      export interface And {
        $and: Array<And.UnionMember0 | And.UnionMember1>;
      }

      export namespace And {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }
    }
  }
}

/**
 * Success
 */
export type WebhookDeleteResponse = unknown;

export interface WebhookCreateParams {
  data: WebhookCreateParams.Data;
}

export namespace WebhookCreateParams {
  export interface Data {
    /**
     * One or more events the webhook is subscribed to.
     */
    subscriptions: Array<Data.Subscription>;

    /**
     * URL where the webhook events will be delivered to.
     */
    target_url: string;
  }

  export namespace Data {
    export interface Subscription {
      /**
       * Type of event the webhook is subscribed to.
       */
      event_type:
        | 'call-recording.created'
        | 'comment.created'
        | 'comment.resolved'
        | 'comment.unresolved'
        | 'comment.deleted'
        | 'list.created'
        | 'list.updated'
        | 'list.deleted'
        | 'list-attribute.created'
        | 'list-attribute.updated'
        | 'list-entry.created'
        | 'list-entry.updated'
        | 'list-entry.deleted'
        | 'object-attribute.created'
        | 'object-attribute.updated'
        | 'note.created'
        | 'note-content.updated'
        | 'note.updated'
        | 'note.deleted'
        | 'record.created'
        | 'record.merged'
        | 'record.updated'
        | 'record.deleted'
        | 'task.created'
        | 'task.updated'
        | 'task.deleted'
        | 'workspace-member.created';

      /**
       * Filters to determine whether the webhook event should be sent. If null, the
       * filter always passes.
       */
      filter: Subscription.Or | Subscription.And | null;
    }

    export namespace Subscription {
      export interface Or {
        $or: Array<Or.UnionMember0 | Or.UnionMember1>;
      }

      export namespace Or {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }

      export interface And {
        $and: Array<And.UnionMember0 | And.UnionMember1>;
      }

      export namespace And {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }
    }
  }
}

export interface WebhookUpdateParams {
  data: WebhookUpdateParams.Data;
}

export namespace WebhookUpdateParams {
  export interface Data {
    /**
     * One or more events the webhook is subscribed to.
     */
    subscriptions?: Array<Data.Subscription>;

    /**
     * URL where the webhook events will be delivered to.
     */
    target_url?: string;
  }

  export namespace Data {
    export interface Subscription {
      /**
       * Type of event the webhook is subscribed to.
       */
      event_type:
        | 'call-recording.created'
        | 'comment.created'
        | 'comment.resolved'
        | 'comment.unresolved'
        | 'comment.deleted'
        | 'list.created'
        | 'list.updated'
        | 'list.deleted'
        | 'list-attribute.created'
        | 'list-attribute.updated'
        | 'list-entry.created'
        | 'list-entry.updated'
        | 'list-entry.deleted'
        | 'object-attribute.created'
        | 'object-attribute.updated'
        | 'note.created'
        | 'note-content.updated'
        | 'note.updated'
        | 'note.deleted'
        | 'record.created'
        | 'record.merged'
        | 'record.updated'
        | 'record.deleted'
        | 'task.created'
        | 'task.updated'
        | 'task.deleted'
        | 'workspace-member.created';

      /**
       * Filters to determine whether the webhook event should be sent. If null, the
       * filter always passes.
       */
      filter: Subscription.Or | Subscription.And | null;
    }

    export namespace Subscription {
      export interface Or {
        $or: Array<Or.UnionMember0 | Or.UnionMember1>;
      }

      export namespace Or {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }

      export interface And {
        $and: Array<And.UnionMember0 | And.UnionMember1>;
      }

      export namespace And {
        export interface UnionMember0 {
          field: string;

          operator: 'equals';

          value: string;
        }

        export interface UnionMember1 {
          field: string;

          operator: 'not_equals';

          value: string;
        }
      }
    }
  }
}

export interface WebhookListParams {
  /**
   * The maximum number of results to return, between 10 and 100, defaults to 10. See
   * the [full guide to pagination here](/rest-api/guides/pagination).
   */
  limit?: number;

  /**
   * The number of results to skip over before returning, defaults to 0. See the
   * [full guide to pagination here](/rest-api/guides/pagination).
   */
  offset?: number;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
