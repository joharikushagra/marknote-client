import React from 'react';

export default function Home() {

  const [ user, setUser ] = React.useState("");
  const [ jwt, setJwt ] = React.useState("");

  React.useEffect(() => {
    setUser(localStorage.getItem("username"))
    setJwt(localStorage.getItem("jwt"))
  }, []);

          
  return (
       <div className="h-screen flex flex-col justify-center items-center">
         <h1 className="tracking-widest text-4xl font-semibold text-grey-100 leading-loose">Marknote</h1>
         <button >
           <a href="http://localhost:1337/connect/google" className="p-3 w-1/5 rounded-lg bg-indigo-500 text-white text-center">
             Sign In
           </a>
         </button>
         {user} {jwt}
       </div>
  )
}
