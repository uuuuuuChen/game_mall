import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getGameLists } from '@/api/request';
import { GameWrapper } from './style'

// import { } from './style'

const GameList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        (async () => {
            let { data } = await getGameLists();
            // console.log(data);
            setGames(data);
        })()
    },[])

    const renderGames = () => {
        return games.map(({id, desc}) => {
            return <Link key={id}
                className='game_name'
                to={{
                    pathname: '/',
                    // search: `name=${desc}`
                }}>
                {desc}
            </Link>
        })
    }
    return (
        <GameWrapper>
           { renderGames()}
        </GameWrapper>
    )
}

export default GameList
