import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Server from '../components/DetailsHost/Server';
import Slider from '../components/DetailsHost/Slider';
import Tag from '../components/DetailsHost/Tag';
import Collapse from '../components/Collapse';
import Rating from '../components/DetailsHost/Rating';



const DetailsHost = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        async function fetch (){
            await fetch ('../kasa.json').then ((res)=>res.json())
            .then((res2)=>{
                const detailsFound = res2.find((e)=> e.id === id);
                setData(detailsFound);
            })
            .catch((error)=>console.error(error));
        }
        fetch();
    },[id])
    console.log(id)
    //const product = kasa.find((product) => product.id === productId);
  //  console.log(product)
    const {title, location, rating, host, equipments, description, pictures} = data;
    console.log(data)
    return (
        <div className='detailsHost'>
            slides && <Slider slides={pictures} />
            <div className='detailsHost__content'>
                <div className='detailsHost__informations'>
                    <h1 className='detailsHost__title'> {title}</h1>
                    <p className='detailsHost__location'>{location}</p>
                    <div className='detailsHost__tags'>
                        {data.tags.map((tag, index) => (
                            <Tag key={index} getTag={tag} />
                        ))}
                    </div>
                </div>
                <div className='detailsHost__rating-and-host'>
                    <Rating rating={rating} />
                    <Server host= {host} />
                </div>
            </div>
            <div className='detailsHost__dropdowns'>
                <Collapse title='description' content={description} />
                <Collapse title='equipement' content={equipments} />
            </div>
            <h1>liste de logement</h1>
        </div>
    );
};

export default DetailsHost;












