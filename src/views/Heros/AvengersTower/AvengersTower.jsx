import { StyledHerosList, StyledTitleList } from '../styles';
import AvengerCard from '../components/AvengerCard';
import { connect } from 'react-redux';
import { AvengerCardButtons, AvengerCardButton } from '../components/styles';

function AvengersTower({ tower, removeTower }) {
    return (
        <div>
            <StyledTitleList>AVENGERS TOWER</StyledTitleList>
            <StyledHerosList>
                {
                    tower.map(tower => (
                        <div key={tower.id}>
                            <AvengerCard name={tower.name} img={tower.img} />
                            <AvengerCardButtons>
                                <AvengerCardButton onClick={() => removeTower(tower)}>RETURN</AvengerCardButton>
                            </AvengerCardButtons>
                        </div>
                    ))
                }
            </StyledHerosList>
        </div>
    );
}

const mapStateToProps = state => ({
    tower: state.tower
});

const mapDispatchToProps = dispatch => ({
    removeTower(hero) {
        dispatch({
            type: 'REMOVE_TOWER',
            hero
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AvengersTower);