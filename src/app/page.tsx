import Hero from '../components/Hero';
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className='flex flex-col'>
        <Hero/>

        <div className='flex flex-col items-center h-[400px]'>
            <h1 className='text-[28px] font-extrabold text-sky-800 text-center w-[full] mt-[65px] pl-10 pr-10'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>

            <p className='text-[1.25rem] text-justify mt-[35px] w-[full] pl-24 pr-24'>
            The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
            </p>
        </div>

        <div className='flex justify-center gap-4 mt-9 mb-9'>
            <Image className='rounded-xl'
            src="/firstimg.jpg"
            alt="first image"
            height={350}
            width={350}
            />
            <Image className='rounded-xl'
            src="/secondimg.jpg"
            alt="first image"
            height={350}
            width={350}
            />
            <Image className='rounded-xl'
            src="/thirdimg.jpg"
            alt="first image"
            height={350}
            width={350}
            />
        </div>

        <div className='flex justify-center gap-2 h-[580px] mt-9 mb-5'>
        <Image className='rounded-xl'
            src="/slider3.jpg"
            alt="first image"
            height={600}
            width={535}
            />
            <Image className='rounded-xl'
            src="/slider5.jpg"
            alt="first image"
            height={600}
            width={535}
            />
        </div>

        <div className='flex flex-row gap-3 justify-center items-center w-full h-5 mt-9 mb-6'>
            <div className='w-20 h-1 bg-gray-800'></div>
            <div className='w-20 h-1 bg-gray-300'></div>
            <div className='w-20 h-1 bg-gray-300'></div>
            <div className='w-20 h-1 bg-gray-300'></div>
        </div>
        <hr className='w-[full] ml-24 mr-24' />

        <div className='flex flex-col mb-10'>
            <h1 className='text-4xl font-extrabold mt-10 mb-10 pl-24 text-sky-800'>Core Courses Sequence</h1>

            <div className='flex gap-6 pl-24'>
            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px]'
            src="/profunda.jpg"
            alt="first image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold '>Programming <br></br> Fundamentals</h3>
            </div>

            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] mt-[-15px]'
            src="/web2.jpg"
            alt="second image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold '>Web 2 Using NextJS</h3>
            </div>

            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] mt-[-15px]'
            src="/earnas.jpg"
            alt="third image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold '>Earn as You Learn</h3>
            </div>
            </div>
        </div>


        <div className='flex flex-col h-[720px]'>
            <h1 className='text-4xl font-extrabold mt-10 mb-10 pl-24 text-sky-800'>Advanced Courses</h1>

            <div className='flex gap-6 pl-24'>
            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] mt-[-14px]'
            src="/courseai.jpg"
            alt="first image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold '>Artificial intelligence</h3>
            </div>

            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] mt-[-14px]'
            src="/courseweb.jpg"
            alt="second image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold '>Web 3 and Metaverse</h3>
            </div>

            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] mt-[-14px]'
            src="/coursecloud.jpg"
            alt="third image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold '>Cloud-Native Computing</h3>
            </div>

            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] '
            src="/courseamb.jpg"
            alt="third image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold text-center'>Ambient Computing and <br /> IoT</h3>
            </div>
            </div>

            <div className='flex gap-6 pl-24 mt-10'>
            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] '
            src="/coursegeno.jpg"
            alt="third image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold text-center '>Genomics and <br /> Bioinformatics</h3>
            </div>

            <div className='flex flex-col justify-evenly items-center border-slate-200 border-2 rounded-xl'>
            <Image className='rounded-t-xl w-[250px] h-[200px] '
            src="/coursenetwork.jpg"
            alt="third image"
            height={200}
            width={200}
            />
            <h3 className='text-[20px] mt-2 font-bold text-center'>Network Programability <br /> and Automation</h3>
            </div>
            </div>
        </div>

    </div>
  )
}

export default page