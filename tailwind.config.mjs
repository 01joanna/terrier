/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        liberation: ['Liberation Mono Regular', 'sans-serif'],
        liberationitalic: ['Liberation Mono Italic', 'sans-serif'],
        liberationbold: ['Liberation Mono Bold', 'sans-serif'],
        liberationbolditalic: ['Liberation Mono Bold Italic', 'sans-serif'],
        rapidblack: ['Rapid Black Extended', 'sans-serif'],
        rapidbold: ['Rapid Bold Extended', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
