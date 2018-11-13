<template>
  <div class="text-center">
    <figure class="avatar avatar-lg">
      <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Disbelief&skinColor=Light" alt="Avatar">
    </figure>
    <div class="panel-title h5 mt-10">{{ title }}</div>
    <div class="panel-subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      required: true,
      type: String,
    },
  },
};
</script>
