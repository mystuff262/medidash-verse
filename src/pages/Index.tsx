
import { Files, FileText, PieChart, Users } from "lucide-react";
import { UploadZone } from "@/components/UploadZone";
import { StatsCard } from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">Medical Dashboard</h1>
          <p className="text-muted-foreground">
            Upload and manage your medical reports in one place
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Reports"
            value={42}
            icon={Files}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Recent Uploads"
            value={8}
            icon={FileText}
            trend={{ value: 5, isPositive: true }}
          />
          <StatsCard
            title="Categories"
            value={6}
            icon={PieChart}
          />
          <StatsCard
            title="Shared With"
            value={3}
            icon={Users}
            trend={{ value: 2, isPositive: true }}
          />
        </div>

        <section className="animate-slideUp">
          <UploadZone />
        </section>

        <section className="glass-card rounded-lg p-6 animate-slideUp">
          <h2 className="text-2xl font-semibold mb-6">Recent Reports</h2>
          <div className="text-center text-muted-foreground py-8">
            No reports uploaded yet. Start by uploading your medical documents.
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
