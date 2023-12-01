import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        navigate('/');
    }

    return (
        <div>
           <div>About page</div>
           <button onClick={handleRedirect}>Redirect to Home page</button>
            
        </div>
    );
};

export default About;