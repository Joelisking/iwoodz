export function ShowroomMap() {
  return (
    <section>
      {/* Map section header */}
      <div className="bg-linen px-8 py-10 border-t border-ink/8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-gold/60" />
              <p className="text-gold text-[10px] tracking-[0.45em] uppercase">Find Us</p>
            </div>
            <p
              className="text-3xl font-light italic"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              iWoodz Creation Showroom
            </p>
            <p className="text-ink/45 text-sm mt-1">Accra, Ghana</p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.25em] uppercase text-ink/45 hover:text-gold transition-colors self-start md:self-end border-b border-ink/15 hover:border-gold pb-px"
          >
            Get Directions →
          </a>
        </div>
      </div>

      {/*
        Replace the src with the actual embed URL from:
        Google Maps → Share → Embed a map → copy the src value.
        Note: if CSP headers are configured in next.config.js,
        add https://www.google.com/maps to frame-src / child-src.
      */}
      <div className="bg-linen px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2siWoodz+Creation!5e0!3m2!1sen!2sgh!4v0000000000"
            width="100%"
            height="480"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="iWoodz Creation Showroom Location"
          />
        </div>
      </div>
    </section>
  );
}
