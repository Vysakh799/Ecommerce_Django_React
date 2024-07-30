import React,{useState,useEffect} from "react";
import axios from 'axios'

const Home=()=>{
    const [product,setProduct]=useState([])
    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setProduct(response.data))
            .catch(error => console.log(error))
    },[])
    return (
        <div className="container mt-3">
            {product.map(product=>(
                <a href="">
                    {/* <div className="card" style="width:400px">
                        <img className="card-img-top" src={product.image} alt="Card image" style="width:100%" />
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                            <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div> */}
                    <div className="card">
                        <img className="card-img-top" src={product.image} alt="product image" />
                        <div className="card-body">
                            <h4 className="card-little">{product.p_name}</h4>
                            <p></p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}
export default Home