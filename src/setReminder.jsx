import React, { useEffect } from 'react';

function Reminder() {
  let  interval = null;
  useEffect(() => {
    interval = setInterval(() => {
      // Call the showAlert function every 30 minutes
      showAlert();
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

    // Cleanup function to clear the interval when the component unmounts
    // return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  // Function to show the alert
  const showAlert = () => {
    alert('It has been 30 minutes!');
  };
    return (
    <div>
      <h1 id='message'>If You Done with the task Click here To Stop The Reminder</h1>
      <button id='kill-interval' onClick={()=>{clearInterval(interval);}}  >Click me</button>
    </div>
  );


}

export default Reminder;
