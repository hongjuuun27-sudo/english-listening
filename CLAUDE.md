# 창업 리스닝 (english-listening)

창업자 이야기를 영어로 듣고(1단계) → 스크립트 보며 듣고(2단계) → 이해력 질문에 답하는(3단계) 웹앱. 빌드 없이 정적 파일만, GitHub Pages로 배포.

## 파일
- `index.html` — 화면과 동작 전부(인라인 스크립트는 CSP 해시로 허용 — 인라인 스크립트를 고치면 CSP 해시도 바꿔야 함)
- `data/people.js` — 인물 목록(`window.PEOPLE_LIST`, 홈 화면 순서). `chapters` = 계획한 챕터 수(아직 없는 챕터는 '준비 중')
- `data/people/{인물 id}.js` — 인물 하나의 챕터 데이터(`window.PEOPLE[id]`)
- `audio/manifest.json` + `audio/{챕터 id}-{해시}.mp3` — 미리 만든 챕터 음성
- `sw.js` — 오프라인용 서비스워커(새 버전 배포 때 `CACHE` 숫자를 올림)

## 작업 규칙
- 키 파일(.env 등)은 절대 열거나 출력하지 않음. ElevenLabs 키는 환경변수 `ELEVENLABS_API_KEY`로만 씀.
- 사용자가 따로 말하기 전에는 커밋·푸시 금지. GitHub에 올리기 전에는 꼭 확인받기.
- 단계마다 보고하고 멈춤: ① 사실 조사 → ② 데이터 추가·검사 → ③ 음성 생성(크레딧 승인 뒤에만, 한 번만, 실패해도 재시도하지 않고 보고).

## 인물 추가 절차 (챕터 추가도 같음)
1. **사실 조사** — 서로 다른 출처 2곳 이상(Wikipedia, Grokipedia, 공식 자료, 주요 언론)이 맞는 사실만 씀.
   - 출처끼리 다른 숫자·내용, 한 곳에서만 확인된 내용은 `dropped`에 {text, why}로 남김.
   - 페이지가 안 열려 검색 결과로만 본 출처는 `sources`에 `note`로 적음(그것 하나만으로는 사실 근거가 안 됨).
   - 사용자가 정한 것(예: 출처가 갈린 숫자 중 하나를 쓰기)도 `dropped.why`에 "사용자 결정(날짜)"으로 기록.
   - 앞 챕터와 겹치는 사실은 다시 쓰지 않음.
2. **챕터 데이터** — `data/people/{id}.js`의 `chapters`에 `{ id: "{인물}-{번호}", no, title: {en, ko}, script, questions, facts, sources, dropped }` (키 순서도 이대로)
   - `script`: 문단 배열 → 문장 배열. 380~450단어(1챕터는 이 규칙 전이라 343단어). 숫자는 글로(eighty dollars, twenty thousand dollars), 연도는 숫자(2008), 곧은 따옴표('), 한글·괄호 금지(괄호 속 한글은 앱이 안 읽는 풀이로 처리).
   - `questions`: 5개, id q1~q5, type은 main·verb·why·detail, **verb(누가 무엇을 했나) 1~2개**, 각각 en·ko·answer(모범 답 — 화면엔 안 보이고 채점 프롬프트에만).
   - `facts`: 스크립트에 들어간 사실마다 `sources` id 2개 이상(서로 다른 곳). `sources`: { id, type(wikipedia·grokipedia·official·press), publisher, title, url, accessed, note? }. 출처 id는 챕터마다 s1부터.
   - **스크립트를 음성을 만든 뒤에 고치면 음성을 다시 만들어야 함**(manifest `sig`가 안 맞으면 앱이 그 음성을 안 씀).
   - 새 인물이면 `data/people.js`에 한 줄 추가.
3. **검사** (`/workspace/tools/listen-checks/`, 저장소 밖)
   - `node data_check.js <저장소>` — 형식·단어 수·질문·출처 2곳·앞 챕터와 중복·이메일/키 모양 문자열
   - `/workspace/pwenv/bin/python -I app_check.py <저장소>` — 헤드리스 Chrome으로 홈·인물·챕터 1~3단계 화면, 음성 상태, ElevenLabs 요청 0건, 콘솔 오류
     (지금은 Brian Chesky 1·2챕터에 맞춰 짜여 있음 — 새 챕터는 id·기대값을 바꿔서 씀)
4. **음성** (크레딧 승인 뒤)
   - `/workspace/pwenv/bin/python -I /workspace/tools/listen-audio-build.py --chapter <챕터 id>` — 확인만(글자 수 = 크레딧 기준, 지문, 파일 이름)
   - `... --go` — 딱 한 번 생성. 이미 manifest·mp3·저장된 응답이 있으면 거부. 응답 원본은 `/workspace/tools/listen-audio-work/`에 먼저 저장(뒤처리 실패 시 `--from-saved`로 API 없이 다시)
   - 점검: `listen-checks/audio_check.py <저장소> <응답 json> <챕터 id> [이름,들]`(타이밍·문장 시작·문장 잘라 듣기·노래방 실제 재생·이름 발음 정렬), `audio_baseline.py`(같은 측정을 1챕터 배포본과 나란히)
     - 주의: `audio_check.py`의 '앱이 미리 만든 음성을 씀' 항목은 2챕터 개수(422/37)가 박혀 있어 다른 챕터에선 그 줄이 틀림 · 이름 점검은 그 이름이 스크립트에 없으면 실패함

## 음성 형식 (앱 `index.html`과 맞춤)
- 목소리 Matt `pwMBn0SsmN1220Aorv15`, 모델 `eleven_v4`, `mp3_44100_128`, stability 0.5 · similarity_boost 0.75, `/with-timestamps`
- 보내는 글 = 앱 `CHAPTERS[id].text`(문장은 공백, 문단은 빈 줄로 이음). 글자 수 = 앱이 안내하는 크레딧 수
- `audio/manifest.json` = `{"v":1,"chapters":{챕터 id:{file,sig,voice,model,words,starts}}}` — 한 줄, 줄바꿈 없음, 다른 챕터 항목은 건드리지 않음
  - `words`: 앱 `wordTimes()` 결과, 단어마다 [시작, 끝] 1/100초 정수
  - `starts`: 문장마다 min(앱 `cutPoint()` 시작점, 첫 단어 시작 − 0.05초), 첫 문장 0 (1/100초) — 문장을 누르면 여기부터(첫소리 안 잘리게)
- 파일 이름: 2챕터부터 `{챕터 id}-{sha256("v1|model|voice|0.5|0.75|mp3_44100_128|글") 앞 16자}.mp3`. 1챕터 파일은 PC의 audio-build.ps1로 만들어 이름 규칙이 다름(앱은 manifest의 `file`만 읽으므로 상관없음)
- 발음은 정렬(글자 시간)로 늘어짐·끊김만 볼 수 있음 — 실제로 맞게 읽었는지는 폰에서 귀로 확인

## 크레딧 기록
- 이 키에는 잔액을 읽는 권한(`user_read`)이 없어 생성 전후 잔액 비교가 안 됨 → 응답 헤더 `character-cost`를 기록하고, 정확한 차감은 ElevenLabs 웹사이트에서 확인
- 2026-10-09 1챕터: 1,887자, 응답 값 228, 생성 후 남은 크레딧 136,652(그때 기록 — 실제 차감량은 모름)
- 2026-10-11 2챕터: 2,377자, `character-cost` 288 (1챕터와 같은 비율 약 0.12/자)
- 2026-10-18 3·4·5챕터: 2,327·2,206·2,325자, `character-cost` 1024·971·1023 (약 0.44/자 — 1·2챕터 0.12/자보다 훨씬 높음, 웹사이트에서 실제 차감 확인 필요)

## 현재 상태
- Brian Chesky(5챕터 계획, 5챕터 모두 데이터 있음):
  - 1챕터 "Air Mattresses and Breakfast"(2007, 에어매트리스·첫 손님 3명) · 2챕터 "Selling Cereal to Stay Alive"(2008~2009, Nathan 합류·Obama O's/Cap'n McCain's·Y Combinator) — 둘 다 음성 있음
  - 3챕터 "A New Name and a Life Without a Home"(2009~2011, Airbnb로 이름 줄임·Sequoia 투자·뉴욕 호스트 방문·Chesky가 숙소에서 살기·100만 박) — 430단어, 2,327자, 음성 있음(2026-10-18 생성)
  - 4챕터 "When Trust Was Broken"(2011~2012, EJ 집 사건·Chesky 사과·Host Guarantee 5만 달러 → 100만 달러) — 394단어, 2,206자, 음성 있음(2026-10-18 생성)
  - 5챕터 "From Crisis to the Stock Market"(2020, 코로나·약 1,900명 해고 편지·가까운 곳 여행·12월 10일 상장) — 418단어, 2,325자, 음성 있음(2026-10-18 생성)
  - 3~5챕터 검사: `data_check.js`(2챕터부터 모든 챕터를 앞 챕터들과 비교하도록 넓힘, 옛 2챕터판은 `data_check.ch2-orig.js`) · `app_check_ch345.py`(음성 전 = 키 없음 device / 키 있음 gen·크레딧 안내, 음성 뒤 = ready·manifest 대조). 옛 `app_check.py`는 3~5가 '준비 중'이라고 기대하므로 이제 그 항목은 실패함
