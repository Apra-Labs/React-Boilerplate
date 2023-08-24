
interface TableRowProps {
    title: string;
    value: string;
}

const TableRow: React.FC<TableRowProps> = ({title, value}) => {
    return (
        <div style={{marginTop: 10}}>
            <tr><h4>{title}</h4></tr>
            <tr><input type="text" value={value} disabled style={{padding: 10, marginTop: 10}}/></tr>
        </div>
    )
}

export default TableRow