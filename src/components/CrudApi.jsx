/* eslint-disable no-unused-vars */
import react from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { useState } from 'react';
import {helpHttp} from '../helpers/helpHttp';
import { useEffect } from 'react';
import { Loader } from './Loader';
import { Message } from './Message';


const CrudApi = () => {

    let [db, setDb] = useState(null);
    let [dataToEdit, setDataToEdit] = useState(null);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/santos";

    useEffect(()=>{
        setLoading(true);
        api.get(url)
        .then((res)=>{
            if (!res.err) {
                setDb(res);
                setError(null);
                setLoading(false);
            } else {
                setDb(null);
                setError(res);
                setLoading(false);
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    const createData = (data) => {

        data.id = JSON.stringify(Date.now());

        let options =  {body: data, headers: {'Content-Type': 'application/json'}}

        api.post(url, options)
        .then((res)=>{
            if(!res.err) {
                setDb({santos: [...res.santos]});
            }
            else {
                setError(res);
            }
        })
    }

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        let options =  {body: data, headers: {'Content-Type': 'application/json'}}

        api.put(endpoint, options)
        .then((res)=>{
            if(!res.err) {
                let newData = db.santos.map(el => el.id === data.id ? data : el);
                let newDb = {santos: newData};
                setDb(newDb);
            }
            else {
                setError(res);
            }
        })
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id: ${id}`);
        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let options =  {headers: {'Content-Type': 'application/json'}}

            api.del(endpoint, options)
            .then((res)=>{
                if(!res.err) {
                    let newData = db.santos.filter(el => el.id !== id);
                    let newDb = {santos: newData};
                    setDb(newDb);
                }
                else {
                    setError(res);
                }
            })
        } else {
            return;
        }
    }
    
    return (
    <div>
        <h1 >CRUD Api</h1>
        <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor={"#e86060"} />}
        {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}
    </div>
    )
}

export default CrudApi;