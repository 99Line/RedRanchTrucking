import { Formik, Field, ErrorMessage, useFormik, FieldProps } from "formik";
import {
  Typography,
  Button,
  TextField,
  Autocomplete,
  Grid,
} from "@mui/material";
import {
  CustomContainer,
  CustomFormContainer,
  TitleContainer,
  CustomTextField,
  CustomErrorMessage,
  CheckboxesContainer,
} from "./styled";
import { validateEmail, validationSchema } from "./utils";
import { FormValues } from "../../Types";
import CustomCheckbox from "../CustomCheckbox";
import { useForm } from "Utils/mixins";
import { useEffect } from "react";

const CustomForm = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values); // TODO add logic
  };

  const formSize = useForm();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      comments: "",
      materials: [],
      providingMaterials: false,
      needRecommendation: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    console.log(formSize);
  }, [formSize]);

  return (
    <CustomContainer>
      <TitleContainer>
        <Typography variant="h1" component="h2">
          Get a quote today!
        </Typography>
      </TitleContainer>

      <Formik
        initialValues={formik.initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <CustomFormContainer>
            <Field
              size="small"
              name="name"
              as={CustomTextField}
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              helperText={
                <ErrorMessage
                  name="name"
                  render={(msg: string) => (
                    <CustomErrorMessage>{msg}</CustomErrorMessage>
                  )}
                />
              }
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Field
              size="small"
              name="phoneNumber"
              as={CustomTextField}
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              onSubmit={console.log(errors)}
              helperText={
                <ErrorMessage
                  name="phoneNumber"
                  render={(msg: string) => (
                    <CustomErrorMessage>{msg}</CustomErrorMessage>
                  )}
                />
              }
            />

            <Field
              name="email"
              as={CustomTextField}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              validate={validateEmail}
              size="small"
              helperText={
                <ErrorMessage
                  name="email"
                  render={() => (
                    <CustomErrorMessage>{errors.email}</CustomErrorMessage>
                  )}
                />
              }
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <Field
              name="materials"
              fullWidth
              component={({ field, form }: FieldProps) => (
                <Autocomplete
                  {...field}
                  multiple
                  fullWidth
                  id="tags-outlined"
                  options={["Test1", "Test2"]}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  value={formik.values.materials}
                  onChange={(event, value) => {
                    formik.setFieldValue("materials", value); // Update the form field value
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Materials"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
              )}
            />

            <Field
              as={TextField}
              multiline
              fullWidth
              label="Tell us more"
              onChange={formik.handleChange}
              value={formik.values.comments}
              rows={4}
              variant="outlined"
              id="multilineField"
              name="comments"
              size="small"
            />

            <CheckboxesContainer>
              <Grid container>
                <Grid item xs={formSize ? 12 : 6}>
                  <CustomCheckbox
                    label="Are you providing the Material?"
                    checked={formik.values.providingMaterials}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "providingMaterials",
                        event.target.checked
                      )
                    }
                  />
                </Grid>
                <Grid item xs={formSize ? 12 : 6}>
                  <CustomCheckbox
                    label="Do you need a recommendation?"
                    checked={formik.values.needRecommendation}
                    onChange={(event) =>
                      formik.setFieldValue(
                        "needRecommendation",
                        event.target.checked
                      )
                    }
                  />
                </Grid>
              </Grid>
            </CheckboxesContainer>

            <Button fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </CustomFormContainer>
        )}
      </Formik>
    </CustomContainer>
  );
};

export default CustomForm;
