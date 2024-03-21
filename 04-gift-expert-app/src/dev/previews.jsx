import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {AddCategory, GiftItem} from "../components/index.js";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/GiftItem">
                <GiftItem/>
            </ComponentPreview>
            <ComponentPreview path="/AddCategory">
                <AddCategory/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews