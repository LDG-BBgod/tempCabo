import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CaboText from './CaboText'
import CaboInner from './CaboInner'
import { saveLog } from '../../api'

const NavText = ({ children = '', color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CaboText
        fontSize={18}
        fontWeight={isHovered ? '800' : '500'}
        color={color}
        style={{
          cursor: 'pointer',
          transition: '0.2s',
        }}
      >
        {children}
      </CaboText>
    </div>
  )
}

const CaboHeader = ({ isFixed = false, color = '#353535', opacity = '1' }) => {
  const navigate = useNavigate()
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        style={{
          height: 80,
          width: '100%',
          position: isFixed === true ? 'fixed' : 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          transition: 'background-color 0.5s',
          backgroundColor:
            isFixed === true
              ? isTop
                ? 'rgba(255, 255, 255, 0)'
                : 'rgba(255, 255, 255, 1)'
              : `rgba(255, 255, 255, ${opacity})`,
          boxShadow:
            isFixed === true
              ? isTop
                ? ''
                : '0 2px 4px rgba(0, 0, 0, 0.1)'
              : '',
        }}
      >
        <CaboInner>
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {color === '#353535' ? (
              <img
                src="/img/logo.svg"
                alt="logo"
                style={{ height: 45, cursor: 'pointer' }}
                onClick={() => {
                  saveLog('헤더 로고 클릭')
                  navigate('/pc')
                  window.scrollTo(0, 0)
                }}
              />
            ) : (
              <img
                src="/img/logo_white.svg"
                alt="logo"
                style={{ height: 45, cursor: 'pointer' }}
                onClick={() => {
                  saveLog('헤더 로고 클릭')
                  navigate('/pc')
                  window.scrollTo(0, 0)
                }}
              />
            )}

            <div style={{ display: 'flex', marginLeft: 'auto', gap: 50 }}>
              <NavText
                color={color}
                onClick={() => {
                  saveLog('헤더 회사 소개 클릭')
                  navigate('/pc/company')
                  window.scrollTo(0, 0)
                }}
              >
                회사 소개
              </NavText>
              <NavText
                color={color}
                onClick={() => {
                  saveLog('헤더 서비스 이동 클릭')
                  window.open('https://cabo.kr/serviceHome/', '_blank')
                  window.scrollTo(0, 0)
                }}
              >
                서비스 페이지 이동
              </NavText>
              <NavText
                color={color}
                onClick={() => {
                  saveLog('헤더 사업 소개 클릭')
                  navigate('/pc/bussiness')
                  window.scrollTo(0, 0)
                }}
              >
                사업 소개
              </NavText>
              <NavText
                color={color}
                onClick={() => {
                  saveLog('헤더 문의하기 클릭')
                  navigate('/pc/contact')
                  window.scrollTo(0, 0)
                }}
              >
                문의하기
              </NavText>
            </div>
          </div>
        </CaboInner>
      </div>
    </>
  )
}
export default CaboHeader
