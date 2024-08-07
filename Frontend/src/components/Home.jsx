import React,{useState,useEffect} from "react";
import axios from 'axios'

const Home=()=>{
    const [product,setProduct]=useState([])
    const [add,setAdd]=useState(false)
    const [currentProduct,setCurrentProduct]=useState(null) 
    useEffect(()=>{ 
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setProduct(response.data))
            .catch(error => console.log(error))
    },[])


    const view_p=(products)=>{
        setAdd(true);
        setCurrentProduct(products);
        // console.log(add,currentProduct);
    }
    return (
        <div className="container mt-3">
          {/* {() => editTask(task)} */}
            <div className="row" id="a1">
            {product.map(pro=>(
                <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id} >
                    <div className="card" onClick={()=>view_p(pro)}>
                        <img className="card-img-top img-fluid" src={pro.image} alt="product image" />
                        <div className="card-body">
                            <h4 className="card-little">{pro.p_name}</h4>
                            <h6 className="card-text">₹{pro.price}</h6>
                        </div>
                    </div>
                </div>
            ))}
          
            </div>
            {add ?(
                <ViewProduct
                currentproduct={currentProduct}
                />
            ):console.log('view product     ')}
        </div>
    )
 
}



const ViewProduct=(currentproducts)=>{
    const [product,setProduct]=useState(currentproducts)
    document.getElementById("a1").style.display="none"
    return (
        <div className="container">
        <div className="row g-4">
            <div className="col-lg-6 d-flex justify-content-center">
            <img src={product.currentproduct.image} alt="" className="img-fluid col-lg-12 w-75 "/>
            </div>
            <div className="desc col-lg-6">
                <h2>{product.currentproduct.p_name}</h2>
                <p>{product.currentproduct.description}</p>
                {/* console.log(product.currentProduct); */}
                <p>₹{product.currentproduct.price}</p>
                <div className="row">
                <button className="btn btn-warning col-lg-10">Add to cart</button>
                <button className="btn btn-success col-lg-10 mt-1">Buy now</button>
                </div>
                
            </div>
        </div>
        </div>
    )
}
export default Home