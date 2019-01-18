<template>
  <div class="field">
    <label class="label is-medium" :class="{'has-text-danger': errors.has(field)}">{{name}}<span class="has-text-danger" v-if="rules.required === true">&nbsp;*</span></label>
    <div class="control">
      <input
        type="text"
        :data-vv-as="name"
        v-model="model[field]"
        :name="field"
        class="input is-medium"
        v-validate="rules"
        :class="{'is-danger': errors.has(field)}"
      >
      <span class="help has-text-danger" v-if="errors.has(field)">{{errors.first(field)}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model','name','field','rules']
};
</script>

<style>
</style>
