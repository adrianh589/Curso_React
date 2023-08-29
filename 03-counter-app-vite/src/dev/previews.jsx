import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {FirstApp} from "../FirstApp.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FirstApp">
                <FirstApp/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews