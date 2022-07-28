import DataTable from 'react-data-table-component';
import { gql, useMutation } from '@apollo/client';
import Swal from 'sweetalert2'

const DELETE_ACCOUNT_USER = gql`
    mutation Mutation($deleteAccountUserId: String!) {
        deleteAccountUser(id: $deleteAccountUserId)
  }`;

const AccountDataTable = ({ accounts }) => {
    const [deleteAccount, { data, loading, error, refetch }] = useMutation(DELETE_ACCOUNT_USER);
    const handleEdit = (id) => {
        console.log("edit clicked id :" + id)
    };
    const handleDelete = (id) => {
        console.log("delete clicked id :" + id);
       
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            deleteAccount({ variables: { deleteAccountUserId: id } });
              Swal.fire(
                'Deleted!',
                'Acccount has been deleted.',
                'success'
              )
            }
          })
    };
    const handleDebit = (id) => {
        console.log("Debit clicked id :" + id)
    };
    const handleCredit = (id) => {
        console.log("Credit clicked id :" + id)
    };
   
    const columns = [
        {
            name: 'Name',
            selector: row => row.fullname,
            sortable: true,
            width : "30%"
        },
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true,
            width : "30%"
        }, {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true,
            width : "5%"
        },
        {
            name: 'Edit',
            selector: row => { return <i className="bi bi-pen-fill" onClick={() => handleEdit(row.id)}></i> },
            width : "5%"
        },
        {
            name: 'Delete',
            selector: row => { return <i className="bi bi-trash-fill" onClick={() => handleDelete(row.id)}></i> },
            width : "5%"
        }
        ,
        {
            name: 'Debit',
            selector: row => { return <button onClick={() => handleDebit(row.id)}>Debit</button> },
            width : "10%"
        },
        {
            name: 'Credit',
            selector: row => { return <button onClick={() => handleCredit(row.id)}>Credit</button> },
            width : "10%"
        }
    ];
    //console.log("accounts", accounts);

    return (
        <div className='data-container'>
            <DataTable
                columns={columns}
                data={accounts}
                pagination
                defaultSortFieldId={1}
            />
        </div>
    );
}

export default AccountDataTable;