// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Attio } from '../client';

export abstract class APIResource {
  protected _client: Attio;

  constructor(client: Attio) {
    this._client = client;
  }
}
