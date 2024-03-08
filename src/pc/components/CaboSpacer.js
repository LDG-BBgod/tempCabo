const CaboSpacer = ({ horizontal = false, space = 0 }) => {
  if (horizontal) {
    return <div style={{ marginLeft: space }}></div>
  } else {
    return <div style={{ marginTop: space }}></div>
  }
}

export default CaboSpacer
