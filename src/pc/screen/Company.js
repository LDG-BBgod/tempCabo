// 라이브러리
import { useEffect, useState } from 'react'
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom'
// 리덕스

// 컴포넌트
import Vision from './company/Vision'
import History from './company/History'
import AlarmBoard from './company/AlarmBoard'
import Employ from './company/Employ'

import CaboHeader from '../components/CaboHeader'
import CaboInner from '../components/CaboInner'
import CaboText from '../components/CaboText'

// 전역 API
import { saveLog } from '../../api'
// 공통변수

// 기타

const Company = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedList, setSelectedList] = useState('vision')

  const List = ({ text, id }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backgroundColor: selectedList === id ? '#16223B' : '#F1F1F1',
        }}
        onClick={() => {
          saveLog(`회사소개 ${id} 클릭`)
          setSelectedList(id)
          navigate(id)
        }}
      >
        <CaboText
          fontSize={24}
          fontWeight={isHovered ? '700' : '400'}
          color={selectedList === id ? '#fff' : '#000'}
          style={{
            transition: '0.2s',
          }}
        >
          {text}
        </CaboText>
      </div>
    )
  }

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop()
    const validPaths = ['vision', 'history', 'alarmBoard', 'employ']

    if (validPaths.includes(currentPath)) {
      setSelectedList(currentPath)
    } else {
      setSelectedList('vision')
    }
  }, [location])

  return (
    <>
      <CaboHeader opacity="0" color="#fff" />

      {/************** 섹션 1 **************/}
      <div style={{ position: 'relative', width: '100%', height: 543 }}>
        <img
          src="/img/pc/company_section1_img1.png"
          alt="배경"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            zIndex: -1,
            left: 0,
            top: 0,
          }}
        />
        <CaboInner>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <CaboText fontSize={40} fontWeight="600" color="#fff">
              (주)카보 소개
            </CaboText>
          </div>
        </CaboInner>
      </div>

      {/************** 섹션 2 **************/}
      <div style={{ height: 100, width: '100%', backgroundColor: '#F1F1F1' }}>
        <CaboInner>
          <div
            style={{
              height: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            }}
          >
            <List text="Vision" id={'vision'} />
            <List text="연혁" id={'history'} />
            <List text="공시" id={'alarmBoard'} />
            <List text="채용" id={'employ'} />
          </div>
        </CaboInner>
      </div>
      <Routes>
        <Route path="" element={<Navigate replace to="vision" />} />
        <Route path="vision" element={<Vision />} />
        <Route path="history" element={<History />} />
        <Route path="alarmBoard" element={<AlarmBoard />} />
        <Route path="employ" element={<Employ />} />
      </Routes>
    </>
  )
}
export default Company
