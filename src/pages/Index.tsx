import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Bitcoin Yield Shuttle</h1>
        <p className="text-xl text-muted-foreground mb-8">Loading your DeFi experience...</p>
        <button 
          onClick={() => navigate("/")}
          className="btn-hero px-6 py-3 rounded-xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Index;
