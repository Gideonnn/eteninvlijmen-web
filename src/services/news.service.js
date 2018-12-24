import news from '../assets/news.json';

const key = 'readNewsItems';

const _getReadNewsItems = () => {
  try {
    const read = JSON.parse(localStorage.getItem(key));
    return Array.isArray(read) ? read : [];
  } catch (e) {
    return [];
  }
};

const getNews = () => {
  const read = _getReadNewsItems();
  return news.filter(item => read.indexOf(item.id) === -1);
};

const markAsRead = newsItemId => {
  const read = _getReadNewsItems();
  localStorage.setItem(key, JSON.stringify([...read, newsItemId]));
};

export default {
  getNews,
  markAsRead,
};
