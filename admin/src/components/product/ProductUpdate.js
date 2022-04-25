import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Field from "../../custom/FieldAdd";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Loader from "../Loader";

const ProductUpdate = () => {
    const [data, setData] = useState({
        title: "",
        descirptions: "",
        price: 0,
        quantity: 0,
        category_id: "",
        validation_error: [],
    });


    const [url,setUrl]= useState({
        url:null
    });

    let {id} = useParams();

    const [categories, setCategories] = useState([]);
    const [productImage, setProductImage] = useState("");
    const [loader, setLoder] = useState(true);

    useEffect(() => {
        async function get() {
            
            
            await axios.get("/api/admin/product/"+id).then((res) => {
                if (res.data.status == 200) {
                    setData({
                        title: res.data.product.title,
                        descirptions: res.data.product.descirptions,
                        price: res.data.product.price,
                        quantity: res.data.product.quantity,
                        category_id: res.data.product.category_id,
                    });

                    setProductImage( res.data.product.path);
                }
                
            });


            await axios.get("/api/admin/product/create").then((res)=>{
                if(res.data.status==200){
                  setCategories(res.data.category);
                }
            });

            console.log(data);

            setLoder(false);
        }

       

        get();

        return () => {
            setCategories({
                category: [],
            });
        };
    }, []);

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const fileUpload = (e) => {
        setUrl({
            url: e.target.files[0],
        });

        if(url.url!=null){
            data.path=url.url;
        }
    };

    async function onSubmit(e) {
        e.preventDefault();

        const csrf = await axios.get("/sanctum/csrf-cookie");
        
        
        console.log(data);
        await axios.put("api/admin/product/"+id, data).then((res) => {
            if (res.data.status == 200) {
                // console.log(res.data);
                new Swal({
                    title: "Ürün Güncellendi",
                    icon: "success",
                    button: "Tamam",
                });
            } else {
                setData({
                    ...data,
                    ["validation_error"]: res.data.validation_error,
                });
            }
        });
    }

    return (
        <>
            <Header />
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <div className="row g-4 settings-section">
                            <div className="col-12 col-md-4">
                                <h3 className="section-title">Ürün Güncelle</h3>
                                <div className="section-intro">
                                    Ürünü güncellemek için bu formu kullanabilirsiniz.
                                </div>
                            </div>
                            {loader ? (
                                <Loader />
                            ) : (
                                <div className="col-12 col-md-8">
                                    <form
                                        className="settings-form"
                                        onSubmit={onSubmit}
                                        encType="multipart/form-data"
                                        method="post"
                                    >
                                        <div className="app-card app-card-settings shadow-sm p-4">
                                            <div className="app-card-body">
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="setting-input-2"
                                                        className="form-label"
                                                    >
                                                        Ürün Başlığı 
                                                    </label>
                                                    <input
                                                        type="text"
                                                        onChange={onChangeHandler}
                                                        className="form-control"
                                                        name="title"
                                                        id="setting-input-2"
                                                        value={data.title}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="setting-input-1"
                                                        className="form-label"
                                                    >
                                                        Ürün Açıklama
                                                    </label>
                                                    <textarea
                                                        style={{ height: "100px" }}
                                                        className="form-control"
                                                        onChange={onChangeHandler}
                                                        name="descirptions"
                                                        id="descirptions"
                                                        required
                                                    >
                                                        {data.descirptions}
                                                    </textarea>
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="setting-input-2"
                                                        className="form-label"
                                                    >
                                                        Ürün Fiyatı
                                                    </label>
                                                    <input
                                                        type="number"
                                                        onChange={onChangeHandler}
                                                        className="form-control"
                                                        name="price"
                                                        id="setting-input-2"
                                                        value={data.price}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="setting-input-2"
                                                        className="form-label"
                                                    >
                                                        Stok Adedi
                                                    </label>
                                                    <input
                                                        type="number"
                                                        onChange={onChangeHandler}
                                                        className="form-control"
                                                        name="quantity"
                                                        id="setting-input-2"
                                                        value={data.quantity}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3 d-flex" style={{flexDirection: 'column',"gap":"10px"}}>
                                                    <label
                                                        htmlFor="setting-input-3"
                                                        className="form-label"
                                                    >
                                                        Ürün Fotoğrafı
                                                    </label>

                                                    <img style={{width: '50%'}} src={"http://127.0.0.1:8000/" + productImage} alt="" />

                                                    <input
                                                        type="file"
                                                        name="url[]"
                                                        accept="image/*"
                                                        onChange={fileUpload}
                                                        className="form-control"
                                                        id="file"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="setting-input-2"
                                                        className="form-label"
                                                    >
                                                        Kategori
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        onChange={onChangeHandler}
                                                        name="category_id"
                                                        id="category_id"
                                                    >
                                                        <option>Lütfen Seçim yapın</option>
                                                        {categories.map((category, index) => {
                                                            return (
                                                                
                                                                <>
                                                                    <option
                                                                        name="category_id"
                                                                        key={index}
                                                                        value={category.id}
                                                                        selected={category.id === data.category_id}
                                                                    >
                                                                        {category.title}
                                                                    </option>
                                                                </>
                                                            );
                                                        })}
                                                    </select>
                                                </div>

                                                <div className="mb-3">
                                                    <button type="submit" className="btn app-btn-primary">
                                                        Ürün Güncelle
                                                    </button>
                                                </div>
                                            </div>
                                            {/*//app-card-body*/}
                                        </div>
                                        {/*//app-card*/}
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductUpdate;
