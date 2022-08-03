import Header from "../../components/Header";
import SideCards from "../../components/SideBarCards";
import SideProfile from "../../components/sidebar";

const Home = () =>{
    return(
        <>
        <Header />
        <SideCards Children={<SideProfile/>} padding={"0"}/>
        </>
    )
}

export default Home