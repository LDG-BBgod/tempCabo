// 라이브러리
import { useNavigate } from 'react-router-dom'
// 리덕스

// 컴포넌트
import CaboHeader from '../components/CaboHeader'
import CaboInner from '../components/CaboInner'
import CaboText from '../components/CaboText'
import CaboSpacer from '../components/CaboSpacer'
import CaboButton from '../components/CaboButton'
// 전역 API
import { saveLog } from '../../api'
// 공통변수

// 기타

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <CaboHeader isFixed={true} />

      {/************** 섹션 1 **************/}
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <img
          src="/img/pc/home_section1_img1.jpg"
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
            <CaboText
              fontSize={48}
              fontWeight="600"
              color="#16223B"
              style={{ lineHeight: 1.5 }}
            >
              손해보험중개사 카보는
            </CaboText>
            <CaboText
              fontSize={48}
              fontWeight="600"
              color="#16223B"
              style={{ lineHeight: 1.5 }}
            >
              다이렉트 자동차 보험시장을
            </CaboText>
            <CaboText
              fontSize={48}
              fontWeight="600"
              color="#16223B"
              style={{ lineHeight: 1.5 }}
            >
              혁신하는 기업입니다.
            </CaboText>
            <CaboSpacer space={60} />
            <CaboText fontSize={18} fontWeight="400" color="#56585C">
              “다이렉트 카보” 서비스를 확인하세요!
            </CaboText>
            <CaboSpacer space={15} />
            <CaboButton
              buttonFunc={() => {
                saveLog('홈 섹션1 서비스버튼 클릭')
                window.open('https://cabo.kr/serviceHome/', '_blank')
              }}
              width={236}
              height={48}
              fontSize={20}
            >
              서비스 page 이동
            </CaboButton>
          </div>
        </CaboInner>
      </div>

      {/************** 섹션 2 **************/}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: '120px 0', marginLeft: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: 560 }}>
            <img
              src="/img/pc/home_section2_img1.png"
              alt="이미지"
              height={110}
            />
            <CaboSpacer horizontal={true} space={40} />
            <div>
              <CaboText fontSize={18} fontWeight="500" color="#16223B">
                설립 일자
              </CaboText>
              <CaboSpacer space={18} />
              <CaboText fontSize={34} fontWeight="500" color="#16223B">
                2023.03.03
              </CaboText>
            </div>
          </div>
          <CaboSpacer space={100} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/img/pc/home_section2_img2.png"
              alt="이미지"
              height={110}
            />
            <CaboSpacer horizontal={true} space={40} />
            <div>
              <CaboText fontSize={18} fontWeight="500" color="#16223B">
                소재지
              </CaboText>
              <CaboSpacer space={18} />
              <CaboText fontSize={34} fontWeight="500" color="#16223B">
                충청남도 계룡시
              </CaboText>
            </div>
          </div>
          <CaboSpacer space={100} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/img/pc/home_section2_img3.png"
              alt="이미지"
              height={110}
            />
            <CaboSpacer horizontal={true} space={40} />
            <div>
              <CaboText fontSize={18} fontWeight="500" color="#16223B">
                주요 사업
              </CaboText>
              <CaboSpacer space={18} />
              <CaboText fontSize={27} fontWeight="500" color="#16223B">
                다이렉트 자동차보험 중개서비스
              </CaboText>
            </div>
          </div>
        </div>
        <div
          style={{
            background:
              'linear-gradient(to bottom, rgba(60,93,161,1) 0%, rgba(22,34,59,1) 100%)',
          }}
        >
          <div
            style={{
              padding: '120px 0',
              marginRight: 'auto',
              marginLeft: 40,
              width: 520,
            }}
          >
            <CaboText fontSize={40} fontWeight="600" color="#fff">
              About CABO
            </CaboText>
            <CaboSpacer space={60} />
            <CaboText
              fontSize={18}
              fontWeight="300"
              color="#fff"
              style={{ lineHeight: 1.5 }}
            >
              주식회사 카보는 대한민국의 보험시장 내 정보비대칭을 해결하기 위해
              설립한 보험중개사로, 현재는 다이렉트자동차보험 중개서비스를 출시
              중입니다.
            </CaboText>
            <CaboSpacer space={40} />
            <CaboText
              fontSize={18}
              fontWeight="300"
              color="#fff"
              style={{ lineHeight: 1.5 }}
            >
              다이렉트 자동차 보험 중개 서비스 “다이렉트 카보”는 보험료 비교
              부터 가입보조까지 광고걱정없이, 안전하고, 편리하고, 저렴하게
              자동차 보험에 가입할 수 있도록 만들어줍니다.
            </CaboText>
            <CaboSpacer space={40} />
            <CaboText
              fontSize={18}
              fontWeight="300"
              color="#fff"
              style={{ lineHeight: 1.5 }}
            >
              보험소비자들의 실질적인 이익을 위해 시장을 개선하려 노력하고
              있습니다. “다이렉트 카보” 서비스를 확인해보세요.
            </CaboText>
            <CaboSpacer space={75} />
            <CaboButton
              buttonFunc={() => {
                saveLog('홈 섹션2 다이렉트 카보 확인 클릭')
                window.open('https://cabo.kr/serviceHome/', '_blank')
              }}
              width={236}
              height={48}
              fontSize={18}
            >
              다이렉트 카보 확인하기
            </CaboButton>
          </div>
        </div>
      </div>

      {/************** 섹션 3 **************/}
      <div style={{ backgroundColor: '#3CAF89', padding: '120px 0' }}>
        <CaboInner>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CaboText fontSize={40} fontWeight="500" color="#fff">
              Vision of CABO
            </CaboText>
            <CaboSpacer horizontal={true} space={100} />
            <CaboText fontSize={27} fontWeight="500" color="#16223B">
              카보는 대한민국 보험 중개 산업의 건강한 성장을 이끌어갑니다.
            </CaboText>
          </div>
          <CaboSpacer space={70} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src="/img/pc/home_section3_img1.png" alt="이미지" />
              <CaboSpacer space={40} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
                정보 비대칭을
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
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
              <img src="/img/pc/home_section3_img2.png" alt="이미지" />
              <CaboSpacer space={40} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
                보험소비자의 실질적인
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
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
              <img src="/img/pc/home_section3_img3.png" alt="이미지" />
              <CaboSpacer space={40} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
                대한민국 보험산업의
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
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
              <img src="/img/pc/home_section3_img4.png" alt="이미지" />
              <CaboSpacer space={40} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
                시장을 혁신하는
              </CaboText>
              <CaboSpacer space={15} />
              <CaboText fontSize={18} fontWeight="300" color="#fff">
                보험중개 스타트업입니다.
              </CaboText>
            </div>
          </div>
        </CaboInner>
      </div>

      {/************** 섹션 4 **************/}
      <div style={{ position: 'relative', width: '100%', height: 550 }}>
        <img
          src="/img/pc/home_section4_img1.png"
          alt="배경"
          style={{
            width: '100%',
            height: 550,
            objectFit: 'cover',
            position: 'absolute',
            zIndex: -1,
            left: 0,
            top: 0,
          }}
        />
        <div style={{ paddingTop: 120 }}>
          <CaboInner>
            <CaboText fontSize={40} fontWeight="600" color="#fff">
              공시 / 채용
            </CaboText>
            <CaboSpacer space={40} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                style={{
                  boxSizing: 'border-box',
                  width: 530,
                  height: 230,
                  backgroundColor: 'rgba(41,41,41,0.7)',
                  borderRadius: 20,
                  padding: '30px 40px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CaboText fontSize={24} fontWeight="500" color="#fff">
                      공시
                    </CaboText>
                    <CaboText
                      fontSize={35}
                      fontWeight="500"
                      color="#fff"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        navigate('company/alarmBoard')
                        window.scrollTo(0, 0)
                      }}
                    >
                      +
                    </CaboText>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 30,
                    }}
                  >
                    <CaboText
                      onClick={() => {
                        navigate('company/alarmBoard')
                        window.scrollTo(0, 0)
                      }}
                      fontSize={20}
                      fontWeight="400"
                      color="#B4B4B4"
                      style={{
                        cursor: 'pointer',
                        paddingBottom: 8,
                        borderBottom: 'solid 4px #B4B4B4',
                      }}
                    >
                      전자공시
                    </CaboText>
                    <CaboText
                      onClick={() => {
                        navigate('company/alarmBoard')
                        window.scrollTo(0, 0)
                      }}
                      fontSize={20}
                      fontWeight="400"
                      color="#B4B4B4"
                      style={{
                        cursor: 'pointer',
                        paddingBottom: 8,
                        borderBottom: 'solid 4px #B4B4B4',
                      }}
                    >
                      보험중개사 공시
                    </CaboText>
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxSizing: 'border-box',
                  width: 530,
                  height: 230,
                  backgroundColor: 'rgba(41,41,41,0.7)',
                  borderRadius: 20,
                  padding: '30px 40px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CaboText fontSize={24} fontWeight="500" color="#fff">
                      채용
                    </CaboText>
                    <CaboText
                      onClick={() => {
                        navigate('company/employ')
                        window.scrollTo(0, 0)
                      }}
                      fontSize={35}
                      fontWeight="500"
                      color="#fff"
                      style={{ cursor: 'pointer' }}
                    >
                      +
                    </CaboText>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 20,
                    }}
                  >
                    <CaboText
                      onClick={() => {
                        navigate('company/employ')
                        window.scrollTo(0, 0)
                      }}
                      fontSize={20}
                      fontWeight="400"
                      color="#B4B4B4"
                      style={{
                        cursor: 'pointer',
                        paddingBottom: 8,
                        borderBottom: 'solid 4px #B4B4B4',
                      }}
                    >
                      채용공고
                    </CaboText>
                  </div>
                </div>
              </div>
            </div>
          </CaboInner>
        </div>
      </div>
    </>
  )
}
export default Home
