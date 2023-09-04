<template>
  <v-sheet class="mx-auto create-form teal-lighten-3">
    <h4 class="header">Create new payment:</h4>
    <v-form validate-on="submit lazy" @submit.prevent>
      <v-combobox
        label="Payment category"
        :items="categories"
        variant="outlined"
        v-model="payment.category"
      />
      <v-text-field class="input" label="Payment subcategory" variant="outlined"  v-model="payment.subcategory" />
      <v-textarea label="Description" variant="outlined"  v-model="payment.description" />
      <div class="amount">
        <v-text-field label="Amount" variant="outlined" v-model="payment.amount" />
        <v-combobox label="Currency" :items="currencies" variant="outlined" v-model="payment.currency" />
      </div>
      <v-btn class="button" @click="createPost" variant="outlined">Create payment</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { v4 as uuidv4 } from 'uuid'

const mockCategories = [
  'Appartment',
  'Food',
  'Restaurant',
  'Fuel',
  'Car repair',
  'Health',
  'Education',
  'Pets',
  'Charity',
  'Other',
  'Reserve'
]

const CURRENCIES = ['BYN', 'USD', "EU"]

type PaymentView = {
  id?: string;
  category?: string;
  subcategory?: string;
  description?: string;
  amount?: number;
  currency: string;
}

export default {
  data() {
    return {
      payment: { id: uuidv4(), currency: 'BYN' } as PaymentView,
      categories: mockCategories.sort(),
      currencies: CURRENCIES,
    }
  },
  methods: {
    createPost() {
      this.$emit('create', this.payment)
    },
  }
}
</script>


<style>
:root {
  --main-color-light: rgba(0, 128, 128, 0.5);
  --main-color: rgba(0, 128, 128, 1);
}

.create-form {
  width: 600px;
}

.header {
  margin: 10px 0;
  font-size: 24px;
}

.input {
  /* padding: 10px; */
  /* max-height: 50px; */
}

.button {
  width: 200px;
  min-height: 60px;
}

form {
  display: flex;
  flex-direction: column;
}

/* .button {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  background-color: var(--main-color-light);
  border: 1px solid black;
  border-radius: 4px;
} */

button:hover {
  background-color: var(--main-color);
}

.amount {
  display: flex;
  gap: 16px;
}

/* .input {
  width: auto;
  border: 1px solid var(--main-color-light);
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 4px;
} */

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