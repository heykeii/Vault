import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'vaultFiles',
  access: (allow) => ({
    // This creates a private space for every user
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
  })
});