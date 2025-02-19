import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    useEffect(() => {
        window.onload = () => {
            window.scrollTo({top: 0, behavior: "smooth"});
        };
    }, []);

    return null;
};

export default ScrollToTop;