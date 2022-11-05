import React from "react";

export default function PhotoB(props) {
    let {name,id,photo} = props
    return (
        <>
            <div key={id} className="card flex f-column">
                <img className="img-fit" src={photo} alt={name} />
                <p className="text-center"> {name}</p>
            </div>
        </>
    );
}
