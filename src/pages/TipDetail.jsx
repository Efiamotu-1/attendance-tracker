import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TipsCard from "../ui/TipsCard";

const tipsData = {
  "nls-abuja-food-tips": {
    title: "NLS Abuja Food Tips",
    details: [
      // NB Section
      {
        section: "NB:",
        content: [
          "These are the people I patronised and I liked their food.",
          "The amount is the amount I bought them as at last year November so it may have increased.",
          "They sell per plate.",
          "Factor in amount of takeaway (was 200). You will have to buy at the beginning but later on, you can start taking your own plate. You can also eat at their stores.",
          "If you eat at their stores, it comes with a sachet of pure water."
        ]
      },
      // Vendors Section
      {
        section: "Food Vendors and Their Prices",
        vendors: [
          {
            name: "Mama Ngozi (my go to for swallow, noodles and fried potatoes)",
            items: [
              "White rice and stew - 1500",
              "Jollof or Coconut rice and beef - 1500",
              "Fried yam/potatoes and egg sauce - 1500",
              "Swallow - Garri/Semo with soups of your choice (vegetable, okro, egusi etc) - 1300. But pounded yam is 1500",
              "NB: it's just one swallow. Extra swallow costs 500",
              "2 Noodles and 1 Egg - 1200"
            ]
          },
          {
            name: "Mama Aisha (My go to for white rice and stew)",
            items: [
              "White rice and Pepper Sauce or normal stew - 1500",
              "NB: the pepper sauce usually comes with a lot of oil so you have to keep shouting at them not to put plenty oil but it's sweet",
              "They sell a lot of varieties - Jollof, Fried, Swallow, noodles, fries but I majorly patronise them for their rice and pepper sauce"
            ]
          },
          {
            name: "Bwari Kitchen (my go to for correct/proper Jollof)",
            items: [
              "Jollof with beef - 2500",
              "NB: Their plate is always full and the beef is bigger than that of other vendors. I usually have to eat the food twice.",
              "They sell other things too but it's quite pricey.",
              "I like their moimoi though (it's 800). I buy it for dinner sometimes and just make custard or eat it with bread."
            ]
          },
          {
            name: "Akwa Best (my go to for pepper soup)",
            items: [
              "It's a proper calabar kitchen so they sell varieties (Afang, Fisherman soup, Draw(Okro&Ogbono) etc)",
              "1500 per plate too. And it's very good",
              "But their swallow is smaller than Mama Ngozi's own so I buy swallow more from Mama Ngozi.",
              "I buy rice and pepper soup from them (on days when I feel like my pocket can accommodate it) - usually 3k"
            ]
          },
          {
            name: "Eyilobe",
            items: [
              "She's the only yoruba food vendor on campus. Sells Amala, pounded yam etc.",
              "I like her cos her food tastes like proper Yoruba homemade food but it's expensive.",
              "My go to for correct pounded yam and efo riro. But you'll spend about 3k or more for one meal which may not exactly fill you up (except you want to buy more)"
            ]
          },
          {
            name: "Suya guys",
            items: [
              "There are 2 suya guys",
              "Suya ranges from 500 to 2500",
              "Average spend - 1k - 1500. They sell masa too"
            ]
          },
          {
            name: "Akara Woman",
            items: [
              "Sells Fried yam, fried potatoes, fried plantain and akara. Sells bread too",
              "I think she sells the yam and potatoes for 3 for 100 naira (can't exactly remember)",
              "Akara - 50 naira per one"
            ]
          },
          {
            name: "Other food vendors",
            items: [
              "There are other food vendors on campus but these are the ones I tried. I didn't try the others at all. You may decide to explore but I'm sure their price range shouldn't be any different.",
              "Carwash - I think I bought once and didn't like the food.",
              "Choppers - these ones are expensive - only bought from them once or twice but their food is really good."
            ]
          }
        ]
      },
      // Others Section
      {
        section: "Others",
        content: [
          "Bread - 1300 - 1500",
          "Bag of water - 500",
          "I usually buy them twice in a week"
        ]
      },
      // Routine Section
      {
        section: "Daily Food Routine",
        routine: [
          {
            title: "Weekday (Breakfast)",
            items: [
              "Bread (with butter or tea)",
              "Cereal",
              "Biscuit",
              "Generally didn't have to spend money for breakfast cos I brought those things already from home. Except Bread",
              "Only time I spend money is if I don't eat before leaving my room and I buy snacks e.g fish roll, egg roll, meat pie etc (but I only did this towards the end of the session sha)",
              "There are days when I fast too"
            ]
          },
          {
            title: "Weekday (Lunch)",
            items: [
              "There's usually a 30 minutes break between classes",
              "I stay in class mostly. Sometimes, I may buy snacks. If I bring biscuit, I eat. If I don't, till after class (mostly because I'd have had breakfast before class sha).",
              "Buy proper food in Mami after class",
              "See the list of food options and their prices"
            ]
          },
          {
            title: "Weekday (Dinner)",
            items: [
              "Buy food (if I feel like I have some money)",
              "Suya and Masa (take it alone or with garri)",
              "Fried yam/potatoes some times",
              "Moimoi with custard (I only put Bwari Kitchen for moi moi but other vendors also sell and it's cheaper - 200)"
            ]
          },
          {
            title: "Weekend (Breakfast)",
            items: [
              "Custard and Akara",
              "Akara and Bread",
              "Bread and tea or butter",
              "Cereal",
              "Snuggle biscuits into the library sometimes (they must not catch you o)"
            ]
          },
          {
            title: "Weekend (Dinner)",
            items: [
              "Buy food",
              "On Sundays, your options are limited cos most vendors don't open so it's best to buy food early."
            ]
          }
        ]
      }
    ]
  },
  "nls-abuja-cab-numbers": {
    title: "NLS Abuja Cab Numbers",
    type: "contacts",
    description: "Active cab numbers from the last set. These drivers are familiar with the NLS Abuja campus and surrounding areas.",
    contacts: [
      { name: "Mr. Cletus", phone: "08035971197" },
      { name: "Mr. Ralph", phone: "08108460125" },
      { name: "Mr. Gbenga", phone: "0803 452 3567" },
      { name: "Mr. Chris", phone: "08069833362" },
      { name: "Mr. Felix", phone: "07037448081" },
      { name: "Mr. Abdul", phone: "+234 905 566 5805" },
    ]
  }
};

function TipDetail() {
  const { tipId } = useParams();
  const navigate = useNavigate();
  const tip = tipsData[tipId];

  if (!tip) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Tip Not Found</h1>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg">Go Back</button>
      </div>
    );
  }

  return (
    <div className="p-2 xs:p-3 sm:p-5 md:p-8 max-w-3xl mx-auto">
      <div className="mb-4 flex items-center gap-2 text-xs xs:text-sm text-gray-500 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded px-3 py-2">
        <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/></svg>
        <span>These tips were sourced from an external resource.</span>
      </div>
      <TipsCard title={tip.title}>
        {tip.type === "contacts" ? (
          /* ======== Contacts / Cab Numbers Layout ======== */
          <div className="space-y-6">
            {/* Description */}
            <section className="rounded-xl bg-primary-100/70 dark:bg-dark-800/80 p-3 xs:p-4 border border-primary-200 dark:border-dark-700 shadow-sm flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
              <span className="mt-1 text-primary-500">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/></svg>
              </span>
              <p className="text-gray-800 dark:text-gray-200 text-sm xs:text-base">{tip.description}</p>
            </section>

            {/* Contacts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
              {tip.contacts.map((contact, idx) => (
                <div
                  key={idx}
                  className="bg-primary-50 dark:bg-dark-900 border border-primary-200 dark:border-dark-700 rounded-xl p-3 xs:p-4 shadow-sm flex items-center gap-3 xs:gap-4 transition-colors hover:border-primary-400 dark:hover:border-primary-500"
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm xs:text-base" style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}>
                    {contact.name.split(" ").pop().charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-900 dark:text-white text-sm xs:text-base truncate">{contact.name}</p>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm xs:text-base underline underline-offset-2 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  {/* Call icon */}
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex-shrink-0 p-2 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 text-white transition-colors"
                    title={`Call ${contact.name}`}
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ======== Food Tips Layout (original) ======== */
          <div className="space-y-8 sm:space-y-10">
            {/* NB Section */}
            <section className="rounded-xl bg-primary-100/70 dark:bg-dark-800/80 p-3 xs:p-4 border border-primary-200 dark:border-dark-700 shadow-sm flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
              <span className="mt-1 text-primary-500">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/></svg>
              </span>
              <div>
                <h2 className="text-base xs:text-lg font-bold text-primary-600 dark:text-primary-400 mb-1">Important Notes</h2>
                <ul className="list-disc pl-4 xs:pl-5 space-y-1 text-gray-800 dark:text-gray-200 text-sm xs:text-base">
                  {tip.details[0].content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Vendors Section */}
            <section>
              <h2 className="text-base xs:text-lg font-bold text-primary-600 dark:text-primary-400 mb-3 xs:mb-4 flex items-center gap-2">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                Food Vendors and Their Prices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                {tip.details[1].vendors.map((vendor, idx) => (
                  <div key={idx} className="bg-primary-50 dark:bg-dark-900 border border-primary-200 dark:border-dark-700 rounded-xl p-3 xs:p-4 shadow-sm">
                    <h3 className="font-bold text-primary-500 dark:text-primary-400 mb-2 text-sm xs:text-base flex items-center gap-2">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                      {vendor.name}
                    </h3>
                    <ul className="list-disc pl-4 xs:pl-5 space-y-1 text-gray-700 dark:text-gray-200 text-sm xs:text-base">
                      {vendor.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Others Section */}
            <section className="rounded-xl bg-yellow-50 dark:bg-yellow-900/30 p-3 xs:p-4 border border-yellow-200 dark:border-yellow-700 shadow-sm">
              <h2 className="text-base xs:text-lg font-bold text-yellow-700 dark:text-yellow-300 mb-2 flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                Others
              </h2>
              <ul className="list-disc pl-4 xs:pl-5 space-y-1 text-gray-800 dark:text-gray-100 text-sm xs:text-base">
                {tip.details[2].content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Routine Section */}
            <section>
              <h2 className="text-base xs:text-lg font-bold text-violet-700 dark:text-violet-300 mb-3 xs:mb-4 flex items-center gap-2">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                Daily Food Routine
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                {tip.details[3].routine.map((routine, idx) => (
                  <div key={idx} className="bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-700 rounded-xl p-3 xs:p-4 shadow-sm">
                    <h3 className="font-bold text-violet-700 dark:text-violet-200 mb-2 flex items-center gap-2 text-sm xs:text-base">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                      {routine.title}
                    </h3>
                    <ul className="list-disc pl-4 xs:pl-5 space-y-1 text-gray-800 dark:text-gray-100 text-sm xs:text-base">
                      {routine.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </TipsCard>
      <button onClick={() => navigate(-1)} className="mt-6 px-4 xs:px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold shadow transition-colors w-full sm:w-auto">Back to Tips</button>
    </div>
  );
}

export default TipDetail;
