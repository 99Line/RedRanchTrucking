import useMediaQuery from "@mui/material/useMediaQuery";

export const mixins = {
  MOBILE: "(max-width:900px)",
  FORM: "(max-width:1000px)",
};

export const useMobile = () => {
  return useMediaQuery(mixins.MOBILE);
};

export const useForm = () => {
  return useMediaQuery(mixins.FORM);
};
