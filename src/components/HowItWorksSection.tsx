import { Wallet, ArrowRightLeft, TrendingUp } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Link your Xverse Bitcoin wallet to get started with secure access to your BTC.",
    },
    {
      icon: ArrowRightLeft,
      title: "Shuttle BTC → Starknet",
      description: "Our bridge automatically converts your BTC to WBTC on Starknet in one seamless transaction.",
    },
    {
      icon: TrendingUp,
      title: "Earn Yield Automatically",
      description: "Your WBTC is deployed across top DeFi protocols to maximize yield while maintaining security.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Steps to <span className="text-gradient">Bitcoin Yield</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your idle Bitcoin into productive yield-earning assets with our streamlined process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-0" />
                )}
                
                <div className="card-glow p-8 text-center relative z-10 hover:shadow-primary/10 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}