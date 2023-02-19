import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

//Axios est basé sur Promise, ce qui vous permet de profiter des avantages d’async de JavaScript et await pour un code asynchrone plus lisible.
const Logement = () => {
  const [data, setData] = useState([]);

  //le useeffet se joue lorsque le composant est monté, [] c'est le callback, grace à axios
  useEffect(() => {
    axios.get("../kasa.json").then((res) => setData(res.data));
  }, []);

  return (
    <section className="logement">
      {data.map((logement, id) => (
        <Card key={id} logement={logement} />
      ))}
    </section>
  );
};

export default Logement;
