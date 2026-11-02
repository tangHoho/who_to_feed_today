/* 今天餵誰 — Firebase 設定
   到 Firebase 主控台 → 專案設定 → 一般 → 你的應用程式（網頁），
   把 firebaseConfig 的內容貼進下面的大括號裡。
   這些值本來就會公開在前端，放在公開 repo 沒問題；
   真正的資料保護靠 Firestore 規則（feedwho_users/{uid} 只允許本人讀寫，見 firestore.rules）。
   留空的話，遊戲照樣能玩，只是不會出現 Google 登入。 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDaPv3Un2BCHdHRDCo7Q9_WXWtsy1oIs6w",
  authDomain: "feed-who.firebaseapp.com",
  projectId: "feed-who",
  storageBucket: "feed-who.firebasestorage.app",
  messagingSenderId: "1078734595648",
  appId: "1:1078734595648:web:c2ff4da4b5bf3b7c95a1a5",
  measurementId: "G-VP8Z1K3Q7P"
};
