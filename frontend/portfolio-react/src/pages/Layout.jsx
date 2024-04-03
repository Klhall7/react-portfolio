import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        {/* need navbar and footer for page dev info faq etc.*/}
            <Outlet/>
        </>
    );
};

export default Layout;

// layout for main routes after landing page navigation, add styles