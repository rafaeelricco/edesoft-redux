import { Button, Container, TextInput } from '@mantine/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/users'

export default function Register() {
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
        <h1>Cadastrar Usuário</h1>
        <TextInput
          placeholder="Ex: João"
          label="First name"
          onChange={(e) => setFirstname(e.target.value)}
          name="firstname"
          id="firstname"
        />

        <TextInput
          placeholder="Ex: Silva"
          label="Last name"
          name="lastname"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />

        <TextInput
          placeholder="Ex: joaozinho62"
          label="Username"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          placeholder="Ex: sample@gmail.com"
          label="Email"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          placeholder="Ex: (11) 99999-9999"
          label="Phone"
          type="text"
          name="phone"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextInput
          placeholder="Ex: Rua dos Bobos"
          label="Street"
          type="text"
          name="street"
          id="street"
          onChange={(e) => setStreet(e.target.value)}
        />

        <TextInput
          placeholder="Ex: 1980"
          label="Number"
          type="text"
          name="number"
          id="number"
          onChange={(e) => setNumber(e.target.value)}
        />

        <TextInput
          placeholder="Ex: São Paulo"
          label="City"
          type="text"
          name="city"
          id="city"
          onChange={(e) => setCity(e.target.value)}
        />

        <TextInput
          placeholder="Ex: 00000-000"
          label="Zipcode"
          type="text"
          name="zipcode"
          id="zipcode"
          onChange={(e) => setZipcode(e.target.value)}
        />
        <Button
          mt={8}
          variant="light"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
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
          Register
        </Button>
      </Container>
    </>
  )
}
