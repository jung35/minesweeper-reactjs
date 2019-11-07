import React from "react";

export default function Timer(props) {
  const [time, setTime] = React.useState(0);
  const start_time = props.start_time;

  React.useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1);
  }, [time]);

  if (start_time === -1) {
    return null;
  }

  return ((+new Date() - start_time) / 1000).toFixed(2);
}
