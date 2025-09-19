import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Bitcoin, ArrowRight, Zap } from "lucide-react";

interface DepositCardProps {
  maxBalance?: number;
  onDeposit?: (amount: number) => void;
}

export function DepositCard({ maxBalance = 0.5432, onDeposit }: DepositCardProps) {
  const [amount, setAmount] = useState([0.1]);
  const [inputValue, setInputValue] = useState("0.1");

  const handleSliderChange = (value: number[]) => {
    setAmount(value);
    setInputValue(value[0].toString());
  };

  const handleInputChange = (value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue <= maxBalance) {
      setAmount([numValue]);
      setInputValue(value);
    }
  };

  const handleMaxClick = () => {
    setAmount([maxBalance]);
    setInputValue(maxBalance.toString());
  };

  const handleDeposit = () => {
    onDeposit?.(amount[0]);
  };

  return (
    <Card className="card-glow card-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Zap className="w-6 h-6 text-primary" />
          One-Click Shuttle
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Amount to deposit</label>
            <div className="text-sm text-muted-foreground">
              Balance: {maxBalance} BTC
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="number"
                  value={inputValue}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="bg-background/50 border-primary/20 pr-20"
                  placeholder="0.0"
                  step="0.0001"
                  min="0"
                  max={maxBalance}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <Bitcoin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">BTC</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={handleMaxClick}
                className="btn-ghost-violet"
              >
                MAX
              </Button>
            </div>
            
            <Slider
              value={amount}
              onValueChange={handleSliderChange}
              max={maxBalance}
              min={0}
              step={0.0001}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-3 p-4 bg-background/30 rounded-xl border border-primary/10">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Estimated yield</span>
            <span className="font-medium text-success">6.5% APY</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Bridge fee</span>
            <span className="font-medium">~$2.50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">You'll receive</span>
            <span className="font-medium">{amount[0].toFixed(4)} WBTC</span>
          </div>
        </div>
        
        <Button 
          onClick={handleDeposit}
          disabled={amount[0] === 0}
          className="w-full btn-hero group"
          size="lg"
        >
          Deposit & Earn
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          Your Bitcoin will be bridged to Starknet and deployed across multiple yield strategies for maximum returns.
        </p>
      </CardContent>
    </Card>
  );
}