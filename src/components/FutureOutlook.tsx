import React, { useEffect, useRef } from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const FutureOutlook = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Projected data from 2024 to 2035, with FDA approval milestone in 2032
  const data = [
    { year: 2024, cases: 100, deaths: 100, label: "Development + Preclinical Research" },
    { year: 2025, cases: 106, deaths: 97, label: "Development + Preclinical Research" },
    { year: 2026, cases: 112, deaths: 95, label: "Development + Preclinical Research" },
    { year: 2027, cases: 120, deaths: 93, label: "Clinical Validation Trials" },
    { year: 2028, cases: 128, deaths: 91, label: "Clinical Validation Trials" },
    { year: 2029, cases: 135, deaths: 89, label: "FDA Submission and Review" },
    { year: 2030, cases: 140, deaths: 87, label: "FDA Submission and Review" },
    { year: 2031, cases: 155, deaths: 80, label: "FDA Approval" },
    { year: 2032, cases: 170, deaths: 70, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2033, cases: 180, deaths: 65, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2034, cases: 182, deaths: 66, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2035, cases: 185, deaths: 64, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2036, cases: 190, deaths: 62, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2037, cases: 192, deaths: 63, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2038, cases: 200, deaths: 60, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2039, cases: 202, deaths: 61, label: "Post-Market Surveillance (Ongoing)" },
    { year: 2040, cases: 210, deaths: 58, label: "Post-Market Surveillance (Ongoing)" },
  ];

  const chartConfig = {
    cases: {
      label: "Cancer Cases Detected",
      theme: {
        light: "#0f172a", // foresight-navy
        dark: "#0f172a",
      },
    },
    deaths: {
      label: "Cancer Deaths",
      theme: {
        light: "#0d9488", // foresight-teal
        dark: "#0d9488",
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="future-outlook" ref={sectionRef} className="py-24 bg-gradient-to-b from-foresight-light to-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="heading-lg text-gradient mb-6">The Future of Cancer Detection</h2>
          <p className="text-lg text-gray-700">
            Based on our research and development roadmap, we project a transformative shift in cancer outcomes 
            following FDA approval in 2032. This synthetic projection illustrates the potential impact of 
            widespread adoption of ForeSight's early detection technology.
          </p>
          <p className="text-sm text-gray-500 mt-4 italic">
            Note: All data shown is synthetic and for illustrative purposes only, representing a potential future 
            scenario based on current research trends and clinical validation pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-foresight-navy mb-6">Projected Impact (2024-2035)</h3>
              <div className="h-[400px]">
                <ChartContainer config={chartConfig}>
                  <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#6b7280"
                      tick={{ fill: '#6b7280' }}
                    />
                    <YAxis 
                      stroke="#6b7280"
                      tick={{ fill: '#6b7280' }}
                      label={{ 
                        value: 'Relative Rate (%)', 
                        angle: -90, 
                        position: 'insideLeft',
                        style: { fill: '#6b7280' }
                      }}
                    />
                    <ReferenceLine 
                      x={2032} 
                      stroke="#ef4444" 
                      strokeDasharray="3 3" 
                      label={{ 
                        value: 'FDA Approval', 
                        position: 'top',
                        fill: '#ef4444',
                        fontSize: 12
                      }} 
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent
                          labelFormatter={(value) => {
                            const dataPoint = data.find(d => d.year === value);
                            return `${dataPoint?.label || `Year ${value}`}`;
                          }}
                        />
                      }
                    />
                    <Line
                      type="monotone"
                      dataKey="cases"
                      stroke="var(--color-cases)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="deaths"
                      stroke="var(--color-deaths)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <ChartLegend
                      content={
                        <ChartLegendContent
                          verticalAlign="bottom"
                        />
                      }
                    />
                  </LineChart>
                </ChartContainer>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-foresight-navy mb-4">Development Timeline</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-foresight-navy/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-foresight-navy"></div>
                  </div>
                  <p>2024-2028: Clinical validation using All of Us database and development of AI models for cancer-specific retinal phenotypes.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-foresight-teal/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-foresight-teal"></div>
                  </div>
                  <p>2029-2031: FDA review process and final clinical trials demonstrating efficacy in early cancer detection.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-foresight-gold/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-foresight-gold"></div>
                  </div>
                  <p>2032: FDA approval and initial deployment in major healthcare networks.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-foresight-navy mb-4">A Vision for 2035</h3>
              <p className="text-gray-700 mb-4">
                By 2035, we envision a world where routine eye exams serve as a first line of defense against cancer. 
                With ForeSight technology integrated into standard healthcare practices, we can transform cancer from 
                a late-stage diagnosis to an early-detected, manageable condition.
              </p>
              <p className="text-gray-700">
                The projected increase in detection rates reflects our ability to identify cancers earlier, 
                while the significant decrease in mortality rates demonstrates the impact of early intervention. 
                This shift will not only save lives but also reduce the emotional and financial burden on 
                patients and healthcare systems worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureOutlook; 