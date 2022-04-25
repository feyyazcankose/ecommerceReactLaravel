import React, { useEffect, useState } from 'react'
import SingleProduct from '../product/SingleProduct'
import axios from 'axios'
const Trend = () => {

  const [product, setproduct] = useState([]);
  const [basket, setbasket] = useState([]);

  useEffect(() => {

    async function get(){
      await axios.get("api/products").then((res)=>{
          if(res.status === 200){

              setproduct(res.data.products);

          }
      });


    
    }
    get();

    return () => {
      setproduct([]);
    };
  }, []);

  async function addBasket(e){

      const formData = new FormData();
      formData.append("product_id", e.target.value);
      await axios.post("/api/basket",formData).then((res)=>{

          if(res.status ===200)
          { 


          }

      });



  }


  async function getBasket(){
    await axios.get("/api/basket").then((res)=>{

      if(res.status ===200)
      { 
        setbasket(res.data.basket);
      }

  });
  }

  return (
    <section className="trending-product section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Ürünlerimiz</h2>
                    </div>
                </div>
            </div>
            <div className="row">

                {
                    product.map((product) =>{
                      return (
                        <div className="col-lg-3 col-md-6 col-12">
                        <SingleProduct  product={product} addBasket={addBasket} />
                      </div>
                      )
                    })



                }
               
              </div>
        </div>
    </section>
  )
}

export default Trend