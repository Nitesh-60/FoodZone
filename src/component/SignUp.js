import { useFormik } from "formik";
import * as Yup from 'yup';

const SignUP = ()=>{
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <form 
        onSubmit={formik.handleSubmit}
        className="flex p-2 m-2 bg-pink-200 flex-col w-96"
        >
            <label htmlFor="firstName">First Name</label>
            <input
                className="w-80 p-1 my-2"
                id="firstName"
                name="firstName"
                type="text"
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input
                className="w-80 p-1 my-2"
                id="lastName"
                name="lastName"
                type="text"
                {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email</label>
            <input
                className="w-80 p-1 my-2"
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
                className="w-80 p-1 my-2"
                id="password"
                name="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                className="w-80 p-1 my-2"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
            ) : null}

            <button type="submit" className="cursor-pointer bg-orange-600 p-2 w-80 my-2">Submit</button>
        </form>
    );
};

export default SignUP;