// const BigText = () => {
//   return (
//     <section className="w-screen min-h-screen overflow-hidden bg-[#fe6334] text-[#fee832]">
//       <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[0.7]">
//         <div className="text-[34vw]">Soda</div>
//         <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
//           <span className="inline-block">that</span>
//           <span className="inline-block max-md:text-[27vw]">makes</span>
//           <span className="inline-block max-md:text-[40vw]">you</span>
//         </div>
//         <div className="text-[34vw]">Smile</div>
//       </h2>
//     </section>
//   );
// };

// export default BigText;

'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const BigText = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom', // يبدأ الأنيميشن أول ما السكشن يظهر من تحت
          end: 'top 20%',
          scrub: 1.5, // الحركة مرتبطة بسرعة السكرول
        },
      })

      // تحريك الكلمات لتظهر من الأسفل مع تكبير طفيف
      tl.from('.word', {
        y: 100,
        opacity: 0,
        rotate: 2,
        scale: 0.8,
        stagger: 0.2, // تأخير بين كل كلمة والتانية
        ease: 'power3.out',
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="w-screen min-h-screen overflow-hidden bg-[#2D1B14] text-[#D2B48C] flex items-center justify-center"
    >
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[0.7]">
        {/* السطر الأول */}
        <div className="word text-[32vw]">Pure</div>

        {/* السطر الثاني - متجاوب */}
        <div className="grid gap-[3vw] text-[32vw] md:flex md:justify-center md:text-[11vw]">
          <span className="word inline-block">Coffee</span>
          <span className="word inline-block max-md:text-[25vw]">that</span>
          <span className="word inline-block max-md:text-[38vw]">Wakes</span>
        </div>

        {/* السطر الثالث */}
        <div className="word text-[32vw]">You</div>
      </h2>
    </section>
  )
}

export default BigText
