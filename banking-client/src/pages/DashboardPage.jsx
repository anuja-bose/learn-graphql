import { Container } from 'react-bootstrap';
import AccountDataTable from '../components/accounts/AccountDataTable';
import { useQuery, gql } from '@apollo/client';


const AccountsPage = () => {
  const GET_ACCOUNT_USER = gql`
  query Query {
    accountUser {
      id
      fullname
      username
      accountNumber
    }
  }
`;

  const { loading, error, data } = useQuery(GET_ACCOUNT_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='error'>Error : {error.message}</p>;
  return (
        <Container className='sub-container'>
          <div className="section-title">
            <h2>Dashboard</h2>
            <h3>Account Holder List</h3>
          </div>
          <AccountDataTable accounts={data.accountUser}></AccountDataTable>
        </Container>
      
  )
}
export default AccountsPage;
