// Published company information checked on 1 November 2026.
// Prices: https://artway.se/priser/ (VAT inclusive; NOT labelled after RUT).
// Team, fleet and opening hours: https://artway.se/om-oss/
// Ratings: the linked primary Google/Reco profiles, not the stale homepage totals.
export const company = {
  phone: "042-725 25",
  phoneHref: "tel:+464272525",
  email: "info@artway.se",
  address: "Bergavägen 13, 254 66 Helsingborg",
  googleUrl:
    "https://www.google.com/maps/search/?api=1&query=Artway%20AB&query_place_id=ChIJhyQZNF0zUkYRJZGCE0bMwUc",
  googleRating: "4,9",
  googleReviews: 139,
  recoUrl: "https://www.reco.se/artway-ab-helsingborg",
  recoRating: "5,0",
  recoReviews: 163,
  pricesUrl: "https://artway.se/priser/",
  aboutUrl: "https://artway.se/om-oss/",
} as const;

export const prices = [
  {
    label: "Flytthjälp",
    title: "Två medarbetare. En flyttbil.",
    price: "499",
    unit: "kr/timme",
    description: "Lätt lastbil och två medarbetare för din flytt.",
    icon: "truck",
    featured: true,
    items: [
      "Fordon, personal och bränsle",
      "Lastning och avlastning",
      "Möbelskydd och försäkring",
    ],
  },
  {
    label: "Ett större team",
    title: "Tre medarbetare. Samma omtanke.",
    price: "699",
    unit: "kr/timme",
    description: "Lätt lastbil och tre medarbetare när mer hjälp behövs.",
    icon: "people",
    featured: false,
    items: [
      "Fordon, personal och bränsle",
      "Lastning och avlastning",
      "Möbelskydd och försäkring",
    ],
  },
  {
    label: "Hjälp runt flytten",
    title: "Flyttstädning. Ett fint avslut.",
    price: "31,25",
    unit: "kr/m²",
    description: "Låt oss även ta hand om städningen på din gamla adress.",
    icon: "sparkle",
    featured: false,
    items: [
      "Planeras efter bostadens yta",
      "Omfattningen stäms av i offerten",
      "Kan kombineras med din flytt",
    ],
  },
] as const;

export const reviews = [
  {
    initials: "JZ",
    name: "Jamal Z",
    date: "27 februari 2026",
    quote: "Mycket professionell och pålitlig flyttfirma!",
    url: "https://www.reco.se/v/review/3147919",
  },
  {
    initials: "AA",
    name: "Aya A",
    date: "2 mars 2026",
    quote: "Tack för ert fina bemötande och det fantastiska arbetet.",
    url: "https://www.reco.se/v/review/3150795",
  },
  {
    initials: "EE",
    name: "Emiliano E",
    date: "2 oktober 2026",
    quote: "Mycket bra och trevlig personal!",
    url: "https://www.reco.se/v/review/3361387",
  },
] as const;

export const faqs = [
  {
    question: "Är offertförfrågan bindande?",
    answer:
      "Nej. Det kostar inget att skicka en förfrågan och det innebär ingen bokning. Du får ett förslag att ta ställning till. Uppdraget bekräftas först när vi har kommit överens om omfattning och villkor.",
  },
  {
    question: "Vad ingår i flyttpriset?",
    answer:
      "Enligt Artways ordinarie prislista ingår lätt lastbil, personal, bränsle, transport, lastning och avlastning, kundtjänst, möbelskydd och försäkring samt avtalad nedmontering och montering. Packhjälp och andra tillval stäms av separat.",
  },
  {
    question: "Vad påverkar totalpriset?",
    answer:
      "Timpriset är en del av beräkningen. Mängden bohag, tiden, körsträckan, våningsplan, hiss, bärväg och särskilt tunga föremål påverkar uppdragets omfattning. Därför går vi igenom dina uppgifter innan du bokar.",
  },
  {
    question: "Hur fungerar RUT-avdrag?",
    answer:
      "Vissa arbetskostnader kan omfattas av RUT när villkoren är uppfyllda. Det gäller inte automatiskt hela fakturan. Priserna här är angivna inklusive moms enligt Artways prislista. Eventuellt RUT-avdrag och den arbetskostnad det gäller redovisas i offerten.",
  },
  {
    question: "Kan jag få hjälp med packning och montering?",
    answer:
      "Ja, berätta vad du vill ha hjälp med i formuläret. Separat packhjälp och montering kostar 300 kr per timme inklusive moms enligt prislistan. Avtalad nedmontering och montering i själva flyttuppdraget följer den omfattning vi kommer överens om.",
  },
  {
    question: "Vilka områden hjälper ni kunder i?",
    answer:
      "Vi utgår från Helsingborg och arbetar i nordvästra Skåne. Artway hjälper också till med flyttar inom Sverige och planerade utlandsflyttar. Ange båda adresserna och önskat datum så bedömer vi upplägget.",
  },
] as const;
