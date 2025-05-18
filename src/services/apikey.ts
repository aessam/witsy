export function getOpenAIApiKey(): string {
  try {
    if (process.env.OPENAI_API_KEY_PATH) {
      const fs = require('fs');
      const key = fs.readFileSync(process.env.OPENAI_API_KEY_PATH, 'utf8');
      if (key) return key.trim();
    }
  } catch {}
  const { store } = require('./store');
  return store.config.engines.openai.apiKey;
}
