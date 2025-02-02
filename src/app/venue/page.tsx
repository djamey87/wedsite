import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="flex flex-col items-center font-beyond hero-text cente justify-items-center bg-[url('/assets/images/headers/header-image_venue.jpg')] md:rounded-xl overflow-hidden bg-center bg-cover">
        <h1 className="text-white my-20 shadow-md">Venue</h1>
      </div>
      <div className="mx-10 md:mx-20 mt-20">
        <p>
          The venue for our wedding is the wonderful{" "}
          <Link href="https://www.hotelclubsaraceno.com/en/" target="_blank">
            Hotel Club Saraceno
          </Link>{" "}
          located in{" "}
          <Link href="https://maps.app.goo.gl/fNXreJ2a9EMXXZPq8">Arabatax</Link>{" "}
          30 minutes from Lanusei (Michela's home town).
        </p>
        <p className="mt-6">The address is:</p>
        <p className="font-bold">
          Hotel Club Saraceno,
          <br /> Via S. Gemiliano,
          <br />
          08048 Arbatax NU
        </p>
        <p className="mt-6">
          The hotel will be available from the 18<sup>th</sup> to the 24
          <sup>th</sup> April with Bed & Breakfast service only.
        </p>
        <p>
          If you are interested in arranging accomodation through the hotel you
          can do so using the details below, specifying that you are our guests
          "matrimonio Michela e Dave".
        </p>
        <p className="mt-6">
          Contact "Nanni" and "Giampaolo"
          <br />
          tel: 0782667318
          <br />
          e-mail: info@hotelclubsaraceno.com
        </p>
        <p className="mt-6">Prices per night (including breakfast):</p>
        <ul>
          <li>Single: 50€</li>
          <li>Double: 100€</li>
          <li>Tripe: 120€</li>
          <li>Quadruple: 140€</li>
        </ul>

        <p className="mt-6">
          If you are considering accomodation outside of the hotel, you will
          find below some suggestions nearby:
        </p>
        <ul>
          <li>
            <Link
              href="https://www.booking.com/searchresults.en-gb.html?ss=Lanusei&ssne=Lanusei&ssne_untouched=Lanusei&highlighted_hotels=10990065&efdco=1&label=b-amp-b-niu-susu-_lfrT2KKXFgcAM5fYbFHOwS697392387255%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2294871610983%3Alp9044921%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfNeh-lbHkPZjQAwiON-2kc&sid=e44ef6d87a36009084a085c813ecf7c5&aid=311076&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=-119679&dest_type=city&checkin=2025-04-17&checkout=2025-04-22&group_adults=2&no_rooms=2&group_children=1&age=8"
              target="_blank"
            >
              B&B Niu Susu Lanusei
            </Link>
          </li>
          <li>
            <Link
              href="https://www.airbnb.it/rooms/1251220908210971431?viralityEntryPoint=1&s=76"
              target="_blank"
            >
              Agriturismo Lanusei
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
