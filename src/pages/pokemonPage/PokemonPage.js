import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from "./PokemonPage.module.css";
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import Pagination from '../../components/pagination/Pagination';

const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons)

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(12)
    const getPokemons = async () => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`); //<- data {} получили сразу data
            return data.results
        }catch (e) {
            console.log(e.message)
        }
    }


    const handleNext = () => {
        setOffset(prev => prev+limit)
    }

    const handlePrev = () => {
        if (offset > 0){
            setOffset(prev => prev-limit)
        }
    }

    const page = Math.floor(offset/limit)+1

    useEffect(() => {
        getPokemons().then((pokemons) => setPokemons(pokemons))
    }, [limit, offset])

    return (
        <div className={classes.pokemon_card}>
            {
                pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemons={pokemon}/>)
            }
            <Pagination handleNext={handleNext} handlePrev={handlePrev} page={page}/>
        </div>
    );
};

export default PokemonPage;