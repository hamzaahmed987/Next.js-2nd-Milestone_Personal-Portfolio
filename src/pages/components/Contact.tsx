export default function Contact (){
    return(
        <>
        <div className="py-12 px-80 bg-orange-100">
            

            <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact <span className="text-orange-500">Us</span> </h2>
        <p className="mb-8">
          Have a question or want to collaborate? Feel free to reach out.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-orange-600">
              Name
            </label>
            <input
              type="text"
              id="name"   

              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email"   
 className="block text-sm font-medium text-orange-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full   
 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message"   
 className="block text-sm font-medium text-orange-600">
              Message
            </label>
            <textarea
              id="message"   

              
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:orange-indigo-500 focus:ring-orange-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-600   
 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
         


        </div>
        </>
    )
}