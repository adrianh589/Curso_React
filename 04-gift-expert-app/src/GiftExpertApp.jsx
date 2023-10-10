import {useState} from "react";
import {AddCategory, GifGrid} from "./components/index.js";

export const GiftExpertApp = () => {
    // Cuando necesite informacion, y esa informacion necesita cambiar el HTML, debo pensar en un Hook para cambiar/mantener el estado
    // NO SE DEBEN PONER CONDICIONALES PARA LOS STATES
    const [categories, setCategories] = useState(['One Punch']); // Dejar el useState vacio genera undefined

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        // setCategories([newCategory, ...categories]); // Mi forma
        if (categories.includes(newCategory)) return;
        setCategories(cat => [newCategory, ...cat]); // Segunda Forma
    }

    return (
        <>
            {/*Titulo*/}
            <h1>GiftExpertApp</h1>

            {/*  Input  */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}    // Cuando lleva la palabra ON es porque esta emitiendo algo
            />

            {
                categories.map((category) => ( // Se puede obviar el return con las llaves
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}