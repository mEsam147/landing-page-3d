// // import { Float } from "@react-three/drei";
// // import { Can } from "./Can";
// // import { forwardRef } from "react";

// // const FloatingCan = forwardRef(
// //   (
// //     {
// //       flavor = "blackCherry",
// //       floatSpeed = 1.5,
// //       rotationIntensity = 1,
// //       floatIntensity = 1,
// //       floatingRange = [-0.1, 0.1],
// //       children,
// //       ...props
// //     },
// //     ref
// //   ) => {
// //     return (
// //       <group ref={ref} {...props}>
// //         <Float
// //           speed={floatSpeed}
// //           rotationIntensity={rotationIntensity}
// //           floatIntensity={floatIntensity}
// //           floatingRange={floatingRange}
// //         >
// //           {children}
// //           <Can flavor={flavor} />
// //         </Float>
// //       </group>
// //     );
// //   }
// // );

// // export default FloatingCan;

// import { Float } from '@react-three/drei'
// import { Can } from './Can' // تأكد أن هذا الملف هو الذي يحتوي على موديل القهوة الآن
// import { forwardRef } from 'react'

// const FloatingCan = forwardRef(
//   (
//     {
//       flavor = 'blackCherry',
//       // تعديل القيم الافتراضية لتناسب مود القهوة
//       floatSpeed = 0.8, // أبطأ (كان 1.5) ليعطي إحساساً بالوزن
//       rotationIntensity = 0.6, // تقليل الدوران العشوائي عشان الكوباية متدوخش المستخدم
//       floatIntensity = 1.5, // زيادة قوة الطفو للأعلى والأسفل
//       floatingRange = [-0.15, 0.15], // مدى الحركة
//       children,
//       position,
//       ...props
//     },
//     ref
//   ) => {
//     return (
//       <group ref={ref} {...props}>
//         <Float
//           speed={floatSpeed}
//           rotationIntensity={rotationIntensity}
//           floatIntensity={floatIntensity}
//           floatingRange={floatingRange}
//         >
//           {children}
//           {/* هنا يتم عرض كوب القهوة */}
//           <Can flavor={flavor} />
//         </Float>
//       </group>
//     )
//   }
// )

// export default FloatingCan

import { Float } from '@react-three/drei'
import { Can } from './Can'
import { forwardRef } from 'react'

const FloatingCan = forwardRef(
  (
    {
      flavor = 'blackCherry',
      floatSpeed = 0.8,
      rotationIntensity = 0.6,
      floatIntensity = 1.5,
      floatingRange = [-0.15, 0.15],
      children,
      position, // تم استقبال الـ position هنا كـ Prop
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          {/* تمرير الـ position هنا هو "السر" لكي يعمل الـ Margin Top
              في كل السكاشن ويتم إلغاؤه في الـ Carousel
          */}
          <Can flavor={flavor} position={position} />
        </Float>
      </group>
    )
  }
)

FloatingCan.displayName = 'FloatingCan'
export default FloatingCan
