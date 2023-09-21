import styled from '@emotion/styled'
import { Container, TextField } from '@mui/material'
import { Form } from 'formik'

export const CustomContainer = styled(Container)`
  padding: 16px;
  width: 34.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`

export const CustomFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  padding-top: 16px;
`
export const CustomTextField = styled(TextField)`
  && {
    font-family: 'cursive'; //sans-serif; /* Replace with your custom font */
  }
  border-radius: 20px;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
`

export const CustomErrorMessage = styled.div`
  color: red;
`
export const CheckboxesContainer = styled.div`
  width: 100%;
  padding-left: 7px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`
