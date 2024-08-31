import React, { useState, useEffect } from 'react';
import { getPublicIp } from '../../src/utils/api';
import config from '../../config.json';


export const Ps1 = () => {

  const [hostname, setHostname] = useState(config.ps1_hostname);

  useEffect(() => {
    const fetchIp = async () => {
      const ip = await getPublicIp();
      setHostname(ip);
    };
    fetchIp();
  }, []);

  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">
        {config.ps1_username}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
