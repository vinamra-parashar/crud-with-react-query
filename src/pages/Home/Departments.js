import React, { useState } from 'react';
// ui;
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
// mui datatable
import MUIDataTable from "mui-datatables";
// toastr
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// api
import { getDepartments, addDepartments, updateDepartments } from '../../helpers/api/department';
// react-query
import { useQuery, useQueryClient } from 'react-query';
// common 
import { Loaders } from '../../components/common/CustomLoader';
// page
import AddDepartment from './AddDepartment';
import UpdateDepartment from './UpdateDepartment';

const Departments = () => {
    const [modal, setmodal] = useState(false);
    const [modal2, setmodal2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editData, setEditData] = useState([]);

    // Get QueryClient from the context
    const queryClient = useQueryClient();

    const {data:lists=[], isLoading} = useQuery('allList', async () => await getDepartments('department/list'));

    const editDepartment = async(id) =>{
        let getData = await lists.filter(u => u.id === id)[0];
        setEditData(getData);
        setmodal2(!modal2);
    }

    // const confirmDeleteAlert = (id) => {

    // }

    const handleValidSubmit = async (event, values, action) => {
        event.persist();
        setLoading(true);   
        let response;   
        if(action === 1){
            response = await addDepartments(values);
        }else{
            response = await updateDepartments(editData.id, values);
        }
        if (response.status === 200) {
            setLoading(false);
            setmodal(false);
            setmodal2(false);
            queryClient.invalidateQueries('allList');
            toastr.success(response.msg);
        } else {
            setLoading(false);
            toastr.error(response.msg);
        }
    }

    const columns = [
        {
            name: "id",
            label: "Id",
        },
        {
            name: "name",
            label: "Name",
        },
        {
            name: "status",
            label: "Status",
        },
        {
            name: "action",
            label: "Action",
        }
    ];

    const data = lists && lists.length >0 ? lists.map((l) => {
        return {
            id : l.id,
            name : l.name,
            status : l.status,
            action : <>
            <span className="material-icons pointer mr-2" onClick={()=>editDepartment(l.id)} title="Edit">edit</span>
                {/* <span className="material-icons pointer" onClick={() => confirmDeleteAlert(l.id)}>delete</span> */}
        </>
        }
    }) : [];

    const options = {
        selectableRows: 'none',
        selectableRowsHeader: false,
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <button to="button" className="btn btn-primary float-right" onClick={()=>setmodal(!modal)} >
                                        <i className="bx bx-plus" /> Add New Department
                                        </button>
                                </CardTitle>
                                <div className="table-responsive">
                                    {isLoading ? <Loaders /> :
                                        <MUIDataTable
                                            title={"Department List"}
                                            data={data}
                                            columns={columns}
                                            options={options}
                                        />}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                 {/* add/edit modal */}
                <AddDepartment modal={modal} setmodal={setmodal} loading={loading} setLoading={setLoading} handleValidSubmit={handleValidSubmit} />
                <UpdateDepartment modal={modal2} setmodal={setmodal2} loading={loading} setLoading={setLoading} editData={editData} handleValidSubmit={handleValidSubmit} />
            </Container>
        </>
    )
}

export default Departments;