import DataTable from 'react-data-table-component';

const AccountDataTable = ({ accounts }) => {

    const handleEdit = (id) => {
        console.log("edit clicked id :" + id)
    };
    const handleDelete = (id) => {
        console.log("delete clicked id :" + id)
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