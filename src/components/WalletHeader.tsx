import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bitcoin, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface WalletHeaderProps {
  isConnected?: boolean;
  address?: string;
  btcBalance?: number;
  wbtcBalance?: number;
}

export function WalletHeader({ 
  isConnected = false, 
  address = "bc1q...7x9k",
  btcBalance = 0.5432,
  wbtcBalance = 0.2184
}: WalletHeaderProps) {
  const navigate = useNavigate();

  const handleWalletClick = () => {
    if (!isConnected) {
      navigate("/dashboard");
    }
  };
  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Bitcoin className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Bitcoin Yield Shuttle</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {isConnected && (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bitcoin className="w-4 h-4" />
                    <span>BTC: {btcBalance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></span>
                    <span>WBTC: {wbtcBalance}</span>
                  </div>
                </div>
                
                <Badge variant="secondary" className="gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {address}
                </Badge>
              </div>
            )}
            
            <Button className="btn-hero" onClick={handleWalletClick}>
              <Wallet className="w-4 h-4 mr-2" />
              {isConnected ? "Connected" : "Connect Wallet"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}