import { StyledHerosList, StyledTitleList } from '../styles';
import AvengerCard from '../components/AvengerCard';
import { connect } from 'react-redux';
import { AvengerCardButtons, AvengerCardButton } from '../components/styles';

function InBattle({ inBattle, removeBattle }) {
    return (
        <div>
            <StyledTitleList>IN BATTLE</StyledTitleList>
            <StyledHerosList>
                {
                    inBattle.map(battle => (
                        <div key={battle.id}>
                            <AvengerCard name={battle.name} img={battle.img} />
                            <AvengerCardButtons>
                                <AvengerCardButton onClick={() => removeBattle(battle)}>RETURN</AvengerCardButton>
                            </AvengerCardButtons>
                        </div>
                    ))
                }
            </StyledHerosList>
        </div>
    );
}

const mapStateToProps = state => ({
    inBattle: state.inBattle
});

const mapDispatchToProps = dispatch => ({
    removeBattle(hero) {
        dispatch({
            type: 'REMOVE_BATTLE',
            hero
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(InBattle);
