import React from 'react';
import './custom.css';
import { Modal, Form, Col, Button } from 'react-bootstrap';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            phone: null,
            errors: {
                fullName: '',
                email: 'We will respond within 2 business days',
                phone: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'fullName':
                errors.fullName =
                    value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Service Request
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit} noValidate>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formPlaintextEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name='fullName' placeHolder="Enter Full Name" onChange={this.handleChange} noValidate />
                                <Form.Text className="text-muted">
                                    {errors.fullName.length > 0 &&
                                        <span className='error'>{errors.fullName}</span>}
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Property Type</Form.Label>
                            <Form.Control as="select">
                                <option>Full Condo</option>
                                <option>House</option>
                                <option>Studio</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name='email' placeHolder="Enter Email" onChange={this.handleChange} noValidate />
                                <Form.Text className="text-muted">
                                    {errors.email.length > 0 &&
                                        <span className='error'>{errors.email}</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group as={Col} controlId="">
                                <Form.Label>Contact Number (Optional)</Form.Label>
                                <Form.Control type="text" name='phone' placeHolder="Enter Phone Number" onChange={this.handleChange} noValidate />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Row>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default Service;