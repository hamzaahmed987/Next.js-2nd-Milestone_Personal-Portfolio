export default function Footer(){
    return(
        <>
        <div className="w-full h-auto bg-orange-50 flex justify-between p-6">

            {/* contacts */}
            <div>
                <h3 className="font-medium">Contacts</h3>
                <ul>
                    <p>0318-XXXXXXX</p>
                    <p>abc@gmail.com</p>
                </ul>
            </div>

            {/*  copyright */}

            <div className="text-center">
                <p className="text-center pt-9">
                    © Copyright 2024 HTML.am
                </p>
            </div>

            {/* links */}

            <div className="text-slate-800">
                <ul><a href="https://www.linkedin.com/in/hamza-ahmed-9b38402b3" target="_blank">Linkedin</a></ul>
                <ul><a href="#">Instagram</a></ul>
                <ul><a href="#">Facebook</a></ul>
            </div>


        </div>
        </>
    )
}