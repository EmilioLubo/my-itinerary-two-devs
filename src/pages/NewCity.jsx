import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiUrl from "../url";

export const NewCity = () => {
    let [selectDefault, setSelectDefault] = useState("");
    let navigate = useNavigate();

    let submit = (e) => {
        e.preventDefault();
        let photo = e.target.photo.value || "/img/no-image.png";
        let newCity = {
            name: e.target.name.value,
            continent: e.target.continent.value,
            photo: photo,
            population: e.target.population.value,
            userId: "636d210297606439046194bb",
        };
        axios
            .post(`${apiUrl}/cities`, newCity)
            .then((res) => {
                console.log(res.data);
                navigate("/cities");
            })
            .catch((err) => console.log(err.message));
    };
    let handleSelect = (e) => {
        setSelectDefault(e.target.value);
    };

    return (
        <div className="w-100 h-75 flex f-column g-3 new-div  form-log">
            <h1 className="text-center">New City</h1>
            <form className="new-form flex f-column g-1  fs-3 fw" onSubmit={submit}>
                <label className="inputs flex f-column">
                    <legend>City name</legend>
                    <input className="fs-2" type="text" name="name" placeholder="Enter city name..." required />
                </label>
                <label className="inputs flex f-column">
                    <legend>Choose continent</legend>
                    <select className="fs-2" name="continent" value={selectDefault} onChange={handleSelect} required>
                        <option disabled value={""}>
                            Select a continent
                        </option>
                        <option value="Africa">Africa</option>
                        <option value="Antartica">Antartica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </label>
                <label className="inputs flex f-column">
                    <legend>Population</legend>
                    <input className="fs-2" type="number" name="population" min={1} placeholder="Enter city population..." required />
                </label>
                <label className="inputs flex f-column">
                    <legend>Url photo</legend>
                    <input className="fs-2" type="url" name="photo" placeholder="Enter city URL image" />
                </label>
                <div className="new-buttons flex j-evenly">
                    <input className="w-50 fs-2 btn" type="reset" value="Clear Form" />
                    <input className="w-50 fs-2 btn" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};
