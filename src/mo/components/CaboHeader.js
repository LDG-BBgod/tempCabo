import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CaboText from './CaboText'
import CaboInner from './CaboInner'
import { saveLog } from '../../api'
import CaboSpacer from './CaboSpacer'

const NavText = ({ children = '', onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CaboText
        fontSize={16}
        fontWeight={400}
        color="#353535"
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

const CaboHeader = ({ isFixed = true, color = '#353535', opacity = '1' }) => {
  const navigate = useNavigate()
  const [isTop, setIsTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const containerStyle = {
    width: '30px',
    height: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    cursor: 'pointer',
  }

  const commonBarStyle = {
    width: '100%',
    height: 4,
    backgroundColor: isOpen || !isTop ? '#353535' : color,
    borderRadius: 2,
    transition: 'all 0.2s ease',
    transformOrigin: 'center',
  }

  const bar1Style = {
    transform: isOpen ? 'rotate(-45deg) translate(-25%, 6.5px)' : 'none',
  }

  const bar2Style = {
    opacity: isOpen ? 0 : 1,
  }

  const bar3Style = {
    transform: isOpen ? ' rotate(45deg) translate(-25%, -6.5px)' : 'none',
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

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
          height: 70,
          width: '100%',
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          transition: 'background-color 0.5s',
          backgroundColor: isOpen
            ? '#fff'
            : isFixed === true
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
              justifyContent: 'space-between',
            }}
          >
            {isOpen || !isTop ? (
              <img
                src="/img/logo.svg"
                alt="logo"
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => {
                  saveLog('헤더 로고 클릭')
                  navigate('/mo')
                  window.scrollTo(0, 0)
                }}
              />
            ) : color === '#353535' ? (
              <img
                src="/img/logo.svg"
                alt="logo"
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => {
                  saveLog('헤더 로고 클릭')
                  navigate('/mo')
                  window.scrollTo(0, 0)
                }}
              />
            ) : (
              <img
                src="/img/logo_white.svg"
                alt="logo"
                style={{ height: 40, cursor: 'pointer' }}
                onClick={() => {
                  saveLog('헤더 로고 클릭')
                  navigate('/mo')
                  window.scrollTo(0, 0)
                }}
              />
            )}

            <div style={containerStyle} onClick={toggleMenu}>
              <div style={{ ...commonBarStyle, ...bar1Style }}></div>
              <div style={{ ...commonBarStyle, ...bar2Style }}></div>
              <div style={{ ...commonBarStyle, ...bar3Style }}></div>
            </div>
          </div>
        </CaboInner>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            backgroundColor: '#fff',
            transition: 'opacity 0.5s, visibility 0.5s', // visibility에도 transition 적용
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden', // 추가
            maxHeight: '500px', // 예시로 사용한 값, 적절히 조정 필요
            overflow: 'hidden',
            padding: '10px 0 30px 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <NavText
            onClick={() => {
              saveLog('헤더 회사 소개 클릭')
              navigate('/mo/company')
              window.scrollTo(0, 0)
            }}
          >
            회사 소개
          </NavText>
          <NavText
            onClick={() => {
              saveLog('헤더 서비스 이동 클릭')
              window.open('https://cabo.kr/serviceHome/', '_blank');
              window.scrollTo(0, 0)
            }}
          >
            서비스 페이지 이동
          </NavText>
          <NavText
            onClick={() => {
              saveLog('헤더 사업 소개 클릭')
              navigate('/mo/bussiness')
              window.scrollTo(0, 0)
            }}
          >
            사업 소개
          </NavText>
          <NavText
            onClick={() => {
              saveLog('헤더 문의하기 클릭')
              navigate('/mo/contact')
              window.scrollTo(0, 0)
            }}
          >
            문의하기
          </NavText>
        </div>
      </div>
    </>
  )
}
export default CaboHeader
