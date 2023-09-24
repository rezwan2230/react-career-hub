import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oppsss!! Not Found</h2>
            <NavLink to='/'>Go back to Home</NavLink>
            
        </div>
    );
};

export default ErrorPage;