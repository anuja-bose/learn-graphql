import Account from './Account';

const AccountsList = ({accounts}) => {
  return (
        <ul className='accountsList'>{ 
            accounts.map((account) => (
              <Account key={account.username} account={account} ></Account>
            ))
        }</ul>
      )
}

export default AccountsList;