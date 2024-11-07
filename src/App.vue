
<template>
  <div id="app" class="bg-background min-h-screen p-6">
    <header class="text-center mb-8">
      <img src="@/assets/logo.png" alt="Logo" class="mx-auto mb-6 w-26 h-22" />
    </header>
    <FormularioVue />
  </div>
</template>

<script>
import FormularioVue from './components/formulario.vue';

export default {
  components: {
    FormularioVue,
  },
};
</script>
