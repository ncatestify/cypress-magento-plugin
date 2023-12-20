import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://testify.team',
    scrollBehavior: 'nearest'
  },
  env: {
    waitForPageLoad: 3000
  },
  viewportWidth: 1200
});
