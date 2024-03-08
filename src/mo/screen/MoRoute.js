// 라이브러리
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// 리덕스

// 컴포넌트
import MoHome from './Home'
import MoCompany from './Company'
import MoBussiness from './Bussiness'
import MoContact from './Contact'

import CaboInner from '../components/CaboInner'
import CaboText from '../components/CaboText'
import CaboSpacer from '../components/CaboSpacer'
import CaboFooter from '../components/CaboFooter'
// 전역 API
import { saveLog } from '../../api'
// 공통변수

// 기타

const MoRoute = ({ userId }) => {
  useEffect(() => {
    saveLog('mo 페이지 진입')
  }, [])
  return (
    <>
      {/* 헤더는 각 컴포넌트마다 따로적용되어있음 */}

      {/************** route **************/}
      <Routes>
        <Route path="" element={<MoHome />} />
        <Route path="company/*" element={<MoCompany />} />
        <Route path="bussiness" element={<MoBussiness />} />
        <Route path="contact" element={<MoContact />} />
      </Routes>

      {/************** footer **************/}
      <CaboFooter />
    </>
  )
}
export default MoRoute
