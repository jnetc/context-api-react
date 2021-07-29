import { useAppContext  } from '../public/context/context'

export default function UpdateColor() {
  const { dispatch } = useAppContext();
  const withPayload = () => {
    dispatch({type: 'UPDATE_COLOR_WITH_PAYLOAD', payload: {color: 'blue', text: 'new text from updateColor.js'}})
  }
  const intoReducer = () => {
    dispatch({type: 'UPDATE_COLOR_INTO_REDUCER'})
  }

  return (
    <div>
      <button onClick={withPayload}>Update Color with payload</button>
      <button onClick={intoReducer}>Update Color into reducer</button>
    </div>
  )
}
