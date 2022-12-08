import { ActionIcon, Container, createStyles, Group } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp
} from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column'
    }
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md
    }
  }
}))

export default function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <a href="https://edesoft.com.br/">
          <img
            src="https://edesoft.com.br/wp-content/uploads/logo-edesoft-1-1.png"
            alt="EdeSoft"
            width={100}
          />
        </a>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <a
              href="https://api.whatsapp.com/send?phone=5551996702804"
              style={{
                color: 'inherit'
              }}>
              <IconBrandWhatsapp size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a
              href="https://github.com/rafaeelricco/edesoft-redux"
              style={{
                color: 'inherit'
              }}>
              <IconBrandGithub size={18} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a
              href="https://www.instagram.com/rafaelricc0/?hl=pt-br"
              style={{
                color: 'inherit'
              }}>
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
