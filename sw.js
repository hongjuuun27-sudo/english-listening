/* 창업 리스닝 웹앱 설치용 서비스워커(오프라인) — 영어일기 sw.js와 같은 방식.
   - 항상 인터넷에서 최신 파일을 먼저 받고(cache: "no-cache"), 인터넷이 안 될 때만 저장해 둔 걸 보여 줌.
   - 새 버전을 올릴 때마다 CACHE 숫자를 올림 → 폰이 새 서비스워커를 받아 바로 바꿔 끼우고, 앱 화면에 "새 버전이 나왔어요" 막대.
   - 같은 github.io 주소를 쓰는 한 장 영어·영어일기와 Cache Storage를 같이 쓰므로, **지울 때는 bizlisten- 로 시작하는 옛 저장소만** 지움.
   - 챕터 음성(audio/*.mp3)은 여기 저장하지 않음 — 앱이 IndexedDB bizlisten-tts에 둠(한 장 영어 sw.js가 다른 앱 캐시를 지워도 남게).
   - ElevenLabs 같은 다른 사이트 요청, GET이 아닌 요청은 건드리지 않음. */
const CACHE = "bizlisten-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./data/people.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("bizlisten-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  if (/\/audio\/[^/]+\.mp3$/.test(url.pathname)) return;               // 음성은 앱이 IndexedDB에 저장
  const fresh = req.mode === "navigate"
    ? new Request(req.url, { cache: "no-cache", credentials: "same-origin" })
    : new Request(req, { cache: "no-cache" });
  e.respondWith(
    fetch(fresh)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: req.mode === "navigate" }).then(r => r || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())))
  );
});
