import { Config } from "tailwindcss";

const config: Config = {
  content: [ 

    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
   
// "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // screens: {
  //   sm: '480px',
  //   md: '768px',
  //   lg: '976px',
  //   xl: '1440px',
  // },
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  plugins: [],
};
export default config;