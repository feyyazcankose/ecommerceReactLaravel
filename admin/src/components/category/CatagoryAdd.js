import axios from 'axios';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import Field from '../../custom/FieldAdd'

const CatagoryAdd = () => {

  const [data,setData]= useState(
    {
      title:"",
      slug:"",
      validation_error:[]
    }
  );

  const [file,setFile]= useState({
    baner:''
  });

  const [acf,setAcf]= useState(0);

  const onChangeHandler = (e) =>{
    setData( {...data,
      [e.target.name]:e.target.value
    }
    );
  }


 


  const addACF=()=>{
    setAcf(acf+1);
    const parent = document.createElement("DIV");
    parent.classList.add("acf","mt-4");
    parent.setAttribute("id","acf-"+acf);

    document.getElementById("acf").appendChild(parent);

    const field = new Field(parent);
    field.addLabel("Alan Tipi");
    field.addSelect("type[]");

    field.addLabel("Alan Adı");
    field.addInput("title[]");

    field.addLabel("Alan makine adı");
    field.addInput("name[]");

    field.addButton(acf);
  }

 

  const fileUpload = (e) =>{
    // console.log(e.target.files[0]);
    setFile({
      baner:e.target.files[0]
    });
  }

  async function onSubmit(e){

    e.preventDefault();
  
    const formData = new FormData();
    formData.append("banner", file.baner);
    formData.append("title", data.title);
    formData.append("slug", data.slug);

    console.log(formData);



    const csrf = await axios.get('/sanctum/csrf-cookie');

    console.log(file.baner);

    await axios.post("api/admin/category", formData).then(res => {
      if (res.data.status == 200) {
        // console.log(res.data);
        new Swal({
          title: "Kategori oluşturuldu",
          icon: "success",
          button: "Tamam",
      });

        setData( {
          title:"",
          slug:"",
          validation_error:[]
        })

        document.getElementById("baner").value="";
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
      <Helmet>
        <script type="text/javascript">
          {
            `
            function destroy(deneme){
              const element = document.getElementById(deneme);
              element.remove();
            }
            `
          }
        </script>
      </Helmet>

<div className="row g-4 settings-section">
    <div className="col-12 col-md-4">
      <h3 className="section-title">Kategori Oluştur</h3>
      <div className="section-intro">Ürünlerinize kategori bilgisini verebilmeniz için gereklidir.</div>
    </div>
    <div className="col-12 col-md-8">
      <form className="settings-form" onSubmit={onSubmit} encType="multipart/form-data" method="post" >
        <div className="app-card app-card-settings shadow-sm p-4">
          <div className="app-card-body">
              <div className="mb-3">
                <label htmlFor="setting-input-1" className="form-label">Kategori Başlığı<span className="ms-2" data-container="body" data-bs-toggle="popover" data-trigger="hover" data-placement="top" data-content="This is a Bootstrap popover example. You can use popover to provide extra info."><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                      <circle cx={8} cy="4.5" r={1} />
                    </svg></span></label>
                <input type="text" onChange={onChangeHandler}  className="form-control" name="title" id="setting-input-1" value={data.title} required />
              </div>
              <div className="mb-3">
                <label htmlFor="setting-input-2"  className="form-label">Kategori Slug</label>
                <input type="text" onChange={onChangeHandler} className="form-control" name="slug" id="setting-input-2" value={data.slug}  required />
              </div>
              <div className="mb-3">
                <label htmlFor="setting-input-3"className="form-label">Kategori Fotoğrafı</label>
                <input type="file"  name="banner" id="baner" accept="image/*" onChange={fileUpload} className="form-control"   />
              </div>

        


          </div>{/*//app-card-body*/}
        </div>{/*//app-card*/}

        <div className="app-card app-card-settings shadow-sm p-4 mt-3">
          <div className="app-card-body">
                <div className="d-flex justify-content-between">
                <label htmlFor="setting-input-2"  className="form-label">Kategori Özel Alan  </label>
                <button type="button" onClick={addACF} className="btn ml-5 app-btn-primary">Ekle</button>
                </div>
                <div className="acf mt-3" id="acf">
                </div>
              </div>
        </div>
        <div className="app-card app-card-settings shadow-sm p-4 mt-3">
          <div className="app-card-body">
          <button type="submit" className="btn app-btn-primary">Kategori Oluştur</button>
          </div>
        </div>
      </form>
        
    </div>

</div>

    </>

  )
}

export default CatagoryAdd