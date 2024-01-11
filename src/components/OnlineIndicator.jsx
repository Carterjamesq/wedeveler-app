import React, { useState, useEffect } from 'react';

function OnlineIndicator() {
  const [isOnline, setIsOnline] = useState(true);
  const [workingHours, setWorkingHours] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      const isWorkingHours = currentHour >= 9 && currentHour <= 17;

      setIsOnline(navigator.onLine && isWorkingHours);
      setWorkingHours(isWorkingHours);
    };

    checkStatus();

    const intervalId = setInterval(checkStatus, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const onlineDotClass = isOnline ? 'online-dot' : 'offline-dot';
  const statusText = isOnline ? 'Online' : 'Offline';

  return (
    <div id="onlineOfflineText">
        <div className={onlineDotClass}></div>
        { statusText }
        { workingHours && <span> ( 9:00 to 17:00 Mon - Fri ) </span> }
    </div>
  );
}

export default OnlineIndicator;