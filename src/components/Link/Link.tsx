import { Link } from 'react-router-dom'

export function LinkStyled({ children, ...props }) {
  return (
    <>
      <Link
        to={props.to}
        style={{
          textDecoration: 'none',
          color: '#802c6e'
        }}>
        {children}
      </Link>
    </>
  )
}
