import React from "react";
import AboutImg from "../components/About/AboutImg";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <AboutImg />
      <Collapse
        title="Fiabilité"
        content="Site fiable et réactif, jamais de problème. En cas d'annulation, nous procèdons à un remboursement rapide. Grand choix de, avec des photos fidèles.."
      />
      <Collapse
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Collapse
        title="Service"
        content="Notre personnel y est également pour beaucoup. Toujours aux petits soins avec nos clients, vous pourrez compter sur ses précieux conseils "
      />
      <Collapse
        title="Sécurité"
        content=" Kasa s'engage au respect des termes contractuels et des conditions générales de paiement avant, pendant et après le séjour pour l’ensemble des produits et services consommés"
      />
      <Footer />
    </div>
  );
};

export default About;
