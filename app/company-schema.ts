export const companySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Artway AB",
  url: "https://artway.se/",
  telephone: "+464272525",
  email: "info@artway.se",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bergavägen 13",
    postalCode: "254 66",
    addressLocality: "Helsingborg",
    addressCountry: "SE",
  },
  areaServed: ["Helsingborg", "Skåne"],
  sameAs: [
    "https://www.reco.se/artway-ab-helsingborg",
    "https://www.google.com/maps/search/?api=1&query=Artway%20AB&query_place_id=ChIJhyQZNF0zUkYRJZGCE0bMwUc",
  ],
};
