// Court-style drafts, grouped by course.
//
// Each course:  { courseName, drafts: [...] }   (course ids match flashcards.js)
// Each draft:   { id, title, red, category, scenario, keyPoints[], verify[], note?, blocks[] }
//
// `red: true` means the title was written in red in the original book, so the UI
// shows it in red as the lecturer's emphasis.
// `verify` lists words transcribed from handwriting that should be double-checked.
//
// Block kinds (t) used to keep the original placement on the page:
//   letterhead  { lines }                 centred, first line bold
//   sender      { lines }                 right-aligned address + date (applicant's own address)
//   refs        { date }                  "Our Ref" left, "Your Ref" + date right
//   address     { lines }                 left-aligned addressee block
//   salutation  { text }
//   heading     { lines, align, underline }
//   para        { text, indent }          justified paragraph
//   numbered    { items }                 numbered paragraphs (1., 2., ...)
//   memo        { rows: [[label, value]] } FROM / TO / DATE / SUBJECT block
//   signoff     { closing, lines, sign }  closing phrase, signature line, name block
//   line        { text, align }           any single line
//   section     { n, title }              numbered CV heading
//   fields      { rows: [[label, value]] } "Label: value" rows
//   spread      { rows: [[left, right]] } left text with a right-aligned date/column
//   items       { items }                 plain indented lines
//   spacer      {}
//   courtheading { lines, chargeNo }      centred court/division heading, CHARGE NO. pulled top-right
//   parties     { rows: [[name, role]] }  BETWEEN / dashed leader / COMPLAINANT, AND, / dashed leader / DEFENDANT
//   signoffPair { people: [[lines], [lines]] } two signatories side by side, each with their own signature line
//   table       { headers: [...], rows: [[...]] } generic bordered grid (e.g. a subscription box)

const drafts = {
  "professional-ethics": {
    courseName: "Professional Ethics",
    drafts: [
      {
        id: "arbitration-clause",
        title: "Arbitration Clause",
        red: true,
        category: "Clauses",
        scenario:
          "Riggs Nigeria Limited (No 2 Ajayi Street, Lagos) and Palmer Nigeria Plc (No 4 Ijana Avenue, Ikeja, Lagos) are signing an agreement. Draft the arbitration clause: arbitration first, governed by the Arbitration and Mediation Act 2023, English language, one arbitrator appointed by each party from the Institute of Chartered Arbitrators of Nigeria, seat in Lagos State, award within six months unless extended.",
        keyPoints: [
          "Names both parties with their addresses",
          "Arbitration is the first step for any dispute arising out of or in connection with the agreement",
          "Governing law: Arbitration and Mediation Act, 2023",
          "Language of the proceedings: English",
          "Number of arbitrators and who appoints them (one by each party, from the Institute of Chartered Arbitrators of Nigeria)",
          "Seat of the arbitration: Lagos State",
          "Time for the award: six (6) months from appointment, unless the parties extend",
        ],
        verify: ["No 4 Ijana Avenue (street name)", "Ajayi Street"],
        blocks: [
          {
            t: "para",
            text: "In the event of any dispute arising between Riggs Nigeria Limited of No 2 Ajayi Street, Lagos, and Palmer Nigeria Plc of No 4 Ijana Avenue, Ikeja, Lagos, arising out of or in connection with this agreement, the parties shall first submit to arbitration.",
          },
          { t: "para", text: "The arbitration shall be governed by the Arbitration and Mediation Act, 2023." },
          { t: "para", text: "The language of the arbitration proceedings shall be the English language." },
          {
            t: "para",
            text: "Two arbitrators shall be appointed, one by each party from the Institute of Chartered Arbitrators of Nigeria.",
          },
          { t: "para", text: "The seat of the arbitration shall be Lagos State." },
          {
            t: "para",
            text: "The Arbitral award shall be delivered within six (6) months of the appointment of the two arbitrators unless the parties extend the time.",
          },
        ],
      },

      {
        id: "application-for-adjournment",
        title: "Application for Adjournment",
        red: true,
        category: "Letters",
        scenario:
          "You are Martin Ojo of Star Chambers & Co, counsel for the plaintiff in Leventis Motors Limited v John Agbua. The matter is listed for continuation of hearing on 17th May 2026 at the High Court, Maitama, Abuja, but you have another matter the same day at the Court of Appeal, Abuja. Write to the Registrar applying for an adjournment to 20th or 27th May 2026.",
        keyPoints: [
          "Letterhead, our ref / your ref, date, addressed to the Registrar of the court",
          "Heading with the application and the case title (RE: Leventis Motors Limited v John Agbua, suit number)",
          "States who writes (counsel for the plaintiff) and the date the matter is listed",
          "Gives the reason: a clashing matter before the Court of Appeal, Abuja, with the appeal number",
          "Proposes alternative dates, subject to the convenience of the court and other counsel",
          "Apologises for any inconvenience and asks that the letter be brought to His Lordship's attention",
          "Signed by a named legal practitioner for the firm",
        ],
        verify: [
          "17th May 2026 (looks like 2025 in the scan; also falls on a Sunday)",
          "Martin Ojo (signature name)",
          "Star Chambers' address differs from the Confirmation of Instructions letter",
        ],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "STAR CHAMBERS & CO",
              "No 2 Oniperesi, Agege, Lagos State",
              "starchambers@gmail.com",
              "www.starcham.com, Tel: 08021666622",
            ],
          },
          { t: "refs", date: "13th May, 2026" },
          { t: "address", lines: ["The Registrar,", "High Court,", "Maitama, Abuja."] },
          { t: "salutation", text: "Dear Sir," },
          {
            t: "heading",
            align: "left",
            lines: ["APPLICATION FOR ADJOURNMENT", "RE: LEVENTIS MOTORS LIMITED V JOHN AGBUA (SUIT NO. ________)"],
          },
          {
            t: "para",
            text: "We the Counsel for the plaintiff in the above mentioned suit which is listed for continuation of hearing on 17th May 2026 before this honourable court.",
          },
          {
            t: "para",
            text: "Unfortunately, we are unable to attend court on the said date as we have another matter listed for hearing on the same day before the Court of Appeal, Abuja Judicial Division, Appeal No ________.",
          },
          {
            t: "para",
            text: "We humbly apply that this matter be adjourned to any of the following dates, subject to the convenience of the court and of other counsel in the matter, 20/05/2026 or 27/05/2026.",
          },
          {
            t: "para",
            text: "We regret any inconvenience this application may cause His Lordship and other counsel in the matter.",
          },
          { t: "para", text: "Kindly bring this letter to the attention of His Lordship." },
          {
            t: "signoff",
            closing: "Yours Faithfully,",
            sign: true,
            lines: ["Martin Ojo Esq.", "Counsel for the Plaintiff", "For: Star Chambers & Co"],
          },
        ],
      },

      {
        id: "application-letter-for-employment",
        title: "Application Letter for Employment",
        red: true,
        category: "Letters",
        scenario:
          "You are Chidi Obinna Adeyanju, called to the Bar in 2001, principal partner of Adeyanju & Associates, Kaduna, with a Chartered Institute of Arbitrators (UK) certificate. The Nigerian Law School has invited lawyers to apply as part-time lecturers. Write the application to the Director-General, enclosing your CV.",
        keyPoints: [
          "Applicant's own address and date at the top right",
          "Addressed to the Director-General, Nigerian Law School, Bwari, Abuja",
          "Subject line states the post applied for: appointment as a part-time lecturer",
          "Refers to the invitation or advertisement being answered",
          "Summarises year of call, experience, current position and qualifications",
          "Says why the applicant is suitable and available",
          "Mentions the enclosures (CV and credentials)",
          "Closes with 'Yours faithfully', signature, name and 'Encl.'",
        ],
        verify: ["21st August, 2012 (day number)", "No 22 Ahmadu Bello Way"],
        blocks: [
          { t: "sender", lines: ["No 22 Ahmadu Bello Way,", "Kaduna, Kaduna State.", "21st August, 2012"] },
          { t: "address", lines: ["The Director-General,", "Nigerian Law School,", "Bwari, Abuja."] },
          { t: "salutation", text: "Dear Sir," },
          { t: "heading", align: "left", lines: ["APPLICATION FOR APPOINTMENT AS A PART-TIME LECTURER"] },
          {
            t: "para",
            text: "I refer to the recent call by the Nigerian Law School inviting interested lawyers to join her teaching team as part-time lecturers and hereby apply to be considered for appointment.",
          },
          {
            t: "para",
            text: "I was called to the Nigerian Bar in 2001 and have since been engaged in private legal practice with particular experience in commercial litigation, property law and Arbitration and Alternative Dispute Resolution. I am currently the principal partner of Adeyanju & Associates, Kaduna and hold a certificate in Arbitration and ADR from the Chartered Institute of Arbitrators (UK).",
          },
          {
            t: "para",
            text: "I am confident that my years of practical experience at the Bar will be of value to the law school's teaching team and I am available to commit the requisite time to the role alongside my practice.",
          },
          {
            t: "para",
            text: "Kindly find attached my Curriculum Vitae and copies of my relevant credentials for your kind consideration.",
          },
          { t: "para", text: "I hope for a favourable consideration of my application." },
          {
            t: "signoff",
            closing: "Yours faithfully,",
            sign: true,
            lines: ["Chidi Obinna Adeyanju Esq.", "Encl: Curriculum Vitae"],
          },
        ],
      },

      {
        id: "curriculum-vitae",
        title: "Curriculum Vitae",
        red: true,
        category: "Letters",
        scenario:
          "Prepare the Curriculum Vitae of Chidi Obinna Adeyanju (born 14 March 1975, Enugu; called to the Bar 2001) to accompany the application for appointment as a part-time lecturer. Use the thirteen standard headings in order.",
        keyPoints: [
          "Thirteen numbered headings in order: Personal Data to Referees",
          "Personal data covers names, date and place of birth, state, LGA, nationality, marital status and contact details",
          "Education is listed in reverse chronological order with dates",
          "Qualifications are listed with grade and year",
          "Work experience lists position, organisation, place and period",
          "Headings with nothing to report (Academic Achievements, Awards, Skills Acquired) are kept, not deleted",
          "Two referees with name, organisation, designation and contact details",
          "Signed and dated at the end",
        ],
        verify: [
          "Phone number 08033445566 and email cadeyanju@gmail.com",
          "Falana & Falana Chambers / Chief Bode Falana (scan reads 'Faland')",
          "Ajumogobia & Okeke",
          "Date 13th August 2026 conflicts with the 2012 covering letter",
        ],
        blocks: [
          { t: "heading", align: "center", underline: true, lines: ["CURRICULUM VITAE"] },

          { t: "section", n: 1, title: "PERSONAL DATA" },
          {
            t: "fields",
            rows: [
              ["Surname", "Adeyanju"],
              ["Other Names", "Chidi Obinna"],
              ["Date of Birth", "14th March 1975"],
              ["Place of Birth", "Enugu"],
              ["State of Origin", "Enugu State"],
              ["Local Government Area", "Enugu East"],
              ["Home Town", "Enugu"],
              ["Nationality", "Nigerian"],
              ["Sex", "Male"],
              ["Marital Status", "Married"],
              ["Contact Address", "No 22 Ahmadu Bello Way, Kaduna"],
              ["Tel/Email", "08033445566 / cadeyanju@gmail.com"],
            ],
          },

          { t: "section", n: 2, title: "EDUCATIONAL BACKGROUND" },
          { t: "line", text: "Schools Attended with Date" },
          {
            t: "spread",
            rows: [
              ["Nigerian Law School, Abuja", "2000 - 2001"],
              ["University of Lagos, Lagos", "1995 - 2000"],
              ["Federal Government College, Enugu", "1989 - 1995"],
              ["Community Primary School, Enugu", "1983 - 1989"],
            ],
          },

          { t: "section", n: 3, title: "EDUCATIONAL QUALIFICATIONS" },
          {
            t: "spread",
            rows: [
              ["Barrister-at-Law, BL (1st Class)", "2001"],
              ["Bachelor of Law, LLB (2nd Class Upper Division)", "2000"],
              ["Senior School Certificate Examination (SSCE)", "1995"],
              ["First School Leaving Certificate", "1989"],
            ],
          },

          { t: "section", n: 4, title: "ACADEMIC ACHIEVEMENTS" },
          { t: "spacer" },

          { t: "section", n: 5, title: "WORK EXPERIENCE" },
          {
            t: "spread",
            rows: [
              ["Principal Partner, Adeyanju & Associates, Kaduna", "2008 till date"],
              ["Senior Associate, Falana & Falana Chambers, Lagos", "2004 - 2008"],
              ["Associate, Ajumogobia & Okeke, Lagos", "2001 - 2004"],
            ],
          },

          { t: "section", n: 6, title: "AREA OF PRACTICE" },
          { t: "items", items: ["Commercial litigation, property law, arbitration and ADR"] },

          { t: "section", n: 7, title: "ADDITIONAL PROFESSIONAL QUALIFICATIONS" },
          {
            t: "spread",
            rows: [["Certificate in Arbitration and ADR, Chartered Institute of Arbitrators (UK)", "2010"]],
          },

          { t: "section", n: 8, title: "MEMBERSHIP OF PROFESSIONAL BODIES/ASSOCIATIONS" },
          { t: "items", items: ["Nigerian Bar Association (NBA)", "Chartered Institute of Arbitrators, Nigeria Branch"] },

          { t: "section", n: 9, title: "LEADERSHIP POSITION HELD" },
          { t: "items", items: ["Secretary, NBA Kaduna Branch (2015 - 2017)"] },

          { t: "section", n: 10, title: "AWARDS" },
          { t: "spacer" },

          { t: "section", n: 11, title: "SKILLS ACQUIRED" },
          { t: "spacer" },

          { t: "section", n: 12, title: "HOBBIES" },
          { t: "items", items: ["Reading, cycling and public speaking"] },

          { t: "section", n: 13, title: "REFEREES" },
          {
            t: "fields",
            label: "(i)",
            rows: [
              ["Name", "Prof J.O Oba"],
              ["Organization", "Faculty of Law, University of Lagos"],
              ["Designation", "Professor of Law"],
              ["Contact Details", "07069521869"],
            ],
          },
          {
            t: "fields",
            label: "(ii)",
            rows: [
              ["Name", "Chief Bode Falana"],
              ["Organization", "Falana & Falana Chambers, Lagos"],
              ["Designation", "Named Partner"],
              ["Contact Details", "Available on request"],
            ],
          },
          { t: "signoff", closing: "", sign: true, lines: ["13th August 2026"] },
        ],
      },

      {
        id: "letter-of-demand",
        title: "Letter of Demand",
        red: true,
        category: "Letters",
        scenario:
          "Mrs Ariyo Jonat lent Mr Bernard Williams (No 6 Ishola Street, Akure, Ondo State) N20,000,000 on 4th May 2026, repayable not later than 25th June 2026. He has defaulted. You are Albert Jones, solicitor at Omolasie & Co Chambers, Akure. Write the letter of demand giving seven working days.",
        keyPoints: [
          "Letterhead, our ref / your ref, date, addressee",
          "Heading states the purpose: Letter of Demand of Payment of Debt",
          "Identifies who the solicitor acts for and that the letter is on instructions",
          "States the facts: date of loan, sum, promised repayment date and the default",
          "'TAKE NOTICE' paragraph with the exact sum in figures and words and a clear deadline (7 working days from receipt)",
          "Warns of legal action if payment is not made",
          "Signed by a named solicitor for the firm",
        ],
        verify: ["No 8 Asikay Avenue (street name)", "No 6 Ishola Street (street name)", "Mrs Ariyo Jonat (client's name)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "OMOLASIE & CO CHAMBERS",
              "No 8 Asikay Avenue, Akure, Ondo State",
              "omolasieandcochambers@gmail.com",
              "www.omolasie.com, Tel: 08012266544",
            ],
          },
          { t: "refs", date: "20th July, 2026" },
          { t: "address", lines: ["Mr Bernard Williams,", "No 6 Ishola Street,", "Akure, Ondo State."] },
          { t: "salutation", text: "Dear Sir," },
          { t: "heading", align: "center", underline: true, lines: ["LETTER OF DEMAND OF PAYMENT OF DEBT"] },
          {
            t: "para",
            text: "We are solicitors to Mrs Ariyo Jonat (our client) on whose instruction we write you this letter.",
          },
          {
            t: "para",
            text: "We are informed by our client that on the 4th day of May, 2026, you borrowed from our client the sum of ₦20,000,000 (Twenty million naira) only and that you promised to repay our client not later than the 25th day of June, 2026, however you have defaulted in paying the said amount to our client.",
          },
          {
            t: "para",
            text: "TAKE NOTICE that you are required to pay our client the sum of ₦20,000,000 (Twenty million naira) only within seven (7) working days from the day of receipt of this letter. Failure to do this, we shall not hesitate to take appropriate legal action against you.",
          },
          {
            t: "signoff",
            closing: "Yours Faithfully,",
            sign: true,
            lines: ["Albert Jones Esq.", "Solicitor", "For: Omolasie & Co Chambers"],
          },
        ],
      },

      {
        id: "internal-memorandum-mock-trial",
        title: "Internal Memorandum",
        red: true,
        category: "Memoranda",
        scenario:
          "You are Musa Chukwudi Ela, supervisor of Criminal Mock Trial Group 1 at the Nigerian Law School, Abuja Campus. Write the internal memorandum to the Head of Academics, dated 19th August 2017, reporting on the group's activities in the 2016/2017 mock trials (rehearsals from 2 August, trial on 8-9 August, presided over by Hon. Justice V.B Ashi at the Multipurpose Hall).",
        keyPoints: [
          "Organisation's name and address at the top (Council of Legal Education, Nigerian Law School, Abuja Campus)",
          "Title: Internal Memorandum",
          "FROM, TO, DATE and SUBJECT lines, each on its own line",
          "Subject line is specific: a report on the activities of the group in the named period",
          "Body is short and factual: dates, how the group was divided, roles, attendance, attachment",
          "Names who presided and the venue",
          "Closes with 'Thank you', signature, name and designation",
        ],
        verify: ["Hon. Justice V.B Ashi (scan reads 'Adhi')", "Musa Chukwudi Ela (surname)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "COUNCIL OF LEGAL EDUCATION",
              "NIGERIAN LAW SCHOOL (Abuja Campus)",
              "Law School Road, Bwari, Abuja",
            ],
          },
          { t: "heading", align: "center", underline: true, lines: ["INTERNAL MEMORANDUM"] },
          {
            t: "memo",
            rows: [
              ["FROM", "Supervisor, Criminal Mock Trial Group 1"],
              ["TO", "Head of Academics, Nigerian Law School, Abuja Campus"],
              ["DATE", "19th August, 2017"],
              ["SUBJECT", "Report on the activities of Criminal Mock Trial Group 1 in the 2016/2017 mock trials"],
            ],
          },
          {
            t: "para",
            text: "The Mock Trials at the Abuja Campus of the Nigerian Law School held on the 8-9 August, 2017. Rehearsals for the group commenced on 2nd August 2017 using the scenario that had been provided. The group was divided equally into the prosecution and defense teams. The roles were assigned by the various sub-group leaders and all group members were diligent in performing the roles assigned to them. Attendance was mandatory. Attached is a copy of the attendance register.",
          },
          {
            t: "para",
            text: "The Mock Trial was presided over by Hon. Justice V.B Ashi of the High Court of the Federal Capital Territory and the venue was the Multipurpose Hall.",
          },
          { t: "line", text: "Thank you." },
          { t: "signoff", closing: "", sign: true, lines: ["Musa Chukwudi Ela", "Supervisor, Criminal Mock Trial, Group 1"] },
        ],
      },

      {
        id: "internal-memorandum-with-cc",
        title: "Internal Memorandum (with CC)",
        red: false,
        category: "Memoranda",
        note: "If an authority or a person of higher office tells you to tell another person, the draft sample is below containing a CC.",
        scenario:
          "You are Jubril Iman at Lafarge Africa Plc. The Managing Director has directed you to tell Stella Rahmah to create a Corporate Affairs Commission online account for the company. Write the memorandum to Stella, copying the Company Secretary, Abdulsalam Arafat, and show that you are writing for the Managing Director.",
        keyPoints: [
          "Company name and address at the top, then the heading Internal Memorandum",
          "FROM, TO, DATE and SUBJECT lines",
          "Says the writer 'has been directed to inform' the reader, showing the instruction comes from a higher authority",
          "Short, one-purpose body",
          "'CC:' line naming the other person who is copied, placed under the signature",
          "'For:' line naming the authority on whose behalf the memo is written (the Managing Director)",
        ],
        verify: ["55 Kudirat Abiola Way, Oregun, Ikeja", "Stella Rahmah and Abdulsalam Arafat (spellings)"],
        blocks: [
          {
            t: "letterhead",
            lines: ["LAFARGE AFRICA PLC", "55, Kudirat Abiola Way, Oregun, Ikeja, Lagos"],
          },
          { t: "heading", align: "center", underline: true, lines: ["INTERNAL MEMORANDUM"] },
          {
            t: "memo",
            rows: [
              ["FROM", "Jubril Iman"],
              ["TO", "Stella Rahmah"],
              ["DATE", "13th August, 2026"],
              ["SUBJECT", "Instruction to create a CAC account for the Company"],
            ],
          },
          {
            t: "para",
            text: "I have been directed to inform you that you are to create a Corporate Affairs Commission online account for the Company.",
          },
          { t: "line", text: "Thank you." },
          {
            t: "signoff",
            closing: "",
            sign: true,
            lines: ["Jubril Iman", "CC: Abdulsalam Arafat", "Company Secretary", "For: The Managing Director, Lafarge Africa Plc"],
          },
        ],
      },

      {
        id: "negotiation-letter",
        title: "Negotiation Letter / Letter of Settlement Terms",
        red: true,
        category: "Letters",
        scenario:
          "Mr Bernard Williams does not dispute the N20,000,000 debt claimed in the Letter of Demand dated 20th July 2026 but cannot pay it at once. You are Benson Kalu of Benson Kalu Law Firm, Abuja. Reply on his behalf proposing four equal monthly instalments of N5,000,000 from 1st August 2026.",
        keyPoints: [
          "Letterhead, refs, date and a 'RE:' line that matches the letter being answered",
          "Says whom the solicitor acts for",
          "Acknowledges receipt of the demand letter by its date and the sum demanded",
          "States the client's position (does not dispute the debt, cannot pay at once, and why)",
          "Makes a specific proposal: number of instalments, amount of each, start date",
          "Invites the other side's response and thanks them for their co-operation",
          "Signed by a named principal counsel for the firm",
        ],
        verify: ["No 15 Bwari Close, Kubwa (location)", "www.benson-info.com", "Benson Kalu Esq (signature name)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "BENSON KALU LAW FIRM",
              "Barristers and Solicitors of the Supreme Court of Nigeria",
              "No 15 Bwari Close, Kubwa, Abuja",
              "bensonkalu@gmail.com",
              "www.benson-info.com, Tel: 08100005544",
            ],
          },
          { t: "refs", date: "27th July, 2026" },
          { t: "salutation", text: "Dear Sir," },
          { t: "heading", align: "left", lines: ["RE: LETTER OF DEMAND OF PAYMENT OF DEBT"] },
          { t: "para", text: "The above subject matter refers." },
          { t: "para", text: "We are solicitors to Mr Bernard Williams on whose instructions we write." },
          {
            t: "para",
            text: "We acknowledge receipt of your letter dated 20th July 2026 demanding payment of the sum of ₦20,000,000 (Twenty million naira) only from our client.",
          },
          {
            t: "para",
            text: "Our client does not dispute his indebtedness to your client in the said sum. However, our client is currently unable to liquidate the entire sum at once owing to his lack of funds.",
          },
          {
            t: "para",
            text: "Our client therefore proposes to settle the outstanding debt by way of four (4) equal monthly instalments of ₦5,000,000 (Five million naira) only, commencing from the 1st day of August, 2026.",
          },
          {
            t: "para",
            text: "We shall be grateful if your client would kindly consider and accept this proposal and we await your response.",
          },
          { t: "para", text: "Thank you for your co-operation in this regard." },
          {
            t: "signoff",
            closing: "Yours faithfully,",
            sign: true,
            lines: ["Benson Kalu Esq.", "Principal Counsel", "For: Benson Kalu Law Firm"],
          },
        ],
      },

      {
        id: "confirmation-of-instructions",
        title: "Confirmation of Instructions",
        red: true,
        category: "Letters",
        scenario:
          "On 16th July 2026 Mr Badmus Stanley (No 10 Supra Street, Ikeja, Lagos) orally instructed Star Chambers & Co to (1) sue Sharon James Limited for N20,000,000 and (2) prepare a power of attorney authorising Mr Dele Ali to sell his house at No 5 Delapo Close, Ibadan for not less than N50,000,000. You are Adebowale Omolara, junior associate. Write to confirm the instructions in writing.",
        keyPoints: [
          "Letterhead, refs, date and the client's name and address",
          "Heading states the purpose of the letter (confirmation of instructions, and what it concerns)",
          "Refers to the date and mode (oral) of the original instructions",
          "Each instruction is set out in its own numbered paragraph",
          "Gives full details: sum, parties, company status (registered under Part B CAMA 2020), addresses and the price floor",
          "Asks the client to confirm that the letter reflects his instructions",
          "Signed by a named practitioner for the firm",
        ],
        verify: [
          "No 10 Supra Street (street name)",
          "No 15 Ijaye Avenue, Ikeja (street name)",
          "Adebowale Omolara (signature name)",
          "Star Chambers' address differs from the Application for Adjournment letter",
        ],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "STAR CHAMBERS & CO",
              "No 16 Olujimi Crescent, GRA, Ikeja, Lagos",
              "starchambers@gmail.com",
              "www.starchambers.com, Tel: 08021666622",
            ],
          },
          { t: "refs", date: "20th July, 2026" },
          { t: "address", lines: ["Mr Badmus Stanley,", "No 10 Supra Street,", "Ikeja, Lagos State."] },
          { t: "salutation", text: "Dear Sir," },
          {
            t: "heading",
            align: "left",
            lines: ["CONFIRMATION OF INSTRUCTIONS IN RESPECT OF RECOVERY OF DEBT AND PREPARATION OF A POWER OF ATTORNEY"],
          },
          {
            t: "para",
            text: "We write in furtherance to your oral instructions to us on the 16th of July, 2026 in respect of the above subject matter.",
          },
          { t: "para", text: "The said instructions are as follows:" },
          {
            t: "numbered",
            items: [
              "That we institute an action in court on your behalf for the recovery of the sum of ₦20,000,000 (Twenty million naira) only against Sharon James Limited, a company registered under Part B of the Companies and Allied Matters Act 2020 with its registered office and address at No 15 Ijaye Avenue, Ikeja, Lagos State.",
              "That we prepare on your behalf, a power of attorney authorising Mr Dele Ali, your business partner at No 12 Shitta Street, Lagos to sell your house situate at No 5 Delapo Close, Ibadan, at a sum not less than ₦50,000,000 (fifty million naira only).",
            ],
          },
          { t: "para", text: "Kindly confirm that the above reflects your instructions to us." },
          { t: "para", text: "We anticipate your prompt response, please." },
          { t: "line", text: "Thank you." },
          {
            t: "signoff",
            closing: "Yours Faithfully,",
            sign: true,
            lines: ["Adebowale Omolara Esq.", "Junior Associate", "For: Star Chambers & Co"],
          },
        ],
      },
    ],
  },
  "civil-litigation": { courseName: "Civil Litigation", drafts: [] },
  "criminal-litigation": {
    courseName: "Criminal Litigation",
    drafts: [
      {
        id: "charge-magistrate-court-north",
        title: "Charge — Magistrate Court in the North",
        red: false,
        category: "Charges",
        scenario:
          "Aminu Bashir is to be charged before the Magistrate Court of Kaduna State, Zaria Magisterial District, for stealing a gold wristwatch from Umar Kano at the Zaria trade fair on 19th June 2025, punishable under section 85 of the Penal Code of Kaduna State. Draft the charge, drawn up by Shehu Sambo, Magistrate Grade 1, dated 25th June 2026.",
        note: "In the Magistrate Court in the North, we are drafting a First Information Report (FIR), which has three paragraphs: (1) Introductory paragraph, (2) Body, (3) Directive paragraph. If there is more than one defendant, the opening line becomes 'I, [name] of [designation] hereby charge you: 1. ... 2. ... with the following offences'.",
        keyPoints: [
          "Court heading: court, magisterial district and 'Holden at' town, centred, with the Charge No. at the top right",
          "BETWEEN the Commissioner of Police as Complainant AND the defendant's full name as Defendant",
          "Introductory paragraph: 'I, [name] of the Magistrate grade [x] hereby charge you [defendant] as follows'",
          "Each offence is set out as its own numbered 'CHARGE' (or 'COUNT') paragraph",
          "Body states: the defendant's name, the date ('on or about'), the place (including the magisterial district), the act, and that it constitutes the named offence",
          "Cites the exact section and law creating the offence",
          "Directive paragraph: 'And I hereby direct that you be charged before this court on the said charge(s)'",
          "Dated, and signed by the magistrate with their designation",
        ],
        verify: ["Shehu Sambo (magistrate's name)", "Umar Kano (victim's name)", "Section 85 Penal Code of Kaduna State"],
        blocks: [
          {
            t: "courtheading",
            chargeNo: "",
            lines: [
              "IN THE MAGISTRATE COURT OF KADUNA STATE",
              "IN THE ZARIA MAGISTERIAL DISTRICT",
              "HOLDEN AT ZARIA",
            ],
          },
          {
            t: "parties",
            rows: [
              ["COMMISSIONER OF POLICE", "COMPLAINANT"],
              ["AMINU BASHIR", "DEFENDANT"],
            ],
          },
          {
            t: "para",
            text: "I, SHEHU SAMBO of the Magistrate Grade 1 hereby charge you, Aminu Bashir, as follows, with the following offence:",
          },
          { t: "heading", align: "left", lines: ["CHARGE ONE"] },
          {
            t: "para",
            text: "That you, Aminu Bashir, on or about 19th June, 2025 at the Zaria trade fair in the Zaria Magisterial District, stole a golden wristwatch from Umar Kano and thereby committed the offence of stealing, punishable under section 85 of the Penal Code of Kaduna State.",
          },
          { t: "para", text: "And I hereby direct that you be charged before this court on the said charge." },
          { t: "line", align: "center", text: "Dated this 25th day of June, 2026" },
          {
            t: "signoff",
            align: "right",
            closing: "",
            sign: true,
            lines: ["Shehu Sambo", "Magistrate Grade 1"],
          },
        ],
      },

      {
        id: "charge-magistrate-court-south",
        title: "Charge — Magistrate Court in the South",
        red: false,
        category: "Charges",
        scenario:
          "Yasmeen Suleiman is to be charged before the Magistrate Court of Ekiti State, Ado-Ekiti Magisterial District, for setting fire to a building at 10 Crown Estate, Ado-Ekiti, belonging to Asiwaju Idris, on 19th July 2025, an offence of arson. The charge is drawn up by Brimo Yusuf, Investigating Police Officer, dated 25th June 2026.",
        note: "The acronym DDPOPS is for a one-paragraph drafting (a Charge) and a three-paragraph drafting (an FIR): Defendant; Date the offence was committed; Place the offence was committed, including the magisterial district or judicial division; Offence committed, described using the section that provides it; Person against whom the offence was committed, stating their legal term after the person; Section stating the punishment of the offence. It is a one-paragraph drafting in the South because it is a Charge, not an FIR.",
        keyPoints: [
          "Court heading: court, magisterial district and 'Holden at' town, centred, with the Charge No. at the top right",
          "BETWEEN the Commissioner of Police as Complainant AND the defendant's full name as Defendant",
          "Heading 'COUNT ONE' (not 'CHARGE ONE' as in the North)",
          "DDPOPS in one paragraph: Defendant, Date, Place (with the magisterial district), Offence (with the section), Person against whom it was committed, Section stating the punishment",
          "'That you, [defendant], on [date] at [place], in the [x] Magisterial District, [act], belonging to [person], and thereby committing the offence of [offence], punishable under section [x] of [law]'",
          "Dated, and signed by the drafter with their designation",
        ],
        verify: ["Brimo Yusuf (IPO's name)", "Asiwaju Idris (owner's name)", "Section left blank in the scan — confirm the Arson section and the Criminal Code/Law of Ekiti State"],
        blocks: [
          {
            t: "courtheading",
            chargeNo: "",
            lines: [
              "IN THE MAGISTRATE COURT OF EKITI STATE",
              "IN THE ADO-EKITI MAGISTERIAL DISTRICT",
              "HOLDEN AT ADO-EKITI",
            ],
          },
          {
            t: "parties",
            rows: [
              ["COMMISSIONER OF POLICE", "COMPLAINANT"],
              ["YASMEEN SULEIMAN", "DEFENDANT"],
            ],
          },
          { t: "heading", align: "left", lines: ["COUNT ONE"] },
          {
            t: "para",
            text: "That you, Yasmeen Suleiman, on the 19th July, 2025 at 10 Crown Estate, Ado-Ekiti, Ekiti State, in the Ado-Ekiti Magisterial District, set fire to the building at 10 Crown Estate, Ado-Ekiti, Ekiti State, belonging to Asiwaju Idris, and thereby committing the offence of arson, punishable under section ____ of ____ Law.",
          },
          { t: "line", align: "center", text: "Dated this 25th day of June, 2026" },
          {
            t: "signoff",
            align: "right",
            closing: "",
            sign: true,
            lines: ["Brimo Yusuf", "Investigating Police Officer"],
          },
        ],
      },

      {
        id: "charge-federal-high-court",
        title: "Charge — Federal High Court",
        red: false,
        category: "Charges",
        scenario:
          "Tobe Stone is to be charged before the Federal High Court of Nigeria, Lagos Judicial Division, on a two-count charge brought on behalf of the Federal Republic of Nigeria, drawn up by Olori Owoeze, Senior State Counsel for the Attorney-General of the Federation, dated 26th June 2026.",
        note: "We are drafting a charge. The format of the Magistrate Court in the South is the same as the Federal High Court. If you are given the name of the person drafting the charge in the scenario, use it, together with the office or capacity stated in the scenario.",
        keyPoints: [
          "Court heading: 'IN THE FEDERAL HIGH COURT OF NIGERIA', the judicial division and 'Holden at' town, centred, with the Charge No. at the top right",
          "BETWEEN the Federal Republic of Nigeria as Complainant AND the defendant's full name as Defendant",
          "Same one-paragraph DDPOPS format per count as the South, headed 'COUNT ONE', 'COUNT TWO', etc.",
          "Dated",
          "Signed using the exact name and designation given in the scenario (e.g. Senior State Counsel, 'For: Attorney-General of the Federation')",
        ],
        verify: ["Olori Owoeze (signatory's name)", "Counts One and Two are blank templates in the scan — fill with the facts given in any scenario"],
        blocks: [
          {
            t: "courtheading",
            chargeNo: "",
            lines: [
              "IN THE FEDERAL HIGH COURT OF NIGERIA",
              "IN THE LAGOS JUDICIAL DIVISION",
              "HOLDEN AT LAGOS",
            ],
          },
          {
            t: "parties",
            rows: [
              ["FEDERAL REPUBLIC OF NIGERIA", "COMPLAINANT"],
              ["TOBE STONE", "DEFENDANT"],
            ],
          },
          { t: "heading", align: "left", lines: ["COUNT ONE"] },
          { t: "para", text: "That you, Tobe Stone, on [date] at [place], in the Lagos Judicial Division, [act], and thereby committing the offence of [offence], punishable under section ____ of ____." },
          { t: "heading", align: "left", lines: ["COUNT TWO"] },
          { t: "para", text: "That you, Tobe Stone, on [date] at [place], in the Lagos Judicial Division, [act], and thereby committing the offence of [offence], punishable under section ____ of ____." },
          { t: "line", align: "center", text: "Dated this 26th day of June, 2026" },
          {
            t: "signoff",
            align: "right",
            closing: "",
            sign: true,
            lines: ["Olori Owoeze", "Senior State Counsel", "For: Attorney-General of the Federation"],
          },
        ],
      },

      {
        id: "charge-magistrate-court-fct",
        title: "Charge — Magistrate Court in the FCT",
        red: false,
        category: "Charges",
        scenario:
          "Shittu Rahmah is to be charged before the Magistrate Court of the Federal Capital Territory, FCT Magisterial District, Holden at Abuja, the charge drawn up by Shehu Yusuf.",
        note: "We are drafting a First Information Report (FIR). The format of the Magistrate Court in the North is the same as the FCT; the only difference is the use of 'COUNT' instead of 'CHARGE'.",
        keyPoints: [
          "Court heading: 'IN THE MAGISTRATE COURT OF THE FEDERAL CAPITAL TERRITORY, ABUJA', the FCT Magisterial District and 'Holden at Abuja', centred, with the Charge No. at the top right",
          "BETWEEN the Commissioner of Police as Complainant AND the defendant's full name as Defendant",
          "Three-paragraph FIR structure, same as the North: introductory paragraph, body, directive paragraph",
          "Introductory paragraph: 'I, [name] of [designation]...'",
          "Each offence headed 'COUNT ONE', 'COUNT TWO' etc. (not 'CHARGE' as in the North)",
          "Body states the defendant's name, date, place (with the magisterial district), act, offence and section",
        ],
        verify: ["Shehu Yusuf (drafter's name/designation — cut off in the scan)", "This page is an incomplete template in the scan; fill Count One with the facts given in any scenario"],
        blocks: [
          {
            t: "courtheading",
            chargeNo: "",
            lines: [
              "IN THE MAGISTRATE COURT OF THE FEDERAL CAPITAL TERRITORY ABUJA",
              "IN THE FEDERAL CAPITAL TERRITORY MAGISTERIAL DISTRICT",
              "HOLDEN AT ABUJA",
            ],
          },
          {
            t: "parties",
            rows: [
              ["COMMISSIONER OF POLICE", "COMPLAINANT"],
              ["SHITTU RAHMAH", "DEFENDANT"],
            ],
          },
          { t: "para", text: "I, Shehu Yusuf of ____" },
          { t: "heading", align: "left", lines: ["COUNT ONE"] },
          { t: "para", text: "That you, Shittu Rahmah, on [date] at [place], in the Federal Capital Territory Magisterial District, [act], and thereby committing the offence of [offence], punishable under section ____ of ____." },
        ],
      },
    ],
  },
  "corporate-law-practice": {
    courseName: "Corporate Law Practice",
    drafts: [
      {
        id: "application-for-registration-of-a-company",
        title: "Application for Registration of a Company",
        red: true,
        category: "Letters",
        scenario:
          "Adeyemi & Partners act for the promoters of Greenfield Agro Limited. The name was approved and reserved by the CAC on 28th September 2026. The company will carry on crop farming and the processing and sale of agricultural produce, registered office at 23 Adeola Odeku Street, Victoria Island, Lagos, share capital N1,000,000 divided into 1,000,000 ordinary shares of N1 each, taken up by Mr Tunde Bakare (600,000 shares) and Mrs Ngozi Eze (400,000 shares), who will also be the first directors; Mrs Amina Yusuf will be company secretary. Write to the Registrar-General applying for registration, pursuant to section 36 CAMA 2020, dated 6th October 2026.",
        keyPoints: [
          "Letterhead, refs, date, addressed to the Registrar-General, Corporate Affairs Commission",
          "Heading states the application and cites the applicable section (s.36 CAMA 2020 as amended)",
          "Identifies who the solicitors act for and that they are instructed to apply",
          "States the company's type (private company limited by shares), approved/reserved name and date of reservation",
          "States the business, registered office, share capital, subscribers and their shareholdings, first directors and company secretary",
          "Lists all the documents forwarded with the letter, numbered",
          "Asks the Commission to register the company and issue its certificate of incorporation",
          "Signed by a named solicitor for the firm",
        ],
        verify: ["Samson Adeyemi (signatory's name)", "28th September 2026 (name reservation date)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "ADEYEMI & PARTNERS",
              "BARRISTERS AND SOLICITORS",
              "14, Broad Street, Lagos Island, Lagos State",
              "08033445566, info@adeyemipartners.com",
            ],
          },
          { t: "refs", date: "6th October, 2026" },
          {
            t: "address",
            lines: ["The Registrar-General,", "Corporate Affairs Commission,", "Plot 256, Maitama,", "Abuja."],
          },
          { t: "salutation", text: "Dear Sir," },
          {
            t: "heading",
            align: "left",
            lines: [
              "APPLICATION FOR THE REGISTRATION OF GREENFIELD AGRO LIMITED",
              "PURSUANT TO SECTION 36 OF THE COMPANIES AND ALLIED MATTERS ACT 2020 AS AMENDED",
            ],
          },
          {
            t: "para",
            text: "We are solicitors to the promoters of the above-named company and we are instructed to apply for its registration as a private company limited by shares.",
          },
          {
            t: "para",
            text: "The name Greenfield Agro Limited was approved and reserved by the Commission on 28th September, 2026 following an availability check. The company will carry on business of crop farming and the processing and sale of agricultural produce. Its registered office will be at 23 Adeola Odeku Street, Victoria Island, Lagos, and its share capital will be N1,000,000 divided into 1,000,000 ordinary shares of N1 each, all of which will be taken up by the two subscribers to the memorandum, Mr Tunde Bakare (600,000 shares) and Mrs Ngozi Eze (400,000 shares). The subscribers will also be the first directors, and Mrs Amina Yusuf will be the company secretary.",
          },
          {
            t: "para",
            text: "The following documents which are required for the registration of the company are forwarded together with this letter:",
          },
          {
            t: "numbered",
            items: [
              "Form CAC 1 — Availability Check and Reservation of Name.",
              "Form CAC 1.1 — Application for Registration of the Company.",
              "Memorandum of Association, duly signed by the subscribers.",
              "Articles of Association, duly signed by the subscribers.",
              "Statement of issued share capital and shareholdings.",
              "Statement of the company's proposed directors and particulars of the proposed secretary.",
              "Statement of the company's proposed registered office.",
              "Statement of compliance under section 40 of CAMA, that the requirements of the Act as to registration have been complied with.",
              "Means of identification of every director, subscriber and the secretary, and their electronic signatures.",
              "Evidence of payment of stamp duties and filing fees.",
            ],
          },
          { t: "para", text: "We shall be grateful if the Commission would register the company and issue its certificate of incorporation." },
          { t: "line", text: "Thank You." },
          {
            t: "signoff",
            closing: "Yours Faithfully,",
            sign: true,
            lines: ["Samson Adeyemi Esq.", "For: Adeyemi & Partners."],
          },
        ],
      },

      {
        id: "application-for-re-registration-public-to-private",
        title: "Application for Re-registration (Public — Private)",
        red: true,
        category: "Letters",
        scenario:
          "Pinacle Logistics Plc (RC No. 998321) no longer requires funds from the public and wants to avoid the cost of public-company regulation; its members also wish to restrict share transfers. A special resolution authorising re-registration as a private company was passed on 1st September 2026; 28 days have elapsed with no application to the Federal High Court for its cancellation. The company secretary, Mr Chidi Okonkwo, applies for consent to re-register as Pinacle Logistics Limited pursuant to section 63 CAMA 2020, dated 6th October 2026.",
        keyPoints: [
          "Letterhead (with the company's own RC number), refs, date, addressed to the Registrar-General",
          "Heading states the application and cites the applicable section (s.63 CAMA 2020 as amended)",
          "States who is applying and in what capacity, and on whose direction (the Board of Directors)",
          "Names the new private name and confirms a special resolution was duly passed, with its date",
          "Confirms 28 days have elapsed with no application made to the Federal High Court for cancellation, and that this application is made within 15 days of the expiration of that period",
          "States the circumstances that make the re-registration desirable (no longer needs public funds; wants to restrict share transfers)",
          "Lists all enclosed documents, numbered",
          "Signed by the company secretary",
        ],
        verify: ["Mr Chidi Okonkwo (company secretary's name)", "RC No: 998321"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "PINACLE LOGISTICS PLC",
              "No 7, Ahmadu Bello Way, Garki, Abuja",
              "08099887766, info@pinaclelogistics.com",
              "RC No: 998321",
            ],
          },
          { t: "refs", date: "6th October, 2026" },
          {
            t: "address",
            lines: ["The Registrar-General,", "Corporate Affairs Commission,", "Plot 256, Maitama,", "Abuja."],
          },
          { t: "salutation", text: "Dear Sir," },
          {
            t: "heading",
            align: "left",
            lines: [
              "APPLICATION FOR CONSENT TO RE-REGISTER PINACLE LOGISTICS PLC AS A PRIVATE COMPANY",
              "PURSUANT TO SECTION 63 OF THE COMPANIES AND ALLIED MATTERS ACT 2020 AS AMENDED",
            ],
          },
          {
            t: "para",
            text: "I am directed by the Board of Directors of the above-named company to apply for the approval of the Commission to re-register the company as a private company limited by shares under the name Pinacle Logistics Limited.",
          },
          {
            t: "para",
            text: "Please find enclosed all the documents legally necessary to effect the re-registration, including a special resolution duly passed on the 1st day of September 2026 to authorise it. 28 days have elapsed and no application was made to the Federal High Court for its cancellation. This application is made within fifteen days of the expiration of that period.",
          },
          { t: "para", text: "The circumstances which make the re-registration desirable are as follows:" },
          {
            t: "numbered",
            items: [
              "The company no longer requires funds from the public and it has no wish to continue to bear the cost of the regulatory requirements that apply to a public company.",
              "The members wish to restrict the transfer of the company's shares to persons approved by them.",
            ],
          },
          { t: "para", text: "Thank You. I await your kind response." },
          { t: "line", text: "Yours Faithfully," },
          {
            t: "signoff",
            closing: "",
            sign: true,
            lines: ["Mr Chidi Okonkwo", "Company Secretary"],
          },
          { t: "line", text: "Enclosed:" },
          {
            t: "numbered",
            items: [
              "Copy of Special Resolution, dated 1st September 2026.",
              "Memorandum and Articles of Association, as altered and stamped to reflect the status of a private company.",
              "Statement of Compliance, signed by the directors.",
              "Original Certificate of Incorporation, for cancellation.",
              "Evidence of filing of annual returns up to date.",
              "Receipts of payment of prescribed fees.",
              "Form CAC 4 — Application for re-registration.",
            ],
          },
        ],
      },

      {
        id: "application-for-re-registration-private-to-public",
        title: "Application for Re-registration (Private — Public)",
        red: true,
        category: "Letters",
        scenario:
          "Sunrise Foods Nigeria Limited (RC No. 1107542) wants to raise additional capital from the public and enhance its standing with financial institutions and trade partners. It has never been re-registered as an unlimited company; its allotted share capital of N10,000,000 is above the statutory minimum and has been paid up in full; its balance sheet was prepared not more than seven months before this application. A special resolution authorising re-registration as a public company was passed on 28th September 2026. The company secretary, Mrs Folake Abati, applies for consent to re-register as Sunrise Foods Nigeria Plc pursuant to section 56 CAMA 2020, dated 6th October 2026.",
        keyPoints: [
          "Letterhead (with the company's own RC number), refs, date, addressed to the Registrar-General",
          "Heading states the application and cites the applicable section (s.56 CAMA 2020 as amended)",
          "States who is applying and in what capacity, and on whose direction (the Board of Directors)",
          "Names the new public name and confirms a special resolution was duly passed, with its date",
          "Confirms the company has never been re-registered as an unlimited company, that its allotted share capital is above the statutory minimum and paid up in full, and that the balance sheet was prepared not more than seven months before the application",
          "States the circumstances that make the re-registration desirable (raising additional public capital; enhancing standing with financial institutions and trade partners)",
          "Lists all enclosed documents, numbered, including the auditors' unqualified report on the balance sheet",
          "Signed by the company secretary",
        ],
        verify: ["Mrs Folake Abati (company secretary's name)", "RC No: 1107542"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "SUNRISE FOODS NIGERIA LIMITED",
              "No 12 Allen Avenue, Ikeja, Lagos State",
              "08055667788, info@sunrisefoods.com",
              "RC No: 1107542",
            ],
          },
          { t: "refs", date: "6th October, 2026" },
          {
            t: "address",
            lines: ["The Registrar-General,", "Corporate Affairs Commission,", "Plot 256, Maitama,", "Abuja."],
          },
          { t: "salutation", text: "Dear Sir," },
          {
            t: "heading",
            align: "left",
            lines: [
              "APPLICATION FOR CONSENT TO RE-REGISTER SUNRISE FOODS NIGERIA LIMITED AS A PUBLIC COMPANY",
              "PURSUANT TO SECTION 56 OF THE COMPANIES AND ALLIED MATTERS ACT 2020 AS AMENDED",
            ],
          },
          {
            t: "para",
            text: "I am directed by the Board of Directors of the above-named company to apply for the approval of the Commission to re-register the company as a public company limited by shares under the name Sunrise Foods Nigeria Plc.",
          },
          {
            t: "para",
            text: "Please find enclosed all the documents legally necessary to effect the re-registration, including a special resolution duly passed on the 28th day of September, 2026 to authorise it. The company has never been re-registered as an unlimited company and its allotted share capital of N10,000,000 is above the minimum required and has been paid up in full. The balance sheet enclosed was prepared not more than seven months before the date of this application.",
          },
          { t: "para", text: "The circumstances which make the re-registration desirable are as follows:" },
          {
            t: "numbered",
            items: [
              "To enable the company to raise additional capital by inviting the public to subscribe for its shares.",
              "To enhance the standing of the company in its dealings with financial institutions and trade partners.",
            ],
          },
          { t: "para", text: "Thank You. I await your kind response." },
          { t: "line", text: "Yours Faithfully," },
          {
            t: "signoff",
            closing: "",
            sign: true,
            lines: ["Mrs Folake Abati", "Company Secretary"],
          },
          { t: "line", text: "Enclosed:" },
          {
            t: "numbered",
            items: [
              "Form CAC 4 — Application for re-registration.",
              "Statement of the company's proposed name on re-registration (Sunrise Foods Nigeria Plc).",
              "Copy of Special Resolution, dated 28th September 2026.",
              "Memorandum and Articles, as altered and stamped.",
              "Copy of the balance sheet made not more than 7 months before this application.",
              "Unqualified report of the auditors on the balance sheet, with their written statement that the net assets are not less than the called-up share capital and undistributable reserves.",
              "Statement of compliance with the relevant provisions of the Act.",
              "Original Certificate of Incorporation, for cancellation.",
              "Evidence of filing of annual returns up to date.",
              "Receipts of payment of prescribed fees.",
            ],
          },
        ],
      },

      {
        id: "application-to-conduct-corporate-search",
        title: "Application to Conduct Corporate Search",
        red: true,
        category: "Letters",
        scenario:
          "Adeyemi & Partners act as external solicitors to Zenith Bank Plc, which intends to open and operate an account for Beach Seats Limited. Write to the Registrar-General seeking permission to conduct a corporate search on Beach Seats Limited, which claims to be a Nigerian company registered under CAMA 2020, dated 6th October 2026, enclosing evidence of payment of search fees, fees for certified true copies, and evidence of annual returns filed.",
        keyPoints: [
          "Letterhead, refs, date, addressed to the Registrar-General",
          "Heading states the application and names the company to be searched",
          "States whom the firm acts for and the client's purpose (to open and operate an account)",
          "States the company's claim (a Nigerian company registered under CAMA 2020) and seeks permission to search it",
          "Mentions what is attached in support (evidence of payment of search fees, certified true copy fees, evidence of annual returns filed)",
          "Signed by a named solicitor for the firm, with the enclosures listed",
        ],
        verify: ["Enclosure 3 is cut off in the scan as 'updated annual returns' — confirm the exact wording"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "ADEYEMI & PARTNERS",
              "BARRISTERS AND SOLICITORS",
              "14 Broad Street, Lagos Island, Lagos State",
              "08033445566, info@adeyemipartners.com",
            ],
          },
          { t: "refs", date: "6th October, 2026" },
          {
            t: "address",
            lines: ["The Registrar-General,", "Corporate Affairs Commission,", "Plot 256, Maitama,", "Abuja."],
          },
          { t: "salutation", text: "Dear Sir," },
          { t: "heading", align: "left", lines: ["APPLICATION TO CONDUCT CORPORATE SEARCH ON BEACH SEATS LIMITED"] },
          {
            t: "para",
            text: "We are the external solicitors to Zenith Bank Plc, which intends to open and operate an account for Beach Seats Limited.",
          },
          {
            t: "para",
            text: "Thus, we kindly seek your permission to conduct a corporate search on Beach Seats Limited, which claims to be a Nigerian company registered under the Companies and Allied Matters Act 2020, as amended.",
          },
          {
            t: "para",
            text: "Please find attached evidence of payment of search fees, fees for certified true copies, and evidence of annual returns filed.",
          },
          { t: "para", text: "Thank You," },
          { t: "line", text: "Yours Faithfully" },
          {
            t: "signoff",
            closing: "",
            sign: true,
            lines: ["Samson Adeyemi Esq.", "For: Adeyemi & Partners"],
          },
          { t: "line", text: "Enclosed:" },
          {
            t: "numbered",
            items: [
              "Receipt of Search Fees.",
              "Receipt of Certified True Copies Fees.",
              "Updated annual returns.",
            ],
          },
        ],
      },

      {
        id: "corporate-search-report-covering-letter",
        title: "Corporate Search Report (Covering Letter)",
        red: true,
        category: "Letters",
        note: "There are two ways of drafting a corporate search report: draft a covering letter and attach the search report to it, or put the search report in the covering letter. The first is the preferred approach. When replying to a letter with a letter, the replying letter will have 'RE:'.",
        scenario:
          "Femi Kolawole & Co were instructed by Zenith Bank Plc on 10th September 2025 to conduct a corporate search on Beach Seats Limited. Write a covering letter to Mr Jumah Jude, the Company Secretary of Zenith Bank Plc, reporting that the search has been carried out and attaching the search report, dated 3rd October 2026.",
        keyPoints: [
          "Letterhead, refs, date, addressed to the named client officer and company",
          "Heading uses 'RE:' because it replies to prior instructions, and names the company searched",
          "States the instruction being responded to (date and subject matter)",
          "Confirms the search has been carried out and that the report is attached",
          "Signed by a named partner for the firm, with the search report listed as an enclosure",
          "The attached search report itself follows directly underneath, on the same page, as the preferred approach",
          "The report has eighteen numbered fields covering the company's name, previous name, address, date and place of search, RC number, date of incorporation, status/type, liability of members, particulars of directors, business/object, issued share capital, charges, particulars of company secretary, encumbrances, pending litigation, annual returns, and a closing comment",
          "Encumbrances: fill in the debts or mortgages owed by the searched company; where there are none, write 'Not Encumbered' rather than leaving the field blank",
        ],
        verify: ["Mr Jumah Jude (addressee's name)", "Femi Kolawole (signatory's name)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "FEMI KOLAWOLE & CO",
              "75, Oyoleke Street, Panseke, Lagos",
              "07066554433, fk@gmail.com, www.fkandco.com",
            ],
          },
          { t: "refs", date: "3rd October, 2026" },
          {
            t: "address",
            lines: ["Mr Jumah Jude,", "The Company Secretary,", "Zenith Bank Plc,", "11, Oyemike Street,", "Lagos State."],
          },
          { t: "salutation", text: "Dear Sir" },
          { t: "heading", align: "left", lines: ["RE: CORPORATE SEARCH REPORT ON BEACH SEATS LIMITED"] },
          {
            t: "para",
            text: "Sequel to your instruction on 10th September 2025 on the above subject matter, we are glad to inform you that a corporate search has been carried out on Beach Seats Limited and attached to this letter is the search report.",
          },
          { t: "para", text: "Thank You," },
          { t: "line", text: "Yours Faithfully" },
          {
            t: "signoff",
            closing: "",
            sign: true,
            lines: ["Femi Kolawole", "Managing Partner"],
          },
          { t: "line", text: "Enclosed:" },
          { t: "numbered", items: ["A copy of the search report."] },
          { t: "pageBreak", label: "Attached: Search Report" },
          { t: "heading", align: "center", underline: true, lines: ["CORPORATE SEARCH REPORT ON BEACH SEATS LIMITED"] },
          {
            t: "fields",
            rows: [
              ["1. Name of Company", "Beach Seats Limited"],
              ["2. Previous name of Company", "None"],
              ["3. Company's address", "39, Okoya Street, Lekki, Lagos"],
              ["4. Date of search", "21st October 2026"],
              ["5. Place of search", "Corporate Affairs Commission"],
              ["6. Registered Certificate number of the company", "RC No: 110725"],
              ["7. Date of Incorporation", "18th March 2000"],
              ["8. Status/type of Company", "Private Company"],
              ["9. Liability of members", "Limited by shares"],
              ["10. Particulars of directors (name & address)", "________"],
              [
                "11. Business/object of the Company",
                "Manufacturing and distribution of beach chairs, seats and furnitures",
              ],
              ["12. Issued share capital", "N1,000,000 divided into 500,000 ordinary shares of N2 each"],
              ["13. Charges", "None"],
              ["14. Particulars of Company Secretary", "Mrs Okon Abah of No 9 Simon Peters Street, Ikate, Lagos"],
              ["15. Encumbrances", "Not Encumbered"],
              ["16. Pending Litigation", "None"],
              ["17. Annual returns", "The annual returns of Beach Seats Limited is up to date"],
              [
                "18. Comment",
                "Zenith Bank can go ahead with banking with Beach Seats Limited, the company is in good position.",
              ],
            ],
          },
          { t: "line", align: "center", text: "Dated this 6th day of October 2026" },
          { t: "line", text: "Yours Faithfully." },
          {
            t: "signoff",
            closing: "",
            sign: true,
            lines: ["Femi Kolawole Esq."],
          },
        ],
      },

      {
        id: "corporate-search-report",
        title: "Corporate Search Report",
        red: false,
        category: "Reports",
        scenario:
          "Prepare the corporate search report on Beach Seats Limited (RC No. 110725), incorporated 18th March 2000, a private company limited by shares, carrying on manufacturing and distribution of beach chairs, seats and furniture, issued share capital N1,000,000 divided into 500,000 ordinary shares of N2 each, registered office at 39 Okoya Street, Lekki, Lagos, company secretary Mrs Okon Abah of 9 Simon Peters Street, Ikate, Lagos, no charges, no pending litigation, annual returns up to date. The search was conducted on 21st October 2026 at the Corporate Affairs Commission. Dated 6th October 2026, signed by Femi Kolawole Esq.",
        keyPoints: [
          "Centred heading naming the company searched",
          "Eighteen numbered fields covering: name, previous name, address, date and place of search, RC number, date of incorporation, status/type, liability of members, particulars of directors, business/object, issued share capital, charges, particulars of company secretary, encumbrances, pending litigation, annual returns, and a closing comment",
          "Where there are no debts, mortgages or charges, state 'Not Encumbered' rather than leaving it blank",
          "Closing comment gives a clear recommendation to the client (e.g. whether it is safe to proceed)",
          "Dated and signed by the person who conducted the search",
        ],
        verify: ["RC No: 110725", "Particulars of directors (field 10) are blank in the scan — confirm the names/addresses to use"],
        blocks: [
          { t: "heading", align: "center", underline: true, lines: ["CORPORATE SEARCH REPORT ON BEACH SEATS LIMITED"] },
          {
            t: "fields",
            rows: [
              ["1. Name of Company", "Beach Seats Limited"],
              ["2. Previous name of Company", "None"],
              ["3. Company's address", "39, Okoya Street, Lekki, Lagos"],
              ["4. Date of search", "21st October 2026"],
              ["5. Place of search", "Corporate Affairs Commission"],
              ["6. Registered Certificate number of the company", "RC No: 110725"],
              ["7. Date of Incorporation", "18th March 2000"],
              ["8. Status/type of Company", "Private Company"],
              ["9. Liability of members", "Limited by shares"],
              ["10. Particulars of directors (name & address)", "________"],
              [
                "11. Business/object of the Company",
                "Manufacturing and distribution of beach chairs, seats and furnitures",
              ],
              ["12. Issued share capital", "N1,000,000 divided into 500,000 ordinary shares of N2 each"],
              ["13. Charges", "None"],
              ["14. Particulars of Company Secretary", "Mrs Okon Abah of No 9 Simon Peters Street, Ikate, Lagos"],
              ["15. Encumbrances", "Not Encumbered"],
              ["16. Pending Litigation", "None"],
              ["17. Annual returns", "The annual returns of Beach Seats Limited is up to date"],
              [
                "18. Comment",
                "Zenith Bank can go ahead with banking with Beach Seats Limited, the company is in good position.",
              ],
            ],
          },
          { t: "line", align: "center", text: "Dated this 6th day of October 2026" },
          { t: "line", text: "Yours Faithfully." },
          {
            t: "signoff",
            closing: "",
            sign: true,
            lines: ["Femi Kolawole Esq."],
          },
        ],
      },

      {
        id: "ordinary-resolution-ratifying-director-casual-vacancy",
        title: "Ordinary Resolution for the Ratification/Approval of a New Director That Was Used to Fill Casual Vacancy",
        red: true,
        category: "Resolutions",
        scenario:
          "At the Annual General Meeting of Unity Global Plc held on 20th May 2026 at Eko Hotel & Suites, members ratified the appointment of Mr Olowokure Basit of 17 Isalu Street, Ikoyi, Lagos as a director, filling the position and office of Mr Dapo Ajayi, the deceased director, pursuant to section 274 CAMA 2020. Draft the resolution, dated 12th June 2026, signed by Mr Ifechukwu Dubem (Director) and Mrs Rose Omosuyi (Company Secretary).",
        keyPoints: [
          "Heading states the resolution is for ratification/approval of a new director used to fill a casual vacancy",
          "Letterhead (with the company's RC number), heading citing the applicable section (s.274 CAMA 2020)",
          "Names the meeting, the date, and the venue at which the resolution was proposed and duly passed",
          "'THAT:' followed by numbered clauses stating the approval and ratification of the new director, and that he takes the position of the deceased/outgoing director",
          "Dated",
          "Signed by a director on the left and the company secretary on the right, each with their own signature line",
        ],
        verify: ["Mr Olowokure Basit (new director's name)", "Mr Dapo Ajayi (deceased director's name)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "UNITY GLOBAL PLC",
              "37, Lasu Ojo Road, Ojo, Lagos State",
              "07066554433, unityglobal@gmail.com, www.ug.com",
              "RC NO: 092137",
            ],
          },
          { t: "refs" },
          {
            t: "heading",
            align: "left",
            lines: [
              "ORDINARY RESOLUTION RATIFYING THE APPOINTMENT OF THE NEW",
              "DIRECTOR PURSUANT TO SECTION 274 OF THE COMPANIES AND",
              "ALLIED MATTERS ACT 2020 AS AMENDED",
            ],
          },
          {
            t: "para",
            text: "At the Annual General Meeting of Unity Global Plc held on the 20th of May 2026 at Eko Hotel & Suites, the following resolutions was proposed and duly passed:",
          },
          { t: "line", text: "THAT:" },
          {
            t: "numbered",
            items: [
              "The approval and ratification of the new director Mr Olowokure Basit of 17 Isalu Street, Ikoyi, Lagos.",
              "The new director will take the position and the office of Mr Dapo Ajayi, the deceased director.",
            ],
          },
          { t: "line", align: "center", text: "Dated this 12th day of June 2026" },
          {
            t: "signoffPair",
            people: [
              ["Mr Ifechukwu Dubem", "Director"],
              ["Mrs Rose Omosuyi", "Company Secretary."],
            ],
          },
        ],
      },

      {
        id: "board-resolution-casual-vacancy",
        title: "Board Resolution to Fill Casual Vacancy",
        red: true,
        category: "Resolutions",
        scenario:
          "At a board meeting of Unity Global Plc held on 19th July 2026 at the board conference room in the company's registered address, the board resolved to appoint Mr Olowokure Basit of 17 Isalu Street, Ikoyi, Lagos as a director in place of Mr Dapo Ajayi, the deceased director, until the next general meeting, pursuant to section 274 CAMA 2020. Draft the resolution, dated 19th July 2026, signed by Mr Ifechukwu Dubem (Director) and Mrs Rose Omosuyi (Company Secretary).",
        keyPoints: [
          "Heading states the resolution fills a casual vacancy on the board",
          "Letterhead (with the company's RC number), heading citing the applicable section (s.274 CAMA 2020)",
          "Names the meeting as a board meeting (not a general meeting), the date and venue",
          "'THAT:' followed by a numbered clause appointing the new director in place of the outgoing director, stating it is only until the next general meeting",
          "Dated",
          "Signed by a director on the left and the company secretary on the right, each with their own signature line",
        ],
        verify: ["This board resolution appoints only until the next general meeting — contrast with the ordinary resolution's full ratification"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "UNITY GLOBAL PLC",
              "37 Lasu Ojo Road, Ojo, Lagos State",
              "07066554433, unityglobal@gmail.com, www.ug.com",
              "RC NO: 092137",
            ],
          },
          { t: "refs" },
          {
            t: "heading",
            align: "left",
            lines: [
              "BOARD RESOLUTION FILLING THE CASUAL VACANCY ON THE BOARD",
              "PURSUANT TO SECTION 274 OF THE COMPANIES AND ALLIED MATTERS",
              "ACT 2020 AS AMENDED",
            ],
          },
          {
            t: "para",
            text: "At the board meeting of Unity Global Plc held on the 19th of July 2026 at the board conference room in the company's registered address at 37 Lasu Ojo Road, Ojo, Lagos, the following resolution was proposed and duly passed:",
          },
          { t: "line", text: "THAT:" },
          {
            t: "numbered",
            items: [
              "Mr Olowokure Basit of 17, Isalu Street, Ikoyi Lagos be appointed as a director of the company in place of Mr Dapo Ajayi, the deceased director, until the next general meeting.",
            ],
          },
          { t: "line", align: "center", text: "Dated this 19th day of July 2026" },
          {
            t: "signoffPair",
            people: [
              ["Mr Ifechukwu Dubem", "Director"],
              ["Mrs Rose Omosuyi", "Company secretary."],
            ],
          },
        ],
      },

      {
        id: "ordinary-resolution-removal-of-director",
        title: "Ordinary Resolution for Removal of a Director",
        red: true,
        category: "Resolutions",
        scenario:
          "At the Annual General Meeting of Unity Global Plc held on 20th May 2026 at Eko Hotel & Suites, members resolved to remove Mr Joe Boy as a director, and to appoint Mr Eazi Otedola of 6a Banana Island, Victoria Island, Lagos as a director in his place, to hold office only for as long as Mr Joe Boy would have held office if he had not been removed, pursuant to section 288 CAMA 2020. Draft the resolution, dated 12th May 2026, signed by Mr Ifechukwu Dubem (Director) and Mrs Rose Omosuyi (Company Secretary).",
        keyPoints: [
          "Heading states the resolution is for removal of a director",
          "Letterhead (with the company's RC number), heading citing the applicable section (s.288 CAMA 2020)",
          "Names the Annual General Meeting, the date and venue at which it was proposed and duly passed",
          "'THAT:' followed by numbered clauses: the removal of the named director, and the appointment of a replacement director, stating the replacement only holds office for as long as the removed director would have",
          "Dated",
          "Signed by a director on the left and the company secretary on the right, each with their own signature line",
        ],
        verify: ["Mr Joe Boy (removed director's name)", "Mr Eazi Otedola (replacement director's name/address)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "UNITY GLOBAL PLC",
              "37 Lasu Ojo Road, Ojo, Lagos State",
              "07066554433, unityglobal@gmail.com, www.ug.com",
              "RC NO: 092137",
            ],
          },
          { t: "refs" },
          {
            t: "heading",
            align: "left",
            lines: [
              "ORDINARY RESOLUTION TO REMOVE MR JOE BOY AS A DIRECTOR OF",
              "UNITY GLOBAL PLC PURSUANT TO SECTION 288 OF THE COMPANIES",
              "AND ALLIED MATTERS ACT 2020 AS AMENDED",
            ],
          },
          {
            t: "para",
            text: "At the Annual General Meeting of Unity Global Plc held on the 20th of May 2026 at Eko Hotel & Suites, the following resolutions were proposed and duly passed:",
          },
          { t: "line", text: "THAT:" },
          {
            t: "numbered",
            items: [
              "Mr Joe Boy be, and is hereby removed from the office of Director of the company.",
              "Mr Eazi Otedola of 6a Banana Island, Victoria Island, Lagos be, and is hereby appointed as a director of the company in place of, and to hold office only during such time that Mr Joe Boy would have held office if he was not removed.",
            ],
          },
          { t: "line", align: "center", text: "Dated this 12th day of May 2026" },
          {
            t: "signoffPair",
            people: [
              ["Mr Ifechukwu Dubem", "Director"],
              ["Mrs Rose Omosuyi", "Company secretary"],
            ],
          },
        ],
      },

      {
        id: "ordinary-resolution-appointing-a-director",
        title: "Ordinary Resolution for Appointing a Director",
        red: true,
        category: "Resolutions",
        scenario:
          "At a general meeting of Unity Global Plc held on 20th May 2026 at Eko Hotel & Suites, members resolved to appoint Mrs Aisha Balarabe of 12 Mojunmola Avenue, Ogudu, Lagos as an independent non-executive director, pursuant to section 273 CAMA 2020. Draft the resolution, dated 6th May 2026, signed by Mr Ifechukwu Dubem (Director) and Mrs Rose Omosuyi (Company Secretary).",
        keyPoints: [
          "Heading states the resolution is for appointing a director",
          "Letterhead (with the company's RC number), heading citing the applicable section (s.273 CAMA 2020)",
          "Names the general meeting, the date and venue at which it was proposed and duly passed",
          "'THAT:' followed by a numbered clause appointing the named person, stating their capacity (independent non-executive director)",
          "Dated",
          "Signed by a director on the left and the company secretary on the right, each with their own signature line",
        ],
        verify: ["Mrs Aisha Balarabe (new director's name/address)"],
        blocks: [
          {
            t: "letterhead",
            lines: [
              "UNITY GLOBAL PLC",
              "37 Lasu Ojo Road, Ojo, Lagos State.",
              "07066554433, unityglobal@gmail.com, www.ug.com",
              "RC NO: 092137",
            ],
          },
          { t: "refs" },
          {
            t: "heading",
            align: "left",
            lines: [
              "ORDINARY RESOLUTION TO APPOINT MRS AISHA BALARABE AS",
              "A DIRECTOR OF UNITY GLOBAL PLC PURSUANT TO SECTION 273",
              "OF THE COMPANIES AND ALLIED MATTERS ACT 2020 AS AMENDED",
            ],
          },
          {
            t: "para",
            text: "At the general meeting of Unity Global Plc held on the 20th of May 2026 at Eko Hotel & Suites, the following resolution was proposed and duly passed:",
          },
          { t: "line", text: "THAT:" },
          {
            t: "numbered",
            items: [
              "Mrs Aisha Balarabe of No 12 Mojunmola Avenue, Ogudu, Lagos be, and is hereby appointed as an independent non-executive director of Unity Global Plc.",
            ],
          },
          { t: "line", align: "center", text: "Dated this 6th day of May 2026" },
          {
            t: "signoffPair",
            people: [
              ["Mr Ifechukwu Dubem", "Director"],
              ["Mrs Rose Omosuyi", "Company secretary"],
            ],
          },
        ],
      },

      {
        id: "memorandum-of-association",
        title: "Memorandum of Association",
        red: true,
        category: "Constitutional Documents",
        scenario:
          "Draft the Memorandum of Association of Lammens Publishing Limited, a private company limited by shares, registered office in Lagos, carrying on the business of printing, publishing and marketing books, pamphlets, magazines and newspapers; also to supply and distribute its printed and published documents and to market its publications; and to undertake all other lawful objects. Issued share capital N2,000,000 divided into 2,000,000 ordinary shares of N1 each, the sole subscriber being Kehinde Sekoni, a pharmacist of 10 Dauda Street, Ogudu, taking up 1,000,000 ordinary shares of N1 each, dated 27th June 2026.",
        keyPoints: [
          "Centred title 'MEMORANDUM OF ASSOCIATION', then 'THE FEDERAL REPUBLIC OF NIGERIA', 'IN THE COMPANIES AND ALLIED MATTERS ACT 2020', and the memorandum's full title naming the company",
          "Name Clause states the exact registered name",
          "Registered Office Clause states the state in which the office will be situated",
          "Object Clause: principal object first, then objects pursued in the ordinary course of business, then a general 'all other lawful objects' clause",
          "Status Clause states whether the company is private or public",
          "Liability Clause states whether members' liability is limited by shares or by guarantee",
          "Share Capital Clause states the issued share capital, divided into shares of a stated nominal value — for a company limited by guarantee, they don't have a share capital so there is no Share Capital Clause; instead we have a Special Clause and a Guarantee Clause",
          "Subscription Clause: the subscribers declare their desire to be formed into a company and agree to take the shares set opposite their names",
          "Subscription Box: a table with columns for Name/Address/Occupation, Beneficial Owner, Number of Shares Taken, and Signature",
          "Dated, with an Attestation Clause recording the witness's name, address, occupation and signature",
        ],
        verify: ["Kehinde Sekoni (sole subscriber's occupation — a pharmacist)", "'Hexsel F' appears as the beneficial owner in the scan — confirm this reading"],
        blocks: [
          { t: "heading", align: "center", underline: true, lines: ["MEMORANDUM OF ASSOCIATION"] },
          {
            t: "heading",
            align: "center",
            lines: [
              "THE FEDERAL REPUBLIC OF NIGERIA",
              "IN THE COMPANIES AND ALLIED MATTERS ACT 2020",
              "MEMORANDUM OF ASSOCIATION OF LAMMENS PUBLISHING LIMITED",
            ],
          },
          { t: "line", text: "NAME CLAUSE" },
          { t: "para", text: "The Name of the Company is LAMMENS PUBLISHING LIMITED." },
          { t: "line", text: "REGISTERED OFFICE CLAUSE" },
          { t: "para", text: "The registered office of the company will be situated in Lagos State, Nigeria." },
          { t: "line", text: "OBJECT CLAUSE" },
          { t: "para", text: "The objects of the company are as follows:" },
          {
            t: "numbered",
            items: [
              "To undertake its principal object, the business of printing, publishing and marketing books, pamphlets, magazines and newspapers.",
              "In pursuance of its principal object, to undertake the following in the ordinary course of its business: (i) supplying and distribution of our printed and published documents; (ii) to market its publications.",
              "To undertake all other lawful objects.",
            ],
          },
          { t: "line", text: "STATUS CLAUSE" },
          { t: "para", text: "The company is a private company." },
          { t: "line", text: "LIABILITY CLAUSE" },
          { t: "para", text: "The liability of its members is limited by shares." },
          { t: "line", text: "SHARE CAPITAL CLAUSE" },
          {
            t: "para",
            text: "The issued share capital of the company is N2,000,000 (Two million naira) divided into 2,000,000 (Two million) ordinary shares of N1 (one naira) each.",
          },
          { t: "line", text: "SUBSCRIPTION CLAUSE" },
          {
            t: "para",
            text: "I, whose name and address are subscribed below, am desirous of being formed into a company in pursuance of this Memorandum of Association and I agree to take the number of shares in the capital of the company set opposite my name.",
          },
          {
            t: "table",
            headers: ["S/N", "Name/Address/Occupation", "Beneficial Owner", "No of Shares Taken", "Signature"],
            rows: [
              [
                "1",
                "Kehinde Sekoni, a pharmacist of No 10 Dauda Street, Ogudu",
                "Himself",
                "1,000,000 ordinary shares of N1 each",
                "________",
              ],
            ],
          },
          { t: "line", align: "center", text: "Dated this 27th day of June 2026" },
          { t: "line", text: "ATTESTATION CLAUSE" },
          { t: "items", items: ["Name: ________", "Address: ________", "Occupation: ________", "Signature: ________"] },
        ],
      },

      {
        id: "memorandum-of-association-company-limited-by-guarantee",
        title: "Memorandum of Association (Company Limited by Guarantee)",
        red: true,
        category: "Constitutional Documents",
        scenario:
          "Draft the Memorandum of Association of a company limited by guarantee — e.g. a non-profit set up to further a charitable, educational or similar aim. Unlike a company limited by shares, it has no Share Capital Clause: instead it has a Special Clause (restricting how income/property may be used, and what happens to surplus property on winding up) and a Guarantee Clause (each member's contribution if the company is wound up). The Subscription Clause also reads differently: subscribers agree to 'undertake' an amount, not to 'take' shares.",
        keyPoints: [
          "Centred title 'MEMORANDUM OF ASSOCIATION', then 'THE FEDERAL REPUBLIC OF NIGERIA', 'IN THE COMPANIES AND ALLIED MATTERS ACT 2020', and the memorandum's full title naming the company",
          "Name Clause states the exact registered name",
          "Registered Office Clause states the state in which the office will be situated",
          "Object Clause: principal object first, then objects pursued in the ordinary course of business, then a general 'all other lawful objects' clause",
          "Status Clause states whether the company is private or public",
          "Liability Clause states that members' liability is limited by guarantee (not by shares)",
          "For a company limited by guarantee, they don't have a share capital so there is no Share Capital Clause; instead we have a Special Clause and a Guarantee Clause",
          "Special Clause: the company's income and property must be used only to further its objects and cannot be given to any member except as allowed by CAMA 2020; on winding up, any remaining property after debts and liabilities are settled must not be distributed to members, but transferred to another organisation with similar aims as decided by members before dissolution",
          "Guarantee Clause: each member agrees to contribute a stated minimum sum towards the company's debts, liabilities and winding-up costs if it is wound up while they are a member, or within one year after they cease to be a member",
          "Subscription Clause: subscribers declare their desire to be formed into a company and agree to undertake the amount set opposite their names (not 'take shares', since there is no share capital)",
          "Subscription Box: a table with columns for Name/Address/Occupation, and the amount undertaken, and Signature",
          "Dated, with an Attestation Clause recording the witness's name, address, occupation and signature",
        ],
        verify: ["N100,000 minimum guarantee contribution — confirm this figure against your own transaction's facts"],
        blocks: [
          { t: "heading", align: "center", underline: true, lines: ["MEMORANDUM OF ASSOCIATION"] },
          {
            t: "heading",
            align: "center",
            lines: [
              "THE FEDERAL REPUBLIC OF NIGERIA",
              "IN THE COMPANIES AND ALLIED MATTERS ACT 2020",
              "MEMORANDUM OF ASSOCIATION OF ________ (NAME OF THE COMPANY)",
            ],
          },
          { t: "line", text: "NAME CLAUSE" },
          { t: "para", text: "The Name of the Company is ________." },
          { t: "line", text: "REGISTERED OFFICE CLAUSE" },
          { t: "para", text: "The registered office of the company will be situated in ________ State, Nigeria." },
          { t: "line", text: "OBJECT CLAUSE" },
          { t: "para", text: "The objects of the company are as follows:" },
          {
            t: "numbered",
            items: [
              "To undertake its principal object, ________.",
              "In pursuance of its principal object, to undertake the following in the ordinary course of its business: (i) ________; (ii) ________.",
              "To undertake all other lawful objects.",
            ],
          },
          { t: "line", text: "STATUS CLAUSE" },
          { t: "para", text: "The company is a private company." },
          { t: "line", text: "LIABILITY CLAUSE" },
          { t: "para", text: "The liability of its members is limited by guarantee." },
          { t: "line", text: "SPECIAL CLAUSE" },
          {
            t: "para",
            text: "The company's income and property must be used only to further its objectives and cannot be given to any member except as allowed by the Companies and Allied Matters Act 2020. If, after winding up, all debts and liabilities have been settled and there is any remaining property, such property must not be distributed to members but transferred to another organisation with similar aims as decided by members before dissolution.",
          },
          { t: "line", text: "GUARANTEE CLAUSE" },
          {
            t: "para",
            text: "Each member agrees that if the company is wound up while they are a member, or within one year after they leave, they will contribute not less than N100,000 (one hundred thousand naira) towards the company's debts, liabilities and winding up costs.",
          },
          { t: "line", text: "SUBSCRIPTION CLAUSE" },
          {
            t: "para",
            text: "I/We, whose names and addresses are subscribed therein, are desirous of being formed into a company in pursuance of this Memorandum of Association and we respectively agree to undertake the amount set opposite our names.",
          },
          {
            t: "table",
            headers: ["S/N", "Name/Address/Occupation", "Amount Undertaken", "Signature"],
            rows: [["1", "________", "N100,000 (one hundred thousand naira)", "________"]],
          },
          { t: "line", align: "center", text: "Dated this ________ day of ________ 20__" },
          { t: "line", text: "ATTESTATION CLAUSE" },
          { t: "items", items: ["Name: ________", "Address: ________", "Occupation: ________", "Signature: ________"] },
        ],
      },
    ],
  },
  "property-law-practice": { courseName: "Property Law Practice", drafts: [] },
};

export default drafts;
