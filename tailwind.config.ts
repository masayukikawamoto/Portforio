// import type { Config } from "tailwindcss";

// const config = {
//   // darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     screens: {
//       xs: "480px", // 新しいブレークポイント
//       sm: "640px", // デフォルトのsmを上書き
//       md: "768px", // デフォルトのmdを上書き
//       lg: "1024px", // デフォルトのlgを上書き
//       xl: "1280px", // デフォルトのxlを上書き
//       "2xl": "1536px", // デフォルトの2xlを上書き
//       "3xl": "1920px", // 新しいブレークポイント
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//           colorChange: {
//             "0%": { color: "#FF0000" }, // 赤
//             "33%": { color: "#00FF00" }, // 緑
//             "66%": { color: "#0000FF" }, // 青
//             "100%": { color: "#0000FF" }, // 青で固定
//           },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "color-change": "colorChange 3s ease-in-out forwards",
//       },
//     },
//     variants: {
//       extend: {
//         animation: ["hover"],
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animated")],
// } satisfies Config;

// export default config;
