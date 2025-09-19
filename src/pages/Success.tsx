import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="mb-8">
          <div 
            className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-success/20 to-success/10 border border-success/20 flex items-center justify-center transition-all duration-1000 ${
              isAnimationComplete ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <CheckCircle className="w-12 h-12 text-success animate-bounce" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Success!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">
            Your Bitcoin is working for you
          </p>
          
          <p className="text-sm text-muted-foreground">
            Your BTC has been successfully bridged to Starknet and deployed across top DeFi protocols to maximize your yield.
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="card-glow p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-success" />
                <div>
                  <div className="font-semibold">Now Earning</div>
                  <div className="text-sm text-muted-foreground">Automated yield optimization</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-success">6.5%</div>
                <div className="text-sm text-muted-foreground">APY</div>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-sm text-muted-foreground">
              🎉 Welcome to the future of Bitcoin DeFi
            </div>
            <div className="text-xs text-muted-foreground">
              Track your earnings and manage your positions from the dashboard
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={() => navigate("/dashboard")}
            className="w-full btn-hero group"
            size="lg"
          >
            Go to Dashboard
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="w-full btn-ghost-violet"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}