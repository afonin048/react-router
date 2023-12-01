import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <div>
            <div>Page not Found</div>
            <Link to='/'>Go Home Page</Link>
        </div>
    );
};

export default PageNotFound;