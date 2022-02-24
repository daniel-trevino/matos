import Div100vh from 'react-div-100vh'

const Layout: React.FC = ({ children }) => (
  <Div100vh className="flex justify-center items-center bg-primary">{children}</Div100vh>
)

export default Layout
