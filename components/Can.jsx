// // // import { flavorTextures } from '@/data/data'
// // // import { useGLTF, useTexture } from '@react-three/drei'
// // // import * as THREE from 'three'

// // // useGLTF.preload('/models/Soda-can.gltf')

// // // const metalMaterial = new THREE.MeshStandardMaterial({
// // //   roughness: 0.3,
// // //   metalness: 1,
// // //   color: '#bbbbbb',
// // // })

// // // export function Can({ flavor = 'blackCherry', scale = 2, ...props }) {
// // //   const { nodes } = useGLTF('/models/Soda-can.gltf')
// // //   const labels = useTexture(flavorTextures)

// // //   // fixes upside down labels
// // //   Object.values(labels).forEach((label) => {
// // //     label.flipY = false // Fixes upside-down labels
// // //   })

// // //   const label = labels[flavor]

// // //   return (
// // //     <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
// // //       <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={metalMaterial} />
// // //       <mesh
// // //         castShadow
// // //         receiveShadow
// // //         geometry={nodes.Mesh_1.geometry}
// // //         material={nodes.Mesh_1.material}
// // //       >
// // //         <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
// // //       </mesh>
// // //       <mesh castShadow receiveShadow geometry={nodes.Tab.geometry} material={metalMaterial} />
// // //     </group>
// // //   )
// // // }

// // // import { useGLTF } from '@react-three/drei'
// // // import * as THREE from 'three'

// // // // 1. تغيير المسار للموديل الجديد الذي حملته
// // // const MODEL_PATH = '/models/creamed_coffee.glb'
// // // useGLTF.preload(MODEL_PATH)

// // // export function Can({ scale = 0.4, ...props }) {
// // //   // 2. استخراج الـ nodes و الـ materials من الموديل الجديد
// // //   const { nodes, materials } = useGLTF(MODEL_PATH)

// // //   /* ملاحظة: موديلات Sketchfab غالباً بتيجي بأسماء Nodes مختلفة.
// // //      إليك الطريقة العامة لعرض الموديل بالكامل:
// // //   */

// // //   return (
// // //     <group {...props} dispose={null} scale={scale}>
// // //       {/* بدل ما نحدد Mesh Mesh، هنستخدم طريقة الـ Map
// // //          عشان نعرض كل أجزاء الموديل الجديد تلقائياً بموادها الأصلية
// // //       */}
// // //       {Object.keys(nodes).map((key) => {
// // //         const node = nodes[key]
// // //         if (node.type === 'Mesh') {
// // //           return (
// // //             <mesh
// // //               key={key}
// // //               castShadow
// // //               receiveShadow
// // //               geometry={node.geometry}
// // //               material={node.material} // بيستخدم الماتريال اللي جاية مع الموديل (القهوة والكريمة)
// // //             />
// // //           )
// // //         }
// // //         return null
// // //       })}
// // //     </group>
// // //   )
// // // }

// // import { useGLTF, Center } from '@react-three/drei'
// // import * as THREE from 'three'

// // const MODEL_PATH = '/models/creamed_coffee.glb'
// // useGLTF.preload(MODEL_PATH)

// // export function Can({ scale = 0.5, ...props }) {
// //   const { nodes } = useGLTF(MODEL_PATH)

// //   return (
// //     <group {...props} dispose={null} scale={scale}>
// //       {/* 1. استخدم مكون <Center> لضمان أن الكوب يلف حول مركزه بالظبط */}
// //       <Center top>
// //         <group rotation={[1.2, Math.PI, 1]} dispose={null} scale={scale}>
// //           {Object.keys(nodes).map((key) => {
// //             const node = nodes[key]
// //             if (node.type === 'Mesh') {
// //               return (
// //                 <mesh
// //                   key={key}
// //                   castShadow
// //                   receiveShadow
// //                   geometry={node.geometry}
// //                   material={node.material}
// //                 />
// //               )
// //             }
// //             return null
// //           })}
// //         </group>
// //       </Center>
// //     </group>
// //   )
// // }

// import { useGLTF, Center } from '@react-three/drei'
// import * as THREE from 'three'

// const MODEL_PATH = '/models/creamed_coffee.glb'
// useGLTF.preload(MODEL_PATH)

// export function Can({ scale = 0.5, ...props }) {
//   const { nodes } = useGLTF(MODEL_PATH)

//   return (
//     /* هنا قمت بإضافة [0, -0.5, 0] للـ position.
//        محور Y بالسالب يعني "Margin Top" (إزاحة للأسفل).
//        يمكنك تغيير -0.5 لزيادة أو تقليل المسافة.
//     */
//     <group {...props} position={position} dispose={null} scale={scale}>
//       <Center top>
//         <group rotation={[1.2, Math.PI, 1]} dispose={null} scale={scale}>
//           {Object.keys(nodes).map((key) => {
//             const node = nodes[key]
//             if (node.type === 'Mesh') {
//               return (
//                 <mesh
//                   key={key}
//                   castShadow
//                   receiveShadow
//                   geometry={node.geometry}
//                   material={node.material}
//                 />
//               )
//             }
//             return null
//           })}
//         </group>
//       </Center>
//     </group>
//   )
// }

// components/Can.jsx

import { useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'

const MODEL_PATH = '/models/creamed_coffee.glb'
useGLTF.preload(MODEL_PATH)

// أضف position هنا كـ Prop مع القيمة الافتراضية
export function Can({ scale = 0.5, position = [0, -0.6, 0], ...props }) {
  const { nodes } = useGLTF(MODEL_PATH)

  return (
    <group {...props} position={position} dispose={null} scale={scale}>
      <Center top>
        <group rotation={[1.2, Math.PI, 1]} dispose={null} scale={scale}>
          {Object.keys(nodes).map((key) => {
            const node = nodes[key]
            if (node.type === 'Mesh') {
              return (
                <mesh
                  key={key}
                  castShadow
                  receiveShadow
                  geometry={node.geometry}
                  material={node.material}
                />
              )
            }
            return null
          })}
        </group>
      </Center>
    </group>
  )
}
