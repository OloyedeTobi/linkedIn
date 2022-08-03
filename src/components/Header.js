import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";


const Header = () =>{
    return(
     <>
      <div className="flex justify-between px-36 py-5">
        <div className="flex">
            <div className="pr-2 pt-1">
                <img alt="logo" src="images/linkedin.png"/>
            </div>
            <div className="relative">
                <input type="text"  className="rounded bg-slate-100 py-2 w-[300px]"/>
                <p className="absolute left-[8px] top-[9px] flex justify-center items-center text-grey"><IoIcons.IoSearchSharp/><span className="px-2">search</span></p>
            </div>
        </div>

        <div className="flex">
            <div className="flex justify-between border-r">
              <div className="px-3 flex flex-col items-center text-grey">
                <img alt="home" src="images/nav-home.svg"/>
                <p className="text-xs">Home</p>
              </div>
              <div className="px-5 flex flex-col items-center text-grey">
              <img alt="my network" src="images/nav-network.svg"/>
                <p className="text-xs">My Network</p>
              </div>
              <div className="px-5 flex flex-col items-center text-grey">
              <img alt="jobs" src="images/nav-jobs.svg"/>
                <p className="text-xs">Jobs</p>
              </div>
              <div className="px-5 flex flex-col items-center text-grey">
              <img alt="messaging" src="images/nav-messaging.svg"/>
                <p className="text-xs">Messaging</p>
              </div>
              <div className="px-5 flex flex-col items-center text-grey">
              <img alt="notifications" src="images/nav-notifications.svg"/>
                <p className="text-xs">Notifications</p>
              </div>
              
              <div className="px-5 flex flex-col items-center text-grey">
                 <img alt="user display" src="images/user.svg" className="w-[1.5em] rounded-full"/>
                 <p className="text-xs flex items-center justify-center">Me <BsIcons.BsCaretDownFill className="ml-1 mt-1"/></p>
                 
              </div>

            </div>
            <div className="flex">
               <div className="pl-5 pr-12 flex flex-col items-center text-grey">
                  <img alt="work" src="images/nav-work.svg"/>
                  <p className="text-xs flex items-center justify-center">Work <BsIcons.BsCaretDownFill className="ml-1 mt-1"/></p>
               </div>
               <p className="text-[12px] text-burnt">Reactivate <br/> Premium</p>
            </div>
        </div>
      </div>
     </>
    )
}

export default Header