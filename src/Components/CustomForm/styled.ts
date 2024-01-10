import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const CustomContainer = styled.div`
  padding: 16px;
  max-width: 500px;
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #ffffff;
  border-radius: 21px;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`
export const CustomFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 12px;
  padding-top: 16px;
`
export const CustomTextField = styled(TextField)`
  && {
    font-family: Roboto; //sans-serif; /* Replace with your custom font */
  }
  border-radius: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  /* 150% */
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
export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const StyledErrorContainer = styled.div`
  font-size: 12px;
  padding: 0px 5px;
  color: red;
`
