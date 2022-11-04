import React from "react";

export default function Photo(props) {
    let {name} = props
    let {id} = props
    let {photo} = props



    return (
        <>
            <div key={id} className="card flex column">
                <img className="img-fit" src={photo} alt={name} />
                <p className="text-center"> {name}</p>
            </div>
        </>
    );
}
