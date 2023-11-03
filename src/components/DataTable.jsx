
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useFetch } from '../hooks/useFetch';

export default function Table() {


    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    return (
        <div className='card'>
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field='id' header="id" sortable style={{ width: '25%' }}>
                </Column>
                <Column field="name" header="nombre_completo">
                </Column>
                <Column field="username" header="usuario">
                </Column>
                <Column field="email" header="correo_electronico">
                </Column>
            </DataTable>
        </div>
    );
}