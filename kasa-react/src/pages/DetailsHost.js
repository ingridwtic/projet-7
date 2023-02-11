import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tags from "../components/DetailsHost/Tags";
import Collapse from "../components/Collapse";
import FicheDetails from "../components/DetailsHost/FicheDetails";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rating from "../components/DetailsHost/Rating";
import Server from "../components/DetailsHost/Server";

const DetailsHost = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      await fetch("../kasa.json")
        .then((res) => res.json())
        .then((res2) => {
          const detailsFound = res2.find((e) => e.id === id);
          setData(detailsFound);
        })
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [id]);

  const { title, location, rating, host, equipments, description, pictures } =
    data;
  console.log(data.rating);
  return (
    <>
      <Header />
      <FicheDetails slides={pictures} />

      <div className="detailsHost">
        <div className="detailsHost__content">
          <div className="detailsHost__informations">
            <h1 className="detailsHost__title"> {title}</h1>
            <p className="detailsHost__location">{location}</p>
            <div className="detailsHost__tags">
              {data.tags != undefined &&
                data.tags.map((tag, index) => (
                  <Tags key={index} getTag={tag} />
                ))}
            </div>
          </div>
          <div className="detailsHost__rating-and-host">
            <Rating rating={rating} />
            {host != undefined && <Server host={host} />}
          </div>
        </div>
        <div className="detailsHost__dropdowns">
          <div className="detailsHost__dropdowns">
            <Collapse title="description" content={description} />
            <Collapse title="équipement" content={equipments} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailsHost;
