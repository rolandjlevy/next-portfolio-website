
import axios from 'axios';

export const getInitialPropsData = async (url:string) => {
  const options = { method: 'GET', url };
  const { data } = await axios(options);
  return {
    data
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