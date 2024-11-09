// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (

    <>
    <nav className="flex justify-between items-center p-6 bg-orange-50">
    {/* logo */}
      <div className="font-bold
       text-lg
       border-4
      border-y-0
       border-x-orange-700 
       text-orange-800 
       px-3 py-1 
       rounded-full">
        H-A
      </div>
{/* links */}
       <div className="flex space-x-8  text-orange-800 font-medium text-[1rem] ">
        <Link href="#About">
        About
        </Link>
        <Link href="#Projects">
        Projects
        </Link>
        <Link href="#Contact">
        Contact
        </Link>
      </div>
    
    </nav>


    </>
  );
}
