# Ros Marinus 節目冊建構中

本專案是一個使用 React、TypeScript 和 Vite 建置的網頁應用程式。它作為一個活動的節目冊，並帶有一個倒數計時器，當倒數計時結束時，會將使用者重新導向到一個 YouTube 影片。

## 專案總覽

主要的應用程式 (`src/App.tsx`) 會顯示一個倒數計時和一則訊息，指出節目冊仍在建構中。倒數計時預設為 11 秒。當倒數計時結束時，使用者將被重新導向到一個 YouTube 影片。向使用者顯示的文字會根據剩餘時間而改變。

本專案使用 Chakra UI 進行樣式設計，並使用 Vite 進行建置。

## 功能

- 倒數計時器
- 倒數計時完成後重新導向到 YouTube 影片
- 根據倒數計時狀態動態顯示文字
- 使用 Chakra UI 設計樣式

## 技術棧

- React
- TypeScript
- Vite
- Chakra UI
- Emotion
- ESLint
- pnpm (套件管理器)

## 專案結構

```
.
├── public/
│   └── ros-marinus.png
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── ui/
│   │       ├── color-mode.tsx
│   │       ├── provider.tsx
│   │       ├── toaster.tsx
│   │       └── tooltip.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 開始使用

### 先決條件

- Node.js (建議使用 18 或更高版本)
- pnpm (建議使用最新版本)

### 安裝

1. 複製儲存庫：
   ```bash
   git clone <repository-url>
   ```
2. 前往專案目錄：
   ```bash
   cd ros-marinus-program-construction
   ```
3. 安裝依賴套件：
   ```bash
   pnpm install
   ```

### 執行開發伺服器

要啟動開發伺服器，請執行：

```bash
pnpm dev
```

這將啟動 Vite 開發伺服器，您可以在瀏覽器中透過 `http://localhost:5173` (如果 5173 連接埠已被使用，則為其他連接埠) 查看應用程式。應用程式的 `base` 路徑已在 `vite.config.ts` 中設定為 `/ros-marinus-program-construction/`。

### 建置生產版本

要建置用於生產的應用程式，請執行：

```bash
pnpm build
```

此命令將首先執行 `tsc -b` 以檢查 TypeScript 型別，然後執行 `vite build` 以在 `dist` 資料夾中建立生產就緒的建置版本。

### 程式碼風格檢查

要檢查程式碼庫的風格，請執行：

```bash
pnpm lint
```

這將使用 ESLint 檢查程式碼風格和潛在錯誤。

## 設定

- **Vite 設定 (`vite.config.ts`):**

  - `base`: 設定為 `/ros-marinus-program-construction`，適用於 GitHub Pages 部署或類似應用程式不在網域根目錄的情況。
  - 外掛程式: 包含 `@vitejs/plugin-react`。

- **TypeScript 設定 (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`):** Vite React 專案的標準 TypeScript 設定。

- **ESLint 設定 (`eslint.config.js`):** 已針對 React 和 TypeScript 進行設定。

## 部署

應用程式已在 `vite.config.ts` 中設定 `base` 路徑，使其適合部署到 GitHub Pages 等平台的子路徑下。執行 `pnpm build` 後，可以部署 `dist` 資料夾的內容。
