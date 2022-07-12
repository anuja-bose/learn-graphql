import React, {useState,useEffect} from 'react';

import {Container,Row,Col} from 'react-bootstrap';
import AccountDataTable from '../components/accounts/AccountDataTable';
import AccountsList from '../components/accounts/AccountsList'
import { useQuery, gql } from '@apollo/client';


const AccountsPage = () =>  {
  const GET_ACCOUNT_USER = gql`
  query Query {
    accountUser {
      fullname
      username
      accountNumber
    }
  }
`;
  const { loading, error, data } = useQuery(GET_ACCOUNT_USER);
  console.log('loading',loading);
  console.log('data.accountUser',data);
  console.log('erroe',error);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return(<Container>
          <Row>
            <Col> 
              <AccountDataTable accounts={data.accountUser}></AccountDataTable>
            </Col>
          </Row>
        </Container>
        )}
export default AccountsPage;
