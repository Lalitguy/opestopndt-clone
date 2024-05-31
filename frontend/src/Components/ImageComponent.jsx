function ImageComponent(props) {

    return (
        <div className={`w-full relative ${props.round ? 'lg:rounded-xl rounded-lg': ''} overflow-hidden `} >
            <img src={props.src} className={`w-full ${props.opacity ? 'opacity-95 brightness-75': ' opacity-100'} ${props.round ? 'rounded-xl': ''} ${props.scale ? ' hover:scale-105 transition duration-200': ""}
            ${props.bg ? 'h-screen': ''}`}/>
           
        </div>
    )
}

export default ImageComponent