// 라이브러리

// 리덕스

// 컴포넌트
import CaboHeader from '../components/CaboHeader'
import CaboInner from '../components/CaboInner'
import CaboSpacer from '../components/CaboSpacer'
import CaboText from '../components/CaboText'
import CaboButton from '../components/CaboButton'
// 전역 API
import { saveLog } from '../../api'
// 공통변수

// 기타

const Bussiness = () => {
  return (
    <>
      <CaboHeader color="#fff" />

      {/************** 섹션 1 **************/}
      <div style={{ position: 'relative', width: '100%', height: 410 }}>
        <img
          src="/img/mo/bussiness_section1_img1.png"
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
            <div style={{ width: 180, textAlign: 'center' }}>
              <CaboText fontSize={24} fontWeight="600" color="#fff">
                (주)카보의 사업을
              </CaboText>
            </div>
            <CaboSpacer space={25} />
            <div style={{ width: 180, textAlign: 'center' }}>
              <CaboText fontSize={24} fontWeight="600" color="#fff">
                소개합니다.
              </CaboText>
            </div>
          </div>
        </CaboInner>
      </div>

      {/************** 섹션 2 **************/}
      <div style={{ padding: '70px 0' }}>
        <CaboInner>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CaboText fontSize={18} fontWeight={600} color="#16223B">
              손해보험중개사 자격으로 진행되는
            </CaboText>
            <CaboSpacer space={20} />
            <CaboText fontSize={18} fontWeight={600} color="#16223B">
              “최초의”
            </CaboText>
            <CaboSpacer space={20} />
            <CaboText fontSize={18} fontWeight={600} color="#16223B">
              다이렉트 자동차보험 중개 서비스
            </CaboText>
            <CaboSpacer space={20} />
            <CaboText fontSize={18} fontWeight={600} color="#16223B">
              [다이렉트 카보]
            </CaboText>
          </div>
          <CaboSpacer space={80} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 100,
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
                src="/img/mo/bussiness_section2_img1.png"
                alt="이미지"
                height={160}
              />
              <CaboSpacer space={40} />
              <CaboText fontSize={16} fontWeight="400" color="#000">
                자동차 보험소비자와 손해보험사를
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={16} fontWeight="400" color="#000">
                온라인상에서 중개합니다.
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
                src="/img/mo/bussiness_section2_img2.png"
                alt="이미지"
                height={160}
              />
              <CaboSpacer space={40} />
              <CaboText fontSize={16} fontWeight="400" color="#000">
                보험소비자는 지금보다
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={16} fontWeight="400" color="#000">
                저렴하고, 안전하고, 편리하게
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={16} fontWeight="400" color="#000">
                자동차 보험을 가입하고 관리합니다.
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
                src="/img/mo/bussiness_section2_img3.png"
                alt="이미지"
                height={160}
              />
              <CaboSpacer space={40} />
              <CaboText fontSize={16} fontWeight="400" color="#000">
                손해보험사는 지금보다
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={16} fontWeight="400" color="#000">
                효율적인 방식으로 고객을 유입합니다.
              </CaboText>
            </div>
          </div>
          <CaboSpacer space={100} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CaboText fontSize={24} fontWeight="600" color="#16223B">
              다이렉트 카보 서비스를
            </CaboText>
            <CaboSpacer space={20} />
            <CaboText fontSize={24} fontWeight="600" color="#16223B">
              직접 확인해 보세요.
            </CaboText>
            <CaboSpacer space={40} />
            <CaboButton
              buttonFunc={() => {
                saveLog('헤더 사업소개 클릭')
                window.open('https://cabo.kr/serviceHome/', '_blank')
              }}
              width={250}
              height={60}
              fontSize={20}
              background="#16223B"
              style={{ boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)' }}
            >
              서비스 page 이동
            </CaboButton>
          </div>
        </CaboInner>
      </div>
    </>
  )
}
export default Bussiness
