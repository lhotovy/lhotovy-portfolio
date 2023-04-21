import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const navigate = useNavigate();
  
    return (
            <SideNav 
                style = {{ backgroundColor: "rgb(12, 74, 110)", position: "absolute" }}
                className="sidenav sticky"
                onSelect={(selected) => {
                console.log(selected)
                navigate("/"+selected)
                }} >
                
                <SideNav.Toggle name="sideBarToggle"/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon><i className="fa fa-fw fa-home text-xl" /></NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="skills">
                        <NavIcon><i className="fa-solid fa-code text-xl" /></NavIcon>
                        <NavText>IT skills and Certifications</NavText>
                    </NavItem>  
                    <NavItem eventKey="education">
                        <NavIcon><i className="fa fa-fw fa-user-graduate text-xl" /></NavIcon>
                        <NavText>Education and Knowledge</NavText>
                    </NavItem>
                    <NavItem eventKey="job">
                        <NavIcon><i className="fa fa-fw fa-briefcase text-xl" /></NavIcon>
                        <NavText>Work Experince</NavText>
                    </NavItem>
               </SideNav.Nav>
            </SideNav>

    )
}
