import axios from 'axios';
import config from '../../config.json';

let publicIp = null;

export const getPublicIp = async () => {
  if (!publicIp) {
    try {
      const { data } = await axios.get('https://api.ipify.org?format=json');
      publicIp = data.ip;
    } catch (error) {
      console.error('Error fetching public IP address:', error);
      publicIp = config.ps1_hostname; // fallback to config hostname
    }
  }
  return publicIp;
};


export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
