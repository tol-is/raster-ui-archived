const tailwindcss = require('tailwindcss');

const styledRhythm = require('@styled-rhythm/tailwindcss');
const themePlex = require('@styled-rhythm/theme-plex');

console.log(styledRhythm);
console.dir(themePlex);

// const baseTailwindConfig = {
//   theme: {
//     screens = {
//       sm: '30rem',
//       md: '42.5rem',
//       lg: '80rem',
//       xl: '105rem'
//     },
//     colors = {
//       mono: [
//         '#FFFFFF',
//         '#F3F3F3',
//         '#F6F6F6',
//         '#F8F8F8',
//         '#e5e5e5',
//         '#737373',
//         '#A0A0A0',
//         '#000000'
//       ]
//     },
//   }
// };

// const tailwindConfig = styledRhythm(themePlex)(baseTailwindConfig);
// console.log(tailwindConfig)

module.exports = {
  plugins: [tailwindcss()]
};
