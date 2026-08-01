/**
 * Topic-Based Quiz Data
 *
 * Unlike mcqQuestions.js (which holds transcribed past exam papers), this file holds
 * ORIGINAL questions authored from course topics/syllabus content — not tied to any
 * specific past exam sitting.
 *
 * Structure:
 * - Each course is keyed by a slug (e.g. "professional-ethics")
 * - Each course has metadata and an array of topics
 * - Each topic has an id, name, source reference, and array of questions
 * - Questions have: id, question text, optional context (scenario), options (a-d), and correct answer letter
 *
 * To add a new topic quiz, add a new topic object to the relevant course's topics array,
 * following the same question schema used in mcqQuestions.js.
 */

const topicQuizzes = {
  "professional-ethics": {
    courseName: "Professional Ethics & Skills",
    topics: [
      {
        id: "pe-topic-1",
        name: "Part 1: History of the Legal Profession, Entitlement to Practise & Etiquette",
        sourceRef: "Part 1 · pp. 3–17",
        questionsCount: 46,
        questions: [
          {
            id: 1,
            context: null,
            question:
              "Which body makes and revises the Rules of Professional Conduct, and under what provision?",
            options: {
              a: "The Body of Benchers, under s.10(1) LPA",
              b: "The General Council of the Bar, under s.12(4) LPA",
              c: "The Nigerian Bar Association, under its Constitution",
              d: "The Council of Legal Education, under the Legal Education Act",
            },
            answer: "b",
          },
          {
            id: 2,
            context: null,
            question: "What is the commencement date of the RPC 2007?",
            options: {
              a: "1 January 2007",
              b: "2 January 2007",
              c: "1 January 2006",
              d: "1 October 2007",
            },
            answer: "b",
          },
          {
            id: 3,
            context:
              "In August 2022, the Federal High Court, Abuja declared a purported 2020 amendment of the RPC 2007 illegal and invalid.",
            question: "Which rules did the purported 2020 amendment (S.I. No. 15 of 2020) delete?",
            options: {
              a: "Rules 1, 2, 3 and 4",
              b: "Rules 9(2), 10, 11, 12 and 13",
              c: "Rules 39, 40 and 41",
              d: "Rules 48 and 49",
            },
            answer: "b",
          },
          {
            id: 4,
            context: null,
            question:
              "Why was the 2020 amendment to the RPC declared illegal and invalid by the Federal High Court, Abuja?",
            options: {
              a: "Because it was made retroactively",
              b: "Because those meant to participate in the process did not",
              c: "Because it conflicted with the Constitution",
              d: "Because the National Assembly had not approved it",
            },
            answer: "b",
          },
          {
            id: 5,
            context: null,
            question: "What is the case authority for the purpose of the RPC?",
            options: {
              a: "Awolowo v Usman Sarki",
              b: "Fawehinmi v NBA (No. 2)",
              c: "Ikeme v Anekwe",
              d: "Okonjo v CLE",
            },
            answer: "c",
          },
          {
            id: 6,
            context: null,
            question:
              "Under the Supreme Court Ordinance 1876, which class of persons was automatically enrolled at the Supreme Court of Nigeria upon application to the CJN, without further examination?",
            options: {
              a: "Local Attorneys (s.74)",
              b: "Articled Clerks (s.73)",
              c: "Professionally Qualified Lawyers (s.71)",
              d: "Distinguished scholars of Islamic law",
            },
            answer: "c",
          },
          {
            id: 7,
            context: null,
            question:
              "Under s.71 of the Supreme Court Ordinance 1876, admission as a solicitor in which of the following countries did NOT qualify a person for automatic enrolment as a Professionally Qualified Lawyer?",
            options: {
              a: "England",
              b: "Scotland",
              c: "Ireland",
              d: "Wales",
            },
            answer: "d",
          },
          {
            id: 8,
            context: null,
            question:
              "Under s.73 of the Supreme Court Ordinance 1876, the CJN could admit an Articled Clerk as a Solicitor only after he served continuously for how many years in the office of a practising barrister or solicitor within the jurisdiction, and passed the prescribed examination?",
            options: {
              a: "3 years",
              b: "5 years",
              c: "7 years",
              d: "10 years",
            },
            answer: "b",
          },
          {
            id: 9,
            context: null,
            question:
              "A person served as an Articled Clerk for 5 years in the office of a practising solicitor and passed the prescribed examination under s.73 SCO 1876. He may be admitted by the CJN as:",
            options: {
              a: "Both a barrister and a solicitor",
              b: "A barrister only",
              c: "A solicitor only",
              d: "A Local Attorney only",
            },
            answer: "c",
          },
          {
            id: 10,
            context: null,
            question:
              "Under s.74 SCO 1876, a Local Attorney's licence to practise was for how long, and was it renewable?",
            options: {
              a: "6 months, not renewable",
              b: "6 months, renewable",
              c: "12 months, renewable",
              d: "2 years, not renewable",
            },
            answer: "b",
          },
          {
            id: 11,
            context: null,
            question: "Approximately how many persons were licensed as Local Attorneys under s.74 SCO 1876, and after what year was none appointed?",
            options: {
              a: "About 10; none after 1900",
              b: "About 30; none after 1914",
              c: "About 50; none after 1920",
              d: "About 100; none after 1962",
            },
            answer: "b",
          },
          {
            id: 12,
            context:
              "Between 1914 and 1962, practice in Nigeria was restricted to those qualified as barristers or solicitors in Britain.",
            question:
              "During this period, a person who qualified as EITHER a barrister or a solicitor in Britain practised in Nigeria as:",
            options: {
              a: "A barrister only",
              b: "A solicitor only",
              c: "Both barrister and solicitor",
              d: "Neither, until he qualified as both in Britain",
            },
            answer: "c",
          },
          {
            id: 13,
            context: null,
            question:
              "Which of the following is the correct mnemonic grouping (MILG) of the four English Inns of Court to which admission was required under the English barrister route?",
            options: {
              a: "Middle Temple, Inner Temple, Lincoln's Inn, Gray's Inn",
              b: "Middle Temple, Inns of Chancery, Law Society, Gray's Inn",
              c: "Marshall Hall, Inner Temple, Lincoln's Inn, Grand Council",
              d: "Middle Temple, Inner Bar, Legal Inn, General Council",
            },
            answer: "a",
          },
          {
            id: 14,
            context: null,
            question:
              "Under the English barrister route, how many dining terms had to be kept, over how many years?",
            options: {
              a: "3 dining terms over 1 year",
              b: "6 dining terms over 2 years",
              c: "12 dining terms, four per year over a 3-year programme",
              d: "9 dining terms over 3 years",
            },
            answer: "c",
          },
          {
            id: 15,
            context: null,
            question:
              "Under the English solicitor route, articleship to a firm of solicitors normally lasted 4 years. For how many years was a law graduate articled?",
            options: {
              a: "1 year",
              b: "2 years",
              c: "3 years",
              d: "4 years — no exemption was available to graduates",
            },
            answer: "b",
          },
          {
            id: 16,
            context: null,
            question:
              "Which of the following was NOT among the three deficiencies identified in the English-trained lawyer practising in Nigeria before 1962?",
            options: {
              a: "He was trained as either barrister or solicitor but practised in Nigeria as both",
              b: "He studied English law only, with no Nigerian customary or land law",
              c: "He had no right of audience in any Nigerian court",
              d: "Most had no university degree, no post-call practical course and no pupillage",
            },
            answer: "c",
          },
          {
            id: 17,
            context:
              "From 1945, Order 16 r.1 of the Supreme Court (Civil Procedure) Rules 1945 (made under the SCO 1943, which repealed the SCO 1876) added five discretionary enrolment routes.",
            question:
              "Which of the following was one of the five discretionary enrolment routes introduced in 1945?",
            options: {
              a: "Reading in Nigeria in chambers of a barrister of 10 years' standing for 2 years",
              b: "Passing the Bar Part I examination only",
              c: "Serving as a Local Attorney for 6 months",
              d: "Obtaining a first-class law degree from a Nigerian university",
            },
            answer: "a",
          },
          {
            id: 18,
            context: null,
            question: "Who chaired the Unsworth Committee (April 1959), and what was his office?",
            options: {
              a: "Chief Rotimi Williams, Chairman of the Body of Benchers",
              b: "Justice Taslim Elias, Chief Justice of Nigeria",
              c: "E.I.G. Unsworth, Attorney-General of the Federation",
              d: "Christopher Sapara Williams, first Nigerian lawyer",
            },
            answer: "c",
          },
          {
            id: 19,
            context: null,
            question: "What was NOT part of the Unsworth Committee's mandate?",
            options: {
              a: "The future of legal education and admission to practice",
              b: "The right of audience before the courts",
              c: "Reciprocal arrangements with other countries",
              d: "The remuneration scale for legal practitioners",
            },
            answer: "d",
          },
          {
            id: 20,
            context: null,
            question:
              "Which two statutes implemented the Unsworth Committee's recommendations, including the establishment of the Council of Legal Education?",
            options: {
              a: "The Legal Practitioners Act 1975 and the Evidence Act",
              b: "The Legal Education Act 1962 and the Legal Practitioners Act 1962",
              c: "The Constitution 1963 and the Legal Practitioners Act 1975",
              d: "The Rules of Professional Conduct 1967 and the Legal Education Act 1976",
            },
            answer: "b",
          },
          {
            id: 21,
            context: null,
            question:
              "The Nigerian Law School began its first course in January–April 1963 at which address, for how many students?",
            options: {
              a: "213 Igbosere Road, Lagos — 8 students already called in England",
              b: "Bwari, Abuja — 20 students",
              c: "Victoria Island, Lagos — 50 students",
              d: "University College, Ibadan — 8 students",
            },
            answer: "a",
          },
          {
            id: 22,
            context: null,
            question:
              "Under s.4(1) LPA, as amended by Decree No. 9 of 1992, which of the following conditions for Call to Bar changed?",
            options: {
              a: "The dining-terms requirement was abolished",
              b: "Non-Nigerians may now be called to the Bar",
              c: "Sponsorship no longer requires signatures of Benchers",
              d: "The call fee was abolished",
            },
            answer: "b",
          },
          {
            id: 23,
            context:
              "A candidate for Call to Bar presents his qualifying certificate to the Benchers, has paid the call fee, and has kept his dining terms, but his sponsorship form was signed by only one member of the Body of Benchers.",
            question: "Is this candidate's sponsorship compliant with s.18(4) of the Body of Benchers Regulations?",
            options: {
              a: "Yes — one signature is sufficient",
              b: "No — the sponsorship form must be signed by at least 2 members of the Body of Benchers",
              c: "Yes — provided the signatory is a life bencher",
              d: "No — sponsorship must be signed by the Chief Justice of Nigeria personally",
            },
            answer: "b",
          },
          {
            id: 24,
            context:
              "Full exemption from the NLS course under Legal Notice 439 of 5 July 1989 requires several conditions to be met cumulatively.",
            question: "Which of the following is NOT one of the conditions for full exemption from the NLS course?",
            options: {
              a: "The applicant must be a Nigerian citizen",
              b: "The applicant must have 5 years' engagement in law practice",
              c: "The applicant must have taught law in a Nigerian faculty for at least 10 years",
              d: "The applicant must have lost the opportunity of attending for reasons beyond his control",
            },
            answer: "c",
          },
          {
            id: 25,
            context:
              "A group of Bar aspirants attend their final Call dinner. After the Body of Benchers has entered the hall, one aspirant who arrived late attempts to enter.",
            question:
              "Under s.18(1) of the Body of Benchers Regulations, what is the position on entry to the dinner hall after the Benchers have entered?",
            options: {
              a: "Late entry is permitted with the presiding Bencher's leave",
              b: "No other person may enter the hall after the Benchers' entry — this is a strict-liability rule",
              c: "Late entry is permitted if the aspirant has already kept 3 dining terms",
              d: "Late entry is permitted provided the aspirant apologises to the Chairman",
            },
            answer: "b",
          },
          {
            id: 26,
            context: null,
            question: "In what year was Lagos ceded, and by whom?",
            options: {
              a: "1861, by King Dosunmu",
              b: "1876, by King Kosoko",
              c: "1901, by the British Crown",
              d: "1914, by Lord Lugard",
            },
            answer: "a",
          },
          {
            id: 27,
            context: null,
            question:
              "Of the 7 magistrates appointed in Lagos in 1862, how many were lawyers?",
            options: {
              a: "1",
              b: "3",
              c: "5",
              d: "7",
            },
            answer: "b",
          },
          {
            id: 28,
            context: null,
            question:
              "Which of the following correctly states the three historical eras of the legal profession in Nigeria identified in the note?",
            options: {
              a: "1861–1914; 1914–1962; post-1962",
              b: "1876–1914; 1914–1962; post-1962",
              c: "1876–1945; 1945–1963; post-1963",
              d: "1861–1962; 1962–1976; post-1976",
            },
            answer: "b",
          },
          {
            id: 29,
            context: null,
            question: "Who was the last (and refused) Local Attorney applicant, and when was his appeal dismissed?",
            options: {
              a: "Christopher Sapara Williams — appeal dismissed 1888",
              b: "Stella Mark — appeal dismissed 1935",
              c: "J. Osho Davies — appeal dismissed April 1913",
              d: "Chief Rotimi Williams — appeal dismissed 1975",
            },
            answer: "c",
          },
          {
            id: 30,
            context: null,
            question:
              "Under s.7(1) LPA, a person may practise generally as a legal practitioner only if:",
            options: {
              a: "He has completed 5 years' pupillage",
              b: "His name is on the roll kept by the Chief Registrar of the Supreme Court",
              c: "He has a warrant from the CJN",
              d: "He is a member of the NBA in good standing",
            },
            answer: "b",
          },
          {
            id: 31,
            context: null,
            question:
              "How is good character for Call to Bar usually established under s.4(1) LPA and the Body of Benchers Regulations?",
            options: {
              a: "A sworn affidavit by the candidate alone",
              b: "A sponsorship form signed by at least 2 members of the Body of Benchers",
              c: "A police character certificate",
              d: "An interview conducted by the Attorney-General of the Federation",
            },
            answer: "b",
          },
          {
            id: 32,
            context: null,
            question: "What is the minimum attendance requirement at the Nigerian Law School for issuance of a qualifying certificate?",
            options: {
              a: "60%",
              b: "70%",
              c: "75%",
              d: "80%",
            },
            answer: "c",
          },
          {
            id: 33,
            context: null,
            question:
              "Legal Notice 439 (5 July 1989) provides for full exemption from the NLS course; Legal Notice 446 (3 Aug 1989) provides for partial exemption. Which category does Legal Notice 446 cover?",
            options: {
              a: "Full exemption for Nigerian citizens in law practice for 5 years",
              b: "Partial exemption (Bar Part I only) for Nigerian university law teachers",
              c: "Full exemption for non-Nigerian citizens",
              d: "Partial exemption for Local Attorneys",
            },
            answer: "b",
          },
          {
            id: 34,
            context:
              "A Nigerian university law teacher seeks partial exemption (Bar Part I only) under Legal Notice 446 of 3 August 1989.",
            question:
              "What is the minimum number of years of teaching required for exemption where the teacher is a graduate of a common-law jurisdiction, as opposed to a non-common-law jurisdiction?",
            options: {
              a: "5 years (common-law); 10 years (non-common-law)",
              b: "3 years (common-law); 7 years (non-common-law)",
              c: "10 years (common-law); 15 years (non-common-law)",
              d: "5 years for both",
            },
            answer: "a",
          },
          {
            id: 35,
            context: null,
            question:
              "Under s.7(2) LPA, who makes regulations providing for the enrolment of persons authorised to practise in countries that afford Nigerian practitioners reciprocal facilities, and after consulting whom?",
            options: {
              a: "The Chief Justice of Nigeria, after consulting the Body of Benchers",
              b: "The Attorney-General of the Federation, after consultation with the Bar Council",
              c: "The National Assembly, after consulting the NBA",
              d: "The Council of Legal Education, after consulting the NUC",
            },
            answer: "b",
          },
          {
            id: 36,
            context:
              "A legal practitioner's name was struck off the roll by direction of the Supreme Court following disciplinary proceedings. He later seeks re-enrolment.",
            question: "Under s.7(3) LPA, can a name struck off the roll by direction of the Supreme Court or the LPDC be re-enrolled?",
            options: {
              a: "Yes, after 5 years",
              b: "Yes, with the Attorney-General's consent",
              c: "No — a name so struck off shall not be re-enrolled",
              d: "Yes, if the LPDC certifies rehabilitation",
            },
            answer: "c",
          },
          {
            id: 37,
            context: null,
            question:
              "Under s.2(3) LPA, which officers may practise by virtue of their office, but only for the purpose of that office and only while in office, with no private practice?",
            options: {
              a: "SANs and Life Benchers",
              b: "The Attorney-General, Solicitor-General and DPP (Federation or State)",
              c: "Chief Registrars of the High Courts",
              d: "Members of the National Judicial Council",
            },
            answer: "b",
          },
          {
            id: 38,
            context:
              "A foreign advocate, from a country whose legal system is similar to Nigeria's, wishes to appear in a single set of proceedings in Nigeria under a warrant.",
            question: "Under s.2(2) LPA, who grants such a warrant, and what is the maximum fee payable?",
            options: {
              a: "The NBA President; no fee",
              b: "The CJN, in his discretion, on payment of a fee not exceeding ₦50",
              c: "The Chief Registrar; a fee of ₦5,000",
              d: "The Body of Benchers; a fee not exceeding ₦500",
            },
            answer: "b",
          },
          {
            id: 39,
            context: null,
            question: "Does a s.2(2) LPA warrant for a particular proceeding also cover an appeal arising from that proceeding?",
            options: {
              a: "No — a fresh warrant is required for the appeal",
              b: "Yes — the warrant for a proceeding also covers the appeal on it",
              c: "Only if the CJN expressly extends it",
              d: "Only where the appeal is to the Supreme Court",
            },
            answer: "b",
          },
          {
            id: 40,
            context:
              "In Awolowo v Usman Sarki, a warrant-holder was denied a visa and could not attend Nigeria to represent his client.",
            question: "What did the court hold regarding the warrant-holder's disability in that case?",
            options: {
              a: "The constitutional right to counsel of one's choice was violated",
              b: "The warrant-holder must be without any disability; denial of a visa did not violate the right to counsel of choice",
              c: "The CJN was required to issue a substitute warrant immediately",
              d: "The case was decided on the ground of natural justice, not disability",
            },
            answer: "b",
          },
          {
            id: 41,
            context: null,
            question: "Who was the first lawyer in Nigeria, called to the English Bar in 1886 and practising from 1888?",
            options: {
              a: "Chief Rotimi Williams",
              b: "Justice Taslim Elias",
              c: "Christopher Alexander Sapara Williams",
              d: "Stella Mark",
            },
            answer: "c",
          },
          {
            id: 42,
            context: null,
            question: "Who was the first female lawyer in Nigeria (1935), also the first female magistrate?",
            options: {
              a: "Justice Mariam Aloma Muktar",
              b: "Stella Mark",
              c: "Chief (Mrs) Folake Solanke",
              d: "Justice Kudirat Kekere-Ekun",
            },
            answer: "b",
          },
          {
            id: 43,
            context: null,
            question:
              "Match the following: first name on the roll of SANs (1975); first Nigerian Attorney-General of the Federation (1960); first female Chief Justice of Nigeria (2012).",
            options: {
              a: "Chief Rotimi Williams; Justice Taslim Elias; Justice Mariam Aloma Muktar",
              b: "Christopher Sapara Williams; Justice Taslim Elias; Stella Mark",
              c: "Chief Rotimi Williams; Chief Bola Ige; Justice Aloma Muktar",
              d: "Justice Taslim Elias; Chief Rotimi Williams; Stella Mark",
            },
            answer: "a",
          },
          {
            id: 44,
            context: null,
            question: "How many dining terms must a Bar aspirant keep in Nigeria today, and what is their stated essence?",
            options: {
              a: "12 terms, for exposure to English legal culture",
              b: "3 terms, for exposure to eminent members of Bar and Bench and the profession's intangible attributes",
              c: "6 terms, purely a revenue-generating requirement",
              d: "1 term, as a formality only",
            },
            answer: "b",
          },
          {
            id: 45,
            context:
              "At a Call dinner, a male aspirant arrives dressed in a dark suit with a white breast-pocket square, white shirt, and a bow tie instead of a black tie.",
            question: "Is this aspirant properly dressed under the dress-code rules for the dinner?",
            options: {
              a: "Yes — a bow tie is an acceptable alternative to a black tie",
              b: "No — males must wear a black tie, not a bow tie",
              c: "Yes — provided the suit and shirt are correct, tie style is immaterial",
              d: "No — because bow ties are reserved for judges only",
            },
            answer: "b",
          },
          {
            id: 46,
            context:
              "During the Call dinner, a student wishes to signal to the staff that they have finished eating.",
            question: "What is the correct signal, per dining etiquette?",
            options: {
              a: "Raising a hand",
              b: "Placing the cutlery together at the side of the plate",
              c: "Standing up from the table",
              d: "Pushing the plate to the centre of the table",
            },
            answer: "b",
          },
        ],
      },
      {
        id: "pe-topic-2",
        name: "Part 2: Regulatory Bodies, SAN, Precedence, Practising Fees & Exclusive Rights",
        sourceRef: "Part 2 · pp. 18–40",
        questionsCount: 60,
        questions: [
          {
            id: 1,
            context: null,
            question:
              "Which of the following correctly groups the eight regulatory/controlling bodies by function: two judiciary-focused, two that manage lawyers, three that regulate lawyers, and one that regulates law students?",
            options: {
              a: "BOB & NJC (judiciary); GCB & NBA (manage lawyers); LPDC, LPPC, LPRC (regulate lawyers); CLE (students)",
              b: "NJC & LPDC (judiciary); GCB & CLE (manage lawyers); NBA, LPPC, LPRC (regulate lawyers); BOB (students)",
              c: "BOB & LPPC (judiciary); NBA & LPRC (manage lawyers); NJC, GCB, CLE (regulate lawyers); LPDC (students)",
              d: "GCB & NBA (judiciary); BOB & NJC (manage lawyers); CLE, LPRC, LPPC (regulate lawyers); LPDC (students)",
            },
            answer: "a",
          },
          {
            id: 2,
            context: null,
            question: "What is the establishing provision of the Body of Benchers (BOB)?",
            options: {
              a: "s.1(1) LPA",
              b: "s.3(1) LPA, as amended by Decree No. 21 of 1994",
              c: "s.5(3) LPA",
              d: "s.11(1) LPA",
            },
            answer: "b",
          },
          {
            id: 3,
            context: null,
            question:
              "How many legal practitioners does the NBA nominate to the Body of Benchers, and how many additional eminent legal practitioners (of at least 15 years' standing) may the Body itself choose to add?",
            options: {
              a: "20 nominated by NBA; up to 5 eminent LPs added",
              b: "30 nominated by NBA; up to 10 eminent LPs added",
              c: "15 nominated by NBA; up to 15 eminent LPs added",
              d: "30 nominated by NBA; no additional LPs permitted",
            },
            answer: "b",
          },
          {
            id: 4,
            context: null,
            question:
              "What is the general quorum of the Body of Benchers, and what quorum is required to elect a vice-chairman or a new member?",
            options: {
              a: "General quorum 8; election quorum 10",
              b: "General quorum 10; election quorum 15",
              c: "General quorum 15; election quorum 20",
              d: "General quorum 10; election quorum 10 (same figure)",
            },
            answer: "b",
          },
          {
            id: 5,
            context:
              "The National Executive Committee (NEC) of the NBA is deadlocked by an internal dispute, and the Body of Benchers wishes to appoint a caretaker committee to run the Association.",
            question:
              "Which of the following is NOT one of the three grounds on which the BOB may appoint a caretaker committee for the NBA (for a maximum of 12 months)?",
            options: {
              a: "Election stalemate — no fresh elections more than 30 days after expiry of tenure",
              b: "A dispute paralysing the NEC",
              c: "A resolution of the NEC requesting it",
              d: "A complaint by a third party alleging financial misconduct",
            },
            answer: "d",
          },
          {
            id: 6,
            context: null,
            question: "Who must the Chairman of the Body of Benchers be?",
            options: {
              a: "The most senior Justice of the Supreme Court",
              b: "A life bencher",
              c: "The Attorney-General of the Federation",
              d: "The President of the NBA",
            },
            answer: "b",
          },
          {
            id: 7,
            context: null,
            question: "Can honorary or supernumerary benchers sponsor a Bar aspirant for Call?",
            options: {
              a: "Yes, provided two of them jointly sign",
              b: "No — sponsorship requires ordinary or life benchers, not honorary/supernumerary members",
              c: "Yes, but only for candidates from their own State",
              d: "Yes, if approved by the Attorney-General",
            },
            answer: "b",
          },
          {
            id: 8,
            context: null,
            question:
              "Which officers enjoy inner-bar privileges under s.6(2) LPA (alongside life benchers under s.6(3))?",
            options: {
              a: "The AGF, Attorneys-General of States, and the Secretary to the Government of the Federation (SGF)",
              b: "All SANs regardless of seniority",
              c: "The President of the NBA and all branch chairmen",
              d: "All Chief Judges of the States",
            },
            answer: "a",
          },
          {
            id: 9,
            context: null,
            question: "What is the establishing provision of the National Judicial Council (NJC), and who appoints all its members?",
            options: {
              a: "s.153(1)(i) CFRN; appointed by the President",
              b: "s.153(1)(i) CFRN; appointed by the Chief Justice of Nigeria",
              c: "s.6(5) CFRN; appointed by the National Assembly",
              d: "s.231 CFRN; appointed by the Senate",
            },
            answer: "b",
          },
          {
            id: 10,
            context: null,
            question:
              "How many NBA members sit on the NJC, of what minimum standing, and with what special composition requirement?",
            options: {
              a: "5 members, of at least 15 years' standing, at least one a SAN, on NBA NEC recommendation",
              b: "3 members, of at least 10 years' standing, with no SAN requirement",
              c: "10 members, of any standing, appointed by the CJN alone",
              d: "5 members, of at least 20 years' standing, all of whom must be SANs",
            },
            answer: "a",
          },
          {
            id: 11,
            context: null,
            question: "How many non-lawyers of unquestionable integrity sit on the NJC?",
            options: {
              a: "1",
              b: "2",
              c: "3",
              d: "5",
            },
            answer: "b",
          },
          {
            id: 12,
            context: null,
            question:
              "What is the composition and quorum of the General Council of the Bar (GCB) under s.1(1) LPA?",
            options: {
              a: "AGF (president), AGs of the States, 20 LPs elected by the NBA (at least 7 of not less than 10 years' standing); quorum 8",
              b: "CJN (chairman), 20 LPs elected by NBA; quorum 15",
              c: "AGF (president), 30 LPs elected by NBA; quorum 10",
              d: "AGF (president), AGs of the States, 10 LPs nominated by BOB; quorum 5",
            },
            answer: "a",
          },
          {
            id: 13,
            context: null,
            question:
              "Following Decree No. 21 of 1994, the General Council of the Bar's power of general management of the NBA was transferred to which body?",
            options: {
              a: "The Legal Practitioners Disciplinary Committee",
              b: "The Body of Benchers",
              c: "The National Judicial Council",
              d: "The Council of Legal Education",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "A dispute arises over whether the Nigerian Bar Association can be sued directly in its own name.",
            question:
              "In whose name does the NBA sue and get sued, and which case and CAMA part governs its registration?",
            options: {
              a: "In its own name as 'Nigerian Bar Association', under Part F CAMA 2020",
              b: "As the 'Registered Trustees of the Nigerian Bar Association', under Part F CAMA 2020 — Fawehinmi v NBA (No. 2)",
              c: "As 'The Attorney-General on behalf of the NBA', under the Land Use Act",
              d: "As the 'Body of Benchers Trustees', under the Companies Act 1968",
            },
            answer: "b",
          },
          {
            id: 15,
            context: null,
            question:
              "Under Rule 11 RPC, what are the annual CPD credit hours required for a lawyer of 3 years, 8 years, and 20 years post-call respectively?",
            options: {
              a: "24; 18; 12",
              b: "12; 18; 24",
              c: "20; 15; 10",
              d: "24; 24; 24 (uniform for all lawyers)",
            },
            answer: "a",
          },
          {
            id: 16,
            context: null,
            question: "Who issues the practising certificate to a legal practitioner, and who issues the receipt for practising fees?",
            options: {
              a: "The NBA issues the practising certificate (Rule 12 RPC); the Registrar of the Supreme Court issues the fee receipt (s.8 LPA)",
              b: "The Registrar of the Supreme Court issues the practising certificate; the NBA issues the fee receipt",
              c: "The Body of Benchers issues both",
              d: "The LPPC issues the practising certificate; the CLE issues the fee receipt",
            },
            answer: "a",
          },
          {
            id: 17,
            context: null,
            question: "What is the composition of the Legal Practitioners' Privileges Committee (LPPC) under s.5(3) LPA?",
            options: {
              a: "CJN (chairman), AGF, 1 JSC, PCA, 5 CJs of States, 5 SANs",
              b: "AGF (chairman), 20 LPs elected by NBA, 5 SANs",
              c: "CJN (chairman), 10 SANs only",
              d: "PCA (chairman), AGF, 5 JSCs, 5 CJs",
            },
            answer: "a",
          },
          {
            id: 18,
            context:
              "The LPPC wishes to sanction a Senior Advocate of Nigeria for conduct connected only with the exercise of the rank of SAN.",
            question:
              "For how long may the LPPC suspend a SAN, and what exactly is suspended?",
            options: {
              a: "Not less than 6 months; the rank of SAN, not the holder as a legal practitioner",
              b: "Not less than 1 year; the holder's entire licence to practise",
              c: "Indefinitely; the rank of SAN",
              d: "Not less than 3 months; both the rank and the right of audience",
            },
            answer: "a",
          },
          {
            id: 19,
            context:
              "A complaint of professional misconduct is filed against a Senior Advocate of Nigeria, alleging conduct going beyond the mere exercise of the SAN rank.",
            question: "Which body has jurisdiction over general disciplinary matters concerning a SAN, as opposed to matters touching only the rank itself?",
            options: {
              a: "The LPPC in all cases",
              b: "The LPDC — the LPPC's jurisdiction is confined to the rank of SAN",
              c: "The NJC",
              d: "The Body of Benchers directly, bypassing the LPDC",
            },
            answer: "b",
          },
          {
            id: 20,
            context: null,
            question: "Who may NOT chair the Legal Practitioners Disciplinary Committee (LPDC)?",
            options: {
              a: "A retired Justice of the Court of Appeal",
              b: "The CJN or any Justice of the Supreme Court",
              c: "A State Attorney-General",
              d: "An NBA member unconnected with the complaint",
            },
            answer: "b",
          },
          {
            id: 21,
            context: null,
            question:
              "Under s.12(7) LPA, an appeal from a decision of the LPDC lies where, and within what time?",
            options: {
              a: "Directly to the Supreme Court, within 28 days of service of the notice of direction",
              b: "To the Court of Appeal, within 30 days",
              c: "To the Federal High Court, within 21 days",
              d: "To the National Judicial Council, within 14 days",
            },
            answer: "a",
          },
          {
            id: 22,
            context: null,
            question: "Who makes the LPDC's procedural rules?",
            options: {
              a: "The National Assembly",
              b: "The Chief Justice of Nigeria",
              c: "The Body of Benchers by internal resolution",
              d: "The Attorney-General of the Federation",
            },
            answer: "b",
          },
          {
            id: 23,
            context: null,
            question: "Who chairs the Legal Practitioners' Remuneration Committee (LPRC), and what is its quorum under s.15(2) LPA?",
            options: {
              a: "The AGF chairs; quorum 3, one being the chairman or his nominee",
              b: "The President of the NBA chairs; quorum 5",
              c: "The CJN chairs; quorum 2",
              d: "The Chief Registrar chairs; quorum 4",
            },
            answer: "a",
          },
          {
            id: 24,
            context: null,
            question:
              "Who appoints the chairman of the Council of Legal Education (CLE), and for how long is the term (renewable how many times)?",
            options: {
              a: "The President, on the AGF's recommendation, for 4 years, renewable once",
              b: "The CJN, for 2 years, renewable indefinitely",
              c: "The NBA President, for 3 years, not renewable",
              d: "The Body of Benchers, for 5 years, renewable once",
            },
            answer: "a",
          },
          {
            id: 25,
            context: null,
            question: "Which body has juristic personality — the Council of Legal Education (CLE) or the Nigerian Law School (NLS) — and what is the authority?",
            options: {
              a: "The NLS only — Okonjo v CLE",
              b: "The CLE only — Okonjo v CLE",
              c: "Both have juristic personality",
              d: "Neither has juristic personality",
            },
            answer: "b",
          },
          {
            id: 26,
            context: null,
            question: "Name the three privileges of a Senior Advocate of Nigeria (SAN).",
            options: {
              a: "Exclusive right to sit in the inner bar; right to mention matters out of turn; right to wear a silk gown",
              b: "Right to a reserved parking space; right to free filing; right to waive court fees",
              c: "Right to sit as a judge; right to sign court processes for other lawyers; right to a state pension",
              d: "Right to inner bar seating only — no other privileges exist",
            },
            answer: "a",
          },
          {
            id: 27,
            context:
              "A Senior Advocate of Nigeria wishes to appear alone (without a junior or another SAN) in a civil matter before a superior court, in open court.",
            question: "Is this permitted under Rule 2(1) of the SAN (Privileges & Functions) Rules?",
            options: {
              a: "Yes — a SAN may always appear alone in any matter",
              b: "No — in civil cases before a superior court in open court, a SAN needs a junior or another SAN (exception: judge's chambers or matters not in open court)",
              c: "Yes, provided the matter is uncontested",
              d: "No — a SAN can never appear alone in any civil case, even in chambers",
            },
            answer: "b",
          },
          {
            id: 28,
            context:
              "A Senior Advocate of Nigeria wishes to appear alone in a criminal matter, and separately wishes to appear before a Magistrate Court.",
            question: "Which of the following correctly states the SAN's rights in these two scenarios?",
            options: {
              a: "He may appear alone in any criminal case in any court, but cannot appear before an inferior court such as a Magistrate Court",
              b: "He may not appear alone in criminal cases, but may appear before a Magistrate Court",
              c: "He may appear alone in both scenarios without restriction",
              d: "He may appear in neither scenario without a junior",
            },
            answer: "a",
          },
          {
            id: 29,
            context: null,
            question: "Under Rule 5 of the SAN (Privileges & Functions) Rules, a SAN shall not draft any instrument for a fee below what amount, subject to what two exceptions?",
            options: {
              a: "₦400 — except gratuitous drafting and instruments connected with parliamentary processes",
              b: "₦1,000 — except pro bono matters only",
              c: "₦4,000 — no exceptions apply",
              d: "There is no minimum fee for instrument drafting by a SAN",
            },
            answer: "a",
          },
          {
            id: 30,
            context: null,
            question: "By s.5(8) LPA, a SAN shall not practise other than as a barrister, unless:",
            options: {
              a: "He obtains written permission from the LPPC",
              b: "He is in partnership with a legal practitioner who is not a SAN",
              c: "He has practised for more than 20 years",
              d: "The exception does not exist — a SAN can never practise as anything but a barrister",
            },
            answer: "b",
          },
          {
            id: 31,
            context: null,
            question:
              "For conferment of the rank of Advocate-SAN under the 2022 Guidelines, how many years of active practice as an advocate immediately preceding the application are required, per s.5(2) LPA?",
            options: {
              a: "5 years",
              b: "7 years",
              c: "10 years",
              d: "15 years",
            },
            answer: "c",
          },
          {
            id: 32,
            context:
              "An Advocate-SAN applicant is required to demonstrate a minimum number of final judgments obtained across different court levels.",
            question:
              "Under the 2022 Guidelines, how many final judgments of superior courts of record/Election Tribunals, Court of Appeal, and Supreme Court respectively must an Advocate-SAN applicant show (with an alternative for Supreme Court cases run from the High Court)?",
            options: {
              a: "20 superior court + 5 Court of Appeal + 4 Supreme Court (or 3 if the case was conducted from High Court to Supreme Court)",
              b: "10 superior court + 3 Court of Appeal + 2 Supreme Court, with no alternative",
              c: "30 superior court + 10 Court of Appeal + 5 Supreme Court",
              d: "15 superior court + 5 Court of Appeal + 5 Supreme Court",
            },
            answer: "a",
          },
          {
            id: 33,
            context: null,
            question:
              "Which of the following does NOT count as a 'final judgment' for the purpose of the Advocate-SAN case-count requirement?",
            options: {
              a: "A judgment after a fully contested trial",
              b: "A default judgment on the undefended list",
              c: "A Court of Appeal judgment affirming the trial court",
              d: "A Supreme Court judgment on a novel point of law",
            },
            answer: "b",
          },
          {
            id: 34,
            context: null,
            question: "What is the minimum number of full-time salaried junior legal practitioners required in an Advocate-SAN applicant's law firm?",
            options: {
              a: "2",
              b: "3",
              c: "5",
              d: "10",
            },
            answer: "c",
          },
          {
            id: 35,
            context: null,
            question:
              "For Academic-SAN conferment under the 2022 Guidelines, the 35 required published works break down into which components?",
            options: {
              a: "5 academic works + 20 peer-reviewed journal articles + 10 conference/seminar presentations",
              b: "10 academic works + 15 journal articles + 10 conference papers",
              c: "20 academic works + 10 journal articles + 5 conference papers",
              d: "35 journal articles only, with no other category",
            },
            answer: "a",
          },
          {
            id: 36,
            context: null,
            question:
              "For Academic-SAN, how many years of full-time law teaching are required, and for how many years preceding the application must the candidate have been a full professor?",
            options: {
              a: "10 years of teaching; 2 years as full professor preceding the application",
              b: "5 years of teaching; 5 years as full professor",
              c: "15 years of teaching; 1 year as full professor",
              d: "10 years of teaching; no professorship requirement",
            },
            answer: "a",
          },
          {
            id: 37,
            context: null,
            question: "By what date must SAN applications be called for, and by what date must forms be returned to the LPPC Secretariat?",
            options: {
              a: "Call for applications not later than 1 November; forms returned not later than 31 January",
              b: "Call not later than 1 January; forms returned not later than 31 March",
              c: "Call not later than 1 July; forms returned not later than 30 September",
              d: "There are no fixed dates — applications are received year-round",
            },
            answer: "a",
          },
          {
            id: 38,
            context: null,
            question: "The published shortlist of SAN candidates must not exceed how many times the number of ranks to be awarded?",
            options: {
              a: "2 times",
              b: "3 times",
              c: "5 times",
              d: "There is no ceiling on the shortlist",
            },
            answer: "b",
          },
          {
            id: 39,
            context:
              "The order of precedence at the Bar follows a set sequence, often remembered by the mnemonic AA-SLS-PPP.",
            question: "List the order of precedence at the Bar, from highest to lowest.",
            options: {
              a: "AGF → AGs of States → SGF → Life Benchers → SANs → office practitioners → roll by enrolment → warrant holders",
              b: "Life Benchers → AGF → SANs → AGs of States → SGF → roll by enrolment → office practitioners → warrant holders",
              c: "SANs → AGF → Life Benchers → AGs of States → SGF → warrant holders → office practitioners → roll by enrolment",
              d: "AGF → SANs → Life Benchers → AGs of States → SGF → office practitioners → warrant holders → roll by enrolment",
            },
            answer: "a",
          },
          {
            id: 40,
            context:
              "Two Attorneys-General of different States appear before the Federal High Court sitting in one of their own States.",
            question:
              "Does the Attorney-General of the host State take precedence over the visiting Attorney-General in this scenario?",
            options: {
              a: "Yes — an AG always takes precedence over other AGs in a court created by his own State, including the Federal High Court",
              b: "No — an AG's precedence over other AGs in a court created by his own State does NOT extend to the Federal High Court sitting there (a federal court)",
              c: "Yes, but only if he is also a SAN",
              d: "No — precedence between AGs is determined solely by seniority of enrolment",
            },
            answer: "b",
          },
          {
            id: 41,
            context: null,
            question: "What is the practising-fee revenue split between the Supreme Court and the NBA under s.8(3)(c) LPA?",
            options: {
              a: "10% to the Supreme Court, 90% to the NBA",
              b: "50% to each",
              c: "90% to the Supreme Court, 10% to the NBA",
              d: "All proceeds go to the NBA; the Supreme Court receives none",
            },
            answer: "a",
          },
          {
            id: 42,
            context: null,
            question: "Under S.I. 5 of 2002, what is the practising fee for a SAN or an Honourable Bencher, as against a legal practitioner of 15 years and above standing?",
            options: {
              a: "SAN/Bencher: ₦50,000; ≥15 years: ₦25,000",
              b: "SAN/Bencher: ₦25,000; ≥15 years: ₦50,000",
              c: "SAN/Bencher: ₦100,000; ≥15 years: ₦50,000",
              d: "There is no distinct fee band for SANs",
            },
            answer: "a",
          },
          {
            id: 43,
            context:
              "A newly enrolled legal practitioner wants to know by when he must pay his first practising fee, as against the general annual deadline for all other practitioners.",
            question: "By when must practising fees generally be paid each year, and within what time must a newly enrolled lawyer pay his first fee?",
            options: {
              a: "Before 31 March each year; a new lawyer within one month of enrolment (Rule 9 RPC)",
              b: "Before 31 December each year; a new lawyer within 3 months",
              c: "Before 1 January each year; a new lawyer within 6 months",
              d: "There is no deadline for newly enrolled lawyers",
            },
            answer: "a",
          },
          {
            id: 44,
            context:
              "A legal practitioner fails to pay his practising fee for the year, and continues to appear in court.",
            question: "What is the consequence of default in payment of practising fees, under s.8(2) LPA?",
            options: {
              a: "No consequence, provided fees are paid before judgment",
              b: "Breach of the RPC and no right of audience",
              c: "Automatic striking off the roll",
              d: "A fine payable to the NBA branch only",
            },
            answer: "b",
          },
          {
            id: 45,
            context: null,
            question: "In what courts, generally, may a legal practitioner (as defined under s.24 LPA, excluding the struck-off) represent litigants, and under which constitutional/statutory provisions?",
            options: {
              a: "Only the High Courts — s.272 CFRN",
              b: "All courts in Nigeria, including Customary and Area Courts — s.36(6)(c)–(d) CFRN; ss.8(1), 22(1)(d) LPA",
              c: "Only the Federal High Court and Court of Appeal",
              d: "Only courts within the State of his enrolment",
            },
            answer: "b",
          },
          {
            id: 46,
            context:
              "A legal practitioner is himself a litigant in a matter and wishes to represent a co-defendant in the same case, and also wishes to wear his wig and gown while giving evidence as a witness.",
            question: "Is this conduct permitted, per the rules on a legal practitioner acting as litigant?",
            options: {
              a: "Yes to both — he may represent a co-defendant and wear robes as a witness",
              b: "No to both — he cannot represent a co-defendant (Fawehinmi v NBA) and must not wear robes as a party or witness",
              c: "He may represent the co-defendant but must not wear robes",
              d: "He may wear robes but cannot represent the co-defendant",
            },
            answer: "b",
          },
          {
            id: 47,
            context: null,
            question:
              "Under s.22(1)(d) LPA and Rule 10 RPC, what must a legal practitioner affix to a court document he prepares (pleadings, motions, addresses, affidavits) before it is properly filed?",
            options: {
              a: "His name only",
              b: "His name, signature, designation, address and the party represented, together with the NBA stamp and seal",
              c: "A photocopy of his practising certificate",
              d: "Nothing — no marking is required for court documents",
            },
            answer: "b",
          },
          {
            id: 48,
            context:
              "Under CAMA, a statutory declaration of compliance historically had to be made by a legal practitioner before company incorporation.",
            question: "What did s.40 CAMA 2020 change about who may make this declaration/statement of compliance?",
            options: {
              a: "Nothing changed — only a lawyer may still make it",
              b: "A statement of compliance may now also be made by a director/secretary named in the articles, the applicant, or his agent (the lawyer's declaration is still accepted)",
              c: "Only the applicant personally may now make it, excluding lawyers entirely",
              d: "Only a notary public may now make it",
            },
            answer: "b",
          },
          {
            id: 49,
            context:
              "Only a legal practitioner may, for a fee, draw or prepare an instrument relating to land, under s.22(1)(d) LPA. A client party to the land transaction wishes to prepare his own instrument, and separately, wishes to have a will drafted.",
            question:
              "Which of the following is correctly excluded from the legal practitioner's conveyancing/probate monopoly?",
            options: {
              a: "A non-LP party to the land transaction may prepare his own instrument, and a non-LP may draft a will even for a fee",
              b: "Neither may be done by a non-LP under any circumstances",
              c: "Only the will drafting is excluded; a party can never prepare his own land instrument",
              d: "Only the self-prepared land instrument is excluded; wills must always be drafted by a lawyer",
            },
            answer: "a",
          },
          {
            id: 50,
            context: null,
            question: "What is the penalty for a non-legal-practitioner who prepares a land instrument for reward, under the Land Instruments Registration Law 1959?",
            options: {
              a: "₦200 fine or 2 years' imprisonment or both",
              b: "A caution only, with no fine or imprisonment",
              c: "₦5,000 fine only, no imprisonment option",
              d: "5 years' imprisonment, no fine option",
            },
            answer: "a",
          },
          {
            id: 51,
            context:
              "A retired High Court judge wishes to know the scope of the bar on his returning to practice under s.292(2) CFRN.",
            question: "Which of the following correctly states the position on a retired judicial officer's ability to practise?",
            options: {
              a: "He may never appear or act as a legal practitioner before any court or tribunal, but he may represent himself and may practise as a solicitor alone",
              b: "He may fully resume practice as both barrister and solicitor after retirement",
              c: "He may appear as an advocate only in the court from which he retired",
              d: "He may never represent himself either",
            },
            answer: "a",
          },
          {
            id: 52,
            context:
              "A retired Magistrate and a retired Customary Court judge both wish to return to legal practice after leaving the bench.",
            question: "Are Magistrates and customary-court judges caught by the s.292(2) CFRN bar on retired judicial officers practising?",
            options: {
              a: "Yes, both are caught and barred from practice",
              b: "No — magistrates and customary-court judges are not included in the s.318(1) CFRN definition of 'judicial officer' and may practise after leaving office",
              c: "Only the Magistrate is caught; the Customary Court judge is exempt",
              d: "Only the Customary Court judge is caught",
            },
            answer: "b",
          },
          {
            id: 53,
            context:
              "Counsel files a pleading in a civil suit without the NBA-approved stamp and seal required under Rule 10 RPC. The matter proceeds and judgment is delivered before the defect is regularised.",
            question:
              "What is the effect of filing a document without stamp and seal, both before and after judgment, per the case law (APC v Bello Sarki Yaki; Wayo v Nduul)?",
            options: {
              a: "The document is irregular/voidable and curable by affixing the stamp before decision; if not regularised before decision, it becomes void — and if it is the originating process, the whole action may be struck out",
              b: "The document is void from the outset, with no possibility of cure at any stage",
              c: "The absence of a stamp has no legal effect whatsoever",
              d: "Only the lawyer, not the document, is affected — the document remains fully valid",
            },
            answer: "a",
          },
          {
            id: 54,
            context:
              "A legal practitioner employed as an in-house counsel for a company wishes to appear in court as advocate for his employer, and also wishes to prepare pleadings for the company.",
            question: "Under Rule 8 RPC, is this permitted, and is there any exception for legal officers in government departments?",
            options: {
              a: "Yes to both, without exception",
              b: "No to both — a salaried lawyer may not appear as advocate for his employer nor prepare/frank pleadings for the employer, except a lawyer employed as a legal officer in a Government Department (appearance only)",
              c: "He may appear as advocate but never prepare pleadings, with no exceptions at all",
              d: "He may prepare pleadings but never appear as advocate, even as a government legal officer",
            },
            answer: "b",
          },
          {
            id: 55,
            context:
              "A legal practitioner is a director of a company (unpaid, non-executive) and wishes to represent the company as advocate on a pro bono basis.",
            question: "Is this permitted under Rule 8(3) RPC?",
            options: {
              a: "Yes — since he is unpaid, the salaried-employment bar does not apply to him",
              b: "No — Rule 8(3) catches any director of a company, whether paid or acting pro bono, from representing it as advocate",
              c: "Yes, provided the board passes a resolution authorising him",
              d: "No, but only if he is an executive director",
            },
            answer: "b",
          },
          {
            id: 56,
            context: null,
            question:
              "University law lecturers are generally caught by the 5th Schedule CFRN bar on public officers managing private business. What exemption applies specifically to them?",
            options: {
              a: "No exemption exists for law lecturers",
              b: "The Regulated and Other Professions (Private Practice Prohibition) (Law Lecturers Exemption) (No. 2) Order of 14 September 1992 permits them to combine teaching with private practice",
              c: "They are exempt only if they hold the rank of professor",
              d: "They are exempt only during university vacations",
            },
            answer: "b",
          },
          {
            id: 57,
            context:
              "A legal practitioner wishes to also run a commodities trading business on the side, and separately wishes to be a non-executive director of a company and a shareholder in another.",
            question: "Under Rule 7 RPC and the GCB's declarations on incompatible trade, which of these is permitted?",
            options: {
              a: "All are permitted without restriction",
              b: "Non-executive directorship, company secretaryship and shareholding are permitted exceptions; buying/selling commodities personally or as commission agent is specifically barred",
              c: "Only the commodities trading is permitted; directorships and shareholding are barred",
              d: "None are permitted — a lawyer may hold no other business interest whatsoever",
            },
            answer: "b",
          },
          {
            id: 58,
            context: null,
            question: "Under Rule 13 RPC, within how many days of commencing practice must a lawyer notify the NBA branch, and what must the notice contain?",
            options: {
              a: "30 days; name, law-office address, date of Call, date of enrolment",
              b: "7 days; only his name",
              c: "90 days; name and address only",
              d: "There is no notification requirement",
            },
            answer: "a",
          },
          {
            id: 59,
            context:
              "A sole practitioner wishes to name his firm 'Adeyemi & Co' even though he has no partners.",
            question: "Is this permitted under Rule 5(4) RPC?",
            options: {
              a: "Yes, it is common practice and fully permitted",
              b: "No — a sole practitioner shall not add '& Co.' or anything holding the practice out as a partnership",
              c: "Yes, provided he registers the name with CAC first",
              d: "No, unless he has at least one employee",
            },
            answer: "b",
          },
          {
            id: 60,
            context:
              "A non-lawyer holds himself out in public as a legal practitioner and also affixes an NBA membership sticker to his car, though he has never been called to the Bar.",
            question:
              "Under s.22 LPA, what is the maximum penalty for a non-legal-practitioner who practises or holds himself out as a legal practitioner (a first offence)?",
            options: {
              a: "A fine not exceeding ₦100, with no imprisonment option",
              b: "A fine not exceeding ₦200 and/or imprisonment not exceeding 2 years",
              c: "Automatic 5 years' imprisonment with no fine option",
              d: "There is no criminal penalty — only a civil claim for damages lies",
            },
            answer: "b",
          },
        ],
      },
      {
        id: "pe-topic-3",
        name: "Part 3: Duty of Counsel to Client, Change of Counsel, Professional Negligence & Duty to Colleagues",
        sourceRef: "Part 3 · pp. 41–57",
        questionsCount: 50,
        questions: [
          {
            id: 1,
            context: null,
            question: "Which Rules of the RPC 2023 house the codified duties owed by a lawyer to his client?",
            options: {
              a: "Rules 1–13 (Part I)",
              b: "Rules 14–25 (Part II — Relation with Clients)",
              c: "Rules 26–29 (Part III)",
              d: "Rules 39–47 (Part V)",
            },
            answer: "b",
          },
          {
            id: 2,
            context: null,
            question: "Name any three of the five obligations imposed on a lawyer by Rule 14 (dedication and devotion).",
            options: {
              a: "Consult the client on questions of doubt; keep the client informed; warn of particular risks",
              b: "Charge the lowest possible fee; advertise widely; refer all doubts to the court",
              c: "Delegate all client contact to a paralegal; avoid written communication; bill hourly only",
              d: "Refuse to settle out of court; insist on trial in every matter; avoid client meetings",
            },
            answer: "a",
          },
          {
            id: 3,
            context:
              "A lawyer consistently fails to represent his client properly — missing deadlines, failing to keep him informed, and failing to warn him of risks.",
            question: "Under which sub-rule does such failure amount to professional misconduct?",
            options: {
              a: "Rule 14(5)",
              b: "Rule 14(1) only, with no disciplinary consequence",
              c: "Rule 19(1)",
              d: "Rule 21(2)",
            },
            answer: "a",
          },
          {
            id: 4,
            context:
              "A client instructs his lawyer to continue litigation even though the client has admitted, off the record, that his defence is fabricated.",
            question: "What must the lawyer do under Rule 15(2)(a) if the client insists on illegality?",
            options: {
              a: "Continue acting, since the client's instructions are paramount",
              b: "Withdraw his service",
              c: "Report the client to the police immediately",
              d: "Continue acting but reduce his fee",
            },
            answer: "b",
          },
          {
            id: 5,
            context: null,
            question: "Under which sub-rule must counsel inform the client of ADR options before resorting to or continuing litigation?",
            options: {
              a: "Rule 15(3)(d)",
              b: "Rule 14(2)(a)",
              c: "Rule 24(1)",
              d: "Rule 19(4)",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "A lawyer discovers that his client has committed a fraud in the course of the retainer.",
            question: "What is the correct two-step response under Rule 15(4)?",
            options: {
              a: "Ask the client to rectify it; on refusal, disclose to the affected person or tribunal unless the information is privileged",
              b: "Immediately disclose to the court, without first approaching the client",
              c: "Withdraw silently without any disclosure",
              d: "Continue acting and say nothing, since client confidences are absolute",
            },
            answer: "a",
          },
          {
            id: 7,
            context:
              "A lawyer drafts a conveyance he knows is designed to help his client evade a duty owed to a third party.",
            question:
              "Per Myers v Elman, are instructions given in furtherance of fraud privileged?",
            options: {
              a: "Yes — all instructions from a client are absolutely privileged",
              b: "No — instructions given in furtherance of fraud are not privileged",
              c: "Only privileged if the fraud is later proven in court",
              d: "Privilege applies, but only to oral instructions",
            },
            answer: "b",
          },
          {
            id: 8,
            context: null,
            question: "Which of the following is NOT one of the four Rule 16 competence prohibitions?",
            options: {
              a: "Handling a matter he knows he is not competent to handle, without associating a competent lawyer",
              b: "Handling a matter without adequate preparation",
              c: "Neglecting or abandoning a matter entrusted to him",
              d: "Charging a fee higher than the scale fee prescribed by the Remuneration Order",
            },
            answer: "d",
          },
          {
            id: 9,
            context: null,
            question:
              "Which statute now expressly makes legal practitioners designated non-financial businesses and professions (DNFBPs) with AML/CFT reporting duties, reversing the earlier position under the 2011 Act?",
            options: {
              a: "The Money Laundering (Prohibition) Act 2011",
              b: "The Money Laundering (Prohibition) Act 2022, s.30",
              c: "The Economic and Financial Crimes Commission Act",
              d: "The Companies and Allied Matters Act 2020",
            },
            answer: "b",
          },
          {
            id: 10,
            context:
              "A lawyer wishes to acquire an interest in the subject matter of litigation he is conducting for his client.",
            question: "What are the two exceptions to the Rule 17(3) bar on a lawyer acquiring a proprietary interest in the cause of action or subject matter of litigation?",
            options: {
              a: "A lien granted by law for fees and expenses; a reasonable contingent fee in a civil case",
              b: "Any interest, provided the client consents in writing",
              c: "There are no exceptions — the bar is absolute",
              d: "A lien for fees only; contingent fees are never permitted",
            },
            answer: "a",
          },
          {
            id: 11,
            context:
              "A lawyer wishes to accept a brief whose subject matter is likely to affect an existing client's interest.",
            question: "Whose consent is required under Rule 17(4) before he may do so?",
            options: {
              a: "Only the new client's consent",
              b: "Only the existing client's consent",
              c: "Both parties' consent",
              d: "No consent is required if the lawyer believes there is no real conflict",
            },
            answer: "c",
          },
          {
            id: 12,
            context: null,
            question: "To whom do the Rule 17 conflict-of-interest rules extend, beyond the lawyer himself?",
            options: {
              a: "Only to the lawyer personally — associates and partners are unaffected",
              b: "The lawyer's associates, partners and affiliates",
              c: "Only to partners, not associates or affiliates",
              d: "Only to employees who directly worked on the matter",
            },
            answer: "b",
          },
          {
            id: 13,
            context:
              "A lawyer previously acted against a person in an unrelated suit and is now asked to act for a new client whose interests align with that same former opponent's current adversary.",
            question:
              "Per Onigbomo Community v Minister of Internal Affairs, does having previously appeared against a person bar a lawyer from later acting for a present client against that same person?",
            options: {
              a: "Yes, absolutely and permanently",
              b: "No — it does not bar him, subject to disclosure",
              c: "Only if the former case was decided in the opponent's favour",
              d: "Only with the written consent of the Body of Benchers",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "A client verbally agrees a fee arrangement with his lawyer but no written agreement is signed.",
            question: "Under Rule 18(2), is the lawyer bound to honour a fee agreement that was never reduced to writing?",
            options: {
              a: "No — only written agreements are enforceable",
              b: "Yes — avoiding a contract fairly made, written or not, is dishonourable and a misconduct",
              c: "Only if a witness was present at the time of the oral agreement",
              d: "The agreement is voidable at the lawyer's option",
            },
            answer: "b",
          },
          {
            id: 15,
            context: null,
            question: "Which Evidence Act 2011 sections respectively bar disclosure of client communications, continue that bar AFTER the retainer ends, and extend the bar to interpreters and clerks?",
            options: {
              a: "s.192; s.192(3); s.193",
              b: "s.190; s.191; s.192",
              c: "s.192; s.193; s.194",
              d: "s.175; s.192; s.230",
            },
            answer: "a",
          },
          {
            id: 16,
            context: null,
            question: "Name three of the six recognised exceptions to a lawyer's duty of confidentiality under Rule 19(2) and s.192 Evidence Act.",
            options: {
              a: "Client's consent; disclosure required by law or the RPC; disclosure necessary to forestall a future crime",
              b: "Convenience of the lawyer; a request from opposing counsel; media interest in the case",
              c: "The client's death; the passage of 10 years; the lawyer's retirement",
              d: "A court's mere curiosity; a journalist's freedom of information request; a colleague's informal query",
            },
            answer: "a",
          },
          {
            id: 17,
            context:
              "In a murder trial, the client confidentially confesses guilt to his lawyer but instructs him to run a defence of innocence at trial.",
            question: "May counsel reveal the confession, and may he plead innocence on the client's instructions?",
            options: {
              a: "He may do neither — he cannot reveal the confession, but he also cannot advance a positive defence of innocence known to be false; he may only rely on mitigating factors",
              b: "He must reveal the confession to the court immediately",
              c: "He may run the innocence defence freely, since client instructions are paramount",
              d: "He must withdraw immediately and refuse to have any further role in the case",
            },
            answer: "a",
          },
          {
            id: 18,
            context: null,
            question: "Is a lawyer compellable as a witness for his own client, under s.173 Evidence Act?",
            options: {
              a: "Yes, fully compellable like any other witness",
              b: "No — he is a competent but not compellable witness",
              c: "He is neither competent nor compellable",
              d: "He is compellable only in criminal matters",
            },
            answer: "b",
          },
          {
            id: 19,
            context: null,
            question: "Name any two of the four Rule 20(2) exceptions permitting a lawyer to act despite knowing he (or his firm) may be called as a witness.",
            options: {
              a: "An uncontested/introductory matter not affecting the merits; a matter of formality with no substantial opposing evidence expected",
              b: "The client's personal preference; the lawyer's convenience",
              c: "Where the opposing party consents in writing; where the fee has already been paid",
              d: "Where the matter is high-value; where the lawyer is a SAN",
            },
            answer: "a",
          },
          {
            id: 20,
            context:
              "Counsel realises, only after he has already undertaken conduct of a case, that he must testify for his client on a material fact.",
            question: "What must he do, per the Rule 20 timing ladder?",
            options: {
              a: "Withdraw — Rule 20(4)(a)",
              b: "Continue and testify himself without withdrawing",
              c: "Hand the file to a paralegal to continue",
              d: "Apply to the court to adjourn indefinitely",
            },
            answer: "a",
          },
          {
            id: 21,
            context:
              "Counsel may be called as a witness by the OTHER side in a case he is conducting.",
            question: "Under Rule 20(4)(b), until when may he continue to act?",
            options: {
              a: "He must withdraw immediately once called by the other side",
              b: "Until his testimony is or may be prejudicial to his client",
              c: "He may never continue once named as a potential witness for the other side",
              d: "Only until the close of pleadings",
            },
            answer: "b",
          },
          {
            id: 22,
            context: null,
            question: "List the four grounds for withdrawal from employment under Rule 21(2).",
            options: {
              a: "Conflict of interest; client insists on an unjust/immoral course; client persists in pressing a frivolous case against advice; client deliberately disregards fee or expense obligations",
              b: "The case becomes difficult; the client is unpopular; the fee is lower than expected; the matter is time-consuming",
              c: "The lawyer finds a better client; the case is likely to be lost; the opposing counsel is more senior; the court is inconvenient",
              d: "The client changes address; the client is slow to respond to emails; the matter is adjourned twice; the lawyer is unwell",
            },
            answer: "a",
          },
          {
            id: 23,
            context: null,
            question: "What form must a lawyer's notice of withdrawal from employment take, under Rule 21(3)?",
            options: {
              a: "No notice is required at all",
              b: "Reasonable notice in writing to the client, to enable him engage another lawyer",
              c: "Oral notice is sufficient in all cases",
              d: "Notice must be published in a national newspaper",
            },
            answer: "b",
          },
          {
            id: 24,
            context:
              "A lawyer withdraws from a matter after being paid his full fee in advance, having done only part of the work.",
            question: "On what principle, per Rule 21(4), is any refund computed?",
            options: {
              a: "Quantum meruit — he must refund the part of the fee not clearly earned",
              b: "He keeps the entire fee regardless of work done",
              c: "He must refund the entire fee, even for work already completed",
              d: "The client forfeits any right to a refund once he engages a new lawyer",
            },
            answer: "a",
          },
          {
            id: 25,
            context: null,
            question:
              "Under Rule 22, what is the precise stated exception permitting a lawyer to call at a client's house or business to advise or take instructions?",
            options: {
              a: "'Special circumstances or urgency' — extreme old age, infirmity, custody/house arrest and national/state security matters are only examples of this exception, not the exception itself",
              b: "Extreme old age is itself the only recognised exception",
              c: "There is no exception — a lawyer may never call at a client's premises",
              d: "Any client request is sufficient justification",
            },
            answer: "a",
          },
          {
            id: 26,
            context:
              "A lawyer mixes client funds with his own account and uses part of the money for personal expenses, though he is never criminally tried or convicted for it.",
            question: "Can this alone ground striking off the roll, under Rule 23?",
            options: {
              a: "No — striking off requires a prior criminal conviction",
              b: "Yes — breach can ground striking off the roll even without criminal trial or conviction",
              c: "No — it can only ground a civil claim for the money, not a disciplinary sanction",
              d: "Only if the amount exceeds ₦1,000,000",
            },
            answer: "b",
          },
          {
            id: 27,
            context: null,
            question: "State the Cab Rank Rule under Rule 24(1) and its three recognised outs.",
            options: {
              a: "A lawyer must accept any brief within his practice area at the proper fee, unless: the facts contradict his religious/moral/cultural belief; the brief is outside his practice area; the right fee is not offered",
              b: "A lawyer may reject any brief for any reason, without justification",
              c: "A lawyer must accept every brief offered to him without exception",
              d: "The rule applies only to criminal defence briefs",
            },
            answer: "a",
          },
          {
            id: 28,
            context:
              "A client instructs his lawyer to file a particular defence which the lawyer believes is legally questionable, but the client insists.",
            question: "Under Rule 24(3), is 'the client instructed me' a defence to filing a questionable action or defence?",
            options: {
              a: "Yes — the lawyer is fully absolved by client instructions",
              b: "No — the lawyer is personally liable for questionable actions, defences or advice, and is not absolved by client instructions",
              c: "Only if the client signed a written waiver",
              d: "It is a defence only in civil, not criminal, matters",
            },
            answer: "b",
          },
          {
            id: 29,
            context:
              "Counsel wishes to speak to a witness who will testify for the opposing party in a case, without first obtaining the consent of that party or its counsel.",
            question: "Is this permitted under Rule 25(1), and what is the limit?",
            options: {
              a: "Yes — he may interview the opposing party's witnesses without consent, provided he does not hide the witness or advise him not to communicate with the other side",
              b: "No — any contact with a potential witness for the other side is absolutely forbidden",
              c: "Only permitted with the leave of court, obtained in advance",
              d: "Only permitted if the witness is also a party to the suit",
            },
            answer: "a",
          },
          {
            id: 30,
            context:
              "Counsel offers to pay a witness a sum of money on condition that the witness testifies favourably for his client.",
            question: "Is this permitted under Rule 25(2)?",
            options: {
              a: "Yes, provided the amount is reasonable",
              b: "No — a bargain with a witness over fees as a precondition for testimony is barred; only reasonable expenses of giving evidence are permissible",
              c: "Yes, but only in civil, not criminal, matters",
              d: "Yes, provided the client, not the lawyer, makes the payment",
            },
            answer: "b",
          },
          {
            id: 31,
            context: null,
            question: "What are the new lawyer's three duties on a change of counsel by the client, under Rule 29?",
            options: {
              a: "Prompt notice to the former lawyer; best endeavours to see the former lawyer's fees are paid; both lawyers notify the court",
              b: "Pay the former lawyer's fees immediately; take over all his files without inventory; inform only the client",
              c: "Ignore the former lawyer entirely; notify only the court; make no arrangement about fees",
              d: "There are no duties imposed on the incoming lawyer",
            },
            answer: "a",
          },
          {
            id: 32,
            context:
              "A client changes lawyers mid-case. The outgoing lawyer must decide what to hand over to the client and what he may retain.",
            question: "What does the outgoing lawyer keep under Rule 29, as opposed to what he must hand to the client?",
            options: {
              a: "He keeps the client's letters to him, copies of his own letters to the client, and a lien for unpaid fees; he hands to the client letters written to third parties, copies of such letters, and drafts and business copies",
              b: "He keeps everything and hands nothing to the client",
              c: "He must hand over everything, including his own personal notes and internal memos",
              d: "He keeps only his internal billing records; everything else must be surrendered",
            },
            answer: "a",
          },
          {
            id: 33,
            context: null,
            question: "What is the statutory basis for a legal practitioner's liability in negligence, and for the in-court exemption from that liability?",
            options: {
              a: "s.9(1) LPA (negligence liability); s.9(3) LPA (in-court exemption)",
              b: "s.16(2) LPA for both",
              c: "s.12(1) LPA (negligence liability); s.13(1) LPA (in-court exemption)",
              d: "There is no statutory basis — it rests entirely on common law",
            },
            answer: "a",
          },
          {
            id: 34,
            context: null,
            question: "What is the standard of care applied to a legal practitioner's negligence, and which case establishes it?",
            options: {
              a: "The standard of a first-class, meticulous lawyer — no case authority needed",
              b: "The standard of the average lawyer, not a first-class lawyer — Montriou v Jeffreys",
              c: "A strict liability standard with no room for error",
              d: "The standard of a newly qualified lawyer only",
            },
            answer: "b",
          },
          {
            id: 35,
            context:
              "A lawyer insisted his client had a good cause of action when, in fact, the claim was already statute-barred, causing the client to lose his case.",
            question: "Which case illustrates negligent legal advice of exactly this kind?",
            options: {
              a: "Bello Raji v X",
              b: "Midland Bank Trust Co v Kemp",
              c: "NBA v Akintokun",
              d: "Rondel v Worsley",
            },
            answer: "a",
          },
          {
            id: 36,
            context:
              "A lawyer failed to register a client's option to purchase land, and a third party subsequently acquired the farm before the option was exercised.",
            question: "Which case illustrates this type of negligence, arising from searches and preparation of documents?",
            options: {
              a: "Bello Raji v X",
              b: "Midland Bank Trust Co v Kemp",
              c: "NBA v Akintokun",
              d: "SaifAli v Sydney Mitchell",
            },
            answer: "b",
          },
          {
            id: 37,
            context: "A lawyer delayed in commencing a land suit for his client, causing serious prejudice.",
            question: "Which case treated delay in commencing a suit as professional misconduct before the LPDC?",
            options: {
              a: "NBA v Akintokun",
              b: "Lawson v Matti",
              c: "Bello Raji v X",
              d: "Rondel v Worsley",
            },
            answer: "a",
          },
          {
            id: 38,
            context:
              "A lawyer is sued for negligence in respect of his in-court conduct — specifically, for failing to cross-examine a witness effectively at trial.",
            question: "Is he exempt from negligence liability for this in-court conduct, and on what authority?",
            options: {
              a: "No — in-court conduct attracts full negligence liability like any other act",
              b: "Yes — s.9(3) LPA exempts him from negligence liability for the pursuit of his duties as barrister or advocate before the court — Rondel v Worsley",
              c: "Yes, but only if the client consented to the trial strategy in writing",
              d: "The exemption applies only to criminal, not civil, trials",
            },
            answer: "b",
          },
          {
            id: 39,
            context: null,
            question: "Name two of the four rationales given for the in-court negligence immunity.",
            options: {
              a: "Securing counsel's objectivity; finality of litigation",
              b: "Reducing legal fees; increasing court efficiency",
              c: "Protecting the judge's reputation; reducing case backlog",
              d: "Encouraging out-of-court settlement; reducing appeals",
            },
            answer: "a",
          },
          {
            id: 40,
            context:
              "During a heated exchange, counsel threatens and abuses opposing counsel in the course of proceedings.",
            question: "Which case held that abusing and threatening opposing counsel was contempt?",
            options: {
              a: "Re Johnson (1887)",
              b: "Iso v Eno",
              c: "Allinson v General Medical Council",
              d: "Military Governor of Lagos State v Adeyiga",
            },
            answer: "a",
          },
          {
            id: 41,
            context: null,
            question: "Under Rule 26(2) and s.8(4) LPA, subject to the rules of precedence, how are all members of the Bar to be treated?",
            options: {
              a: "As unequal, ranked strictly by years of call",
              b: "As equal",
              c: "As unequal, ranked strictly by wealth or firm size",
              d: "As equal only within the same State Bar",
            },
            answer: "b",
          },
          {
            id: 42,
            context:
              "A lawyer publicly denigrates a colleague's competence and character in a professional gathering.",
            question: "Per Allinson v General Medical Council, may denigrating members of the profession amount to what?",
            options: {
              a: "Nothing — mere opinion is never sanctionable",
              b: "Infamous conduct",
              c: "A civil claim in defamation only, with no professional consequence",
              d: "A minor administrative caution with no further effect",
            },
            answer: "b",
          },
          {
            id: 43,
            context:
              "Knowing that the opposing party is represented by counsel, a lawyer wishes to enter into default judgment against that party without first inquiring whether opposing counsel intends to proceed.",
            question: "Is this permitted under Rule 27(2)(c) (avoiding sharp practices)?",
            options: {
              a: "Yes — a lawyer may snap a default judgment at any time without inquiry",
              b: "No — knowing the identity of the opposing lawyer, he must first inquire about that lawyer's intention to proceed before snapping a default or dismissal",
              c: "Yes, provided he later informs opposing counsel after judgment is entered",
              d: "This rule applies only to criminal matters",
            },
            answer: "b",
          },
          {
            id: 44,
            context: null,
            question: "What are Ludwig's two identified causes of sharp practice?",
            options: {
              a: "The desire to please a revengeful client; the desire to manufacture costs",
              b: "Poor legal drafting skills; lack of court experience",
              c: "Overwork; insufficient staff",
              d: "Client indigence; court delays",
            },
            answer: "a",
          },
          {
            id: 45,
            context:
              "Two lawyers associated on a matter disagree on a course of action vital to the client's interests.",
            question: "Under Rule 28(3), whose decision is final, and what must the overruled lawyer do if effective cooperation becomes impracticable?",
            options: {
              a: "The client's decision is final; the overruled lawyer must withdraw if effective cooperation becomes impracticable",
              b: "The more senior lawyer's decision is automatically final",
              c: "The dispute must be referred to the LPDC for resolution before proceeding",
              d: "Whichever lawyer was instructed first has the final say",
            },
            answer: "a",
          },
          {
            id: 46,
            context: null,
            question: "Which case is quoted for the proposition 'The court must have Ministers; the Attorneys are its Ministers'?",
            options: {
              a: "Mayor of Norwich v Berry",
              b: "Re Summers",
              c: "Re Hill",
              d: "Waziri v State",
            },
            answer: "a",
          },
          {
            id: 47,
            context: "Counsel is defending an accused person in a capital (death penalty) trial.",
            question: "What special duty does counsel owe in a capital trial, per Okaro v State?",
            options: {
              a: "No special duty beyond an ordinary trial",
              b: "A sacred duty to promptly object to every irregularity, procedural or evidential",
              c: "A duty to withdraw if the case appears difficult to win",
              d: "A duty to seek a plea bargain in every case",
            },
            answer: "b",
          },
          {
            id: 48,
            context:
              "A charitable society that assists indigent clients refers matters to a lawyer, without controlling how the lawyer conducts the professional relationship.",
            question:
              "Under Rule 4 RPC, is a charitable society aiding the indigent treated as a prohibited lay intermediary controlling the lawyer-client relationship?",
            options: {
              a: "Yes, always — any referral source is a prohibited intermediary",
              b: "No — charitable societies aiding the indigent are expressly not treated as such intermediaries",
              c: "Only if the society charges a referral fee",
              d: "Only if the society is registered as a company",
            },
            answer: "b",
          },
          {
            id: 49,
            context:
              "A lawyer advertises his practice online, listing statements about the quality of his work and his high success rate in past cases.",
            question: "Does this breach the Rule 39 advertising rules?",
            options: {
              a: "No — advertising success rates is always permitted",
              b: "Yes — Rule 39(2)(d) forbids statements about the quality of the lawyer's work, size or success rate",
              c: "Only if the statements are proven false",
              d: "Only if the advertisement runs for more than 30 days",
            },
            answer: "b",
          },
          {
            id: 50,
            context:
              "A lawyer wishes to publish particulars of his practice or earnings in a general newspaper, in a matter where the time for appeal has not yet expired.",
            question: "Where alone may such particulars be published, per Rule 46(2)?",
            options: {
              a: "In any general-circulation newspaper",
              b: "Only in a legal periodical — and never particulars of a matter where the time for appeal has not expired",
              c: "On the lawyer's personal social media page only",
              d: "There is no restriction on where such particulars may be published",
            },
            answer: "b",
          },
        ],
      },
      {
        id: "pe-topic-4",
        name: "Part 4: Duty of Counsel to Court, Criminal & Civil Duties, Duty of Court to Counsel, Contempt & AML",
        sourceRef: "Part 4 · pp. 58–80",
        questionsCount: 82,
        questions: [
          {
            id: 1,
            context: null,
            question: "How early should counsel reach court before sitting, and for what purpose?",
            options: {
              a: "About 30 minutes before sitting — to compose himself and see/rehearse with witnesses",
              b: "5 minutes before sitting — no other purpose is stated",
              c: "1 hour before sitting, solely to secure parking",
              d: "There is no recommended time",
            },
            answer: "a",
          },
          {
            id: 2,
            context: null,
            question: "Name two consequences the court may visit on a lawyer's lateness or absence.",
            options: {
              a: "Strike out or adjourn with costs; proceed without counsel",
              b: "Automatic contempt proceedings in every case",
              c: "Immediate report to the LPDC without further inquiry",
              d: "Suspension of practising fees for the year",
            },
            answer: "a",
          },
          {
            id: 3,
            context:
              "Counsel is unavoidably delayed and cannot reach court on time for a hearing.",
            question: "To whom must he write to request the case be stood down or adjourned?",
            options: {
              a: "The court only",
              b: "The court AND the opposing counsel",
              c: "Only the opposing counsel, informally",
              d: "No written communication is required — a phone call suffices",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "A lawyer persistently absents himself from court sittings without leave.",
            question: "Which case treats persistent absence without leave as potentially amounting to contempt (interference with justice)?",
            options: {
              a: "McKeown v R",
              b: "Izuora v R",
              c: "Oku v State",
              d: "Awosanya v Board of Customs",
            },
            answer: "a",
          },
          {
            id: 5,
            context: "Counsel is absent from court on the day judgment is delivered.",
            question: "Per Izuora v R, is mere absence on judgment day necessarily contempt?",
            options: {
              a: "Yes, always",
              b: "No — it is mere discourtesy unless it amounts to continuous absenteeism",
              c: "Yes, but only if the judgment is unfavourable",
              d: "No — absence on judgment day carries no consequence at all",
            },
            answer: "b",
          },
          {
            id: 6,
            context: null,
            question: "Describe the wing-collar sizing rule for male court dress in superior courts.",
            options: {
              a: "The white wing collar should be one size bigger than the shirt neck, held by two studs",
              b: "The collar must be exactly the same size as the shirt neck",
              c: "The collar must be two sizes smaller than the shirt neck",
              d: "There is no sizing rule — any wing collar suffices",
            },
            answer: "a",
          },
          {
            id: 7,
            context: null,
            question: "How are Lagos State magistrates addressed, and under which laws?",
            options: {
              a: "'Your Worship' — under the general national rule with no local variation",
              b: "'Your Honour' — s.352 ACJL; s.8 Magistrates' Courts Law of Lagos State 2011",
              c: "'My Lord' — s.36 CFRN",
              d: "'Your Excellency' — the NBA Lagos branch resolution",
            },
            answer: "b",
          },
          {
            id: 8,
            context: null,
            question: "How are Customary Court and Area Court judges addressed, and which pronoun form must be used?",
            options: {
              a: "'My Honour' — using 'My,' not 'Your'",
              b: "'Your Honour' — and the pronoun must be 'Your,' not 'My'",
              c: "'My Lord' in all cases",
              d: "'Your Worship' — the pronoun form is immaterial",
            },
            answer: "b",
          },
          {
            id: 9,
            context: null,
            question: "What is the correct form of reference to opposing counsel in court?",
            options: {
              a: "'My colleague'",
              b: "'The opposing counsel'",
              c: "'My Learned Friend'",
              d: "The barrister's surname alone",
            },
            answer: "c",
          },
          {
            id: 10,
            context:
              "Two lawyers appearing together for the same party must announce their appearance to the court.",
            question: "When may two lawyers be on their feet at the same time, as an exception to the general rule?",
            options: {
              a: "Never — this is never permitted under any circumstances",
              b: "During announcement of appearance — each co-counsel stands and bows as his name is called",
              c: "Only during final address",
              d: "Only when addressing a Magistrate Court",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "Counsel disagrees strongly with something the opposing party's representative said outside the courtroom process.",
            question: "Under Rule 36(d), how must disputes and disagreements between opposing parties be channelled?",
            options: {
              a: "Directly to the opposing party, without going through the court",
              b: "Everything must be channelled through the court — no banter or controversy with the opposing party",
              c: "Through a private meeting outside the courtroom",
              d: "Through the media, to place matters on public record",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "A lawyer has a complaint against the conduct of a judicial officer presiding over his case.",
            question: "Under Rule 31(2), where should a proper complaint against a judicial officer be lodged?",
            options: {
              a: "In open court, immediately, during the proceedings",
              b: "To the appropriate authorities — not raised in the courtroom",
              c: "Directly to the media",
              d: "There is no proper channel — the complaint must simply be endured",
            },
            answer: "b",
          },
          {
            id: 13,
            context:
              "During delivery of judgment, counsel interrupts the judge to say 'This is a most unjust remark.'",
            question: "Which case held that these words, spoken during delivery of judgment, amounted to contempt?",
            options: {
              a: "R v Jordan (1888)",
              b: "Izuora v Queen",
              c: "Maharaj v AG Trinidad & Tobago",
              d: "Agbachom v State",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "Counsel is aware of a decided case that is directly against his client's position.",
            question: "Under Rule 32 (candour and fairness), must counsel cite a case that is against his own client, and may he still argue his case?",
            options: {
              a: "No — he may conceal any case unfavourable to his client",
              b: "Yes — he must cite decided cases against him, though he may distinguish them",
              c: "Only if the opposing counsel raises it first",
              d: "Only in civil, not criminal, matters",
            },
            answer: "b",
          },
          {
            id: 15,
            context:
              "A barrister permits a deceptive ('chicanery') affidavit to be used in proceedings on his client's behalf.",
            question: "Which case held such a barrister liable, and on what basis?",
            options: {
              a: "Linwood v Andrew — he made himself party to a fraud on the court, not merely failed to return the brief",
              b: "Glebe Sugar Refining Co v Greenock Port & Harbour Trustees",
              c: "Re Certain Legal Practitioners (1960)",
              d: "R v Jordan",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "During a pending trial, counsel makes a public statement on the merits and likely outcome of the case.",
            question: "What does Rule 33 (trial publicity) forbid?",
            options: {
              a: "All communication with the media, even on procedural matters",
              b: "Extra-judicial statements likely to interfere with or prejudice a fair trial or the outcome of a pending matter — criminal and civil",
              c: "Nothing — trial publicity is entirely unregulated",
              d: "Statements made after the trial has concluded only",
            },
            answer: "b",
          },
          {
            id: 17,
            context:
              "As a public prosecutor, counsel becomes aware of a decision favourable to the accused which he would prefer the court did not know about.",
            question: "What is the prosecutor's primary duty under Rule 37(4), and is concealment of such a decision proper?",
            options: {
              a: "The primary duty is to secure a conviction; concealment is proper if it helps secure it",
              b: "The primary duty is not to convict but to see that justice is done; concealment of a favourable decision is improper",
              c: "The primary duty is to the client (the State) alone, with no duty of candour",
              d: "There is no primary duty stated for prosecutors under the RPC",
            },
            answer: "b",
          },
          {
            id: 18,
            context:
              "A prosecutor encounters a lower court's decision favourable to the accused, and separately, a co-ordinate court's decision favourable to the accused.",
            question: "What are the prosecutor's legitimate options in each scenario, per R v Anani?",
            options: {
              a: "He may invite the court to overrule the lower court's decision; he may distinguish the co-ordinate court's decision or invite the court to depart from it",
              b: "He must always follow both decisions without any option to challenge them",
              c: "He must suppress both decisions in either case",
              d: "He may only distinguish decisions of superior courts, never lower or co-ordinate courts",
            },
            answer: "a",
          },
          {
            id: 19,
            context:
              "A client confidentially confesses guilt to his defending lawyer but the not-guilty plea stands and the trial proceeds.",
            question: "Does a confidential confession require withdrawal, and what is the true nature of the not-guilty plea?",
            options: {
              a: "It requires immediate withdrawal; the not-guilty plea is a substantive claim of innocence",
              b: "It does not require withdrawal; the not-guilty plea is merely formal — a challenge to the prosecution to prove its case, distinct from advancing a positive defence known to be false",
              c: "It requires withdrawal only if the client is later convicted",
              d: "It requires disclosure to the prosecution immediately",
            },
            answer: "b",
          },
          {
            id: 20,
            context: null,
            question: "Which case holds that murder briefs take priority over all other professional engagements?",
            options: {
              a: "Udofia v State",
              b: "Ahmed v COP",
              c: "Queen v Uzochukwu",
              d: "Abele v Tiv NA",
            },
            answer: "a",
          },
          {
            id: 21,
            context:
              "Counsel issues a writ on behalf of a client, knowing there is no real cause of action, purely to harass the defendant.",
            question: "What is the consequence of this abuse of process, per Cocottonpoulous v PZ Co Ltd?",
            options: {
              a: "No consequence — the writ stands regardless of motive",
              b: "Counsel may be ordered to pay the costs his client incurred",
              c: "Only the client, never counsel, bears any consequence",
              d: "The matter is referred automatically to the police",
            },
            answer: "b",
          },
          {
            id: 22,
            context: null,
            question: "Reproduce the three subsections of s.9 LPA in full effect.",
            options: {
              a: "(1) no immunity from negligence liability, and exclusion clauses are void; (2) exclusion/limitation permitted where acting without reward; (3) the in-court exemption is preserved",
              b: "(1) full immunity from all liability; (2) no exceptions; (3) the section applies only to solicitors",
              c: "(1) immunity for court conduct; (2) immunity for advice; (3) immunity for document preparation",
              d: "(1) liability only for criminal matters; (2) no civil liability exists; (3) liability is capped at ₦1,000,000",
            },
            answer: "a",
          },
          {
            id: 23,
            context: null,
            question:
              "What standard of care and skill does a solicitor owe his client, per Montriou v Jeffreys and Midland Bank v Stubb & Kemp?",
            options: {
              a: "The reasonable care and skill of a normally competent and careful practitioner — not that of a particularly meticulous and conscientious practitioner",
              b: "Absolute perfection in every case",
              c: "No duty of care exists at common law",
              d: "The standard of the most senior SAN available",
            },
            answer: "a",
          },
          {
            id: 24,
            context: null,
            question:
              "Match: wrong advice; bringing a statute-barred action; failure to prosecute diligently; liability to third parties.",
            options: {
              a: "Otter v Church Adam Atham & Co; Bello Raji v X; Fitzpatrick v Batget & Co Ltd; Ross v Caunters",
              b: "Ross v Caunters; Otter v Church Adam Atham & Co; Bello Raji v X; Fitzpatrick v Batget & Co Ltd",
              c: "Allen v Clark; SaifAli v Sydney Mitchell; Clayton v Kearsey; Otter v Church Adam Atham & Co",
              d: "Clayton v Kearsey; Allen v Clark; Ross v Caunters; SaifAli v Sydney Mitchell",
            },
            answer: "a",
          },
          {
            id: 25,
            context: null,
            question: "What are the three duties of the court to counsel, per the note's summary?",
            options: {
              a: "Respect; right of audience (provided no disability such as unpaid practising fees); not to unduly descend into the arena",
              b: "Speed; brevity; formality",
              c: "Silence; deference; indulgence",
              d: "Punctuality; politeness; leniency",
            },
            answer: "a",
          },
          {
            id: 26,
            context:
              "A judge refuses counsel a reasonable adjournment and proceeds with the trial in counsel's continued absence.",
            question: "Which case held that this may breach a party's right to fair hearing?",
            options: {
              a: "Okoduwa v State",
              b: "Ezeogu v Onwuchekwa",
              c: "Salim v Ifenkwu & Ors",
              d: "State v Oyenubi",
            },
            answer: "a",
          },
          {
            id: 27,
            context: "A judgment is set aside on appeal for procedural unfairness at trial.",
            question: "Per Ozims v Anoruo, who ultimately suffers when a judgment is set aside for unfairness?",
            options: {
              a: "The judge personally",
              b: "The litigant, not the judge",
              c: "Neither party suffers any consequence",
              d: "Only the losing counsel suffers professionally",
            },
            answer: "b",
          },
          {
            id: 28,
            context: "Counsel is choosing where to sit in an unfamiliar courtroom before proceedings begin.",
            question: "Which two seats should counsel avoid, per the note's psychology-of-the-court guidance?",
            options: {
              a: "The reserved front row; the press seats",
              b: "The seat nearest the exit; the seat nearest the jury box",
              c: "Any seat facing the window; any seat near the clerk",
              d: "There are no seats to avoid",
            },
            answer: "a",
          },
          {
            id: 29,
            context: null,
            question: "What is the working definition of contempt of court, per Awobokun v Adeyemi?",
            options: {
              a: "Any disagreement with a judicial decision",
              b: "Action or inaction amounting to an interference with or obstruction of — or tending to interfere with or obstruct — the due administration of justice",
              c: "Any criticism of a judge, however mild",
              d: "Failure to pay a court-ordered sum of money",
            },
            answer: "b",
          },
          {
            id: 30,
            context: null,
            question:
              "Per Parashuram Detaram Shamdasani v King Emperor, what is the true purpose of contempt jurisdiction?",
            options: {
              a: "To bolster the judge's personal power",
              b: "To protect the dignity of the court and prevent undue interference with justice — never to bolster the judge's personal power",
              c: "To punish any expression of disagreement with the court",
              d: "To generate revenue through fines",
            },
            answer: "b",
          },
          {
            id: 31,
            context: "A lawyer classifies contempt into two headings for exam purposes: TYPES and NATURE.",
            question: "Which correctly distinguishes the TYPES of contempt from its NATURE?",
            options: {
              a: "Types: criminal and civil; Nature: in facie curiae and ex facie curiae",
              b: "Types: in facie and ex facie; Nature: criminal and civil",
              c: "Types and Nature are the same classification restated",
              d: "Types: summary and formal; Nature: minor and major",
            },
            answer: "a",
          },
          {
            id: 32,
            context: "A person publicly calls a judge a liar, and separately alleges he is partial.",
            question: "Which cases establish that calling a judge a liar, and alleging partiality, amount to criminal contempt?",
            options: {
              a: "Ravel (1917); Vidyasagara v The Queen (1963)",
              b: "Izuora v Queen; Oku v State",
              c: "Awosanya v Board of Customs; Police v Salami Apampa",
              d: "Maharaj v AG Trinidad & Tobago; Agbachom v State",
            },
            answer: "a",
          },
          {
            id: 33,
            context: "Counsel is absent from a hearing without leave of court.",
            question: "Per Oku v State, is mere absence of counsel, without more, treated as contempt?",
            options: {
              a: "Yes, always automatically contempt",
              b: "No — it is dereliction of duty only, not contempt",
              c: "Only if the absence recurs three times",
              d: "Only in criminal, not civil, matters",
            },
            answer: "b",
          },
          {
            id: 34,
            context:
              "A litigant fails to satisfy a plain money judgment against him, without any other aggravating conduct.",
            question: "Per Police v Salami Apampa, is this simple non-payment treated as contempt?",
            options: {
              a: "Yes, automatically",
              b: "No — failure to satisfy a money judgment simpliciter is not contempt",
              c: "Only if the sum exceeds ₦1,000,000",
              d: "Only if the judgment creditor formally complains",
            },
            answer: "b",
          },
          {
            id: 35,
            context: null,
            question: "Which is NOT one of the note's examples of conduct held to be contempt?",
            options: {
              a: "Newspaper articles of scurrilous personal abuse of a judge, even after proceedings end",
              b: "Every private communication to a judge to influence a pending decision",
              c: "Fair and civil criticism of a court's decision",
              d: "Threatening letters to a suitor, judge or court officer",
            },
            answer: "c",
          },
          {
            id: 36,
            context:
              "A lawyer prepares a contemptuous affidavit accusing a judge of political partisanship, which the client then swears to and files.",
            question: "Per AG v Chief Samuel Taiwo Oredein, is the drafting lawyer as guilty as the client for this contempt?",
            options: {
              a: "No — only the client who swears the affidavit is liable",
              b: "Yes — the lawyer who prepares such an affidavit is equally if not more guilty",
              c: "The lawyer bears no responsibility whatsoever for content he did not personally believe",
              d: "Liability depends solely on whether the affidavit was ultimately filed in court",
            },
            answer: "b",
          },
          {
            id: 37,
            context: "Words are spoken within the precincts of the court, obstructing or calculated to obstruct justice.",
            question: "Is this contempt in facie curiae or ex facie curiae, and how is ex facie curiae distinguished?",
            options: {
              a: "In facie curiae — words/acts within the court's precincts; ex facie curiae is words/acts done OUTSIDE court intended or likely to interfere with fair administration of justice",
              b: "Ex facie curiae — because it involves speech, not physical conduct",
              c: "Neither classification applies to spoken words",
              d: "In facie curiae only applies to written contempt",
            },
            answer: "a",
          },
          {
            id: 38,
            context: "A subpoena is issued on a judge, intending to obstruct justice, to testify in a cause he part-heard.",
            question: "Per Noibi v Noibi, is issuing such a subpoena punishable?",
            options: {
              a: "No — a judge may always be subpoenaed without consequence",
              b: "Yes — issuing a subpoena on a judge to testify in a part-heard cause, intending to obstruct justice, is punishable as contempt",
              c: "Only if the judge voluntarily agrees to testify",
              d: "This scenario has no bearing on contempt law",
            },
            answer: "b",
          },
          {
            id: 39,
            context: null,
            question: "What is the standard of proof for contempt, including civil contempt arising from breach of an injunction?",
            options: {
              a: "Balance of probabilities, as in any civil matter",
              b: "Proof beyond reasonable doubt, since contempt is of a criminal character",
              c: "No formal standard of proof is required",
              d: "Preponderance of evidence, a lower civil standard",
            },
            answer: "b",
          },
          {
            id: 40,
            context: "A contemnor deliberately disobeyed a court order, but claims he had no intention to disrespect the court.",
            question: "Does deliberate disobedience prove mens rea, and does lack of intent render contempt innocuous?",
            options: {
              a: "Deliberate disobedience is proof of mens rea (Adegborioye v Afe Babalola); yet lack of intent does not render contempt innocuous (R v Service Press Ltd), and motive is irrelevant (Stericon v Downs)",
              b: "Intent is entirely irrelevant to contempt in every respect",
              c: "Lack of intent is always a complete defence to any contempt charge",
              d: "Only motive, not intent, matters for contempt",
            },
            answer: "a",
          },
          {
            id: 41,
            context: "The beneficiary of a court order waives the breach and no longer wishes to pursue it.",
            question: "Does waiver by the beneficiary answer civil contempt, criminal contempt, or both?",
            options: {
              a: "Both civil and criminal contempt",
              b: "Civil contempt only — never criminal contempt (Kwesi Enimil v Kwesi Tuakyi)",
              c: "Criminal contempt only",
              d: "Neither — waiver has no legal effect on contempt proceedings",
            },
            answer: "b",
          },
          {
            id: 42,
            context: "A contemnor's disobedience of a court order is found to be entirely unintentional.",
            question: "Per Awosanya v Board of Customs, how may unintentional disobedience be treated?",
            options: {
              a: "As minor civil contempt, leading to acquittal and discharge",
              b: "As criminal contempt, requiring full prosecution regardless of intent",
              c: "As no contempt at all, with automatic dismissal and no findings",
              d: "As grounds for immediate imprisonment without trial",
            },
            answer: "a",
          },
          {
            id: 43,
            context: null,
            question: "What is the guiding principle (per Oswald) that must be observed before punishing anyone for contempt?",
            options: {
              a: "No punishment unless the specific offence is distinctly stated and an opportunity of answering is given",
              b: "Punishment may be summary and unstated, provided it is proportionate",
              c: "The contemnor need not be informed of the charge before sentencing",
              d: "Only the judge personally attacked may determine the punishment",
            },
            answer: "a",
          },
          {
            id: 44,
            context: "A judge who is personally scandalised in open court wishes to try the contempt himself, summarily.",
            question: "For summary trial of in-facie criminal contempt to be proper, what condition (per Deduwa; Agbachom) must be satisfied, and where does the accused sit during the hearing?",
            options: {
              a: "Only where the facts are so notorious as to be virtually incontestable; the accused goes into the dock, not the witness box (compelling testimony offends s.36(11) CFRN)",
              b: "Summary trial is proper in every case of in-facie contempt without restriction; the accused testifies from the witness box",
              c: "Summary trial requires a jury; the accused sits with counsel",
              d: "There is no restriction on when summary trial is proper",
            },
            answer: "a",
          },
          {
            id: 45,
            context: "Contempt occurs outside the court's precincts (ex facie curiae).",
            question: "What is the correct procedure for ex facie criminal contempt, and may it ever be tried summarily?",
            options: {
              a: "Police investigation and trial before another judge with full criminal procedure — never summary, and a personally attacked judge should not hear the case",
              b: "It may always be tried summarily by the same judge who was attacked",
              c: "It is not punishable at all, since it occurs outside court",
              d: "It is tried by the National Judicial Council, not a court",
            },
            answer: "a",
          },
          {
            id: 46,
            context: "A person is alleged to be in civil contempt for defying an order to vacate land.",
            question: "What is the correct civil-contempt procedure, from show-cause to committal?",
            options: {
              a: "Serve Form 48 (show cause/warning); if purged it ends; else Form 49 (committal), then trial — still proof beyond reasonable doubt",
              b: "Immediate arrest and imprisonment, with no show-cause step",
              c: "A simple letter of demand, with no formal court process",
              d: "Referral to the police for a criminal charge under s.133 Criminal Code",
            },
            answer: "a",
          },
          {
            id: 47,
            context:
              "An applicant for committal fails to serve the original formal order signed by the judge on the alleged contemnor.",
            question: "Per Enwelum v Ekwesie, what is the effect of this failure?",
            options: {
              a: "It is a minor irregularity with no consequence",
              b: "It is fatal to the committal application",
              c: "It may be cured at any time before judgment without formality",
              d: "It only affects costs, not the validity of the application",
            },
            answer: "b",
          },
          {
            id: 48,
            context: null,
            question: "Which courts have jurisdiction over in-facie contempt, and which over ex-facie contempt?",
            options: {
              a: "In facie: every court, Magistrate to Supreme Court; ex facie: only the High Court and superior courts above it",
              b: "In facie: only the Supreme Court; ex facie: every court",
              c: "Both types of contempt: Magistrate Courts only",
              d: "In facie and ex facie contempt share identical jurisdiction at every level",
            },
            answer: "a",
          },
          {
            id: 49,
            context: "A Magistrate wishes to punish a person for contempt committed entirely outside his courtroom.",
            question: "Per Nunku v IGP, may a Magistrate punish contempt committed outside court?",
            options: {
              a: "Yes, without restriction",
              b: "No — a Magistrate cannot punish contempt committed outside court",
              c: "Yes, but only with the prior written consent of the Chief Judge",
              d: "Yes, provided the contemnor consents to summary trial",
            },
            answer: "b",
          },
          {
            id: 50,
            context: null,
            question: "State the maximum punishments for contempt under s.133 Criminal Code, s.155 Penal Code, and for civil contempt generally.",
            options: {
              a: "s.133 CC: 3 months; s.155 PC: 6 months or ₦40 fine or both; civil contempt: 6 months (except imprisonment until the contemnor purges the contempt)",
              b: "s.133 CC: 6 months; s.155 PC: 3 months; civil contempt: 12 months in all cases",
              c: "All three carry an identical maximum of 12 months",
              d: "There is no fixed maximum for any of the three",
            },
            answer: "a",
          },
          {
            id: 51,
            context:
              "A contemnor purges his contempt by a sincere apology and credible explanation, showing his conduct was unintentional or based on a mistaken belief of the law.",
            question: "May the court pardon him on this basis, per State v Hon. Justice Ekundayo?",
            options: {
              a: "No — once found in contempt, punishment is mandatory and cannot be mitigated",
              b: "Yes — pardon is available where conduct was unintentional and purged by sincere apology/credible explanation, or arose from a mistaken belief or misconception of the law",
              c: "Pardon is only available to judicial officers, never to lawyers or litigants",
              d: "Pardon requires a presidential prerogative of mercy",
            },
            answer: "b",
          },
          {
            id: 52,
            context: null,
            question: "Name any four of the menu of orders a court may make against a contemnor.",
            options: {
              a: "Imprisonment; costs; fine; apology; caution and reprimand; caution and discharge; pardon and discharge; total discharge",
              b: "Only imprisonment is available — no other order exists",
              c: "Only a fine is available under Nigerian law",
              d: "Deportation; loss of citizenship; forfeiture of property; public flogging",
            },
            answer: "a",
          },
          {
            id: 53,
            context: "One judge presides over a case in which another judge (sitting as a tribunal chairman) is alleged to be in contempt.",
            question:
              "Per the note's discussion of State v Justice Ekundayo, can a judge commit another judge for contempt?",
            options: {
              a: "No — judges enjoy absolute immunity from each other's contempt jurisdiction",
              b: "Yes — a judge can commit another judge (Ekundayo sat as tribunal chairman, not as High Court judge)",
              c: "Only the Chief Justice of Nigeria may commit another judge",
              d: "This scenario is legally impossible and has never arisen",
            },
            answer: "b",
          },
          {
            id: 54,
            context: null,
            question: "Can a corporation be punished for contempt?",
            options: {
              a: "No — only natural persons can be held in contempt",
              b: "Yes — R v Onwuegbuna & Associated Newspapers confirms a corporation can be punished for contempt",
              c: "Only if the corporation is government-owned",
              d: "Only if all directors personally consent",
            },
            answer: "b",
          },
          {
            id: 55,
            context: null,
            question: "Name six areas identified as affected by corruption in the legal system.",
            options: {
              a: "Bailiffs demanding 'mobilisation' fees; judicial officers/inferior court judges taking bribes; external pressure on judges; police demanding bribes for administrative bail; pressured D.P.P. advice; alleged money laundering by practitioners",
              b: "Only bribery of judges — no other category exists",
              c: "Corruption is limited to the executive branch and does not touch the legal profession",
              d: "Corruption is only found in criminal, not civil, litigation",
            },
            answer: "a",
          },
          {
            id: 56,
            context: "Police officers are alleged to be misused as tools of private vendetta against a citizen.",
            question: "Which case carries Elias CJN's dictum admonishing the police against being used as agents of vendetta?",
            options: {
              a: "Ajao v Ashiru (1973)",
              b: "Awobokun v Adeyemi",
              c: "Fawehinmi v NBA",
              d: "Kano State UDB v Fanz Construction",
            },
            answer: "a",
          },
          {
            id: 57,
            context:
              "A lawyer previously assumed the Money Laundering (Prohibition) Act 2011 did not apply to him at all.",
            question: "Does the CBN v Incorporated Trustees of NBA position (lawyers outside the 2011 Act) remain the current law?",
            options: {
              a: "Yes, unchanged — lawyers remain entirely outside all AML legislation",
              b: "No — the Money Laundering (Prohibition) Act 2022, s.30, now expressly lists legal practitioners and notaries as designated non-financial businesses and professions, overtaking the earlier position",
              c: "The position was reversed by the Evidence Act 2011",
              d: "The position has never been addressed by any statute",
            },
            answer: "b",
          },
          {
            id: 58,
            context: null,
            question: "Under Chapter 2 RPC 2023, what does R.57(1) identify as a reporting trigger requiring AML vigilance?",
            options: {
              a: "Acting as director/secretary of a company, partner of a partnership, or similar, where red flags are present",
              b: "Simply having any client at all, regardless of the transaction",
              c: "Only representing a client in a criminal trial",
              d: "Only appearing in the Federal High Court",
            },
            answer: "a",
          },
          {
            id: 59,
            context: null,
            question: "Name one of the three R.57(4) exceptions to Chapter 2's AML reporting triggers.",
            options: {
              a: "Practitioners providing only notary public services",
              b: "Practitioners handling any real-estate matter, regardless of role",
              c: "Practitioners acting for government agencies only",
              d: "Practitioners in rural practice only",
            },
            answer: "a",
          },
          {
            id: 60,
            context: null,
            question: "For how long must client-identification and transaction records be kept, per R.58, and does this apply whether the transaction is ongoing or terminated?",
            options: {
              a: "A minimum of 5 years after completion or termination; the obligation subsists in both cases",
              b: "1 year, only for ongoing transactions",
              c: "Indefinitely, but only for terminated transactions",
              d: "There is no minimum record-keeping period",
            },
            answer: "a",
          },
          {
            id: 61,
            context: null,
            question: "Which body solely undertakes compliance examinations of law firms for AML purposes, and to whom does it forward its reports?",
            options: {
              a: "The NBA Anti-Money Laundering Committee (NBAAMLC), which forwards reports to SCUML",
              b: "The Central Bank of Nigeria directly",
              c: "The Nigerian Financial Intelligence Unit (NFIU) directly, bypassing the NBA",
              d: "The Economic and Financial Crimes Commission alone",
            },
            answer: "a",
          },
          {
            id: 62,
            context: "A law firm discovers a suspicious transaction potentially linked to money laundering by a client.",
            question: "What is the correct reporting chain for a Suspicious Transaction Report (STR)?",
            options: {
              a: "The practitioner files with the NBAAMLC, for onward transmission to the NFIU",
              b: "Directly to the police, bypassing all professional bodies",
              c: "Directly to the client's bank",
              d: "No reporting obligation exists for suspicious transactions",
            },
            answer: "a",
          },
          {
            id: 63,
            context: "A firm screens its clients against sanctions lists and finds a positive match.",
            question:
              "Per R.60(2)–(4), against which two lists must clients and transactions be screened, and what must happen on a positive match?",
            options: {
              a: "The UN Consolidated List and the Nigerian Sanction List; on a match, funds/assets/economic resources must be identified and frozen without prior notice, reported to NBAAMLC for the Sanctions Committee, and an STR filed",
              b: "Only the UN Consolidated List; no action is required on a positive match beyond noting it",
              c: "Only the Nigerian Sanction List; the client must simply be advised to self-report",
              d: "There is no sanctions-screening obligation under Chapter 2 RPC",
            },
            answer: "a",
          },
          {
            id: 64,
            context: "A law firm fails entirely to comply with its Chapter 2 AML obligations.",
            question: "What is the consequence of non-compliance with Chapter 2 RPC's AML/CFT duties?",
            options: {
              a: "No consequence — Chapter 2 is merely advisory",
              b: "Professional misconduct, punishable under the LPA, grounding disciplinary proceedings via the NBAAMLC",
              c: "Only a civil fine payable to SCUML",
              d: "Automatic strike-off with no hearing",
            },
            answer: "b",
          },
          {
            id: 65,
            context: null,
            question: "Name three of the nine 'higher-risk client' indicators listed for AML purposes.",
            options: {
              a: "Politically exposed persons; clients conducting business unusually; cash-intensive businesses",
              b: "Long-standing clients; clients with a fixed address; clients who pay by bank transfer",
              c: "Clients who instruct in writing; clients who pay promptly; clients referred by other lawyers",
              d: "Clients under 30 years old; first-time clients; clients outside Lagos",
            },
            answer: "a",
          },
          {
            id: 66,
            context: null,
            question:
              "In R v Clewere and Jones v National Coal Board, what principle concerning the judge's role during trial is illustrated?",
            options: {
              a: "The court must not unduly descend into the arena — counsel must be allowed to conduct his case as he thinks best",
              b: "The judge must actively cross-examine every witness personally",
              c: "The judge has no duty of impartiality once a party is represented by counsel",
              d: "The judge must always accept counsel's characterisation of the facts without question",
            },
            answer: "a",
          },
          {
            id: 67,
            context: "A judge sits unconcerned while counsel's evident incompetence causes an injustice to a litigant.",
            question: "Per Eleja v Bangudu, is the judge entirely absolved of responsibility in this scenario?",
            options: {
              a: "Yes, entirely — the judge bears no responsibility for counsel's incompetence",
              b: "No — while the court must not descend into the arena, it should not sit unconcerned while counsel's incompetence causes injustice",
              c: "The judge's only duty is to record the proceedings accurately",
              d: "This principle applies only in criminal, not civil, trials",
            },
            answer: "b",
          },
          {
            id: 68,
            context: null,
            question: "In civil trials, what is the logical sequence for presenting evidence, as opposed to criminal trials?",
            options: {
              a: "Civil: plaintiff testifies first, then his witnesses, then the defence; Criminal: prosecution witnesses led first, then the accused (if testifying) leads defence witnesses",
              b: "The sequence is identical for civil and criminal trials in every respect",
              c: "Civil: defence goes first in every case; Criminal: prosecution always goes last",
              d: "There is no prescribed sequence in Nigerian trial practice",
            },
            answer: "a",
          },
          {
            id: 69,
            context: null,
            question: "Which Latin maxim captures the idea that the court relies on counsel, as an officer of the court, to ascertain the truth?",
            options: {
              a: "Veritas est justitiae mater",
              b: "Nemo judex in causa sua",
              c: "Audi alteram partem",
              d: "Res ipsa loquitur",
            },
            answer: "a",
          },
          {
            id: 70,
            context: null,
            question: "What does Rule 34 (relations with judges) forbid?",
            options: {
              a: "Nothing — a lawyer may cultivate any relationship with a judge he wishes",
              b: "Anything calculated to gain — or appearing to gain — special personal consideration or favour from a judge; the lawyer must exercise utmost discretion in the relationship",
              c: "Only social contact outside working hours",
              d: "Only written communication with a judge, not verbal",
            },
            answer: "b",
          },
          {
            id: 71,
            context:
              "Lord Denning, in Rondel v Worsley, describes the true character of counsel's role toward his client.",
            question: "How does Lord Denning describe counsel's relationship to the client's cause?",
            options: {
              a: "Counsel is the client's mouthpiece and tool, bound to advance any argument the client wishes",
              b: "Counsel is neither the client's mouthpiece nor his tool — he owes allegiance to the higher cause of truth and justice",
              c: "Counsel owes no independent duty at all — only the duty to win",
              d: "Counsel's sole obligation is to maximise his own fee",
            },
            answer: "b",
          },
          {
            id: 72,
            context: null,
            question: "What must a public prosecutor NOT do, under Rule 37(5)?",
            options: {
              a: "Institute a charge he knows is unsupported by probable evidence",
              b: "Call more than five witnesses in any single trial",
              c: "Appear in more than one criminal case per week",
              d: "Accept instructions from the police",
            },
            answer: "a",
          },
          {
            id: 73,
            context:
              "A civil claimant's lawyer advises litigation and gives the client bold, confident assurances of success before the other side has been heard.",
            question: "Is this consistent with the note's guidance on civil case duties?",
            options: {
              a: "Yes — confident assurances build client trust and are encouraged",
              b: "No — where litigation is advised, counsel should refrain from bold and confident assurances, since the other side has not yet been heard",
              c: "Confident assurances are required by the RPC in every civil matter",
              d: "This guidance applies only to criminal, not civil, matters",
            },
            answer: "b",
          },
          {
            id: 74,
            context:
              "After commencing a civil suit, counsel realises the case has become hopeless, but the client insists on continuing.",
            question: "Per Re Cooke, is it dishonourable for counsel to continue acting once the client insists, after being advised to discontinue?",
            options: {
              a: "Yes — continuing after hopelessness emerges is always dishonourable",
              b: "No — counsel should advise discontinuance, but continuing is not dishonourable if the client insists",
              c: "Counsel must withdraw immediately once hopelessness emerges, regardless of client wishes",
              d: "The client's insistence is irrelevant — the court alone decides whether to continue",
            },
            answer: "b",
          },
          {
            id: 75,
            context:
              "A lawyer acts entirely without reward (gratuitously) for a client, and a negligence claim later arises.",
            question: "Under s.9(2) LPA, may liability be excluded or limited in this circumstance?",
            options: {
              a: "No — exclusion is void in all circumstances",
              b: "Yes — exclusion/limitation is permitted specifically where the practitioner acts without reward",
              c: "Exclusion is permitted only for paid, not gratuitous, work",
              d: "s.9(2) LPA does not address this scenario at all",
            },
            answer: "b",
          },
          {
            id: 76,
            context: null,
            question: "Name two of the four public-policy rationales for the in-court negligence immunity.",
            options: {
              a: "Lawyers must be fearless and independent in court; avoiding retrial of the case within the negligence action",
              b: "Reducing the cost of litigation insurance; increasing the number of practising lawyers",
              c: "Protecting judges from criticism; reducing appeals",
              d: "Encouraging settlement; discouraging jury trials",
            },
            answer: "a",
          },
          {
            id: 77,
            context: null,
            question: "What is the tariff (maximum term) under s.133 Criminal Code for contempt, per Okoma v Udoh (2002)?",
            options: {
              a: "1 month",
              b: "3 months",
              c: "6 months",
              d: "12 months",
            },
            answer: "b",
          },
          {
            id: 78,
            context: null,
            question:
              "Per Ikabala v Ojosipe and Ope v Olonje, may a contemnor be imprisoned for an open-ended period beyond the standard civil-contempt tariff?",
            options: {
              a: "No — civil contempt imprisonment is always capped at exactly 6 months with no exception",
              b: "Yes — imprisonment may run until the contemnor remedies his default or purges the contempt, as an exception to the standard tariff",
              c: "Imprisonment for civil contempt is never permitted under any circumstances",
              d: "Only fines, never imprisonment, are available for civil contempt",
            },
            answer: "b",
          },
          {
            id: 79,
            context: null,
            question: "May costs be imposed as a form of contempt order?",
            options: {
              a: "No — costs and contempt are entirely unrelated concepts",
              b: "Yes — Rex v Jackson and Rex v Ojukoku confirm costs may be ordered as part of the menu of contempt sanctions",
              c: "Costs may only be imposed in civil, not criminal, contempt",
              d: "Costs may only be imposed on the applicant, never the contemnor",
            },
            answer: "b",
          },
          {
            id: 80,
            context:
              "A person accuses a judge of un-judicial conduct in the course of otherwise fair and legitimate criticism.",
            question: "Per Maharaj v AG Trinidad & Tobago, does such an accusation automatically amount to contempt?",
            options: {
              a: "Yes, automatically in every case",
              b: "Not necessarily — fair criticism/un-judicial-conduct accusations may not amount to contempt in appropriate cases",
              c: "Only if the judge personally initiates proceedings",
              d: "This case has no bearing on the fair-criticism defence",
            },
            answer: "b",
          },
          {
            id: 81,
            context: null,
            question: "Define money laundering, as stated in the note.",
            options: {
              a: "The process of illegally concealing the origin of money obtained from illicit activities and converting the funds into a seemingly legitimate source, usually through a front organisation",
              b: "Any transaction exceeding ₦10,000,000",
              c: "The lawful conversion of foreign currency into naira",
              d: "Tax avoidance through legitimate business structuring",
            },
            answer: "a",
          },
          {
            id: 82,
            context: null,
            question: "Which of the following is one of the note's stated objectives of Chapter 2 RPC 2023 (R.55)?",
            options: {
              a: "Promote adherence to the rule of law; preserve confidentiality and lawyer-client privilege; internal self-regulation; a risk-based approach to identifying ML/TF",
              b: "Maximise law firm revenue from AML compliance work",
              c: "Eliminate the need for client due diligence entirely",
              d: "Transfer all AML enforcement to the Nigeria Police Force",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "pe-topic-5",
        name: "Part 5: Law Office Management",
        sourceRef: "Part 5 · pp. 81–108",
        questionsCount: 60,
        questions: [
          {
            id: 1,
            context: null,
            question: "On what does a practitioner's success chiefly depend, per the note's opening claim about law office management?",
            options: {
              a: "His ability to manage his law office — more than his academic achievement, advocacy or drafting skill",
              b: "His academic performance in law school alone",
              c: "His skill in advocacy alone, with management being irrelevant",
              d: "The number of years he has practised, regardless of management ability",
            },
            answer: "a",
          },
          {
            id: 2,
            context:
              "A lawyer called to the Bar only two years ago wishes to open his own practice immediately, without any period of pupillage.",
            question: "Is this permitted under the current position, as opposed to the old rule under the now-repealed s.6(2) of the Regulated and Other Professions (Private Practice Prohibition) Act?",
            options: {
              a: "No — the old 5-year pupillage bar on solo private practice remains fully in force",
              b: "Yes — the old rule requiring 5 years post-call before solo private practice is repealed; every legal practitioner may now engage in private practice immediately after Call",
              c: "Only lawyers called for at least 3 years may open a practice",
              d: "Only SANs may open a practice without pupillage",
            },
            answer: "b",
          },
          {
            id: 3,
            context:
              "A lawyer regularly loiters around the court premises to pick up bail-application instructions from arrested persons' relatives, rather than operating from a law office.",
            question: "What is this practice called, and what is its status under the RPC?",
            options: {
              a: "'Charge and bail' practice — it breaches the RPC (Rule 22 logic requiring practice from a law office)",
              b: "'Duty counsel' practice — expressly encouraged by the RPC",
              c: "'Ambulance chasing' — permitted only for criminal defence lawyers",
              d: "This practice has no name and is entirely unregulated",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "A sole practitioner wishes to operate his law office from a room in his private residence.",
            question: "Is a law office permitted to be located in the practitioner's home?",
            options: {
              a: "No — a law office may never be located in a private home under any circumstances",
              b: "Yes — a law office may be located in the home, though management theorists warn against it",
              c: "Only with the written permission of the NBA branch",
              d: "Only for lawyers of more than 20 years' standing",
            },
            answer: "b",
          },
          {
            id: 5,
            context: null,
            question: "Name four of the nine reasons given for establishing a law firm.",
            options: {
              a: "Necessity (no paid employment); independence; profitability/higher fees; self-esteem/prestige",
              b: "Boredom; peer pressure; family tradition; lack of alternatives",
              c: "Tax avoidance; avoiding NBA dues; avoiding CPD requirements; avoiding court appearances",
              d: "Only one reason is given: financial necessity",
            },
            answer: "a",
          },
          {
            id: 6,
            context: null,
            question:
              "Which three RPC rules anchor the honesty-and-integrity foundation of successful legal practice, per the note?",
            options: {
              a: "Rules 1, 23 and 54 (alongside Rule 15's conscience principle)",
              b: "Rules 39, 40 and 46",
              c: "Rules 5, 7 and 13",
              d: "Rules 48, 49 and 50",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "A lawyer receives a gift or commission from the opposing party in a matter he is handling.",
            question: "What does Rule 54 require before he may accept such compensation, rebate, commission or gift?",
            options: {
              a: "Nothing — he may accept freely without informing anyone",
              b: "The client's full knowledge and consent, given after full disclosure",
              c: "Only the opposing party's consent is required",
              d: "Only the NBA branch's approval is required",
            },
            answer: "b",
          },
          {
            id: 8,
            context:
              "A young lawyer wishes to open his own firm immediately after Call, without any prior work experience.",
            question: "What does the note recommend as the best way to acquire experience before opening a firm?",
            options: {
              a: "Working for a time in a well-established firm or the Ministry of Justice",
              b: "Reading law textbooks exclusively for one year",
              c: "Attending international conferences before opening a firm",
              d: "There is no recommendation — direct practice from Call is always best",
            },
            answer: "a",
          },
          {
            id: 9,
            context: null,
            question: "Name the four units of legal practice under the note's PASS classification.",
            options: {
              a: "Sole practitionership; sole proprietorship; associateship; partnership",
              b: "Partnership; corporation; cooperative; sole trader",
              c: "Chambers; firm; company; syndicate",
              d: "Junior practice; senior practice; SAN practice; retired practice",
            },
            answer: "a",
          },
          {
            id: 10,
            context: null,
            question: "Which unit of legal practice is described as the smallest and commonest in Nigeria?",
            options: {
              a: "Partnership",
              b: "Associateship",
              c: "Sole practitionership",
              d: "Sole proprietorship",
            },
            answer: "c",
          },
          {
            id: 11,
            context:
              "A lawyer practises alone, employing only support staff such as a secretary and a dispatch clerk, with no other lawyers in his office.",
            question: "Which unit of practice is this, distinguishing it from sole proprietorship?",
            options: {
              a: "Sole practitionership — the proprietor of a sole proprietorship, by contrast, employs other lawyers (fee earners) in addition to support staff",
              b: "Associateship — because he works alone",
              c: "Partnership — because he has employees",
              d: "There is no distinction between sole practitionership and sole proprietorship",
            },
            answer: "a",
          },
          {
            id: 12,
            context:
              "Two lawyers share office premises and jointly pay for support staff, but each keeps an entirely independent practice with separate clients.",
            question: "Do associates in this arrangement share profits with one another?",
            options: {
              a: "Yes, always in equal proportion",
              b: "No — each remains a sole proprietor with separate clients, and there is no profit-sharing",
              c: "Only if their combined turnover exceeds a stated threshold",
              d: "Profit-sharing is mandatory once shared premises are agreed",
            },
            answer: "b",
          },
          {
            id: 13,
            context: null,
            question: "Name three incidents of the relationship between partners in a law partnership, and the case authority for joint and several liability.",
            options: {
              a: "Mutual agency; fiduciary duties (no secret profits); joint and several liability — Yesufu & Anor v Kupper International NV",
              b: "Independence from one another; no shared liability whatsoever; no fiduciary duties",
              c: "Automatic profit equality regardless of contribution; no agency relationship; limited liability like a company",
              d: "Partners owe no duties to one another beyond the written agreement",
            },
            answer: "a",
          },
          {
            id: 14,
            context:
              "One partner in a law firm enters into a transaction within the ordinary course of the partnership business, and it later causes loss to a client.",
            question: "Per United Bank of Kuwait v Hammond, is each partner liable for another partner's acts within the partnership business?",
            options: {
              a: "No — each partner is liable only for his own individual acts",
              b: "Yes — each partner is liable for another's acts within the partnership business",
              c: "Only the managing partner bears such liability",
              d: "Liability depends entirely on which partner signed the retainer letter",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "Two lawyers wish to form a partnership but have not signed any written document.",
            question: "In what forms may a valid partnership be created?",
            options: {
              a: "Only in writing — an oral partnership agreement is void",
              b: "Orally, in writing, or by deed — though writing is advised",
              c: "Only by a registered deed",
              d: "Only through a CAC-registered incorporated entity",
            },
            answer: "b",
          },
          {
            id: 16,
            context:
              "A law firm continues to use the name of a partner who died five years ago, and the firm's clientele have no reason to be misled by this.",
            question: "Under Rule 5(2) RPC, is retaining a deceased partner's name in the firm name permitted?",
            options: {
              a: "No — the name must be removed immediately on the partner's death",
              b: "Yes — a deceased or former partner's name may remain, provided it does not lead to deception",
              c: "Only for one year after death, then it must be removed",
              d: "Only with the written consent of the deceased partner's estate",
            },
            answer: "b",
          },
          {
            id: 17,
            context: null,
            question: "Who typically prepares a business plan for a proposed law firm, and for whom?",
            options: {
              a: "An Accountant, prepared for the owner",
              b: "The NBA branch secretary, for the Bar Council",
              c: "The Council of Legal Education, for all new practitioners",
              d: "The client, for the lawyer",
            },
            answer: "a",
          },
          {
            id: 18,
            context: null,
            question: "Name four of the seventeen contents typically found in a partnership agreement.",
            options: {
              a: "Firm name; capital contributions; admission of new partners; dispute resolution",
              b: "The partners' personal social media handles; their favourite restaurants; their preferred holiday months; their car models",
              c: "Only the firm's bank account details are required",
              d: "Partnership agreements have no standard content — each is entirely improvised",
            },
            answer: "a",
          },
          {
            id: 19,
            context: null,
            question: "What are the three benefits a potential client typically seeks from a law firm?",
            options: {
              a: "Expertise; experience; efficiency",
              b: "Proximity; low fees; flashy office decor",
              c: "Seniority of the lawyer alone, regardless of any other factor",
              d: "A guarantee of winning the case",
            },
            answer: "a",
          },
          {
            id: 20,
            context: null,
            question: "How are law firms classified by size (number of lawyers), per the note?",
            options: {
              a: "Small: 1–4; Medium: 5–9; Large: 10+ (measured in fee earners)",
              b: "Small: 1–2; Medium: 3–5; Large: 6+",
              c: "Small: 1–10; Medium: 11–20; Large: 21+",
              d: "There is no standard size classification",
            },
            answer: "a",
          },
          {
            id: 21,
            context: null,
            question: "Expand the CLANS criteria used to classify a law firm.",
            options: {
              a: "Client base; Location; Available facilities; Number of lawyers; Status of lawyers",
              b: "Capital; Liabilities; Assets; Net worth; Solvency",
              c: "Confidentiality; Loyalty; Advocacy; Negotiation; Skill",
              d: "Court access; Litigation focus; Advertising; Networking; Salaries",
            },
            answer: "a",
          },
          {
            id: 22,
            context: "A new firm is budgeting for premises, furniture, office machinery and vehicles, as well as ongoing salaries and stationery.",
            question: "Distinguish start-up capital from working capital, with an example of each.",
            options: {
              a: "Start-up: premises, furniture, equipment (bought or hired before operations begin); working capital: recurrent expenditure such as salaries, utilities and stationery",
              b: "Start-up and working capital are the same concept under a different name",
              c: "Start-up capital covers only cash in hand; working capital covers only fixed assets",
              d: "Working capital must always exceed start-up capital by law",
            },
            answer: "a",
          },
          {
            id: 23,
            context: "A new practitioner is deciding whether to fund fixed assets (furniture, a vehicle) with a bank loan or an overdraft, and separately how to fund recurring salary payments.",
            question:
              "Which facility runs interest on the entire sum whether utilised or not, and which is repayable on demand — and which facility is recommended for start-up capital versus working capital?",
            options: {
              a: "Loan interest runs on the entire sum regardless of use, and is recommended for start-up capital; an overdraft (interest only on the amount used, repayable on demand) is recommended for working capital",
              b: "An overdraft runs interest on the entire sum; a loan is repayable on demand",
              c: "Both facilities are functionally identical",
              d: "Loans are recommended for working capital; overdrafts for start-up capital",
            },
            answer: "a",
          },
          {
            id: 24,
            context: "A bank grants a practitioner a business loan without taking any security whatsoever.",
            question: "Under the Failed Banks (Recovery of Debts) and Financial Malpractices in Banks Decree No. 18 of 1994, what is the legal status of granting a loan without adequate security?",
            options: {
              a: "It is entirely lawful and unregulated",
              b: "It is now criminal, under ss.19–20 of the Decree",
              c: "It is only a breach of internal bank policy, with no legal consequence",
              d: "It is only relevant to loans exceeding ₦100,000,000",
            },
            answer: "b",
          },
          {
            id: 25,
            context: "A newly called lawyer refers to his law office as his 'Chambers,' following the English tradition.",
            question: "Why is 'Chambers' considered an inappropriate term in Nigeria, and what is the proper term?",
            options: {
              a: "'Chambers' is inappropriate because Nigeria's profession is fused (barrister and solicitor); the proper term is Law Office (or 'Law Firm,' as used in the fused US profession)",
              b: "'Chambers' is entirely correct and is the term used throughout the note",
              c: "'Chambers' is reserved exclusively for SAN practices",
              d: "There is no distinction — both terms are used interchangeably without comment",
            },
            answer: "a",
          },
          {
            id: 26,
            context: null,
            question: "Name the three types of premises a law office may occupy.",
            options: {
              a: "Purpose-built office accommodation; an existing (converted) building; an office in the home",
              b: "Rented flat; shared co-working space; virtual office only",
              c: "Government-allocated premises; NBA-owned premises; privately leased premises",
              d: "There is only one recognised type: purpose-built accommodation",
            },
            answer: "a",
          },
          {
            id: 27,
            context: null,
            question: "State one advantage and two disadvantages of operating a law office from the practitioner's home.",
            options: {
              a: "Advantage: saves overhead cost; disadvantages: inconvenience and lack of a business-like image",
              b: "Advantage: guarantees more clients; disadvantages: higher tax liability and reduced privacy",
              c: "Advantage: better security; disadvantages: none — it is universally recommended",
              d: "There are no advantages to a home office under any circumstance",
            },
            answer: "a",
          },
          {
            id: 28,
            context: null,
            question: "Expand the LCC-S siting factors used when choosing law-office premises.",
            options: {
              a: "Location/proximity to court; Capital; Clientele accessibility; Serene environment",
              b: "Legal precedent; Court fees; Client base; Staffing levels",
              c: "Lease terms; Cost of construction; Council approval; Security deposit",
              d: "Location only — the other letters have no meaning",
            },
            answer: "a",
          },
          {
            id: 29,
            context:
              "A new firm is planning its office layout and must decide which rooms are absolutely essential, as opposed to merely desirable.",
            question: "Which room is NOT among the 'most basic' accommodation requirements, even though it appears in the fuller list?",
            options: {
              a: "The reception room",
              b: "The practitioners' room",
              c: "The library/conference room",
              d: "The toilet",
            },
            answer: "c",
          },
          {
            id: 30,
            context: null,
            question: "Distinguish 'fee earners' from 'supporting staff' in a law office.",
            options: {
              a: "Fee earners are the legal practitioners who do legal work and earn fees for the firm; supporting staff render non-legal services",
              b: "Fee earners are only the senior partners; supporting staff includes all other lawyers",
              c: "There is no distinction — all staff are classified identically",
              d: "Fee earners are unpaid interns; supporting staff are salaried employees",
            },
            answer: "a",
          },
          {
            id: 31,
            context: null,
            question: "Name five of the nine basic support-staff roles listed in a law office.",
            options: {
              a: "Office manager; accountant; secretary; librarian; litigation clerk (also driver, security guards, office assistant, typist)",
              b: "Only the office manager and secretary are recognised support roles",
              c: "Judge; magistrate; registrar; bailiff; sheriff",
              d: "Partner; associate; pupil; intern; consultant",
            },
            answer: "a",
          },
          {
            id: 32,
            context:
              "A firm is recruiting a typist, a messenger, and a receptionist, and wants to use the appropriate selection method for each.",
            question: "Which test is used for typists/clerks, which for messengers, and which for receptionists/secretaries?",
            options: {
              a: "Performance tests for typists/clerks; aptitude tests for messengers; personality tests for receptionists/secretaries",
              b: "The same single test is used for all three roles",
              c: "Personality tests for typists; performance tests for messengers; aptitude tests for receptionists",
              d: "No formal testing is recommended for any support role",
            },
            answer: "a",
          },
          {
            id: 33,
            context: null,
            question: "Name five of the thirteen contents of a typical staff offer letter.",
            options: {
              a: "Job title; remuneration; annual leave; restraint of trade; summary dismissal",
              b: "Only the salary figure is required",
              c: "The staff member's personal religious affiliation and marital status",
              d: "The firm's annual turnover and profit margin",
            },
            answer: "a",
          },
          {
            id: 34,
            context: "A support staff member commits a minor infraction for the first time.",
            question: "What is the first rung of the staff disciplinary ladder, and what is the last (for gross misconduct)?",
            options: {
              a: "Verbal admonitions is the first rung; dismissal for gross misconduct is the last",
              b: "Suspension is the first rung; a verbal warning is the last",
              c: "Dismissal is always the first response to any infraction",
              d: "There is no structured disciplinary ladder — dismissal is automatic",
            },
            answer: "a",
          },
          {
            id: 35,
            context:
              "A firm is deciding whether to lease or purchase its office equipment, and wants to know which method is more common in Nigeria.",
            question: "Between leasing and purchase, which is described as uncommon in Nigeria, despite freeing up resources?",
            options: {
              a: "Purchase is uncommon; leasing is the prevalent method",
              b: "Leasing is uncommon in Nigeria; purchase is the prevalent method",
              c: "Both methods are equally common",
              d: "Neither method is used — all equipment is typically donated",
            },
            answer: "b",
          },
          {
            id: 36,
            context:
              "A firm is sorting its office assets into 'machines,' 'equipment,' and 'supplies' for record-keeping purposes.",
            question: "Classify the following: a generator; a photocopier; letterhead paper.",
            options: {
              a: "Machine; equipment; supply",
              b: "Equipment; machine; supply",
              c: "Supply; machine; equipment",
              d: "All three fall under the same category: equipment",
            },
            answer: "a",
          },
          {
            id: 37,
            context: null,
            question: "What document controls supply levels (letterhead, file jackets, sealing wax, etc.) in a law office, with minimum/maximum levels?",
            options: {
              a: "The Stock Book",
              b: "The Cash Book",
              c: "The Journal",
              d: "The Ledger",
            },
            answer: "a",
          },
          {
            id: 38,
            context: null,
            question: "Where in a law office do the disciplinary and grievance procedures for staff typically live?",
            options: {
              a: "The business plan",
              b: "The office manual",
              c: "The client's file",
              d: "The firm's letterhead",
            },
            answer: "b",
          },
          {
            id: 39,
            context: null,
            question: "Distinguish a business plan from an office manual, in terms of when each is prepared and what it covers.",
            options: {
              a: "A business plan is a pre-establishment document (goals and financial projections, prepared by an Accountant); an office manual is an operational rulebook for staff, prepared once the firm is running",
              b: "They are the same document under two different names",
              c: "A business plan covers staff discipline; an office manual covers capital projections",
              d: "An office manual is prepared before the firm opens; a business plan afterwards",
            },
            answer: "a",
          },
          {
            id: 40,
            context:
              "A firm's mission statement focuses on its present activities (e.g. charging low fees, defending indigent accused persons), while its vision statement addresses long-term aspirations (e.g. eradicating oppression of the poor).",
            question: "Which statement is short-term/present-focused, and which is long-term/future-focused?",
            options: {
              a: "Mission = short-term/present; Vision = long-term/future (the note's memory hook: the double 's' in 'miSSion' emphasises 'Short')",
              b: "Mission = long-term/future; Vision = short-term/present",
              c: "Both statements are identical in scope and time horizon",
              d: "Neither statement addresses time horizon at all",
            },
            answer: "a",
          },
          {
            id: 41,
            context: null,
            question: "Expand the CRAMS criteria used for effective goal-setting in a law firm.",
            options: {
              a: "Complementary; Related to time; Attainable; Measurable; Specific",
              b: "Creative; Rapid; Ambitious; Motivating; Simple",
              c: "Costly; Risky; Aggressive; Marketable; Scalable",
              d: "Confidential; Reasonable; Adjustable; Manageable; Strategic",
            },
            answer: "a",
          },
          {
            id: 42,
            context: null,
            question: "Name four of the seven recognised management structures for a law firm.",
            options: {
              a: "Management by a committee of partners; by all partners; by a sole partner; by appointed experts (who may or may not be lawyers)",
              b: "Only management by a sole owner is recognised",
              c: "Management is always by the most senior lawyer in the firm, with no alternative structures",
              d: "Management by the NBA branch; by the Body of Benchers; by the CJN; by the Attorney-General",
            },
            answer: "a",
          },
          {
            id: 43,
            context: null,
            question: "List the five management functions, in the order the note presents them.",
            options: {
              a: "Planning; Organizing; Co-ordinating; Controlling; Evaluating",
              b: "Evaluating; Planning; Controlling; Organizing; Co-ordinating",
              c: "Organizing; Evaluating; Planning; Co-ordinating; Controlling",
              d: "Controlling; Co-ordinating; Organizing; Evaluating; Planning",
            },
            answer: "a",
          },
          {
            id: 44,
            context: "A firm's managing partner conducts a periodic audit of fees realised and overheads to assess performance and cut costs.",
            question: "Which of the five management functions relates specifically to finances, and by what tool?",
            options: {
              a: "Planning — by drafting a business plan",
              b: "Evaluating — by periodic auditing",
              c: "Organizing — by allocating tasks",
              d: "Co-ordinating — by harmonising workflow",
            },
            answer: "b",
          },
          {
            id: 45,
            context: null,
            question: "Name the three types of planning identified under the 'Planning' management function.",
            options: {
              a: "Strategic/long-term; tactical/medium-term; operational/short-term",
              b: "Daily; weekly; monthly",
              c: "Legal; financial; administrative",
              d: "Only strategic planning is recognised",
            },
            answer: "a",
          },
          {
            id: 46,
            context: null,
            question: "What is described as the most effective PERSONAL reminder system for a legal practitioner?",
            options: {
              a: "The diary (personal and office)",
              b: "The office computer, exclusively",
              c: "A colleague's verbal reminder",
              d: "The tickler slip system alone",
            },
            answer: "a",
          },
          {
            id: 47,
            context: null,
            question: "Name three of the firm-wide (as opposed to personal) reminder systems listed.",
            options: {
              a: "Index systems; printed forms; the tickler slip system (also office diary, office computers)",
              b: "Only personal diaries qualify as firm-wide systems",
              c: "Staff meetings; annual retreats; birthday cards",
              d: "There is no distinction between personal and firm-wide reminder systems",
            },
            answer: "a",
          },
          {
            id: 48,
            context: "A case concludes and the file is closed, but the firm wishes to retain it rather than hand it to the client.",
            question: "Where do retained closed files go, and under what kind of schedule?",
            options: {
              a: "Low-cost storage, under a retention schedule rate",
              b: "They are shredded immediately upon closure",
              c: "They are returned automatically to the court registry",
              d: "There is no guidance on retained closed files",
            },
            answer: "a",
          },
          {
            id: 49,
            context: null,
            question: "Name six of the thirteen law office records the Rules contemplate.",
            options: {
              a: "Staff register; master file register; closed-file register; file-movement register; visitors' book; account books",
              b: "Only the cash book and ledger are recognised as law office records",
              c: "Marriage register; birth register; death register; land register; company register; trademark register",
              d: "There are no prescribed law office records beyond the client file itself",
            },
            answer: "a",
          },
          {
            id: 50,
            context: "A SAN applicant's law firm is being assessed for compliance with the second-filter inspection criteria.",
            question: "Under Guideline 22 of the 2022 SAN Guidelines, what are the SAN firm requirements, in terms of junior lawyers and the partnership agreement's duration?",
            options: {
              a: "At least 5 junior lawyers; a partnership agreement of at least 5 years",
              b: "At least 10 junior lawyers; no minimum partnership duration",
              c: "At least 2 junior lawyers; a partnership agreement of at least 1 year",
              d: "There is no requirement relating to firm structure for SAN conferment",
            },
            answer: "a",
          },
          {
            id: 51,
            context: null,
            question: "Per the note's own assertion, what is described as 'the best accounting software'?",
            options: {
              a: "Peachtree",
              b: "SAP",
              c: "Microsoft Excel",
              d: "QuickBooks",
            },
            answer: "c",
          },
          {
            id: 52,
            context: null,
            question: "Name the three e-legal databases listed in the note as examples of virtual/online legal libraries.",
            options: {
              a: "WestLaw; LexisNexis; Law Pavilion",
              b: "Google Scholar; Wikipedia; JSTOR",
              c: "PACER; CourtListener; Justia",
              d: "The note lists no specific databases",
            },
            answer: "a",
          },
          {
            id: 53,
            context: "A firm wishes to advertise its services and lawyer profiles on its website.",
            question: "What RPC rule constrains the content permissible on a law firm's website?",
            options: {
              a: "Rule 39 (the advertising rules)",
              b: "Rule 5 (association for practice)",
              c: "Rule 21 (withdrawal from employment)",
              d: "There is no rule governing firm websites",
            },
            answer: "a",
          },
          {
            id: 54,
            context: null,
            question: "What does the 'Note-Taker' ICT tool used in litigation do?",
            options: {
              a: "It converts a judge's handwritten notes into typed text",
              b: "It automatically drafts pleadings",
              c: "It calculates a bill of charges",
              d: "It records courtroom audio only, with no transcription function",
            },
            answer: "a",
          },
          {
            id: 55,
            context: null,
            question: "Expand the File SOC mnemonic used to summarise ICT case-management usage.",
            options: {
              a: "File management; Safe keeping of data; Online library; Case management",
              b: "Filing; Sorting; Organising; Categorising",
              c: "Fast; Simple; Organised; Cheap",
              d: "Formal; Standard; Official; Complete",
            },
            answer: "a",
          },
          {
            id: 56,
            context:
              "A firm is classifying its ICT hardware into internal and external components.",
            question: "Classify the following as internal or external hardware: RAM; a flash drive; the motherboard; a CCTV camera.",
            options: {
              a: "Internal; External; Internal; External",
              b: "External; Internal; External; Internal",
              c: "All four are internal components",
              d: "All four are external components",
            },
            answer: "a",
          },
          {
            id: 57,
            context: null,
            question: "Name the four software types identified, with one example of each.",
            options: {
              a: "Application (e.g. a browser); System (e.g. an operating system); Programming (e.g. a compiler); Driver (e.g. a USB-device driver)",
              b: "Only two software types are recognised: hardware and firmware",
              c: "Legal software; Illegal software; Free software; Paid software",
              d: "Windows; Mac; Linux; Android — these are the only four categories",
            },
            answer: "a",
          },
          {
            id: 58,
            context: "A firm's internet connection is unreliable, and its lawyers are largely unfamiliar with new legal-tech tools.",
            question: "Name three of the six ICT challenges identified, and their corresponding solutions.",
            options: {
              a: "Poor internet (solved by regular infrastructure); cybercrime (solved by antivirus); computer illiteracy (solved by IT training)",
              b: "ICT has no identified challenges — it is presented as entirely risk-free",
              c: "Only cost is identified as a challenge, with no proposed solution",
              d: "The challenges are unrelated to solutions — no pairing is given",
            },
            answer: "a",
          },
          {
            id: 59,
            context: null,
            question: "Name two of the five disadvantages of ICT adoption in a law office, per the note.",
            options: {
              a: "Job losses among middle/low-level workers; privacy/system compromise through phishing or malware",
              b: "ICT is presented as having no disadvantages at all",
              c: "Increased court fees; reduced client confidentiality by design",
              d: "Mandatory retraining costs paid directly to the NBA",
            },
            answer: "a",
          },
          {
            id: 60,
            context: null,
            question:
              "Two competing memory-aid tags are used in this part of the note: 'PASS' for the four units of practice, and 'PE WARD' for the CV structure discussed elsewhere. What is the note's own caution about mnemonics like these?",
            options: {
              a: "They should be treated as memory aids only, not as strict authorities whose letters must map perfectly onto every listed item",
              b: "They are binding legal terms that must be reproduced verbatim in an exam answer",
              c: "They replace the need to learn the underlying substantive content",
              d: "The note gives no caution about mnemonics whatsoever",
            },
            answer: "a",
          },
        ],
      },
    ],
  },
};

export default topicQuizzes;
