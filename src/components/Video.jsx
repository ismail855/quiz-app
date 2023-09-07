import classes from "../styles/Video.module.css";
export default function Video({ title, id, noq, image }) {
  return (
    <div className={classes.video}>
      <img
        src={`${window.location.origin}/images/course/${image}`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
