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
    <footer style={{ padding: '30px 0', backgroundColor: '#34464B' }}>
      <CaboInner>
        <img src="/img/logo_white.svg" alt="logo" height={30} />
        <div>
          <CaboSpacer space={15} />
          <CaboText fontSize={12} fontWeight="200" color="#fff">
            상호 : (주)카보
          </CaboText>
          <CaboSpacer space={10} />
          <CaboText fontSize={12} fontWeight="200" color="#fff">
            대표 : 이동진
          </CaboText>
          <CaboSpacer space={10} />
          <CaboText fontSize={12} fontWeight="200" color="#fff">
            주소 : 충청남도 계룡시 장안1길 6, 202호
          </CaboText>
          <CaboSpacer space={10} />
          <CaboText fontSize={12} fontWeight="200" color="#fff">
            사업자번호 : 291-86-02840
          </CaboText>
          <CaboSpacer space={10} />
          <CaboText fontSize={12} fontWeight="200" color="#fff">
            대표 전화 : 044-715-7442
          </CaboText>
          <CaboSpacer space={12} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '50px 10px 1fr' }}>
          <CaboText fontSize={12} fontWeight="200" color="#fff">
            영업 시간
          </CaboText>
          <CaboText
            fontSize={12}
            fontWeight="200"
            color="#fff"
            style={{ textAlign: 'center' }}
          >
            :
          </CaboText>
          <div>
            <div>
              <div style={{ display: 'flex' }}>
                <CaboText
                  fontSize={12}
                  fontWeight="200"
                  color="#fff"
                  style={{ width: 40 }}
                >
                  평일
                </CaboText>
                <CaboText
                  fontSize={12}
                  fontWeight="200"
                  color="#fff"
                  style={{ width: 95 }}
                >
                  10:00 ~ 19:00
                </CaboText>
              </div>
              <CaboSpacer space={12} />
              <div style={{ display: 'flex' }}>
                <CaboText
                  fontSize={12}
                  fontWeight="200"
                  color="#fff"
                  style={{ width: 40 }}
                >
                  토요일
                </CaboText>
                <CaboText
                  fontSize={12}
                  fontWeight="200"
                  color="#fff"
                  style={{ width: 95 }}
                >
                  10:00 ~ 22:00
                </CaboText>
              </div>
              <CaboSpacer space={12} />
              <div style={{ display: 'flex' }}>
                <CaboText
                  fontSize={12}
                  fontWeight="200"
                  color="#fff"
                  style={{ width: 40 }}
                >
                  일요일
                </CaboText>
                <CaboText
                  fontSize={12}
                  fontWeight="200"
                  color="#fff"
                  style={{ width: 95 }}
                >
                  10:00 ~ 17:00
                </CaboText>
              </div>
            </div>
          </div>
        </div>
        <CaboSpacer space={30} />
        <CaboText fontSize={14} fontWeight="200" color="#fff">
          copyright 카보. All right Reserved
        </CaboText>
        <CaboSpacer space={8} />
        <CaboText fontSize={14} fontWeight="200" color="#fff">
          개인정보책임관리자 : 이동진
        </CaboText>
        <CaboSpacer space={12} />
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
      </CaboInner>
    </footer>
  )
}
export default CaboFooter
