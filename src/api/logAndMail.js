import axios from 'axios'

export const saveLog = async (log) => {
  const body = {
    log,
  }
  await axios
    .post('https://www.smartcabo.co.kr/api/tempUser/log', body)
    .catch((err) => {
      console.error(err)
    })
}

export const saveMail = async ({ name, phone, email, question }) => {
  const body = {
    name,
    phone,
    email,
    question,
  }
  await axios
    .post('https://www.smartcabo.co.kr/api/tempUser/contact', body)
    .catch((err) => {
      console.error(err)
    })
}
