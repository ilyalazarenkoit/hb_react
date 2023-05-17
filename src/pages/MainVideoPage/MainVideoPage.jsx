import styles from "./MainVideoPage.module.css";
import ReactPlayer from "react-player";
import happybirthday from "../../videos/hb.mp4";
import elseVideo from "../../videos/else.mp4";
import { useEffect, useState } from "react";
export const MainVideoPage = () => {
  const [video, setVideo] = useState(elseVideo);
  useEffect(() => {
    if (localStorage.getItem("name") === "Semen!") {
      setVideo(happybirthday);
    }
  }, []);

  return (
    <div className={styles.video_Main}>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
        url={video}
        playing={true}
      />
    </div>
  );
};
