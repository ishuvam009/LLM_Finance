import './App.css'
import { Link } from 'react-router-dom'
import image1 from "./assets/mainimage.png"
import cardImg1 from "./assets/supabase.png"
import linkImg from "./assets/link.png"
import aiImg from "./assets/ai.webp"
import { Card } from "./components/Card"
function App() {

  return (
    <>
      {/* //main div */}
      <div className='mx-40'>
        <div>
          <p className='text-2xl font-semibold p-4'>Aisk</p>
          <div className='flex pt-10'>
            <div className='w-[60%]'>
              <p className='text-4xl font-bold'>Ask Anything About <br /> Any Financial Document's</p>
              <p className='text-xl py-6 font-semibold text-gray-500'>Uploasd's links: Get intelligent answers instantly.</p>
              <Link to="">
                <button className='text-white font-semibold bg-green-500 py-2 px-6 rounded-2xl'>Try Demo</button>
              </Link>
            </div>
            <div className='w-[40%]'>
              <img className='' src={image1} alt="" />
            </div>
          </div>
        </div>
        {/* //How it works. */}
        <div className='pt-10'>
          <div className='flex justify-center content-center'>
            <p className='text-4xl font-bold'>How It Works</p>
          </div>
          <div className='flex pt-10 justify-center gap-x-15'>
            <Card
              image={linkImg}
              title='Past Document Link'
              subtitle='Supports all financial websites.'
            />
            <Card
              image={aiImg}
              title='Ask Natural Questions'
              subtitle='Eg. "What is the net profit in 1st quater." '
            />
            <Card
              image={cardImg1}
              title='Get Answers With Sources'
              subtitle='AI will reas and give contextual answers.'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
