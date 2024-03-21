import PropTypes from "prop-types";

export const GiftItem = ({title, url, id}) => {
    return (
        <div className={'card'}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

/* Tarea

1. Añadir PropTypes
    a. Title obligatorio
    b. url obligatorio

2. Evaluar el snapshot

 */

GiftItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    email: PropTypes.string,
    id: PropTypes.number
}

