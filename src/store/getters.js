const getAllUsers = state => state.auth.allUsers;

const getCurrentUser = state =>
  state.auth.currentUserId
    ? state.auth.allUsers.find(user => user._id === state.auth.currentUserId)
    : null;

const getCurrentUserId = state => state.auth.currentUserId;

const getDayPreference = state => index => state.ui.dayPreference[index];

const getShowProfileSwitcher = state => state.ui.showProfileSwitcher;

const getSelectedUser = state =>
  state.auth.selectedUserId
    ? state.auth.allUsers.find(user => user._id === state.auth.selectedUserId)
    : null;

const getSelectedUserId = state => state.auth.selectedUserId;

const getSummary = state => state.data.summary;

const getToastMessage = state => state.ui.toast.message;

const getToastType = state => state.ui.toast.type;

const getToastVisible = state => state.ui.toast.visible;

export default {
  getAllUsers,
  getCurrentUser,
  getCurrentUserId,
  getDayPreference,
  getShowProfileSwitcher,
  getSelectedUser,
  getSelectedUserId,
  getSummary,
  getToastMessage,
  getToastType,
  getToastVisible,
};
