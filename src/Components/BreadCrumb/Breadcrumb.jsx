import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { IoHome } from "react-icons/io5";

const Breadcrumb = () => {
    const location = useLocation();
    const CustomPropsBreadcrumb = ({prop}) => {
        return (
            <div className = "font-ubuntu text-xl hover:underline">
                <span>{prop}</span>
            </div>
        )
    }
    
    const CustomHomePropsBreadcrumb = ({prop}) => {
        return (
            <div className = "flex font-ubuntu text-xl hover:underline">
                <IoHome className = "w-[1.5rem] h-[1.5rem] mr-[0.4rem]" style = {{color: "#ebc94e"}}/>
                <span>{prop}</span>
            </div>
        )
    }

    const TeamRoutes = [
        {path: "/", breadcrumb: CustomHomePropsBreadcrumb, props: {prop: "Home"}},
        {path: "/team", breadcrumb: CustomPropsBreadcrumb, props: {prop: "Teams"}}
    ]

    const AddBreadCrumb = ({route}) => {
        const breadcrumbs = useBreadcrumbs(route);
        return (
            <nav className = "flex">
                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                    <span key={match.pathname} className = "flex">
                        {index > 0 && <div className = "mr-[0.5rem] relative top-[0.1rem]">{" > "}</div>}
                        <div className = "mr-[0.5rem]">
                            <Link to={match.pathname}>{breadcrumb}</Link>
                        </div>
                    </span>
                ))}
            </nav>
        )
    }
  return (
    <div>
        {location.pathname === "/team" && 
            <AddBreadCrumb route = {TeamRoutes}/>
        }
    </div>
  )
}

export default Breadcrumb
