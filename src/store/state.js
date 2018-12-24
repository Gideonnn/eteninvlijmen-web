export default {
  auth: {
    currentUserId: null,
    selectedUserId: null,
    allUsers: [],
  },
  data: {
    summary: [0, 0, 0, 0, 0, 0, 0],
    newsItems: [],
  },
  ui: {
    dayPreference: [false, false, false, false, false, false, false],
    showProfileSwitcher: false,
    showWhatsNew: false,
    toast: {
      type: '',
      message: '',
      visible: false,
    },
  },
};
