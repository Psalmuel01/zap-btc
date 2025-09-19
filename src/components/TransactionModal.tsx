import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionStep {
  id: string;
  title: string;
  description: string;
  status: "pending" | "processing" | "completed" | "error";
}

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onSuccess?: () => void;
}

export function TransactionModal({ isOpen, onClose, amount, onSuccess }: TransactionModalProps) {
  const [steps, setSteps] = useState<TransactionStep[]>([
    {
      id: "sign",
      title: "Sign with Xverse Wallet",
      description: "Approve the transaction in your wallet",
      status: "pending",
    },
    {
      id: "bridge",
      title: "Bridge BTC to Starknet",
      description: "Converting your BTC to WBTC on Starknet",
      status: "pending",
    },
    {
      id: "deploy",
      title: "Deploy to Yield Strategy",
      description: "Allocating your WBTC across DeFi protocols",
      status: "pending",
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const processSteps = async () => {
      for (let i = 0; i < steps.length; i++) {
        // Set current step to processing
        setSteps(prev => prev.map((step, index) => ({
          ...step,
          status: index === i ? "processing" : index < i ? "completed" : "pending"
        })));
        setCurrentStep(i);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));

        // Set current step to completed
        setSteps(prev => prev.map((step, index) => ({
          ...step,
          status: index <= i ? "completed" : "pending"
        })));
      }

      // All steps completed - wait a moment then call success
      setTimeout(() => {
        onSuccess?.();
      }, 1000);
    };

    processSteps();
  }, [isOpen, onSuccess]);

  const getStepIcon = (status: TransactionStep["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "processing":
        return <Loader2 className="w-5 h-5 text-primary animate-spin" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const allCompleted = steps.every(step => step.status === "completed");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="card-glow max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Processing Transaction
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
            <div className="text-sm text-muted-foreground">Depositing</div>
            <div className="text-xl font-bold">{amount.toFixed(4)} BTC</div>
          </div>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "flex items-start gap-3 p-4 rounded-xl border transition-all",
                  step.status === "completed" && "bg-success/10 border-success/20",
                  step.status === "processing" && "bg-primary/10 border-primary/20 animate-glow",
                  step.status === "pending" && "bg-muted/10 border-border/20"
                )}
              >
                {getStepIcon(step.status)}
                <div className="flex-1">
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
                {step.status === "processing" && (
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>
          
          {allCompleted && (
            <div className="text-center p-4 bg-success/10 rounded-xl border border-success/20">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-2" />
              <div className="font-semibold text-success">Transaction Complete!</div>
              <div className="text-sm text-muted-foreground">
                Your Bitcoin is now earning yield on Starknet
              </div>
            </div>
          )}
          
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full"
            disabled={!allCompleted}
          >
            {allCompleted ? "Close" : "Processing..."}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}