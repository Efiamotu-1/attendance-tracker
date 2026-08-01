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
            context: "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question: "The best and fastest court where this claim can be pursued is:",
            options: {
              a: "District Court,",
              b: "High Court",
              c: "Small Claims Court/Magistrate Court,",
              d: "Native Court",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question: "After the claim in the procedure you quoted above is issued by the Registrar of Court, it must be served within how many days?",
            options: {
              a: "21 days",
              b: "14 days.",
              c: "10 days.",
              d: "7 days.",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question: "The defendant must respond to the claim within ---days failing which he will be deemed to have admitted the claim.",
            options: {
              a: "5 days.",
              b: "7 days",
              c: "8 days.",
              d: "10 days.",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question: "The defendant can enter a counter-claim of up to",
            options: {
              a: "N6,000.",
              b: "N7,000",
              c: "N8,000.",
              d: "N10,000",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "Mr. Thomas Boris, a businessman of No. 10 Ojuelegba Road, Lagos requested in writing N5,000,000.00 (Five Million Naira) loan from LABO Microfinance Bank, Wall Street, Lagos and was granted. The term of agreement stated that the loan with interest should be repaid within 90 days from the date it was granted Mr. Thomas Boris refused/neglected to pay back the loan after its due date.",
            question: "The hearing of the claim and the delivery of judgment must be concluded within:",
            options: {
              a: "180 days.",
              b: "120 days.",
              c: "90 days.",
              d: "60 days.",
            },
            answer: "d",
          },
          {
            id: 6,
            context: "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10th April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr. Dogo's Prado Jeep which was occupied by his wife Mrs. Raliat Yunus, their 7 years old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered",
            question: "The proper parties in the action are:",
            options: {
              a: "The Dogo Yunus family (Claimants) vs Roland Giddy (Defendant).",
              b: "Mr. Dogo Yunus, Mrs. Raliat Yunus, Master Taju Yunus (Claimants) vs Roland Giddy (Defendant).",
              c: "Mr. Dogo Yunus, Mrs. Raliat Yunus, Master Taju Yunus (suing by his guardian, Mr. Dogo Yunus) (Claimants) versus Roland Giddy (Defendant)",
              d: "Mr. Dogo Yunus, Mrs. Raliat Yunus, suing for themselves and their son Master Taju Yunus (Claimants) versus Roland Giddy (Defendant),",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10th April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr. Dogo's Prado Jeep which was occupied by his wife Mrs. Raliat Yunus, their 7 years old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered",
            question: "Assuming judgment was entered against the defendant and the defendant wants to prevent the immediate execution of the judgment, he shall apply",
            options: {
              a: "By motion on notice for stay or proceedings",
              b: "By motion on notice for stay of execution",
              c: "By summons for Maneva Injunction",
              d: "By motion on notice for injunction pending Appeal",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10th April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr. Dogo's Prado Jeep which was occupied by his wife Mrs. Raliat Yunus, their 7 years old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered",
            question: "If the judgment debtor is making plans to migrate to Canada and is also planning to move all his assets away from Nigeria, the Claimant will have to apply",
            options: {
              a: "By motion on notice for interim injunction",
              b: "Motion ex-parte for Mareva Injunction.",
              c: "Motion on notice for Anton Piller Injunction.",
              d: "Motion ex-parte for interpleader summons.",
            },
            answer: "b",
          },
          {
            id: 9,
            context: "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10th April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr. Dogo's Prado Jeep which was occupied by his wife Mrs. Raliat Yunus, their 7 years old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered",
            question: "The originating process by which the Defendant will appeal against the judgment obtained in (7) above is:",
            options: {
              a: "Respondent's Notice",
              b: "Brief of Argument.",
              c: "Notice of Appeal.",
              d: "Grounds of Appeal.",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "During your externship programme, Mr. Dogo Yunus came to your office to brief your Principal about an action he wants to institute in court. He stated that on 10th April, 2019 one Roland Giddy drove at top speed along the Eko Hotel Road, Victoria Island, Lagos and was also using his mobile phone at the same time. Roland Giddy ran into Mr. Dogo's Prado Jeep which was occupied by his wife Mrs. Raliat Yunus, their 7 years old Son, Taju Yunus and himself. The occupants of the Prado Jeep were severely injured and were admitted at the Goodwill Hospital Victoria Island, Lagos for treatment. Mr. Dogo's Prado Jeep was also badly damaged. Mr. Dogo Yunus, his wife and son now want to institute an action in court to recover their hospital bill, repair the damaged Prado Jeep and also they want to claim damages for the pain and psychological trauma they suffered",
            question: "The record of appeal will be compiled and transmitted to the appellate court within",
            options: {
              a: "9 months after service of the Respondent's notice.",
              b: "42 days after the filing of the Grounds of Appeal.",
              c: "60 days after the filing of the Notice of Appeal",
              d: "60 days after the judgment of the trial court.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Mr. John Pam died intestate on 1st January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kinsley Mallam to give the title documents to them. Emmanuel Pam the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to",
            question: "This kind of procedure is referred to as:",
            options: {
              a: "Stakeholder interpleader",
              b: "Sheriff interpleader.",
              c: "Court interpleader",
              d: "Personal interpleader.",
            },
            answer: "a",
          },
          {
            id: 12,
            context: "Mr. John Pam died intestate on 1st January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kinsley Mallam to give the title documents to them. Emmanuel Pam the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to",
            question: "Assuming you are Counsel to Mr. Kingsley Mallam, what will be your advice to him with respect to the title document?",
            options: {
              a: "Give it to Emmanuel Pam being the eldest son.",
              b: "Deposit it with the bank till Letters of Administration is granted",
              c: "Apply to court to order them to take necessary proceedings between/amongst themselves in order to determine who is entitled to take the title document.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "Mr. John Pam died intestate on 1st January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kinsley Mallam to give the title documents to them. Emmanuel Pam the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to",
            question: "One of the following is not an essential fact for Mr. Kingsley Mallam to state in his supporting affidavit.",
            options: {
              a: "That the applicant has not colluded with any of the claimants.",
              b: "That he must show that the property is not in his possession",
              c: "That he has no interest in the subject matter in dispute other than charges for costs.",
              d: "That the applicant is willing to pay transfer it as the court of Judge may direct.",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "Mr. John Pam died intestate on 1st January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kinsley Mallam to give the title documents to them. Emmanuel Pam the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to",
            question: "Assuming both Victor Pam and Emmanuel Pam have gone to court regarding the matter, what step can be taken to prevent Mr. Kingsley Mallam from giving it to either of the parties?",
            options: {
              a: "Interlocutory injunction",
              b: "Interim injunction",
              c: "Order of mandamus.",
              d: "Mareva injunction.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "Mr. John Pam died intestate on 1st January, 2019 leaving behind two children namely: Emmanuel Pam (35) and Victor Pam (30). The title document to his only property is in the possession of his Solicitor, Mr. Kingsley Mallam. While his letter of Administration is still being processed, his two sons have been disturbing Mr. Kinsley Mallam to give the title documents to them. Emmanuel Pam the eldest son is laying claim to the title document being the first son. Mr. Kingsley Mallam is confused as to who to give the title document and he does not want to give it to the wrong person and neither does he want to continue to hold it. He has now approached the court to decide who to deliver the document to",
            question: "Assuming the court makes an order that Mr. Kingsley Mallam gives the title documents to Victor Pam, how many days does Emmanuel Pam have to appeal?",
            options: {
              a: "3 months.",
              b: "90 days.",
              c: "14 days.",
              d: "30 days.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the said premises. The annual rent is N7,000,000.00 (Seven Million Naira) only. Now answer the following questions:",
            question: "One of the following must be served on Miss Bolanle in order to properly determine her tenancy.",
            options: {
              a: "A 6-month notice to quit, which must expire on 31st December",
              b: "A 6-month notice, which must expire on 1st January",
              c: "A 6-month notice to expire at the end of January",
              d: "A 7 days' notice of owner's interim to recover possession.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the said premises. The annual rent is N7,000,000.00 (Seven Million Naira) only. Now answer the following questions:",
            question: "Assuming upon being served with the document you have identified in 16 above to determine Bolanle's tenancy. What other document are you required to serve on her?",
            options: {
              a: "Notice to quit.",
              b: "7 days Owner's Intention to apply to court to recover possession",
              c: "Writ of summons.",
              d: "Plaint as in form E.",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the said premises. The annual rent is N7,000,000.00 (Seven Million Naira) only. Now answer the following questions:",
            question: "Assuming it has become necessary to go to court. In which of the following courts will you institute the action?",
            options: {
              a: "District Court, Abuja.",
              b: "Magistrate Court, Abuja.",
              c: "Customary Court, Abuja.",
              d: "High Court of the Federal Capital Territory, Abuja.",
            },
            answer: "d",
          },
          {
            id: 19,
            context: "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the said premises. The annual rent is N7,000,000.00 (Seven Million Naira) only. Now answer the following questions:",
            question: "Assuming the scenario was in Lagos, in which Court would you have instituted the action?",
            options: {
              a: "High Court of the Lagos State.",
              b: "Magistrate Court of Lagos State.",
              c: "Customary Court of Lagos State.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "Miss Bolanle is a tenant in the property belonging to Mr. Peter Azi situate at No 22 Gwarimpa Estate, Abuja. It is a yearly tenancy commencing on 1st January, 2017. Miss Bolanle has been in default of payment of rent and Mr. Peter Azi has approached you to recover possession of the said premises. The annual rent is N7,000,000.00 (Seven Million Naira) only. Now answer the following questions:",
            question: "Assuming the action is instituted at the High Court of Federal Capital Territory, Abuja, by which form would you commence the action?",
            options: {
              a: "Writs as in form G.",
              b: "Plaint as in form F.",
              c: "Originating summons.",
              d: "Originating motion.",
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
            context: "After your Call to Bar Ceremonies, your friend's mum has approached you to register her restaurant with Corporate Affairs Commission as a sole proprietorship business.",
            question: "One of the first step you will take to carryout her instructions:",
            options: {
              a: "Enroll to the Supreme Court as a Legal Practitioner",
              b: "Get registered at the Securities and Exchange Commission",
              c: "Get accredited at the Corporate Affairs Commission",
              d: "File Corporate from A1 to check for availability of name.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "After your Call to Bar Ceremonies, your friend's mum has approached you to register her restaurant with Corporate Affairs Commission as a sole proprietorship business.",
            question: "Assuming she had started business on December 1, 2019, two days before your Call to bar which was held on December 3, 2019. When is the last day you should get the business registered?",
            options: {
              a: "December 3, 2019",
              b: "December 31, 2019",
              c: "December 1, 2019",
              d: "December 29, 2019",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "After your Call to Bar Ceremonies, your friend's mum has approached you to register her restaurant with Corporate Affairs Commission as a sole proprietorship business.",
            question: "One of the following is not a relevant document to register the business.",
            options: {
              a: "CAC1",
              b: "CAC 1A",
              c: "CAC BN/1",
              d: "Recognized means of identification",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "After your Call to Bar Ceremonies, your friend's mum has approached you to register her restaurant with Corporate Affairs Commission as a sole proprietorship business.",
            question: "One of the following is no longer mandatory for the registration of a Business under part B",
            options: {
              a: "Accreditation of Professionals",
              b: "Search for availability of Names",
              c: "Completion of Business Name form.",
              d: "Submission of Passport Photographs",
            },
            answer: "d",
          },
          {
            id: 5,
            context: null,
            question: "Sole proprietorship has one of the following advantages over limited liability companies",
            options: {
              a: "It is flexible as management is concentrated in one person",
              b: "It can last as long as the proprietor desires even after his/ her demise",
              c: "It business name once registered foreclose of her businesses from taking the same name or name so similar as will likely deceive the public",
              d: "None of the above.",
            },
            answer: "bonus",
          },
          {
            id: 6,
            context: "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N1,000,000.00 divided into 500,000 ordinary shares of N1.00 each and 250,000 preference share of N2.00 each",
            question: "One of the following is correct about the company:",
            options: {
              a: "No transfer of shares is effective until an instrument of transfer has be executed",
              b: "No transfer of shares is effective until such transfer has been consented to by the directors.",
              c: "the company can never have more than 50 members under any circumstance",
              d: "the age of the directors must never be over 70years.",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N1,000,000.00 divided into 500,000 ordinary shares of N1.00 each and 250,000 preference share of N2.00 each",
            question: "All but no one of the following shares can be allowed in Electera Nigeria Limited.",
            options: {
              a: "Non-voting shares",
              b: "Weighted shares",
              c: "Non-cumulative preference shares",
              d: "",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N1,000,000.00 divided into 500,000 ordinary shares of N1.00 each and 250,000 preference share of N2.00 each",
            question: "The preference shareholders can have any of the following rights except",
            options: {
              a: "Right to accumulate dividend at a fixed rate when divided has not been declared",
              b: "Right to participate in the distribution of the company's assets after creditors have been settled",
              c: "Right to more than one vote in certain circumstances.",
              d: "Right to appoint at least one director.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Etcetera Nigeria Limited has just been registered at the Corporate Affairs Commission with an authorised share capital of N1,000,000.00 divided into 500,000 ordinary shares of N1.00 each and 250,000 preference share of N2.00 each",
            question: "A share is considered weighted when:",
            options: {
              a: "Its more expensive than others shares",
              b: "It is in higher demand than other shares",
              c: "More shareholders have that class of shares",
              d: "It carries more than one vote per share",
            },
            answer: "d",
          },
          {
            id: 10,
            context: null,
            question: "The rights of a shareholder include all of the following except.",
            options: {
              a: "To attend the meeting of the board of directors",
              b: "To elected a member of the audit committee",
              c: "To vote by show of hand",
              d: "To purpose resolutions.",
            },
            answer: "a",
          },
          {
            id: 11,
            context: "New leaf Investment Plc has just concluded its 3rd Annual general meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company",
            question: "The ordinary business of an Annual General Meeting includes the following except",
            options: {
              a: "Presenting the company's financial statement for the year ended.",
              b: "Presentation of the audit committee's report",
              c: "Declaration of dividend",
              d: "Retirement of directors and appointment to replace the retiring directors",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "New leaf Investment Plc has just concluded its 3rd Annual general meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company",
            question: "The quorum for the meeting was met because",
            options: {
              a: "Up 1/3 (One third) of the company' members were in attendance",
              b: "Up to 25 members were in attendance",
              c: "Up to 100 persons were in attendance",
              d: "Quorum was not met",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "New leaf Investment Plc has just concluded its 3rd Annual general meeting where it transacted both ordinary business and special businesses. 100 members were in attendance out of a total of 300 members of the company",
            question: "One of the special businesses was to remove Mr. Akindayo Bello as company director. 20 members voted in favour of the resolution while 8 members voted against same. Others refrained from voting. Which of the following is true about the resolution?",
            options: {
              a: "The resolution will sail through because it is an annual general meeting",
              b: "The resolution will sail through because it is approved by the majority of members who are present and voting",
              c: "the resolution will not sail through because 22 members does not meet the required threshold for a meeting of 100 persons",
              d: "the resolution will not sail through because 75% majority of members are requested",
            },
            answer: "c",
          },
          {
            id: 14,
            context: null,
            question: "The annual return form must be filed within:",
            options: {
              a: "14 days after the AGM was held",
              b: "15 days after the end of the financial year",
              c: "42 days of holding the AGM",
              d: "42 days of sending the notice of AGM",
            },
            answer: "c",
          },
          {
            id: 15,
            context: null,
            question: "One of the following is not entitled to the notice of the AGM:",
            options: {
              a: "The company secretary",
              b: "The company Auditor",
              c: "The company's detective holder",
              d: "The Chairman of the audit committee",
            },
            answer: "bonus",
          },
          {
            id: 16,
            context: null,
            question: "Which of the following is not a majority protection action under CAMA?",
            options: {
              a: "Application to set aside an alteration of the company's object clause",
              b: "Application commence derivative action",
              c: "Application to investigate the directors of company",
              d: "Application unfairly prejudicial conductions",
            },
            answer: "c",
          },
          {
            id: 17,
            context: null,
            question: "An application for a minority protection action, may be brought by one of the following except",
            options: {
              a: "Writ of summons",
              b: "Origination motion",
              c: "Originating summons",
              d: "Petition",
            },
            answer: "a",
          },
          {
            id: 18,
            context: null,
            question: "One of the following reliefs will not be granted by the court under section 303 CAMA:",
            options: {
              a: "An order directing the applicants to sue the directors in the company's name",
              b: "An order mandating the applicants to sue the company in their personal capacity",
              c: "An order directing applicants to sue a named third party in the company's name",
              d: "None of the above",
            },
            answer: "d",
          },
          {
            id: 19,
            context: null,
            question: "Which of the following courts is seized with original jurisdiction to entertain a commercial dispute between Alaka Nig. Ltd. Vs Sam Edo?",
            options: {
              a: "",
              b: "",
              c: "",
              d: "",
            },
            answer: "bonus",
          },
          {
            id: 20,
            context: null,
            question: "One of the following categories of mergers has been abolished by the Federal Consumers Protection and Competition Commission Act 2019:",
            options: {
              a: "Small Merger",
              b: "Intermediate Merger",
              c: "Larger merger",
              d: "A and c",
            },
            answer: "a",
          },
        ],
      },
      // ========================================
      // PROPERTY LAW PRACTICE (20 Questions)
      // ========================================
      {
        id: "2020-january-property-new-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Dr. Pam John has just been called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses:\n(i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon.\n(ii) My Toyota Car to my security man Awal.\n(iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa.\n(iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grandchildren.",
            question: "What documents will the executor require to vest title on the beneficiaries?",
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
            context: "Dr. Pam John has just been called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses:\n(i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon.\n(ii) My Toyota Car to my security man Awal.\n(iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa.\n(iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grandchildren.",
            question: "One of the following clauses must be inserted in the Will to enable Dr. Pam John demand his professional fees.",
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
            context: "Dr. Pam John has just been called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses:\n(i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon.\n(ii) My Toyota Car to my security man Awal.\n(iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa.\n(iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grandchildren.",
            question: "All but one are the disadvantages of appointing Dr. Pam John as the sole executor of the Will",
            options: {
              a: "Dr. Pam John may pre-deceased the testator and the testator has to appoint another executor through a codicil.",
              b: "Where Dr. Pam John died before the Will is admitted to probate the Will would be without executor.",
              c: "Where Dr. Pam John renounces Probate, the will would be without executor.",
              d: "Dr. Pam John being the sole executor there is no tendency of conflict.",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "Dr. Pam John has just been called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses:\n(i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon.\n(ii) My Toyota Car to my security man Awal.\n(iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa.\n(iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grandchildren.",
            question: "Clause (ii) in the Will is -",
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
            context: "Dr. Pam John has just been called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses:\n(i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon.\n(ii) My Toyota Car to my security man Awal.\n(iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa.\n(iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grandchildren.",
            question: "Which of the following is the implication of the gift in clause (ii)",
            options: {
              a: "It cannot suffer ademption.",
              b: "It can suffer ademption.",
              c: "It cannot abate.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "Dr. Pam John has just been called to Bar and was appointed as the Sole Executor to the Will of Gideon Izang, who has two sons namely: Ayuba Gideon and Audu Gideon. The will has the following clauses:\n(i) My 3 bedroom flat situated at No.2 Ahmadu Bello Way, Jos be given to my son Ayuba Gideon.\n(ii) My Toyota Car to my security man Awal.\n(iii) My collection of shoes by Clerks to be given to my nephew Rindom Musa.\n(iv) My solicitor Dr. Pam John is hereby appointed as trustee to fund the education of my grandchildren.",
            question: "Assuming Audu Gideon one of the sons of the testator wishes to challenge the Will, he may take one of the following steps first.",
            options: {
              a: "File a citation",
              b: "File a caveat.",
              c: "File an application for injunction",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: null,
            question: "The principle that the probate Registrar cannot grant probate to a disputed Will while a caveat had not been discharged was laid down in:",
            options: {
              a: "Dan-Jumbo v Dan-Jumbo (1999) 7 SCNJIR",
              b: "Obusez v Obusez (2007) 10 NWLR (Pt. 1043) 430.",
              c: "N.B.A. v Koku (2006) ALL FWLR (Pt. 3340) 1928.",
              d: "Ajibaiye v Ajibaiye (2007) AIL FWLR (Pt. 359) 1321.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank Plc in order to go into cocoa production.",
            question: "As Solicitor for both parties, you are entitled to:",
            options: {
              a: "Full fee from the bank and half fee from Senator Bitrus",
              b: "Full fee from Senator Bitrus and half fee from the bank.",
              c: "Full fees from both parties.",
              d: "Full fee from the bank and one quarters fee from Senator Bitrus.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank Plc in order to go into cocoa production.",
            question: "Assuming Ambassador Theo Adesuwa is buying the ground floor of the shopping Mall, one of the following covenants must be contained in the deed:",
            options: {
              a: "Covenant to safeguard the premises",
              b: "Covenant to keep in safe custody and production to Ambassador Adesuwa.",
              c: "Covenant to keep the premises in tenantable condition",
              d: "Covenant to insure the premises.",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank Plc in order to go into cocoa production.",
            question: "If the shopping mall is located in Kaduna, Senator Bitrus would be required to deduce title for:",
            options: {
              a: "12 years",
              b: "30 years",
              c: "40 years",
              d: "20 years",
            },
            answer: "b",
          },
          {
            id: 11,
            context: "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank Plc in order to go into cocoa production.",
            question: "Senator Bitrus devised the Shopping Mall in his Will to his first son, Yoana Bitrus, the legacy will be a:",
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
            context: "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank Plc in order to go into cocoa production.",
            question: "If at the time of the death of Senator Bitrus, the Bank had sold the shopping mall to recover his loan and interest, the gift to Yoana Bitrus is said to have been:",
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
            context: "Senator Boboye Bitrus owns a shopping Mall at Plot A98 Aminu Kano Way, Maitama, Abuja. In 2019, Senator Bitrus decided to use the shopping Mall as a security for a loan of N75m from Assention Bank Plc in order to go into cocoa production.",
            question: "One of the following is true when a Bank has obtained an order of foreclosure and the proceeds of the sale is insufficient to discharge the loan.",
            options: {
              a: "The bank can sue for the balance.",
              b: "The bank cannot sue for the balance.",
              c: "The bank can sue for specific performance.",
              d: "The bank can attach other property of his.",
            },
            answer: "b",
          },
          {
            id: 14,
            context: null,
            question: "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will in the interim.\n\nThey both applied for the grant at the Probate Registry.",
            options: {
              a: "",
              b: "",
              c: "",
              d: "",
            },
            answer: "bonus",
          },
          {
            id: 15,
            context: "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will in the interim.\n\nThey both applied for the grant at the Probate Registry.",
            question: "________ grant will be obtained in respect of Mr. Hope Ochojule's estate.",
            options: {
              a: "Probate",
              b: "Letters of Administration with the will annexed.",
              c: "Simple Administration.",
              d: "Double Probate.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Mr. Hope Ochojule a native of Kogi State died in her house at No. 15, Idumota Avenue Lagos on 22/12/2017. The family of Mr. Ochojule appointed Mr. Isaiah Ochojule and Madam Doris Joshua Ochojule (Uncle and Mother of Mr. Hope Ochojule) to apply for a grant to enable them manage Mr. Hope Ochojule's estate who died without making a will in the interim.\n\nThey both applied for the grant at the Probate Registry.",
            question: "One of the following may not lead to revocation of a grant already made in respect of the estate of Mr. Hope Ochojule.",
            options: {
              a: "If his will is found after an intestate grant.",
              b: "if there was double grant of probate.",
              c: "If grant is found to have been made to the wrong person(s).",
              d: "If applicants had failed to meet the conditions precedent to a grant.",
            },
            answer: "b",
          },
          {
            id: 17,
            context: null,
            question: "_________ is not a quality of a Personal Representative.",
            options: {
              a: "Availability",
              b: "Lack of Conflict of Ideas",
              c: "Age",
              d: "Lack of Conflict of Interest.",
            },
            answer: "b",
          },
          {
            id: 18,
            context: null,
            question: "_____ grant is obtainable to replace a sole executor who is insane.",
            options: {
              a: "Grant Coligenda bona",
              b: "Grant durante absentia",
              c: "Grant durante dementia",
              d: "Grant ad litem.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "Mrs Yemi Olawole of No. 15 Kanakry Street, Victoria Island, Lagos, is desirous of buying a house with part of her retirement benefits. The property she wants to purchase is situate at No. 3 Rimi Close Alvan Ikoku Avenue, Lagos State with Certificate of Occupancy No. LASG/IK/072/14 Dated 14TH March, 2014. The property belongs to Mr. Nathan Ekpo.",
            question: "One of the under listed legislation will not regulate the above transaction.",
            options: {
              a: "Personal Income Tax Act",
              b: "Land Use Act",
              c: "Registration of Titles law",
              d: "Capital Gains Tax Act.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: "Mrs Yemi Olawole of No. 15 Kanakry Street, Victoria Island, Lagos, is desirous of buying a house with part of her retirement benefits. The property she wants to purchase is situate at No. 3 Rimi Close Alvan Ikoku Avenue, Lagos State with Certificate of Occupancy No. LASG/IK/072/14 Dated 14TH March, 2014. The property belongs to Mr. Nathan Ekpo.",
            question: "At the initial stage of the transaction the parties will prepare and execute a:",
            options: {
              a: "Sale Agreement",
              b: "Deed of Sale of land Agreement",
              c: "Agency Agreement",
              d: "Sale of land Agreement.",
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
            context: "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly, without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor, he briefed Okoko Item Ubong, a lawyer to file am action at the State High Court in Asaba. In the fullness of time. Judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and the Federal Medical Centre Asaba for negligence. The judgment debt was duly liquidated by the defendants on the 20th of September, 2018, and the money paid into Okoko Item Ubong's trust accout with the First Bank of Nigeria PLC. Okoko Item Ubong out of sheer zeal without the concurrency of his client paid himself the sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question: "In which account should Mr. Okoko Item Ubong have lodged the judgment sum?",
            options: {
              a: "The office Account",
              b: "Trust Account",
              c: "Client Account",
              d: "None of the Above",
            },
            answer: "d",
          },
          {
            id: 2,
            context: "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly, without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor, he briefed Okoko Item Ubong, a lawyer to file am action at the State High Court in Asaba. In the fullness of time. Judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and the Federal Medical Centre Asaba for negligence. The judgment debt was duly liquidated by the defendants on the 20th of September, 2018, and the money paid into Okoko Item Ubong's trust accout with the First Bank of Nigeria PLC. Okoko Item Ubong out of sheer zeal without the concurrency of his client paid himself the sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question: "Mr. Okoko item Ubong could be tried by one of the following regulatory bodies.",
            options: {
              a: "Council of Legal Education",
              b: "General Council of the Bar",
              c: "Legal Practitioners' Disciplinary Committee",
              d: "Body of Benchers",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly, without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor, he briefed Okoko Item Ubong, a lawyer to file am action at the State High Court in Asaba. In the fullness of time. Judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and the Federal Medical Centre Asaba for negligence. The judgment debt was duly liquidated by the defendants on the 20th of September, 2018, and the money paid into Okoko Item Ubong's trust accout with the First Bank of Nigeria PLC. Okoko Item Ubong out of sheer zeal without the concurrency of his client paid himself the sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question: "Okoko Item Ubong Could be tried for commission of one of the following professional wrongs.",
            options: {
              a: "Obtaining by false pretence",
              b: "Infamous conduct in a professional respect",
              c: "Conduct incompatible with status of a legal practitioner",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly, without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor, he briefed Okoko Item Ubong, a lawyer to file am action at the State High Court in Asaba. In the fullness of time. Judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and the Federal Medical Centre Asaba for negligence. The judgment debt was duly liquidated by the defendants on the 20th of September, 2018, and the money paid into Okoko Item Ubong's trust accout with the First Bank of Nigeria PLC. Okoko Item Ubong out of sheer zeal without the concurrency of his client paid himself the sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question: "Conversely, if Okoko Item Ubong were to be a judicial officer, which body would have been saddled with the power to make out adequate sanctions?",
            options: {
              a: "Federal judicial Service Commission",
              b: "State Judicial Service Commission",
              c: "Legal Practitioners Disciplinary Committee",
              d: "National Judicial Council",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "Okon Ubaleke presented at the Federal Medical Centre Asaba for routine Femur treatment. Owing to wrong diagnosis, Dr. Ojey Uwa wrongly, without proper analysis and diagnosis amputated his limb. Distressed and distraught by the riveting incompetence of the Doctor, he briefed Okoko Item Ubong, a lawyer to file am action at the State High Court in Asaba. In the fullness of time. Judgement in sum of N20 million was entered in his favour against Dr Ojey Uwa and the Federal Medical Centre Asaba for negligence. The judgment debt was duly liquidated by the defendants on the 20th of September, 2018, and the money paid into Okoko Item Ubong's trust accout with the First Bank of Nigeria PLC. Okoko Item Ubong out of sheer zeal without the concurrency of his client paid himself the sum of N10 million which he claimed represented 50% of his phantom professional fees. His move to pay over the balance to his client was resisted by the client.",
            question: "Assuming Okoko Item Ubong discharged his professional obligation to his client with utmost diligence and professionalism, what is he expected to do with the case file?",
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
            context: "Emeka Amadi was called to the Nigerian Bar in 2019. One month after his call, he set up a law office with his friend, Chidi, who was called in 2015. Kwame a Ghanaian who is a legal practitioner in Ghana since 2012, intends to join Emeka and Chidi as a partner in Nigeria",
            question: "What type of practice are Emeka and Chidi carrying on if they have separate practice but contribute money to pay rent and salaries of office staff",
            options: {
              a: "Partnership",
              b: "Sole Practitionership",
              c: "Sole proprietorship",
              d: "Associateship",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Emeka Amadi was called to the Nigerian Bar in 2019. One month after his call, he set up a law office with his friend, Chidi, who was called in 2015. Kwame a Ghanaian who is a legal practitioner in Ghana since 2012, intends to join Emeka and Chidi as a partner in Nigeria",
            question: "Kwame may join Emeka and Chidi as partners in their law firm in one of the following cases:",
            options: {
              a: "If he is given a warrant by the Chief Justice of Nigeria to practice law in Nigeria.",
              b: "If he is permitted to practice law in Nigeria by the President of Nigeria.",
              c: "If he is permitted by the Attorney General of the Federation to practice and enrolled in the Supreme Court of Nigeria.",
              d: "None of the above",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption, she was taken round the office, shown the library introduced to the secretarial staff and informed that Mr Mighty Igor will be her (8)_____ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a (9)_____ he can sign document in the same manner as a Commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal Partner of the law firm is a member of the (10)_____, the body responsible for making and revising the Rules of Professional Conduct for Legal Practitioners and the (11)_____ the body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the (12)_____",
            question: "Fill in blank (8) of the passage.",
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
            context: "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption, she was taken round the office, shown the library introduced to the secretarial staff and informed that Mr Mighty Igor will be her (8)_____ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a (9)_____ he can sign document in the same manner as a Commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal Partner of the law firm is a member of the (10)_____, the body responsible for making and revising the Rules of Professional Conduct for Legal Practitioners and the (11)_____ the body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the (12)_____",
            question: "Fill in blank (9) of the passage.",
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
            context: "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption, she was taken round the office, shown the library introduced to the secretarial staff and informed that Mr Mighty Igor will be her (8)_____ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a (9)_____ he can sign document in the same manner as a Commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal Partner of the law firm is a member of the (10)_____, the body responsible for making and revising the Rules of Professional Conduct for Legal Practitioners and the (11)_____ the body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the (12)_____",
            question: "Fill in blank (10) of the passage.",
            options: {
              a: "Council of Legal Education",
              b: "Body of Benchers",
              c: "General Council of the Bar",
              d: "Legal Practitioners Disciplinary Committee.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption, she was taken round the office, shown the library introduced to the secretarial staff and informed that Mr Mighty Igor will be her (8)_____ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a (9)_____ he can sign document in the same manner as a Commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal Partner of the law firm is a member of the (10)_____, the body responsible for making and revising the Rules of Professional Conduct for Legal Practitioners and the (11)_____ the body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the (12)_____",
            question: "Fill in blank (11) of the passage.",
            options: {
              a: "National Judicial Committee",
              b: "National Judiciary Commnission",
              c: "Nigerian Judicial Commission",
              d: "National Judicial Council.",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "Miss Olabukola Bimbo was posted to the law office of Messr. Iddiki Usman and Company for her law office externship. Upon resumption, she was taken round the office, shown the library introduced to the secretarial staff and informed that Mr Mighty Igor will be her (8)_____ for the duration of her externship so she should take instructions from him and also direct all her enquiries and other issues through him. Mr Mighty Igor informed Olabukola that as a (9)_____ he can sign document in the same manner as a Commissioner for Oaths. He also told her that Mr Idaliki Usman, the Principal Partner of the law firm is a member of the (10)_____, the body responsible for making and revising the Rules of Professional Conduct for Legal Practitioners and the (11)_____ the body responsible for the appointment and discipline of judicial officers. He therefore advised her to be of good behavior so that she can get a good report that will go a long way in helping her achieve her dream of being called to the Nigerian Bar by the (12)_____",
            question: "Fill in blank (12) of the passage.",
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
            context: "During Ade Ajayi's externship programme he admitted to his group mentor that he had learnt a lot from the court room practice. Ade narrated that the first day he attended court with his principal, Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question: "The reason why the front row was avoided by Mr. Fatoki and other lawyers was because:",
            options: {
              a: "The seat was reserved for Senior Advocates and Benchers",
              b: "The seat was reserved for Senior Advocates and Benchers and Attorneys-General",
              c: "The seat was reserved for Senior Advocates, life Benchers and Attorneys-General",
              d: "The seat was reserved for Senior Advocates, life Benchers Attorneys-General and Notary Publics.",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "During Ade Ajayi's externship programme he admitted to his group mentor that he had learnt a lot from the court room practice. Ade narrated that the first day he attended court with his principal, Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question: "These front row seats in the court room reserved for persons identified in your answer in (13) above can also be referred to as",
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
            context: "During Ade Ajayi's externship programme he admitted to his group mentor that he had learnt a lot from the court room practice. Ade narrated that the first day he attended court with his principal, Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question: "Another privilege enjoyed by the category of persons identified in your answer in (13) above, is the:",
            options: {
              a: "Right to mention all their cases out turn",
              b: "Right to mention matters for trial out of turn",
              c: "Right to mention any motion in which he is appearing out of turn",
              d: "Right have their matters adjourned sine dine.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "During Ade Ajayi's externship programme he admitted to his group mentor that he had learnt a lot from the court room practice. Ade narrated that the first day he attended court with his principal, Mr Fatoki, he noticed that most of the lawyers coming into court avoided the front row seats. They took other seats behind. Quite confused, he eagerly asked his supervisor why that happened. Soon afterwards, Ade's Supervisor's matter which was the last on the list was called. When the court was done with the matter, Ade noticed that his principal did not pack his bag at the end of the matter like other lawyers before him. He waited for the judge to rise and after then, himself and another counsel who also waited left the court room together.",
            question: "The reason Mr Fatoki stayed behind instead of leaving immediately after his matter was",
            options: {
              a: "Due to the Order of Precedence",
              b: "So as not to unrobe the court",
              c: "So as not to undress the Court",
              d: "So as not to be cited for contempt at court",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "While in court during the externship exercise, Ola Ojila witnessed the conduct of the examination of witnesses, He observed that all but one were the functions of cross-examination, namely: (17)_____ Ola also noticed that the judge discouraged the use of (18)_____ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)_____ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the lawyer kept emphasizing on a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)_____",
            question: "Fill in blank (17) of the passage.",
            options: {
              a: "To introduce undisputed facts",
              b: "To test the veracity or credibility of the witness's testimony",
              c: "To put forward the client's version of the disputed facts",
              d: "To lay foundation for the introduction of exhibits",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "While in court during the externship exercise, Ola Ojila witnessed the conduct of the examination of witnesses, He observed that all but one were the functions of cross-examination, namely: (17)_____ Ola also noticed that the judge discouraged the use of (18)_____ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)_____ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the lawyer kept emphasizing on a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)_____",
            question: "Fill in blank (18) of the passage.",
            options: {
              a: "Non leading questions",
              b: "Leading questions",
              c: "Open questions",
              d: "All of the above",
            },
            answer: "b",
          },
          {
            id: 19,
            context: "While in court during the externship exercise, Ola Ojila witnessed the conduct of the examination of witnesses, He observed that all but one were the functions of cross-examination, namely: (17)_____ Ola also noticed that the judge discouraged the use of (18)_____ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)_____ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the lawyer kept emphasizing on a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)_____",
            question: "Fill in blank (19) of the passage.",
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
            context: "While in court during the externship exercise, Ola Ojila witnessed the conduct of the examination of witnesses, He observed that all but one were the functions of cross-examination, namely: (17)_____ Ola also noticed that the judge discouraged the use of (18)_____ when examining the witness during examination-in-chief. They were only allowed in instances such as in (19)_____ matters where the witness was to tell the court his name, his address and what he does for a living. In the course of examination-in-chief, Ola noticed that the lawyer kept emphasizing on a question to which the witness should have provided a particular answer but rather gave false evidence. The witness's lawyer applied to court to (20)_____",
            question: "Fill in blank (20) of the passage.",
            options: {
              a: "Call in the police for his arrest",
              b: "Call the adverse party to testify",
              c: "Cross-examine him in order to declare him a hostile witness",
              d: "Tender evidence of his bad character",
            },
            answer: "c",
          },
        ],
      },
    ],
  },
  "2016-april": {
    year: 2016,
    session: "April",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 80,
    courses: [
      {
        id: "2016-april-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Apeke is fifteen years post call. He has been briefed to register Brown Trading Company to handle the transportation arm of Brown Nigeria Plc. Brown Nigeria Plc is making plans to offer its shares to the public. Apeke is hopeful that he will be appointed by Brown Nigeria Plc as the Solicitor of the issue.",
            question: "Which of the following is correct?",
            options: {
              a: "Apeke has to be accredited to be able to register Brown Trading Company.",
              b: "Apeke does not require accreditation for this type of registration.",
              c: "Because he is less than 18 years at the Bar, he must be accredited.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 2,
            context: null,
            question: "The company was re-registered from a limited to an unlimited company, it now wishes to re-register as a public company.",
            options: {
              a: "It must apply to the CAC to be registered as a public limited company.",
              b: "It must be re-registered as a Private limited company and then re-register as a public company.",
              c: "It must pass a special resolution to convert to a public company.",
              d: "There is no procedure whereby the company may become a public company.",
            },
            answer: "d",
          },
          {
            id: 3,
            context: null,
            question: "A group of promoters wish to form a company to be called Lagos City Council Services Limited. Which of the following is correct?",
            options: {
              a: "The name cannot be registered because it is a prohibited name",
              b: "It can be registered if the CAC consents to the use of the name.",
              c: "The name may be registered with the permission of the Oba of Lagos and the Local Government Chairman of Lagos Island.",
              d: "The name cannot be registered because it is a restricted name.",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "Kano State is desirous of raising 50 billion naira (₦50 billion) by issuing bonds to the investing public for infrastructural development and to further develop the State into a mega city.",
            question: "Which of the following bodies is allowed to issue bonds in Nigeria?",
            options: {
              a: "Companies with Government majority shareholding in them",
              b: "Companies with Government 50% shareholding in them.",
              c: "Companies with Government 100% shareholding in them.",
              d: "Companies with at least 30% Government shareholding in them.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "Combo Excellence Limited was incorporated in September 2015 to carry on business as furniture makers. As a legal officer at the Corporate Affairs Commission you have received a letter of objection from Combo Excellence Limited, a pioneer furniture manufacturing company that has been in existence since 1980, requesting the Corporate Affairs Commission to compel Combo Excellence Limited to change its name, on the ground that its name is misleading the public into thinking that the two companies are related.",
            question: "Answer the following questions:",
            options: {
              a: "CAC will direct Combo Excellence Limited to change its name within six weeks from the date of the direction.",
              b: "CAC will direct Combo Excellence Limited to change its name within six months from the date of the direction.",
              c: "CAC will direct Combo Excellence Limited to change its name within six weeks of its incorporation.",
              d: "CAC will direct Combo Excellence Limited to change its name within six months of its incorporation.",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Abex Limited was incorporated in order to execute a contract that Alex and Ben won in 2014. The contract has since been executed.",
            question: "The most appropriate way Abex Limited can be wound up is by……………… resolution.",
            options: {
              a: "Ordinary",
              b: "Special",
              c: "Extra Ordinary",
              d: "Originating.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "Abex Limited was incorporated in order to execute a contract that Alex and Ben won in 2014. The contract has since been executed.",
            question: "The type of winding up most appropriate for the company is……………… winding up.",
            options: {
              a: "Members’ voluntary",
              b: "Creditors’ voluntary",
              c: "Compulsory",
              d: "Subject to Court’s supervision.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Abex Limited was incorporated in order to execute a contract that Alex and Ben won in 2014. The contract has since been executed.",
            question: "Assuming that Abex Limited is wound up compulsorily. The winding up will be instituted in court by:-",
            options: {
              a: "3 months",
              b: "9 months",
              c: "12 months",
              d: "18 months.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Abex Limited was incorporated in order to execute a contract that Alex and Ben won in 2014. The contract has since been executed.",
            question: "The Liquidator of the company must be:-",
            options: {
              a: "Appointed by the Court",
              b: "Appointed by the members",
              c: "A company registered by Corporate Affairs Commission.",
              d: "Appointed by the creditors.",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Vistaline Nigeria Plc during its initial public offer, offered for subscription its ordinary shares of 50k at N10.50k. The company engaged the services of some Capital Market operators during the public offer and in the process a dispute ensued between the company and one of the Capital Market operators.",
            question: "The sum of N10.00 will be credited to the company’s:-",
            options: {
              a: "Share capital account",
              b: "Subscription account",
              c: "Share premium account",
              d: "Security account.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Vistaline Nigeria Plc during its initial public offer, offered for subscription its ordinary shares of 50k at N10.50k. The company engaged the services of some Capital Market operators during the public offer and in the process a dispute ensued between the company and one of the Capital Market operators.",
            question: "Vistaline Nigeria Plc can use any of these modes to offers its securities to the public except:-",
            options: {
              a: "Direct offer",
              b: "Offer for sale",
              c: "Assignment of shares",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "Vistaline Nigeria Plc during its initial public offer, offered for subscription its ordinary shares of 50k at N10.50k. The company engaged the services of some Capital Market operators during the public offer and in the process a dispute ensued between the company and one of the Capital Market operators.",
            question: "To resolve the dispute between Vistaline Nigeria Plc and the Capital Market Operator, the relevant judicial body is:-",
            options: {
              a: "The State High Court",
              b: "The Federal High Court",
              c: "Investment and Securities Tribunal",
              d: "National Industrial Court.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "Vistaline Nigeria Plc during its initial public offer, offered for subscription its ordinary shares of 50k at N10.50k. The company engaged the services of some Capital Market operators during the public offer and in the process a dispute ensued between the company and one of the Capital Market operators.",
            question: "An appeal from your answer in (12) above will go to:-",
            options: {
              a: "Administrative Proceeding Committee of Securities and Exchange Commission (SEC).",
              b: "Federal High Court",
              c: "Court of Appeal",
              d: "State High Court.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: "By the joint provision of sections 274, 275 and 276 of the Investment and Securities Act ISA 2007, there is established body to be known as the Investment and Securities Tribunal (the tribunal), to exercise the jurisdiction, power and authority conferred on its by or under the Act. The Tribunal shall consist of ten persons to be appointed by the Minister and headed by a Chairman.",
            question: "For the purpose of exercising any jurisdiction conferred by this Act, the Investment and Securities Tribunal is duly Constituted by:",
            options: {
              a: "5 members",
              b: "10",
              c: "3",
              d: "2",
            },
            answer: "c",
          },
          {
            id: 15,
            context: "By the joint provision of sections 274, 275 and 276 of the Investment and Securities Act ISA 2007, there is established body to be known as the Investment and Securities Tribunal (the tribunal), to exercise the jurisdiction, power and authority conferred on its by or under the Act. The Tribunal shall consist of ten persons to be appointed by the Minister and headed by a Chairman.",
            question: "In the event of the judgement delivered by Investment and Securities Tribunal being challenged, the aggrieved party shall appeal to:-",
            options: {
              a: "Federal High Court",
              b: "Court of Appeal",
              c: "National Industrial Court",
              d: "Supreme Court of Appeal.",
            },
            answer: "b",
          },
          {
            id: 16,
            context: "Mallam Musa Gani is desirous of doing business with his family and friends. He is also interested in engaging in a community development project on charitable basis. The reason for the business is to use the funds realized therein to manage the community development project.",
            question: "The most appropriate business orgainsation they should form is:-",
            options: {
              a: "Private Company Limited by guarantee",
              b: "Private Company Limited by share",
              c: "Private Company Limited by shares.",
              d: "Private Unlimited Liquidity Company.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "Mallam Musa Gani is desirous of doing business with his family and friends. He is also interested in engaging in a community development project on charitable basis. The reason for the business is to use the funds realized therein to manage the community development project.",
            question: "One of these forms will not be required while incorporating your answer in (1) above:",
            options: {
              a: "Form CAC 1",
              b: "Form CAC 2",
              c: "Form CAC 3",
              d: "Form CAC 7",
            },
            answer: "bonus",
          },
          {
            id: 18,
            context: "Mallam Musa Gani is desirous of doing business with his family and friends. He is also interested in engaging in a community development project on charitable basis. The reason for the business is to use the funds realized therein to manage the community development project.",
            question: "They can engage other professionals to register the business but they must engage a lawyer to complete one of these forms:-",
            options: {
              a: "Form CAC 1",
              b: "Form CAC 3",
              c: "Form CAC 4",
              d: "Form CAC 7",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "Mallam Musa Gani is desirous of doing business with his family and friends. He is also interested in engaging in a community development project on charitable basis. The reason for the business is to use the funds realized therein to manage the community development project.",
            question: "This type of business organization is dissolved upon the occurrence of one of the following events:-",
            options: {
              a: "At the instance of one of the parties.",
              b: "Upon an application for its dissolution by one or more trustees.",
              c: "Upon expiration of three months from registration of winding up.",
              d: "Upon completion of the aims and objection of the organization.",
            },
            answer: "d",
          },
          {
            id: 20,
            context: "Mallam Musa Gani is desirous of doing business with his family and friends. He is also interested in engaging in a community development project on charitable basis. The reason for the business is to use the funds realized therein to manage the community development project.",
            question: "Which of the following is an internal restructuring option open to a company in financial trauma struggling to remain a going concern?",
            options: {
              a: "Option not available in source document",
              b: "Option not available in source document",
              c: "Option not available in source document",
              d: "Option not available in source document",
            },
            answer: "bonus",
          },
        ],
      },
      {
        id: "2016-april-property-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "Assuming Mr. Akibankudi wants to sell the property at No 4, Nkwo Close, Agege, Lagos State, one of the following documents will not be relevant in the narrative recital to be included in the Deed of Assignment.",
            options: {
              a: "The Will",
              b: "Assent",
              c: "Probate",
              d: "Deed of Legal Mortgage",
            },
            answer: "d",
          },
          {
            id: 2,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "........... constitutes Akibankudi's title to the property at No 4, Nkwo Close.",
            options: {
              a: "Deed of Assignment",
              b: "His mother's will",
              c: "Probate",
              d: "Assent",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "If Akibankudi wants to sell the property at No 33, Owode Street, Anthony, Lagos, .................. constitutes his root of title.",
            options: {
              a: "Deed of Assignment",
              b: "Assent",
              c: "Deed of Gift",
              d: "Probate",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "Where he wants to grant a lease of the property his father gave him, one of the following statement is correct.",
            options: {
              a: "He can only charge a year's rent from a tenant.",
              b: "He need not provide for covenants in the lease agreement.",
              c: "He can charge two year's rent in advance.",
              d: "If not included in the agreement rent will be collected at the end of the term granted.",
            },
            answer: "a",
          },
          {
            id: 5,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "When preparing a Will and considering the appointment of executors, one of the following is not correct.",
            options: {
              a: "He can appoint anybody",
              b: "He must consider the age of those to be appointed",
              c: "They must be willing",
              d: "They should show a degree of competence.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "Which of the following must be included in Mr. Akibankudi's Will.",
            options: {
              a: "Charging clause",
              b: "Renovation clause",
              c: "Residuary clause",
              d: "Irrevocability clause",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "Assuming Mr. Akibankudi is a Muslim subject to Islamic law, one of the following is not correct.",
            options: {
              a: "He can dispose of his properties the way he likes.",
              b: "His Will must be in accordance with Islamic Law.",
              c: "He must take care of his dependants.",
              d: "Someone else can sign the Will for him at his direction.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "Where he wants to sell any of the properties, the operative part of the Deed of Assignment would include the following except:-",
            options: {
              a: "Rent clause",
              b: "Parcels clause",
              c: "Habendum",
              d: "Testatum.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "Mr. Akibankudi's estate would be said to be unregistered in all but one of the following:",
            options: {
              a: "Where the executors remove probate.",
              b: "Where those entitled to grant cannot be found.",
              c: "Where those entitled to grant are not available.",
              d: "Where the last surviving executor dies intestate.",
            },
            answer: "bonus",
          },
          {
            id: 10,
            context: "Mr. Moses Akibankudi is a London trained tailor whose tailoring outfit – London Tailors is at 212, Turton Close, Yaba, Lagos. Mr. Akibankudi is the owner of the following properties:- (a) No. 4 Nkwo Close, Agege, Lagos, a property he inherited from his late mother who died testate on April 26, 1976. (b) No 33, Owode Street, Anthony, Lagos. His father gave him the property when he returned to Nigeria from the United Kingdom in 1972. The property was Mr. Akibankudi's father's contribution to the new business his son wanted to set up. (c) No 212, Turton Street, Yaba, Lagos, which he bought from the Owolagba family in October, 1980.",
            question: "Assuming Mr. Akibankudi wants to appoint someone to sell his property and execute the necessary documents relating to sale property on his behalf, all the following are correct except:",
            options: {
              a: "The document appointing the attorney must be in Writing.",
              b: "The document appointing the attorney must be by Deed.",
              c: "The document may be attested by a Notary Public.",
              d: "Where found to be illiterate, an illiterate Jurat must be included.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: null,
            question: "Chief Sango Silver donated a Power of Attorney to you to execute a deed on his behalf. The execution clause would read thus:",
            options: {
              a: "Signed, Sealed and Delivered by the lawful/appointed attorney of the within named Assignor by virtue of a Power of 2016 and registered at No. ..........Page....... vol .......... of the Lands Registry in Kano State.",
              b: "Signed, Sealed and Delivered by the within named Assignor by virtue of a Power of Attorney dated....... day of ....... 2016 and registered at No. ........ page ......Vol ..... of the Lands Registry in Kano State.",
              c: "Any of the above.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "Mallam Suleiman Sanda, lived and died in his residence at No. 1434 Okonkwo Crescent, Obanikoro, Lagos State. He died testate. His Will was read and probate granted.",
            question: "\"I give my house at No. AC6 Yakuba Avenue, Ajaokuta to Mr. Jacob Aluma of No. 2, Democracy Layout, Abuja, is an example of:",
            options: {
              a: "Specific legacy",
              b: "General legacy",
              c: "Pecuniary legacy",
              d: "Demonstrative legacy.",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "Mallam Suleiman Sanda, lived and died in his residence at No. 1434 Okonkwo Crescent, Obanikoro, Lagos State. He died testate. His Will was read and probate granted.",
            question: "\"I give a car to my friend Alhassan Adamu of No.4 Bernin Kebbi, Kebbi State\" is a:-",
            options: {
              a: "Specific legacy",
              b: "General legacy",
              c: "Demonstrative legacy",
              d: "Residual legacy.",
            },
            answer: "b",
          },
          {
            id: 14,
            context: null,
            question: "One of the following is not a tax that is chargeable on a property transaction in Lagos State.",
            options: {
              a: "Capital Gains tax",
              b: "Personal Income Tax",
              c: "Value Added tax",
              d: "Re-Evaluation Property Tax.",
            },
            answer: "d",
          },
          {
            id: 15,
            context: "In a lease agreement between George Igne of No. 18 Golden Lane, Warri and Ejiro Oho of No. 6, Avenue Close, Surulere, Lagos. The parties agreed that the lessee should not sublet the premises. They also agreed that the rent should be N5 million subject to renewal. Ejiro Orho has just been appointed an ambassador to Japan and he had 3 years left of his term which he sublet to his friend Andrew Mark.",
            question: "The document evidencing their agreement should commence thus:",
            options: {
              a: "This Deed of Intention",
              b: "This Lease Agreement",
              c: "This Deed of Conveyancing",
              d: "The Document of Lease.",
            },
            answer: "b",
          },
          {
            id: 16,
            context: "In a lease agreement between George Igne of No. 18 Golden Lane, Warri and Ejiro Oho of No. 6, Avenue Close, Surulere, Lagos. The parties agreed that the lessee should not sublet the premises. They also agreed that the rent should be N5 million subject to renewal. Ejiro Orho has just been appointed an ambassador to Japan and he had 3 years left of his term which he sublet to his friend Andrew Mark.",
            question: "To reflect the intention of the parties on the rent in the instrument, it should be couched as the........... clause.",
            options: {
              a: "Redendum",
              b: "Rents Review",
              c: "Rent Renew",
              d: "Renewal",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "In a lease agreement between George Igne of No. 18 Golden Lane, Warri and Ejiro Oho of No. 6, Avenue Close, Surulere, Lagos. The parties agreed that the lessee should not sublet the premises. They also agreed that the rent should be N5 million subject to renewal. Ejiro Orho has just been appointed an ambassador to Japan and he had 3 years left of his term which he sublet to his friend Andrew Mark.",
            question: "To protect Ejiro Orho, the covenant should have been drafted thus:",
            options: {
              a: "Not to assign, sublet or part with any part of the premises.",
              b: "Not to assign, sublet or part with any part of the premises with a written consent of the lessor.",
              c: "Not to assign, sublet or part with any part of the premises without a written consent of the lessor, such consent not to be unreasonably withheld.",
              d: "Not to assign, sublet or part with only part of the premises the written consent of the lessor, such consent, not to be unreasonably withheld in the case of responsible and respectable person.",
            },
            answer: "c",
          },
          {
            id: 18,
            context: "In a lease agreement between George Igne of No. 18 Golden Lane, Warri and Ejiro Oho of No. 6, Avenue Close, Surulere, Lagos. The parties agreed that the lessee should not sublet the premises. They also agreed that the rent should be N5 million subject to renewal. Ejiro Orho has just been appointed an ambassador to Japan and he had 3 years left of his term which he sublet to his friend Andrew Mark.",
            question: "Where Ejiro Orho sublets without the consent of the lessor, the lessor may enforce one of these remedies.",
            options: {
              a: "Specific performance",
              b: "Forfeiture",
              c: "Renewal",
              d: "Consent.",
            },
            answer: "b",
          },
          {
            id: 19,
            context: "In a lease agreement between George Igne of No. 18 Golden Lane, Warri and Ejiro Oho of No. 6, Avenue Close, Surulere, Lagos. The parties agreed that the lessee should not sublet the premises. They also agreed that the rent should be N5 million subject to renewal. Ejiro Orho has just been appointed an ambassador to Japan and he had 3 years left of his term which he sublet to his friend Andrew Mark.",
            question: "Assuming there is consent to sublet, the subsequent agreement is:",
            options: {
              a: "A reversionary lease.",
              b: "A lease of term specific",
              c: "A lease",
              d: "A sublease.",
            },
            answer: "d",
          },
          {
            id: 20,
            context: null,
            question: "Abigail who is the sole beneficiary in the Will of her mother, Chief (Mrs) Okeke, poisoned her mother resulting in her death. The will was read and the executors have refused to release the legacies to her, arguing that it was un-African for a child to cause the death of a parent and still inherit the estates of the parent. The matter is now pending before the High Court of Delta State. The gifts to her would fail on ground of:",
            options: {
              a: "Lapse, and the Wills Act,1837",
              b: "Disclaimer, and the Wills Law (W/N) 1959.",
              c: "Public policy",
              d: "Fraud.",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2016-april-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Mallam Tunare Idi, a Keke NAPEP rider was knocked down by a Lorry belonging to Triacta Construction Company opposite the Nigerian Law School gate on Yola Bye-Pass in Yola., Adamawa State. He sustained serious injuries which led to the eventual amputation of his legs at the Federal Medical Centre, Yola. Guided by his friends, he engaged the services of Mr. Godspower Adamu, a Yola based Legal Practitioner to seek legal remedy against Triacta Construction Company. Because of Mallam Tunare's financial incapacity, Mr. Godspower Adamu undertook to pursue the matter in court without immediate payment of professional fees.",
            question: "Which of the following fees is most suitable in the circumstances of this brief?",
            options: {
              a: "Retainership fees",
              b: "Percentage fees",
              c: "Contingency fees",
              d: "Fixed fees",
            },
            answer: "a",
          },
          {
            id: 2,
            context: "Mallam Tunare Idi, a Keke NAPEP rider was knocked down by a Lorry belonging to Triacta Construction Company opposite the Nigerian Law School gate on Yola Bye-Pass in Yola., Adamawa State. He sustained serious injuries which led to the eventual amputation of his legs at the Federal Medical Centre, Yola. Guided by his friends, he engaged the services of Mr. Godspower Adamu, a Yola based Legal Practitioner to seek legal remedy against Triacta Construction Company. Because of Mallam Tunare's financial incapacity, Mr. Godspower Adamu undertook to pursue the matter in court without immediate payment of professional fees.",
            question: "Assuming that in representing Tunare, Mr. Godspower decided to handle the brief free, his services will be regarded as:",
            options: {
              a: "Appearance fees",
              b: "Pro bono",
              c: "Functus offcio",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "Mallam Tunare Idi, a Keke NAPEP rider was knocked down by a Lorry belonging to Triacta Construction Company opposite the Nigerian Law School gate on Yola Bye-Pass in Yola., Adamawa State. He sustained serious injuries which led to the eventual amputation of his legs at the Federal Medical Centre, Yola. Guided by his friends, he engaged the services of Mr. Godspower Adamu, a Yola based Legal Practitioner to seek legal remedy against Triacta Construction Company. Because of Mallam Tunare's financial incapacity, Mr. Godspower Adamu undertook to pursue the matter in court without immediate payment of professional fees.",
            question: "Assuming that Tunare and his Counsel have an agreement on the fees chargeable for the services rendered and Mr. Tunare after succeeding in the case fails to pay Godspower his fees, the latter will serve a .............. on Mr. Tunare as the first step towards recovering his fees.",
            options: {
              a: "Demand letter",
              b: "Writ of summons",
              c: "Bill of charges",
              d: "Arbitration letter",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "Mallam Tunare Idi, a Keke NAPEP rider was knocked down by a Lorry belonging to Triacta Construction Company opposite the Nigerian Law School gate on Yola Bye-Pass in Yola., Adamawa State. He sustained serious injuries which led to the eventual amputation of his legs at the Federal Medical Centre, Yola. Guided by his friends, he engaged the services of Mr. Godspower Adamu, a Yola based Legal Practitioner to seek legal remedy against Triacta Construction Company. Because of Mallam Tunare's financial incapacity, Mr. Godspower Adamu undertook to pursue the matter in court without immediate payment of professional fees.",
            question: "If the situation is that at the end of a successful litigation over the action initiated by Mr. Godspower on behalf of his client, Triacta Construction Company paid the sum of N5 million as compensation and the money is handed over to Mr. Godspower, he will be required to deposit the money in:",
            options: {
              a: "His office account",
              b: "Clients account",
              c: "Trust account",
              d: "Any of the above",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "Mallam Tunare Idi, a Keke NAPEP rider was knocked down by a Lorry belonging to Triacta Construction Company opposite the Nigerian Law School gate on Yola Bye-Pass in Yola., Adamawa State. He sustained serious injuries which led to the eventual amputation of his legs at the Federal Medical Centre, Yola. Guided by his friends, he engaged the services of Mr. Godspower Adamu, a Yola based Legal Practitioner to seek legal remedy against Triacta Construction Company. Because of Mallam Tunare's financial incapacity, Mr. Godspower Adamu undertook to pursue the matter in court without immediate payment of professional fees.",
            question: "Assuming that when Mr. Godspower received the N5 million judgment sum on behalf of his client, he converted same to his personal use without the consent of his client, which of these bodies should be responsible for taking disciplinary action against him in the event of any petition by Mr. Tunare.",
            options: {
              a: "Legal Practitioners Remunerations Committee.",
              b: "Legal Practitioners Accounts Committee",
              c: "Nigerian Bar Association.",
              d: "Legal Practitioners Disciplinary Committee.",
            },
            answer: "d",
          },
          {
            id: 6,
            context: "Mallam Tunare Idi, a Keke NAPEP rider was knocked down by a Lorry belonging to Triacta Construction Company opposite the Nigerian Law School gate on Yola Bye-Pass in Yola., Adamawa State. He sustained serious injuries which led to the eventual amputation of his legs at the Federal Medical Centre, Yola. Guided by his friends, he engaged the services of Mr. Godspower Adamu, a Yola based Legal Practitioner to seek legal remedy against Triacta Construction Company. Because of Mallam Tunare's financial incapacity, Mr. Godspower Adamu undertook to pursue the matter in court without immediate payment of professional fees.",
            question: "If Mr. Godspower becomes aggrieved with the decision of the body that tried him, he could appeal to:",
            options: {
              a: "The Supreme Court of Nigeria.",
              b: "The Appeal Committee of the Body of Benchers.",
              c: "The Chief Justice of Nigeria.",
              d: "Any of the above",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Mallam Tunare Idi, a Keke NAPEP rider was knocked down by a Lorry belonging to Triacta Construction Company opposite the Nigerian Law School gate on Yola Bye-Pass in Yola., Adamawa State. He sustained serious injuries which led to the eventual amputation of his legs at the Federal Medical Centre, Yola. Guided by his friends, he engaged the services of Mr. Godspower Adamu, a Yola based Legal Practitioner to seek legal remedy against Triacta Construction Company. Because of Mallam Tunare's financial incapacity, Mr. Godspower Adamu undertook to pursue the matter in court without immediate payment of professional fees.",
            question: "Mr. Godspower being a legal practitioner, is required to keep and maintain two(2) main accounts by the Legal Practitioners' Account Rules, there are:",
            options: {
              a: "Trust Account and Clients account",
              b: "Bank accounts and Books of Account",
              c: "Cash Book and Ledger",
              d: "Journal and Cash Book.",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "Timi Haruna and Vera Bwari share office space, but both maintain their separate practices and clientele. This is referred to as......8.\n\nOn Apri 1, 2016, one Tina Tiny came into the office and explained to Timi Haruna that her former boyfriend, Mr. Temper, had caused her grievous bodily harm and that he was being charged to court, but that she needed him to monitor proceedings on her behalf. This is referred to as.............9.\n\nSince the case was fixed for April 7, 2016 and Mr. Haruna had already taken the same date in a case before the Federal High Court, Lagos he requested Vera to go to the Federal High Court on his behalf to............10.\n\nWhen she arrived at the Federal High Court, she realized that the Hon. Attorney General of the Federation, Mr. H.B. Song, SAN, B. Zang, SAN and a Life Bencher, Chief Makurdi, were all seated in the .............11.of the court, awaiting the commencement of the proceedings. Their cases were mentioned in this order.........12.\n\nSelect the appropriate option from questions 8 – 12 below to fill the spaces in the scenario.",
            question: "Timi Haruna and Vera Bwari share office space, but both maintain their separate practices and clientele. This is referred to as......",
            options: {
              a: "Sole Proprietorship",
              b: "Sole Practitioners",
              c: "Partnership",
              d: "Associateship",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Timi Haruna and Vera Bwari share office space, but both maintain their separate practices and clientele. This is referred to as......8.\n\nOn Apri 1, 2016, one Tina Tiny came into the office and explained to Timi Haruna that her former boyfriend, Mr. Temper, had caused her grievous bodily harm and that he was being charged to court, but that she needed him to monitor proceedings on her behalf. This is referred to as.............9.\n\nSince the case was fixed for April 7, 2016 and Mr. Haruna had already taken the same date in a case before the Federal High Court, Lagos he requested Vera to go to the Federal High Court on his behalf to............10.\n\nWhen she arrived at the Federal High Court, she realized that the Hon. Attorney General of the Federation, Mr. H.B. Song, SAN, B. Zang, SAN and a Life Bencher, Chief Makurdi, were all seated in the .............11.of the court, awaiting the commencement of the proceedings. Their cases were mentioned in this order.........12.\n\nSelect the appropriate option from questions 8 – 12 below to fill the spaces in the scenario.",
            question: "On Apri 1, 2016, one Tina Tiny came into the office and explained to Timi Haruna that her former boyfriend, Mr. Temper, had caused her grievous bodily harm and that he was being charged to court, but that she needed him to monitor proceedings on her behalf. This is referred to as.............",
            options: {
              a: "Monitoring brief",
              b: "Watching brief",
              c: "Being an amicus curie",
              d: "Holding brief",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Timi Haruna and Vera Bwari share office space, but both maintain their separate practices and clientele. This is referred to as......8.\n\nOn Apri 1, 2016, one Tina Tiny came into the office and explained to Timi Haruna that her former boyfriend, Mr. Temper, had caused her grievous bodily harm and that he was being charged to court, but that she needed him to monitor proceedings on her behalf. This is referred to as.............9.\n\nSince the case was fixed for April 7, 2016 and Mr. Haruna had already taken the same date in a case before the Federal High Court, Lagos he requested Vera to go to the Federal High Court on his behalf to............10.\n\nWhen she arrived at the Federal High Court, she realized that the Hon. Attorney General of the Federation, Mr. H.B. Song, SAN, B. Zang, SAN and a Life Bencher, Chief Makurdi, were all seated in the .............11.of the court, awaiting the commencement of the proceedings. Their cases were mentioned in this order.........12.\n\nSelect the appropriate option from questions 8 – 12 below to fill the spaces in the scenario.",
            question: "Since the case was fixed for April 7, 2016 and Mr. Haruna had already taken the same date in a case before the Federal High Court, Lagos he requested Vera to go to the Federal High Court on his behalf to............",
            options: {
              a: "Study the cause list",
              b: "Watch his brief",
              c: "Hold his brief",
              d: "All of the above",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Timi Haruna and Vera Bwari share office space, but both maintain their separate practices and clientele. This is referred to as......8.\n\nOn Apri 1, 2016, one Tina Tiny came into the office and explained to Timi Haruna that her former boyfriend, Mr. Temper, had caused her grievous bodily harm and that he was being charged to court, but that she needed him to monitor proceedings on her behalf. This is referred to as.............9.\n\nSince the case was fixed for April 7, 2016 and Mr. Haruna had already taken the same date in a case before the Federal High Court, Lagos he requested Vera to go to the Federal High Court on his behalf to............10.\n\nWhen she arrived at the Federal High Court, she realized that the Hon. Attorney General of the Federation, Mr. H.B. Song, SAN, B. Zang, SAN and a Life Bencher, Chief Makurdi, were all seated in the .............11.of the court, awaiting the commencement of the proceedings. Their cases were mentioned in this order.........12.\n\nSelect the appropriate option from questions 8 – 12 below to fill the spaces in the scenario.",
            question: "When she arrived at the Federal High Court, she realized that the Hon. Attorney General of the Federation, Mr. H.B. Song, SAN, B. Zang, SAN and a Life Bencher, Chief Makurdi, were all seated in the .............of the court, awaiting the commencement of the proceedings.",
            options: {
              a: "Outer Bar",
              b: "Inner Bar",
              c: "Dock",
              d: "Gallery",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Timi Haruna and Vera Bwari share office space, but both maintain their separate practices and clientele. This is referred to as......8.\n\nOn Apri 1, 2016, one Tina Tiny came into the office and explained to Timi Haruna that her former boyfriend, Mr. Temper, had caused her grievous bodily harm and that he was being charged to court, but that she needed him to monitor proceedings on her behalf. This is referred to as.............9.\n\nSince the case was fixed for April 7, 2016 and Mr. Haruna had already taken the same date in a case before the Federal High Court, Lagos he requested Vera to go to the Federal High Court on his behalf to............10.\n\nWhen she arrived at the Federal High Court, she realized that the Hon. Attorney General of the Federation, Mr. H.B. Song, SAN, B. Zang, SAN and a Life Bencher, Chief Makurdi, were all seated in the .............11.of the court, awaiting the commencement of the proceedings. Their cases were mentioned in this order.........12.\n\nSelect the appropriate option from questions 8 – 12 below to fill the spaces in the scenario.",
            question: "Their cases were mentioned in this order.........",
            options: {
              a: "B. Zang, SAN, H.B. Song, SAN and Chief Makurdi",
              b: "H.B. Song, SAN, B. Zang, SAN and Chief Makurdi",
              c: "H.B. Song, SAN, Chief Makurdi and B. Zang, SAN",
              d: "Chief Makurdi, H.B. Song, SAN and B. Zang, SAN.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "Bobo Kagoro is a legal practitioner with nine years post Call experience. On Monday, January 10, 2016, he was in his office when his client Chief Ajeegbe called him to come over to his house. On getting there, Chief Ajeegbe who is 60 years old asked him to draft his Will. After briefing, Chief Ajeegbe escorted Bobo Kagoro to his car and cheerfully waved as he drove off. Later that day, Bobo Kagoro placed a call to Chief's first son Rowland Ajeegbe warning him that his father had engaged him to draft his Will and that he was leaving everything he has to Rowland's younger brother Jerry.",
            question: "Bobo Kagoro is a legal practitioner with nine years post Call experience. On Monday, January 10, 2016, he was in his office when his client Chief Ajeegbe called him to come over to his house.",
            options: {
              a: "",
              b: "",
              c: "",
              d: "",
            },
            answer: "bonus",
          },
          {
            id: 14,
            context: "Bobo Kagoro is a legal practitioner with nine years post Call experience. On Monday, January 10, 2016, he was in his office when his client Chief Ajeegbe called him to come over to his house. On getting there, Chief Ajeegbe who is 60 years old asked him to draft his Will. After briefing, Chief Ajeegbe escorted Bobo Kagoro to his car and cheerfully waved as he drove off. Later that day, Bobo Kagoro placed a call to Chief's first son Rowland Ajeegbe warning him that his father had engaged him to draft his Will and that he was leaving everything he has to Rowland's younger brother Jerry.",
            question: "Going over to client's house for the purpose of getting briefed can best be described as:",
            options: {
              a: "A violation of the Rules of Professional Conduct, 2007",
              b: "An exception to the rule against calling at client's place for briefing.",
              c: "A violation of the rule against sharp practices.",
              d: "All of the above",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "Bobo Kagoro is a legal practitioner with nine years post Call experience. On Monday, January 10, 2016, he was in his office when his client Chief Ajeegbe called him to come over to his house. On getting there, Chief Ajeegbe who is 60 years old asked him to draft his Will. After briefing, Chief Ajeegbe escorted Bobo Kagoro to his car and cheerfully waved as he drove off. Later that day, Bobo Kagoro placed a call to Chief's first son Rowland Ajeegbe warning him that his father had engaged him to draft his Will and that he was leaving everything he has to Rowland's younger brother Jerry.",
            question: "Bobo Kagoro's action of informing Rowland about the Will is a violation of:",
            options: {
              a: "Confidentiality rule",
              b: "Fiduciary rule",
              c: "Cab rank rule",
              d: "All of the above",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "Bobo Kagoro is a legal practitioner with nine years post Call experience. On Monday, January 10, 2016, he was in his office when his client Chief Ajeegbe called him to come over to his house. On getting there, Chief Ajeegbe who is 60 years old asked him to draft his Will. After briefing, Chief Ajeegbe escorted Bobo Kagoro to his car and cheerfully waved as he drove off. Later that day, Bobo Kagoro placed a call to Chief's first son Rowland Ajeegbe warning him that his father had engaged him to draft his Will and that he was leaving everything he has to Rowland's younger brother Jerry.",
            question: "Where Bobo Kagoro has been found to violate the rules of professional conduct, what is the likely consequence:",
            options: {
              a: "He will be arrested and detained in police custody.",
              b: "He will be punished by the Body of Benchers",
              c: "He will be brought before the Legal Practitioners Disciplinary Committee.",
              d: "All of the above",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Bobo Kagoro is a legal practitioner with nine years post Call experience. On Monday, January 10, 2016, he was in his office when his client Chief Ajeegbe called him to come over to his house. On getting there, Chief Ajeegbe who is 60 years old asked him to draft his Will. After briefing, Chief Ajeegbe escorted Bobo Kagoro to his car and cheerfully waved as he drove off. Later that day, Bobo Kagoro placed a call to Chief's first son Rowland Ajeegbe warning him that his father had engaged him to draft his Will and that he was leaving everything he has to Rowland's younger brother Jerry.",
            question: "Assuming Bobo kagoro placed a notice in a daily newspaper proclaiming himself as the best lawyer in the locality and asking people who wish to engage his services to call his number, his action will amount to:",
            options: {
              a: "Advertising",
              b: "Soliciting",
              c: "Ambulance chasing",
              d: "All of the above",
            },
            answer: "a",
          },
          {
            id: 18,
            context: null,
            question: "Miss Miller's job at the National Assembly as a legislative draftsman entails drafting Bills. Her job requires a clear, analytical mind. To enable her do a good job, she first takes instructions and analyses same. She then passes through all but one of the following stages.",
            options: {
              a: "Designing the draft",
              b: "Composing the draft",
              c: "Scrutinizing the draft",
              d: "Presentation to stake holders",
            },
            answer: "d",
          },
          {
            id: 19,
            context: null,
            question: "Which of the underlisted habits should Miss Miller avoid in drafting:",
            options: {
              a: "Verbosity",
              b: "Uncommon words",
              c: "Archaic words",
              d: "All of the above",
            },
            answer: "d",
          },
          {
            id: 20,
            context: null,
            question: "All but one of the following are aids that Miss Miller may employ in order to achieve clarity in her drafting:",
            options: {
              a: "Punctuation marks",
              b: "Schedule",
              c: "Avrom Sherr's model",
              d: "Interpretation section",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2016-april-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "The event at the court  (1) ...... last Monday were very brief.  First, the Judge entered exactly at 9 o'clock in the morning.  After the initial pleasantries, he asked the (2)....... to mention their cases.\n\nAs the cases were being mentioned, the (3) ...... was calling out the names of the parties involved. For each case called. The counsel would (4)........ None of the cases were heard, but all were merely mentioned and (5)........",
            question: "(1)",
            options: {
              a: "Session",
              b: "Bench",
              c: "Hearing",
              d: "Trials",
            },
            answer: "a",
          },
          {
            id: 2,
            context: "The event at the court  (1) ...... last Monday were very brief.  First, the Judge entered exactly at 9 o'clock in the morning.  After the initial pleasantries, he asked the (2)....... to mention their cases.\n\nAs the cases were being mentioned, the (3) ...... was calling out the names of the parties involved. For each case called. The counsel would (4)........ None of the cases were heard, but all were merely mentioned and (5)........",
            question: "(2)",
            options: {
              a: "Bar",
              b: "Bench",
              c: "Solicitors",
              d: "Barristers",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "The event at the court  (1) ...... last Monday were very brief.  First, the Judge entered exactly at 9 o'clock in the morning.  After the initial pleasantries, he asked the (2)....... to mention their cases.\n\nAs the cases were being mentioned, the (3) ...... was calling out the names of the parties involved. For each case called. The counsel would (4)........ None of the cases were heard, but all were merely mentioned and (5)........",
            question: "(3)",
            options: {
              a: "Clerk",
              b: "Orderly",
              c: "Scribe",
              d: "Register",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "The event at the court  (1) ...... last Monday were very brief.  First, the Judge entered exactly at 9 o'clock in the morning.  After the initial pleasantries, he asked the (2)....... to mention their cases.\n\nAs the cases were being mentioned, the (3) ...... was calling out the names of the parties involved. For each case called. The counsel would (4)........ None of the cases were heard, but all were merely mentioned and (5)........",
            question: "(4)",
            options: {
              a: "enter appearances",
              b: "Introduce themselves",
              c: "Announce appearances",
              d: "None of the above",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "The event at the court  (1) ...... last Monday were very brief.  First, the Judge entered exactly at 9 o'clock in the morning.  After the initial pleasantries, he asked the (2)....... to mention their cases.\n\nAs the cases were being mentioned, the (3) ...... was calling out the names of the parties involved. For each case called. The counsel would (4)........ None of the cases were heard, but all were merely mentioned and (5)........",
            question: "(5)",
            options: {
              a: "Postponed",
              b: "Suspended",
              c: "Adjourned",
              d: "Dismissed",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Judgment in a suit between Eribo Douglas as plaintiff and Oche Okpani as defendant in respect of the title to a parcel of land located at No.20, Allen Avenue, Maitama, Abuja was delivered on 19th September, 2015. The court gave judgment in favour of the plaintiff.",
            question: "Within what period should the aggrieved party appeal?",
            options: {
              a: "30 days",
              b: "3 months",
              c: "90 days",
              d: "45 days",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Judgment in a suit between Eribo Douglas as plaintiff and Oche Okpani as defendant in respect of the title to a parcel of land located at No.20, Allen Avenue, Maitama, Abuja was delivered on 19th September, 2015. The court gave judgment in favour of the plaintiff.",
            question: "If the Court of Appeal delivers judgment in (6) above,  within what period should the aggrieved party appeal?",
            options: {
              a: "30 days",
              b: "3 months",
              c: "90 days",
              d: "45 days",
            },
            answer: "b",
          },
          {
            id: 8,
            context: null,
            question: "An aggrieved party requires leave in one of the under listed",
            options: {
              a: "From final decision of the High Court",
              b: "Where the question is on fundamental right",
              c: "Where the appeal is from a decision of the High Court in its appellate jurisdiction.",
              d: "Where the question involves the interpretation and application of the Constitution.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: null,
            question: "One of these is not an application pending appeal.",
            options: {
              a: "Application for injunction pending appeal.",
              b: "Application for stay of  execution.",
              c: "Application for stay of  proceedings.",
              d: "Garnishee proceeding.",
            },
            answer: "d",
          },
          {
            id: 10,
            context: null,
            question: "What application will the aggrieved defendant file where he wants to stop the Plaintiff from enforcing the judgment of the trial court pending the determination  of his appeal filed at the Court of Appeal.",
            options: {
              a: "Stay of Judgment",
              b: "Stay of proceedings",
              c: "Injunction pending Appeal",
              d: "Stay of Execution.",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "A good lawyer should know the basic modes of commencement of actions for different causes of action.  For example, contentious matters are to be commenced by way of (11)...... matrimonial causes are commenced by way of (12)...... action for prerogative writs are commenced by way of (13).... while  (14)...... is most suitable for interpretation of statutes and documents.",
            question: "(11)",
            options: {
              a: "Originating summons",
              b: "Writ of Summons",
              c: "Petition",
              d: "Originating application.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "A good lawyer should know the basic modes of commencement of actions for different causes of action.  For example, contentious matters are to be commenced by way of (11)...... matrimonial causes are commenced by way of (12)...... action for prerogative writs are commenced by way of (13).... while  (14)...... is most suitable for interpretation of statutes and documents.",
            question: "(12)",
            options: {
              a: "Originating summons",
              b: "Writ of Summons",
              c: "Petition",
              d: "Originating application",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "A good lawyer should know the basic modes of commencement of actions for different causes of action.  For example, contentious matters are to be commenced by way of (11)...... matrimonial causes are commenced by way of (12)...... action for prerogative writs are commenced by way of (13).... while  (14)...... is most suitable for interpretation of statutes and documents.",
            question: "(13)",
            options: {
              a: "Originating summons",
              b: "Writ of summons",
              c: "Petition",
              d: "Originating application",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "A good lawyer should know the basic modes of commencement of actions for different causes of action.  For example, contentious matters are to be commenced by way of (11)...... matrimonial causes are commenced by way of (12)...... action for prerogative writs are commenced by way of (13).... while  (14)...... is most suitable for interpretation of statutes and documents.",
            question: "(14)",
            options: {
              a: "Originating summons",
              b: "Writ of Summons",
              c: "Petition",
              d: "Originating application",
            },
            answer: "d",
          },
          {
            id: 15,
            context: null,
            question: "Assuming that in a suit between Mr.Fredo Longe as plaintiff and Dr. Bitrus as defendant over declaration of title to a parcel of land, Dr. Bitrus is evading service of the originating process on him.\n\nWhat is the option available to Mr. Fredo to effect service on Bitrus?",
            options: {
              a: "Urgent service",
              b: "Substituted service",
              c: "Direct service",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 16,
            context: null,
            question: "Assuming that Dr. Bitrus has been eventually served but he defaulted in appearing in Court, what is the appropriate step to be taken by Mr. Fredo  Longe?",
            options: {
              a: "Mr. Fredo Longe may apply to Court to set the matter down for hearing to enable him prove his case.",
              b: "Fredo Longe may apply for judgment against Dr. Bitrus.",
              c: "Fredo Longe may apply for cost against Dr. Bitrus",
              d: "All of the above.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "Recently, the President of the Federal Republic of Nigeria declared the office of the Vice President vacant without giving a reason.  The Vice President has decided to institute an action in court against the Attorney-General of the Federation and the National Assembly, to among other things, determine the constitutionality of the President's declaration and whether by S.239 of the 1999 Constitution of the Federal Republic of Nigeria, the Vice President's office had become vacant.",
            question: "Which of the following courts would have jurisdiction in the matter?",
            options: {
              a: "Supreme Court under S.232 of the 1999 Constitution as amended.",
              b: "National and State House of Assembly Election Tribunal under S.285",
              c: "Court of Appeal under S.239(1) of the 1999 Constitution.",
              d: "The Federal High Court under S.251 of the 1999 Constitution.",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "Recently, the President of the Federal Republic of Nigeria declared the office of the Vice President vacant without giving a reason.  The Vice President has decided to institute an action in court against the Attorney-General of the Federation and the National Assembly, to among other things, determine the constitutionality of the President's declaration and whether by S.239 of the 1999 Constitution of the Federal Republic of Nigeria, the Vice President's office had become vacant.",
            question: "Which of the following is the appropriate mode of commencing this action and why?",
            options: {
              a: "Writ of Summons because it is the general mode of commencement of action.",
              b: "Petition because it is related to the election of the Vice President",
              c: "Originating Summons because it borders on construction of the Constitution.",
              d: "Originating application because it is the prerogative of the President to declare that office vacant.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "Recently, the President of the Federal Republic of Nigeria declared the office of the Vice President vacant without giving a reason.  The Vice President has decided to institute an action in court against the Attorney-General of the Federation and the National Assembly, to among other things, determine the constitutionality of the President's declaration and whether by S.239 of the 1999 Constitution of the Federal Republic of Nigeria, the Vice President's office had become vacant.",
            question: "In view of the appropriate mode of commencement of this action, how would the facts of the case be presented to the Court?",
            options: {
              a: "Oral Evidence",
              b: "By the pleadings of the parties.",
              c: "By affidavit",
              d: "Any of the above.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: "Recently, the President of the Federal Republic of Nigeria declared the office of the Vice President vacant without giving a reason.  The Vice President has decided to institute an action in court against the Attorney-General of the Federation and the National Assembly, to among other things, determine the constitutionality of the President's declaration and whether by S.239 of the 1999 Constitution of the Federal Republic of Nigeria, the Vice President's office had become vacant.",
            question: "The appeal in the above matter shall be:",
            options: {
              a: "As of right",
              b: "With leave of the Court of Appeal",
              c: "There is no right of appeal",
              d: "With leave of the Supreme Court.",
            },
            answer: "a",
          },
        ],
      },
    ],
  },
  "2016-august": {
    year: 2016,
    session: "August",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 40,
    courses: [
      {
        id: "2016-august-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "CHICO NIG.LTD.\n15, Bagauda Road, Lagos\n(1) ................................. (2)................................ Above named company will be held on 22nd day of July, 2016 at the Company's premises at 11.00 p.m. to (3) ..................\n\nAGENDA\n(4).................................Dated this 8th day of July 2016.\n\nSign\n(5).................................Company Secretary",
            question: "Fill in blank (1) of the notice.",
            options: {
              a: "Resolutions",
              b: "Notice of Statutory meeting",
              c: "Special Resolution",
              d: "Notice of the first Board Meeting.",
            },
            answer: "d",
          },
          {
            id: 2,
            context: "CHICO NIG.LTD.\n15, Bagauda Road, Lagos\n(1) ................................. (2)................................ Above named company will be held on 22nd day of July, 2016 at the Company's premises at 11.00 p.m. to (3) ..................\n\nAGENDA\n(4).................................Dated this 8th day of July 2016.\n\nSign\n(5).................................Company Secretary",
            question: "Fill in blank (2) of the notice.",
            options: {
              a: "At the extra-ordinary General meeting of the ...............",
              b: "At the Annual General meeting of the .........",
              c: "Notice is hereby given that the first Board meeting of the .......",
              d: "At the first Board Meeting.",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "CHICO NIG.LTD.\n15, Bagauda Road, Lagos\n(1) ................................. (2)................................ Above named company will be held on 22nd day of July, 2016 at the Company's premises at 11.00 p.m. to (3) ..................\n\nAGENDA\n(4).................................Dated this 8th day of July 2016.\n\nSign\n(5).................................Company Secretary",
            question: "Fill in blank (3) of the notice.",
            options: {
              a: "Pass the following resolutions",
              b: "Transact the following businesses",
              c: "Propose and it need be pass the following resolutions.",
              d: "Propose the following resolutions.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "CHICO NIG.LTD.\n15, Bagauda Road, Lagos\n(1) ................................. (2)................................ Above named company will be held on 22nd day of July, 2016 at the Company's premises at 11.00 p.m. to (3) ..................\n\nAGENDA\n(4).................................Dated this 8th day of July 2016.\n\nSign\n(5).................................Company Secretary",
            question: "Fill in blank (4) of the notice.",
            options: {
              a: "Appointment of the Chairman.",
              b: "Appointment of the Secretary.",
              c: "Appointment of the Directors.",
              d: "Appointment of the legal adviser.",
            },
            answer: "a",
          },
          {
            id: 5,
            context: "CHICO NIG.LTD.\n15, Bagauda Road, Lagos\n(1) ................................. (2)................................ Above named company will be held on 22nd day of July, 2016 at the Company's premises at 11.00 p.m. to (3) ..................\n\nAGENDA\n(4).................................Dated this 8th day of July 2016.\n\nSign\n(5).................................Company Secretary",
            question: "Fill in blank (5) of the notice.",
            options: {
              a: "Name of the Company Secretary.",
              b: "By order of the Board.",
              c: "Signature of the Company Secretary.",
              d: "Name of a Director of the Company.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "Suzuki (Japan) Inc. and Zuma Automobiles Nigeria Plc. signed a preliminary agreement after the recently concluded Lagos International Trade Fair to set up an Automobile Manufacturing Company at the Garam Industrial Park, F.C.T. To this end, it is proposed to register a special purpose vehicle (Spv) which will be a Public Company with a share capital of ten billion naira (N10 billion) divided into ten billion ordinary shares of N1 each to be fully subscribed in the ratio 60:40 by the two companies. The Nigerian Company is to fully pay up its allotted shares by providing five hectares of land at the Garam Industrial Park, while the Japanese Company will pay up its allotted shares with loan capital obtained from the Japanese Bank of Industries.",
            question: "Which of the following will not be part of the preliminary agreement entered into by the Companies prior to the incorporation of the special purpose vehicle company.",
            options: {
              a: "Memorandum of understanding.",
              b: "Joint Ventures Agreement.",
              c: "Payment of Promoters Expenses Agreement.",
              d: "Memorandum of Association.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Suzuki (Japan) Inc. and Zuma Automobiles Nigeria Plc. signed a preliminary agreement after the recently concluded Lagos International Trade Fair to set up an Automobile Manufacturing Company at the Garam Industrial Park, F.C.T. To this end, it is proposed to register a special purpose vehicle (Spv) which will be a Public Company with a share capital of ten billion naira (N10 billion) divided into ten billion ordinary shares of N1 each to be fully subscribed in the ratio 60:40 by the two companies. The Nigerian Company is to fully pay up its allotted shares by providing five hectares of land at the Garam Industrial Park, while the Japanese Company will pay up its allotted shares with loan capital obtained from the Japanese Bank of Industries.",
            question: "Which of the following documents will be required to ascertain the number of shares to be credited to Zuma Automobiles Nigeria Limited as fully paid in the light of the consideration furnished:",
            options: {
              a: "Memorandum and Articles of Association.",
              b: "Bill of Quantity prepared by a competent Quantity Surveyor.",
              c: "Valuation report prepared by a licensed Estate Surveyor and valuer.",
              d: "Audited statement of account prepared by a Chartered Accountant.",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "Suzuki (Japan) Inc. and Zuma Automobiles Nigeria Plc. signed a preliminary agreement after the recently concluded Lagos International Trade Fair to set up an Automobile Manufacturing Company at the Garam Industrial Park, F.C.T. To this end, it is proposed to register a special purpose vehicle (Spv) which will be a Public Company with a share capital of ten billion naira (N10 billion) divided into ten billion ordinary shares of N1 each to be fully subscribed in the ratio 60:40 by the two companies. The Nigerian Company is to fully pay up its allotted shares by providing five hectares of land at the Garam Industrial Park, while the Japanese Company will pay up its allotted shares with loan capital obtained from the Japanese Bank of Industries.",
            question: "One of the following is not an incentive available to Suzuki (Japan) Inc. in respect of the foreign loan, even if imported through authorized dealer.",
            options: {
              a: "Unfettered repatriation of profits made from the investment.",
              b: "Unfettered repatriation of the capital sum invested.",
              c: "Freedom to purchase the 40% equity of the Nigerian partner thereby owning the business hundred per cent.",
              d: "Unfettered liberty to alter the objects clause in the Memorandum of Association of the special purpose vehicle after incorporation to deal in the manufacturing of military hardware.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Suzuki (Japan) Inc. and Zuma Automobiles Nigeria Plc. signed a preliminary agreement after the recently concluded Lagos International Trade Fair to set up an Automobile Manufacturing Company at the Garam Industrial Park, F.C.T. To this end, it is proposed to register a special purpose vehicle (Spv) which will be a Public Company with a share capital of ten billion naira (N10 billion) divided into ten billion ordinary shares of N1 each to be fully subscribed in the ratio 60:40 by the two companies. The Nigerian Company is to fully pay up its allotted shares by providing five hectares of land at the Garam Industrial Park, while the Japanese Company will pay up its allotted shares with loan capital obtained from the Japanese Bank of Industries.",
            question: "Which of the following documents must be submitted by the promoters of the special purpose vehicle (Spv) for stamping before incorporation at the Corporate Affairs Commission.",
            options: {
              a: "Memorandum and Articles of Association as well as statement of authorized capital.",
              b: "Memorandum & Articles of Association only.",
              c: "Statement of authorized share capital and return of allotment form on",
              d: "Memorandum of Understanding and statement of authorized share capital.",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "Suzuki (Japan) Inc. and Zuma Automobiles Nigeria Plc. signed a preliminary agreement after the recently concluded Lagos International Trade Fair to set up an Automobile Manufacturing Company at the Garam Industrial Park, F.C.T. To this end, it is proposed to register a special purpose vehicle (Spv) which will be a Public Company with a share capital of ten billion naira (N10 billion) divided into ten billion ordinary shares of N1 each to be fully subscribed in the ratio 60:40 by the two companies. The Nigerian Company is to fully pay up its allotted shares by providing five hectares of land at the Garam Industrial Park, while the Japanese Company will pay up its allotted shares with loan capital obtained from the Japanese Bank of Industries.",
            question: "Which of the following regulatory bodies is not involved in the formation and registration of the special purpose company?",
            options: {
              a: "Corporate Affairs Commission.",
              b: "Securities and Exchange Commission.",
              c: "Federal Board of inland Revenue Service.",
              d: "Assets Management Corporation of Nigeria (AMCON).",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Denna Consortium was set up for the purpose of building a 50-storey apartment complex in Abuja, F.C.T. Upon completion of the project, the members of the Consortium convened an Extra Ordinary General meeting to pass a (11) ..................... for a (12) ............ The directors of the company failed to file the (13) ............ within the (14) ................ as required by law stating that (15) ........ the company would be able to pay its debts in full.",
            question: "Fill in blank (11) of the passage.",
            options: {
              a: "When Resolution",
              b: "Ordinary Resolution",
              c: "Special Resolution",
              d: "Unanimous Resolution",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "Denna Consortium was set up for the purpose of building a 50-storey apartment complex in Abuja, F.C.T. Upon completion of the project, the members of the Consortium convened an Extra Ordinary General meeting to pass a (11) ..................... for a (12) ............ The directors of the company failed to file the (13) ............ within the (14) ................ as required by law stating that (15) ........ the company would be able to pay its debts in full.",
            question: "Fill in blank (12) of the passage.",
            options: {
              a: "Compulsory winding up.",
              b: "Creditors voluntary winding up.",
              c: "Members voluntary winding up.",
              d: "Winding up subject to the supervision of the court.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "Denna Consortium was set up for the purpose of building a 50-storey apartment complex in Abuja, F.C.T. Upon completion of the project, the members of the Consortium convened an Extra Ordinary General meeting to pass a (11) ..................... for a (12) ............ The directors of the company failed to file the (13) ............ within the (14) ................ as required by law stating that (15) ........ the company would be able to pay its debts in full.",
            question: "Fill in blank (13) of the passage.",
            options: {
              a: "Statutory declaration of Compliance.",
              b: "Statutory declaration of solvency",
              c: "Statutory declaration to wind up.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "Denna Consortium was set up for the purpose of building a 50-storey apartment complex in Abuja, F.C.T. Upon completion of the project, the members of the Consortium convened an Extra Ordinary General meeting to pass a (11) ..................... for a (12) ............ The directors of the company failed to file the (13) ............ within the (14) ................ as required by law stating that (15) ........ the company would be able to pay its debts in full.",
            question: "Fill in blank (14) of the passage.",
            options: {
              a: "Five weeks after the date of the resolution for winding up",
              b: "Four weeks immediately after the date of the resolution for winding up.",
              c: "Five weeks preceding the date of the resolution for winding up.",
              d: "Four weeks immediately preceding the date of the winding up.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "Denna Consortium was set up for the purpose of building a 50-storey apartment complex in Abuja, F.C.T. Upon completion of the project, the members of the Consortium convened an Extra Ordinary General meeting to pass a (11) ..................... for a (12) ............ The directors of the company failed to file the (13) ............ within the (14) ................ as required by law stating that (15) ........ the company would be able to pay its debts in full.",
            question: "Fill in blank (15) of the passage.",
            options: {
              a: "Within 12 months from the commencement of the winding",
              b: "12 months from the passing of the resolution.",
              c: "All of the above.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 16,
            context: "You accompanied your principal to the recently concluded First African Regional Conference of the I.C.C. held ........ Eko Hotels and Towers in Lagos.\n\nThere you met Ham Idris 24, John Blakeman 17, and Jumai Li 21, Singaporean businessmen who have agreed to set up an Artificial Intelligence business in Nigeria. They have briefed and retained your services to procure the registration of the company and facilities the commencement of business. The trio are to be directors and shareholders of the company.\n\nThe proposed name of the company is Fidus Articles National Limited.",
            question: "The proposed name of the company is:",
            options: {
              a: "Prohibited by the Companies and Allied Matters Act.",
              b: "The name is restricted by Companies and Allied Matters Act.",
              c: "The name is unsuitable for the purpose.",
              d: "The name is not subject to any legal disability.",
            },
            answer: "b",
          },
          {
            id: 17,
            context: "You accompanied your principal to the recently concluded First African Regional Conference of the I.C.C. held ........ Eko Hotels and Towers in Lagos.\n\nThere you met Ham Idris 24, John Blakeman 17, and Jumai Li 21, Singaporean businessmen who have agreed to set up an Artificial Intelligence business in Nigeria. They have briefed and retained your services to procure the registration of the company and facilities the commencement of business. The trio are to be directors and shareholders of the company.\n\nThe proposed name of the company is Fidus Articles National Limited.",
            question: "What is the position of CAMA on the inclusion of John Blakeman as a director of the Company?",
            options: {
              a: "It is absolutely prohibited.",
              b: "It is permissible if CAC's consent is obtained.",
              c: "It is permissible if the subscribers consent.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "Assuming the trio are desirous of registering the Nigeria-Malaysia Chambers of Commerce in collaboration with their Nigerian counterparts, it must be registered under (18) ................. as a (19) .......... without (20) ..............",
            question: "Fill in blank (18) of the passage.",
            options: {
              a: "Part A of Companies and Allied Matters Act",
              b: "Part B of Companies and Allied Matters Act",
              c: "Part C of Companies and Allied Matters Act",
              d: "Part D of Companies and Allied Matters Act",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "Assuming the trio are desirous of registering the Nigeria-Malaysia Chambers of Commerce in collaboration with their Nigerian counterparts, it must be registered under (18) ................. as a (19) .......... without (20) ..............",
            question: "Fill in blank (19) of the passage.",
            options: {
              a: "Company limited by shares",
              b: "Unlimited Liability Company",
              c: "Company limited by Guarantee",
              d: "Business name",
            },
            answer: "c",
          },
          {
            id: 20,
            context: "Assuming the trio are desirous of registering the Nigeria-Malaysia Chambers of Commerce in collaboration with their Nigerian counterparts, it must be registered under (18) ................. as a (19) .......... without (20) ..............",
            question: "Fill in blank (20) of the passage.",
            options: {
              a: "Directors",
              b: "Company Secretary",
              c: "Memorandum and Articles of Association",
              d: "Shareholding",
            },
            answer: "d",
          },
        ],
      },
      {
        id: "2016-august-criminal-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Felix Abubakar was tried at the High Court of Justice, Akure for the offence of stealing a Plasma television. The Director of Public Prosecutions tendered his alleged confessional statement in Court which was opposed by the defence counsel on the ground that the statement was involuntarily obtained and that the Judges' rule was not complied with before the accused made the statement.",
            question: "The Judge should do one of the following as regards the objection of the defence counsel:",
            options: {
              a: "Admit the confessional statement but attach little weight to it.",
              b: "Adjourn the matter in order to take oral evidence to determine the veracity of the accused statement.",
              c: "Conduct a trial within trial.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Felix Abubakar was tried at the High Court of Justice, Akure for the offence of stealing a Plasma television. The Director of Public Prosecutions tendered his alleged confessional statement in Court which was opposed by the defence counsel on the ground that the statement was involuntarily obtained and that the Judges' rule was not complied with before the accused made the statement.",
            question: "Judge's rule entails that ..............",
            options: {
              a: "A confessional statement must be obtained involuntarily by Police officers at the Police Station.",
              b: "A confessional statement must be obtained sternly by Police officers at the Police Statement.",
              c: "A confessional statement must be obtained without coercion by Police officers at the Police Station.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "Felix Abubakar was tried at the High Court of Justice, Akure for the offence of stealing a Plasma television. The Director of Public Prosecutions tendered his alleged confessional statement in Court which was opposed by the defence counsel on the ground that the statement was involuntarily obtained and that the Judges' rule was not complied with before the accused made the statement.",
            question: "A trial within trial is one of the following:",
            options: {
              a: "A trial conducted in a court for the purpose of determining the voluntariness or otherwise of alleged confessional statement.",
              b: "A trial conducted for the purpose of determining whether or not a court has jurisdiction over a case before it.",
              c: "A trial conducted for the purpose of determining the veracity of Police statement.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "Festus Abubakar was charged before the High Court of Ogun State for the offences of House breaking and stealing. The accused was chained hands and legs and placed in the dock when the charges were read to him and he pleaded not guilty to both offences. The complainant, Chief Abbas Braimoh was also present in Court and was represented by his counsel Ibrahim Yinusa, SAN, who informed the court that he was on a watching brief for the complainant. The prosecutor Mohammed Yisa, a State Counsel informed the court that Ibrahim Yinusa, SAN would conduct the case on behalf of the prosecution. Ibrahim Yinusa called two witnesses and closed the case of the prosecution and both counsel addressed the court. The judgment of the Court was delivered four months after the address of counsel and the accused person was sentenced to four and seven years imprisonment respectively for both offences which are to run concurrently.",
            question: "The arraignment of the accused person given in the above scenario entails that he should:",
            options: {
              a: "Have been brought to court fettered",
              b: "Have been brought to court Unfettered",
              c: "Have been arraigned with the consent of his counsel.",
              d: "Have been asked if he consents to being tried by the court.",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "Festus Abubakar was charged before the High Court of Ogun State for the offences of House breaking and stealing. The accused was chained hands and legs and placed in the dock when the charges were read to him and he pleaded not guilty to both offences. The complainant, Chief Abbas Braimoh was also present in Court and was represented by his counsel Ibrahim Yinusa, SAN, who informed the court that he was on a watching brief for the complainant. The prosecutor Mohammed Yisa, a State Counsel informed the court that Ibrahim Yinusa, SAN would conduct the case on behalf of the prosecution. Ibrahim Yinusa called two witnesses and closed the case of the prosecution and both counsel addressed the court. The judgment of the Court was delivered four months after the address of counsel and the accused person was sentenced to four and seven years imprisonment respectively for both offences which are to run concurrently.",
            question: "Which of the following options is correct:",
            options: {
              a: "Ibrahim Yinusa, SAN being on a watching brief cannot announce appearance for the complainant.",
              b: "Ibrahim Yinusa, SAN being on a watching brief cannot sit at the bar.",
              c: "Ibrahim Yinusa, SAN being on a watching brief cannot examine the witness for the prosecution.",
              d: "None of the above",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Festus Abubakar was charged before the High Court of Ogun State for the offences of House breaking and stealing. The accused was chained hands and legs and placed in the dock when the charges were read to him and he pleaded not guilty to both offences. The complainant, Chief Abbas Braimoh was also present in Court and was represented by his counsel Ibrahim Yinusa, SAN, who informed the court that he was on a watching brief for the complainant. The prosecutor Mohammed Yisa, a State Counsel informed the court that Ibrahim Yinusa, SAN would conduct the case on behalf of the prosecution. Ibrahim Yinusa called two witnesses and closed the case of the prosecution and both counsel addressed the court. The judgment of the Court was delivered four months after the address of counsel and the accused person was sentenced to four and seven years imprisonment respectively for both offences which are to run concurrently.",
            question: "The judgement of the Court according to section 294 (1) 1999 Constitution must be delivered within a period of ...............",
            options: {
              a: "30 days",
              b: "45 days",
              c: "60 days",
              d: "90 days",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Festus Abubakar was charged before the High Court of Ogun State for the offences of House breaking and stealing. The accused was chained hands and legs and placed in the dock when the charges were read to him and he pleaded not guilty to both offences. The complainant, Chief Abbas Braimoh was also present in Court and was represented by his counsel Ibrahim Yinusa, SAN, who informed the court that he was on a watching brief for the complainant. The prosecutor Mohammed Yisa, a State Counsel informed the court that Ibrahim Yinusa, SAN would conduct the case on behalf of the prosecution. Ibrahim Yinusa called two witnesses and closed the case of the prosecution and both counsel addressed the court. The judgment of the Court was delivered four months after the address of counsel and the accused person was sentenced to four and seven years imprisonment respectively for both offences which are to run concurrently.",
            question: "The maximum sentence the accused person will serve is .......",
            options: {
              a: "Four years",
              b: "Seven years",
              c: "Eleven years",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "At the trial of Mrs. Margret Mohammed at the High Court of the Federal Capital Territory, Abuja for the offence of culpable homicide punishable with death, she pleaded not guilty to the charge and the prosecution opened its case by calling two witnesses who testified to the effect that they saw the accused person committing the offence by stabbing the victim with a knife. The prosecution then closed its case. The defence counsel thereafter rested his case on that of the prosecution. After the final addresses by Counsel and before judgment was delivered, it was discovered that Margret Mohammed was pregnant.",
            question: "When Margret Mohammed takes her plea before the Court, it means that:",
            options: {
              a: "The accused person has set up herself for trial before Court.",
              b: "The accused person has entered his defence.",
              c: "The accused person has lost the confidence of the trial judge.",
              d: "The accused person has submitted to the jurisdiction of the court",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "At the trial of Mrs. Margret Mohammed at the High Court of the Federal Capital Territory, Abuja for the offence of culpable homicide punishable with death, she pleaded not guilty to the charge and the prosecution opened its case by calling two witnesses who testified to the effect that they saw the accused person committing the offence by stabbing the victim with a knife. The prosecution then closed its case. The defence counsel thereafter rested his case on that of the prosecution. After the final addresses by Counsel and before judgment was delivered, it was discovered that Margret Mohammed was pregnant.",
            question: "By the defence Counsel resting its case on the prosecution's case it means:",
            options: {
              a: "The defence Counsel will call for the evidence to prove the allegation against the accused.",
              b: "The defence Counsel has foreclosed the opportunity of calling witnesses in the case.",
              c: "The defence counsel has raised a technical defence to the charge",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Ben Jasper, a student of Nigerian Law School, Yenagoa, was posted to the Ministry of Justice, Enugu for his externship programme. During the exercise, he wrote many brilliant legal opinions which endeared him to the Honourable Attorney-General of the State. On the 8th day of March, 2015 the Attorney-General had many cases including the case of The State v Ezemba pending before the High Court. He wrote a letter containing his nolle prosequi and directed Ben Jasper to proceed to the High Court to enter the nolle prosequi on his behalf. When the letter was handed to the learned trial judge, he immediately discharged and acquitted Mr. Ezemba on the basis of the Attorney-General's nolle as forwarded. As Ezemba stepped out of the Court, he was re-arrested by the Police and detained in prison custody for two weeks. He was again arraigned before the same court that had earlier discharged and acquitted him. He pleaded autre fois acquit and was discharged.",
            question: "The nolle entered by Ben Jasper on behalf of the Attorney-General was:",
            options: {
              a: "Unconstitutional",
              b: "Invalid",
              c: "A and B",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Ben Jasper, a student of Nigerian Law School, Yenagoa, was posted to the Ministry of Justice, Enugu for his externship programme. During the exercise, he wrote many brilliant legal opinions which endeared him to the Honourable Attorney-General of the State. On the 8th day of March, 2015 the Attorney-General had many cases including the case of The State v Ezemba pending before the High Court. He wrote a letter containing his nolle prosequi and directed Ben Jasper to proceed to the High Court to enter the nolle prosequi on his behalf. When the letter was handed to the learned trial judge, he immediately discharged and acquitted Mr. Ezemba on the basis of the Attorney-General's nolle as forwarded. As Ezemba stepped out of the Court, he was re-arrested by the Police and detained in prison custody for two weeks. He was again arraigned before the same court that had earlier discharged and acquitted him. He pleaded autre fois acquit and was discharged.",
            question: "Where a nolle is properly entered the effect is:",
            options: {
              a: "A discharge and acquittal",
              b: "Acquittal only",
              c: "Discharge only",
              d: "A discharge on the merit",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "Ben Jasper, a student of Nigerian Law School, Yenagoa, was posted to the Ministry of Justice, Enugu for his externship programme. During the exercise, he wrote many brilliant legal opinions which endeared him to the Honourable Attorney-General of the State. On the 8th day of March, 2015 the Attorney-General had many cases including the case of The State v Ezemba pending before the High Court. He wrote a letter containing his nolle prosequi and directed Ben Jasper to proceed to the High Court to enter the nolle prosequi on his behalf. When the letter was handed to the learned trial judge, he immediately discharged and acquitted Mr. Ezemba on the basis of the Attorney-General's nolle as forwarded. As Ezemba stepped out of the Court, he was re-arrested by the Police and detained in prison custody for two weeks. He was again arraigned before the same court that had earlier discharged and acquitted him. He pleaded autre fois acquit and was discharged.",
            question: "Which of the following is not correct:",
            options: {
              a: "The re-arrest of the accused person was improper because he was acquitted by the Court.",
              b: "The re-arrest of the accused was proper because a nolle is only a discharge.",
              c: "The order of acquittal was wrong because it is not a trial on the merit.",
              d: "All of the above.",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "Ben Jasper, a student of Nigerian Law School, Yenagoa, was posted to the Ministry of Justice, Enugu for his externship programme. During the exercise, he wrote many brilliant legal opinions which endeared him to the Honourable Attorney-General of the State. On the 8th day of March, 2015 the Attorney-General had many cases including the case of The State v Ezemba pending before the High Court. He wrote a letter containing his nolle prosequi and directed Ben Jasper to proceed to the High Court to enter the nolle prosequi on his behalf. When the letter was handed to the learned trial judge, he immediately discharged and acquitted Mr. Ezemba on the basis of the Attorney-General's nolle as forwarded. As Ezemba stepped out of the Court, he was re-arrested by the Police and detained in prison custody for two weeks. He was again arraigned before the same court that had earlier discharged and acquitted him. He pleaded autre fois acquit and was discharged.",
            question: "The detention of the accused person for two weeks is against the accused person's right to:",
            options: {
              a: "Speech and expression",
              b: "Liberty",
              c: "Habeas Corpus",
              d: "Property.",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "Ben Jasper, a student of Nigerian Law School, Yenagoa, was posted to the Ministry of Justice, Enugu for his externship programme. During the exercise, he wrote many brilliant legal opinions which endeared him to the Honourable Attorney-General of the State. On the 8th day of March, 2015 the Attorney-General had many cases including the case of The State v Ezemba pending before the High Court. He wrote a letter containing his nolle prosequi and directed Ben Jasper to proceed to the High Court to enter the nolle prosequi on his behalf. When the letter was handed to the learned trial judge, he immediately discharged and acquitted Mr. Ezemba on the basis of the Attorney-General's nolle as forwarded. As Ezemba stepped out of the Court, he was re-arrested by the Police and detained in prison custody for two weeks. He was again arraigned before the same court that had earlier discharged and acquitted him. He pleaded autre fois acquit and was discharged.",
            question: "The plea of autre fois acquit made by the accused person in this case was wrong because:",
            options: {
              a: "He was tried by the same Judge",
              b: "The Police can arrest and prosecute.",
              c: "His first trial was not decided on the merit.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 15,
            context: null,
            question: "For the plea of autre fois acquit, to succeed, all but one of the following must be satisfied:",
            options: {
              a: "The trial must be for a criminal offence.",
              b: "The trial must end in conviction or acquittal.",
              c: "The prosecutor must be the same for the two offences.",
              d: "It must be for the same offence or an offence having the same ingredients.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "On the 5th day of November, 2015 Scarber Ngbada and Sunny Udem were returning from their Law Office engagement when they saw two people fighting at Ogui Roundabout, Enugu. Ngbada suggested to Udem that as private persons, they could arrest the two people fighting and later hand them over to the Police. They arrested the two young students, Edet aged nine and Rufus aged ten and took them to their residence in Upper Chime and detained them. About three hours later, they took the suspects to Ogui Police Station. On the 6th day of November, 2015, the suspects were brought before the Chief Magistrate Court, Enugu on a two count charge of affray and disturbance of public peace. Counsel to the accused persons U. Ugbondu, Esq, made an oral application for their bail but the Magistrate refused the application. Counsel also raised a preliminary objection to the jurisdiction of the court to try the accused persons being juvenile offenders but he was overruled.",
            question: "The arrest carried out by Ngbada and Udem was wrong because:-",
            options: {
              a: "They did not have a warrant of arrest",
              b: "Private persons cannot arrest without the assistance of Policemen.",
              c: "They were ordinary Law School students",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "On the 5th day of November, 2015 Scarber Ngbada and Sunny Udem were returning from their Law Office engagement when they saw two people fighting at Ogui Roundabout, Enugu. Ngbada suggested to Udem that as private persons, they could arrest the two people fighting and later hand them over to the Police. They arrested the two young students, Edet aged nine and Rufus aged ten and took them to their residence in Upper Chime and detained them. About three hours later, they took the suspects to Ogui Police Station. On the 6th day of November, 2015, the suspects were brought before the Chief Magistrate Court, Enugu on a two count charge of affray and disturbance of public peace. Counsel to the accused persons U. Ugbondu, Esq, made an oral application for their bail but the Magistrate refused the application. Counsel also raised a preliminary objection to the jurisdiction of the court to try the accused persons being juvenile offenders but he was overruled.",
            question: "The detention of the suspects by Ngbada and Udem for three hours was wrong because:",
            options: {
              a: "They ought to have been arraigned in Court.",
              b: "They ought to have handed them over to the DPP.",
              c: "They ought to have handed them over to the Police immediately.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 18,
            context: "On the 5th day of November, 2015 Scarber Ngbada and Sunny Udem were returning from their Law Office engagement when they saw two people fighting at Ogui Roundabout, Enugu. Ngbada suggested to Udem that as private persons, they could arrest the two people fighting and later hand them over to the Police. They arrested the two young students, Edet aged nine and Rufus aged ten and took them to their residence in Upper Chime and detained them. About three hours later, they took the suspects to Ogui Police Station. On the 6th day of November, 2015, the suspects were brought before the Chief Magistrate Court, Enugu on a two count charge of affray and disturbance of public peace. Counsel to the accused persons U. Ugbondu, Esq, made an oral application for their bail but the Magistrate refused the application. Counsel also raised a preliminary objection to the jurisdiction of the court to try the accused persons being juvenile offenders but he was overruled.",
            question: "The Magistrate was wrong in refusing the application for bail because:",
            options: {
              a: "Bail is a Constitutional right",
              b: "Oral application for bail can be made in the Magistrate's Court.",
              c: "The offence is ordinary bailable",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 19,
            context: "On the 5th day of November, 2015 Scarber Ngbada and Sunny Udem were returning from their Law Office engagement when they saw two people fighting at Ogui Roundabout, Enugu. Ngbada suggested to Udem that as private persons, they could arrest the two people fighting and later hand them over to the Police. They arrested the two young students, Edet aged nine and Rufus aged ten and took them to their residence in Upper Chime and detained them. About three hours later, they took the suspects to Ogui Police Station. On the 6th day of November, 2015, the suspects were brought before the Chief Magistrate Court, Enugu on a two count charge of affray and disturbance of public peace. Counsel to the accused persons U. Ugbondu, Esq, made an oral application for their bail but the Magistrate refused the application. Counsel also raised a preliminary objection to the jurisdiction of the court to try the accused persons being juvenile offenders but he was overruled.",
            question: "Which of the following is the appropriate venue for the trial of the accused persons?",
            options: {
              a: "Federal High Court",
              b: "State High Court",
              c: "Customary Court",
              d: "Juvenile Court.",
            },
            answer: "d",
          },
          {
            id: 20,
            context: null,
            question: "All written applications for bail must be accompanied by:",
            options: {
              a: "List of authorities cited",
              b: "Written address",
              c: "Affidavit",
              d: "Counter affidavit",
            },
            answer: "c",
          },
        ],
      },
    ],
  },
  "2017-april": {
    year: 2017,
    session: "April",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 80,
    courses: [
      {
        id: "2017-april-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "At an extra ordinary general meeting of North-South Plc whose registered office is situated in Kano, the Chairman, Mr. Oke arrived at 12 noon from Benin. The meeting which was scheduled to commence at 10.00 a.m. actually commenced at 10.30 a.m. The members appointed Chief Ikenna as Chairman when the meeting commenced:-",
            question: "The meeting ought to have commenced not earlier than",
            options: {
              a: "10.30 a.m.",
              b: "11.00 a.m.",
              c: "10.05a.m.",
              d: "12 noon",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "At an extra ordinary general meeting of North-South Plc whose registered office is situated in Kano, the Chairman, Mr. Oke arrived at 12 noon from Benin. The meeting which was scheduled to commence at 10.00 a.m. actually commenced at 10.30 a.m. The members appointed Chief Ikenna as Chairman when the meeting commenced:-",
            question: "The extra- ordinary general meeting must be held in",
            options: {
              a: "Kano",
              b: "Nigeria",
              c: "Benin",
              d: "Anywhere",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "At an extra ordinary general meeting of North-South Plc whose registered office is situated in Kano, the Chairman, Mr. Oke arrived at 12 noon from Benin. The meeting which was scheduled to commence at 10.00 a.m. actually commenced at 10.30 a.m. The members appointed Chief Ikenna as Chairman when the meeting commenced:-",
            question: "The quorum for the meeting is:",
            options: {
              a: "1/3 of the members",
              b: "25 members",
              c: "According to what is stipulated in  the Articles.",
              d: "In accordance with the memorandum of Association.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "At an extra ordinary general meeting of North-South Plc whose registered office is situated in Kano, the Chairman, Mr. Oke arrived at 12 noon from Benin. The meeting which was scheduled to commence at 10.00 a.m. actually commenced at 10.30 a.m. The members appointed Chief Ikenna as Chairman when the meeting commenced:-",
            question: "_______Notice of the meeting must be given to the members.",
            options: {
              a: "14 days",
              b: "21 days",
              c: "Special",
              d: "7 days",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "At an extra ordinary general meeting of North-South Plc whose registered office is situated in Kano, the Chairman, Mr. Oke arrived at 12 noon from Benin. The meeting which was scheduled to commence at 10.00 a.m. actually commenced at 10.30 a.m. The members appointed Chief Ikenna as Chairman when the meeting commenced:-",
            question: "The following persons are entitled to receive notice of the meeting except:",
            options: {
              a: "The Chairman",
              b: "The members",
              c: "Directors",
              d: "A person to whom shares have been transferred.",
            },
            answer: "d",
          },
          {
            id: 6,
            context: "Onitsha (Nig.) Limited has chosen to pursue corporate restructuring instead of conversion to a public company and subsequent floatation of its shares to members of the public. It has chosen to merge with Enugu Nigeria Limited, another trading company. The combined net asset of the two companies is N4.8 billion. Both companies trade in cosmetics.",
            question: "What is the legal category of the proposed merger above?",
            options: {
              a: "Intermediate merger",
              b: "Large merger",
              c: "Small merger",
              d: "External Corporate Restructuring.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "Onitsha (Nig.) Limited has chosen to pursue corporate restructuring instead of conversion to a public company and subsequent floatation of its shares to members of the public. It has chosen to merge with Enugu Nigeria Limited, another trading company. The combined net asset of the two companies is N4.8 billion. Both companies trade in cosmetics.",
            question: "What is the economic form of the merger under the SEC Rule 2013?",
            options: {
              a: "Horizontal",
              b: "Lateral",
              c: "Conglomerate",
              d: "Vertical.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Onitsha (Nig.) Limited has chosen to pursue corporate restructuring instead of conversion to a public company and subsequent floatation of its shares to members of the public. It has chosen to merge with Enugu Nigeria Limited, another trading company. The combined net asset of the two companies is N4.8 billion. Both companies trade in cosmetics.",
            question: "Which regulatory body plays the most vital role in this category of merger?",
            options: {
              a: "Nigerian Stock Exchange",
              b: "Central Securities Clearing System",
              c: "Securities and Exchange Systems.",
              d: "Corporate Affairs Commission.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Onitsha (Nig.) Limited has chosen to pursue corporate restructuring instead of conversion to a public company and subsequent floatation of its shares to members of the public. It has chosen to merge with Enugu Nigeria Limited, another trading company. The combined net asset of the two companies is N4.8 billion. Both companies trade in cosmetics.",
            question: "One of the following officers will play a vital role if the company is embarking on an Arrangement on Sale?",
            options: {
              a: "Manager",
              b: "Receiver",
              c: "Liquidator",
              d: "Receiver/Manager",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "Onitsha (Nig.) Limited has chosen to pursue corporate restructuring instead of conversion to a public company and subsequent floatation of its shares to members of the public. It has chosen to merge with Enugu Nigeria Limited, another trading company. The combined net asset of the two companies is N4.8 billion. Both companies trade in cosmetics.",
            question: "Assuming that Onitsha (Nig.) Ltd. is embarking on an arrangement on sale, what is the length of time allowed for dissentients to notify the liquidator?",
            options: {
              a: "30 days",
              b: "20 days",
              c: "10 days",
              d: "5 days.",
            },
            answer: "a",
          },
          {
            id: 11,
            context: null,
            question: "The first meeting of the Board of Directors of a company shall take place within .............. of the registration of the company.",
            options: {
              a: "14 days",
              b: "30 days",
              c: "6 months",
              d: "3 months",
            },
            answer: "c",
          },
          {
            id: 12,
            context: null,
            question: "Where the Articles of Association of a company do not prescribe the length of notice of the Board meeting, the length of the notice shall be",
            options: {
              a: "14 days",
              b: "7days",
              c: "15 days",
              d: "21 days",
            },
            answer: "a",
          },
          {
            id: 13,
            context: null,
            question: "The following appointments can be made at the Board of Directors Meeting except:-",
            options: {
              a: "Appointment of Managing Director.",
              b: "Appointment of a new director",
              c: "Appointment of Banker of the Company.",
              d: "Appointment of Auditor",
            },
            answer: "b",
          },
          {
            id: 14,
            context: null,
            question: "By the rule of rotation of Directors, all the directors of the company are to retire at the first Annual General Meeting of the Company except:",
            options: {
              a: "The founding Directors.",
              b: "Those that are not in the multiple of three.",
              c: "The life director",
              d: "The Articles of Association of the company provides otherwise.",
            },
            answer: "c",
          },
          {
            id: 15,
            context: null,
            question: "The responsibility for determining the financial year of the company is vested in the",
            options: {
              a: "First Annual General Meeting.",
              b: "General meeting",
              c: "Board of Directors",
              d: "Memorandum of the company.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: null,
            question: "The following statements are correct in respect of a statutory meeting to be held by a public company except:",
            options: {
              a: "It must be held within 6 months of incorporation.",
              b: "It must be held in Nigeria.",
              c: "It must be held by both public and private companies.",
              d: "One of its agenda is to consider the statutory report.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "East-West Ltd has been going through turbulent times due to the current economic recession. The Company has decided that it should be wound up voluntarily. A declaration of solvency has been made.",
            question: "The liquidator must be appointed by the: -",
            options: {
              a: "Members",
              b: "Creditors",
              c: "Court",
              d: "Board of Directors",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "East-West Ltd has been going through turbulent times due to the current economic recession. The Company has decided that it should be wound up voluntarily. A declaration of solvency has been made.",
            question: "The declaration of solvency must be made before the company's resolution:",
            options: {
              a: "3 weeks",
              b: "5 weeks",
              c: "7 weeks",
              d: "15 weeks",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "East-West Ltd has been going through turbulent times due to the current economic recession. The Company has decided that it should be wound up voluntarily. A declaration of solvency has been made.",
            question: "Which of the following is not a condition for East-West Ltd. to fulfilling in order to be wound up as desired in the above scenario?",
            options: {
              a: "The Company must be solvent.",
              b: "The Company's assets must exceed its liabilities.",
              c: "The Company should not be indebted at all.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: "East-West Ltd has been going through turbulent times due to the current economic recession. The Company has decided that it should be wound up voluntarily. A declaration of solvency has been made.",
            question: "The liquidator appointed by the members may act in the case of creditors' voluntary winding up by a directive of:",
            options: {
              a: "The CAC",
              b: "The Creditors",
              c: "The Court",
              d: "The Members",
            },
            answer: "b",
          },
        ],
      },
      {
        id: "2017-april-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "In the course of your externship, when the case of A.U Yusuf V. Kalu Ofomata, Suit No. PL/HC 32/15 was called from the (1) ...... the Counsel for Mr.Yusuf stood up and (2)............. as follows: ..................(3) He then informed the Court that he was (4)............ for his colleague, who had been handling the case personally, but had an emergency medical appointment for 9.00 a.m. He further applied for (5).................. till 11.00 a.m. to enable his colleague attend to his medical appointment before coming to court.",
            question: "Fill in blank (1) of the passage.",
            options: {
              a: "Court list.",
              b: "Counsel list",
              c: "Cause list",
              d: "Registrar's list",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "In the course of your externship, when the case of A.U Yusuf V. Kalu Ofomata, Suit No. PL/HC 32/15 was called from the (1) ...... the Counsel for Mr.Yusuf stood up and (2)............. as follows: ..................(3) He then informed the Court that he was (4)............ for his colleague, who had been handling the case personally, but had an emergency medical appointment for 9.00 a.m. He further applied for (5).................. till 11.00 a.m. to enable his colleague attend to his medical appointment before coming to court.",
            question: "Fill in blank (2) of the passage.",
            options: {
              a: "Entered appearance.",
              b: "Registered appearance.",
              c: "Introduced himself.",
              d: "Announced appearance.",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "In the course of your externship, when the case of A.U Yusuf V. Kalu Ofomata, Suit No. PL/HC 32/15 was called from the (1) ...... the Counsel for Mr.Yusuf stood up and (2)............. as follows: ..................(3) He then informed the Court that he was (4)............ for his colleague, who had been handling the case personally, but had an emergency medical appointment for 9.00 a.m. He further applied for (5).................. till 11.00 a.m. to enable his colleague attend to his medical appointment before coming to court.",
            question: "Fill in blank (3) of the passage.",
            options: {
              a: "With due respect, A. B. Dauda for the claimant.",
              b: "A. B. Dauda appearing for the claimant.",
              c: "Barrister A. B. Dauda for the Claimant.",
              d: "With profound humility, Barrister A. B. Dauda for the Claimant.",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "In the course of your externship, when the case of A.U Yusuf V. Kalu Ofomata, Suit No. PL/HC 32/15 was called from the (1) ...... the Counsel for Mr.Yusuf stood up and (2)............. as follows: ..................(3) He then informed the Court that he was (4)............ for his colleague, who had been handling the case personally, but had an emergency medical appointment for 9.00 a.m. He further applied for (5).................. till 11.00 a.m. to enable his colleague attend to his medical appointment before coming to court.",
            question: "Fill in blank (4) of the passage.",
            options: {
              a: "Watching brief.",
              b: "Holding brief.",
              c: "Observing proceedings.",
              d: "An amicus curiae.",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "In the course of your externship, when the case of A.U Yusuf V. Kalu Ofomata, Suit No. PL/HC 32/15 was called from the (1) ...... the Counsel for Mr.Yusuf stood up and (2)............. as follows: ..................(3) He then informed the Court that he was (4)............ for his colleague, who had been handling the case personally, but had an emergency medical appointment for 9.00 a.m. He further applied for (5).................. till 11.00 a.m. to enable his colleague attend to his medical appointment before coming to court.",
            question: "Fill in blank (5) of the passage.",
            options: {
              a: "An adjournment.",
              b: "Postponement.",
              c: "A stand down.",
              d: "A slight delay.",
            },
            answer: "c",
          },
          {
            id: 6,
            context: null,
            question: "Ade Yomi was granted a certificate of occupancy over Plot 105, Gwarimpa, FCT by the Hon. Minister of the FCT in 2011. But in 2015, the FCDA published notice of revocation over the property. Mr. Yomi engaged the services of A. R. Oke, Esq to file an action against wrongful revocation. Which of the under listed is not a class of legal literature that A. R. Oke, Esq ought to consult in preparing for the case?",
            options: {
              a: "Primary source.",
              b: "Secondary source.",
              c: "Tertiary source.",
              d: "Original source.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: null,
            question: "Assuming that A. R. Oke, Esq, succeeded in obtaining judgment in favour of Mr. Yomi and received compensation from the FCDA on his behalf, but failed to promptly notify him and furthermore, misappropriated the money, how would you classify the misconduct?",
            options: {
              a: "Conduct unbecoming of the status of a legal practitioner.",
              b: "Infamous conduct in a professional respect.",
              c: "(a) and (b).",
              d: "Contempt of court procedure.",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "The registered trustees of Nigerian Bar Association is (8).......... Recently in line with the provisions of rule (9).............. of the Rules of Professional Conduct for Legal Practitioners, the Nigerian Bar Association has stated that a Lawyer acting in his capacity as a legal practitioner, legal officer or adviser of any Government Department or Ministry or any Corporation, shall not sign or file a legal document unless there is affixed on such document a 10.......... approved by the Association.",
            question: "Fill in blank (8) of the passage.",
            options: {
              a: "juridical person.",
              b: "A Creation of statute.",
              c: "A juristic person.",
              d: "A Company Limited by Guarantee.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "The registered trustees of Nigerian Bar Association is (8).......... Recently in line with the provisions of rule (9).............. of the Rules of Professional Conduct for Legal Practitioners, the Nigerian Bar Association has stated that a Lawyer acting in his capacity as a legal practitioner, legal officer or adviser of any Government Department or Ministry or any Corporation, shall not sign or file a legal document unless there is affixed on such document a 10.......... approved by the Association.",
            question: "Fill in blank (9) of the passage.",
            options: {
              a: "10",
              b: "12",
              c: "16",
              d: "20",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "The registered trustees of Nigerian Bar Association is (8).......... Recently in line with the provisions of rule (9).............. of the Rules of Professional Conduct for Legal Practitioners, the Nigerian Bar Association has stated that a Lawyer acting in his capacity as a legal practitioner, legal officer or adviser of any Government Department or Ministry or any Corporation, shall not sign or file a legal document unless there is affixed on such document a 10.......... approved by the Association.",
            question: "Fill in blank (10) of the passage.",
            options: {
              a: "Seal and delivery.",
              b: "Seal and authority.",
              c: "Seal and stamp.",
              d: "Seal of the General Bar Council.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "The Law Firm of Bariwo & Osagie & Co is a partnership because 11........ This unit of law practice is different from 12........ by which two (2) or more legal practitioners regardless of age jointly formed themselves pooling resources and bearing running expenses together, still manage independent law Practices. At the time that Bariwo & Osagie & Co was going to commence business, the partners sought funding from all the following sources except 13..... Today, the Law Firm is well equipped. For instance, the Law Office boasts of a well equipped library with statutes, law reports, regulations and bye-laws. These are referred to as 14...........The firm keeps both hard copies and 15........ versions of the foregoing material which can be retrieved from the operation of computers",
            question: "Fill in blank (11) of the passage.",
            options: {
              a: "All the partners are very close friends.",
              b: "It is established by 2 or more legal practitioners who share similar visions and contributed capital to set up the firm.",
              c: "Their deed of partnership refers to it as such.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "The Law Firm of Bariwo & Osagie & Co is a partnership because 11........ This unit of law practice is different from 12........ by which two (2) or more legal practitioners regardless of age jointly formed themselves pooling resources and bearing running expenses together, still manage independent law Practices. At the time that Bariwo & Osagie & Co was going to commence business, the partners sought funding from all the following sources except 13..... Today, the Law Firm is well equipped. For instance, the Law Office boasts of a well equipped library with statutes, law reports, regulations and bye-laws. These are referred to as 14...........The firm keeps both hard copies and 15........ versions of the foregoing material which can be retrieved from the operation of computers",
            question: "Fill in blank (12) of the passage.",
            options: {
              a: "Sole proprietorship.",
              b: "Sole practitionership.",
              c: "Associateship.",
              d: "Sole Associateship.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "The Law Firm of Bariwo & Osagie & Co is a partnership because 11........ This unit of law practice is different from 12........ by which two (2) or more legal practitioners regardless of age jointly formed themselves pooling resources and bearing running expenses together, still manage independent law Practices. At the time that Bariwo & Osagie & Co was going to commence business, the partners sought funding from all the following sources except 13..... Today, the Law Firm is well equipped. For instance, the Law Office boasts of a well equipped library with statutes, law reports, regulations and bye-laws. These are referred to as 14...........The firm keeps both hard copies and 15........ versions of the foregoing material which can be retrieved from the operation of computers",
            question: "Fill in blank (13) of the passage.",
            options: {
              a: "Personal funds.",
              b: "Loans from Banks.",
              c: "Application to the Remuneration Committee.",
              d: "Monies from relatives and Friends.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: "The Law Firm of Bariwo & Osagie & Co is a partnership because 11........ This unit of law practice is different from 12........ by which two (2) or more legal practitioners regardless of age jointly formed themselves pooling resources and bearing running expenses together, still manage independent law Practices. At the time that Bariwo & Osagie & Co was going to commence business, the partners sought funding from all the following sources except 13..... Today, the Law Firm is well equipped. For instance, the Law Office boasts of a well equipped library with statutes, law reports, regulations and bye-laws. These are referred to as 14...........The firm keeps both hard copies and 15........ versions of the foregoing material which can be retrieved from the operation of computers",
            question: "Fill in blank (14) of the passage.",
            options: {
              a: "Primary sources of law.",
              b: "Secondary sources of law.",
              c: "Tertiary sources of law.",
              d: "Universal sources of law.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "The Law Firm of Bariwo & Osagie & Co is a partnership because 11........ This unit of law practice is different from 12........ by which two (2) or more legal practitioners regardless of age jointly formed themselves pooling resources and bearing running expenses together, still manage independent law Practices. At the time that Bariwo & Osagie & Co was going to commence business, the partners sought funding from all the following sources except 13..... Today, the Law Firm is well equipped. For instance, the Law Office boasts of a well equipped library with statutes, law reports, regulations and bye-laws. These are referred to as 14...........The firm keeps both hard copies and 15........ versions of the foregoing material which can be retrieved from the operation of computers",
            question: "Fill in blank (15) of the passage.",
            options: {
              a: "Book.",
              b: "Journal.",
              c: "Electronic.",
              d: "Compact disc.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Ovia Chibindu is a very resourceful Legal Practitioner. Taken several factors into consideration, Ovia applies different methods of charging his clients. He may charge based on 16..... which is based on the period of time he appears or continues to appear in proceedings on behalf of his client. These sort of matters are usually continuous. For non-contentious matters however, he charges using 17........... 18....... are some examples of non-contentious matters. Ovia is always careful not to spend any client's money except for that which it is allocated for. This is because spending his client's money may cause him to be reported to 19......",
            question: "Fill in blank (16) of the passage.",
            options: {
              a: "Contingency fee.",
              b: "Fixed fee.",
              c: "Retainer fee.",
              d: "Appearance fee.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "Ovia Chibindu is a very resourceful Legal Practitioner. Taken several factors into consideration, Ovia applies different methods of charging his clients. He may charge based on 16..... which is based on the period of time he appears or continues to appear in proceedings on behalf of his client. These sort of matters are usually continuous. For non-contentious matters however, he charges using 17........... 18....... are some examples of non-contentious matters. Ovia is always careful not to spend any client's money except for that which it is allocated for. This is because spending his client's money may cause him to be reported to 19......",
            question: "Fill in blank (17) of the passage.",
            options: {
              a: "Scale 1.",
              b: "Scale 2.",
              c: "Scale 3.",
              d: "Scale 4",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "Ovia Chibindu is a very resourceful Legal Practitioner. Taken several factors into consideration, Ovia applies different methods of charging his clients. He may charge based on 16..... which is based on the period of time he appears or continues to appear in proceedings on behalf of his client. These sort of matters are usually continuous. For non-contentious matters however, he charges using 17........... 18....... are some examples of non-contentious matters. Ovia is always careful not to spend any client's money except for that which it is allocated for. This is because spending his client's money may cause him to be reported to 19......",
            question: "Fill in blank (18) of the passage.",
            options: {
              a: "Litigation and land searches.",
              b: "Arbitration and registration of companies.",
              c: "Litigation and Arbitration.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 19,
            context: "Ovia Chibindu is a very resourceful Legal Practitioner. Taken several factors into consideration, Ovia applies different methods of charging his clients. He may charge based on 16..... which is based on the period of time he appears or continues to appear in proceedings on behalf of his client. These sort of matters are usually continuous. For non-contentious matters however, he charges using 17........... 18....... are some examples of non-contentious matters. Ovia is always careful not to spend any client's money except for that which it is allocated for. This is because spending his client's money may cause him to be reported to 19......",
            question: "Fill in blank (19) of the passage.",
            options: {
              a: "Nigerian Bar Association.",
              b: "Legal Practitioners Disciplinary Committee.",
              c: "Body of Benchers.",
              d: "General Council of the Bar.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: null,
            question: "One of the following is not a technique of cross-examination:",
            options: {
              a: "Probing technique.",
              b: "Impeaching technique.",
              c: "Insinuation technique.",
              d: "Confrontation technique.",
            },
            answer: "d",
          },
        ],
      },
      {
        id: "2017-april-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Commercial Trust Bank Plc has just been notified that one of its biggest customers Chief Akin Tanko has died. The Bank got the information via two letters from two different lawyers representing the eldest son of each of Chief Tanko's wives. None of the letters cited a letter of administration or Will but each demanded that the bank pay the credit balance in the deceased's account to their client. The bank has consulted you as external solicitor for advice.",
            question: "What will you advise the bank to do?",
            options: {
              a: "Share the money in equal half and deposit in the account of the rival claimants.",
              b: "Apply to the court to order the claimants to take action between themselves to determine who is entitled to the money in the account.",
              c: "Do nothing.",
              d: "Deposit the money with the Central Bank of Nigeria.",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "Commercial Trust Bank Plc has just been notified that one of its biggest customers Chief Akin Tanko has died. The Bank got the information via two letters from two different lawyers representing the eldest son of each of Chief Tanko's wives. None of the letters cited a letter of administration or Will but each demanded that the bank pay the credit balance in the deceased's account to their client. The bank has consulted you as external solicitor for advice.",
            question: "One of the following is not an essential fact that the bank will state in the affidavit.",
            options: {
              a: "That the bank has not colluded with the rival claimants.",
              b: "That the bank is willing to pay the money to any person that the court directs.",
              c: "That the bank is interested in the outcome of the case one way or the other.",
              d: "That the bank has no interest in the money other than charges for its services.",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "Commercial Trust Bank Plc has just been notified that one of its biggest customers Chief Akin Tanko has died. The Bank got the information via two letters from two different lawyers representing the eldest son of each of Chief Tanko's wives. None of the letters cited a letter of administration or Will but each demanded that the bank pay the credit balance in the deceased's account to their client. The bank has consulted you as external solicitor for advice.",
            question: "The procedure the bank will adopt is called:",
            options: {
              a: "Sheriff interpleader",
              b: "Court interpleader",
              c: "Stakeholder interpleader",
              d: "Bank interpleader.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "Commercial Trust Bank Plc has just been notified that one of its biggest customers Chief Akin Tanko has died. The Bank got the information via two letters from two different lawyers representing the eldest son of each of Chief Tanko's wives. None of the letters cited a letter of administration or Will but each demanded that the bank pay the credit balance in the deceased's account to their client. The bank has consulted you as external solicitor for advice.",
            question: "Assuming the two eldest children file processes in court, what order can the court make to prevent the bank from paying the money to any of the claimants until the case is determined.",
            options: {
              a: "Certiorari",
              b: "Mandamus",
              c: "Interlocutory injunction",
              d: "Interim injunction.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "Mr. Amadi Iwowari recently terminated the appointment of Silas Damna, his driver of over ten (10) years without paying him arrears of salaries owed him for over eight months. Silas Damna has approached you to file an action to recover the salary arrears.",
            question: "In which court will you file the action?",
            options: {
              a: "The High Court of a State.",
              b: "The Federal High Court.",
              c: "The National Industrial Court.",
              d: "The Magistrate Court.",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "A High Court of the Federal Capital Territory, Abuja sitting in Maitama delivered judgment in favour of Mallam Quadri Toro in the sum of Ten Million (N10m) Naira against Mr. Jadi Bugus. Mallam Quadri Toro discovered that Mr. Jadi Bugus has the sum of Twelve Million (N12m) Naira in his current account with Credit Bank Plc; and several moveable and immovable properties in Abuja. Mr. Jadi Bugus is aggrieved and planning to appeal against the judgment at the Court of Appeal.",
            question: "If Mallam Quadri Toro wants to enforce the judgment, which of the under listed modes would you recommend to him?",
            options: {
              a: "Sequestration",
              b: "Garnishee proceedings",
              c: "Judgment summons",
              d: "Delivery of goods",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "A High Court of the Federal Capital Territory, Abuja sitting in Maitama delivered judgment in favour of Mallam Quadri Toro in the sum of Ten Million (N10m) Naira against Mr. Jadi Bugus. Mallam Quadri Toro discovered that Mr. Jadi Bugus has the sum of Twelve Million (N12m) Naira in his current account with Credit Bank Plc; and several moveable and immovable properties in Abuja. Mr. Jadi Bugus is aggrieved and planning to appeal against the judgment at the Court of Appeal.",
            question: "Assuming the mode recommended to him could not satisfy the judgment sum, which under listed would you subsequently recommend?",
            options: {
              a: "Writ of possession",
              b: "Warrant of possession",
              c: "Writ of fieri facias",
              d: "Registration",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "A High Court of the Federal Capital Territory, Abuja sitting in Maitama delivered judgment in favour of Mallam Quadri Toro in the sum of Ten Million (N10m) Naira against Mr. Jadi Bugus. Mallam Quadri Toro discovered that Mr. Jadi Bugus has the sum of Twelve Million (N12m) Naira in his current account with Credit Bank Plc; and several moveable and immovable properties in Abuja. Mr. Jadi Bugus is aggrieved and planning to appeal against the judgment at the Court of Appeal.",
            question: "Assuming that Mr. Jadi Bugus has appealed and wants the status quo to be maintained pending appeal, which of the under listed application would you advise him to file",
            options: {
              a: "Stay of execution",
              b: "Stay of money judgment",
              c: "Injunction pending appeal",
              d: "Stay of proceeding.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "A High Court of the Federal Capital Territory, Abuja sitting in Maitama delivered judgment in favour of Mallam Quadri Toro in the sum of Ten Million (N10m) Naira against Mr. Jadi Bugus. Mallam Quadri Toro discovered that Mr. Jadi Bugus has the sum of Twelve Million (N12m) Naira in his current account with Credit Bank Plc; and several moveable and immovable properties in Abuja. Mr. Jadi Bugus is aggrieved and planning to appeal against the judgment at the Court of Appeal.",
            question: "In which of the under listed courts, would Mr. Jadi Bugus file the application you identified in (8) above.",
            options: {
              a: "The Court of Appeal",
              b: "The High Court",
              c: "The High Court or the Court of Appeal.",
              d: "The Supreme Court.",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "A High Court of the Federal Capital Territory, Abuja sitting in Maitama delivered judgment in favour of Mallam Quadri Toro in the sum of Ten Million (N10m) Naira against Mr. Jadi Bugus. Mallam Quadri Toro discovered that Mr. Jadi Bugus has the sum of Twelve Million (N12m) Naira in his current account with Credit Bank Plc; and several moveable and immovable properties in Abuja. Mr. Jadi Bugus is aggrieved and planning to appeal against the judgment at the Court of Appeal.",
            question: "Which of the under listed, best describes the period of time within which Mr. Jadi Bugus is to appeal, against the judgment.",
            options: {
              a: "Within 90 days of judgment",
              b: "Within four months of judgment",
              c: "Within 20 days of judgment",
              d: "Within 3 months of judgment.",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Mr. Borobosi Atanga contested the recently held election to the Rivers West Senatorial District under the platform of National Alliance Party and lost. The election was characterized by intimidation of voters, ballot box snatching and widespread electoral malpractices. He is aggrieved by the outcome of the election and has retained you to challenge it in the appropriate tribunal.",
            question: "Before which of the under listed electoral tribunals would you file the petition:",
            options: {
              a: "National Assembly Election Tribunal.",
              b: "Legislative Houses Election Tribunal",
              c: "National and State Houses of Assembly Election Tribunal.",
              d: "Government and National Assembly Election Tribunal.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "Mr. Borobosi Atanga contested the recently held election to the Rivers West Senatorial District under the platform of National Alliance Party and lost. The election was characterized by intimidation of voters, ballot box snatching and widespread electoral malpractices. He is aggrieved by the outcome of the election and has retained you to challenge it in the appropriate tribunal.",
            question: "Assuming it is the governorship election of Rivers State that Mr. Borobosi Atanga contested and lost. Which of the under listed tribunals would you file the petition?",
            options: {
              a: "Governorship and State Houses of Assembly Tribunal.",
              b: "Governorship and Legistlative Houses Election Tribunal.",
              c: "Governorship/National Assembly Election Tribunal.",
              d: "Governorship Election Tribunal.",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "Mr. Borobosi Atanga contested the recently held election to the Rivers West Senatorial District under the platform of National Alliance Party and lost. The election was characterized by intimidation of voters, ballot box snatching and widespread electoral malpractices. He is aggrieved by the outcome of the election and has retained you to challenge it in the appropriate tribunal.",
            question: "Which of the under listed best describes the period of time, within which you are to file the petition?",
            options: {
              a: "Within 21 days from the day of the declaration of result.",
              b: "Within 60 days from the day of the declaration of result.",
              c: "Within 21 days after the day of the election.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "Mr. Borobosi Atanga contested the recently held election to the Rivers West Senatorial District under the platform of National Alliance Party and lost. The election was characterized by intimidation of voters, ballot box snatching and widespread electoral malpractices. He is aggrieved by the outcome of the election and has retained you to challenge it in the appropriate tribunal.",
            question: "Within which of the following period of time must the tribunal deliver judgment from the day of filing the petition?",
            options: {
              a: "Within 60 days",
              b: "Within 180 days",
              c: "Within 90 days",
              d: "Within 120 days.",
            },
            answer: "b",
          },
          {
            id: 15,
            context: null,
            question: "Which of the under listed is not a ground for election petition?",
            options: {
              a: "The person whose election is questioned was not qualified to contest.",
              b: "The petitioner was validly nominated and later substituted by his party.",
              c: "The election was invalid by reason of corrupt practice and non-compliance with the provision of the Electoral Act.",
              d: "The Respondent was not duly elected by the majority of lawful votes cast at the election.",
            },
            answer: "b",
          },
          {
            id: 16,
            context: "Rimi Martins commenced an action before the High Court of Lagos State against Fola Koku for declaration of title to the landed property at No. 1, Martins Street, Lekki, Lagos. The suit was dismissed on November 30, 2016. Rimi Martins intends to appeal and has now briefed you for the purpose.",
            question: "When will the time for appeal expire?",
            options: {
              a: "14th December 2016",
              b: "2d March, 2017",
              c: "28th February, 2017",
              d: "31st January, 2017",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Rimi Martins commenced an action before the High Court of Lagos State against Fola Koku for declaration of title to the landed property at No. 1, Martins Street, Lekki, Lagos. The suit was dismissed on November 30, 2016. Rimi Martins intends to appeal and has now briefed you for the purpose.",
            question: "To commence this appeal validly, the first step that you need to take is to:",
            options: {
              a: "File a motion of appeal at the Registry of the Court of Appeal.",
              b: "File application for him to appeal at the Registry of the Court of Appeal.",
              c: "File notice of appeal at the Registry of the Court of Appeal.",
              d: "File application for extension of time to appeal at the Registry of the Court of Appeal.",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "Rimi Martins commenced an action before the High Court of Lagos State against Fola Koku for declaration of title to the landed property at No. 1, Martins Street, Lekki, Lagos. The suit was dismissed on November 30, 2016. Rimi Martins intends to appeal and has now briefed you for the purpose.",
            question: "In order to ensure that Fola Koku does not pull down or sell the property until the appeal is determined, you will need to file an application for:",
            options: {
              a: "Stay of execution pending appeal at the High Court before the record of appeal is transmitted.",
              b: "Stay of execution pending appeal at the Court of Appeal, either before or after the record of appeal is transmitted.",
              c: "Injunction pending appeal at the Court of Appeal either before or after the record of appeal is transmitted.",
              d: "Injunction pending appeal at the High Court after the record of appeal has been transmitted.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: null,
            question: "Brief of Argument must contain all the following except:",
            options: {
              a: "Issues for determination",
              b: "Statement of facts",
              c: "Particulars",
              d: "Conclusion.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: null,
            question: "In a suit between Chief Oniwa and Chief Ndu, over ownership of land situate at Plot 2A, Independence Layout, Enugu, plaintiff's counsel filed an application, intended to preserve the subject of litigation whilst the suit is on-going. By what means do you expect he would have brought this application?",
            options: {
              a: "An originating application",
              b: "Originating Motion",
              c: "Motion Ex-parte",
              d: "Motion on Notice",
            },
            answer: "d",
          },
        ],
      },
      {
        id: "2017-april-criminal-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "A count in a charge at the High Court of Benue State, Makurdi read as follows: \"That you Api Enehi on the 15th day of February, 2017 at No. 5, Oroeto Close, GRA Makurdi in the Manuchi judicial Division raped and committed indecent assault upon Miss Ochenche and thereby committed an offence contrary to...",
            question: "What rule of drafting charges does the count violate?",
            options: {
              a: "Misjoinder of offences",
              b: "Misjoinder of offenders.",
              c: "Ambiguity",
              d: "duplicity",
            },
            answer: "d",
          },
          {
            id: 2,
            context: "A count in a charge at the High Court of Benue State, Makurdi read as follows: \"That you Api Enehi on the 15th day of February, 2017 at No. 5, Oroeto Close, GRA Makurdi in the Manuchi judicial Division raped and committed indecent assault upon Miss Ochenche and thereby committed an offence contrary to...",
            question: "The charge would be framed pursuant to provisions of:-",
            options: {
              a: "The Criminal Code Law",
              b: "The Penal Code Law",
              c: "The Penal Code Act",
              d: "The Criminal Code Act.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "A count in a charge at the High Court of Benue State, Makurdi read as follows: \"That you Api Enehi on the 15th day of February, 2017 at No. 5, Oroeto Close, GRA Makurdi in the Manuchi judicial Division raped and committed indecent assault upon Miss Ochenche and thereby committed an offence contrary to...",
            question: "Who will draft the above charges? -",
            options: {
              a: "The Police prosecutor",
              b: "The investigation Judge or Magistrate.",
              c: "The State Counsel",
              d: "The Presiding Judge or Magistrate.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "A count in a charge at the High Court of Benue State, Makurdi read as follows: \"That you Api Enehi on the 15th day of February, 2017 at No. 5, Oroeto Close, GRA Makurdi in the Manuchi judicial Division raped and committed indecent assault upon Miss Ochenche and thereby committed an offence contrary to...",
            question: "An application for bail in the above matter will be made to:",
            options: {
              a: "The Court of Appeal",
              b: "The presiding magistrate",
              c: "The High Court",
              d: "Commissioner of Police.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: null,
            question: "Assuming the accused was convicted upon the above charges, the Court can make all but one of the following orders?",
            options: {
              a: "Order of probation",
              b: "Imprisonment",
              c: "Fine and imprisonment",
              d: "Imprisonment and caning.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: null,
            question: "The appropriate time to object to the above charge would be:-",
            options: {
              a: "Before sentence",
              b: "Before plea",
              c: "At the bail hearing",
              d: "On appeal.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Lere Baragwe, Lawanson Durotimi and Absalom Tenny were three notorious boys at Oregun area, Ikeja, Lagos. On the 6th December, 2016, the trio armed with knives, pistol and charms snatched a Samsung S6 phone belonging to Miss Tani Motunsola and thereafter escaped into the nearby bush. Acting on information, the police arrested the suspects at Otta in Ogun State on 9th December, 2016. The suspects are now arraigned before the High Court of Lagos, Ikeja Division.",
            question: "What is the proper charge to bring against the suspects?",
            options: {
              a: "Robbery",
              b: "Assault occasioning harm",
              c: "Stealing",
              d: "Armed robbery.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Lere Baragwe, Lawanson Durotimi and Absalom Tenny were three notorious boys at Oregun area, Ikeja, Lagos. On the 6th December, 2016, the trio armed with knives, pistol and charms snatched a Samsung S6 phone belonging to Miss Tani Motunsola and thereafter escaped into the nearby bush. Acting on information, the police arrested the suspects at Otta in Ogun State on 9th December, 2016. The suspects are now arraigned before the High Court of Lagos, Ikeja Division.",
            question: "Who is responsible for keeping the materials recovered from the suspects at the Police station?",
            options: {
              a: "The Divisional Police Officer",
              b: "The investigation Police Officer",
              c: "The Station Officer",
              d: "The exhibit keeper.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Lere Baragwe, Lawanson Durotimi and Absalom Tenny were three notorious boys at Oregun area, Ikeja, Lagos. On the 6th December, 2016, the trio armed with knives, pistol and charms snatched a Samsung S6 phone belonging to Miss Tani Motunsola and thereafter escaped into the nearby bush. Acting on information, the police arrested the suspects at Otta in Ogun State on 9th December, 2016. The suspects are now arraigned before the High Court of Lagos, Ikeja Division.",
            question: "Miss Tani is requested to identify each of the suspects that snatched her Samsung S6 phone in separate identification parades. How many people will be assembled with the suspects at the parade?",
            options: {
              a: "8 persons",
              b: "9 persons",
              c: "10 persons",
              d: "12 persons",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "Lere Baragwe, Lawanson Durotimi and Absalom Tenny were three notorious boys at Oregun area, Ikeja, Lagos. On the 6th December, 2016, the trio armed with knives, pistol and charms snatched a Samsung S6 phone belonging to Miss Tani Motunsola and thereafter escaped into the nearby bush. Acting on information, the police arrested the suspects at Otta in Ogun State on 9th December, 2016. The suspects are now arraigned before the High Court of Lagos, Ikeja Division.",
            question: "One of the following is not a proper person to sign the search warrant that was used to recover the Samsung phone?",
            options: {
              a: "A Magistrate",
              b: "A Justice of peace",
              c: "The sergeant who is the exhibit keeper",
              d: "High Court Judge",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Lere Baragwe, Lawanson Durotimi and Absalom Tenny were three notorious boys at Oregun area, Ikeja, Lagos. On the 6th December, 2016, the trio armed with knives, pistol and charms snatched a Samsung S6 phone belonging to Miss Tani Motunsola and thereafter escaped into the nearby bush. Acting on information, the police arrested the suspects at Otta in Ogun State on 9th December, 2016. The suspects are now arraigned before the High Court of Lagos, Ikeja Division.",
            question: "What is the appropriate time for the execution of the search warrant?",
            options: {
              a: "At any time of the day",
              b: "Between the hours of 5.00 a.m. and 8.00 p.m.",
              c: "Between the hours of 6.00 a.m. and 6.00 p.m.",
              d: "Between the hours of 6.00 a.m. and 7.00 p.m.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Tom Nnadi and Sam Etuk were arrested by a detachment of Special Anti-Robbery Squad (SAS) at Tombia Roundabout, Yenagoa. One AK47 Assault Riffle and 2kg of a substance suspected to be Canabis Sativa popularly called Indian hemp were recovered from the suspects. Sam Etuk made a confessional statement during investigation by the police, to the effect that they were returning from a robbery operation carried out on the same day at Mendel supermarket, at Azikoro village also in Yenagoa. The accused have been arraigned before a Magistrate Court on a one count charge of armed robbery and possession of prohibited drug.",
            question: "Which of the following is not correct?",
            options: {
              a: "The arrest warrant ought to be endorsed by a Magistrate in Ogun State before the suspects were arrested.",
              b: "The arrest warrant need not be endorsed by a Magistrate in Ogun State before the suspects were arrested.",
              c: "Since a Magistrate had signed the arrest warrant, it can be used to arrest the suspects anywhere they are found.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "Tom Nnadi and Sam Etuk were arrested by a detachment of Special Anti-Robbery Squad (SAS) at Tombia Roundabout, Yenagoa. One AK47 Assault Riffle and 2kg of a substance suspected to be Canabis Sativa popularly called Indian hemp were recovered from the suspects. Sam Etuk made a confessional statement during investigation by the police, to the effect that they were returning from a robbery operation carried out on the same day at Mendel supermarket, at Azikoro village also in Yenagoa. The accused have been arraigned before a Magistrate Court on a one count charge of armed robbery and possession of prohibited drug.",
            question: "The confessional statement made by Sam Etuk binds",
            options: {
              a: "Tom Nnadi alone",
              b: "Tom and Sam",
              c: "Sam alone",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "Tom Nnadi and Sam Etuk were arrested by a detachment of Special Anti-Robbery Squad (SAS) at Tombia Roundabout, Yenagoa. One AK47 Assault Riffle and 2kg of a substance suspected to be Canabis Sativa popularly called Indian hemp were recovered from the suspects. Sam Etuk made a confessional statement during investigation by the police, to the effect that they were returning from a robbery operation carried out on the same day at Mendel supermarket, at Azikoro village also in Yenagoa. The accused have been arraigned before a Magistrate Court on a one count charge of armed robbery and possession of prohibited drug.",
            question: "Assuming that the accused pleaded guilty to possession of hard drug....",
            options: {
              a: "The Court is required to convict them immediately upon their plea.",
              b: "The prosecution is required to present to the court report of a forensic examination carried out on the substance by a National Chemist.",
              c: "The Court is required to record a plea of not guilty for the accused.",
              d: "(b) and(c) above.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "Tom Nnadi and Sam Etuk were arrested by a detachment of Special Anti-Robbery Squad (SAS) at Tombia Roundabout, Yenagoa. One AK47 Assault Riffle and 2kg of a substance suspected to be Canabis Sativa popularly called Indian hemp were recovered from the suspects. Sam Etuk made a confessional statement during investigation by the police, to the effect that they were returning from a robbery operation carried out on the same day at Mendel supermarket, at Azikoro village also in Yenagoa. The accused have been arraigned before a Magistrate Court on a one count charge of armed robbery and possession of prohibited drug.",
            question: "The one count charge is bad for ------",
            options: {
              a: "Duplicity",
              b: "Misjoinder of offences",
              c: "Ambiguity",
              d: "Misjoinder of offenders",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "Tom Nnadi and Sam Etuk were arrested by a detachment of Special Anti-Robbery Squad (SAS) at Tombia Roundabout, Yenagoa. One AK47 Assault Riffle and 2kg of a substance suspected to be Canabis Sativa popularly called Indian hemp were recovered from the suspects. Sam Etuk made a confessional statement during investigation by the police, to the effect that they were returning from a robbery operation carried out on the same day at Mendel supermarket, at Azikoro village also in Yenagoa. The accused have been arraigned before a Magistrate Court on a one count charge of armed robbery and possession of prohibited drug.",
            question: "The arraignment of the accused persons, before a Magistrate court is faulty because",
            options: {
              a: "Magistrate courts do not have jurisdiction to try capital offences.",
              b: "Magistrate courts do not have jurisdiction to try drug related offences.",
              c: "Magistrate courts are courts of summary jurisdiction.",
              d: "(a) and (b) above.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "Tom Nnadi and Sam Etuk were arrested by a detachment of Special Anti-Robbery Squad (SAS) at Tombia Roundabout, Yenagoa. One AK47 Assault Riffle and 2kg of a substance suspected to be Canabis Sativa popularly called Indian hemp were recovered from the suspects. Sam Etuk made a confessional statement during investigation by the police, to the effect that they were returning from a robbery operation carried out on the same day at Mendel supermarket, at Azikoro village also in Yenagoa. The accused have been arraigned before a Magistrate Court on a one count charge of armed robbery and possession of prohibited drug.",
            question: "In cross-examining a witness called by Tom, the order of cross-examination of the witness should be as follows:",
            options: {
              a: "Prosecution and then Sam",
              b: "Court, Sam and then prosecution",
              c: "Sam and then prosecution",
              d: "Court, prosecution and then Sam.",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "Mr. Johnson Hosea is a Pastor from Ethiopia, running his Church in Mangogo part of Jos, Plateau State. He was charged with fraud and diverting the funds of the Church for personal use, upon the report of his member. He was charged with fraud before the Area Court Mangogo, Jos, Plateau State. Upon arraignment, his counsel Mr. Daniel objected to the jurisdiction of the Area Court, asserting that his client, being an Ethiopian and a Christian, cannot be tried for the offences in the Area Court.",
            question: "For the accused to be tried in the Area court, he must:",
            options: {
              a: "Be a Nigerian citizen",
              b: "Be of the Islamic faith",
              c: "Consent to the jurisdiction of the Area Court.",
              d: "Be of African parentage.",
            },
            answer: "d",
          },
          {
            id: 19,
            context: "Mr. Johnson Hosea is a Pastor from Ethiopia, running his Church in Mangogo part of Jos, Plateau State. He was charged with fraud and diverting the funds of the Church for personal use, upon the report of his member. He was charged with fraud before the Area Court Mangogo, Jos, Plateau State. Upon arraignment, his counsel Mr. Daniel objected to the jurisdiction of the Area Court, asserting that his client, being an Ethiopian and a Christian, cannot be tried for the offences in the Area Court.",
            question: "When a bail application is refused by the High Court, the only option left is to:",
            options: {
              a: "Appeal to the Court of Appeal.",
              b: "Apply to the Court of Appeal.",
              c: "Apply to another High Court judge.",
              d: "Appeal to the same high court.",
            },
            answer: "a",
          },
          {
            id: 20,
            context: "Mr. Johnson Hosea is a Pastor from Ethiopia, running his Church in Mangogo part of Jos, Plateau State. He was charged with fraud and diverting the funds of the Church for personal use, upon the report of his member. He was charged with fraud before the Area Court Mangogo, Jos, Plateau State. Upon arraignment, his counsel Mr. Daniel objected to the jurisdiction of the Area Court, asserting that his client, being an Ethiopian and a Christian, cannot be tried for the offences in the Area Court.",
            question: "Assuming that Pastor Johnson Hosea could be validly tried by the Area Court, Jos and he wanted to appeal the judgment of the court, to which of these courts can he appeal?",
            options: {
              a: "The High Court",
              b: "The Magistrate Court",
              c: "The Upper Area Court",
              d: "Area Court Inspectors.",
            },
            answer: "c",
          },
        ],
      },
    ],
  },
  "2017-july": {
    year: 2017,
    session: "July",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 60,
    courses: [
      {
        id: "2017-july-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "During your externship programme, you witnessed the client interview below:\nMr. Ayuba, one of the directors of Rising Star Nigeria Limited, confessed that he had been receiving payments from Easy Does it Nigeria Limited, a rival company of Rising Star Nigeria Limited, for disclosing trade sensitive information of Rising Star Nigeria Limited. Rising Star Nigeria Limited is planning to convene a general meeting to discuss the issue and probably remove him as a director of the company. Rising Star (Nigeria) Limited seeks your advise on how to convene the extra-ordinary general meeting of the company; the procedure for removing a director of a company and if there is any remedy available to the company for the payments Ayuba received from Easy Does It Nigeria Limited.",
            question: "The Extra-Ordinary General Meeting of the company will be convened by:",
            options: {
              a: "Company Secretary",
              b: "Chairman",
              c: "Managing Director",
              d: "Board of Directors",
            },
            answer: "d",
          },
          {
            id: 2,
            context: "During your externship programme, you witnessed the client interview below:\nMr. Ayuba, one of the directors of Rising Star Nigeria Limited, confessed that he had been receiving payments from Easy Does it Nigeria Limited, a rival company of Rising Star Nigeria Limited, for disclosing trade sensitive information of Rising Star Nigeria Limited. Rising Star Nigeria Limited is planning to convene a general meeting to discuss the issue and probably remove him as a director of the company. Rising Star (Nigeria) Limited seeks your advise on how to convene the extra-ordinary general meeting of the company; the procedure for removing a director of a company and if there is any remedy available to the company for the payments Ayuba received from Easy Does It Nigeria Limited.",
            question: "Which of the following can requisition a General Meeting of Rising Star (Nigeria) Limited?",
            options: {
              a: "Court",
              b: "Members holding not less than one-tenth of the paid up capital of the company.",
              c: "Company Secretary",
              d: "Corporate Affairs Commission.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "During your externship programme, you witnessed the client interview below:\nMr. Ayuba, one of the directors of Rising Star Nigeria Limited, confessed that he had been receiving payments from Easy Does it Nigeria Limited, a rival company of Rising Star Nigeria Limited, for disclosing trade sensitive information of Rising Star Nigeria Limited. Rising Star Nigeria Limited is planning to convene a general meeting to discuss the issue and probably remove him as a director of the company. Rising Star (Nigeria) Limited seeks your advise on how to convene the extra-ordinary general meeting of the company; the procedure for removing a director of a company and if there is any remedy available to the company for the payments Ayuba received from Easy Does It Nigeria Limited.",
            question: "The following is the procedure the company will adopt to remove Mr. Ayuba as a director of the company except:",
            options: {
              a: "Issuing of special notice",
              b: "Passing of special resolution",
              c: "Opportunity to make written or oral representative.",
              d: "Issuing of notice of meeting to members of the company.",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "During your externship programme, you witnessed the client interview below:\nMr. Ayuba, one of the directors of Rising Star Nigeria Limited, confessed that he had been receiving payments from Easy Does it Nigeria Limited, a rival company of Rising Star Nigeria Limited, for disclosing trade sensitive information of Rising Star Nigeria Limited. Rising Star Nigeria Limited is planning to convene a general meeting to discuss the issue and probably remove him as a director of the company. Rising Star (Nigeria) Limited seeks your advise on how to convene the extra-ordinary general meeting of the company; the procedure for removing a director of a company and if there is any remedy available to the company for the payments Ayuba received from Easy Does It Nigeria Limited.",
            question: "The remedy available to Rising Star Nigeria Limited on discovery that Mr. Ayuba is being paid by Easy Does It Nigeria Limited to disclose some of its trade sensitive information is",
            options: {
              a: "Damages",
              b: "Compensation",
              c: "Recovery of the secret profit.",
              d: "Members' Direct action.",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "During your externship programme, you witnessed the client interview below:\nMr. Ayuba, one of the directors of Rising Star Nigeria Limited, confessed that he had been receiving payments from Easy Does it Nigeria Limited, a rival company of Rising Star Nigeria Limited, for disclosing trade sensitive information of Rising Star Nigeria Limited. Rising Star Nigeria Limited is planning to convene a general meeting to discuss the issue and probably remove him as a director of the company. Rising Star (Nigeria) Limited seeks your advise on how to convene the extra-ordinary general meeting of the company; the procedure for removing a director of a company and if there is any remedy available to the company for the payments Ayuba received from Easy Does It Nigeria Limited.",
            question: "All businesses transacted at the extra-ordinary general meeting of Rising Star Nigeria Limited shall be deemed.",
            options: {
              a: "Ordinary",
              b: "Extra ordinary",
              c: "Unanimous",
              d: "Special.",
            },
            answer: "d",
          },
          {
            id: 6,
            context: "Mr. Fidelis Okonkwo, the Solicitor to Embassy Pharmaceutical limited attended the 24th Annual general meeting of Embassy Pharmaceuticals limited together with Mr. Okon Bassey, a Nigerian Law School extern. At the end of the meeting, it was resolved by the company to:\ni. Change the name of Embassy Pharmaceuticals Limited to Empire Pharmaceuticals Limited; and\nii. Convert the company to public company.",
            question: "Which of the following documents need not be delivered to the Corporate Affairs Commission in order to effect the change?",
            options: {
              a: "Notice of Board meeting",
              b: "Special Resolution",
              c: "Original Certificate of incorporation.",
              d: "Altered Memorandum of Association.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "Mr. Fidelis Okonkwo, the Solicitor to Embassy Pharmaceutical limited attended the 24th Annual general meeting of Embassy Pharmaceuticals limited together with Mr. Okon Bassey, a Nigerian Law School extern. At the end of the meeting, it was resolved by the company to:\ni. Change the name of Embassy Pharmaceuticals Limited to Empire Pharmaceuticals Limited; and\nii. Convert the company to public company.",
            question: "The following consequential alterations must be made in the Articles of Association of the company to effect the change, except",
            options: {
              a: "Alterations of the name clause to end with Plc.",
              b: "Removal of written resolutions",
              c: "Alteration of the share capital clause",
              d: "Alteration of the restriction clause.",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "Mr. Fidelis Okonkwo, the Solicitor to Embassy Pharmaceutical limited attended the 24th Annual general meeting of Embassy Pharmaceuticals limited together with Mr. Okon Bassey, a Nigerian Law School extern. At the end of the meeting, it was resolved by the company to:\ni. Change the name of Embassy Pharmaceuticals Limited to Empire Pharmaceuticals Limited; and\nii. Convert the company to public company.",
            question: "Both tasks in items (i) and (ii) of the scenario can be achieved by:",
            options: {
              a: "Ordinary resolution",
              b: "Unanimous resolution",
              c: "Ordinary resolution with special notice",
              d: "Special resolution.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Mr. Fidelis Okonkwo, the Solicitor to Embassy Pharmaceutical limited attended the 24th Annual general meeting of Embassy Pharmaceuticals limited together with Mr. Okon Bassey, a Nigerian Law School extern. At the end of the meeting, it was resolved by the company to:\ni. Change the name of Embassy Pharmaceuticals Limited to Empire Pharmaceuticals Limited; and\nii. Convert the company to public company.",
            question: "Which of the following clauses in the Articles of Association of Embassy Pharmaceuticals Limited need not be amended even if the company converted to a public company?",
            options: {
              a: "Restriction on the transfer of shares.",
              b: "Pre-emptive right of shareholders",
              c: "Quorum for meeting",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Mr. Fidelis Okonkwo, the Solicitor to Embassy Pharmaceutical limited attended the 24th Annual general meeting of Embassy Pharmaceuticals limited together with Mr. Okon Bassey, a Nigerian Law School extern. At the end of the meeting, it was resolved by the company to:\ni. Change the name of Embassy Pharmaceuticals Limited to Empire Pharmaceuticals Limited; and\nii. Convert the company to public company.",
            question: "One of the following need not be submitted to the Corporate Affairs Commission in order to re-register Embassy Pharmaceuticals Limited as Empire Pharmaceuticals Plc.",
            options: {
              a: "Prospectus",
              b: "Copy of the special resolution",
              c: "Copy of the Memorandum and Article of Association amended.",
              d: "Evidence of payment of the prescribed filing fee.",
            },
            answer: "a",
          },
          {
            id: 11,
            context: "40-40 Solicitors is the Company Secretary to ABC-DE Plc., a multinational Company completely owned by 90 Chinese Businessmen. It was incorporated on January 2, 2017. You were posted to 40-40 Solicitors for your externship module. You attended the first board of directors' meeting of the company with your principal. You are asked to resolve the following issues:\ni. Fixing of the financial year of the company.\nii. Quorum of the first annual general meeting.\niii. Employment of Expatriates of the company.\niv. Date for holding the statutory and annual general meeting.\nv. Appointment of the first auditors.",
            question: "The quorum at the annual general meeting shall be formed:",
            options: {
              a: "If at least 25 members are present.",
              b: "The quorum is as determined by the articles of the company.",
              c: "If at least 30 members constituting 1/3 of membership is present.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "40-40 Solicitors is the Company Secretary to ABC-DE Plc., a multinational Company completely owned by 90 Chinese Businessmen. It was incorporated on January 2, 2017. You were posted to 40-40 Solicitors for your externship module. You attended the first board of directors' meeting of the company with your principal. You are asked to resolve the following issues:\ni. Fixing of the financial year of the company.\nii. Quorum of the first annual general meeting.\niii. Employment of Expatriates of the company.\niv. Date for holding the statutory and annual general meeting.\nv. Appointment of the first auditors.",
            question: "The financial year of the company will be:-",
            options: {
              a: "1t January to 31st December every year.",
              b: "As determined by members at Annual meeting general.",
              c: "2t January to 31st December every year.",
              d: "As determined by the Board.",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "40-40 Solicitors is the Company Secretary to ABC-DE Plc., a multinational Company completely owned by 90 Chinese Businessmen. It was incorporated on January 2, 2017. You were posted to 40-40 Solicitors for your externship module. You attended the first board of directors' meeting of the company with your principal. You are asked to resolve the following issues:\ni. Fixing of the financial year of the company.\nii. Quorum of the first annual general meeting.\niii. Employment of Expatriates of the company.\niv. Date for holding the statutory and annual general meeting.\nv. Appointment of the first auditors.",
            question: "The statutory meeting must hold:",
            options: {
              a: "If the board deemed it necessary.",
              b: "1st July, 2017",
              c: "2nd July, 2017",
              d: "3rd July, 2017",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "40-40 Solicitors is the Company Secretary to ABC-DE Plc., a multinational Company completely owned by 90 Chinese Businessmen. It was incorporated on January 2, 2017. You were posted to 40-40 Solicitors for your externship module. You attended the first board of directors' meeting of the company with your principal. You are asked to resolve the following issues:\ni. Fixing of the financial year of the company.\nii. Quorum of the first annual general meeting.\niii. Employment of Expatriates of the company.\niv. Date for holding the statutory and annual general meeting.\nv. Appointment of the first auditors.",
            question: "The minutes of the above board of directors meeting is authenticated if it is signed by:",
            options: {
              a: "The Chairman",
              b: "The Chairman and Secretary",
              c: "The Executive Directors",
              d: "The Chief Executive Officer",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "Section 274 of the Investment and Securities Act (ISA) 2007 provides:\n\"There is established a body to be known as the Investments and Securities Tribunal to exercise the Jurisdictions, powers and authority conferred on it by or under this Act\".",
            question: "The Investment and Securities Tribunal shall be composed of ............. members and duly constituted if it consists of ............... members.",
            options: {
              a: "8, 3",
              b: "10,2",
              c: "10, 3",
              d: "8, 44",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Section 274 of the Investment and Securities Act (ISA) 2007 provides:\n\"There is established a body to be known as the Investments and Securities Tribunal to exercise the Jurisdictions, powers and authority conferred on it by or under this Act\".",
            question: "The following are correct statements about Investment and Securities Tribunal, except:",
            options: {
              a: "The Tribunal has both civil and criminal jurisdiction.",
              b: "The Tribunal may make rules regulating its procedure.",
              c: "The proceeding of the tribunal may be held in camera",
              d: "The Tribunal exercise both original and appellate jurisdiction.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "During the externship programme, you accompanied your field supervisor to the recently concluded Extra-Ordinary General Meeting of Perfect Plc. at the Transcorp Hotel, Calabar, Perfect Plc. resolved to increase its share capital from N5 million to N100 million.\nThe existing shareholders were offered rights issues and bonus shares. New members were also invited to purchase the shares of the company. Dr. Jacqueline Zerb of the Netherlands also bought shares of the company.",
            question: "To subscribe to the shares of the company, Dr. Jacqueline Zerb requires one of the following:",
            options: {
              a: "Driver's license",
              b: "National Identity card",
              c: "Only the data page of her International passport.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 18,
            context: "During the externship programme, you accompanied your field supervisor to the recently concluded Extra-Ordinary General Meeting of Perfect Plc. at the Transcorp Hotel, Calabar, Perfect Plc. resolved to increase its share capital from N5 million to N100 million.\nThe existing shareholders were offered rights issues and bonus shares. New members were also invited to purchase the shares of the company. Dr. Jacqueline Zerb of the Netherlands also bought shares of the company.",
            question: "The appropriate method for Perfect Plc. to adopt in order to achieve the aim of issuing its shares to the existing shareholders and at the same time invite new members to subscribe is:-",
            options: {
              a: "Bond time",
              b: "Rights of Issue",
              c: "Placement",
              d: "Hybrid Issue",
            },
            answer: "d",
          },
          {
            id: 19,
            context: null,
            question: "Which of the following is not a document required to be shown by the administrator or executor to the company for transmission of shares:",
            options: {
              a: "Letter of application",
              b: "Passport photos of the deceased",
              c: "Death certificate",
              d: "Letter of administration or probate.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: null,
            question: "Which of the following is incorrect about the crystallization of a floating charge?",
            options: {
              a: "When the security becomes enforceable and the holder appoints a receiver or manager or enters into possession of the assets.",
              b: "When court appoints a receiver or manager upon the holder's application.",
              c: "When the company goes into liquidation.",
              d: "When the debt is paid and a Memorandum of satisfaction filed with the Corporate Affairs Commission.",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "2017-july-property-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Bimpe Usman, Okiemute Okeke and Ene Isiechi were externs in the Law office of Flourish Law Firm. During their externship, they were invited to observe a legal interview for a sale of land. They were also exposed to the preparation of different instruments in land transactions, probate practice, administration of estates and the various taxes payable in land transactions. In order to make some of the transactions more practical, their Principal took them on a visit to both the Lands Registry and the Probate Registry.",
            question: "Which of the following is correct of the stages in sale of land?",
            options: {
              a: "Oral contract, open contract and completion stages.",
              b: "Formal contract, governor's consent, stamping and registration.",
              c: "Pre-contract, contract post contract, completion and post completion stages.",
              d: "Governor's consent, stamping and re-registration.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Bimpe Usman, Okiemute Okeke and Ene Isiechi were externs in the Law office of Flourish Law Firm. During their externship, they were invited to observe a legal interview for a sale of land. They were also exposed to the preparation of different instruments in land transactions, probate practice, administration of estates and the various taxes payable in land transactions. In order to make some of the transactions more practical, their Principal took them on a visit to both the Lands Registry and the Probate Registry.",
            question: "The client was also advised that the following are advantages of a contract for the sale of land except:",
            options: {
              a: "Scrutiny of the parties.",
              b: "Opportunity to investigate title.",
              c: "Prevention of unexpected increase or change in purchase price.",
              d: "Prevention of parties withdrawing.",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "Bimpe Usman, Okiemute Okeke and Ene Isiechi were externs in the Law office of Flourish Law Firm. During their externship, they were invited to observe a legal interview for a sale of land. They were also exposed to the preparation of different instruments in land transactions, probate practice, administration of estates and the various taxes payable in land transactions. In order to make some of the transactions more practical, their Principal took them on a visit to both the Lands Registry and the Probate Registry.",
            question: "Which of the following is not an ingredient of a good root of title?",
            options: {
              a: "A good root of title must establish both the legal and equitable interests.",
              b: "Nothing on the face of a good root of title should cast doubt on its authenticity.",
              c: "It must clearly describe the property.",
              d: "It must contain the equitable interests only.",
            },
            answer: "d",
          },
          {
            id: 4,
            context: null,
            question: "During their visit to the Probate Registry, they discovered that Caveats are entered by:",
            options: {
              a: "The executors and beneficiaries only.",
              b: "The beneficiaries only.",
              c: "Only the spouse in a marriage under the Marriage Act.",
              d: "Any person interested in the estate.",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "Chief Nduka Sam resides at 10 Road, 14 Block, Aggrey Quarters, Cape Town, South Africa. He recently purchased the following properties through his agent Mr. Duro Okey of No 25, Jumai Street Wuse, Abuja: — a block of six flats at Gboko, Benue State and a 5-room bungalow in Calabar, Cross River State. Mr. Nduka Sam had executed an instrument of authority in favour of Mr. Duro Qkey for the purpose of purchase of the two properties. Now, Mr. Nduka Sam wants Mr. Duro Okey to act for him for purposes of putting tenants in the property at Gboko and also for the proposed sale of the property in Calabar.",
            question: "Which of the following statements is TRUE of the above scenario?",
            options: {
              a: "Chief Nduka Sam would need to execute an instrument of authority in favour of Mr. Duro Okey for purposes of the proposed tenancy and sale.",
              b: "Chief Nduka Sam does not need to execute any instrument of authority in respect of the proposed tenancy and sale.",
              c: "The instrument of authority which Chief Nduka Sam executed in favour of Mr. Duro Okey for the purchase of the two properties must be executed by at least two parties.",
              d: "The instrument of authority Chief Nduka Sam executed in favour of Mr. Duro Okey for purchase of the two properties does not need any special attestation.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "Chief Nduka Sam resides at 10 Road, 14 Block, Aggrey Quarters, Cape Town, South Africa. He recently purchased the following properties through his agent Mr. Duro Okey of No 25, Jumai Street Wuse, Abuja: — a block of six flats at Gboko, Benue State and a 5-room bungalow in Calabar, Cross River State. Mr. Nduka Sam had executed an instrument of authority in favour of Mr. Duro Qkey for the purpose of purchase of the two properties. Now, Mr. Nduka Sam wants Mr. Duro Okey to act for him for purposes of putting tenants in the property at Gboko and also for the proposed sale of the property in Calabar.",
            question: "Assuming that Mr. Duro Okey agrees to put Madam Ojoke in the property at Gboko for a period of three years, the document that the parties must execute to complete the transaction is:",
            options: {
              a: "Deed of Subdemise.",
              b: "Deed of Lease.",
              c: "Deed of Sublease.",
              d: "Tenancy Agreement.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Chief Nduka Sam resides at 10 Road, 14 Block, Aggrey Quarters, Cape Town, South Africa. He recently purchased the following properties through his agent Mr. Duro Okey of No 25, Jumai Street Wuse, Abuja: — a block of six flats at Gboko, Benue State and a 5-room bungalow in Calabar, Cross River State. Mr. Nduka Sam had executed an instrument of authority in favour of Mr. Duro Qkey for the purpose of purchase of the two properties. Now, Mr. Nduka Sam wants Mr. Duro Okey to act for him for purposes of putting tenants in the property at Gboko and also for the proposed sale of the property in Calabar.",
            question: "To deduce Chief Nduka Sam's title in the property at Calabar for purposes of the proposed sale, the document that will constitute Chief Nduka Sam's good root of title is:",
            options: {
              a: "Duly perfected Deed of Assignment.",
              b: "Duly perfected Deed of Lease.",
              c: "Duly perfected power of Attorney.",
              d: "Duly perfected Deed of Mortgage.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Chief Nduka Sam resides at 10 Road, 14 Block, Aggrey Quarters, Cape Town, South Africa. He recently purchased the following properties through his agent Mr. Duro Okey of No 25, Jumai Street Wuse, Abuja: — a block of six flats at Gboko, Benue State and a 5-room bungalow in Calabar, Cross River State. Mr. Nduka Sam had executed an instrument of authority in favour of Mr. Duro Qkey for the purpose of purchase of the two properties. Now, Mr. Nduka Sam wants Mr. Duro Okey to act for him for purposes of putting tenants in the property at Gboko and also for the proposed sale of the property in Calabar.",
            question: "Which of the following laws will not apply to the proposed sale of the property in Calabar:",
            options: {
              a: "Property and Conveyancing Law 1959.",
              b: "Legal Practitioners Act.",
              c: "Evidence Att.",
              d: "Value Added Tax Act.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "There are properties for lease, sale and mortgage transaction respectively. As an Extern in the Law Firm, briefed to handle the above transactions, answer the following:",
            question: "Which of the following documents relating to the transactions will contain a reddendum?",
            options: {
              a: "Deed of Lease.",
              b: "Deed of Mortgage.",
              c: "Contract of Sale.",
              d: "Deed of Assignment.",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "There are properties for lease, sale and mortgage transaction respectively. As an Extern in the Law Firm, briefed to handle the above transactions, answer the following:",
            question: "The main distinction between the lease and sale transaction in the above scenario is:",
            options: {
              a: "Whether a deed is needed or not.",
              b: "Length of time.",
              c: "Reversionary interest.",
              d: "The amount paid.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "There are properties for lease, sale and mortgage transaction respectively. As an Extern in the Law Firm, briefed to handle the above transactions, answer the following:",
            question: "Assuming that the deed of lease contains a covenant not to sublet, a breach of this covenant may be enforced by Chief Babalika Ohaha through:",
            options: {
              a: "Option to renew.",
              b: "Forfeiture.",
              c: "Specific Performance.",
              d: "Eviction.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Mrs. Lilian Pius-Akanga, a Lagos based trader has approached the Law Firm of A. A. Alli & Co where you had your externship assignment to represent her in letting out her 2-bedroom bungalow, located at Ota, Ogun State. Benn Limited, a company undertaking the business of Aluminum Roofing and located at No 10, Mary Land, Ikeja is desirous of leasing the apartment for use as residential quarters for the company's Secretary for a period of 5 years.",
            question: "Benn Limited wants the opportunity to extend their tenancy on the property after the expiration of the current term. Which of the following clauses should be inserted in the document?",
            options: {
              a: "User covenant.",
              b: "Rent renewal clause",
              c: "Lease renew clause",
              d: "Option to renew.",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "Mrs. Lilian Pius-Akanga, a Lagos based trader has approached the Law Firm of A. A. Alli & Co where you had your externship assignment to represent her in letting out her 2-bedroom bungalow, located at Ota, Ogun State. Benn Limited, a company undertaking the business of Aluminum Roofing and located at No 10, Mary Land, Ikeja is desirous of leasing the apartment for use as residential quarters for the company's Secretary for a period of 5 years.",
            question: "Assuming that Mrs. Pius-Akanga refuses to pay the Law Firm of A. A. Alli & Co their Solicitors fees, what will you advise them to do in order to recover their fees?",
            options: {
              a: "Prepare, sign and deliver a Bill of Charges to Mrs. Pius-Akanga.",
              b: "Wait for one-month period.",
              c: "File an action in court for recovery of charges.",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "Mrs. Lilian Pius-Akanga, a Lagos based trader has approached the Law Firm of A. A. Alli & Co where you had your externship assignment to represent her in letting out her 2-bedroom bungalow, located at Ota, Ogun State. Benn Limited, a company undertaking the business of Aluminum Roofing and located at No 10, Mary Land, Ikeja is desirous of leasing the apartment for use as residential quarters for the company's Secretary for a period of 5 years.",
            question: "Which of the following is true of the document to be drawn up and executed by the parties?",
            options: {
              a: "It must be created by Deed.",
              b: "It must not retain a reversionary interest.",
              c: "It must transfer ownership.",
              d: "It must be preceded by investigation of title before creation.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "Mrs. Lilian Pius-Akanga, a Lagos based trader has approached the Law Firm of A. A. Alli & Co where you had your externship assignment to represent her in letting out her 2-bedroom bungalow, located at Ota, Ogun State. Benn Limited, a company undertaking the business of Aluminum Roofing and located at No 10, Mary Land, Ikeja is desirous of leasing the apartment for use as residential quarters for the company's Secretary for a period of 5 years.",
            question: "What kind of fees will not be appropriate for your Principal to charge in the circumstance?",
            options: {
              a: "Scale fees.",
              b: "Consultation fees.",
              c: "Appearance fees",
              d: "Hourly fees.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "Joyce, a new wig has been instructed by her Principal to advise a client on some issues relating to Conveyancing Practice and then draft for the client a Deed of Assignment. In furtherance of the Principal's instrument, she advised the client that where an illiterate is a party to a conveyance of land, a Jurat which states that the contents of the instrument has been read and interpreted from English language to the illiterate's native language must be inserted in the instrument by virtue of the --------- 16 or Law. That where an Instrument that is registerable is not registered, it does have one of the following defects ------------17. Upon the death of a holder of interest in land, issues such as devolution of estate on personal representatives, rights, duties and obligations of personal representatives are provided for by the --------18 of each State. Such personal representative may either be -------- or --------- 19. Finally, she said that while drafting the Deed of Assignment the following are matters to be included in the operative part of the document ----------- 20",
            question: "Fill in blank 16 of the passage.",
            options: {
              a: "Illiteracy Protection Right.",
              b: "Illiterate Protection Act.",
              c: "Conveyancing Practice and Procedure.",
              d: "Custom and usage.",
            },
            answer: "b",
          },
          {
            id: 17,
            context: "Joyce, a new wig has been instructed by her Principal to advise a client on some issues relating to Conveyancing Practice and then draft for the client a Deed of Assignment. In furtherance of the Principal's instrument, she advised the client that where an illiterate is a party to a conveyance of land, a Jurat which states that the contents of the instrument has been read and interpreted from English language to the illiterate's native language must be inserted in the instrument by virtue of the --------- 16 or Law. That where an Instrument that is registerable is not registered, it does have one of the following defects ------------17. Upon the death of a holder of interest in land, issues such as devolution of estate on personal representatives, rights, duties and obligations of personal representatives are provided for by the --------18 of each State. Such personal representative may either be -------- or --------- 19. Finally, she said that while drafting the Deed of Assignment the following are matters to be included in the operative part of the document ----------- 20",
            question: "Fill in blank 17 of the passage.",
            options: {
              a: "It cannot be used as evidence of payment for the land.",
              b: "It cannot be pleaded in court.",
              c: "It is inadmissible in evidence as proof of title.",
              d: "The transaction is illegal.",
            },
            answer: "c",
          },
          {
            id: 18,
            context: "Joyce, a new wig has been instructed by her Principal to advise a client on some issues relating to Conveyancing Practice and then draft for the client a Deed of Assignment. In furtherance of the Principal's instrument, she advised the client that where an illiterate is a party to a conveyance of land, a Jurat which states that the contents of the instrument has been read and interpreted from English language to the illiterate's native language must be inserted in the instrument by virtue of the --------- 16 or Law. That where an Instrument that is registerable is not registered, it does have one of the following defects ------------17. Upon the death of a holder of interest in land, issues such as devolution of estate on personal representatives, rights, duties and obligations of personal representatives are provided for by the --------18 of each State. Such personal representative may either be -------- or --------- 19. Finally, she said that while drafting the Deed of Assignment the following are matters to be included in the operative part of the document ----------- 20",
            question: "Fill in blank 18 of the passage.",
            options: {
              a: "Probate Law.",
              b: "Wills Act.",
              c: "Wills Law.",
              d: "Administration of Estate Law.",
            },
            answer: "d",
          },
          {
            id: 19,
            context: "Joyce, a new wig has been instructed by her Principal to advise a client on some issues relating to Conveyancing Practice and then draft for the client a Deed of Assignment. In furtherance of the Principal's instrument, she advised the client that where an illiterate is a party to a conveyance of land, a Jurat which states that the contents of the instrument has been read and interpreted from English language to the illiterate's native language must be inserted in the instrument by virtue of the --------- 16 or Law. That where an Instrument that is registerable is not registered, it does have one of the following defects ------------17. Upon the death of a holder of interest in land, issues such as devolution of estate on personal representatives, rights, duties and obligations of personal representatives are provided for by the --------18 of each State. Such personal representative may either be -------- or --------- 19. Finally, she said that while drafting the Deed of Assignment the following are matters to be included in the operative part of the document ----------- 20",
            question: "Fill in blank 19 of the passage.",
            options: {
              a: "Executors or beneficiaries.",
              b: "Executors or Administrators.",
              c: "Testators or Testatrix.",
              d: "Donee or Agent.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "Joyce, a new wig has been instructed by her Principal to advise a client on some issues relating to Conveyancing Practice and then draft for the client a Deed of Assignment. In furtherance of the Principal's instrument, she advised the client that where an illiterate is a party to a conveyance of land, a Jurat which states that the contents of the instrument has been read and interpreted from English language to the illiterate's native language must be inserted in the instrument by virtue of the --------- 16 or Law. That where an Instrument that is registerable is not registered, it does have one of the following defects ------------17. Upon the death of a holder of interest in land, issues such as devolution of estate on personal representatives, rights, duties and obligations of personal representatives are provided for by the --------18 of each State. Such personal representative may either be -------- or --------- 19. Finally, she said that while drafting the Deed of Assignment the following are matters to be included in the operative part of the document ----------- 20",
            question: "Fill in blank 20 of the passage.",
            options: {
              a: "Testatum, Consideration, Habendum, Testimonium.",
              b: "Testatum, Receipt Clause, Consideration, Habendum.",
              c: "Testatum, Consideration, Rebendum, Parcels",
              d: "Testatum, Consideration, Receipt Clause, Habendum.",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2017-july-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "During your externship programme, Mr. Chuks Ologun briefed your field supervisor, Miss Rose Issah that he would like to dissolve the marriage contracted at the Marriage Registry between himself and his wife Shade Ologun because of irreconcilable differences between them and also because she is bad tempered and very violent. He stated further that her behaviour had resulted in her destroying so many of his personal belongings and even caused him grievous bodily harm.\n\nChuks and Shade both live together in their matrimonial property situate at No. 4, Oallir. Street. Apapa, Lagos.",
            question: "The ground(s) for dissolution of the marriage will be that",
            options: {
              a: "The Respondent has behaved in such a way that the petitioner finds it intolerable to live with her.",
              b: "The Respondent is bad tempered and has caused the Petitioner grievous bodily harm on several occasions and the Petitioner can no longer live with her.",
              c: "The Marriage has broken down irretrievably.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "During your externship programme, Mr. Chuks Ologun briefed your field supervisor, Miss Rose Issah that he would like to dissolve the marriage contracted at the Marriage Registry between himself and his wife Shade Ologun because of irreconcilable differences between them and also because she is bad tempered and very violent. He stated further that her behaviour had resulted in her destroying so many of his personal belongings and even caused him grievous bodily harm.\n\nChuks and Shade both live together in their matrimonial property situate at No. 4, Oallir. Street. Apapa, Lagos.",
            question: "Assuming that Mrs. Shade Ologun is about to sell the matrimonial property within the next five (5) days and Chuks Ologun wants to prevent her from doing so, which one of the following steps will you advise him to take in the matter?",
            options: {
              a: "He shall file an application by motion ex-parte for mareva injunction restraining her from selling the property pending the final determination of the suit.",
              b: "He should file an application by motion ex-parte for interim injunction restraining her from selling the property pending the hearing of the motion on notice.",
              c: "He should file an application by motion on notice for perpetual injunction retraining her from selling the property pending the final determination of the suit.",
              d: "He should file an application by motion on notice for interlocutory injunction restraining her from selling the property pending the determination of the substantive suit.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "During your externship programme, Mr. Chuks Ologun briefed your field supervisor, Miss Rose Issah that he would like to dissolve the marriage contracted at the Marriage Registry between himself and his wife Shade Ologun because of irreconcilable differences between them and also because she is bad tempered and very violent. He stated further that her behaviour had resulted in her destroying so many of his personal belongings and even caused him grievous bodily harm.\n\nChuks and Shade both live together in their matrimonial property situate at No. 4, Oallir. Street. Apapa, Lagos.",
            question: "Which one of the following documents will not be filed along with the originating process at the time of commencing the action for dissolution of the marriage?",
            options: {
              a: "Marriage Certificate",
              b: "Verifying Affidavit",
              c: "Certificate of Reconciliation",
              d: "Pre-action Counseling Certificate",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "During your externship programme, Mr. Chuks Ologun briefed your field supervisor, Miss Rose Issah that he would like to dissolve the marriage contracted at the Marriage Registry between himself and his wife Shade Ologun because of irreconcilable differences between them and also because she is bad tempered and very violent. He stated further that her behaviour had resulted in her destroying so many of his personal belongings and even caused him grievous bodily harm.\n\nChuks and Shade both live together in their matrimonial property situate at No. 4, Oallir. Street. Apapa, Lagos.",
            question: "Assuming that judgment was given in favour of Chuks Ologun and the marriage was dissolved, within what time limit can Shade Ologun appeal against the decision of the court refusing her claim for maintenance and settlement of property?",
            options: {
              a: "Within three months after the dissolution of the marriage was made.",
              b: "Within three months after the order of absolution was made.",
              c: "Within fifteen (15) days after the order nisi for dissolution of the marriage was made.",
              d: "Within fifteen (15) days after the order absolute was made.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "During your externship programme, Mr. Chuks Ologun briefed your field supervisor, Miss Rose Issah that he would like to dissolve the marriage contracted at the Marriage Registry between himself and his wife Shade Ologun because of irreconcilable differences between them and also because she is bad tempered and very violent. He stated further that her behaviour had resulted in her destroying so many of his personal belongings and even caused him grievous bodily harm.\n\nChuks and Shade both live together in their matrimonial property situate at No. 4, Oallir. Street. Apapa, Lagos.",
            question: "Assuming the trial judge wants to set aside his judgment given in the matter, on what grounds can he do so?",
            options: {
              a: "Fraud, contempt of court and lack of jurisdiction.",
              b: "Fraud, non-service and lack of jurisdiction.",
              c: "Non-filing of court process, fraud and lack of evidence.",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "Engr. Obatola Komolafe engaged the services of Braimoh & Associates where you are an extern, to claim damages of N10,000,000.00 from Kamaradarie Nursery and Primary School, Ikeja, Lagos which is registered under Part C of the Companies and Allied Matters Act. The School bus had negligently knocked down Engr. Obatola's son (9 years old) Dike on his way back from school and he sustained serious injuries.",
            question: "From the narration, the endorsement as to parties on the Originating process will be:",
            options: {
              a: "Engr. Obatola Komolafe (parent and. guardian of Dike Obatola) and the Registered trustees of Kamaridarie Nursery and Primary School.",
              b: "Dike Obatola (infant) suing through his guardian Engr. Obatola Komolafe and the Registered trustees of Kamaradarie Nursery and Primary Schools.",
              c: "The Registered Trustees of Karnaradarie Nursery and Primary Schools AND Dike Obatola (Infant) suing through his friend Engr. Obatola Komolafe.",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Engr. Obatola Komolafe engaged the services of Braimoh & Associates where you are an extern, to claim damages of N10,000,000.00 from Kamaradarie Nursery and Primary School, Ikeja, Lagos which is registered under Part C of the Companies and Allied Matters Act. The School bus had negligently knocked down Engr. Obatola's son (9 years old) Dike on his way back from school and he sustained serious injuries.",
            question: "The following matters may be considered by the court at the Case Management Conference except:-",
            options: {
              a: "Settlement of issues",
              b: "Hearing of motion to amend statement of claim.",
              c: "Hearing of motion for stay of execution of judgment.",
              d: "Motion to strike out claim for non-disclosure of reasonable cause of action.",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "Engr. Obatola Komolafe engaged the services of Braimoh & Associates where you are an extern, to claim damages of N10,000,000.00 from Kamaradarie Nursery and Primary School, Ikeja, Lagos which is registered under Part C of the Companies and Allied Matters Act. The School bus had negligently knocked down Engr. Obatola's son (9 years old) Dike on his way back from school and he sustained serious injuries.",
            question: "At the hearing, before a receipt for medical bills produced by a point of sale (POS) machine is tendered by you, the following must be established except:-",
            options: {
              a: "The receipt was produced by the machine which was in regular use of storing and processing information.",
              b: "The receipt was produced in the ordinary cause of business by the machine.",
              c: "The machine was in good working condition at the relevant time and if it was not, it did not affect the production of the receipt.",
              d: "The name and description of the manufacturer of the machine.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Engr. Obatola Komolafe engaged the services of Braimoh & Associates where you are an extern, to claim damages of N10,000,000.00 from Kamaradarie Nursery and Primary School, Ikeja, Lagos which is registered under Part C of the Companies and Allied Matters Act. The School bus had negligently knocked down Engr. Obatola's son (9 years old) Dike on his way back from school and he sustained serious injuries.",
            question: "The following statements are true about the affidavit in support of the motion filed in the case to amend the claimant's Statement of Claim except:",
            options: {
              a: "It must contain the age of the deponent.",
              b: "It should not contain legal arguments and conclusions.",
              c: "It should not contain objections and prayers.",
              d: "It must contain a paragraph of good faith in accordance with the Oaths Act.",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "Engr. Obatola Komolafe engaged the services of Braimoh & Associates where you are an extern, to claim damages of N10,000,000.00 from Kamaradarie Nursery and Primary School, Ikeja, Lagos which is registered under Part C of the Companies and Allied Matters Act. The School bus had negligently knocked down Engr. Obatola's son (9 years old) Dike on his way back from school and he sustained serious injuries.",
            question: "The reliefs in this suit will include the following except:",
            options: {
              a: "A declaration that the defendant was negligent in the way he drove on the day in question.",
              b: "Special damages in the sum of 2,000,000.00 for hospital bills incurred as a result of the injury sustained.",
              c: "An order withdrawing the driving licence of the driver.",
              d: "General damages.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "One of the cases that came up for trial before the Lagos State High Court during the externship programme was the suit between Dolapo Dipo and Sola Supo. After the case had been called by ___ (11) and counsel announced their appearances, claimant's counsel opened with the examination-in-chief of his sole witness. As the only documentary evidence by the claimant had previously been agreed ___ (12), counsel tendered the document ___ (13). During the cross examination of the claimant's witness, the defence counsel mostly adopted ___ (14). At the conclusion of the claimant's case, defence counsel informed the court that he would be resting his case on that of the claimant. The court then ordered ___ (15) to file written address within the next 21 days.",
            question: "Blank (11):",
            options: {
              a: "The Presiding judge's usher",
              b: "The Registrar of the Court",
              c: "The Clerk of the Court",
              d: "The janitor of the court.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "One of the cases that came up for trial before the Lagos State High Court during the externship programme was the suit between Dolapo Dipo and Sola Supo. After the case had been called by ___ (11) and counsel announced their appearances, claimant's counsel opened with the examination-in-chief of his sole witness. As the only documentary evidence by the claimant had previously been agreed ___ (12), counsel tendered the document ___ (13). During the cross examination of the claimant's witness, the defence counsel mostly adopted ___ (14). At the conclusion of the claimant's case, defence counsel informed the court that he would be resting his case on that of the claimant. The court then ordered ___ (15) to file written address within the next 21 days.",
            question: "Blank (12):",
            options: {
              a: "In the Judge's Chambers.",
              b: "In the pleadings of the parties.",
              c: "In the statement on Oath of the parties.",
              d: "At the case management conference.",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "One of the cases that came up for trial before the Lagos State High Court during the externship programme was the suit between Dolapo Dipo and Sola Supo. After the case had been called by ___ (11) and counsel announced their appearances, claimant's counsel opened with the examination-in-chief of his sole witness. As the only documentary evidence by the claimant had previously been agreed ___ (12), counsel tendered the document ___ (13). During the cross examination of the claimant's witness, the defence counsel mostly adopted ___ (14). At the conclusion of the claimant's case, defence counsel informed the court that he would be resting his case on that of the claimant. The court then ordered ___ (15) to file written address within the next 21 days.",
            question: "Blank (13):",
            options: {
              a: "Through the witness",
              b: "After laying proper foundation",
              c: "From the Bar.",
              d: "For recognition.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: "One of the cases that came up for trial before the Lagos State High Court during the externship programme was the suit between Dolapo Dipo and Sola Supo. After the case had been called by ___ (11) and counsel announced their appearances, claimant's counsel opened with the examination-in-chief of his sole witness. As the only documentary evidence by the claimant had previously been agreed ___ (12), counsel tendered the document ___ (13). During the cross examination of the claimant's witness, the defence counsel mostly adopted ___ (14). At the conclusion of the claimant's case, defence counsel informed the court that he would be resting his case on that of the claimant. The court then ordered ___ (15) to file written address within the next 21 days.",
            question: "Blank (14):",
            options: {
              a: "Open leading question",
              b: "Close leading question",
              c: "Close non leading question",
              d: "Open non leading question.",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "One of the cases that came up for trial before the Lagos State High Court during the externship programme was the suit between Dolapo Dipo and Sola Supo. After the case had been called by ___ (11) and counsel announced their appearances, claimant's counsel opened with the examination-in-chief of his sole witness. As the only documentary evidence by the claimant had previously been agreed ___ (12), counsel tendered the document ___ (13). During the cross examination of the claimant's witness, the defence counsel mostly adopted ___ (14). At the conclusion of the claimant's case, defence counsel informed the court that he would be resting his case on that of the claimant. The court then ordered ___ (15) to file written address within the next 21 days.",
            question: "Blank (15):",
            options: {
              a: "The claimant",
              b: "The defendant",
              c: "Either of them",
              d: "Both of them",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "During her externship, Ebere's principal asked her to draft an affidavit to accompany an application for leave to levy execution against a judgment debtor's immovable property.",
            question: "Ebere's affidavit must contain all but one of the following:",
            options: {
              a: "Steps taken to enforce the judgment and the result so far.",
              b: "The sum of money now remaining due under the judgment.",
              c: "No moveable property of the judgment debtor can with reasonable diligence be found.",
              d: "The immovable property can satisfy the judgment debt and so there is no need to sell the movable property.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: null,
            question: "How long after attachment of the property above should the judgment creditor wait for before the property is sold?",
            options: {
              a: "14 days after attachment, unless the judgment debtor requests otherwise in writing.",
              b: "15 days after attachment unless the judgment debtor requests otherwise in writing.",
              c: "30 days after attachment",
              d: "one month after attachment.",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "During your externship programme, you witnessed a client interview between your principal at the law firm and Chief Johnson. Chief Johnson narrated that he had been in the United States of America for about a year and upon his return visited his uncompleted building at Ikeja, GRA and found squatters living there. He is desirous of evicting them. Your principal has asked you to identify the best way to proceed with the eviction.",
            question: "During your externship programme, you witnessed a client interview between your principal at the law firm and Chief Johnson. Chief Johnson narrated that he had been in the United States of America for about a year and upon his return visited his uncompleted building at Ikeja, GRA and found squatters living there. He is desirous of evicting them. Your principal has asked you to identify the best way to proceed with the eviction.",
            options: {
              a: "Serve Notice to quit on the squatters, followed by a Notice of owner's intention to recover possession and then file a writ of summons at the High Court.",
              b: "Serve 7 days' Notice of Owner's Intention to recover possession and originating summons at the High Court.",
              c: "Send a few thugs to throw them out as they have no right to be in premises.",
              d: "Serve Notice to Quit, following 7 days' Notice of Owner's intention to recover possession and then file summons (TL6A) and annexed claim (TL6B) at the Magistrate Court,",
            },
            answer: "b",
          },
          {
            id: 19,
            context: null,
            question: "You accompanied Mrs. Bimbo Lawal, the Head of the Law Firm to a Case Management Conference at the High Court, Lagos. Mrs. Bimbo Lawal was the claimant's counsel but neither the defendant nor his counsel was present. There was also no letter to the court to explain the reason for their absence. Which of the under listed is the most appropriate option for the judge to adopt in accordance with the rules.",
            options: {
              a: "Proceed with the Conference as scheduled.",
              b: "Adjourn the Conference.",
              c: "Enter judgment against the defendant where appropriate.",
              d: "Order that an undertaking to participate effectively in future be filed by the defendant.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: null,
            question: "At the High Court of the Federal Capital Territory, pleadings may be amended:",
            options: {
              a: "Anytime before the close of pre-trial conference.",
              b: "Anytime but not more than twice before close of the case.",
              c: "At any stage of the proceedings.",
              d: "None of the above.",
            },
            answer: "a",
          },
        ],
      },
    ],
  },
  "2018-april": {
    year: 2018,
    session: "April",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 40,
    courses: [
      {
        id: "2018-april-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Amarachi Nigeria limited was incorporated in 2005. The Company convened an Extra-ordinary General meeting of its members where the following resolutions were passed:\ni. That the company be reregistered as a public company.\nii. That the sharecapital of the company be increased from N1,000,000 to N10,000,000.",
            question: "The following may convene an Extra-ordinary General Meeting of Amarachi Nig. Ltd except:",
            options: {
              a: "The board of directors.",
              b: "The company secretary.",
              c: "The court.",
              d: "Members holding not less than 1/10 of the paid-up capital of the company.",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "Amarachi Nigeria limited was incorporated in 2005. The Company convened an Extra-ordinary General meeting of its members where the following resolutions were passed:\ni. That the company be reregistered as a public company.\nii. That the sharecapital of the company be increased from N1,000,000 to N10,000,000.",
            question: "If the Chairman is not present within  after the time appointed for holding of the Extra-ordinary General Meeting of the company, the directors present may choose one of their number to be chairman of the meeting.",
            options: {
              a: "1 hour.",
              b: "5 minutes.",
              c: "30 minutes.",
              d: "2 hours.",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "Amarachi Nigeria limited was incorporated in 2005. The Company convened an Extra-ordinary General meeting of its members where the following resolutions were passed:\ni. That the company be reregistered as a public company.\nii. That the sharecapital of the company be increased from N1,000,000 to N10,000,000.",
            question: "What type of resolution will be passed to re-register the company as a public company?",
            options: {
              a: "Ordinary resolution.",
              b: "Written resolution.",
              c: "Unanimous resolution.",
              d: "Special resolution.",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "Amarachi Nigeria limited was incorporated in 2005. The Company convened an Extra-ordinary General meeting of its members where the following resolutions were passed:\ni. That the company be reregistered as a public company.\nii. That the sharecapital of the company be increased from N1,000,000 to N10,000,000.",
            question: "The following are the documents required to be filed with the Corporate Affairs Commission in order to increase the share capital of the company from N1,000,000 to N10,000,000 except:",
            options: {
              a: "Printed copy of the Notice of increase.",
              b: "A copy of the resolution.",
              c: "A statement of increase duly stamped.",
              d: "A copy of the Balance sheet.",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "Amarachi Nigeria limited was incorporated in 2005. The Company convened an Extra-ordinary General meeting of its members where the following resolutions were passed:\ni. That the company be reregistered as a public company.\nii. That the sharecapital of the company be increased from N1,000,000 to N10,000,000.",
            question: "The form that will be filed with the Corporate Affairs Commission to register the company as a public company is:",
            options: {
              a: "Form CAC 2.7.",
              b: "Form CAC 2.4.",
              c: "Form CAC 2.1.",
              d: "Form CAC 2A.",
            },
            answer: "bonus",
          },
          {
            id: 6,
            context: "Amarachi Nigeria limited was incorporated in 2005. The Company convened an Extra-ordinary General meeting of its members where the following resolutions were passed:\ni. That the company be reregistered as a public company.\nii. That the sharecapital of the company be increased from N1,000,000 to N10,000,000.",
            question: "The following are the alterations that will be made in the memorandum of association of the company upon re-registration of the company as a public company except:",
            options: {
              a: "Alteration of the name of the company.",
              b: "Alteration of the share capital of company.",
              c: "Alteration of the restriction clause in aspect of transfer of shares of the company.",
              d: "Alteration of the status clause in the memorandum of association of the company.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "James and Ekaite Edet are natives of Cross River State. They have two sons Gold and Silver aged and 16 respectively. The Edets are proprietors of EdetWasherman situated in New Haven layout in Owerri. The business is valued at N450,000.00 only. The Edets have resolved to incorporate a company to take over their business.",
            question: "The proposed company must Have  subscribers",
            options: {
              a: "Four",
              b: "Three",
              c: "Two",
              d: "Nil",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "James and Ekaite Edet are natives of Cross River State. They have two sons Gold and Silver aged and 16 respectively. The Edets are proprietors of EdetWasherman situated in New Haven layout in Owerri. The business is valued at N450,000.00 only. The Edets have resolved to incorporate a company to take over their business.",
            question: "One of the following would not be accepted by the CAC as a proposed name for the company.",
            options: {
              a: "EdetWasherman (Nig) Limited.",
              b: "JEGS (Nig) Limited.",
              c: "JANDE Washerman (Nig) Limited.",
              d: "Edet Wash (Nig) Plc.",
            },
            answer: "bonus",
          },
          {
            id: 9,
            context: "James and Ekaite Edet are natives of Cross River State. They have two sons Gold and Silver aged and 16 respectively. The Edets are proprietors of EdetWasherman situated in New Haven layout in Owerri. The business is valued at N450,000.00 only. The Edets have resolved to incorporate a company to take over their business.",
            question: "Can be the first director of the Company",
            options: {
              a: "James and Silver.",
              b: "Silver and Gold.",
              c: "Gold and Ekaite.",
              d: "Silver and Ekaite.",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "James and Ekaite Edet are natives of Cross River State. They have two sons Gold and Silver aged and 16 respectively. The Edets are proprietors of EdetWasherman situated in New Haven layout in Owerri. The business is valued at N450,000.00 only. The Edets have resolved to incorporate a company to take over their business.",
            question: "The Registration of Edet Washman under part B of CAM A is a:",
            options: {
              a: "Conclusive evidence of contemplated partnership.",
              b: "Conclusive evidence of limited  partnership.",
              c: "Rebuttable evidence of contemplated partnership.",
              d: "Conclusive evidence of Partnership",
            },
            answer: "c",
          },
          {
            id: 11,
            context: null,
            question: "John Otto practising law in the name and style of John Otto and Co. must register with the CAC within:",
            options: {
              a: "28 days of being called to the Bar.",
              b: "8 days of being briefed by a client.",
              c: "28 days after drafting the partnership agreement",
              d: "28 days of commencement of business.",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "Corysan Nigeria Plc held its 2nd Annual General Meeting on the 22nd day of March, 2018, at Tchad Hall, Nigerian Law School. At the meeting, it was resolved that the company's share capital be increased from N20,000,000.00 to N40,000,000.00 and the Company Secretary was instructed to effect the above resolution.",
            question: "What other information must the notice of meeting of Corysan Nigeria PLC. contain?",
            options: {
              a: "Persons that can attend the meeting",
              b: "Provision for proxy.",
              c: "Persons entitled to the notice.",
              d: "Resolutions to be passed at the meeting thereafter",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "Corysan Nigeria Plc held its 2nd Annual General Meeting on the 22nd day of March, 2018, at Tchad Hall, Nigerian Law School. At the meeting, it was resolved that the company's share capital be increased from N20,000,000.00 to N40,000,000.00 and the Company Secretary was instructed to effect the above resolution.",
            question: "The Company Secretary must file the above resolution at CAC within",
            options: {
              a: "21 days.",
              b: "14 days.",
              c: "28 days.",
              d: "15 days.",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "Corysan Nigeria Plc held its 2nd Annual General Meeting on the 22nd day of March, 2018, at Tchad Hall, Nigerian Law School. At the meeting, it was resolved that the company's share capital be increased from N20,000,000.00 to N40,000,000.00 and the Company Secretary was instructed to effect the above resolution.",
            question: "Assuming the Secretary was unable to file the resolution within time, he can apply for an extension of time via:",
            options: {
              a: "Originating summons.",
              b: "Originating motions.",
              c: "Petition.",
              d: "Writ of summons.",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "Corysan Nigeria Plc held its 2nd Annual General Meeting on the 22nd day of March, 2018, at Tchad Hall, Nigerian Law School. At the meeting, it was resolved that the company's share capital be increased from N20,000,000.00 to N40,000,000.00 and the Company Secretary was instructed to effect the above resolution.",
            question: "The Company Secretary must file along with the above resolution one of the following documents:",
            options: {
              a: "Original certificate of incorporation.",
              b: "Letter of consent.",
              c: "Form of assent by all members.",
              d: "Notice of change of authorized share capital.",
            },
            answer: "d",
          },
          {
            id: 16,
            context: "Corysan Nigeria Plc held its 2nd Annual General Meeting on the 22nd day of March, 2018, at Tchad Hall, Nigerian Law School. At the meeting, it was resolved that the company's share capital be increased from N20,000,000.00 to N40,000,000.00 and the Company Secretary was instructed to effect the above resolution.",
            question: "The Corporate Affairs Commission, will afterward issue to the company one of the following:",
            options: {
              a: "New certificate of incorporation.",
              b: "Approval of consent letter.",
              c: "Certificate of increase.",
              d: "Certificate of alteration.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Entac Nigeria Plc was incorporated on 13th January, 2018. The company is considering holding the statutory meeting before the end of month of May 2018. The Principal of your Law Firm is the Company Secretary and has sought your views. Answer the following questions:",
            question: "The statutory meeting of Entac Nigeria PLC should hold within ________ months",
            options: {
              a: "Six, after commencement of operation.",
              b: "Six, after first Board of Directors meeting.",
              c: "Six, after incorporation,",
              d: "Six, after commissioning of office.",
            },
            answer: "c",
          },
          {
            id: 18,
            context: "Entac Nigeria Plc was incorporated on 13th January, 2018. The company is considering holding the statutory meeting before the end of month of May 2018. The Principal of your Law Firm is the Company Secretary and has sought your views. Answer the following questions:",
            question: "The following are entitled to receive notice of the statutory meeting except:",
            options: {
              a: "Every member.",
              b: "Every director.",
              c: "Every promoter.",
              d: "Every auditor.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "Entac Nigeria Plc was incorporated on 13th January, 2018. The company is considering holding the statutory meeting before the end of month of May 2018. The Principal of your Law Firm is the Company Secretary and has sought your views. Answer the following questions:",
            question: "Failure to hold statutory meeting could be a ground for:",
            options: {
              a: "Automatic winding up.",
              b: "Application for compulsory for winding up.",
              c: "Voluntary winding up.",
              d: "Conversion to private company.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "Entac Nigeria Plc was incorporated on 13th January, 2018. The company is considering holding the statutory meeting before the end of month of May 2018. The Principal of your Law Firm is the Company Secretary and has sought your views. Answer the following questions:",
            question: "One of the following clauses will not be allowed in the Article of Association of Entac (Nig) Plc:",
            options: {
              a: "Pre-emptive clause.",
              b: "Restriction on the transfer of  shares.",
              c: "Quorum for meeting.",
              d: "Borrowing power.",
            },
            answer: "b",
          },
        ],
      },
      {
        id: "2018-april-criminal-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "On your first day of Externship at the Director of Public Prosecution's office at the Imo State Ministry of Justice, Owerri you were handed a charge for your comments. It stated that four persons had conspired to rob the \"Give & Take\" Supermarket armed with guns, but three of them made it to the supermarket that night. One waited in the getaway car outside, the second one shot and killed the gateman, while the third went in and brought out N200,000.00 from the safe, one laptop, one ipad and one Samsung phone.",
            question: "What are the offences that will be charged in this case?",
            options: {
              a: "Conspiracy to steal, stealing and murder.",
              b: "Conspiracy to rob, robbery and murder.",
              c: "Conspiracy to commit armed robbery, armed robbery and murder.",
              d: "Conspiracy, armed robbery and homicide.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "On your first day of Externship at the Director of Public Prosecution's office at the Imo State Ministry of Justice, Owerri you were handed a charge for your comments. It stated that four persons had conspired to rob the \"Give & Take\" Supermarket armed with guns, but three of them made it to the supermarket that night. One waited in the getaway car outside, the second one shot and killed the gateman, while the third went in and brought out N200,000.00 from the safe, one laptop, one ipad and one Samsung phone.",
            question: "Which of the following is true?",
            options: {
              a: "There will be one count of robbery.",
              b: "There will be four counts of stealing.",
              c: "There will be one count of armed robbery.",
              d: "There will be four counts of armed robbery.",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "On your first day of Externship at the Director of Public Prosecution's office at the Imo State Ministry of Justice, Owerri you were handed a charge for your comments. It stated that four persons had conspired to rob the \"Give & Take\" Supermarket armed with guns, but three of them made it to the supermarket that night. One waited in the getaway car outside, the second one shot and killed the gateman, while the third went in and brought out N200,000.00 from the safe, one laptop, one ipad and one Samsung phone.",
            question: "How many defendants will be charged in this case?",
            options: {
              a: "3",
              b: "2",
              c: "4",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "On your first day of Externship at the Director of Public Prosecution's office at the Imo State Ministry of Justice, Owerri you were handed a charge for your comments. It stated that four persons had conspired to rob the \"Give & Take\" Supermarket armed with guns, but three of them made it to the supermarket that night. One waited in the getaway car outside, the second one shot and killed the gateman, while the third went in and brought out N200,000.00 from the safe, one laptop, one ipad and one Samsung phone.",
            question: "Which of the following is true?",
            options: {
              a: "Only one person who shot and killed the security guard will be charged for murder.",
              b: "All, except the person who was not at the scene will be charged for all offences.",
              c: "All will charged for all the offences.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "A robbery operation took place in the residence of Mallam Okoro Obe in Lagos at midnight. One of the robbers, Victor Umar held the legs of Binta Abang, the maid in Mallam Okoro Obe's residence while holding a gun and Sly Badoo had carnal knowledge of her. The Police later arrested them.",
            question: "Which of the following is correct as to the appropriate charge against the two accused persons.",
            options: {
              a: "Both of them will be charged for armed robbery and rape.",
              b: "Both of them will be charged for armed robbery but Sly Badoo will be charged for rape.",
              c: "The charge of rape has to be in a separate charge sheet.",
              d: "Both of them will be charged for robbery and Sly Badoo will be charged for rape.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "A robbery operation took place in the residence of Mallam Okoro Obe in Lagos at midnight. One of the robbers, Victor Umar held the legs of Binta Abang, the maid in Mallam Okoro Obe's residence while holding a gun and Sly Badoo had carnal knowledge of her. The Police later arrested them.",
            question: "One of the following could not have issued a warrant for the arrest of the suspects.",
            options: {
              a: "Justice of the Peace.",
              b: "Judge of a High Court.",
              c: "Magistrate.",
              d: "Superintendent of Police",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Yesufu Gomez, a wanted terrorist was recently arrested by officers and men of Operation Python dance in Borno State. He was kept in detention in a solitary cell with a 250 watts bulb on 24 hours of the day. He made a confessional statement. During his trial, his counsel told the Court that he was tortured into making the confession. The Magistrate in Borno eventually discharged him on a No Case submission made on his behalf.",
            question: "One of the following is correct.",
            options: {
              a: "Yesufu Gomez's right against inhuman treatment and torture was breached while in detention.",
              b: "As a terrorism suspect, Yesufu Gomez has no right to any constitutional safeguard.",
              c: "Terrorism is a capital offence.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Yesufu Gomez, a wanted terrorist was recently arrested by officers and men of Operation Python dance in Borno State. He was kept in detention in a solitary cell with a 250 watts bulb on 24 hours of the day. He made a confessional statement. During his trial, his counsel told the Court that he was tortured into making the confession. The Magistrate in Borno eventually discharged him on a No Case submission made on his behalf.",
            question: "To admit the confessional statement the court will ...........",
            options: {
              a: "Conduct an inquiry",
              b: "Conduct an inquest",
              c: "Ask the accused person to examine the IPO.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Yesufu Gomez, a wanted terrorist was recently arrested by officers and men of Operation Python dance in Borno State. He was kept in detention in a solitary cell with a 250 watts bulb on 24 hours of the day. He made a confessional statement. During his trial, his counsel told the Court that he was tortured into making the confession. The Magistrate in Borno eventually discharged him on a No Case submission made on his behalf.",
            question: "The Magistrate Court in Borno state has the power:",
            options: {
              a: "To try the accused person but not to sentence him.",
              b: "No power to try and sentence the accused person",
              c: "To try the accused person where he consents to the jurisdiction of the court.",
              d: "To both try and sentence the accused person.",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "Yesufu Gomez, a wanted terrorist was recently arrested by officers and men of Operation Python dance in Borno State. He was kept in detention in a solitary cell with a 250 watts bulb on 24 hours of the day. He made a confessional statement. During his trial, his counsel told the Court that he was tortured into making the confession. The Magistrate in Borno eventually discharged him on a No Case submission made on his behalf.",
            question: "The effect of the discharge by the Magistrate is:",
            options: {
              a: "An acquittal.",
              b: "The accused cannot be brought to court again with respect to the same charge.",
              c: "A mere discharge as he can be charged again for same offence",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Sam Rascal (1st defendant) and John Hitman (2nd defendant) were tried for armed robbery by the High Court of Bayelsa State. Each of the defendant was represented by a separate counsel. The counsel to Sam objected to the prosecution calling a witness not listed at the back of its information. The objection was overruled. The witness who testified for and on behalf of John was cross-examined by each of the prosecution and the counsel representing Sam. At the close of the defence case, all parties to the case gave their final addresses after which the Judge convicted each of the accused persons for armed robbery and sentenced each of them to 5 years imprisonment without option of appeal.",
            question: "The trial Judge overruled the objection raised by Sam's counsel because:",
            options: {
              a: "It was too early to raise the objection.",
              b: "The prosecution was not bound to call any particular witness.",
              c: "The objection ought to have been raised by John's counsel.",
              d: "The witness was already in court.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Sam Rascal (1st defendant) and John Hitman (2nd defendant) were tried for armed robbery by the High Court of Bayelsa State. Each of the defendant was represented by a separate counsel. The counsel to Sam objected to the prosecution calling a witness not listed at the back of its information. The objection was overruled. The witness who testified for and on behalf of John was cross-examined by each of the prosecution and the counsel representing Sam. At the close of the defence case, all parties to the case gave their final addresses after which the Judge convicted each of the accused persons for armed robbery and sentenced each of them to 5 years imprisonment without option of appeal.",
            question: "During the cross-examination of the witness who testified for and on behalf of John, the following order of cross-examination was: followed:",
            options: {
              a: "The court, Sam's counsel and then the prosecution.",
              b: "The prosecution, the court and then Sam's counsel.",
              c: "The prosecution and then Sam's counsel",
              d: "Sam's counsel and then the prosecution.",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "Sam Rascal (1st defendant) and John Hitman (2nd defendant) were tried for armed robbery by the High Court of Bayelsa State. Each of the defendant was represented by a separate counsel. The counsel to Sam objected to the prosecution calling a witness not listed at the back of its information. The objection was overruled. The witness who testified for and on behalf of John was cross-examined by each of the prosecution and the counsel representing Sam. At the close of the defence case, all parties to the case gave their final addresses after which the Judge convicted each of the accused persons for armed robbery and sentenced each of them to 5 years imprisonment without option of appeal.",
            question: "The order of presentation of the final address of parties mentioned in the above case was:",
            options: {
              a: "1st defendant, 2nd defendant And then the prosecution",
              b: "The prosecution, 1st defendant and then the 2nd defendant",
              c: "2nd defendant, 1st defendant and then the prosecution.",
              d: "1st defendant, the prosecution.",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "Sam Rascal (1st defendant) and John Hitman (2nd defendant) were tried for armed robbery by the High Court of Bayelsa State. Each of the defendant was represented by a separate counsel. The counsel to Sam objected to the prosecution calling a witness not listed at the back of its information. The objection was overruled. The witness who testified for and on behalf of John was cross-examined by each of the prosecution and the counsel representing Sam. At the close of the defence case, all parties to the case gave their final addresses after which the Judge convicted each of the accused persons for armed robbery and sentenced each of them to 5 years imprisonment without option of appeal.",
            question: "The appropriate sentence in the above case should be:",
            options: {
              a: "death by hanging.",
              b: "death by firing squad.",
              c: "death by lethal injection.",
              d: "imprisonment for life.",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "Sam Rascal (1st defendant) and John Hitman (2nd defendant) were tried for armed robbery by the High Court of Bayelsa State. Each of the defendant was represented by a separate counsel. The counsel to Sam objected to the prosecution calling a witness not listed at the back of its information. The objection was overruled. The witness who testified for and on behalf of John was cross-examined by each of the prosecution and the counsel representing Sam. At the close of the defence case, all parties to the case gave their final addresses after which the Judge convicted each of the accused persons for armed robbery and sentenced each of them to 5 years imprisonment without option of appeal.",
            question: "The trial Judge in the above case was wrong in foreclosing the right of the convicted persons to appeal because:",
            options: {
              a: "It was an infringement of their constitutional right.",
              b: "Armed robbery is not one of those offences that are appealable.",
              c: "Only the victim of the armed robbery attack can foreclose the right of the convicts to appeal.",
              d: "Only the Attorney-General of the State can decide when a party can appeal any decision.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "Bimbo Maikudi and John Bosco were arraigned before the High Court of the Federal Capital Territory, Abuja on a one count information of armed robbery and culpable homicide punishable with death. At the conclusion of trial, but before judgment was delivered, the court was informed that Bimbo was pregnant. The accused persons were found guilty of the alleged offence.",
            question: "Which rule of drafting charges did the information offend?",
            options: {
              a: "Rule against misjoinder of offenders.",
              b: "Rule against misjoinder of offences.",
              c: "Rule against ambiguity.",
              d: "Rule against duplicity.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "Bimbo Maikudi and John Bosco were arraigned before the High Court of the Federal Capital Territory, Abuja on a one count information of armed robbery and culpable homicide punishable with death. At the conclusion of trial, but before judgment was delivered, the court was informed that Bimbo was pregnant. The accused persons were found guilty of the alleged offence.",
            question: "Since Bimbo was found to be pregnant, the court can:",
            options: {
              a: "Convict and sentence her to life imprisonment.",
              b: "Discharge and acquit her for the sake of the unborn child.",
              c: "Convict and sentence her to death but she will be executed after the delivery of the child.",
              d: "Convict and sentence her to death but she will be executed after the child is delivered and weaned.",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "Bimbo Maikudi and John Bosco were arraigned before the High Court of the Federal Capital Territory, Abuja on a one count information of armed robbery and culpable homicide punishable with death. At the conclusion of trial, but before judgment was delivered, the court was informed that Bimbo was pregnant. The accused persons were found guilty of the alleged offence.",
            question: "Where Bimbo Maikudi (1st defendant) decides to testify, who should cross-examine her first?",
            options: {
              a: "The Prosecution.",
              b: "The 2nd defendant. John Bosco.",
              c: "The Investigating. Police Officer (IPO).",
              d: "The Court.",
            },
            answer: "a",
          },
          {
            id: 19,
            context: null,
            question: "A Samsung S8 phone belonging to Chief Obatala was stolen, but later recovered. Who has responsibility to keep the phone before tendering it in court.",
            options: {
              a: "The Divisional Police Officer.",
              b: "The Investigating Police Officer.",
              c: "The Station Officer.",
              d: "The Exhibit Keeper.",
            },
            answer: "d",
          },
          {
            id: 20,
            context: null,
            question: "When an accused person refuses to plead to a charge, the Judge should do which of the following:",
            options: {
              a: "Ask him to leave the court.",
              b: "Ask him if he was under the Governor's pleasure.",
              c: "Ask himwhy he refused to plead.",
              d: "None of the above.",
            },
            answer: "c",
          },
        ],
      },
    ],
  },
  "2018-july": {
    year: 2018,
    session: "July",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 100,
    courses: [
      {
        id: "2018-july-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Zion Nigeria Ltd was incorporated on 25th August, 2014. At its first Annual General Meeting in 2016, the following Resolutions were passed;\n(a) Conversion and Re-registration of the company to a public company.\n(b) Increase in share capital from N100 million ordinary shares to N500 million ordinary shares.",
            question: "Which of the following is not an ordinary business to be conducted at the Annual General Meeting of Zion Nigerian Ltd?",
            options: {
              a: "Appointment of the members of the Audit Committee.",
              b: "Election of directors in place of those retiring",
              c: "Appointment of Directors",
              d: "Declaration of Dividend.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Zion Nigeria Ltd was incorporated on 25th August, 2014. At its first Annual General Meeting in 2016, the following Resolutions were passed;\n(a) Conversion and Re-registration of the company to a public company.\n(b) Increase in share capital from N100 million ordinary shares to N500 million ordinary shares.",
            question: "Whose duty is it to prepare the Financial Statements of Zion Nigeria Ltd.?",
            options: {
              a: "Members in a General Meeting",
              b: "Bankers of the Company",
              c: "The Board of Directors",
              d: "The Institute of Chartered Accountants of Nigeria.",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "Zion Nigeria Ltd was incorporated on 25th August, 2014. At its first Annual General Meeting in 2016, the following Resolutions were passed;\n(a) Conversion and Re-registration of the company to a public company.\n(b) Increase in share capital from N100 million ordinary shares to N500 million ordinary shares.",
            question: "Which of these is not one of the alterations to be made by Zion Nigeria Ltd in its Memorandum of Association after its re-registration as a public company?",
            options: {
              a: "The name clause must end with PLC. Instead of Ltd.",
              b: "The capital clause must be altered to state an amount not less than N500,000",
              c: "The status (type of company) must change to public company",
              d: "The number of Directors and subscribers must be changed.",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "Zion Nigeria Ltd was incorporated on 25th August, 2014. At its first Annual General Meeting in 2016, the following Resolutions were passed;\n(a) Conversion and Re-registration of the company to a public company.\n(b) Increase in share capital from N100 million ordinary shares to N500 million ordinary shares.",
            question: "Which of these is not one of the alterations to be made in the Article of Association of Zion Nigeria Ltd.?",
            options: {
              a: "Any clause on qualification of company secretary must be amended to reflect that required for PLC.",
              b: "Any clause allowing written resolution for General Meeting must be deleted.",
              c: "Clause on restriction of share capital must be removed.",
              d: "The subscription column will be altered.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "Zion Nigeria Ltd was incorporated on 25th August, 2014. At its first Annual General Meeting in 2016, the following Resolutions were passed;\n(a) Conversion and Re-registration of the company to a public company.\n(b) Increase in share capital from N100 million ordinary shares to N500 million ordinary shares.",
            question: "The Resolution increasing the Share Capital of Zion Nig. Ltd must be filed at the CAC within:",
            options: {
              a: "30 days",
              b: "15 days",
              c: "14 days",
              d: "42 days",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Emerald Nigeria Limited was incorporated in 2013. The company now seeks to change its name to Favour Nigeria Limited.",
            question: "The procedure for change of name of the company includes the following except:",
            options: {
              a: "Search for availability and reservation of name",
              b: "Application to SEC to register the new name.",
              c: "Holding a General Meeting of the company",
              d: "Alteration of the company seal, certificates and letter heads of the company.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Emerald Nigeria Limited was incorporated in 2013. The company now seeks to change its name to Favour Nigeria Limited.",
            question: "The following are the documents that must be submitted to the CAC in order to validly change the name of the company except:",
            options: {
              a: "Copy of the special resolution",
              b: "Original Certificate of incorporation",
              c: "Memorandum and Articles of Association as attached to reflect the new name.",
              d: "Copy of the balance sheet of the company not exceeding 6 months.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Emerald Nigeria Limited was incorporated in 2013. The company now seeks to change its name to Favour Nigeria Limited.",
            question: "Upon successful change of name of the company, CAC is expected to do the following except:",
            options: {
              a: "Publication of change of name in a daily newspaper.",
              b: "Advertisement of change of name in the official gazette.",
              c: "Issuance of a new certificate of incorporation.",
              d: "Enter the new name of the company in the register of companies.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Emerald Nigeria Limited was incorporated in 2013. The company now seeks to change its name to Favour Nigeria Limited.",
            question: "Upon change of name of the company, the company is expected to do the following except:",
            options: {
              a: "Alter the memorandum and articles of association of the company reflecting the new name",
              b: "Alteration of the company seal, certificates and letter heads.",
              c: "Advertisement of change of name in a daily newspaper circulating nationwide.",
              d: "Application to Federal High Court to sanction the change of name.",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "Success Ventures PLC. with registered Office at No. 12, Nsude Road, 9th Mile Enugu State was incorporated to carry on the business of sale and supply of computers. A year after, it realized that the capital of company was not sufficient to run the business as planned. Consequently, the company offered its shares to the members of the public.",
            question: "What is the prescribed period for the Company to file return of Allotment upon completion of the public offer?",
            options: {
              a: "14 days",
              b: "30 days",
              c: "1 month",
              d: "42 days",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Success Ventures PLC. with registered Office at No. 12, Nsude Road, 9th Mile Enugu State was incorporated to carry on the business of sale and supply of computers. A year after, it realized that the capital of company was not sufficient to run the business as planned. Consequently, the company offered its shares to the members of the public.",
            question: "What is the prescribed time for the company to complete and deliver the share certificates to allotees?",
            options: {
              a: "40 days",
              b: "2 months",
              c: "3 months",
              d: "90 days",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Capital Gain Ventures Limited is a key player in the energy sector in Nigeria. The Board of Directors is divided along the line of the major political parties in Nigeria. They have failed to hold Board meetings or convene a general meeting of the company. There is evidence that the Chairman and the Managing Director are running the affairs of the company in a manner that is unfairly prejudicial and oppressive.",
            question: "Which of the following is not relevant for the prosecution of a suit arising from the above scenario in the court?",
            options: {
              a: "Companies Investigation Rules",
              b: "Federal High Court Rules",
              c: "Companies Proceedings Rules",
              d: "Winding up Rules",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "Capital Gain Ventures Limited is a key player in the energy sector in Nigeria. The Board of Directors is divided along the line of the major political parties in Nigeria. They have failed to hold Board meetings or convene a general meeting of the company. There is evidence that the Chairman and the Managing Director are running the affairs of the company in a manner that is unfairly prejudicial and oppressive.",
            question: "Which of the following will adequately address the alleged infraction of minorities' rights by the Managing Director and Chairman?",
            options: {
              a: "Derivative action",
              b: "Member's Direct Action",
              c: "Representative Action",
              d: "Third Party Action",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "Capital Gain Ventures Limited is a key player in the energy sector in Nigeria. The Board of Directors is divided along the line of the major political parties in Nigeria. They have failed to hold Board meetings or convene a general meeting of the company. There is evidence that the Chairman and the Managing Director are running the affairs of the company in a manner that is unfairly prejudicial and oppressive.",
            question: "The reliefs that the Court may grant when a petition on the ground of unfairly prejudicial and oppressive conduct is brought includes all except one:",
            options: {
              a: "Winding up of the company",
              b: "Order of derivative action",
              c: "Appointment of receiver Manager",
              d: "Directing investigation to be conducted by CAC.",
            },
            answer: "b",
          },
          {
            id: 15,
            context: null,
            question: "---------------- is saddled with the responsibility of making the Winding up Rules:",
            options: {
              a: "Chief Registrar, Federal High Court",
              b: "Chief Judge of Nigeria",
              c: "Chief Judge, Federal High Court",
              d: "Registrar general, Corporate Affairs Commission.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Your Law Office Externship programme at the Corporate solicitors with specialization in company incorporated by business advisory services among others",
            question: "The following are the business associations recognized under CAMA except:",
            options: {
              a: "Sole Proprietorship",
              b: "Partnership",
              c: "Company",
              d: "Incorporated Trustee.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "Your Law Office Externship programme at the Corporate solicitors with specialization in company incorporated by business advisory services among others",
            question: "The following are the contents of the Memorandum of Association of the company except:",
            options: {
              a: "Name Clause",
              b: "Object Clause",
              c: "Capital Clause",
              d: "Allotment Clause",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "Your Law Office Externship programme at the Corporate solicitors with specialization in company incorporated by business advisory services among others",
            question: "The incentives for locating a company within an area designated as economically disadvantaged area is:",
            options: {
              a: "7 years tax exemption",
              b: "3 years tax exemption",
              c: "Duty Draw Back",
              d: "Suspension scheme",
            },
            answer: "b",
          },
          {
            id: 19,
            context: "Your Law Office Externship programme at the Corporate solicitors with specialization in company incorporated by business advisory services among others",
            question: "Assuming the company obtains pioneer status in the course of carrying on business in Nigeria, the incentives available to the company is:",
            options: {
              a: "2 years tax exemption renewable for another 2 years",
              b: "3 years tax exemption subject to extension for another 2 years",
              c: "5 years tax exemption",
              d: "7 years tax exemption.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "Your Law Office Externship programme at the Corporate solicitors with specialization in company incorporated by business advisory services among others",
            question: "Assurances to the foreign partners to encourage them to invest directly in the company with foreign loan include the following except:",
            options: {
              a: "The repatriation of capital and profit",
              b: "Purchase of foreign currency at official rate from Central Bank of Nigeria",
              c: "Exemption from registering a company in Nigeria",
              d: "Prompt and adequate payment of compensation upon nationalization of the foreign investment.",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2018-july-property-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Mr. Powell Ukpatu is the Managing Director, Chief Executive Officer and majority shareholder in NK- Global Limited. The property used as the company's head office is registered in the name of the company. Mr. Powell Ukpatu has just taken a loan of N150 million from Trust Bank Plc, in his personal name, but plans to use the property housing his company's head office as security for the loan.",
            question: "In the above transaction, NK –Global Ltd. is the:",
            options: {
              a: "Surety",
              b: "Mortgagor",
              c: "Lender",
              d: "Guarantee",
            },
            answer: "d",
          },
          {
            id: 2,
            context: "Mr. Powell Ukpatu is the Managing Director, Chief Executive Officer and majority shareholder in NK- Global Limited. The property used as the company's head office is registered in the name of the company. Mr. Powell Ukpatu has just taken a loan of N150 million from Trust Bank Plc, in his personal name, but plans to use the property housing his company's head office as security for the loan.",
            question: "Assuming the head office of NK- Global is in Asaba, Delta State and the parties to the mortgage have now opted for a Legal mortgage, all the following are relevant EXCEPT:",
            options: {
              a: "Sub demise",
              b: "Charge by Deed expressed to be by way of Legal Mortgage",
              c: "Charge by Deed expressed to be by way of statutory Mortgage",
              d: "Statutory Charge.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "Mr. Powell Ukpatu is the Managing Director, Chief Executive Officer and majority shareholder in NK- Global Limited. The property used as the company's head office is registered in the name of the company. Mr. Powell Ukpatu has just taken a loan of N150 million from Trust Bank Plc, in his personal name, but plans to use the property housing his company's head office as security for the loan.",
            question: "Assuming Mr. Ogbosu Amofu acted as the solicitor to Mr. Ukpatu in the mortgage transaction. On conclusion of the transaction and following Mr. Ukpatu's refusal to settle Mr. Ogbosu Amofu's professional fees despite repeated written demands, Mr. Ogbosu has withheld all original documents belonging to Mr. Ukpatu, including the Deed of Legal Mortgage. Mr. Ukpatu is aggrieved. The conduct of Mr. Ogbosu in withholding Mr. Ukpatu's documents is:",
            options: {
              a: "Unprofessional",
              b: "Criminal",
              c: "Justified in law",
              d: "Based on agreement",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "Mr. Powell Ukpatu is the Managing Director, Chief Executive Officer and majority shareholder in NK- Global Limited. The property used as the company's head office is registered in the name of the company. Mr. Powell Ukpatu has just taken a loan of N150 million from Trust Bank Plc, in his personal name, but plans to use the property housing his company's head office as security for the loan.",
            question: "One of the following persons has an obligation to pay Capital Gains Tax in respect of the mortgage transaction.",
            options: {
              a: "Trust Bank PLC",
              b: "Mr. Powell Ukpatu",
              c: "NK-Global Ltd",
              d: "None of the above",
            },
            answer: "a",
          },
          {
            id: 5,
            context: "Mr. Powell Ukpatu is the Managing Director, Chief Executive Officer and majority shareholder in NK- Global Limited. The property used as the company's head office is registered in the name of the company. Mr. Powell Ukpatu has just taken a loan of N150 million from Trust Bank Plc, in his personal name, but plans to use the property housing his company's head office as security for the loan.",
            question: "Assuming Mr. Ogbosu acted as solicitor to both parties in the mortgage transaction, the formula for calculating his professional fees under the scale is:",
            options: {
              a: "One-quarter from the mortgagor and full from the mortgagee.",
              b: "One quarter from the mortgagee and full from the mortgagor.",
              c: "Half from the Mortgagor and full from the Mortgagee.",
              d: "Half from the Mortgagee and full from the mortgagee.",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Mr. Paul Bassey granted a term of 5 years over his four-bedroom bungalow at No. 10 Sabo, Ibadan, Oyo State to Mariam Tukur and used his three storey building at No. 49, Airport Road, Ikeja, Lagos as security in favour of Jewel Bank Plc for a loan of N8m.",
            question: "The document to be executed between Paul Bassey and Mariam Tukur as well as the solicitor to prepare the document would be:",
            options: {
              a: "A lease/lessor's solicitor",
              b: "A lease/lessee's solicitor",
              c: "A tenancy/agreement/land lord's solicitor",
              d: "A mortgage/mortgagor's solicitor.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "Mr. Paul Bassey granted a term of 5 years over his four-bedroom bungalow at No. 10 Sabo, Ibadan, Oyo State to Mariam Tukur and used his three storey building at No. 49, Airport Road, Ikeja, Lagos as security in favour of Jewel Bank Plc for a loan of N8m.",
            question: "Where Paul Bassey and Mariam Tukur are considering who to insure the property in the transaction, the following except one should be a factor to be considered:",
            options: {
              a: "Existing obligations",
              b: "The risk involved",
              c: "The nature of the demised premises.",
              d: "The insurance company.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Mr. Paul Bassey granted a term of 5 years over his four-bedroom bungalow at No. 10 Sabo, Ibadan, Oyo State to Mariam Tukur and used his three storey building at No. 49, Airport Road, Ikeja, Lagos as security in favour of Jewel Bank Plc for a loan of N8m.",
            question: "The appropriate clause to be inserted in the instrument to protect Mariam Tukur from being liable to pay rent after the destruction of the property is:",
            options: {
              a: "Abatement of rent clause",
              b: "Abatement of rent review clause",
              c: "Abatement of rent renewal clause",
              d: "Option to renew clause.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Mr. Paul Bassey granted a term of 5 years over his four-bedroom bungalow at No. 10 Sabo, Ibadan, Oyo State to Mariam Tukur and used his three storey building at No. 49, Airport Road, Ikeja, Lagos as security in favour of Jewel Bank Plc for a loan of N8m.",
            question: "To create a legal mortgage between Paul Bassey and Jewel Bank Plc, the following laws will apply except:",
            options: {
              a: "Mortgage and Property Law",
              b: "Property and Conveyancing Law",
              c: "Legal Practitioners Act",
              d: "Stamp Duties Act",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Mr. Paul Bassey granted a term of 5 years over his four-bedroom bungalow at No. 10 Sabo, Ibadan, Oyo State to Mariam Tukur and used his three storey building at No. 49, Airport Road, Ikeja, Lagos as security in favour of Jewel Bank Plc for a loan of N8m.",
            question: "Where the parties decide to create a legal mortgage by sub demise where the property is in Yenagoa, the Bank can exercise its power of sale, only if one of the following is inserted in the agreement.",
            options: {
              a: "Declaration of Trust",
              b: "Power of Attorney",
              c: "A and B",
              d: "None of the above",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Mr. Paul Bassey granted a term of 5 years over his four-bedroom bungalow at No. 10 Sabo, Ibadan, Oyo State to Mariam Tukur and used his three storey building at No. 49, Airport Road, Ikeja, Lagos as security in favour of Jewel Bank Plc for a loan of N8m.",
            question: "In the event that Mr. Paul Bassey defaults in repaying the mortgage sum and interest, the Bank can exercise its power of sale, if any of the following conditions are met except:",
            options: {
              a: "Notice requiring payment of the mortgage sum and interest has been served on the mortgagor and there is default of payment for three months.",
              b: "There has been breach of some provisions in the mortgage deed",
              c: "Some interests under the mortgage is in arrears and unpaid for two months",
              d: "Some interest under the mortgage is in arrears and unpaid for three months.",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "In December 2012, Dr. Mike Maigida of No. 20 Lamido Adamawa Way Yola, Adamawa State Nigeria, made a Will wherein he appointed Alhaji Usman Ike, Hajia Faruk Adebayo and Chief Nura Okenwa as his executors/executrix. After his death and burial in 2015, his will was read. However, the executors/executrix of his Will renounced the Will.",
            question: "In order to administer the estate of Dr. Mike Maigida",
            options: {
              a: "His executors/executrix have to apply for probate",
              b: "His executors/executrix have to apply for letters of administration with the Will annexed.",
              c: "Persons entitled to his estate have to apply for probate",
              d: "Persons entitled to his estate have to apply for letters of administration with the Will annexed.",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "In December 2012, Dr. Mike Maigida of No. 20 Lamido Adamawa Way Yola, Adamawa State Nigeria, made a Will wherein he appointed Alhaji Usman Ike, Hajia Faruk Adebayo and Chief Nura Okenwa as his executors/executrix. After his death and burial in 2015, his will was read. However, the executors/executrix of his Will renounced the Will.",
            question: "For Dr. Mike Maigida's Will to be valid, inter alia, it has to be:",
            options: {
              a: "Signed by at least two witnesses in his presence and that of each other.",
              b: "Signed by at the least two witnesses in the presence of a High Court Judge.",
              c: "Signed by Dr. Mike Maigida in the presence of at least two witnesses.",
              d: "A and B above.",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "In December 2012, Dr. Mike Maigida of No. 20 Lamido Adamawa Way Yola, Adamawa State Nigeria, made a Will wherein he appointed Alhaji Usman Ike, Hajia Faruk Adebayo and Chief Nura Okenwa as his executors/executrix. After his death and burial in 2015, his will was read. However, the executors/executrix of his Will renounced the Will.",
            question: "Apart from the Will, Dr. Mike Maigida could give his property to persons of his choice using:",
            options: {
              a: "Deed of Transfer",
              b: "Deed of Conveyance",
              c: "Deed of Gift",
              d: "All of the above",
            },
            answer: "c",
          },
          {
            id: 15,
            context: "As an extern in the law office of John Ebot & Associate, you perused a case file of Madam Koku, an illiterate who gave an authority to her solicitor to sell her property at Plot 770 Cadastral Layout, Wuse Abuja. In her will, she bequest the property to her first son Deji Koku.",
            question: "One of the following is correct:",
            options: {
              a: "The bequest to Deji Koku must contain an illiterate jurat.",
              b: "The instrument given to Madam Koku's solicitor must be by deed which must have illiterate jurat.",
              c: "The instrument of transfer should be endorsed by a High commissioner.",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 16,
            context: "As an extern in the law office of John Ebot & Associate, you perused a case file of Madam Koku, an illiterate who gave an authority to her solicitor to sell her property at Plot 770 Cadastral Layout, Wuse Abuja. In her will, she bequest the property to her first son Deji Koku.",
            question: "Assuming the bequest to Deji is for his life time and after which to his niece, the legal implication will be:",
            options: {
              a: "Deji can sell the property in his life time.",
              b: "Deji may bequeath it in his life time.",
              c: "Deji must give his niece in his life time",
              d: "Deji should be entitled to the property only during his life time.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "As an extern in the law office of John Ebot & Associate, you perused a case file of Madam Koku, an illiterate who gave an authority to her solicitor to sell her property at Plot 770 Cadastral Layout, Wuse Abuja. In her will, she bequest the property to her first son Deji Koku.",
            question: "Assuming before Madam Koku's death she sold the property through her solicitor, the property will be said to:",
            options: {
              a: "Adeem",
              b: "Abate",
              c: "Renounce",
              d: "Residuary",
            },
            answer: "a",
          },
          {
            id: 18,
            context: null,
            question: "Which of the following is incorrect about why physical inspection of a property in Ibadan is necessary?",
            options: {
              a: "Purchaser is deemed to have constructive notice of any existing encumbrance on property",
              b: "To avoid the effect of the doctrine of caveat emptor.",
              c: "To discover latest defects",
              d: "To discover patent defect.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: null,
            question: "Who is to prepare the contract of sale of land at the contract stage and, the final document of transfer on execution?",
            options: {
              a: "Vendor and Purchaser's solicitor",
              b: "Vendor's Solicitor and Lessee's solicitor.",
              c: "Vendor's Solicitor and Assignee's solicitor.",
              d: "Assignor and Assignee's solicitor.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: null,
            question: "After the vendor has deduced title, which of the following will not be discovered from the documents handed over?",
            options: {
              a: "All discharged mortgages and charges",
              b: "Number of tenants occupying the bungalow.",
              c: "Whether documents are well executed.",
              d: "Breaks in chain of devolution.",
            },
            answer: "b",
          },
        ],
      },
      {
        id: "2018-july-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Fola was an extern in the Law Firm of Okon & Co. In his Court log book, he made an entry about having witnessed \"a motion moved in terms\". During his portfolio assessment, one of the assessors read the entry and asked him to explain what that meant.",
            question: "Which of the under listed best explains what Fola meant?",
            options: {
              a: "The motion was moved in terms of the Court.",
              b: "The motion was moved with cost because Counsel was late to Court.",
              c: "The motion was harmless and not opposed and therefore Counsel moved it in terms of the motion paper, without be labouring it.",
              d: "The Court gave leave for the motion to be moved.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Fola was an extern in the Law Firm of Okon & Co. In his Court log book, he made an entry about having witnessed \"a motion moved in terms\". During his portfolio assessment, one of the assessors read the entry and asked him to explain what that meant.",
            question: "Fola made reference to another term she heard Counsel use in Court \"Counsel should refrain from undressing the Court\". That statement or term meant:",
            options: {
              a: "Counsel should not disrespect the court.",
              b: "Counsel should refrain from leaving the Court room after the completion of his matter if Counsel present in Court will be less than two.",
              c: "Counsel must not remove his wig and gown after the completion of his matter, while still within the Court room.",
              d: "Counsel must not remove from the Court any of its equipment or furniture.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "Ude Okonkwo successfully completed his Law Office Attachment in the office of A.O. Okwor, SAN. In the course of his portfolio assessment, he told the panel that his Principal testified in Court in one of the Civil cases he was handling; that his Principal refused two briefs brought by one company; that an accused person, Joseph Okiri, admitted the commission of the offence he was charged with before his Principal in Chambers; his Principal visited the Judge who was presiding over one of his cases and they discussed the case during the visit and that his Principal appeared alone in the open Court during a trial of one of his cases.",
            question: "One of the following is correct concerning the activities of Mr. Okwor as a witness in the suit:",
            options: {
              a: "His testimony in the case must be corroborated by another witness.",
              b: "His testimony is not admissible.",
              c: "He ought not to have accepted the brief if he knew or ought reasonably to know that he was going to act as a witness in the suit.",
              d: "He should charge professional fees for testifying in the suit.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "Ude Okonkwo successfully completed his Law Office Attachment in the office of A.O. Okwor, SAN. In the course of his portfolio assessment, he told the panel that his Principal testified in Court in one of the Civil cases he was handling; that his Principal refused two briefs brought by one company; that an accused person, Joseph Okiri, admitted the commission of the offence he was charged with before his Principal in Chambers; his Principal visited the Judge who was presiding over one of his cases and they discussed the case during the visit and that his Principal appeared alone in the open Court during a trial of one of his cases.",
            question: "Mr. Okwor may be permitted by the Rules of Professional Conduct to testify in the suit in the following situations, except:",
            options: {
              a: "Where his testimony relates solely to a matter of formality.",
              b: "Where he obtains the consent of the General Council of the Bar before testifying.",
              c: "Where his testimony relates solely to the nature and value of legal services rendered by him.",
              d: "Where his refusal to testify would work hardship on the client.",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "Ude Okonkwo successfully completed his Law Office Attachment in the office of A.O. Okwor, SAN. In the course of his portfolio assessment, he told the panel that his Principal testified in Court in one of the Civil cases he was handling; that his Principal refused two briefs brought by one company; that an accused person, Joseph Okiri, admitted the commission of the offence he was charged with before his Principal in Chambers; his Principal visited the Judge who was presiding over one of his cases and they discussed the case during the visit and that his Principal appeared alone in the open Court during a trial of one of his cases.",
            question: "After the admission of the offence by his client in his Chambers, Mr. Okwor my take the following steps in Court during trial, except:",
            options: {
              a: "Try to discredit prosecution witnesses through cross-examination.",
              b: "Allow the client to plead not guilty and leave the prosecution to prove the charge.",
              c: "Ask the client to plead guilty to the charge and ask for the mitigation of the sentence.",
              d: "Call witnesses to establish alibi.",
            },
            answer: "d",
          },
          {
            id: 6,
            context: "Ude Okonkwo successfully completed his Law Office Attachment in the office of A.O. Okwor, SAN. In the course of his portfolio assessment, he told the panel that his Principal testified in Court in one of the Civil cases he was handling; that his Principal refused two briefs brought by one company; that an accused person, Joseph Okiri, admitted the commission of the offence he was charged with before his Principal in Chambers; his Principal visited the Judge who was presiding over one of his cases and they discussed the case during the visit and that his Principal appeared alone in the open Court during a trial of one of his cases.",
            question: "Mr. Okwor's rejection of the briefs may be consistent with the Rules of Professional Conduct in the following cases, except:",
            options: {
              a: "Where inadequate professional fee was offered by the company.",
              b: "He is a director in the company and the briefs involved litigation.",
              c: "He is a shareholder in the company.",
              d: "If is likely that he would give evidence on the merits of the case in Court.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Ude Okonkwo successfully completed his Law Office Attachment in the office of A.O. Okwor, SAN. In the course of his portfolio assessment, he told the panel that his Principal testified in Court in one of the Civil cases he was handling; that his Principal refused two briefs brought by one company; that an accused person, Joseph Okiri, admitted the commission of the offence he was charged with before his Principal in Chambers; his Principal visited the Judge who was presiding over one of his cases and they discussed the case during the visit and that his Principal appeared alone in the open Court during a trial of one of his cases.",
            question: "Mr. Okwor may properly appear in open Court to conduct his cases in any of the following save one:",
            options: {
              a: "He must appear with another Senior Advocate of Nigeria and a Junior Counsel in his law office.",
              b: "He may appear alone to conduct a criminal case in open Court.",
              c: "He should appear with Senior Advocate of Nigeria or a Junior Counsel in civil cases.",
              d: "He may appear with three Senior Advocates of Nigeria and a Member of Body of Benchers.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Fola wrote a reflective essay titled: \"The Management and Organization of the Law Firm where I was placed\". In the essay, he observed that Okon Idom Law Office was organized as a sole Practitioner ship. This gave the Law Firm the advantages under listed, except:",
            question: "Fill in the correct option.",
            options: {
              a: "Fast decision making",
              b: "Professional isolation",
              c: "Proprietor takes credit for successes of the firm.",
              d: "He enjoys all the profits from the office.",
            },
            answer: "b",
          },
          {
            id: 9,
            context: "During the externship, Fola was opportuned one day to follow his Principal to the Abuja Multi-door Courthouse (AMDCH) where the parties succeeded in reaching a mediated agreement. His Principal explained to him that enforcement of the mediated agreement would be through all but one of the following:",
            question: "Which of the following is NOT a means of enforcing the mediated agreement?",
            options: {
              a: "Seeking permission of the Chief Judge of the FCT.",
              b: "Litigation",
              c: "Consent judgment",
              d: "Filing of terms of settlement.",
            },
            answer: "b",
          },
          {
            id: 10,
            context: null,
            question: "Under the Nigerian law, all but one of the following is the exclusive right of a Legal Practitioner:",
            options: {
              a: "To be appointed as the Attorney-General of the Federation and Minister of Justice of the Federation and States.",
              b: "To be made a Notary Public",
              c: "To be appointed a Judge of the Customary Court of Appeal of a State or FCT.",
              d: "To draft instrument of transfer of title to land for consideration.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: null,
            question: "Assuming your Field Supervisor has completed the work but Mr. Usman Amechi failed to pay the professional fees, your Field Supervisor can only sue Mr. Amechi if he has served ---------and waited for a period of-------- before bringing the action:",
            options: {
              a: "Bill of charges and one month",
              b: "Bill of charges and 30 days.",
              c: "Bill of assessment and one month",
              d: "Bill of lading and 30 days",
            },
            answer: "a",
          },
          {
            id: 12,
            context: null,
            question: "Assuming Mr. Usman Amechi contested the Bill served on him for the services rendered, he could opt for one of the following:",
            options: {
              a: "Bills of costs review.",
              b: "File an action in court to mandate your Field Supervisor to prove the bill.",
              c: "Request for taxation of the bill",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: null,
            question: "Fola noted in his Law Firm log Book that the most effective Personal reminder system used by the practitioners at Okon & Co. was diary and they kept all the under listed diaries except:",
            options: {
              a: "Office (desk) diary",
              b: "Personal diary (pocket size)",
              c: "Firm diary (desk size)",
              d: "Court diary.",
            },
            answer: "d",
          },
          {
            id: 14,
            context: null,
            question: "The law firm of Otalo & Co. made certain resolutions recently, one of which was to publish the bio-data of all its lawyers in a reputable law list as a means of improving its clientele. As an extern in the law firm, you were asked to itemize the information to be published in the law list. Which of the following does not qualify to be published in the law list?",
            options: {
              a: "The lawyers name, address, email address and year of call",
              b: "The lawyer's name, any public or quasi-public office held and post of honour.",
              c: "The lawyer's name, email address, any public office held, notable cases handled and schools attended",
              d: "The lawyer's name, email address and position held in the NBA and in a legal scientific society.",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "The Secretary in the law firm where Beatrice was an extern is interested in studying law someday. She asked Beatrice to give her a brief history of the legal profession. Beatrice told her about the first, second and third periods in the history of the legal profession, from (15)--------. Beatrice listed for her the deficiencies which an English trained lawyer practicing in Nigeria then encountered, being the under listed except (16)-------- The secretary then sought to know the bodies that regulate the legal profession and their responsibilities. Beatrice listed them and their responsibilities. She explained in detail the functions of the Nigerian Bar Association which, are the following, except (17)-----------. Beatrice explained to the Secretary that it is unprofessional for a lawyer to take briefs outside a law office. She gave reasons for establishing a law office, which are stated below, except (18)------------ The Secretary was newly employed and Beatrice explained to her the various filing systems a law office can adopt, and they include the following except (19)------",
            question: "Fill in blank (15) of the passage.",
            options: {
              a: "1861 to 1912, 1912 to 1961, and 1961 to date respectively.",
              b: "1863 to 1913, 1913 to 1964, and 1964 to date respectively.",
              c: "1876 to 1914, 1914 to 1962, and 1962 to date respectively.",
              d: "1874 to 1914, 1914 to 1962, and 1962 to date respectively.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "The Secretary in the law firm where Beatrice was an extern is interested in studying law someday. She asked Beatrice to give her a brief history of the legal profession. Beatrice told her about the first, second and third periods in the history of the legal profession, from (15)--------. Beatrice listed for her the deficiencies which an English trained lawyer practicing in Nigeria then encountered, being the under listed except (16)-------- The secretary then sought to know the bodies that regulate the legal profession and their responsibilities. Beatrice listed them and their responsibilities. She explained in detail the functions of the Nigerian Bar Association which, are the following, except (17)-----------. Beatrice explained to the Secretary that it is unprofessional for a lawyer to take briefs outside a law office. She gave reasons for establishing a law office, which are stated below, except (18)------------ The Secretary was newly employed and Beatrice explained to her the various filing systems a law office can adopt, and they include the following except (19)------",
            question: "Fill in blank (16) of the passage.",
            options: {
              a: "they studied English cases which are more binding in Nigerian counts.",
              b: "They studied under the unitary system of government while Nigerian practices the Federal system of government.",
              c: "There was a lack of appreciation of the Local laws in Nigeria.",
              d: "There was a lack of appreciation of legal procedure in Nigeria.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "The Secretary in the law firm where Beatrice was an extern is interested in studying law someday. She asked Beatrice to give her a brief history of the legal profession. Beatrice told her about the first, second and third periods in the history of the legal profession, from (15)--------. Beatrice listed for her the deficiencies which an English trained lawyer practicing in Nigeria then encountered, being the under listed except (16)-------- The secretary then sought to know the bodies that regulate the legal profession and their responsibilities. Beatrice listed them and their responsibilities. She explained in detail the functions of the Nigerian Bar Association which, are the following, except (17)-----------. Beatrice explained to the Secretary that it is unprofessional for a lawyer to take briefs outside a law office. She gave reasons for establishing a law office, which are stated below, except (18)------------ The Secretary was newly employed and Beatrice explained to her the various filing systems a law office can adopt, and they include the following except (19)------",
            question: "Fill in blank (17) of the passage.",
            options: {
              a: "Keeps data base of legal practitioners who have law offices at the various branches of the NBA nationwide.",
              b: "Promotes good relationship among members of the profession.",
              c: "Takes necessary measures for the maintenance of the traditional values of the legal profession by exercising disciplinary jurisdiction over erring members of the profession through its committee known as LPDC.",
              d: "Investigates complaints against erring legal practitioners through its committee, and if a prima facie case is made, forward same to LPDC.",
            },
            answer: "c",
          },
          {
            id: 18,
            context: "The Secretary in the law firm where Beatrice was an extern is interested in studying law someday. She asked Beatrice to give her a brief history of the legal profession. Beatrice told her about the first, second and third periods in the history of the legal profession, from (15)--------. Beatrice listed for her the deficiencies which an English trained lawyer practicing in Nigeria then encountered, being the under listed except (16)-------- The secretary then sought to know the bodies that regulate the legal profession and their responsibilities. Beatrice listed them and their responsibilities. She explained in detail the functions of the Nigerian Bar Association which, are the following, except (17)-----------. Beatrice explained to the Secretary that it is unprofessional for a lawyer to take briefs outside a law office. She gave reasons for establishing a law office, which are stated below, except (18)------------ The Secretary was newly employed and Beatrice explained to her the various filing systems a law office can adopt, and they include the following except (19)------",
            question: "Fill in blank (18) of the passage.",
            options: {
              a: "Profitability",
              b: "Necessary",
              c: "Independence",
              d: "Comparison",
            },
            answer: "d",
          },
          {
            id: 19,
            context: "The Secretary in the law firm where Beatrice was an extern is interested in studying law someday. She asked Beatrice to give her a brief history of the legal profession. Beatrice told her about the first, second and third periods in the history of the legal profession, from (15)--------. Beatrice listed for her the deficiencies which an English trained lawyer practicing in Nigeria then encountered, being the under listed except (16)-------- The secretary then sought to know the bodies that regulate the legal profession and their responsibilities. Beatrice listed them and their responsibilities. She explained in detail the functions of the Nigerian Bar Association which, are the following, except (17)-----------. Beatrice explained to the Secretary that it is unprofessional for a lawyer to take briefs outside a law office. She gave reasons for establishing a law office, which are stated below, except (18)------------ The Secretary was newly employed and Beatrice explained to her the various filing systems a law office can adopt, and they include the following except (19)------",
            question: "Fill in blank (19) of the passage.",
            options: {
              a: "Numerical",
              b: "Alphabetical",
              c: "Tropical",
              d: "Geographical",
            },
            answer: "c",
          },
          {
            id: 20,
            context: "Benson, an extern observed that at Okon & Co., Information Technology was deployed to great advantage. As a result, whenever his principal assigned him to carry out legal research, he learned to use all but one of the following for easier and faster access to information and resources:",
            question: "Which of the following is NOT used for easier and faster access to information and resources?",
            options: {
              a: "Search engines",
              b: "Online law libraries",
              c: "Twitter",
              d: "Legal websites.",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2018-july-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "At the Law Firm of Fidelity Chambers where you did your externship programme, your Principal informed your that one of his clients, Madam Sade, a very popular philanthropist who lives in Lagos, lent her childhood friend Adaora, who also lives in Lagos the sum of N12 million  to set up her mechanized farming business.\n\nThe loan agreement was entered into in Lagos and guaranteed by Adaora's boy friend, Sulu Anga who resides in Abuja.  Adaora has defaulted in repaying the loan despite several demands, by Madam Sade. Madam Sade has therefore decided to commence an action at the Lagos High court against both Adaora and Sulu Anga in order to recover the money from them.",
            question: "Assuming that she desires to adopt the fastest procedure to get judgment expeditiously against the defendants, which of the following procedures will be most appropriate?",
            options: {
              a: "Summary judgment under Order 22.",
              b: "Summary judgment under Order 19",
              c: "Summary judgment under Order 11",
              d: "Undefended list under Order 23.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "At the Law Firm of Fidelity Chambers where you did your externship programme, your Principal informed your that one of his clients, Madam Sade, a very popular philanthropist who lives in Lagos, lent her childhood friend Adaora, who also lives in Lagos the sum of N12 million  to set up her mechanized farming business.\n\nThe loan agreement was entered into in Lagos and guaranteed by Adaora's boy friend, Sulu Anga who resides in Abuja.  Adaora has defaulted in repaying the loan despite several demands, by Madam Sade. Madam Sade has therefore decided to commence an action at the Lagos High court against both Adaora and Sulu Anga in order to recover the money from them.",
            question: "When commencing the action, the claimant is not required to file one of the following documents:",
            options: {
              a: "Statement of claim.",
              b: "List and copies of documents to be relied upon",
              c: "Deposition of witnesses on oath.",
              d: "List of witnesses to be called at the trial.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "At the Law Firm of Fidelity Chambers where you did your externship programme, your Principal informed your that one of his clients, Madam Sade, a very popular philanthropist who lives in Lagos, lent her childhood friend Adaora, who also lives in Lagos the sum of N12 million  to set up her mechanized farming business.\n\nThe loan agreement was entered into in Lagos and guaranteed by Adaora's boy friend, Sulu Anga who resides in Abuja.  Adaora has defaulted in repaying the loan despite several demands, by Madam Sade. Madam Sade has therefore decided to commence an action at the Lagos High court against both Adaora and Sulu Anga in order to recover the money from them.",
            question: "Service of the originating processes on the defendants must be done by:",
            options: {
              a: "Dropping same with an adult member found in the premises where they reside.",
              b: "Serving them personally on the defendants.",
              c: "Serving them through an advertisement in a newspaper with wide circulation.",
              d: "Any of the above.",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "At the Law Firm of Fidelity Chambers where you did your externship programme, your Principal informed your that one of his clients, Madam Sade, a very popular philanthropist who lives in Lagos, lent her childhood friend Adaora, who also lives in Lagos the sum of N12 million  to set up her mechanized farming business.\n\nThe loan agreement was entered into in Lagos and guaranteed by Adaora's boy friend, Sulu Anga who resides in Abuja.  Adaora has defaulted in repaying the loan despite several demands, by Madam Sade. Madam Sade has therefore decided to commence an action at the Lagos High court against both Adaora and Sulu Anga in order to recover the money from them.",
            question: "To effect service of the originating processes on Sulu Anga in Abuja? The claimant is required to comply with one of the following:",
            options: {
              a: "The writ of summons must be endorsed by the Registrar that it is to served out of Lagos State and in the Federal Capital Territory, Abuja.",
              b: "The defendant is to be given a period of not less than 30 days from the date of service within which to enter an appearance in the matter or such longer period as prescribed by the rules under which the writ is issued.",
              c: "(a) and (b)",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "At the Law Firm of Fidelity Chambers where you did your externship programme, your Principal informed your that one of his clients, Madam Sade, a very popular philanthropist who lives in Lagos, lent her childhood friend Adaora, who also lives in Lagos the sum of N12 million  to set up her mechanized farming business.\n\nThe loan agreement was entered into in Lagos and guaranteed by Adaora's boy friend, Sulu Anga who resides in Abuja.  Adaora has defaulted in repaying the loan despite several demands, by Madam Sade. Madam Sade has therefore decided to commence an action at the Lagos High court against both Adaora and Sulu Anga in order to recover the money from them.",
            question: "Assuming Adaora is also a yearly tenant in Madam Sade's 3 Bedrooms flat at 3, Kando Street, Apapa, Lagos and she wants to recover possession of the property from her, she must do one of the following to properly recover possession:",
            options: {
              a: "Issue her with a 6 months' notice to quit expiring on the eve of her tenancy.",
              b: "Issue her with a 6 months' notice to quit expiring any time during or after the expiration of her tenancy.",
              c: "Issue her with a 3 months' notice to quit, to expiring on the anniversary of her tenancy.",
              d: "Issue her with a 7 days' notice of owner's intention to apply to recover possession.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "During your externship programme, Mrs. Agaga Okafor briefed your Field Supervisor, Mr. Kola Ken that the Economic and Financial Crimes Commission on the 28th June, 2018 arrested and detained her husband on the allegation of money laundering. All efforts made to secure his release has proved abortive. Mr. Kola Ken has instructed Mr. Tijani Bello, a colleague in the Law firm to prepare the processes that would be filed in court to challenge the action of the Commission.",
            question: "In which of the under listed will the action be filed?",
            options: {
              a: "Magistrate court",
              b: "National Industrial Court",
              c: "State High Court",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "During your externship programme, Mrs. Agaga Okafor briefed your Field Supervisor, Mr. Kola Ken that the Economic and Financial Crimes Commission on the 28th June, 2018 arrested and detained her husband on the allegation of money laundering. All efforts made to secure his release has proved abortive. Mr. Kola Ken has instructed Mr. Tijani Bello, a colleague in the Law firm to prepare the processes that would be filed in court to challenge the action of the Commission.",
            question: "Which of the following best describes the mode to be adopted to commence the action?",
            options: {
              a: "Petition",
              b: "Writ of summons.",
              c: "Originating motion",
              d: "All of the above",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "During your externship programme, Mrs. Agaga Okafor briefed your Field Supervisor, Mr. Kola Ken that the Economic and Financial Crimes Commission on the 28th June, 2018 arrested and detained her husband on the allegation of money laundering. All efforts made to secure his release has proved abortive. Mr. Kola Ken has instructed Mr. Tijani Bello, a colleague in the Law firm to prepare the processes that would be filed in court to challenge the action of the Commission.",
            question: "One of the options below describes the processes that would accompany the mode you identified in (8) above",
            options: {
              a: "Originating application, statement setting out the name and description of the applicant; the relief sought and the ground; affidavit and written address.",
              b: "Statement setting out the name and description of the applicant, the relief sought and the ground; affidavit and written address.",
              c: "Statement setting out the name and description of the applicant, the relief sought and the ground and a written address.",
              d: "Statement setting out the name and description of the applicant, the relief sought and the ground and an affidavit.",
            },
            answer: "b",
          },
          {
            id: 9,
            context: "During your externship programme, Mrs. Agaga Okafor briefed your Field Supervisor, Mr. Kola Ken that the Economic and Financial Crimes Commission on the 28th June, 2018 arrested and detained her husband on the allegation of money laundering. All efforts made to secure his release has proved abortive. Mr. Kola Ken has instructed Mr. Tijani Bello, a colleague in the Law firm to prepare the processes that would be filed in court to challenge the action of the Commission.",
            question: "Assuming the Commission is served with the processes you identified in (8) and (9) above and intends to defend the action, one of the following describes the processes it would file.",
            options: {
              a: "Counter affidavit and reply on points of law.",
              b: "Written address, counter affidavit and reply on points of law.",
              c: "written address, and a counter affidavit.",
              d: "written address, and a further affidavit.",
            },
            answer: "c",
          },
          {
            id: 10,
            context: null,
            question: "Which of the following option describes when the case will be slated for hearing from the date of filing?",
            options: {
              a: "5 days.",
              b: "14 days.",
              c: "8 days.",
              d: "7 days.",
            },
            answer: "bonus",
          },
          {
            id: 11,
            context: "During your Law Office Placement, you accompanied your Principal, Mr. Ben Davies, SAN, to the Lagos Division of the Lagos High Court in respect of a Civil action against his client on getting to Court, the Learned Silk asked you to check the...........................11 to know what number the case was on the list. You discovered that the case was listed as number 9.\n\nWhen the Court started sitting at 9 a.m., the Presiding Judge called on the Learned Silk to ...........(12)...........his case after which the case was.......(13).......\n\nIt was then discovered that neither the claimant nor his Counsel was in Court, whereupon the Learned Silk applied that the case be .... (14) ........... The Learned Judge went through the case file and discovered that the claimant and his Counsel had never been absent from Court. His Lordship expressed the belief that since the case was listed for definite hearing, the claimant and his Counsel were very likely to attend Court that day. His Lordship therefore decided to...........(15) the case till 11.00 a.m.",
            question: "(11)",
            options: {
              a: "The cause list.",
              b: "The Court list.",
              c: "Barristers' list",
              d: "All of the above",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "During your Law Office Placement, you accompanied your Principal, Mr. Ben Davies, SAN, to the Lagos Division of the Lagos High Court in respect of a Civil action against his client on getting to Court, the Learned Silk asked you to check the...........................11 to know what number the case was on the list. You discovered that the case was listed as number 9.\n\nWhen the Court started sitting at 9 a.m., the Presiding Judge called on the Learned Silk to ...........(12)...........his case after which the case was.......(13).......\n\nIt was then discovered that neither the claimant nor his Counsel was in Court, whereupon the Learned Silk applied that the case be .... (14) ........... The Learned Judge went through the case file and discovered that the claimant and his Counsel had never been absent from Court. His Lordship expressed the belief that since the case was listed for definite hearing, the claimant and his Counsel were very likely to attend Court that day. His Lordship therefore decided to...........(15) the case till 11.00 a.m.",
            question: "(12)",
            options: {
              a: "Identify.",
              b: "Mention.",
              c: "Call",
              d: "Point out.",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "During your Law Office Placement, you accompanied your Principal, Mr. Ben Davies, SAN, to the Lagos Division of the Lagos High Court in respect of a Civil action against his client on getting to Court, the Learned Silk asked you to check the...........................11 to know what number the case was on the list. You discovered that the case was listed as number 9.\n\nWhen the Court started sitting at 9 a.m., the Presiding Judge called on the Learned Silk to ...........(12)...........his case after which the case was.......(13).......\n\nIt was then discovered that neither the claimant nor his Counsel was in Court, whereupon the Learned Silk applied that the case be .... (14) ........... The Learned Judge went through the case file and discovered that the claimant and his Counsel had never been absent from Court. His Lordship expressed the belief that since the case was listed for definite hearing, the claimant and his Counsel were very likely to attend Court that day. His Lordship therefore decided to...........(15) the case till 11.00 a.m.",
            question: "(13)",
            options: {
              a: "Mentioned out of turn.",
              b: "Called out of turn.",
              c: "Announced out of order.",
              d: "Any of the above",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "During your Law Office Placement, you accompanied your Principal, Mr. Ben Davies, SAN, to the Lagos Division of the Lagos High Court in respect of a Civil action against his client on getting to Court, the Learned Silk asked you to check the...........................11 to know what number the case was on the list. You discovered that the case was listed as number 9.\n\nWhen the Court started sitting at 9 a.m., the Presiding Judge called on the Learned Silk to ...........(12)...........his case after which the case was.......(13).......\n\nIt was then discovered that neither the claimant nor his Counsel was in Court, whereupon the Learned Silk applied that the case be .... (14) ........... The Learned Judge went through the case file and discovered that the claimant and his Counsel had never been absent from Court. His Lordship expressed the belief that since the case was listed for definite hearing, the claimant and his Counsel were very likely to attend Court that day. His Lordship therefore decided to...........(15) the case till 11.00 a.m.",
            question: "(14)",
            options: {
              a: "Dismissed for lack of seriousness of claimant and his counsel.",
              b: "Struck out in the absence of claimant and his counsel.",
              c: "Struck out for lack diligent prosecution.",
              d: "Dismissed for lateness of claimant and his counsel.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "During your Law Office Placement, you accompanied your Principal, Mr. Ben Davies, SAN, to the Lagos Division of the Lagos High Court in respect of a Civil action against his client on getting to Court, the Learned Silk asked you to check the...........................11 to know what number the case was on the list. You discovered that the case was listed as number 9.\n\nWhen the Court started sitting at 9 a.m., the Presiding Judge called on the Learned Silk to ...........(12)...........his case after which the case was.......(13).......\n\nIt was then discovered that neither the claimant nor his Counsel was in Court, whereupon the Learned Silk applied that the case be .... (14) ........... The Learned Judge went through the case file and discovered that the claimant and his Counsel had never been absent from Court. His Lordship expressed the belief that since the case was listed for definite hearing, the claimant and his Counsel were very likely to attend Court that day. His Lordship therefore decided to...........(15) the case till 11.00 a.m.",
            question: "(15)",
            options: {
              a: "reschedule.",
              b: "Step down.",
              c: "Suspend.",
              d: "Stand down.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "During your externship the services of your Principal was retained in an action brought in respect of the election to the office of the Governor of Oyo State. The Independent National Electoral Commission had on 15th April, 2018 declared the result of the election, thereby returning the candidate of the Upper Nigeria Congress as the winner. Aggrieved by the declaration, the candidate for Champion Party of Nigeria has filed an action at the Governorship Election Tribunal.  In the course of the cross-examination of the witnesses, you observed that your Principal employed three techniques. After the hearing judgment was delivered.",
            question: "The Governorship Electoral Tribunal will be properly constituted by:",
            options: {
              a: "3 members including the Chairman",
              b: "5 members including the Chairman",
              c: "9 members including the Chairman",
              d: "1 member only.",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "During your externship the services of your Principal was retained in an action brought in respect of the election to the office of the Governor of Oyo State. The Independent National Electoral Commission had on 15th April, 2018 declared the result of the election, thereby returning the candidate of the Upper Nigeria Congress as the winner. Aggrieved by the declaration, the candidate for Champion Party of Nigeria has filed an action at the Governorship Election Tribunal.  In the course of the cross-examination of the witnesses, you observed that your Principal employed three techniques. After the hearing judgment was delivered.",
            question: "The three cross-examination techniques applied by your Principal were:",
            options: {
              a: "Confrontation, proving and co-operative.",
              b: "Probing, win-win and insinuation",
              c: "Confrontation, probing and insinuation.",
              d: "Probing, close and open question.",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "During your externship the services of your Principal was retained in an action brought in respect of the election to the office of the Governor of Oyo State. The Independent National Electoral Commission had on 15th April, 2018 declared the result of the election, thereby returning the candidate of the Upper Nigeria Congress as the winner. Aggrieved by the declaration, the candidate for Champion Party of Nigeria has filed an action at the Governorship Election Tribunal.  In the course of the cross-examination of the witnesses, you observed that your Principal employed three techniques. After the hearing judgment was delivered.",
            question: "The judgment of the above tribunal should be delivered:",
            options: {
              a: "90 days from the date of declaration of results of the election.",
              b: "180 days from the date of the filing of the petition.",
              c: "90 days from the date of filing of the petition.",
              d: "180 days from the date of declaration of result of the election.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "During your externship the services of your Principal was retained in an action brought in respect of the election to the office of the Governor of Oyo State. The Independent National Electoral Commission had on 15th April, 2018 declared the result of the election, thereby returning the candidate of the Upper Nigeria Congress as the winner. Aggrieved by the declaration, the candidate for Champion Party of Nigeria has filed an action at the Governorship Election Tribunal.  In the course of the cross-examination of the witnesses, you observed that your Principal employed three techniques. After the hearing judgment was delivered.",
            question: "Appeal against the decision of the Tribunal should be heard within:",
            options: {
              a: "60 days from the declaration of result of election.",
              b: "21 days from the date of the delivery of judgment by the Tribunal.",
              c: "60 days from the date of delivery of the judgment by the Tribunal.",
              d: "21 days from the declaration of result of election.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "During your externship the services of your Principal was retained in an action brought in respect of the election to the office of the Governor of Oyo State. The Independent National Electoral Commission had on 15th April, 2018 declared the result of the election, thereby returning the candidate of the Upper Nigeria Congress as the winner. Aggrieved by the declaration, the candidate for Champion Party of Nigeria has filed an action at the Governorship Election Tribunal.  In the course of the cross-examination of the witnesses, you observed that your Principal employed three techniques. After the hearing judgment was delivered.",
            question: "If the petition was filed against the declaration of result in an election in the National Assembly, the ultimate appellate court would be:",
            options: {
              a: "The Supreme Court.",
              b: "The Court of Appeal.",
              c: "The Election tribunal Appellate Tribunal.",
              d: "The Federal High Court.",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2018-july-criminal-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: null,
            question: "From your observations, in what order were defendants arraigned?",
            options: {
              a: "The accused was placed in the dock fettered, the charge was read to him and he was asked to plead.",
              b: "The accused was placed in the dock unfettered; the charge was read to him and he was asked to plead.",
              c: "The charge was read to the accused and he was asked to plead.",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 2,
            context: null,
            question: "During bail applications, counsel to the defendants concluded by saying:",
            options: {
              a: "My Lord, we urge the honourable court to grant our application as prayed.",
              b: "My Lord, bail is the right of the accused person.",
              c: "My Lord, kindly grant our request.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 3,
            context: null,
            question: "Before the testimony of each witness, the judge would ask the registrar to:",
            options: {
              a: "Put the witness on oath",
              b: "Warn the witness sternly not to mislead the court.",
              c: "Inform the witness about the courts rules and regulations.",
              d: "All of above.",
            },
            answer: "a",
          },
          {
            id: 4,
            context: null,
            question: "You observed that during the examination in chief of the persecution witness (PWI) the prosecution counsel employed more of:",
            options: {
              a: "Close ended questions",
              b: "Open ended questions",
              c: "Balanced questions",
              d: "All of the above",
            },
            answer: "b",
          },
          {
            id: 5,
            context: null,
            question: "The confessional statement of defendants was tendered by the prosecution through:",
            options: {
              a: "The investigating police officer",
              b: "The Defendants",
              c: "The Defendants' spouses",
              d: "Eye Witnesses.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: null,
            question: "The defence counsel objected to the attempt to re-examined PWI on the ground that:",
            options: {
              a: "There was no ambiguity form the cross examination.",
              b: "The prosecution covered the ground during examination in chief.",
              c: "There was no ex-improviso matter.",
              d: "All of the above.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "In the course of your Court Externship in Bwari, Federal Capital Territory, one of the activities you recorded in your Log Book was the trial of Mary and Aisha on a one count Information of conspiracy to commit Culpable Homicide Punishable with Death of their former friend, Esther. You stated that Mary pleaded \"guilty with reason,\" while Aisha pleaded \"guilty'. At the conclusion of trial, both defendants were convicted.",
            question: "Assuming you were the defence counsel, what will be your objection to the information?",
            options: {
              a: "That the consent of the Judge was not sought and obtained before the Information was filed",
              b: "That the information was bad for misjoinder of offences",
              c: "That the information was bad for misjoinder of offenders",
              d: "That the information was bad for duplicity.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "In the course of your Court Externship in Bwari, Federal Capital Territory, one of the activities you recorded in your Log Book was the trial of Mary and Aisha on a one count Information of conspiracy to commit Culpable Homicide Punishable with Death of their former friend, Esther. You stated that Mary pleaded \"guilty with reason,\" while Aisha pleaded \"guilty'. At the conclusion of trial, both defendants were convicted.",
            question: "In respect of the plea of Mary, the trial Judge will:",
            options: {
              a: "Record a plea of 'guilty\"",
              b: "Record a plea of \"not guilty\"",
              c: "Investigate whether it is act of malice or visitation of God.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 9,
            context: "In the course of your Court Externship in Bwari, Federal Capital Territory, one of the activities you recorded in your Log Book was the trial of Mary and Aisha on a one count Information of conspiracy to commit Culpable Homicide Punishable with Death of their former friend, Esther. You stated that Mary pleaded \"guilty with reason,\" while Aisha pleaded \"guilty'. At the conclusion of trial, both defendants were convicted.",
            question: "In respect of the plea of Aisha the trial Judge will:",
            options: {
              a: "Call upon the prosecution to narrate the facts of the case.",
              b: "Explain the essential element of the offence to her and if she understands and admits proceed to convict her.",
              c: "All of the above",
              d: "Record a plea of \"not guilty\" and proceed with the trial.",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "In the course of your Court Externship in Bwari, Federal Capital Territory, one of the activities you recorded in your Log Book was the trial of Mary and Aisha on a one count Information of conspiracy to commit Culpable Homicide Punishable with Death of their former friend, Esther. You stated that Mary pleaded \"guilty with reason,\" while Aisha pleaded \"guilty'. At the conclusion of trial, both defendants were convicted.",
            question: "The sentence that will be imposed upon the defendants will be:",
            options: {
              a: "Death by hanging",
              b: "Death by lethal injection",
              c: "Either (a) or (b) above",
              d: "Life imprisonment.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Toms, 13 (years old) and Jones, (8 years old) saw Bindo in Avensis Supermarket at Kalgo Close, Wuse 2, Abuja, secretly taking and hiding a pack of golden necklace worth N4 million with the intention of stealing it. He was arrested and made a statement to the police, confessing to the crime. He was taken to court, convicted and sentenced to 3 years imprisonment without option of fine after the final addresses. He has instructed his counsel to appeal the judgment but he died that same day.",
            question: "For the evidence to Toms and Jones to be admissible in court:",
            options: {
              a: "Their respective ages must be established by expert witness.",
              b: "The court shall conduct a preliminary investigation to ascertain whether they understand the duty of speaking the truth and the capacity of giving rational answer to questions.",
              c: "The prosecution will require the consent of their parents or guardians before they can give evidence.",
              d: "The prosecution has to first establish that they understand and can speak the language of the court.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Toms, 13 (years old) and Jones, (8 years old) saw Bindo in Avensis Supermarket at Kalgo Close, Wuse 2, Abuja, secretly taking and hiding a pack of golden necklace worth N4 million with the intention of stealing it. He was arrested and made a statement to the police, confessing to the crime. He was taken to court, convicted and sentenced to 3 years imprisonment without option of fine after the final addresses. He has instructed his counsel to appeal the judgment but he died that same day.",
            question: "If Bindo's confessional statement is made in Okun Language but merely interpreted by Corporal John, it is:",
            options: {
              a: "Only admissible if John is called as a witness and the statement is tendered through him.",
              b: "Admissible whether or not John is caked as a witness",
              c: "Cannot be admitted since Okun language is not the language of the court.",
              d: "It must be interpreted by another Okun person before it can be admitted as evidence.",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "Toms, 13 (years old) and Jones, (8 years old) saw Bindo in Avensis Supermarket at Kalgo Close, Wuse 2, Abuja, secretly taking and hiding a pack of golden necklace worth N4 million with the intention of stealing it. He was arrested and made a statement to the police, confessing to the crime. He was taken to court, convicted and sentenced to 3 years imprisonment without option of fine after the final addresses. He has instructed his counsel to appeal the judgment but he died that same day.",
            question: "Where evidence is adduced by both parties, final address is usually given first by:",
            options: {
              a: "The prosecution",
              b: "Depends on the discretion of the judge or Magistrate presiding",
              c: "The amicus curiae",
              d: "The defence",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "Toms, 13 (years old) and Jones, (8 years old) saw Bindo in Avensis Supermarket at Kalgo Close, Wuse 2, Abuja, secretly taking and hiding a pack of golden necklace worth N4 million with the intention of stealing it. He was arrested and made a statement to the police, confessing to the crime. He was taken to court, convicted and sentenced to 3 years imprisonment without option of fine after the final addresses. He has instructed his counsel to appeal the judgment but he died that same day.",
            question: "Bindo can exercise a right of appeal within----------- after judgment but his appeal ------------ being a sentence of -------------after his death.",
            options: {
              a: "9 months; abates Imprisonment",
              b: "90 months; abates; fine",
              c: "9 months abates; canning",
              d: "90 days abates Imprisonment",
            },
            answer: "d",
          },
          {
            id: 15,
            context: "At the trial of Taiwo Omodada at the Magistrate Court, Dugbe, Ibadan, Oyo State, for stealing and rape of one Miss Okafor, the two offences were stated in count one and read to him. He pleaded not guilty to it. At the end of the trial the accused was discharged and acquitted of the offences. Miss Okafor wants to appeal against the decision on two grounds: (1) That the interpreter used in the case was not qualified (2) That the Magistrate was biased against her.",
            question: "Which of the following is the basic qualification of an interpreter in court:",
            options: {
              a: "Must be bold in the course of interpreting",
              b: "Must be competent enough.",
              c: "Must be knowledgeable in Law",
              d: "Must be of the same tribe with the accused person.",
            },
            answer: "b",
          },
          {
            id: 16,
            context: "At the trial of Taiwo Omodada at the Magistrate Court, Dugbe, Ibadan, Oyo State, for stealing and rape of one Miss Okafor, the two offences were stated in count one and read to him. He pleaded not guilty to it. At the end of the trial the accused was discharged and acquitted of the offences. Miss Okafor wants to appeal against the decision on two grounds: (1) That the interpreter used in the case was not qualified (2) That the Magistrate was biased against her.",
            question: "Miss Okafor does not have the right of appeal against the decision because:",
            options: {
              a: "She is the victim",
              b: "She is not the accused",
              c: "She is not the prosecutor",
              d: "All of the above",
            },
            answer: "d",
          },
          {
            id: 17,
            context: null,
            question: "What is the effect of pleading NOT guilty to the offences charged?",
            options: {
              a: "He is saying that he does not want to be tried.",
              b: "The accused is joining issues with the prosecution",
              c: "That he has reasons why the offence was committed",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "During Bosu's externship Programme in the Law Firm of Messrs, Udom, Akpan & Co., he accompanied his field Supervisor Udom, Esq. to the Lagos Island Divisional Police Command to negotiate the bail of one Mr. Baloo who had been detained by the police on allegation of armed robbery. He had been in detention for over five days. Mr. Baloo's mother went with them to act as surety.",
            question: "Which of the following statements is true from the Scenario:",
            options: {
              a: "Police cannot grant bail in this case",
              b: "Police can grant bail in this case",
              c: "Only the Area Commander can grant bail in this case",
              d: "None of the above",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "During Bosu's externship Programme in the Law Firm of Messrs, Udom, Akpan & Co., he accompanied his field Supervisor Udom, Esq. to the Lagos Island Divisional Police Command to negotiate the bail of one Mr. Baloo who had been detained by the police on allegation of armed robbery. He had been in detention for over five days. Mr. Baloo's mother went with them to act as surety.",
            question: "The detention of the suspect by the police for five days is a breach of which of the following rights?",
            options: {
              a: "Freedom of Speech",
              b: "Freedom of Association",
              c: "Right to Liberty",
              d: "Right to citizenship",
            },
            answer: "bonus",
          },
          {
            id: 20,
            context: "During Bosu's externship Programme in the Law Firm of Messrs, Udom, Akpan & Co., he accompanied his field Supervisor Udom, Esq. to the Lagos Island Divisional Police Command to negotiate the bail of one Mr. Baloo who had been detained by the police on allegation of armed robbery. He had been in detention for over five days. Mr. Baloo's mother went with them to act as surety.",
            question: "Which of the following statement is true?",
            options: {
              a: "Baloo's mother is not qualified by law to stand as his surety",
              b: "Baloo's mother is qualified as surety in this case",
              c: "Baloo's mother needs an affidavit of good character to be a surety in this case",
              d: "Only male adults can serve as surety.",
            },
            answer: "b",
          },
        ],
      },
    ],
  },
  "2019-april": {
    year: 2019,
    session: "April",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 80,
    courses: [
      {
        id: "2019-april-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Platinum Solution Ltd was incorporated on the 10th December, 2015 with registered office at Enugu, Enugu State. The company was incorporated to carry on the business of sale and installation of ICT equipment and accessories with share capital of 10 million. Sometimes in 2017, Mr. Kingsley Eze, a director of the company, in one of his several trips abroad met a Chinese by name Yuan Jung. Mr. Yuam Jung owns a company that manufacture ICT equipment and accessories in China. Mr. Yuam Jung agreed to bring his wealth of experience in exchange for shares in the company and it was agreed that platinum Solutions Limited will be registered as Platinum Solutions Plc.",
            question: "As the company secretary of Platinum Solution Ltd, the statutory registers the company must keep before its re-registration are as follows except:",
            options: {
              a: "Register of members",
              b: "Minutes book",
              c: "Register of substantial interest in shares.",
              d: "Register of Directors and Secretaries.",
            },
            answer: "a",
          },
          {
            id: 2,
            context: "Platinum Solution Ltd was incorporated on the 10th December, 2015 with registered office at Enugu, Enugu State. The company was incorporated to carry on the business of sale and installation of ICT equipment and accessories with share capital of 10 million. Sometimes in 2017, Mr. Kingsley Eze, a director of the company, in one of his several trips abroad met a Chinese by name Yuan Jung. Mr. Yuam Jung owns a company that manufacture ICT equipment and accessories in China. Mr. Yuam Jung agreed to bring his wealth of experience in exchange for shares in the company and it was agreed that platinum Solutions Limited will be registered as Platinum Solutions Plc.",
            question: "The following are qualified to be Company Secretary of Platinum Solution Plc except:",
            options: {
              a: "Legal practitioner",
              b: "Members of the Institute of Chattered Secretaries and Administrators",
              c: "Firm of legal practitioners",
              d: "First class graduate of accountancy.",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "Platinum Solution Ltd was incorporated on the 10th December, 2015 with registered office at Enugu, Enugu State. The company was incorporated to carry on the business of sale and installation of ICT equipment and accessories with share capital of 10 million. Sometimes in 2017, Mr. Kingsley Eze, a director of the company, in one of his several trips abroad met a Chinese by name Yuan Jung. Mr. Yuam Jung owns a company that manufacture ICT equipment and accessories in China. Mr. Yuam Jung agreed to bring his wealth of experience in exchange for shares in the company and it was agreed that platinum Solutions Limited will be registered as Platinum Solutions Plc.",
            question: "The type of resolution to be passed at the general meeting of the company to change the status of the company to Platinum Solution Pls is:",
            options: {
              a: "Ordinary resolution",
              b: "Special resolution",
              c: "Written resolution",
              d: "Unanimous resolution",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "Platinum Solution Ltd was incorporated on the 10th December, 2015 with registered office at Enugu, Enugu State. The company was incorporated to carry on the business of sale and installation of ICT equipment and accessories with share capital of 10 million. Sometimes in 2017, Mr. Kingsley Eze, a director of the company, in one of his several trips abroad met a Chinese by name Yuan Jung. Mr. Yuam Jung owns a company that manufacture ICT equipment and accessories in China. Mr. Yuam Jung agreed to bring his wealth of experience in exchange for shares in the company and it was agreed that platinum Solutions Limited will be registered as Platinum Solutions Plc.",
            question: "The approval required by Mr. Yuam Jung to participate in the management and running of Platinum Solution Plc is:",
            options: {
              a: "Resident permit",
              b: "Expatriate quota",
              c: "Business permit",
              d: "A and B only",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "Platinum Solution Ltd was incorporated on the 10th December, 2015 with registered office at Enugu, Enugu State. The company was incorporated to carry on the business of sale and installation of ICT equipment and accessories with share capital of 10 million. Sometimes in 2017, Mr. Kingsley Eze, a director of the company, in one of his several trips abroad met a Chinese by name Yuan Jung. Mr. Yuam Jung owns a company that manufacture ICT equipment and accessories in China. Mr. Yuam Jung agreed to bring his wealth of experience in exchange for shares in the company and it was agreed that platinum Solutions Limited will be registered as Platinum Solutions Plc.",
            question: "The Regulatory Institution that is saddled with the responsibility of registering the transfer of technology from Mr. Yuam Jung to Platinum Solution Pls is:-",
            options: {
              a: "National Office for Technology Acquisition and Promotion Commission.",
              b: "Industrial Inspectorate Division",
              c: "Securities and Exchange Commission",
              d: "Nigerian Investment Promotion Commission.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "Section 274 of the Investment and Securities Act (2007) provides \"there is established a body to be known as the Investment and Securities Tribunal (in this Act referred to as the \"the tribunal\") to exercise the jurisdictions, powers, and authority conferred on it by or under this Act.",
            question: "The following is correct about the Investment and Securities Tribunal except.",
            options: {
              a: "The Tribunal has both civil and criminal jurisdiction.",
              b: "The Tribunal may regulate its proceedings.",
              c: "The proceedings of the Tribunal must hold in camera.",
              d: "The Tribunal exercise both original and appellate jurisdiction.",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "Section 274 of the Investment and Securities Act (2007) provides \"there is established a body to be known as the Investment and Securities Tribunal (in this Act referred to as the \"the tribunal\") to exercise the jurisdictions, powers, and authority conferred on it by or under this Act.",
            question: "Proceedings are commenced before the Tribunal by:",
            options: {
              a: "Original application",
              b: "Originating summons",
              c: "Motion",
              d: "Petition",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Section 274 of the Investment and Securities Act (2007) provides \"there is established a body to be known as the Investment and Securities Tribunal (in this Act referred to as the \"the tribunal\") to exercise the jurisdictions, powers, and authority conferred on it by or under this Act.",
            question: "The appeal by the aggrieved party from the decision of the Tribunal shall be to:",
            options: {
              a: "Federal High Court",
              b: "Court of Appeal",
              c: "State High Court",
              d: "National Industrial Court.",
            },
            answer: "b",
          },
          {
            id: 9,
            context: "Section 274 of the Investment and Securities Act (2007) provides \"there is established a body to be known as the Investment and Securities Tribunal (in this Act referred to as the \"the tribunal\") to exercise the jurisdictions, powers, and authority conferred on it by or under this Act.",
            question: "The jurisdiction conferred on the Tribunal in relation to determination of dispute includes:",
            options: {
              a: "Dispute between Capital Market Operators.",
              b: "Dispute between capital market operators and clients.",
              c: "Disputes between investors and security Trade Point",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "'Heroes for Nigeria\" is an association dedicated to the cause of promoting value-based leadership in Nigeria. Recently, the activities of the body was rewarded with an International award from the Jude's Foundation, a body based in Israel. The award was accompanied by a case prize of US$1,000,000 which was meant to enhance the operations of \"Heroes for Nigeria\".\n\nPart of the case award was distributed by the organization as gifts in honour of some dedicated members, a few others who were excluded in the process had argued that the distribution ought to have been extended to all categories of members, especially as the mandate of the organization is about to expire.",
            question: "The following statement is true of the cash disbursement made to some members of Heroes for Nigeria.",
            options: {
              a: "Property of the body can be disbursed to members in the event of dissolution.",
              b: "The move should have been limited to the reimbursement of debts and out-of-pocket expenses.",
              c: "To be valid, disbursement should be approved by the trustees because the property of the association is vested in them.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 11,
            context: "'Heroes for Nigeria\" is an association dedicated to the cause of promoting value-based leadership in Nigeria. Recently, the activities of the body was rewarded with an International award from the Jude's Foundation, a body based in Israel. The award was accompanied by a case prize of US$1,000,000 which was meant to enhance the operations of \"Heroes for Nigeria\".\n\nPart of the case award was distributed by the organization as gifts in honour of some dedicated members, a few others who were excluded in the process had argued that the distribution ought to have been extended to all categories of members, especially as the mandate of the organization is about to expire.",
            question: "Which of the following options is a crucial factor for having the association registered?",
            options: {
              a: "The trustees will not be a corporate body.",
              b: "Perpetual succession ceases upon the request of the ACP.",
              c: "Power to hold and dispose of land",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "'Heroes for Nigeria\" is an association dedicated to the cause of promoting value-based leadership in Nigeria. Recently, the activities of the body was rewarded with an International award from the Jude's Foundation, a body based in Israel. The award was accompanied by a case prize of US$1,000,000 which was meant to enhance the operations of \"Heroes for Nigeria\".\n\nPart of the case award was distributed by the organization as gifts in honour of some dedicated members, a few others who were excluded in the process had argued that the distribution ought to have been extended to all categories of members, especially as the mandate of the organization is about to expire.",
            question: "Who can bring an application for the dissolution of \"Heroes for Nigeria\".",
            options: {
              a: "The governing body or council",
              b: "One or more trustees",
              c: "Members of the association constituting not less than 50% of the total membership.",
              d: "All of the above",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "'Heroes for Nigeria\" is an association dedicated to the cause of promoting value-based leadership in Nigeria. Recently, the activities of the body was rewarded with an International award from the Jude's Foundation, a body based in Israel. The award was accompanied by a case prize of US$1,000,000 which was meant to enhance the operations of \"Heroes for Nigeria\".\n\nPart of the case award was distributed by the organization as gifts in honour of some dedicated members, a few others who were excluded in the process had argued that the distribution ought to have been extended to all categories of members, especially as the mandate of the organization is about to expire.",
            question: "An association whose trustees are incorporated under the Act must keep and maintain the following books, except:",
            options: {
              a: "Minutes book",
              b: "Register of Shareholders",
              c: "Register of trustees",
              d: "Books of account",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "Jane, Judith, and Edet are the Directors and shareholders of Jajudet Nigeria limited. Jane and Judith conspired against Edet by refusing to carry him along in the management of the company. Huge sum of money was withdrawn from the company's account without reference to the accountant and the Auditors of the company. The company secretary of the company refused to file Annual Returns.",
            question: "One of the these is not a legal mechanism through which Edet may seek protection under the Companies and Allied Matters Act.",
            options: {
              a: "Derivative Action",
              b: "Members of Direct Action",
              c: "Investigation of the company by the Securities and Exchange Commission on grounds of unfairly prejudicial and oppressive conduct.",
              d: "Application to the court to wind-up the company on just and equitable ground.",
            },
            answer: "c",
          },
          {
            id: 15,
            context: "Jane, Judith, and Edet are the Directors and shareholders of Jajudet Nigeria limited. Jane and Judith conspired against Edet by refusing to carry him along in the management of the company. Huge sum of money was withdrawn from the company's account without reference to the accountant and the Auditors of the company. The company secretary of the company refused to file Annual Returns.",
            question: "A Derivation Action must be commenced by way of .....................",
            options: {
              a: "Originating Summons",
              b: "Originating Motion",
              c: "Petition",
              d: "Writ of Summons",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "Jane, Judith, and Edet are the Directors and shareholders of Jajudet Nigeria limited. Jane and Judith conspired against Edet by refusing to carry him along in the management of the company. Huge sum of money was withdrawn from the company's account without reference to the accountant and the Auditors of the company. The company secretary of the company refused to file Annual Returns.",
            question: "Assuming Edet intends to bring an action for himself and on behalf of other members of the company, such action must come by way of .....................",
            options: {
              a: "Corporate Action",
              b: "Committee Action",
              c: "Derivative Action",
              d: "Representative Action",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Jane, Judith, and Edet are the Directors and shareholders of Jajudet Nigeria limited. Jane and Judith conspired against Edet by refusing to carry him along in the management of the company. Huge sum of money was withdrawn from the company's account without reference to the accountant and the Auditors of the company. The company secretary of the company refused to file Annual Returns.",
            question: "......... is the most appropriate court where the action by Edet against Jane and Judith can be constituted.",
            options: {
              a: "High Court of a State",
              b: "Federal High Court",
              c: "National Industrial Court",
              d: "Court of Appeal",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "Jane, Judith, and Edet are the Directors and shareholders of Jajudet Nigeria limited. Jane and Judith conspired against Edet by refusing to carry him along in the management of the company. Huge sum of money was withdrawn from the company's account without reference to the accountant and the Auditors of the company. The company secretary of the company refused to file Annual Returns.",
            question: "The following may apply to the Court under a derivative action as an applicant except.........",
            options: {
              a: "A registered holder or a beneficial owner and a former registered holder or beneficial owner of a security of the company.",
              b: "A director or an officer or a former director of officer of a company.",
              c: "The Corporate Affairs Commission",
              d: "Any other person who in the discretion of the members is a proper person to make such an application.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: null,
            question: "Under Section 299 CAMA, where there is a wrong doing against a company, the appropriate party to remedy the wrong doing is the .........",
            options: {
              a: "The members in general meeting",
              b: "The Managing Director",
              c: "The Board of Directors",
              d: "Any of the above.",
            },
            answer: "a",
          },
          {
            id: 20,
            context: null,
            question: "The doctrine of \"Corporate Sovereignty\" connotes that in the management of a company.",
            options: {
              a: "Ultimate power belongs to the company through majority of members in general meeting.",
              b: "Ultimate power belongs to the company through majority members.",
              c: "Ultimate power belongs to the Board of Directors",
              d: "Life Directors are not to be removed from office.",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "2019-april-property-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Bank of the West Plc and Chief Okeme Aminu entered into a mortgage transaction in respect of his property situate at No. 20, Lamido Adamawa Way, Yola, Adamawa State. Chief Aminu died on the 21 June, 2002 at Amina Jafar Hospital, Yola.\n\nThe Bank has approached you to negotiate the loan and perfect the transaction.",
            question: "To ensure that Chief Okeme Aminu has valid title to the property, you should",
            options: {
              a: "Deduce his title to the property.",
              b: "Investigate his title to the property.",
              c: "Answer requisitions raised to his title.",
              d: "Defend his title to the property.",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "Bank of the West Plc and Chief Okeme Aminu entered into a mortgage transaction in respect of his property situate at No. 20, Lamido Adamawa Way, Yola, Adamawa State. Chief Aminu died on the 21 June, 2002 at Amina Jafar Hospital, Yola.\n\nThe Bank has approached you to negotiate the loan and perfect the transaction.",
            question: "Which of the following is the proper order you should employ in perfecting the mortgage transaction?",
            options: {
              a: "Stamping, consent and registration.",
              b: "Consent, stamping and registration.",
              c: "Consent, registration and stamping.",
              d: "Registration, stamping and consent.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "Bank of the West Plc and Chief Okeme Aminu entered into a mortgage transaction in respect of his property situate at No. 20, Lamido Adamawa Way, Yola, Adamawa State. Chief Aminu died on the 21 June, 2002 at Amina Jafar Hospital, Yola.\n\nThe Bank has approached you to negotiate the loan and perfect the transaction.",
            question: "One of the following is not a remedy available to the Bank of the West Plc, if Chief Okeme Aminu fails to pay the principal sum and interest.",
            options: {
              a: "Forfeiture",
              b: "Foreclosure",
              c: "Power to appoint a receiver",
              d: "Power of sale of the mortgage property.",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "Bank of the West Plc and Chief Okeme Aminu entered into a mortgage transaction in respect of his property situate at No. 20, Lamido Adamawa Way, Yola, Adamawa State. Chief Aminu died on the 21 June, 2002 at Amina Jafar Hospital, Yola.\n\nThe Bank has approached you to negotiate the loan and perfect the transaction.",
            question: "The title document that would best prove Chief Okeme Aminu's ownership is:",
            options: {
              a: "Deed of assignment",
              b: "Deed of legal mortgage",
              c: "Deed of vesting declaration",
              d: "Vesting assent.",
            },
            answer: "a",
          },
          {
            id: 5,
            context: "Mr. Peter Kabir is a retired director in the Federal Ministry of Agriculture, Abuja. His pension has not been coming regularly. He wants to use his property at No. 20, Aguiyi Ironsi Way, Maitama, Abuja to raise money in order to start a poultry farm to augment his pension. He has approached you to advise him on how to go about it. He has, also told you to carry out the suggested option(s) to realise his intention.",
            question: "The options available to Mr. Peter Kabir in this case are:",
            options: {
              a: "Sale, lease and mortgage",
              b: "Gift intervivos, lease and making a will.",
              c: "Mortgage, rent and charge",
              d: "Lease, assignment and probate.",
            },
            answer: "d",
          },
          {
            id: 6,
            context: "Mr. Peter Kabir is a retired director in the Federal Ministry of Agriculture, Abuja. His pension has not been coming regularly. He wants to use his property at No. 20, Aguiyi Ironsi Way, Maitama, Abuja to raise money in order to start a poultry farm to augment his pension. He has approached you to advise him on how to go about it. He has, also told you to carry out the suggested option(s) to realise his intention.",
            question: "Since Mr. Peter Kabir wants you to carry out the options suggested, you will require ......... to enable you do that.",
            options: {
              a: "Power of Attorney under hand from him.",
              b: "Consent from the Minister of FCT, Abuja",
              c: "Deed of conveyance from him.",
              d: "Deed of Power of Attorney from him.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: null,
            question: "The following taxes would be payable on gains realised from use and disposition of property:",
            options: {
              a: "Capital Gains Tax, Personal Income Tax, Stamp Duties.",
              b: "Rent, tenement rate, development levy.",
              c: "Registration fees, Valued Added Tax, stamp duties.",
              d: "Stamp Duties, ground rent, assessment.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Alhaji Haruna Ameachi has approached First Bank of Nigeria Plc for a loan. The loan sum is N70 million to be secured by Alhaji Haruna Ameachi's house at Owerri at an interest rate of 12% to be paid within 12 months and due on the 10th of March, 2019.",
            question: "The Mortgage between Alhaji Haruna Ameachi and First Bank Plc may be created by all but one of the following:-",
            options: {
              a: "Sub-demise",
              b: "Assignment",
              c: "Deed of statutory mortgage.",
              d: "Charge by deed expressed to be by way of legal mortgage.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Alhaji Haruna Ameachi has approached First Bank of Nigeria Plc for a loan. The loan sum is N70 million to be secured by Alhaji Haruna Ameachi's house at Owerri at an interest rate of 12% to be paid within 12 months and due on the 10th of March, 2019.",
            question: "Assuming an equitable mortgage is to be created, by which of the following methods you would advise the solicitor to create it.",
            options: {
              a: "By charge",
              b: "Sub-demise",
              c: "Deposit of title deeds with agreement in writing to create a legal mortgage at a later date.",
              d: "Assignment",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "Alhaji Haruna Ameachi has approached First Bank of Nigeria Plc for a loan. The loan sum is N70 million to be secured by Alhaji Haruna Ameachi's house at Owerri at an interest rate of 12% to be paid within 12 months and due on the 10th of March, 2019.",
            question: "A clause in the mortgage states that the mortgage will charge 12% but if the mortgagees delays payment, 20% will be taken. Which of the following statement is true of the clause above:",
            options: {
              a: "The clause is trite",
              b: "Interest is compulsory",
              c: "The court will not enforce a penalty",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Alhaji Haruna Ameachi has approached First Bank of Nigeria Plc for a loan. The loan sum is N70 million to be secured by Alhaji Haruna Ameachi's house at Owerri at an interest rate of 12% to be paid within 12 months and due on the 10th of March, 2019.",
            question: "Assuming the mortgage is in respect of a property in Lagos, which of the following statements will be correct.",
            options: {
              a: "Mortgage will be created using form 6 of the RTL.",
              b: "Mode of creating mortgage depends on which part of Lagos Island the property is located.",
              c: "Create the mortgage by charge accompanied by agreement to create legal mortgage.",
              d: "Modes of creating the mortgage would depend on whether the property has a right of occupancy or a leasehold interest.",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "Alhaji Haruna Ameachi has approached First Bank of Nigeria Plc for a loan. The loan sum is N70 million to be secured by Alhaji Haruna Ameachi's house at Owerri at an interest rate of 12% to be paid within 12 months and due on the 10th of March, 2019.",
            question: "The parties to the mortgage are:",
            options: {
              a: "Borrower and purchaser",
              b: "Mortgagee and borrower",
              c: "Mortgagor and mortgagee",
              d: "Mortgagor and Guarantor",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "Alhaji Haruna Ameachi has approached First Bank of Nigeria Plc for a loan. The loan sum is N70 million to be secured by Alhaji Haruna Ameachi's house at Owerri at an interest rate of 12% to be paid within 12 months and due on the 10th of March, 2019.",
            question: "If the solicitor of First Bank Plc fails to carry out investigation, which of the following is true of the likely consequences?",
            options: {
              a: "Vendor will be liable for professional negligence",
              b: "Purchaser will be held by doctrine of caveat emptor in respect of latent defect.",
              c: "Purchaser may end up buying a defective title.",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "Alhaji Haruna Ameachi has approached First Bank of Nigeria Plc for a loan. The loan sum is N70 million to be secured by Alhaji Haruna Ameachi's house at Owerri at an interest rate of 12% to be paid within 12 months and due on the 10th of March, 2019.",
            question: "Which of the following is a consequence of not stamping the legal mortgage created?",
            options: {
              a: "The document will not be accepted for registration.",
              b: "The document will be inadmissible in evidence.",
              c: "Loss of priority",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 15,
            context: null,
            question: "Assuming Mrs. Ezenwa wants to collect 12 years rent in advance at a yearly rent of N2 million from her tenant in Abuja; as her solicitor, one of the following is not a threat to her desire.",
            options: {
              a: "The rent will be reviewed for the duration of the rent.",
              b: "She will have to pay personal income tax on the rent collected.",
              c: "She will be adversely affected by inflation.",
              d: "She will not be able to take advantage of future capital appreciation.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: null,
            question: "One of the following best describes the tax (es) payable by Mrs. Ezenwa when she sells the property at a profit includes:-",
            options: {
              a: "Capital gains tax",
              b: "Consent fee and stamp duties",
              c: "Personal income tax",
              d: "A and B.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: null,
            question: "The professional charges paid to your law firm in respect of the transaction between Mrs. Ezenwa and Gambo form part of ............under the Capital Gains Tax Act:",
            options: {
              a: "Accruable income",
              b: "Taxable income",
              c: "Allowable expenses",
              d: "Allowable contribution.",
            },
            answer: "c",
          },
          {
            id: 18,
            context: null,
            question: "A physical investigation on the property by Gambo Chinwe will reveal:",
            options: {
              a: "Patent defects on the property.",
              b: "Latent defects on the property.",
              c: "Overriding interest on the property.",
              d: "Defects on the instrument of transfer.",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "Mr. Henry Clark is the Managing Director of Zenith Height Limited. Mr. Henry Clark had just taken a loan of N10 million from Zefoh Bank Plc in his personal name and plans to use a property at No. 12, Ahmadu Bello Way, Kaduna belonging to Zenith Height Limited as Security for the loan.",
            question: "In the above transaction, Zenith Height Ltd, would be described as:-",
            options: {
              a: "Mortgagor",
              b: "Guarantor",
              c: "Surety",
              d: "Borrower",
            },
            answer: "b",
          },
          {
            id: 20,
            context: null,
            question: "All of the following except one are necessary to process the governor's consent:",
            options: {
              a: "Requisition of title",
              b: "Duly executed application form for Governor's consent.",
              c: "Tax clearance certificate",
              d: "Copy of land certificate.",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "2019-april-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Three legal practitioners, Musa Idoma, Mati Saleh and Nabila Job, who are 10, 8, and 7 years respectively, at the Bar, decided to set up a Law Firm and practice together. They rented a 3-bedroom apartment at No. 1, Zaria Road, Kano and started their law practice together.",
            question: "One of these is not a type of books of account required to be kept and maintained by the law firm under the law.",
            options: {
              a: "Journal",
              b: "Cash book",
              c: "Credit book",
              d: "Ledger",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Three legal practitioners, Musa Idoma, Mati Saleh and Nabila Job, who are 10, 8, and 7 years respectively, at the Bar, decided to set up a Law Firm and practice together. They rented a 3-bedroom apartment at No. 1, Zaria Road, Kano and started their law practice together.",
            question: "The three legal practitioners qualified to practice the legal professional in Nigeria when:",
            options: {
              a: "They received their qualifying certificate",
              b: "They received their Call to Bar certificate.",
              c: "They were Called to the Nigerian Bar",
              d: "They got their names enrolled at the Supreme Court.",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "Three legal practitioners, Musa Idoma, Mati Saleh and Nabila Job, who are 10, 8, and 7 years respectively, at the Bar, decided to set up a Law Firm and practice together. They rented a 3-bedroom apartment at No. 1, Zaria Road, Kano and started their law practice together.",
            question: "The three legal practitioners are qualified to:",
            options: {
              a: "Practice in Nigeria for the purpose of a particular proceedings.",
              b: "Practice only for the purpose of a particular office.",
              c: "Practice generally in Nigeria.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "Mr. Isaac Toogood is a legal practitioner based in Zaria. Sometime in December 2017, one Mr. Bage Solomon engaged his services with respect to preparing a Deed of Assignment which Mr. Isaac obliged him. Now Mr. Idowu Laki, a long-time client whose vast properties have always been managed by Mr. Isaac came to his house at No. 6, Presidential close, Abuja where he instructed him to represent him in a matter involving land between Mr. Idowu and Mr. Bage. Mr. Isaac is now at a loss trying to determine if he can represent Mr. Idowu in the said suit considering the fact that he had one time prepared the Deed for Mr. Bage for the same land.",
            question: "All except one of the following are the stages which Mr. Isaac would have followed when asked by Mr. Bage to prepare the Deed:",
            options: {
              a: "Understanding the instruction",
              b: "Analyzing and designing the draft",
              c: "Composing and scrutinizing the draft.",
              d: "Vetting and filing the deed.",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "Mr. Isaac Toogood is a legal practitioner based in Zaria. Sometime in December 2017, one Mr. Bage Solomon engaged his services with respect to preparing a Deed of Assignment which Mr. Isaac obliged him. Now Mr. Idowu Laki, a long-time client whose vast properties have always been managed by Mr. Isaac came to his house at No. 6, Presidential close, Abuja where he instructed him to represent him in a matter involving land between Mr. Idowu and Mr. Bage. Mr. Isaac is now at a loss trying to determine if he can represent Mr. Idowu in the said suit considering the fact that he had one time prepared the Deed for Mr. Bage for the same land.",
            question: "Mr. Isaac is not inclined to go over to Mr. Idowu's house to take instruction. He can only do this in the following except one circumstance:",
            options: {
              a: "The client is very ill and frail",
              b: "The client is of extreme old age",
              c: "The client cannot visit his law firm due to security reasons.",
              d: "The client is in custody.",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Mr. Isaac Toogood is a legal practitioner based in Zaria. Sometime in December 2017, one Mr. Bage Solomon engaged his services with respect to preparing a Deed of Assignment which Mr. Isaac obliged him. Now Mr. Idowu Laki, a long-time client whose vast properties have always been managed by Mr. Isaac came to his house at No. 6, Presidential close, Abuja where he instructed him to represent him in a matter involving land between Mr. Idowu and Mr. Bage. Mr. Isaac is now at a loss trying to determine if he can represent Mr. Idowu in the said suit considering the fact that he had one time prepared the Deed for Mr. Bage for the same land.",
            question: "In advising Mr. Isaac on whether he can represent Mr. Idowu in the law suit having prepared the Deed of Assignment for Mr. Bage, one of the following is correct:",
            options: {
              a: "He cannot represent Mr. Idowu in the law suit.",
              b: "He can represent Mr. Idowu after he has disclosed the fact and the former does not object.",
              c: "He can assign another lawyer from his office who was not involved in the preparation of the Deed.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Mr. Isaac Toogood is a legal practitioner based in Zaria. Sometime in December 2017, one Mr. Bage Solomon engaged his services with respect to preparing a Deed of Assignment which Mr. Isaac obliged him. Now Mr. Idowu Laki, a long-time client whose vast properties have always been managed by Mr. Isaac came to his house at No. 6, Presidential close, Abuja where he instructed him to represent him in a matter involving land between Mr. Idowu and Mr. Bage. Mr. Isaac is now at a loss trying to determine if he can represent Mr. Idowu in the said suit considering the fact that he had one time prepared the Deed for Mr. Bage for the same land.",
            question: "Assuming Mr. Isaac is desirous of being appointed to the Bench and he has written the necessary application and prepared his curriculum vitae, it would be more prudent to state his educational qualifications in a:",
            options: {
              a: "Descending order.",
              b: "Ascending order",
              c: "Any way he chooses",
              d: "As specified in the advert.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Mr. Isaac Toogood is a legal practitioner based in Zaria. Sometime in December 2017, one Mr. Bage Solomon engaged his services with respect to preparing a Deed of Assignment which Mr. Isaac obliged him. Now Mr. Idowu Laki, a long-time client whose vast properties have always been managed by Mr. Isaac came to his house at No. 6, Presidential close, Abuja where he instructed him to represent him in a matter involving land between Mr. Idowu and Mr. Bage. Mr. Isaac is now at a loss trying to determine if he can represent Mr. Idowu in the said suit considering the fact that he had one time prepared the Deed for Mr. Bage for the same land.",
            question: "What kind of retainership would you claim Mr. Idowu Laki has with the law firm of Mr. Isaac Toogood?",
            options: {
              a: "Special Retainership",
              b: "General Retainership.",
              c: "Specific retainership",
              d: "Corporate retainership",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (9) of the passage.",
            options: {
              a: "jurisdiction",
              b: "Magisterial",
              c: "Judicial",
              d: "Territorial",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (10) of the passage.",
            options: {
              a: "Course List",
              b: "Cause list",
              c: "Order paper",
              d: "Enrolment list",
            },
            answer: "b",
          },
          {
            id: 11,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (11) of the passage.",
            options: {
              a: "My Lord",
              b: "My Lordship",
              c: "His Worship",
              d: "His Lordship",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (12) of the passage.",
            options: {
              a: "Bench",
              b: "Lobby",
              c: "Inn",
              d: "Bar",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (13) of the passage.",
            options: {
              a: "Seniority",
              b: "Precedence and Conferment",
              c: "Ascension",
              d: "Robing",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (14) of the passage.",
            options: {
              a: "Lobby",
              b: "Courtroom",
              c: "Gallery",
              d: "Robing room",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (15) of the passage.",
            options: {
              a: "Witness box",
              b: "Dock",
              c: "Press",
              d: "Bench",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (16) of the passage.",
            options: {
              a: "Magistrate",
              b: "Clerk",
              c: "Registrar",
              d: "Judge",
            },
            answer: "d",
          },
          {
            id: 17,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (17) of the passage.",
            options: {
              a: "Witness Box",
              b: "Dock",
              c: "Bar",
              d: "Bench",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (18) of the passage.",
            options: {
              a: "Derision",
              b: "Cooperation",
              c: "Contempt",
              d: "Disobedience",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (19) of the passage.",
            options: {
              a: "Front beach",
              b: "Inner Bar",
              c: "Outer bar",
              d: "Gallery",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "At the resumed hearing of the Enugu State High Court sitting at Agbani (9)....Division. The Honourable Justice C.C. Chukwukelu asked the Registrar to call the matters as listed in the (10)....... Thereafter (11).......asked the counsel at the (12)......to mention their matters in order of (13).......in orders for the business of the day to commence. As the first matter was being heard, a counsel walked into the (14).....and sat on the seat reserved for the (15).......covering the proceedings of the court. Thereafter, he was sighted by (16)....who ordered him to vacate the seat. The counsel feigned ignorance of the order and sat unperturbed and looked at the court with derision. Justice Chukwukelu ordered the unruly counsel to proceed to the (17)......in order to purge himself of his (18).... Meanwhile, a junior counsel who came very late to the court went and sat in the (19)......which is in the front of row reserved for Senior Advocates and other distinguished lawyers. The judge ordered him to go to the proper position and he quickly apologized and changed his seat. Thereafter, the first witness was ushered into the (20)....and was sworn before he gave his evidence.",
            question: "Fill in blank (20) of the passage.",
            options: {
              a: "Dock",
              b: "Podium",
              c: "Witness box",
              d: "Witness stand",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2019-april-criminal-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "Which court has jurisdiction to entertain this case?",
            options: {
              a: "Federal High Court, Enugu",
              b: "Magistrate Court",
              c: "Enugu State High Court",
              d: "Enugu State Criminal Offences Tribunal.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "Which of the following statements is false?",
            options: {
              a: "Kalu can plead on behalf of the trio",
              b: "The trio must plead individually",
              c: "The charge must be in respect of each count",
              d: "The plea must be in respect of each count.",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "Assuming the suspects were arraigned before the Enugu State High Court and the accused persons want to appeal against their conviction, what is the length of time to appeal?",
            options: {
              a: "14 days",
              b: "15 days",
              c: "30 days",
              d: "90 days",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "If the accused persons upon the reading of the charge, refused to enter their plea, the court will ............",
            options: {
              a: "Inquire into the reason for their refusal to plead.",
              b: "Order them to take their pleas",
              c: "Charge them for contempt",
              d: "Enter into trial within trial.",
            },
            answer: "a",
          },
          {
            id: 5,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "After conviction, the court would call for ...........before sentencing.",
            options: {
              a: "Plea bargain",
              b: "Allocutus",
              c: "Preliminary objection",
              d: "Any additional address.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "A search of this nature should be conducted between the  hours of:",
            options: {
              a: "5.00 a.m. - 8.00 p.m.",
              b: "6.00 a.m. – 7.00 p.m.",
              c: "5.00 a.m. – 9.00p.m.",
              d: "At any time of the day or night.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "The search conducted on Bobo Ikemson by Inspector Josephine Johnson may be held to be unlawful because:",
            options: {
              a: "A search should be conducted by a person of the same sex.",
              b: "A woman can search a man.",
              c: "The search was conducted without a search warrant.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "Bobo Ikemson may regain his freedom where:",
            options: {
              a: "He settles the police by giving him money.",
              b: "Writing a petition to the Inspector General of Police complaining about his arrest and detention.",
              c: "Apply to the court for bail",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "When Bobo Ikemson was arraigned in court, he had no counsel. What should the court do in the circumstance?",
            options: {
              a: "Proceed with the hearing.",
              b: "Detain the accused person in custody until he is able to engage the services of a counsel.",
              c: "Detain the accused person in custody and advise his relations to arrange counsel for him.",
              d: "Stand down the matter until the accused person is able to engage the services of a counsel.",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "Bobo Ikemson when arraigned in court pleaded guilty to the offence. What should the court do in the circumstance?",
            options: {
              a: "Sentence the accused person based on his plea of guilt.",
              b: "Send the drug (heroin) for forensic analysis.",
              c: "Ask the prosecution to prove his case.",
              d: "Enter plea of not guilty for him.",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "Assuming the counsel is to contest the jurisdiction of the court, which court has jurisdiction to try the offence?",
            options: {
              a: "The State High Court",
              b: "The Federal High Court",
              c: "The Industrial Court",
              d: "The Magistrate Court.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "The detention for 4 days without access to a lawyer is a violation of ...........",
            options: {
              a: "Right counsel of his choice only.",
              b: "Right to personal liberty only.",
              c: "Right to humane treatment.",
              d: "All of the above",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "One of the following is not a condition the court will consider in granting bail.......",
            options: {
              a: "The health of the accused",
              b: "Whether the accused will jump bail",
              c: "The prevalence of the crime",
              d: "The status of the accused in the society.",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "Assuming the matter was brought before the Federal High Court, Lagos, which of the following is the proper mode of instituting an action at the Federal High Court?",
            options: {
              a: "Charge",
              b: "Charge sheet",
              c: "Information draft",
              d: "Complaint",
            },
            answer: "a",
          },
          {
            id: 15,
            context: null,
            question: "The trial of Idoko Sunny is said to commence at the point .....",
            options: {
              a: "He is led into the court",
              b: "When the charge is read and he takes his plea.",
              c: "The prosecution calls its first witness.",
              d: "The defence calls its first witness.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "One of the following is correct about the court.",
            options: {
              a: "The court lacks jurisdiction because the offence is a military offence.",
              b: "The court lacks jurisdiction because the action is statute barred.",
              c: "The court lacks jurisdiction to entertain a charge of treason.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "On the plea of the defendant, the court will do one of the following:",
            options: {
              a: "Enter his plea of guilt",
              b: "Conduct an inquiry as to his mental condition.",
              c: "Enter a plea of not guilty",
              d: "Enter a plea of not guilty with reason.",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "The Federal High Court sitting over the matter will be properly constituted if it sits with:",
            options: {
              a: "One judge",
              b: "At least one Judge",
              c: "Two judges",
              d: "Three judges",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "One of the following is correct about the punishment the court can impose on the defendant.",
            options: {
              a: "Life Imprisonment",
              b: "Beheading",
              c: "Death by electrocution",
              d: "Death by lethal injection.",
            },
            answer: "a",
          },
          {
            id: 20,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "An appeal against the judgment of the court should be made within:",
            options: {
              a: "3 months of the judgment",
              b: "14 days of the judgment",
              c: "30 days of the judgment",
              d: "90 days of the judgment",
            },
            answer: "d",
          },
        ],
      },
    ],
  },
  "2019-august": {
    year: 2019,
    session: "August",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 101,
    courses: [
      {
        id: "2019-august-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 21,
        questions: [
          {
            id: 1,
            context: "Niyi Dapo, Grace Anywanwu and Abdul Ahmed are shareholders and directors of Rubby Nigeria Limited. Niyi Dapo and Abdul Ahmed conspired and shut out Grace Anyanwu from the management of the company. She was no longer invited to attend board meetings of the company. Niyi Dapo and Abdul Ahmed withdrew huge sums of money from the company's account without reference to the Accountant and the Auditor of the company. They neither convened Annual General Meeting nor file Annual Returns. They allotted new shares to themselves, only Grace Anyanwu wants to bring an application to the court on grounds of unfairly prejudicial and oppressive conduct.",
            question: "The specific application Grace Anywanwu will bring to the court on grounds of unfairly prejudicial and oppressive conduct is:",
            options: {
              a: "Originating summons",
              b: "Originating motion",
              c: "Petition",
              d: "Writ of Summons.",
            },
            answer: "a",
          },
          {
            id: 2,
            context: "Niyi Dapo, Grace Anywanwu and Abdul Ahmed are shareholders and directors of Rubby Nigeria Limited. Niyi Dapo and Abdul Ahmed conspired and shut out Grace Anyanwu from the management of the company. She was no longer invited to attend board meetings of the company. Niyi Dapo and Abdul Ahmed withdrew huge sums of money from the company's account without reference to the Accountant and the Auditor of the company. They neither convened Annual General Meeting nor file Annual Returns. They allotted new shares to themselves, only Grace Anyanwu wants to bring an application to the court on grounds of unfairly prejudicial and oppressive conduct.",
            question: "An appeal against the judgment of the court should be made within:",
            options: {
              a: "Winding up of the company",
              b: "Directing that an investigation of the company be conducted by the Corporate Affairs Commission",
              c: "Appointing a Receiver or a Manager of the property of the company.",
              d: "Order for a derivative action to be brought before the court.",
            },
            answer: "bonus",
          },
          {
            id: 3,
            context: "Niyi Dapo, Grace Anywanwu and Abdul Ahmed are shareholders and directors of Rubby Nigeria Limited. Niyi Dapo and Abdul Ahmed conspired and shut out Grace Anyanwu from the management of the company. She was no longer invited to attend board meetings of the company. Niyi Dapo and Abdul Ahmed withdrew huge sums of money from the company's account without reference to the Accountant and the Auditor of the company. They neither convened Annual General Meeting nor file Annual Returns. They allotted new shares to themselves, only Grace Anyanwu wants to bring an application to the court on grounds of unfairly prejudicial and oppressive conduct.",
            question: "Applications under Companies and Allied Matters Act may be made by the following except:",
            options: {
              a: "Writ of Summons",
              b: "Petition",
              c: "Originating Summons",
              d: "Originating motion.",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "Niyi Dapo, Grace Anywanwu and Abdul Ahmed are shareholders and directors of Rubby Nigeria Limited. Niyi Dapo and Abdul Ahmed conspired and shut out Grace Anyanwu from the management of the company. She was no longer invited to attend board meetings of the company. Niyi Dapo and Abdul Ahmed withdrew huge sums of money from the company's account without reference to the Accountant and the Auditor of the company. They neither convened Annual General Meeting nor file Annual Returns. They allotted new shares to themselves, only Grace Anyanwu wants to bring an application to the court on grounds of unfairly prejudicial and oppressive conduct.",
            question: "The Companies Proceeding Rules apply to all proceedings take out or arising from any provision of any action in:",
            options: {
              a: "The Companies and Allied Matters Act.",
              b: "Part A of Companies and Allied Matters Act.",
              c: "Part C of Companies and Allied Matters Act.",
              d: "Part D of Companies and Allied Matters Act.",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "The Law Firm of your field supervisor is the Company Secretary of the recently incorporated Centre Point Telecommunications Plc. The Board of Directors is made up of five directors. The board is preparing to hold its first meeting and your field supervisor has asked you to prepare the notice of meeting and also attend the meeting as scheduled.",
            question: "The agenda for the meeting shall include all but one of the following:",
            options: {
              a: "Election of the Chairman of the Board.",
              b: "Appointment of the first Auditors of the Company.",
              c: "Fixing the remuneration of the Directors.",
              d: "Preparation for the holding of the statutory meeting.",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "The Law Firm of your field supervisor is the Company Secretary of the recently incorporated Centre Point Telecommunications Plc. The Board of Directors is made up of five directors. The board is preparing to hold its first meeting and your field supervisor has asked you to prepare the notice of meeting and also attend the meeting as scheduled.",
            question: "The length of notice required under Companies and Allied Matters Act to validly convene the meeting is:",
            options: {
              a: "21 days",
              b: "7 days",
              c: "14 days",
              d: "Any number of days indicated in the notice of meeting.",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "The Law Firm of your field supervisor is the Company Secretary of the recently incorporated Centre Point Telecommunications Plc. The Board of Directors is made up of five directors. The board is preparing to hold its first meeting and your field supervisor has asked you to prepare the notice of meeting and also attend the meeting as scheduled.",
            question: "The number of Directors that would be present to form a quorum at the meeting shall be:",
            options: {
              a: "2",
              b: "3",
              c: "4",
              d: "Any Director present within 5 minutes of the time scheduled for the holding of the meeting.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "The Law Firm of your field supervisor is the Company Secretary of the recently incorporated Centre Point Telecommunications Plc. The Board of Directors is made up of five directors. The board is preparing to hold its first meeting and your field supervisor has asked you to prepare the notice of meeting and also attend the meeting as scheduled.",
            question: "One of the following is the legal implication of a failure to have a quorum at the meeting.",
            options: {
              a: "The meeting will stand adjourned to the same place, day and time the following week",
              b: "The Chairman of the Board will take decisions that will be binding on the Board.",
              c: "The general meeting may act in place of the Board",
              d: "An application may be made to court for an order directing one Director to take decisions on behalf of the Board.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "Rosemary Akpan sold all her shares in Temple Hill Limited to Isaiah Ehikioya and handed over the share certificate to him. The instrument of transfer was executed by both parties on the 19th July, 2019. Isaiah Ehiioya gave the instrument of transfer to the bank to effect changes in its register of members. On the 10th of August, 2019, the company issued bonus shares to its members and the share certificate for the bonus was written in the name of Rosemary Akpan and forwarded to her, Rosemary Akpan now claim to be the lawful owner of the bonus shares.",
            question: "The period provided under the Companies and Allied Matters Act for share certificate to be issued to Isaiah Ehikioya after the transfer is:",
            options: {
              a: "1 month",
              b: "2 months",
              c: "3 months",
              d: "4 months",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Rosemary Akpan sold all her shares in Temple Hill Limited to Isaiah Ehikioya and handed over the share certificate to him. The instrument of transfer was executed by both parties on the 19th July, 2019. Isaiah Ehiioya gave the instrument of transfer to the bank to effect changes in its register of members. On the 10th of August, 2019, the company issued bonus shares to its members and the share certificate for the bonus was written in the name of Rosemary Akpan and forwarded to her, Rosemary Akpan now claim to be the lawful owner of the bonus shares.",
            question: "Assuming Isaiah Ehikioya became a member of the company through public offer of shares, the share certificate must be issued to him within:",
            options: {
              a: "6 months",
              b: "2 months",
              c: "3 months",
              d: "1 months",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Rosemary Akpan sold all her shares in Temple Hill Limited to Isaiah Ehikioya and handed over the share certificate to him. The instrument of transfer was executed by both parties on the 19th July, 2019. Isaiah Ehiioya gave the instrument of transfer to the bank to effect changes in its register of members. On the 10th of August, 2019, the company issued bonus shares to its members and the share certificate for the bonus was written in the name of Rosemary Akpan and forwarded to her, Rosemary Akpan now claim to be the lawful owner of the bonus shares.",
            question: "Allotment of shares to the existing shareholders in the proportion of their existing shareholding for which the company will pay for such shares allotted  is:",
            options: {
              a: "Bonus issue",
              b: "Right issue",
              c: "Allotment issue",
              d: "Hybrid issue",
            },
            answer: "a",
          },
          {
            id: 12,
            context: "Rosemary Akpan sold all her shares in Temple Hill Limited to Isaiah Ehikioya and handed over the share certificate to him. The instrument of transfer was executed by both parties on the 19th July, 2019. Isaiah Ehiioya gave the instrument of transfer to the bank to effect changes in its register of members. On the 10th of August, 2019, the company issued bonus shares to its members and the share certificate for the bonus was written in the name of Rosemary Akpan and forwarded to her, Rosemary Akpan now claim to be the lawful owner of the bonus shares.",
            question: "The following statements are true in respect of bonus shares, except:",
            options: {
              a: "Payment for bonus share can be made from the capital redemption reserve fund.",
              b: "Payment for bonus shares can be made from the share premium account.",
              c: "Bonus shares are issued to members of the company in the proportion of their existing shareholding.",
              d: "Payment for bonus shares can be made from the sinking account.",
            },
            answer: "d",
          },
          {
            id: 13,
            context: null,
            question: "…………is not a function a share premium account.",
            options: {
              a: "Paying up right issue that is issued to directors of the company.",
              b: "Writing off preliminary expenses of the company.",
              c: "Paying up bonus issued to members of the company.",
              d: "Paying for commission and discount allowed.",
            },
            answer: "a",
          },
          {
            id: 14,
            context: null,
            question: "Which of the following restricting options will not likely help the company out of its situation?",
            options: {
              a: "Arrangement on sale.",
              b: "Arrangement and compromise.",
              c: "Increase of share capital",
              d: "Take over.",
            },
            answer: "d",
          },
          {
            id: 15,
            context: null,
            question: "Tozal Oil & Gas Limited can effect one of the following re-registration except:",
            options: {
              a: "Re-register as a public limited company.",
              b: "Re-register as a private unlimited company.",
              c: "Re-register as a public unlimited company.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 16,
            context: "Following the withdrawal of the operation license of Equity Bank Plc by the Central Bank of Nigeria, the Bank summoned a meeting of stakeholders in the bank to consider suitable options that can preserve investors and depositors' fund since the bank is now moribund:",
            question: "Which of the following is most appropriate?",
            options: {
              a: "Arrangement and compromise.",
              b: "Wind up voluntarily",
              c: "Merge with another bank with operation license.",
              d: "Purchase and assumption.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Following the withdrawal of the operation license of Equity Bank Plc by the Central Bank of Nigeria, the Bank summoned a meeting of stakeholders in the bank to consider suitable options that can preserve investors and depositors' fund since the bank is now moribund:",
            question: "Assuming the bank is still a going concern, all but one of the following can validly oppose a resolution to alter the object clause of the bank.",
            options: {
              a: "Corporate Affairs Commission.",
              b: "Minority shareholders with at least 5% of the paid up share capital who abstained from voting in support of the resolution.",
              c: "Debenture holders secured by floating charge.",
              d: "None of the above",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "Following the withdrawal of the operation license of Equity Bank Plc by the Central Bank of Nigeria, the Bank summoned a meeting of stakeholders in the bank to consider suitable options that can preserve investors and depositors' fund since the bank is now moribund:",
            question: "Any objection opposing the alteration of the object clause shall be filed in court within:",
            options: {
              a: "28 days after the date of passing the resolution.",
              b: "21 days after the date of passing the resolution.",
              c: "14 days after the date of passing the resolution.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "Following the withdrawal of the operation license of Equity Bank Plc by the Central Bank of Nigeria, the Bank summoned a meeting of stakeholders in the bank to consider suitable options that can preserve investors and depositors' fund since the bank is now moribund:",
            question: "The process by which a body corporate is put under a voluntary winding up vide a special resolution without going through a formal dissolution is:",
            options: {
              a: "Arrangement and compromise",
              b: "Arrangement on sale",
              c: "Management buy-out",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "Following the withdrawal of the operation license of Equity Bank Plc by the Central Bank of Nigeria, the Bank summoned a meeting of stakeholders in the bank to consider suitable options that can preserve investors and depositors' fund since the bank is now moribund:",
            question: "If the bank desires to wind up voluntarily, one of the following documents are unnecessary.",
            options: {
              a: "Declaration of Solvency",
              b: "Statement of Assents and Liability",
              c: "Advertisement on newspaper",
              d: "Board Resolution.",
            },
            answer: "b",
          },
          {
            id: 21,
            context: "Following the withdrawal of the operation license of Equity Bank Plc by the Central Bank of Nigeria, the Bank summoned a meeting of stakeholders in the bank to consider suitable options that can preserve investors and depositors' fund since the bank is now moribund:",
            question: "A period of ----------days must be given from the date of passing of the resolution for any objection.",
            options: {
              a: "21",
              b: "28",
              c: "28",
              d: "25",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2019-august-property-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Mallam Buba Kawuche of No. 33, Cole Street, Wuse, Abuja, FCT is a civil servant in the Federal Ministry of Foreign Affairs. He has just been posted to the Nigerian Embassy in London, UK.\n\nTo ensure that his properties are taken care of while he is away, he has decided to authorise Mrs. Masuku Abamba of No. 107, Akukwu Estate, Jabi, Abuja to manage his property at No. A1, Ungulu Street, Kubwa, Abuja and another one at No. 234, Azikiwe Street, Enugu State for a consideration of N50 million only. Part of the authority granted to Mrs. Masuku Abamba is the right to sell and convey the interests to any purchaser.",
            question: "The specifics of what Mrs. Masuku can do will be contained in the ..................clause.",
            options: {
              a: "Testimonium clause",
              b: "Charging clause",
              c: "Power clause",
              d: "Appointment clause",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Mallam Buba Kawuche of No. 33, Cole Street, Wuse, Abuja, FCT is a civil servant in the Federal Ministry of Foreign Affairs. He has just been posted to the Nigerian Embassy in London, UK.\n\nTo ensure that his properties are taken care of while he is away, he has decided to authorise Mrs. Masuku Abamba of No. 107, Akukwu Estate, Jabi, Abuja to manage his property at No. A1, Ungulu Street, Kubwa, Abuja and another one at No. 234, Azikiwe Street, Enugu State for a consideration of N50 million only. Part of the authority granted to Mrs. Masuku Abamba is the right to sell and convey the interests to any purchaser.",
            question: "For Mrs. Masuku to be able to carry out this assignment, Mallam Buba Kawuche must execute a …..",
            options: {
              a: "Deed of Right",
              b: "Deed of Pledge",
              c: "Deed of Power of Attorney",
              d: "Deed of Charge",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "Mallam Buba Kawuche of No. 33, Cole Street, Wuse, Abuja, FCT is a civil servant in the Federal Ministry of Foreign Affairs. He has just been posted to the Nigerian Embassy in London, UK.\n\nTo ensure that his properties are taken care of while he is away, he has decided to authorise Mrs. Masuku Abamba of No. 107, Akukwu Estate, Jabi, Abuja to manage his property at No. A1, Ungulu Street, Kubwa, Abuja and another one at No. 234, Azikiwe Street, Enugu State for a consideration of N50 million only. Part of the authority granted to Mrs. Masuku Abamba is the right to sell and convey the interests to any purchaser.",
            question: "One of the following clauses is not a part of the document to be executed by the parties.",
            options: {
              a: "Testimonium",
              b: "Habendum",
              c: "Execution",
              d: "Alteration",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "Mallam Buba Kawuche of No. 33, Cole Street, Wuse, Abuja, FCT is a civil servant in the Federal Ministry of Foreign Affairs. He has just been posted to the Nigerian Embassy in London, UK.\n\nTo ensure that his properties are taken care of while he is away, he has decided to authorise Mrs. Masuku Abamba of No. 107, Akukwu Estate, Jabi, Abuja to manage his property at No. A1, Ungulu Street, Kubwa, Abuja and another one at No. 234, Azikiwe Street, Enugu State for a consideration of N50 million only. Part of the authority granted to Mrs. Masuku Abamba is the right to sell and convey the interests to any purchaser.",
            question: "The document to be executed by the parties is classified as:",
            options: {
              a: "Deed of indenture",
              b: "Deed of Poll",
              c: "Deed of conveyance",
              d: "Deed of transfer",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "……….is not a means by which Mr. Johnson can execute his Will.",
            options: {
              a: "By signing the Will personally",
              b: "By authorising a third party to sign the Will in his absence.",
              c: "By authorising a third party to sign the Will in his presence.",
              d: "By acknowledging his signature in the presence of witnesses.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "……………tax is payable in the administration of Mr. Johnson's Will.",
            options: {
              a: "Consent fee",
              b: "Stamp duties",
              c: "Estate duties",
              d: "Companies Income Tax",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "The administrator of Mr. Johnson's Will is expected to file account within ……………..duration.",
            options: {
              a: "Every month",
              b: "Every 12 months",
              c: "Every 3 months",
              d: "Every 24 months",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "DEVASTAVIT means ……………………",
            options: {
              a: "Liability for conversion only.",
              b: "Liability for waste and conversion.",
              c: "Liability for conflict of interest",
              d: "Liability for fraud",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "……………is not a content of the account to be filed by the personal representatives of Mr. Johnson's Will.",
            options: {
              a: "Full inventory of assets in the estate.",
              b: "Vouchers in the possession of the personal representatives.",
              c: "Copy of the Will or letters of administration",
              d: "All incomes and expenditures incurred in the course of administration.",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "Assuming Mr. Johnson's child is dissatisfied that as dependant, he was not given any provision in his father's Will, the son has within …………….to institute an action in court.",
            options: {
              a: "6 days",
              b: "6 weeks",
              c: "6 years",
              d: "6 months.",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "……………special grant can be obtained in respect of Mr. Johnson's estate.",
            options: {
              a: "Probate",
              b: "Letter of Administration",
              c: "Ad Coligenda Bona",
              d: "Letters of Administration with the Will annexed.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "Mr. Johnson of No. 35, Royal Road, Ikorodu, Lagos is a businessman who deals with the importation and sale of cars in Nigeria. He also owns a block of 5 flats at No. 35, Royal Road, Ikorodu, Lagos as well as a vegetable farm on 5 acres of land in Epe, Lagos State. Mr. Johnson died on the 13th day of July, 2019 after he executed his Will giving all his properties to his wife Beatrice.",
            question: "……………can demand for the inspection of the accounts by the administrator.",
            options: {
              a: "A beneficiary",
              b: "A creditor",
              c: "An interested party",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "In June, 2017 Mrs. Osehun Moses bought a duplex at No. 10, Lawrence Road, Ikoyi, Lagos State. The purchase price was N1,000,000.00 (one million naira only). She renovated the property for N500,000 and sold the property for N6,000,000 million after advertising for N500,000.00.",
            question: "Which of the following taxes is payable on the transaction to the Federal Government?",
            options: {
              a: "Companies Income Tax",
              b: "Capital Gains Tax",
              c: "Right of Occupancy fees",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: "In June, 2017 Mrs. Osehun Moses bought a duplex at No. 10, Lawrence Road, Ikoyi, Lagos State. The purchase price was N1,000,000.00 (one million naira only). She renovated the property for N500,000 and sold the property for N6,000,000 million after advertising for N500,000.00.",
            question: "What could exempt Osehun Moses from paying tax?",
            options: {
              a: "Ecclesiastical or charitable organization",
              b: "Disposition by way of gift",
              c: "Gains accruing to local government.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "In June, 2017 Mrs. Osehun Moses bought a duplex at No. 10, Lawrence Road, Ikoyi, Lagos State. The purchase price was N1,000,000.00 (one million naira only). She renovated the property for N500,000 and sold the property for N6,000,000 million after advertising for N500,000.00.",
            question: "What formula will be applied in computing Capital Gains Tax?",
            options: {
              a: "10 per cent of gain",
              b: "Consideration minus allowable income",
              c: "All of the above",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "In June, 2017 Mrs. Osehun Moses bought a duplex at No. 10, Lawrence Road, Ikoyi, Lagos State. The purchase price was N1,000,000.00 (one million naira only). She renovated the property for N500,000 and sold the property for N6,000,000 million after advertising for N500,000.00.",
            question: "The following is incorrect concerning personal income tax.",
            options: {
              a: "Taxable persons include individuals, trustees, charitable entities and communities.",
              b: "Chargeable income of partners includes salary, interest and share profit.",
              c: "Rents paid in advance are chargeable.",
              d: "All of the above.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "Linus Ezenwa owns a property at Surulere, Lagos. Due to old age and failing health he is relocating back to his hometown in Abia State. Otunba Akindawon has agreed to buy the property. Both parties have approached you for advice.",
            question: "At what stage would Ezenwa be required to deduce title?",
            options: {
              a: "During the contract",
              b: "Before the completion",
              c: "After completion",
              d: "During completion.",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "Linus Ezenwa owns a property at Surulere, Lagos. Due to old age and failing health he is relocating back to his hometown in Abia State. Otunba Akindawon has agreed to buy the property. Both parties have approached you for advice.",
            question: "At the execution of the transaction, Ezenwa and Akindawon would be referred to as:",
            options: {
              a: "Lessor and Lessee",
              b: "Testator and beneficiaries",
              c: "Assignor and Assignee",
              d: "Mortgagee and mortgagor",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "Linus Ezenwa owns a property at Surulere, Lagos. Due to old age and failing health he is relocating back to his hometown in Abia State. Otunba Akindawon has agreed to buy the property. Both parties have approached you for advice.",
            question: "What will be the correct order of the conveyance transaction between Ezenwa and Akindawon?",
            options: {
              a: "Preliminary enquiries ………… contract ………..perfection.",
              b: "Investigate title………execute contract ……… execute.",
              c: "Contract ……preliminary enquiries ……….assignment.",
              d: "Preliminary enquiries ……… contract ……….deducing of title.",
            },
            answer: "d",
          },
          {
            id: 20,
            context: "Linus Ezenwa owns a property at Surulere, Lagos. Due to old age and failing health he is relocating back to his hometown in Abia State. Otunba Akindawon has agreed to buy the property. Both parties have approached you for advice.",
            question: "The clause that will connect parties to the content and covenants in the Deed of Agreement is:",
            options: {
              a: "Testimonium",
              b: "Attestation",
              c: "Execution",
              d: "Testatum.",
            },
            answer: "d",
          },
        ],
      },
      {
        id: "2019-august-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "On recovering her professional fees, in a transaction, one of Uduak's friends visited him in order to celebrate with him. The friend was curious about the legal profession and wanted to know certain facts about lawyers engaging in business, advertising, and persons that constitutes the membership of the body in the profession that confers the rank of Senior Advocate to deserving members. Uduak responded thus: A lawyer, practicing as a legal practitioner is prohibited from engaging in trade or business. However, he shall not be regarded as participating in trade or business if he is a --(1)\n\nMore so, generally speaking, a lawyer may advertise under the Rules of Professional Conduct. However, ...........(2) falls short of the proper way to advertise under the Rules. On the issue of regulatory bodies in the legal profession, Uduak told his friend that the ........(3) is responsible for the Call to Bar of lawyers and the body that confers the rank of senior advocates on deserving members is the .........(4) and ........(5) is not a member of that regulatory body.",
            question: "Fill in blank (1) of the passage.",
            options: {
              a: "Secretary of a company",
              b: "Commission agent of a company",
              c: "Shareholder of a company",
              d: "Non-executive member of Board of Directors of a company.",
            },
            answer: "bonus",
          },
          {
            id: 2,
            context: "On recovering her professional fees, in a transaction, one of Uduak's friends visited him in order to celebrate with him. The friend was curious about the legal profession and wanted to know certain facts about lawyers engaging in business, advertising, and persons that constitutes the membership of the body in the profession that confers the rank of Senior Advocate to deserving members. Uduak responded thus: A lawyer, practicing as a legal practitioner is prohibited from engaging in trade or business. However, he shall not be regarded as participating in trade or business if he is a --(1)\n\nMore so, generally speaking, a lawyer may advertise under the Rules of Professional Conduct. However, ...........(2) falls short of the proper way to advertise under the Rules. On the issue of regulatory bodies in the legal profession, Uduak told his friend that the ........(3) is responsible for the Call to Bar of lawyers and the body that confers the rank of senior advocates on deserving members is the .........(4) and ........(5) is not a member of that regulatory body.",
            question: "Fill in blank (2) of the passage.",
            options: {
              a: "A lawyer may advertise for witness to testify to a particular event or transaction.",
              b: "A lawyer may advise if it is fair and proper to a particular event of transaction.",
              c: "A lawyer may advertise by including any statement about the quality of his work and size of his practice.",
              d: "A lawyer may advertise by publishing a brief biographical or informative data of himself in a law directory.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "On recovering her professional fees, in a transaction, one of Uduak's friends visited him in order to celebrate with him. The friend was curious about the legal profession and wanted to know certain facts about lawyers engaging in business, advertising, and persons that constitutes the membership of the body in the profession that confers the rank of Senior Advocate to deserving members. Uduak responded thus: A lawyer, practicing as a legal practitioner is prohibited from engaging in trade or business. However, he shall not be regarded as participating in trade or business if he is a --(1)\n\nMore so, generally speaking, a lawyer may advertise under the Rules of Professional Conduct. However, ...........(2) falls short of the proper way to advertise under the Rules. On the issue of regulatory bodies in the legal profession, Uduak told his friend that the ........(3) is responsible for the Call to Bar of lawyers and the body that confers the rank of senior advocates on deserving members is the .........(4) and ........(5) is not a member of that regulatory body.",
            question: "Fill in blank (3) of the passage.",
            options: {
              a: "Nigerian Bar Association",
              b: "Body of Benchers",
              c: "Legal Practitioners Privileges Committee",
              d: "Council of Legal Education",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "On recovering her professional fees, in a transaction, one of Uduak's friends visited him in order to celebrate with him. The friend was curious about the legal profession and wanted to know certain facts about lawyers engaging in business, advertising, and persons that constitutes the membership of the body in the profession that confers the rank of Senior Advocate to deserving members. Uduak responded thus: A lawyer, practicing as a legal practitioner is prohibited from engaging in trade or business. However, he shall not be regarded as participating in trade or business if he is a --(1)\n\nMore so, generally speaking, a lawyer may advertise under the Rules of Professional Conduct. However, ...........(2) falls short of the proper way to advertise under the Rules. On the issue of regulatory bodies in the legal profession, Uduak told his friend that the ........(3) is responsible for the Call to Bar of lawyers and the body that confers the rank of senior advocates on deserving members is the .........(4) and ........(5) is not a member of that regulatory body.",
            question: "Fill in blank (4) of the passage.",
            options: {
              a: "Legal Practitioners Remuneration Committee",
              b: "Legal Practitioners' privileges Committee",
              c: "Legal Practitioners' Disciplinary Committee",
              d: "General Council of the Bar.",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "On recovering her professional fees, in a transaction, one of Uduak's friends visited him in order to celebrate with him. The friend was curious about the legal profession and wanted to know certain facts about lawyers engaging in business, advertising, and persons that constitutes the membership of the body in the profession that confers the rank of Senior Advocate to deserving members. Uduak responded thus: A lawyer, practicing as a legal practitioner is prohibited from engaging in trade or business. However, he shall not be regarded as participating in trade or business if he is a --(1)\n\nMore so, generally speaking, a lawyer may advertise under the Rules of Professional Conduct. However, ...........(2) falls short of the proper way to advertise under the Rules. On the issue of regulatory bodies in the legal profession, Uduak told his friend that the ........(3) is responsible for the Call to Bar of lawyers and the body that confers the rank of senior advocates on deserving members is the .........(4) and ........(5) is not a member of that regulatory body.",
            question: "Fill in blank (5) of the passage.",
            options: {
              a: "Attorney-General of the Federation.",
              b: "Chief Justice of Nigeria",
              c: "Legal Practitioners Disciplinary Committee",
              d: "Presiding Justice of a court of Appeal Division",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "The conduct of I. Z. Akpan, Esq. is best described as:",
            options: {
              a: "Contempt of procedure",
              b: "Contempt ex facie curiae",
              c: "Civil contempt",
              d: "Contempt in facie curiae.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "The Judge's order for I. Z. Akpan, Esq. to \"enter the dock\" means:",
            options: {
              a: "He should give evidence",
              b: "He should face trial",
              c: "Render apology",
              d: "He should enter the dock to show cause.",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "Cross-examination is important to I. Z. Akpan, Esq.'s case for all of the following reasons, except:",
            options: {
              a: "To put across the case of his client",
              b: "To discredit the testimony of the witness under cross-examination.",
              c: "To elicit facts favourable to his client's case.",
              d: "To clear ambiguities arising from witness testimony.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "Ms. Fyneface's key witness was taken through a process that qualified him to be cross-examined. What is that process referred to in trial advocacy?",
            options: {
              a: "Oral examination",
              b: "Final address",
              c: "Examination-in-chief",
              d: "Re-examination.",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "Ojomo, SAN's plea for leniency is best described as the act of:",
            options: {
              a: "An interpreter",
              b: "An arbitrator",
              c: "A plea bargainer",
              d: "An amicus curiae",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "Assuming I. Z. Akan, Esq. refuses to apologize to the court, the court may order that:",
            options: {
              a: "He be kept in police custody until he purges himself.",
              b: "He be kept in prison until he purges himself.",
              c: "He be kept under house arrest until he purges himself.",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "I. Z. Akan, Esq as (12) ........ owe a duty to (13) .............",
            options: {
              a: "A minister in the temple of justice",
              b: "A lawyer in a reputable law firm",
              c: "An officer of the court",
              d: "A and C above",
            },
            answer: "d",
          },
          {
            id: 13,
            context: "In the course of your externship in Court 5 of the Jarawa High Court, you witnessed the following in open court on July 3, 2019. Hon. Justice Kings cautioned I. Z. Akan, Esq. over his use of unsavoury words on Ms. Fyneface (the opposing Counsel) with regards to her failure to produce a key witness for cross-examination. Mr. Akan not heeding the caution, continued to berate Ms. Fyneface. According to him, the absence of the key witness was a calculated ploy to deny his client of a well-deserved justice.\n\nMr. Akan insisted that this be placed on record but Hon. Justice Kings informed him that \"I'm listening to you. All you are saying is entering into one ear and going out through the other ear\".\n\nTo the amazement of the court, Mr. Akan replied \"I am not surprised! After all, what is to stop it from going out?\" Visibly angry, Hon. Justice Kings ordered him to enter the dock but Ojomo, SAN, made a plea of leniency on his behalf.",
            question: "I. Z. Akan, Esq as (12) ........ owe a duty to (13) .............",
            options: {
              a: "Air his grievances against the judge.",
              b: "Communicate with the judge.",
              c: "Treat the court with respect, dignity and honour.",
              d: "Solicit for the Judge's assistance in winning his case.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: "Anthony Uchenna, a legal practitioner of 5 years standing was briefed by Mrs. Mary Ikenga to represent her at negotiation proceeding for the purchase of her plot of land by Zion Bank in Bwari. The sum of N10,000,000.00 (Ten million naira only) was paid by the bank to Anthony as the negotiated purchase price for the land. Immediately the money was paid to him, he bought a Toyota Camry Car worth N5,000,000.00 and gave the remaining N5,000,000.00 to Mrs. Ikenga contending that the money he took was his professional charges.",
            question: "Anthony Uchendu ought to pay the money into:",
            options: {
              a: "Trust Account",
              b: "Client Account",
              c: "Personal Account",
              d: "Firm's Account",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "Anthony Uchenna, a legal practitioner of 5 years standing was briefed by Mrs. Mary Ikenga to represent her at negotiation proceeding for the purchase of her plot of land by Zion Bank in Bwari. The sum of N10,000,000.00 (Ten million naira only) was paid by the bank to Anthony as the negotiated purchase price for the land. Immediately the money was paid to him, he bought a Toyota Camry Car worth N5,000,000.00 and gave the remaining N5,000,000.00 to Mrs. Ikenga contending that the money he took was his professional charges.",
            question: "One of the following was violated by Anthony:",
            options: {
              a: "The Legal Practitioner's Account Rules 1964",
              b: "The Rules of Professional Conduct 2017.",
              c: "All of the above",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Anthony Uchenna, a legal practitioner of 5 years standing was briefed by Mrs. Mary Ikenga to represent her at negotiation proceeding for the purchase of her plot of land by Zion Bank in Bwari. The sum of N10,000,000.00 (Ten million naira only) was paid by the bank to Anthony as the negotiated purchase price for the land. Immediately the money was paid to him, he bought a Toyota Camry Car worth N5,000,000.00 and gave the remaining N5,000,000.00 to Mrs. Ikenga contending that the money he took was his professional charges.",
            question: "As a statutory requirement, Uchendu could only have obtained his professional fee if he:",
            options: {
              a: "Serves a bill of charges on Mrs. Ikenga.",
              b: "Writes a letter to Mrs. Ikenga.",
              c: "Sends a text message to Mrs. Ikenga",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "Anthony Uchenna, a legal practitioner of 5 years standing was briefed by Mrs. Mary Ikenga to represent her at negotiation proceeding for the purchase of her plot of land by Zion Bank in Bwari. The sum of N10,000,000.00 (Ten million naira only) was paid by the bank to Anthony as the negotiated purchase price for the land. Immediately the money was paid to him, he bought a Toyota Camry Car worth N5,000,000.00 and gave the remaining N5,000,000.00 to Mrs. Ikenga contending that the money he took was his professional charges.",
            question: "The major Rule of professional Conduct breached by Anthony can be found in Rule ..................",
            options: {
              a: "Rule 22 of rules of professional conduct.",
              b: "Rule 23",
              c: "Rule 24",
              d: "Rule 25",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "Anthony Uchenna, a legal practitioner of 5 years standing was briefed by Mrs. Mary Ikenga to represent her at negotiation proceeding for the purchase of her plot of land by Zion Bank in Bwari. The sum of N10,000,000.00 (Ten million naira only) was paid by the bank to Anthony as the negotiated purchase price for the land. Immediately the money was paid to him, he bought a Toyota Camry Car worth N5,000,000.00 and gave the remaining N5,000,000.00 to Mrs. Ikenga contending that the money he took was his professional charges.",
            question: "The money given to Anthony Uchendu may not be paid into the appropriate account, if:",
            options: {
              a: "Mrs. Ikenga instructed him.",
              b: "The General Bar Council permits.",
              c: "If the money is to be paid to Mrs. Ikenga direct.",
              d: "All of the above.",
            },
            answer: "d",
          },
          {
            id: 19,
            context: "During your court externship, you noted the following in your logbook:-",
            question: "That counsel introduced themselves to the court by:",
            options: {
              a: "Entering appearances",
              b: "Introduce their appearances",
              c: "Exhibit their appearances",
              d: "Announcing their appearances",
            },
            answer: "d",
          },
          {
            id: 20,
            context: "During your court externship, you noted the following in your logbook:-",
            question: "Counsel did not leave the court room once the number of counsel would otherwise be reduced to 2 because, counsel would not want to:",
            options: {
              a: "Empty the court",
              b: "Anhilate the court",
              c: "Disgrace the court",
              d: "Undress the court.",
            },
            answer: "d",
          },
        ],
      },
      {
        id: "2019-august-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Chief Apagu Agu is the landlord of a shopping mall popularly known as \"buy one and get one free\" situate at No.1, Ajayi Wafer's Close, Kuba, Abuja, Federal Capital Territory. Chief Ugoh Okaka rented a shop in the Mall under a yearly tenancy commencing 1st January, 2018 with a clause in the tenancy agreement that \"the tenant shall use the premises only for buying and selling\". Since market was not moving as expected, Chief Ugoh Okaka has converted his shop to a religious worship centre. Chief Apagu Agu has instructed you to eject the tenant from the premises.",
            question: "What is the length of notice required to eject tenant from the premises.",
            options: {
              a: "One month notice",
              b: "A quarter notice",
              c: "Six months' notice",
              d: "One year notice",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Chief Apagu Agu is the landlord of a shopping mall popularly known as \"buy one and get one free\" situate at No.1, Ajayi Wafer's Close, Kuba, Abuja, Federal Capital Territory. Chief Ugoh Okaka rented a shop in the Mall under a yearly tenancy commencing 1st January, 2018 with a clause in the tenancy agreement that \"the tenant shall use the premises only for buying and selling\". Since market was not moving as expected, Chief Ugoh Okaka has converted his shop to a religious worship centre. Chief Apagu Agu has instructed you to eject the tenant from the premises.",
            question: "If the notice to quit is issued on the 1st June, 2018, when will the notice expire?",
            options: {
              a: "30th June, 2018",
              b: "1st July, 2018",
              c: "1st December, 2018",
              d: "31st December, 2018",
            },
            answer: "d",
          },
          {
            id: 3,
            context: "Chief Apagu Agu is the landlord of a shopping mall popularly known as \"buy one and get one free\" situate at No.1, Ajayi Wafer's Close, Kuba, Abuja, Federal Capital Territory. Chief Ugoh Okaka rented a shop in the Mall under a yearly tenancy commencing 1st January, 2018 with a clause in the tenancy agreement that \"the tenant shall use the premises only for buying and selling\". Since market was not moving as expected, Chief Ugoh Okaka has converted his shop to a religious worship centre. Chief Apagu Agu has instructed you to eject the tenant from the premises.",
            question: "At the expiration of the notice to quit, the landlord is further expected to issue ----------- Notice of owner's intention to apply to court to recover possession.",
            options: {
              a: "7 days",
              b: "21 days",
              c: "14 days",
              d: "8 days",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "Chief Apagu Agu is the landlord of a shopping mall popularly known as \"buy one and get one free\" situate at No.1, Ajayi Wafer's Close, Kuba, Abuja, Federal Capital Territory. Chief Ugoh Okaka rented a shop in the Mall under a yearly tenancy commencing 1st January, 2018 with a clause in the tenancy agreement that \"the tenant shall use the premises only for buying and selling\". Since market was not moving as expected, Chief Ugoh Okaka has converted his shop to a religious worship centre. Chief Apagu Agu has instructed you to eject the tenant from the premises.",
            question: "Where the Magistrate Court has given order for possession to Chief Apagu Agu and Chief Ugoh Okaka is still in occupation, what should the landlord do in the circumstance?",
            options: {
              a: "Throw the belongings of the tenant out of the premises.",
              b: "Apply for warrant of possession.",
              c: "Apply to court for contempt for disobeying court order.",
              d: "Apply for summons to imprison the defendant.",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "Chief Apagu Agu is the landlord of a shopping mall popularly known as \"buy one and get one free\" situate at No.1, Ajayi Wafer's Close, Kuba, Abuja, Federal Capital Territory. Chief Ugoh Okaka rented a shop in the Mall under a yearly tenancy commencing 1st January, 2018 with a clause in the tenancy agreement that \"the tenant shall use the premises only for buying and selling\". Since market was not moving as expected, Chief Ugoh Okaka has converted his shop to a religious worship centre. Chief Apagu Agu has instructed you to eject the tenant from the premises.",
            question: "The defendant (tenant) was not satisfied with the judgment of the Chief Magistrate and wants to appeal, where will the appeal be filed?",
            options: {
              a: "The Chief Magistrate court",
              b: "The High Court",
              c: "The Rent Tribunal",
              d: "The Code of Conduct Bureau",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "Following the death of Chief Awal Amadu, the Stool of the paramount ruler of Burugu Kingdom, Abuja became vacant. Alhaji Awal Jauro from the Wambai ruling family was nominated by the Kingmakers to succeed the deceased paramount ruler. This did not go down well with the Dandam Ruling Family as they believed it was their turn to succeed the deceased. They have approached you as a counsel to seek legal redress on their behalf.",
            question: "Considering the number of your clients how will you institute the action?",
            options: {
              a: "The suit will be instituted in a representative capacity.",
              b: "A class action will be instituted",
              c: "Obtain the leave of the Attorney-General before instating the action",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "Following the death of Chief Awal Amadu, the Stool of the paramount ruler of Burugu Kingdom, Abuja became vacant. Alhaji Awal Jauro from the Wambai ruling family was nominated by the Kingmakers to succeed the deceased paramount ruler. This did not go down well with the Dandam Ruling Family as they believed it was their turn to succeed the deceased. They have approached you as a counsel to seek legal redress on their behalf.",
            question: "By what mode will you commence the action?",
            options: {
              a: "Originating motion",
              b: "Originating summons",
              c: "Writ of summons",
              d: "Originating application.",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "Following the death of Chief Awal Amadu, the Stool of the paramount ruler of Burugu Kingdom, Abuja became vacant. Alhaji Awal Jauro from the Wambai ruling family was nominated by the Kingmakers to succeed the deceased paramount ruler. This did not go down well with the Dandam Ruling Family as they believed it was their turn to succeed the deceased. They have approached you as a counsel to seek legal redress on their behalf.",
            question: "All the following documents will accompany the mode you have identified above, except",
            options: {
              a: "Statement of Claim",
              b: "Copies of document to be relied on at the trial.",
              c: "Affidavit in support of the application.",
              d: "Certificate of pre-action counseling.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "Following the death of Chief Awal Amadu, the Stool of the paramount ruler of Burugu Kingdom, Abuja became vacant. Alhaji Awal Jauro from the Wambai ruling family was nominated by the Kingmakers to succeed the deceased paramount ruler. This did not go down well with the Dandam Ruling Family as they believed it was their turn to succeed the deceased. They have approached you as a counsel to seek legal redress on their behalf.",
            question: "Assuming the defendants have been served with your originating process, they are expected to enter appearance within ........?",
            options: {
              a: "42 days",
              b: "18 days",
              c: "14 days",
              d: "12 days",
            },
            answer: "c",
          },
          {
            id: 10,
            context: "Following the death of Chief Awal Amadu, the Stool of the paramount ruler of Burugu Kingdom, Abuja became vacant. Alhaji Awal Jauro from the Wambai ruling family was nominated by the Kingmakers to succeed the deceased paramount ruler. This did not go down well with the Dandam Ruling Family as they believed it was their turn to succeed the deceased. They have approached you as a counsel to seek legal redress on their behalf.",
            question: "Assuming the matter goes to trial and both the claimants and the defendants called evidence, who is to file his final written address first and within how many days of the close of hearing?",
            options: {
              a: "The claimant within 14 days of close of hearing.",
              b: "The defendant within 14 days of close of hearing",
              c: "The defendant within 21 days of close of hearing.",
              d: "The claimant within 21 days of close of hearing.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "On the fourth day of your externship programme at the Lagos State High Court presided over by Hon. Justice Jones, counsel for the claimant after announcing his appearance informed the court of a pending motion for stay of proceedings. He further prayed the court to hear the motion. The defendant's counsel, on the other hand, argued that the motion was still unripe for hearing and he was still within time to respond to the motion. The court therefore, denied leave for hearing of the application.",
            question: "The statutory period between the service of a motion and the hearing of the same is:",
            options: {
              a: "After two weeks of service on the Respondent.",
              b: "After two months of service on the Respondent.",
              c: "After two days of service on the Respondent.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "On the fourth day of your externship programme at the Lagos State High Court presided over by Hon. Justice Jones, counsel for the claimant after announcing his appearance informed the court of a pending motion for stay of proceedings. He further prayed the court to hear the motion. The defendant's counsel, on the other hand, argued that the motion was still unripe for hearing and he was still within time to respond to the motion. The court therefore, denied leave for hearing of the application.",
            question: "Assuming the application for stay in the scenario above was heard and the trial court refused the application:",
            options: {
              a: "The applicant may apply to another High Court of coordinate jurisdiction.",
              b: "The applicant may apply to the Court of Appeal.",
              c: "The applicant may apply for injunction pending appeal against the High Court Judge.",
              d: "The applicant may protest the refusal by the Judge.",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "On the fourth day of your externship programme at the Lagos State High Court presided over by Hon. Justice Jones, counsel for the claimant after announcing his appearance informed the court of a pending motion for stay of proceedings. He further prayed the court to hear the motion. The defendant's counsel, on the other hand, argued that the motion was still unripe for hearing and he was still within time to respond to the motion. The court therefore, denied leave for hearing of the application.",
            question: "Where no counter-affidavit is filed by the Respondent in an application for stay or any other motion in the High Court, the Respondent will only be allowed to argue issues of:",
            options: {
              a: "Mixed law and fact",
              b: "Fact alone",
              c: "Law alone",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: null,
            question: "A Law School student on externship to one of the under listed courts is most likely to witness cases involving petition for winding up of companies than his/her counterparts in other courts. Identify the court.",
            options: {
              a: "The Court of Appeal",
              b: "The High Court of State",
              c: "The National Industrial Court",
              d: "The Federal High Court",
            },
            answer: "d",
          },
          {
            id: 15,
            context: "In order to test your requisite knowledge of Case Management Conference, your field supervisor invited you to attend Case Management Conference. After the proceedings, he asked you some questions, among them:",
            question: "One of the following shall constitute an Agenda for the Case Management Conference as stated under the Rules.",
            options: {
              a: "Adoption of witness statement on oath",
              b: "Registration of the judgment of the case management judge.",
              c: "Control and scheduling of discovery, inspection and production of documents.",
              d: "Media coverage of the case management proceedings.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "In order to test your requisite knowledge of Case Management Conference, your field supervisor invited you to attend Case Management Conference. After the proceedings, he asked you some questions, among them:",
            question: "What are the processes that you need to file to commence the case management conference?",
            options: {
              a: "Statement of defence, affidavit in support, witness statement on oath and list witnesses.",
              b: "Case Management notice and case management information sheet.",
              c: "Writ of Summons, motion on notice and supporting affidavit.",
              d: "Case management certificate and verifying affidavit.",
            },
            answer: "b",
          },
          {
            id: 17,
            context: "In order to test your requisite knowledge of Case Management Conference, your field supervisor invited you to attend Case Management Conference. After the proceedings, he asked you some questions, among them:",
            question: "Assuming the claimant and his counsel were absent on the date fixed for case management conference, which of the following steps can properly be taken by the court?",
            options: {
              a: "Enter judgment against the defendant",
              b: "Dismissal of the action of the claimant",
              c: "Award cost against the defendant",
              d: "Stay further proceedings in the matter until the claimant comes to court.",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "During the cross-examination of the defendant witness in Incorporate Trustees of Child Rescue International US. Timini Jefferson, the claimant's counsel asked questions on matters not stated in the witness statement on oath. Objection was raised by the defendant counsel and the court overruled the objection.",
            question: "Which of these statements is correct about the objection?",
            options: {
              a: "Objections can be raised at any time by either party during the course of proceedings.",
              b: "Objections are restricted only to during examination-in-chief.",
              c: "Objections can only be raised during re-examination.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "During the cross-examination of the defendant witness in Incorporate Trustees of Child Rescue International US. Timini Jefferson, the claimant's counsel asked questions on matters not stated in the witness statement on oath. Objection was raised by the defendant counsel and the court overruled the objection.",
            question: "Also from the scenario above, immediately counsel applied to tender a document as an exhibit during the trial, the next step is:",
            options: {
              a: "For the Registrar to mark the document as an exhibit.",
              b: "For the Judge to inspect the document and make a note as to its reception or rejection.",
              c: "For the Judge to direct that the document be shown to the opposing party for objection, if any.",
              d: "For the Judge to direct that the document be shown to the witness for confirmation.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: null,
            question: "A competent witness is:",
            options: {
              a: "A witness that is eligible to testify in a judicial proceeding.",
              b: "A witness that is obliged to give evidence in court.",
              c: "A witness that has special knowledge in the area he is called upon to testify in court.",
              d: "A witness that can be compelled by subpoena but summoned to give evidence.",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "2019-august-criminal-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "Which court has jurisdiction to entertain this case?",
            options: {
              a: "Federal High Court, Enugu",
              b: "Magistrate Court",
              c: "Enugu State High Court",
              d: "Enugu State Criminal Offences Tribunal.",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "Which of the following statements is false?",
            options: {
              a: "Kalu can plead on behalf of the trio",
              b: "The trio must plead individually",
              c: "The charge must be in respect of each count",
              d: "The plea must be in respect of each count.",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "Assuming the suspects were arraigned before the Enugu State High Court and the accused persons want to appeal against their conviction, what is the length of time to appeal?",
            options: {
              a: "14 days",
              b: "15 days",
              c: "30 days",
              d: "90 days",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "If the accused persons upon the reading of the charge, refused to enter their plea, the court will ............",
            options: {
              a: "Inquire into the reason for their refusal to plead.",
              b: "Order them to take their pleas",
              c: "Charge them for contempt",
              d: "Enter into trial within trial.",
            },
            answer: "a",
          },
          {
            id: 5,
            context: "Kalu Adeola and Musa went out to party at Jumpers Club, Enugu. On the way back from the club, they kidnapped 3 girls who were going home from the club, Joy, Anita and Aisha. They took them to the hostel and raped them severally.",
            question: "After conviction, the court would call for...........before sentencing.",
            options: {
              a: "Plea bargain",
              b: "Allocutus",
              c: "Preliminary objection",
              d: "Any additional address.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "A search of this nature should be conducted between the hours of:",
            options: {
              a: "5.00 a.m. - 8.00 p.m.",
              b: "6.00 a.m. – 7.00 p.m.",
              c: "5.00 a.m. – 9.00p.m.",
              d: "At any time of the day or night.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "The search conducted on Bobo Ikemson by Inspector Josephine Johnson may be held to be unlawful because:",
            options: {
              a: "A search should be conducted by a person of the same sex.",
              b: "A woman can search a man.",
              c: "The search was conducted without a search warrant.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "Bobo Ikemson may regain his freedom where:",
            options: {
              a: "He settles the police by giving him money.",
              b: "Writing a petition to the Inspector General of Police complaining about his arrest and detention.",
              c: "Apply to the court for bail",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "When Bobo Ikemson was arraigned in court, he had no counsel. What should the court do in the circumstance?",
            options: {
              a: "Proceed with the hearing.",
              b: "Detain the accused person in custody until he is able to engage the services of a counsel.",
              c: "Detain the accused person in custody and advise his relations to arrange counsel for him.",
              d: "Stand down the matter until the accused person is able to engage the services of a counsel.",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "Mr. Bobo Ikemson was flagged down by the Police at 12.00 a.m. on August 1, 2018 at the popular Bakori junction, Maitama, Abuja. He was searched by a female Police Inspector, Josephine Johnson and some substances suspected to be heroine was found in his car. Bobo Ikemson was immediately arrested and taken to Maitama Police station where he was detained for two days without being arraigned in court and without access to his family or lawyers.",
            question: "Bobo Ikemson when arraigned in court pleaded guilty to the offence. What should the court do in the circumstance?",
            options: {
              a: "Sentence the accused person based on his plea of guilt.",
              b: "Send the drug (heroin) for forensic analysis.",
              c: "Ask the prosecution to prove his case.",
              d: "Enter plea of not guilty for him.",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "Assuming the counsel is to contest the jurisdiction of the court, which court has jurisdiction to try the offence?",
            options: {
              a: "The State High Court",
              b: "The Federal High Court",
              c: "The Industrial Court",
              d: "The Magistrate Court.",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "The detention for 4 days without access to a lawyer is a violation of ..........",
            options: {
              a: "Right counsel of his choice only.",
              b: "Right to personal liberty only.",
              c: "Right to humane treatment.",
              d: "All of the above",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "One of the following is not a condition the court will consider in granting bail…….",
            options: {
              a: "The health of the accused",
              b: "Whether the accused will jumb bail",
              c: "The prevalence of the crime",
              d: "The status of the accused in the society.",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "Assuming the matter was brought before the Federal High Court, Lagos, which of the following is the proper mode of instituting an action at the Federal High Court?",
            options: {
              a: "Charge",
              b: "Charge sheet",
              c: "Information draft",
              d: "Complaint",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "Idoko Edet was arrested for being in possession of heroin by NDLEA officials. He was detained for 4 days without access to his lawyer. He was tried before the Chief Magistrate Court, Lagos. During his trial, his lawyer applied for his bail but it was turned down. His lawyer intends to apply to the High Court for his bail.",
            question: "The trial of Idoko Sunny is said to commence at the point …..",
            options: {
              a: "He is led into the court",
              b: "When the charge is read and he takes his plea.",
              c: "The prosecution calls its first witness.",
              d: "The defence calls its first witness.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "One of the following is correct about the court:",
            options: {
              a: "The court lacks jurisdiction because the offence is a military offence.",
              b: "The court lacks jurisdiction because the action is statute barred.",
              c: "The court lacks jurisdiction to entertain a charge of treason.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "On the plea of the defendant, the court will do one of the following:",
            options: {
              a: "Enter his plea of guilt",
              b: "Conduct an inquiry as to his mental condition.",
              c: "Enter a plea of not guilty",
              d: "Enter a plea of not guilty with reason.",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "The Federal High Court sitting over the matter will be properly constituted if it sits with:",
            options: {
              a: "One judge",
              b: "At least one Judge",
              c: "Two judges",
              d: "Three judges",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "One of the following is correct about the punishment the court can impose on the defendant.",
            options: {
              a: "Life Imprisonment",
              b: "Beheading",
              c: "Death by electrocution",
              d: "Death by lethal injection.",
            },
            answer: "a",
          },
          {
            id: 20,
            context: "During your externship programme in April 2019, you witnessed a criminal trial at the Federal High Court, Abuja. The defendant was standing trial for treason for trying to overthrow the government. He was alleged to have committed the offence in August 2016. The defendant pleaded guilty and the court consequently convicted him.",
            question: "An appeal against the judgment of the court should be made within:",
            options: {
              a: "3 months of the judgment",
              b: "14 days of the judgment",
              c: "30 days of the judgment",
              d: "90 days of the judgment",
            },
            answer: "b",
          },
        ],
      },
    ],
  },
  "2021-march": {
    year: 2021,
    session: "March",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 20,
    courses: [
      {
        id: "2021-march-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Following an open invitation by president, Federal Republic of Nigeria to Chinese investors during His Excellency's recent visit to Chine, Tshabalala Cuisine (China) Inc. has acquired a strategic plot of land in the Central Business District, Abuja to set up a world class restaurant and food processing plant for export.",
            question: "Which of the following statements is correct?",
            options: {
              a: "Tshabalala Cuisine (China) Inc. qualifies for exemption under Section 56 CAMA.",
              b: "Tshabalala Cuisine (China) Inc. is exempted from registration in Nigeria, the legal implication is that:",
              c: "",
              d: "",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "Following an open invitation by president, Federal Republic of Nigeria to Chinese investors during His Excellency's recent visit to Chine, Tshabalala Cuisine (China) Inc. has acquired a strategic plot of land in the Central Business District, Abuja to set up a world class restaurant and food processing plant for export.",
            question: "Tshabalala Cuisine (China) Inc. is exempted from registration in Nigeria, the legal implication is that:",
            options: {
              a: "It has the status of an unregistered company.",
              b: "It has the status of a private company.",
              c: "It has the status of an unlimited liability company.",
              d: "It has the status of a company limited by guarantee.",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "Following an open invitation by president, Federal Republic of Nigeria to Chinese investors during His Excellency's recent visit to Chine, Tshabalala Cuisine (China) Inc. has acquired a strategic plot of land in the Central Business District, Abuja to set up a world class restaurant and food processing plant for export.",
            question: "Assuming the food items vegetable and fruit required by Tshabalala Cuisine (China) Inc. for its unique cuisine have to be imported from South Africa, which of the following is the most appropriate incentives available to the company if the final products are canned for export to neighbouring countries?",
            options: {
              a: "Pioneer status",
              b: "Local raw materials utilization incentive",
              c: "Duty draw back",
              d: "All of the above",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "Following an open invitation by president, Federal Republic of Nigeria to Chinese investors during His Excellency's recent visit to Chine, Tshabalala Cuisine (China) Inc. has acquired a strategic plot of land in the Central Business District, Abuja to set up a world class restaurant and food processing plant for export.",
            question: "To obtain expatriate quota for the directors (technical operations), the Chinese Company must apply to:",
            options: {
              a: "Minister of Finance through Securities and Exchange Commission.",
              b: "Minister of Foreign Affairs Through the Nigerian Ambassador to South Africa",
              c: "Minister of Agriculture through Corporate affairs Commission.",
              d: "Minister of Interior through the Nigerian Investment Promotion Commission.",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "Following an open invitation by president, Federal Republic of Nigeria to Chinese investors during His Excellency's recent visit to Chine, Tshabalala Cuisine (China) Inc. has acquired a strategic plot of land in the Central Business District, Abuja to set up a world class restaurant and food processing plant for export.",
            question: "Which of the following laws will be Relevant for the incorporation of Tshabalala Cuisine (Nig.) Ltd?",
            options: {
              a: "Nigerian Deposit Insurance Corporation Act",
              b: "Investment and Securities Act",
              c: "Companies and Allied Matters act.",
              d: "Nigerian Investment Promotion Commission Act.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "Following an open invitation by president, Federal Republic of Nigeria to Chinese investors during His Excellency's recent visit to Chine, Tshabalala Cuisine (China) Inc. has acquired a strategic plot of land in the Central Business District, Abuja to set up a world class restaurant and food processing plant for export.",
            question: "The Chinese Company has secured a large pool of Capital which it intends to invest in Nigeria. Which of the following precautionary steps must it take to qualify for fiscal incentive?",
            options: {
              a: "Importation of the loan capital through the Central Bank of Nigeria.",
              b: "Confirmation of the loan by the Nigeria embassy in China.",
              c: "Letter of credence by the Securities and Exchange Commission",
              d: "Importation of the loan capital through an authorised capital dealer in Nigeria.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: null,
            question: "Assuming Tshabalala Cuisine was Incorporated as a public company, which of the following statements is incorrect about the article of association?",
            options: {
              a: "There must be no restriction on the transfer of its shares.",
              b: "There may be no pre-emptive right clause.",
              c: "The content must be in line with the first schedule, Table A, Part 1 of the Companies and Allied Matters Act.",
              d: "It must be stamped as a Deed along with the Memorandum of Association.",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "Omodudu Nigeria PLC was incorporated on 2nd January, 2014. The Company neither held a statutory meeting nor filed statutory Report with CAC. At the 5th Annual General Meeting of the company, Mrs. Longe was absent because, she was not served with a notice of AGM by the Secretary, who reasoned that she will not be able to attend the AGM as she will be going for her swearing-in-ceremony, following her appointment as a Director-General of a Commission. Mrs. Longe later transferred all her shares to Chief and Mrs. Pepple in equal proportion.",
            question: "The statutory meeting of the company should be held within .......... of incorporation.",
            options: {
              a: "180 days.",
              b: "18 months",
              c: "6 months",
              d: "3 months",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "Omodudu Nigeria PLC was incorporated on 2nd January, 2014. The Company neither held a statutory meeting nor filed statutory Report with CAC. At the 5th Annual General Meeting of the company, Mrs. Longe was absent because, she was not served with a notice of AGM by the Secretary, who reasoned that she will not be able to attend the AGM as she will be going for her swearing-in-ceremony, following her appointment as a Director-General of a Commission. Mrs. Longe later transferred all her shares to Chief and Mrs. Pepple in equal proportion.",
            question: "The following are entitled to receive notice of the AGM except:",
            options: {
              a: "Every director of the company",
              b: "Every auditor for the time being of the company.",
              c: "Every member of the company",
              d: "Every legal adviser for the time being of the country.",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "Omodudu Nigeria PLC was incorporated on 2nd January, 2014. The Company neither held a statutory meeting nor filed statutory Report with CAC. At the 5th Annual General Meeting of the company, Mrs. Longe was absent because, she was not served with a notice of AGM by the Secretary, who reasoned that she will not be able to attend the AGM as she will be going for her swearing-in-ceremony, following her appointment as a Director-General of a Commission. Mrs. Longe later transferred all her shares to Chief and Mrs. Pepple in equal proportion.",
            question: "The following statements are Correct in respect of notice of the general meeting of the company except:",
            options: {
              a: "Compliance with the prescribed form of preparing the notice.",
              b: "Specify the place, date and time of the meeting.",
              c: "Specify the general nature of the business to be transacted",
              d: "Set out the terms of the special resolution to be considered at the meeting if any.",
            },
            answer: "a",
          },
          {
            id: 11,
            context: "Omodudu Nigeria PLC was incorporated on 2nd January, 2014. The Company neither held a statutory meeting nor filed statutory Report with CAC. At the 5th Annual General Meeting of the company, Mrs. Longe was absent because, she was not served with a notice of AGM by the Secretary, who reasoned that she will not be able to attend the AGM as she will be going for her swearing-in-ceremony, following her appointment as a Director-General of a Commission. Mrs. Longe later transferred all her shares to Chief and Mrs. Pepple in equal proportion.",
            question: "The following statements are correct about the company except:",
            options: {
              a: "Where directors and members are dead, the personal representatives of the shareholders of the company can apply to the court and hold the company's meeting where new members and directors will be appointed.",
              b: "Where directors and members are dead, a creditor of the company can apply to the Court to convene a meeting of the company where new members and director will be appointed.",
              c: "The company can merge with another company.",
              d: "The company can sponsor political party.",
            },
            answer: "d",
          },
          {
            id: 12,
            context: null,
            question: "The Annual Return of the company must be filed within ................days of holding.",
            options: {
              a: "40 days",
              b: "42 days",
              c: "60 days",
              d: "90",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "During your externship programme, assuming you did legal research on position of law regarding Minutes book and wrote a legal opinion for your Law on S. 244 (1) (2) CAMA 2004.",
            question: "The Minutes book of a company, should be kept at the ...... of the company",
            options: {
              a: "Registered office of the company",
              b: "Corporate office of the company",
              c: "Banker office of the company",
              d: "Corporate Affairs Commission.",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "During your externship programme, assuming you did legal research on position of law regarding Minutes book and wrote a legal opinion for your Law on S. 244 (1) (2) CAMA 2004.",
            question: "The minute book of a company Shall be opened for inspection for at least....... hours in a day.",
            options: {
              a: "7",
              b: "10",
              c: "5",
              d: "6",
            },
            answer: "d",
          },
          {
            id: 15,
            context: "During your externship programme, assuming you did legal research on position of law regarding Minutes book and wrote a legal opinion for your Law on S. 244 (1) (2) CAMA 2004.",
            question: "The company",
            options: {
              a: "May charge for inspection of minutes book.",
              b: "Must charge for inspection of minute book.",
              c: "Is not expected to charge for Inspection of minute book.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "During your externship programme, assuming you did legal research on position of law regarding Minutes book and wrote a legal opinion for your Law on S. 244 (1) (2) CAMA 2004.",
            question: "Where a member pays for copies to be delivered to him, the company is obliged to supply the copy within ...... days of payment.",
            options: {
              a: "7",
              b: "14",
              c: "8",
              d: "15",
            },
            answer: "a",
          },
          {
            id: 17,
            context: "During your externship programme, assuming you did legal research on position of law regarding Minutes book and wrote a legal opinion for your Law on S. 244 (1) (2) CAMA 2004.",
            question: "The Minutes Book is kept in all except:",
            options: {
              a: "Bound books",
              b: "Loose leaf",
              c: "Electronic device",
              d: "Museum",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "Morning Glory Limited was incorporated on 5th June, 2020. A board of meeting of the company which was fixed to appoint the managing director could not hold because of Covid 19. All the directors however signed a resolution in writing appointing Mr. Onwu as the managing director. At another board meeting held on 1st September, 2020, the chairman, Igwe Osinachi did not arrive until two hours after the time the meeting was scheduled to commence.",
            question: "The resolution appointing Mr. Onwu as the managing director of the Company is:",
            options: {
              a: "Special Resolution",
              b: "Ordinary Resolution",
              c: "Written Resolution",
              d: "Board Resolution",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "Morning Glory Limited was incorporated on 5th June, 2020. A board of meeting of the company which was fixed to appoint the managing director could not hold because of Covid 19. All the directors however signed a resolution in writing appointing Mr. Onwu as the managing director. At another board meeting held on 1st September, 2020, the chairman, Igwe Osinachi did not arrive until two hours after the time the meeting was scheduled to commence.",
            question: "The following statements are correct in respect of written resolution except:",
            options: {
              a: "General meeting of a private company can pass a written resolution.",
              b: "General meeting of a public company can pass a written resolution.",
              c: "Board meeting of a private company can pass a written resolution.",
              d: "A written resolution must be signed by all who are entitled to attend and vote at the meeting.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "Morning Glory Limited was incorporated on 5th June, 2020. A board of meeting of the company which was fixed to appoint the managing director could not hold because of Covid 19. All the directors however signed a resolution in writing appointing Mr. Onwu as the managing director. At another board meeting held on 1st September, 2020, the chairman, Igwe Osinachi did not arrive until two hours after the time the meeting was scheduled to commence.",
            question: "How long could Chief Osinachi be late before other board members of the company can appoint another member to chair the meeting?",
            options: {
              a: "5 minutes",
              b: "15 minutes",
              c: "1 hour",
              d: "45 minutes",
            },
            answer: "bonus",
          },
        ],
      },
    ],
  },
  "2022-may": {
    year: 2022,
    session: "May",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 60,
    courses: [
      {
        id: "2022-may-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19. Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.\nAnswer the following questions:",
            question: "ABC Plc must",
            options: {
              a: "make an allotment of the shares within 42 days of the public offer.",
              b: "Notify the Allottees within 42 days of allotments.",
              c: "Deliver the share certificates to the Allottees after 42 days.",
              d: "File return of Allotment within 42 days of Allotment.",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19. Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.\nAnswer the following questions:",
            question: "The price of each share of ABC Plc.  at the Nigerian Stock Exchange is  now N12.50k. The share premium transferred to the share premium account by the company in respect of each share is:",
            options: {
              a: "N9.50k",
              b: "N12.00k",
              c: "N2.50k",
              d: "N12.50k",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19. Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.\nAnswer the following questions:",
            question: "One of these is correct.  The share Premium account may be used to:",
            options: {
              a: "Increase the authorized share capital of the company",
              b: "Pay for bonus shares",
              c: "Pay for expenses incurred on the issue of shares.",
              d: "Provide premium payable on the Redemption of any redeemable shares.",
            },
            answer: "bonus",
          },
          {
            id: 4,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19. Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.\nAnswer the following questions:",
            question: "Shareholder shall be entitled to only One vote per share except:",
            options: {
              a: "Upon a resolution to change the Object clause",
              b: "At a statutory meeting",
              c: "Upon any resolution to remove The Chairman",
              d: "A preference shareholder upon any resolution to vary the rights attachment to his shares.",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19. Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.\nAnswer the following questions:",
            question: "Which of the following clauses of the articles of association must be deleted in a change from a private company to a public company of DEC limited?",
            options: {
              a: "Pre-emptive right clause",
              b: "Restriction clause",
              c: "Class of share clause",
              d: "Custody of common seal clause.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19. Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.\nAnswer the following questions:",
            question: "When a person is appointed as a life Director it implies that:",
            options: {
              a: "Only death can remove him from office.",
              b: "He cannot be a full-time Director",
              c: "He is exempted from retirement by rotation.",
              d: "He can appoint and remove other Directors.",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "Ojo Emmanuel, Musa Aliu and Emeka Anan are businessmen from the same village.  They intend to commence the business of distribution of cements nationwide.  Answer the following questions:",
            question: "The following names can be used by the partners and will not require registration with CAC except:",
            options: {
              a: "Ojo Emmanuel, Musa Aliu and Emeka Anan.",
              b: "O. Emmanuel, M. Aliu and E. Anan",
              c: "Emmanuel Aliu Emeka Partners",
              d: "Emmanuel, Aliu and Anan",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "Ojo Emmanuel, Musa Aliu and Emeka Anan are businessmen from the same village.  They intend to commence the business of distribution of cements nationwide.  Answer the following questions:",
            question: "Registration of the business with the CAC must be done within:",
            options: {
              a: "42 days after the partnership Deed has been signed.",
              b: "42 days after CAC Availability Has been obtained.",
              c: "28 days of the commencement of business.",
              d: "Anytime they so desire.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "Ojo Emmanuel, Musa Aliu and Emeka Anan are businessmen from the same village.  They intend to commence the business of distribution of cements nationwide.  Answer the following questions:",
            question: "Partnership deed is:",
            options: {
              a: "Needed but not mandatory",
              b: "Mandatory",
              c: "Mandatory by CAMA",
              d: "All of the above",
            },
            answer: "bonus",
          },
          {
            id: 10,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "The statutory meeting of the Blue Bird Bank Plc shall be held within …. of incorporation?",
            options: {
              a: "12 months",
              b: "6 months",
              c: "3 months",
              d: "1 month.",
            },
            answer: "b",
          },
          {
            id: 11,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "Notice of the increase shall be Delivered to Corporate Affairs  Commission not later than?",
            options: {
              a: "15 days",
              b: "14 days",
              c: "1 month",
              d: "21 days.",
            },
            answer: "a",
          },
          {
            id: 12,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "Application for cancellation of the resolution seeking to alter the business or object clause of the Blue Bird Bank Plc can only be made by members:",
            options: {
              a: "Who were present but abstained From voting at the meeting.",
              b: "Who were present at the meeting But voted against the resolution.",
              c: "Who were not present at the Meeting where the resolution was passed.",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "The application for cancellation of the resolution seeking to alter the business or object clause of the Blue Bird Bank Plc shall be made to the Court within……of the passing of of the resolution.",
            options: {
              a: "14 days",
              b: "15 days",
              c: "21 days",
              d: "28 days",
            },
            answer: "d",
          },
          {
            id: 14,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "Blue Bird Bank Plc shall within months of giving of the notice of increase to Corporate Affairs   Commission, do one of the following:",
            options: {
              a: "Deliver statutory declaration of Solvency to Corporate Affairs   Commission",
              b: "Deliver Notice and Statement of increase in share Capital (Form CAC 6) to Federal Inland Revenue Services for stamping.",
              c: "Issue to members, shares not less than 25% of the total share capital.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 15,
            context: "As an extern in the law firm of Gbadujara Solicitors, your principal instructed you to advice the Board of Harmony Nigeria Limited a company consisting of 42 members.  A special resolution to reduce the authorized share capital of the company from N10 million naira to N5 million naira was proposed. 28 members attended the meeting.  The number of members required to pass the resolution if all those that were present voted are:",
            question: "As an extern in the law firm of Gbadujara Solicitors, your principal instructed you to advice the Board of Harmony Nigeria Limited a company consisting of 42 members.  A special resolution to reduce the authorized share capital of the company from N10 million naira to N5 million naira was proposed. 28 members attended the meeting.  The number of members required to pass the resolution if all those that were present voted are:",
            options: {
              a: "21",
              b: "18",
              c: "22",
              d: "16",
            },
            answer: "a",
          },
          {
            id: 16,
            context: null,
            question: "Quorum for general meeting of Harmony Nigeria Limited will be",
            options: {
              a: "As determined by the order of court",
              b: "Two third of membersz",
              c: "As stated in the article of Association.",
              d: "As determined by Corporate Affairs Commission",
            },
            answer: "c",
          },
          {
            id: 17,
            context: null,
            question: "Harmony Nigeria Limited will Require special resolution to do All except:",
            options: {
              a: "Removing a life director",
              b: "Change of name",
              c: "Alteration of business objects",
              d: "Conversion to public company",
            },
            answer: "a",
          },
          {
            id: 18,
            context: null,
            question: "Harmony Nigeria Limited needs Not keep",
            options: {
              a: "Register of members",
              b: "Minute book",
              c: "Index of members",
              d: "Register of directors.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: "Assuming Mr. Bassey Ibom a shareholder in Harmony Nigeria Limited has transferred the share worth of N1 million naira held by him to Mr. John Ojukwu.  The document required to be executed by Bassey Ibom in order to complete the transfer is:",
            question: "Assuming Mr. Bassey Ibom a shareholder in Harmony Nigeria Limited has transferred the share worth of N1 million naira held by him to Mr. John Ojukwu.  The document required to be executed by Bassey Ibom in order to complete the transfer is:",
            options: {
              a: "Deed of Assignment",
              b: "Deed of Transfer",
              c: "Instrument of Transfer",
              d: "Instrument of Assent",
            },
            answer: "c",
          },
          {
            id: 20,
            context: null,
            question: "The registration of the transfer of shares above is:",
            options: {
              a: "At the discretion of the Board of Directors",
              b: "Automatically",
              c: "Subject to the order of the court",
              d: "Upon approval by Corporate Affairs Commission.",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "2022-may-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "During the Court Externship programme, the students on Externship in one of the proceedings witnesses the moving of a motion for interlocutory injunction in the suit between James Abeki and Ditoran Nigeria Limited.",
            question: "When the matter was called by the Court Clerk, the lawyers came to represent their clients will–",
            options: {
              a: "Enter appearance",
              b: "Announce appearance",
              c: "Mark the register",
              d: "Mention appearance",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "During the Court Externship programme, the students on Externship in one of the proceedings witnesses the moving of a motion for interlocutory injunction in the suit between James Abeki and Ditoran Nigeria Limited.",
            question: "The parties to this application are referred to as –",
            options: {
              a: "Applicant and Defendant",
              b: "Petitioner and Respondent",
              c: "Appellant and Respondent",
              d: "Applicant and Respondent",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "During the Court Externship programme, the students on Externship in one of the proceedings witnesses the moving of a motion for interlocutory injunction in the suit between James Abeki and Ditoran Nigeria Limited.",
            question: "An application for an order of interlocutory injunction is usually done by—",
            options: {
              a: "Motion exparte, supported by an affidavit and a written statement.",
              b: "Motion on notice supported by an affidavit and a witness address",
              c: "Originating m, supported by affidavit and a written statement",
              d: "Motion on notice, supported by an affidavit and a written address.",
            },
            answer: "a",
          },
          {
            id: 4,
            context: "During the Court Externship programme, the students on Externship in one of the proceedings witnesses the moving of a motion for interlocutory injunction in the suit between James Abeki and Ditoran Nigeria Limited.",
            question: "A party who wants to oppose such an application will do so by relying on his—",
            options: {
              a: "Further affidavit",
              b: "Verifying affidavit",
              c: "Counter affidavit",
              d: "Affidavit in support",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "During the Court Externship programme, the students on Externship in one of the proceedings witnesses the moving of a motion for interlocutory injunction in the suit between James Abeki and Ditoran Nigeria Limited.",
            question: "An affidavit in support of the motion Referred to above should contain—",
            options: {
              a: "Legal argument",
              b: "Objection",
              c: "Facts",
              d: "Conclusion",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Sometime in March 2019, Mrs Beauty Brown borrowed the sum of N10 million naira from her neighbour and friend Mrs Ngozi Ezego in Ikeja, Lagos State for the expansion of her supermarket. Mrs beauty Brown has refused to pay back the money till date despite several letters of demand. Mrs Ngozi Ezego has therefore briefed you to institute an action against Mrs Beauty Brown to recover the sum of N10 million together with the agreed interest of N2.5 million which was calculated by his accountant.",
            question: "The action will be commenced at The—",
            options: {
              a: "High court because the claim falls within the monetary jurisdiction of the High Court.",
              b: "Federal high Court because the matter has to do with loan transaction.",
              c: "Magistrate Court because the claim falls within the monetary jurisdiction of the Magistrate Court.",
              d: "Small Claims Court because the claim is for recovery of debt and liquidated sum.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "Sometime in March 2019, Mrs Beauty Brown borrowed the sum of N10 million naira from her neighbour and friend Mrs Ngozi Ezego in Ikeja, Lagos State for the expansion of her supermarket. Mrs beauty Brown has refused to pay back the money till date despite several letters of demand. Mrs Ngozi Ezego has therefore briefed you to institute an action against Mrs Beauty Brown to recover the sum of N10 million together with the agreed interest of N2.5 million which was calculated by his accountant.",
            question: "Service of the originating processes will be effected on the defendant in one of the following ways:",
            options: {
              a: "By posting on the door of his last Known address.",
              b: "By serving him through any member of his family that can be found at his place of business or residence.",
              c: "By serving him personally.",
              d: "Either (a) or (b)",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "Sometime in March 2019, Mrs Beauty Brown borrowed the sum of N10 million naira from her neighbour and friend Mrs Ngozi Ezego in Ikeja, Lagos State for the expansion of her supermarket. Mrs beauty Brown has refused to pay back the money till date despite several letters of demand. Mrs Ngozi Ezego has therefore briefed you to institute an action against Mrs Beauty Brown to recover the sum of N10 million together with the agreed interest of N2.5 million which was calculated by his accountant.",
            question: "If the Claimant wants to obtain Judgement expeditiously in the Matter using the quickest procedure\nHe will—",
            options: {
              a: "Apply for summary judgment under Order II",
              b: "Apply for summary judgment under Order 13",
              c: "Apply for fast track procedure under Order 56",
              d: "Apply for undefended list procedure under Order 35.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Sometime in March 2019, Mrs Beauty Brown borrowed the sum of N10 million naira from her neighbour and friend Mrs Ngozi Ezego in Ikeja, Lagos State for the expansion of her supermarket. Mrs beauty Brown has refused to pay back the money till date despite several letters of demand. Mrs Ngozi Ezego has therefore briefed you to institute an action against Mrs Beauty Brown to recover the sum of N10 million together with the agreed interest of N2.5 million which was calculated by his accountant.",
            question: "Assuming Mr. Tom Brown stood as a Guarantor for his wife Mrs Beauty Brown in the loan agreement and Mrs Ngozi Ezego wants to join him as a party in the action so that he can bear eventual liability either in whole or in part if judgment is given against him. What application will you advise him to tile in court?",
            options: {
              a: "Interpleader Summons",
              b: "Joinder as an intervener",
              c: "Joinder as a co-defendant",
              d: "Third party proceedings",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "Sometime in March 2019, Mrs Beauty Brown borrowed the sum of N10 million naira from her neighbour and friend Mrs Ngozi Ezego in Ikeja, Lagos State for the expansion of her supermarket. Mrs beauty Brown has refused to pay back the money till date despite several letters of demand. Mrs Ngozi Ezego has therefore briefed you to institute an action against Mrs Beauty Brown to recover the sum of N10 million together with the agreed interest of N2.5 million which was calculated by his accountant.",
            question: "By what mode will he bring the Application in (9) above?",
            options: {
              a: "Motion on Notice",
              b: "Motion on Exparte",
              c: "Summons on Notice",
              d: "Notice of Motion",
            },
            answer: "a",
          },
          {
            id: 11,
            context: "Mr. Abacha is the owner of an acre of land situated at 53 Blackacre Street, in Lagos Island. Mr. Gbolahan is encroaching on the land. Mr. Abada has briefed you to take up his case against Mr. Gbolahan for declaration of title to land.",
            question: "What will be the mode of commencement of an action brought against Mr. Gbolahan?",
            options: {
              a: "Originating summons",
              b: "Ordinary summons",
              c: "Writ of summons",
              d: "Petition.",
            },
            answer: "a",
          },
          {
            id: 12,
            context: "Mr. Abacha is the owner of an acre of land situated at 53 Blackacre Street, in Lagos Island. Mr. Gbolahan is encroaching on the land. Mr. Abada has briefed you to take up his case against Mr. Gbolahan for declaration of title to land.",
            question: "One of the following is not a document to be filed in commencing an action against Mr. Gbolahan.",
            options: {
              a: "Certificate of pre-action Counselling.",
              b: "List of witnesses to be called at the trial",
              c: "Copies of documents to be relied upon.",
              d: "Statement on oath of the witnesses",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "Mr. Abacha is the owner of an acre of land situated at 53 Blackacre Street, in Lagos Island. Mr. Gbolahan is encroaching on the land. Mr. Abada has briefed you to take up his case against Mr. Gbolahan for declaration of title to land.",
            question: "Mr. Abada wants to know the life span of the originating process you issued on his behalf to Mr. Gbolahan. Your advice to him is that the life span of the originating process is—",
            options: {
              a: "6 months renewable for subsequent periods of 6 months.",
              b: "6 months, renewable for another single period of 6 months.",
              c: "6 months renewable for two periods of 3 months each.",
              d: "3 months, renewable for subsequent period of 3 months.",
            },
            answer: "a",
          },
          {
            id: 14,
            context: null,
            question: "A writ of summons must be Endorsed with the following Particulars except one:",
            options: {
              a: "Time within which the defendant is to enter appearance.",
              b: "Name and particulars of the parties.",
              c: "Cost of the action",
              d: "The particulars of the claim.",
            },
            answer: "bonus",
          },
          {
            id: 15,
            context: null,
            question: "At the end of the trial, the defendant will address the court first:",
            options: {
              a: "If the claimant does not adduce evidence.",
              b: "If the defendant did not adduce evidence.",
              c: "If the claimant adduce evidence.",
              d: "If the defendant adduce evidence.",
            },
            answer: "d",
          },
          {
            id: 16,
            context: "Mr. Ola Dada got married to then Miss Aisha Yusuf in Jos under the Matrimonial Causes Act at the marriage Registry. The union is blessed with three children age 21, 17 and 14 respectively. Recently, they have been having some irreconcilable differences in the marriage despite all the interventions from families and their church pastor. Mr. Ola Dada has decided to move on with his life and he has approached you to help him officially bring the marriage to an end.",
            question: "Which of the following courts have the jurisdiction to entertain your suit.",
            options: {
              a: "High Court of Plateau State.",
              b: "High Court of Lagos State.",
              c: "High Court of Adamawa State.",
              d: "All of the above.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Mr. Ola Dada got married to then Miss Aisha Yusuf in Jos under the Matrimonial Causes Act at the marriage Registry. The union is blessed with three children age 21, 17 and 14 respectively. Recently, they have been having some irreconcilable differences in the marriage despite all the interventions from families and their church pastor. Mr. Ola Dada has decided to move on with his life and he has approached you to help him officially bring the marriage to an end.",
            question: "Which of the underlisted relief is suitable for your client?",
            options: {
              a: "Nullity of marriage",
              b: "Judicial separation",
              c: "Dissolution of marriage",
              d: "Jactitation of marriage.",
            },
            answer: "b",
          },
          {
            id: 18,
            context: "Mr. Ola Dada got married to then Miss Aisha Yusuf in Jos under the Matrimonial Causes Act at the marriage Registry. The union is blessed with three children age 21, 17 and 14 respectively. Recently, they have been having some irreconcilable differences in the marriage despite all the interventions from families and their church pastor. Mr. Ola Dada has decided to move on with his life and he has approached you to help him officially bring the marriage to an end.",
            question: "The domicile of Mrs. Aisha Dada is—",
            options: {
              a: "Where she is born",
              b: "The domicile of her husband Ola dada.",
              c: "Where the marriage is conducted.",
              d: "Where she is residing",
            },
            answer: "bonus",
          },
          {
            id: 19,
            context: "Mr. Ola Dada got married to then Miss Aisha Yusuf in Jos under the Matrimonial Causes Act at the marriage Registry. The union is blessed with three children age 21, 17 and 14 respectively. Recently, they have been having some irreconcilable differences in the marriage despite all the interventions from families and their church pastor. Mr. Ola Dada has decided to move on with his life and he has approached you to help him officially bring the marriage to an end.",
            question: "All but one will accompany the originating process you will use to commence the action.",
            options: {
              a: "Verifying affidavit.",
              b: "Pre-action counselling Certificate.",
              c: "Certificate relating to Reconciliation.",
              d: "Marriage certificate.",
            },
            answer: "a",
          },
          {
            id: 20,
            context: "Mr. Ola Dada got married to then Miss Aisha Yusuf in Jos under the Matrimonial Causes Act at the marriage Registry. The union is blessed with three children age 21, 17 and 14 respectively. Recently, they have been having some irreconcilable differences in the marriage despite all the interventions from families and their church pastor. Mr. Ola Dada has decided to move on with his life and he has approached you to help him officially bring the marriage to an end.",
            question: "Assuming Ola Dada wants Aisha to stop using his name after the marriage has ended, what relief would you ask on his behalf?",
            options: {
              a: "Jacitation of marriage",
              b: "Removal of conjugal rights.",
              c: "Striking of name.",
              d: "Judicial separation.",
            },
            answer: "d",
          },
        ],
      },
      {
        id: "2022-may-criminal-criminal-litigation",
        name: "Criminal Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "The charge in this proceedings is in Breach of:",
            options: {
              a: "The Rule against Misjoinder of Offences",
              b: "The Rule against Duplicity.",
              c: "The Rule against Misjoinder of Offenders",
              d: "The Rule against ambiguity",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "The rule breached in question 1 above is a",
            options: {
              a: "Count-based rule",
              b: "Charge-sheet based rule",
              c: "All of the above",
              d: "None of the above",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "The charge in this proceedings shall be drafted by:",
            options: {
              a: "The Police",
              b: "State Counsel",
              c: "Any of the above",
              d: "The Magistrate.",
            },
            answer: "c",
          },
          {
            id: 4,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "The charge in the above scenario shall be read and explained to the defendant by:",
            options: {
              a: "The Magistrate",
              b: "The Police Orderly in the Court.",
              c: "The registrar/Clerk",
              d: "Any legal practitioner in the court.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "If the counsel to the defendant wishes to raise objection to the competence of the charge on the ground of the age of the defendant, thereto is referred to as:-",
            options: {
              a: "The High Court",
              b: "Juvenile Court",
              c: "Court-Martial",
              d: "Coroner's court.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "The reading and explanation of the charge to the defendant and the response of the defendant thereto is referred to as:-",
            options: {
              a: "Allocutos",
              b: "Arraignment",
              c: "Address",
              d: "Submission",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "The interpreter called upon by the court to interpret to the defendant in the language of his understanding, must be:",
            options: {
              a: "Competent",
              b: "Same language with the defendant",
              c: "A legal practitioner",
              d: "The Magistrate",
            },
            answer: "a",
          },
          {
            id: 8,
            context: "In a trial before the Magistrate's Court of Lagos State involving one Babalele Babajide, 12 years old, in an allegation of stealing, the charge read:\n\n\"that you, Babalele Babajide, on 12th of February, 2021, at No. 1, bank Anthony Mobolaji Way, Lagos, stole and Omega wrist watch, iphone 13 Plus and the cash sum of $3000 U.S Dollars, the properties of Mr. Jackson Taylor, and thereby committed an offence punishable under Section 516 of the Criminal Law of Lagos State.",
            question: "If the defence of Babalele Babafemi to the allegation levelled against him in this charge was that on the date and time mentioned in the charge, he was away at Kaduna in his boarding school, it means he is raising the defence of:",
            options: {
              a: "Judges Rules",
              b: "Alibi",
              c: "Res gestae",
              d: "Trial within trial",
            },
            answer: "b",
          },
          {
            id: 9,
            context: "The Attorney-General of the Federation have commenced a criminal trial against Mr. Babafemi Ajanga and Miss Fetimehin Usman for conspiracy and being in possession of counterfeit currencies. He called 4 witnesses in proof of the offences. When he attempted to tender the statements of the defendants, the 1st defendant's counsel, Mr. lucky Amara, SAN, raised objection to the admissibility of the 1st Defendant's statement on the ground that the 1st defendant never made the statement at all.",
            question: "In the circumstance, the court would:",
            options: {
              a: "Admit the statement",
              b: "Reject the statement",
              c: "Order a trial within trial",
              d: "Do any of the above.",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "The Attorney-General of the Federation have commenced a criminal trial against Mr. Babafemi Ajanga and Miss Fetimehin Usman for conspiracy and being in possession of counterfeit currencies. He called 4 witnesses in proof of the offences. When he attempted to tender the statements of the defendants, the 1st defendant's counsel, Mr. lucky Amara, SAN, raised objection to the admissibility of the 1st Defendant's statement on the ground that the 1st defendant never made the statement at all.",
            question: "Assuming that the counsel to the second defendant objects to the admissibility of his own statement but not on the same ground given by the 1st defendant but on the ground that the statement was obtained involuntarily from him. in the circumstance, the court would:",
            options: {
              a: "Reject the statement",
              b: "Admit the statement",
              c: "Order a trial within trial",
              d: "Close the entire trial.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "The Attorney-General of the Federation have commenced a criminal trial against Mr. Babafemi Ajanga and Miss Fetimehin Usman for conspiracy and being in possession of counterfeit currencies. He called 4 witnesses in proof of the offences. When he attempted to tender the statements of the defendants, the 1st defendant's counsel, Mr. lucky Amara, SAN, raised objection to the admissibility of the 1st Defendant's statement on the ground that the 1st defendant never made the statement at all.",
            question: "The originating processes in this Scenario would be:",
            options: {
              a: "An information",
              b: "A charge",
              c: "First Information report",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "The Attorney-General of the Federation have commenced a criminal trial against Mr. Babafemi Ajanga and Miss Fetimehin Usman for conspiracy and being in possession of counterfeit currencies. He called 4 witnesses in proof of the offences. When he attempted to tender the statements of the defendants, the 1st defendant's counsel, Mr. lucky Amara, SAN, raised objection to the admissibility of the 1st Defendant's statement on the ground that the 1st defendant never made the statement at all.",
            question: "For a confessional statement to be Admissible, it must be:",
            options: {
              a: "Voluntary",
              b: "Relevant, direct and Unequivocal admission of guilt",
              c: "All of the above",
              d: "Any of the above.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "The Attorney-General of the Federation have commenced a criminal trial against Mr. Babafemi Ajanga and Miss Fetimehin Usman for conspiracy and being in possession of counterfeit currencies. He called 4 witnesses in proof of the offences. When he attempted to tender the statements of the defendants, the 1st defendant's counsel, Mr. lucky Amara, SAN, raised objection to the admissibility of the 1st Defendant's statement on the ground that the 1st defendant never made the statement at all.",
            question: "The defendants while being arraigned before the court in this matter shall be placed in:",
            options: {
              a: "The dock",
              b: "The witness box",
              c: "The Bench",
              d: "The Bar",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "The Attorney-General of the Federation have commenced a criminal trial against Mr. Babafemi Ajanga and Miss Fetimehin Usman for conspiracy and being in possession of counterfeit currencies. He called 4 witnesses in proof of the offences. When he attempted to tender the statements of the defendants, the 1st defendant's counsel, Mr. lucky Amara, SAN, raised objection to the admissibility of the 1st Defendant's statement on the ground that the 1st defendant never made the statement at all.",
            question: "Upon the arraignment of the defendants in this matter, they would be entitled to all but one of the following:",
            options: {
              a: "Plead to the charge",
              b: "Have the charge read and Explained to them to the Satisfaction of the court.",
              c: "Be placed in the dock Unfettered.",
              d: "Police bail pending trial.",
            },
            answer: "d",
          },
          {
            id: 15,
            context: "Garba was tried before the Magistrate court of Lokoja, Kogi State. The one count charge was read to him as follows:\n\n\"that you Garba Obi on 10th of March 2022, at the Lokoja General Plaza, within the Lokoja Judicial Division, assaulted one Angelina Tams and had unlawful carnal knowledge of her and thereby committed an offence punishable under section 256 and 211 of the Penal Code law of Kogi State\".",
            question: "The charge above was drafted by:",
            options: {
              a: "Commissioner of Police",
              b: "Director of Public prosecution",
              c: "State counsel",
              d: "A Magistrate",
            },
            answer: "d",
          },
          {
            id: 16,
            context: "Garba was tried before the Magistrate court of Lokoja, Kogi State. The one count charge was read to him as follows:\n\n\"that you Garba Obi on 10th of March 2022, at the Lokoja General Plaza, within the Lokoja Judicial Division, assaulted one Angelina Tams and had unlawful carnal knowledge of her and thereby committed an offence punishable under section 256 and 211 of the Penal Code law of Kogi State\".",
            question: "The charge above breached which rule of drafting charges?",
            options: {
              a: "Rule against ambiguity",
              b: "Rule against misjoinder of offenders",
              c: "Rule against duplicity",
              d: "Rule against misjoinder of offences.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Malachy Imrah and Buchi Ajayi were arrested by the men of the national Agency for Food and Drug Administration and Control (NAFDAC) For missing a chemical substance called Bromatoxine with yeast used in baking bread.\n\nTwo days after their arrest, they were arraigned before the Honourable Justice Dole Dole of the Federal High Court. At the conclusion of the trial, they were sentenced to 5 years imprisonment with haddi lashing.",
            question: "one of the following is true about The arraignment of Malachy and Buchi?",
            options: {
              a: "They would be put in a dock Unfettered.",
              b: "The charge shall be read to them Jointly.",
              c: "They will be asked to plead jointly.",
              d: "One of them shall be asked to plead for the two.",
            },
            answer: "bonus",
          },
          {
            id: 18,
            context: "Malachy Imrah and Buchi Ajayi were arrested by the men of the national Agency for Food and Drug Administration and Control (NAFDAC) For missing a chemical substance called Bromatoxine with yeast used in baking bread.\n\nTwo days after their arrest, they were arraigned before the Honourable Justice Dole Dole of the Federal High Court. At the conclusion of the trial, they were sentenced to 5 years imprisonment with haddi lashing.",
            question: "Their arraignment before the Federal High Court was:",
            options: {
              a: "Proper",
              b: "Improper",
              c: "None of the above",
              d: "All of the above",
            },
            answer: "a",
          },
          {
            id: 19,
            context: "Malachy Imrah and Buchi Ajayi were arrested by the men of the national Agency for Food and Drug Administration and Control (NAFDAC) For missing a chemical substance called Bromatoxine with yeast used in baking bread.\n\nTwo days after their arrest, they were arraigned before the Honourable Justice Dole Dole of the Federal High Court. At the conclusion of the trial, they were sentenced to 5 years imprisonment with haddi lashing.",
            question: "The two convicts would have made Allocutus",
            options: {
              a: "After delivering the judgment",
              b: "After sentencing",
              c: "After conviction",
              d: "Before the judgment was delivered.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: "Malachy Imrah and Buchi Ajayi were arrested by the men of the national Agency for Food and Drug Administration and Control (NAFDAC) For missing a chemical substance called Bromatoxine with yeast used in baking bread.\n\nTwo days after their arrest, they were arraigned before the Honourable Justice Dole Dole of the Federal High Court. At the conclusion of the trial, they were sentenced to 5 years imprisonment with haddi lashing.",
            question: "The sentence imposed on Malachy and Buchi was inappropriate because:",
            options: {
              a: "Of the inclusion of hadi lashing.",
              b: "They deserve capital punishment.",
              c: "They are juveniles",
              d: "All of the above",
            },
            answer: "a",
          },
        ],
      },
    ],
  },
  "2023-november": {
    year: 2023,
    session: "November",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 40,
    courses: [
      {
        id: "2023-november-corporate-law-practice",
        name: "Corporate Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19.  Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.",
            question: "ABC Plc must",
            options: {
              a: "make an allotment of the shares within 42 days of the public offer.",
              b: "Notify the Allottees within 42 days of allotments.",
              c: "Deliver the share certificates to the Allottees after 42 days.",
              d: "File return of Allotment within 42 days of Allotment.",
            },
            answer: "bonus",
          },
          {
            id: 2,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19.  Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.",
            question: "The price of each share of ABC Plc.  at the Nigerian Stock Exchange is now N12.50k. The share premium transferred to the share premium account by the company in respect of each share is:",
            options: {
              a: "N9.50k",
              b: "N12.00k",
              c: "N2.50k",
              d: "N12.50k",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19.  Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.",
            question: "One of these is correct.  The share Premium account may be used to:",
            options: {
              a: "Increase the authorized share capital of the company",
              b: "Pay for bonus shares",
              c: "Pay for expenses incurred on the issue of shares.",
              d: "Provide premium payable on the Redemption of any redeemable shares.",
            },
            answer: "bonus",
          },
          {
            id: 4,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19.  Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.",
            question: "Shareholder shall be entitled to only One vote per share except:",
            options: {
              a: "Upon a resolution to change the Object clause",
              b: "At a statutory meeting",
              c: "Upon any resolution to remove The Chairman",
              d: "A preference shareholder upon any resolution to vary the rights attachment to his shares.",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "ABC Plc, has made a public offer of 10 million shares of 50 kobo each at N10 to the public to boost the financial strength of the company post Covid 19.  Meanwhile, DEC Limited is suffering from the impact of Covid-19 and therefore desires to convert to Public Company.",
            question: "Which of the following clauses of the articles of association must be deleted in a change from a private company to a public company of DEC limited?",
            options: {
              a: "Pre-emptive right clause",
              b: "Restriction clause",
              c: "Class of share clause",
              d: "Custody of common seal clause.",
            },
            answer: "bonus",
          },
          {
            id: 6,
            context: null,
            question: "When a person is appointed as a life Director it implies that:",
            options: {
              a: "Only death can remove him from office.",
              b: "He cannot be a full-time Director",
              c: "He is exempted from retirement by rotation.",
              d: "He can appoint and remove other Directors.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "Ojo Emmanuel, Musa Aliu and Emeka Anan are businessmen from the same village.  They intend to commence the business of distribution of cements nationwide.  Answer the following questions:",
            question: "The following names can be used by the partners and will not require registration with CAC except:",
            options: {
              a: "Ojo Emmanuel, Musa Aliu and Emeka Anan.",
              b: "O. Emmanuel, M. Aliu and E. Anan",
              c: "Emmanuel Aliu Emeka Partners",
              d: "Emmanuel, Aliu and Anan",
            },
            answer: "d",
          },
          {
            id: 8,
            context: "Ojo Emmanuel, Musa Aliu and Emeka Anan are businessmen from the same village.  They intend to commence the business of distribution of cements nationwide.  Answer the following questions:",
            question: "Registration of the business with the CAC must be done within:",
            options: {
              a: "42 days after the partnership Deed has been signed.",
              b: "42 days after CAC Availability Has been obtained.",
              c: "28 days of the commencement of business.",
              d: "Anytime they so desire.",
            },
            answer: "d",
          },
          {
            id: 9,
            context: "Ojo Emmanuel, Musa Aliu and Emeka Anan are businessmen from the same village.  They intend to commence the business of distribution of cements nationwide.  Answer the following questions:",
            question: "Partnership deed is:",
            options: {
              a: "Needed but not mandatory",
              b: "Mandatory",
              c: "Mandatory by CAMA",
              d: "All of the above",
            },
            answer: "a",
          },
          {
            id: 10,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "The statutory meeting of the Blue Bird Bank Plc shall be held within .... of incorporation?",
            options: {
              a: "12 months",
              b: "6 months",
              c: "3 months",
              d: "1 month.",
            },
            answer: "c",
          },
          {
            id: 11,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "Notice of the increase shall be Delivered to Corporate Affairs  Commission not later than?",
            options: {
              a: "15 days",
              b: "14 days",
              c: "1 month",
              d: "21 days.",
            },
            answer: "c",
          },
          {
            id: 12,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "Application for cancellation of the resolution seeking to alter the business or object clause of the Blue Bird Bank Plc can only be made by members:",
            options: {
              a: "Who were present but abstained From voting at the meeting.",
              b: "Who were present at the meeting But voted against the resolution.",
              c: "Who were not present at the Meeting where the resolution was passed.",
              d: "All of the above.",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "The application for cancellation of the resolution seeking to alter the business or object clause of the Blue Bird Bank Plc shall be made to the Court within......of the passing of of the resolution.",
            options: {
              a: "14 days",
              b: "15 days",
              c: "21 days",
              d: "28 days",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "Blue Bird Bank Plc. was incorporated on 12th November, 2011 with N10 billion share capital to carry on the business of banking.  On 1st July, 2020, it passed a special resolution to increase its share capital to N20 billion ordinary shares of N50 each as well as to alter the business clause of the company in response to Covid-19.\n\nAssuming your law firm during your externship is the Secretary of the Company, answer the following questions.",
            question: "Blue Bird Bank Plc shall within months of giving of the notice of increase to Corporate Affairs Commission, do one of the following:",
            options: {
              a: "Deliver statutory declaration of Solvency to Corporate Affairs  Commission",
              b: "Deliver Notice and Statement of increase in share Capital (Form CAC 6) to Federal Inland Revenue Services for stamping.",
              c: "Issue to members, shares not less than 25% of the total share capital.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "As an extern in the law firm of Gbadujara Solicitors, your principal instructed you to advice the Board of Harmony Nigeria Limited a company consisting of 42 members. A special resolution to reduce the authorized share capital of the company from N10 million naira to N5 million naira was proposed. 28 members attended the meeting.",
            question: "The number of members required to pass the resolution if all those that were present voted are:",
            options: {
              a: "21",
              b: "18",
              c: "22",
              d: "16",
            },
            answer: "c",
          },
          {
            id: 16,
            context: null,
            question: "Quorum for general meeting of Harmony Nigeria Limited will be",
            options: {
              a: "As determined by the order of court",
              b: "Two third of membersz",
              c: "As stated in the article of Association.",
              d: "As determined by Corporate Affairs Commission",
            },
            answer: "a",
          },
          {
            id: 17,
            context: null,
            question: "Harmony Nigeria Limited will  Require special resolution to do All except:",
            options: {
              a: "Removing a life director",
              b: "Change of name",
              c: "Alteration of business objects",
              d: "Conversion to public company",
            },
            answer: "d",
          },
          {
            id: 18,
            context: null,
            question: "Harmony Nigeria Limited needs Not keep",
            options: {
              a: "Register of members",
              b: "Minute book",
              c: "Index of members",
              d: "Register of directors.",
            },
            answer: "c",
          },
          {
            id: 19,
            context: null,
            question: "Assuming Mr. Bassey Ibom a shareholder in Harmony Nigeria Limited has transferred the share worth of N1million naira held by him to Mr. John Ojukwu. The document required to be executed by Bassey Ibom in order to complete the transfer is:",
            options: {
              a: "Deed of Assignment",
              b: "Deed of Transfer",
              c: "Instrument of Transfer",
              d: "Instrument of Assent",
            },
            answer: "c",
          },
          {
            id: 20,
            context: null,
            question: "The registration of the transfer of shares above is:",
            options: {
              a: "At the discretion of the Board of Directors",
              b: "Automatically",
              c: "Subject to the order of the court",
              d: "Upon approval by Corporate Affairs Commission.",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "2023-november-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Ladi Jebako got married to his wife Mary Jebako at the Ikoyi Marriage Registry, Lagos State on the 3rd of May, 2018. They have only one son called Tade Jebako aged 2 years. Ladi has been faithful in the marriage and has never committed adultery but he has a very bad temper and is always violent whenever he has a disagreement with his wife. Due to their irreconciliable differences, Ladi Jebako moved out of the matrimonial home on 1st January, 2020. Mary Jebako has now instructed her counsel to institute an action for dissolution of marriage, custody of their only child Tade Jebako and settlement of their property at No. 2 Richie Road, Ikoyi, Lagos which they own in equal shares and where she presently resides.",
            question: "Which of the following is not a document to be filed when commencing this action?",
            options: {
              a: "Petition",
              b: "Notice of Petition",
              c: "Discretion Statement",
              d: "Certificate of Reconciliation",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "Ladi Jebako got married to his wife Mary Jebako at the Ikoyi Marriage Registry, Lagos State on the 3rd of May, 2018. They have only one son called Tade Jebako aged 2 years. Ladi has been faithful in the marriage and has never committed adultery but he has a very bad temper and is always violent whenever he has a disagreement with his wife. Due to their irreconciliable differences, Ladi Jebako moved out of the matrimonial home on 1st January, 2020. Mary Jebako has now instructed her counsel to institute an action for dissolution of marriage, custody of their only child Tade Jebako and settlement of their property at No. 2 Richie Road, Ikoyi, Lagos which they own in equal shares and where she presently resides.",
            question: "At the hearing of the action filed in (1) above, the Petitioner must establish one of the following as the ground for dissolution of the marriage:-",
            options: {
              a: "That the parties have lived apart for a continuous period of at least 3 years",
              b: "That the marriage has broken down irretrievably",
              c: "That the Respondent has behaved in such a way that the Petitioner cannot reasonably be expected to live with him.",
              d: "Exceptional hardship and exceptional depravity",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "Ladi Jebako got married to his wife Mary Jebako at the Ikoyi Marriage Registry, Lagos State on the 3rd of May, 2018. They have only one son called Tade Jebako aged 2 years. Ladi has been faithful in the marriage and has never committed adultery but he has a very bad temper and is always violent whenever he has a disagreement with his wife. Due to their irreconciliable differences, Ladi Jebako moved out of the matrimonial home on 1st January, 2020. Mary Jebako has now instructed her counsel to institute an action for dissolution of marriage, custody of their only child Tade Jebako and settlement of their property at No. 2 Richie Road, Ikoyi, Lagos which they own in equal shares and where she presently resides.",
            question: "In order to settle issues relating to custody of the child of the marriage, settlement of property jointly owned and maintenance, the parties are required to hold:",
            options: {
              a: "Case Management Conference",
              b: "Compulsory Conference",
              c: "Pre - Trial conference",
              d: "Case Settlement Conference.",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "Ladi Jebako got married to his wife Mary Jebako at the Ikoyi Marriage Registry, Lagos State on the 3rd of May, 2018. They have only one son called Tade Jebako aged 2 years. Ladi has been faithful in the marriage and has never committed adultery but he has a very bad temper and is always violent whenever he has a disagreement with his wife. Due to their irreconciliable differences, Ladi Jebako moved out of the matrimonial home on 1st January, 2020. Mary Jebako has now instructed her counsel to institute an action for dissolution of marriage, custody of their only child Tade Jebako and settlement of their property at No. 2 Richie Road, Ikoyi, Lagos which they own in equal shares and where she presently resides.",
            question: "In awarding custody of the child of the marriage to any of the parties the court will consider:",
            options: {
              a: "Who earns more money between the two parties",
              b: "Which of the parties the child is living with at the time of the hearing of the matter.",
              c: "The best interest of the child",
              d: "Which of the parties pays the child's school fees",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "Ladi Jebako got married to his wife Mary Jebako at the Ikoyi Marriage Registry, Lagos State on the 3rd of May, 2018. They have only one son called Tade Jebako aged 2 years. Ladi has been faithful in the marriage and has never committed adultery but he has a very bad temper and is always violent whenever he has a disagreement with his wife. Due to their irreconciliable differences, Ladi Jebako moved out of the matrimonial home on 1st January, 2020. Mary Jebako has now instructed her counsel to institute an action for dissolution of marriage, custody of their only child Tade Jebako and settlement of their property at No. 2 Richie Road, Ikoyi, Lagos which they own in equal shares and where she presently resides.",
            question: "Assuming whilst the proceedings for dissolution of the marriage was going on, Mary Jebako was informed by Ladi's cousin that Ladi is planning to sell the property at No. 2 Richie Road, Ikoyi, Lagos and that he has actually found a buyer who is coming to pay within the next one week, which of the following steps can Mary take:",
            options: {
              a: "File an application by Motion Ex parte for interim injunction to restrain Ladi from selling the property pending the determination of Motion on Notice",
              b: "File an application by Motion on Notice for interlocutory injunction to restrain Ladi from selling the property pending the final determination of the suit.",
              c: "File an application by Motion Ex parte for Mareva Injunction to restrain Ladi from selling the property pending the determination of Motion on Notice",
              d: "File an application by Motion on Notice for Perpetual Injunction to restrain Ladi from selling the property pending the final determination of the suit.",
            },
            answer: "a",
          },
          {
            id: 6,
            context: "Globalex Nig. Ltd a fast-food company carrying on its business at No. 12 Johannesburg Street, Asokoro Abuja borrowed the sum of N120 million at 10% interest from Coins Bank Plc. The company has so far defrayed N20 million. The principal sum of N100 million and the interest are still outstanding, in spite of several letters of demand from the Bank. You have been briefed by the bank to recover the amount.",
            question: "By what mean(s) will you help your client recover the facility without trial?",
            options: {
              a: "Undefended List Procedure under Order 35",
              b: "Fast Track Procedure",
              c: "Summary Judgement under Order 13",
              d: "(a) and (c) above.",
            },
            answer: "a",
          },
          {
            id: 7,
            context: "Globalex Nig. Ltd a fast-food company carrying on its business at No. 12 Johannesburg Street, Asokoro Abuja borrowed the sum of N120 million at 10% interest from Coins Bank Plc. The company has so far defrayed N20 million. The principal sum of N100 million and the interest are still outstanding, in spite of several letters of demand from the Bank. You have been briefed by the bank to recover the amount.",
            question: "By what mean(s) will you help your client recover the facility expeditiously after full trial?",
            options: {
              a: "Summary Judgement Procedure under Order 11",
              b: "Summary Judgement Procedure under Order 13",
              c: "Fast Track Procedure",
              d: "Undefended List Procedure under Order 35",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "Globalex Nig. Ltd a fast-food company carrying on its business at No. 12 Johannesburg Street, Asokoro Abuja borrowed the sum of N120 million at 10% interest from Coins Bank Plc. The company has so far defrayed N20 million. The principal sum of N100 million and the interest are still outstanding, in spite of several letters of demand from the Bank. You have been briefed by the bank to recover the amount.",
            question: "The processes you will file to actualize the means in 6 above are:",
            options: {
              a: "Writ of summons as in Form 1, affidavit stating the grounds on which the claim is based and the deponents belief that there is no defence and the certificate of pre action counseling in form 6.",
              b: "Writ of summons, statement of claim, list of witnesses and witnesses' statements on oath.",
              c: "Writ of summons, statement of claim, application for summary judgment and affidavit.",
              d: "Writ of summons, pre-action counseling certificate, affidavit and an application for summary judgment.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Globalex Nig. Ltd a fast-food company carrying on its business at No. 12 Johannesburg Street, Asokoro Abuja borrowed the sum of N120 million at 10% interest from Coins Bank Plc. The company has so far defrayed N20 million. The principal sum of N100 million and the interest are still outstanding, in spite of several letters of demand from the Bank. You have been briefed by the bank to recover the amount.",
            question: "What other means will you use apart from the means identified in 6 above to achieve the same result?",
            options: {
              a: "Summary Judgment Procedure under Order 13",
              b: "Summary judgment Procedure under Order 11",
              c: "Undefended List Procedure under Order 35",
              d: "Fast Track Procedure",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Globalex Nig. Ltd a fast-food company carrying on its business at No. 12 Johannesburg Street, Asokoro Abuja borrowed the sum of N120 million at 10% interest from Coins Bank Plc. The company has so far defrayed N20 million. The principal sum of N100 million and the interest are still outstanding, in spite of several letters of demand from the Bank. You have been briefed by the bank to recover the amount.",
            question: "Assuming you are counsel to Coins Bank Plc, upon being served with the processes listed in 8 above, list the processes you will file in your client's defence.",
            options: {
              a: "Statement of defence, list of witnesses, witnesses' statements on oath and Certificate of Pre action Counseling.",
              b: "Notice of Intention to Defend, affidavit disclosing a defence on the merit and Certificate of Pre-action Counseling as in Form 6.",
              c: "Statement of defence, list of witnesses, witnesses' statements on oath, Certificate of Pre action counseling and counter affidavit against the application for summary judgment",
              d: "Counter affidavit, written brief and statement of defence.",
            },
            answer: "b",
          },
          {
            id: 11,
            context: "The following transpired during the examination- in- chief of Mr Omo Gegu in a Libel suit:\n\nQ.1: Counsel: Witness, you are Mr Omo Gegu, a banker of No 6 Kutukutu Street Abuja, am I correct?\n\nWitness: I am not too sure of that.\n\nQ. 2: Counsel: Have you come to this court before to do anything about this case?\n\nWitness: Hmm!Hmm! I cannot really remember.\n\nQ. 3: Counsel: You said in paragraph 5 of this your document that you witnessed the defendant call the claimant Ole! Barawo! on 05 September 2023.\n\nWitness: Please I cannot answer that question oo. I do not want trouble ooo.",
            question: "One of the following is correct about question 1",
            options: {
              a: "It is a leading question so it is not allowed",
              b: "It may put the witness on edge so it is not advised",
              c: "The line of questioning was clumsy because too many questions were asked at once",
              d: "It is a leading question but is allowed in the circumstances since the affected facts are not in dispute.",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "The following transpired during the examination- in- chief of Mr Omo Gegu in a Libel suit:\n\nQ.1: Counsel: Witness, you are Mr Omo Gegu, a banker of No 6 Kutukutu Street Abuja, am I correct?\n\nWitness: I am not too sure of that.\n\nQ. 2: Counsel: Have you come to this court before to do anything about this case?\n\nWitness: Hmm!Hmm! I cannot really remember.\n\nQ. 3: Counsel: You said in paragraph 5 of this your document that you witnessed the defendant call the claimant Ole! Barawo! on 05 September 2023.\n\nWitness: Please I cannot answer that question oo. I do not want trouble ooo.",
            question: "The purpose of Question 2 is to:",
            options: {
              a: "Lead the witness to give evidence as to the swearing to his affidavit before the court",
              b: "Lead the witness to adopt his witness statement on oath",
              c: "Lead the witness to give evidence as to the swearing to his witness statement on oath before the court.",
              d: "Lead the witness to identify his witness statement on oath",
            },
            answer: "b",
          },
          {
            id: 13,
            context: "The following transpired during the examination- in- chief of Mr Omo Gegu in a Libel suit:\n\nQ.1: Counsel: Witness, you are Mr Omo Gegu, a banker of No 6 Kutukutu Street Abuja, am I correct?\n\nWitness: I am not too sure of that.\n\nQ. 2: Counsel: Have you come to this court before to do anything about this case?\n\nWitness: Hmm!Hmm! I cannot really remember.\n\nQ. 3: Counsel: You said in paragraph 5 of this your document that you witnessed the defendant call the claimant Ole! Barawo! on 05 September 2023.\n\nWitness: Please I cannot answer that question oo. I do not want trouble ooo.",
            question: "The answer to question 1- 3 portrays the witness as one of the following",
            options: {
              a: "A loquacious witness.",
              b: "A tutored witness.",
              c: "A hostile witness.",
              d: "Tainted witness.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: "The following transpired during the examination- in- chief of Mr Omo Gegu in a Libel suit:\n\nQ.1: Counsel: Witness, you are Mr Omo Gegu, a banker of No 6 Kutukutu Street Abuja, am I correct?\n\nWitness: I am not too sure of that.\n\nQ. 2: Counsel: Have you come to this court before to do anything about this case?\n\nWitness: Hmm!Hmm! I cannot really remember.\n\nQ. 3: Counsel: You said in paragraph 5 of this your document that you witnessed the defendant call the claimant Ole! Barawo! on 05 September 2023.\n\nWitness: Please I cannot answer that question oo. I do not want trouble ooo.",
            question: "Counsel should take one of the following steps to address the situation created by the answers of the witness to questions 1-3",
            options: {
              a: "Seeks the court permission to show the witness the document where the statement was made.",
              b: "Seek the permission of the court for the witness to refresh his memory and be able to answer the question.",
              c: "Ask the witness if he had been threatened by anyone concerning the case.",
              d: "Seek the permission of the court to declare the witness a hostile witness.",
            },
            answer: "d",
          },
          {
            id: 15,
            context: "The following transpired during the examination- in- chief of Mr Omo Gegu in a Libel suit:\n\nQ.1: Counsel: Witness, you are Mr Omo Gegu, a banker of No 6 Kutukutu Street Abuja, am I correct?\n\nWitness: I am not too sure of that.\n\nQ. 2: Counsel: Have you come to this court before to do anything about this case?\n\nWitness: Hmm!Hmm! I cannot really remember.\n\nQ. 3: Counsel: You said in paragraph 5 of this your document that you witnessed the defendant call the claimant Ole! Barawo! on 05 September 2023.\n\nWitness: Please I cannot answer that question oo. I do not want trouble ooo.",
            question: "Before the examination-in-chief began, the witness would have been",
            options: {
              a: "Sworn or affirmed by the judge",
              b: "Cautioned by the judge",
              c: "Sworn or affirmed by the Registrar",
              d: "Cautioned by the Registrar",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Due to encroachment on the Abudu family land situate at Sangotedo, Lagos State, Kwaka Abudu, Supre Abudu, and Tata Abudu have been mandated by other members of the family to file an action on their behalf. The encroachment was carried out by Detlim Nig. Ltd who claimed they obtained title over the property from the State Government.",
            question: "This suit can best be described as a:",
            options: {
              a: "Derivative action",
              b: "Class action",
              c: "Representative action",
              d: "Joint action",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Due to encroachment on the Abudu family land situate at Sangotedo, Lagos State, Kwaka Abudu, Supre Abudu, and Tata Abudu have been mandated by other members of the family to file an action on their behalf. The encroachment was carried out by Detlim Nig. Ltd who claimed they obtained title over the property from the State Government.",
            question: "Which of the following is not true in respect of the action in 16 above:",
            options: {
              a: "The action must be in respect of common interest of the family members",
              b: "All members of the family are regarded in law as parties to the suit",
              c: "Any member of the family who does not consent to the suit may apply to join the suit as a defendant",
              d: "There is need for leave of court for the suit to be properly commenced.",
            },
            answer: "d",
          },
          {
            id: 18,
            context: "Due to encroachment on the Abudu family land situate at Sangotedo, Lagos State, Kwaka Abudu, Supre Abudu, and Tata Abudu have been mandated by other members of the family to file an action on their behalf. The encroachment was carried out by Detlim Nig. Ltd who claimed they obtained title over the property from the State Government.",
            question: "Assuming the cause of action involves arbitrary imposition of electricity bills and it is impracticable to obtain the consent of all affected, what will be the appropriate action?",
            options: {
              a: "Derivative action",
              b: "Class action",
              c: "Representative action",
              d: "Joint action.",
            },
            answer: "b",
          },
          {
            id: 19,
            context: "Due to encroachment on the Abudu family land situate at Sangotedo, Lagos State, Kwaka Abudu, Supre Abudu, and Tata Abudu have been mandated by other members of the family to file an action on their behalf. The encroachment was carried out by Detlim Nig. Ltd who claimed they obtained title over the property from the State Government.",
            question: "Which of the following is not true about the case in 18 above?",
            options: {
              a: "Consent of all those to be represented in the suit is required",
              b: "Leave of court is required before commencement of the suit",
              c: "Judgment applies to persons who may not even be known as at the date of judgment",
              d: "Any settlement reached in the case is subject to approval by the court.",
            },
            answer: "a",
          },
          {
            id: 20,
            context: "Due to encroachment on the Abudu family land situate at Sangotedo, Lagos State, Kwaka Abudu, Supre Abudu, and Tata Abudu have been mandated by other members of the family to file an action on their behalf. The encroachment was carried out by Detlim Nig. Ltd who claimed they obtained title over the property from the State Government.",
            question: "Assuming Kwaka Abudu, Supre Abudu, Tata Abudu are shareholders in the company and desire to maintain an action against the directors in the name of the company to recover company funds misappropriated by the directors, the action to be filed will be:",
            options: {
              a: "Derivative action",
              b: "Class action",
              c: "Shareholders' action",
              d: "",
            },
            answer: "a",
          },
        ],
      },
    ],
  },
  "2016-march": {
    year: 2016,
    session: "March",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 20,
    courses: [
      {
        id: "2016-march-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "Alhaji Modibbo owns Hadiza Plaza Danko Estate at No. 5 Zik Avenue Ibadan and Ebeano Mall, Awolowo Street, Enugu. He wants to retain Abdul Jada to oversee all his properties. Abdul Jada is a legal practitioner.",
            question: "How would Alhaji Modibbo vest such powers on Abdul Jada?",
            options: {
              a: "By a retainer agreement.",
              b: "By a Power of Attorney",
              c: "By a deed of assignment.",
              d: "By a memorandum of understanding.",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "Alhaji Modibbo owns Hadiza Plaza Danko Estate at No. 5 Zik Avenue Ibadan and Ebeano Mall, Awolowo Street, Enugu. He wants to retain Abdul Jada to oversee all his properties. Abdul Jada is a legal practitioner.",
            question: "If Alhaji Modibbo had in his will, given Ebeano Plaza to his son, Shehu, under what documents would title in the plaza pass to Shehu?",
            options: {
              a: "The Probate.",
              b: "The Assent",
              c: "The Will.",
              d: "The Letters of Administration.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "Alhaji Modibbo owns Hadiza Plaza Danko Estate at No. 5 Zik Avenue Ibadan and Ebeano Mall, Awolowo Street, Enugu. He wants to retain Abdul Jada to oversee all his properties. Abdul Jada is a legal practitioner.",
            question: "If Alhaji Modibbo's Solicitor drafts a lease agreement in which the rent was N100,000, how would the solicitor charge on the first N1,000?",
            options: {
              a: "N37.50 + N12.50",
              b: "N225.00 + N25.00",
              c: "N225.00 + N37.50",
              d: "N37.50 + N225.00",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "Alhaji Modibbo owns Hadiza Plaza Danko Estate at No. 5 Zik Avenue Ibadan and Ebeano Mall, Awolowo Street, Enugu. He wants to retain Abdul Jada to oversee all his properties. Abdul Jada is a legal practitioner.",
            question: "All but one of these laws may apply to the alienation of Hadiza Plaza.",
            options: {
              a: "The Land Instrument Registration Law.",
              b: "The Property and Conveyancing Law 1959.",
              c: "The Conveyancing Act 1881.",
              d: "The Stamp Duties Act.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "Chief Bangbose made his Will in 1998 in which he appointed Friday Bangbose (his first son) Alaske Oke (resident in the United States) and Abigail Bangbose (his wife) executors. He died in 2008 but before his death, he bought a property in Abuja and 5,000 shares of Zenith Bank all in 2003. Friday Bangbose, his first son, is interfering with the property in Abuja by arranging to use it as security for a personal loan of N10 million.",
            question: "What kind of grant can the executors seek to enable them to take steps to preserve the property, now that their application for probate is still being processed?",
            options: {
              a: "General grant.",
              b: "Specific grant",
              c: "Limited grant",
              d: "Double probate.",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "Chief Bangbose made his Will in 1998 in which he appointed Friday Bangbose (his first son) Alaske Oke (resident in the United States) and Abigail Bangbose (his wife) executors. He died in 2008 but before his death, he bought a property in Abuja and 5,000 shares of Zenith Bank all in 2003. Friday Bangbose, his first son, is interfering with the property in Abuja by arranging to use it as security for a personal loan of N10 million.",
            question: "By S. 47 of the Administration of Estate Laws of Lagos State, the executors years of grant of probate should be;",
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
            context: "Chief Bangbose made his Will in 1998 in which he appointed Friday Bangbose (his first son) Alaske Oke (resident in the United States) and Abigail Bangbose (his wife) executors. He died in 2008 but before his death, he bought a property in Abuja and 5,000 shares of Zenith Bank all in 2003. Friday Bangbose, his first son, is interfering with the property in Abuja by arranging to use it as security for a personal loan of N10 million.",
            question: "How would the property in Abuja and the 5,000 shares of Zenith Bank Plc be administered? By",
            options: {
              a: "Letters of Administration annexed with a Will.",
              b: "Letters of Administration.",
              c: "Probate",
              d: "Double Probate.",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "Chief Bangbose made his Will in 1998 in which he appointed Friday Bangbose (his first son) Alaske Oke (resident in the United States) and Abigail Bangbose (his wife) executors. He died in 2008 but before his death, he bought a property in Abuja and 5,000 shares of Zenith Bank all in 2003. Friday Bangbose, his first son, is interfering with the property in Abuja by arranging to use it as security for a personal loan of N10 million.",
            question: "If Alhaji Ibrahim Zuma although not expressed to be an executor in the Will of Chief Bamgbose is directed by Chief Bangbose to take care of his properties and children:",
            options: {
              a: "Alhaji Ibrahim will be an executor appointed by the court.",
              b: "Alhaji Ibrahim will be an executor by operation of law.",
              c: "Alhaji Ibrahim will be an executor by implication.",
              d: "Alhaji Ibrahim will be an executor expressly appointed.",
            },
            answer: "c",
          },
          {
            id: 9,
            context: "Chief Bangbose made his Will in 1998 in which he appointed Friday Bangbose (his first son) Alaske Oke (resident in the United States) and Abigail Bangbose (his wife) executors. He died in 2008 but before his death, he bought a property in Abuja and 5,000 shares of Zenith Bank all in 2003. Friday Bangbose, his first son, is interfering with the property in Abuja by arranging to use it as security for a personal loan of N10 million.",
            question: "Friday Bamgbose who is unhappy with the will of Chief Bamgbose can express his opposition to grant of probate by filing:",
            options: {
              a: "Caveat in form 5 or 6.",
              b: "Caveat in form 3 or 4.",
              c: "Caveat in form 2 or 3.",
              d: "Caveat in form 1 or 2.",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "Chief Adekoya wants to purchase a corner shop at Hospital Road, Gwagwalada, Abuja, which Hajia Asabe the owner has agreed to sell for N3 million on the condition that Chief Adekoya pays the sum of N1.5 million now and pay the balance on or before 31st of August 2009.",
            question: "How would you describe the above transaction?",
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
            context: "Chief Adekoya wants to purchase a corner shop at Hospital Road, Gwagwalada, Abuja, which Hajia Asabe the owner has agreed to sell for N3 million on the condition that Chief Adekoya pays the sum of N1.5 million now and pay the balance on or before 31st of August 2009.",
            question: "If you were Chief Adekoya's Solicitor, as what would you want the first half of the consideration paid?",
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
            context: null,
            question: "Somewhere near the Utako Market, Abuja, a big sign board screams \"Reliance Law Chambers – best in property management, quick sales and letting. We parade the best lawyers in property law practice. A trial will convince you\". This is a proper case of:",
            options: {
              a: "Advertisement.",
              b: "Touting.",
              c: "Soliciting.",
              d: "Professional misconduct.",
            },
            answer: "bonus",
          },
          {
            id: 13,
            context: "Mallam Bako is the landlord of the premises known as Adisa Estate, Apo Legislative District, Abuja. Sister Mary has agreed with Mallam Bako to rent the premises for a period of three years with the right to remain there for another three years on terms as may be further agreed.",
            question: "Which of the following is not true?",
            options: {
              a: "The transaction is required to be by deed.",
              b: "Mallam Bako can review sister Mary's rent after the first 3 years.",
              c: "The transaction is not required to be by deed.",
              d: "The agreement is valid.",
            },
            answer: "c",
          },
          {
            id: 14,
            context: "Mallam Bako is the landlord of the premises known as Adisa Estate, Apo Legislative District, Abuja. Sister Mary has agreed with Mallam Bako to rent the premises for a period of three years with the right to remain there for another three years on terms as may be further agreed.",
            question: "Ideally, who should prepare the document in respect of this transaction?",
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
            context: null,
            question: "In a mortgage transaction between ACAN BANK LIMITED and Chief Adewale in which Mr. Smart, a legal practitioner to the bank had assisted both parties to conclude the negotiation of a loan:",
            options: {
              a: "Mr. Smart will earn full fees from the bank and half of lesse's fee from Chief Adewale.",
              b: "Mr. Smart will earn full fees from Chief Adewale and half from the bank.",
              c: "Mr. Smart will earn his full fees from the bank only.",
              d: "Mr. Smart will earn his full fees from Chief Adewale only.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "Alhaji Gumi Bako has property at 12, Blantyre Street, Lagos Island and 5 Jos Street, Kaduna which he contracted to sell to Chief Ode Tiame. He refused to surrender the original title documents of the property in Kaduna as he was advised by his solicitor.",
            question: "The form for the transfer of the property at 12 Blantyre Street, Lagos Island is:",
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
            context: "Alhaji Gumi Bako has property at 12, Blantyre Street, Lagos Island and 5 Jos Street, Kaduna which he contracted to sell to Chief Ode Tiame. He refused to surrender the original title documents of the property in Kaduna as he was advised by his solicitor.",
            question: "A vendor who conveys his title to a part of his land by one title document has right to retain the original title document as contained in:",
            options: {
              a: "S. 123 PCL & S.19 CA and Ajilo V. Savannah Bank Ltd.",
              b: "S.100 PCL & S. 7 C.A. Re Dutly and Jesson's contract.",
              c: "S.101 PCL & S.125 C.A. Okumagba v. Idindum.",
              d: "S.101 PCL & S.12 C.A. Re WhiteRose Cottage.",
            },
            answer: "bonus",
          },
          {
            id: 18,
            context: "Alhaji Gumi Bako has property at 12, Blantyre Street, Lagos Island and 5 Jos Street, Kaduna which he contracted to sell to Chief Ode Tiame. He refused to surrender the original title documents of the property in Kaduna as he was advised by his solicitor.",
            question: "Will Chief Ode require a covenant of indemnity from Alhaji Gumi?",
            options: {
              a: "He requires it in both properties.",
              b: "He requires only in respect of property in Kaduna.",
              c: "He requires it only in respect of the property in Lagos.",
              d: "He does not require it as long as the document of transfer is by deed.",
            },
            answer: "b",
          },
          {
            id: 19,
            context: "Alhaji Gumi Bako has property at 12, Blantyre Street, Lagos Island and 5 Jos Street, Kaduna which he contracted to sell to Chief Ode Tiame. He refused to surrender the original title documents of the property in Kaduna as he was advised by his solicitor.",
            question: "For how long will Alhaji Gumi need to deduce his title to the properties?",
            options: {
              a: "He will deduce title for 30 years of property in Kaduna and 40 years of property in Lagos.",
              b: "He will deduce title of 40 years of property in Lagos and need not deduce title of property in Kaduna.",
              c: "He will deduce title of 40 years of property in Kaduna only.",
              d: "He will only need to submit copies of documents of title to both properties.",
            },
            answer: "c",
          },
          {
            id: 20,
            context: null,
            question: "A solicitor conducting a search for sale of a land needs not look at:",
            options: {
              a: "The land registry.",
              b: "The land itself.",
              c: "The probate registry.",
              d: "None of the above.",
            },
            answer: "d",
          },
        ],
      },
    ],
  },
  "2016-july": {
    year: 2016,
    session: "July",
    examTitle: "Bar Part II Final Examination",
    totalQuestions: 60,
    courses: [
      {
        id: "2016-july-property-law-practice",
        name: "Property Law Practice",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "During your externship in the Law Firm of Amaye and Amaye, Mr. Philip Atang the owner of a block of four flats of three bedrooms each located at No 12, Chimara Road, Kaduna, retained the services of the firm.\n\nMr. Philip Atang have agreed to a grant of a term of 7 years to Pastor Lyon Atabe of No 10, Duke Lane Kaduna. You have been asked by your field Supervisor to prepare the relevant document for executive by the parties.",
            question: "Which of the following will you not insert in the introductory part of the document to be prepared?",
            options: {
              a: "Name of the parties",
              b: "Amount of the rent to be paid",
              c: "Date",
              d: "Address of the parties.",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "During your externship in the Law Firm of Amaye and Amaye, Mr. Philip Atang the owner of a block of four flats of three bedrooms each located at No 12, Chimara Road, Kaduna, retained the services of the firm.\n\nMr. Philip Atang have agreed to a grant of a term of 7 years to Pastor Lyon Atabe of No 10, Duke Lane Kaduna. You have been asked by your field Supervisor to prepare the relevant document for executive by the parties.",
            question: "What covenant will you insert to ensure that the house is used only for residential purpose?",
            options: {
              a: "Covenant not to assign",
              b: "Usual covenant",
              c: "User covenant",
              d: "Used covenant",
            },
            answer: "c",
          },
          {
            id: 3,
            context: "During your externship in the Law Firm of Amaye and Amaye, Mr. Philip Atang the owner of a block of four flats of three bedrooms each located at No 12, Chimara Road, Kaduna, retained the services of the firm.\n\nMr. Philip Atang have agreed to a grant of a term of 7 years to Pastor Lyon Atabe of No 10, Duke Lane Kaduna. You have been asked by your field Supervisor to prepare the relevant document for executive by the parties.",
            question: "Mr. Philip Atang has asked you to insert a clause in the document prepared by you allowing him use of the master bedroom whenever he visits Kaduna. What will be the effect of the clause?",
            options: {
              a: "Invalid for ambiguity in arrangement.",
              b: "Invalid for lack of exclusive possession",
              c: "Invalid for uncertainty of term",
              d: "Valid but subject to contract.",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "During your externship in the Law Firm of Amaye and Amaye, Mr. Philip Atang the owner of a block of four flats of three bedrooms each located at No 12, Chimara Road, Kaduna, retained the services of the firm.\n\nMr. Philip Atang have agreed to a grant of a term of 7 years to Pastor Lyon Atabe of No 10, Duke Lane Kaduna. You have been asked by your field Supervisor to prepare the relevant document for executive by the parties.",
            question: "Elements or rent review clause will include all but one of the following:",
            options: {
              a: "Time of initiating the review.",
              b: "Period of review",
              c: "Method of computing the reviewed rent",
              d: "The reason for review",
            },
            answer: "d",
          },
          {
            id: 5,
            context: "During your externship in the Law Firm of Amaye and Amaye, Mr. Philip Atang the owner of a block of four flats of three bedrooms each located at No 12, Chimara Road, Kaduna, retained the services of the firm.\n\nMr. Philip Atang have agreed to a grant of a term of 7 years to Pastor Lyon Atabe of No 10, Duke Lane Kaduna. You have been asked by your field Supervisor to prepare the relevant document for executive by the parties.",
            question: "Which of the following will you not insert in the Reddendum?",
            options: {
              a: "Amount of rent",
              b: "Method of computing",
              c: "Date of payment of rent",
              d: "Time when rent would be paid",
            },
            answer: "b",
          },
          {
            id: 6,
            context: null,
            question: "The law firm has completed the brief but Mr. Philip Atang refuses to pay the agreed professional fees. The following but one are steps to be taken in recovering the professional fees.",
            options: {
              a: "Draft a Bill of Charges and serve on Mr. Philip Atang",
              b: "Report Mr. Atang to the Nigerian Bar Association Disciplinary Committee.",
              c: "Wait for one month to lapse then initiate court action.",
              d: "Ensure that the Bill of Charges contain particulars of Principal items.",
            },
            answer: "b",
          },
          {
            id: 7,
            context: "Mrs. Eniola Martins has agreed to buy a house on a piece of land measuring 100 x 200 feet at No. 8 Dania Road, Abeokuta, Ogun State from Chief Adelabu Kuye, Chief Kuye retained the Principal of the Law Firm where you were attached for externship. The Purchaser agreed to pay N3,000,000.00 and immediately paid a deposit of N300,000.00 to the Vendor's Solicitors who handed her a Deed of Assignment dated April 26, 2006 and register as 48/48/06 at the Lands Registry, Abeokuta.",
            question: "As Solicitor to Kuye, in order to protect yourself from liability, you would accept the deposit as:",
            options: {
              a: "Kuye's agent",
              b: "Stakeholder",
              c: "Mrs. Eniola Martins' agent",
              d: "Beneficial owner",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "Mrs. Eniola Martins has agreed to buy a house on a piece of land measuring 100 x 200 feet at No. 8 Dania Road, Abeokuta, Ogun State from Chief Adelabu Kuye, Chief Kuye retained the Principal of the Law Firm where you were attached for externship. The Purchaser agreed to pay N3,000,000.00 and immediately paid a deposit of N300,000.00 to the Vendor's Solicitors who handed her a Deed of Assignment dated April 26, 2006 and register as 48/48/06 at the Lands Registry, Abeokuta.",
            question: "At what stage of the transaction would Kuye be required to deduce title?",
            options: {
              a: "Before completion",
              b: "During completion",
              c: "During the contract",
              d: "After completion",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "Mrs. Eniola Martins has agreed to buy a house on a piece of land measuring 100 x 200 feet at No. 8 Dania Road, Abeokuta, Ogun State from Chief Adelabu Kuye, Chief Kuye retained the Principal of the Law Firm where you were attached for externship. The Purchaser agreed to pay N3,000,000.00 and immediately paid a deposit of N300,000.00 to the Vendor's Solicitors who handed her a Deed of Assignment dated April 26, 2006 and register as 48/48/06 at the Lands Registry, Abeokuta.",
            question: "If Kuye conveyed as Beneficial owner, all of the following covenants except one would be implied?",
            options: {
              a: "Quiet possession",
              b: "That the lease is valid and subsisting",
              c: "That the rents shall continue to be paid and covenants performed.",
              d: "That Kuye will do everything possible to assist Mrs. Martins to perfect her title.",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "Mrs. Eniola Martins has agreed to buy a house on a piece of land measuring 100 x 200 feet at No. 8 Dania Road, Abeokuta, Ogun State from Chief Adelabu Kuye, Chief Kuye retained the Principal of the Law Firm where you were attached for externship. The Purchaser agreed to pay N3,000,000.00 and immediately paid a deposit of N300,000.00 to the Vendor's Solicitors who handed her a Deed of Assignment dated April 26, 2006 and register as 48/48/06 at the Lands Registry, Abeokuta.",
            question: "All except one of the following documents will pass as a good root of title in favour of Mrs. Eniola Martins:",
            options: {
              a: "A certificate of title",
              b: "A deed of gift",
              c: "A deed of assignment",
              d: "A power of attorney",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "In 2010, Chief Olowolayemo gave a landed property to the Nigerian Law School Cooperative Society. The property was sold in 2015 to Chief Serenity Amazing at N60,000,000.00. the solicitor who Chief Amazing instructed to act for him was paid N3,000,000.00.",
            question: "The responsibility of preparing the completion statement is on:",
            options: {
              a: "Chief Olowolayemo's Solicitor",
              b: "Nigerian Law School Cooperative Society's Solicitor.",
              c: "Chief Serenity Amazing Solicitor",
              d: "Chief Serenity Amazing",
            },
            answer: "b",
          },
          {
            id: 12,
            context: "In 2010, Chief Olowolayemo gave a landed property to the Nigerian Law School Cooperative Society. The property was sold in 2015 to Chief Serenity Amazing at N60,000,000.00. the solicitor who Chief Amazing instructed to act for him was paid N3,000,000.00.",
            question: "The Capital Gains Tax payable in the above scenario ought to be paid by:",
            options: {
              a: "The Nigerian Law School Cooperative Society",
              b: "Chief Serenity Amazing",
              c: "All the parties to the transaction",
              d: "Either of the parties to the transaction.",
            },
            answer: "a",
          },
          {
            id: 13,
            context: "In 2010, Chief Olowolayemo gave a landed property to the Nigerian Law School Cooperative Society. The property was sold in 2015 to Chief Serenity Amazing at N60,000,000.00. the solicitor who Chief Amazing instructed to act for him was paid N3,000,000.00.",
            question: "The solicitor engaged in the above scenario will calculate his professional fees using:",
            options: {
              a: "Scale 1 of the Schedule to the Legal Practitioners' (Remuneration for legal documentation and other land matters order 1991)",
              b: "Scale II of the Schedule to the Legal Practitioners' (Remuneration for legal documentation and other land matters)",
              c: "Agency fees",
              d: "Contingent fees",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "In 2010, Chief Olowolayemo gave a landed property to the Nigerian Law School Cooperative Society. The property was sold in 2015 to Chief Serenity Amazing at N60,000,000.00. the solicitor who Chief Amazing instructed to act for him was paid N3,000,000.00.",
            question: "Assuming Chief Serenity Amazing is a Chinese, one of the following will be correct:",
            options: {
              a: "He cannot validly acquire this property until necessary approval is sought and obtained.",
              b: "He can validly acquire the property provided the consent of the Governor is sought and obtained.",
              c: "He may validly acquire upon approval of the Ruling Council of China.",
              d: "He may validly acquire through a Power of Attorney.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "In the course of your externship with the Lagos State High Court, Alausa, you were posted to the Probate Division for a week in order to gain hands on knowledge of the workings of the Division. From all you observed and learnt there.",
            question: "Where a child is a beneficiary in a Will having a Sole Executor, the court will do one of the following in order to protect the interest of the minor.",
            options: {
              a: "Appoint an administrator to administer part of the estate",
              b: "Allow the child to nominate an additional executor",
              c: "Appoint a guardian ad litem",
              d: "Appoint an additional Executor.",
            },
            answer: "a",
          },
          {
            id: 16,
            context: "In the course of your externship with the Lagos State High Court, Alausa, you were posted to the Probate Division for a week in order to gain hands on knowledge of the workings of the Division. From all you observed and learnt there.",
            question: "The following are the contents of the account to be filed by an administrator except:",
            options: {
              a: "Full inventory of assets in the estate",
              b: "Vouchers in the possession of the personal representative",
              c: "A copy of the Probate or Letters of Administration",
              d: "All incomes and expenditure incurred in the course of the administration",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "In the course of your externship with the Lagos State High Court, Alausa, you were posted to the Probate Division for a week in order to gain hands on knowledge of the workings of the Division. From all you observed and learnt there.",
            question: "In an insolvent estate, the administrator's duties include:",
            options: {
              a: "Paying specific gifts while general gifts abate",
              b: "Paying all debts that are in the same categoy",
              c: "Exercising discretion in the payment of all debts that rank pari pasu.",
              d: "B and C above",
            },
            answer: "bonus",
          },
          {
            id: 18,
            context: "In the course of your externship with the Lagos State High Court, Alausa, you were posted to the Probate Division for a week in order to gain hands on knowledge of the workings of the Division. From all you observed and learnt there.",
            question: "Taxes payable by a vendor who sells property at a profit includes:",
            options: {
              a: "Personal Income Tax and Stamp Duties",
              b: "Capital Gains Tax and Personal Income Tax",
              c: "Consent fees and Value Added Tax",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 19,
            context: null,
            question: "The professional charges of your Principal in respect of a sale (acting as Solicitor to Capital Investment Limited) forms part of...............under Capital gains Tax Act (CGTA).",
            options: {
              a: "Accruable income",
              b: "Allowable",
              c: "Taxable income",
              d: "Allowable expenses",
            },
            answer: "d",
          },
          {
            id: 20,
            context: "Assuming that the property was sold for N200,000,000.00, while Capital Investment did the following prior to the sale:\n(i) Advertising the property = N200,000.00\n(ii) Renovation = N40,000.000.00\n(iii) Procuring the necessary approvals for the alteration of the existing building = N1,000,000.00\n\nAssuming your Principal was paid N5,000,000.00 as professional charges. And the initial purchase price of property was N95,000,000.00.",
            question: "The Capital Gains of Capital Investment Limited and the Capital gains Tax payable would be:",
            options: {
              a: "N5,880,000.00 and N58,800,000.00",
              b: "N85,200, 100.00",
              c: "N58,500.000 and N5,800.00",
              d: "None of the above",
            },
            answer: "a",
          },
        ],
      },
      {
        id: "2016-july-professional-ethics",
        name: "Professional Ethics & Skills",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "During the externship period, Robert attended several court sessions where he witnessed the calling of cases from the ..........(1)................by the court's ..........(2)...........He also witnessed the way lawyers who came to represent their clients.......(3)....... Where matters were unable to proceeds. Robert learnt that parties on either side had to pick other date(s) convenient to the court. In other words, such matters were....(4) There were also instances where a lawyer to a party present in court has asked the Judge in writing to put the case on hold for him as her was due to make it to court a little later the same day. This was referred to as having the matter ........(5)....",
            question: "The court called cases from the ..........(1)................",
            options: {
              a: "Roll of lawyers",
              b: "Registrar of cases",
              c: "Cause list",
              d: "Case list",
            },
            answer: "c",
          },
          {
            id: 2,
            context: "During the externship period, Robert attended several court sessions where he witnessed the calling of cases from the ..........(1)................by the court's ..........(2)...........He also witnessed the way lawyers who came to represent their clients.......(3)....... Where matters were unable to proceeds. Robert learnt that parties on either side had to pick other date(s) convenient to the court. In other words, such matters were....(4) There were also instances where a lawyer to a party present in court has asked the Judge in writing to put the case on hold for him as her was due to make it to court a little later the same day. This was referred to as having the matter ........(5)....",
            question: "The court's ..........by which cases are called from the cause list:",
            options: {
              a: "Registrar",
              b: "Judge",
              c: "Court clerk",
              d: "Bailiff of the court",
            },
            answer: "a",
          },
          {
            id: 3,
            context: "During the externship period, Robert attended several court sessions where he witnessed the calling of cases from the ..........(1)................by the court's ..........(2)...........He also witnessed the way lawyers who came to represent their clients.......(3)....... Where matters were unable to proceeds. Robert learnt that parties on either side had to pick other date(s) convenient to the court. In other words, such matters were....(4) There were also instances where a lawyer to a party present in court has asked the Judge in writing to put the case on hold for him as her was due to make it to court a little later the same day. This was referred to as having the matter ........(5)....",
            question: "The way lawyers who came to represent their clients:",
            options: {
              a: "Entered appearance",
              b: "Announced appearance",
              c: "Marked the Register",
              d: "Mentioned appearance",
            },
            answer: "b",
          },
          {
            id: 4,
            context: "During the externship period, Robert attended several court sessions where he witnessed the calling of cases from the ..........(1)................by the court's ..........(2)...........He also witnessed the way lawyers who came to represent their clients.......(3)....... Where matters were unable to proceeds. Robert learnt that parties on either side had to pick other date(s) convenient to the court. In other words, such matters were....(4) There were also instances where a lawyer to a party present in court has asked the Judge in writing to put the case on hold for him as her was due to make it to court a little later the same day. This was referred to as having the matter ........(5)....",
            question: "Matters where parties on either side had to pick other date(s) convenient to the court were:",
            options: {
              a: "Postponed",
              b: "Adjourned",
              c: "Set aside",
              d: "Stood down",
            },
            answer: "b",
          },
          {
            id: 5,
            context: "During the externship period, Robert attended several court sessions where he witnessed the calling of cases from the ..........(1)................by the court's ..........(2)...........He also witnessed the way lawyers who came to represent their clients.......(3)....... Where matters were unable to proceeds. Robert learnt that parties on either side had to pick other date(s) convenient to the court. In other words, such matters were....(4) There were also instances where a lawyer to a party present in court has asked the Judge in writing to put the case on hold for him as her was due to make it to court a little later the same day. This was referred to as having the matter ........(5)....",
            question: "Having the matter put on hold for a lawyer due to make it to court a little later the same day was referred to as having the matter:",
            options: {
              a: "Postponed",
              b: "Delayed",
              c: "Adjourned",
              d: "Stood down",
            },
            answer: "c",
          },
          {
            id: 6,
            context: "On Robert's visits to the Supreme Court of Nigeria, he observed the presence of the Attorneys-General of the Federation and States as well as Senior Advocates of Nigeria (SAN). He noted that this category of persons enjoyed several privileges such as .........(6).......and............(7)........... Robert further observed that there was seniority at the Bar and watched how the hierarchy of lawyers in the profession played out in court in the following order..........8.... Robert learnt that where two or more Senior Advocates of Nigeria (SAN) are appearing before the court,.......(9) would be heard before the others. Finally, Robert noticed that another group of lawyers also enjoyed similar privileges in court. They are referred to as..............(10)..",
            question: "This category of persons (Attorneys-General and SANs) enjoyed several privileges such as:",
            options: {
              a: "Sitting in front of the court",
              b: "Sitting at the Inner in the court room",
              c: "Sitting at the Inner Bar or front row of the court to the left of the Judge",
              d: "Sitting at the front row to the right of the Judge",
            },
            answer: "c",
          },
          {
            id: 7,
            context: "On Robert's visits to the Supreme Court of Nigeria, he observed the presence of the Attorneys-General of the Federation and States as well as Senior Advocates of Nigeria (SAN). He noted that this category of persons enjoyed several privileges such as .........(6).......and............(7)........... Robert further observed that there was seniority at the Bar and watched how the hierarchy of lawyers in the profession played out in court in the following order..........8.... Robert learnt that where two or more Senior Advocates of Nigeria (SAN) are appearing before the court,.......(9) would be heard before the others. Finally, Robert noticed that another group of lawyers also enjoyed similar privileges in court. They are referred to as..............(10)..",
            question: "Another privilege enjoyed by this category of persons was that they could:",
            options: {
              a: "Mention their cases first with leave of other counsel present",
              b: "Call their matters out of turn",
              c: "Call their matters for mention out of turn",
              d: "Call their mattes for mention first with leave of counsel present.",
            },
            answer: "c",
          },
          {
            id: 8,
            context: "On Robert's visits to the Supreme Court of Nigeria, he observed the presence of the Attorneys-General of the Federation and States as well as Senior Advocates of Nigeria (SAN). He noted that this category of persons enjoyed several privileges such as .........(6).......and............(7)........... Robert further observed that there was seniority at the Bar and watched how the hierarchy of lawyers in the profession played out in court in the following order..........8.... Robert learnt that where two or more Senior Advocates of Nigeria (SAN) are appearing before the court,.......(9) would be heard before the others. Finally, Robert noticed that another group of lawyers also enjoyed similar privileges in court. They are referred to as..............(10)..",
            question: "The hierarchy of lawyers in the profession played out in court in the following order:",
            options: {
              a: "Attorney-General of the Federation, Attorney-General of the States, Benchers, Senior Advocates of Nigeria.",
              b: "Attorney-General of the Federation, Benchers, Attorney-General of the States, Senior Advocates of Nigeria.",
              c: "Attorney-General of the Federation, Senior Advocates of Nigeria, Benchers, Attorney-General of the States.",
              d: "Attorney-General of the Federation, Benchers, Senior Advocates of Nigeria, Attorney General of the States",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "On Robert's visits to the Supreme Court of Nigeria, he observed the presence of the Attorneys-General of the Federation and States as well as Senior Advocates of Nigeria (SAN). He noted that this category of persons enjoyed several privileges such as .........(6).......and............(7)........... Robert further observed that there was seniority at the Bar and watched how the hierarchy of lawyers in the profession played out in court in the following order..........8.... Robert learnt that where two or more Senior Advocates of Nigeria (SAN) are appearing before the court,.......(9) would be heard before the others. Finally, Robert noticed that another group of lawyers also enjoyed similar privileges in court. They are referred to as..............(10)..",
            question: "Where two or more Senior Advocates of Nigeria (SAN) are appearing before the court, who would be heard before the others?",
            options: {
              a: "The one who is more Senior at the Bar.",
              b: "The one who was earlier in time to be made a Senior Advocates of Nigeria.",
              c: "The one with a better established Law Practice",
              d: "The one who arrives the court room first.",
            },
            answer: "b",
          },
          {
            id: 10,
            context: "On Robert's visits to the Supreme Court of Nigeria, he observed the presence of the Attorneys-General of the Federation and States as well as Senior Advocates of Nigeria (SAN). He noted that this category of persons enjoyed several privileges such as .........(6).......and............(7)........... Robert further observed that there was seniority at the Bar and watched how the hierarchy of lawyers in the profession played out in court in the following order..........8.... Robert learnt that where two or more Senior Advocates of Nigeria (SAN) are appearing before the court,.......(9) would be heard before the others. Finally, Robert noticed that another group of lawyers also enjoyed similar privileges in court. They are referred to as..............(10)..",
            question: "Another group of lawyers also enjoyed similar privileges in court. They are referred to as:",
            options: {
              a: "Members of the Council of Legal Education",
              b: "Members of the Legal Practitioners' Privileges Committee",
              c: "The Nigeria Bar Association President as well as all State Nigerian Bar Association Chairmen.",
              d: "Members of the Body of Benchers",
            },
            answer: "d",
          },
          {
            id: 11,
            context: "Mr. Ajayi Benjamin is the Principal Counsel at Ajayi Legal Consult, located along Ogbomoso Street, Area 8, Garki, Abuja, a very busy Law Firm. Mr. Ajayi has employed eight (8) young and vibrant lawyers to work with him. During your just concluded Externship Programme, five (5) students of the Nigerian Law School were posted to the Law Firm. The externs were able to observe and learn about the day to day running of the Law firm.",
            question: "The Law Firm described above is:",
            options: {
              a: "A Sole Proprietorship",
              b: "A Sole Practitionership",
              c: "A Partnership",
              d: "An Associateship",
            },
            answer: "a",
          },
          {
            id: 12,
            context: "Mr. Ajayi Benjamin is the Principal Counsel at Ajayi Legal Consult, located along Ogbomoso Street, Area 8, Garki, Abuja, a very busy Law Firm. Mr. Ajayi has employed eight (8) young and vibrant lawyers to work with him. During your just concluded Externship Programme, five (5) students of the Nigerian Law School were posted to the Law Firm. The externs were able to observe and learn about the day to day running of the Law firm.",
            question: "In the type of Law Firm described above, one of the following items is very essential:",
            options: {
              a: "A personal diary",
              b: "A personal calendar",
              c: "An office diary",
              d: "An office calendar",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "Mr. Ajayi Benjamin is the Principal Counsel at Ajayi Legal Consult, located along Ogbomoso Street, Area 8, Garki, Abuja, a very busy Law Firm. Mr. Ajayi has employed eight (8) young and vibrant lawyers to work with him. During your just concluded Externship Programme, five (5) students of the Nigerian Law School were posted to the Law Firm. The externs were able to observe and learn about the day to day running of the Law firm.",
            question: "Which of the following is mandatory for the Law Firm under the Rules of Professional Conduct for Legal Practitioners?",
            options: {
              a: "Client's Account",
              b: "A four (4) Room office facility.",
              c: "Opening of a current account for all the salaried Lawyers in the Law Firm.",
              d: "All of the above",
            },
            answer: "a",
          },
          {
            id: 14,
            context: "Mr. Ajayi Benjamin is the Principal Counsel at Ajayi Legal Consult, located along Ogbomoso Street, Area 8, Garki, Abuja, a very busy Law Firm. Mr. Ajayi has employed eight (8) young and vibrant lawyers to work with him. During your just concluded Externship Programme, five (5) students of the Nigerian Law School were posted to the Law Firm. The externs were able to observe and learn about the day to day running of the Law firm.",
            question: "A most important office equipment you would find in the above Law Firms is:",
            options: {
              a: "A fax machine",
              b: "A computer",
              c: "A photocopier",
              d: "A pager",
            },
            answer: "b",
          },
          {
            id: 15,
            context: "Mr. Ajayi Benjamin is the Principal Counsel at Ajayi Legal Consult, located along Ogbomoso Street, Area 8, Garki, Abuja, a very busy Law Firm. Mr. Ajayi has employed eight (8) young and vibrant lawyers to work with him. During your just concluded Externship Programme, five (5) students of the Nigerian Law School were posted to the Law Firm. The externs were able to observe and learn about the day to day running of the Law firm.",
            question: "Due to the number of fee earners in the Law Firm, an essential support staff that the law firm must have to ensure perfect synergy is:",
            options: {
              a: "An attractive receptionist.",
              b: "An smart secretary",
              c: "A hard working messenger",
              d: "A dutiful Librarian",
            },
            answer: "b",
          },
          {
            id: 16,
            context: "Mr. Ajayi Benjamin is the Principal Counsel at Ajayi Legal Consult, located along Ogbomoso Street, Area 8, Garki, Abuja, a very busy Law Firm. Mr. Ajayi has employed eight (8) young and vibrant lawyers to work with him. During your just concluded Externship Programme, five (5) students of the Nigerian Law School were posted to the Law Firm. The externs were able to observe and learn about the day to day running of the Law firm.",
            question: "As an Extern in the Law Firm, one important lawyering skill you are likely to acquire within the office is:",
            options: {
              a: "Advocacy skills",
              b: "Oration skills",
              c: "Interviewing and Counseling skill",
              d: "Examination of witnesses skill",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Mr. Ajayi Benjamin is the Principal Counsel at Ajayi Legal Consult, located along Ogbomoso Street, Area 8, Garki, Abuja, a very busy Law Firm. Mr. Ajayi has employed eight (8) young and vibrant lawyers to work with him. During your just concluded Externship Programme, five (5) students of the Nigerian Law School were posted to the Law Firm. The externs were able to observe and learn about the day to day running of the Law firm.",
            question: "Which of the underlisted is one of the most basic room requirement in any Law office:",
            options: {
              a: "The practitioners' room",
              b: "The library",
              c: "The kitchenette",
              d: "The generator room",
            },
            answer: "b",
          },
          {
            id: 18,
            context: null,
            question: "You were an extern in the Legal Drafting department of the Ministry of Justice of Kano State. The Director has asked you what part of a legislation broadly captures main themes of the legislation:",
            options: {
              a: "Short title",
              b: "Preamble",
              c: "Long title",
              d: "Commencement clause",
            },
            answer: "c",
          },
          {
            id: 19,
            context: null,
            question: "He also asked you how section subsection, paragraph and subparagraph may be written in composing the draft of a legislation:",
            options: {
              a: "S.1(1)(a(i)",
              b: "S.1(1)(A)(i)",
              c: "S.1(1)a(i)",
              d: "None of the above",
            },
            answer: "b",
          },
          {
            id: 20,
            context: null,
            question: "The Director seeks to know which of the following is referred to as the nickname of a statute?",
            options: {
              a: "Marginal note",
              b: "Long title",
              c: "Short title",
              d: "Schedule",
            },
            answer: "c",
          },
        ],
      },
      {
        id: "2016-july-civil-civil-litigation",
        name: "Civil Litigation",
        questionsCount: 20,
        questions: [
          {
            id: 1,
            context: "During your externship in the law firm of J.T. Alade & Co., Chief Ade Abel instructed your Principal, Mr. J.T. Alade, SAN to file an election petition on his behalf. Chief Abel contested the recent Senatorial election held in Oyo State on the platform of Mass Action Party (MAP) against Dr. Lola Yori of Democratic People's Congress Party (DPCP). The election was held on June 14, 2016 and the result was declared on June 15, 2016, with Dr. Yori as the winner.",
            question: "Mr. J. T. Alade must file the petition on or before: -",
            options: {
              a: "13th of July 2016",
              b: "8th of July 2016",
              c: "11th of July 2016",
              d: "2nd of July 2016",
            },
            answer: "b",
          },
          {
            id: 2,
            context: "During your externship in the law firm of J.T. Alade & Co., Chief Ade Abel instructed your Principal, Mr. J.T. Alade, SAN to file an election petition on his behalf. Chief Abel contested the recent Senatorial election held in Oyo State on the platform of Mass Action Party (MAP) against Dr. Lola Yori of Democratic People's Congress Party (DPCP). The election was held on June 14, 2016 and the result was declared on June 15, 2016, with Dr. Yori as the winner.",
            question: "Mr. Alade, your Principal has asked you to list the documents that will accompany the petition. They are:",
            options: {
              a: "Pre-action counselling certificate, list of witnesses, written statement on oath.",
              b: "List of witnesses, written statement on oath of witnesses, copies or list of documents to be relied on.",
              c: "Pre-action protocol Form 01, list of witnesses, written statement on oath of witnesses, documents to be relied on.",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 3,
            context: "During your externship in the law firm of J.T. Alade & Co., Chief Ade Abel instructed your Principal, Mr. J.T. Alade, SAN to file an election petition on his behalf. Chief Abel contested the recent Senatorial election held in Oyo State on the platform of Mass Action Party (MAP) against Dr. Lola Yori of Democratic People's Congress Party (DPCP). The election was held on June 14, 2016 and the result was declared on June 15, 2016, with Dr. Yori as the winner.",
            question: "Mr. Alade sought to know what time limit the Tribunal has to deliver its judgment in the case, counting from when the petition was filed?",
            options: {
              a: "90 days",
              b: "60 days",
              c: "3 months",
              d: "180 days.",
            },
            answer: "d",
          },
          {
            id: 4,
            context: "During your externship in the law firm of J.T. Alade & Co., Chief Ade Abel instructed your Principal, Mr. J.T. Alade, SAN to file an election petition on his behalf. Chief Abel contested the recent Senatorial election held in Oyo State on the platform of Mass Action Party (MAP) against Dr. Lola Yori of Democratic People's Congress Party (DPCP). The election was held on June 14, 2016 and the result was declared on June 15, 2016, with Dr. Yori as the winner.",
            question: "Chief Abel's grounds for the petition are under-listed. Which of them is not tenable?",
            options: {
              a: "Dr. Yori was not qualified to contest.",
              b: "Corrupt practices",
              c: "Undue influence",
              d: "Non-compliance with the Electoral Act 2010 as amended.",
            },
            answer: "c",
          },
          {
            id: 5,
            context: "During your externship in the law firm of J.T. Alade & Co., Chief Ade Abel instructed your Principal, Mr. J.T. Alade, SAN to file an election petition on his behalf. Chief Abel contested the recent Senatorial election held in Oyo State on the platform of Mass Action Party (MAP) against Dr. Lola Yori of Democratic People's Congress Party (DPCP). The election was held on June 14, 2016 and the result was declared on June 15, 2016, with Dr. Yori as the winner.",
            question: "Your Principal did not advise his client, Chief Abel to attempt ADR before filing the petition because:-",
            options: {
              a: "Election petition is sui generis",
              b: "Election petition is a non arbitrable matter",
              c: "Election petition is usually controversial",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 6,
            context: "In the course of your Court Attachment, Hon. Justice Temple White, in whose court you were sought to test all the externs by asking the following questions 6 – 10: -",
            question: "If all the parties to a civil action in the course of proceedings seek an adjournment to settle their dispute out of court, they will need to file and adopt in court:",
            options: {
              a: "The terms of consent judgment.",
              b: "Terms of consent agreement.",
              c: "Terms of brief of settlement",
              d: "Terms of settlement.",
            },
            answer: "d",
          },
          {
            id: 7,
            context: "In the course of your Court Attachment, Hon. Justice Temple White, in whose court you were sought to test all the externs by asking the following questions 6 – 10: -",
            question: "Once a Court has pronounced the process identified in 6 above as the Court's judgment; the implication is that the judgment:",
            options: {
              a: "Is not appellable",
              b: "Is appellable with leave of either the trial or appellate court.",
              c: "Can be reversed by the trial judge.",
              d: "Is appellable as of right.",
            },
            answer: "b",
          },
          {
            id: 8,
            context: "In the course of your Court Attachment, Hon. Justice Temple White, in whose court you were sought to test all the externs by asking the following questions 6 – 10: -",
            question: "The best means to recover possession from a tenant against whom the court has made an order of recovery of possession is: -",
            options: {
              a: "Warrant for possession",
              b: "Writ of possession",
              c: "Writ of fifa (fieri facia)",
              d: "Writ of sequestration.",
            },
            answer: "a",
          },
          {
            id: 9,
            context: "In the course of your Court Attachment, Hon. Justice Temple White, in whose court you were sought to test all the externs by asking the following questions 6 – 10: -",
            question: "The phrase \"the judgment is against the weight of evidence\" is only applicable: -",
            options: {
              a: "As a form of general traverse in a brief of argument.",
              b: "As a form of general traverse in a statement of defence.",
              c: "As a general traverse in a notice of appeal.",
              d: "As a general ground of appeal in a notice of appeal.",
            },
            answer: "d",
          },
          {
            id: 10,
            context: "In the course of your Court Attachment, Hon. Justice Temple White, in whose court you were sought to test all the externs by asking the following questions 6 – 10: -",
            question: "The service of originating processes may only be validly made: -",
            options: {
              a: "Between 6 in the morning and 4 in the evening Monday – Friday.",
              b: "Between 6 in the morning and 6 in the evening Monday – Saturday",
              c: "Between 6 in the morning and 6 in the evening Monday – Friday.",
              d: "Between 6 in the morning and 4 in the evening Monday – Saturday.",
            },
            answer: "b",
          },
          {
            id: 11,
            context: "On August 5, 2014, Chief John Hutu gave a cheque for the amount of N50,000,000.00 (Fifty million naira) to Planwell (Nig.) Ltd., as payment for sundry services rendered. Two days later, Chief Hutu got a call from his bank, Trinity Bank Plc, seeking clarification or confirmation whether the cheque should be honoured to which Chief Hutu answered in the affirmative. The Bank official did not property understand Chief Hutu and therefore declined payment. Planwell (Nig.) Ltd., through its counsel, S.T. Jangbala, Esq. commenced an action by Originating Motion, seeking payment of the said sum.\n\nThe action is before the Lagos High Court.",
            question: "Given the scenario above, how would you have commenced the action differently?",
            options: {
              a: "I will commence the action by writ of summons under the fast track procedure.",
              b: "I will commence the action by writ of summons under the undefended list procedure.",
              c: "I will commence the action by originating summons under the summary judgment procedure.",
              d: "None of the above.",
            },
            answer: "d",
          },
          {
            id: 12,
            context: "On August 5, 2014, Chief John Hutu gave a cheque for the amount of N50,000,000.00 (Fifty million naira) to Planwell (Nig.) Ltd., as payment for sundry services rendered. Two days later, Chief Hutu got a call from his bank, Trinity Bank Plc, seeking clarification or confirmation whether the cheque should be honoured to which Chief Hutu answered in the affirmative. The Bank official did not property understand Chief Hutu and therefore declined payment. Planwell (Nig.) Ltd., through its counsel, S.T. Jangbala, Esq. commenced an action by Originating Motion, seeking payment of the said sum.\n\nThe action is before the Lagos High Court.",
            question: "Assuming the action was commenced by writ of summons, what would you advise Chief John Hutu to do in respect of the Bank?",
            options: {
              a: "Apply for a garnishee order.",
              b: "Apply for an interpleader.",
              c: "Apply for a third party proceedings.",
              d: "Apply for stay of proceedings.",
            },
            answer: "c",
          },
          {
            id: 13,
            context: "On August 5, 2014, Chief John Hutu gave a cheque for the amount of N50,000,000.00 (Fifty million naira) to Planwell (Nig.) Ltd., as payment for sundry services rendered. Two days later, Chief Hutu got a call from his bank, Trinity Bank Plc, seeking clarification or confirmation whether the cheque should be honoured to which Chief Hutu answered in the affirmative. The Bank official did not property understand Chief Hutu and therefore declined payment. Planwell (Nig.) Ltd., through its counsel, S.T. Jangbala, Esq. commenced an action by Originating Motion, seeking payment of the said sum.\n\nThe action is before the Lagos High Court.",
            question: "Based on your answer above, which of the following will you not depose to in your supporting affidavit?",
            options: {
              a: "The fact that the Bank is liable to indemnify the Defendant.",
              b: "The fact that the Bank is willing to dispose of the subject matter as directed by the Court.",
              c: "The fact that Chief John Hutu authorized the Bank to honour the cheque but the Bank failed, neglected and/or refused to do so.",
              d: "The fact that Chief Hutu had sufficient funds in his account with the Bank.",
            },
            answer: "b",
          },
          {
            id: 14,
            context: "On August 5, 2014, Chief John Hutu gave a cheque for the amount of N50,000,000.00 (Fifty million naira) to Planwell (Nig.) Ltd., as payment for sundry services rendered. Two days later, Chief Hutu got a call from his bank, Trinity Bank Plc, seeking clarification or confirmation whether the cheque should be honoured to which Chief Hutu answered in the affirmative. The Bank official did not property understand Chief Hutu and therefore declined payment. Planwell (Nig.) Ltd., through its counsel, S.T. Jangbala, Esq. commenced an action by Originating Motion, seeking payment of the said sum.\n\nThe action is before the Lagos High Court.",
            question: "If the action was properly commenced, which of these will Chief John Hutu's counsel not file in response?",
            options: {
              a: "Writ of summons.",
              b: "Statement of defence.",
              c: "Witness' statement on oath.",
              d: "Copies of documents to be relied on.",
            },
            answer: "a",
          },
          {
            id: 15,
            context: "On August 5, 2014, Chief John Hutu gave a cheque for the amount of N50,000,000.00 (Fifty million naira) to Planwell (Nig.) Ltd., as payment for sundry services rendered. Two days later, Chief Hutu got a call from his bank, Trinity Bank Plc, seeking clarification or confirmation whether the cheque should be honoured to which Chief Hutu answered in the affirmative. The Bank official did not property understand Chief Hutu and therefore declined payment. Planwell (Nig.) Ltd., through its counsel, S.T. Jangbala, Esq. commenced an action by Originating Motion, seeking payment of the said sum.\n\nThe action is before the Lagos High Court.",
            question: "Which of the following orders is the Judge not likely to make on the day of hearing of this case?",
            options: {
              a: "An order entering judgment.",
              b: "An order granting leave to defend.",
              c: "An order placing the suit under the fast track procedure.",
              d: "None of the above.",
            },
            answer: "c",
          },
          {
            id: 16,
            context: "Mr. Atanga Bulus was a judgment debtor in a declaratory judgment before the Lagos State High Court. Dissatisfied with the judgment he filed (16) ......... at the (17) ................ He wanted the status quo to be maintained pending appeal and consequently filed an application for (18) ......... before (19) ............. The judgment creditor opposed the application by filing (20) .................",
            question: "16.",
            options: {
              a: "The grounds of appeal.",
              b: "The particulars of appeal.",
              c: "The notice of appeal.",
              d: "The notice of judgment.",
            },
            answer: "c",
          },
          {
            id: 17,
            context: "Mr. Atanga Bulus was a judgment debtor in a declaratory judgment before the Lagos State High Court. Dissatisfied with the judgment he filed (16) ......... at the (17) ................ He wanted the status quo to be maintained pending appeal and consequently filed an application for (18) ......... before (19) ............. The judgment creditor opposed the application by filing (20) .................",
            question: "17.",
            options: {
              a: "Registry of the trial court.",
              b: "Registry of the appellate Court.",
              c: "Office of the Commissioner for Oath.",
              d: "None of the above.",
            },
            answer: "a",
          },
          {
            id: 18,
            context: "Mr. Atanga Bulus was a judgment debtor in a declaratory judgment before the Lagos State High Court. Dissatisfied with the judgment he filed (16) ......... at the (17) ................ He wanted the status quo to be maintained pending appeal and consequently filed an application for (18) ......... before (19) ............. The judgment creditor opposed the application by filing (20) .................",
            question: "18.",
            options: {
              a: "Stay of judgment",
              b: "Stay of execution",
              c: "An injunction pending appeal.",
              d: "Stay of proceedings.",
            },
            answer: "b",
          },
          {
            id: 19,
            context: "Mr. Atanga Bulus was a judgment debtor in a declaratory judgment before the Lagos State High Court. Dissatisfied with the judgment he filed (16) ......... at the (17) ................ He wanted the status quo to be maintained pending appeal and consequently filed an application for (18) ......... before (19) ............. The judgment creditor opposed the application by filing (20) .................",
            question: "19.",
            options: {
              a: "The appellate Court",
              b: "The trial court",
              c: "the Court bailiff",
              d: "None of the above.",
            },
            answer: "b",
          },
          {
            id: 20,
            context: "Mr. Atanga Bulus was a judgment debtor in a declaratory judgment before the Lagos State High Court. Dissatisfied with the judgment he filed (16) ......... at the (17) ................ He wanted the status quo to be maintained pending appeal and consequently filed an application for (18) ......... before (19) ............. The judgment creditor opposed the application by filing (20) .................",
            question: "20.",
            options: {
              a: "Affidavit",
              b: "Counter-affidavit",
              c: "Counter-affidavit and written address",
              d: "Affidavit and written address.",
            },
            answer: "c",
          },
        ],
      },
    ],
  },
};

export default mcqQuestions;
