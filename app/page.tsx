import CampaignEffects from "./components/CampaignEffects";
import { companySchema } from "./company-schema";

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
      <svg
        className="icon-library"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <symbol id="arrow" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </symbol>
          <symbol id="arrow-up" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6h12v12" />
          </symbol>
          <symbol id="phone" viewBox="0 0 24 24">
            <path d="m8 3 3 5-3 3c1.4 2.5 2.5 3.6 5 5l3-3 5 3c0 3-2 5-5 5C10 20 4 14 3 8c0-3 2-5 5-5Z" />
          </symbol>
          <symbol id="check" viewBox="0 0 24 24">
            <path d="m5 12 4 4L19 6" />
          </symbol>
          <symbol id="truck" viewBox="0 0 24 24">
            <path d="M3 5h12v12H3V5ZM15 9h4l3 4v4h-7M1 9h6M1 13h4" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
          </symbol>
          <symbol id="box" viewBox="0 0 24 24">
            <path d="m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v10M7 5l10 4" />
          </symbol>
          <symbol id="sparkle" viewBox="0 0 24 24">
            <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4M18 4h4" />
          </symbol>
          <symbol id="shield" viewBox="0 0 24 24">
            <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
            <path d="m8 12 3 3 5-6" />
          </symbol>
          <symbol id="google" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.2h6a5.1 5.1 0 0 1-2.2 3.4v2.8h3.6c2.1-1.9 3.2-4.7 3.2-8.2Z"
            />
            <path
              fill="#34A853"
              d="M12 23c3 0 5.5-1 7.4-2.6l-3.6-2.8a6.8 6.8 0 0 1-10.1-3.5H2v2.8A11.2 11.2 0 0 0 12 23Z"
            />
            <path
              fill="#FBBC05"
              d="M5.7 14.1a6.7 6.7 0 0 1 0-4.2V7.1H2a11 11 0 0 0 0 9.8l3.7-2.8Z"
            />
            <path
              fill="#EA4335"
              d="M12 5.3c1.7 0 3.2.6 4.4 1.7l3.3-3.2A11 11 0 0 0 2 7.1l3.7 2.8A6.6 6.6 0 0 1 12 5.3Z"
            />
          </symbol>
        </defs>
      </svg>

      <div className="dark-top">
        <header className="site-header wrap">
          <a
            className="brand"
            href="https://artway.se/"
            aria-label="Artway AB – startsida"
          >
            <img
              src="/assets/logo.webp"
              width="640"
              height="157"
              alt="Artway"
              fetchPriority="high"
            />
          </a>
          <span className="header-note">
            <span className="status-dot"></span> Din flyttpartner i Helsingborg
          </span>
          <div className="header-actions">
            <a
              className="phone-link"
              href="tel:+464272525"
              aria-label="Ring Artway på 042-725 25"
            >
              <svg className="icon" aria-hidden="true">
                <use href="#phone" />
              </svg>
              <span>042-725 25</span>
            </a>
            <a
              className="button button-small button-lime"
              href="#offert"
              data-cta="header"
            >
              Få fri offert{" "}
              <svg className="icon">
                <use href="#arrow-up" />
              </svg>
            </a>
          </div>
        </header>

        <main id="main">
          <section className="hero wrap" aria-labelledby="hero-heading">
            <div className="hero-story">
              <p className="eyebrow">
                <span className="tiny-cross">✳</span> FLYTTHJÄLP I HELSINGBORG &
                SKÅNE
              </p>
              <h1 id="hero-heading">
                Ny adress.
                <br />
                En <span className="italic-word">trygg</span> start.
              </h1>
              <p className="hero-description">
                Du har ett nytt kapitel framför dig.
                <br className="desktop-break" /> Vi tar hand om de tunga lyften.
              </p>
              <p className="hero-detail">
                Flytt, packning, montering och flyttstädning.
                <br />
                Ett team som hjälper dig hela vägen.
              </p>
              <a
                className="button button-lime hero-cta"
                href="#offert"
                data-cta="hero"
              >
                Få en kostnadsfri offert{" "}
                <svg className="icon">
                  <use href="#arrow-up" />
                </svg>
              </a>
              <p className="hero-micro">
                <svg className="icon">
                  <use href="#check" />
                </svg>{" "}
                Kostnadsfritt. Ingen bindande bokning.
              </p>
              <div className="hero-ratings" aria-label="Kundbetyg">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Artway%20AB&query_place_id=ChIJhyQZNF0zUkYRJZGCE0bMwUc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mini-rating"
                >
                  <svg className="google-icon">
                    <use href="#google" />
                  </svg>
                  <span>
                    <strong>
                      4,9{" "}
                      <span className="stars" aria-hidden="true">
                        ★★★★★
                      </span>
                    </strong>
                    <small>139 omdömen på Google</small>
                  </span>
                </a>
                <a
                  href="https://www.reco.se/artway-ab-helsingborg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mini-rating"
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
                      5,0{" "}
                      <span className="stars" aria-hidden="true">
                        ★★★★★
                      </span>
                    </strong>
                    <small>163 omdömen på Reco</small>
                  </span>
                </a>
              </div>
              <figure className="hero-photo">
                <img
                  src="/assets/hero-trucks.webp"
                  srcSet="/assets/hero-trucks-small.webp 640w, /assets/hero-trucks.webp 1200w"
                  sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 50vw, 620px"
                  width="1200"
                  height="554"
                  alt="Artways gröna, profilerade flyttbilar på ett riktigt flyttuppdrag"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>Riktiga människor. Riktigt flytthantverk.</span>
                  <span className="photo-location">
                    ARTWAY AB · HELSINGBORG
                  </span>
                </figcaption>
              </figure>
            </div>

            <aside
              id="offert"
              className="quote-panel"
              aria-labelledby="quote-heading"
            >
              <div className="quote-heading">
                <p className="eyebrow">LÅT OSS PLANERA DIN FLYTT</p>
                <h2 id="quote-heading">
                  Vad ska flytta <br />
                  och vart?
                </h2>
                <p>
                  Berätta lite om din flytt. Vi tar fram ett upplägg som passar
                  dig.
                </p>
                <span className="quote-free">
                  <svg className="icon">
                    <use href="#check" />
                  </svg>{" "}
                  Fri offert · Ingen bindande bokning
                </span>
              </div>
              <div id="form-shell" className="form-shell" aria-busy="true">
                <div id="form-loading" className="form-loading" role="status">
                  <span className="loading-line"></span>
                  <p>Förbereder ditt offertformulär…</p>
                </div>
                <div
                  className="elfsight-app-47186b70-4c2e-4d1e-9fc1-4ada8aabc106"
                  data-elfsight-app-lazy=""
                ></div>
              </div>
              <p className="form-help" id="form-help">
                Problem med formuläret?{" "}
                <a
                  href="https://offert.artway.se/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Öppna det här <span aria-hidden="true">↗</span>
                </a>{" "}
                eller ring <a href="tel:+464272525">042-725 25</a>.
              </p>
              <p className="privacy-note">
                <svg className="icon">
                  <use href="#shield" />
                </svg>
                <span>
                  Vi använder dina uppgifter för att hantera din förfrågan.{" "}
                  <a
                    href="https://artway.se/integritetspolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Så hanterar vi personuppgifter
                  </a>
                  .
                </span>
              </p>
              <noscript>
                <p className="noscript-note">
                  JavaScript behövs för formuläret.{" "}
                  <a href="https://offert.artway.se/">Öppna offertformuläret</a>{" "}
                  eller ring <a href="tel:+464272525">042-725 25</a>.
                </p>
              </noscript>
            </aside>
          </section>
        </main>
      </div>

      <div className="reassurance">
        <div className="wrap reassurance-inner">
          <span>
            <svg className="icon">
              <use href="#shield" />
            </svg>{" "}
            Försäkrad flytthjälp
          </span>
          <span>
            <svg className="icon">
              <use href="#box" />
            </svg>{" "}
            Varsamt om ditt bohag
          </span>
          <span>
            <svg className="icon">
              <use href="#phone" />
            </svg>{" "}
            En kontakt hela vägen
          </span>
          <span>
            <svg className="icon">
              <use href="#check" />
            </svg>{" "}
            Offert utan bindning
          </span>
        </div>
      </div>

      <section
        className="services section wrap"
        aria-labelledby="services-heading"
      >
        <div className="service-copy">
          <p className="eyebrow">LITE HJÄLP ELLER HELA FLYTTEN</p>
          <h2 id="services-heading">
            Du väljer hjälpen.
            <br />
            Vi tar hand om resten.
          </h2>
          <p className="section-intro">
            Ingen flytt är den andra lik. Därför planerar vi efter dina saker,
            dina adresser och din vardag.
          </p>
          <div className="service-list">
            <div className="service-row">
              <span className="service-number">01</span>
              <div>
                <h3>Flytt & transport</h3>
                <p>Vi lastar, transporterar och bär in på din nya adress.</p>
              </div>
              <svg className="icon">
                <use href="#truck" />
              </svg>
            </div>
            <div className="service-row">
              <span className="service-number">02</span>
              <div>
                <h3>Packning & montering</h3>
                <p>Hjälp att packa varsamt och få möblerna på plats igen.</p>
              </div>
              <svg className="icon">
                <use href="#box" />
              </svg>
            </div>
            <div className="service-row">
              <span className="service-number">03</span>
              <div>
                <h3>Flyttstädning</h3>
                <p>Lämna den gamla adressen med en sak mindre att tänka på.</p>
              </div>
              <svg className="icon">
                <use href="#sparkle" />
              </svg>
            </div>
          </div>
          <a href="#offert" className="text-link" data-cta="services">
            Berätta vad du behöver hjälp med{" "}
            <svg className="icon">
              <use href="#arrow-up" />
            </svg>
          </a>
        </div>
        <div className="service-visual">
          <figure className="team-photo">
            <img
              src="/assets/team.webp"
              width="1200"
              height="554"
              alt="Tre medarbetare i Artways arbetskläder vid en lastad flyttbil"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Vårt team. Dina saker. Samma omtanke.</figcaption>
          </figure>
          <div className="detail-photo">
            <img
              src="/assets/careful-packing.webp"
              width="600"
              height="1067"
              alt="Möbler som är skyddade och säkrade i Artways flyttbil"
              loading="lazy"
              decoding="async"
            />
            <p>
              Omsorg i<br />
              varje detalj.<span>Från första lyftet till sista kartongen.</span>
            </p>
          </div>
          <a
            className="reco-stamp"
            href="https://www.reco.se/artway-ab-helsingborg"
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
      </section>

      <section className="reviews section" aria-labelledby="reviews-heading">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FÖRTROENDE SOM FÖLJER MED</p>
              <h2 id="reviews-heading">
                En bra flytt märks.
                <br />
                Också i omdömena.
              </h2>
            </div>
            <p>
              Det är kunderna som sätter betyget.
              <br />
              Läs deras egna upplevelser.
            </p>
          </div>
          <div className="platforms">
            <a
              className="platform-card"
              href="https://www.google.com/maps/search/?api=1&query=Artway%20AB&query_place_id=ChIJhyQZNF0zUkYRJZGCE0bMwUc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="platform-brand">
                <svg className="google-icon">
                  <use href="#google" />
                </svg>
                <span>Google</span>
              </div>
              <div className="platform-score">
                <strong>
                  4,9<span>/ 5</span>
                </strong>
                <span className="stars" aria-label="4,9 av 5 stjärnor">
                  ★★★★★
                </span>
              </div>
              <div className="platform-bottom">
                <span>139 kundomdömen</span>
                <span className="platform-action">
                  Läs på Google{" "}
                  <svg className="icon">
                    <use href="#arrow-up" />
                  </svg>
                </span>
              </div>
            </a>
            <a
              className="platform-card"
              href="https://www.reco.se/artway-ab-helsingborg"
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
                  5,0<span>/ 5</span>
                </strong>
                <span className="stars" aria-label="5,0 av 5 stjärnor">
                  ★★★★★
                </span>
              </div>
              <div className="platform-bottom">
                <span>163 kundomdömen</span>
                <span className="platform-action">
                  Läs på Reco{" "}
                  <svg className="icon">
                    <use href="#arrow-up" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
          <div className="review-quotes">
            <figure>
              <span className="stars" aria-label="5 av 5 stjärnor">
                ★★★★★
              </span>
              <blockquote>
                ”Mycket professionell och pålitlig flyttfirma!”
              </blockquote>
              <figcaption>
                <span className="avatar">JZ</span>
                <span>
                  <strong>Jamal Z</strong>
                  <small>
                    27 februari 2026 ·{" "}
                    <a
                      href="https://www.reco.se/v/review/3147919"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reco ↗
                    </a>
                  </small>
                </span>
              </figcaption>
            </figure>
            <figure>
              <span className="stars" aria-label="5 av 5 stjärnor">
                ★★★★★
              </span>
              <blockquote>
                ”Tack för ert fina bemötande och det fantastiska arbetet.”
              </blockquote>
              <figcaption>
                <span className="avatar">AA</span>
                <span>
                  <strong>Aya A</strong>
                  <small>
                    2 mars 2026 ·{" "}
                    <a
                      href="https://www.reco.se/v/review/3150795"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reco ↗
                    </a>
                  </small>
                </span>
              </figcaption>
            </figure>
            <figure>
              <span className="stars" aria-label="5 av 5 stjärnor">
                ★★★★★
              </span>
              <blockquote>”Mycket bra och trevlig personal!”</blockquote>
              <figcaption>
                <span className="avatar">EE</span>
                <span>
                  <strong>Emiliano E</strong>
                  <small>
                    2 oktober 2026 ·{" "}
                    <a
                      href="https://www.reco.se/v/review/3361387"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reco ↗
                    </a>
                  </small>
                </span>
              </figcaption>
            </figure>
          </div>
          <p className="review-source">
            Utvalda utdrag från Reco. Betyg och antal omdömen kontrollerade den
            30 oktober 2026. Aktuella uppgifter finns på respektive profil.
          </p>
        </div>
      </section>

      <section className="steps section wrap" aria-labelledby="steps-heading">
        <div className="steps-heading">
          <p className="eyebrow">FRÅN FÖRFRÅGAN TILL NY ADRESS</p>
          <h2 id="steps-heading">
            Tre steg.
            <br />
            Lite mindre flyttstress.
          </h2>
          <a className="button button-green" href="#offert" data-cta="steps">
            Börja med en fri offert{" "}
            <svg className="icon">
              <use href="#arrow-up" />
            </svg>
          </a>
        </div>
        <ol className="step-list">
          <li>
            <span>01</span>
            <div>
              <h3>Berätta om din flytt</h3>
              <p>
                Fyll i datum, adresser och vilken hjälp du önskar i formuläret.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Få ett tydligt upplägg</h3>
              <p>
                Vi går igenom förfrågan och tar fram en offert utifrån just din
                flytt.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Landat. På rätt adress.</h3>
              <p>
                När allt är överenskommet sköter vårt team de moment du har
                bokat.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="faq section" aria-labelledby="faq-heading">
        <div className="wrap faq-inner">
          <div>
            <p className="eyebrow">BRA ATT VETA</p>
            <h2 id="faq-heading">
              Frågor före
              <br />
              första kartongen?
            </h2>
            <p>Vi finns här om du vill prata igenom din flytt.</p>
            <a className="text-link" href="tel:+464272525">
              <svg className="icon">
                <use href="#phone" />
              </svg>{" "}
              042-725 25
            </a>
            <small className="hours">Alla dagar 08:00–20:00</small>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                Är offertförfrågan bindande?
                <span className="plus" aria-hidden="true"></span>
              </summary>
              <p>
                Nej. Det är kostnadsfritt att skicka en förfrågan, och den
                innebär ingen bindande bokning. Vi går igenom dina uppgifter och
                tar fram ett förslag.
              </p>
            </details>
            <details>
              <summary>
                Vad påverkar priset för min flytt?
                <span className="plus" aria-hidden="true"></span>
              </summary>
              <p>
                Bland annat mängden bohag, avståndet mellan adresserna,
                våningsplan, hiss och gångavstånd. Packning, montering och
                städning kan också påverka omfattningen. Beskriv flytten så kan
                vi planera rätt hjälp.
              </p>
            </details>
            <details>
              <summary>
                Kan ni hjälpa till med både packning och städning?
                <span className="plus" aria-hidden="true"></span>
              </summary>
              <p>
                Ja. Du kan få hjälp med packning, avtalad demontering och
                montering samt flyttstädning. Ange vad du behöver i förfrågan,
                så tar vi med det i planeringen.
              </p>
            </details>
            <details>
              <summary>
                Flyttar ni utanför Helsingborg?
                <span className="plus" aria-hidden="true"></span>
              </summary>
              <p>
                Ja. Vi utgår från Helsingborg och hjälper kunder i Skåne, inom
                Sverige och med planerade utlandsflyttar. Ange båda adresserna i
                formuläret.
              </p>
            </details>
            <details>
              <summary>
                Vad händer efter att jag skickat formuläret?
                <span className="plus" aria-hidden="true"></span>
              </summary>
              <p>
                Din förfrågan skickas till Artway. Vi går igenom uppgifterna och
                kontaktar dig om offerten eller om vi behöver veta mer för att
                planera flytten.
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-cta">
            <div>
              <p className="eyebrow">NÄSTA KAPITEL VÄNTAR</p>
              <h2>
                Ska vi göra din
                <br />
                nästa flytt enklare?
              </h2>
            </div>
            <div>
              <a
                className="button button-lime"
                href="#offert"
                data-cta="footer"
              >
                Få en kostnadsfri offert{" "}
                <svg className="icon">
                  <use href="#arrow-up" />
                </svg>
              </a>
              <a className="footer-call" href="tel:+464272525">
                Eller prata med oss: 042-725 25
              </a>
            </div>
          </div>
          <div className="footer-info">
            <a
              className="brand"
              href="https://artway.se/"
              aria-label="Artway AB – startsida"
            >
              <img
                src="/assets/logo.webp"
                width="640"
                height="157"
                alt="Artway"
                loading="lazy"
              />
            </a>
            <p>
              Flytt, städ och transport.
              <br />
              Helsingborg, Skåne och vidare.
            </p>
            <address>
              <a href="mailto:info@artway.se">info@artway.se</a>
              <br />
              Bergavägen 13, 254 66 Helsingborg
            </address>
          </div>
          <div className="footer-legal">
            <span>© 2026 Artway AB</span>
            <a
              href="https://artway.se/integritetspolicy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Integritetspolicy <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://artway.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Besök artway.se <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </footer>

      <div className="mobile-bar" id="mobile-bar" aria-label="Kontakta Artway">
        <a
          className="mobile-call"
          href="tel:+464272525"
          aria-label="Ring oss på 042-725 25"
        >
          <svg className="icon">
            <use href="#phone" />
          </svg>
          <span>Ring oss</span>
        </a>
        <a className="button button-lime" href="#offert" data-cta="mobile-bar">
          Få fri offert{" "}
          <svg className="icon">
            <use href="#arrow-up" />
          </svg>
        </a>
      </div>
      <CampaignEffects />
    </>
  );
}
