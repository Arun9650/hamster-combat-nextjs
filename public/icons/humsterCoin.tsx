import { IconProps } from "@/utils/types";
import { hamsterCoin } from "../images";
import Image, { StaticImageData } from "next/image";


const HamsterCoin: React.FC<StaticImageData> = ({height = 12, width = 12  }) => {

    return (
       <Image src={hamsterCoin} alt="Hamster Coin"  height={height} width={width} />
    );
};

export default HamsterCoin;