import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import Field from '../../custom/FieldAdd'
import Loader from '../Loader'

const ProductAdd = () => {

  const [data,setData]= useState(
    {
      title:"",
      descirptions:"",
      price:0,
      quantity:0,
      category_id:"",
      validation_error:[]
    }
  );

  const [url,setUrl]= useState({
    url:""
  });

  const [categories,setCategories]= useState([]);
  const [loader,setLoder]= useState(true);

  useEffect(() => {
    async function get(){

      await axios.get("/api/admin/product/create").then((res)=>{
        
          if(res.data.status==200){
            setCategories(res.data.category);

          }
          setLoder(false);

      });

    }

    get();

    return () => {
      setCategories({
        category: []
      });
    };
  }, []);


  const onChangeHandler = (e) =>{
    setData( {...data,
      [e.target.name]:e.target.value
    }
    );
  }

  const fileUpload = (e) =>{
    setUrl({
      url:e.target.files[0]
    });


  }

  async function onSubmit(e){

    e.preventDefault();
    console.log(url);
  
    const formData = new FormData();
    // formData.append("banner", file.baner);
    formData.append("title", data.title);
    formData.append("path", url.url);
    formData.append("descirptions", data.descirptions);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("details", data.details);
    formData.append("category_id", data.category_id);

    // const formData={
    //   "title":data.title,
    //   "url":urls.url,
    //   "descirptions":data.descirptions,
    //   "price":data.price,
    //   "quantity":data.quantity,
    //   "details":data.details,
    //   "category_id":data.category_id,
    // }
    // console.log(formData);



    const csrf = await axios.get('/sanctum/csrf-cookie');


    await axios.post("api/admin/product", formData).then(res => {
      if (res.data.status == 200) {
        // console.log(res.data);
        new Swal({
          title: "Ürün oluşturuldu",
          icon: "success",
          button: "Tamam",
        });

        setData( {
          title:"",
          descirptions:"",
          price:0,
          quantity:0,
          category_id:"",
          validation_error:[]
        })

        document.getElementById("descirptions").value="";
        document.getElementById("file").value="";
        document.getElementById("category_id").selectedIndex=0;
        // document.getElementById("category_id");
        // navigate('/');
      }
      else
      {
        setData({
          ...data,
          ['validation_error']: res.data.validation_error,
        })

      }
    })


  }



  return (

    <>
  
    <div className="row g-4 settings-section">
      <div className="col-12 col-md-4">
        <h3 className="section-title">Ürün Ekle</h3>
        <div className="section-intro">Mağazaya ürün eklemek için bu formu kullanabilirsiniz.</div>
      </div>
      {loader ? 
      <Loader/>
      :
      <div className="col-12 col-md-8">
      <form className="settings-form" onSubmit={onSubmit} encType="multipart/form-data" method="post" >
        <div className="app-card app-card-settings shadow-sm p-4">
          <div className="app-card-body">
            

               <div className="mb-3">
                <label htmlFor="setting-input-2"  className="form-label">Ürün Başlığı</label>
                <input type="text" onChange={onChangeHandler} className="form-control" name="title" id="setting-input-2" value={data.title}  required />
              </div>


              <div className="mb-3">
                <label htmlFor="setting-input-1" className="form-label">Ürün Açıklama</label>
                <textarea style={{height:'100px'}} className="form-control" onChange={onChangeHandler} name="descirptions" id="descirptions"  required>{data.descirptions}</textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="setting-input-2"  className="form-label">Ürün Fiyatı</label>
                <input type="number"  onChange={onChangeHandler} className="form-control" name="price" id="setting-input-2" value={data.price}  required />
              </div>

              
              <div className="mb-3">
                <label htmlFor="setting-input-2"  className="form-label">Stok Adedi</label>
                <input type="number"  onChange={onChangeHandler} className="form-control" name="quantity" id="setting-input-2" value={data.quantity}  required />
              </div>

              <div className="mb-3">
                <label htmlFor="setting-input-3"className="form-label">Ürün Fotoğrafları</label>
                <input type="file"  name="url" accept="image/*" onChange={fileUpload} className="form-control" id="file"/>
              </div>

              <div className="mb-3">
                <label htmlFor="setting-input-2"  className="form-label">Kategori</label>
                <select className="form-select" onChange={onChangeHandler}  name="category_id" id="category_id">
                <option >Lütfen Seçim yapın</option>
                  {
                    categories.map((category,index) =>{
                      return (
                        <>
                        <option  name="category_id" key={index} value={category.id}>{category.title}</option>
                        </>
                      )
                    })

                  }

                </select>
              </div>
              

        
              <div className="mb-3">
              <button type="submit" className="btn app-btn-primary">Ürün Ekle</button>
              </div>

          </div>{/*//app-card-body*/}
        </div>{/*//app-card*/}
      </form>
        
    </div>
      }

</div>

    </>

  )
}

export default ProductAdd