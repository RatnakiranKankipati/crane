export function KeyMetricsSection() {
  const metrics = [
    { value: "3-4", label: "Months Development" },
    { value: "90%", label: "Time Savings" },
    { value: "100%", label: "IS Standards Compliance" },
    { value: "0", label: "Manual Calculation Errors" },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid={`metric-value-${index}`}>
                {metric.value}
              </div>
              <p className="text-muted-foreground" data-testid={`metric-label-${index}`}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
