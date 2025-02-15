
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

// Sample data - in a real app this would come from parsed medical reports
const data = [
  { date: "Jan", bloodSugar: 95, cholesterol: 180, bloodPressure: 120 },
  { date: "Feb", bloodSugar: 105, cholesterol: 175, bloodPressure: 118 },
  { date: "Mar", bloodSugar: 90, cholesterol: 190, bloodPressure: 122 },
  { date: "Apr", bloodSugar: 100, cholesterol: 185, bloodPressure: 119 },
  { date: "May", bloodSugar: 98, cholesterol: 178, bloodPressure: 121 },
];

const config = {
  bloodSugar: {
    label: "Blood Sugar",
    theme: {
      light: "#4ECCA3",
      dark: "#4ECCA3",
    },
  },
  cholesterol: {
    label: "Cholesterol",
    theme: {
      light: "#6C63FF",
      dark: "#6C63FF",
    },
  },
  bloodPressure: {
    label: "Blood Pressure",
    theme: {
      light: "#9b87f5",
      dark: "#9b87f5",
    },
  },
};

export const MedicalMetrics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Blood Sugar</h3>
          <div className="text-3xl font-bold text-success">98 mg/dL</div>
          <p className="text-sm text-muted-foreground mt-1">Last reading</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Cholesterol</h3>
          <div className="text-3xl font-bold text-highlight">178 mg/dL</div>
          <p className="text-sm text-muted-foreground mt-1">Last reading</p>
        </div>
        <div className="glass-card p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Blood Pressure</h3>
          <div className="text-3xl font-bold" style={{ color: "#9b87f5" }}>121/80</div>
          <p className="text-sm text-muted-foreground mt-1">Last reading</p>
        </div>
      </div>

      <div className="glass-card p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Health Metrics Trends</h3>
        <div className="h-[300px]">
          <ChartContainer config={config}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="bloodSugar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ECCA3" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4ECCA3" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="cholesterol" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6C63FF" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="bloodPressure" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                stroke="#8E9196"
                tickLine={false}
              />
              <YAxis 
                stroke="#8E9196"
                tickLine={false}
              />
              <CartesianGrid 
                strokeDasharray="3 3"
                vertical={false}
                stroke="#333333"
              />
              <ChartTooltip />
              <Area
                type="monotone"
                dataKey="bloodSugar"
                stroke="#4ECCA3"
                fillOpacity={1}
                fill="url(#bloodSugar)"
              />
              <Area
                type="monotone"
                dataKey="cholesterol"
                stroke="#6C63FF"
                fillOpacity={1}
                fill="url(#cholesterol)"
              />
              <Area
                type="monotone"
                dataKey="bloodPressure"
                stroke="#9b87f5"
                fillOpacity={1}
                fill="url(#bloodPressure)"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};
