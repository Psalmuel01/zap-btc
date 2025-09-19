export function SponsorsSection() {
  const sponsors = [
    { name: "Starkware", logo: "🔷" },
    { name: "Starknet Foundation", logo: "⭐" },
    { name: "Xverse", logo: "🔮" },
    { name: "Atomiq", logo: "⚛️" },
    { name: "Troves", logo: "💎" },
    { name: "Endur", logo: "🛡️" },
    { name: "Vesu", logo: "🚀" },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Powered by leading DeFi protocols
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-card/50 transition-colors group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">
                {sponsor.logo}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}