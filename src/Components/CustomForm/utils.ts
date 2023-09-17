import * as Yup from 'yup'

export const validationSchema = Yup.object({
  name: Yup.string().required('Please add your name'),
  email: Yup.string()
    .email('Invalid email address1')
    .test('email', 'Invalid email address', (value) =>
      isEmailValid(value || '')
    )
    .required('Please add a valid email'),
  phoneNumber: Yup.string().required('Please add a phone number'),
  comments: Yup.string(),
  materials: Yup.array(),
})

const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateEmail = (value: string): string | undefined => {
  console.log('ENTRO00')
  console.log(value)
  let error
  if (!value) {
    error = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address'
  }
  return error
}

export const createPhoneNumberMask = () => {
  return [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]
}
