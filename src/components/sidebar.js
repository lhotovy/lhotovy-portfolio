import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import { useNavigate } from "react-router-dom";
import "./sidebar.css"

export const Sidebar = (props) => {
    const navigate = useNavigate();
  
    return (
            <SideNav 
                onSelect={(selected) => {
                console.log(selected)
                navigate("/"+selected)
                }} className="sidenav">
                
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon><i className="fa fa-fw fa-briefcase" style={{ fontSize: "1.5em"}} /></NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="skills">
                        <NavIcon><i className="fa-sharp fa-solid fa-screwdriver-wrench" style={{ fontSize: "1.5em"}} /></NavIcon>
                        <NavText>Skills</NavText>
                    </NavItem>  
                    <NavItem eventKey="education">
                        <NavIcon><i className="fa fa-fw fa-user-graduate" style={{ fontSize: "1.5em"}} /></NavIcon>
                        <NavText>Education</NavText>
                    </NavItem>
                    <NavItem eventKey="job">
                        <NavIcon><i className="fa fa-fw fa-briefcase" style={{ fontSize: "1.5em"}} /></NavIcon>
                        <NavText>Work Experince</NavText>
                    </NavItem>
               </SideNav.Nav>
            </SideNav>
    )
}
