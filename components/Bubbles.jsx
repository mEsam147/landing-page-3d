// 'use client'

// import * as THREE from 'three'
// import { useRef, useEffect } from 'react'
// import { useFrame } from '@react-three/fiber'
// import gsap from 'gsap'

// // Using Object3D as a container to efficiently set and update positions for each bubble instance
// const o = new THREE.Object3D()

// // Customizations in case you want to use this in other scenes.
// export function Bubbles({
//   count = 300,
//   speed = 5,
//   bubbleSize = 0.05,
//   opacity = 0.5,
//   repeat = true,
// }) {
//   const meshRef = useRef(null)

//   // An array that holds all of our bubbles' speeds
//   const bubbleSpeed = useRef(new Float32Array(count))
//   const minSpeed = speed * 0.001
//   const maxSpeed = speed * 0.005

//   // Create geometry and material for our mesh
//   const geometry = new THREE.SphereGeometry(bubbleSize, 16, 16)

//   const material = new THREE.MeshStandardMaterial({
//     transparent: true,
//     opacity,
//   })

//   // Runs once to create and place our bubbles
//   useEffect(() => {
//     // Access the instanced mesh
//     const mesh = meshRef.current
//     if (!mesh) {
//       return
//     }

//     // Create {count} number of bubbles in random locations
//     for (let i = 0; i < count; i++) {
//       o.position.set(gsap.utils.random(-4, 4), gsap.utils.random(-4, 4), gsap.utils.random(-4, 4))

//       // Update matrix so that the position is applied
//       o.updateMatrix()
//       // Apply the updated matrix from Object3D to the mesh at index i.
//       mesh.setMatrixAt(i, o.matrix)

//       // Set a random bubble speed
//       bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed)
//     }

//     mesh.instanceMatrix.needsUpdate = true
//     return () => {
//       mesh.geometry.dispose()
//       mesh.material.dispose()
//     }
//   }, [count, minSpeed, maxSpeed])

//   // useFrame runs on every animation frame
//   useFrame(() => {
//     if (!meshRef.current) {
//       return
//     }

//     // Assign current body color to bubble so it looks natural
//     // material.color = new THREE.Color(document.body.style.backgroundColor);

//     material.color = new THREE.Color('#000')

//     for (let i = 0; i < count; i++) {
//       meshRef.current.getMatrixAt(i, o.matrix)
//       o.position.setFromMatrixPosition(o.matrix)
//       // Move bubble upwards by its speed
//       o.position.y += bubbleSpeed.current[i]

//       // Reset bubble position if it moves off the top of the screen
//       if (o.position.y > 4 && repeat) {
//         o.position.y = -2 // Reset to bottom
//         o.position.x = gsap.utils.random(-4, 4)
//         o.position.z = gsap.utils.random(0, 8)
//       }

//       o.updateMatrix()
//       meshRef.current.setMatrixAt(i, o.matrix)
//     }

//     // Mark the instance matrix as needing an update, so the new positions of the bubbles are rendered.
//     meshRef.current.instanceMatrix.needsUpdate = true
//   })

//   return (
//     <instancedMesh
//       ref={meshRef}
//       args={[undefined, undefined, count]}
//       position={[0, 0, 0]}
//       material={material}
//       geometry={geometry}
//     ></instancedMesh>
//   )
// }

'use client'

import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

const o = new THREE.Object3D()

export function Bubbles({
  count = 150, // تقليل العدد ليكون أرقى (أقل فوضى)
  speed = 0.5, // سرعة أبطأ بكثير لتشبه البخار المتصاعد هادئاً
  bubbleSize = 0.02, // حجم أصغر لتبدو كذرات عطرية
  opacity = 0.2, // شفافية عالية لتكون خفيفة وغير مشتتة
  repeat = true,
}) {
  const meshRef = useRef(null)

  const bubbleSpeed = useRef(new Float32Array(count))
  const minSpeed = speed * 0.001
  const maxSpeed = speed * 0.003

  // استخدام SphereGeometry بحجم صغير جداً
  const geometry = new THREE.SphereGeometry(bubbleSize, 8, 8)

  // ماتريال بلون كريمي دافئ (Creamy White) لإعطاء إحساس الحليب أو البخار
  const material = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity,
    color: new THREE.Color('#FFF5E6'), // لون كريمي دافئ
    emissive: new THREE.Color('#D2B48C'), // توهج خفيف بلون القهوة
    emissiveIntensity: 0.2,
  })

  useEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return

    for (let i = 0; i < count; i++) {
      // توزيع الجزيئات في مساحة أضيق حول الكوب
      o.position.set(gsap.utils.random(-3, 3), gsap.utils.random(-2, 4), gsap.utils.random(-2, 2))

      o.updateMatrix()
      mesh.setMatrixAt(i, o.matrix)
      bubbleSpeed.current[i] = gsap.utils.random(minSpeed, maxSpeed)
    }

    mesh.instanceMatrix.needsUpdate = true
    return () => {
      mesh.geometry.dispose()
      mesh.material.dispose()
    }
  }, [count, minSpeed, maxSpeed])

  useFrame((state) => {
    if (!meshRef.current) return

    // جعل الجزيئات تتمايل قليلاً (Wobble) أثناء الصعود لتبدو كالبخار
    const time = state.clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      meshRef.current.getMatrixAt(i, o.matrix)
      o.position.setFromMatrixPosition(o.matrix)

      // صعود بطيء
      o.position.y += bubbleSpeed.current[i]

      // تمايل جانبي خفيف جداً باستخدام Sine wave
      o.position.x += Math.sin(time + i) * 0.002

      // إعادة التدوير (Reset)
      if (o.position.y > 4 && repeat) {
        o.position.y = -2
        o.position.x = gsap.utils.random(-3, 3)
        o.position.z = gsap.utils.random(-2, 2)
      }

      o.updateMatrix()
      meshRef.current.setMatrixAt(i, o.matrix)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      material={material}
      geometry={geometry}
    />
  )
}
