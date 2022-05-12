import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false })

const Room = (): any => (
  <Spline scene="https://prod.spline.design/6fcgpnTPYfXDTceH/scene.splinecode" />
)

export default Room
