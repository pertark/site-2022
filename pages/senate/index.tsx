import Head from 'next/head';

import SenateMap from '../../components/SenateMap';

export default function SenatePage() {
  return <>
    <Head>
      <title>2022 Senate Forecast – ORACLE of Blair</title>
      {/* <meta name="description" content="" /> */}
    </Head>

    <main className="p-4 flex flex-col gap-8">
      <section className="p-8 container max-w-3xl flex flex-col gap-4 bg-neutral-50 border-2 shadow-md rounded-2xl">
        <div className="flex flex-col gap-1.5 items-center">
          <h1 className="px-1.5 text-xl text-center font-medium uppercase bg-amber-100 rounded-md">
            The Senate
          </h1>
          <p className="text-4xl text-center font-serif">
            A blurb about the <span className="font-extrabold">Senate elections</span>
          </p>
        </div>

        <SenateMap/>
      </section>
    </main>

    <footer>
    </footer>
  </>;
}
