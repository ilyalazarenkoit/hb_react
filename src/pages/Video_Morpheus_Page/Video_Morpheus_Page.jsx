import styles from "./Video_Morpheus_Page.module.css";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Morpheus from "../../videos/morpheus_monologue.mp4";
import Semen_Morp from "../../videos/morpheus_semen.mp4";
import { useState, useEffect } from "react";

export const VideoMorpheusPage = () => {
  const navigate = useNavigate();
  const [video, setVideo] = useState(Morpheus);
  function handleVideoEnd() {
    navigate("/select-pill");
  }
  useEffect(() => {
    if (localStorage.getItem("name") === "Semen!") {
      setVideo(Semen_Morp);
    }
  }, []);

  return (
    <div className={styles.video_Morpheus_Page}>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
        url={video}
        playing={true}
        onEnded={handleVideoEnd}
      />
    </div>
  );
};
