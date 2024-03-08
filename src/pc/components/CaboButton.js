import CaboText from './CaboText'

const CaboButton = ({
  buttonFunc = null,
  children = '',
  width = 400,
  height = 30,
  fontSize = 16,
  fontColor = '#fff',
  background = '#3CAF89',
  style={}
}) => {
  return (
    <button
      onClick={buttonFunc}
      style={{
        boxSizing: 'border-box',
        width,
        height,
        border: 'none',
        background: background,
        borderRadius: 10,
        cursor: 'pointer',
        ...style
      }}
    >
      <CaboText fontSize={fontSize} color={fontColor} fontWeight="600">
        {children}
      </CaboText>
    </button>
  )
}

export default CaboButton
