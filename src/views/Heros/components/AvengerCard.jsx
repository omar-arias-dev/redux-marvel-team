import {
    StyledAvengerCard,
    AvengerCardImage,
    AvengerCardInteract,
    AvengerCardName,
    AvengerCardNameTitle,
} from './styles';

export default function AvengerCard({ name, img }) {

    return (
        <StyledAvengerCard>
            <AvengerCardImage alt='hero' src={img} />
            <AvengerCardInteract>
                <AvengerCardName>
                    <AvengerCardNameTitle>NAME: </AvengerCardNameTitle>
                    {name}
                </AvengerCardName>
            </AvengerCardInteract>
        </StyledAvengerCard>
    );
}
