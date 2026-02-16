// "use client";

// import { useRef } from "react";
// import { Cloud, Clouds, Environment, Text } from "@react-three/drei";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import FloatingCan from "../FloatingCan";
// import { useMediaQuery } from "@/hooks/useMediaQuery";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const SkyDriveScene = ({ sentence, flavor }) => {
//   const groupRef = useRef(null);
//   const canRef = useRef(null);
//   const cloud1Ref = useRef(null);
//   const cloud2Ref = useRef(null);
//   const cloudsRef = useRef(null);
//   const wordsRef = useRef(null);

//   const ANGLE = 75 * (Math.PI / 180);

//   const getXPosition = (distance) => distance * Math.cos(ANGLE);

//   const getYPosition = (distance) => distance * Math.sin(ANGLE);

//   const getXYPositions = (distance) => ({
//     x: getXPosition(distance),
//     y: getYPosition(-1 * distance),
//   });

//   useGSAP(() => {
//     if (
//       !canRef.current ||
//       !cloud1Ref.current ||
//       !cloud2Ref.current ||
//       !cloudsRef.current ||
//       !wordsRef.current
//     )
//       return;

//     // Set initial positions
//     gsap.set(cloudsRef.current.position, { z: 10 });
//     gsap.set(canRef.current.position, {
//       ...getXYPositions(-4),
//     });

//     gsap.set(
//       wordsRef.current.children.map((word) => word.position),
//       { ...getXYPositions(7), z: 2 }
//     );

//     // Spinning can
//     gsap.to(canRef.current.rotation, {
//       y: Math.PI * 2,
//       duration: 1.7,
//       repeat: -1,
//       ease: "none",
//     });

//     // Infinite cloud movement
//     const DISTANCE = 15;
//     const DURATION = 6;

//     gsap.set([cloud2Ref.current.position, cloud1Ref.current.position], {
//       ...getXYPositions(DISTANCE),
//     });

//     gsap.to(cloud1Ref.current.position, {
//       y: `+=${getYPosition(DISTANCE * 2)}`,
//       x: `+=${getXPosition(DISTANCE * -2)}`,
//       ease: "none",
//       repeat: -1,
//       duration: DURATION,
//     });

//     gsap.to(cloud2Ref.current.position, {
//       y: `+=${getYPosition(DISTANCE * 2)}`,
//       x: `+=${getXPosition(DISTANCE * -2)}`,
//       ease: "none",
//       repeat: -1,
//       delay: DURATION / 2,
//       duration: DURATION,
//     });

//     const scrollTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".skydive",
//         pin: true,
//         start: "top top",
//         end: "+=2000",
//         scrub: 1.5,
//       },
//     });

//     scrollTl
//       .to("body", {
//         backgroundColor: "#C0F0F5",
//         overwrite: "auto",
//         duration: 0.1,
//       })
//       .to(cloudsRef.current.position, { z: 0, duration: 0.3 }, 0)
//       .to(canRef.current.position, {
//         x: 0,
//         y: 0,
//         duration: 0.3,
//         ease: "back.out(1.7)",
//       })
//       .to(
//         wordsRef.current.children.map((word) => word.position),
//         {
//           keyframes: [
//             { x: 0, y: 0, z: -1 },
//             { ...getXYPositions(-7), z: -7 },
//           ],
//           stagger: 0.3,
//         },
//         0
//       )
//       .to(canRef.current.position, {
//         ...getXYPositions(4),
//         duration: 0.5,
//         ease: "back.in(1.7)",
//       })
//       .to(cloudsRef.current.position, { z: 7, duration: 0.5 });
//   });

//   return (
//     <group ref={groupRef}>
//       <group rotation={[0, 0, 0.5]}>
//         <FloatingCan
//           ref={canRef}
//           flavor={flavor}
//           rotationIntensity={0}
//           floatIntensity={3}
//           floatSpeed={3}
//         >
//           <pointLight intensity={30} color="#8c0413" decay={0.6} />
//         </FloatingCan>
//       </group>

//       {/* Clouds */}
//       <Clouds ref={cloudsRef}>
//         <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
//         <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
//       </Clouds>

//       {/* Text */}
//       <group ref={wordsRef}>
//         {sentence && <ThreeText sentence={sentence} color="#f97315" />}
//       </group>

//       {/* Lights */}
//       <ambientLight intensity={1} color="#9ddefa" />
//       <Environment files="/hdrs/field.hdr" environmentIntensity={1.5} />
//     </group>
//   );
// };

// export default SkyDriveScene;

// const ThreeText = ({ sentence, color = "white" }) => {
//   const words = sentence.toUpperCase().split(" ");
//   const isDesktop = useMediaQuery("(min-width: 950px)", true);

//   return words.map((word, wordIndex) => (
//     <Text
//       key={`${wordIndex}-${word}`}
//       scale={isDesktop ? 1 : 0.5}
//       color={color}
//       font="/fonts/Alpino-Variable.woff"
//       fontWeight={900}
//       anchorX="center"
//       anchorY="middle"
//       characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
//     >
//       {word}
//     </Text>
//   ));
// };

'use client'

import { useRef } from 'react'
import { Cloud, Clouds, Environment, Text } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import FloatingCan from '../FloatingCan'
import { useMediaQuery } from '@/hooks/useMediaQuery'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SkyDriveScene = ({ sentence, flavor }) => {
  const groupRef = useRef(null)
  const canRef = useRef(null)
  const cloud1Ref = useRef(null)
  const cloud2Ref = useRef(null)
  const cloudsRef = useRef(null)
  const wordsRef = useRef(null)

  const ANGLE = 75 * (Math.PI / 180)

  const getXPosition = (distance) => distance * Math.cos(ANGLE)
  const getYPosition = (distance) => distance * Math.sin(ANGLE)

  const getXYPositions = (distance) => ({
    x: getXPosition(distance),
    y: getYPosition(-1 * distance),
  })

  useGSAP(() => {
    if (
      !canRef.current ||
      !cloud1Ref.current ||
      !cloud2Ref.current ||
      !cloudsRef.current ||
      !wordsRef.current
    )
      return

    // الأوضاع الابتدائية
    gsap.set(cloudsRef.current.position, { z: 10 })
    gsap.set(canRef.current.position, { ...getXYPositions(-4) })
    gsap.set(canRef.current.rotation, { x: 0.5 }) // ميلة لرؤية القهوة من فوق

    gsap.set(
      wordsRef.current.children.map((word) => word.position),
      { ...getXYPositions(7), z: 2 }
    )

    // دوران هادئ للكوب
    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      duration: 5, // أبطأ بكثير من الصودا
      repeat: -1,
      ease: 'none',
    })

    // حركة بخار القهوة المستمر
    const DISTANCE = 15
    const DURATION = 8 // حركة أبطأ وانسيابية

    gsap.set([cloud2Ref.current.position, cloud1Ref.current.position], {
      ...getXYPositions(DISTANCE),
    })

    const moveCloud = (ref, delay = 0) => {
      gsap.to(ref.position, {
        y: `+=${getYPosition(DISTANCE * 2)}`,
        x: `+=${getXPosition(DISTANCE * -2)}`,
        ease: 'none',
        repeat: -1,
        duration: DURATION,
        delay,
      })
    }

    moveCloud(cloud1Ref.current)
    moveCloud(cloud2Ref.current, DURATION / 2)

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skydive',
        pin: true,
        start: 'top top',
        end: '+=2000',
        scrub: 1.5,
      },
    })

    scrollTl
      // تحويل الخلفية للون البني الدافئ
      .to('body', {
        backgroundColor: '#4E342E',
        overwrite: 'auto',
        duration: 0.1,
      })
      .to(cloudsRef.current.position, { z: 0, duration: 0.3 }, 0)
      .to(canRef.current.position, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })
      .to(
        wordsRef.current.children.map((word) => word.position),
        {
          keyframes: [
            { x: 0, y: 0, z: -1 },
            { ...getXYPositions(-7), z: -7 },
          ],
          stagger: 0.3,
        },
        0
      )
      .to(canRef.current.position, {
        ...getXYPositions(4),
        duration: 0.5,
        ease: 'back.in(1.7)',
      })
      .to(cloudsRef.current.position, { z: 7, duration: 0.5 })
  })

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, 0.2]}>
        <FloatingCan
          ref={canRef}
          flavor={flavor}
          rotationIntensity={0.5}
          floatIntensity={1}
          floatSpeed={1}
        >
          {/* إضاءة دافئة تنبعث من الكوب */}
          <pointLight intensity={10} color="#ffcc33" decay={0.6} />
        </FloatingCan>
      </group>

      {/* سحب بخار بلون كريمي/بيج */}
      <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} color="#D7CCC8" opacity={0.4} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} color="#EFEBE9" opacity={0.4} />
      </Clouds>

      {/* نص بلون ذهبي/كريمي */}
      <group ref={wordsRef}>{sentence && <ThreeText sentence={sentence} color="#D2B48C" />}</group>

      {/* إضاءة محيطة دافئة */}
      <ambientLight intensity={0.5} color="#fff5e6" />
      <Environment files="/hdrs/field.hdr" environmentIntensity={0.5} />
    </group>
  )
}

const ThreeText = ({ sentence, color = 'white' }) => {
  const words = sentence.toUpperCase().split(' ')
  const isDesktop = useMediaQuery('(min-width: 950px)', true)

  return words.map((word, wordIndex) => (
    <Text
      key={`${wordIndex}-${word}`}
      scale={isDesktop ? 0.8 : 0.4} // حجم أصغر قليلاً للفخامة
      color={color}
      font="/fonts/Alpino-Variable.woff"
      fontWeight={900}
      anchorX="center"
      anchorY="middle"
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
    >
      {word}
    </Text>
  ))
}

export default SkyDriveScene
