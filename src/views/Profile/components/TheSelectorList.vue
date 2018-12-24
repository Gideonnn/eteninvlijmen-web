<template>
  <div>
    <Selector
      v-for="[type, title] in selectors"
      :key="type"
      :title="title"
      :list="avatarData[type]"
      :selected="userAvatar[type]"
      @change="onChange(type, $event)"/>
  </div>
</template>

<script>
import Selector from './Selector';

export default {
  name: 'TheSelectorList',
  props: {
    avatarData: {
      type: Object,
      required: true,
    },
    userAvatar: {
      type: Object,
      required: true,
    },
  },
  components: {
    Selector,
  },
  data() {
    return {
      selectors: [
        ['topType', 'Hoofddeksel'],
        ['hairColor', 'Haarkleur'],
        ['hatColor', 'Hoedkleur'],
        ['accessoriesType', 'Accessoires'],
        ['facialHairType', 'Gezichtsbeharing'],
        ['facialHairColor', 'Gezichtsbeharing kleur'],
        ['clotheType', 'Kleren'],
        ['clotheColor', 'Kleren'],
        ['eyeType', 'Ogen'],
        ['eyebrowType', 'Wenkbrauwen'],
        ['mouthType', 'Mond'],
        ['skinColor', 'Huid'],
      ],
    };
  },
  methods: {
    onChange(trait, value) {
      this.$emit('change', { ...this.userAvatar, [trait]: value });
    },
  },
};
</script>
