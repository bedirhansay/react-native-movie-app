import { extractCSSColors } from '../utils';

// Secondary colors from CSS
const secondaryColorsCSS = `
  /* Gray Blue */
  --gray-blue-25: #fcfcfd;
  --gray-blue-50: #f8f9fc;
  --gray-blue-100: #eaecf5;
  --gray-blue-200: #d5d9eb;
  --gray-blue-300: #b3b8db;
  --gray-blue-400: #8b93bb;
  --gray-blue-500: #4e5a7c;
  --gray-blue-600: #3e4784;
  --gray-blue-700: #363f72;
  --gray-blue-800: #293056;
  --gray-blue-900: #101323;

  /* Gray Cool */
  --gray-cool-25: #fcfcfd;
  --gray-cool-50: #f9fafb;
  --gray-cool-100: #f5f7ff;
  --gray-cool-200: #dcdfea;
  --gray-cool-300: #b9bcc6;
  --gray-cool-400: #9499a9;
  --gray-cool-500: #7d828d;
  --gray-cool-600: #5a6271;
  --gray-cool-700: #474f5c;
  --gray-cool-800: #303742;
  --gray-cool-900: #111727;

  /* Green */
  --green-25: #f6fef9;
  --green-50: #ecfdf3;
  --green-100: #dcfae6;
  --green-200: #abefc6;
  --green-300: #75e0a7;
  --green-400: #47cd89;
  --green-500: #17b26a;
  --green-600: #079455;
  --green-700: #067647;
  --green-800: #085d3a;
  --green-900: #074d31;

  /* Blue */
  --blue-25: #f5faff;
  --blue-50: #eff8ff;
  --blue-100: #deeefd;
  --blue-200: #c3e4fd;
  --blue-300: #90cbfc;
  --blue-400: #5eb7f9;
  --blue-500: #349df9;
  --blue-600: #0b7bfa;
  --blue-700: #0059f1;
  --blue-800: #0041c1;
  --blue-900: #002a91;

  /* Red/Rose */
  --rose-25: #fff7f9;
  --rose-50: #ffeeee;
  --rose-100: #ffd5d5;
  --rose-200: #ffafb3;
  --rose-300: #ff8492;
  --rose-400: #ff576e;
  --rose-500: #ff3349;
  --rose-600: #d61d2b;
  --rose-700: #a6121d;
  --rose-800: #740914;
  --rose-900: #440308;

  /* Orange */
  --orange-25: #fffaf5;
  --orange-50: #ffefe1;
  --orange-100: #ffe2c3;
  --orange-200: #ffc894;
  --orange-300: #ffb067;
  --orange-400: #ff9443;
  --orange-500: #ff7624;
  --orange-600: #e8560c;
  --orange-700: #c73d02;
  --orange-800: #952b01;
  --orange-900: #5a1601;

  /* Yellow */
  --yellow-25: #fffcef;
  --yellow-50: #fff8d0;
  --yellow-100: #fff3a1;
  --yellow-200: #ffeb72;
  --yellow-300: #ffdb45;
  --yellow-400: #ffc60a;
  --yellow-500: #ffa600;
  --yellow-600: #e69400;
  --yellow-700: #b97100;
  --yellow-800: #874e00;
  --yellow-900: #553000;

  /* Purple */
  --purple-25: #fafaff;
  --purple-50: #f5f5ff;
  --purple-100: #eaeaff;
  --purple-200: #d0ccff;
  --purple-300: #b1a9ff;
  --purple-400: #9a89ff;
  --purple-500: #7e64ff;
  --purple-600: #634bff;
  --purple-700: #4635ff;
  --purple-800: #3121d1;
  --purple-900: #1c1aa2;
`;

export const extractedSecondaryColors = extractCSSColors(secondaryColorsCSS);
