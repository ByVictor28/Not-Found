import { animated, useSpring } from 'react-spring';
import './App.css';

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 110, tension: 20, friction: 90 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

function App() {
  // const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
  const [props, set, stop] = useSpring(() => ({ xy: [200, 300], config: slow}))
  const props2 = useSpring({to: {opacity: 1,}, from: {opacity: 0,}})

  return (
    <animated.div style={props2} className="App">
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
          <animated.img src="/images/astronaut.png" style={{ transform: props.xy.interpolate(trans)}}></animated.img>
      </div>
      <div className="content">
          <p>Upps... it seems you are lost</p>
          <span>Meybe you need to come back later or checkout your glases</span>
          <a href="/" className="button">Go back</a>
      </div>
      <a className="freepik" href='https://www.freepik.es/vectores/personas'>Vector de Personas creado por catalyststuff - www.freepik.es</a>
    </animated.div>
  )
}

export default App;
