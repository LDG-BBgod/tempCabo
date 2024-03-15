const CaboText = ({
  onClick = null,
  children = '',
  color = '#000',
  fontSize = 16,
  fontWeight = 'regular',
  style = {},
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        fontFamily: 'Noto Sans Kr',
        fontSize,
        fontWeight,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default CaboText
