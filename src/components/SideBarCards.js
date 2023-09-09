const SideCards = ({Children, padding}) =>{
    return(
        <>
         <div className={`rounded border-2 ml-[${padding}]`}>
            { Children }
         </div>
        </>
    )
}

export default SideCards;