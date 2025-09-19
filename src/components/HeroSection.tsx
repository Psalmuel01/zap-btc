import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    // Simulate wallet connection
    navigate("/dashboard");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-float">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">One-click Bitcoin yield</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Turn Your Bitcoin into{" "}
          <span className="text-gradient">Yield</span>
          <br />
          In One Click.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Seamless bridging from Bitcoin to Starknet DeFi. Put your idle BTC to work and earn yield automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-hero group" onClick={handleConnectWallet}>
            Connect Wallet
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="ghost" size="lg" className="btn-ghost-violet">
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">$2.4B+</div>
            <div className="text-muted-foreground">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">6.5%</div>
            <div className="text-muted-foreground">Average APY</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  );
}