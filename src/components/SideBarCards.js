const SideCards = ({Children, padding}) =>{
    return(
        <>
         <div className={`rounded border-2 p-[${padding}]`}>
            <Children />
         </div>
        </>
    )
}

export default SideCards;