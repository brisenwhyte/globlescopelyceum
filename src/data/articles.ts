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

      This edition brings together major developments in Indian public policy and domestic affairs alongside key international stories from around the world. The article is organised as a weekly digest with grouped section headings and image-led story entries to match the source document while staying inside the site’s existing reading experience.
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
  }
];

export const featuredArticle: Article = {
  ...articles.find((article) => article.id === 7)!,
  category: 'Featured Post',
  featured: true,
};
