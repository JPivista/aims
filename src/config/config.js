const config = {
    development: {
        SERVER_URL: "https://docs-aims.ivista.biz/wp-json/wp/v2/",
        SERVER_FROM: "https://docs-aims.ivista.biz/wp-json/",
        PRODUCTION_SERVER_ID: "11", // Staging server ID
        SITE_URL: "localhost:3000",
        environment: "development"
    },
    staging: {
        SERVER_URL: "https://docs-aims.ivista.biz/wp-json/wp/v2/",
        SERVER_FROM: "https://docs-aims.ivista.biz/wp-json/",
        PRODUCTION_SERVER_ID: "11", // Staging server ID
        SITE_URL: "localhost:3000",
        environment: "staging"
    },
    production: {
        SERVER_URL: "https://docs-aims.ivista.biz/wp-json/wp/v2/",
        SERVER_FROM: "https://docs-aims.ivista.biz/wp-json/",
        PRODUCTION_SERVER_ID: "12", // Live production server ID
        SITE_URL: "aims-vert.vercel.app",
        environment: "production"
    }
}

// Determine current environment
const getCurrentEnvironment = () => {
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname
        if (hostname === 'localhost') {
            return 'staging'
        } else if (hostname === 'aims-vert.vercel.app') {
            return 'production'
        }
    }
    return 'staging' // default to staging
}

const currentEnv = getCurrentEnvironment()

export const API_CONFIG = {
    ...config[currentEnv],
    currentEnvironment: currentEnv
}

// Additional config exports for specific use cases
export const SERVER_CONFIG = {
    SERVER_URL: API_CONFIG.SERVER_URL,
    SERVER_FROM: API_CONFIG.SERVER_FROM,
    PRODUCTION_SERVER_ID: API_CONFIG.PRODUCTION_SERVER_ID,
    SITE_URL: API_CONFIG.SITE_URL
}

export default config
