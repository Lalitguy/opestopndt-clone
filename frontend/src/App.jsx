import Form from './Components/Form';
import ImageComponent from './Components/ImageComponent';
import MapLinkComponent from './Components/MapLinkComponent';
import oneStopNdt from './assets/onestopndt.svg';
import oneStopNdt_Footer from './assets/white-logo.png';
import Map from './assets/map.png'
import ImgDivComponent from './Components/ImgDivComponent';
import companyImg from './assets/Images/company.png';
import jobImg from './assets/Images/jobs.png';
import articlesImg from './assets/Images/articles.png';
import webinarImg from './assets/Images/webinars.png';
import forumImg from './assets/Images/forums.png';
import ApplicationNotesImg from './assets/Images/applicationNotes.png';

function App() {


  return (
    <div className='w-full'>
      <div className='w-30'>
        <img src={oneStopNdt} className='mx-6 my-2 lg:mx-32 lg:my-6 lg:w-48 w-32' />
      </div>

      <Form />

      <div className='relative mb-28 mt-4'>
        <ImageComponent src={Map} bg={true} />
        <MapLinkComponent/>
      </div>

      {/*<div className="w-full relative">
            <img src={Map} className="w-full relative"/>
            <MapLinkComponent/>
  </div>*/}

<div className='flex flex-col lg:flex-row w-full pr-4 justify-center items-center mb-28'>
      <div className='flex my-6 lg:my-0'>
        <ImgDivComponent context="Companies" src={companyImg}/>
        <ImgDivComponent context="Jobs" src={jobImg}/>
      </div>

      <div className='flex my-6 lg:my-0'>
        <ImgDivComponent context="Articles" src={articlesImg}/>
        <ImgDivComponent context="Webinars" src={webinarImg}/>
      </div>

      <div className='flex my-6 lg:my-0'>
        <ImgDivComponent context="Forums" src={forumImg}/>
        <ImgDivComponent context="Application Notes" src={ApplicationNotesImg}/>
      </div>
      </div>
    

    <div className='w-full bg-gradient-to-br from-blue-900 to-blue-950 '>
  <div className='w-full flex lg:justify-end justify-center pt-16 pb-10'>
  <img src={oneStopNdt_Footer} className='mx-6 lg:my-2 lg:mx-40  lg:w-52 w-40' />
  </div>
    <hr className=' lg:p-6 p-1 lg:mx-40'/>

    
    </div>
    </div>
  )
}

export default App
