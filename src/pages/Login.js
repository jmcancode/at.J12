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
        const {email, password}
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
            if (response.data.logged_in) {
                this.props.handleSuccessfulAuth(response.data)
            }
        })
        .catch(error => {
            console.log("Login error", error);
        });
        event.preventDefault();
    }

    render() {
        return(
            <div>
            <form>
            <input 
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            />

            <input 
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handlchange}
            required
            />

            <button type="submit">Login</button>
            </form>
            </div>
        )
    }












}