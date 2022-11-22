import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../url";
import Carduser from "../components/CardUser";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom'


export default function MyShows() {
    let [show, setShow] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        axios
            .get(`${apiUrl}/shows?userID=636d210297606439046194ba`)
            .then((res) => setShow(res.data.response))
            .catch((err) => err.message);
    }, []);

let erase = (e)=>{
    let id = e.target.value
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
        swal("!has been deleted!", {
            icon: "success",
        });
        axios
            .delete(`${apiUrl}/shows/${id}`)
            .then((res) => setShow(res.data.response))
            .catch((err) => err.message);
        } else {
        swal("Your show is safe!");
        }
        navigate('/myshows')
    });
}


    return (
        <div className="w-100 min-h flex j-evenly wrap g-5 p-5 bg-hotel">
            <div className="w-100">
                <h1 className="text-center">My shows</h1>
            </div>
            {show.length > 0 ? show.map((item) => <Carduser show={true} name={item.name}  erase={erase} photo={item.photo} key={item._id} id={item._id} date={item.date.slice(0,10) } description={item.description} price={item.price.toFixed(2)} />) : <h2 className="min-h-50">Hotels not found</h2>}
        </div>
    );
}
