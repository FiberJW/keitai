import React from "react";

import { makeComponents } from "./components";

export function make<ThemeT>(theme: ThemeT) {
  return {
    ...makeComponents<ThemeT>(theme),
  };
}

// // design-system.ts
// import { make } from 'keitai';

// const theme = {
//   typography: {
//     fonts: {
//       Inter: "Inter Regular",
//     },
//   },
//   colors: {
//     background: "black",
//     text: "white",
//   },
// };

// type ThemeT = typeof theme;

// export default make<ThemeT>(theme);

// // App.tsx
// import React from "react";
// import { View, Text } from './design-system';

// function App() {
//   return (
//     <View
//       st={({ theme, dimensions }) => {
//         return {
//           flexDirection: dimensions.window.width > 300 ? "row" : "column",
//           backgroundColor: theme.colors.background,
//         };
//       }}
//     >
//       <Text
//         st={({ theme }) => {
//           return {
//             fontFamily: theme.typography.fonts.Inter,
//             color: theme.colors.text,
//           };
//         }}
//       >
//         Hello World
//       </Text>
//     </View>
//   );
// }
