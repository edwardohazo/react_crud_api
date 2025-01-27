/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import react, { useState, useEffect }  from 'react';

let initialForm = {name: "", constellation: "", id: null}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    let [form, setForm] = useState(initialForm);

    useEffect(()=>{
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.constellation) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);

        } else {
            updateData(form);
        }

        handleReset();
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }

    return (
    <div>
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Escribe tu nombre" onChange={handleChange} value={form.name} />
            <input type="text" name="constellation" placeholder="Escribe la constelación" onChange={handleChange} value={form.constellation} />
            <input type="submit" value="Enviar"></input>
            <input type="reset" value="Limiar" onClick={handleReset}></input>
        </form>
    </div>
    )
}

export default CrudForm;