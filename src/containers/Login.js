import React, { Compoents } from 'react';
import axios from 'axios';

export default class Login extends Compoents {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(events) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        const {email, password, password_confirmation}
        axios
        .post(
            "http://localhost:3001/sessions",
            {
                user: {
                    email: email,
                    password: password,
                }
            },
            { withCredentials: true }
        )
        .then (response => {
            if (response.data.status === "created") {
                this.props.handleSuccessfulAuth(response.data)
            }
        })
        .catch(error => {
            console.log("Login error", error);
        });
        event.preventDefault();
    }












}