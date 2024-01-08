import Image1 from "Assets/Image1.jpeg";
import Image2 from "Assets/Image2.jpeg";
import { ContainerBox, Image } from "./styled";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function Carrousel() {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const images = [{ img: Image1 }, { img: Image2 }];

  return (
    <ContainerBox>
      <Image src={images[1].img} alt="black and white truck" />
      {/* <Stack spacing={2} sx={{ position: "absolute", bottom: "10px" }}>
        <Pagination
          count={2}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack> */}
    </ContainerBox>
  );
}
