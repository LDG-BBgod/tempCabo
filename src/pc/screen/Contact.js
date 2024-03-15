// 라이브러리
import { useState } from 'react'
import styled from 'styled-components'
// 리덕스

// 컴포넌트
import CaboHeader from '../components/CaboHeader'
import CaboInner from '../components/CaboInner'
import CaboSpacer from '../components/CaboSpacer'
import CaboText from '../components/CaboText'
import CaboButton from '../components/CaboButton'
// 전역 API
import { saveLog, saveMail } from '../../api'
// 공통변수

// 기타

const Contact = () => {
  const [cantactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    question: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <>
      <CaboHeader />
      <CaboSpacer space={90} />

      {/************** 섹션 1 **************/}
      <div style={{ padding: '100px' }}>
        <CaboInner>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src="/img/mail.svg" alt="로고" height={100} />
              <CaboSpacer space={50} />
              <CaboText fontSize={40} fontWeight="600" color="#16223B">
                문의 하기
              </CaboText>
              <CaboSpacer space={30} />
              <CaboText fontSize={28} fontWeight="600" color="#16223B">
                업무 협약, 중개 계약, 서비스 문의 등을
              </CaboText>
              <CaboSpacer space={20} />
              <CaboText fontSize={28} fontWeight="600" color="#16223B">
                남겨주세요. 확인 후 답변드립니다.
              </CaboText>
            </div>
            <div
              style={{
                marginLeft: 80,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 40,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 30,
                }}
              >
                <img src="/img/iconPhone.svg" alt="아이콘" height={40} />
                <CaboText fontSize={24} fontWeight="700">
                  044 - 715 - 7442
                </CaboText>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 30,
                }}
              >
                <img src="/img/iconFax.svg" alt="아이콘" height={40} />
                <CaboText fontSize={24} fontWeight="700">
                  0505 - 720 - 0229
                </CaboText>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 30,
                }}
              >
                <img src="/img/iconMail.svg" alt="아이콘" height={40} />
                <CaboText fontSize={24} fontWeight="700">
                  ceo@cabo.kr
                </CaboText>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 30,
                }}
              >
                <img src="/img/iconCompany.svg" alt="아이콘" height={40} />
                <CaboText fontSize={24} fontWeight="700">
                  계룡시 장안1길6, 202호
                </CaboText>
              </div>
            </div>
          </div>
        </CaboInner>
      </div>

      {/************** 섹션 2 **************/}
      <div style={{ padding: '100px' }}>
        <CaboInner>
          <CaboText fontSize={28} fontWeight="700" color="#16223B">
            성함
          </CaboText>
          <CaboSpacer space={15} />
          <ContactInput
            name="name"
            value={cantactData.name}
            onChange={handleChange}
          />
          <CaboSpacer space={40} />
          <CaboText fontSize={28} fontWeight="700" color="#16223B">
            휴대폰 번호
          </CaboText>
          <CaboSpacer space={15} />
          <ContactInput
            name="phone"
            value={cantactData.phone}
            onChange={handleChange}
          />
          <CaboSpacer space={40} />
          <CaboText fontSize={28} fontWeight="700" color="#16223B">
            E-mail
          </CaboText>
          <CaboSpacer space={15} />
          <ContactInput
            name="email"
            value={cantactData.email}
            onChange={handleChange}
          />
          <CaboSpacer space={40} />
          <CaboText fontSize={28} fontWeight="700" color="#16223B">
            문의사항
          </CaboText>
          <CaboSpacer space={15} />
          <ContactTextArea
            name="question"
            value={cantactData.question}
            onChange={handleChange}
          />
          <CaboSpacer space={40} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CaboButton
              buttonFunc={async () => {
                saveLog('문의하기 제출버튼 클릭')
                await saveMail({
                  name: cantactData.name,
                  phone: cantactData.phone,
                  email: cantactData.email,
                  question: cantactData.question,
                })
                alert('문의가 제출되었습니다. 감사합니다.')
                window.location.reload()
              }}
              width={300}
              height={70}
              fontSize={24}
              background="#16223B"
              style={{
                boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)',
                marign: 'auto',
              }}
            >
              제출하기
            </CaboButton>
          </div>
        </CaboInner>
      </div>
    </>
  )
}
export default Contact

const ContactInput = styled.input`
  width: 100%;
  height: 40px;
  border: solid 1px #16223b;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 20px;
`

const ContactTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: solid 1px #16223b;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  resize: none;
`
