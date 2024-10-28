import { createRoot } from "react-dom/client"
import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import "./styles.css"

function Dodecahedron({ time, ...props }) {
  return (
    <mesh {...props}>
      <dodecahedronGeometry />
      <meshStandardMaterial roughness={0.75} emissive="#404057" />
      <Html distanceFactor={10}>
        <div className="content">
          hello <br />
          world
        </div>
      </Html>
    </mesh>
  )
}

function Content() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))

  return (
    <group ref={ref}>
      <Dodecahedron position={[-2, 0, 0]} />
      <Dodecahedron position={[0, -2, -3]} />
      <Dodecahedron position={[2, 0, 0]} />
    </group>
  )
}

function Overlay() {
  return (
    <Html distanceFactor={10} style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)" }}>
      <div className="overlay-content">spector</div>
    </Html>
  )
}

createRoot(document.getElementById("root")).render(
  <Canvas camera={{ position: [0, 0, 7.5] }}>
    <pointLight color="indianred" />
    <pointLight position={[10, 10, -10]} color="orange" />
    <pointLight position={[-10, -10, 10]} color="lightblue" />
    <Content />
    <Overlay /> {/* Add the overlay here */}
  </Canvas>
)
