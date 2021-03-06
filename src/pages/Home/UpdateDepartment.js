import React from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const UpdateDepartment = ({ modal, setmodal, loading, editData, handleValidSubmit }) => {

    return (
        <React.Fragment>
            <Modal isOpen={modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={() => { setmodal(!modal); }}>
                <div className="modal-content">
                    <AvForm onValidSubmit={(e, v) => { handleValidSubmit(e, v, 2) }} >
                        <ModalHeader toggle={() => { setmodal(!modal); }}>
                            Update Departments
                        </ModalHeader >
                        <ModalBody>
                            <Row>
                                <Col>
                                    <AvField
                                        name="name"
                                        value={editData.name}
                                        id='un'
                                        label="Name"
                                        placeholder="Enter Name"
                                        type="text"
                                        required
                                    />
                                </Col>                         
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" onClick={() => { setmodal(!modal); }} disabled={loading}>Close</Button>
                            <Button type="submit" color="primary" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</Button>
                        </ModalFooter>
                    </AvForm>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default UpdateDepartment;