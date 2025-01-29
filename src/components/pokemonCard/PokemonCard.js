import axios from "axios";
import classes from "./PokemonCard.module.css";
import DetailModal from "../detaiModal/DetailModal";
import React, { useEffect, useState } from "react";

const PokemonCard = ({ pokemons }) => {
    const [pokemonObj, setPokemonObj] = useState({});
    const [show, setShow] = useState(false);

    const getPokemons = async () => {
        try {
            const { data } = await axios.get(pokemons.url);
            return data;
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleShow = () => {
        setShow(!show);
    };

    useEffect(() => {
        getPokemons().then((pokemonObj) => setPokemonObj(pokemonObj));
    }, []);

    return (
        <>
            {show && (
                <DetailModal>
                    <div className={classes.modal_content}>
                        <button onClick={handleShow} className={classes.close_button}>&times;</button>
                        <div className={classes.modal_img}>
                            <img src={pokemonObj?.sprites?.other?.dream_world?.front_default} alt=""/>
                            <p>{pokemonObj?.name}</p>
                        </div>
                        <div className={classes.modal_text}>
                            <p><strong>Abilities: </strong>{pokemonObj?.abilities?.map(value => value.ability.name).join(', ')}</p>
                            <p><strong>Stats: </strong> {pokemonObj?.stats?.map(value => value.stat.name).join(', ')}</p>
                            <p><strong>Types: </strong>{pokemonObj?.types?.map(value => value.type.name).join(', ')}</p>
                            <p><strong>Some-moves: </strong>{pokemonObj?.moves.slice(0, 5)?.map(value => value.move.name).join(', ')}</p>
                        </div>
                    </div>
                </DetailModal>
            )}
            <div className={classes.pokemon_item}>
                <img src={pokemonObj?.sprites?.other?.dream_world?.front_default} alt=""/>
                <div className={classes.pokemon_card}>
                    <div className={classes.pokemon_info}>
                        <p className={classes.pokemon_name}>{pokemons.name}</p>
                        <button onClick={handleShow}>Подробнее</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PokemonCard;
