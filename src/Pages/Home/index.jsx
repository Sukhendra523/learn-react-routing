import { NavLink, Outlet } from "react-router-dom"


const Home = () => {

  return (
    <div>
      <h1>Home Page</h1>
      <div className="menu-list">
        <NavLink to={'/product'}>Product</NavLink>
        <NavLink to={'/filter'}>Filter</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Home