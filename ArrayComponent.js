import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-icons/bs";

//const ArrayComponent = ({data, handleDelete, handleEdit}) => {
const ArrayComponent = (props) => {

return (
      
        <tbody border="1">
          {props.data.map((item, i) => {
            return (
              <tr>
                <td style={{ textAlign: "center" }}>{item.id}</td>
                <td style={{ textAlign: "center" }}> {item.name} </td>
                <td style={{
                    textAlign: "center",
                  }}
                >
                  {item.address}
                </td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      props.handleEdit(i);
                    }}
                  >
                    <Icon.BsPencilSquare color="black" />Edit
                  </button>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => props.handleDelete(i)}
                  >
                    <Icon.BsTrashFill color="black" />Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      
    );
}

export default ArrayComponent;

