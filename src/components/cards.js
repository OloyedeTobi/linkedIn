import * as VSIcons from "react-icons/vsc";

const Card = ({text}) =>{
    return(
        <div>
            <div className="flex justify-between py-4 px-4 border border-neutral-300 rounded mb-4 hover:shadow-xl hover:border-0">
                <p className="text-[1.3rem]">{text}</p>
                <VSIcons.VscChevronRight className="text-2xl text-slate-500" />
            </div>
        </div>
    )
}

export default Card