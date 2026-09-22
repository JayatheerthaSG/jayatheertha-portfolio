export default function Architecture({ steps }) {
  return (
    <div className="architecture" aria-label="Project architecture">
      {steps.map((step, index) => (
        <div className="arch-step" key={step}>
          <div className="arch-index">{String(index + 1).padStart(2, "0")}</div>
          <div className="arch-label">{step}</div>
          {index < steps.length - 1 && <div className="arch-arrow">→</div>}
        </div>
      ))}
    </div>
  );
}