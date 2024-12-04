const DEVELOPMENT_CONFIG = {
  secure: {
    GOOGLE_API: 'ABCD',
    BRANCH_API: 'ABCDEF',
  },
  public: {
    APP_NAME: 'dev RNKEYS',
    BUNDLE_ID: 'com.example.rnkeys.dev',
    ANDROID_CODE: '50',
    PACKAGE_ID: 'com.example.rnkeys.dev',
  },
}

const STAGING_CONFIG = {
  secure: {
    GOOGLE_API: 'ABCD',
    BRANCH_API: 'ABCDEF',
  },
  public: {
    APP_NAME: 'dev RNKEYS',
    BUNDLE_ID: 'com.example.rnkeys.dev',
    ANDROID_CODE: '50',
    PACKAGE_ID: 'com.example.rnkeys.dev',
  },
}

const PRODUCTION_CONFIG = {
  secure: {
    GOOGLE_API: 'ABCD',
    BRANCH_API: 'ABCDEF',
  },
  public: {
    APP_NAME: 'dev RNKEYS',
    BUNDLE_ID: 'com.example.rnkeys.dev',
    ANDROID_CODE: '50',
    PACKAGE_ID: 'com.example.rnkeys.dev',
  },
}

const config = {
  development: DEVELOPMENT_CONFIG,
  staging: STAGING_CONFIG,
  production: PRODUCTION_CONFIG,
}

module.exports = { config }
