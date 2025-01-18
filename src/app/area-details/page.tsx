import Container from "@/app/_components/container";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="flex flex-col items-center font-beyond hero-text center text-dm-grey justify-items-center bg-[url('/assets/images/headers/header-image_area.jpg')] rounded-xl overflow-hidden bg-center">
        <h1 className="text-dm-grey my-20">Nearby</h1>
      </div>
      <div className="mx-10 md:mx-20 mt-20">
        <p>
          Find below suggestions of places to visit near main areas of our
          destination wedding.
          <ul>
            <li>Olbia - for those arriving here on the island</li>
            <li>Lanuesei - my hometown 25 minutes from Arbatax</li>
            <li>Arbatax - our wedding location</li>
          </ul>
        </p>

        <h3>Olbia</h3>
        <ul className="list-disc">
          <li>
            San Pantaleo; a picturesque village with artisanal shops and
            restaurants. It's very close to the glamorous area of Porto Rotondo
            - very fancy (it's the Nizza of Sardinia)
          </li>
          <li>
            Posada; a beautiful medieval village, with the tower/castle to
            visit, lots of narrow streets to get lost in, restaurants and a sea
            view. You can reach the close location of Santa Lucia marina for a
            nice beach walk.
          </li>
          <li>Pittulongu beach</li>
          <li>Porto Istana beach</li>
          <li>Spiaggia delle Vacche beach (stunning)</li>
          <li>Lu Impostu beach</li>
          <li>Cala brandinchi beach (stunning)</li>
          <li>
            Natural reserve Isola Tavolara, I recommend{" "}
            <Link href="https://www.getyourguide.com/tavolara-island-l142425/?date_from=2025-04-16&date_to=2025-04-16">
              this boat tour
            </Link>
          </li>
        </ul>

        <h3>Lanusei</h3>
        <ul className="list-disc">
          <li>
            Bosco Selene which includes:
            <ul>
              <li>Free parking</li>
              <li>Kids park in the woods</li>
              <li>
                <Link href="https://www.hotelboscoselene.com/index.html">
                  Restaurant and pizzeria
                </Link>
              </li>
              <li>
                <Link href="https://www.sardegnaturismo.it/en/explore/archaeological-park-seleni-wood">
                  Archeological area
                </Link>{" "}
                - you can show up on the day, but I would recommend{" "}
                <Link href="http://www.tombedeigiganti.it/visitare-il-parco-visita-il-parco/">
                  booking
                </Link>{" "}
                beforehand to request the guide in English.
              </li>
            </ul>
          </li>
          <li>
            Lanusei Village (free parking at Parcheggio di Piazza Mameli
            multistore parking, below the surface floor), then take a leisurely
            walk in via Roma.
            <br />
            If you are stopping for a meal in the village I recommend:
            <ul>
              <li>Ristorante Pizzeria Ka.Mi.Ste</li>
              <li>La Nuova Verace ristorante Pizzeria</li>
            </ul>
            For an amazing gelato stop at "Bar gelateria del Corso" or for a
            drink you can visit also Nuovo Emporio Caffè.
            <br /> Before leaving, and if you have time, visit the view point
            called "Santuario Madonna D' Ogliastra" for a breath taking view of
            the coastline (free parking there).
          </li>
        </ul>

        <h3>Baunei</h3>
        <p>For the more adventurous travellers:</p>
        <ul>
          <li>
            <Link href="https://www.offroadtracksbaunei.it/en/">
              Quad excursions
            </Link>
          </li>
        </ul>

        <h3>Arbatax</h3>
        <ul>
          <li>
            Visit the{" "}
            <Link href="https://www.sardegnaturismo.it/en/explore/rocce-rosse">
              Red Rocks
            </Link>
          </li>
          <li>Walk in the marina</li>
          <li>
            Grab a gelato at the star 1 bar or a Pizza at the star 2 restaurant
          </li>
          <li>
            Visit the{" "}
            <Link href="https://virtualarchaeology.sardegnacultura.it/index.php/en/archaeological-sites/eta-medievale/torri-costiere-di-arbatax/detailed-sheets/3222-la-torre-di-san-gemiliano">
              San Gemiliano Tower
            </Link>
            , you can climb it for free and admire the view. Very easy to walk
            there from the parking space and easy to climb. Is right above the
            Wedding venue😊, spoiler you will see the venue from the top. Not
            suited for kids below 4 years old as the ladder is a an "exposed
            ladder".
          </li>
          <li>
            The area is rich in restaurants and has a local pharmacy with other
            amenities
          </li>
        </ul>

        <h3>Santa Maria Navarrese</h3>
        <p>
          This is a cute coastal village with a great{" "}
          <Link href="https://www.turismobaunei.eu/en/services/from-santa-maria-navarrese-to-pedra-longa">
            cliff walk
          </Link>
          (4.5km/1.5 hours), this is an easy going one with no need for trekking
          shoes. Once you arrive at the end point there is a restaurant and you
          can go in the water. You will then have to walk back however, so easy
          on the wine! 😅
        </p>

        <h3>Recommended beaches</h3>
        <ul>
          <li>CEA Beach</li>
          <li>Orri beach</li>
          <li>Foxi e Lioni Beach, sandy and amazing 😊 with free parking.</li>
        </ul>
      </div>
    </>
  );
}
