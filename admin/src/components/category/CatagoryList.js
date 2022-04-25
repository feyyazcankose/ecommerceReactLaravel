import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Form from '../form/Form'
import Loader from '../Loader'

const CatagoryList = () => {
  const [table, setTable] = useState({
    'items':[],
    'columns':[],
    'rows':[],
  });


  const [loader,setLoder]= useState(true);

  async function destroy(e) {
    await axios.delete("/api/admin/category/" + e.target.value).then((res) => {
      if (res.status === 200) {
        new Swal({
          title: "Silme Başarılı",
          icon: "success",
          button: "Tamam",
        });
      }
    });

    await axios.get("api/admin/table/categories").then(res => {
      if (res.data.status == 200) {
        setTable(res.data.table);
        setLoder(false);
      }
    })
  }
  
  useEffect(() => {
    async function get(){
      await axios.get("api/admin/table/categories").then(res => {
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

  return (
  <>
   <div className="col-auto">
      <h1 className="app-page-title mb-4">Kategoriler</h1>
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
          <Form colunms={table.columns} rows={table.rows} items={table.items} destroy={destroy} update="category" image="banner"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
  </>
  )
}

export default CatagoryList