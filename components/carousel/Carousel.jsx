// "use client";

// import { Center, Environment, View } from "@react-three/drei";
// import { useRef, useState } from "react";
// import { flavors } from "@/data/data";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import FloatingCan from "../FloatingCan";
// import ArrowButton from "./ArrowButton";
// import { WavyCircles } from "./WavyCircles";

// gsap.registerPlugin(useGSAP);

// const SPIN_ON_CHANGE = 8;

// const Carousel = () => {
//   const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

//   const canRef = useRef(null);

//   const changeFlavor = (index) => {
//     const newIndex = (index + flavors.length) % flavors.length;

//     setCurrentFlavorIndex(newIndex);

//     const tl = gsap.timeline();

//     tl.to(
//       canRef.current.rotation,
//       {
//         y:
//           index > currentFlavorIndex
//             ? `-=${Math.PI * 2 * SPIN_ON_CHANGE}`
//             : `+=${Math.PI * 2 * SPIN_ON_CHANGE}`,
//         ease: "power2.inOut",
//         duration: 1,
//       },
//       0
//     )
//       .to(
//         ".background, .wavy-circles-outer, .wavy-circles-inner",
//         {
//           backgroundColor: flavors[newIndex].color,
//           fill: flavors[newIndex].color,
//           ease: "power2.inOut",
//           duration: 1,
//         },
//         0
//       )
//       .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
//       .to({}, { onStart: () => setCurrentFlavorIndex(newIndex) }, 0.5)
//       .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
//   };

//   return (
//     <section className="carousel relative grid h-screen grid-rows-[auto, 4fr, auto] justify-center overflow-hidden bg-white py-12 text-white">
//       <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50"></div>
//       <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />
//       <h2 className="relative text-center text-5xl font-bold">
//         Choose Your Flavor
//       </h2>

//       <div className="grid grid-cols-[auto,auto,auto] items-center">
//         {/* Left */}
//         <ArrowButton
//           onClick={() => changeFlavor(currentFlavorIndex + 1)}
//           direction="left"
//           label="Next Flavor"
//         />
//         {/* Can */}
//         <View className="aspect-square h-[70vmin] min-h-40">
//           <Center position={[0, 0, 1.5]}>
//             <group ref={canRef}>
//               <FloatingCan
//                 floatIntensity={0.3}
//                 rotationIntensity={1}
//                 flavor={flavors[currentFlavorIndex].flavor}
//               />
//             </group>
//           </Center>
//           <directionalLight intensity={6} position={[0, 1, 1]} />
//           <Environment
//             files="/hdrs/lobby.hdr"
//             environmentIntensity={0.6}
//             environmentRotation={[0, 3, 0]}
//           />
//         </View>
//         {/* Right */}
//         <ArrowButton
//           onClick={() => changeFlavor(currentFlavorIndex - 1)}
//           direction="right"
//           label="Previous Flavor"
//         />
//       </div>

//       <div className="text-area relative mx-auto text-center">
//         <div
//           className="text-wrapper text-4xl font-medium"
//           // style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
//         >
//           <p>{flavors[currentFlavorIndex].name}</p>
//         </div>
//         <div className="mt-2 text-2xl font-normal opacity-90">
//           <p>12 cans - $35.99</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;

// // setCurrentFlavorIndex((prevIndex) => {
// //   const newIndex =
// //     arrow === "right"
// //       ? (prevIndex + 1) % flavors.length
// //       : (prevIndex - 1 + flavors.length) % flavors.length;

// //   setCurrentFlavor(flavors[newIndex].flavor);

// //   gsap.to(canRef.current.rotation, {
// //     y:
// //       arrow === "right"
// //         ? canRef.current.rotation.y + Math.PI * 8
// //         : canRef.current.rotation.y - Math.PI * 8,
// //     z: 0.1,
// //   });

// //   return newIndex;
// // });

'use client'

import { Center, Environment, View } from '@react-three/drei'
import { useRef, useState } from 'react'
import { flavors } from '@/data/data' // تأكد من تحديث البيانات في ملف data لتشمل أسماء خلطات قهوة
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FloatingCan from '../FloatingCan'
import ArrowButton from './ArrowButton'
import { WavyCircles } from './WavyCircles'

gsap.registerPlugin(useGSAP)

// تقليل سرعة الدوران ليكون أكثر "رقي" في القهوة
const SPIN_ON_CHANGE = 4

const Carousel = () => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0)
  const canRef = useRef(null)

  const changeFlavor = (index) => {
    const newIndex = (index + flavors.length) % flavors.length

    const tl = gsap.timeline()

    tl.to(
      canRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPIN_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPIN_ON_CHANGE}`,
        ease: 'power3.inOut', // أنعم من power2
        duration: 1.2,
      },
      0
    )
      .to(
        '.background, .wavy-circles-outer, .wavy-circles-inner',
        {
          // الألوان الآن ستأتي من ملف البيانات (بني، ذهبي، كريمي)
          backgroundColor: flavors[newIndex].color,
          fill: flavors[newIndex].color,
          ease: 'power2.inOut',
          duration: 1,
        },
        0
      )
      .to('.text-wrapper', { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentFlavorIndex(newIndex) }, 0.5)
      .to('.text-wrapper', { duration: 0.2, y: 0, opacity: 1 }, 0.7)
  }

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto, 4fr, auto] justify-center overflow-hidden bg-[#2D1B14] py-12 text-white">
      {/* الخلفية بلون قهوة داكن كبداية */}
      <div className="background pointer-events-none absolute inset-0 bg-[#3E2723] opacity-60"></div>

      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#D2B48C]" />

      <h2 className="relative text-center text-5xl font-bold uppercase tracking-widest">
        Select Your Blend
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center">
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="left"
          label="Previous Blend"
        />

        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <group ref={canRef} rotation={[0.4, 0, 0]}>
              <FloatingCan
                floatIntensity={0.5}
                rotationIntensity={0.6}
                flavor={flavors[currentFlavorIndex].flavor}
                position={[0, 0, 0]} // <--- هنا لغينا الـ Margin Top في هذا السكشن فقط
              />
            </group>
          </Center>
          <directionalLight intensity={4} position={[1, 2, 3]} color="#fff5e6" />
          <Environment files="/hdrs/lobby.hdr" environmentIntensity={0.5} />
        </View>

        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="right"
          label="Next Blend"
        />
      </div>

      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-bold uppercase tracking-tighter">
          <p>{flavors[currentFlavorIndex].name}</p>
        </div>
        <div className="mt-2 text-2xl font-mono opacity-80">
          <p>Freshly Roasted - $18.50</p>
        </div>
      </div>
    </section>
  )
}

export default Carousel
