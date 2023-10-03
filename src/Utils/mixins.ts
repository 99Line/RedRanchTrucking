import useMediaQuery from "@mui/material/useMediaQuery";

export const mixins = {
  MOBILE: "(max-width:900px)",
};

export const useMobile = () => {
  return useMediaQuery(mixins.MOBILE);
};
