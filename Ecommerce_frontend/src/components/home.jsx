import React,{useState,useEffect} from "react";
import axios from 'axios'

const ProductList=()=>{
    const [product,setProduct]=useState([])

    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setTask(response.data))
            .catch(error => console.log(error))

    },[])
    

}