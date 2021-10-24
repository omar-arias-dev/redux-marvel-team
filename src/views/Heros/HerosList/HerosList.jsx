import AvengerCard from '../components/AvengerCard';
import { connect } from 'react-redux';
import { AvengerCardButton, AvengerCardButtons } from '../components/styles';
import { StyledHerosList, StyledTitleList } from '../styles';

function HerosList({ heros, addToTower, addToBattle }) {
    return (
        <div>
            <StyledTitleList>HEROS LIST</StyledTitleList>
            <StyledHerosList>
                {heros.map((hero) => (
                    <div key={hero.id}>
                        <AvengerCard name={hero.name} img={hero.img} />
                        <AvengerCardButtons>
                            <AvengerCardButton onClick={() => addToTower(hero)}>AVENGERS TOWER</AvengerCardButton>
                            <AvengerCardButton onClick={() => addToBattle(hero)}>BATTLE</AvengerCardButton>
                        </AvengerCardButtons>
                    </div>
                ))}
            </StyledHerosList>
        </div>
    );
}

const mapStateToProps = state => ({
    heros: state.heros,
});

const mapDispatchToProps = dispatch => ({
    addToTower(hero) {
        dispatch({
            type: 'ADD_TO_TOWER',
            hero
        })
    },
    addToBattle(hero) {
        dispatch({
            type: 'ADD_TO_BATTLE',
            hero
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HerosList);
