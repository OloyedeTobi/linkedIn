import Header from "../../components/Header";
import SideCards from "../../components/SideBarCards";
import SideProfile from "../../components/sidebar";

const Home = () =>{
    return(
        <>
        <Header />
        <div className="w-[300px] ml-36">
            <SideCards Children={<SideProfile/>}/>
        </div>
        </>
    )
}

export default Home