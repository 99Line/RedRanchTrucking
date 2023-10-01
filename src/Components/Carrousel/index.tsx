import Image1 from "Assets/Image1.jpeg";
import { ContainerBox, Image } from "./styled";

export default function Carrousel() {
  return (
    <ContainerBox>
      <Image src={Image1} alt="black and white truck" />
    </ContainerBox>
  );
}
