export function KeyMetricsSection() {
  const metrics = [
    { value: "3-4", label: "Months Development", icon: "⏱️" },
    { value: "90%", label: "Time Savings", icon: "⚡" },
    { value: "100%", label: "IS Standards Compliance", icon: "✅" },
    { value: "0", label: "Manual Calculation Errors", icon: "🎯" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 industrial-pattern relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="modern-card p-6 rounded-2xl hover:scale-110 transition-all duration-300">
                <div className="text-3xl mb-3">{metric.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-3" data-testid={`metric-value-${index}`}>
                  {metric.value}
                </div>
                <p className="text-muted-foreground font-medium" data-testid={`metric-label-${index}`}>
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
