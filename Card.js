import React, { useState,useEffect,useRef } from 'react';
import Axios from 'axios';
import * as Icon from "react-bootstrap-icons";

function Card(props) {

    const [Id, setId] = useState(0);
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');

    const [Editing,setEditing]= useState(false);
    const [EmployeeData, setEmployeeData] = useState([]);
    
    const idref = useRef();
    const nameref = useRef();
    const addressref = useRef();


              useEffect(() => {
                Axios.get(`http://localhost:3001/api/get/`).then((response)=>{
                   setEmployeeData(response.data);
                });

              },[0]);   


         const Insert = () => {
            Axios.post(`http://localhost:3001/api/insert/`,(
              {id:EmployeeData.length+1, 
                name: nameref.current.value, 
                address: addressref.current.value
              }
              ))
            .then((response)=>{
                setEmployeeData([...EmployeeData,response.data]);
              })
            .catch(error => {
               console.error('There was an error!', error);
          });
          setEditing(false);
         }

        
         const Delete = (k) => {
            Axios.delete(`http://localhost:3001/api/delete/${k}`)
            .then((response)=>{
              console.log(response);
                EmployeeData.splice(response.data.k,1)
                setEmployeeData(EmployeeData);
             });
         }

         const Edit = (i) => {
           setEditing(true);
           idref.current.value = EmployeeData[i].id
           nameref.current.value = EmployeeData[i].name
           addressref.current.value = EmployeeData[i].address
           
          }

         const Update = () => {
              Axios.put(`http://localhost:3001/api/update`,(
                {
                    id:idref.current.value,
                    name:nameref.current.value,
                    address:addressref.current.value
                })).then((response)=>{
                setEmployeeData(response.data);
                });
                setEditing(false);
         }


         const handleClear = () => {
          idref.current.value = '';
          nameref.current.value = '';
          addressref.current.value = '';
         }


         const SaveUpdate = () => {
           Editing ? Update() : Insert()
         }

    return (
        <div style={{ background: "#3396FF" , justifyContent:'center'}}>
           <center><h1>MERN Stack Development</h1></center>
           <center>
             <p>
             <h3>MONGO &nbsp; EXPRESS &nbsp;  REACT &nbsp; NODE</h3>
            
             </p>
           </center>

          <center>
          
          <form className="form-group">
            <label name="Id" >ID</label>
            <input
              className="form-control"
              style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              name="Id"
              ref={idref}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID"
            />
          </form>
          <br />
          <form className="form-group">
          <label name="Id" >Name</label>
            <input
              className="form-control"
              style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              name="Name"
              ref={nameref}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </form>
          <br />
          <form className="form-group">
          <label name="Id" >Address</label>
            <input
              className="form-control"
              style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              ref={addressref}
              name="Address"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </form>
          <br />
          
          <br />
          <button
            style={{ lineHeight: 1 }}
            className="btn btn-primary"
            onClick={() => SaveUpdate()}
          >
            <Icon.Save size={14} />
            { Editing ? 'Update' : 'Save'}
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            style={{ lineHeight: 1 }}
            className="btn btn-primary"
            onClick={() => handleClear()}
          >
            <Icon.XCircle size={14} />
            &nbsp;Clear
          </button>
      
              
              

        <table className="table table-hover table-striped" border="1">
          <tr>
            <td style={{ color: "#ffffff" }}>Id </td>
            <td style={{ color: "#ffffff" }}>Name </td>
            <td style={{ color: "#ffffff" }}>Address </td>
            <td colSpan={2} style={{ color: "#ffffff",alignItems:'center' }}>
              Actions
            </td>
          </tr>

          {EmployeeData.map((data, i) => (
            <tr key={i}>
              <td style={{ color: "#ffffff", padding:10 }}>{data.id}</td>
              <td style={{ color: "#ffffff", padding:10 }}>{data.name}</td>
              <td style={{ color: "#ffffff", padding:10 }}>{data.address}</td>
              <td colSpan={2}>
                <button
                  style={{ lineHeight: 1, backgroundColor: "#DAF7A6" }}
                  className="btn btn-primary"
                  onClick={() => Edit(i)}
                >
                  <Icon.PencilSquare size={15} color="#000000" />
                  &nbsp;<font style={{ color: "#000000" }}>Edit</font>
                </button>
                &nbsp;&nbsp;
                <button
                  style={{ lineHeight: 1, backgroundColor: "red" }}
                  className="btn btn-primary"
                  onClick={() => Delete(i)}
                >
                  <Icon.Trash size={15} color="#000000" />
                  &nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
        </center>
        </div>
    );
}

export default Card;