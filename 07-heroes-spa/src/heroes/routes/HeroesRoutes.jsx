import {Navbar} from "../../ui";
import {Route, Routes} from "react-router-dom";
import {DCPage, MarvelPage, HeroPage, SearchPage} from "../pages/index.js";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className={'container'}>
                <Routes>
                    <Route path={'marvel'} element={<MarvelPage/>}></Route>
                    <Route path={'dc'} element={<DCPage/>}></Route>

                    <Route path={'search'} element={<SearchPage/>}></Route>
                    <Route path={'hero/:id'} element={<HeroPage/>}></Route>
                </Routes>
            </div>
        </>
    )
}
