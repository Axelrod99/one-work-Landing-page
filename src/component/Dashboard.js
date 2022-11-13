import React from 'react'
import A_header from './A_header/index'
import Linee from '../assets/icons/Linee.png'
import bell from '../assets/icons/bell.png'
import illus1 from '../assets/icons/illus1.png'
import illus2 from '../assets/icons/illus2.png'
import illus3 from '../assets/icons/illus3.png'
import Edit from '../assets/icons/Edit.png'
import cloud from '../assets/icons/cloud.png'
import others from '../assets/icons/others.png'

const Dashboard = () => {
    return (
      <div>
        <A_header/>

        <div className='flex justify-end px-4'>
            <img className='h-10 flex lg:hidden' src={others}/>
        </div>

        <div className='flex'>
            <aside className='flex-col w-[15%] h-full items-center hidden lg:flex xo:text-sm xl:text-lg'>
                <ul>
                    <li className='my-1 flex justify-center'>
                        <a className='font-semibold'>Dashboard</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>Browse gigs</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>Browse jobs</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>My gigs</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>My jobs</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>Settings</a>
                    </li>
                    
                    <img className='' src={Linee}/>

                    <li className='my-1 flex justify-center'>
                        <a>Premium</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>Referrals</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>FAQ</a>
                    </li>
                    <li className='my-1 flex justify-center'>
                        <a>Support</a>
                    </li>
                </ul>
            </aside>

            <div className='flex gap-3 w-[100%] lg:w-[85%] justify-center flex-col sm:flex-row '>
                <section className='sm:w-[48%] flex flex-col gap-3'>

                        <div className='bg-[#F5F4FF] flex flex-col'>
                            <div className='h-[60px] bg-white flex'>
                                <p className='flex items-center mx-5'>Notification</p>
                            </div>

                            <div className='flex p-2 gap-3'>
                                <img className='h-11' src={bell}/>
                                <div>
                                    <p className='text-sm'>Congratulations on joining one-work! We are here to help you find new work opportunities, whether you are looking for short one-off tasks or an ongoingrole. You can browse existing jobs or create a  to advertise your services.</p>

                                    <div className='flex gap-3 py-4 text-sm'>
                                        <button className='bg-blue-200'>Browse Jobs</button>
                                        <button className='bg-blue-200'>Create Gig</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#F5F4FF] flex flex-col'>
                            <div className='h-[60px] bg-white flex border-b-2 border-b-grey-200'>
                                <p className='flex items-center mx-5'>Get started</p>
                            </div>

                            <div className='grid xl:grid-cols-3 lg:grid-cols-2 bg-white justify-center'>
                                <div className='w-44 h-60 py-3'>
                                    <div className='flex justify-center'><img className='h-20' src={illus1}/></div>
                                    <p className='font-bold text-xs py-3 flex justify-center'>Publish your first Gig</p>
                                    <p className='text-xs '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, mattis sed lorem massa nunc.</p>
                                    <div className='flex justify-center'><button className='bg-red-200'>Publish</button></div>
                                </div>

                                <div className='w-44 h-60 py-3'>
                                    <div className='flex justify-center'><img className='h-20' src={illus2}/></div>
                                    <p className='font-bold text-xs py-3 flex justify-center'>Explore Job Opportunities</p>
                                    <p className='text-xs '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, mattis sed lorem massa nunc.</p>
                                    <div className='flex justify-center'><button className='bg-red-200'>Publish</button></div>
                                </div>

                                <div className='w-44 h-64 py-3'>
                                    <div className='flex justify-center'><img className='h-20' src={illus3}/></div>
                                    <p className='font-bold text-xs py-1 flex justify-center'>Learn about Job Mining program</p>
                                    <p className='text-xs '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, mattis sed lorem massa nunc.</p>
                                    <div className='flex justify-center'><button className='bg-red-200'>Publish</button></div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white flex flex-col text-xs gap-3'>
                            <div className='border-2 border-grey-200 rounded-lg p-2'>
                                <div className='flex justify-between px-3'>
                                    <div className='bg-green-500 px-2 rounded-md'><p>Job</p></div>
                                    <p>Posted by James Baldwin</p>
                                    <div className='flex gap-2'>
                                        <p>Required skills:</p> 
                                        <div className='bg-purple-400 px-1 rounded-md'><p>3D Designs</p></div>
                                    </div>
                                </div>

                                <p className='font-semibold text-xs px-3 py-2'>Digital artist needed</p>

                                <div className='flex justify-between gap-5'>
                                    <p className='text-[10px] px-3'>Hello, I’m looking for a 3D designer that create beautiful 3d objects for my project</p>

                                    <div className='flex flex-col gap-3'>
                                        <p>Budget</p>
                                        <p className='font-semibold text-sm'>$1000</p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className='border-2 border-grey-200 rounded-lg p-2'>
                                <div className='flex justify-between px-3'>
                                    <div className='bg-green-500 px-2 rounded-md'><p>Job</p></div>
                                    <p>Posted by James Baldwin</p>
                                    <div className='flex gap-2'>
                                        <p>Required skills:</p> 
                                        <div className='bg-purple-400 px-1 rounded-md'><p>3D Designs</p></div>
                                    </div>
                                </div>

                                <p className='font-semibold text-xs px-3 py-2'>Digital artist needed</p>

                                <div className='flex justify-between gap-5'>
                                    <p className='text-[10px] px-3'>Hello, I’m looking for a 3D designer that create beautiful 3d objects for my project</p>

                                    <div className='flex flex-col gap-3'>
                                        <p>Budget</p>
                                        <p className='font-semibold text-sm'>$1000</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className='border-2 border-grey-200 rounded-lg p-2'>
                                <div className='flex justify-between px-3'>
                                    <div className='bg-green-500 px-2 rounded-md'><p>Job</p></div>
                                    <p>Posted by James Baldwin</p>
                                    <div className='flex gap-2'>
                                        <p>Required skills:</p> 
                                        <div className='bg-purple-400 px-1 rounded-md'><p>3D Designs</p></div>
                                    </div>
                                </div>

                                <p className='font-semibold text-xs px-3 py-2'>Digital artist needed</p>

                                <div className='flex justify-between gap-5'>
                                    <p className='text-[10px] px-3'>Hello, I’m looking for a 3D designer that create beautiful 3d objects for my project</p>

                                    <div className='flex flex-col gap-3'>
                                        <p>Budget</p>
                                        <p className='font-semibold text-sm'>$1000</p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-3 flex justify-center'><button className='bg-green-200'>Show more</button></div>
                            
                        </div>

                </section>

                <section className='sm:w-[48%] flex flex-col gap-3'>
                    <div className=''>
                        <div className='flex flex-col gap-5 bg-[#F5F4FF] p-2'>
                            <div className='flex justify-between'>
                                <p className='font-semibold'>Michael Aang</p>

                                <img className='h-5' src={Edit}/>
                            </div>

                            <div className='flex justify-around text-xs'>
                                <div className='bg-white w-24 h-14 flex justify-center items-center'>
                                    <p>Rating</p>
                                </div>

                                <div className='bg-white w-24 h-14 flex justify-center items-center'>
                                    <p>Finished Gigs</p>
                                </div>

                                <div className='bg-white w-24 h-14 flex justify-center items-center'>
                                    <p>Finished Jobs</p>
                                </div>
                            </div>

                        </div>

                        <div className='bg-white'>
                            <div className='px-3'>
                                <div className='flex justify-between text-xs border-b-2 border-b-grey-200 py-3'>
                                    <p >Complete your profile</p>
                                    <p>16%</p>
                                </div>

                                <p className='text-xs font-semibold py-2'>Improve your profile by completing:</p>

                                <div className='flex justify-between text-xs py-2'>
                                    <p className='font-semibold'>Description</p>
                                    <p>+15%</p>
                                </div>

                                <div className='flex justify-between text-xs py-2 font-semibold'>
                                    <p>Publishing Gigs</p>
                                    <p>+15%</p>
                                </div>

                                <div className='flex text-xs font-semibold py-2'>
                                    <p>view all </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='bg-[#F5F4FF] text-xs'>
                            <div className='h-14 flex bg-white justify-around items-center'>
                                <p className='text-sm'>wallet</p>
                                <p className='text-xs'>Manage funds</p>
                            </div>

                            <div className='px-3 font-semibold'>
                                <div className='flex justify-around py-1'>
                                    <p>Estimated Balance</p>
                                    <p>$0</p>
                                </div>

                                <div className='flex justify-around py-2'>
                                    <p>Job Mining Balance</p>
                                    <p>0 TIME</p>
                                </div>
                            </div>

                            <div className='flex justify-around px-2'> 
                                <button className='bg-blue-200'>DEPOSIT</button>
                                <button className='bg-blue-200'>WITHDRAW</button>
                            </div>
                        </div>

                        <div className='bg-white text-xs'>
                            <div className='flex justify-between p-3'>
                                <p>Default wallet address</p>
                                
                                <img className='h-5' src={Edit}/>
                            </div>

                            <div className='px-3 flex justify-between'>
                                <img className='' src={cloud}/>


                                <div className='xo:text-[6px] sm:text-[8px] md:text-[10px] lg:text-[11px]'>
                                    <p>Cloud Wallet</p>
                                    <p>0xhjjdadiawdiIJJKi893y89jasvjk78G3JAJ7T3hjvavd87q89Gg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

      </div>
    )
  }
  
  export default Dashboard
  