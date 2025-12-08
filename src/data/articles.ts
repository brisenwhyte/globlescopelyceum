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
  }
];

export const featuredArticle: Article = {
  id: 0,
  category: 'Featured Post',
  image: 'https://images.pexels.com/photos/30584240/pexels-photo-30584240.jpeg',
  title: 'Twilight at the Event Horizon: Indian Ambitions with Rare Earth Elements',
  description:
    'As global tensions rise and nationalist movements gain traction, we examine how institutions are adapting to maintain cooperation.',
  author: 'Vyshnav Rajnath',
  date: 'Dec 08, 2025',
  readTime: '12 min read',
  featured: true,
  content: `
    Human ingenuity is immortal, and human ambitions are incredible. As a result, the modern 
world is accelerating towards the cusp of a global Technopolis, erecting a new way of life 
that desires to intimately support human life with a sustainable techno–machinery 
infrastructure. The blood that gives life to this awakening colossus is Rare Earth Elements 
[REE], and thus, the best connoisseurs' states will compete to become its gods. On such an 
event horizon, India should account for and realise its Rare Earth Element potential, and 
through it, establish a favorable position in the global geo–political and diplomatic 
structure. 

From the Thorium- and lanthanum-rich coastal sands to the hard rock deposits of Rajasthan, 
and from the graphite-dense resources in Arunachal Pradesh, India possesses considerable 
Rare Earth Metal resources. However, it finds its infrastructure lacking in comparison to 
the standards expected of a globally developing nation, as it is inadequately equipped for 
the processing and fine extraction of REE. As a result, the country has resorted to exporting 
the raw materials abroad to be imported back as refined REE. This process has been a 
detrimental transaction on the country's purse and potential opportunities, termed 
"exporting our prosperity" by Sunil Kumar, a CCEW research analyst writing for The 
Hindu. 

It is also an uncomfortable reality that the country holding the planet's 3rd largest 
REE reserves [8% of the global resources] has less than 1% stake in the global REE mining 
and processing capacity. Indian imports are also gradually increasing, reaching 2,270 tonnes 
and expected to surpass this mark, representing a 23% increase from the imports calculated 
for the 2019–2020 period. Being reliant on China and Japan for the majority of its supply, 
it finds itself uncomfortably dependent on its geo–political competitors in the Asian theatre. 
The refining of these resources, while intensive in terms of initial monetary and human 
resource investment, is crucial in enhancing the utility of the elements. Rare Earth Elements 
and metals are vital components in the production of a diverse set of technological, 
electrical, and infrastructural products, such as semiconductors, batteries, power units, and 
defense resources, which are fast becoming the new lifelines of the emerging Technopolis. 
Hence, countries possessing such expertise are quickly becoming incredibly important in 
the current global market, developing a significant edge in evolving geopolitical relations 
through diplomacy. 

An example can be drawn from India's eastern neighbour, China. China accounts for almost 
70 % of the world's Rare Earth Element mining, with an overwhelming 90% stake in REE 
processing and refining globally. Chinese manufacturers are key players in the markets for 
lithium batteries, a crucial component for any EV. The country has made efforts to translate 
this dominance into elements of its foreign policy, finding noticeable success through 
"mineral diplomacy". The Chinese decision to enact tighter control over its refined REE 
supply, citing security reasons in 2024, caused a significant stir in the international 
community, bringing about fears of choked supply lines for semiconductors and Lithium 
batteries overnight. While bilateral conversations with Washington have managed to delay 
the implementation of new measures for the near future, China now possesses a strong lever 
to exert its geopolitical influence. 

In this context, India must focus on realising its REE processing potential. India has taken 
calculated steps forward, with the National Critical Mineral Mission providing the first 
leaps. India's hand forward in the international system is centered around the joint venture 
Khadij Bidesh Limited [KABIL], which facilitates the country's exploratory and 
collaborative interests in the Global South, especially Latin America. The Indian Rare 
Metals Limited [IREL] is also carving its mark, focusing on mining and processing 
dedicated to clean energy applications and defence infrastructure. Dedicated development 
of present and future Centres of Excellence under its National Critical Mineral Mission, 
focusing on creating sustainable domestic refining units, is also an attractive prospect to 
consider. It would require a generation of proficient technicians, metallurgists, and civilian 
employees, rigorously trained and upskilled to be adept at the process. The government 
could also focus on creative ventures to ensure maximum utilization of its resources, such 
as secondary resources and byproducts, to refine REE from. Recent policy decisions made 
by the Government of India have been viewed favourably by commercial enterprises, 
encouraging the further transfer of technology and private investment, as well as 
collaborations that can be vitally helpful to India's vision.  While these long-term charts are 
being executed, India should also focus on upgrading its current assets. 
India can also utilise its diplomatic channels to extend proposals for collaboration and co
development. To support KABIL's ventures, the country has signed an MoU with Chile, 
Namibia, and Brazil over mineral supply and processing, aiming to build up a long-term 
partnership. These efforts can be aided by further explorations into collaborating with 
developing countries within Latin America and Africa with beneficial REE extraction and 
processing proposals with mutually helpful, development-based outcomes, which would 
bring about a new set of players in the market, diversifying the global supply while 
establishing a firm safeguard for the Global South fraternity against monopolistic coercion. 
India, however, must be vigilant in navigating the challenges in this direction, being 
mindful of the political instability, developing infrastructure, competing interests, and 
growing local opposition to foreign mining operations.

With the recent announcement of its new plans for developing a dedicated rare earth magnet 
manufacturing system, the Government of India puts forth a statement – Indians are 
ambitious, so India has a vision. It's ambitious, yet a bold move in the country's effort to 
solidify its strategic autonomy through self-sufficiency by cutting through its dependencies. 
It aims to stake a claim in, and eventually solidify its position in, the global REE mining 
and processing system, which will amplify the nation's influence and boost its potential to 
have a greater impact on its interactions with other states and the global balance of power. 
As a pantheon arises to oversee the world at a new turning point, India strives to achieve an 
ambitious vision and claim a place among the new gods.
  `
};
