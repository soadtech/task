export default function validTask (values) {
    let errors = {};

    if (!values.title) {
        errors.title = "El nombre es obligatorio";
    } else if (!/^[a-z ,.'-]+$/i.test(values.title)) {
        errors.title = "Nombre no valido";
    }
    if (!values.description) {
        errors.description = "La descripción es obligatorio";
    } else if (!/^[a-z ,.'-]+$/i.test(values.description)) {
        errors.description = "Descripción no valida";
    }
    return errors;
}
