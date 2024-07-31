import React,{useState,useEffect} from "react";
import axios from 'axios'

const Home=()=>{
    const [product,setProduct]=useState([])
    const [view,setView]=useState(false)
    const [currentproduct,setCurrentproduct]=useState({id:null, p_name:'',image:'',price:'',description:''}) 
    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setProduct(response.data))
            .catch(error => console.log(error))
    },[])


    const view_p=(product)=>{
        setView(true)
        setCurrentproduct(product)
    }
    return (
        <div className="container mt-3">
            <div className="row">
            {product.map(product=>(
                <div className="col-lg-3 col-md-3 col-sm-6" key={product.id} >
                {/* <a className="v_pro d-block "> */}
                    <div className="card">
                        <img className="card-img-top img-fluid" src={product.image} alt="product image" />
                        <div className="card-body">
                            <h4 className="card-little">{product.p_name}</h4>
                            <h6 className="card-text">₹{product.price}</h6>
                            <input type="submit" onClick={console.log(view)}/>
                        </div>
                    </div>
                {/* </a> */}
                </div>
            ))}
            {view ?(
                <ViewProduct
                currentproduct={currentproduct}
                />
            ):null}
            </div>
        </div>
    )
 
}



const ViewProduct=(currentproduct)=>{
    const [product,setProduct]=useState(currentproduct)

    return (
        <div className="conatiner">
            <div className="part1 col-lg-8">
                <img src={product.image} alt="" />
            </div>
        </div>
    )
}
export default Home