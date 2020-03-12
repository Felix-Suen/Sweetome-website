import React from 'react';
import './custom.css';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

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
            type: null,
            comments: null,
            errors: {
                fullName: '',
                email: '-',
                phone: '',
            },
            containsErr: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        var emails = {
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            type: this.state.type,
            comments: this.state.comments
        };

        if (validateForm(this.state.errors)) {
            this.setState({ containsErr: false });
            console.info('Valid Form')
<<<<<<< HEAD
            console.log(this.state.fullName + " " + this.state.email + " " + this.state.type + " " + this.state.comments);
            emailjs.send('gmail', 'sweetome_bot', emails, 'user_jauthrTvRjb0Bc9b2Boug')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });
=======
            console.log(this.state.fullName);

>>>>>>> 3f341e65341c5928e2fb49e587c094b615eabd29
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state;
        if (this.state.containsErr === true) {
            return (
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#da6e03" }}>
                            Service Request
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit} noValidate>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formPlaintextEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" name='fullName' placeHolder="Enter Full Name" onChange={this.handleChange} noValidate />
                                    <Form.Text className="error-txt" >
                                        {errors.fullName.length > 0 &&
                                            <span className='error'>{errors.fullName}</span>}
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name='email' placeHolder="Enter Email" onChange={this.handleChange} noValidate />
                                    <Form.Text className="error-txt">
                                        {errors.email.length > 0 &&
                                            <span className='error'>{errors.email}</span>}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Number (Optional)</Form.Label>
                                    <Form.Control type="text" name='phone' placeHolder="Enter Phone Number" onChange={this.handleChange} noValidate />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Property Type</Form.Label>
                                <Form.Control as="select" name="type" onChange={this.handleChange} noValidate>
                                    <option value="Condo">Condo</option>
                                    <option value="House">House</option>
                                    <option value="Studio">Studio</option>
                                    <option value="Studio">Others</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Comments or Requests</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="comments" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Button variant="orange" type="submit">
                                    Submit
                                </Button>
                            </Form.Row>
                            <p>{this.state.containsErr}</p>
                        </Form>
                    </Modal.Body>
                </Modal>
            );
        } else {
            return (
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#da6e03" }}>
                            Service Request
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Your request has been saved. It will be processed within the next two business days.
                    </Modal.Body>
                </Modal>
            );
        }

    }
}

export default Service;