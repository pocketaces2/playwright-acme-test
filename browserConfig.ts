import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  slowMo: 0,
};

export const browserConfig = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
};
