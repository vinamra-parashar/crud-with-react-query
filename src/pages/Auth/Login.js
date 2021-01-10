import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
// reactstrap
import { Row, Col, CardBody, Card, Container } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
// api
import { Auth } from '../../helpers/api/auth';
// toastr
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Login = (props) => {
    let history = useHistory();

    const [loading, setLoading] = React.useState(false);

    // handleValidSubmit
    function handleValidSubmit(event, values) {    
        event.persist();   
        setLoading(true);
        Auth('auth/login', values).then((response) => {
            // console.log('response', response)
            if (response.status === 200) {
                setLoading(false);
                sessionStorage.setItem('token', response.token);
                toastr.success("Login Successfully");
                history.push('/');
            } else {
                setLoading(false);
                toastr.error(response.message);
            }
        });
    }

    if (sessionStorage.getItem('token')) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <>
            <div className="account-pages pt-sm-5">
                <Container className="pt-5">
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <CardBody className="pt-0">
                                    <div className="p-2">
                                        <div className="text-primary  text-center">
                                            <p>Sign in to continue </p>
                                        </div>

                                        <AvForm className="form-horizontal" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>

                                            <div className="form-group">
                                                <AvField name="username" label="Email" className="form-control" placeholder="Enter Email" type="email" required />
                                            </div>

                                            <div className="form-group">
                                                <AvField name="password" label="Password" type="password" required placeholder="Enter Password" />
                                            </div>

                                            <div className="mt-3">
                                                <button className="btn btn-primary btn-block waves-effect waves-light" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Log In'}</button>
                                            </div>
                                        </AvForm>
                                    </div>
                                </CardBody>
                            </Card>                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Login;