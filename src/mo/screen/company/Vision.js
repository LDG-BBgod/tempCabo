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

const Vision = () => {
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
            Vision
          </CaboText>
          <CaboSpacer space={40} />
          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            카보는 보험 산업 내
          </CaboText>
          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            정보비대칭을 해결하여
          </CaboText>
          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            대한민국 보험산업의 건강한 성장을
          </CaboText>
          <CaboText
            fontSize={16}
            fontWeight={500}
            color="#16223B"
            style={{ lineHeight: 1.6 }}
          >
            선도하는 회사가 되고자합니다.
          </CaboText>
        </div>
        <CaboSpacer space={70} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 70,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="/img/mo/home_section3_img1.png"
              alt="이미지"
              style={{
                borderRadius: '50%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
            <CaboSpacer space={40} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              정보 비대칭을
            </CaboText>
            <CaboSpacer space={15} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              최우선으로 해결합니다.
            </CaboText>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="/img/pc/home_section3_img2.png"
              alt="이미지"
              style={{
                borderRadius: '50%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
            <CaboSpacer space={40} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              보험소비자의 실질적인
            </CaboText>
            <CaboSpacer space={15} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              효익을 목표로 합니다.
            </CaboText>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="/img/pc/home_section3_img3.png"
              alt="이미지"
              style={{
                borderRadius: '50%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
            <CaboSpacer space={40} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              대한민국 보험산업의
            </CaboText>
            <CaboSpacer space={15} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              건강한 성장을 지향합니다.
            </CaboText>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="/img/pc/home_section3_img4.png"
              alt="이미지"
              style={{
                borderRadius: '50%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
            <CaboSpacer space={40} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              시장을 혁신하는
            </CaboText>
            <CaboSpacer space={15} />
            <CaboText fontSize={18} fontWeight="400" color="#000">
              보험중개 스타트업입니다.
            </CaboText>
          </div>
        </div>
      </CaboInner>
    </div>
  )
}
export default Vision
