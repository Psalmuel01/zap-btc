import { useState } from "react";
import { WalletHeader } from "@/components/WalletHeader";
import { DepositCard } from "@/components/DepositCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { TransactionModal } from "@/components/TransactionModal";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDeposit = (amount: number) => {
    setDepositAmount(amount);
    setIsTransactionModalOpen(true);
  };

  const handleTransactionSuccess = () => {
    setIsTransactionModalOpen(false);
    toast({
      title: "Success!",
      description: `${depositAmount.toFixed(4)} BTC successfully deposited and earning yield.`,
    });
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-background">
      <WalletHeader isConnected={true} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your Bitcoin yield farming positions and track your earnings.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <DepositCard onDeposit={handleDeposit} />
          </div>
          
          <div className="lg:col-span-2">
            <PortfolioCard />
          </div>
        </div>
      </main>
      
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
        amount={depositAmount}
        onSuccess={handleTransactionSuccess}
      />
    </div>
  );
}