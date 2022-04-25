import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Form = ({ colunms, rows, items, image, update, destroy }) => {
  

  return (
    <table className="table app-table-hover mb-0 text-left">
      <thead>
        <tr>
          {colunms.map((col, index) => {
            return (
              <th key={index} className="cell">
                {col}
              </th>
            );
          })}

          <th className="cell">Sil</th>
          <th className="cell">Güncelle</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              {rows.map((row, index) => {
                return (
                  <td key={index} className="cell">
                    {image && row == image ? (
                      <img
                        style={{ width: "100px" }}
                        src={"http://127.0.0.1:8000/" + item[row]}
                        alt=""
                      />
                    ) : (
                      item[row]
                    )}
                  </td>
                );
              })}
              <td>
                <button type="button" value={item["id"]} onClick={destroy} className="btn btn-danger text-white">Sil</button>
              </td>

              <td>
                <Link
                  to={"/" + update + "/update/" + item["id"]}
                  className="btn btn-success text-white"
                >
                  Güncelle
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Form;
