import { createStore } from 'redux';

const initialState = {
    heros: [
        {
            id: 1,
            name: 'Spiderman',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'
        },
        {
            id: 2,
            name: 'Hulk',
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Hulk_%282540708438%29.jpg'
        },
        {
            id: 3,
            name: 'Ironman',
            img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/iron-man-vr-1983107.jpg'
        }
    ],
    inBattle: [],
    tower: []
}

const marvelReducer = (state = initialState, action) => {

    if(action.type === 'ADD_TO_TOWER') {
        return {
            ...state,
            tower: state.tower.concat(action.hero),
            heros: state.heros.filter(hero => hero.id !== action.hero.id)
        }
    } else if(action.type === 'ADD_TO_BATTLE') {
        return {
            ...state,
            inBattle: state.inBattle.concat(action.hero),
            heros: state.heros.filter(hero => hero.id !== action.hero.id)
        }
    } else if(action.type === 'REMOVE_TOWER') {
        return {
            ...state,
            tower: state.tower.filter(hero => hero.id !== action.hero.id),
            heros: state.heros.concat(action.hero)
        }
    } else if(action.type === 'REMOVE_BATTLE') {
        return {
            ...state,
            inBattle: state.inBattle.filter(hero => hero.id !== action.hero.id),
            heros: state.heros.concat(action.hero)
        }
    }
    return state;
}

export default createStore(marvelReducer);
