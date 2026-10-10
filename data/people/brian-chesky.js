/* Brian Chesky (Airbnb) — 챕터 데이터. 작성 규칙·검사는 CLAUDE.md '인물 추가 절차'
   script: 문단 → 문장(문장 순서·글이 곧 음성·노래방·체크 기록의 기준 — 음성을 만든 뒤 고치면 음성을 다시 만들어야 함)
   questions: 5개(type verb = 누가 무엇을 했는지 동사를 묻는 질문 1~2개), answer = 모범 답(화면엔 안 보이고 채점 프롬프트에만)
   facts: 스크립트에 들어간 사실마다 출처 id 2개 이상(서로 다른 곳), sources: 출처 목록, dropped: 출처끼리 달라서 뺀 내용 */
(window.PEOPLE = window.PEOPLE || {})["brian-chesky"] = {
  id: "brian-chesky",
  checkedOn: "2026-10-09",
  chapters: [
    {
      id: "brian-chesky-1",
      no: 1,
      title: { en: "Air Mattresses and Breakfast", ko: "에어매트리스와 아침 식사" },
      script: [
        [
          "In 2007, Brian Chesky moved to San Francisco to share an apartment with his friend Joe Gebbia.",
          "The two of them had both gone to the Rhode Island School of Design, a well-known art and design school.",
          "San Francisco wasn't a cheap place to live, though.",
          "Their rent went up, and before long, they had a real problem.",
          "They didn't have enough money to pay it."
        ],
        [
          "Around that time, Joe noticed something interesting.",
          "A big design conference was coming to the city.",
          "Lots of designers were about to show up at the same time, and the hotels were filling up fast.",
          "Pretty soon, there were hardly any rooms left.",
          "For people coming to the conference, finding a place to sleep was turning into a real headache."
        ],
        [
          "That gave Joe an idea.",
          "What if they turned their own apartment into a tiny bed and breakfast?",
          "They had some space in their living room, and that was enough.",
          "So they blew up a few air mattresses, laid them out on the floor, and promised their guests breakfast in the morning.",
          "Then they put together a simple website so people could find them.",
          "They even gave the whole thing a name that said exactly what it was: AirBed and Breakfast."
        ],
        [
          "They charged eighty dollars a night.",
          "And people actually booked.",
          "Three guests signed up.",
          "One came all the way from India.",
          "Another was a woman from Boston.",
          "The third was a dad from Utah.",
          "Think about that for a second.",
          "Three strangers were willing to pay to sleep on an air mattress in somebody else's living room."
        ],
        [
          "For Brian and Joe, it was a little extra money at a time when they really needed it.",
          "But it also showed them something much bigger.",
          "Hotels weren't the only option.",
          "Regular people could open up their homes, and travelers would actually come.",
          "Years later, Airbnb still describes its beginning in a very simple way: two hosts in San Francisco, three guests, and the year 2007.",
          "Those air mattresses on the living room floor were where it all began."
        ]
      ],
      questions: [
        { id: "q1", type: "main", en: "Why did Brian and Joe need to find some extra money?", ko: "브라이언과 조는 왜 돈이 더 필요했나요?",
          answer: "Their rent went up, and they didn't have enough money to pay it." },
        { id: "q2", type: "verb", en: "What did Brian do in 2007?", ko: "2007년에 브라이언은 무엇을 했나요?",
          answer: "He moved to San Francisco to share an apartment with his friend Joe Gebbia." },
        { id: "q3", type: "why", en: "Why was it hard for people at the design conference to find a place to stay?", ko: "디자인 콘퍼런스에 오는 사람들은 왜 묵을 곳을 찾기 어려웠나요?",
          answer: "A lot of designers were coming at the same time, so the hotels filled up and there were hardly any rooms left." },
        { id: "q4", type: "verb", en: "What did Brian and Joe do with the air mattresses?", ko: "브라이언과 조는 에어매트리스로 무엇을 했나요?",
          answer: "They blew them up, laid them out on their living room floor, and rented them to guests for eighty dollars a night, with breakfast." },
        { id: "q5", type: "detail", en: "Who were the three guests, and how much did each of them pay for one night?", ko: "손님 세 명은 누구였고, 한 사람이 하룻밤에 얼마를 냈나요?",
          answer: "A man from India, a woman from Boston, and a dad from Utah. Each paid eighty dollars a night." }
      ],
      facts: [
        { id: "f1", text: "Brian Chesky and Joe Gebbia both attended the Rhode Island School of Design (RISD).", sources: ["s1", "s8", "s6"] },
        { id: "f2", text: "In 2007, Chesky moved to San Francisco to live with Gebbia.", sources: ["s1", "s4"] },
        { id: "f3", text: "Their rent went up and they could not afford to pay it.", sources: ["s1", "s9", "s4"] },
        { id: "f4", text: "A large design conference (Industrial Designers Society of America) came to San Francisco and hotels were (nearly) fully booked.", sources: ["s1", "s2", "s9", "s5"] },
        { id: "f5", text: "Gebbia came up with the idea of renting out air beds in their apartment.", sources: ["s3", "s6"] },
        { id: "f6", text: "They inflated air mattresses in their living room and offered guests breakfast (a bed and breakfast).", sources: ["s2", "s5", "s1"] },
        { id: "f7", text: "They made a simple website for it, named AirBed & Breakfast.", sources: ["s3", "s5", "s7"] },
        { id: "f8", text: "They charged $80 a night.", sources: ["s9", "s5"] },
        { id: "f9", text: "Three guests booked — Airbnb's first guests, in 2007.", sources: ["s7", "s9", "s5"] },
        { id: "f10", text: "The three guests were a man from India, a woman from Boston, and a father from Utah.", sources: ["s9", "s10"] },
        { id: "f11", text: "In 2007, two hosts (Chesky and Gebbia) welcomed three guests into their San Francisco home — which is how Airbnb itself describes its beginning (official newsroom).", sources: ["s7", "s9", "s8"] }
      ],
      sources: [
        { id: "s1", type: "wikipedia", publisher: "Wikipedia", title: "Brian Chesky", url: "https://en.wikipedia.org/wiki/Brian_Chesky", accessed: "2026-10-09" },
        { id: "s2", type: "wikipedia", publisher: "Wikipedia", title: "Airbnb", url: "https://en.wikipedia.org/wiki/Airbnb", accessed: "2026-10-09" },
        { id: "s3", type: "wikipedia", publisher: "Wikipedia", title: "Joe Gebbia", url: "https://en.wikipedia.org/wiki/Joe_Gebbia", accessed: "2026-10-09" },
        { id: "s4", type: "grokipedia", publisher: "Grokipedia", title: "Brian Chesky", url: "https://grokipedia.com/page/Brian_Chesky", accessed: "2026-10-09" },
        { id: "s5", type: "grokipedia", publisher: "Grokipedia", title: "Airbnb", url: "https://grokipedia.com/page/Airbnb", accessed: "2026-10-09" },
        { id: "s6", type: "grokipedia", publisher: "Grokipedia", title: "Joe Gebbia", url: "https://grokipedia.com/page/Joe_Gebbia", accessed: "2026-10-09" },
        { id: "s7", type: "official", publisher: "Airbnb Newsroom", title: "About us", url: "https://news.airbnb.com/about-us/", accessed: "2026-10-09" },
        { id: "s8", type: "official", publisher: "Airbnb Newsroom", title: "Brian Chesky (leadership)", url: "https://news.airbnb.com/about-us/leadership/brian-chesky/", accessed: "2026-10-09" },
        { id: "s9", type: "press", publisher: "Newsweek", title: "An $80 idea changed travel forever", url: "https://www.newsweek.com/an-80-idea-changed-travel-forever-12283773", accessed: "2026-10-09" },
        { id: "s10", type: "press", publisher: "Business Insider India", title: "This Indian-born guy was the first ever AirBnB guest", url: "https://www.businessinsider.in/this-indian-born-guy-was-thefirst-ever-airbnb-guest/articleshow/52108944.cms", accessed: "2026-10-09",
          note: "이 PC에서 페이지가 직접 열리지 않아(주소 찾기 실패) 검색 결과에 나온 기사 내용으로 확인" }
      ],
      dropped: [
        { text: "첫 손님들에게서 번 돈", why: "Grokipedia(Airbnb)는 240달러, 다른 글들은 약 1,000달러 — 서로 달라서 뺌" },
        { text: "월세 금액", why: "책 발췌(Penguin, Leigh Gallagher)는 1,150달러, Grokipedia는 2,000달러 넘음 — 서로 달라서 뺌" },
        { text: "유타 손님의 자녀 수", why: "Newsweek는 다섯, Business Insider India는 넷 — 'a dad'로만 씀" },
        { text: "에어매트리스를 어디서 났는지·몇 개였는지", why: "Grokipedia는 샀다, 책 발췌는 원래 있던 것 — 서로 달라서 'a few'로만 씀" },
        { text: "Nathan Blecharczyk가 누구의 옛 룸메이트였는지", why: "Wikipedia(Airbnb)는 Chesky, 다른 글은 Gebbia·세 번째 룸메이트 — 1챕터에서는 뺌" },
        { text: "Gebbia가 Chesky에게 보낸 이메일(2007년 9월 22일)", why: "Brad Stone의 책(The Upstarts)으로만 확인되고 큰 언론 기사는 열어 보지 못해서 뺌" },
        { text: "인도에서 온 손님(Amol Surve)이 묵은 밤 수", why: "한 곳에서만 확인돼서 뺌" }
      ]
    }
  ]
};
