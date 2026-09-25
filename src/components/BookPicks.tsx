import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const featuredEdition = {
  slug: 'september',
  label: 'Featured Edition',
  title: "GlobeScope's Setting the Shelves.",
  edition: 'September Edition',
  theme: 'India and East Asia',
  description:
    'The first Bookpicks edition turns to India, Korea, China and the Asia-Pacific, pairing cultural history with strategic affairs to read East Asia through deeper regional connections.',
  picks: 2,
  date: 'Sep 2026'
};

const books = [
  {
    title: 'Affinities: India and Korea, Past and Present',
    editors: 'Edited by Pankaj Mittal, Daisy and Ravi Bhushan',
    summary: [
      `Affinities: India and Korea, Past and Present is a multidisciplinary volume examining the historical and contemporary relationship between India and the Republic of Korea. The book brings together scholarly contributions that explore the relationship through cultural, historical, economic, educational, linguistic, literary, political and technological perspectives. One of the volume's central strengths is its attempt to place contemporary India-Korea relations within a much longer historical trajectory. It traces connections reaching back to the first millennium, particularly through the transmission of Buddhism, while also examining the expansion of bilateral relations following the end of the Cold War.`,
      `The collection includes discussions of Buddhism, Korean language and Korean studies in India, translation, literature, cultural relations, economic development, technology and education. Contributors such as Makarand R. Paranjape, Kim Do-young and Avadhesh K. Singh approach India-Korea relations from different disciplinary perspectives, making the volume particularly useful for readers interested in the intersection of history, culture and international relations.`,
      `The volume is product of collaboration between editors Pankaj Mittal, Daisy and Ravi Bhushan, who come from backgrounds spanning higher education, English studies, literature and academic research. Mittal has held senior positions in Indian higher education, including Vice-Chancellor of BPS Mahila Vishwavidyalaya and later responsibilities in the University Grants Commission. Daisy is an English scholar and poet whose work encompasses language, literature and cultural studies, while Ravi Bhushan is an academic in English with interests including English-language teaching, communication and literary studies.`,
      `Their interdisciplinary backgrounds reflect quite well in the volume's breadth: rather than restricting India-Korea relations to diplomacy or economics, Affinities approaches the relationship through multiple intellectual and cultural dimensions.`
    ],
    reasons: [
      {
        label: 'An exploration of civilizational history',
        text: 'The book demonstrates that India-Korea relations have a history extending well before the establishment of modern diplomatic ties.'
      },
      {
        label: 'Contemporary relations through historical context',
        text: 'The book shows how historical memory, cultural affinity and intellectual exchange can contribute to understanding the contemporary relationship between India and Korea.'
      },
      {
        label: "India's engagement with East Asia",
        text: 'The volume gives readers a portal to view India not as an external observer of East Asia, but as a society with longstanding historical and cultural connections to the region.'
      },
      {
        label: 'A perspective beyond conventional diplomacy',
        text: 'The book moves beyond treaties and official relations to explore multi-layered connections between India and Korea.'
      },
      {
        label: 'An interdisciplinary approach to East Asia',
        text: 'The volume brings together perspectives from history, literature, language, culture, education, economics and international relations that define both states, from the era of empire to the age of republics.'
      }
    ]
  },
  {
    title: 'Rise of China and India: Implications for the Asia Pacific',
    editors: 'Edited by Amitabh Mattoo and Mallika Joseph',
    summary: [
      `Rise of China and India: Implications for the Asia Pacific examines the consequences of the simultaneous rise of India and China for the evolving political, economic and strategic order of the Asia-Pacific. Broadly, the volume brings together contributions examining the two countries' growing influence from multiple national and regional perspectives. A central concern of the book is how the emergence of India and China as major powers is reshaping the wider Asian regional environment.`,
      `Rather than examining their rise exclusively through a bilateral India-China lens, the volume considers its implications for countries across South Asia, Southeast Asia and East Asia. Scholarly contributions examine perspectives from countries including Japan, Singapore, Myanmar, Indonesia, Vietnam, Pakistan, Bangladesh, Nepal and Sri Lanka, alongside broader perspectives from Australia, the United States, the European Union and China.`,
      `This volume was compiled by scholars Amitabh Mattoo and Mallika Joseph. Amitabh Mattoo is an Indian academic and strategic affairs scholar whose work spans international relations, nuclear security, foreign policy and India's engagement with the Asia-Pacific. He has held academic and leadership positions at institutions including Jawaharlal Nehru University and the University of Jammu. Mallika Joseph is a scholar and researcher associated with international relations and foreign policy studies. Her work has included research on India's external relations and regional strategic affairs. Her contribution to the volume complements Mattoo's broader engagement with international security and Asian geopolitics.`
    ],
    reasons: [
      {
        label: 'Analyse the rise of India and China from different perspectives',
        text: 'Rather than presenting only an Indian or Chinese viewpoint, the volume brings together perspectives from countries across South and Southeast Asia, East Asia and the wider international system.'
      },
      {
        label: "Explore India's place in East Asia",
        text: "The book provides a useful framework for understanding India's growing engagement with countries such as Japan, Vietnam, Indonesia, Singapore and Myanmar."
      },
      {
        label: 'Strategic consequences of economic growth',
        text: 'The book explores how economic transformation can generate wider political, strategic and security implications within a region.'
      },
      {
        label: 'A point of view on smaller and middle powers',
        text: 'The volume covers the perspectives of countries surrounding India and China, narrating their experiences and strategies at navigating an Asian regional order shaped by two major rising powers.'
      },
      {
        label: "Understand that India's rise has regional consequences",
        text: "The volume encourages readers to examine India's emergence not simply as a domestic success story or a bilateral issue with China, but as part of a broader transformation of Asian regional politics."
      }
    ]
  }
];

const BookPicks = () => {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  const openEdition = () => {
    if (isOpening) return;

    setIsOpening(true);
    window.setTimeout(() => {
      navigate(`/bookpicks/${featuredEdition.slug}`);
    }, 850);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {isOpening && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="book-open-animation" aria-hidden="true">
            <div className="book-page book-page-left" />
            <div className="book-spine" />
            <div className="book-page book-page-right" />
          </div>
          <span className="sr-only">Opening September Bookpicks edition</span>
        </div>
      )}

      <section className="bg-gradient-to-b from-gray-50 to-white px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="fade-left">
            <span className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              {featuredEdition.label}
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {featuredEdition.title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {featuredEdition.description}
            </p>

            <div className="mb-8 flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 font-semibold text-white">
                B
              </div>
              <div>
                <p className="font-medium text-gray-900">{featuredEdition.edition}</p>
                <p className="text-sm text-gray-500">{featuredEdition.theme}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={openEdition}
              className="rounded-lg bg-gray-900 px-8 py-3.5 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Edition
            </button>
          </div>

          <div className="fade-right">
            <button
              type="button"
              onClick={openEdition}
              className="group relative block w-full overflow-hidden rounded-2xl bg-gray-950 p-8 text-left shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(96,165,250,0.38),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(15,23,42,1))]" />
              <div className="relative flex min-h-[360px] flex-col justify-between lg:min-h-[500px]">
                <div>
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                    {featuredEdition.edition}
                  </span>
                  <h2 className="mt-8 max-w-lg text-4xl font-black leading-tight text-white sm:text-5xl">
                    {featuredEdition.theme}
                  </h2>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                    Inside
                  </p>
                  <p className="mt-3 text-2xl font-bold text-white">
                    {featuredEdition.picks} book picks
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-200">
                    Cultural affinities, regional strategy and the changing Asia-Pacific.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Available Bookpicks</h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Current and past editions of GlobeScope's reading desk.
              </p>
            </div>
            <span className="text-sm font-medium text-gray-500">1 edition available</span>
          </div>

          <button
            type="button"
            onClick={openEdition}
            className="group grid w-full grid-cols-1 overflow-hidden rounded-xl bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="relative min-h-64 overflow-hidden bg-gray-900 p-6 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.45),transparent_34%),linear-gradient(145deg,rgba(17,24,39,0.85),rgba(17,24,39,1))]" />
              <div className="relative flex h-full min-h-64 flex-col justify-between">
                <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Featured Edition
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-100">{featuredEdition.date}</p>
                  <h3 className="mt-3 text-3xl font-bold leading-tight">
                    {featuredEdition.edition}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Theme
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-3xl">
                {featuredEdition.theme}
              </h3>
              <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                {featuredEdition.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span>{featuredEdition.picks} picks</span>
                <span aria-hidden="true">|</span>
                <span>Opens with book animation</span>
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export const BookPicksEdition = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white pt-24 text-gray-900">
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link to="/bookpicks" className="text-sm text-blue-600 hover:underline">
            Back to Bookpicks
          </Link>

          <div className="mt-6 rounded-2xl bg-white p-8 shadow-lg sm:p-10 lg:p-12">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              {featuredEdition.edition}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              {featuredEdition.title}
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
              Theme: {featuredEdition.theme}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {featuredEdition.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          {books.map((book, bookIndex) => (
            <article
              key={book.title}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
                <div className="bg-stone-900 p-8 text-white sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
                    Pick {bookIndex + 1}
                  </p>
                  <h3 className="mt-5 text-3xl font-black leading-tight">
                    {book.title}
                  </h3>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-stone-300">
                    {book.editors}
                  </p>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="space-y-5 text-base leading-8 text-gray-700">
                    {book.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-10 rounded-xl bg-stone-50 p-6">
                    <h4 className="text-xl font-black text-gray-950">Why Should You Read It?</h4>
                    <div className="mt-6 grid gap-4">
                      {book.reasons.map((reason) => (
                        <div key={reason.label} className="border-l-4 border-blue-600 pl-4">
                          <p className="font-bold text-gray-950">{reason.label}</p>
                          <p className="mt-1 leading-7 text-gray-600">{reason.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BookPicks;