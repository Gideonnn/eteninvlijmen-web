const getAllUsers = state =>
  state.auth.allUsers.slice().sort((a, b) => a.name.localeCompare(b.name));

const getAllUsersCount = state => state.auth.allUsers.length;

const getCurrentUser = state =>
  state.auth.currentUserId
    ? state.auth.allUsers.find(user => user.name === state.auth.currentUserId)
    : null;

const getCurrentUserId = state => state.auth.currentUserId;

const getDayPreference = state => index => state.ui.dayPreference[index];

const getNewsItems = state => state.data.newsItems;

const getSelectedUser = state =>
  state.auth.selectedUserId
    ? state.auth.allUsers.find(user => user.name === state.auth.selectedUserId)
    : null;

const getSelectedUserId = state => state.auth.selectedUserId;

const getShowProfileSwitcher = state => !state.auth.currentUserId || state.ui.showProfileSwitcher;

const getShowWhatsNew = state => state.ui.showWhatsNew && getNewsItems(state).length > 0;

const getSummary = state => state.data.summary;

const getToastMessage = state => state.ui.toast.message;

const getToastType = state => state.ui.toast.type;

const getToastVisible = state => state.ui.toast.visible;

export default {
  getAllUsers,
  getAllUsersCount,
  getCurrentUser,
  getCurrentUserId,
  getDayPreference,
  getNewsItems,
  getSelectedUser,
  getSelectedUserId,
  getShowProfileSwitcher,
  getShowWhatsNew,
  getSummary,
  getToastMessage,
  getToastType,
  getToastVisible,
};
