import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const navigate = useNavigate();
  
    return (
            <SideNav 
                style = {{ backgroundColor: "rgb(32, 82, 149)" }}
                className="sidenav"
                onSelect={(selected) => {
                console.log(selected)
                navigate("/"+selected)
                }} >
                
                <SideNav.Toggle name="sideBarToggle"/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon><i className="fa fa-fw fa-briefcase text-xl" /></NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="skills">
                        <NavIcon><i className="fa-sharp fa-solid fa-screwdriver-wrench text-xl" /></NavIcon>
                        <NavText>Skills</NavText>
                    </NavItem>  
                    <NavItem eventKey="education">
                        <NavIcon><i className="fa fa-fw fa-user-graduate text-xl" /></NavIcon>
                        <NavText>Education</NavText>
                    </NavItem>
                    <NavItem eventKey="job">
                        <NavIcon><i className="fa fa-fw fa-briefcase text-xl" /></NavIcon>
                        <NavText>Work Experince</NavText>
                    </NavItem>
               </SideNav.Nav>
            </SideNav>

    )
}
