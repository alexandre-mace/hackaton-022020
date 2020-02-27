import React, { useState, useEffect } from 'react'

const Quiz = () => {
  const [timer, setTimer] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <p>{timer > 0 && timer}</p>
      

    </div>
  )
}

export default Quiz