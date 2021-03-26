import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters long'),
    pizzasize: yup.string().required('Size is required (But this should not be here I think?'),
    pepperoni: yup.string(),
    sausage: yup.string(),
    peppers: yup.string(),
    sundriedtomatoes: yup.string(),
    specialrequests: yup.string(),
})