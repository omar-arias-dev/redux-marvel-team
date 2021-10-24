import AvengersTower from './AvengersTower/AvengersTower';
import Header from './Header/Header';
import HerosList from './HerosList/HerosList';
import InBattle from './InBattle/InBattle';
import { StyledHerosContainer } from './styles';

export default function Heros() {
    return (
        <StyledHerosContainer>
            <Header />
            <HerosList />
            <InBattle />
            <AvengersTower />
        </StyledHerosContainer>
    );
}
