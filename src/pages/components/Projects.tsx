export default function Projects(){

    return(

        <>
        
        <div className=" w-full h-full py-32  bg-orange-200 ">
           
           <h1 className="text-center pb-3 font-bold text-3xl"> Featued <span className=" text-orange-500">Projects</span></h1>


           <p className="text-center px-60 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod officiis in autem! Ipsum repellendus molestiae quod quis vitae eaque fuga assumenda quas, delectus atque dolor aliquid velit ea. Quis.</p>


           <div className="w-full h-96 bg-orange-200 flex">
                
                {/* left */}
                 <div className="inline-block w-1/2 h-full bg-orange-200 p-8">
                
                <img className="h-80 flex mx-32 rounded-lg"
                src="ui-ux.jpg" 
                alt="ecommerce-project" />
                <h3 className="pl-28 pt-5 font-bold text-2xl">Branding & Design</h3>
                <p className=" px-24 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis aliquid, eius veritatis quod ullam.</p>

                 </div>


                 {/* right */}
                 <div className="inline-block w-1/2 h-full bg-orange-200 p-8  ">
                 
                 <img className="h-80 flex mx-28 rounded-lg"
                src="ux.jpeg" 
                alt="ecommerce-project" />
                <h3 className="pl-28 pt-5 font-bold text-2xl">UI & UX</h3>
                <p className=" px-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis aliquid, eius veritatis quod ullam.</p>
                </div>
                 </div>

        </div>



        {/* --------------- */}


        
        
        </>
    )
}