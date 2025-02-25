import React from 'react'
import { Link, matchPath, NavLink, useLocation, useParams } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { IoHome } from "react-icons/io5";
import Team from '../Pages/TeamPage/Team';

const Breadcrumb = ({pageName}) => {
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

    const DynamicTeamBreadcrumb = () => {
        const { team_name } = useParams();
        return <span className = "font-ubuntu text-xl hover:underline">{toTitleCase(team_name)}</span>;
    };
    
    const DynamicPlayerBreadcrumb = () => {
        const { player_name } = useParams();
        return <span className = "font-ubuntu text-xl hover:underline">{toTitleCase(player_name)}</span>;
    };

    const formatBreadcrumb = (text) => {
        return decodeURIComponent(text).replace(/-/g, ' '); 
    };
    const toTitleCase = (text) => {
        if (!text || typeof text !== "string") return "";
        return text
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const toSlug = (str) => {
        if (str) {
            return str
            .toLowerCase()        
            .trim()              
            .replace(/\s+/g, '-') 
            .replace(/[^a-z0-9-]/g, '');
        }
    };

    const Routes = [
        {path: "/", breadcrumb: CustomHomePropsBreadcrumb, props: {prop: "Home"}},
        {path: "/team", breadcrumb: CustomPropsBreadcrumb, props: {prop: "Teams"}},
        {path: "/team/:team_name", breadcrumb: DynamicTeamBreadcrumb, exact: true},
        {path: "/team/:team_name/:player_name", breadcrumb: DynamicPlayerBreadcrumb}
    ]

    const AddBreadCrumb = () => {
        const breadcrumbs = useBreadcrumbs(Routes);
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
            <AddBreadCrumb />
        }
        {pageName === "Player Profile" && 
            <AddBreadCrumb />
        }
    </div>
  )
}

export default Breadcrumb
