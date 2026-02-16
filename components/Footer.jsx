// import CircleText from './CircleText'
// import Logo from './Logo'

// const Footer = () => {
//   return (
//     <footer className="bg-[#fee832] text-[#fe6334]">
//       <div className="relative">
//         <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
//           <Logo />
//           <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
//             <CircleText />
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CircleText from './CircleText'
import Logo from './Logo'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Footer = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      // أنيميشن ظهور الـ Logo من الأسفل
      gsap.from('.footer-logo', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom-=100',
        },
      })

      // جعل الـ CircleText يدور باستمرار ولكن يتفاعل مع السكرول
      gsap.to('.footer-circle', {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    },
    { scope: container }
  )

  return (
    // تغيير الألوان: خلفية بنية داكنة ونص كريمي
    <footer ref={container} className="bg-[#2D1B14] text-[#D2B48C] overflow-hidden">
      <div className="relative border-t border-[#4E342E]">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20">
          {/* Logo Animation Wrapper */}
          <div className="footer-logo mb-8">
            <Logo className="h-20 w-auto fill-current md:h-32" />
            {/* <Logo /> */}
          </div>

          {/* Circle Text with Animation */}
          <div className="footer-circle absolute right-8 top-0 size-28 origin-center -translate-y-12 md:right-24 md:size-48 md:-translate-y-24 z-[9999999]">
            <CircleText />
          </div>

          {/* روابط إضافية للفخامة */}
          <nav className="flex gap-8 text-sm font-bold uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-white transition-colors">
              Our Beans
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Locations
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sustainability
            </a>
          </nav>

          <div className="mt-12 text-[10px] uppercase tracking-[0.3em] opacity-30">
            © 2026 Pure Roast Coffee Co. | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
