import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Form from '../form/Form'
import Loader from '../Loader'
const ProductList = () => {
  const [table, setTable] = useState({
    'items':[],
    'columns':[],
    'rows':[],
  });

  const [loader,setLoder]= useState(true);

  useEffect(() => {
    async function get(){
      await axios.get("api/admin/table/products").then(res => {
        if (res.data.status == 200) {
          setTable(res.data.table);
          setLoder(false);
        }
      })
    }

    get();

    return () => {
      setTable({
        items: [],
        columns: [],
        rows: [],
      });
    };
  }, []);


  async function destroy(e) {
    await axios.delete("/api/admin/product/" + e.target.value).then((res) => {
      if (res.status === 200) {
        new Swal({
          title: "Silme Başarılı",
          icon: "success",
          button: "Tamam",
        });
      }
    });

    await axios.get("api/admin/table/products").then(res => {
      if (res.data.status == 200) {
        setTable(res.data.table);
        setLoder(false);
      }
    })
  }

  return (
  <>
   <div className="col-auto">
      <h1 className="app-page-title mb-4">Ürünler</h1>
    </div>
  {
    loader? 
    <Loader/>
    :

    <div className="tab-content" id="orders-table-tab-content">
    <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
      <div className="app-card app-card-orders-table shadow-sm mb-5">
        <div className="app-card-body">
          <div className="table-responsive">
          <Form colunms={table.columns} rows={table.rows} update="product" destroy={destroy} image="path" items={table.items} />
          </div>
        </div>
      </div>
    </div>
    </div>
  }
  </>
  )
}

export default ProductList