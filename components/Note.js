import Link from 'next/link';

function Note() {
    return (
        <div className="w-1/2 p-4 flex flex-col justify-center items-center shadow-lg rounded-lg border-2 border-gray-200">
           <h1 className="text-xl text-pink-500 text-center">
           this is my todays note. Homework @10 p.m.
           </h1>
           <div className="w-1/2 mt-4 flex md:flex-row flex-col md:justify-around md:items-center justify-center items-center">
           <Link href='/'><a>Edit</a></Link>
           <Link href='/'><a>Delete</a></Link>
           <Link href='/'><a>Make Public</a></Link>
           </div>
        </div>
    )
}

export default Note;
