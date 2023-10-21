import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header2 = () => {

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => console.error(error))
  }

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
        {/* <a href="#" className="flex items-center">
            Pages
          </a> */}
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="#" className="flex items-center">
            Account
          </a> */}
        <NavLink to="/register" className="flex items-center">
          Register
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="#" className="flex items-center">
            Blocks
          </a> */}
        <NavLink to="/login" className="flex items-center">
          LogIn
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="#" className="flex items-center">
            Blocks
          </a> */}
        <NavLink to="/addproduct" className="flex items-center">
          Add Product
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="#" className="flex items-center">
            Blocks
          </a> */}
        <NavLink to="/mycart" className="flex items-center">
          My Cart
        </NavLink>
      </Typography>
    </ul>
  );


  return (
    <Navbar className="sticky backdrop-blur-2xl top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">

        {/* logo */}
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img className="w-14 h-12 rounded-xl" src="https://i.ibb.co/yykHgRK/INNOVATION-X1.png" alt="" />
        </Typography>
        {/* logo end */}


        {/* nav options mechanism */}
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {
            user ?
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <img
                    className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                    alt="Image placeholder"
                    src={user.photoURL}
                  />
                  <div>
                    <h2>{user.email}</h2>
                    <h2>{user.displayName}</h2>
                  </div>
                </div>
                {/* <Button
                  variant="gradient"
                  size="xs"
                  className="hidden absolute right-24 bottom-10 lg:inline-block"
                >
                  <span>Log Out</span>
                </Button> */}
                
               <button onClick={handleLogOut}>
               <a className="flex items-center hidden lg:inline px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover: hover:bg-gray-200 hover:text-gray-600">
                  Log Out
                </a>
               </button>
                
              </div>
              :
              ""
          }
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {
          user ?
            <div>
               <button onClick={handleLogOut}>
               <a className="flex items-center lg:inline px-6 py-3 text-gray-500  rounded-md hover: hover:bg-gray-200 hover:text-gray-600 ">
                  Log Out
                </a>
               </button>
            </div>
            :
            ""
        }
      </Collapse>
    </Navbar>
  );
};

export default Header2;