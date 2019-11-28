import React from "react";

export default function Timer(props) {
  const [time, setTime] = React.useState(0);
  const start_time = props.start_time;
  const end_time = props.end_time;

  React.useEffect(() => {
    if (end_time === -1) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1);
    }
  }, [end_time, time]);

  if (start_time === -1) {
    return null;
  }

  const t = end_time !== -1 ? end_time : +new Date();

  return ((t - start_time) / 1000).toFixed(2);
}
