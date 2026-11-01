export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      className={`${name === "google" ? "google-icon" : "icon"} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#${name}`} />
    </svg>
  );
}

export function IconLibrary() {
  return (
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
        <symbol id="clock" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </symbol>
        <symbol id="people" viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="3" />
          <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M17 15a5 5 0 0 1 4 5" />
        </symbol>
        <symbol id="pin" viewBox="0 0 24 24">
          <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </symbol>
      </defs>
    </svg>
  );
}
