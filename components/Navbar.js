import {useRouter} from 'next/router';

function Navbar({user}) {
const router = useRouter();

const handleLogout = () => {
  localStorage.setItem("jwt", "")
  localStorage.setItem("username", "")
  router.push("/")
}
    return (
        <div className="w-full p-5 bg-gray-200 shadow-lg">
        <div className="px-10 flex md:flex-row flex-col md:justify-between md:items-center justify-center items-center">
          <h1 className="text-2xl text-blue-500">Marknote</h1>
          
           <ul className="w-1/4 flex md:flex-row flex-col md:justify-evenly md:items-center justify-center items-center">
             <li className="text-grey-500">{user}</li>
             <li className="text-grey-500">Dashboard</li>
             <li className="text-grey-500" onClick={handleLogout}>Logout</li>
          </ul>
        </div>
        </div>
    )
}

export default Navbar
