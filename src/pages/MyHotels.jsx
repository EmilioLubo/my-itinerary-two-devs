import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../url";
import Carduser from "../components/CardUser";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom'


export default function MyHotels() {
    let [hotel, setHotel] = useState([]);
    let navigate = useNavigate()
    useEffect(() => {
        console.log(hotel);
        axios
            .get(`${apiUrl}/myhotels?userID=636d210297606439046194ba`)
            .then((res) => setHotel(res.data.response))
            .catch((err) => err.message);
    }, []);

let Delete = (e)=>{
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
            .delete(`${apiUrl}/hotels/${id}`)
            .then((res) => setHotel(res.data.response))
            .catch((err) => err.message);
        } else {
        swal("Your hotel is safe!");
        }
        navigate('/myhotels')
    });
}


    return (
        <div className="w-100 min-h flex j-evenly wrap g-5 p-5 bg-hotel">
            <div className="w-100">
                <h1 className="text-center">My hotels</h1>
            </div>
            {hotel.length > 0 ? hotel.map((item) => <Carduser hotel={true} name={item.name}   erase={Delete} photo={item.photo} key={item._id} id={item._id} capacity={item.capacity} />) : <h2 className="min-h-50">Hotels not found</h2>}
        </div>
    );
}
