import PropTypes, {string} from "prop-types"; // Si uso TS no es necesario esto porque ya es estricto TS

const newMessage = {
    message: 'Hola Mundo',
    title: 'Titulo'
};

const suma = (a, b) => a + b;


export const FirstApp = ({ title, subtitle, name }) => {
    return (
        <>
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
            <code> { JSON.stringify(newMessage) } </code>
            <p> Soy un subtitulo </p>
            {name}
        </>
    );
}

// Con este le indicamos a react de que tipo queremos que sean
// las variables que ponemos desde el componente padre
FirstApp.propTypes = {
    title: string,
    subtitle: string.isRequired // Asi indicamos que es obligatorio
}

/* Para evitar tener que poner los props por defecto arriba
* y que se vea feo, lo establecemos mejor aqui para que esté
* más ordenado
* */
FirstApp.defaultProps = {
    title: 'No hay ningún título.',
    subtitle: 'No hay subtitulo.',
    name: 'Adrian Hoyos'
}