import { Route, Routes, Navigate } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import PcRoute from './pc/screen/PcRoute'
import MoRoute from './mo/screen/MoRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isMobile ? (
              <Navigate replace to="/mo" />
            ) : (
              <Navigate replace to="/pc" />
            )
          }
        />
        <Route path="/pc/*" element={<PcRoute />} />
        <Route path="/mo/*" element={<MoRoute />} />
      </Routes>
    </div>
  )
}

export default App