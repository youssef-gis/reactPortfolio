import "./Cards.css"

const Cards = ({className, onclick, children}) => {
    return (
        <article className={`card ${className}`} onClick={onclick} >
            {children}
        </article>
    )
}

export default Cards