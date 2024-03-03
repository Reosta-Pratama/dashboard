import type {Config}
from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", 
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}", 
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/forms/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "linear-blue": "linear-gradient(to bottom, rgba(30, 64, 175, 1), rgba(30, 58, 138, 1))"
            },
            screens: {
                'phones': {
                    'max': '600px'
                },
                "lg-phones": "600px",
                "tablets": "768px",
                "lg-tablets": "992px",
                "desktop": "1200px"
            },
            boxShadow: {
                'card': '0 3px 5px rgba(0, 0, 0, 0.04)'
            },
            colors: {
              'primary': '#1e3a8a',
              'secondary': '#E2E8F0',
              'success': '#90d12c',
              'warning': '#facc15',
              'pending': '#f97316',
              'danger': '#dc2626',
              'dark': '#1e293b'
            },
        }
    },
    plugins: []
};
export default config;
