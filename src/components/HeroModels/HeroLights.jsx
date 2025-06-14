import * as THREE from 'three';


const HeroLights = () => {
  return (
    <>
        <spotLight
            position={[2,5,6]}
            angle={0.15}
            penumbra={0.2}
            intensity={200}
            color="white"
        /> 

        <spotLight
            position={[4,5,4]}
            angle={0.3}
            penumbra={0.5}
            intensity={80}
            color="#4cc9f0"
        />

        <spotLight
            position={[-3,5,5]}
            angle={0.4}
            penumbra={1}
            intensity={120}
            color="#9d4edd"
        />

        <primitive
            object={new THREE.RectAreaLight('#A259FF' , 8 , 3 , 2)}
            position={[1,3,4]}
            intensity={30}
            rotation={[-Math.PI/4 , Math.PI/4 ,0]}
        /> 

        

        <spotLight 
            position={[0,1,0]}
            intensity={20}
            color="#7209b7"
        /> 

        <spotLight 
            position={[1,2,-2]}
            intensity={20}
            color="#0d00a4"
        />    
    </>
  )
}

export default HeroLights