import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Please enter an email"),
    password: yup.string().required("Please enter password")
});

export const signupValidationSchema = yup.object().shape({
    first_name: yup.string().required("Please enter first name"),
    last_name: yup.string().required("Please enter last name"),
    email: yup.string().email("Please enter valid email").required("Please enter an email"),
    password: yup.string().min(6, 'Password must have at least 6 characters.').required("Please enter password"),
    company_name: yup.string().notRequired(),
    country_code: yup.string().required("Please select country code"),
    phone_number: yup.string().required("Please enter mobile number"),
    marketing_messages: yup.boolean().notRequired(),
})