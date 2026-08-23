export interface Article {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  content: string;   // <-- Add this for full article page
  featured?: boolean;
  sections?: ArticleSection[];
}

export interface ArticleStory {
  title: string;
  image: string;
  alt: string;
  caption: string;
  credit: string;
  paragraphs: string[];
}

export interface ArticleSection {
  heading: string;
  stories: ArticleStory[];
}

export const articles: Article[] = [
  {
    id: 1,
    category: 'Global Affairs',
    image: 'https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Understanding Global Migration Patterns',
    description: 'An analysis of contemporary migration flows and their impact on host countries and regions across an interconnected world.',
    author: 'Hridaya',
    date: 'Nov 25, 2025',
    readTime: '8 min read',
    content: `
      Global migration has become one of the defining features of the modern world...
      (Add your full 1500–2000 word article here)
    `
  },
  {
    id: 2,
    category: 'Culture',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cultural Diplomacy in the Digital Age',
    description: 'How soft power and cultural exchange are evolving through social media and digital platforms.',
    author: 'Izabel',
    date: 'Nov 23, 2025',
    readTime: '7 min read',
    content: `
      Cultural diplomacy has rapidly evolved with the rise of digital communication tools...
      (Add full long-form content here)
    `
  },
  {
    id: 3,
    category: 'Environment',
    image: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=800',
    title: 'Climate Change and International Cooperation',
    description: 'Examining the challenges and successes of global climate agreements.',
    author: 'Jeslin',
    date: 'Nov 20, 2025',
    readTime: '10 min read',
    content: `
      Climate change has emerged as one of the most pressing global concerns...
      (Add 1500–2000 words here)
    `
  },
  {
    id: 4,
    category: 'Politics',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'The Rise of Populism in Democratic Nations',
    description: 'Examining populist movements and their implications for democratic institutions.',
    author: 'Vastav',
    date: 'Nov 18, 2025',
    readTime: '9 min read',
    content: `
      Populism has transformed political landscapes across continents...
      (Insert full article text here)
    `
  },
  {
    id: 5,
    category: 'Economics',
    image: 'https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Economic Sanctions and Their Effectiveness',
    description: 'Exploring sanctions as a foreign policy tool and their global impacts.',
    author: 'Mainak',
    date: 'Nov 15, 2025',
    readTime: '8 min read',
    content: `
      Economic sanctions have long been used by nations seeking political leverage...
      (Full content goes here)
    `
  },
  {
    id: 6,
    category: 'Podcast',
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Conversations on Global Governance',
    description: 'Interviews with experts and students passionate about world affairs.',
    author: 'Lyceum Team',
    date: 'Nov 12, 2025',
    readTime: '45 min listen',
    content: `
      Welcome to this special podcast edition where we explore global governance through multiple perspectives...
      (Podcast summary / transcript here)
    `
  },
  {
    id: 7,
    category: 'Politics',
    image: '/dk.png',
    title: 'Our Home, the Globe and Around, in a Glance',
    description: 'A July 2026 briefing covering major domestic policy developments in India and key international affairs shaping the month.',
    author: 'Editorial Desk',
    date: 'Aug 02, 2026',
    readTime: '18 min read',
    content: `
      July 2026, 1st Edition.

      This edition brings together major developments in Indian public policy and domestic affairs alongside key international stories from around the world. The article is organised as a monthly digest with grouped section headings and image-led story entries to match the source document while staying inside the site’s existing reading experience.
    `,
    sections: [
      {
        heading: 'Public Policy and Domestic Affairs',
        stories: [
          {
            title: 'Karnataka to Set Up India’s First Government-Led AI University',
            image: '/dk.png',
            alt: 'D.K. Shivakumar addressing the Google I/O Connect India 2026 event in Bengaluru',
            caption: 'D.K. Shivakumar addressing the Google I/O Connect India 2026 event at BIEC, Bengaluru.',
            credit: 'Economic Times',
            paragraphs: [
              'Karnataka Chief Minister D.K. Shivakumar announced plans to establish India\'s first government-led Artificial Intelligence University and AI Hub during the inauguration of Google I/O Connect India 2026 in Bengaluru. The proposed AI University is expected to foster AI talent, promote research, and facilitate collaboration among academia, industry, and government. The AI Hub will serve as an incubation centre for AI innovation and entrepreneurship.',
              'Karnataka remains one of India\'s leading technology hubs, contributing nearly 40% of the country\'s software exports. Bengaluru is home to more than 17,000 startups and thousands of Global Capability Centres. Describing artificial intelligence as the defining technological revolution of the current generation, the Chief Minister outlined Karnataka\'s vision of becoming an "AI-native state" by integrating AI into governance to improve the quality and efficiency of public service delivery.'
            ]
          },
          {
            title: 'Department of Telecommunications Issues New Authorisation Framework under the Telecommunications Act, 2023',
            image: '/jyothiraditya.jpg',
            alt: 'Jyotiraditya Scindia addressing the press',
            caption: 'Minister of Communications, Jyotiraditya Scindia, addressing the press.',
            credit: 'Press Release Page, Ministry of Communication',
            paragraphs: [
              'India\'s Department of Telecommunications has mandated strict data localisation requirements for national-level communications infrastructure providers, including cloud telecommunications service providers, telecom tower operators, and Internet Exchange Points. Under the newly issued framework under the Telecommunications Act, 2023, all network systems, operational data, and logs must be stored and processed exclusively within India.',
              'The framework also prohibits routing such data through or storing it outside the country. The move signals a stronger regulatory position on communications sovereignty and local control over critical digital infrastructure.'
            ]
          },
          {
            title: 'Education Minister Dharmendra Pradhan Resigns',
            image: '/pradhan.jpg',
            alt: 'Dharmendra Pradhan with folded hands',
            caption: 'Former Education Minister, Dharmendra Pradhan.',
            credit: 'The New Indian Express',
            paragraphs: [
              'Union Education Minister Dharmendra Pradhan resigned on July 25 following weeks of nationwide student protests over the NEET-UG 2026 paper leak and alleged examination irregularities. The NEET-UG 2026 examination, held on May 3, was cancelled after reports of a paper leak and was reconducted on June 21. The controversy triggered widespread public outrage and was followed by the reported suicides of several aspirants.',
              'In his resignation letter, Pradhan stated that the decision had been taken in the interest of students and to prevent further unrest. His resignation came a day after representatives of the Cockroach Janta Party protesters met Union Ministers J.P. Nadda and Jitendra Singh. In addition to demanding Pradhan\'s resignation, the group called for compensation for the families of students who died by suicide and assurances that no legal action would be taken against the protesters.'
            ]
          },
          {
            title: 'Civil Society Raises Alarm over the FCRA Bill, 2026',
            image: '/parliament.jpg',
            alt: 'Lok Sabha in session',
            caption: 'The Lok Sabha in session.',
            credit: 'The New Indian Express',
            paragraphs: [
              'The Foreign Contribution (Regulation) Amendment Bill, 2026 seeks to tighten government oversight of foreign-funded civil society organisations in India. It expands state authority by introducing a Designated Authority empowered to seize and manage assets acquired through foreign contributions if an NGO\'s registration is cancelled, suspended, or voluntarily surrendered.',
              'While the government has defended the Bill as a necessary measure to prevent money laundering and ensure greater accountability, non-profit organisations argue that it threatens their operational viability and undermines independent advocacy. Critics also contend that the Bill widens executive powers over civil society, creates uncertainty over organisational continuity and asset ownership, and could discourage foreign-funded advocacy while enabling selective targeting of organisations critical of the government.'
            ]
          },
          {
            title: 'Registration of Births and Deaths Bill Passed in Lok Sabha',
            image: '/rai.jpg',
            alt: 'Nityanand Rai speaking in the Lok Sabha',
            caption: 'Nityanand Rai, Minister of State for Home Affairs, speaks during the Lok Sabha monsoon session.',
            credit: 'The Hindu',
            paragraphs: [
              'The Registration of Births and Deaths (Amendment) Bill, 2026 amends the Registration of Births and Deaths Act, 1969 to make rules for delayed registrations more stringent. If a birth or death is registered after one year but within two years of its occurrence, it can still be registered with the approval of an authorised executive magistrate. If it is registered after more than two years, the Bill shifts the approval authority away from the executive and towards the judiciary.',
              'The Lok Sabha passed the Bill without a formal debate. The passage came amid heavy opposition disruption and sloganeering demanding the presence of Home Minister Amit Shah and protesting the police crackdown on students on July 20, 2026, when they attempted a Sansad Chalo march from Jantar Mantar seeking Dharmendra Pradhan\'s resignation.'
            ]
          },
          {
            title: 'Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026, Gets the President’s Assent',
            image: '/president.jpg',
            alt: 'President Droupadi Murmu seated in office',
            caption: 'President Droupadi Murmu, in office.',
            credit: 'Sabrang India',
            paragraphs: [
              'On July 31, 2026, President Droupadi Murmu gave her assent to the Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026. The legislation mandates that investigations into paper leak cases be completed within two months and trials concluded within three months through designated fast-track courts.',
              'Offenders face imprisonment ranging from five to ten years and fines of up to Rs 50 lakh, while those involved in organised paper leak networks are liable to a minimum of seven years\' imprisonment and fines of up to Rs 10 crore. The amendments were introduced in response to nationwide protests over the NEET-UG 2026 paper leak and strengthen the 2024 law through harsher penalties and expedited judicial proceedings.'
            ]
          }
        ]
      },
      {
        heading: 'International Relations and Affairs Around the World',
        stories: [
          {
            title: 'Trump Says the US Has Not Agreed to Ukraine Building Patriot Missiles',
            image: '/trump.jpg',
            alt: 'Donald Trump addressing the press',
            caption: 'U.S. President Donald Trump addressing the press.',
            credit: 'Reuters',
            paragraphs: [
              'According to recent reports, U.S. President Donald Trump has stated that there has been no official confirmation from U.S. defence manufacturer Lockheed Martin that permission has been granted to produce Patriot PAC-3 interceptor missiles in Ukraine. Ukraine, which has relied heavily on U.S. military assistance, had earlier sought approval to manufacture the interceptors domestically to strengthen its defences against Russian drone and missile attacks.',
              'Although President Trump initially expressed support for the proposal, he later stated at Camp David that the United States must exercise extreme caution in sharing advanced missile defence technology that could pose future security risks. The issue is expected to remain a significant point of contention in future U.S.-Ukraine defence cooperation amid the ongoing Russia-Ukraine war.'
            ]
          },
          {
            title: 'Russia Puts Pavel Durov on Wanted List, Terrorism Charges Levied',
            image: '/pavel.jpg',
            alt: 'Pavel Durov portrait',
            caption: 'Pavel Durov, founder of Telegram.',
            credit: 'Forbes',
            paragraphs: [
              'Founder and CEO of Telegram, Pavel Durov, has been charged with aiding terrorism and placed on Russia\'s international wanted list, according to the country\'s domestic security agency, the FSB. The agency alleged that the messaging platform had been used by Ukrainian security services as a recruitment tool to lure young Russians into supporting the Ukrainian war effort in the ongoing Russia-Ukraine conflict.',
              'The FSB further claimed that Telegram had facilitated acts of sabotage and terrorism targeting Russian energy infrastructure. This marks the latest chapter in the strained relationship between Russia and Durov, who has long been a critic of the state\'s policies on media surveillance and political censorship. Durov has not yet commented on the allegations.'
            ]
          },
          {
            title: 'Spanish Migration Crisis Leaves 67 Dead in Ceuta',
            image: '/cueta.jpg',
            alt: 'Landscape view used to represent Ceuta, Spain',
            caption: 'Ceuta, Spain.',
            credit: 'Wikipedia',
            paragraphs: [
              'The migration crisis in Spain\'s northern enclave of Ceuta, which borders Morocco in North Africa, has once again highlighted the broader migration challenges facing southern Europe. The crisis began on July 30, 2026, when thousands of migrants attempted to cross from Morocco into Spanish territory. The sudden surge reportedly left 67 migrants dead and prompted Prime Minister Pedro Sanchez to describe the situation as a humanitarian crisis while deploying additional military personnel to restore order along the border.',
              'Authorities in Ceuta have linked the increase in arrivals to a recent ruling by the Spanish Supreme Court, which barred authorities from returning migrants who arrive by sea to their countries of origin without due process. The crisis has reignited debate within the European Union over border management and migration policy. In its aftermath, Italy became the first EU member state to temporarily suspend the application of the Schengen Agreement with Spain, citing concerns over cross-border migration.'
            ]
          },
          {
            title: 'Andy Burnham Comments on Britain’s Ties with the USA, Vows to Put National Interest First',
            image: '/burham.jpg',
            alt: 'Andy Burnham in a BBC interview',
            caption: 'Prime Minister Burnham addressing questions.',
            credit: 'BBC News',
            paragraphs: [
              'New U.K. Prime Minister Andy Burnham has stated that he will put Britain\'s interests first in his dealings with the United States. In an excerpt from a BBC interview, Burnham said that while he may hold a different opinion from U.S. President Donald Trump on certain issues, he remains committed to the special relationship shared by the two countries.',
              'His remarks are the latest in a series of formal reservations expressed by London over its differences with Washington on trade agreements, climate policy, U.S. military action in West Asia, and global energy security. Burnham acknowledged the strategic importance of multilateral cooperation between the United Kingdom and the United States, but made it clear that friendship would not imply automatic policy alignment.'
            ]
          },
          {
            title: 'Trump Hails Gaza Deal While Israeli and Hamas Officials See Hurdles',
            image: '/gaza.jpg',
            alt: 'Destroyed buildings in Gaza',
            caption: 'Gaza, Palestine, 2026.',
            credit: 'Reuters',
            paragraphs: [
              'U.S. President Donald Trump has hailed the proposed Gaza agreement, describing it as a major breakthrough in efforts to end the conflict in Gaza, which began on October 7, 2023. Under the proposed framework, Hamas would undergo a gradual phased disarmament, followed by the withdrawal of Israeli forces from the Gaza Strip and the establishment of a Palestinian security force to maintain order.',
              'Despite Trump\'s optimism, Hamas has stated that the agreement\'s success will depend on Israel\'s willingness to honour previous ceasefire commitments. Israel, however, has maintained that any military withdrawal will occur only after the complete and verifiable disarmament of Hamas. The outcome therefore remains dependent on whether all parties are prepared to fulfil their commitments.'
            ]
          },
          {
            title: 'Sheikh Hasina Determined to Return Home Amid Death Threats and Possible Extradition',
            image: '/hasina.jpg',
            alt: 'Sheikh Hasina speaking in front of Bangladesh flags',
            caption: 'Former Prime Minister of Bangladesh, Sheikh Hasina.',
            credit: 'Facebook',
            paragraphs: [
              'Bangladesh\'s former Prime Minister Sheikh Hasina has said she is determined to return to her country despite fearing for her life. A fugitive since November 2025, Hasina told Agence France-Presse in an email response that she understands the risks of being arrested, imprisoned, or killed, but still wants to go back because her people are calling her home.',
              'Her remarks come amid renewed tension in India-Bangladesh relations. Living in India since November 2024, her continued exile has remained a major source of diplomatic friction between the two countries. Bangladeshi authorities have indicated that she is likely to be arrested before she can formally surrender before a court, while New Delhi continues to examine Bangladesh\'s formal extradition request.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    category: 'Politics',
    image: '/august/1.jpg',
    title: 'OUR HOME, THE GLOBE AND AROUND, IN A GLANCE',
    description: 'August 2026 edition covering major domestic policy shifts, global diplomacy, and regional security developments.',
    author: 'Editorial Desk',
    date: 'Aug 23, 2026',
    readTime: '20 min read',
    content: `
      August 2026, 2nd Edition.

      This issue brings together major policy updates from India and the wider world, with a focus on governance reforms, public health safeguards, infrastructure, and regional security trends across Asia, the Middle East, Africa, and Europe.
    `,
    sections: [
      {
        heading: 'Public Policy and Domestic Affairs',
        stories: [
          {
            title: 'Removal of 2 Year Age Gap for Maternity Leave',
            image: '/august/1.jpg',
            alt: 'Cabinet approval and maternity leave policy reform',
            caption: 'Source: Hindustan Times',
            credit: 'Hindustan Times',
            paragraphs: [
              'The Uttar Pradesh Cabinet, chaired by Chief Minister Yogi Adityanath, approved key decisions including removing the mandatory two-year age gap condition for female state government employees to take up to 180 days of maternity leave for their first two children, aligning state policy with recent Allahabad High Court rulings.'
            ]
          },
          {
            title: 'India Bans Cold Medicines for Children under Four Due to Health Risks',
            image: '/august/2.jpg',
            alt: 'Health official warning against cold medicines for young children',
            caption: 'Source: Economic Times',
            credit: 'Economic Times',
            paragraphs: [
              'The Indian Drug Regulatory Authorities prohibited the use of specific anti-cold fixed dose drug combinations such as chlorpheniramine maleate and phenylephrine hydrochloride drops and syrups for children under four years of age.',
              'Prompted by safety concerns and recommendations from expert advisory committees regarding potential adverse health risks, manufacturers have been mandated to feature clear warning labels stating that these formulations must not be administered to infants and young children.'
            ]
          },
          {
            title: 'Karnataka Enforces One-Year Ban on Fake Paneer Sold as Genuine Dairy Paneer',
            image: '/august/3.jpg',
            alt: 'Food safety enforcement against fake paneer',
            caption: 'Source: Times of India',
            credit: 'Times of India',
            paragraphs: [
              'The Karnataka Food Safety and Drugs Administration has issued a state-wide notification banning the manufacture, processing, storage, transport and sale of “analogue” or non-dairy paneer under the label “paneer” for one year.',
              'Under the Food Safety and Standards Act, 2006, paneer is strictly defined as a standardised milk-based product; replacing milk fat or milk solids with vegetable oils or starches classifies the substitute as an analogue. Officials clarified that while recent sample testing in the state showed no adulteration, the ban is a preventive measure to protect consumers.'
            ]
          },
          {
            title: 'Uttar Pradesh and Japan’s Yamanashi Sign Four MOUs; 600-Crore Fund Announced to Boost Local MSMEs',
            image: '/august/4.jpg',
            alt: 'Uttar Pradesh and Yamanashi investment partnership',
            caption: 'Source: The Hindu',
            credit: 'The Hindu',
            paragraphs: [
              'The Uttar Pradesh Government signed four Memoranda of Understanding with Japan’s Yamanashi Prefecture to enhance collaboration in skill development, technical training, tourism and the set-up of a Japanese Global Capability Centre in Noida and Greater Noida.',
              'To support this partnership, Yamanashi announced a ₹600 crore fund dedicated to assisting Micro, Small and Medium Enterprises investing in the state, while Chief Minister Yogi Adityanath confirmed the establishment of a specialised “Yamanashi Desk” at Invest UP with a 90-day review mechanism to streamline approvals and fast-track investments.'
            ]
          },
          {
            title: 'Government Launches Phase II of Rural Entrepreneurship Campaign to Boost Women-led Enterprises and “Lakhpati Didi” Goal',
            image: '/august/5.jpg',
            alt: 'Rural entrepreneurship campaign for women-led enterprises',
            caption: 'Source: Business Standard',
            credit: 'Business Standard',
            paragraphs: [
              'The Ministry of Rural Development has launched the second phase of its three-month “National Campaign on Entrepreneurship-II” under the Deendayal Antyodaya Yojana-National Rural Livelihoods Mission (DAY-NRLM) to transform rural women’s livelihood activities into sustainable farm and non-farm enterprises.',
              'Running from August 21 to November 21, 2026, the campaign supports the government’s target of creating six crore “lakhpati didis” by providing entrepreneurship training to five lakh Self-Help Group women and formalizing 50,000 rural enterprises.'
            ]
          },
          {
            title: 'Government of India to Launch Reform Utsav to Capture Citizen Suggestions',
            image: '/august/6.jpeg',
            alt: 'Reform Utsav campaign illustration',
            caption: 'Source: Government release',
            credit: 'Government of India',
            paragraphs: [
              'The Union government will launch Reform Utsav on October 2, a three-month campaign sparked by student protests over the NEET paper leak. The initiative aims to gather citizen suggestions and convert them into actionable, implemented reforms.',
              'It is headed by Cabinet Secretary T V Somanathan. The campaign will operate across three levels: “Jan Manthan” to collect portal-based public ideas sorted using AI, “Vimarsh” to identify quick-win reforms and structural roadmaps, and “Samadhan and Sankalp Siddhi” featuring bi-weekly progress reviews.'
            ]
          },
          {
            title: 'Decline in Person-Days in the First Month of the VB-G RAM G Scheme',
            image: '/august/7.jpg',
            alt: 'Rural employment scheme worker at worksite',
            caption: 'Source: India Today',
            credit: 'India Today',
            paragraphs: [
              'On July 1, 2026, the Indian government transitioned from the Mahatma Gandhi National Rural Employment Guarantee Scheme to the newly launched Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin), or VB-G RAM G. July employment generation fell 49.94% year-on-year to 7.67 crore person-days.',
              'Active households dropped from 51.45% to 68.94 lakh, hitting a five-year low despite erratic monsoons that usually drive labour demand. While the new scheme offers higher wages and extends guaranteed work to 125 days, it also includes a statutory 60-day pause on employment guarantees during peak sowing and harvesting seasons, which officials identify as the main reason for the decline.'
            ]
          },
          {
            title: 'Audit Reports Reveal Only 0.01 per cent of ₹8,452 Crore of PM-CARES Fund Spent',
            image: '/august/8.jpg',
            alt: 'PM CARES audit and public finance scrutiny',
            caption: 'Source: Public audit reports',
            credit: 'Audit Reports',
            paragraphs: [
              'The PM-CARES Fund audit reports reveal its corpus grew to a record ₹8,452 crore as of March 31, 2025. However, the fund spent a minuscule ₹87.85 lakh (0.01% of available funds) in FY 2024-25.',
              'It was directed entirely to the “PM CARES for Children” scheme, a steep drop from the ₹15.37 crore spent on the same initiative in FY 2023-24. The fund generated around ₹475 crore in interest by keeping ₹6,641.56 crore in fixed deposits and also received an unexplained ₹324 crore refund from implementing agencies.'
            ]
          },
          {
            title: 'Tamil Nadu Hosts India’s First Scope-2 Emission-Free Major Port',
            image: '/august/9.jpg',
            alt: 'Cargo port with renewable infrastructure',
            caption: 'Source: Port Authority reporting',
            credit: 'V.O. Chidambaranar Port Authority',
            paragraphs: [
              'The V.O. Chidambaranar Port Authority in Thoothukudi has become India’s first Scope-2 emission-free major port and the first to earn ISO 50001:2018 certification from Bureau Veritas.',
              'In 2025-26, renewable energy made up 93.89% of its total electricity consumption. Led by chairperson Susanta Kumar Purohit, the port systematically manages energy across cargo handling, shore-to-ship power, and electric vehicle charging infrastructure.'
            ]
          },
          {
            title: 'Karnataka Apartment Bill Introduces Rules for Common Areas, RWAs, Redevelopment and Disputes in Apartment Complexes',
            image: '/august/10.jpg',
            alt: 'Karnataka apartment and housing reform',
            caption: 'Source: Legislative assembly briefing',
            credit: 'Karnataka Assembly',
            paragraphs: [
              'The Karnataka Legislative Assembly passed two key pieces of legislation without discussion amid Opposition protests. The Karnataka Apartment (Ownership and Management) Bill, 2026, piloted by Bengaluru Development Minister Krishna Byre Gowda, aims to resolve ongoing property disputes by clarifying the ownership, management, and transfer of common areas from builders.',
              'Under this law, all Resident Welfare Organizations must be formed in accordance with new rules, and the bill establishes a 75% consent threshold for reconstruction of old or unsafe apartments. Residents who dissent are guaranteed compensation worth twice the value of their property.'
            ]
          }
        ]
      },
      {
        heading: 'International Relations and Affairs around the world',
        stories: [
          {
            title: 'Tunisia: Anti-government Protests Enter Second Month',
            image: '/august/11.jpg',
            alt: 'Tunisia protest crowd with flags',
            caption: 'Source: Reuters',
            credit: 'Reuters',
            paragraphs: [
              'Hundreds of Tunisians protested in the capital, Tunis, on August 20, demanding President Kais Saied’s resignation and the restoration of democracy. The demonstrations, organised by the newly formed opposition Nafas movement, mark a second consecutive month of protests amid growing political and economic discontent.',
              'Protesters criticised Saied’s concentration of power following his 2021 suspension of parliament and subsequent rule by decree, calling for the release of jailed opposition figures, activists and journalists. The unrest is also being driven by worsening living conditions, including rising costs, shortages of medicines and basic goods, and disruptions to water and electricity supplies.'
            ]
          },
          {
            title: 'US Military Redeployment Raises Concerns Among Asian Allies, Amid West Asian Tensions',
            image: '/august/12.jpg',
            alt: 'US aircraft carrier deployment in the region',
            caption: 'Source: Al Jazeera',
            credit: 'Al Jazeera',
            paragraphs: [
              'The United States’ decision to shift military assets from the Asia-Pacific to support its ongoing war with Iran is raising concerns among regional allies about Washington’s ability to deter China.',
              'The latest move saw the USS George Washington, the last US aircraft carrier based in Asia, redeployed from Japan to the Middle East to relieve the USS Abraham Lincoln, which has been deployed there for nine months.'
            ]
          },
          {
            title: '“Double Cash Reward” for Women to Kill American Troops, Says Amir Hatami',
            image: '/august/13.jpg',
            alt: 'Iranian military chief speaking at a public briefing',
            caption: 'Source: VOA',
            credit: 'VOA',
            paragraphs: [
              'Multiple sources report that Iranian Army Chief Amir Hatami has announced a potential “war bounty” of $60,000 for any woman who kills or captures US military personnel, amid escalating tensions in West Asia.',
              'The announcement comes amid strong Iranian warnings against any US involvement on Iranian soil and earlier summer offers of $30,000 bounties. Hatami said the increased reward for women was introduced following a “large number of requests” from those seeking to participate.'
            ]
          },
          {
            title: 'Peru Rocked by Strong Earthquake; Initial Reports Remain Optimistic',
            image: '/august/14.jpg',
            alt: 'Strong earthquake damage in Peru',
            caption: 'Source: Reuters',
            credit: 'Reuters',
            paragraphs: [
              'A strong earthquake struck Peru’s southern Ayacucho region on August 23, with the US Geological Survey recording a magnitude of 6.7. The earthquake occurred at around 1:00 p.m. local time at a depth of approximately 100 kilometres, causing significant tremors in the small settlement of Aniso.',
              'Peruvian officials reported three injuries and infrastructure damage, although no serious injuries have been reported so far. Defence Minister Rafael Belaunde said 22 homes were damaged and ten healthcare facilities sustained damage, though medical services remain operational.'
            ]
          },
          {
            title: 'Rahman’s Visit Uncertain Amid Diplomatic Strains',
            image: '/august/15.jpg',
            alt: 'Bangladesh and India diplomatic meeting or delegation scene',
            caption: 'Source: Al Jazeera',
            credit: 'Al Jazeera',
            paragraphs: [
              'Uncertainty surrounds Bangladesh Prime Minister Tarique Rahman’s reported visit to India, amid renewed strains in India–Bangladesh relations. Tensions increased after former Bangladeshi Prime Minister Sheikh Hasina, currently in exile in India, held a virtual media interaction in early August.',
              'Rahman’s visit was reportedly scheduled for August 23–24 following an invitation from India’s Ministry of External Affairs for a bilateral engagement and participation in the BRICS outreach session in New Delhi. However, neither Dhaka nor New Delhi has officially confirmed the visit.'
            ]
          },
          {
            title: 'Putin’s Kuril Islands Visit Escalates Japan–Russia Tensions',
            image: '/august/16.jpg',
            alt: 'Putin meeting with local officials in the Kuril Islands',
            caption: 'Source: The Moscow Times',
            credit: 'The Moscow Times',
            paragraphs: [
              'Russian President Vladimir Putin’s visit to Iturup, one of the disputed Kuril Islands, has intensified tensions with Japan. Tokyo regards the southern Kurils as its “Northern Territories” and claims four islands the Soviet Union seized in 1945.',
              'Japan condemned the visit, while Moscow reaffirmed its sovereignty. Russia has also strengthened its military presence in the Kurils, increasing their strategic importance in the Northern Pacific.'
            ]
          },
          {
            title: 'Myanmar Junta Chief Visits Moscow to Deepen Russia Ties',
            image: '/august/17.jpg',
            alt: 'Myanmar leader and Russian president handshake at summit',
            caption: 'Source: Al Arabiya',
            credit: 'Al Arabiya',
            paragraphs: [
              'Myanmar’s President Min Aung Hlaing visited Moscow for talks with Russian President Vladimir Putin, focusing on energy, infrastructure and bilateral cooperation.',
              'Russia has remained one of the Myanmar military’s principal international partners since the 2021 coup, providing military equipment, diplomatic support and economic assistance despite Western sanctions and criticism.'
            ]
          },
          {
            title: 'Taipei Slams China and Indonesia Joint Naval Drills near Waters East of Taiwan',
            image: '/august/18.jpg',
            alt: 'Naval drills near Taiwan with Chinese and Indonesian vessels',
            caption: 'Source: Indonesia Business Post',
            credit: 'Indonesia Business Post',
            paragraphs: [
              'China and Indonesia have expanded defence cooperation through joint naval exercises involving Chinese and Indonesian vessels in waters east of Taiwan.',
              'Indonesia described the activities as routine and not directed against any third country. Beijing and Jakarta have also agreed to strengthen military cooperation through additional exercises, personnel exchanges and defence engagement.'
            ]
          },
          {
            title: 'Colombia Recognises Moroccan Sovereignty over Western Sahara',
            image: '/august/19.jpg',
            alt: 'Colombian and Moroccan diplomatic meeting scene',
            caption: 'Source: The Gulf Observer',
            credit: 'The Gulf Observer',
            paragraphs: [
              'Colombia has shifted its position on the Western Sahara dispute by recognising Moroccan sovereignty over the territory and freezing its previous recognition of the Sahrawi Arab Democratic Republic. The move reverses the policy pursued under former President Gustavo Petro.',
              'Bogotá stated that it would no longer maintain political or diplomatic contact with the SADR or support it in multilateral forums. The decision is significant because Colombia is serving as a UN Security Council member in 2026.'
            ]
          },
          {
            title: 'Pakistan, Saudi Arabia and Türkiye Sign Makkah Joint Defence Agreement',
            image: '/august/20.jpg',
            alt: 'Defense leaders from Pakistan, Saudi Arabia and Türkiye in a meeting',
            caption: 'Source: Chatham House',
            credit: 'Chatham House',
            paragraphs: [
              'Pakistan, Saudi Arabia and Türkiye signed the Makkah Joint Defence Agreement on 7 August 2026, establishing a framework for trilateral security cooperation. The agreement provides that an attack on one member would be considered an attack on all three.',
              'The pact comes amid heightened instability in West Asia and uncertainty over regional security. Saudi Arabia contributes financial and strategic influence, Türkiye provides military and defence-industrial capabilities, while Pakistan brings military expertise and longstanding defence ties with Riyadh.'
            ]
          }
        ]
      }
    ]
  }
];

export const featuredArticle: Article = {
  ...articles.find((article) => article.id === 8)!,
  category: 'Featured Post',
  featured: true,
};
