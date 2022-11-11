import '../src/App.css'
import Header from './component/Header/index'
import hiring from './assets/images/hiring.png'
import first from './assets/icons/first.png'
import star from './assets/icons/Star.png'
import iicon from './assets/icons/iicon.png'
import grid1 from './assets/icons/grid1.png'
import blog1 from './assets/images/blog1.png'
import blog2 from './assets/images/blog2.png'
import blog3 from './assets/images/blog3.png'
import Footer from './component/Footer/index'


function App() { 
  return (
    <div>
      <Header/>

      <div className='flex w-full p-10 h-[100vh]' id='aaa'>
        <div className='w-full flex flex-col justify-center'>
          <p className='font-bold text-3xl'>Be your own boss</p>
          <p className='font-semibold'>Work from anywhere and earn crypto. One-Work is a global marketplace where you can find interesting and profitable gigs to do.</p>
          <div className='flex gap-2 my-4'>
            <button className='h-9 items-center bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded flex whitespace-nowrap'>Find Jobs</button>
            <button className=' bg-purple-600 h-9 items-center hover:bg-transparent hover:text-purple-500  text-white font-semibold hover:border-purple-600 py-2 px-4 border border-purple-500 hover:border-transparent rounded flex whitespace-nowrap'>Find Talents</button>
          </div>
        </div>

        <div className='w-full flex justify-center items-center'>
          <img className='xl:h-96 lg:h-80 md:h-72 sm:h-64 flex' src={hiring}/>
        </div>
      </div>


      <section className='bg-[#B5AFFF29] grid'>
        <div className='py-10'>
          <div className='flex justify-between px-14'>
            <p className='font-bold'>New Gigs</p>
            <p className='text-xs flex items-center font-semibold text-[#7C60FF]'>Show all gigs</p>
          </div>
          <p className='font-semibold px-14'><span className='text-[#7C60FF] font-semibold'>22,765</span> available on the platform</p>

          <div className='justify-items-center pt-5 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-10'>
            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img className='h-10 mt-1' src={first}/>
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img className='mt-1' src={star}/></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='text-xs mb-1 w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='text-xs mb-1 bg-slate-300 w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='text-xs bg-slate-300 w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-4'>
                <p className='font-semibold'>$800</p>
                <button className='bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>

            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img className='h-10 mt-1' src={first}/>
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img className='mt-1' src={star}/></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='mb-1 text-xs w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='mb-1 text-xs bg-slate-300 w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='text-xs bg-slate-300 w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-3'>
                <p className='font-semibold'>$800</p>
                <button className='bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>

            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img className='h-10 mt-1' src={first}/>
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img className='mt-1' src={star}/></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='text-xs mb-1 w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='text-xs mb-1 bg-slate-300 w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='text-xs bg-slate-300 w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-3'>
                <p className='font-semibold'>$800</p>
                <button className='bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>

            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img className='h-10 mt-1' src={first}/>
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img className='mt-1' src={star}/></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='mb-1 text-xs w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='mb-1 text-xs bg-slate-300 w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='text-xs bg-slate-300 w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-3'>
                <p className='font-semibold'>$800</p>
                <button className='bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex justify-around p-10'>
          <div>
            <p className='font-bold text-3xl'>New Crypto Jobs</p>
            <p className='text-xl'><span className='text-[#7C60FF]'>22,765</span> available on the platform</p>
          </div>

          <div className='bg-[#D9D9D9] h-10 w-60 rounded-3xl flex'>
            <div className='bg-white border-2 border-purple-100  w-32 h-10 rounded-3xl'><p className='h-10 flex  rounded-3xl justify-center items-center text-xs font-semibold'>Freelance</p></div>
            <p className='ml-5 h-10 flex items-center text-xs font-semibold'>Fulltime</p>
          </div>

          <p className='text-xs flex items-center text-purple-600'>Show all jobs</p>
        </div>

        <div className='py-5 grid px-10 gap-3 lg:grid-cols-2 justify-items-center'>
          <div className='h-[340px] w-[380px] bg-[#F3F2FF] rounded-md p-2'>
            <div className=' flex w-full my-5 px-5'>
              
              <div className='w-[50%]'>
                <img className='h-14' src={iicon}/>
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                      <p className='my-2 font-semibold'>mini crypto exchange web by laravel</p>
                      <p className='text-xs font-semibold'>Hiring Freelancer</p>
                    </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>

            
          </div>

          <div className='h-[340px] w-[380px] bg-[#F3F2FF] rounded-md p-2'>
            <div className=' flex w-full my-5 px-5'>
              
              <div className='w-[50%]'>
                <img className='h-14' src={iicon}/>
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                      <p className='my-2 font-semibold'>mini crypto exchange web by laravel</p>
                      <p className='text-xs font-semibold'>Hiring Freelancer</p>
                    </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>

            
          </div>

          <div className='h-[340px] w-[380px] bg-[#F3F2FF] rounded-md p-2'>
            <div className=' flex w-full my-5 px-5'>
              
              <div className='w-[50%]'>
                <img className='h-14' src={iicon}/>
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                      <p className='my-2 font-semibold'>mini crypto exchange web by laravel</p>
                      <p className='text-xs font-semibold'>Hiring Freelancer</p>
                    </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>

            
          </div>


          <div className='h-[340px] w-[380px] bg-[#F3F2FF] rounded-md p-2'>
            <div className=' flex w-full my-5 px-5'>
              
              <div className='w-[50%]'>
                <img className='h-14' src={iicon}/>
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                      <p className='my-2 font-semibold'>mini crypto exchange web by laravel</p>
                      <p className='text-xs font-semibold'>Hiring Freelancer</p>
                    </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='bg-transparent border-2 border-purple-300 border-purple rounded text-xs text-[purple] p-1'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>

          </div>
        </div>


        <div className='px-10 py-2 w-full'>
          <p className='px-10'>How can you find work?</p>

          <div className='grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center'>
            <div className='w-60 py-7'>
              <img className='h-14' src={grid1}/>
              <p className='pt-1'>Create account</p>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='w-60 py-7'>
              <img className='h-14' src={grid1}/>
              <p className='pt-1'>Create account</p>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='w-60 py-7'>
              <img className='h-14' src={grid1}/>
              <p className='pt-1'>Create account</p>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>


      <section className='p-10 bg-[#7C60FF]'>
        <div className='flex justify-between'>
          <p className='text-3xl font-semibold text-white'>Skills</p>
          <p className='text-sm flex items-center text-white'>Show all gigs</p>
        </div>

        <p className='text-white'>Hire professionals with a wide range of skills, or offer your own in-demand expertise.</p>

        <div>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>IT & NETWORKING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>DATA SCIENCE & ANALYTICS</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>ACCOUNTING & CONSULTING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>SALES & MARKETING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>TRANSLATION</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>CUSTOMER SERVICE</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>GAMING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>ENGINEERING & ARCHITECTURE</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>WRITING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>ADMIN SUPPORT</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>WEB, MOBILE & SOFTWARE DEV</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>LEGAL</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>DESIGN & CREATIVE</button>
        </div>
      </section>


      <section className='p-10'>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>Blog</p>
          <p className='text-xs flex items-center'>Show more articles</p>
        </div>

        <div className='flex py-10 justify-around'>
          <div className='w-[270px] h-[410px] '>
            <img className='p-4' src={blog3}/>

            <p className='text-xs py-3'>Aug 16, 2022</p>
            <p className='text-sm font-semibold pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-xs border-b-2 border-indigo-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing......</p>
          </div>

          <div className='w-[270px] h-[410px]'>
            <img className='p-4' src={blog1}/>

            <p className='text-xs py-3'>Aug 16, 2022</p>
            <p className='text-sm font-semibold pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-xs border-b-2 border-indigo-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing......</p>
          </div>

          <div className='w-[270px] h-[410px] mt-11'>
            <img className='p-4' src={blog2}/>

            <p className='text-xs py-3'>Aug 16, 2022</p>
            <p className='text-sm font-semibold pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-xs  border-b-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing......</p>
          </div>

          {/* <img className='' src={blog2}/>
          <img className='' src={blog3}/> */}
        </div>
      </section>

      <Footer/>

    </div>
  );
}

export default App;