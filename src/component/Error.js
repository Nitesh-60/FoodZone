import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    return (
        <div>
            <h1>OOPS!! , Something Went Wrong</h1>
            <h2>{status +" : "+ statusText}</h2>
        </div>
    )
}

export default Error;