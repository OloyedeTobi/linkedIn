import Card from "../../components/cards"
import Logo from "../../components/logo"

const Login = () =>{
    return(
    <div className="px-36 py-5 overflow-x-hidden max-w-[100] box-border lg:px-10 md:px-4"> 
        <div className="flex justify-between">
            <div className="w-40 md:w-20 py-1">
                <Logo width={40} mdwidth={20}/>
            </div>
            <div className="flex">
                <button className="mr-10 font-bold text-slate-500 hover:bg-slate-100 rounded-3xl py-1 px-5">Join now</button>
                <button className="text-blue border-2 rounded-3xl border-blue py-1 px-5 hover:bg-blue-2">Login</button>
            </div>
        </div>

        <div className="flex md:flex-col md:items-center">
            <div className="w-[50%] md:w-[100%]">
                <h1 className="text-blue text-[3.5rem] font-thin py-20 leading-[1.25em] lg:text-[2rem] md:text-[0.5rem] md:text-center md:py-3">Welcome To Your Professional Community</h1>
            </div>
            <img alt="login hero" src="images/login-hero.svg" className="w-[700px] absolute right-[-6%] bottom-[-36px] h-[630px] lg:w-[500px] md:w-[100%] md:static md:h-auto" />
        </div>
        <div className="w-[40%] md:w-[100%]">
            <Card text={"Search for a job"}/>
            <Card text={"Find a person you know"}/>
            <Card text={"Learn a new skill"} />
        </div>
    </div>
  )
}

export default Login