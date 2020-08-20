import React, {useState, useEffect} from 'react';

function App() {
  const [value, setValue]=useState<string>("");

  const rgb2hex = (r: number, g: number, b: number) => (
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  );

  const hex2rgb = (c: number) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

  useEffect(() => {
    const color = rgb2hex(0,0,0)
    setValue(color)
  }, [])

  return (
    <div>{value}</div>
  );
}

export default App;
