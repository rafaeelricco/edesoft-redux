import { Button, Container, TextInput } from '@mantine/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateUser } from '../../store/users'

export default function Edit() {
  // get the id from the url
  const { id } = useParams<{ id: string }>()
  // get the users from the store
  const { users } = useSelector((state) => state.users)

  // convert id to number and -1 to get the correct index
  const idNumber = Number(id) - 1

  // set the initial state of the inputs to the user data
  const [firstname, setFirstname] = useState(users[idNumber].name.firstname)
  const [lastname, setLastname] = useState(users[idNumber].name.lastname)
  const [username, setUsername] = useState(users[idNumber].username)
  const [email, setEmail] = useState(users[idNumber].email)
  const [phone, setPhone] = useState(users[idNumber].phone)
  const [street, setStreet] = useState(users[idNumber].address.street)
  const [number, setNumber] = useState(users[idNumber].address.number)
  const [city, setCity] = useState(users[idNumber].address.city)
  const [zipcode, setZipcode] = useState(users[idNumber].address.zipcode)

  // dispatch to update the user
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        <h1>Editar Usuário</h1>
        <TextInput
          placeholder={users[idNumber].name.firstname}
          label="First name"
          onChange={(e) => setFirstname(e.target.value)}
          name="firstname"
          id="firstname"
        />

        <TextInput
          placeholder={users[idNumber].name.lastname}
          label="Last name"
          name="lastname"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />

        <TextInput
          placeholder={users[idNumber].username}
          label="Username"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          placeholder={users[idNumber].email}
          label="Email"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          placeholder={users[idNumber].phone}
          label="Phone"
          type="text"
          name="phone"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextInput
          placeholder={users[idNumber].address.street}
          label="Street"
          type="text"
          name="street"
          id="street"
          onChange={(e) => setStreet(e.target.value)}
        />

        <TextInput
          placeholder={users[idNumber].address.number}
          label="Number"
          type="text"
          name="number"
          id="number"
          onChange={(e) => setNumber(e.target.value)}
        />

        <TextInput
          placeholder={users[idNumber].address.city}
          label="City"
          type="text"
          name="city"
          id="city"
          onChange={(e) => setCity(e.target.value)}
        />

        <TextInput
          placeholder={users[idNumber].address.zipcode}
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
            // prevent the page from reloading to avoid losing the state
            e.preventDefault()
            // dispatch the action to update the user
            dispatch(
              updateUser({
                id: users[idNumber].id,
                name: {
                  firstname,
                  lastname
                },
                email,
                phone,
                username,
                address: {
                  street,
                  number,
                  city,
                  zipcode
                }
              })
            )
          }}>
          Editar
        </Button>
      </Container>
    </>
  )
}
