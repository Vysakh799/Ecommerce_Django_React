import React,{useState,useEffect} from "react";
import axios from 'axios'

const Home=()=>{
    const [product,setProduct]=useState([])
    const [view,setView]=useState(false)
    const [currentproduct,setCurrentproduct]=useState([{id:null, p_name:'',image:'',price:'',description:''}]) 
    useEffect(()=>{ 
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setProduct(response.data))
            .catch(error => console.log(error))
    },[])


    const view_p=(product)=>{
        setView(true)
        setCurrentproduct(product)
        console.log(view,currentproduct);
    }
    return (
        <div className="container mt-3">
          
            <div className="row">
            {product.map(product=>(
                <div className="col-lg-3 col-md-3 col-sm-6" key={product.id} >
                    <div className="card" onClick={()=>{view_p(product)}}>
                        <img className="card-img-top img-fluid" src={product.image} alt="product image" />
                        <div className="card-body">
                            <h4 className="card-little">{product.p_name}</h4>
                            <h6 className="card-text">₹{product.price}</h6>
                        </div>
                    </div>
                </div>
            ))}
            {view ?(
                <ViewProduct
                currentproducts={currentproduct}
                />
            ):<Home/>}
            </div>
        </div>
    )
 
}



const ViewProduct=(currentproducts)=>{
    // console.log('current',currentproducts);
    const [product,setProduct]=useState(currentproducts)

    return (
        <div>
            <h2>{product}</h2>
        </div>
    )
}
export default Home