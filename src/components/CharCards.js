import React, { useContext } from 'react';
import '../sass/styles.scss';
//import DdFavorites from './DdFavorites';
import LayoutList from './LayoutList';
import useFetch from './useFetch';
import { UrlContext } from '../UrlContext';

const CharCards = () => {
    
    const url = useContext(UrlContext);
    console.log(url.theUrl);

    const { data: characters, isPending, error } = useFetch(url.theUrl);

    return (
        <div>
           
            <div id="cssmenu">
                <div className="favorites">FAVORITOS</div>
                <div className="add">AGREGAR</div>
            </div>
            {/* <DdFavorites /> */}
            <div className="hero">
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                {characters && <LayoutList characters = {characters} />}
            </div>
        </div>
    )
}

export default CharCards
