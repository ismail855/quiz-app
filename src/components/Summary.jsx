import { useMemo } from "react";
import excellentImage from "../assets/images/excellent.png";
import failedImage from "../assets/images/failed.png";
import keepItUpImage from "../assets/images/keep-it-up.jpg";
import veryGoodImage from "../assets/images/very-good.jpg";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  const getResultImage = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return failedImage;
    } else if ((score / (noq * 5)) * 100 < 75) {
      return keepItUpImage;
    } else if ((score / (noq * 5)) * 100 < 100) {
      return veryGoodImage;
    } else {
      return excellentImage;
    }
  }, [score, noq]);
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      <div className={classes.badge}>
          <img src={getResultImage} alt="Success" />
      </div>
    </div>
  );
}
