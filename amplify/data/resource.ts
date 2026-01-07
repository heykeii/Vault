import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // The 'File' model tracks the 2GB quota you want to implement
  File: a
    .model({
      fileName: a.string().required(),
      s3Key: a.string().required(), // Path in S3
      fileSize: a.integer().required(), // Crucial for tracking your 2GB/5GB limit
      contentType: a.string(),
    })
    // This rule ensures ONLY the person who uploaded the file can see or delete it
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    // 'userPool' is safer for Vault; it requires a login to even 'see' the API
    defaultAuthorizationMode: 'userPool',
    // We can still allow guest access for the landing page via identityPool if needed
    apiKeyAuthorizationMode: { expiresInDays: 7 }
  },
});