# Objects

Types:

- <code><a href="./src/resources/objects/objects.ts">Object</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectCreateResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectUpdateResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectListResponse</a></code>

Methods:

- <code title="post /v2/objects">client.objects.<a href="./src/resources/objects/objects.ts">create</a>({ ...params }) -> ObjectCreateResponse</code>
- <code title="get /v2/objects/{object}">client.objects.<a href="./src/resources/objects/objects.ts">retrieve</a>(object) -> ObjectRetrieveResponse</code>
- <code title="patch /v2/objects/{object}">client.objects.<a href="./src/resources/objects/objects.ts">update</a>(object, { ...params }) -> ObjectUpdateResponse</code>
- <code title="get /v2/objects">client.objects.<a href="./src/resources/objects/objects.ts">list</a>() -> ObjectListResponse</code>

## Records

Types:

- <code><a href="./src/resources/objects/records/records.ts">RecordCreateResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordRetrieveResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordListResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordDeleteResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordAssertResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordListEntriesResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordSearchResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordUpdateAppendResponse</a></code>
- <code><a href="./src/resources/objects/records/records.ts">RecordUpdateOverwriteResponse</a></code>

Methods:

- <code title="post /v2/objects/{object}/records">client.objects.records.<a href="./src/resources/objects/records/records.ts">create</a>(object, { ...params }) -> RecordCreateResponse</code>
- <code title="get /v2/objects/{object}/records/{record_id}">client.objects.records.<a href="./src/resources/objects/records/records.ts">retrieve</a>(recordID, { ...params }) -> RecordRetrieveResponse</code>
- <code title="post /v2/objects/{object}/records/query">client.objects.records.<a href="./src/resources/objects/records/records.ts">list</a>(object, { ...params }) -> RecordListResponse</code>
- <code title="delete /v2/objects/{object}/records/{record_id}">client.objects.records.<a href="./src/resources/objects/records/records.ts">delete</a>(recordID, { ...params }) -> unknown</code>
- <code title="put /v2/objects/{object}/records">client.objects.records.<a href="./src/resources/objects/records/records.ts">assert</a>(object, { ...params }) -> RecordAssertResponse</code>
- <code title="get /v2/objects/{object}/records/{record_id}/entries">client.objects.records.<a href="./src/resources/objects/records/records.ts">listEntries</a>(recordID, { ...params }) -> RecordListEntriesResponse</code>
- <code title="post /v2/objects/records/search">client.objects.records.<a href="./src/resources/objects/records/records.ts">search</a>({ ...params }) -> RecordSearchResponse</code>
- <code title="patch /v2/objects/{object}/records/{record_id}">client.objects.records.<a href="./src/resources/objects/records/records.ts">updateAppend</a>(recordID, { ...params }) -> RecordUpdateAppendResponse</code>
- <code title="put /v2/objects/{object}/records/{record_id}">client.objects.records.<a href="./src/resources/objects/records/records.ts">updateOverwrite</a>(recordID, { ...params }) -> RecordUpdateOverwriteResponse</code>

### Attributes

Types:

- <code><a href="./src/resources/objects/records/attributes.ts">AttributeListValuesResponse</a></code>

Methods:

- <code title="get /v2/objects/{object}/records/{record_id}/attributes/{attribute}/values">client.objects.records.attributes.<a href="./src/resources/objects/records/attributes.ts">listValues</a>(attribute, { ...params }) -> AttributeListValuesResponse</code>

# Attributes

Types:

- <code><a href="./src/resources/attributes/attributes.ts">Attribute</a></code>
- <code><a href="./src/resources/attributes/attributes.ts">InputValue</a></code>
- <code><a href="./src/resources/attributes/attributes.ts">AttributeCreateResponse</a></code>
- <code><a href="./src/resources/attributes/attributes.ts">AttributeRetrieveResponse</a></code>
- <code><a href="./src/resources/attributes/attributes.ts">AttributeUpdateResponse</a></code>
- <code><a href="./src/resources/attributes/attributes.ts">AttributeListResponse</a></code>

Methods:

- <code title="post /v2/{target}/{identifier}/attributes">client.attributes.<a href="./src/resources/attributes/attributes.ts">create</a>(identifier, { ...params }) -> AttributeCreateResponse</code>
- <code title="get /v2/{target}/{identifier}/attributes/{attribute}">client.attributes.<a href="./src/resources/attributes/attributes.ts">retrieve</a>(attribute, { ...params }) -> AttributeRetrieveResponse</code>
- <code title="patch /v2/{target}/{identifier}/attributes/{attribute}">client.attributes.<a href="./src/resources/attributes/attributes.ts">update</a>(attribute, { ...params }) -> AttributeUpdateResponse</code>
- <code title="get /v2/{target}/{identifier}/attributes">client.attributes.<a href="./src/resources/attributes/attributes.ts">list</a>(identifier, { ...params }) -> AttributeListResponse</code>

## Options

Types:

- <code><a href="./src/resources/attributes/options.ts">SelectOption</a></code>
- <code><a href="./src/resources/attributes/options.ts">OptionCreateResponse</a></code>
- <code><a href="./src/resources/attributes/options.ts">OptionUpdateResponse</a></code>
- <code><a href="./src/resources/attributes/options.ts">OptionListResponse</a></code>

Methods:

- <code title="post /v2/{target}/{identifier}/attributes/{attribute}/options">client.attributes.options.<a href="./src/resources/attributes/options.ts">create</a>(attribute, { ...params }) -> OptionCreateResponse</code>
- <code title="patch /v2/{target}/{identifier}/attributes/{attribute}/options/{option}">client.attributes.options.<a href="./src/resources/attributes/options.ts">update</a>(option, { ...params }) -> OptionUpdateResponse</code>
- <code title="get /v2/{target}/{identifier}/attributes/{attribute}/options">client.attributes.options.<a href="./src/resources/attributes/options.ts">list</a>(attribute, { ...params }) -> OptionListResponse</code>

## Statuses

Types:

- <code><a href="./src/resources/attributes/statuses.ts">Status</a></code>
- <code><a href="./src/resources/attributes/statuses.ts">StatusCreateResponse</a></code>
- <code><a href="./src/resources/attributes/statuses.ts">StatusUpdateResponse</a></code>
- <code><a href="./src/resources/attributes/statuses.ts">StatusListResponse</a></code>

Methods:

- <code title="post /v2/{target}/{identifier}/attributes/{attribute}/statuses">client.attributes.statuses.<a href="./src/resources/attributes/statuses.ts">create</a>(attribute, { ...params }) -> StatusCreateResponse</code>
- <code title="patch /v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}">client.attributes.statuses.<a href="./src/resources/attributes/statuses.ts">update</a>(status, { ...params }) -> StatusUpdateResponse</code>
- <code title="get /v2/{target}/{identifier}/attributes/{attribute}/statuses">client.attributes.statuses.<a href="./src/resources/attributes/statuses.ts">list</a>(attribute, { ...params }) -> StatusListResponse</code>

# Lists

Types:

- <code><a href="./src/resources/lists/lists.ts">List</a></code>
- <code><a href="./src/resources/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/lists/lists.ts">ListRetrieveResponse</a></code>
- <code><a href="./src/resources/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/lists/lists.ts">ListListResponse</a></code>

Methods:

- <code title="post /v2/lists">client.lists.<a href="./src/resources/lists/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="get /v2/lists/{list}">client.lists.<a href="./src/resources/lists/lists.ts">retrieve</a>(list) -> ListRetrieveResponse</code>
- <code title="patch /v2/lists/{list}">client.lists.<a href="./src/resources/lists/lists.ts">update</a>(list, { ...params }) -> ListUpdateResponse</code>
- <code title="get /v2/lists">client.lists.<a href="./src/resources/lists/lists.ts">list</a>() -> ListListResponse</code>

## Entries

Types:

- <code><a href="./src/resources/lists/entries/entries.ts">EntryCreateResponse</a></code>
- <code><a href="./src/resources/lists/entries/entries.ts">EntryRetrieveResponse</a></code>
- <code><a href="./src/resources/lists/entries/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/lists/entries/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/lists/entries/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/lists/entries/entries.ts">EntryAssertResponse</a></code>
- <code><a href="./src/resources/lists/entries/entries.ts">EntryOverwriteResponse</a></code>

Methods:

- <code title="post /v2/lists/{list}/entries">client.lists.entries.<a href="./src/resources/lists/entries/entries.ts">create</a>(list, { ...params }) -> EntryCreateResponse</code>
- <code title="get /v2/lists/{list}/entries/{entry_id}">client.lists.entries.<a href="./src/resources/lists/entries/entries.ts">retrieve</a>(entryID, { ...params }) -> EntryRetrieveResponse</code>
- <code title="patch /v2/lists/{list}/entries/{entry_id}">client.lists.entries.<a href="./src/resources/lists/entries/entries.ts">update</a>(entryID, { ...params }) -> EntryUpdateResponse</code>
- <code title="post /v2/lists/{list}/entries/query">client.lists.entries.<a href="./src/resources/lists/entries/entries.ts">list</a>(list, { ...params }) -> EntryListResponse</code>
- <code title="delete /v2/lists/{list}/entries/{entry_id}">client.lists.entries.<a href="./src/resources/lists/entries/entries.ts">delete</a>(entryID, { ...params }) -> unknown</code>
- <code title="put /v2/lists/{list}/entries">client.lists.entries.<a href="./src/resources/lists/entries/entries.ts">assert</a>(list, { ...params }) -> EntryAssertResponse</code>
- <code title="put /v2/lists/{list}/entries/{entry_id}">client.lists.entries.<a href="./src/resources/lists/entries/entries.ts">overwrite</a>(entryID, { ...params }) -> EntryOverwriteResponse</code>

### Attributes

Types:

- <code><a href="./src/resources/lists/entries/attributes.ts">AttributeListValuesResponse</a></code>

Methods:

- <code title="get /v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values">client.lists.entries.attributes.<a href="./src/resources/lists/entries/attributes.ts">listValues</a>(attribute, { ...params }) -> AttributeListValuesResponse</code>

# WorkspaceMembers

Types:

- <code><a href="./src/resources/workspace-members.ts">WorkspaceMember</a></code>
- <code><a href="./src/resources/workspace-members.ts">WorkspaceMemberRetrieveResponse</a></code>
- <code><a href="./src/resources/workspace-members.ts">WorkspaceMemberListResponse</a></code>

Methods:

- <code title="get /v2/workspace_members/{workspace_member_id}">client.workspaceMembers.<a href="./src/resources/workspace-members.ts">retrieve</a>(workspaceMemberID) -> WorkspaceMemberRetrieveResponse</code>
- <code title="get /v2/workspace_members">client.workspaceMembers.<a href="./src/resources/workspace-members.ts">list</a>() -> WorkspaceMemberListResponse</code>

# Notes

Types:

- <code><a href="./src/resources/notes.ts">Note</a></code>
- <code><a href="./src/resources/notes.ts">NoteCreateResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteRetrieveResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteListResponse</a></code>
- <code><a href="./src/resources/notes.ts">NoteDeleteResponse</a></code>

Methods:

- <code title="post /v2/notes">client.notes.<a href="./src/resources/notes.ts">create</a>({ ...params }) -> NoteCreateResponse</code>
- <code title="get /v2/notes/{note_id}">client.notes.<a href="./src/resources/notes.ts">retrieve</a>(noteID) -> NoteRetrieveResponse</code>
- <code title="get /v2/notes">client.notes.<a href="./src/resources/notes.ts">list</a>({ ...params }) -> NoteListResponse</code>
- <code title="delete /v2/notes/{note_id}">client.notes.<a href="./src/resources/notes.ts">delete</a>(noteID) -> unknown</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">Task</a></code>
- <code><a href="./src/resources/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskRetrieveResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskUpdateResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>
- <code><a href="./src/resources/tasks.ts">TaskDeleteResponse</a></code>

Methods:

- <code title="post /v2/tasks">client.tasks.<a href="./src/resources/tasks.ts">create</a>({ ...params }) -> TaskCreateResponse</code>
- <code title="get /v2/tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(taskID) -> TaskRetrieveResponse</code>
- <code title="patch /v2/tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">update</a>(taskID, { ...params }) -> TaskUpdateResponse</code>
- <code title="get /v2/tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>
- <code title="delete /v2/tasks/{task_id}">client.tasks.<a href="./src/resources/tasks.ts">delete</a>(taskID) -> unknown</code>

# Threads

Types:

- <code><a href="./src/resources/threads.ts">Thread</a></code>
- <code><a href="./src/resources/threads.ts">ThreadRetrieveResponse</a></code>
- <code><a href="./src/resources/threads.ts">ThreadListResponse</a></code>

Methods:

- <code title="get /v2/threads/{thread_id}">client.threads.<a href="./src/resources/threads.ts">retrieve</a>(threadID) -> ThreadRetrieveResponse</code>
- <code title="get /v2/threads">client.threads.<a href="./src/resources/threads.ts">list</a>({ ...params }) -> ThreadListResponse</code>

# Comments

Types:

- <code><a href="./src/resources/comments.ts">Comment</a></code>
- <code><a href="./src/resources/comments.ts">CommentCreateResponse</a></code>
- <code><a href="./src/resources/comments.ts">CommentRetrieveResponse</a></code>
- <code><a href="./src/resources/comments.ts">CommentDeleteResponse</a></code>

Methods:

- <code title="post /v2/comments">client.comments.<a href="./src/resources/comments.ts">create</a>({ ...params }) -> CommentCreateResponse</code>
- <code title="get /v2/comments/{comment_id}">client.comments.<a href="./src/resources/comments.ts">retrieve</a>(commentID) -> CommentRetrieveResponse</code>
- <code title="delete /v2/comments/{comment_id}">client.comments.<a href="./src/resources/comments.ts">delete</a>(commentID) -> unknown</code>

# Meetings

Types:

- <code><a href="./src/resources/meetings/meetings.ts">Meeting</a></code>
- <code><a href="./src/resources/meetings/meetings.ts">MeetingRetrieveResponse</a></code>
- <code><a href="./src/resources/meetings/meetings.ts">MeetingListResponse</a></code>
- <code><a href="./src/resources/meetings/meetings.ts">MeetingFindOrCreateResponse</a></code>

Methods:

- <code title="get /v2/meetings/{meeting_id}">client.meetings.<a href="./src/resources/meetings/meetings.ts">retrieve</a>(meetingID) -> MeetingRetrieveResponse</code>
- <code title="get /v2/meetings">client.meetings.<a href="./src/resources/meetings/meetings.ts">list</a>({ ...params }) -> MeetingListResponse</code>
- <code title="post /v2/meetings">client.meetings.<a href="./src/resources/meetings/meetings.ts">findOrCreate</a>({ ...params }) -> MeetingFindOrCreateResponse</code>

## CallRecordings

Types:

- <code><a href="./src/resources/meetings/call-recordings.ts">CallRecordingCreateResponse</a></code>
- <code><a href="./src/resources/meetings/call-recordings.ts">CallRecordingRetrieveResponse</a></code>
- <code><a href="./src/resources/meetings/call-recordings.ts">CallRecordingListResponse</a></code>
- <code><a href="./src/resources/meetings/call-recordings.ts">CallRecordingDeleteResponse</a></code>
- <code><a href="./src/resources/meetings/call-recordings.ts">CallRecordingGetTranscriptResponse</a></code>

Methods:

- <code title="post /v2/meetings/{meeting_id}/call_recordings">client.meetings.callRecordings.<a href="./src/resources/meetings/call-recordings.ts">create</a>(meetingID, { ...params }) -> CallRecordingCreateResponse</code>
- <code title="get /v2/meetings/{meeting_id}/call_recordings/{call_recording_id}">client.meetings.callRecordings.<a href="./src/resources/meetings/call-recordings.ts">retrieve</a>(callRecordingID, { ...params }) -> CallRecordingRetrieveResponse</code>
- <code title="get /v2/meetings/{meeting_id}/call_recordings">client.meetings.callRecordings.<a href="./src/resources/meetings/call-recordings.ts">list</a>(meetingID, { ...params }) -> CallRecordingListResponse</code>
- <code title="delete /v2/meetings/{meeting_id}/call_recordings/{call_recording_id}">client.meetings.callRecordings.<a href="./src/resources/meetings/call-recordings.ts">delete</a>(callRecordingID, { ...params }) -> unknown</code>
- <code title="get /v2/meetings/{meeting_id}/call_recordings/{call_recording_id}/transcript">client.meetings.callRecordings.<a href="./src/resources/meetings/call-recordings.ts">getTranscript</a>(callRecordingID, { ...params }) -> CallRecordingGetTranscriptResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /v2/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /v2/webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(webhookID) -> WebhookRetrieveResponse</code>
- <code title="patch /v2/webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(webhookID, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /v2/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /v2/webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(webhookID) -> unknown</code>

# Self

Types:

- <code><a href="./src/resources/self.ts">SelfRetrieveResponse</a></code>

Methods:

- <code title="get /v2/self">client.self.<a href="./src/resources/self.ts">retrieve</a>() -> SelfRetrieveResponse</code>
