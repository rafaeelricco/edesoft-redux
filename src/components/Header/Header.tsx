import { Container } from '@mantine/core'
import { LinkStyled } from '../Link/Link'

export default function Header() {
  return (
    <>
      <Container
        mt={20}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <LinkStyled to="/">Lista de usuários</LinkStyled>
        <LinkStyled to="/">
          <img
            src="https://fakestoreapi.com/icons/logo.png"
            alt="fakestoreapi"
            width={45}
          />
        </LinkStyled>
        <LinkStyled to="register">Cadastrar usuário</LinkStyled>
      </Container>
    </>
  )
}
