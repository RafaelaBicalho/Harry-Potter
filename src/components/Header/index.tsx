import { Container } from './styles.ts'
import Logo from '../../assets/Logo.png'

export function Header() {
    return (
        <Container>
            <img src={Logo} alt="Harry Potter" />
        </Container >
    )
}