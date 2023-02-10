import React, {  useState } from 'react';


const Collapse = ({title, description}) => {
    
        /* Crée un Hook d'état */
        const [open, setOpen] = useState(false);
    
        return(
            <div className="collapse" id={`collapse-${title}`}>
                <div className="main-collapse">
                    <div className="title-collapse">{title}</div>
                    <p className={`fleche-collapse ${open}`} onClick={() => setOpen(!open)}>
                        <img src="./Vector.png" alt="menu déroulant"/>
                    </p>
                </div>
                {
                    /* Si le dropdown est à TRUE alors il affichera la description */
                    open && <div className="description-collapse">{description}</div>
                }
            </div>
        );
    }


export default Collapse;