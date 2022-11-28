<template>
    <label :for="uuid" v-if="label">{{label}}</label>
    <input :aria-describedby="error ? `${uuid}-error` : null" class="field" :id="uuid" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="label" v-bind="$attrs" :class="{error: error}" />
    <p v-if="error" aria-live="assertive" :id="`${uuid}-error`" class="errorMessage">{{error}}</p>
</template>


<script>
import UniqueID from "@/features/UniqueID"

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      required: true
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

.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
}

.field {
  margin-bottom: 30px;
 
}


label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

label,
input {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

input {
  overflow: visible;
}



label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input{
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}



[type="text"] {
  height: 52px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
}

[type="text"]:focus {
  border-color: #39b982;
}

</style>