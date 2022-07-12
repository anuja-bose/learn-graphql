import DataTable from 'react-data-table-component';

const AccountDataTable = ({ accounts }) => {
    const columns = [
        {
            name: 'Name',
            selector: row => row.fullname,
            sortable: true,
        },
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true,
        }
    ];
    console.log("accounts ",accounts);

    return (
        <DataTable
        title = "Accounts users"
            columns={columns}
            data={accounts}
            pagination
            defaultSortFieldId={1} 
        />
    );
}

export default AccountDataTable;