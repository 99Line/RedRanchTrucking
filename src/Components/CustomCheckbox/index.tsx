import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            color: 'red',
            '&.Mui-checked': {
              color: 'red',
            },
          }}
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  )
}

export default CustomCheckbox
