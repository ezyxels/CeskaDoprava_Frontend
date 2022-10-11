export default function SkipToContent() {
  return (
    <a
      href="#main"
      className="fixed top-0 left-[5%] z-[120] hidden translate-y-[-120%] transform-gpu bg-primary px-4 pt-1.5 pb-1 font-semibold text-white opacity-0 outline-none transition duration-200 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:ring-4 focus-visible:ring-primary/70 lg:block"
    >
      Přeskočit na obsah
    </a>
  );
}
