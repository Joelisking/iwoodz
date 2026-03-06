export function AnnouncementBar() {
  return (
    <div className="h-9 bg-ink flex items-center justify-center px-4">
      <p className="text-xs text-white tracking-widest">
        MARCH OPEN DAY : ACCRA.{" "}
        <a
          href="/contact"
          className="underline underline-offset-2 hover:text-gold transition-colors"
        >
          book now
        </a>
      </p>
    </div>
  );
}
