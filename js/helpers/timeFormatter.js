const startTime = time =>
  new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true});

export default startTime;
