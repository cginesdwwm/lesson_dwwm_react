import { useMemo, useState } from "react";
import Card from "../../components/Common/Card";

const initialBlogs = [
  {
    id: 4,
    titre: "Performance Web : 10 astuces faciles à mesurer",
    texte:
      "Compression d'images, lazy-loading, prefetch, et audit Lighthouse : des gains rapides pour LCP, CLS et TTFB.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    date: "2025-03-22",
  },
  {
    id: 5,
    titre: "RGPD en pratique pour les petites structures",
    texte:
      "Cartographier ses traitements, tenir un registre, et rédiger une politique de confidentialité claire : le minimum viable RGPD.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
    date: "2025-02-13",
  },
  {
    id: 6,
    titre: "DevOps sans douleur : CI/CD en 30 minutes",
    texte:
      "Exemple de pipeline simple avec tests, lint, build et déploiement sur un hébergeur cloud.",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    date: "2025-01-30",
  },
  {
    id: 7,
    titre: "Accessibilité : les erreurs les plus fréquentes",
    texte:
      "Contrastes, navigation clavier, attributs ARIA, médias sous-titrés : check-list pour rendre vos pages inclusives.",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop",
    date: "2024-12-05",
  },
  {
    id: 8,
    titre: "Bases de données : choisir SQL ou NoSQL ?",
    texte:
      "Critères de choix : schéma, scalabilité, transactions, et exemples d'architectures hybrides.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    date: "2024-11-18",
  },
  {
    id: 9,
    titre: "Mobile first : concevoir pour le pouce",
    texte:
      "Grilles, zones atteignables, et micro-interactions : repenser la navigation pour l'usage à une main.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
    date: "2024-10-02",
  },
  {
    id: 10,
    titre: "API : bonnes pratiques de versioning",
    texte:
      "Stratégies de breaking changes, dépréciation, et documentation automatisée avec OpenAPI.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    date: "2024-09-14",
  },
];

export default function Blog() {
  const [blogs] = useState(initialBlogs);
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const years = useMemo(() => {
    const set = new Set(blogs.map((b) => b.date.split("-")[0]));
    return Array.from(set).sort((a, b) => b - a);
  }, [blogs]);

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesQuery = `${b.titre} ${b.texte}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesYear = yearFilter ? b.date.startsWith(yearFilter) : true;
      return matchesQuery && matchesYear;
    });
  }, [blogs, query, yearFilter]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>

      <div className="flex mb-6 space-x-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher..."
          className="border px-3 py-2 rounded flex-1"
        />
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Toutes les années</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
