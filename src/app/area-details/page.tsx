import Container from "@/app/_components/container";
import Link from "next/link";

export default function Index() {
  return (
    <main>
      <Container>
        <div className="px-20">
          <h1 className="font-beyond mx-20 text-dm-grey text-center mb-20">
            Nearby
          </h1>

          <p>
            Things to visit around Olbia and heading towards Arbatax (wedding
            location) and Lanusei (my hometown which is on the way to Arbatax
            from Olbia)
          </p>
          <p>Picturesque villages near Olbia and Lanusei:</p>

          <ul className="list-disc">
            <li>
              San Pantaleo, picturesque village, with artisanal shops and
              restaurants, Is very closed to the glamorous area of Porto Rotondo
              very fancy (is the Nizza of Sardinia)
            </li>
            <li>
              Posada, beautiful medieval village, with the tower/castle to visit
              and lots of narrow streets to get lost into. Restaurants and sea
              view, you can reach the close location of Santa Lucia marina for a
              nice beach walk.
            </li>
            <li>
              Lanusei
              <ul className="list-disc">
                <li>
                  Visit the Bosco Selene (free parking), which includes kids
                  park in the woods,{" "}
                  <Link href="https://www.hotelboscoselene.com/index.html">
                    restaurant and pizzeria
                  </Link>{" "}
                  in the woods and an archeological area (
                  <Link href="https://www.sardegnaturismo.it/en/explore/archaeological-park-seleni-wood">
                    Nuragic civilization park
                  </Link>
                  ). Easy to get there coming from Olbia. Booking for the
                  archeological park, you can also show up there but I recommend{" "}
                  <Link href="http://www.tombedeigiganti.it/visitare-il-parco-visita-il-parco/">
                    calling first
                  </Link>{" "}
                  to request the guide in English.
                </li>
                <li>
                  In Lanusei Village (free parking at Parcheggio di Piazza
                  Mameli multistore parking, below the surface floor) take a
                  walk in via Roma, if you are stopping there for a meal in the
                  village I recommend. Ristorante Pizzeria Ka.Mi.Ste.
                  alternatively La Nuova Verace ristorante Pizzeria, for an
                  amazing gelato stop at Bar gelateria del Corso or for a drink
                  you can visit also Nuovo Emporio Caffè. Before leaving, if you
                  have time visit the view point called Santuario Madonna D'
                  Ogliastra for a breath taking view of the coastline (free
                  parking there).
                </li>
              </ul>
            </li>
          </ul>

          <h3>Natural beauty near Olbia:</h3>
          <ul className="list-disc">
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

          <h3>Arbatax</h3>
          <p>
            <ul>
              <li>
                Visit the{" "}
                <Link href="https://www.sardegnaturismo.it/en/explore/rocce-rosse">
                  Red Rocks
                </Link>
              </li>
              <li>Walk in the marina</li>
              <li>
                Grab a gelato at the star 1 bar or a Pizza at the star 2
                restaurant
              </li>
              <li>
                Visit the{" "}
                <Link href="https://virtualarchaeology.sardegnacultura.it/index.php/en/archaeological-sites/eta-medievale/torri-costiere-di-arbatax/detailed-sheets/3222-la-torre-di-san-gemiliano">
                  San Gemiliano Tower
                </Link>
                , you can climb it for free and admire the view. Very easy to
                walk there from the parking space and easy to climb. Is right
                above the Wedding venue😊, spoiler you will see the venue from
                the top. Not suited for kids below 4 years old as the ladder is
                a an "exposed ladder".
              </li>
              <li>
                The area is rich in restaurants and has a local pharmacy with
                other amenities
              </li>
            </ul>

            <h3>Recommended beaches</h3>
            <ul>
              <li>CEA Beach</li>
              <li>Orri beach</li>
              <li>
                Foxi e Lioni Beach, sandy and amazing 😊 with free parking.
              </li>
            </ul>
          </p>
        </div>
      </Container>
    </main>
  );
}
