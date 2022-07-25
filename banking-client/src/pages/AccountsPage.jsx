import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class AccountsPage extends Component {
    render() {
        return (
            <Container className='sub-container'>
                <div className="section-title">
                    <h2>Account</h2>
                    <i className="bi bi-person-plus-fill"></i>
                </div>
            </Container>
        );
    }
}

export default AccountsPage;