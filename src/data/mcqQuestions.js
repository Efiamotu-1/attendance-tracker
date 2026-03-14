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
      // LAW IN PRACTICE (20 Questions)
      // ========================================
      {
        id: "2011-august-law-in-practice",
        name: "Law in Practice",
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
};

export default mcqQuestions;
