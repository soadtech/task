export default function validName (values) {
    let errors = {};

    if (!values.name) {
        errors.name = "El nombre es obligatorio";
    } else if (!/^[a-z ,.'-]+$/i.test(values.name)) {
        errors.name = "Nombre no valido";
    }
    return errors;
}
