/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    rotate: false,
  },
  safelist: [
    {
      pattern: /rotate-[0-9]+/,
    },
    {
      pattern: /negative-rotate-[0-9]+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        alpha: {
          50: '#f5f5f5',
          100: '#eaeaeb',
          200: '#cbcbcc',
          300: '#abacae',
          400: '#6d6d71',
          500: '#2e2f34',
          600: '#292a2f',
          700: '#232327',
          800: '#1c1c1f',
          900: '#171719',
        },
        beta: {
          50: '#f2faf9',
          100: '#e6f5f4',
          200: '#c0e5e3',
          300: '#9bd6d2',
          400: '#4fb7b1',
          500: '#04988f',
          600: '#048981',
          700: '#03726b',
          800: '#025b56',
          900: '#024a46',
        },
        gamma: {
          50: '#fcfcfc',
          100: '#fafafa',
          200: '#f2f2f2',
          300: '#eaeaeb',
          400: '#dbdbdb',
          500: '#cbcbcc',
          600: '#b7b7b8',
          700: '#989899',
          800: '#7a7a7a',
          900: '#636364',
        },
        delta: {
          50: '#fafafb',
          100: '#f5f5f8',
          200: '#e5e7ec',
          300: '#d6d8e1',
          400: '#b7bacb',
          500: '#989db4',
          600: '#898da2',
          700: '#727687',
          800: '#5b5e6c',
          900: '#4a4d58',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities(
        {
          rotate: (value) => ({
            transform: `rotate(${value}deg)`,
          }),
          'negative-rotate': (value) => ({
            transform: `rotate(${-value}deg)`,
          }),
        },
        {
          values: Object.fromEntries(
            [...Array(360).keys()].map((item) => [item + 1, item + 1])
          ),
        }
      );
    }),
  ],
};
