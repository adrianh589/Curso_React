import React from 'react';
import ReactDOM from 'react-dom/client';
import {GiftExpertApp} from "./GiftExpertApp.jsx";
import './styles.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <GiftExpertApp/>
        </DevSupport>
    </React.StrictMode>,
)
