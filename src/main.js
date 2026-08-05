import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";

createApp(App).mount("#app");

function loadPortfolioScriptOnce() {
  if (window.__portfolioScriptLoaded) return Promise.resolve();
  window.__portfolioScriptLoaded = true;

  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "js/script.js";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

// Vue 마운트 이후 DOM이 준비된 상태에서 기존 jQuery 스크립트를 로드
loadPortfolioScriptOnce().catch((e) => {
  // 개발 중 경고만 하고 앱은 계속 표시
  console.warn("portfolio/js/script.js load failed:", e);
});
