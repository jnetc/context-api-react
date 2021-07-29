import { useAppContext } from '../public/context/context'

export default function ChangeColor() {

  const { state } = useAppContext();
  console.log("ChangeColor.js", state)

  return (
    <div>
      <h2 style={{color: state.color}}>I Change Colors Based On Global State.</h2>
      <p style={{textAlign: 'center'}}>{state.text}</p>
    </div>
  )
}
