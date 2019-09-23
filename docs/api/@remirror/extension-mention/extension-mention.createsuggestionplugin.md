<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/extension-mention](./extension-mention.md) &gt; [createSuggestionPlugin](./extension-mention.createsuggestionplugin.md)

## createSuggestionPlugin variable

This creates the plugin that manages the suggestions to offer when the MentionExtension is active.

<b>Signature:</b>

```typescript
createSuggestionPlugin: ({ extension, ...params }: SuggestionStateCreateParams) => Plugin<SuggestionState, import("prosemirror-model").Schema<string, string>>
```