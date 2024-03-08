// 라이브러리
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// 리덕스

// 컴포넌트
import Home from './Home'
import Company from './Company'
import Bussiness from './Bussiness'
import Contact from './Contact'

import CaboInner from '../components/CaboInner'
import CaboText from '../components/CaboText'
import CaboSpacer from '../components/CaboSpacer'
import CaboFooter from '../components/CaboFooter'
// 전역 API
import { saveLog } from '../../api'
// 공통변수

// 기타

const PcRoute = ({ userId }) => {
  useEffect(() => {
    saveLog('pc 페이지 진입')
  }, [])
  return (
    <>
      {/* 헤더는 각 컴포넌트마다 따로적용되어있음 */}

      {/************** route **************/}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="company/*" element={<Company />} />
        <Route path="bussiness" element={<Bussiness />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/************** footer **************/}
      <CaboFooter />
    </>
  )
}
export default PcRoute
