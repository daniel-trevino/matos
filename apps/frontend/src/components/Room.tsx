/* eslint-disable no-unsafe-optional-chaining */
import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import SplineLoader from './SplineLoader'

const Room: React.FC = () => {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    loader.load('https://prod.spline.design/mkM7u0SUqZleK8cS/scene.splinecode', (splineScene) => {
      scene.add(splineScene)
    })

    // renderer
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { height, width } = parent?.getBoundingClientRect()
    renderer.setSize(width, height)
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    renderer.setAnimationLoop(animate)

    // scene settings
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap

    renderer.setClearAlpha(0)

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.125

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.addEventListener('resize', onWindowResize)

    function onWindowResize(): void {
      const box = parent?.getBoundingClientRect()
      if (!box) return

      camera.aspect = box.width / box.width
      camera.updateProjectionMatrix()
      renderer.setSize(box.width, box.width)
    }
    onWindowResize()

    function animate(): void {
      controls.update()
      renderer.render(scene, camera)
    }
  }, [])

  return (
    <div className="aspect-square w-full" id="canvas-parent">
      <canvas id="canvas" className="w-full h-full" />
    </div>
  )
}

export default Room
