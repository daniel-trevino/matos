/* eslint-disable no-unsafe-optional-chaining */
import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import SplineLoader from './SplineLoader'

const Room: React.FC = () => {
  useEffect(() => {
    const parent = document.getElementById('canvas-parent')
    const { height, width } = parent?.getBoundingClientRect()

    // camera
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      -100000,
      100000
    )
    camera.position.set(-208.14, 571.08, 902.87)
    camera.quaternion.setFromEuler(new THREE.Euler(-0.51, -0.29, -0.16))

    // scene
    const scene = new THREE.Scene()

    // spline scene
    const loader = new SplineLoader()
    loader.load('https://prod.spline.design/P9VqhJWeM7fA10Bb/scene.splinecode', (splineScene) => {
      scene.add(splineScene)
    })

    // renderer
    const canvas = document.getElementById('canvas-room') as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(width, height)

    function onWindowResize() {
      const box = parent?.getBoundingClientRect()
      if (!box) return

      camera.left = box.width / -2
      camera.right = box.width / 2
      camera.top = box.height / 2
      camera.bottom = box.height / -2
      camera.updateProjectionMatrix()
      renderer.setSize(box.width, box.height)
    }

    function animate(time) {
      controls.update()
      renderer.render(scene, camera)
    }

    renderer.setAnimationLoop(animate)

    // scene settings
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap

    scene.background = new THREE.Color('#f29d58')
    renderer.setClearAlpha(1)

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.125

    window.addEventListener('resize', onWindowResize)
  }, [])

  return (
    <div className="aspect-square w-full" id="canvas-parent">
      <canvas id="canvas-room" className="w-full h-full" />
    </div>
  )
}

export default Room
