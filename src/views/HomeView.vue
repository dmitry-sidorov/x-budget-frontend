<template>
  <form @submit.prevent>
    <h4>Create new post:</h4>
    <!-- <input class="input" v-model="payment.namespace" type="text" name="title" placeholder="Payment title"/> -->
    <select class="input" v-model="payment.namespace" type="text" name="title" placeholder="Payment title">
      <option value="value1">Значение 1</option>
      <option value="value2" selected>Значение 2</option>
      <option value="value3">Значение 3</option>
    </select>
    <input class="input" v-model="payment.type" type="text" name="type" placeholder="Payment type"/>
    <input class="input textarea" v-model="payment.description" type="text" name="description" placeholder="Description"/>
    <input class="input" v-model="payment.amount" type="text" name="amount" placeholder="Amount"/>
    <button class="button" @click="createPost">Create</button>
  </form>
</template>

<script lang="ts">
import { v4 as uuidv4 } from 'uuid';

const paymentDefaultData = {
  id: '',
  namespace: '',
  type: '',
  description: '',
  amount: undefined,
}

export default {
  data() {
    return {
      payment: { ...paymentDefaultData }
    }
  },
  methods: {
    createPost() {
      this.payment.id = uuidv4();
      this.$emit('create', this.payment)
      this.payment = { ...paymentDefaultData }
    },
  }
}
</script>


<style>
:root {
  --main-color-light: rgba(0, 128, 128, 0.5);
  --main-color: rgba(0, 128, 128, 1);
}

form {
  display: flex;
  flex-direction: column;
}

.button {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  background-color: var(--main-color-light);
  border: 1px solid black;
  border-radius: 4px;
}

button:hover {
  background-color: var(--main-color);
}

.input {
  width: auto;
  border: 1px solid var(--main-color-light);
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 4px;
}

.textarea {
  height: 200%;
}

.input:hover {
  border-color: var(--main-color);
}

.input:hover::placeholder {
  color: var(--main-color);
}
</style>