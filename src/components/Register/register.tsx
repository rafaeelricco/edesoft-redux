import {
  Button,
  Container,
  Dialog,
  Group,
  Text,
  TextInput
} from '@mantine/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUser } from '../../store/users'

export default function Register() {
  const [opened, setOpened] = useState(false)

  // state for each input
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')

  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <Dialog
          opened={opened}
          withCloseButton
          onClose={() => setOpened(false)}
          size="md"
          radius="md">
          <Text size="sm" weight={500}>
            O usuário foi cadastrado com sucesso!
          </Text>
          <Text fz="xs" mb={8} color={'dimmed'}>
            Clique no botão abaixo para voltar para a home.
          </Text>

          <Group align="flex-end">
            <Button>
              <Link
                to="/"
                style={{
                  color: '#ffff',
                  textDecoration: 'none'
                }}>
                Ir para a home
              </Link>
            </Button>
          </Group>
        </Dialog>

        <h1>Cadastrar Usuário</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setOpened(true)
            const payload = {
              name: {
                firstname,
                lastname
              },
              username,
              email,
              phone,
              address: {
                street,
                number,
                city,
                zipcode
              }
            }
            dispatch(addUser(payload))
          }}>
          <TextInput
            placeholder="Ex: João"
            label="First name"
            onChange={(e) => setFirstname(e.target.value)}
            name="firstname"
            id="firstname"
            required
          />

          <TextInput
            placeholder="Ex: Silva"
            label="Last name"
            name="lastname"
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <TextInput
            placeholder="Ex: joaozinho62"
            label="Username"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <TextInput
            placeholder="Ex: sample@gmail.com"
            label="Email"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextInput
            placeholder="Ex: (11) 99999-9999"
            label="Phone"
            type="text"
            name="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <TextInput
            placeholder="Ex: Rua dos Bobos"
            label="Street"
            type="text"
            name="street"
            id="street"
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <TextInput
            placeholder="Ex: 1980"
            label="Number"
            type="text"
            name="number"
            id="number"
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <TextInput
            placeholder="Ex: São Paulo"
            label="City"
            type="text"
            name="city"
            id="city"
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <TextInput
            placeholder="Ex: 00000-000"
            label="Zipcode"
            type="text"
            name="zipcode"
            id="zipcode"
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          <Button mt={8} variant="light" type="submit">
            Register
          </Button>
        </form>
      </Container>
    </>
  )
}
