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
    },
    {
      id: "brian-chesky-3",
      no: 3,
      title: { en: "A New Name and a Life Without a Home", ko: "새 이름, 그리고 집 없는 생활" },
      script: [
        [
          "Getting into Y Combinator was a big step, but the three founders still had a lot of work to do.",
          "In 2009, they made one small but important change.",
          "They shortened the name of their company.",
          "AirBed and Breakfast became simply Airbnb.",
          "It was shorter, and it was easier to say."
        ],
        [
          "That same year, more good news arrived.",
          "Sequoia Capital, a big and well-known investment firm, decided to put money into Airbnb.",
          "For a tiny company that had almost run out of money not long before, this was a very big deal.",
          "Now, somebody serious believed in their idea."
        ],
        [
          "But money alone couldn't solve every problem.",
          "The company was still small and fragile, and it needed more people to use it.",
          "The founders decided to do something that didn't look very smart at first.",
          "So they went to New York and walked from door to door.",
          "They met their hosts face to face.",
          "They helped new people sign up, and they showed hosts how to make their listings better.",
          "They even took photos of the hosts' apartments themselves.",
          "It was slow work, one apartment at a time.",
          "But they learned a lot about the people who were using their website."
        ],
        [
          "In 2010, Brian found an even more unusual way to learn about his own product.",
          "That summer, he moved out of his apartment.",
          "The place had pretty much become the company's office anyway.",
          "But instead of finding a new apartment, he decided to live in Airbnb listings.",
          "He stayed in other people's homes and kept moving from one place to the next.",
          "In a way, Brian was homeless.",
          "He joked about it himself."
        ],
        [
          "But there was a serious reason behind it.",
          "Brian wanted to use his own product every single day, just like his guests did.",
          "Every stay showed him what worked well and what didn't.",
          "He saw what made a guest feel welcome, and what made a trip harder than it needed to be.",
          "And he got to know the hosts, the people who were opening their homes to strangers.",
          "Some companies only look at numbers on a screen.",
          "Brian wanted to feel it for himself."
        ],
        [
          "Little by little, all that hard work began to pay off.",
          "Early in 2011, Airbnb reached a big milestone.",
          "Guests had booked a total of one million nights on the website.",
          "Not long before, the idea of paying to sleep in a stranger's home had sounded crazy to most people.",
          "Now, a million nights later, it was becoming a real business.",
          "And the company with the short new name was only getting started."
        ]
      ],
      questions: [
        { id: "q1", type: "main", en: "What did the founders do in New York, and why?", ko: "창업자들은 뉴욕에서 무엇을 했고, 왜 그렇게 했나요?",
          answer: "They went from door to door to meet their hosts. They helped people sign up, showed hosts how to make their listings better, and took photos of their apartments, because the company was still small and needed more people to use it." },
        { id: "q2", type: "verb", en: "What did the founders do to the company's name in 2009?", ko: "2009년에 창업자들은 회사 이름을 어떻게 했나요?",
          answer: "They shortened it. AirBed and Breakfast became simply Airbnb." },
        { id: "q3", type: "why", en: "Why did Brian decide to live in Airbnb listings?", ko: "브라이언은 왜 Airbnb 숙소에서 살기로 했나요?",
          answer: "He wanted to use his own product every day, like his guests, so he could see what worked and what didn't, and get to know the hosts." },
        { id: "q4", type: "verb", en: "What did Brian do in the summer of 2010?", ko: "2010년 여름에 브라이언은 무엇을 했나요?",
          answer: "He moved out of his apartment, which had become the company's office, and lived in Airbnb listings, moving from one home to the next." },
        { id: "q5", type: "detail", en: "What milestone did Airbnb reach early in 2011?", ko: "2011년 초에 Airbnb는 어떤 기록을 세웠나요?",
          answer: "Guests had booked a total of one million nights on the website." }
      ],
      facts: [
        { id: "f1", text: "In 2009 the company's name was shortened from AirBed & Breakfast to Airbnb.", sources: ["s1", "s3", "s4"] },
        { id: "f2", text: "In 2009, after Y Combinator, Sequoia Capital invested seed money in the company (amount: see dropped).", sources: ["s1", "s2", "s4"] },
        { id: "f3", text: "The founders went door to door in New York, recruiting new users and helping hosts improve their listings.", sources: ["s5", "s6"] },
        { id: "f4", text: "Chesky and Gebbia took photos of their early hosts' apartments themselves.", sources: ["s5", "s6"] },
        { id: "f5", text: "In June 2010, Chesky moved out of the apartment, which was serving as the company's office.", sources: ["s7", "s2"] },
        { id: "f6", text: "He lived in places rented through Airbnb instead of having his own home.", sources: ["s7", "s2", "s6"] },
        { id: "f7", text: "He described himself as (essentially) homeless.", sources: ["s7", "s6"] },
        { id: "f8", text: "The reason: to use his own product as a customer ('eating your own dogfood') and learn the experience firsthand, and to get to know the community of hosts.", sources: ["s7", "s6"] },
        { id: "f9", text: "In early 2011 (announced February 2011), Airbnb reached one million nights booked.", sources: ["s8", "s3", "s9"] }
      ],
      sources: [
        { id: "s1", type: "wikipedia", publisher: "Wikipedia", title: "Airbnb", url: "https://en.wikipedia.org/wiki/Airbnb", accessed: "2026-10-18" },
        { id: "s2", type: "wikipedia", publisher: "Wikipedia", title: "Brian Chesky", url: "https://en.wikipedia.org/wiki/Brian_Chesky", accessed: "2026-10-18" },
        { id: "s3", type: "grokipedia", publisher: "Grokipedia", title: "Airbnb", url: "https://grokipedia.com/page/Airbnb", accessed: "2026-10-18" },
        { id: "s4", type: "official", publisher: "Sequoia Capital", title: "Brian Chesky: Airbnb (Sequoia spotlight)", url: "https://sequoiacap.com/article/brian-chesky-airbnb-spotlight/", accessed: "2026-10-18",
          note: "투자사 Sequoia가 직접 쓴 글" },
        { id: "s5", type: "official", publisher: "Paul Graham", title: "Do Things that Don't Scale", url: "https://paulgraham.com/ds.html", accessed: "2026-10-18",
          note: "Y Combinator를 이끈 Paul Graham 본인의 글(1차 자료)" },
        { id: "s6", type: "press", publisher: "Mail & Guardian", title: "Brian Chesky: The homeless entrepreneur", url: "https://mg.co.za/article/2013-03-12-brian-chesky-the-homeless-entrepreneur/", accessed: "2026-10-18" },
        { id: "s7", type: "press", publisher: "TechCrunch", title: "Airbnb Founder Eats His Own Dogfood, Goes 'Homeless' For Months", url: "https://techcrunch.com/2010/06/21/airbnb-brian-chesky/", accessed: "2026-10-18" },
        { id: "s8", type: "press", publisher: "TechCrunch", title: "Airbnb Hits 1 Million Nights Booked As European Clone Emerges", url: "https://techcrunch.com/?p=278080", accessed: "2026-10-18" },
        { id: "s9", type: "press", publisher: "Fortune", title: "Airbnb: Changing where backpackers and billionaires sleep", url: "https://fortune.com/2011/04/05/airbnb-changing-where-backpackers-and-billionaires-sleep-away/", accessed: "2026-10-18",
          note: "2011년 4월 기사: '거의 200만 박, 2월 말 뒤로 두 배' — 2월 말 약 100만 박이었다는 뜻으로 읽음" }
      ],
      dropped: [
        { text: "Sequoia 시드 투자 금액", why: "Wikipedia(Airbnb)·Sequoia 글은 60만 달러, Wikipedia(Brian Chesky)는 58만 5천 달러 — 서로 달라서 뺌(투자했다는 사실만 씀)" },
        { text: "이름을 바꾼 달(2009년 3월)과 이유(에어매트리스만 빌려 주는 곳으로 오해)", why: "Wikipedia(Airbnb)에서만 직접 확인(CNBC 2018 기사는 검색 결과로만 봄), Wikipedia(Brian Chesky)는 Sequoia 투자 뒤로 적음 — '2009년'만 씀" },
        { text: "이름을 바꾸면서 집 전체·방 등으로 숙소를 넓힌 일", why: "CNBC 기사를 검색 결과로만 봄(페이지 403) — 뺌" },
        { text: "뉴욕 사진의 효과(예약 2~3배, 뉴욕 매출 두 배, 5천 달러짜리 카메라를 빌림)", why: "블로그 글로만 확인, Grokipedia는 '좋은 사진이 2.5배 예약' — 서로 다르고 큰 언론에서 확인 못 해서 뺌" },
        { text: "Paul Graham의 '약 30일 동안 사용자를 직접 만난 것이 성공과 실패를 갈랐다'", why: "Paul Graham 글에서만 확인돼서 뺌" },
        { text: "Chesky가 Airbnb 숙소에서 산 기간(그해 말까지)·'샌프란시스코에 집이 650채인 사람' 농담", why: "TechCrunch(2010)에서만 직접 확인(다른 글은 검색 결과로만) — 뺌, 'He joked about it himself'로만 씀" },
        { text: "2010년 11월 Series A 720만 달러(Greylock·Sequoia)와 그때까지 70만 박", why: "Wikipedia만 직접 확인, 다른 기사(Reuters Events·VatorNews)는 열리지 않아 검색 결과로만 봄 — 뺌" },
        { text: "2010년 한 해 약 800% 성장·89개국 예약", why: "TechCrunch에서만 확인돼서 뺌" },
        { text: "Chesky가 2010년 가을 CEO가 된 일", why: "Wikipedia(Brian Chesky)에서만 확인돼서 뺌" }
      ]
    },
    {
      id: "brian-chesky-4",
      no: 4,
      title: { en: "When Trust Was Broken", ko: "신뢰가 깨졌을 때" },
      script: [
        [
          "By the summer of 2011, Airbnb was growing fast.",
          "More and more people were renting out their homes to travelers.",
          "Then something terrible happened, and it put the whole company to the test."
        ],
        [
          "A woman in San Francisco, known online as EJ, had rented out her apartment on Airbnb while she was away on a business trip.",
          "After about a week of travel, she came home.",
          "She could hardly believe what she saw.",
          "Her home had been ransacked.",
          "Things had been stolen, and the whole place was trashed.",
          "The person who did it was the guest she had rented her apartment to."
        ],
        [
          "EJ wrote about what happened on her blog.",
          "About a month later, in late July, news websites picked up her story.",
          "Soon, people everywhere were asking a hard question.",
          "Is it really safe to let a stranger stay in your home?",
          "For a company built on trust between strangers, that was a dangerous question."
        ],
        [
          "At first, Airbnb didn't handle the situation well.",
          "Brian later admitted it himself, in public.",
          "In a blog post, he wrote that the company had let EJ down, and that he was very sorry.",
          "He said they should have responded faster, communicated more sensitively, and taken more decisive action.",
          "He also said, very simply, that they had dropped the ball.",
          "It's not easy for the head of a company to say something like that so openly."
        ],
        [
          "But Brian didn't stop at saying sorry.",
          "Airbnb announced something new called the Host Guarantee.",
          "Starting on August fifteenth, 2011, if a guest stole from a host or damaged their home, Airbnb would pay for the losses, up to fifty thousand dollars.",
          "And it didn't only count for the future.",
          "It also covered hosts who had already reported damage before it started, and that included EJ."
        ],
        [
          "The next year, Airbnb went even further.",
          "In 2012, it raised the Host Guarantee to one million dollars.",
          "Hosts didn't have to pay anything extra for it.",
          "Every booking was covered."
        ],
        [
          "For Brian, it was a painful lesson.",
          "Airbnb wasn't just a website anymore.",
          "Real people were opening their real homes, and they needed to know that someone had their back if something went wrong.",
          "When trust broke, saying sorry was only the first step.",
          "The company had to show, with real actions, that it would protect its hosts.",
          "Brian had learned that the hard way."
        ]
      ],
      questions: [
        { id: "q1", type: "main", en: "What happened to EJ's apartment, and how did Airbnb respond?", ko: "EJ의 아파트에 무슨 일이 있었고, Airbnb는 어떻게 대응했나요?",
          answer: "While she was away on a business trip, the guest she rented it to ransacked it, stole things, and trashed the place. Brian apologized in public, and Airbnb started the Host Guarantee, which paid hosts for theft or damage up to fifty thousand dollars." },
        { id: "q2", type: "verb", en: "What did EJ do after she found her home ransacked?", ko: "EJ는 집이 엉망이 된 것을 보고 나서 무엇을 했나요?",
          answer: "She wrote about what happened on her blog, and about a month later news websites picked up her story." },
        { id: "q3", type: "why", en: "Why was EJ's story a dangerous problem for Airbnb?", ko: "EJ의 이야기는 왜 Airbnb에 위험한 문제였나요?",
          answer: "Because people started asking if it was really safe to let a stranger stay in their home, and Airbnb was a company built on trust between strangers." },
        { id: "q4", type: "verb", en: "What did Brian admit in his blog post?", ko: "브라이언은 블로그 글에서 무엇을 인정했나요?",
          answer: "He admitted that the company had let EJ down, that they should have responded faster, communicated more sensitively, and taken more decisive action, and that they had dropped the ball. He said he was very sorry." },
        { id: "q5", type: "detail", en: "How much did the Host Guarantee cover in 2011, and how much in 2012?", ko: "Host Guarantee는 2011년에 얼마까지, 2012년에는 얼마까지 보상했나요?",
          answer: "Up to fifty thousand dollars in 2011, starting on August fifteenth. In 2012 it went up to one million dollars, at no extra cost to hosts." }
      ],
      facts: [
        { id: "f1", text: "In summer 2011 (late June), a San Francisco host known as EJ rented out her apartment on Airbnb while away on a business trip.", sources: ["s1", "s2", "s3", "s4"] },
        { id: "f2", text: "She came home after about a week of business travel and found her home ransacked — burglarized, vandalized and trashed by the Airbnb guest.", sources: ["s3", "s4", "s2"] },
        { id: "f3", text: "EJ wrote about it on her blog (June 29, 2011).", sources: ["s3", "s4", "s2"] },
        { id: "f4", text: "News sites reported the story about a month later, in late July 2011.", sources: ["s3", "s4"] },
        { id: "f5", text: "Chesky publicly admitted the company handled it badly, in blog posts.", sources: ["s1", "s5"] },
        { id: "f6", text: "Chesky's words: 'We let her down, and for that we are very sorry. We should have responded faster, communicated more sensitively, and taken more decisive action' — and the company 'dropped the ball'.", sources: ["s1", "s5"] },
        { id: "f7", text: "Airbnb announced a $50,000 Host Guarantee covering loss or damage from theft or vandalism by guests, starting August 15, 2011.", sources: ["s1", "s2", "s6"] },
        { id: "f8", text: "The guarantee was retroactive, covering hosts who had already reported damage, including EJ.", sources: ["s1", "s2"] },
        { id: "f9", text: "In 2012 (May 22) the Host Guarantee was raised to $1,000,000, at no cost to hosts, covering every booking (in eligible countries).", sources: ["s7", "s8", "s6"] }
      ],
      sources: [
        { id: "s1", type: "press", publisher: "TechCrunch", title: "Airbnb Offers Unconditional Apology, And $50,000 Insurance Guarantee", url: "https://techcrunch.com/2011/08/01/airbnb-offers-unconditional-apology-and-50000-insurance-guarantee/", accessed: "2026-10-18" },
        { id: "s2", type: "press", publisher: "Marketplace", title: "Airbnb: Sorry enough? We'll give you $50,000 guarantee", url: "https://www.marketplace.org/story/2011/08/02/airbnb-sorry-enough-give-you-50000-guarantee/", accessed: "2026-10-18" },
        { id: "s3", type: "press", publisher: "VentureBeat", title: "Airbnb user vandalism", url: "https://venturebeat.com/business/airbnb-user-vandalism", accessed: "2026-10-18" },
        { id: "s4", type: "press", publisher: "SFist", title: "San Francisco woman's apartment ransacked by Airbnb renter", url: "https://sfist.com/2011/07/28/san_francisco_womans_apartment_rans/", accessed: "2026-10-18" },
        { id: "s5", type: "wikipedia", publisher: "Wikipedia", title: "Brian Chesky", url: "https://en.wikipedia.org/wiki/Brian_Chesky", accessed: "2026-10-18" },
        { id: "s6", type: "grokipedia", publisher: "Grokipedia", title: "Airbnb", url: "https://grokipedia.com/page/Airbnb", accessed: "2026-10-18" },
        { id: "s7", type: "press", publisher: "TechCrunch", title: "Airbnb Makes Good, Will Now Cover Up To $1M In Property Damages", url: "https://techcrunch.com/?p=558125", accessed: "2026-10-18" },
        { id: "s8", type: "press", publisher: "The Next Web", title: "Airbnb partners with Lloyd's of London for the new million dollar Host Guarantee", url: "https://thenextweb.com/news/airbnb-partners-with-lloyds-of-london-for-the-new-million-dollar-host-guarantee", accessed: "2026-10-18" }
      ],
      dropped: [
        { text: "도둑맞은 물건(여권·신용카드·할머니 보석·카메라·노트북·사진 백업 드라이브)과 벽장 문을 부순 일", why: "SFist에서만 직접 확인(다른 글은 검색 결과로만) — 뺌, 'Things had been stolen'으로만 씀" },
        { text: "EJ의 실명", why: "SFist에만 나오고, 개인 정보라서 뺌 — 블로그 이름 'EJ'로만 씀" },
        { text: "24시간 고객 상담 전화를 연 일", why: "Sherman's Travel 기사를 검색 결과로만 봄(페이지에 본문이 안 나옴) — 뺌" },
        { text: "고객 서비스를 늘린 일·Chesky가 이 일을 'rebirth(다시 태어남)'라고 부른 일", why: "Wikipedia(Brian Chesky)에서만 확인돼서 뺌" },
        { text: "Chesky의 'we have really screwed things up'", why: "TechCrunch에서만 확인돼서 뺌" },
        { text: "Airbnb가 처음에 숙소·교통·돈을 지원하겠다고 한 일, 용의자 체포", why: "VentureBeat·SFist 둘 다 있지만 이야기를 사과와 Host Guarantee에 집중하려고 뺌" }
      ]
    },
    {
      id: "brian-chesky-5",
      no: 5,
      title: { en: "From Crisis to the Stock Market", ko: "위기에서 주식 시장으로" },
      script: [
        [
          "In early 2020, the COVID pandemic spread around the world.",
          "Countries closed their borders, and people stayed at home.",
          "Travel around the world came to a standstill.",
          "For a business that depended on travel, it was a disaster.",
          "Airbnb's business was hit very hard.",
          "Brian expected the company to earn less than half as much money in 2020 as it had the year before."
        ],
        [
          "That meant Brian had to make a very hard decision.",
          "On May fifth, 2020, he told his employees that Airbnb would lay off nearly nineteen hundred people.",
          "That was about one in four of the company's seven thousand five hundred workers.",
          "He shared the news in a long letter to his staff."
        ],
        [
          "In the letter, Brian explained why this was happening, and what the company would do for the people who were leaving.",
          "In the United States, they got fourteen weeks of pay, plus one more week for every year they had worked there.",
          "Airbnb also paid for twelve months of health insurance.",
          "The people leaving could even keep their company laptops.",
          "And the company put together an online directory to help them find new jobs."
        ],
        [
          "Brian didn't hide his feelings, either.",
          "He wrote that he had a deep feeling of love for all of them.",
          "He said he was truly sorry, and that this was not their fault."
        ],
        [
          "Then, slowly, something surprising happened.",
          "People still wanted to get away, but they didn't want to go very far.",
          "They booked homes close to where they lived, places where they could have a whole house to themselves.",
          "Some people even stayed for months at a time, mixing work and vacation.",
          "Airbnb began to come back."
        ],
        [
          "By the end of the year, the company was ready for its biggest moment yet.",
          "On December tenth, 2020, Airbnb became a public company, and its shares started trading on the Nasdaq stock market.",
          "The price had been set at sixty-eight dollars a share.",
          "Usually, a company rings a bell to start the day.",
          "Instead, Airbnb showed a video of its hosts around the world ringing their own doorbells."
        ],
        [
          "By the end of that first day, the share price had more than doubled.",
          "Airbnb was now worth about one hundred billion dollars.",
          "Only seven months earlier, Brian had been saying goodbye to a quarter of his staff.",
          "In a video message, he thanked Airbnb's guests.",
          "He said they had given the company hope that the idea of strangers staying together, in each other's homes, was not so crazy after all."
        ]
      ],
      questions: [
        { id: "q1", type: "main", en: "How did the COVID pandemic change things for Airbnb in 2020, from the start of the year to the end?", ko: "2020년에 코로나19는 Airbnb를 연초부터 연말까지 어떻게 바꿔 놓았나요?",
          answer: "Travel stopped and the business was hit hard, so Airbnb laid off nearly nineteen hundred people. Then people started booking homes close to where they lived, the company came back, and in December it became a public company worth about one hundred billion dollars." },
        { id: "q2", type: "verb", en: "What did Brian do on May fifth, 2020?", ko: "2020년 5월 5일에 브라이언은 무엇을 했나요?",
          answer: "He told his employees, in a long letter, that Airbnb would lay off nearly nineteen hundred people, about one in four workers." },
        { id: "q3", type: "why", en: "Why did Airbnb have to lay off so many people?", ko: "Airbnb는 왜 그렇게 많은 사람을 내보내야 했나요?",
          answer: "Because the pandemic stopped travel around the world, and Brian expected the company to earn less than half as much money in 2020 as the year before." },
        { id: "q4", type: "detail", en: "What did Airbnb give the people who were leaving in the United States?", ko: "Airbnb는 미국에서 회사를 떠나는 사람들에게 무엇을 주었나요?",
          answer: "Fourteen weeks of pay plus one more week for every year they had worked there, twelve months of health insurance, their company laptops, and an online directory to help them find new jobs." },
        { id: "q5", type: "detail", en: "What happened on Airbnb's first day on the stock market?", ko: "Airbnb가 주식 시장에 나온 첫날 무슨 일이 있었나요?",
          answer: "Instead of ringing a bell, it showed a video of hosts ringing their doorbells. The share price, set at sixty-eight dollars, more than doubled, and Airbnb was worth about one hundred billion dollars." }
      ],
      facts: [
        { id: "f1", text: "The COVID-19 pandemic (global lockdowns, travel restrictions) brought global travel to a standstill in 2020, and Airbnb's business was hit hard.", sources: ["s1", "s2", "s3", "s4"] },
        { id: "f2", text: "Airbnb's 2020 revenue was forecast to be less than half of 2019's.", sources: ["s1", "s2", "s4"] },
        { id: "f3", text: "On May 5, 2020, Chesky announced Airbnb would lay off nearly 1,900 employees.", sources: ["s1", "s2", "s4", "s3"] },
        { id: "f4", text: "That was about 25% of its roughly 7,500 employees.", sources: ["s1", "s2", "s4"] },
        { id: "f5", text: "He announced it in a letter (memo) to employees.", sources: ["s1", "s2"] },
        { id: "f6", text: "US employees got 14 weeks of base pay plus one week per year of tenure, and 12 months of health insurance (COBRA).", sources: ["s1", "s2"] },
        { id: "f7", text: "Departing employees could keep their laptops; Airbnb set up an Alumni Talent Directory to help them find jobs.", sources: ["s1", "s2"] },
        { id: "f8", text: "Chesky wrote 'I have a deep feeling of love for all of you' and 'I am truly sorry. Please know this is not your fault.'", sources: ["s1", "s2"] },
        { id: "f9", text: "Bookings recovered as people took nearby getaways, often whole homes to themselves, and long stays combining work and vacation.", sources: ["s6", "s7", "s8"] },
        { id: "f10", text: "On December 10, 2020, Airbnb went public on Nasdaq (ticker ABNB).", sources: ["s3", "s4", "s6", "s7"] },
        { id: "f11", text: "The IPO price was $68 per share.", sources: ["s4", "s6", "s7", "s8"] },
        { id: "f12", text: "Instead of the traditional bell ringing, Airbnb showed a video of hosts around the world ringing their doorbells.", sources: ["s7", "s8"] },
        { id: "f13", text: "The share price more than doubled on the first day (closing at $144.71).", sources: ["s7", "s8", "s6", "s5", "s9"] },
        { id: "f14", text: "At the first-day close Airbnb was valued at about (just over) $100 billion.", sources: ["s7", "s8", "s6"] },
        { id: "f15", text: "In a video message, Chesky thanked guests: 'You gave us hope that the idea of strangers staying together, in each others' homes, was not so crazy after all.'", sources: ["s7", "s8"] }
      ],
      sources: [
        { id: "s1", type: "official", publisher: "Airbnb Newsroom", title: "A Message from Co-Founder and CEO Brian Chesky", url: "https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky/", accessed: "2026-10-18" },
        { id: "s2", type: "press", publisher: "CNBC", title: "Airbnb to lay off nearly 1,900 people, 25% of company", url: "https://www.nbcbayarea.com/news/coronavirus/airbnb-to-lay-off-nearly-1900-people-25-percent-of-company/2284850/", accessed: "2026-10-18",
          note: "CNBC 기사(Deirdre Bosa·Salvador Rodriguez, 2020-05-05)를 NBC Bay Area에 같이 실린 글로 읽음" },
        { id: "s3", type: "wikipedia", publisher: "Wikipedia", title: "Airbnb", url: "https://en.wikipedia.org/wiki/Airbnb", accessed: "2026-10-18" },
        { id: "s4", type: "grokipedia", publisher: "Grokipedia", title: "Brian Chesky", url: "https://grokipedia.com/page/Brian_Chesky", accessed: "2026-10-18" },
        { id: "s5", type: "grokipedia", publisher: "Grokipedia", title: "Airbnb", url: "https://grokipedia.com/page/Airbnb", accessed: "2026-10-18" },
        { id: "s6", type: "press", publisher: "Fortune", title: "Airbnb IPO: share price, COVID, revenue and profit in 2020", url: "https://fortune.com/2020/12/09/airbnb-ipo-share-price-covid-revenue-profit-2020-brian-chesky-abnb-nasdaq/", accessed: "2026-10-18" },
        { id: "s7", type: "press", publisher: "Associated Press", title: "Airbnb, resilient in pandemic, goes forward with IPO", url: "https://www.ksat.com/business/2020/12/10/airbnb-resilient-in-pandemic-goes-forward-with-ipo/", accessed: "2026-10-18",
          note: "AP 기사(Dee-Ann Durbin)를 KSAT에 같이 실린 글로 읽음" },
        { id: "s8", type: "press", publisher: "NPR", title: "Airbnb now a $100 billion company after stock market debut sees stock price double", url: "https://www.kaxe.org/2020-12-10/airbnb-now-a-100-billion-company-after-stock-market-debut-sees-stock-price-double", accessed: "2026-10-18",
          note: "NPR 기사(Avie Schneider·Bobby Allyn)를 KAXE에 같이 실린 글로 읽음" },
        { id: "s9", type: "press", publisher: "Bloomberg", title: "Airbnb CEO Wealth Soars to $11.4 Billion as Stock Doubles in IPO", url: "https://news.bloomberglaw.com/private-equity/airbnb-ceo-brian-chesky-greets-ipo-after-wild-crazy-year", accessed: "2026-10-18",
          note: "유료 기사라 앞부분만 읽음(첫날 주가가 두 배 넘게 오름)" }
      ],
      dropped: [
        { text: "예약·매출이 줄어든 폭", why: "Wikipedia(Airbnb)는 일부 도시 예약 최대 96% 감소, NPR은 2주 만에 매출 80% 감소, Sequoia 글은 8주 만에 매출 80% 넘게 감소 — 서로 달라서 뺌('2019년의 절반도 안 될 것'이라는 예상만 씀)" },
        { text: "해고 인원 2,000명", why: "Fortune은 약 2,000명, 공식 편지·CNBC·Wikipedia·Grokipedia·AP·NPR은 약 1,900명 — 'nearly nineteen hundred'로 씀" },
        { text: "상장으로 모은 돈", why: "Wikipedia·Grokipedia는 35억 달러, Fortune은 약 34억 달러, AP(검색 결과)는 37억 달러 — 서로 달라서 뺌" },
        { text: "첫날 시초가", why: "Grokipedia·PYMNTS는 146달러, Fortune은 148달러 — 서로 달라서 뺌('more than doubled'로만 씀)" },
        { text: "Chesky가 Bloomberg TV에서 주가 이야기를 듣고 말을 잇지 못한 일", why: "검색 결과로만 봄(Bloomberg Law는 유료라 앞부분만 읽힘) — 뺌" },
        { text: "Chesky의 CNN 인터뷰 말('1월에는 6월에 우리가 어디 있을지 상상도 못 했다')", why: "검색 결과로만 봄 — 뺌" },
        { text: "Chesky의 재산 114억 달러", why: "Bloomberg에서만 확인돼서 뺌" }
      ]
    }
  ]
};
