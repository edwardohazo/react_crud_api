/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { helpHttp } from '../helpers/helpHttpContactForm';

export const useForm = (initialForm, validateForm) => {
        const [form, setForm] = useState(initialForm);
        const [errors, setErrors] = useState({});
        const [loading, setLoading] = useState(false);
        const [response, setResponse] = useState(null);

        const handleChange = (e) =>{
            const {name, value} = e.target;
            setForm({
                ...form, 
                [name]: value
            });
        }

        const handleBlur = (e) =>{
            handleChange(e);
            setErrors(validateForm(form));
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            setErrors(validateForm(form));

            if (Object.keys(errors).length === 0) {
                alert("Enviando formulario...");
                setLoading(true);
                let url = `https://formsubmit.co/ajax/eduardo.gonzalez.dev@gmail.com`;
                let options = {
                    body: form,
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
                helpHttp()
                .post(url, options)
                .then((res)=>{
                    console.log(res);
                    setLoading(false);
                    setResponse(true);
                    setForm(initialForm);
                    setTimeout(()=>{
                        setResponse(false);
                    }, 5000);
                });
            } else {
                return;
            }
        }

        return {form, errors, loading, response, handleChange, handleBlur, handleSubmit}
}