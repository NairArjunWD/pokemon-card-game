import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 1, name: 'Bulbasaur', type: 'grass', hp: 10, base_experience: Math.round(Math.random() * 100)},
            { id: 2, name: 'Ivysaur', type: 'grass', hp: 50, base_experience: Math.round(Math.random() * (150 - 100 + 1) + 100)},
            { id: 3, name: 'Venasaur', type: 'grass', hp: 150, base_experience: Math.round(Math.random() * (200 - 150 + 1) + 150) },
            { id: 4, name: 'Charmander', type: 'fire', hp: 10, base_experience: Math.round(Math.random() * 100) },
            { id: 5, name: 'Charmeleon', type: 'fire', hp: 50, base_experience: Math.round(Math.random() * (150 - 100 + 1) + 100) },
            { id: 6, name: 'Charizard', type: 'fire/ flying', hp: 150, base_experience: Math.round(Math.random() * (200 - 150 + 1) + 150) },
            { id: 7, name: 'Squirtle', type: 'water', hp: 10, base_experience: Math.round(Math.random() * 100) },
            { id: 8, name: 'Wartortle', type: 'water', hp: 50, base_experience: Math.round(Math.random() * (150 - 100 + 1) + 100) },
            { id: 9, name: 'Blastoise', type: 'water', hp: 150, base_experience: Math.round(Math.random() * (200 - 150 + 1) + 150) },
            // { id: 11, name: 'Metapod', type: 'bug', hp: 10, base_experience: 72 },
            // { id: 12, name: 'Butterfree', type: 'flying', hp: 10, base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', hp: 10, base_experience: Math.round(Math.random() * 200) },
            { id: 39, name: 'Jigglypuff', type: 'normal', hp: 10, base_experience: Math.round(Math.random() * 200) },
            // { id: 94, name: 'Gengar', type: 'poison', hp: 10, base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', hp: 10, base_experience: Math.round(Math.random() * 200) }
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemon ];
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2= hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        )
    }
}

export default Pokegame
