import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import SplineLoader from './SplineLoader'

export default function Scene({ ...props }) {
  useEffect(() => {
    const parent = document.getElementById('canvas-parent')
    // camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      5,
      100000
    )
    camera.position.set(-457.75, 652.8, 3770.13)
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0))

    // scene
    const scene = new THREE.Scene()

    // spline scene
    const loader = new SplineLoader()
    loader.load('https://prod.spline.design/mkM7u0SUqZleK8cS/scene.splinecode', (splineScene) => {
      scene.add(splineScene)
    })

    // renderer
    const canvas = document.getElementById('canvas')
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    const { height, width } = parent?.getBoundingClientRect()
    renderer.setSize(width, height)
    renderer.setAnimationLoop(animate)

    // scene settings
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap

    renderer.setClearAlpha(0)

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.125

    window.addEventListener('resize', onWindowResize)

    function onWindowResize() {
      const box = parent?.getBoundingClientRect()

      camera.aspect = box.width / box.width
      camera.updateProjectionMatrix()
      renderer.setSize(box.width, box.width)
    }
    onWindowResize()

    function animate(time) {
      controls.update()
      renderer.render(scene, camera)
    }
  }, [])

  return (
    <div className="aspect-square w-full" id="canvas-parent">
      <canvas id="canvas" className="w-full h-full" />
    </div>
  )
  // const { nodes, materials } = useSpline('https://prod.spline.design/2fzdsSVagfszNxsd/scene.spline')

  // return (
  //   <group {...props} dispose={null}>
  //     <mesh
  //       name="Rectangle"
  //       geometry={nodes.Rectangle.geometry}
  //       material={materials['Rectangle Material']}
  //     />
  //   </group>
  // )
  return null
}
