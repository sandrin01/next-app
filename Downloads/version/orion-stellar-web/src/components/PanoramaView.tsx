import { Pannellum } from "@georgedrpg/pannellum-react-next";
import "@georgedrpg/pannellum-react-next/es/css/video-js.css";
import "@georgedrpg/pannellum-react-next/es/css/pannellum.css";
import "@georgedrpg/pannellum-react-next/es/css/style-textInfo.css";

type Props = {
  image: string;
};

export default function PanoramaView({ image }: Props) {
  return (
    <Pannellum
      width="90%"
      height="900px"
      image={image}
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
      onLoad={() => {
        // console.log("panorama loaded");
      }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
      />

      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf/pannellum-react"
      />
    </Pannellum>
  );
}
