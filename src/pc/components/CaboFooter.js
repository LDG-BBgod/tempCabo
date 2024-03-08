// 라이브러리

// 리덕스

// 컴포넌트
import CaboInner from './CaboInner'
import CaboText from './CaboText'
import CaboSpacer from './CaboSpacer'
// 전역 API

// 공통변수

// 기타

const CaboFooter = () => {
  return (
    <footer style={{ padding: '50px 0', backgroundColor: '#34464B' }}>
      <CaboInner>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <CaboText fontSize={14} fontWeight="200" color="#fff">
              상호 : (주)카보
            </CaboText>
            <CaboSpacer space={15} />
            <CaboText fontSize={14} fontWeight="200" color="#fff">
              대표 : 이동진
            </CaboText>
            <CaboSpacer space={15} />
            <CaboText fontSize={14} fontWeight="200" color="#fff">
              주소 : 충청남도 계룡시 장안1길 6, 202호
            </CaboText>
            <CaboSpacer space={15} />
            <CaboText fontSize={14} fontWeight="200" color="#fff">
              사업자번호 : 291-86-02840
            </CaboText>
            <CaboSpacer space={30} />
            <div style={{ display: 'flex' }}>
              <CaboText
                fontSize={14}
                fontWeight="400"
                color="#fff"
                style={{ cursor: 'pointer' }}
              >
                [개인정보 처리방침]
              </CaboText>
              <CaboSpacer horizontal={true} space={10} />
              <CaboText
                fontSize={14}
                fontWeight="400"
                color="#fff"
                style={{ cursor: 'pointer' }}
              >
                [제휴보험사]
              </CaboText>
            </div>
          </div>
          <img src="/img/logo_white.svg" alt="logo" height={80} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ display: 'flex' }}>
              <CaboText
                fontSize={14}
                fontWeight="200"
                color="#fff"
              >
                {`영업시간 :`}
              </CaboText>
              <CaboSpacer horizontal={true} space={4}/>
              <CaboText
                fontSize={14}
                fontWeight="200"
                color="#fff"
                style={{ width: 40 }}
              >
                평일
              </CaboText>
              <CaboText
                fontSize={14}
                fontWeight="200"
                color="#fff"
                style={{ width: 95, textAlign: 'right' }}
              >
                10:00 ~ 19:00
              </CaboText>
            </div>
            <CaboSpacer space={10} />
            <div style={{ display: 'flex' }}>
              <CaboText
                fontSize={14}
                fontWeight="200"
                color="#fff"
                style={{ width: 40 }}
              >
                토요일
              </CaboText>
              <CaboText
                fontSize={14}
                fontWeight="200"
                color="#fff"
                style={{ width: 95, textAlign: 'right' }}
              >
                10:00 ~ 22:00
              </CaboText>
            </div>
            <CaboSpacer space={10} />
            <div style={{ display: 'flex' }}>
              <CaboText
                fontSize={14}
                fontWeight="200"
                color="#fff"
                style={{ width: 40 }}
              >
                일요일
              </CaboText>
              <CaboText
                fontSize={14}
                fontWeight="200"
                color="#fff"
                style={{ width: 95, textAlign: 'right' }}
              >
                10:00 ~ 17:00
              </CaboText>
            </div>
            <CaboSpacer space={10} />
            <CaboText fontSize={14} fontWeight="200" color="#fff">
              대표 전화 : 044-715-7442
            </CaboText>
            <CaboSpacer space={30} />
            <CaboText fontSize={14} fontWeight="200" color="#fff">
              copyright 카보. All right Reserved
            </CaboText>
            <CaboSpacer space={8} />
            <CaboText fontSize={14} fontWeight="200" color="#fff">
              개인정보책임관리자 : 이동진
            </CaboText>
          </div>
        </div>
      </CaboInner>
    </footer>
  )
}
export default CaboFooter
