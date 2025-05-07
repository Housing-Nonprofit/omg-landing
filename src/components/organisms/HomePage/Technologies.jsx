import React from "react";
// Logo imports
import mongodbLogo from "../../../assets/logos/mongodb.png";
import postgresqlLogo from "../../../assets/logos/postgresql.png";
import pythonLogo from "../../../assets/logos/python.png";
import flaskLogo from "../../../assets/logos/flask.png";
import djangoLogo from "../../../assets/logos/django.png";
import fastapiLogo from "../../../assets/logos/fastapi.png";
import reactLogo from "../../../assets/logos/react.png";
import vueLogo from "../../../assets/logos/vue.png";
import tailwindLogo from "../../../assets/logos/tailwind.png";
import wordpressLogo from "../../../assets/logos/wordpress.png";
import dockerLogo from "../../../assets/logos/docker.png";
import digitaloceanLogo from "../../../assets/logos/digitalocean.png";
import googlecloudLogo from "../../../assets/logos/googlecloud.png";

// Card grouping multiple technologies with title and border
function GroupCard({ title, items }) {
  return (
    <div className="border-2 border-gray-200 rounded-2xl p-6 relative mb-5 md:mb-0">
      {/* Title centered with border lines */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
        <h2 className="text-base font-normal text-secondary">{title}</h2>
      </div>
      {/* Content icons grid */}
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            <img
              src={item.logoSrc}
              alt={`${item.name} logo`}
              className="w-10 h-10 md:w-12 md:h-12 object-contain mb-2"
            />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Grouped technologies by category (reordered: Database first, then Back-end, Front-end, Cloud)
const technologyGroups = [
  {
    id: "database",
    title: "Database",
    items: [
      { id: "mongodb", name: "MongoDB", logoSrc: mongodbLogo },
      { id: "postgresql", name: "PostgreSQL", logoSrc: postgresqlLogo }
    ]
  },
  {
    id: "backend",
    title: "Back-end",
    items: [
      { id: "python", name: "Python", logoSrc: pythonLogo },
      { id: "flask", name: "Flask", logoSrc: flaskLogo },
      { id: "django", name: "Django", logoSrc: djangoLogo },
      { id: "fastapi", name: "FastAPI", logoSrc: fastapiLogo }
    ]
  },
  {
    id: "frontend",
    title: "Front-end",
    items: [
      { id: "react", name: "React", logoSrc: reactLogo },
      { id: "vue", name: "Vue", logoSrc: vueLogo },
      { id: "tailwind", name: "Tailwind CSS", logoSrc: tailwindLogo },
      { id: "wordpress", name: "WordPress", logoSrc: wordpressLogo }
    ]
  },
  {
    id: "cloud",
    title: "Cloud",
    items: [
      { id: "docker", name: "Docker", logoSrc: dockerLogo },
      { id: "digitalocean", name: "DigitalOcean", logoSrc: digitaloceanLogo },
      { id: "googlecloud", name: "Google Cloud", logoSrc: googlecloudLogo }
    ]
  }
];

export default function TechnologiesSection() {
  // Chunk into rows of two groups
  const rows = [];
  for (let i = 0; i < technologyGroups.length; i += 2) {
    rows.push(technologyGroups.slice(i, i + 2));
  }

  return (
    <section
      className="py-12 px-4 w-full md:max-w-7xl mx-auto"
      id="technologies"
    >
      <div className="text-center mb-5" id="tech-title">
        <h2 className="text-4xl/18 portrait:text-3xl/16 font-bold text-center">
          Our Technologies
        </h2>
        <p className="text-base text-gray-600 mx-auto text-center pb-5 mb-10">
            We rely on a wide array of modern technologies to build reliable, maintainable applications.
        </p>
      </div>
      {/* Rows: single column on small, dynamic two-column grid on md+ */}
      {rows.map((row, rowIndex) => {
        // Build grid template for md+: ratio of items
        const templateCols =
          row.length > 1
            ? row.map((grp) => `${grp.items.length}fr`).join(" ")
            : "1fr";

        return (
          <div
            key={rowIndex}
            className="mb-0 md:mb-8 md:grid gap-8"
            style={{ gridTemplateColumns: templateCols }}
          >
            {row.map((group) => (
              <GroupCard
                key={group.id}
                title={group.title}
                items={group.items}
              />
            ))}
          </div>
        );
      })}
    </section>
  );
}
