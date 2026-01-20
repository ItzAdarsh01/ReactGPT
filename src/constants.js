// export const URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=AIzaSyAB7DhkP1D8ml6GYrnFBvipxM5YlRstkR8";

// constants.js
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;
// curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
//   -H 'Content-Type: application/json' \
//   -H 'X-goog-api-key: AIzaSyB_cYF6dnNyLxNUVLQTB4xnk5UHDNtfmwE' \
//   -X POST \
//   -d '{
//     "contents": [
//       {
//         "parts": [
//           {
//             "text": "Explain how AI works in a few words"
//           }
//         ]
//       }
//     ]
//   }'

  