// 라이브러리
import { useState } from 'react'
import styled from 'styled-components'
// 리덕스

// 컴포넌트
import CaboHeader from '../../components/CaboHeader'
import CaboInner from '../../components/CaboInner'
import CaboText from '../../components/CaboText'
import CaboSpacer from '../../components/CaboSpacer'
import CaboButton from '../../components/CaboButton'
// 전역 API

// 공통변수

// 기타

const AlarmBoard = () => {
  // 실제 데이터를 기반으로 현재 페이지 재구성해야함
  const [selectedList, setSelectedList] = useState(1)

  const List = ({ text, id }) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          width: 140,
          cursor: 'pointer',
          backgroundColor: selectedList === id ? '#3CAF89' : '#fff',
          border: selectedList === id ? '' : 'solid 1px #B5B5B5',
          borderRadius: 5,
        }}
        onClick={() => {
          setSelectedList(id)
        }}
      >
        <CaboText fontSize={14} color={selectedList === id ? '#fff' : '#000'}>
          {text}
        </CaboText>
      </div>
    )
  }

  return (
    <div style={{ padding: '70px 0' }}>
      <CaboInner>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CaboText fontSize={24} fontWeight={600} color="#16223B">
            공 시
          </CaboText>
          <CaboSpacer space={40} />
          <div style={{ display: 'flex', gap: 20 }}>
            <List text={'보험중개사 공시'} id={1} />
            <List text={'전자 공시'} id={2} />
          </div>
          <CaboSpacer space={70} />
          <CaboText fontSize={18} fontWeight={600} color="#16223B">
            자료는 컴퓨터를 통해 확인해주세요.
          </CaboText>
          {/* <div
            style={{ width: 840, height: 3, backgroundColor: '#16223B' }}
          ></div>
          <div
            style={{
              width: 840,
              height: 60,
              backgroundColor: '#FCFCFC',
              display: 'grid',
              gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr',
            }}
          >
            <TableTitle>
              <CaboText fontSize={18} fontWeight="500">
                제 목
              </CaboText>
            </TableTitle>
            <TableTitle>
              <CaboText fontSize={18} fontWeight="500">
                다운로드
              </CaboText>
            </TableTitle>
            <TableTitle>
              <CaboText fontSize={18} fontWeight="500">
                작성자
              </CaboText>
            </TableTitle>
            <TableTitle>
              <CaboText fontSize={18} fontWeight="500">
                등록일
              </CaboText>
            </TableTitle>
            <TableTitle>
              <CaboText fontSize={18} fontWeight="500">
                조회수
              </CaboText>
            </TableTitle>
          </div>
          <div
            style={{ width: 840, height: 1, backgroundColor: '#D3D3D3' }}
          ></div> 
          <div
            style={{
              width: 840,
              height: 90,
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CaboText fontSize={18} fontWeight="500">
              현재 게시된 공시자료가 없습니다.
            </CaboText>
          </div>
          <div
            style={{ width: 840, height: 1, backgroundColor: '#D3D3D3' }}
          ></div> */}
        </div>
      </CaboInner>
    </div>
  )
}
export default AlarmBoard

const TableTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
