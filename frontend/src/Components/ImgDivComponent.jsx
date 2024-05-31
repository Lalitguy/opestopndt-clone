import ImageComponent from "./ImageComponent"

function ImgDivComponent(props) {

    return (
        <div className="lg:w-5/12 w-3/5 h-24 lg:h-auto  relative flex flex-col justify-center items-center lg:mx-10 pl-4 lg:pl-0">
            <ImageComponent src={props.src} opacity={true} round={true} scale={true}/>
            <div className="absolute lg:bottom-1 bottom-1/3 text-gray-100 font-mont font-medium  min-lg:text-sm opacity-100 ">{props.context}</div>
        </div>
    )
}

export default ImgDivComponent