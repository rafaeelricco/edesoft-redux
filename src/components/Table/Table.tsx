import { BigHead } from '@bigheads/core'
import {
  ActionIcon,
  Anchor,
  Badge,
  Container,
  Group,
  LoadingOverlay,
  ScrollArea,
  Table,
  Text,
  useMantineTheme
} from '@mantine/core'
import { IconPencil, IconTrash } from '@tabler/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../../store/users'
import { Td, Th } from './style'

export function UsersTable() {
  // Get users from Redux
  const { users } = useSelector((state) => state.users)

  // Map users to table data
  const data = users.map((user) => ({
    id: user.id,
    name: `${user.name.firstname} ${user.name.lastname}`,
    email: user.email,
    phone: user.phone,
    adress: `${user.address.street}, ${user.address.number}, ${user.address.city}, ${user.address.zipcode}`,
    password: user.password,
    username: user.username
  }))

  // Get theme from Mantine
  const theme = useMantineTheme()
  // Get dispatch from Redux
  const dispatch = useDispatch()

  // Map data to table rows
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <BigHead width={40} />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>
      <td>
        <Badge
          size="sm"
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
          {item.username}
        </Badge>
      </td>

      <Td>
        <Anchor<'a'>
          size="sm"
          href="#"
          onClick={(event) => event.preventDefault()}>
          {item.email}
        </Anchor>
      </Td>
      <Td>
        <Text size="sm" color="dimmed">
          {item.phone}
        </Text>
      </Td>
      <td>
        <Group spacing={0} position="right">
          <Link to={`/edit/${item.id}`}>
            <ActionIcon>
              <IconPencil size={16} stroke={1.5} />
            </ActionIcon>
          </Link>

          <ActionIcon color="red" onClick={() => dispatch(removeUser(item.id))}>
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ))

  return (
    <>
      <LoadingOverlay visible={data.length === 0} />
      <Container mt={54}>
        <ScrollArea>
          <Table verticalSpacing="sm">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>User name</th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <th />
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Container>
    </>
  )
}
