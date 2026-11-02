# 今天餵誰

把朋友當成魚養在魚塘裡的約會行事曆小遊戲。你是塘主，朋友是魚，約吃飯就是餵魚。

網址：https://tanghoho.github.io/who_to_feed_today/

## 檔案

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 整個遊戲（單一檔案，3D 用 three.js r128） |
| `firebase-config.js` | Firebase 設定，填好才會出現 Google 登入 |
| `firestore.rules` | Firestore 安全規則，貼到 Firebase 主控台 |
| `manifest.json`、`icons/` | 加到手機主畫面用的 App 圖示 |

## 開啟 Google 登入

1. 到 [Firebase 主控台](https://console.firebase.google.com/) 建立專案（或沿用既有專案）。
2. **Authentication → 登入方式**：啟用「Google」。
3. **Authentication → 設定 → 授權網域**：加入 `tanghoho.github.io`。
4. **Firestore Database**：建立資料庫，到「規則」貼上 `firestore.rules` 的內容後發布。
   如果跟其他遊戲共用同一個 Firebase 專案，把 `match /feedwho_users/{uid}` 那段加進原本的規則裡就好，不要覆蓋掉原本的規則。
5. **專案設定 → 一般 → 你的應用程式**：新增網頁應用程式，把 `firebaseConfig` 貼進 `firebase-config.js`。

登入後，存檔會同步到 `feedwho_users/{你的 uid}`。換手機登入同一個 Google 帳號，會問你要用雲端存檔還是這台手機的資料。

## 目前的限制

- 雲端同步是「每個人自己的存檔」。邀請朋友當魚、多人共用同一個魚塘，目前還是示範資料，之後要改成共用的資料結構。
- 天氣在部署後會抓 Open-Meteo 的即時天氣；抓不到時用模擬天氣。
