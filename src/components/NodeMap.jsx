import { useState } from "react";

const nodes = [
  { id: "data", label: "DATA", items: ["SQL", "Power BI", "MySQL", "Data Analysis"], x: 8, y: 46 },
  { id: "analysis", label: "ANALYSIS", items: ["Business Reporting", "Visualization", "Decision Support"], x: 27, y: 20 },
  { id: "systems", label: "SYSTEMS", items: ["Java", "Spring Boot", "Hibernate", "REST APIs"], x: 49, y: 48 },
  { id: "automation", label: "AUTOMATION", items: ["Linux", "Ansible", "Jenkins", "Git"], x: 72, y: 20 },
  { id: "intelligence", label: "INTELLIGENCE", items: ["Python", "YOLOv10", "MobileNetV2", "TensorFlow"], x: 87, y: 57 }
];

export default function NodeMap() {
  const [active, setActive] = useState("systems");
  const selected = nodes.find((n) => n.id === active);

  return (
    <div className="node-map">
      <svg className="map-lines" viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M8 46 C18 46 17 20 27 20 S39 48 49 48 S62 20 72 20 S78 57 87 57" />
      </svg>
      {nodes.map((node) => (
        <button
          key={node.id}
          className={`map-node ${active === node.id ? "active" : ""}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          onMouseEnter={() => setActive(node.id)}
          onFocus={() => setActive(node.id)}
          onClick={() => setActive(node.id)}
        >
          <span className="node-pulse" />
          <span>{node.label}</span>
        </button>
      ))}
      <div className="node-detail">
        <div className="detail-kicker">ACTIVE NODE</div>
        <strong>{selected.label}</strong>
        <div className="detail-items">
          {selected.items.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}