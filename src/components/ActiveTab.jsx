import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function ActiveTab({ children, to, ...props }) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link
      className={`${match && 'border bg-primary text-white'} `}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ActiveTab
