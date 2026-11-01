import type { ReactNode } from "react";
import CampaignEffects from "./components/CampaignEffects";
import CampaignConsent from "./components/CampaignConsent";
import { Icon, IconLibrary } from "./components/Icon";
import { companySchema } from "./company-schema";
import { company, prices, reviews, faqs } from "./content";

function QuoteButton({
  location,
  children = "Få en kostnadsfri offert",
  className = "",
}: {
  location: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href="#offert"
      data-cta={location}
    >
      {children}
      <Icon name="arrow-up" />
    </a>
  );
}
function Brand() {
  return (
    <div className="brand" aria-label="Artway AB">
      <img src="/assets/logo-dark.png" width="384" height="94" alt="Artway" />
      <span>FLYTT · STÄD · TRANSPORT</span>
    </div>
  );
}
function RatingLinks() {
  return (
    <div className="hero-ratings" aria-label="Kundbetyg">
      <a
        className="mini-rating"
        href={company.googleUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="google" />
        <span>
          <strong>
            {company.googleRating}{" "}
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>
          </strong>
          <small>{company.googleReviews} omdömen på Google</small>
        </span>
      </a>
      <a
        className="mini-rating"
        href={company.recoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="mini-reco"
          src="/assets/reco-logo.svg"
          width="58"
          height="21"
          alt="Reco"
        />
        <span>
          <strong>
            {company.recoRating}{" "}
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>
          </strong>
          <small>{company.recoReviews} omdömen på Reco</small>
        </span>
      </a>
    </div>
  );
}
function QuotePanel() {
  return (
    <aside id="offert" className="quote-panel" aria-labelledby="quote-heading">
      <div className="quote-heading">
        <span className="quote-icon">
          <Icon name="box" />
        </span>
        <p className="eyebrow">EN NY ADRESS BÖRJAR HÄR</p>
        <h2 id="quote-heading">Berätta om din flytt.</h2>
        <p>
          Fyll i dina uppgifter i fyra steg. Vi går igenom din flytt och tar
          fram en offert.
        </p>
        <span className="quote-free">
          <Icon name="check" /> Kostnadsfritt · Ingen bindande bokning
        </span>
      </div>
      <div id="form-shell" className="form-shell" aria-busy="true">
        <div id="form-loading" className="form-loading" role="status">
          <span className="loading-line" />
          <p>Förbereder ditt offertformulär…</p>
        </div>
        <div
          className="elfsight-app-47186b70-4c2e-4d1e-9fc1-4ada8aabc106"
          data-elfsight-app-lazy=""
        />
      </div>
      <p className="form-help">
        Problem med formuläret?{" "}
        <a
          href="https://offert.artway.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Öppna det här ↗
        </a>{" "}
        eller ring <a href={company.phoneHref}>{company.phone}</a>.
      </p>
      <p className="privacy-note">
        <Icon name="shield" />
        <span>
          Vi använder dina uppgifter för din förfrågan.{" "}
          <a
            href="https://artway.se/integritetspolicy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs om personuppgifter ↗
          </a>
        </span>
      </p>
      <noscript>
        <p className="noscript-note">
          JavaScript behövs för formuläret. Ring{" "}
          <a href={company.phoneHref}>{company.phone}</a> så hjälper vi dig.
        </p>
      </noscript>
    </aside>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companySchema).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Hoppa till innehållet
      </a>
      <IconLibrary />
      <header className="site-header">
        <div className="wrap header-inner">
          <Brand />
          <p className="header-note">
            <span className="status-dot" /> Helsingborg. Skåne. Ditt nästa steg.
          </p>
          <div className="header-actions">
            <a
              className="header-phone"
              href={company.phoneHref}
              aria-label="Ring Artway på 042-725 25"
            >
              <Icon name="phone" />
              <span>{company.phone}</span>
            </a>
            <QuoteButton location="header" className="button-small">
              Få fri offert
            </QuoteButton>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero wrap">
            <div className="hero-story">
              <p className="eyebrow">
                <span className="status-dot" /> DIN LOKALA FLYTTPARTNER I SKÅNE
              </p>
              <h1 id="hero-heading">
                Flyttfirma i<br />
                Helsingborg.
                <br />
                <span>En lättare flytt.</span>
              </h1>
              <p className="hero-description">
                Du ser fram emot ditt nya hem.
                <br />
                Vi tar hand om de tunga lyften.
              </p>
              <p className="hero-detail">
                Flytt, packning och flyttstädning med ett eget team. Välj den
                hjälp du behöver och få en offert utan bindning.
              </p>
              <a className="hero-price" href="#priser">
                <span className="price-icon">
                  <Icon name="truck" />
                </span>
                <span>
                  <small>LÄTT LASTBIL + 2 MEDARBETARE</small>
                  <strong>
                    Från 499 <span>kr/timme inkl. moms</span>
                  </strong>
                </span>
                <Icon name="arrow" />
              </a>
              <div className="hero-action">
                <QuoteButton location="hero" />
                <p>
                  <Icon name="check" /> Gratis förfrågan. Du bestämmer sedan.
                </p>
              </div>
              <RatingLinks />
              <figure className="hero-photo">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/assets/hero-trucks-800.avif 800w, /assets/hero-trucks-960.avif 960w"
                    sizes="(max-width: 760px) calc(100vw - 40px), 600px"
                  />
                  <img
                    src="/assets/hero-trucks-800.webp"
                    srcSet="/assets/hero-trucks-small.webp 640w, /assets/hero-trucks-800.webp 800w, /assets/hero-trucks-960.webp 960w, /assets/hero-trucks.webp 1200w"
                    sizes="(max-width: 760px) calc(100vw - 40px), 600px"
                    width="1200"
                    height="554"
                    alt="Artways egna gröna flyttbilar på ett verkligt uppdrag"
                    fetchPriority="high"
                  />
                </picture>
                <figcaption>
                  <span>
                    <span className="photo-dot" /> VÅRA BILAR. VÅRT TEAM.
                  </span>
                  <span>Redo för din nästa adress.</span>
                </figcaption>
              </figure>
            </div>
            <QuotePanel />
          </div>
        </section>
        <section className="capacity-strip" aria-label="Artway i siffror">
          <div className="wrap capacity-inner">
            <p>
              Stort nog för din flytt.
              <br />
              <strong>Nära nog för dig.</strong>
            </p>
            <div>
              <strong>
                26<span>medarbetare</span>
              </strong>
              <small>Ett eget team</small>
            </div>
            <div>
              <strong>
                14<span>fordon</span>
              </strong>
              <small>För flytt och transport</small>
            </div>
            <div>
              <strong>
                7<span>dagar i veckan</span>
              </strong>
              <small>Öppet 08:00–20:00</small>
            </div>
          </div>
        </section>
        <section
          id="priser"
          className="pricing-section section wrap"
          aria-labelledby="prices-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">TYDLIGA PRISER. ENKLARE BESLUT.</p>
              <h2 id="prices-heading">
                Ett pris att utgå från.
                <br />
                <span>En flytt att se fram emot.</span>
              </h2>
            </div>
            <p>
              Här är våra ordinarie priser inklusive moms. Din offert anpassas
              efter adresser, omfattning och tillval.
            </p>
          </div>
          <div className="price-grid">
            {prices.map((price) => (
              <article
                key={price.label}
                className={`price-card${price.featured ? " featured" : ""}`}
              >
                <div className="price-card-top">
                  <span className="service-icon">
                    <Icon name={price.icon} />
                  </span>
                  <p>{price.label}</p>
                  {price.featured && <span className="price-tag">Från</span>}
                </div>
                <h3>{price.title}</h3>
                <div className="price-value">
                  {price.price}
                  <span>{price.unit}</span>
                </div>
                <p className="price-vat">inklusive moms</p>
                <p className="price-description">{price.description}</p>
                <ul>
                  {price.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
                <QuoteButton
                  location={`price-${price.price}`}
                  className={price.featured ? "" : "button-outline"}
                >
                  Få offert för min flytt
                </QuoteButton>
              </article>
            ))}
          </div>
          <div className="price-explanation">
            <Icon name="shield" />
            <p>
              <strong>Det ska vara tydligt innan du bokar.</strong> Totalpriset
              påverkas av arbetstid, körsträcka, åtkomst och överenskomna
              tillval. Avtalad nedmontering och montering ingår i flyttuppdraget
              enligt prislistan. Separat packhjälp och montering: 300 kr/timme
              inkl. moms. Be om redovisning före och efter eventuellt
              RUT-avdrag.
            </p>
          </div>
          <p className="source-note">
            Priser och omfattning från{" "}
            <a
              href={company.pricesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Artways prislista ↗
            </a>
            , kontrollerade 1 november 2026. Offertens villkor gäller för ditt
            uppdrag.
          </p>
        </section>
        <section
          className="care-section section"
          aria-labelledby="care-heading"
        >
          <div className="wrap care-grid">
            <div className="care-visual">
              <figure className="team-photo">
                <picture>
                  <source srcSet="/assets/team-640.avif" type="image/avif" />
                  <img
                    src="/assets/team-640.webp"
                    width="640"
                    height="296"
                    alt="Artways medarbetare i profilerade arbetskläder framför en lastad flyttbil"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <figcaption>Det är vi som hjälper dig hela vägen.</figcaption>
              </figure>
              <div className="care-detail">
                <picture>
                  <source
                    srcSet="/assets/careful-packing-360.avif"
                    type="image/avif"
                  />
                  <img
                    src="/assets/careful-packing-360.webp"
                    width="360"
                    height="640"
                    alt="Möbler skyddade och säkrade i en av Artways flyttbilar"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <p>
                  Rätt skydd.
                  <br />
                  Rätt omtanke.
                  <span>Ditt bohag ska känna sig lika tryggt som du.</span>
                </p>
              </div>
              <a
                className="reco-stamp"
                href={company.recoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/reco-2026.svg"
                  width="308"
                  height="308"
                  alt="Artway – rekommenderat företag 2026 på Reco"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="care-copy">
              <p className="eyebrow">LITE HJÄLP ELLER HELA FLYTTEN</p>
              <h2 id="care-heading">
                Du väljer hjälpen.
                <br />
                <span>Vi löser det praktiska.</span>
              </h2>
              <p className="section-intro">
                Varje hem är olika. Vi planerar bemanning, fordon och hjälp
                efter dina saker och dina förutsättningar.
              </p>
              <div className="service-list">
                <div>
                  <Icon name="truck" />
                  <span>
                    <h3>Flytt & transport</h3>
                    <p>Lastning, transport och avlastning på din nya adress.</p>
                  </span>
                </div>
                <div>
                  <Icon name="box" />
                  <span>
                    <h3>Packning & montering</h3>
                    <p>Varsam packhjälp och avtalad hjälp med dina möbler.</p>
                  </span>
                </div>
                <div>
                  <Icon name="sparkle" />
                  <span>
                    <h3>Flyttstädning</h3>
                    <p>
                      Låt oss ta hand om det gamla hemmet när du flyttar vidare.
                    </p>
                  </span>
                </div>
              </div>
              <a className="text-link" href="#offert" data-cta="services">
                Välj hjälpen som passar dig
                <Icon name="arrow-up" />
              </a>
            </div>
          </div>
        </section>
        <section
          className="reviews-section section wrap"
          aria-labelledby="reviews-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">FÖRTROENDE SOM FÖLJER MED</p>
              <h2 id="reviews-heading">
                Läs vad kunderna säger.
                <br />
                <span>Med deras egna ord.</span>
              </h2>
            </div>
            <p>
              Läs omdömen publicerade på Google och Reco. Du hittar källan
              direkt på respektive profil.
            </p>
          </div>
          <div className="platforms">
            <a
              className="platform-card"
              href={company.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="platform-brand">
                <Icon name="google" />
                <span>Google</span>
              </div>
              <div className="platform-score">
                <strong>
                  {company.googleRating}
                  <span>/ 5</span>
                </strong>
                <span className="stars" aria-label="4,9 av 5 stjärnor">
                  ★★★★★
                </span>
              </div>
              <div className="platform-bottom">
                <span>{company.googleReviews} kundomdömen</span>
                <span>
                  Läs på Google
                  <Icon name="arrow-up" />
                </span>
              </div>
            </a>
            <a
              className="platform-card"
              href={company.recoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="platform-brand">
                <img
                  src="/assets/reco-logo.svg"
                  width="85"
                  height="31"
                  alt="Reco"
                />
              </div>
              <div className="platform-score">
                <strong>
                  {company.recoRating}
                  <span>/ 5</span>
                </strong>
                <span className="stars" aria-label="5,0 av 5 stjärnor">
                  ★★★★★
                </span>
              </div>
              <div className="platform-bottom">
                <span>{company.recoReviews} kundomdömen</span>
                <span>
                  Läs på Reco
                  <Icon name="arrow-up" />
                </span>
              </div>
            </a>
          </div>
          <div className="review-quotes">
            {reviews.map((review) => (
              <figure key={review.name}>
                <span className="stars" aria-label="5 av 5 stjärnor">
                  ★★★★★
                </span>
                <blockquote>”{review.quote}”</blockquote>
                <figcaption>
                  <span className="avatar">{review.initials}</span>
                  <span>
                    <strong>{review.name}</strong>
                    <small>
                      {review.date} ·{" "}
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reco ↗
                      </a>
                    </small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="source-note">
            Utvalda utdrag från Reco. Betyg och antal omdömen kontrollerade 1
            november 2026. Aktuella uppgifter finns på respektive profil.
          </p>
        </section>
        <section className="steps-section section">
          <div className="wrap">
            <div className="steps-heading">
              <p className="eyebrow">FRÅN FÖRFRÅGAN TILL NY ADRESS</p>
              <h2>
                Tre steg till
                <br />
                <span>lite mindre flyttstress.</span>
              </h2>
            </div>
            <ol className="step-grid">
              <li>
                <span className="step-number">01</span>
                <h3>Berätta om din flytt</h3>
                <p>
                  Datum, adresser och den hjälp du vill ha. Du skickar en
                  kostnadsfri förfrågan.
                </p>
              </li>
              <li>
                <span className="step-number">02</span>
                <h3>Få ett tydligt upplägg</h3>
                <p>
                  Vi går igenom uppgifterna och tar fram en offert med
                  omfattning och villkor.
                </p>
              </li>
              <li>
                <span className="step-number">03</span>
                <h3>Vi tar de tunga lyften</h3>
                <p>
                  Du väljer om du vill boka. Sedan genomför vårt team de moment
                  vi avtalat.
                </p>
              </li>
            </ol>
            <QuoteButton location="steps">Planera min flytt</QuoteButton>
          </div>
        </section>
        <section
          className="faq-section section wrap"
          aria-labelledby="faq-heading"
        >
          <div className="faq-intro">
            <p className="eyebrow">BRA ATT VETA INNAN DU BOKAR</p>
            <h2 id="faq-heading">
              Frågor före
              <br />
              <span>första kartongen?</span>
            </h2>
            <p>
              Prata gärna med oss om dina adresser, dina saker och det du
              behöver hjälp med.
            </p>
            <a className="contact-phone" href={company.phoneHref}>
              <Icon name="phone" />
              {company.phone}
            </a>
            <small>Alla dagar 08:00–20:00</small>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span className="plus" aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="final-cta wrap" aria-labelledby="final-heading">
          <div>
            <p className="eyebrow">NÄSTA KAPITEL VÄNTAR</p>
            <h2 id="final-heading">
              Ny adress.
              <br />
              <span>En trygg start med Artway.</span>
            </h2>
            <p>Vi hjälper dig att hitta rätt upplägg för din flytt.</p>
          </div>
          <div>
            <QuoteButton location="footer" />
            <a className="final-call" href={company.phoneHref}>
              Eller ring {company.phone}
              <Icon name="phone" />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-info">
            <Brand />
            <p>
              En lokal partner för flytt, städ och transport.
              <br />
              Helsingborg, Skåne och vidare.
            </p>
            <address>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <br />
              {company.address}
            </address>
          </div>
          <div className="footer-legal">
            <span>© 2026 Artway AB</span>
            <button type="button" data-cookie-settings>
              Cookieinställningar
            </button>
            <a
              href="https://artway.se/integritetspolicy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Integritetspolicy ↗
            </a>
            <a
              href="https://artway.se/villkor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Villkor ↗
            </a>
          </div>
        </div>
      </footer>
      <div className="mobile-bar" id="mobile-bar" aria-label="Kontakta Artway">
        <a
          className="mobile-call"
          href={company.phoneHref}
          aria-label="Ring oss på 042-725 25"
        >
          <Icon name="phone" />
          <span>Ring oss</span>
        </a>
        <QuoteButton location="mobile-bar">Få fri offert</QuoteButton>
      </div>
      <CampaignEffects />
      <CampaignConsent />
    </>
  );
}
