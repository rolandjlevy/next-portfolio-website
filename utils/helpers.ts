import axios from 'axios';

axios.interceptors.response.use((response) => response, (error) => {
  return Promise.reject(error);
});

axios.interceptors.request.use((request) => request, (error) => {
  return Promise.reject(error);
});

export const getInitialPropsData = async (url:string) => {
  try {
    const res = await axios.get(url);
    return {
      data: res.data,
      error: null
    }
  } catch (err:any) {
    let msg;
    if (err.response) {
      msg = `Client returned an error response: ${err}`;
    } else if (err.request) {
      msg = `Client never received a response: ${err}`;
    } else {
      msg = `Unknown error: ${err}`;
    }
    return { 
      data: null,
      error: msg, 
    }
  }
}

export const getCategories = (data:any) => {
  return data.reduce((acc:any, item:any) => {
    if (!acc.includes(item.category)) acc.push(item.category);
    return acc;
  }, [])
}

export const getSectionData = ({ data, section }:any) => {
  return data.reduce((acc:any, item:any) => {
    if (item.category === section) {
      acc.push(item);
    }
    return acc;
  }, [])
}