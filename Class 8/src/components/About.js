import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>
                This project is a part of Namaste React Course  by Akshay Saini
            </p>
            <Outlet/>
        </div>
    );
};

export default About;