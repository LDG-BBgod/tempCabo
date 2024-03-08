// 라이브러리

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

const Employ = () => {
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
            채용
          </CaboText>
          <CaboSpacer space={40} />

          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            카보와 함께 보험 산업 내 정보비대칭을
          </CaboText>
          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            해결하실 팀원분들을 구하고있습니다.
          </CaboText>
          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            합류 목표가 아닌 간단한 커피챗도 좋으니
          </CaboText>
          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            아래 연락처로 편하게 연락주세요
          </CaboText>
        </div>
        <CaboSpacer space={40} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CaboText fontSize={18} fontWeight="600">
              ceo@cabo.kr
            </CaboText>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <img
              src="/img/mail.svg"
              alt="아이콘"
              style={{ marginLeft: 20, width: 30 }}
            />
          </div>
        </div>
        <CaboSpacer space={20} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CaboText fontSize={18} fontWeight="600">
              044 - 715 - 7442
            </CaboText>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <img
              src="/img/phone.svg"
              alt="아이콘"
              style={{ marginLeft: 20, width: 30 }}
            />
          </div>
        </div>
      </CaboInner>
    </div>
  )
}
export default Employ
