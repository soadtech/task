import { useState, useEffect } from "react";

const useValidator = (stateInicial, validar, fn) => {
    const [values, setValues] = useState(stateInicial);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrores = Object.keys(errors).length === 0;
            if (noErrores) {
                fn();
            }
            setSubmitForm(false);
        }
    }, [errors]);

    const handleChange = (name, e) => {
        setValues({
            ...values,
            [name]: e
        });
    };

    const handleSubmit = () => {
        const erroresValidacion = validar(values);
        setErrors(erroresValidacion);

        setSubmitForm(true);
    };

    return {
        values,
        errors,
        submitForm,
        handleSubmit,
        handleChange,
    };
};

export default useValidator;
