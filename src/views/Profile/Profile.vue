<template>
  <div class="card" v-if="getCurrentUser">

    <div class="card-image">
      <Avatar class="avatar-xl" :traits="updatedAvatar || getCurrentUser.avatar" />
    </div>

    <div class="card-header">
      <div class="card-title h5">{{ getCurrentUser.name }}</div>
      <div class="card-subtitle text-gray">Profiel aanpassen</div>
    </div>

    <div class="card-body">
      <TheSelectorList
        :user-avatar="getCurrentUser.avatar"
        :avatar-data="avatarData"
        @change="updateAvatar"/>
    </div>

    <div class="card-footer">
      <router-link tag="a" class="btn btn-link" to="/home">
        Annuleren
      </router-link>
      <button class="btn btn-primary btn-block" :disabled="!updatedAvatar" @click="onSubmit">
        Opslaan
      </button>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import types from '../../store/types';
import avatarData from '../../assets/avatar-data.json';

// Components
import Avatar from '../../components/Avatar';
import TheSelectorList from './components/TheSelectorList';

export default {
  name: 'Profile',
  components: {
    Avatar,
    TheSelectorList,
  },
  data() {
    return {
      updatedAvatar: null,
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    avatarData() {
      return avatarData;
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(types.UPDATE_USER, {
        ...this.getCurrentUser,
        avatar: this.updatedAvatar,
      });
    },
    updateAvatar(avatar) {
      this.updatedAvatar = avatar;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 0;

  .card-image,
  .card-header,
  .card-footer {
    text-align: center;
    background-color: #fff;
    z-index: 1000;
  }

  .card-image {
    height: 240px;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .card-header {
    height: 70px;
    left: 0;
    position: fixed;
    right: 0;
    top: 240px;
  }

  .card-body {
    margin: 310px 0 68px 0;
  }

  .card-footer {
    display: flex;
    bottom: 0;
    height: 68px;
    left: 0;
    position: fixed;
    right: 0;

    & > .btn {
      flex: 1 1;
    }
  }
}

.avatar-xl {
  height: 12rem;
  width: 12rem;
}
</style>
