/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CrudTableRow from './CrudTableRow';


const CrudTable = ({data, setDataToEdit, deleteData}) => {

    return (
    <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.santos.length > 0 ?
                 data.santos.map((el)=> 
                <CrudTableRow 
                key={el.id} 
                el={el}
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData}/>
                ) : <tr><td colSpan="3">Sin Datos</td></tr> 
                }
            </tbody>
        </table>
    </div>
    )
}

export default CrudTable;