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
    },
    {
      id: "brian-chesky-2",
      no: 2,
      title: { en: "Selling Cereal to Stay Alive", ko: "시리얼을 팔아 버티기" },
      script: [
        [
          "By the summer of 2008, Brian and Joe were still trying to turn their idea into a real business.",
          "And they weren't just two anymore.",
          "A third partner had joined them.",
          "His name was Nathan Blecharczyk.",
          "Nathan was an engineer, and he was the one who built the website."
        ],
        [
          "In August 2008, they launched a new version of their website, just before the Democratic National Convention came to Denver.",
          "It was a huge political event, and it brought them some attention.",
          "But after the conventions were over, things got hard again.",
          "Not enough people were booking.",
          "The money wasn't coming in.",
          "And the founders were deep in credit card debt."
        ],
        [
          "So they came up with a strange plan.",
          "It was an election year, and the whole country was talking about two men: Barack Obama and John McCain.",
          "Why not sell breakfast cereal about them?",
          "They created two cereals.",
          "One was called Obama O's.",
          "The other was called Cap'n McCain's."
        ],
        [
          "They bought ordinary cereal and put it into boxes they had designed themselves.",
          "The boxes didn't come ready to use, either.",
          "They were printed on flat sheets of poster board.",
          "So the founders folded every single one by hand and stuck it together with a hot glue gun, right in their apartment.",
          "They made about a thousand boxes."
        ],
        [
          "Then they sold them as limited-edition collector's items, for forty dollars a box.",
          "That's a lot of money for cereal.",
          "But people actually bought them.",
          "The money helped them pay off a lot of their debt and keep the company going a little longer."
        ],
        [
          "Around that time, a mentor named Michael Seibel recommended them to Y Combinator, a program that gives money and advice to young startups.",
          "So the three founders went to pitch their idea to Paul Graham, the man who ran it.",
          "At first, Paul wasn't so sure.",
          "Would people really want to stay in a stranger's home?",
          "Then he heard the story of the cereal, and that changed his mind.",
          "He reportedly told them something like this: if you can convince people to pay forty dollars for four-dollar boxes of cereal, maybe, just maybe, you can convince strangers to live with each other."
        ],
        [
          "Soon after, they got in.",
          "In January 2009, the three founders joined Y Combinator's winter program.",
          "Y Combinator gave them twenty thousand dollars, and in return, it got six percent of the company.",
          "It wasn't a lot of money.",
          "But for three founders who had been gluing cereal boxes together in their apartment, it was a real second chance."
        ]
      ],
      questions: [
        { id: "q1", type: "main", en: "Why did the founders start selling cereal?", ko: "창업자들은 왜 시리얼을 팔기 시작했나요?",
          answer: "Not enough people were booking, the money wasn't coming in, and they were deep in credit card debt. They needed money to keep the company going." },
        { id: "q2", type: "verb", en: "What did Nathan Blecharczyk do for the company?", ko: "네이선 블레차르지크는 회사를 위해 무엇을 했나요?",
          answer: "He joined Brian and Joe as a third partner, and as an engineer, he built the website." },
        { id: "q3", type: "why", en: "Why did Paul Graham change his mind about the founders?", ko: "폴 그레이엄은 왜 창업자들에 대한 생각을 바꿨나요?",
          answer: "He heard the cereal story. He thought that if they could get people to pay forty dollars for a four-dollar box of cereal, maybe they could get strangers to live with each other." },
        { id: "q4", type: "verb", en: "What did the founders do with the printed boxes?", ko: "창업자들은 인쇄된 상자로 무엇을 했나요?",
          answer: "They folded every one by hand, stuck it together with a hot glue gun in their apartment, filled it with ordinary cereal, and sold it for forty dollars a box." },
        { id: "q5", type: "detail", en: "When did the founders join Y Combinator, and what did they get?", ko: "창업자들은 언제 Y Combinator에 들어갔고, 무엇을 받았나요?",
          answer: "In January 2009. Y Combinator gave them twenty thousand dollars, and in return it got six percent of the company." }
      ],
      facts: [
        { id: "f1", text: "Nathan Blecharczyk joined in 2008 as the third co-founder.", sources: ["s1", "s4"] },
        { id: "f2", text: "Blecharczyk was the engineer who built the website.", sources: ["s2", "s6", "s4"] },
        { id: "f3", text: "In August 2008 (August 11) the site was (re)launched, just before the Democratic National Convention in Denver.", sources: ["s1", "s8", "s2", "s11"] },
        { id: "f4", text: "The convention brought them attention and demand.", sources: ["s2", "s7"] },
        { id: "f5", text: "After the conventions they struggled again — not enough bookings, not enough money.", sources: ["s7", "s8", "s11"] },
        { id: "f6", text: "The founders were deep in credit card debt.", sources: ["s8", "s9", "s5"] },
        { id: "f7", text: "They made two cereals themed on the 2008 presidential candidates Barack Obama and John McCain: Obama O's and Cap'n McCain's.", sources: ["s1", "s4", "s5", "s10"] },
        { id: "f8", text: "They bought ordinary store cereal and repackaged it in boxes they designed themselves.", sources: ["s2", "s10", "s9"] },
        { id: "f9", text: "The boxes came as printed poster board; the founders folded and hot-glued them by hand in their apartment.", sources: ["s8", "s12"] },
        { id: "f10", text: "They made about 1,000 boxes (500 of each).", sources: ["s10", "s2"] },
        { id: "f11", text: "They sold the boxes as limited-edition collector's items for $40 a box.", sources: ["s5", "s6", "s7", "s9", "s12"] },
        { id: "f12", text: "The money helped them pay off much of their debt and keep the company going.", sources: ["s2", "s9", "s6"] },
        { id: "f13", text: "Michael Seibel, a mentor, recommended them to Y Combinator.", sources: ["s3", "s9"] },
        { id: "f14", text: "Y Combinator, run by Paul Graham, gives young startups money and advice; the founders pitched to Graham.", sources: ["s1", "s5", "s7", "s9"] },
        { id: "f15", text: "Graham doubted the idea at first (would people stay with strangers?) and changed his mind after hearing the cereal story.", sources: ["s7", "s12"] },
        { id: "f16", text: "Graham's reported words: if you can convince people to pay $40 for $4 boxes of cereal, maybe you can convince strangers to live with each other.", sources: ["s7", "s13", "s9"] },
        { id: "f17", text: "In January 2009 the three founders joined Y Combinator's winter batch.", sources: ["s1", "s4", "s5", "s6"] },
        { id: "f18", text: "Y Combinator gave them $20,000 in exchange for 6% of the company.", sources: ["s1", "s2", "s5", "s7", "s9"] }
      ],
      sources: [
        { id: "s1", type: "wikipedia", publisher: "Wikipedia", title: "Airbnb", url: "https://en.wikipedia.org/wiki/Airbnb", accessed: "2026-10-11" },
        { id: "s2", type: "wikipedia", publisher: "Wikipedia", title: "Brian Chesky", url: "https://en.wikipedia.org/wiki/Brian_Chesky", accessed: "2026-10-11" },
        { id: "s3", type: "wikipedia", publisher: "Wikipedia", title: "Michael Seibel", url: "https://en.wikipedia.org/wiki/Michael_Seibel", accessed: "2026-10-11" },
        { id: "s4", type: "grokipedia", publisher: "Grokipedia", title: "Airbnb", url: "https://grokipedia.com/page/Airbnb", accessed: "2026-10-11" },
        { id: "s5", type: "grokipedia", publisher: "Grokipedia", title: "Brian Chesky", url: "https://grokipedia.com/page/Brian_Chesky", accessed: "2026-10-11" },
        { id: "s6", type: "grokipedia", publisher: "Grokipedia", title: "Joe Gebbia", url: "https://grokipedia.com/page/Joe_Gebbia", accessed: "2026-10-11" },
        { id: "s7", type: "press", publisher: "Fortune", title: "Airbnb's CEO says a $40 cereal box changed the course of the multibillion-dollar company", url: "https://fortune.com/2023/04/19/airbnb-ceo-cereal-box-investors-changed-everything-billion-dollar-company/", accessed: "2026-10-11" },
        { id: "s8", type: "press", publisher: "CNBC", title: "In 2009, Airbnb collected $734 in fees in a week, and was clawing toward 'ramen profitability'", url: "https://www.nbcsandiego.com/news/business/money-report/in-2009-airbnb-collected-734-in-fees-in-a-week-and-was-clawing-toward-ramen-profitability/2447353/", accessed: "2026-10-11",
          note: "CNBC 기사(Catherine Clifford, 2020-11-19)를 NBC San Diego에 같이 실린 글로 읽음" },
        { id: "s9", type: "press", publisher: "Crunchbase News", title: "Airbnb's IPO is a big deal for the company. It's big for Y Combinator, too.", url: "https://news.crunchbase.com/venture/airbnb-ipo-origin-story-y-combinator/", accessed: "2026-10-11" },
        { id: "s10", type: "press", publisher: "TechCrunch", title: "What's for breakfast at your house: Obama O's or Cap'n McCain's?", url: "https://techcrunch.com/2008/10/09/whats-for-breakfast-at-your-house-obama-os-or-capn-mccains/", accessed: "2026-10-11" },
        { id: "s11", type: "press", publisher: "TechCrunch", title: "How Airbnb went from renting air beds for $10 to a $30 billion hospitality behemoth", url: "https://techcrunch.com/2018/08/12/how-airbnb-went-from-renting-air-beds-for-10-to-a-30-billion-hospitality-behemoth/", accessed: "2026-10-11" },
        { id: "s12", type: "press", publisher: "Mail & Guardian", title: "Brian Chesky: The homeless entrepreneur", url: "https://mg.co.za/article/2013-03-12-brian-chesky-the-homeless-entrepreneur/", accessed: "2026-10-11" },
        { id: "s13", type: "press", publisher: "CNBC", title: "Airbnb CEO says his $75 billion company was rejected by investors—until a $40 box of cereal turned things around", url: "https://www.cnbc.com/2023/04/18/airbnb-ceo-says-he-wooed-first-investors-with-boxes-of-cereal.html", accessed: "2026-10-11",
          note: "이 PC에서 페이지가 열리지 않아(403) 검색 결과에 나온 기사 내용으로 확인" }
      ],
      dropped: [
        { text: "한 상자 가격 39달러", why: "TechCrunch(2008년 당시 기사)는 39달러, 나머지 글은 모두 40달러 — 사용자 결정(2026-10-11)으로 40달러로 씀" },
        { text: "시리얼로 번 돈", why: "Wikipedia(Airbnb)·Fortune 등은 3만 달러, Wikipedia(Brian Chesky)는 2만~3만 달러, CNBC는 4만 달러 — 서로 달라서 뺌" },
        { text: "팔린 상자 수", why: "CNBC는 1,000개, Grokipedia는 1,000개 넘게, NPR 인터뷰 요약은 약 800개 — 만든 수(약 1,000개)만 씀" },
        { text: "신용카드 빚 금액", why: "CNBC(Chesky 본인 말)는 2만 5천 달러, Wikipedia는 2만 달러, Grokipedia는 4만 달러 넘음 — 서로 달라서 뺌" },
        { text: "시리얼을 어디서 팔았는지", why: "Wikipedia(Airbnb)는 '주로 민주당 전당대회에서', TechCrunch(2008년 10월)는 전당대회 뒤 웹사이트 주문 — 서로 달라서 뺌" },
        { text: "전당대회 때 숙소·예약 수, 덴버 호텔 방 수", why: "Wikipedia는 숙소 800개·예약 80건, TechCrunch는 600명 넘게 묵음 — 서로 다름. 호텔 방 수(방문객 8만 대 방 2만 8천)는 Grokipedia에만 있어서 뺌" },
        { text: "상자 안에 든 시리얼 종류", why: "TechCrunch는 Honey O's·Quaker Puffs, 다른 글은 Cheerios·Cap'n Crunch — 서로 달라서 'ordinary cereal'로만 씀" },
        { text: "상자 문구('Breakfast of Change', 'Hope in every bowl', 'A maverick in every bite')", why: "TechCrunch에서만 확인(마지막 문구는 큰 언론에서 확인 못 함) — 뺌" },
        { text: "투자자들에게 여러 번 거절당한 일", why: "Fortune만 직접 열어 확인, CNBC(2023)는 검색 결과로만 봄 — 사용자 결정(2026-10-11)으로 뺌" },
        { text: "Joe가 Obama O's 상자를 꺼내 Paul Graham에게 보여 준 일", why: "Joe라는 이름은 Inc.·Fortune 검색 결과로만 봄 — 사용자 결정(2026-10-11)으로 뺌, 'heard the story of the cereal'로만 씀" },
        { text: "Y Combinator 프로그램 기간(3개월)", why: "Fortune만 직접 확인, CNBC(2023)는 검색 결과로만 봄 — 사용자 결정(2026-10-11)으로 뺌" },
        { text: "Paul Graham의 'cockroaches(바퀴벌레)' 말", why: "큰 언론 중 Mail & Guardian에서만 확인돼서 뺌" },
        { text: "신용카드를 야구 카드 바인더에 꽂아 둔 이야기", why: "CNBC에서만 확인돼서 뺌" },
        { text: "Y Combinator 지원 마감을 놓친 일·Paul Graham의 10월 28일 메일", why: "블로그 글로만 확인돼서 뺌" },
        { text: "Airbnb로 이름을 줄인 때, Sequoia 투자 금액", why: "이름: Wikipedia(Airbnb)는 2009년 3월, Wikipedia(Brian Chesky)는 Sequoia 투자 뒤 / 금액: 58만 5천 달러 대 60만 달러 — 서로 달라서 뺌(다음 챕터 주제)" }
      ]
    }
  ]
};
