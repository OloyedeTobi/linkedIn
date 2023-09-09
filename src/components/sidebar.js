import "./sidebar.css";
import "../App.css"
const SideProfile = () =>{
    return(
        <>
          <div>
            <div className="relative mb-10">
                <img alt="header-pic" src="images/card-bg.svg" className="w-[cover] h-[100px]"/>
                <img alt="profile-pic" src="images/photo.svg" className="absolute bottom-[-30%] left-[35%] bg-white p-2 rounded-full" />
            </div>
            <div className="text-center font-medium">
                <h1 className="text-xl">Welcome, Oluwatobi Oloyede</h1>
                <p className="text-sm text-sky-600">Add a photo</p>
            </div>
          </div>
          <div>
            <div>
              <p>Connections</p>
              <p>Grow your network</p>
            </div>
            <div>
              <img alt="add-connection" src="images/widget-icon.svg" className="" />
            </div>
          </div>
          <div>
            <img alt="items" src="images/item-icon.svg"/>
            <p>My Items</p>
          </div>
        </>
    )
}

export default SideProfile