export default function Hero(){
    return (
        <>
        
        {/* <div className="bg-orange-500 my-7 rounded-xl h-28 flex justify-center text-center items-center">
<h1 className=" text-4xl ">Transforming ideas into interactive, user-friendly websites that drive impact. </h1>
        </div> */}


        <div className="w-full bg-orange-200 py-40">
            {/* img */}
            <div className=" pl-16 pt-32">
                <img className="rounded-md 
                h-80 transform -rotate-3" 
                src="/hero22.webp" 
                alt="Hero-img" />
           </div>   {/* img end */}







            {/* text */}
            <div className="flex justify-end relative bottom-64 pr-72">
                <h1 className="font-bold 
                text-5xl 
                text-wrap 
                w-72  
                
                "> <span className="text-orange-500 ">Code</span> with Purpose. Design with <span className="text-red-400">Heart.</span></h1>
            </div>   {/* text end */}
        </div>
        
        </>
    )
}