import React,{useEffect, useState} from 'react'
import './productsArea.css'


function ProductsArea() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.log(err));
      console.log(products)
  }, []);

  return (
    <>
      <div className=' text-center'>
          <div className="row ">
            <div className="col-md-12 productsAreadiv">
                      <span className='spanClass'>All Products Shop</span>
               <h3 className='productsAreaHeading'>Customers favourite Style Products .</h3>
            </div>
          </div>

          <div className="row innerRow justify-content-center m-3 ">
          {products.map(product => (
            <div className="col-3 border product_item m-2" style={{width:'23%'}} key={product.id}>
                 <div className="product_item_details bg-light ">
             <div className="product_item_img">
             <img src={product.image} alt={product.title} />
             </div>
             <div className="product_item_det_div trunketText">                  
             <p>{product.title}</p>
                <h5>${product.price}</h5>
                <button className="cartBtn">Add to Cart</button>
             </div>
              </div>
            </div>
          ))}
        </div>
          </div>

          <div>
           
          
        </div>
 
    </>
  )
}

export default ProductsArea
