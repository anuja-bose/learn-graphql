// Render Prop
import React from 'react';
import { Container } from 'react-bootstrap';
import { gql, useMutation } from '@apollo/client';
//CreateAccountUser

const ADD_ACCOUNT_USER = gql`
  mutation CreateAccountUser($data: AccountUserInput!) {
    createAccountUser(data: $data) {
      fullname
      username
      accountNumber
    }
  }
`;

function AccountsPage() {
  let fullname, accountNumber, username;
  const [addAccount, { data, loading, error }] = useMutation(ADD_ACCOUNT_USER);

  if (loading) return 'Submitting...';
  if (error) return <p className='error'> Error while submitting the data : {error.message} </p>;

  return (
    <Container className='sub-container'>
      <div className="section-title">
      <h2>Add Account</h2>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <form onSubmit={e => {
          e.preventDefault();
          addAccount({ variables: { data: { fullname: fullname.value, accountNumber: accountNumber.value, username: username.value } } });
        }} role="form" className="form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input ref={node => {
                username = node;
              }} type="text" className="form-control" placeholder="User Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input ref={node => {
                fullname = node;
              }} className="form-control" placeholder="Full name" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input ref={node => {
              accountNumber = node;
            }} type="text" className="form-control" placeholder="Account Number" required />
          </div>
         
         
          <div className="text-center mt-3"><button type="submit">Add Account</button></div>
        </form>
      </div>
    </Container>
  );
}
export default AccountsPage;

