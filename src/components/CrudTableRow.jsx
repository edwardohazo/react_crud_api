/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import react from 'react';


const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    const {name, constellation, id} = el;
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={()=>setDataToEdit(el)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;





                