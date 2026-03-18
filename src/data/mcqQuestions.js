/**
 * MCQ Past Questions Data
 *
 * Structure:
 * - Each exam session is keyed by "YEAR-session" (e.g. "2009-august")
 * - Each session contains metadata and an array of courses
 * - Each course has an id, name, and array of questions
 * - Questions have: id, question text, optional context (scenario), options (a-d), and correct answer letter
 * - answer: "bonus" means the question was voided / all candidates get the mark
 *
 * To add a new exam session, add a new key following the same structure.
 */

const mcqQuestions = {
  "2009-august": {
    year: 2009,
    session: "August",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 80,
    courses: [
      // ========================================
      // CIVIL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2009-august-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Three judicial appointments have just been announced by the Nigerian Television Authority. The first is Honorable Justice Kotako, Justice of Supreme Court, whose appointment was made by the Senate President on the recommendation of the Judicial Service Committee of the Federal Capital Territory without any confirmation. The second is Honorable Justice Agabi, Chief Judge of Abia State whose appointment was made by the Abia State Governor without recommendation and confirmation by the Senate. The third is Justice Wamako, Chief Judge of the Federal Capital Territory whose appointment was made by the FCT Minister on the recommendation of the National Judicial Council, and confirmed by Senate.",
            question:
              "Which of the following statements can be said to represent the correct position of the law in the three appointments?",
            options: {
              a: "All the appointments are validly made.",
              b: "None of the appointments is validly made.",
              c: "Only the third appointment is validly made.",
              d: "All the appointments except the first were validly made.",
            },
            answer: "b",
          },
          {
            id: 2,
            context:
              "Three judicial appointments have just been announced by the Nigerian Television Authority. The first is Honorable Justice Kotako, Justice of Supreme Court, whose appointment was made by the Senate President on the recommendation of the Judicial Service Committee of the Federal Capital Territory without any confirmation. The second is Honorable Justice Agabi, Chief Judge of Abia State whose appointment was made by the Abia State Governor without recommendation and confirmation by the Senate. The third is Justice Wamako, Chief Judge of the Federal Capital Territory whose appointment was made by the FCT Minister on the recommendation of the National Judicial Council, and confirmed by Senate.",
            question:
              "The only valid thing in the appointment of Justice Wamako is that:",
            options: {
              a: "The appointment was made by the FCT Minister and confirmed by Senate.",
              b: "The appointment was made on the recommendation of the National Judicial Council and confirmed by the Senate.",
              c: "All actions taken in the appointment were valid.",
              d: "None of the actions taken in the appointment was valid.",
            },
            answer: "c",
          },
          {
            id: 3,
            context:
              "Three judicial appointments have just been announced by the Nigerian Television Authority. The first is Honorable Justice Kotako, Justice of Supreme Court, whose appointment was made by the Senate President on the recommendation of the Judicial Service Committee of the Federal Capital Territory without any confirmation. The second is Honorable Justice Agabi, Chief Judge of Abia State whose appointment was made by the Abia State Governor without recommendation and confirmation by the Senate. The third is Justice Wamako, Chief Judge of the Federal Capital Territory whose appointment was made by the FCT Minister on the recommendation of the National Judicial Council, and confirmed by Senate.",
            question:
              "Appointment of Justice Agabi is invalid because of one of the following option:",
            options: {
              a: "He cannot be appointed a Chief Judge while there is an incumbent Chief Judge of the State.",
              b: "The appointment is not invalid.",
              c: "Only because there was no recommendation of the National Judicial Council and no confirmation by the State House of Assembly.",
              d: "Both because the confirmation by the Senate is inappropriate as there was no recommendation to the Senate.",
            },
            answer: "c",
          },
          {
            id: 4,
            context:
              "Three judicial appointments have just been announced by the Nigerian Television Authority. The first is Honorable Justice Kotako, Justice of Supreme Court, whose appointment was made by the Senate President on the recommendation of the Judicial Service Committee of the Federal Capital Territory without any confirmation. The second is Honorable Justice Agabi, Chief Judge of Abia State whose appointment was made by the Abia State Governor without recommendation and confirmation by the Senate. The third is Justice Wamako, Chief Judge of the Federal Capital Territory whose appointment was made by the FCT Minister on the recommendation of the National Judicial Council, and confirmed by Senate.",
            question:
              "Which of the Courts will have jurisdiction in respect of any dispute as to whether the National Judicial Council is the appropriate body under the Constitution to recommend the appointment of Justice Wamako?",
            options: {
              a: "State High Court.",
              b: "Both Federal High Court and State High Court.",
              c: "Federal High Court to the exclusion of the State High Court.",
              d: "Supreme Court in its original jurisdiction.",
            },
            answer: "c",
          },
          {
            id: 5,
            context:
              "Three judicial appointments have just been announced by the Nigerian Television Authority. The first is Honorable Justice Kotako, Justice of Supreme Court, whose appointment was made by the Senate President on the recommendation of the Judicial Service Committee of the Federal Capital Territory without any confirmation. The second is Honorable Justice Agabi, Chief Judge of Abia State whose appointment was made by the Abia State Governor without recommendation and confirmation by the Senate. The third is Justice Wamako, Chief Judge of the Federal Capital Territory whose appointment was made by the FCT Minister on the recommendation of the National Judicial Council, and confirmed by Senate.",
            question:
              "Which of the following is a common requirement of the Constitution for the appointment of Honorable Justices Kotako, Agabi and Wamako?",
            options: {
              a: "All the appointments are required to be made by the President.",
              b: "All the appointments are required to be confirmed by the Senate.",
              c: "All the appointments are required to be recommended by the National Judicial Institute.",
              d: "All the appointments are required to be recommended by the National Judicial Council.",
            },
            answer: "d",
          },
          {
            id: 6,
            question:
              "A Delta State law which prescribed that 'an application for leave of Court to enforce fundamental rights of an individual must be filed within 6 months of the happening of the event complained of' is inconsistent with Fundamental Right Enforcement Procedure Rules because the Rules prescribe:",
            options: {
              a: "No time frame.",
              b: "A lesser time than 6 months.",
              c: "More time than 6 months.",
              d: "The same time of 5 months.",
            },
            answer: "c",
          },
          {
            id: 7,
            context:
              "Kevin Oba, a legal practitioner has a brother Vincent Oba whose first son Mike Oba was still in his 3rd year in Faculty of Law, University of Ife. To help him, Kevin employed him in his Chambers, bought him wig and gown and assigned cases to him which he handled successfully in Court with the help of Kevin. When this was discovered, Kevin quickly procured travelling documents for Mike with which he travelled to South Africa.",
            question: "What offence has Mike Oba committed?",
            options: {
              a: "Obtaining enrolment by fraud.",
              b: "Conduct incompatible with his status.",
              c: "Infamous conduct but not in a professional respect.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 8,
            context:
              "Kevin Oba, a legal practitioner has a brother Vincent Oba whose first son Mike Oba was still in his 3rd year in Faculty of Law, University of Ife. To help him, Kevin employed him in his Chambers, bought him wig and gown and assigned cases to him which he handled successfully in Court with the help of Kevin. When this was discovered, Kevin quickly procured travelling documents for Mike with which he travelled to South Africa.",
            question:
              "On the authority of Garba v. Uni Maiduguri:",
            options: {
              a: "Kevin Oba must be expelled by NBA.",
              b: "LPDC must strike out Mike Oba's name from the roll.",
              c: "Kevin Oba will be admonished.",
              d: "Kevin Oba will be prosecuted for LPDC to discipline him.",
            },
            answer: "bonus",
          },
          {
            id: 9,
            question: "All but one of the following is correct:",
            options: {
              a: "The front loading system saves cost.",
              b: "The front loading system makes for quick dispensation of justice.",
              c: "Front loading system acts as a catalyst for resorting to ADR.",
              d: "Front loading system effectuates springing of surprises on opposing parties.",
            },
            answer: "d",
          },
          {
            id: 10,
            question: "All but one of the following is incorrect:",
            options: {
              a: "A discharged bankrupt is disqualified from contesting election in Nigeria.",
              b: "A lunatic cannot contest election in Nigeria.",
              c: "A candidate for Governorship election must be a citizen of Nigeria.",
              d: "A person under a sentence of imprisonment for an offence involving dishonesty or fraud cannot contest for election in Nigeria.",
            },
            answer: "a",
          },
          {
            id: 11,
            question:
              "The inner bar or front row in Courts are exclusively reserved for all but one of the following:",
            options: {
              a: "The Attorney-General of the Federation.",
              b: "The Attorneys-General of any state.",
              c: "President of Nigerian Bar Association.",
              d: "Senior Advocates of Nigeria.",
            },
            answer: "c",
          },
          {
            id: 12,
            question:
              "A lawyer who interviews his client must adhere to one of the following procedures:",
            options: {
              a: "Questioning, listening and advising.",
              b: "Listening, advising and questioning.",
              c: "Listening, questioning and advising.",
              d: "Listening, questioning and further listening.",
            },
            answer: "c",
          },
          {
            id: 13,
            question:
              "One of the following cannot be compelled to give evidence in Court:",
            options: {
              a: "Mr. Oladimeji Bankole, Speaker, House of Assembly.",
              b: "Hajia Turai Yar'adua.",
              c: "Mrs. Shola Obada, Deputy Governor of Osun State.",
              d: "Former Vice President, Atiku.",
            },
            answer: "c",
          },
          {
            id: 14,
            context:
              "Miss Kokoma is a tenant in the property belonging to Late Mazi Okon under a yearly tenancy which commenced on 1st February 2001. After the death of Mazi Okon, his two wives and 6 children are fighting over the rightful person to collect the rents. Miss Kokoma is in a dilemma as to the rightful person to pay to.",
            question: "What step is appropriate to take?",
            options: {
              a: "Third party proceedings.",
              b: "Interpleader summons.",
              c: "Application for further and better particulars.",
              d: "Garnishee Proceedings.",
            },
            answer: "b",
          },
          {
            id: 15,
            context:
              "Miss Kokoma is a tenant in the property belonging to Late Mazi Okon under a yearly tenancy which commenced on 1st February 2001.",
            question:
              "One of the following must be served on Miss Kokoma in order to properly determine her tenancy:",
            options: {
              a: "A 6-month notice to quit which must expire on the 31st of January.",
              b: "A 6-month notice to be served anytime before the end of September in any year.",
              c: "A 6-month notice to quit which must expire on 1st January.",
              d: "A 6-month notice to expire at the end of August in any year.",
            },
            answer: "a",
          },
          {
            id: 16,
            context:
              "Mr. Ajibogun is the owner of a plot situate at 10 White Chapel Street, Lagos Island. Mr. Gbeminiyi is encroaching on the land. Mr. Ajibogun has briefed you to take up prosecution of the case against Mr. Gbeminiyi for declaration of title to the land.",
            question:
              "What will be the mode of commencement of an action brought against Mr. Gbeminiyi?",
            options: {
              a: "Originating summons.",
              b: "Ordinary summons.",
              c: "Writ of Summons.",
              d: "Petition.",
            },
            answer: "c",
          },
          {
            id: 17,
            context:
              "Mr. Ajibogun is the owner of a plot situate at 10 White Chapel Street, Lagos Island. Mr. Gbeminiyi is encroaching on the land. Mr. Ajibogun has briefed you to take up prosecution of the case against Mr. Gbeminiyi for declaration of title to the land.",
            question:
              "One of the following is not a document relevant to be filed in commencing an action against Mr. Gbeminiyi:",
            options: {
              a: "Certificate of pre-action counseling.",
              b: "List of witnesses to be called at the trial.",
              c: "Copies of documents to be relied upon.",
              d: "Statement on oath of the witnesses.",
            },
            answer: "a",
          },
          {
            id: 18,
            context:
              "Mr. Ajibogun is the owner of a plot situate at 10 White Chapel Street, Lagos Island. Mr. Gbeminiyi is encroaching on the land. Mr. Ajibogun has briefed you to take up prosecution of the case against Mr. Gbeminiyi for declaration of title to the land.",
            question:
              "Mrs. Ajibogun would like to know the life span of the originating process issued by you on his behalf against Mr. Gbeminiyi. Your advice to him is that the life span of the originating process is:",
            options: {
              a: "12 months renewable for subsequent period of 6 months.",
              b: "6 months, renewable for another single period of 6 months.",
              c: "6 months renewable for two periods of 3 months each.",
              d: "3 months, renewable for subsequent periods of 3 months.",
            },
            answer: "c",
          },
          {
            id: 19,
            question:
              "A writ of Summons must be endorsed with the following particulars except one:",
            options: {
              a: "Time within which the defendant is to enter appearance.",
              b: "Name and particulars of the party.",
              c: "Cost of the action.",
              d: "The particulars of the claim.",
            },
            answer: "c",
          },
          {
            id: 20,
            question: "The defendant will address Court first:",
            options: {
              a: "If the plaintiff did not adduce evidence.",
              b: "If the defendant did not adduce evidence.",
              c: "If the plaintiff adduce evidence.",
              d: "If the defendant adduce evidence.",
            },
            answer: "d",
          },
        ],
      },

      // ========================================
      // CRIMINAL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2009-august-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "14 year old Mafoni was charged before the Federal High Court, Abuja for causing death by dangerous driving on a Federal Highway. His Counsel raised preliminary objections on the grounds that consent of the Judge had not been sought and obtained before the charge was filed and that since the C.P.A is applicable in all Federal High Courts, the charge ought to have been by way of information. Both objections were overruled. The accused pleaded not guilty to the charge. The prosecution called only one witness instead of the three earlier listed.",
            question: "Which Court has jurisdiction over Mafoni?",
            options: {
              a: "The Federal High Court, Abuja, FCT.",
              b: "Any Federal High Court in the Country.",
              c: "The Juvenile Court.",
              d: "The High Court of the Federal Capital Territory.",
            },
            answer: "d",
          },
          {
            id: 2,
            context:
              "14 year old Mafoni was charged before the Federal High Court, Abuja for causing death by dangerous driving on a Federal Highway. His Counsel raised preliminary objections on the grounds that consent of the Judge had not been sought and obtained before the charge was filed and that since the C.P.A is applicable in all Federal High Courts, the charge ought to have been by way of information. Both objections were overruled. The accused pleaded not guilty to the charge. The prosecution called only one witness instead of the three earlier listed.",
            question:
              "All, except which of these, will be your reply to the preliminary objections raised?",
            options: {
              a: "That criminal proceedings can be commenced.",
              b: "That the Federal High Court is a Court of summary jurisdiction.",
              c: "That consent of the Federal High Court Judge is not required before a charge is filed.",
              d: "That criminal proceedings are commenced at the Federal High Court by way of charge not information.",
            },
            answer: "a",
          },
          {
            id: 3,
            context:
              "14 year old Mafoni was charged before the Federal High Court, Abuja for causing death by dangerous driving on a Federal Highway. His Counsel raised preliminary objections on the grounds that consent of the Judge had not been sought and obtained before the charge was filed and that since the C.P.A is applicable in all Federal High Courts, the charge ought to have been by way of information. Both objections were overruled. The accused pleaded not guilty to the charge. The prosecution called only one witness instead of the three earlier listed.",
            question:
              "How many witnesses must the prosecution call in this case?",
            options: {
              a: "Even one witness is sufficient, if he can prove the case beyond reasonable doubt.",
              b: "The 3 witnesses listed must be called.",
              c: "At least two witnesses to corroborate each other.",
              d: "All eye witnesses to the accident.",
            },
            answer: "c",
          },
          {
            id: 4,
            context:
              "At the trial of Dotun Alawe, the Prosecution sought to tender in evidence, a statement allegedly made by the accused. The accused denied making the statement. Learned Defence Counsel applied for trial within trial but the Judge refused. He rejected the statement on the ground that it was not confirmed by a superior police officer.",
            question: "In the circumstance:",
            options: {
              a: "The Judge wrongly rejected the statement.",
              b: "The Judge rightly rejected the statement.",
              c: "The statement was admissible only upon the fulfillment of a particular condition.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 5,
            context:
              "At the trial of Dotun Alawe, the Prosecution sought to tender in evidence, a statement allegedly made by the accused. The accused denied making the statement. Learned Defence Counsel applied for trial within trial but the Judge refused. He rejected the statement on the ground that it was not confirmed by a superior police officer.",
            question:
              "The right thing the Judge should have done in the circumstance was:",
            options: {
              a: "To admit the document and consider the weight to attach to it later.",
              b: "Order trial within trial.",
              c: "Adjourn the matter to take oral evidence.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 6,
            context:
              "At the trial of Dotun Alawe, the Prosecution sought to tender in evidence, a statement allegedly made by the accused. The accused denied making the statement. Learned Defence Counsel applied for trial within trial but the Judge refused.",
            question:
              "From the above scenario, when would it have been appropriate to order trial within trial?",
            options: {
              a: "If the accused had retracted his statement.",
              b: "If the accused denied the voluntariness of the statement.",
              c: "If the witness is perceived to be lying.",
              d: "If the prosecutor is biased.",
            },
            answer: "b",
          },
          {
            id: 7,
            question:
              "Had the Court ordered trial within trial, who would have started giving evidence?",
            options: {
              a: "The accused.",
              b: "The Court.",
              c: "The Prosecutor.",
              d: "The witnesses.",
            },
            answer: "c",
          },
          {
            id: 8,
            context:
              "Sule was arrested at Owo, Ondo State for being in unlawful possession of 35 kilograms of Indian hemp. The Court ordered that Sule be detained at Governor's pleasure. Sule wants to appeal against the order.",
            question:
              "The Court vested with jurisdiction to entertain this offence is:",
            options: {
              a: "Chief Magistrates' Court, Owo, Ondo State.",
              b: "High Court, Ado-Ekiti, Ekiti State.",
              c: "Federal High Court, Akure.",
              d: "The National Industrial Court.",
            },
            answer: "c",
          },
          {
            id: 9,
            context:
              "Sule was arrested at Owo, Ondo State for being in unlawful possession of 35 kilograms of Indian hemp. The Court ordered that Sule be detained at Governor's pleasure.",
            question: "Which of the following is correct?",
            options: {
              a: "Before Sule can be convicted by the Court, the evidence of an expert is required.",
              b: "Since Sule has pleaded not guilty by reason of insanity, the Court ought to discharge him.",
              c: "Sule can be convicted by the Court without calling for the evidence of an expert.",
              d: "The Court was right to have detained Sule at Governor's pleasure.",
            },
            answer: "a",
          },
          {
            id: 10,
            context:
              "After the plea of not guilty by reason of insanity was entered by Sule:",
            question:
              "The next thing the Court ought to ascertain is:",
            options: {
              a: "Whether Sule did or did not commit the offence.",
              b: "Whether Sule was insane at the time of committing the offence.",
              c: "Whether Sule was sane at the time of committing the offence.",
              d: "Whether it was the Indian hemp that made Sule to be insane.",
            },
            answer: "a",
          },
          {
            id: 11,
            question:
              "Where a plea of not guilty by reason of insanity succeeds:",
            options: {
              a: "The Court must give an order detaining the accused in an asylum at Governor's pleasure.",
              b: "The Court will discharge the accused.",
              c: "The Court will recommend pardon to the Governor on behalf of the accused.",
              d: "The Court will acquit the accused.",
            },
            answer: "a",
          },
          {
            id: 12,
            context:
              "That you Ogologo Nwanze on the 10th day of July, 2009 at No. 20 Old Suleja – Abuja Road Minna in the Minna Magisterial District had unlawful carnal knowledge and assaulted Miss Hotlegs and thereby committed an offence punishable under...",
            question:
              "What possible objection will you raise to the above charge?",
            options: {
              a: "Bad for misjoinder of offences.",
              b: "Bad for misjoinder of offenders.",
              c: "Bad for duplicity.",
              d: "Bad for ambiguity.",
            },
            answer: "c",
          },
          {
            id: 13,
            context:
              "That you Ogologo Nwanze on the 10th day of July, 2009 at No. 20 Old Suleja – Abuja Road Minna in the Minna Magisterial District had unlawful carnal knowledge and assaulted Miss Hotlegs.",
            question: "The charge should be laid under:",
            options: {
              a: "The Criminal Code Act.",
              b: "The Criminal Code Law.",
              c: "The Penal Code.",
              d: "The Penal Code Act.",
            },
            answer: "c",
          },
          {
            id: 14,
            question: "Who is to draft the above charge?",
            options: {
              a: "The Presiding Magistrate.",
              b: "The Police Prosecutor.",
              c: "The State Counsel.",
              d: "The Investigating Police Officer.",
            },
            answer: "a",
          },
          {
            id: 15,
            question:
              "Before a charge is drafted in Magistrate Court in the North, the accused person is brought to Court by:",
            options: {
              a: "An FIR (First Information Report).",
              b: "Information signed by the Police.",
              c: "Originating summons.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 16,
            context:
              "After the conviction of the accused person for stealing, his Counsel informed Court: 'My Lord, the accused person is a first time offender. He is the only surviving child of his parents who are aged between 80 and 90 years and he is responsible for their sustenance. I urge your Lordship to temper Justice with mercy.'",
            question: "The above statement is meant to:",
            options: {
              a: "Forestall sentence.",
              b: "Mitigate sentence.",
              c: "Alter the conviction.",
              d: "Reduce the imprisonment fine.",
            },
            answer: "b",
          },
          {
            id: 17,
            question:
              "Failure of Court to call for the statement would:",
            options: {
              a: "Nullify the trial and conviction.",
              b: "Nullify the conviction alone.",
              c: "Nullify the sentence alone.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 18,
            question:
              "At the stage when the statement is made, the right term to use to describe the offender is:",
            options: {
              a: "Accused person.",
              b: "Accused/applicant.",
              c: "Convict.",
              d: "Offender.",
            },
            answer: "c",
          },
          {
            id: 19,
            context:
              "Adam, a cashier at Magic Bank was tried, convicted and sentenced to 6 months imprisonment with an option of N100 fine on a Count of stealing one million naira (N1,000,000.00) belonging to a customer named Branden. Magic Bank was also ordered in the judgment to refund one hundred thousand naira (N100,000.00) to Mr. Branden. (The offence of stealing is punishable with 7 years imprisonment).",
            question:
              "Which of the following parties cannot appeal against the judgment?",
            options: {
              a: "Magic Bank.",
              b: "The Prosecutor.",
              c: "Branden.",
              d: "Adam.",
            },
            answer: "c",
          },
          {
            id: 20,
            question:
              "When can a person who is neither the prosecutor nor the accused appeal as of right in a criminal case?",
            options: {
              a: "When the punishment is life imprisonment.",
              b: "When the sentence is only imprisonment.",
              c: "When the sentence is both fine and imprisonment.",
              d: "None of the above.",
            },
            answer: "d",
          },
        ],
      },

      // ========================================
      // CORPORATE LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2009-august-corporate-law",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Chief Ekong Kolo, a retired civil servant has decided to engage in business with his family friends and colleagues, using his wide experience and connection made while he worked in Nigeria's foreign mission. He is also interested in engaging in a community development project which would be independently managed through income from his business activities.",
            question:
              "One of these is the most appropriate business organization Chief Ekong should form with his said friends:",
            options: {
              a: "Public company limited by shares.",
              b: "Company limited by guarantee.",
              c: "Private company limited by shares.",
              d: "Unlimited company.",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Chief Ekong Kolo, a retired civil servant has decided to engage in business with his family friends and colleagues, using his wide experience and connection made while he worked in Nigeria's foreign mission.",
            question:
              "One of these statutory forms is not required to form the most appropriate business organization in (1) above:",
            options: {
              a: "Availability check and reservation of name.",
              b: "Statement of share capital and return of allotment of shares.",
              c: "Notice of Registered office.",
              d: "Trustee Declaration form.",
            },
            answer: "d",
          },
          {
            id: 3,
            context:
              "Although Chief Ekong can engage other professionals other than Lawyers to register the business organization, but such other professional must engage a Lawyer for completion of one of these statutory forms:",
            question:
              "Which statutory form requires a Lawyer?",
            options: {
              a: "Particulars of Directors (CAC1).",
              b: "Notice of Registered Office (CAC 3).",
              c: "Availability Check and reservation of name (CAC 1).",
              d: "Declaration of compliance (CAC4).",
            },
            answer: "d",
          },
          {
            id: 4,
            context:
              "Chief Ekong Kolo is interested in engaging in a community development project which would be independently managed through income from his business activities.",
            question:
              "Which of the following is most appropriate for Chief Ekong's Centre for Community Development Project?",
            options: {
              a: "Incorporated Trustee.",
              b: "Partnership.",
              c: "Business Name.",
              d: "Company Limited by Guarantee.",
            },
            answer: "a",
          },
          {
            id: 5,
            question:
              "Which of these instructions is not necessary to be taken from Chief Ekong to register the Centre for Community Development Project?",
            options: {
              a: "The Trustees.",
              b: "The Share Capital.",
              c: "The proposed name.",
              d: "Situation of registered office.",
            },
            answer: "b",
          },
          {
            id: 6,
            question:
              "The Companies Proceedings Rules, 1992 made pursuant to the Companies and Allied Matters Act (CAMA) is applicable to:",
            options: {
              a: "Only matters arising out of Part 'A' of CAMA.",
              b: "Only matters arising out of Part 'B' of CAMA.",
              c: "Only matters arising out of Part 'C' of CAMA.",
              d: "Any matter relating to Companies in Nigeria.",
            },
            answer: "a",
          },
          {
            id: 7,
            question:
              "Appeal from the decision of the Investment and Securities Tribunal lies to the:",
            options: {
              a: "Court of Appeal.",
              b: "The Supreme Court.",
              c: "National Industrial Court.",
              d: "Federal High Court.",
            },
            answer: "a",
          },
          {
            id: 8,
            question:
              "Every person liable to contribute to the assets of a Company in the event of winding up is called:",
            options: {
              a: "A Creditor.",
              b: "A Debenture holder.",
              c: "A Contributory.",
              d: "A defaulter.",
            },
            answer: "c",
          },
          {
            id: 9,
            question:
              "An infant is absolutely prohibited from applying to the Corporate Affairs Commission for the registration of a:",
            options: {
              a: "Private Company Limited by Shares.",
              b: "Sole Proprietorship as a Business Name.",
              c: "Non Profit organization under Part C.",
              d: "Only (b) and (c) above.",
            },
            answer: "c",
          },
          {
            id: 10,
            question:
              "All but one of the following is the three major steps in the procedure for a large Merger:",
            options: {
              a: "Pre-Merger Notification to SEC.",
              b: "All Formal Approval.",
              c: "Post-Approval Notification to SEC.",
              d: "Post-Merger Notification to CAC.",
            },
            answer: "b",
          },
          {
            id: 11,
            question: "Which of the following statements is incorrect?",
            options: {
              a: "Striking off the name of company by CAC under S.525 CAMA is for defunct companies.",
              b: "A company whose name was struck off may be restored within a period of 20 years upon application.",
              c: "Striking off by CAC is a regulatory power CAC exercises in respect of companies that violate the provision of CAMA.",
              d: "Winding up is not necessary in striking off the name of a company.",
            },
            answer: "c",
          },
          {
            id: 12,
            context:
              "Mr. Sunday, the holder of ¼ of the shares of Sunny Plc has filed a petition for winding up at the Federal High Court, Lagos. The ground for the petition is that the affairs of the company have been conducted in an unfairly prejudicial and oppressive manner. The directors of the company also applied to the Investment and Securities Tribunal for an order of injunction restraining Mr. Sunday from applying to the Federal High Court for the dissolution of Sunny Plc.",
            question:
              "In a winding up proceeding, the judicial body vested with jurisdiction is:",
            options: {
              a: "Investment and Securities Tribunal.",
              b: "Failed Banks Tribunal.",
              c: "The Federal High Court.",
              d: "Lagos State High Court, Igbosere.",
            },
            answer: "c",
          },
          {
            id: 13,
            question:
              "Apart from the ground stated by Mr. Sunday in his petition, the other grounds for winding up of a company include all except:",
            options: {
              a: "Wrongful removal of the Company Secretary.",
              b: "Failure to constitute Audit Committee.",
              c: "Failure to hold Annual General Meeting.",
              d: "Failure of the Company to meet its financial obligations.",
            },
            answer: "a",
          },
          {
            id: 14,
            question:
              "Apart from the petition filed at the Federal High Court, Lagos, the other processes that can be filed by a Company at the Federal High Court in respect of Sunny Plc includes all but one of the following:",
            options: {
              a: "Originating Motions.",
              b: "Originating Summons.",
              c: "Writ of summons.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 15,
            question:
              "Assuming Sunny Plc is offering Securities to the Public, Sunny Plc must be registered with:",
            options: {
              a: "Investment and Securities Commission.",
              b: "Corporate Affairs Commission.",
              c: "Securities and Exchange Commission.",
              d: "Nigerian Investment and Promotion Commission.",
            },
            answer: "c",
          },
          {
            id: 16,
            question:
              "Assuming Sunny Plc is having a dispute with its Issuing house in respect of its public offer, the relevant judicial body to resolve the dispute is:",
            options: {
              a: "Failed Bank Tribunal.",
              b: "The Federal High Court, Ikoyi.",
              c: "Investment and Securities Tribunal.",
              d: "Administrative panel of the Nigerian Stock Exchange.",
            },
            answer: "c",
          },
          {
            id: 17,
            context:
              "Nexis Limited was incorporated with a share capital of N1 million Naira in 2001 with its shares fully subscribed. It is proposed to change the status of the company to a public Company very soon.",
            question:
              "The proposed change to a Public Company must be with the consent of:",
            options: {
              a: "All the subscribers.",
              b: "The Annual General Meeting.",
              c: "The Nigerian Stock Exchange.",
              d: "The Nigerian Investment Promotion Commission.",
            },
            answer: "b",
          },
          {
            id: 18,
            question:
              "One of these documents is not required to effect the change of status to a public company:",
            options: {
              a: "Statement of Source and Application of funds.",
              b: "Statutory declaration by a director and secretary.",
              c: "Special resolution.",
              d: "A written statement certified on oath.",
            },
            answer: "a",
          },
          {
            id: 19,
            question:
              "The paid up capital of Nexis Limited as at the date of application for change in status must be at least ___% of its authorized share capital:",
            options: {
              a: "100%.",
              b: "75%.",
              c: "50%.",
              d: "25%.",
            },
            answer: "d",
          },
          {
            id: 20,
            question:
              "Nexis Plc when formed is required to have an authorized share capital not less than:",
            options: {
              a: "N1,000.00.",
              b: "N5,000.00.",
              c: "N500,000.",
              d: "N10,000.",
            },
            answer: "c",
          },
        ],
      },

      // ========================================
      // PROPERTY LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2009-august-property-law",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Alhaji Modibbo owns Hadiza Plaza situate at No. 4 Ibadan Street, Kaduna; Danko Estate at No. 5 Zik Avenue Ibadan; and Ebeano Mall, Awolowo Street, Enugu. He wants to retain Abdul Jada to oversee all his properties. Abdul Jada is a legal practitioner.",
            question:
              "How would Alhaji Modibbo vest such powers on Abdul Jada?",
            options: {
              a: "By a retainership agreement.",
              b: "By a power of attorney.",
              c: "By a deed of assignment.",
              d: "By a memorandum of understanding.",
            },
            answer: "b",
          },
          {
            id: 2,
            context:
              "Alhaji Modibbo owns Hadiza Plaza, Danko Estate, and Ebeano Mall.",
            question:
              "If Alhaji Modibbo had in his Will given Ebeano Plaza to his son, Shehu, under what document would title in the plaza pass to Shehu?",
            options: {
              a: "The Probate.",
              b: "The Assent.",
              c: "The Will.",
              d: "The Letters of Administration.",
            },
            answer: "c",
          },
          {
            id: 3,
            question:
              "If Alhaji Modibbo's Solicitor drafts a lease agreement in which the rent was N100,000, how would the Solicitor charge on the first N1,000?",
            options: {
              a: "N37.50 + N12.50.",
              b: "N225.00 + N25.00.",
              c: "N225.00 + N37.50.",
              d: "N37.50 + N225.00.",
            },
            answer: "b",
          },
          {
            id: 4,
            question:
              "All but one of these laws may apply to the alienation of Hadiza Plaza:",
            options: {
              a: "The Land Instrument Registration Act 1990.",
              b: "The Land Tenure Law 1962.",
              c: "The Conveyancing Act 1881.",
              d: "The Vendor and Purchaser Act 1874.",
            },
            answer: "a",
          },
          {
            id: 5,
            context:
              "Chief Bamgbose made his Will in 1998 in which he appointed Friday Bamgbose (his 1st Son), Alaska Oke (resident in the United States) and Abigail Bamgbose (his wife) executors. He died in 2008 but before his death, he bought a property in Abuja and 5,000 shares of Zenith Bank all in 2003. Friday Bamgbose, one of his sons, is interfering with the property in Abuja by arranging to use it as security for a personal loan of N10 million.",
            question:
              "What kind of grant can the executors seek to enable them take steps to preserve the property, now that their application for probate is still being processed?",
            options: {
              a: "General grant.",
              b: "Specific grant.",
              c: "Limited grant.",
              d: "Double probate.",
            },
            answer: "c",
          },
          {
            id: 6,
            question:
              "By S.17 of the Administration of Lagos State Law, Lagos, the executors year is:",
            options: {
              a: "First 3 months of grant of probate.",
              b: "First 1 year of grant of probate.",
              c: "First 2 years of grant of probate.",
              d: "First 6 months of grant of probate.",
            },
            answer: "b",
          },
          {
            id: 7,
            question:
              "How would the property in Abuja and 5,000 shares of Zenith Bank be administered?",
            options: {
              a: "Letter of Administration annexed with a Will.",
              b: "Letter of Administration.",
              c: "Probate.",
              d: "Double probate.",
            },
            answer: "b",
          },
          {
            id: 8,
            question:
              "If Alhaji Ibrahim Zuma although not expressed to be an executor in the Will of Chief Bamgbose, is directed by Chief Bamgbose to take care of his properties and children:",
            options: {
              a: "Alhaji Ibrahim will be an executor appointed by the court.",
              b: "Alhaji Ibrahim will be executor by operation of law.",
              c: "Alhaji Ibrahim will be an executor by implication.",
              d: "Alhaji Ibrahim will be an executor expressly appointed.",
            },
            answer: "c",
          },
          {
            id: 9,
            question:
              "Friday Bamgbose who is unhappy with the Will of Chief Bamgbose can express his opposition to grant of probate by filing:",
            options: {
              a: "Caveat in Form 5 or 6.",
              b: "Caveat in Form 3 or 4.",
              c: "Caveat in Form 2 or 3.",
              d: "Caveat in Form 1 or 2.",
            },
            answer: "b",
          },
          {
            id: 10,
            context:
              "Chief Adekoya wants to purchase a Corner shop at Hospital Road, Gwagwalada, Abuja, which Hajia Asabe, the owner has agreed to sell for N3 million on the condition that Chief Adekoya pays the sum of N1.5 million now and pay the balance on or before 31st August 2009.",
            question:
              "How would you describe the above transaction?",
            options: {
              a: "A hire purchase agreement.",
              b: "An agreement to sale.",
              c: "A conditional assignment.",
              d: "A part performance.",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "Chief Adekoya wants to purchase a Corner shop at Hospital Road, Gwagwalada, Abuja for N3 million, paying N1.5 million now.",
            question:
              "If you were Chief Adekoya's solicitor, as what would you want the first half of the consideration paid?",
            options: {
              a: "Down payment.",
              b: "Part payment.",
              c: "Deposit.",
              d: "Stakeholder.",
            },
            answer: "b",
          },
          {
            id: 12,
            context:
              "Somewhere near the Utako Market, Abuja a big sign board screams 'Reliance Law Chambers - best in property management, quick sales and letting. We parade the best lawyers in property law practice. A trial will convince you.'",
            question:
              "All the following words may be used to describe the above scenario except one:",
            options: {
              a: "Advertising.",
              b: "Privilege.",
              c: "Soliciting.",
              d: "Professional misconduct.",
            },
            answer: "b",
          },
          {
            id: 13,
            context:
              "Mallam Bako is the landlord of the premises known as Adisa Estate, Apo Legislative District, Abuja. Sister Mary has agreed with Mallam Bako to rent the premises for a period of three years with the right to remain there for another three years on terms as may be further agreed.",
            question: "Which of the following is not true?",
            options: {
              a: "The transaction is required to be by deed.",
              b: "Mallam Bako can review Sister Mary's rent after the first 3 years.",
              c: "The transaction is not required to be by deed.",
              d: "The agreement is valid.",
            },
            answer: "c",
          },
          {
            id: 14,
            context:
              "Mallam Bako is the landlord of the premises known as Adisa Estate. Sister Mary has agreed to rent the premises for a period of three years.",
            question:
              "Ideally, who should prepare the document in respect of this transaction?",
            options: {
              a: "Sister Mary's Solicitor.",
              b: "The Estate Agent.",
              c: "Mallam Bako's Solicitor.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 15,
            context:
              "In a mortgage transaction between ACAN Bank Limited and Chief Adewale in which Mr. Smart, a legal practitioner to the bank has assisted both parties to conclude the negotiation of a loan.",
            question: "Mr. Smart's fees situation is:",
            options: {
              a: "Mr. Smart will earn full fees from the Bank and half from Chief Adewale.",
              b: "Mr. Smart will earn full fees from Chief Adewale and half from the Bank.",
              c: "Mr. Smart will earn his full fees from the Bank only.",
              d: "Mr. Smart will earn his full fees from Chief Adewale only.",
            },
            answer: "a",
          },
          {
            id: 16,
            context:
              "Alhaji Gumi Bako has property at 12 Blantyre Street, Lagos Island and 5 Jos Street, Kaduna which he contracted to sell to Chief Ode Tiame. He refused to surrender the original title documents of the property in Kaduna as he was advised by his solicitor.",
            question:
              "The form for the transfer of the property at 12 Blantyre Street, Lagos Island is:",
            options: {
              a: "Form 5.",
              b: "Form 7.",
              c: "Form 6.",
              d: "Form 15.",
            },
            answer: "b",
          },
          {
            id: 17,
            question:
              "A vendor who conveys his title to a part of his land covered by one title document has right to retain the original title document as contained in:",
            options: {
              a: "S.123 PCL & S.19 C.A and Ajilo v. Savannah Bank Ltd.",
              b: "S.100 PCL & S.7 C.A. Re Puny and Jesson's Contract.",
              c: "S.101 PCL & S.125 C.A. Okumagba v. Idindum.",
              d: "S.101 PCL & S.12 C.A. Re White Rose Cottage.",
            },
            answer: "bonus",
          },
          {
            id: 18,
            question:
              "Will Chief Ode require a covenant of indemnity from Alhaji Gumi?",
            options: {
              a: "He requires it in both properties.",
              b: "He requires it only in respect of property in Kaduna.",
              c: "He requires it only in respect of the property in Lagos.",
              d: "He does not require it so long as the document of transfer is by deed.",
            },
            answer: "b",
          },
          {
            id: 19,
            question:
              "For how long will Alhaji Gumi need to deduce his title to the properties?",
            options: {
              a: "He will deduce title for 30 years of property in Kaduna and 40 years of property in Lagos.",
              b: "He will deduce title for 40 years of property in Lagos and need not deduce title of property in Kaduna.",
              c: "He will deduce title for 40 years of property in Kaduna only.",
              d: "He will only need to submit copies of documents of title to both properties.",
            },
            answer: "c",
          },
          {
            id: 20,
            question:
              "A solicitor conducting a search for sale of a land needs not look at:",
            options: {
              a: "The land registry.",
              b: "The land itself.",
              c: "The Probate Registry.",
              d: "None of the above.",
            },
            answer: "d",
          },
        ],
      },
    ],
  },

  // ================================================================
  // 2011 MAY — BAR PART II FINAL EXAMINATION
  // ================================================================

  "2011-may": {
    year: 2011,
    session: "May",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 100,
    courses: [
      // ========================================
      // CIVIL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2011-may-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Chief Agbasi Obi was the Governorship candidate of Winners Party whilst Mr. Mike Chukwu was the candidate of the Action Party of the just concluded general elections, which took place on the 26th April, 2011. By the result declared by the Resident Electoral Commission for the state, Mr. Mike Chukwu won, having polled 260,000 votes whilst Chief Agbasi came second having polled 180,000 votes. Chief Agbasi Obi is not satisfied with the outcome of the election and intends to challenge the election on the ground that Mr. Mike Chukwu was only 34 years old as at the date of the election.",
            question: "The proper tribunal to file the petition is:",
            options: {
              a: "The Court of Appeal.",
              b: "The Governorship and Legislative Houses Election Tribunal.",
              c: "The Governorship Election Tribunal.",
              d: "The Governorship and National Assembly Election Tribunal.",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Chief Agbasi Obi was the Governorship candidate of Winners Party whilst Mr. Mike Chukwu was the candidate of the Action Party of the just concluded general elections, which took place on the 26th April, 2011. By the result declared by the Resident Electoral Commission for the state, Mr. Mike Chukwu won, having polled 260,000 votes whilst Chief Agbasi came second having polled 180,000 votes. Chief Agbasi Obi is not satisfied with the outcome of the election and intends to challenge the election on the ground that Mr. Mike Chukwu was only 34 years old as at the date of the election.",
            question:
              "Documents to be filed along with the petition include all but one of the following:",
            options: {
              a: "Verifying Affidavit.",
              b: "List of witnesses.",
              c: "Copies of Exhibits.",
              d: "Statement on oath of witnesses.",
            },
            answer: "a",
          },
          {
            id: 3,
            context:
              "Chief Agbasi Obi was the Governorship candidate of Winners Party whilst Mr. Mike Chukwu was the candidate of the Action Party of the just concluded general elections, which took place on the 26th April, 2011. By the result declared by the Resident Electoral Commission for the state, Mr. Mike Chukwu won, having polled 260,000 votes whilst Chief Agbasi came second having polled 180,000 votes. Chief Agbasi Obi is not satisfied with the outcome of the election and intends to challenge the election on the ground that Mr. Mike Chukwu was only 34 years old as at the date of the election.",
            question: "The petition in this case must be filed latest on:",
            options: {
              a: "17th May, 2011.",
              b: "26th May, 2011.",
              c: "19th May, 2011.",
              d: "28th May, 2011.",
            },
            answer: "a",
          },
          {
            id: 4,
            context:
              "Chief Agbasi Obi was the Governorship candidate of Winners Party whilst Mr. Mike Chukwu was the candidate of the Action Party of the just concluded general elections, which took place on the 26th April, 2011. By the result declared by the Resident Electoral Commission for the state, Mr. Mike Chukwu won, having polled 260,000 votes whilst Chief Agbasi came second having polled 180,000 votes. Chief Agbasi Obi is not satisfied with the outcome of the election and intends to challenge the election on the ground that Mr. Mike Chukwu was only 34 years old as at the date of the election.",
            question:
              "Assuming the petition was filed on the 30th April, 2011, judgment in the case must be delivered latest on:",
            options: {
              a: "29th October, 2011.",
              b: "28th October, 2011.",
              c: "29th July, 2011.",
              d: "30th July, 2011.",
            },
            answer: "b",
          },
          {
            id: 5,
            context:
              "Chief Agbasi Obi was the Governorship candidate of Winners Party whilst Mr. Mike Chukwu was the candidate of the Action Party of the just concluded general elections, which took place on the 26th April, 2011. By the result declared by the Resident Electoral Commission for the state, Mr. Mike Chukwu won, having polled 260,000 votes whilst Chief Agbasi came second having polled 180,000 votes. Chief Agbasi Obi is not satisfied with the outcome of the election and intends to challenge the election on the ground that Mr. Mike Chukwu was only 34 years old as at the date of the election.",
            question:
              "At the conclusion of this case, the Tribunal can validly give any of the following judgment except one:",
            options: {
              a: "Nullifying the election of Mr. Mike Chukwu and ordering conduct of another election.",
              b: "Upholding the election of Mr. Mike Chukwu and dismissing the petition.",
              c: "Nullifying the election of Mr. Mike Chukwu and ordering that Chief Agbasi Obi be sworn in as Governor.",
              d: "Striking out the petition for failure to file same within time.",
            },
            answer: "c",
          },
          {
            id: 6,
            question:
              "An action between Lagos State and the Senate must be commenced before:",
            options: {
              a: "Supreme Court.",
              b: "Court of Appeal.",
              c: "Federal High Court.",
              d: "State High Court.",
            },
            answer: "c",
          },
          {
            id: 7,
            question:
              "When a case is adjourned for mention, on the adjourned date, any of the following can validly take place except one:",
            options: {
              a: "Hearing of interlocutory application with the consent of both parties.",
              b: "Hearing of substantive case with the consent of both parties.",
              c: "Striking out of the case for lack of readiness by claimant to proceed with the hearing of the case.",
              d: "Adjournment of the case for hearing.",
            },
            answer: "c",
          },
          {
            id: 8,
            question:
              "When a trial court holds that it lacks jurisdiction, the proper order to make is to:",
            options: {
              a: "Dismiss the case.",
              b: "Strike out the case.",
              c: "Non-suit the case.",
              d: "Order a trial de-novo.",
            },
            answer: "b",
          },
          {
            id: 9,
            question:
              "For a yearly tenant whose tenancy commenced on 1st October 2011 and whose tenancy is to be terminated in 2012, the notice to quit must be served on him latest on:",
            options: {
              a: "1st March, 2012.",
              b: "30th March, 2012.",
              c: "29th February, 2012.",
              d: "1st February, 2012.",
            },
            answer: "b",
          },
          {
            id: 10,
            question:
              "All the following orders cannot ordinarily be obtained in a proceeding for dissolution of marriage except one:",
            options: {
              a: "Maintenance of the respondent who is guilty of adultery.",
              b: "Dissolution of the marriage at the instance of a petitioner who is guilty of desertion.",
              c: "Custody of a child of the marriage who is 30 years old.",
              d: "Sharing of the assets jointly acquired by the parties to the marriage.",
            },
            answer: "c",
          },
          {
            id: 11,
            context:
              "In an application for interlocutory injunction by Mr. Emmanuel Dimka against Chief Ogidi, the trial court granted him order of injunction restraining Chief Ogidi from going onto the land the subject matter of the dispute. Although, the order was made on 10th February, 2011, the defendant (Chief Ogidi) refused to obey the order of the Court. He wants to appeal on the 20th April, 2011.",
            question: "What time limit does Chief Ogidi have to appeal?",
            options: {
              a: "14 days.",
              b: "15 days.",
              c: "90 days.",
              d: "30 days.",
            },
            answer: "a",
          },
          {
            id: 12,
            context:
              "In an application for interlocutory injunction by Mr. Emmanuel Dimka against Chief Ogidi, the trial court granted him order of injunction restraining Chief Ogidi from going onto the land the subject matter of the dispute. Although, the order was made on 10th February, 2011, the defendant (Chief Ogidi) refused to obey the order of the Court. He wants to appeal on the 20th April, 2011.",
            question:
              "Assuming the trial court refused the application for injunction, what application will you as Counsel for Mr. Emmanuel make to maintain the status quo?",
            options: {
              a: "Stay of proceedings.",
              b: "Interlocutory injunction.",
              c: "Stay of execution.",
              d: "Injunction pending appeal.",
            },
            answer: "d",
          },
          {
            id: 13,
            context:
              "In an application for interlocutory injunction by Mr. Emmanuel Dimka against Chief Ogidi, the trial court granted him order of injunction restraining Chief Ogidi from going onto the land the subject matter of the dispute. Although, the order was made on 10th February, 2011, the defendant (Chief Ogidi) refused to obey the order of the Court. He wants to appeal on the 20th April, 2011.",
            question:
              "What first process would Mr. Emmanuel require to ensure compliance with the order of the Court?",
            options: {
              a: "Form 50.",
              b: "Form 48.",
              c: "Form 30.",
              d: "Form 49.",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "In an application for interlocutory injunction by Mr. Emmanuel Dimka against Chief Ogidi, the trial court granted him order of injunction restraining Chief Ogidi from going onto the land the subject matter of the dispute. Although, the order was made on 10th February, 2011, the defendant (Chief Ogidi) refused to obey the order of the Court. He wants to appeal on the 20th April, 2011.",
            question:
              "If the time limited for appeal has expired, what application will Chief Ogidi make to Court to render the appeal competent?",
            options: {
              a: "Leave to appeal.",
              b: "Extension of time to appeal.",
              c: "Leave to appeal, extension of time to seek leave to appeal and extension of time to appeal.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 15,
            context:
              "In an application for interlocutory injunction by Mr. Emmanuel Dimka against Chief Ogidi, the trial court granted him order of injunction restraining Chief Ogidi from going onto the land the subject matter of the dispute. Although, the order was made on 10th February, 2011, the defendant (Chief Ogidi) refused to obey the order of the Court. He wants to appeal on the 20th April, 2011.",
            question:
              "If an application for stay of proceedings is refused by a trial court, within what time should a similar application be made to the Court of Appeal?",
            options: {
              a: "3 months.",
              b: "12 days.",
              c: "15 days.",
              d: "14 days.",
            },
            answer: "c",
          },
          {
            id: 16,
            context:
              "Chief Obada James bought a plot of land recently from the Ajanaku family of Ikorodu, Lagos. Shortly thereafter, some men who claimed to have been sent by Chief Dan Izu started erecting a fence on the plot, preparatory to developing the plot. Chief Obada James has consulted your Law Office to file an action against Chief Dan Izu for declaration of title to land and trespass.",
            question: "By what mode will you commence the action?",
            options: {
              a: "Originating motion.",
              b: "Originating Summons.",
              c: "Writ of Summons.",
              d: "Petition.",
            },
            answer: "c",
          },
          {
            id: 17,
            context:
              "Chief Obada James bought a plot of land recently from the Ajanaku family of Ikorodu, Lagos. Shortly thereafter, some men who claimed to have been sent by Chief Dan Izu started erecting a fence on the plot, preparatory to developing the plot. Chief Obada James has consulted your Law Office to file an action against Chief Dan Izu for declaration of title to land and trespass.",
            question:
              "All but one of the following persons is a proper person to effect service of the originating process on Chief Dan Izu:",
            options: {
              a: "Through a Special Marshal.",
              b: "Through an officer of the Court.",
              c: "Through Chief Dan Izu's Personal Assistant.",
              d: "Through a Sheriff of Court.",
            },
            answer: "c",
          },
          {
            id: 18,
            context:
              "Chief Obada James bought a plot of land recently from the Ajanaku family of Ikorodu, Lagos. Shortly thereafter, some men who claimed to have been sent by Chief Dan Izu started erecting a fence on the plot, preparatory to developing the plot. Chief Obada James has consulted your Law Office to file an action against Chief Dan Izu for declaration of title to land and trespass.",
            question:
              "If Chief Obada James wants the status quo maintained pending the determination of the suit, which of the following application should he make?",
            options: {
              a: "Interim injunction.",
              b: "Stay of proceedings.",
              c: "Stay of execution.",
              d: "Interlocutory injunction.",
            },
            answer: "d",
          },
          {
            id: 19,
            context:
              "John Mark is a tenant in the property belonging to late Ojo Ladi on a yearly tenancy which commenced on the 1st of April, 2008. After the death of Ojo Ladi, his two eldest sons are contesting over the rightful person to collect the rent. John Mark is in dilemma as to the person who has the legal right to collect rent.",
            question:
              "What step can John Mark take to avoid paying rent to the wrong person?",
            options: {
              a: "Third Party Proceedings.",
              b: "Interpleader summons.",
              c: "Garnishee proceedings.",
              d: "Anton Piller.",
            },
            answer: "b",
          },
          {
            id: 20,
            context:
              "John Mark is a tenant in the property belonging to late Ojo Ladi on a yearly tenancy which commenced on the 1st of April, 2008. After the death of Ojo Ladi, his two eldest sons are contesting over the rightful person to collect the rent. John Mark is in dilemma as to the person who has the legal right to collect rent.",
            question:
              "In order to determine the tenancy of Mr. John Mark, which of the following is the appropriate notice to be served on him?",
            options: {
              a: "A six months notice to quit expiring on 31st of March, 2009.",
              b: "A six months notice to expire on the 2nd of March, 2009.",
              c: "Six months notice to expire on the 31st of December, 2009.",
              d: "None of the above.",
            },
            answer: "a",
          },
        ],
      },

      // ========================================
      // CRIMINAL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2011-may-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Araromi Igbe was arrested in Lokoja, Kogi State for stabbing one Hassan Okoh to death with a knife. The State Ministry of Justice is considering the arraignment of the suspect to court who has been in custody for more than seven days. His family informed you that the police explained that they have been instructed to detain him because of the publicity of the case.",
            question:
              "What document should the Ministry of Justice file at the High Court?",
            options: {
              a: "Charge of culpable homicide punishable with death.",
              b: "First information report.",
              c: "Application for leave to prefer a charge.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Araromi Igbe was arrested in Lokoja, Kogi State for stabbing one Hassan Okoh to death with a knife. The State Ministry of Justice is considering the arraignment of the suspect to court who has been in custody for more than seven days. His family informed you that the police explained that they have been instructed to detain him because of the publicity of the case.",
            question: "The family should apply for bail at:",
            options: {
              a: "The High Court.",
              b: "The Magistrate Court.",
              c: "The Office of the Attorney General of the State.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 3,
            context:
              "Araromi Igbe was arrested in Lokoja, Kogi State for stabbing one Hassan Okoh to death with a knife. The State Ministry of Justice is considering the arraignment of the suspect to court who has been in custody for more than seven days. His family informed you that the police explained that they have been instructed to detain him because of the publicity of the case.",
            question:
              "When the Ministry of Justice arraigns the accused in Court he would:",
            options: {
              a: "Be entitled to an interpreter.",
              b: "Be placed in the dock without shackles.",
              c: "The charge must be read and explained to him to his satisfaction.",
              d: "Be required to plead to the charge.",
            },
            answer: "b",
          },
          {
            id: 4,
            context:
              "Araromi Igbe was arrested in Lokoja, Kogi State for stabbing one Hassan Okoh to death with a knife. The State Ministry of Justice is considering the arraignment of the suspect to court who has been in custody for more than seven days. His family informed you that the police explained that they have been instructed to detain him because of the publicity of the case.",
            question:
              "The reason given by the police for the detention of the suspect is:",
            options: {
              a: "Understandable in view of the nature of the charge.",
              b: "Unlawful.",
              c: "Would have been proper if the Police had applied to a Magistrate for the detention pending completion of investigation.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 5,
            context:
              "Araromi Igbe was arrested in Lokoja, Kogi State for stabbing one Hassan Okoh to death with a knife. The State Ministry of Justice is considering the arraignment of the suspect to court who has been in custody for more than seven days. His family informed you that the police explained that they have been instructed to detain him because of the publicity of the case.",
            question:
              "If the accused is convicted after trial he may exercise all but one of these options:",
            options: {
              a: "Appeal against the decision.",
              b: "Apply for judicial pardon.",
              c: "Apply for bail.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 6,
            question:
              "One of these is not a process to secure attendance of an accused for his trial:",
            options: {
              a: "Invitation letter by the Police.",
              b: "Arrest.",
              c: "Summons.",
              d: "Warrant of arrest.",
            },
            answer: "a",
          },
          {
            id: 7,
            question:
              "These are Courts of Criminal jurisdiction except:",
            options: {
              a: "The High Courts.",
              b: "Courts constituted under the Armed Forces Act.",
              c: "Election Tribunal.",
              d: "Magistrate Court.",
            },
            answer: "c",
          },
          {
            id: 8,
            question: "One of these is not a type of punishment:",
            options: {
              a: "Imprisonment.",
              b: "Fine.",
              c: "Compensation.",
              d: "Forfeiture.",
            },
            answer: "c",
          },
          {
            id: 9,
            question:
              "A Magistrate Court in the North may take cognizance of an offence in any of the following ways except:",
            options: {
              a: "By drafting a charge.",
              b: "Upon receipt of a first information report.",
              c: "When the Court receives information which constitutes an offence.",
              d: "Upon a complaint from any person.",
            },
            answer: "a",
          },
          {
            id: 10,
            question:
              "The case of Osahon decided that the police can prosecute matters under certain conditions before:",
            options: {
              a: "The Supreme Court.",
              b: "Court Martial.",
              c: "Court of Appeal.",
              d: "High Courts.",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "An application for leave to prefer a Charge pursuant to Section 185(b) of the Criminal Procedure Code was brought before Justice Pam of the High Court of Plateau State after the same application had earlier been refused by Justice Dung, also of the High Court of Plateau State. It was preferred against Bob Guy and Joseph Masters. At the trial in which both accused persons were represented by Counsel, Bob stated that he had already been pardoned for that particular offence by the Governor of Plateau State before his arrest. Joseph refused to plead and the trial Judge observing that his refusal to plead was out of malice ordered that he be remanded in custody until the pleasure of the Governor is known. He later discharged Bob, who was promptly re-arrested by the Police before even fully stepping out of the dock.",
            question:
              "After the Application for Leave to prefer a Charge in the High Court was refused by Justice Dung, the proper thing for the prosecutor is to:",
            options: {
              a: "Appeal to the Court of Appeal.",
              b: "File a similar application before another High Court Judge.",
              c: "Apply for Writ of Mandamus to compel Justice Dung to grant the leave.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 12,
            context:
              "An application for leave to prefer a Charge pursuant to Section 185(b) of the Criminal Procedure Code was brought before Justice Pam of the High Court of Plateau State after the same application had earlier been refused by Justice Dung, also of the High Court of Plateau State. It was preferred against Bob Guy and Joseph Masters. At the trial in which both accused persons were represented by Counsel, Bob stated that he had already been pardoned for that particular offence by the Governor of Plateau State before his arrest. Joseph refused to plead and the trial Judge observing that his refusal to plead was out of malice ordered that he be remanded in custody until the pleasure of the Governor is known. He later discharged Bob, who was promptly re-arrested by the Police before even fully stepping out of the dock.",
            question:
              "Which of the following statements is true?",
            options: {
              a: "Bob was properly pardoned by the Governor of Plateau State.",
              b: "That prior to Bob's initial arrest, he can only be granted amnesty and not pardon.",
              c: "That prior to the arrest, the Attorney General ought to have entered nolle prosequi.",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 13,
            context:
              "An application for leave to prefer a Charge pursuant to Section 185(b) of the Criminal Procedure Code was brought before Justice Pam of the High Court of Plateau State after the same application had earlier been refused by Justice Dung, also of the High Court of Plateau State. It was preferred against Bob Guy and Joseph Masters. At the trial in which both accused persons were represented by Counsel, Bob stated that he had already been pardoned for that particular offence by the Governor of Plateau State before his arrest. Joseph refused to plead and the trial Judge observing that his refusal to plead was out of malice ordered that he be remanded in custody until the pleasure of the Governor is known. He later discharged Bob, who was promptly re-arrested by the Police before even fully stepping out of the dock.",
            question:
              "When the trial Court observed that Joseph's refusal to plead was out of malice, the Court should:",
            options: {
              a: "Have properly ordered that he be remanded until the Governor's pleasure is known.",
              b: "Ought to have enquired whether he could follow the proceedings by use of sign language.",
              c: "Ought to have entered a plea of not guilty for him and proceeded with the trial.",
              d: "Should have called upon him to open his defence.",
            },
            answer: "c",
          },
          {
            id: 14,
            context:
              "An application for leave to prefer a Charge pursuant to Section 185(b) of the Criminal Procedure Code was brought before Justice Pam of the High Court of Plateau State after the same application had earlier been refused by Justice Dung, also of the High Court of Plateau State. It was preferred against Bob Guy and Joseph Masters. At the trial in which both accused persons were represented by Counsel, Bob stated that he had already been pardoned for that particular offence by the Governor of Plateau State before his arrest. Joseph refused to plead and the trial Judge observing that his refusal to plead was out of malice ordered that he be remanded in custody until the pleasure of the Governor is known. He later discharged Bob, who was promptly re-arrested by the Police before even fully stepping out of the dock.",
            question:
              "In which of these places can a proper arrest be made?",
            options: {
              a: "In a courtroom where court is sitting.",
              b: "In a Legislative House where no permission of the Senate President or Speaker had been sought and obtained.",
              c: "Inside a Church.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 15,
            context:
              "An application for leave to prefer a Charge pursuant to Section 185(b) of the Criminal Procedure Code was brought before Justice Pam of the High Court of Plateau State after the same application had earlier been refused by Justice Dung, also of the High Court of Plateau State. It was preferred against Bob Guy and Joseph Masters. At the trial in which both accused persons were represented by Counsel, Bob stated that he had already been pardoned for that particular offence by the Governor of Plateau State before his arrest. Joseph refused to plead and the trial Judge observing that his refusal to plead was out of malice ordered that he be remanded in custody until the pleasure of the Governor is known. He later discharged Bob, who was promptly re-arrested by the Police before even fully stepping out of the dock.",
            question:
              "Which of these statements is true?",
            options: {
              a: "The police can still charge Bob for theft.",
              b: "Bob can successfully plead autrefois acquit in the subsequent trial.",
              c: "If Bob is subsequently convicted, his conviction will be set aside on appeal due to unlawful arrest.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 16,
            context:
              "At the trial of James Roberson at the Senior Magistrate Court Apapa, Lagos for stealing and rape of one Miss Abalaka, the two offences were stated in count one and read to him. He pleaded not guilty to it. At the end of the trial, the accused was discharged and acquitted of the offences. Miss Abalaka appealed against the decision.",
            question: "The charge is bad for offending:",
            options: {
              a: "The rule against misjoinder of offences.",
              b: "The rule against ambiguity.",
              c: "The rule against duplicity.",
              d: "The rule against misjoinder of offenders.",
            },
            answer: "c",
          },
          {
            id: 17,
            context:
              "At the trial of James Roberson at the Senior Magistrate Court Apapa, Lagos for stealing and rape of one Miss Abalaka, the two offences were stated in count one and read to him. He pleaded not guilty to it. At the end of the trial, the accused was discharged and acquitted of the offences. Miss Abalaka appealed against the decision.",
            question:
              "Miss Abalaka does not have right of appeal against the decision because:",
            options: {
              a: "She is not the accused.",
              b: "She is not the prosecutor.",
              c: "She is the victim.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 18,
            question:
              "One of the following is the basic qualification of an interpreter in Court:",
            options: {
              a: "Must be bold.",
              b: "Must be competent enough.",
              c: "Must be knowledgeable in law.",
              d: "Must be of the same tribe with the accused person.",
            },
            answer: "b",
          },
          {
            id: 19,
            context:
              "Assuming Colonel Badmus was tried and convicted by the Court martial for rape and stealing and was sentenced accordingly:",
            question:
              "Which of the following sentences is correct?",
            options: {
              a: "He can still be tried for the offences by the High Court.",
              b: "He cannot be tried again by any Court of Law.",
              c: "He can only be tried by the High Court upon leave of the President of the Court martial.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 20,
            question: "All but one of the following is untrue:",
            options: {
              a: "By the Magistrates' Court Law of Lagos State 2009, all grades of Magistrates now have equal powers.",
              b: "Only Grade 3 Magistrate Court try capital offences.",
              c: "Magistracy cadre is abolished.",
              d: "The highest punishment a Magistrate can impose is 20 years imprisonment.",
            },
            answer: "a",
          },
        ],
      },

      // ========================================
      // CORPORATE LAW (20 Questions)
      // ========================================
      {
        id: "2011-may-corporate-law",
        name: "Corporate Law",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Farouk Okon (33), Ayo Emeka (34) and Tersu Oche (35) studied Law at the Federal Capital University, Abuja and were recently admitted to the Nigerian Bar, having successfully completed the Law School Programme. Having been exempted from the NYSC programme, they have applied for accreditation at the Corporate Affairs Commission and the Securities and Exchange Commission respectively, two months after their Call to Bar. They also intend to execute a partnership agreement towards setting up a joint legal practice under a name that will not require registration under Part B of the Companies and Allied Matters Act Cap C20 LFN 2004.",
            question:
              "Which of the following document is not required for the accreditation of the intending partners?",
            options: {
              a: "2 Passport photographs.",
              b: "NYSC Letter of Exemption.",
              c: "Original LL.B Degree Certificate.",
              d: "Photocopy of Call to Bar Certificate.",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Farouk Okon (33), Ayo Emeka (34) and Tersu Oche (35) studied Law at the Federal Capital University, Abuja and were recently admitted to the Nigerian Bar, having successfully completed the Law School Programme. Having been exempted from the NYSC programme, they have applied for accreditation at the Corporate Affairs Commission and the Securities and Exchange Commission respectively, two months after their Call to Bar. They also intend to execute a partnership agreement towards setting up a joint legal practice under a name that will not require registration under Part B of the Companies and Allied Matters Act Cap C20 LFN 2004.",
            question:
              "The Partners above will be refused accreditation at SEC because:",
            options: {
              a: "SEC accredits only individual professionals.",
              b: "It is impossible for them to obtain Police security report.",
              c: "SEC does not accredit Solicitors.",
              d: "They are below 5 years Post-call.",
            },
            answer: "d",
          },
          {
            id: 3,
            context:
              "Farouk Okon (33), Ayo Emeka (34) and Tersu Oche (35) studied Law at the Federal Capital University, Abuja and were recently admitted to the Nigerian Bar, having successfully completed the Law School Programme. Having been exempted from the NYSC programme, they have applied for accreditation at the Corporate Affairs Commission and the Securities and Exchange Commission respectively, two months after their Call to Bar. They also intend to execute a partnership agreement towards setting up a joint legal practice under a name that will not require registration under Part B of the Companies and Allied Matters Act Cap C20 LFN 2004.",
            question:
              "Which of the following names will require registration if used by the Partners?",
            options: {
              a: "Farouk Okon, Ayo Emeka and Tersu Oche.",
              b: "F. Okon, A. Emeka, T. Oche and Associates.",
              c: "F. Okon, A. Emeka and T. Oche.",
              d: "Okon, Emeka and Oche.",
            },
            answer: "b",
          },
          {
            id: 4,
            context:
              "Farouk Okon (33), Ayo Emeka (34) and Tersu Oche (35) studied Law at the Federal Capital University, Abuja and were recently admitted to the Nigerian Bar, having successfully completed the Law School Programme. Having been exempted from the NYSC programme, they have applied for accreditation at the Corporate Affairs Commission and the Securities and Exchange Commission respectively, two months after their Call to Bar. They also intend to execute a partnership agreement towards setting up a joint legal practice under a name that will not require registration under Part B of the Companies and Allied Matters Act Cap C20 LFN 2004.",
            question:
              "The Partners in this scenario will require accreditation in respect of:",
            options: {
              a: "Parts A and B of CAMA.",
              b: "Parts B and C of CAMA.",
              c: "Part A of CAMA.",
              d: "Parts A and C of CAMA.",
            },
            answer: "c",
          },
          {
            id: 5,
            context:
              "Farouk Okon (33), Ayo Emeka (34) and Tersu Oche (35) studied Law at the Federal Capital University, Abuja and were recently admitted to the Nigerian Bar, having successfully completed the Law School Programme. Having been exempted from the NYSC programme, they have applied for accreditation at the Corporate Affairs Commission and the Securities and Exchange Commission respectively, two months after their Call to Bar. They also intend to execute a partnership agreement towards setting up a joint legal practice under a name that will not require registration under Part B of the Companies and Allied Matters Act Cap C20 LFN 2004.",
            question:
              "Assuming the Partners opted for a registrable name of their legal practice, the following forms must be duly completed and filed:",
            options: {
              a: "Form CAC 1 and BN Form 1.",
              b: "Form CAC 1 and BN Form 2.",
              c: "Form CAC 1 and CAC Form 2.",
              d: "Form CAC 1 and CAC Form 3.",
            },
            answer: "a",
          },
          {
            id: 6,
            context:
              "Anasco Nigeria Limited was incorporated on 1st April, 2009. At the 2nd Board of Directors Meeting, the Chairman, Chief Oyin Udo did not arrive until 2 hours after the time the meeting was scheduled to commence. Three (3) of the six (6) directors passed a resolution appointing Mr. Okey Hassan to chair the Board Meeting of that day.",
            question:
              "When is the 1st Board of Directors Meeting of the company supposed to be held?",
            options: {
              a: "12 months after the incorporation of the Company.",
              b: "6 months after the incorporation of the company.",
              c: "15 months after incorporation of the Company.",
              d: "18 months after the incorporation of the company.",
            },
            answer: "b",
          },
          {
            id: 7,
            context:
              "Anasco Nigeria Limited was incorporated on 1st April, 2009. At the 2nd Board of Directors Meeting, the Chairman, Chief Oyin Udo did not arrive until 2 hours after the time the meeting was scheduled to commence. Three (3) of the six (6) directors passed a resolution appointing Mr. Okey Hassan to chair the Board Meeting of that day.",
            question:
              "If the Chairman of the Board of Directors is not present within _____ after the time appointed for the holding of Board of Directors Meeting, the directors present may choose one of their number to be Chairman of the meeting:",
            options: {
              a: "5 minutes.",
              b: "15 minutes.",
              c: "1 hour.",
              d: "30 minutes.",
            },
            answer: "a",
          },
          {
            id: 8,
            context:
              "The object clause of En-Quary Company Limited is to extract solid minerals in any available mining fields. Its mining licence has been revoked by the Federal Ministry of Solid Minerals, and the Directors have been warned to stop further illegal mining activities. The Company is considering a range of options, either to change its object clause or wind up voluntarily or even merge with another company with operating licence.",
            question:
              "Assuming the company decides to pass a resolution to alter its object clause, one of these persons would not be notified:",
            options: {
              a: "Shareholder.",
              b: "Debenture Holder.",
              c: "Any person financially interested in the Company.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 9,
            context:
              "The object clause of En-Quary Company Limited is to extract solid minerals in any available mining fields. Its mining licence has been revoked by the Federal Ministry of Solid Minerals, and the Directors have been warned to stop further illegal mining activities. The Company is considering a range of options, either to change its object clause or wind up voluntarily or even merge with another company with operating licence.",
            question:
              "One of the following persons cannot validly oppose any Resolution for alteration of the company's object clause:",
            options: {
              a: "Minority members with at least 15% of the paid up shares who neither voted for nor supported the resolution.",
              b: "Debenture holders secured by floating charge who are not in support of the resolution.",
              c: "Corporate Affairs Commission.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 10,
            context:
              "The object clause of En-Quary Company Limited is to extract solid minerals in any available mining fields. Its mining licence has been revoked by the Federal Ministry of Solid Minerals, and the Directors have been warned to stop further illegal mining activities. The Company is considering a range of options, either to change its object clause or wind up voluntarily or even merge with another company with operating licence.",
            question:
              "Any objection to oppose the Resolution for alteration of the Company's object must be filed in the Court within:",
            options: {
              a: "14 days after the date of passing the Resolution.",
              b: "21 days after the date of passing the Resolution.",
              c: "28 days after the date of passing the Resolution.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 11,
            context:
              "The object clause of En-Quary Company Limited is to extract solid minerals in any available mining fields. Its mining licence has been revoked by the Federal Ministry of Solid Minerals, and the Directors have been warned to stop further illegal mining activities. The Company is considering a range of options, either to change its object clause or wind up voluntarily or even merge with another company with operating licence.",
            question:
              "Assuming the company decides to wind up voluntarily, one of the following documents would not be necessary:",
            options: {
              a: "Declaration of solvency.",
              b: "Statement of Assets and Liabilities.",
              c: "Copy of resolution at a general meeting.",
              d: "Class Resolutions.",
            },
            answer: "d",
          },
          {
            id: 12,
            context:
              "Adago Smith owns a lot of shares in several companies listed at the stock exchange. Her Stockbroker — Kolade manages the shares purchased and sells on her behalf.",
            question:
              "Assuming she has unresolved dispute with her stockbroker over accounts of the transactions, she would under the Investments and Securities Act lay her complaints at:",
            options: {
              a: "Nigerian Stock Exchange.",
              b: "Investments and Securities Tribunal.",
              c: "Securities and Exchange Commission.",
              d: "Federal High Court.",
            },
            answer: "c",
          },
          {
            id: 13,
            context:
              "Adago Smith owns a lot of shares in several companies listed at the stock exchange. Her Stockbroker — Kolade manages the shares purchased and sells on her behalf.",
            question:
              "If a decision was reached in her favour but Kolade refuses to comply with the directive, where would she institute a fresh action against Kolade under the Investment and Securities Act?",
            options: {
              a: "Federal High Court.",
              b: "National Industrial Court.",
              c: "Investments and Securities Tribunal.",
              d: "Economic and Financial Crimes Commission.",
            },
            answer: "c",
          },
          {
            id: 14,
            context:
              "Adago Smith owns a lot of shares in several companies listed at the stock exchange. Her Stockbroker — Kolade manages the shares purchased and sells on her behalf.",
            question:
              "If she is dissatisfied with the decision after the action, in which Court would she file her Appeal?",
            options: {
              a: "Federal High Court.",
              b: "High Court of a State.",
              c: "Court of Appeal.",
              d: "Administrative Panel of the Securities and Exchange Commission.",
            },
            answer: "c",
          },
          {
            id: 15,
            context:
              "Adago Smith owns a lot of shares in several companies listed at the stock exchange. Her Stockbroker — Kolade manages the shares purchased and sells on her behalf.",
            question:
              "Assuming she obtained judgment against Kolade, in which Court should she enforce the judgment?",
            options: {
              a: "Investments and Securities Tribunal.",
              b: "Federal High Court.",
              c: "State High Court.",
              d: "National Industrial Court.",
            },
            answer: "b",
          },
          {
            id: 16,
            context:
              "Ohanezecom (Nig.) Plc and Arewacom (Nig.) Plc are two of the newly licensed telecom service providers in Nigeria. With a combined network of N490 million, the two companies have concluded a merger arrangement in view of the threats from older telecommunication companies operating in Nigeria. They have secured the consent of the Corporate Affairs Commission (CAC) to use the name Oharewacom (Nig.) Plc. They have also secured a N1 Billion loan from a consortium of Niger Delta Bank (Nig.) Plc; Oodua Bank (Nig.) Plc and Middle Belt Bank (Nig.) Plc. The loan is secured by a fixed charge on the proposed Corporate Headquarters at No. 1, Ring Road, Enugu, Enugu State.",
            question:
              "The merger of Ohanezecom (Nig) Plc and Arewacom (Nig.) Plc is in the ______ category by virtue of Section 120 of the ISA 2007:",
            options: {
              a: "Small.",
              b: "Intermediate.",
              c: "Large.",
              d: "Mega.",
            },
            answer: "a",
          },
          {
            id: 17,
            context:
              "Ohanezecom (Nig.) Plc and Arewacom (Nig.) Plc are two of the newly licensed telecom service providers in Nigeria. With a combined network of N490 million, the two companies have concluded a merger arrangement in view of the threats from older telecommunication companies operating in Nigeria. They have secured the consent of the Corporate Affairs Commission (CAC) to use the name Oharewacom (Nig.) Plc. They have also secured a N1 Billion loan from a consortium of Niger Delta Bank (Nig.) Plc; Oodua Bank (Nig.) Plc and Middle Belt Bank (Nig.) Plc. The loan is secured by a fixed charge on the proposed Corporate Headquarters at No. 1, Ring Road, Enugu, Enugu State.",
            question:
              "The merger of the two companies is an example of:",
            options: {
              a: "Horizontal merger.",
              b: "Vertical merger.",
              c: "Conglomerate merger.",
              d: "Pure conglomerate merger.",
            },
            answer: "a",
          },
          {
            id: 18,
            context:
              "Ohanezecom (Nig.) Plc and Arewacom (Nig.) Plc are two of the newly licensed telecom service providers in Nigeria. With a combined network of N490 million, the two companies have concluded a merger arrangement in view of the threats from older telecommunication companies operating in Nigeria. They have secured the consent of the Corporate Affairs Commission (CAC) to use the name Oharewacom (Nig.) Plc. They have also secured a N1 Billion loan from a consortium of Niger Delta Bank (Nig.) Plc; Oodua Bank (Nig.) Plc and Middle Belt Bank (Nig.) Plc. The loan is secured by a fixed charge on the proposed Corporate Headquarters at No. 1, Ring Road, Enugu, Enugu State.",
            question:
              "The fixed charge securing the loan must be registered at _____ and _____:",
            options: {
              a: "AGIS Abuja and CAC Abuja.",
              b: "Enugu Land Registry and CAC Abuja.",
              c: "Port-Harcourt Land Registry and CAC Abuja.",
              d: "Lagos Land Registry and CAC Abuja.",
            },
            answer: "b",
          },
          {
            id: 19,
            context:
              "Ohanezecom (Nig.) Plc and Arewacom (Nig.) Plc are two of the newly licensed telecom service providers in Nigeria. With a combined network of N490 million, the two companies have concluded a merger arrangement in view of the threats from older telecommunication companies operating in Nigeria. They have secured the consent of the Corporate Affairs Commission (CAC) to use the name Oharewacom (Nig.) Plc. They have also secured a N1 Billion loan from a consortium of Niger Delta Bank (Nig.) Plc; Oodua Bank (Nig.) Plc and Middle Belt Bank (Nig.) Plc. The loan is secured by a fixed charge on the proposed Corporate Headquarters at No. 1, Ring Road, Enugu, Enugu State.",
            question:
              "The fixed charge will be registered at the Corporate Affairs Commission using _____ within _____:",
            options: {
              a: "CAC Form 8 within 90 days.",
              b: "CAC Form 9 within 90 days.",
              c: "CAC Form 8 within 60 days.",
              d: "CAC Form 9 within 3 months.",
            },
            answer: "a",
          },
          {
            id: 20,
            context:
              "Ohanezecom (Nig.) Plc and Arewacom (Nig.) Plc are two of the newly licensed telecom service providers in Nigeria. With a combined network of N490 million, the two companies have concluded a merger arrangement in view of the threats from older telecommunication companies operating in Nigeria. They have secured the consent of the Corporate Affairs Commission (CAC) to use the name Oharewacom (Nig.) Plc. They have also secured a N1 Billion loan from a consortium of Niger Delta Bank (Nig.) Plc; Oodua Bank (Nig.) Plc and Middle Belt Bank (Nig.) Plc. The loan is secured by a fixed charge on the proposed Corporate Headquarters at No. 1, Ring Road, Enugu, Enugu State.",
            question:
              "Which of the following is not a consequence of non-registration of the fixed charge in this scenario as prescribed by Section 197 of CAMA?",
            options: {
              a: "The loan is not binding on the Company's Liquidator and other creditors.",
              b: "The company is relieved from obligation to repay the loan.",
              c: "The company is not relieved from obligation to repay the loan.",
              d: "None of the above.",
            },
            answer: "b",
          },
        ],
      },

      // ========================================
      // PROPERTY LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2011-may-property-law",
        name: "Property Law",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Mr. Eno Ibok has agreed to the sale of a plot of land covered by a certificate of occupancy dated 5th February 1999 and registered as 15/15/555 at the Lands registry, Calabar, Cross River State. The Buyer is Mr. Bassey Bassey. The consideration is N25 million.",
            question:
              "It is advisable for the parties to enter into a contract first for the following reason except:",
            options: {
              a: "To enable the purchaser investigate the title.",
              b: "The vendor cannot increase the price arbitrarily.",
              c: "Death of either party cannot affect the transaction.",
              d: "It makes the transaction slow.",
            },
            answer: "d",
          },
          {
            id: 2,
            context:
              "Mr. Eno Ibok has agreed to the sale of a plot of land covered by a certificate of occupancy dated 5th February 1999 and registered as 15/15/555 at the Lands registry, Calabar, Cross River State. The Buyer is Mr. Bassey Bassey. The consideration is N25 million.",
            question:
              "Where Mr. Eno Ibok is an illiterate, it will be necessary to include _____ in the agreement:",
            options: {
              a: "An illiterate Juror.",
              b: "An illiterate Jurat.",
              c: "An illiterate Jade.",
              d: "An illiterate Assignor.",
            },
            answer: "b",
          },
          {
            id: 3,
            context:
              "Mr. Eno Ibok has agreed to the sale of a plot of land covered by a certificate of occupancy dated 5th February 1999 and registered as 15/15/555 at the Lands registry, Calabar, Cross River State. The Buyer is Mr. Bassey Bassey. The consideration is N25 million.",
            question:
              "Assuming Mr. Ibok is only selling part of his property, he will need to give the purchaser:",
            options: {
              a: "An indemnity clause.",
              b: "An undertaking for safe custody and acknowledgment clause.",
              c: "An irrevocable power of attorney.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 4,
            context:
              "Mr. Eno Ibok has agreed to the sale of a plot of land covered by a certificate of occupancy dated 5th February 1999 and registered as 15/15/555 at the Lands registry, Calabar, Cross River State. The Buyer is Mr. Bassey Bassey. The consideration is N25 million.",
            question:
              "Assuming Mr. Ibok dies without making provision for his estate:",
            options: {
              a: "His estate will be deemed to be forfeited.",
              b: "His executor will apply for probate.",
              c: "His Attorney General will take over his estate.",
              d: "His personal representatives will make an application regarding his estate.",
            },
            answer: "d",
          },
          {
            id: 5,
            context:
              "Mr. Eno Ibok has agreed to the sale of a plot of land covered by a certificate of occupancy dated 5th February 1999 and registered as 15/15/555 at the Lands registry, Calabar, Cross River State. The Buyer is Mr. Bassey Bassey. The consideration is N25 million.",
            question:
              "The final agreement between Mr. Ibok and Mr. Bassey will be prepared by:",
            options: {
              a: "Any Legal Practitioner.",
              b: "Mr. Ibok's Legal Practitioner.",
              c: "Mr. Bassey's Legal Practitioner.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 6,
            question:
              "The following include some specific types of property transactions and dealings in Nigeria except:",
            options: {
              a: "Pledge of Land.",
              b: "Leases.",
              c: "Licensed squatting.",
              d: "Donation of power to deal with land.",
            },
            answer: "c",
          },
          {
            id: 7,
            question:
              "Persons who carry out the wishes of deceased persons are:",
            options: {
              a: "Vendors.",
              b: "Mortgagors.",
              c: "Licensors.",
              d: "Personal Representatives.",
            },
            answer: "d",
          },
          {
            id: 8,
            question:
              "Nigerian Legislation, enacted by either the States or the Federal Government regulates property transactions. Some of these legislation include the following except:",
            options: {
              a: "Administration of Estate Laws.",
              b: "Illiterate Protection Laws.",
              c: "Companies and Allied Matters Act.",
              d: "Nigerian Pensions Scheme Ordinance.",
            },
            answer: "d",
          },
          {
            id: 9,
            context:
              "Chief George exchanged a contract of sale of land with Obode. Obode, the purchaser paid a deposit of N5 million to Chief George after the exchange of contract. The Chief allowed Obode to occupy the property after exchange of contract. The contract was to be completed within three months following the exchange of contract.",
            question:
              "Exchange of contract gives to the Purchaser one of the following titles:",
            options: {
              a: "Legal title.",
              b: "Legal and equitable title.",
              c: "Equitable title.",
              d: "Unexpired term of the Vendor.",
            },
            answer: "c",
          },
          {
            id: 10,
            context:
              "Chief George exchanged a contract of sale of land with Obode. Obode, the purchaser paid a deposit of N5 million to Chief George after the exchange of contract. The Chief allowed Obode to occupy the property after exchange of contract. The contract was to be completed within three months following the exchange of contract.",
            question:
              "When an independent party receives the deposit on behalf of George and Obode, the independent party is known as:",
            options: {
              a: "An agent.",
              b: "Stakeholder.",
              c: "A trustee.",
              d: "A banker.",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "Chief George exchanged a contract of sale of land with Obode. Obode, the purchaser paid a deposit of N5 million to Chief George after the exchange of contract. The Chief allowed Obode to occupy the property after exchange of contract. The contract was to be completed within three months following the exchange of contract.",
            question:
              "It is more advantageous for Chief George that Obode occupies the property after exchange of contract as one of the following:",
            options: {
              a: "Licensee.",
              b: "Tenant.",
              c: "Landlord.",
              d: "Stakeholder.",
            },
            answer: "a",
          },
          {
            id: 12,
            context:
              "Chief George exchanged a contract of sale of land with Obode. Obode, the purchaser paid a deposit of N5 million to Chief George after the exchange of contract. The Chief allowed Obode to occupy the property after exchange of contract. The contract was to be completed within three months following the exchange of contract.",
            question:
              "One of the following is a consequence of Obode not completing the contract within the three months:",
            options: {
              a: "Obode will be commuted.",
              b: "Obode will be required to secure Governor's consent.",
              c: "He will act as a stakeholder.",
              d: "He may pay interest on the balance of the purchase money.",
            },
            answer: "d",
          },
          {
            id: 13,
            context:
              "Mr. Israel Sani got a loan of N100 million in 1999 from Unity Bank PLC using his twin Duplex situate at No. 5 River Lane, Asokoro Abuja, as security. The twin Duplex is worth N300 million considering the current market value as at 1999. In 2009, Mr. Israel Sani got additional loan of N120 million from Unity Bank to enable him finance the political party he identified with.",
            question: "Which of the following is correct?",
            options: {
              a: "Mr. Israel lacks capacity to obtain additional loan using the same security.",
              b: "Mr. Israel could take additional loan on the same terms and conditions as the previous loan.",
              c: "Mr. Israel could only take such additional loan on different terms and conditions.",
              d: "None is applicable.",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "Mr. Israel Sani got a loan of N100 million in 1999 from Unity Bank PLC using his twin Duplex situate at No. 5 River Lane, Asokoro Abuja, as security. The twin Duplex is worth N300 million considering the current market value as at 1999. In 2009, Mr. Israel Sani got additional loan of N120 million from Unity Bank to enable him finance the political party he identified with.",
            question: "Which of the following is correct?",
            options: {
              a: "Mr. Israel needed FCT Minister's consent regarding the additional loan.",
              b: "The Bank needed to conduct a separate search on the property used as security.",
              c: "All that would be required is up-stamping regarding the additional loan.",
              d: "Mr. Israel ought to have engaged a different Solicitor to act on his behalf in respect of the second loan.",
            },
            answer: "c",
          },
          {
            id: 15,
            question:
              "Once a mortgage always a mortgage implies all but one of the following:",
            options: {
              a: "Upon the expiration of the legal right to redeem, the equitable right to redeem continues.",
              b: "The right to redeem cannot be taken away by express agreement.",
              c: "The mortgagor's equity of redemption is not extinguished by sale or foreclosure.",
              d: "Any clause or clog in a mortgage against redemption is void.",
            },
            answer: "c",
          },
          {
            id: 16,
            question:
              "Which of the following does not occur at the completion stage in conveyance of land?",
            options: {
              a: "Exchange of contract of sale.",
              b: "Execution of a formal conveyance.",
              c: "Handing over of title documents.",
              d: "Payment of balance of purchase price.",
            },
            answer: "a",
          },
          {
            id: 17,
            question:
              "A legal mortgage can be created in all but one of the following ways:",
            options: {
              a: "Demise for a term of years absolute.",
              b: "Completing and registering Form 8.",
              c: "Sublease at least one day shorter than term of original lease.",
              d: "Assignment of unexpired interest in land.",
            },
            answer: "b",
          },
          {
            id: 18,
            context:
              "Tella Dauda is one of the personal representatives of Mrs. Ola Joseph deceased whose will has been read and all the personal Representatives given a copy of the will.",
            question:
              "What will Tella Dauda need to do if she does not want to be part of Ola Joseph's estate?",
            options: {
              a: "File a renunciation form.",
              b: "File a Form 1C.",
              c: "File Form 15.",
              d: "File a Caveat.",
            },
            answer: "a",
          },
          {
            id: 19,
            context:
              "Tella Dauda is one of the personal representatives of Mrs. Ola Joseph deceased whose will has been read and all the personal Representatives given a copy of the will.",
            question:
              "One of the following is not a duty of personal representatives:",
            options: {
              a: "Arrange for burial of the deceased testator.",
              b: "Apply for probate of his estate.",
              c: "Open a school in her village.",
              d: "Give account of their representation.",
            },
            answer: "c",
          },
          {
            id: 20,
            context:
              "Tella Dauda is one of the personal representatives of Mrs. Ola Joseph deceased whose will has been read and all the personal Representatives given a copy of the will.",
            question:
              "Where an application for probate is contested it is called:",
            options: {
              a: "Grant in usual form.",
              b: "Grant in solemn form.",
              c: "Grant in common form.",
              d: "Grant in common law.",
            },
            answer: "b",
          },
        ],
      },

      // ========================================
      // PROFESSIONAL ETHICS & SKILLS (20 Questions)
      // (formerly "Law in Practice")
      // ========================================
      {
        id: "2011-may-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            question:
              "In Nigeria where parties to an arbitration agreement fail to specify the number of arbitrators, the arbitrators to be appointed shall be deemed to be:",
            options: {
              a: "One.",
              b: "Two.",
              c: "Three.",
              d: "Six.",
            },
            answer: "c",
          },
          {
            id: 2,
            question:
              "The Convention on the Recognition and Enforcement of Foreign Arbitral Awards is otherwise known as:",
            options: {
              a: "Geneva Convention.",
              b: "New York Convention.",
              c: "Lome Convention.",
              d: "Paris Convention.",
            },
            answer: "b",
          },
          {
            id: 3,
            question:
              "Nigeria acceded to the provisions of the Convention on the Recognition of Enforcement of Foreign Arbitral Awards in the year:",
            options: {
              a: "1958.",
              b: "1970.",
              c: "1988.",
              d: "1990.",
            },
            answer: "b",
          },
          {
            id: 4,
            question:
              "A party dissatisfied with an arbitral award may apply for setting aside the award within:",
            options: {
              a: "Fifteen days of the award.",
              b: "One month of the award.",
              c: "Two months of the award.",
              d: "Three months of the award.",
            },
            answer: "d",
          },
          {
            id: 5,
            question:
              "A judicial officer, who retired shall not:",
            options: {
              a: "Use the name Justice.",
              b: "Sign legal agreements nor prepare same.",
              c: "Register a law firm.",
              d: "Practice as an Advocate in any court.",
            },
            answer: "d",
          },
          {
            id: 6,
            question:
              "A charge before a Magistrate court that has no jurisdiction to entertain it is called:",
            options: {
              a: "A higher charge.",
              b: "A bogus charge.",
              c: "A holding charge.",
              d: "An ineffective charge.",
            },
            answer: "c",
          },
          {
            id: 7,
            question:
              "The National Industrial Court is a court of co-ordinate jurisdiction with the:",
            options: {
              a: "Supreme Court.",
              b: "Federal High Court.",
              c: "Sharia Customary Court of Appeal.",
              d: "Court of Appeal.",
            },
            answer: "b",
          },
          {
            id: 8,
            question: "A lawyer who is enrolled in October 2010 should:",
            options: {
              a: "Wait until January 2011 before payment of his professional fees.",
              b: "Not pay his Annual practicing fee that year.",
              c: "Wait until he is one year at the bar before payment.",
              d: "Pay the fees within one month of his enrollment at the Bar.",
            },
            answer: "d",
          },
          {
            id: 9,
            context:
              "Mr. Smart Deco is a Legal Practitioner who has been arraigned before the Legal Practitioners Disciplinary Committee for misappropriating N5 million belonging to his client.",
            question:
              "What is the appropriate quorum of the Disciplinary Committee?",
            options: {
              a: "Five.",
              b: "Six.",
              c: "Twelve.",
              d: "Two.",
            },
            answer: "a",
          },
          {
            id: 10,
            context:
              "Mr. Smart Deco is a Legal Practitioner who has been arraigned before the Legal Practitioners Disciplinary Committee for misappropriating N5 million belonging to his client.",
            question:
              "Assuming the Disciplinary Committee makes a finding against Mr. Smart, what is the time within which Mr. Smart can file appeal against the decision of the Committee?",
            options: {
              a: "28 days from the date he was served a copy of the decision.",
              b: "28 days from the date the decision was made.",
              c: "30 days from the date he was served a copy of the decision.",
              d: "30 days from the date of the decision.",
            },
            answer: "a",
          },
          {
            id: 11,
            question:
              "After you have accepted a brief and conducted an interview with the client, why is it usual in practice to write a letter to that client?",
            options: {
              a: "To request for additional information.",
              b: "To inform the client of his fee.",
              c: "To confirm instructions before proceeding.",
              d: "To terminate the brief.",
            },
            answer: "c",
          },
          {
            id: 12,
            question:
              "All but one of the following statements are incorrect:",
            options: {
              a: "Only a legal practitioner can prepare all instruments for fee, gain or reward.",
              b: "Only a legal practitioner can represent a client in court as an agent.",
              c: "Only a legal practitioner can prepare instruments relating to immovable properties for fee, gain or reward.",
              d: "Only a legal practitioner can incorporate companies under Companies and Allied Matters Act.",
            },
            answer: "c",
          },
          {
            id: 13,
            question:
              "The rules of professional conduct for legal practitioners was made by:",
            options: {
              a: "Attorney General of the Federation.",
              b: "Solicitor General of the Federation.",
              c: "The Body of Benchers.",
              d: "General Council of the Bar.",
            },
            answer: "d",
          },
          {
            id: 14,
            question:
              "All but one of the following has the exclusive right to sit at the inner bar or the front row of seats available for legal practitioners:",
            options: {
              a: "Attorney General of the Federation, Attorney General of States, Solicitor General of the Federation.",
              b: "Solicitor General of the Federation, Senior Advocate of Nigeria, Life Members of the Body of Benchers.",
              c: "Attorney General of the Federation, Attorney General of States, Senior Advocates of Nigeria.",
              d: "Attorney General of the Federation, Attorney General of States, Members of Body of Benchers.",
            },
            answer: "d",
          },
          {
            id: 15,
            question:
              "The Legal Practitioners (Remuneration for legal documentation and other land matters) order, 1991 was made by:",
            options: {
              a: "General Council of the Bar.",
              b: "Legal Practitioners Accounts and Rules Committee.",
              c: "Ethics and Privileges Committee.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 16,
            context:
              "Jide Jones, an aspirant to the Nigerian Bar has approached a Bencher to sponsor him to the Bar. To test his academic suitability, the Honourable Bencher posed the following questions to him.",
            question:
              "Which of these is not a dereliction of duty to the profession by counsel?",
            options: {
              a: "Instigating litigation directly or indirectly.",
              b: "Searching of land titles for defects.",
              c: "Counseling agents and other persons to follow up on accidents with intention to have employment.",
              d: "Giving of proper advice to those seeking relief against unfaithful and neglectful counsel.",
            },
            answer: "d",
          },
          {
            id: 17,
            context:
              "Jide Jones, an aspirant to the Nigerian Bar has approached a Bencher to sponsor him to the Bar. To test his academic suitability, the Honourable Bencher posed the following questions to him.",
            question:
              "Which of the following is not a reason for counsel to be punctual to court?",
            options: {
              a: "The need to have settled down before court sits.",
              b: "The need to wait for the court and not the reverse.",
              c: "The need for counsel to get familiar with court procedures and witnesses before the court sits.",
              d: "The need to get acquainted with the court clerk and registrar.",
            },
            answer: "d",
          },
          {
            id: 18,
            context:
              "Jide Jones, an aspirant to the Nigerian Bar has approached a Bencher to sponsor him to the Bar. To test his academic suitability, the Honourable Bencher posed the following questions to him.",
            question:
              "The case of Oyekanmi V. NEPA (2000) 12 SCNJ.75 is an authority on:",
            options: {
              a: "The cashbook account.",
              b: "The ledger account.",
              c: "Recovery of professional fees.",
              d: "Fees for Executor.",
            },
            answer: "c",
          },
          {
            id: 19,
            context:
              "Jide Jones, an aspirant to the Nigerian Bar has approached a Bencher to sponsor him to the Bar. To test his academic suitability, the Honourable Bencher posed the following questions to him.",
            question:
              "The decision in Bello Raji V. X (A legal practitioner) best illustrates the need for a legal practitioner to possess the quality and requisite ability for:",
            options: {
              a: "Hard work and determination.",
              b: "Commitment.",
              c: "Knowledge and skill.",
              d: "Honesty and integrity.",
            },
            answer: "c",
          },
          {
            id: 20,
            context:
              "Jide Jones, an aspirant to the Nigerian Bar has approached a Bencher to sponsor him to the Bar. To test his academic suitability, the Honourable Bencher posed the following questions to him.",
            question:
              "Choose the option that best completes the following passage: The court started _____ at exactly 9 a.m. when the case was _____ out, _____ announced their appearances and the matter was _____ to 11 a.m. for hearing.",
            options: {
              a: "Proceedings, announced, counsel, adjourned.",
              b: "Sitting, announced, Counsel, adjourned.",
              c: "Sitting, called up, counsels, stood down.",
              d: "Sitting, called, counsel, stood down.",
            },
            answer: "d",
          },
        ],
      },
    ],
  },

  // ================================================================
  // 2011 AUGUST — BAR PART II FINAL EXAMINATION
  // ================================================================
  "2011-august": {
    year: 2011,
    session: "August",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 100,
    courses: [
      // ========================================
      // CIVIL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2011-august-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Nnamdi and Sanni are customers of Star Bank Plc. The bank gave a loan of N50 million to Nnamdi which loan was guaranteed by Sanni. Nnamdi has now defaulted in repaying the loan and the Bank has decided to sue Sanni who the Bank believes is more financially buoyant and in a position to pay.",
            question: "Which Court has jurisdiction over the case?",
            options: {
              a: "Federal High Court.",
              b: "State High Court.",
              c: "Investment and Securities Tribunal.",
              d: "Both Federal and State High Court.",
            },
            answer: "d",
          },
          {
            id: 2,
            context:
              "Nnamdi and Sanni are customers of Star Bank Plc. The bank gave a loan of N50 million to Nnamdi which loan was guaranteed by Sanni. Nnamdi has now defaulted in repaying the loan and the Bank has decided to sue Sanni.",
            question:
              "If Sanni intends to claim indemnity against Nnamdi in the same action instituted by the Bank against Sanni, the proper step is for Sanni to apply for:",
            options: {
              a: "Interpleader summons.",
              b: "Third Party notice.",
              c: "Joinder of Party.",
              d: "Garnishee Proceedings.",
            },
            answer: "b",
          },
          {
            id: 3,
            context:
              "Nnamdi and Sanni are customers of Star Bank Plc. The bank gave a loan of N50 million to Nnamdi which loan was guaranteed by Sanni. Nnamdi has now defaulted in repaying the loan and the Bank has decided to sue Sanni.",
            question:
              "Assuming Nnamdi's wife is joined as co-defendant in the suit by the Bank, which of the steps can she properly take?",
            options: {
              a: "Apply for Dismissal of the case for misjoinder.",
              b: "Apply for striking out of the case for misjoinder.",
              c: "Apply for striking out of her name for misjoinder.",
              d: "Apply for joinder of the Managing Director of the Bank as co-plaintiff.",
            },
            answer: "c",
          },
          {
            id: 4,
            context:
              "Nnamdi and Sanni are customers of Star Bank Plc. The bank gave a loan of N50 million to Nnamdi which loan was guaranteed by Sanni. Nnamdi has now defaulted in repaying the loan and the Bank has decided to sue Sanni.",
            question:
              "Assuming the bank and its Counsel were absent on the date fixed for pre-trial conference, which of the following steps can properly be taken by the Court?",
            options: {
              a: "Enter final judgement for the claimant.",
              b: "Dismissal of the action of the plaintiff.",
              c: "Award cost against the defendant.",
              d: "Stay further proceedings in the matter until the plaintiff comes to Court.",
            },
            answer: "b",
          },
          {
            id: 5,
            context:
              "Nnamdi and Sanni are customers of Star Bank Plc. The case is commenced in the High Court of the Federal Capital Territory Abuja.",
            question:
              "If the case is commenced in the High Court of the Federal Capital Territory Abuja, within what time must the defendant file his statement of defence?",
            options: {
              a: "8 days.",
              b: "14 days.",
              c: "21 days.",
              d: "30 days.",
            },
            answer: "b",
          },
          {
            id: 6,
            context:
              "Mrs. Daniel married Mr. Okon Daniel on 31st January 2009 at the FCT Marriage Registry. Shortly thereafter, Mr. Okon Daniel got to know that his wife was already three months pregnant for her ex-boyfriend, Mr. Peter. Mr. Okon Daniel was very upset.",
            question:
              "The marriage between Mr. Daniel and Mrs. Daniel is best described as:",
            options: {
              a: "Voidable Marriage.",
              b: "Customary Marriage.",
              c: "Void Marriage.",
              d: "Illegal Marriage.",
            },
            answer: "a",
          },
          {
            id: 7,
            context:
              "Mrs. Daniel married Mr. Okon Daniel on 31st January 2009 at the FCT Marriage Registry. Mr. Okon Daniel intends to file a petition against Mrs. Daniel.",
            question:
              "The documents that ought to accompany his petition are:",
            options: {
              a: "Notice of Petition, Marriage Certificate, Answer and verifying Affidavit.",
              b: "Notice of Petition, Registrar's Certificate, Answer and verifying Affidavit.",
              c: "Acknowledgement Notice, Marriage Certificate, Verifying Affidavit and Notice of Petition.",
              d: "Certificate relating to Reconciliation, Marriage Certificate, Notice of Petition and Verifying Affidavit.",
            },
            answer: "c",
          },
          {
            id: 8,
            context:
              "Dick Harry is a tenant in the property belonging to Chief Ebenezer Shodipo as a yearly tenant which tenancy commenced on the 1st of April, 2008. After the death of Chief Shodipo, Chief Shodipo's two eldest sons are contesting over the rightful person to the rent paid on the property. Dick Harry is in a dilemma as to the person who has the legal right to collect rent.",
            question:
              "What step can Dick Harry take to avoid paying rent to the wrong person?",
            options: {
              a: "Third Party Proceedings.",
              b: "Interpleader Summons.",
              c: "Garnishee Proceedings.",
              d: "Anton Piller.",
            },
            answer: "b",
          },
          {
            id: 9,
            context:
              "Dick Harry is a tenant in the property belonging to Chief Ebenezer Shodipo as a yearly tenant which tenancy commenced on the 1st of April, 2008.",
            question:
              "In order to determine the tenancy of Dick Harry, which of the following is the appropriate notice to be served on him?",
            options: {
              a: "A six months notice to quit expiring on the 31st of March.",
              b: "A six months notice to expire on the 1st of March.",
              c: "A six months notice to expire on the 1st of March.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 10,
            context:
              "John filed a suit under the undefended list procedure against Peter. On the 20th of April 2011, the matter came up for the first time. While the Court was sitting but before the matter was called, Counsel to Peter sent a text message to John's Counsel informing him that he is on his way to Court having been delayed by a flat tyre.",
            question:
              "What will the matter be fixed for on the 20th of April, 2011?",
            options: {
              a: "Mention.",
              b: "Further hearing.",
              c: "Accelerated hearing.",
              d: "Hearing.",
            },
            answer: "d",
          },
          {
            id: 11,
            context:
              "John filed a suit under the undefended list procedure against Peter. On the 20th of April 2011, the matter came up for the first time. While the Court was sitting but before the matter was called, Counsel to Peter sent a text message to John's Counsel informing him that he is on his way to Court having been delayed by a flat tyre.",
            question:
              "What application will Counsel to John make to the Court in view of the text message he received?",
            options: {
              a: "Application for adjournment.",
              b: "Application for stood on.",
              c: "Application for stand down.",
              d: "Application for cost.",
            },
            answer: "c",
          },
          {
            id: 12,
            question:
              "The undefended list procedure in Abuja is commenced by filing:",
            options: {
              a: "Writ of Summons, Ex parte motion and Affidavit.",
              b: "Writ of Summons, Motion on Notice and Supporting Affidavit.",
              c: "Writ of Summons and Affidavit.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 13,
            context:
              "Miss B. B. Slim was sued by Miss Dora Brown in the High Court of FCT Abuja, over a piece of land situate at Asokoro District, Abuja. After the service of the process on the defendant, she was involved in a fatal accident which led to her being hospitalized for three months. After her discharge from the hospital, she engaged a Counsel to represent her in Court.",
            question:
              "What first steps should Counsel take on behalf of B. B. Slim?",
            options: {
              a: "File a memorandum of Appearance.",
              b: "File a motion for leave to appear out of time.",
              c: "File Statement of Defence.",
              d: "File Statement of Claim.",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "Miss B. B. Slim was sued by Miss Dora Brown in the High Court of FCT Abuja, over a piece of land situate at Asokoro District, Abuja.",
            question:
              "What are the processes the defendant needs to file to defend this suit?",
            options: {
              a: "Statement of defence, witness statement on oath, pre-action counseling certificate and list of witnesses.",
              b: "Statement of defence, affidavit in support, witness statement on oath and list of witnesses.",
              c: "Statement of defence, witness statement on oath, pre-action counseling certificate and copies of documents to be relied upon.",
              d: "Statement of defence, witness statement on oath and list of documents to be filed.",
            },
            answer: "c",
          },
          {
            id: 15,
            context:
              "Miss B. B. Slim was sued by Miss Dora Brown. Since the defendant was unable to file the necessary papers required of her under the rules within time.",
            question: "The plaintiff is entitled to:",
            options: {
              a: "Judgement in default of defence.",
              b: "Judgement in default of appearance.",
              c: "Summary judgement.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 16,
            question:
              "The defendant is required by the rules to file her statement of defence after the statement of claim is served on her within a period of:",
            options: {
              a: "45 days.",
              b: "21 days.",
              c: "30 days.",
              d: "14 days.",
            },
            answer: "d",
          },
          {
            id: 17,
            context:
              "Mr. Bitrus Inyang was beaten by some policemen at a roadblock along Abuja-Mararaba Road to a state of unconsciousness for his refusal to switch on the inner light of his car. Mr. Inyang was abandoned at the roadblock without the police making effort to take him to the hospital. After he regained consciousness, Mr. Inyang is contemplating instituting an action in Court for the enforcement of his fundamental rights.",
            question:
              "Which Court is the most appropriate for the enforcement of Mr. Inyang's rights?",
            options: {
              a: "Federal High Court, Kaduna.",
              b: "High Court, Suleja.",
              c: "High Court, FCT, Abuja.",
              d: "National Industrial Court of Nigeria, Abuja.",
            },
            answer: "c",
          },
          {
            id: 18,
            context:
              "Mr. Bitrus Inyang was beaten by some policemen at a roadblock along Abuja-Mararaba Road. He is contemplating instituting an action for the enforcement of his fundamental rights.",
            question:
              "Within what time limit should Mr. Inyang commence his action?",
            options: {
              a: "12 months.",
              b: "8 months.",
              c: "No time limit.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 19,
            question:
              "Within what time is the Respondent expected to respond to the applications?",
            options: {
              a: "5 days.",
              b: "6 days.",
              c: "14 days.",
              d: "15 days.",
            },
            answer: "a",
          },
          {
            id: 20,
            question:
              "What possible breach of fundamental right can the applicant claim?",
            options: {
              a: "Right to fair hearing.",
              b: "Right to dignity of human person.",
              c: "Right to property.",
              d: "Right to life.",
            },
            answer: "b",
          },
        ],
      },

      // ========================================
      // CRIMINAL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2011-august-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "When the charge of rioting while armed with a deadly weapon was read in English Language and explained in Hausa Language to Mallam Aboki Babali at the High Court of the Federal Capital Territory, Abuja on 27th July, 2011, Mallam Aboki was simply looking at the trial Judge without a word.",
            question: "From the above scenario, the accused is said:",
            options: {
              a: "To have refused to plead.",
              b: "To be unable to plead.",
              c: "To have remained mute.",
              d: "To have objected to the provision of interpreter.",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "When the charge of rioting while armed with a deadly weapon was read in English Language and explained in Hausa Language to Mallam Aboki Babali at the High Court of the Federal Capital Territory, Abuja on 27th July, 2011, Mallam Aboki was simply looking at the trial Judge without a word.",
            question:
              "If from the scenario above, Mallam Aboki had refused to plead, the court would:",
            options: {
              a: "Inquire into the cause of refusal.",
              b: "Enter a plea of not guilty.",
              c: "Enter a plea of guilty with reason.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 3,
            context:
              "When the charge was read to Mallam Aboki Babali, he was simply looking at the trial Judge without a word.",
            question:
              "If, from the scenario above, Mallam Aboki is unable to plead, the court should:",
            options: {
              a: "Adjourn the matter.",
              b: "Enter plea of not guilty for him.",
              c: "Enter a plea of guilty for him.",
              d: "Provide him with another interpreter.",
            },
            answer: "b",
          },
          {
            id: 4,
            context:
              "When the charge was read to Mallam Aboki Babali, he was simply looking at the trial Judge without a word.",
            question:
              "If, from the above scenario, Mallam Aboki is said to stand mute, the court should:",
            options: {
              a: "Enter a plea of not guilty for him.",
              b: "Adjourn the matter.",
              c: "Enter a plea of guilty.",
              d: "Inquire into the cause of muteness.",
            },
            answer: "d",
          },
          {
            id: 5,
            context:
              "During the trial of Steven Maduka before the FCT High Court for causing hurt by dangerous driving, the Prosecuting Counsel was examining PW1. The witness claimed to be an eyewitness but could not remember details, became unresponsive, and gave evasive answers. Counsel then said: 'You are dodging the question. You are not a witness of truth. I am going to show you your previous statements to show that you are a bloody liar.'",
            question: "By Counsel's last comments, he is stating that:",
            options: {
              a: "The witness is a dodgy witness.",
              b: "The witness is a hostile witness.",
              c: "The witness is an unreliable one.",
              d: "The witness is of weak intellect.",
            },
            answer: "b",
          },
          {
            id: 6,
            context:
              "During the trial of Steven Maduka, the Prosecuting Counsel's statements suggest the witness is hostile.",
            question:
              "If counsel's statements in the last paragraph are true, the right procedure is:",
            options: {
              a: "To pronounce the witness a hostile witness.",
              b: "To apply to Court to declare the witness a hostile witness.",
              c: "To discontinue further questioning.",
              d: "To apply to discharge the witness.",
            },
            answer: "b",
          },
          {
            id: 7,
            question:
              "If the witness is declared a hostile witness, then:",
            options: {
              a: "Counsel can cross-examine him.",
              b: "The court can filter his evidence.",
              c: "The witness can apply to step down.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 8,
            question:
              "If the witness is declared a hostile witness in this case:",
            options: {
              a: "Only his previous statements will be acted upon.",
              b: "Only subsequent statements will be acted upon.",
              c: "Both his previous and subsequent statements will be discountenanced.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 9,
            context:
              "Badmut, a member of a terrorist group wanted by the police, was arrested having in his possession dangerous explosives with the intention of blowing up the Independence House at Maiduguri, Borno State. Badmut had been kept in police custody for seven days. A criminal action was commenced against Badmut by the Attorney General of the State at the Magistrate Court. During the trial, the Minister of State for Justice entered orally a nolle prosequi, which the Defence Counsel did not object to but pleaded with the Judge to acquit his client. The trial judge thereafter acquitted Badmut.",
            question:
              "The detention of Badmut at the police custody was:",
            options: {
              a: "Lawful.",
              b: "Unlawful.",
              c: "Justified.",
              d: "Wrong.",
            },
            answer: "b",
          },
          {
            id: 10,
            context:
              "Badmut, a member of a terrorist group, was arrested with dangerous explosives in Maiduguri, Borno State.",
            question:
              "The Court that has competence to try the action is:",
            options: {
              a: "High Court.",
              b: "Federal High Court.",
              c: "Industrial Court.",
              d: "Sharia Court.",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "During the trial, the Minister of State for Justice entered orally a nolle prosequi.",
            question:
              "The Nolle Prosequi entered by the Minister of State for Justice was:",
            options: {
              a: "Unconstitutional.",
              b: "Constitutionally correct.",
              c: "Outdated.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 12,
            question: "The sentence imposed by the Judge was:",
            options: {
              a: "Unconstitutional.",
              b: "Constitutional.",
              c: "Judicial rascality.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 13,
            question:
              "The Attorney-General of Borno State does not require the fiat of the Attorney-General of the Federation in order to prosecute Badmut in court.",
            options: {
              a: "False.",
              b: "True.",
              c: "Require Witness.",
              d: "Require consent of Badmut.",
            },
            answer: "a",
          },
          {
            id: 14,
            context:
              "Akin, Chinwa, Jamiu and Nafiu are members of a dreaded terrorist group who went to the mammy market Custom Barracks, Bwari – Abuja with rifles, cutlasses and cudgels to attack customers. After the attack, five people were found dead. The Nigeria Police, Bwari later arrested the four suspects and charged them to the Federal High Court, Abuja for murder. The court sat on February 26, 2010 (Id-el-Maulud day) a public holiday to take the plea of the suspects. Akin pleaded guilty to the charge with reasons. Chinwa pleaded not guilty by reason of insanity while Nafiu objected to the jurisdiction of the Court to try the offence.",
            question:
              "Which court has jurisdiction to try this offence?",
            options: {
              a: "The Chief Magistrate Court.",
              b: "The High Court.",
              c: "The Federal High Court.",
              d: "The Sharia Court.",
            },
            answer: "b",
          },
          {
            id: 15,
            context:
              "Akin pleaded guilty to the charge with reasons.",
            question:
              "What is the legal implication of the plea entered by Akin?",
            options: {
              a: "Such plea is proper in law as the judge can convict on it.",
              b: "Such plea is not proper in law as it is ambiguous.",
              c: "Such plea amounts to contempt as judges usually frown at it.",
              d: "Such plea is an admission of guilt.",
            },
            answer: "b",
          },
          {
            id: 16,
            context:
              "Chinwa pleaded not guilty by reason of insanity.",
            question:
              "What step should the Court take after Chinwa has entered his plea?",
            options: {
              a: "Detain the accused at Governor's pleasure.",
              b: "Enter a plea of not guilty for the accused.",
              c: "Send the accused to mental home.",
              d: "Find out whether the accused committed the offence and whether he was sane or insane at the time the offence was committed.",
            },
            answer: "d",
          },
          {
            id: 17,
            context:
              "The court sat on February 26, 2010 (Id-el-Maulud day) a public holiday to take the plea of the suspects.",
            question:
              "Since the Court decided to sit on a public holiday, which of the following is not correct?",
            options: {
              a: "Proceedings conducted on a public holiday is valid as parties to the trial consented to it.",
              b: "Proceedings conducted on a public holiday is invalid whether or not parties consent to it.",
              c: "Proceedings conducted on a public holiday is valid only if the prosecutor consents to it.",
              d: "Proceedings conducted on a public holiday is valid only if the accused person consents to it.",
            },
            answer: "a",
          },
          {
            id: 18,
            question:
              "On the day of hearing, no Counsel appeared for the accused person. What should the court do in the circumstance?",
            options: {
              a: "Proceed with the hearing.",
              b: "Refer the case to the Legal Aid Council to get Counsel for the accused persons.",
              c: "Detain the accused persons in custody until they are able to secure a Counsel to represent them.",
              d: "Detain the accused persons and advise their relations to arrange for Counsel for them.",
            },
            answer: "b",
          },
          {
            id: 19,
            context:
              "Ogochukwu, Ogene and Bello were arrested and charged before the High Court of Okene, Kogi State for the offence of treason and treasonable felony. Their Counsel Mr. Okpara Michael intends to oppose the jurisdiction of the Court to try the offence.",
            question:
              "At what stage of the trial will he raise the issue of jurisdiction?",
            options: {
              a: "Immediately after the accused persons take their plea.",
              b: "Immediately the charge is read to the accused person but before they take their plea thereon.",
              c: "Immediately the case is called by the Registrar.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 20,
            context:
              "Ogochukwu, Ogene and Bello were charged for the offence of treason and treasonable felony. Defence Counsel's objection to jurisdiction succeeds.",
            question:
              "If the objection of Defence Counsel to jurisdiction succeeds, which of these Courts will have jurisdiction?",
            options: {
              a: "High Court of Kogi State.",
              b: "Upper Area Court, Okene.",
              c: "Court of Appeal.",
              d: "Federal High Court.",
            },
            answer: "d",
          },
        ],
      },

      // ========================================
      // CORPORATE LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2011-august-corporate-law",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Confluence Cement Plc and Nagode Cement (Nig) Plc are rival companies in the lucrative cement business sector. A bitter boardroom crisis among the directors has impacted negatively on the business of Nagode Cement (Nig.) Plc. The takeover bid made by Confluence Cement Plc was rejected by the highly polarized board of Nagode (Nig) Plc.",
            question:
              "Which of the following restructuring options is not legally permissible between the two companies above?",
            options: {
              a: "Merger.",
              b: "Takeover.",
              c: "Management-Buy-in.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 2,
            context:
              "The takeover bid made by Confluence Cement Plc was rejected by the highly polarized board of Nagode (Nig) Plc.",
            question:
              "Which of the following options is available to Confluence Cement Plc in respect of the rejected Takeover bid?",
            options: {
              a: "Explore the possibility of a violent Takeover.",
              b: "Apply to the court for an Order of Mandamus.",
              c: "Apply to CAC to investigate Nagode Cement Plc.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 3,
            question:
              "By the provisions of the Investments and Securities Act, 2007, the Takeover Bid by Confluence Cement Plc must target at least:",
            options: {
              a: "25% of the total shares of the offeree.",
              b: "30% of the total shares of the offeree.",
              c: "40% of the total shares of the offeree.",
              d: "50% of the total shares of the offeree.",
            },
            answer: "b",
          },
          {
            id: 4,
            question:
              "Assuming the net worth of the two Companies above is N5 Billion and they have agreed to Merge, which of the following will be the appropriate category for the Merger?",
            options: {
              a: "Small.",
              b: "Intermediate.",
              c: "Large.",
              d: "Conglomerate.",
            },
            answer: "c",
          },
          {
            id: 5,
            question:
              "Assuming the boardroom crisis of Nagode Cement (Nig.) Plc has grounded its operations in the past two years, which of the following options is most suitable if Confluence Cement Plc is still interested in acquiring Nagode Cement Plc as a Moribund Company?",
            options: {
              a: "Arrangement or Compromise.",
              b: "Arrangement on Sale.",
              c: "Purchase and Assumption.",
              d: "Merger.",
            },
            answer: "b",
          },
          {
            id: 6,
            context:
              "Mr. Smart Uche was called to the Bar on July 20, 2011. At the thanksgiving reception, his uncle Chief Uchendu instructed him to register two business outfits: Uchendu Bros and Ebano Enterprises (Nig) Ltd at the Corporate Affairs Commission.",
            question:
              "After enrolment at the Supreme Court, Smart Uche Esq. is expected to be accredited at the Corporate Affairs Commission so as to be able to:",
            options: {
              a: "Register the Business Name and the limited liability company.",
              b: "Register the business name.",
              c: "Register the limited liability company.",
              d: "Do any official transaction with CAC.",
            },
            answer: "c",
          },
          {
            id: 7,
            question:
              "Which of the following documents is not required for the accreditation of Smart Uche Esq.?",
            options: {
              a: "2 recent passport photographs.",
              b: "Evidence of payment of practicing fee for the year of application.",
              c: "Photocopy of LL.B Degree Certificate.",
              d: "Photocopy of Call to Bar Certificate.",
            },
            answer: "c",
          },
          {
            id: 8,
            question:
              "Which of the following documents will be required by CAC for the registration of Uchendu Bros, but is not needed to register Ebano Enterprises (Nig.) Ltd?",
            options: {
              a: "Passport photograph.",
              b: "Form for Availability and Reservation of name.",
              c: "Evidence of payment of filing fee.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 9,
            question:
              "Which of the following is true of the two business outfits upon registration?",
            options: {
              a: "They are both juristic personalities.",
              b: "They are both judicial personalities.",
              c: "Uchendu Bros becomes a juridical personality while Ebano Enterprises (Nig.) Ltd becomes a juristic personality.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 10,
            question:
              "Which of the following documents is not required by the Companies and Allied Matters Act for the registration of Ebano Enterprises (Nig.) Ltd?",
            options: {
              a: "Memorandum and Article of Association duly stamped as Deed.",
              b: "The Statement of Authorised Share Capital portion of Form CAC 2.",
              c: "The Return of Allotment portion of Form CAC 2.",
              d: "CAC Form 1 for Availability and Reservation of Names.",
            },
            answer: "c",
          },
          {
            id: 11,
            context:
              "Otunba Yemi Smith responded to the Initial Public Offer of Shares of Green Bank Plc and applied for 1,000 ordinary shares at N100 per share and paid in full. Green Bank after about 3 years, sent him a share Certificate stating that he has been allotted 600 units of shares. When the shares of the Company crashed at the Capital Market, Otunba Yemi was issued with another 400 units of shares as special placement.",
            question:
              "One of these is the legal obligation on Green Bank when it could not allot all the shares applied for by Otunba Yemi before the special placement:",
            options: {
              a: "Write a letter of regret to him.",
              b: "Write to inform him of allotment and refund of his balance.",
              c: "Write to him a letter of allotment and regret on the unallotted shares.",
              d: "Write to him a letter of allotment and regret with an enclosed cheque on the unallotted shares.",
            },
            answer: "c",
          },
          {
            id: 12,
            question:
              "Green Bank is expected to deliver the share certificate to Otunba Yemi:",
            options: {
              a: "Within 2 months before allotment.",
              b: "Within 12 months before allotment.",
              c: "Within 2 months after allotment.",
              d: "No prescribed period.",
            },
            answer: "c",
          },
          {
            id: 13,
            question:
              "One of the following is NOT a method of offering shares to the public in the Nigerian Capital Market:",
            options: {
              a: "Direct offer.",
              b: "Offer for Sale.",
              c: "Placement.",
              d: "Purchase and Assumption.",
            },
            answer: "d",
          },
          {
            id: 14,
            context:
              "In a bid to develop into a megacity, the Lagos State government is exploring the option of raising 50 billion by issuing bonds to the investing public.",
            question:
              "One of these bodies cannot issue government bond under the Investment and Securities Act:",
            options: {
              a: "Federal Government Agencies.",
              b: "State Government and Local Government.",
              c: "State Government Agencies.",
              d: "Public companies where government has shares.",
            },
            answer: "d",
          },
          {
            id: 15,
            question:
              "The maximum redemption date for issued bonds is:",
            options: {
              a: "20 years from the date of issue of the bond.",
              b: "25 years from date of issue of the bond.",
              c: "50 years from date of issue of the bond.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 16,
            question:
              "The essential document which guarantees repayment of bond at due date is:",
            options: {
              a: "Irrevocable letter of authority issued to the Accountant General of the Federation.",
              b: "Irrevocable letter of authority issued to the Auditor-General of the Federation.",
              c: "Irrevocable letter of authority or its waiver issued to the Accountant General of the Federation.",
              d: "None of the above.",
            },
            answer: "bonus",
          },
          {
            id: 17,
            context:
              "By the joint provisions of sections 274, 275 of the Investments and Securities Act (ISA) 2007, there is established a body known as the Investment and Securities Tribunal. The Tribunal shall consist of ten (10) persons appointed by the Minister and headed by a Chairman. The Tribunal shall be duly constituted if it consists of not less than three (3) members.",
            question:
              "The following is correct about the Investment and Securities Tribunal except:",
            options: {
              a: "The Tribunal may make rules regulating its procedures.",
              b: "The Tribunal shall have the power to review its decision.",
              c: "The proceedings of the Tribunal may be held in camera.",
              d: "The Tribunal has both civil and criminal jurisdiction.",
            },
            answer: "d",
          },
          {
            id: 18,
            question:
              "An award or judgement of the Tribunal shall be enforced as if:",
            options: {
              a: "It was a judgement of the Federal High Court upon registration of a copy with the Chief Registrar of the Federal High Court.",
              b: "It was a judgment of the High Court upon registration with the Chief Registrar of the High Court.",
              c: "It was a judgment of the Court of Appeal upon registration with the Chief Registrar of the Court of Appeal.",
              d: "It was a judgment of the Supreme Court upon registration with the Chief Registrar of the Supreme Court.",
            },
            answer: "a",
          },
          {
            id: 19,
            question:
              "The Investment and Securities Tribunal is duly constituted if it consists of:",
            options: {
              a: "5 members.",
              b: "10 members.",
              c: "3 members.",
              d: "2 members.",
            },
            answer: "c",
          },
          {
            id: 20,
            question:
              "In the event of the decision/judgment delivered by Investment and Securities Tribunal being challenged, the aggrieved party shall appeal to:",
            options: {
              a: "Federal High Court.",
              b: "Court of Appeal.",
              c: "National Industrial Court.",
              d: "The Supreme Court of Appeal.",
            },
            answer: "b",
          },
        ],
      },

      // ========================================
      // PROPERTY LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2011-august-property-law",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Olu George sold his house to Adaka. Both parties exchanged a formal contract of sale in March 2007. The house is located at Enugu. Adaka approached Big Bank PLC for a loan and executed an agreement to create a legal mortgage over the house in favour of the Bank.",
            question:
              "George is under obligation to take one of the following steps after the exchange of contract:",
            options: {
              a: "Apply for certificate of occupancy.",
              b: "Pay deposit to Adaka.",
              c: "Deduce his title.",
              d: "Execute a power of attorney in favour of Adaka.",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Adaka approached Big Bank PLC for a loan and executed an agreement to create a legal mortgage over the house in favour of the Bank.",
            question:
              "The agreement to create a legal mortgage executed by Adaka operates as one of the following:",
            options: {
              a: "Equitable mortgage.",
              b: "Legal mortgage.",
              c: "Appointment of Receiver.",
              d: "Sale of the house.",
            },
            answer: "a",
          },
          {
            id: 3,
            context:
              "Ade Oluwa, a Benin man, in his will gave his family house in Benin to his youngest daughter Bola. Ade Oluwa lived all his life in Benin. He also gave one of his houses to Gbonka, one of his executors. Ade Oluwa also gave N1 million to his youngest son Emma.",
            question:
              "One of the following statements about the gift of the house to Bola is correct:",
            options: {
              a: "The gift is valid because Bola was around when the father died.",
              b: "The gift is not valid on the ground of customary restriction on the rights of Ade Oluwa to make a Will.",
              c: "The gift will be valid if Bola survived her father.",
              d: "The gift will be valid if Bola obtains an assent from the executors.",
            },
            answer: "b",
          },
          {
            id: 4,
            question:
              "Where a person lacking in capacity e.g. a child is a beneficiary in a will having a sole executor:",
            options: {
              a: "The court shall not grant probate to such a will.",
              b: "Court may appoint an administrator to join the sole executor.",
              c: "Appoint a Guardian.",
              d: "Allow the infant to nominate a guardian.",
            },
            answer: "b",
          },
          {
            id: 5,
            question:
              "All but one of the following is among the taxes to be paid during the perfection of a title to a property:",
            options: {
              a: "Stamp duties.",
              b: "Consent fees.",
              c: "Registration fee.",
              d: "Capital gains tax.",
            },
            answer: "d",
          },
          {
            id: 6,
            question:
              "Perfection of title in Enugu should take the following order:",
            options: {
              a: "Consent, registration, stamping.",
              b: "Stamping, consent, registration.",
              c: "Consent, stamping, registration.",
              d: "Registration, consent, stamping.",
            },
            answer: "c",
          },
          {
            id: 7,
            question:
              "One of the following is not one of the effects of a receipt clause in a deed:",
            options: {
              a: "Makes the issuance of a separate receipt unnecessary.",
              b: "It constitutes good root of title.",
              c: "It is evidence of payment to a subsequent purchaser without notice that the sum has not been paid.",
              d: "It is authority to pay the sum to the vendor's solicitor where he presents such instrument.",
            },
            answer: "b",
          },
          {
            id: 8,
            question:
              "In perusing the abstract of title the purchaser's solicitor must consider all but one of the following:",
            options: {
              a: "Whether there is any break in the devolution of title.",
              b: "Statutory time within which title must be deduced.",
              c: "Whether the mortgagor can create subsequent mortgages.",
              d: "Covenants in the lease instrument abstracted.",
            },
            answer: "c",
          },
          {
            id: 9,
            question:
              "The form for the creation of an assignment of land in Ikoyi, a registration district in Lagos is:",
            options: {
              a: "Form 7.",
              b: "Form 5.",
              c: "Form 2.",
              d: "Form 6.",
            },
            answer: "a",
          },
          {
            id: 10,
            context:
              "Zenith Bank PLC had come to consult you as solicitor on issues regarding mortgage properties.",
            question:
              "How can the Bank as mortgagee deal with the reversionary interest of a mortgagor in respect of a mortgaged property in Lokoja in exercise of its powers of sale?",
            options: {
              a: "Trust Declaration.",
              b: "Power of Attorney.",
              c: "All of the above.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 11,
            question:
              "How would the Bank deal with the reversionary interest if the property is situated in Asaba and the legal mortgage is created by Sub-demise?",
            options: {
              a: "Power of Attorney.",
              b: "Declaration of Trust.",
              c: "All of the above.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 12,
            question:
              "State your opinion on the statement that 'in Kwara State it is possible to create successive legal mortgages':",
            options: {
              a: "True.",
              b: "False.",
              c: "Conditional.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 13,
            question:
              "Pursuant to a successful registration of title under the Registration of Titles Law, a registered proprietor of Land is issued:",
            options: {
              a: "Certificate of Title.",
              b: "Land Certificate.",
              c: "A or B above.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "Dr. Chris Chuku, a prominent politician owns several properties in Enugu, Dubai, Port Harcourt, Lagos, London and Abuja. He intends to sell one of his properties located at Plot 128 Ogui Street, Asokoro, Abuja to Mr. Suswan Samuel.",
            question:
              "The document required to be drafted at the contract stage of the transaction will be prepared by:",
            options: {
              a: "Mr. Suswan's solicitor.",
              b: "Dr. Chuku's solicitor.",
              c: "Registrar of Deeds.",
              d: "The two solicitors acting together.",
            },
            answer: "b",
          },
          {
            id: 15,
            context:
              "Dr. Chris Chuku intends to sell his property at Plot 128 Ogui Street, Asokoro, Abuja to Mr. Suswan Samuel.",
            question:
              "One of the following does not apply after the contract stage:",
            options: {
              a: "Mr. Suswan acquires an equity in respect of the property.",
              b: "Dr. Chuku becomes a qualified trustee in respect of the property.",
              c: "Dr. Chuku's death will not affect the contract.",
              d: "Mr. Suswan is automatically entitled to possession.",
            },
            answer: "d",
          },
          {
            id: 16,
            question:
              "If Dr. Chuku intends to sell his property in Port Harcourt, all but one of these Laws is likely to apply:",
            options: {
              a: "The Land Tenure Law.",
              b: "The Conveyancing Act.",
              c: "The Land Use Act.",
              d: "The Statute of Frauds.",
            },
            answer: "a",
          },
          {
            id: 17,
            question:
              "The presence of one of the following in the deed to be executed would obviate the need for issuance of a separate receipt:",
            options: {
              a: "Consideration clause.",
              b: "Receipt clause.",
              c: "Execution clause.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 18,
            question:
              "To finally dispose of all Dr. Chuku's interest in the property, one of the following documents must be executed:",
            options: {
              a: "Deed of Lease.",
              b: "Deed of Legal Mortgage.",
              c: "Deed of Assignment.",
              d: "Deed of Conveyance.",
            },
            answer: "c",
          },
          {
            id: 19,
            question: "A will is ambulatory because:",
            options: {
              a: "It is testamentary.",
              b: "It speaks from the death of the testator.",
              c: "It is revocable at any time before the death of the testator.",
              d: "It distributes the testator's estate upon his death.",
            },
            answer: "c",
          },
          {
            id: 20,
            question:
              "The following are examples of documents that constitute good root of title except one:",
            options: {
              a: "A deed of gift.",
              b: "Certificate of title.",
              c: "Equitable mortgage.",
              d: "Registered titles.",
            },
            answer: "c",
          },
        ],
      },

      // ========================================
      // PROFESSIONAL ETHICS & SKILLS (20 Questions)
      // (formerly "Law in Practice")
      // ========================================
      {
        id: "2011-august-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Mr. Akeem John, Ms. Nkechi Hassan and Mr. Freeborn practice law under the name and style of John, Hassan and Freeborn & Co. At the end of the year, profit is shared in a 40:30:25 percent basis. The balance is invested into the practice. Ms. Hassan is also on the Board of a number of companies including Fruggal Nigeria Limited. The Law firm has a relationship with Exxon Mobil Limited and handles only taxation matters on behalf of the company.",
            question:
              "The business relationship that exists among the lawyers is:",
            options: {
              a: "A Law practice.",
              b: "An associateship.",
              c: "A sole proprietorship.",
              d: "A partnership.",
            },
            answer: "d",
          },
          {
            id: 2,
            context:
              "The Law firm has a relationship with Exxon Mobil Limited and handles only taxation matters on behalf of the company.",
            question:
              "The relationship that exists between the firm and Exxon Mobil Limited is:",
            options: {
              a: "A retainer.",
              b: "A general retainer.",
              c: "A specific retainer.",
              d: "A special retainer.",
            },
            answer: "d",
          },
          {
            id: 3,
            context:
              "Ms. Hassan is on the Board of Fruggal Nigeria Limited. Lagos State government wrote the firm asking for its representation in a matter of breach of contract against Fruggal Nigeria Limited.",
            question:
              "All of the following statements are correct except:",
            options: {
              a: "The firm can act for Lagos State government.",
              b: "The firm can act for Lagos State government once it discloses the conflict.",
              c: "The firm can act after Ms. Hassan has resigned from the Board of Fruggal Nigeria Limited.",
              d: "Although the firm may disclose its conflict, it is advisable if it does not act for Lagos State government.",
            },
            answer: "a",
          },
          {
            id: 4,
            context:
              "Mr. John was elevated to the High Court Bench of Kogi State on the 25th of July, 2011.",
            question: "After Mr. John's elevation to the Bench:",
            options: {
              a: "The firm can continue carrying on business using that name.",
              b: "The firm must change its name.",
              c: "Mr. John cannot adjudicate on a matter in which he acted as counsel before his elevation to the bench.",
              d: "After retirement from the bench, he cannot practice as a Barrister.",
            },
            answer: "a",
          },
          {
            id: 5,
            context:
              "On the 2nd of June 2011, Miss Ebele Chukwu walked into the law office of John, Hassan & Freeborn asking that it represents her in a matter of unlawful termination of employment by Exxon Mobil Limited.",
            question:
              "When Ms. Ebele walked into the law office, the meeting between her and the lawyers is called:",
            options: {
              a: "De-briefing.",
              b: "Counselling.",
              c: "Interrogation.",
              d: "Interviewing.",
            },
            answer: "d",
          },
          {
            id: 6,
            question:
              "All of the statements are true except:",
            options: {
              a: "The firm will be expected to keep a minimum of three bank accounts and two books of account.",
              b: "The firm may pay non-client money into client account.",
              c: "In signing correspondence, any of the lawyers may sign for the firm.",
              d: "It is good practice to sign as thus: John, Hassan, Freeborn and Co.",
            },
            answer: "d",
          },
          {
            id: 7,
            question:
              "When Counsel addresses the Court, 'I am speaking from the Bar,' it means he is telling the Court that:",
            options: {
              a: "He is speaking from the seats reserved for lawyers in court.",
              b: "He is speaking as counsel on behalf of his client.",
              c: "He is speaking upon his honour as Counsel and should therefore be believed.",
              d: "He is speaking as Counsel and not as a judge.",
            },
            answer: "c",
          },
          {
            id: 8,
            context:
              "At the last April Elections, Chief Johnson was the candidate of the Better Life Party. Madam Petty Cash was the senatorial candidate of High Society Party. The elections were marred by substantial irregularities and Chief Johnson was declared the winner. Madam Petty Cash briefed a Senior Advocate of Nigeria. She wanted a speedy resolution and insisted on using Alternative Dispute Resolution despite advice by her counsel.",
            question:
              "Which of the following advice is correct assuming you have been briefed by Madam Petty Cash?",
            options: {
              a: "That it is possible to use Alternative Dispute Resolution to settle the matter.",
              b: "That it is impossible to use Alternative Dispute Resolution to resolve the case.",
              c: "That it is impossible to use Alternative Dispute Resolution to resolve cases of Election Petitions and constitutional matters.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 9,
            context:
              "Chief Pius Braimo is a Legal Practitioner and Notary Public for Nigeria with his Law office at Shagamu. He does not belong to the Local branch of the Nigerian Bar Association. He usually sits at the inner Bar, claiming to be a Notary Public and should be heard before other Legal Practitioners.",
            question: "Notary Public of Nigeria is conferred on:",
            options: {
              a: "Legal Practitioner who has been conferred with the rank of Senior Advocate of Nigeria.",
              b: "One who has practiced Law for a period of ten years.",
              c: "One who has practiced Law for a period of ten years and has appeared in the High Court in five civil cases.",
              d: "One of exemplary character who has practiced law for not less than 10 years and has paid his practicing fees for not less than seven years.",
            },
            answer: "d",
          },
          {
            id: 10,
            question:
              "The title 'Notary Public of Nigeria' is conferred on a Legal Practitioner by the:",
            options: {
              a: "General Counsel of the Bar.",
              b: "Nigerian Bar Association.",
              c: "Chief Justice of Nigeria.",
              d: "Legal Practitioners Privileges Committee.",
            },
            answer: "c",
          },
          {
            id: 11,
            context:
              "Adebimpe George has just been called to the Nigerian Bar. She has agreed to work with three of her colleagues who are also legal practitioners. She registered her firm as Adebimpe George & Co. They have also consented to engage three support staff.",
            question:
              "The kind of Law firm formed by Adebimpe George can best be described as:",
            options: {
              a: "Partnership.",
              b: "Associateship.",
              c: "Sole proprietorship.",
              d: "Sole Practitionership.",
            },
            answer: "c",
          },
          {
            id: 12,
            question:
              "The Law firm can suitably be classified as a _____ firm:",
            options: {
              a: "Large.",
              b: "Small.",
              c: "Medium.",
              d: "Average.",
            },
            answer: "b",
          },
          {
            id: 13,
            question:
              "One of the following is not the responsibility of the Body of Benchers:",
            options: {
              a: "Call to Bar.",
              b: "Discipline of Lawyers.",
              c: "Making Rules of professional conduct.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 14,
            question:
              "All the following are disciplinary bodies in the legal profession except:",
            options: {
              a: "The Supreme Court.",
              b: "Chief Justice of Nigeria.",
              c: "President of the Court of Appeal.",
              d: "Nigerian Bar Association.",
            },
            answer: "c",
          },
          {
            id: 15,
            question:
              "In announcing appearance in court, the expression 'Your Honour' is used before one of the following courts:",
            options: {
              a: "Area Court in Gusau, Zamfara State.",
              b: "Magistrate Court in Enugu, Enugu State.",
              c: "Magistrate Court in Lagos State.",
              d: "High Court in Asaba, Delta State.",
            },
            answer: "c",
          },
          {
            id: 16,
            context:
              "Mr. Shon Bang is a Legal Practitioner who has been arraigned before the Legal Practitioners Disciplinary Committee for misappropriating N2,000,000 belonging to his client.",
            question:
              "What is the appropriate quorum of the Disciplinary Committee?",
            options: {
              a: "5.",
              b: "6.",
              c: "3.",
              d: "2.",
            },
            answer: "a",
          },
          {
            id: 17,
            question:
              "Assuming the Disciplinary Committee makes a finding against Mr. Bang, what is the time within which Mr. Bang can file an appeal against the decision of the Committee?",
            options: {
              a: "28 days from the date he was served a copy of the decision.",
              b: "28 days from the date of the decision.",
              c: "30 days from the date he was served a copy of the decision.",
              d: "30 days from the date of the decision.",
            },
            answer: "a",
          },
          {
            id: 18,
            question:
              "Which of the following may constitute touting in the legal profession?",
            options: {
              a: "Publishing in a Law directory a lawyer's address, telephones, mails, telex and e-mail.",
              b: "Where a lawyer frequently goes to clubs, hotels and restaurants for the purpose of distributing business cards.",
              c: "Participating in radio and television programmes wherein he gives information on law.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 19,
            context:
              "John, Jill, Rex and Joan were Called to Bar in 2000, 1999, 2008 and 2004 respectively. They used to appear for the same party in a case.",
            question:
              "Which of the following is the proper order of announcing their appearance?",
            options: {
              a: "Joan, Rex, Jill and John.",
              b: "John, Jill, Rex and Joan.",
              c: "Rex, Joan, Jill and John.",
              d: "Jill, John, Joan and Rex.",
            },
            answer: "d",
          },
          {
            id: 20,
            question:
              "Which of these duties is otherwise called the Cab Rank Rule?",
            options: {
              a: "Duty to take instructions in chambers.",
              b: "Duty to accept brief.",
              c: "Duty to exercise professional competence.",
              d: "Duty to open client's account.",
            },
            answer: "b",
          },
        ],
      },
    ],
  },

  // ================================================================
  // 2020 JANUARY — Bar Part II Final Examination (Backlog)
  // ================================================================
  "2020-january": {
    year: 2020,
    session: "January",
    examTitle: "Bar Part II Final Examination (Backlog)",
    totalQuestions: 100,
    courses: [
      // ========================================
      // CIVIL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2020-january-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted. Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question:
              "The best and fastest court where this claim can be pursued is:",
            options: {
              a: "District Court",
              b: "High Court.",
              c: "Small Claims Court/Magistrate Court",
              d: "Native Court",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted. Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question:
              "After the claim in the procedure you quoted above is issued by the Registrar of Court, it must be served within how many days?",
            options: {
              a: "21 days",
              b: "14 days",
              c: "10 days",
              d: "7 days.",
            },
            answer: "d",
          },
          {
            id: 3,
            context:
              "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted. Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question:
              "The defendant must respond within how many days to the claim failing which he will be deemed to have admitted the claim?",
            options: {
              a: "5 days.",
              b: "7 days.",
              c: "8 days.",
              d: "10 days.",
            },
            answer: "b",
          },
          {
            id: 4,
            context:
              "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted. Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question:
              "The defendant can enter a counter-claim of up to:",
            options: {
              a: "N6,000",
              b: "N7,000.",
              c: "N8,000.",
              d: "N10,000",
            },
            answer: "bonus",
          },
          {
            id: 5,
            context:
              "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted. Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question:
              "The hearing of the claimant and the delivery of judgment must be concluded within:",
            options: {
              a: "180 days",
              b: "120 days",
              c: "90 days",
              d: "60 days",
            },
            answer: "d",
          },
          {
            id: 6,
            context:
              "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10 April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr Dogo's Prado Jeep which was occupied by his wife Mrs Raliat Yunus, their 7 year old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital, Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered.",
            question:
              "The proper parties in the action are:",
            options: {
              a: "The Dogo Yunus family (Claimant) versus Roland Giddy (Defendant)",
              b: "Dogo Yunus, Mrs Raliat Yunus, Master Taju Yunus (Claimant) versus Roland Giddy (Defendant)",
              c: "Mr. Dogo Yunus, Mrs Raliat Yunus, Master Taju Yunus (suing by his guardian, Mr Dogo Yunus) (Claimant) versus Roland Giddy (Defendant)",
              d: "Mr Dogo Yunus, Mrs. Raliat Yunus, suing for themselves and their son Master Taju Yunus (Claimants) versus Roland Giddy (Defendant)",
            },
            answer: "c",
          },
          {
            id: 7,
            context:
              "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10 April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr Dogo's Prado Jeep which was occupied by his wife Mrs Raliat Yunus, their 7 year old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital, Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered.",
            question:
              "Assuming judgment was entered against the defendant and the defendant wants to prevent the immediate execution of the judgment, he shall apply:",
            options: {
              a: "By motion on notice for stay of proceedings",
              b: "By motion on notice for stay of execution",
              c: "By summons for Mareva Injunction",
              d: "By motion on notice for injunction pending Appeal",
            },
            answer: "b",
          },
          {
            id: 8,
            context:
              "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10 April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr Dogo's Prado Jeep which was occupied by his wife Mrs Raliat Yunus, their 7 year old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital, Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered.",
            question:
              "If the judgment debtor is making plans to migrate to Canada and is also planning to move all his assets away from Nigeria, the Claimant will have to apply:",
            options: {
              a: "By motion on notice for interim injunction",
              b: "Motion ex-parte for Mareva injunction.",
              c: "Motion on notice for Anton Piller Injunction.",
              d: "Motion ex-parte for interpleader summons",
            },
            answer: "b",
          },
          {
            id: 9,
            context:
              "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10 April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr Dogo's Prado Jeep which was occupied by his wife Mrs Raliat Yunus, their 7 year old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital, Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered.",
            question:
              "The originating process by which the Defendant will appeal against the judgment obtained in (7) above is:",
            options: {
              a: "Respondent's Notice",
              b: "Brief of Argument",
              c: "Notice of Appeal",
              d: "Grounds of Appeal",
            },
            answer: "c",
          },
          {
            id: 10,
            context:
              "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10 April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr Dogo's Prado Jeep which was occupied by his wife Mrs Raliat Yunus, their 7 year old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital, Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered.",
            question:
              "The record of appeal will be compiled and transmitted to the appellate court within:",
            options: {
              a: "9 months after service of the Respondent's notice",
              b: "42 days after the filing of the Grounds of Appeal",
              c: "60 days after the filing of the Notice of Appeal",
              d: "60 days after the Judgment of the trial Court",
            },
            answer: "c",
          },
          {
            id: 11,
            context:
              "Mr. John Pam died intestate on 1 January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kingsley Mallam to give the title document to them. Emmanuel Pam, the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to.",
            question:
              "This kind of procedure is referred to as:",
            options: {
              a: "Stakeholder interpleader",
              b: "Sheriff interpleader",
              c: "Court interpleader",
              d: "Personal interpleader",
            },
            answer: "a",
          },
          {
            id: 12,
            context:
              "Mr. John Pam died intestate on 1 January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kingsley Mallam to give the title document to them. Emmanuel Pam, the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to.",
            question:
              "Assuming you are Counsel to Mr. Kingsley Mallam, what will be your advice to him with respect to the title document?",
            options: {
              a: "Give it to Emmanuel Pam being the eldest Son.",
              b: "Deposit it with the bank till Letters of Administration is granted.",
              c: "Apply to court to order them to take necessary proceedings between/amongst themselves in order to determine who is entitled to take the title document.",
              d: "None of the above",
            },
            answer: "c",
          },
          {
            id: 13,
            context:
              "Mr. John Pam died intestate on 1 January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kingsley Mallam to give the title document to them. Emmanuel Pam, the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to.",
            question:
              "One of the following is not an essential fact for Mr. Kingsley Mallam to state in his supporting affidavit:",
            options: {
              a: "That the applicant has not colluded with any of the claimants",
              b: "That he must show that the property is not in his possession.",
              c: "That he has no interest other than charges for costs in the subject matter in dispute",
              d: "That the applicant is willing to pay or transfer it as the court or Judge may direct.",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "Mr. John Pam died intestate on 1 January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kingsley Mallam to give the title document to them. Emmanuel Pam, the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to.",
            question:
              "Assuming both Victor Pam and Emmanuel Pam have gone to court regarding the matter, what step can be taken to prevent Mr. Kingsley Mallam from giving it to either of the parties?",
            options: {
              a: "Interlocutory injunction",
              b: "Interim injunction.",
              c: "Order of mandamus",
              d: "Mareva injunction",
            },
            answer: "a",
          },
          {
            id: 15,
            context:
              "Mr. John Pam died intestate on 1 January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kingsley Mallam to give the title document to them. Emmanuel Pam, the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to.",
            question:
              "Assuming the court makes an order that Mr. Kingsley Mallam gives the title documents to Victor Pam, how many days does Emmanuel Pam have to appeal?",
            options: {
              a: "3 months",
              b: "90 days",
              c: "14 days.",
              d: "30 days",
            },
            answer: "c",
          },
          {
            id: 16,
            context:
              "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the premises. The annual rent is 7,000,000.00 (Seven Million Naira) only.",
            question:
              "One of the following must be served on Miss Bolanle in order to properly determine her tenancy:",
            options: {
              a: "A 6 month notice to quit which must expire on 31st December",
              b: "A 6 month notice which must expire on 1st January",
              c: "A 6-month notice which must expire at the end of January",
              d: "A 7 days notice of owners intention to recover possession",
            },
            answer: "a",
          },
          {
            id: 17,
            context:
              "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the premises. The annual rent is 7,000,000.00 (Seven Million Naira) only.",
            question:
              "Assuming upon being served with the document you have identified in 16 above to determine Bolanle's tenancy. What other document are you required to serve on her?",
            options: {
              a: "Notice to quit.",
              b: "7 days Owners Intention to apply to court to recover possession",
              c: "Writ of summons",
              d: "Plaint as in form E",
            },
            answer: "b",
          },
          {
            id: 18,
            context:
              "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the premises. The annual rent is 7,000,000.00 (Seven Million Naira) only.",
            question:
              "Assuming it has become necessary to go to court. In which of the following courts will you institute the action?",
            options: {
              a: "District Court, Abuja.",
              b: "Magistrate Court, Abuja",
              c: "Customary Court, Abuja",
              d: "High Court of the Federal Capital Territory, Abuja",
            },
            answer: "d",
          },
          {
            id: 19,
            context:
              "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the premises. The annual rent is 7,000,000.00 (Seven Million Naira) only.",
            question:
              "Assuming the scenario was in Lagos, in which Court would you have instituted the action?",
            options: {
              a: "High Court of Lagos State",
              b: "Magistrate Court of Lagos State.",
              c: "Customary Court of Lagos State",
              d: "None of the above",
            },
            answer: "d",
          },
          {
            id: 20,
            context:
              "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the premises. The annual rent is 7,000,000.00 (Seven Million Naira) only.",
            question:
              "Assuming the action is instituted at the High Court of Federal Capital Territory, Abuja, by which form would you commence the action?",
            options: {
              a: "Writ as in form G",
              b: "Plaint as in form F",
              c: "Originating summons.",
              d: "Originating motion",
            },
            answer: "a",
          },
        ],
      },
      // ========================================
      // CRIMINAL LITIGATION (20 Questions)
      // ========================================
      {
        id: "2020-january-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Mrs Getty Ali was charged before the High Court of the Federal Capital Territory Abuja for Culpable Homicide punishable with death, but the charge did not state the Section of the Law contravened. After the charge was read to her, she pleaded not guilty. At the conclusion of trial, she was convicted and sentenced to death by lethal injection. She was six (6) months pregnant at the time she was sentenced. She has appealed against conviction and sentence and has applied for bail pending appeal.",
            question:
              "What rule of drafting charges has the charge against Mrs Getty Ali contravened?",
            options: {
              a: "Rule against duplicity.",
              b: "Rule against Misjoinder of Offenders",
              c: "Rule against misjoinder of offences",
              d: "Rule against ambiguity",
            },
            answer: "d",
          },
          {
            id: 2,
            context:
              "Mrs Getty Ali was charged before the High Court of the Federal Capital Territory Abuja for Culpable Homicide punishable with death, but the charge did not state the Section of the Law contravened. After the charge was read to her, she pleaded not guilty. At the conclusion of trial, she was convicted and sentenced to death by lethal injection. She was six (6) months pregnant at the time she was sentenced. She has appealed against conviction and sentence and has applied for bail pending appeal.",
            question:
              "The complainant in this case will be:",
            options: {
              a: "The State",
              b: "Commissioner of Police",
              c: "Federal Republic of Nigeria",
              d: "Federal Government of Nigeria",
            },
            answer: "c",
          },
          {
            id: 3,
            context:
              "Mrs Getty Ali was charged before the High Court of the Federal Capital Territory Abuja for Culpable Homicide punishable with death, but the charge did not state the Section of the Law contravened. After the charge was read to her, she pleaded not guilty. At the conclusion of trial, she was convicted and sentenced to death by lethal injection. She was six (6) months pregnant at the time she was sentenced. She has appealed against conviction and sentence and has applied for bail pending appeal.",
            question:
              "The implication of the plea of the defendant is that:",
            options: {
              a: "She is deemed to have put herself upon her trial.",
              b: "She can proceed to prove her innocence",
              c: "She is resting her case on that of the Prosecution.",
              d: "She is making a No Case Submission.",
            },
            answer: "a",
          },
          {
            id: 4,
            context:
              "Mrs Getty Ali was charged before the High Court of the Federal Capital Territory Abuja for Culpable Homicide punishable with death, but the charge did not state the Section of the Law contravened. After the charge was read to her, she pleaded not guilty. At the conclusion of trial, she was convicted and sentenced to death by lethal injection. She was six (6) months pregnant at the time she was sentenced. She has appealed against conviction and sentence and has applied for bail pending appeal.",
            question:
              "The appropriate sentence in this case should have been:",
            options: {
              a: "Life imprisonment.",
              b: "Remanded in custody until the pleasure of the President is known.",
              c: "Death by hanging after delivery",
              d: "Death by hanging or by lethal injection after her child is born and weaned.",
            },
            answer: "d",
          },
          {
            id: 5,
            context:
              "Mrs Getty Ali was charged before the High Court of the Federal Capital Territory Abuja for Culpable Homicide punishable with death, but the charge did not state the Section of the Law contravened. After the charge was read to her, she pleaded not guilty. At the conclusion of trial, she was convicted and sentenced to death by lethal injection. She was six (6) months pregnant at the time she was sentenced. She has appealed against conviction and sentence and has applied for bail pending appeal.",
            question:
              "Her application for bail pending appeal should be by:",
            options: {
              a: "Motion Exparte",
              b: "Summons",
              c: "Originating Motion",
              d: "Motion on Notice",
            },
            answer: "d",
          },
          {
            id: 6,
            context:
              "Jerry Musa was arraigned before a Magistrate Court Lafia in Nasarawa State on a one count charge as follows: 'Jerry Musa on the 1 day of January, 2019 at No. 10 Abuja Road Lafia Nasarawa in the Lafia Magisterial District stabbed Mallam Bitrus Kolo and also assaulted Miss Binta Kolo and thereby committed an offence punishable under sections of the Penal Code Law of Nasarawa State.'",
            question:
              "Who is to draft the charge?",
            options: {
              a: "Police Officer",
              b: "Justice of the Peace",
              c: "Magistrate",
              d: "Attorney-General of the State",
            },
            answer: "c",
          },
          {
            id: 7,
            context:
              "Jerry Musa was arraigned before a Magistrate Court Lafia in Nasarawa State on a one count charge as follows: 'Jerry Musa on the 1 day of January, 2019 at No. 10 Abuja Road Lafia Nasarawa in the Lafia Magisterial District stabbed Mallam Bitrus Kolo and also assaulted Miss Binta Kolo and thereby committed an offence punishable under sections of the Penal Code Law of Nasarawa State.'",
            question:
              "The above charge is drafted where an accused person is brought to court by:",
            options: {
              a: "Information",
              b: "First Information Report (FIR)",
              c: "Summons",
              d: "Charge",
            },
            answer: "b",
          },
          {
            id: 8,
            context:
              "Jerry Musa was arraigned before a Magistrate Court Lafia in Nasarawa State on a one count charge as follows: 'Jerry Musa on the 1 day of January, 2019 at No. 10 Abuja Road Lafia Nasarawa in the Lafia Magisterial District stabbed Mallam Bitrus Kolo and also assaulted Miss Binta Kolo and thereby committed an offence punishable under sections of the Penal Code Law of Nasarawa State.'",
            question:
              "Assuming the accused person was convicted, how many days does he have to appeal against his conviction?",
            options: {
              a: "60 days",
              b: "90 days",
              c: "30 days",
              d: "120 days",
            },
            answer: "c",
          },
          {
            id: 9,
            context:
              "Jerry Musa was arraigned before a Magistrate Court Lafia in Nasarawa State on a one count charge as follows: 'Jerry Musa on the 1 day of January, 2019 at No. 10 Abuja Road Lafia Nasarawa in the Lafia Magisterial District stabbed Mallam Bitrus Kolo and also assaulted Miss Binta Kolo and thereby committed an offence punishable under sections of the Penal Code Law of Nasarawa State.'",
            question:
              "If the accused person was convicted and sentenced to caning how many days does he have to appeal against his conviction and sentence?",
            options: {
              a: "15 days",
              b: "5 days",
              c: "60 days",
              d: "35 days",
            },
            answer: "a",
          },
          {
            id: 10,
            context:
              "Jerry Musa was arraigned before a Magistrate Court Lafia in Nasarawa State on a one count charge as follows: 'Jerry Musa on the 1 day of January, 2019 at No. 10 Abuja Road Lafia Nasarawa in the Lafia Magisterial District stabbed Mallam Bitrus Kolo and also assaulted Miss Binta Kolo and thereby committed an offence punishable under sections of the Penal Code Law of Nasarawa State.'",
            question:
              "Who can appeal against the judgment of the court in this matter?",
            options: {
              a: "Mallam Bitrus Kolo and Binta Kolo",
              b: "Jerry Musa or Prosecutor",
              c: "The Magistrate",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "Mohammed Kurata who was brought to the Chief Magistrate Court, Normansland, Kano for the offence of Armed Robbery pleaded not guilty to the F.I.R when it was read to him. Counsel to the accused thereafter applied for his bail which was refused by the learned trial Chief Magistrate. The Chief Magistrate ruled that the accused should apply to the High Court for bail because the Magistrate has no jurisdiction to try the matter.",
            question:
              "To make application for his bail at the High Court, Mohammed should use:",
            options: {
              a: "Motion on Notice",
              b: "Summons to Admit to bail",
              c: "Either (a) or (b) above",
              d: "Originating summons",
            },
            answer: "a",
          },
          {
            id: 12,
            context:
              "Mohammed Kurata who was brought to the Chief Magistrate Court, Normansland, Kano for the offence of Armed Robbery pleaded not guilty to the F.I.R when it was read to him. Counsel to the accused thereafter applied for his bail which was refused by the learned trial Chief Magistrate. The Chief Magistrate ruled that the accused should apply to the High Court for bail because the Magistrate has no jurisdiction to try the matter.",
            question:
              "In this scenario, the application for bail of Kurata shall be filed at:",
            options: {
              a: "The registry at the Chief Magistrate Normansland",
              b: "The Registry of the State High Court",
              c: "Process Registry at the State High Court.",
              d: "Any of the above",
            },
            answer: "a",
          },
          {
            id: 13,
            context:
              "Mohammed Kurata who was brought to the Chief Magistrate Court, Normansland, Kano for the offence of Armed Robbery pleaded not guilty to the F.I.R when it was read to him. Counsel to the accused thereafter applied for his bail which was refused by the learned trial Chief Magistrate. The Chief Magistrate ruled that the accused should apply to the High Court for bail because the Magistrate has no jurisdiction to try the matter.",
            question:
              "Kurata's application for bail shall be supported by all except:",
            options: {
              a: "An affidavit of facts.",
              b: "An affidavit of the facts relied upon and exhibits.",
              c: "An affidavit of material facts and record of proceedings of the lower Court.",
              d: "An affidavit of material facts, record of the Lower Court and an address.",
            },
            answer: "d",
          },
          {
            id: 14,
            context:
              "Mohammed Kurata who was brought to the Chief Magistrate Court, Normansland, Kano for the offence of Armed Robbery pleaded not guilty to the F.I.R when it was read to him. Counsel to the accused thereafter applied for his bail which was refused by the learned trial Chief Magistrate. The Chief Magistrate ruled that the accused should apply to the High Court for bail because the Magistrate has no jurisdiction to try the matter.",
            question:
              "When Kurata is granted bail, he shall fulfil the bail conditions at:",
            options: {
              a: "The Judge's Chambers.",
              b: "The office of the prison superintendent.",
              c: "The office of the registrar of the High Court",
              d: "All of the above",
            },
            answer: "d",
          },
          {
            id: 15,
            context:
              "Mohammed Kurata who was brought to the Chief Magistrate Court, Normansland, Kano for the offence of Armed Robbery pleaded not guilty to the F.I.R when it was read to him. Counsel to the accused thereafter applied for his bail which was refused by the learned trial Chief Magistrate. The Chief Magistrate ruled that the accused should apply to the High Court for bail because the Magistrate has no jurisdiction to try the matter.",
            question:
              "In considering the bail application of Kurata, the High Court shall consider all but one of the following factors:",
            options: {
              a: "Nature of the offence.",
              b: "Prevalence of the offence.",
              c: "Nature of evidence against the accused.",
              d: "Availability of sureties",
            },
            answer: "d",
          },
          {
            id: 16,
            context:
              "Mohammed Kurata who was brought to the Chief Magistrate Court, Normansland, Kano for the offence of Armed Robbery pleaded not guilty to the F.I.R when it was read to him. Counsel to the accused thereafter applied for his bail which was refused by the learned trial Chief Magistrate. The Chief Magistrate ruled that the accused should apply to the High Court for bail because the Magistrate has no jurisdiction to try the matter.",
            question:
              "Assuming that the State High Court refused Kurata's application for bail; he should:",
            options: {
              a: "Appeal to the Court of Appeal",
              b: "Make another application.",
              c: "None of the above.",
              d: "Any of the above.",
            },
            answer: "a",
          },
          {
            id: 17,
            context:
              "Mohammed Kurata who was brought to the Chief Magistrate Court, Normansland, Kano for the offence of Armed Robbery pleaded not guilty to the F.I.R when it was read to him. Counsel to the accused thereafter applied for his bail which was refused by the learned trial Chief Magistrate. The Chief Magistrate ruled that the accused should apply to the High Court for bail because the Magistrate has no jurisdiction to try the matter.",
            question:
              "Assuming that Kurata's application in this scenario is granted on onerous conditions. Kurata should do any of the following:",
            options: {
              a: "Apply to the Court of Appeal for review.",
              b: "Apply to the High Court for review",
              c: "Appeal to the Court of Appeal",
              d: "Any of the above",
            },
            answer: "b",
          },
          {
            id: 18,
            context:
              "At the trial of Rabiu Beraye for the offence of unlawful possession of Indian Hemp at the Federal High Court, Kano, the defendant pleaded guilty as charged. He urged the court to temper justice with mercy.",
            question:
              "Upon the plea of guilty of the defendant, the trial court should:",
            options: {
              a: "Record his plea and convict him",
              b: "Call on the prosecution to prove its Case",
              c: "Call on the prosecution to present expert evidence.",
              d: "A and C above.",
            },
            answer: "c",
          },
          {
            id: 19,
            context:
              "At the trial of Rabiu Beraye for the offence of unlawful possession of Indian Hemp at the Federal High Court, Kano, the defendant pleaded guilty as charged. He urged the court to temper justice with mercy.",
            question:
              "On production before the Federal High Court for trial the defendant should be placed:",
            options: {
              a: "In the dock",
              b: "The witness box.",
              c: "In the court detention room.",
              d: "Either C or D above.",
            },
            answer: "a",
          },
          {
            id: 20,
            context:
              "At the trial of Rabiu Beraye for the offence of unlawful possession of Indian Hemp at the Federal High Court, Kano, the defendant pleaded guilty as charged. He urged the court to temper justice with mercy.",
            question:
              "Upon conviction, the defendant in the above scenario shall be:",
            options: {
              a: "Immediately remanded in prison custody",
              b: "Allowed to make allocutus",
              c: "Sentenced to a term of imprisonment or fined.",
              d: "All of the above",
            },
            answer: "b",
          },
        ],
      },
      // ========================================
      // CORPORATE LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2020-january-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "After your Call to the Bar ceremonies, your friend's mum has approached you to register her restaurant with the Corporate Affairs Commission as a sole Proprietorship business.",
            question:
              "One of the following will be the first step you will take to carry out her instructions:",
            options: {
              a: "Enrol at the Supreme Court as a Legal Practitioner",
              b: "Get registered at the Securities and Exchange Commission.",
              c: "Get accredited at the Corporate Affairs Commission.",
              d: "File Corporate Affairs Commission form 1 to check for availability of name.",
            },
            answer: "a",
          },
          {
            id: 2,
            context:
              "After your Call to the Bar ceremonies, your friend's mum has approached you to register her restaurant with the Corporate Affairs Commission as a sole Proprietorship business.",
            question:
              "Assuming she had started business on December 1, 2019, two days before your Call to the Bar which was held on December 3, 2019. When is the last day you should get the business registered?",
            options: {
              a: "December 3, 2019.",
              b: "December 31, 2019.",
              c: "December 1, 2019.",
              d: "December 29, 2019.",
            },
            answer: "d",
          },
          {
            id: 3,
            context:
              "After your Call to the Bar ceremonies, your friend's mum has approached you to register her restaurant with the Corporate Affairs Commission as a sole Proprietorship business.",
            question:
              "One of the following is not a relevant document to register the business:",
            options: {
              a: "CAC 1.",
              b: "CAC1A.",
              c: "CAC BN/1",
              d: "Recognized means of identification.",
            },
            answer: "b",
          },
          {
            id: 4,
            context:
              "After your Call to the Bar ceremonies, your friend's mum has approached you to register her restaurant with the Corporate Affairs Commission as a sole Proprietorship business.",
            question:
              "One of the following is no longer mandatory for the registration of a Business under Part B:",
            options: {
              a: "Accreditation of Professionals",
              b: "Search for availability of Names",
              c: "Completion of Business Name form.",
              d: "Submission of Passport photographs.",
            },
            answer: "a",
          },
          {
            id: 5,
            context:
              "After your Call to the Bar ceremonies, your friend's mum has approached you to register her restaurant with the Corporate Affairs Commission as a sole Proprietorship business.",
            question:
              "Sole proprietorship has one of the following advantages over limited liability companies:",
            options: {
              a: "It is flexible as management is concentrated in one person",
              b: "It can last as long as the proprietor desires even after his/her demise",
              c: "Its business name once registered forecloses other businesses from taking the same name or a name so similar as will likely deceive the public.",
              d: "None of the above",
            },
            answer: "a",
          },
          {
            id: 6,
            context:
              "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N100,000.00 divided into N500,000 ordinary shares of N1.00 each and 250,000 preference shares of N2.00 each.",
            question:
              "One of the following is correct about the company:",
            options: {
              a: "No transfer of shares is effective until an instrument of transfer has been executed",
              b: "No transfer of shares is effective until such transfer has been consented to by the directors",
              c: "The company can never have more than 50 members under any circumstance",
              d: "The age of the directors must never be over 70 years",
            },
            answer: "d",
          },
          {
            id: 7,
            context:
              "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N100,000.00 divided into N500,000 ordinary shares of N1.00 each and 250,000 preference shares of N2.00 each.",
            question:
              "All but one of the following shares can be allowed in Etcetera Nigeria Limited:",
            options: {
              a: "Non-voting shares",
              b: "Weighted shares",
              c: "Non-cumulative preference shares",
              d: "Non-participating preference shares",
            },
            answer: "b",
          },
          {
            id: 8,
            context:
              "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N100,000.00 divided into N500,000 ordinary shares of N1.00 each and 250,000 preference shares of N2.00 each.",
            question:
              "The preference shareholders can have any of the following rights except:",
            options: {
              a: "Right to accumulate dividend at a fixed rate when dividend has not been declared",
              b: "Right to participate in the distribution of the company's assets after creditors have been settled.",
              c: "Right to more than one vote in certain circumstances",
              d: "Right to appoint at least one director",
            },
            answer: "d",
          },
          {
            id: 9,
            context:
              "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N100,000.00 divided into N500,000 ordinary shares of N1.00 each and 250,000 preference shares of N2.00 each.",
            question:
              "A share is considered weighted when:",
            options: {
              a: "It is more expensive than other shares",
              b: "It is in higher demand than other shares",
              c: "More shareholders have that class of shares",
              d: "It carries more than one vote per share",
            },
            answer: "d",
          },
          {
            id: 10,
            context:
              "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N100,000.00 divided into N500,000 ordinary shares of N1.00 each and 250,000 preference shares of N2.00 each.",
            question:
              "The rights of a shareholder include all of the following except:",
            options: {
              a: "To attend the meeting of the board of directors",
              b: "To be elected a member of the audit committee.",
              c: "To vote by show of hand",
              d: "To propose resolutions",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "The ordinary business of an Annual General Meeting includes the following except:",
            options: {
              a: "Presenting company's financial statement for the year ended.",
              b: "Presentation of the audit committee's report",
              c: "Declaration of dividend.",
              d: "Retirement of directors and appointment to replace the retiring directors.",
            },
            answer: "d",
          },
          {
            id: 12,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "The quorum for the meeting was met because:",
            options: {
              a: "Up to one third of the company's members were in attendance",
              b: "Up to 25 members were in attendance.",
              c: "Up to 100 persons were in attendance",
              d: "Quorum was not met.",
            },
            answer: "a",
          },
          {
            id: 13,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "One of the special businesses was to remove Mr. Akindayo Bello as company director. 20 members voted in favour of the resolution while 8 members voted against same. Others refrained from voting. Which of the following is true about the resolution?",
            options: {
              a: "The resolution will sail through because it is an annual general meeting",
              b: "The resolution will sail through because it is approved by the majority of members who are present and voting",
              c: "The resolution will not sail through because 22 members does not meet the required threshold for a meeting of 100 persons.",
              d: "The resolution will not sail through because 75% majority of members is required.",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "The annual return form must be filed within:",
            options: {
              a: "14 days after the AGM was held",
              b: "15 days after the end of the financial year",
              c: "42 days of holding the AGM",
              d: "42 days of sending the notice of AGM.",
            },
            answer: "c",
          },
          {
            id: 15,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "One of the following is not entitled to the notice of the AGM:",
            options: {
              a: "The Company Secretary",
              b: "The Company Auditor",
              c: "The company's debenture holder.",
              d: "The Chairman of the audit committee",
            },
            answer: "d",
          },
          {
            id: 16,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "Which of the following is not a minority protection action under CAMA?",
            options: {
              a: "Application to set aside an alteration of the company's object clause.",
              b: "Application to commence derivative action.",
              c: "Application to investigate the directors of the company.",
              d: "Application for unfairly prejudicial conducts.",
            },
            answer: "a",
          },
          {
            id: 17,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "An application for a minority protection action may be brought by one of the following except:",
            options: {
              a: "Writ of summons.",
              b: "Originating motion.",
              c: "Originating summons.",
              d: "Petition.",
            },
            answer: "a",
          },
          {
            id: 18,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "One of the following reliefs will not be granted by the court under Section 303 CAMA:",
            options: {
              a: "An order directing the applicants to sue the directors in the company's name",
              b: "An order mandating the applicants to sue the company in their personal capacity.",
              c: "An order directing applicants to sue a named third party in the company's name",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 19,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "Which of the following courts is seized with original jurisdiction to entertain a commercial dispute between Alaka Nig Ltd. vs Sam Edo?",
            options: {
              a: "Federal High Court",
              b: "High Court",
              c: "Court of Appeal",
              d: "National Industrial Court",
            },
            answer: "b",
          },
          {
            id: 20,
            context:
              "New Leaf Investment Plc has just concluded its 3rd Annual General Meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company.",
            question:
              "One of the following categories of mergers has been abolished by the Federal Consumers Protection and Competition Commission Act 2019:",
            options: {
              a: "Small Merger",
              b: "Intermediate Merger.",
              c: "Larger Merger.",
              d: "a and c.",
            },
            answer: "b",
          },
        ],
      },
      // ========================================
      // PROPERTY LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2020-january-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Dr. Pam John has just been Called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses: (i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon. (ii) My Toyota Car to my security man Awal. (iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa. (iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grand children.",
            question:
              "What documents will the Executor require to vest title on the beneficiaries?",
            options: {
              a: "A deed of assignment.",
              b: "Deed of transfer",
              c: "Assent",
              d: "Letters of Administration",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Dr. Pam John has just been Called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses: (i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon. (ii) My Toyota Car to my security man Awal. (iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa. (iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grand children.",
            question:
              "One of the following clauses must be inserted in the Will to enable Dr. Pam John demand his professional fees:",
            options: {
              a: "Charging Clause",
              b: "Residuary Clause",
              c: "Demonstrative Clause",
              d: "Exemption Clause.",
            },
            answer: "a",
          },
          {
            id: 3,
            context:
              "Dr. Pam John has just been Called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses: (i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon. (ii) My Toyota Car to my security man Awal. (iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa. (iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grand children.",
            question:
              "All but one are the disadvantages of appointing Dr. Pam John as the sole executor of the Will:",
            options: {
              a: "Dr. Pam John may pre-decease the testator and the testator has to appoint another executor through a codicil.",
              b: "Where Dr. Pam John died before the Will is admitted to probate the Will would be without executor",
              c: "Where Dr. Pam John renounces Probate, the Will would be without executor.",
              d: "Dr. Pam John being the sole executor there is no tendency of conflict.",
            },
            answer: "d",
          },
          {
            id: 4,
            context:
              "Dr. Pam John has just been Called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses: (i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon. (ii) My Toyota Car to my security man Awal. (iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa. (iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grand children.",
            question:
              "Clause (ii) in the Will is:",
            options: {
              a: "General gift",
              b: "Specific gift",
              c: "Pecuniary gift",
              d: "Residuary gift",
            },
            answer: "a",
          },
          {
            id: 5,
            context:
              "Dr. Pam John has just been Called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses: (i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon. (ii) My Toyota Car to my security man Awal. (iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa. (iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grand children.",
            question:
              "Which of the following is the implication of the gift in clause (ii)?",
            options: {
              a: "It cannot suffer ademption.",
              b: "It can suffer ademption.",
              c: "It cannot abate",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 6,
            context:
              "Dr. Pam John has just been Called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses: (i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon. (ii) My Toyota Car to my security man Awal. (iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa. (iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grand children.",
            question:
              "Assuming Audu Gideon one of the sons of the testator wishes to challenge the Will, he may take one of the following steps first:",
            options: {
              a: "File a citation",
              b: "File a caveat.",
              c: "File an application for injunction",
              d: "All of the above",
            },
            answer: "b",
          },
          {
            id: 7,
            context:
              "Dr. Pam John has just been Called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses: (i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon. (ii) My Toyota Car to my security man Awal. (iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa. (iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grand children.",
            question:
              "The principle that the probate Registrar cannot grant probate to a disputed Will while a caveat had not been discharged was laid down in:",
            options: {
              a: "Dan-Jumbo v. Dan-Jumbo (1999) 7 SCNJIR",
              b: "Obusez v. Obusez (2007) 10 NWLR (P. 1043) 430",
              c: "N.B.A. v. Koku (2006) ALL FWLR (Pt. 334) 1928",
              d: "Ajibeye v. Ajibeye (2007) ALL FWLR (Pt. 359) 1321",
            },
            answer: "a",
          },
          {
            id: 8,
            context:
              "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank PLC in order to go into cocoa production.",
            question:
              "As Solicitor for both parties, you are entitled to:",
            options: {
              a: "Full fee from the bank and half fee from Senator Bitrus",
              b: "Full fee from Senator Bitrus and half fee from the bank.",
              c: "Full fees from both parties.",
              d: "Full fee from the bank and one quarter fee from Senator Bitrus.",
            },
            answer: "a",
          },
          {
            id: 9,
            context:
              "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank PLC in order to go into cocoa production.",
            question:
              "Assuming Ambassador Theo Adesuwa is buying the ground floor of the shopping Mall, one of the following covenants must be contained in the deed:",
            options: {
              a: "Covenant to safeguard the premises",
              b: "Covenant to indemnify Ambassador Adesuwa",
              c: "Covenant to keep the premises in tenantable condition.",
              d: "Covenant to insure the premises",
            },
            answer: "b",
          },
          {
            id: 10,
            context:
              "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank PLC in order to go into cocoa production.",
            question:
              "If the shopping mall is located in Kaduna, Senator Bitrus would be required to deduce title for:",
            options: {
              a: "30 years",
              b: "40 years",
              c: "20 years",
              d: "12 years",
            },
            answer: "b",
          },
          {
            id: 11,
            context:
              "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank PLC in order to go into cocoa production.",
            question:
              "Senator Bitrus devised the Shopping Mall in his Will to his first son, Yoana Bitrus, the legacy will be a:",
            options: {
              a: "Specific legacy",
              b: "General legacy",
              c: "Demonstrative legacy",
              d: "Residuary legacy",
            },
            answer: "a",
          },
          {
            id: 12,
            context:
              "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank PLC in order to go into cocoa production.",
            question:
              "If at the time of the death of Senator Bitrus, the bank had sold the shopping mall to recover his loan and interest, the gift to Yoana Bitrus is said to have been:",
            options: {
              a: "Discharged",
              b: "Abated",
              c: "Adeemed",
              d: "Renounced",
            },
            answer: "c",
          },
          {
            id: 13,
            context:
              "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank PLC in order to go into cocoa production.",
            question:
              "One of the following is true when a Bank has obtained an order of foreclosure and the proceeds of the sale is insufficient to discharge the loan:",
            options: {
              a: "The bank can sue for the balance",
              b: "The bank cannot sue for the balance.",
              c: "The bank can sue for specific performance.",
              d: "The bank can attach other property of his.",
            },
            answer: "b",
          },
          {
            id: 14,
            context:
              "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will. They both applied for the grant at the Probate Registry.",
            question:
              "(This question was voided — all candidates were awarded the mark.)",
            options: {
              a: "N/A",
              b: "N/A",
              c: "N/A",
              d: "N/A",
            },
            answer: "bonus",
          },
          {
            id: 15,
            context:
              "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will. They both applied for the grant at the Probate Registry.",
            question:
              "What type of grant will be obtained in respect of Mr. Hope Ochojule's estate?",
            options: {
              a: "Probate",
              b: "Letters of Administration with the will annexed.",
              c: "Simple Administration",
              d: "Double Probate.",
            },
            answer: "c",
          },
          {
            id: 16,
            context:
              "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will. They both applied for the grant at the Probate Registry.",
            question:
              "One of the following may not lead to revocation of a grant already made in respect of the estate of Mr. Hope Ochojule:",
            options: {
              a: "If his will is found after an intestate grant.",
              b: "If he was found to have been married under the Act.",
              c: "If grant is found to have been made to the wrong person(s).",
              d: "If applicants had failed to meet the conditions precedent to a grant",
            },
            answer: "bonus",
          },
          {
            id: 17,
            context:
              "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will. They both applied for the grant at the Probate Registry.",
            question:
              "Which of the following is not a quality of a Personal Representative?",
            options: {
              a: "Availability",
              b: "Lack of Conflict of Ideas",
              c: "Age",
              d: "Lack of Conflict of Interest",
            },
            answer: "b",
          },
          {
            id: 18,
            context:
              "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will. They both applied for the grant at the Probate Registry.",
            question:
              "What type of grant is obtainable to replace a sole executor who is insane?",
            options: {
              a: "Grant Coligenda bona",
              b: "Grant durante absenta",
              c: "Grant durante dementa",
              d: "Grant ad litem.",
            },
            answer: "c",
          },
          {
            id: 19,
            context:
              "Mrs Yemi Olawole of No. 15 Kanakry Street Victoria Island Lagos, is desirous of buying a house with part of her retirement benefits. The property she wants to purchase is situate at No. 3 Rimi Close Alvan Ikoku Avenue, Lagos State with Certificate of Occupancy no. LAG/IK/072/14 Dated 14th March, 2014. The property belongs to Mr. Nathan Ekpo.",
            question:
              "One of the following legislations will not regulate the above transaction:",
            options: {
              a: "Personal Income Tax Act",
              b: "Land Use Act",
              c: "Registration of Titles Law",
              d: "Capital Gains Tax Act.",
            },
            answer: "c",
          },
          {
            id: 20,
            context:
              "Mrs Yemi Olawole of No. 15 Kanakry Street Victoria Island Lagos, is desirous of buying a house with part of her retirement benefits. The property she wants to purchase is situate at No. 3 Rimi Close Alvan Ikoku Avenue, Lagos State with Certificate of Occupancy no. LAG/IK/072/14 Dated 14th March, 2014. The property belongs to Mr. Nathan Ekpo.",
            question:
              "At the initial stage of the transaction the parties will prepare and execute a:",
            options: {
              a: "Sale Agreement",
              b: "Deed of Sale of land Agreement",
              c: "Contract Agreement",
              d: "Sale of land Agreement",
            },
            answer: "d",
          },
        ],
      },
      // ========================================
      // PROFESSIONAL ETHICS & SKILLS (20 Questions)
      // ========================================
      {
        id: "2020-january-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context:
              "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor he briefed Okoko Item Ubong, a lawyer to file an action at the State High Court in Asaba. In the fullness of time judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and Federal Medical Centre Asaba for negligence, the judgement debt was duly liquidated by the defendants on the 20 of September, 2018, and fee money paid into Okoko Item Ubong's trust account with the First Bank of Nigeria Plc. Okoko Item out of sheer zeal without the concurrency of his client paid himself fee sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question:
              "In which account should Mr. Okoko Item Ubong have lodged the judgement sum?",
            options: {
              a: "The Office Account",
              b: "Trust Account",
              c: "Client Account",
              d: "None of the above",
            },
            answer: "c",
          },
          {
            id: 2,
            context:
              "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor he briefed Okoko Item Ubong, a lawyer to file an action at the State High Court in Asaba. In the fullness of time judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and Federal Medical Centre Asaba for negligence, the judgement debt was duly liquidated by the defendants on the 20 of September, 2018, and fee money paid into Okoko Item Ubong's trust account with the First Bank of Nigeria Plc. Okoko Item out of sheer zeal without the concurrency of his client paid himself fee sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question:
              "Mr Okoko Item Ubong could be tried by one of the following regulatory bodies:",
            options: {
              a: "Council of Legal Education",
              b: "General Council of the Bar",
              c: "Legal Practitioners Disciplinary Committee",
              d: "Body of Benchers",
            },
            answer: "c",
          },
          {
            id: 3,
            context:
              "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor he briefed Okoko Item Ubong, a lawyer to file an action at the State High Court in Asaba. In the fullness of time judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and Federal Medical Centre Asaba for negligence, the judgement debt was duly liquidated by the defendants on the 20 of September, 2018, and fee money paid into Okoko Item Ubong's trust account with the First Bank of Nigeria Plc. Okoko Item out of sheer zeal without the concurrency of his client paid himself fee sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question:
              "Okoko Item Ubong could be tried for commission of one of the following professional wrongs:",
            options: {
              a: "Obtaining by false pretence",
              b: "Infamous conduct in a professional respect.",
              c: "Conduct incompatible with the status of a legal practitioner",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 4,
            context:
              "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor he briefed Okoko Item Ubong, a lawyer to file an action at the State High Court in Asaba. In the fullness of time judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and Federal Medical Centre Asaba for negligence, the judgement debt was duly liquidated by the defendants on the 20 of September, 2018, and fee money paid into Okoko Item Ubong's trust account with the First Bank of Nigeria Plc. Okoko Item out of sheer zeal without the concurrency of his client paid himself fee sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question:
              "Conversely, if Okoko Item Ubong were to be a judicial officer, which body would have been saddled with the power to make out adequate sanctions?",
            options: {
              a: "Federal Judicial Service Commission",
              b: "State Judicial Service Commission",
              c: "Legal Practitioners Disciplinary Committee",
              d: "National Judicial Council",
            },
            answer: "d",
          },
          {
            id: 5,
            context:
              "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor he briefed Okoko Item Ubong, a lawyer to file an action at the State High Court in Asaba. In the fullness of time judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and Federal Medical Centre Asaba for negligence, the judgement debt was duly liquidated by the defendants on the 20 of September, 2018, and fee money paid into Okoko Item Ubong's trust account with the First Bank of Nigeria Plc. Okoko Item out of sheer zeal without the concurrency of his client paid himself fee sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question:
              "Assuming Okoko Item Ubong discharges his professional obligation to his client with utmost diligence and profession. What is he expected to do with the case file?",
            options: {
              a: "Close the file",
              b: "Return the file",
              c: "Archive the file",
              d: "None of the above",
            },
            answer: "a",
          },
          {
            id: 6,
            context:
              "Emeka Amadi was called to the Nigerian Bar in 2019. One month after his Call, he set up a law office with his friend Chidi who was called in 2015. Kwame, a Ghanaian who is a legal practitioner in Ghana since 2012, intends to join Emeka and Chidi as a partner in Nigeria.",
            question:
              "What type of practice are Emeka and Chidi carrying on if they have separate practice but contribute money to pay rent and salaries of office staff?",
            options: {
              a: "Partnership",
              b: "Sole practitionership",
              c: "Sole proprietorship",
              d: "Associateship",
            },
            answer: "d",
          },
          {
            id: 7,
            context:
              "Emeka Amadi was called to the Nigerian Bar in 2019. One month after his Call, he set up a law office with his friend Chidi who was called in 2015. Kwame, a Ghanaian who is a legal practitioner in Ghana since 2012, intends to join Emeka and Chidi as a partner in Nigeria.",
            question:
              "Kwame may join Emeka and Chidi as partners in their law firm in one of the following cases:",
            options: {
              a: "If he is given a warrant by the Chief Justice of Nigeria to practice law in Nigeria.",
              b: "If he is permitted to practice law in Nigeria by the President of Nigeria",
              c: "If he is permitted by the Attorney General of the Federation to practice and enrolled in the Supreme Court of Nigeria",
              d: "None of the above",
            },
            answer: "c",
          },
          {
            id: 8,
            context:
              "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption she was taken round the office, shown the library, introduced to the secretarial staff and informed that Mr Mighty Igor will be her ________ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a _____ he can sign document in the same manner as a commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal partner of the law firm is a member of the ________, the body responsible for making and revising the Rules of Professional Conduct for legal practitioners and the _________, body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the ______.",
            question:
              "Mr Mighty Igor will be her ________ for the duration of her externship (fill in the blank):",
            options: {
              a: "Principal partner",
              b: "Field Co-ordinator",
              c: "Field Supervisor",
              d: "Field Mentor",
            },
            answer: "c",
          },
          {
            id: 9,
            context:
              "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption she was taken round the office, shown the library, introduced to the secretarial staff and informed that Mr Mighty Igor will be her ________ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a _____ he can sign document in the same manner as a commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal partner of the law firm is a member of the ________, the body responsible for making and revising the Rules of Professional Conduct for legal practitioners and the _________, body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the ______.",
            question:
              "As a _____ he can sign documents in the same manner as a commissioner for Oaths (fill in the blank):",
            options: {
              a: "Senior Advocate of Nigeria",
              b: "Bencher",
              c: "Notary Public",
              d: "Life Bencher",
            },
            answer: "c",
          },
          {
            id: 10,
            context:
              "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption she was taken round the office, shown the library, introduced to the secretarial staff and informed that Mr Mighty Igor will be her ________ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a _____ he can sign document in the same manner as a commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal partner of the law firm is a member of the ________, the body responsible for making and revising the Rules of Professional Conduct for legal practitioners and the _________, body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the ______.",
            question:
              "Mr Idaliki Usman is a member of the ________, the body responsible for making and revising the Rules of Professional Conduct (fill in the blank):",
            options: {
              a: "Council of Legal Education",
              b: "Body of Benchers",
              c: "General Council of the Bar",
              d: "Legal Practitioners Disciplinary Committee",
            },
            answer: "c",
          },
          {
            id: 11,
            context:
              "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption she was taken round the office, shown the library, introduced to the secretarial staff and informed that Mr Mighty Igor will be her ________ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a _____ he can sign document in the same manner as a commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal partner of the law firm is a member of the ________, the body responsible for making and revising the Rules of Professional Conduct for legal practitioners and the _________, body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the ______.",
            question:
              "The _________, body responsible for the appointment and discipline of judicial officers (fill in the blank):",
            options: {
              a: "National Judicial Committee",
              b: "National Judiciary Commission",
              c: "Nigerian Judicial Commission",
              d: "National Judicial Council",
            },
            answer: "d",
          },
          {
            id: 12,
            context:
              "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption she was taken round the office, shown the library, introduced to the secretarial staff and informed that Mr Mighty Igor will be her ________ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a _____ he can sign document in the same manner as a commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal partner of the law firm is a member of the ________, the body responsible for making and revising the Rules of Professional Conduct for legal practitioners and the _________, body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the ______.",
            question:
              "She can achieve her dream of being called to the Nigerian Bar by the ______ (fill in the blank):",
            options: {
              a: "Council of Legal Education",
              b: "Body of Benchers",
              c: "Nigerian Law School",
              d: "Call to Bar Committee",
            },
            answer: "b",
          },
          {
            id: 13,
            context:
              "During Adejayi's externship programme he admitted to his Group mentor that he had learnt a lot of courtroom practice. Ade narrated that the first day he attended court with his principal Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question:
              "The reason why the front row was avoided by Mr. Fatoki and other lawyers was because:",
            options: {
              a: "The seat was reserved for Senior Advocates and Benchers",
              b: "The seat was reserved for Senior Advocates and Benchers and Attorneys-General",
              c: "The seat was reserved for Senior Advocates, Life Benchers and Attorneys-General",
              d: "The seat was reserved for Senior Advocates, Life Benchers, Attorneys-General and Notary Publics",
            },
            answer: "c",
          },
          {
            id: 14,
            context:
              "During Adejayi's externship programme he admitted to his Group mentor that he had learnt a lot of courtroom practice. Ade narrated that the first day he attended court with his principal Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question:
              "These front row seats in the courtroom reserved for persons identified in your answer in (13) above can also be referred to as:",
            options: {
              a: "The Inner Bar",
              b: "The Outer Bar",
              c: "The Inner Temple",
              d: "The Gallery",
            },
            answer: "a",
          },
          {
            id: 15,
            context:
              "During Adejayi's externship programme he admitted to his Group mentor that he had learnt a lot of courtroom practice. Ade narrated that the first day he attended court with his principal Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question:
              "Another privilege enjoyed by the category of persons identified in (13) above is the:",
            options: {
              a: "Right to mention all their cases out of turn",
              b: "Right to mention matters for trial out of turn",
              c: "Right to mention any motion in which he is appearing out of turn",
              d: "Right to have their matters adjourned sine die",
            },
            answer: "b",
          },
          {
            id: 16,
            context:
              "During Adejayi's externship programme he admitted to his Group mentor that he had learnt a lot of courtroom practice. Ade narrated that the first day he attended court with his principal Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question:
              "The reason Mr Fatoki stayed behind instead of leaving immediately after his matter was:",
            options: {
              a: "Due to the Order of precedence",
              b: "So as not to unrobe the court",
              c: "So as not to undress the court",
              d: "So as not to be cited for contempt of court.",
            },
            answer: "c",
          },
          {
            id: 17,
            context:
              "While in court during the externship exercise Ola Ojila witnessed the conduct of the examination of witnesses. He observed that all but one were the functions of cross-examination namely (17)______. Ola also noticed that the judge discouraged the use of (18)______ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)______ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the witness lawyer kept emphasizing in a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)______.",
            question:
              "All but one were the functions of cross-examination namely ______ (fill in the blank):",
            options: {
              a: "To introduce undisputed facts",
              b: "To test the veracity or credibility of the witness's testimony",
              c: "To put forward the client's version of the disputed facts.",
              d: "To lay foundation for the introduction of exhibits",
            },
            answer: "d",
          },
          {
            id: 18,
            context:
              "While in court during the externship exercise Ola Ojila witnessed the conduct of the examination of witnesses. He observed that all but one were the functions of cross-examination namely (17)______. Ola also noticed that the judge discouraged the use of (18)______ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)______ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the witness lawyer kept emphasizing in a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)______.",
            question:
              "The judge discouraged the use of ______ when examining the witness during examination-in-chief (fill in the blank):",
            options: {
              a: "Non-leading questions",
              b: "Leading questions",
              c: "Open questions",
              d: "All of the above",
            },
            answer: "b",
          },
          {
            id: 19,
            context:
              "While in court during the externship exercise Ola Ojila witnessed the conduct of the examination of witnesses. He observed that all but one were the functions of cross-examination namely (17)______. Ola also noticed that the judge discouraged the use of (18)______ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)______ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the witness lawyer kept emphasizing in a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)______.",
            question:
              "They were only allowed in instances such as in ______ matters (fill in the blank):",
            options: {
              a: "Open matters",
              b: "Non-secret matters",
              c: "Introductory matters",
              d: "Contentious matters",
            },
            answer: "c",
          },
          {
            id: 20,
            context:
              "While in court during the externship exercise Ola Ojila witnessed the conduct of the examination of witnesses. He observed that all but one were the functions of cross-examination namely (17)______. Ola also noticed that the judge discouraged the use of (18)______ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)______ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the witness lawyer kept emphasizing in a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)______.",
            question:
              "The witness's lawyer applied to court to ______ (fill in the blank):",
            options: {
              a: "Call in the police for his arrest",
              b: "Call the adverse party to testify",
              c: "Cross-examine him in order to declare him a hostile witness",
              d: "Tender evidence of his bad character.",
            },
            answer: "c",
          },
        ],
      },
    ],
  },
};

export default mcqQuestions;
