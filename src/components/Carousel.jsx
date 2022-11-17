import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Photo from "./Photo";
import axios from "axios";
import apiUrl from "../url";

export default function Carousel() {
    let [num, setNum] = useState(0);
    let [data, setData] = useState([]);
    let [id, setId] = useState([]);
    let [clean, setClean] = useState(0);
    let [data1, setData1] = useState([]);
    let [data2, setData2] = useState([]);
    let [data3, setData3] = useState([]);

    const dato = async (num) => {
        let res = await axios.get(`${apiUrl}/cities`);
        res = res.data.response;
        let dato = [...res.slice(0, 6)];
        res = res.slice(0, 7);
        res = res[num];
        setData(res);
        setId(dato);
    };

    const dato2 = async (num) => {
        let res = await axios.get(`${apiUrl}/cities`);
        res = res.data.response;
        res = res.slice(6, 13);
        res = res[num];
        setData2(res);
    };
    const dato1 = async (num) => {
        let res = await axios.get(`${apiUrl}/hotels`);
        res = res.data.response;
        res = res.slice(0, 6);
        res = res[num];
        setData1(res);
    };
    const dato3 = async (num) => {
        let res = await axios.get(`${apiUrl}/hotels`);
        res = res.data.response;
        res = res.slice(6, 13);
        res = res[num];
        setData3(res);
    };
    useEffect(() => {
        dato(num);
        dato1(num);
        dato2(num);
        dato3(num);
    }, [num]);
    useEffect(() => {
        let idinterval = setInterval(() => {
            next();
        }, 3000);
        setClean(idinterval);
        return clearInterval(clean);
    }, [id]);
    function next() {
        if (num < id.length - 1) {
            setNum(num + 1);
        } else {
            setNum(0);
        }
        clearInterval(clean);
    }
    function prev() {
        if (num > 0) {
            setNum(num - 1);
        } else {
            setNum(id.length - 1);
        }
        clearInterval(clean);
    }

    return (
        <div className="flex w-100">
            <Arrow dir="<" onClick={prev}></Arrow>
            <div className='carousel'>
                <Photo id={data.id} photo={data.photo} name={data.name}></Photo>
                <Photo id={data1.id} photo={data1.photo} name={data1.name}></Photo>
                <Photo id={data2.id} photo={data2.photo} name={data2.name}></Photo>
                <Photo id={data3.id} photo={data3.photo} name={data3.name}></Photo>
            </div>
            <Arrow dir=">" onClick={next}></Arrow>
        </div>
    );
}