import React from 'react'


function Part2() {
  return (
    <div className='text-white'>
        <style>
            {`
            @keyframes fadeIn {
                from {
                opacity: 0;
                }
                to {
                opacity: 1;
                }
            }
            `}
        </style>
        <div className="relative flex justify-center items-center text-5xl py-12 h-screen text-center overflow-hidden">
            <video
            className="absolute top-0 left-0 w-full h-full min-w-full min-h-full object-cover z-0"
            src="../../Images/maths_video.mp4"
            autoPlay
            loop
            muted
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0"/>
            <div className="relative z-10 text-black text-4xl md:text-6xl " style={{ animation: 'fadeIn 2s ease-in-out' }}>
            HI, FELLOW MATHEMATICIAN
            </div>
        </div>
        <div className="flex flex-col gap-20 py-20">
            <div id="about" className="scroll-offset flex flex-row mx-24 gap-20 flex-col md:flex-row">
                <div className="w-[100%] md:w-[40%] relative">
                    <div className="absolute left-2 text-4xl underline underline-offset-[10px]">
                    About Us
                </div>
            </div>
            <div className="w-[100%] md:w-[60%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugiat non veritatis, amet suscipit inventore aliquid commodi eius, quae expedita quidem unde eligendi est qui cumque aspernatur obcaecati! Debitis amet voluptates dolorem autem tempora deleniti commodi error nam odio, ex sint non sit ea quidem id. Vel eius vero cupiditate eligendi, non quasi nulla autem explicabo officia quibusdam quas commodi error ea ab magnam nisi tempora aliquid iure possimus quo molestias accusamus? Ad hic inventore quod culpa doloremque vero totam, officiis rem esse amet sit aperiam commodi molestias quam ducimus deserunt? Nihil, nemo voluptate? Distinctio enim dolore animi eveniet obcaecati.
            </div>
        </div>
        <div className="flex flex-row mx-24 gap-20 flex-col-reverse md:flex-row">
            <div className="w-[100%] md:w-[60%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugiat non veritatis, amet suscipit inventore aliquid commodi eius, quae expedita quidem unde eligendi est qui cumque aspernatur obcaecati! Debitis amet voluptates dolorem autem tempora deleniti commodi error nam odio, ex sint non sit ea quidem id. Vel eius vero cupiditate eligendi, non quasi nulla autem explicabo officia quibusdam quas commodi error ea ab magnam nisi tempora aliquid iure possimus quo molestias accusamus? Ad hic inventore quod culpa doloremque vero totam, officiis rem esse amet sit aperiam commodi molestias quam ducimus deserunt? Nihil, nemo voluptate? Distinctio enim dolore animi eveniet obcaecati.
            </div>
            <div className="w-[100%] md:w-[40%] relative">
                <div className="absolute right-2 text-4xl underline underline-offset-[10px]">
                Mentorship Facilities
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Part2
