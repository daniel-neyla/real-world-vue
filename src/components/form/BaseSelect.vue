<template>

  <label :for="uuid" v-if="label">{{label}}</label>
  <select :aria-invalid="error ? true : null" :aria-describedby="error ? `${$uuid}--error` : null" :id="uuid" :value="modelValue" class="field" :class="{error: error}" v-bind="{
    ...$attrs,
    onChange: ($event) => {$emit('update:modelValue', $event.target.value)}
  }" >
    <option v-for="option in options" :key="option" :value="option" :selected="modelValue === option"  >{{option}}</option>
  </select>
  <p v-if="error" class="errorMessage" :id="`${uuid}-error` " aria-live="assertive">{{error}}</p>

</template>


<script>
import UniqueID from "@/features/UniqueID"

export default {
 props: {
  label: {
    type: String,
    default: ''
  }, 
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }, 
  error: {
    type: String,
    default: ''
  }
 },
 setup() {
  const uuid = UniqueID()
  return {
    uuid

  } 
}

}

</script>

<style scoped>

label,
input,
select{
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.field {

  margin-bottom: 30px;
 
}

.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
  margin-bottom: 50px;
}



label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}



[hidden] {
  display: none;
}

select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}




</style>