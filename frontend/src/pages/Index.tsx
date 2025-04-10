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
      <div className='mx-40'>
        <div>
          <p className='text-2xl font-semibold p-4'>Aisk</p>
          <div className='flex pt-10'>
            <div className='w-[60%]'>
              <p className='text-4xl font-bold'>Ask Anything About <br /> Any Financial Document's</p>
              <p className='text-xl py-6 font-semibold text-gray-500'>Uploasd's links: Get intelligent answers instantly.</p>
              <div className='flex mb-8 gap-x-4'>
                <p className='content-end font-medium text-gray-500'>Powered By</p>
                <img src={gemiImg} alt="Google gemini AI" className='h-10 w-25' />
              </div>
              <Link to="/">
                <button className='text-white font-semibold bg-green-500 py-2 px-6 rounded-2xl cursor-pointer'>Try Demo</button>
              </Link>
              <Link to="/">
              <button className='font-semibold py-2 px-6 rounded-2xl border-gray-500 border-2 ml-4 cursor-pointe'>Sign Up</button>
              </Link>
            </div>
            <div className='w-[40%]'>
              <img className='' src={image1} alt="" />
            </div>
          </div>
        </div>
        {/* //How it works. */}
        <div className='pt-20'>
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
              image={cardImg1}
              title='Ask Natural Questions'
              subtitle='Eg. "What is the net profit in 1st quater." '
            />
            <Card
              image={aiImg}
              title='Get Answers With Sources'
              subtitle='AI will reads and give contextual answers.'
            />
          </div>
        </div>
        {/* //Who its for */}
        <div className='pt-20'>
          <div className='flex justify-center'>
            <p className='text-4xl font-bold'>Who It's For</p>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-x-6 mt-10'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto'>
                <SignalHigh color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-4xl font-medium'>Investor</p>
                <p className='text-2xl text-gray-400'>Quickly summarize pitch decks.</p>
              </div>
            </div>
            <div className='flex gap-x-6 mt-10'>
              <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto'>
                <BookText color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-4xl font-medium'>Auditors</p>
                <p className='text-2xl text-gray-400'>Scan compliance isssues.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-x-6 mt-10'>
              <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto'>
                <Landmark color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-4xl font-medium'>Investor</p>
                <p className='text-2xl text-gray-400'>Quickly summarize pitch decks.</p>
              </div>
            </div>
            <div className='flex gap-x-6 mt-10'>
              <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto'>
                <Search color="#ffffff" className='h-10 w-10' />
              </div>
              <div>
                <p className='text-4xl font-medium'>Investor</p>
                <p className='text-2xl text-gray-400'>Quickly summarize pitch.</p>
              </div>
            </div>
          </div>
        </div>
        {/* //Security */}
        <div className='mt-10 flex gap-x-8'>
          <img src={lockImg} className='bg-white text-gray-500 h-20 w-20'/>
          <div>
          <p className='text-2xl font-semibold content-center'>Privacy matters — your information is stored <br />securely and kept confidential.</p>
          <p className='text-xl text-gray-600'>We don’t just say it — we build with privacy from the ground up.</p>
          </div>
        </div>
        {/* //footer */}
        <div className='mt-30 bg-slate-700 p-10'>
          <p className='text-4xl font-bold text-white flex justify-center'>Ready to unlock your documents?</p>
        </div>
      </div>
    </>
  )
}