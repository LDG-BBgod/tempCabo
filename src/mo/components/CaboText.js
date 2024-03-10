const CaboText = ({
  onClick=null,
  children = '',
  color = '#000',
  fontSize = 16,
  fontWeight = 'regular',
  style = {},
}) => {
  const fontFamily = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(children)
    ? 'Noto Sans Kr'
    : 'Inter'
  return (
    <div
    onClick={onClick}
      style={{
        fontFamily: fontFamily,
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
