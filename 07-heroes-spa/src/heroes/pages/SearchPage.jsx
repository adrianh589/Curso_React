import {useForm} from "../../hooks/useForm.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import {getHeroesByName} from "../helpers/index.js";
import {HeroCard} from "../components/index.js";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    // console.log(location);

    const {searchText, onInputChange} = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`);
    }

    const showHeroAlert = () => {
        return q === '' ?
            <div className="alert alert-primary">
                Search a hero
            </div>
            :
            !heroes.length &&
            <div className="alert alert-danger">
                No hero with <b>{q}</b>
            </div>;
    }

    return (
        <>
            <h1>Search Page</h1>
            <hr/>

            <div className="row">
                <div className={'col-5'}>
                    <h4>Searching</h4>
                    <hr/>

                    <form onSubmit={onSearchSubmit}
                          aria-label="form"
                    >
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                            aria-label={'Search a hero'}
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {showHeroAlert()}

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
