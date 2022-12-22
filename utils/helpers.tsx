export const getInitialPropsData = async (url:string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      data,
      error: {}
    };
  } catch (error) {
    console.log('from helper function:', {error});
    return {
      data: null,
      error
    };
  }
}

export const getCategories = (data) => {
  return data.reduce((acc, item) => {
    if (!acc.includes(item.category)) acc.push(item.category);
    return acc;
  }, [])
}

export const getSectionData = ({ data, section }) => {
  return data.reduce((acc, item) => {
    if (item.category === section) {
      acc.push(item);
    }
    return acc;
  }, [])
}