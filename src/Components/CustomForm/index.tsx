import {
  Typography,
  Button,
  Grid,
  TextField,
  Autocomplete,
} from '@mui/material'
import {
  CustomContainer,
  TitleContainer,
  CheckboxesContainer,
  CustomFormContainer,
  StyledInputContainer,
  StyledErrorContainer,
} from './styled'
import { formatMaterialsList, materials } from './utils'
import CustomCheckbox from '../CustomCheckbox'
import { useForm } from 'Utils/mixins'
import { FormEvent, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const CustomForm = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [needRecommendation, setNeedRecommendation] = useState(false)
  const [providingMaterial, setProvidingMaterial] = useState(false)
  const [tellUsMore, setTellUsMore] = useState<string>('')
  const [errorName, setErrorName] = useState(false)
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false)
  const formSize = useForm()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '')
    setPhoneNumber(numericValue)
  }
  const handleTellUsMoreChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTellUsMore(event.target.value)
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handleAutocompleteChange = (
    event: React.ChangeEvent<{}>,
    values: string[]
  ) => {
    setSelectedMaterials(values)
  }

  var templateParams = {
    message: tellUsMore,
    list_items: formatMaterialsList(selectedMaterials),
    from_name: name,
    phone_number: phoneNumber,
    is_providing_material: providingMaterial ? 'Yes' : 'No',
    need_recommendation: needRecommendation ? 'Yes' : 'No',
  }

  const sendMail = async () => {
    setErrorName(false)
    setErrorPhoneNumber(false)
    if (name.length === 0) {
      setErrorName(true)
      return
    }
    if (phoneNumber.length === 0) {
      setErrorPhoneNumber(true)
      return
    }
    await emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID || '',
        process.env.REACT_APP_TEMPLATE_ID || '',
        templateParams,
        process.env.REACT_APP_MAIL_ID || ''
      )
      .then(
        (result) => {
          console.log(result)
          setName('')
          setEmail('')
          setPhoneNumber('')
          setTellUsMore('')
          setSelectedMaterials([])
          setProvidingMaterial(false)
          setNeedRecommendation(false)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  useEffect(() => {}, [formSize, selectedMaterials])
  return (
    <CustomContainer>
      <TitleContainer>
        <Typography variant="h1" component="h2">
          Get a quote today!
        </Typography>
      </TitleContainer>
      <CustomFormContainer onSubmit={handleSubmit}>
        <StyledInputContainer>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          {errorName && <StyledErrorContainer>Add a name</StyledErrorContainer>}
        </StyledInputContainer>
        <StyledInputContainer>
          <TextField
            fullWidth
            type="tel"
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {errorPhoneNumber && (
            <StyledErrorContainer>Add a phone number</StyledErrorContainer>
          )}
        </StyledInputContainer>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Autocomplete
          multiple
          fullWidth
          id="tags-outlined"
          options={materials}
          getOptionLabel={(option) => option}
          //filterSelectedOptions
          isOptionEqualToValue={(option, newValue) => {
            return option === newValue
          }}
          value={selectedMaterials}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Materials"
              variant="outlined"
              size="medium"
            />
          )}
        />
        <TextField
          fullWidth
          label="Tell Us More"
          multiline
          rows={4}
          value={tellUsMore}
          onChange={handleTellUsMoreChange}
        />
        <CheckboxesContainer>
          <Grid container>
            <Grid item xs={formSize ? 12 : 6}>
              <CustomCheckbox
                onChange={() => setProvidingMaterial(!providingMaterial)}
                checked={providingMaterial}
                label="Are you providing the Material?"
              />
            </Grid>
            <Grid item xs={formSize ? 12 : 6}>
              <CustomCheckbox
                label="Do you need a recommendation?"
                onChange={() => setNeedRecommendation(!needRecommendation)}
                checked={needRecommendation}
              />
            </Grid>
          </Grid>
        </CheckboxesContainer>
        <Button
          onClick={sendMail}
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </CustomFormContainer>
    </CustomContainer>
  )
}

export default CustomForm
