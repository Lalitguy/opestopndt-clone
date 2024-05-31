import icon from '../assets/iconmap.svg'

function MapLinkComponent() {
    const address = "PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi Mumbai - 400701."

    
    return (
        <div className="absolute lg:left-44 lg:top-1/4 lg:w-4/12 w-9/12  bg-blue-800 inset-2 bg-gradient-to-br from-blue-900 to-indigo-950 rounded-2xl lg:px-24 lg:p-16 font-mont text-white lg:text-lg text-sm lg:max-h-96 justify-self-center max-h-80 px-8 py-8 lg:justify-self-start mt-12 lg:mt-0">
            
           <p className="lg:text-4xl text-2xl mb-4">Onestop NDT</p><br/>
           <p className="mb-4 ">{address}</p><br/>
           
           <p className="mb-6 ">Landline - 022 4131 0099</p>

           <div className='flex'><a href='https://www.google.com/maps/@19.1453618,73.0088596,18z?entry=ttu' className=' block lg:w-8 w-6 p-1 bg-white rounded-lg'><img src={icon} className=' w-full'></img></a>
           <a href='https://www.google.com/maps/@19.1453618,73.0088596,18z?entry=ttu' className='text-white  font-mont border-transparent hover:border-white hover:border-b-2 transition-all duration-1000 ml-2 pb-1'>Google Map Link</a>
           </div>

           

        </div>
    )
}

export default MapLinkComponent