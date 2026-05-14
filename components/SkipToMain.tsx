export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="pointer-events-none fixed left-4 top-4 z-[200] -translate-y-24 rounded-xl bg-[#D97706] px-4 py-3 text-sm font-semibold text-white opacity-0 shadow-lg outline-none ring-offset-2 ring-offset-[#F8F9FA] transition-all focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
