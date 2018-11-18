<template>
  <div class="card">

    <div class="card-image" v-if="getCurrentUser">
      <figure class="avatar avatar-xl">
        <img alt="avatar" :src="avatarUrl">
      </figure>
    </div>

    <div class="card-header" v-if="getCurrentUser">
      <div class="card-title h5">{{ getCurrentUser.name }}</div>
      <div class="card-subtitle text-gray">Profiel aanpassen</div>
    </div>

    <div class="card-body">
      <Selector title="Hoofddeksel:" :list="avatarData['top']" @change="updateAvatarTop"/>
      <Selector title="Haarkleur:" :list="avatarData['hairColor']" @change="updateHairColor"/>
      <Selector title="Hoedkleur:" :list="avatarData['hatColor']" @change="updateHatColor"/>
      <Selector title="Accessoires:" :list="avatarData['accessoriesType']" @change="updateAccessoriesType"/>
      <Selector title="Gezichtsbeharing:" :list="avatarData['facialHairType']" @change="updateFacialHairType"/>
      <Selector title="Gezichtsbeharing kleur:" :list="avatarData['facialHairColor']" @change="updateFacialHairColor"/>
      <Selector title="Kleren:" :list="avatarData['clotheType']" @change="updateClotheType"/>
      <Selector title="Kleren kleur:" :list="avatarData['clotheColor']" @change="updateClotheColor"/>
      <Selector title="Ogen:" :list="avatarData['eyeType']" @change="updateEyeType"/>
      <Selector title="Wenkbrauwen:" :list="avatarData['eyebrowType']" @change="updateEyebrowType"/>
      <Selector title="Mond:" :list="avatarData['mouthType']" @change="updateMouthType"/>
      <Selector title="Huid:" :list="avatarData['skinColor']" @change="updateSkinColor"/>
    </div>

    <div class="card-footer">
      <button class="btn btn-primary btn-block" @click="onSubmit">Opslaan</button>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import types from '../store/types';
import avatarData from '../assets/avatar-data.json';

// Components
import Selector from '../components/Selector.vue';

export default {
  name: 'Profile',
  components: {
    Selector,
  },
  data() {
    return {
      avatar: null,
      avatarTop: 'Default',
      avatarHairColor: 'Default',
      avatarHatColor: 'Default',
      avatarAccessoriesType: 'Default',
      avatarFacialHairType: 'Default',
      avatarFacialHairColor: 'Default',
      avatarClotheType: 'Default',
      avatarClotheColor: 'Default',
      avatarEyeType: 'Default',
      avatarEyebrowType: 'Default',
      avatarMouthType: 'Default',
      avatarSkinColor: 'Default',
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    avatarData() {
      return avatarData;
    },
    avatarUrl() {
      return `https://avataaars.io/?avatarStyle=Circle
        &topType=${this.avatarTop}
        &hairColor=${this.avatarHairColor}
        &hatColor=${this.avatarHatColor}
        &accessoriesType=${this.avatarAccessoriesType}
        &facialHairType=${this.avatarFacialHairType}
        &facialHairColor=${this.avatarFacialHairColor}
        &clotheType=${this.avatarClotheType}
        &clotheColor=${this.avatarClotheColor}
        &eyeType=${this.avatarEyeType}
        &eyebrowType=${this.avatarEyebrowType}
        &mouthType=${this.avatarMouthType}
        &skinColor=${this.avatarSkinColor}`.replace(/\s/g, '');
    },
  },
  methods: {
    onSubmit() {
      const user = this.getCurrentUser;
      this.$store.dispatch(types.UPDATE_USER, { ...user, avatar: this.avatarUrl });
    },
    updateAvatarTop(index) {
      this.avatarTop = index;
    },
    updateHairColor(index) {
      this.avatarHairColor = index;
    },
    updateHatColor(index) {
      this.avatarHatColor = index;
    },
    updateAccessoriesType(index) {
      this.avatarAccessoriesType = index;
    },
    updateFacialHairType(index) {
      this.avatarFacialHairType = index;
    },
    updateFacialHairColor(index) {
      this.avatarFacialHairColor = index;
    },
    updateClotheType(index) {
      this.avatarClotheType = index;
    },
    updateClotheColor(index) {
      this.avatarClotheColor = index;
    },
    updateEyeType(index) {
      this.avatarEyeType = index;
    },
    updateEyebrowType(index) {
      this.avatarEyebrowType = index;
    },
    updateMouthType(index) {
      this.avatarMouthType = index;
    },
    updateSkinColor(index) {
      this.avatarSkinColor = index;
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
    bottom: 0;
    height: 68px;
    left: 0;
    position: fixed;
    right: 0;
  }
}

.avatar-xl {
  height: 12rem;
  width: 12rem;
}
</style>
