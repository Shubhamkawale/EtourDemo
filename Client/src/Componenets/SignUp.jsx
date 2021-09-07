import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Formik,Form,Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const initialValues = {
    username: '',
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('Form Data',values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email format').required('Required'),
    password: Yup.string().required('Required')
})



function MyVerticallyCenteredModalSignUp(props) {



  


    return (
        <Modal
            {...props}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <Formik initialValues={initialValues} validationSchema={ validationSchema} onSubmit={onSubmit}>


                    <Form className="formSign" >

                        <h1 className="h3 mb-3 fw-normal"><center >Sign Up Here</center></h1>
                        <div className="form-floating">
                            <Field type="text" className="form-control" placeholder="Username" name="username" />
                            <label for="floatingInput">Please Enter Username</label>
                            <ErrorMessage name='name' />
                        </div>
                        

                        <br />

                        <div class="form-floating mb-3">
                            <Field type="email" className="form-control " name="email" placeholder="name@example.com"  />
                            <label for="floatingInputValue">Enter Email address</label>
                            <span id="emailHelp" className="form-text">We'll never share your email with anyone else.</span>
                            <ErrorMessage name='email' />
                        </div>
                        

                        <div className="form-floating">
                            <Field type="password" className="form-control" name="password" placeholder="Password"  />
                            <label for="floatingPassword">Enter Password Here</label>
                            <ErrorMessage name='password' />
                        </div>
                        

                        <br />
                        <div style={{ 'float': 'right' }}>
                            <Button type="submit" variant="primary" onClick="">Sign Up</Button>
                            <span>&nbsp;</span>
                            <Button onClick={props.onHide}>Close</Button>
                        </div>

                    </Form>


                </Formik>
            </Modal.Body>

        </Modal>
    );
}

function SignUp() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Sign Up
            </Button>

            <MyVerticallyCenteredModalSignUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}




export default SignUp;