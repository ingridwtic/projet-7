import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tags from "../components/DetailsHost/Tags";
import Collapse from "../components/Collapse";
import Rating from "../components/DetailsHost/Rating";
import Author from "../components/DetailsHost/Author";
import Slider from "../components/DetailsHost/Slider";

const Details = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      await fetch("../kasa.json")
        .then((res) => res.json())
        .then((datas) => {
          const detailsFound = datas.find((data) => data.id === id);
          setData(detailsFound);
          if (detailsFound === undefined) Navigate("/error");
        })
        .catch(() => Navigate("/error"));
    }
    fetchData();
  }, [id, Navigate]);

  const { title, location, rating, host, equipments, description, pictures } =
    data;

  return (
    <>
      {pictures && <Slider slides={pictures} />}

      <div className="details">
        <div className="details__content">
          <div className="details__informations">
            <h1 className="details__title"> {title}</h1>
            <p className="details__location">{location}</p>
            <div className="details__tags">
              {data.tags !== undefined &&
                data.tags.map((tag, index) => (
                  <Tags key={index} getTag={tag} />
                ))}
            </div>
          </div>
          <div className="details__host">
            {host !== undefined && <Author host={host} />}
            <Rating rating={rating} />
          </div>
        </div>
        <div className="details__dropdowns">
          <Collapse title="Description" children={description} />
          <Collapse title="Équipements">
            {equipments &&
              equipments.map((value, index) => (
                <p className="details__dropdowns__equipments" key={index}>
                  {value}
                </p>
              ))}
          </Collapse>
        </div>
      </div>
    </>
  );
};
export default Details;
