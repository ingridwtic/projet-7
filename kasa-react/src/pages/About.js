import React from "react";
import BannerAbout from "../components/About/BannerAbout";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div>
      <BannerAbout />
      <section className="about-container">
        <Collapse
          title="Fiabilité"
          children="Site fiable et réactif, jamais de problème. En cas d'annulation, nous procèdons à un remboursement rapide. Grand choix de, avec des photos fidèles.."
        />
        <Collapse
          title="Respect"
          children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          children="Notre personnel y est également pour beaucoup. Toujours aux petits soins avec nos clients, vous pourrez compter sur ses précieux conseils "
        />
        <Collapse
          title="Sécurité"
          children=" Kasa s'engage au respect des termes contractuels et des conditions générales de paiement avant, pendant et après le séjour pour l’ensemble des produits et services consommés"
        />
      </section>
    </div>
  );
};

export default About;
