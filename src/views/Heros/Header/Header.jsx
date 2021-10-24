import { StyledHeader, StyledHeaderTitle, StyledHeaderImage } from '../styles';
import marvelLogo from '../../../assets/images/Marvel_Logo.svg';

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderImage alt='marvel-logo' src={marvelLogo} />
            <StyledHeaderTitle>TEAM</StyledHeaderTitle>
        </StyledHeader>
    );
}
