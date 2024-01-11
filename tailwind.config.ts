import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      68: '17rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      104: '26rem',
      107: '27rem',
      130: '32.5rem',
      168: '42rem',
      170: '44rem',
      192: '48rem',
      240: '60rem',
      276: '69rem',
      280: '90rem',
      384: '96rem',
      432: '108rem',
    },
    letterSpacing: {
      'h1': '5px',
      'h2': '1px',
      'p': '2px',
    },
    colors: {
      'white': "#fff",
      'orange': "#fdbf85",
      'violet': "#cb77a0",
      'violetLight': '#b75a9b',
      'yellow': "#fcde8e",
      'greySoft': "#C7C7C7",
      'greyLight': "#757575",
      'greyMedium': "#414141",
      'greyDark': "#151515",
      'blockBlue': "#0165b1",
      'blockYellow': "#fec05c",
      'blockRed': "#d12510",
      'greenLight': "#EFFFE2",
      'greyLine': "#E8E8E8"
    },
    fontSize: {
      'base': '1.8rem',
      '7xl': '5.5rem',
      '8xl': '7.6rem',
      '9xl': '13rem',
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    },
    lineHeight: {
      'base': "3.5rem",
      'title': "15rem",
    },
    borderWidth: {
      DEFAULT: '1px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    extend: {
      dropShadow: {
        'white': [
            '0 0 30px rgba(255, 255, 255, 0.58)',
            '0 -35px 41px rgba(255, 255, 255, 0.41)',
            '0 -91px 70px rgba(255, 255, 255, 0.51)',
            '0 -164px 91px rgba(255, 255, 255, 0.31)',
        ]
      },
      boxShadow: {
        'white': '0px 0px 30px rgba(255, 255, 255, 0.58) ' +
                 '0px -35px 41px rgba(255, 255, 255, 0.41) ' +
                 '0px -91px 70px rgba(255, 255, 255, 0.51) ' +
                 '0px -164px 91px rgba(255, 255, 255, 0.31)',
      },
      backgroundImage: {
        'sphere-gradient': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 96.35%, rgba(255, 255, 255, 0.36) 100%), linear-gradient(50.94deg, #01A6DC 14.62%, #8801E4 54.03%, #F5CBE1 85.34%)',
      }
    }
  },
  plugins: [],
}
export default config
