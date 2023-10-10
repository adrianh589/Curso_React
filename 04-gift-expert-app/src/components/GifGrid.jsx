import {GiftItem} from "./GiftItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js"; // Sirve para disparar efectos secundarios


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 >Cargando...</h2>) // Si isLoading es true, ejecuta el siguiente (<h2 >Cargando...</h2>) en caso contrario solo ejecuta isLoading y hasta ahi llega
            }

            <div className={'card-grid'}>{/* Este es el class del html es lo mismo, pero como estamos en Js da error de sintaxis */}
                {/*Images . map*/}
                {
                    images.map((image) => (
                       <GiftItem key={image.id} {...image}/>
                    ))
                }
            </div>
        </>
    )
}