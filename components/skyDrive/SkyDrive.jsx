// "use client";

// import { View } from "@react-three/drei";
// import Bounded from "../Bounded";
// import SkyDriveScene from "./SkyDriveScene";

// const SkyDrive = () => {
//   return (
//     <Bounded className="skydive h-screen">
//       <View className="h-screen w-screen">
//         <SkyDriveScene
//           flavor="blackCherry"
//           sentence="Dive into better health"
//         />
//       </View>
//     </Bounded>
//   );
// };

// export default SkyDrive;

'use client'

import { View } from '@react-three/drei'
import Bounded from '../Bounded'
import SkyDriveScene from './SkyDriveScene'

const SkyDrive = () => {
  return (
    <Bounded className="skydive h-screen">
      <View className="h-screen w-screen">
        <SkyDriveScene
          flavor="espresso" // اسم افتراضي للنكهة
          sentence="Indulge in the Richness" // جملة تناسب القهوة
        />
      </View>
    </Bounded>
  )
}

export default SkyDrive
