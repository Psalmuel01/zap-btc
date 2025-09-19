import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowUpRight, Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const mockData = [
  { time: "Jan", value: 0.2184 },
  { time: "Feb", value: 0.2205 },
  { time: "Mar", value: 0.2189 },
  { time: "Apr", value: 0.2234 },
  { time: "May", value: 0.2267 },
  { time: "Jun", value: 0.2298 },
];

interface PortfolioCardProps {
  wbtcBalance?: number;
  apy?: number;
  totalEarned?: number;
}

export function PortfolioCard({ 
  wbtcBalance = 0.2184, 
  apy = 6.5,
  totalEarned = 0.0114 
}: PortfolioCardProps) {
  const usdValue = wbtcBalance * 45000; // Mock BTC price

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Portfolio Overview */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success" />
            Your Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-bold">{wbtcBalance.toFixed(4)} WBTC</div>
              <div className="text-lg text-muted-foreground">
                ≈ ${usdValue.toLocaleString()}
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
              <div>
                <div className="text-sm text-muted-foreground">Current APY</div>
                <div className="text-xl font-semibold text-success">{apy}%</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-success" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total earned</span>
                <span className="font-medium text-success">+{totalEarned.toFixed(4)} WBTC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">USD value</span>
                <span className="font-medium text-success">+${(totalEarned * 45000).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full btn-ghost-violet">
            <Download className="w-4 h-4 mr-2" />
            Withdraw WBTC
          </Button>
        </CardContent>
      </Card>
      
      {/* Earnings Chart */}
      <Card className="card-glow">
        <CardHeader>
          <CardTitle>Earnings Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  domain={['dataMin - 0.001', 'dataMax + 0.001']}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 text-center">
            <div className="text-sm text-muted-foreground">
              Steady growth with automated yield optimization
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}