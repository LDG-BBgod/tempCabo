// 라이브러리
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

const History = () => {
  const MonthBox = ({ month }) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 40,
          borderRadius: 15,
          backgroundColor: '#16223B',
          flexShrink: 0,
        }}
      >
        <CaboText fontSize={18} fontWeight="600" color="#fff">
          {month}
        </CaboText>
      </div>
    )
  }

  const LeftHistory = ({ text, month }) => {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}
      >
        <CaboText fontSize={18} fontWeight="500">
          {text}
        </CaboText>
        <CaboSpacer horizontal={true} space={30} />
        <MonthBox month={month} />
      </div>
    )
  }
  const RightHistory = ({ text, month }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MonthBox month={month} />
        <CaboSpacer horizontal={true} space={30} />
        <CaboText fontSize={18} fontWeight="500">
          {text}
        </CaboText>
      </div>
    )
  }

  return (
    <div style={{ padding: '100px', marginBottom: 100 }}>
      <CaboInner>
        <Grid3>
          <div style={{ marginLeft: 'auto' }}>
            <CaboText fontSize={28} fontWeight="600" color="#3CAF89">
              2024
            </CaboText>
          </div>
          <DotCircleBox>
            <DotCircle />
            <VerticalLine />
          </DotCircleBox>
          <div></div>
        </Grid3>
        <CaboSpacer space={30} />
        <Grid3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <LeftHistory text="손해보험중개사 등록" month="02" />
          </div>
          <div></div>
          <div></div>
        </Grid3>
        <CaboSpacer space={60} />
        <Grid3>
          <div></div>
          <DotCircleBox>
            <DotCircle />
          </DotCircleBox>
          <div>
            <CaboText fontSize={28} fontWeight="600" color="#3CAF89">
              2023
            </CaboText>
          </div>
        </Grid3>
      </CaboInner>
      <CaboSpacer space={30} />
      <Grid3>
        <div></div>
        <div></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <RightHistory
            text="보험중개사 등록을 위한 광고계약 해지"
            month="12"
          />
          <CaboSpacer space={20} />
          <RightHistory
            text="(주)KB손해보험과의 자동차보험 광고대행 계약 체결"
            month="06"
          />
          <CaboSpacer space={20} />
          <RightHistory
            text="(주)씨앤씨애드와의 광고대행 계약 체결"
            month="05"
          />
          <CaboSpacer space={20} />
          <RightHistory text="주식회사 카보 설립" month="03" />
        </div>
      </Grid3>
    </div>
  )
}
export default History

const VerticalLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 425px; //해당 높이 조절하여 연혁 중앙선 길이 조절
  background-color: #16223b;
  transform: translate(-50%, 0);
  z-index: -1;
  opacity: 0.3;
`

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
`
const DotCircleBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DotCircle = styled.div`
  width: 18px;
  height: 18px;
  background-color: #3caf89;
  border-radius: 9px;
`
