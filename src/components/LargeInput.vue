<template>
  <div class="field">
    <label class="label is-medium" :class="{'has-text-danger': errors.has(field)}">{{name}}</label>
    <div class="control">
      <textarea
        type="text"
        :data-vv-as="name"
        v-model="model[field]"
        :name="field"
        class="textarea"
        rows="4"
        v-validate="rules"
        :class="{'is-danger': errors.has(field)}"
      ></textarea>
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
