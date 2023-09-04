import { Container, Perfil, Data } from './styles.ts'

export interface Characters {
    name: string
    species: string
    house: string
    dateOfBirth: string
    actor: string
    image: string
}

export function Characters({image, name, actor, house, dateOfBirth, species}:Characters) {
    return (
        <Container>
            <Perfil>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{actor}</p>
            </Perfil>
            <Data>
                <p>Casa: {house}</p>
                <p>Data de Nascimento: {dateOfBirth}</p>
                <p>Espécie: {species}</p>
            </Data>
        </Container>            
    )
}