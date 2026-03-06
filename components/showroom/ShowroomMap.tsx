export function ShowroomMap() {
  return (
    <section>
      {/*
        Replace YOUR_EMBED_URL with the actual embed src from:
        Google Maps → Share → Embed a map → copy the src value.
        Note: if CSP headers are configured in next.config.js, add
        https://www.google.com/maps to the frame-src / child-src directives.
      */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0!2d-0.1870!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2siWoodz+Creation!5e0!3m2!1sen!2sgh!4v0000000000"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="iWoodz Creation Showroom Location"
      />
    </section>
  );
}
