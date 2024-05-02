import React, { useEffect, useRef, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";

export const Crud = () => {

    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [buttonName, setbuttonName] = useState("save");

    const idRef = useRef(null);
    const nameRef = useRef(null);
    const addressRef = useRef(null);

   
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('data'));
        if (items) {
            setData(items);
        }
    }, []);


    const handleSubmit = (e) => {

        if (buttonName == "save") {
            data.push({
                id: idRef.current.value,
                name: nameRef.current.value,
                address: addressRef.current.value
            })
            localStorage.setItem("data", JSON.stringify(data))
            setData(JSON.parse(localStorage.getItem("data")));

        }
        else {
            data[index].id = idRef.current.value
            data[index].name = nameRef.current.value
            data[index].address = addressRef.current.value
            localStorage.setItem("data", JSON.stringify(data))
            setbuttonName("save")
        }
        e.preventDefault();
    }

    const handleClear = (e) => {

        idRef.current.value = "";
        nameRef.current.value = "";
        addressRef.current.value = "";
        e.preventDefault()
    }

    const handleEdit = (i) => {

        idRef.current.value = data[i].id
        nameRef.current.value = data[i].name
        addressRef.current.value = data[i].address

        setIndex(i);
        setbuttonName("Update");
        //e.preventDefault();
    }

    const handleDelete = (i) => {

        let employeeData = JSON.parse(localStorage.getItem("data"));
        console.log(employeeData);
        employeeData.splice(i, 1);
        setData(employeeData);
        localStorage.setItem("data", JSON.stringify(employeeData));
    }

    return (
        <div className="container" style={{ background: "#3396FF" , alignSelf:'center', justifyContent:'center', marginTop:40, height:'100%', width:'100%', borderRadius:20}}>

            <br /> <br /> <br /> 
            <h2 style={{ color: "#000" }}>
                <center>React CRUD with Bootstrap</center>
            </h2>
            <br />
            <form
                //ref="myform" 
                className="form-group">
                <form className="form-group">
                    <input
                        className="form-control"
                        style={{ background: "#DBECEA", lineHeight: 1 }}
                        type="text"
                        ref={idRef}
                        placeholder="ID"
                    />
                </form>
                <br />
                <form className="form-group">
                    <input
                        className="form-control"
                        style={{ background: "#DBECEA", lineHeight: 1 }}
                        type="text"
                        ref={nameRef}
                        placeholder="Name"
                    />
                </form>
                <br />
                <form className="form-group">
                    <input
                        className="form-control"
                        style={{ background: "#DBECEA", lineHeight: 1 }}
                        type="text"
                        ref={addressRef}
                        placeholder="Address"
                    />
                </form>
                <br />

                <br />
                <button
                    style={{ lineHeight: 1 }}
                    className="btn btn-primary"
                    onClick={(e) => handleSubmit(e)}
                >
                    <Icon.Save size={14} />
                    &nbsp;{buttonName}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                    style={{ lineHeight: 1 }}
                    className="btn btn-primary"
                    onClick={(e) => handleClear(e)}
                >
                    <Icon.XCircle size={14} />
                    &nbsp;Clear
                </button>
            </form>
            <br />
            <table className="table table-hover table-striped">
                <tr>
                    <td style={{ color: "#ffffff" }}>ID </td>
                    <td style={{ color: "#ffffff" }}>Name </td>
                    <td style={{ color: "#ffffff" }}>Address </td>

                    <td colSpan={2} style={{ color: "#ffffff" }}>
                        Actions
                    </td>
                </tr>
                {
                    data.map((item, i) => (
                        <tr key={i}>
                            <td style={{ color: "#000", textDecorationColor: '#000' }}>{item.id}</td>
                            <td style={{ color: "#000", textDecorationColor: '#000' }}>{item.name}</td>
                            <td style={{ color: "#000", textDecorationColor: '#000' }}>{item.address}</td>

                            <td colSpan={2}>
                                <button
                                    style={{ lineHeight: 1, backgroundColor: "#DAF7A6" }}
                                    className="btn btn-primary"
                                    onClick={(e) => handleEdit(i)}
                                >
                                    <Icon.PencilSquare size={15} color="#000000" />
                                    &nbsp;<font style={{ color: "#000000" }}>Edit</font>
                                </button>
                                &nbsp;&nbsp;
                                <button
                                    style={{ lineHeight: 1, backgroundColor: "red" }}
                                    className="btn btn-primary"
                                    onClick={(e) => handleDelete(i)}
                                >
                                    <Icon.Trash size={15} color="#000000" />
                                    &nbsp;Delete
                                </button>
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}