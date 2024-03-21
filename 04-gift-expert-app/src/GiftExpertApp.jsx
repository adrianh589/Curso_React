import {useState} from "react";
import {AddCategory, GifGrid} from "./components/index.js";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        console.log('Hola, soy el onAddCategory******')
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
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}