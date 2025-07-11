"use client";

import React, { useState } from 'react';
import { ArtilleryLog } from "@/types/artillery";
import { KeyMetricsSummary } from "./KeyMetricsSummary";
import { ChartsSection } from "./ChartsSection";
import { AdditionalPanels } from "./AdditionalPanels";

interface DashboardProps {
  data: ArtilleryLog;
}

export function Dashboard({ data }: DashboardProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseMove = (index: number | null) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Artillery Performance Dashboard</h1>
          <div className="text-sm text-slate-400">
            Test ID: {data.testId}
          </div>
        </div>
        
        <KeyMetricsSummary data={data} />
        
        <ChartsSection 
          data={data} 
          activeIndex={activeIndex}
          onMouseMove={handleMouseMove}
        />
        <AdditionalPanels data={data} />
      </div>
    </div>
  );
}
