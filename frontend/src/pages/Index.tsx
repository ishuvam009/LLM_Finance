import { Link } from 'react-router-dom'
import image1 from "../assets/mainimage.png"
import cardImg1 from "../assets/supabase.png"
import linkImg from "../assets/link.png"
import aiImg from "../assets/ai.webp"
import gemiImg from "../assets/gemini.png"
import lockImg from "../assets/lock.webp"
import { Card } from "../components/Card"
import { SignalHigh, BookText, Landmark, Search } from 'lucide-react';

export const Index = () => {
  return (
    <>
      {/* //main div */}
      <div className='mx-4 md:mx-20 lg:mx-40'>
        <div>
          <p className='text-2xl font-semibold p-4'>Aisk</p>
          <div className='flex flex-col lg:flex-row pt-10'>
            <div className='w-full lg:w-[60%]'>
              <p className='text-3xl md:text-4xl font-bold'>Ask Anything About <br /> Any Financial Document's</p>
              <p className='text-lg md:text-xl py-6 font-semibold text-gray-500'>Just Uploasd's links: Get intelligent answers instantly.</p>
              <div className='flex mb-8 gap-x-4'>
                <p className='content-end font-medium text-gray-500'>Powered By</p>
                <img src={gemiImg} alt="Google gemini AI" className='h-10 w-25' />
              </div>
              <div className='flex justify-center md:justify-start gap-x-4'>
                <Link to="/">
                  <button className='text-white font-semibold bg-green-500 py-2 px-6 rounded-2xl cursor-pointer'>Try Demo</button>
                </Link>
                <Link to="/chat">
                  <button className='font-semibold py-2 px-6 rounded-2xl border-gray-500 border-2 cursor-pointer'>Sign Up</button>
                </Link>
              </div>
            </div>
            <div className='w-full lg:w-[40%] mt-8 lg:mt-0'>
              <img className='w-full' src={image1} alt="stock-charts aisk" />
            </div>
          </div>
        </div>

        {/* //How it works. */}
        <div>
          <div className='flex justify-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>How It Works</h2>
          </div>
          <div className='container mx-auto px-4 md:px-8'>
            <div className='flex flex-col items-center gap-y-6 md:flex-row md:justify-between md:gap-x-8'>
              <Card
                image={linkImg}
                title='Past Document Link'
                subtitle='Supports all financial websites.'
              />
              <Card
                image={cardImg1}
                title='Ask Natural Questions'
                subtitle='Eg. "What is the net profit in 1st quater."'
              />
              <Card
                image={aiImg}
                title='Get Answers With Sources'
                subtitle='AI will reads and give contextual answers.'
              />
            </div>
          </div>
        </div>
        {/* //Who its for */}
        <div className='pt-20 px-4 md:px-0'>
          <div className='flex justify-center mb-16 '>
            <p className='text-3xl md:text-4xl font-bold'>Who It's For</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-8 md:gap-x-16'>
            <div className='flex items-start gap-x-8'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0'>
                <SignalHigh color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-medium mb-2'>Investor</p>
                <p className='text-lg md:text-xl text-gray-400'>Quickly summarize pitch decks.</p>
              </div>
            </div>
            <div className='flex items-start gap-x-8'>
              <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <BookText color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-medium mb-2'>Auditors</p>
                <p className='text-lg md:text-xl text-gray-400'>Scan compliance isssues.</p>
              </div>
            </div>
            <div className='flex items-start gap-x-8'>
              <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <Landmark color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-medium mb-2'>Finance Teams</p>
                <p className='text-lg md:text-xl text-gray-400'>Extract key figures reports.</p>
              </div>
            </div>
            <div className='flex items-start gap-x-8'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0'>
                <Search color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-2xl md:text-3xl font-medium mb-2'>Analysts</p>
                <p className='text-lg md:text-xl text-gray-400'>Compare rates across documents.</p>
              </div>
            </div>
          </div>
        </div>
        {/* //Security */}
        <div className='mt-20 flex flex-col md:flex-row gap-8 items-center'>
          <img src={lockImg} className='bg-white text-gray-500 h-20 w-20' />
          <div>
            <p className='text-xl md:text-2xl font-semibold text-center md:text-left'>Privacy matters — your information is stored securely and kept confidential.</p>
            <p className='text-lg md:text-xl text-gray-600 text-center md:text-left'>We don't just say it — we build with privacy from the ground up.</p>
          </div>
        </div>
        {/* //footer */}
        <div className='mt-20 md:mt-40 bg-slate-700 p-10 flex justify-center'>
          <p className='text-3xl md:text-4xl font-bold text-white'>Ready to unlock your documents?</p>
        </div>
      </div>
    </>
  )
}