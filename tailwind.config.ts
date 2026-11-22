import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#0b1220', panel: '#111c2e', gold: '#d6b77a' } } }, plugins: [] };
export default config;
