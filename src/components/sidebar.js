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
            <div className="text-center font-medium border-b-2 pb-4">
                <h1 className="text-xl">Welcome, Oluwatobi Oloyede</h1>
                <p className="text-sm text-sky-600">Add a photo</p>
            </div>
          </div>
          <div className="flex flex-row justify-between py-4 px-2 border-b-2 items-center">
            <div>
              <p className="text-sm font-medium">Connections</p>
              <p className="font-medium">Grow your network</p>
            </div>
            <div>
              <img alt="add-connection" src="images/widget-icon.svg" className="" />
            </div>
          </div>
          <div className="flex flex-row py-4 px-2">
            <img alt="items" src="images/item-icon.svg" className="px-1"/>
            <p className="font-medium">My Items</p>
          </div>
        </>
    )
}
export default SideProfile;



export const BottomSideProfile = () =>{
  return(
    <>
      <div className="flex flex-row justify-between py-4 px-2 border-b-2 items-center">
        <div>
          <p>Groups</p>
          <p>Events</p>
          <p>Follow Hashtags</p>
        </div>
        <div>
          <img src="images/plus-icon.svg" alt="plus sign" />
        </div>
      </div>
      <div>
        <p>Discover More</p>
      </div>
    </>
  )

}
