<template>
  <v-table class="payments-list">
    <thead>
      <tr>
        <th class="text-left">
          Category
        </th>
        <th class="text-left">
          Description
        </th>
        <th class="text-left">
          Amount
        </th>
        <th class="text-left">
          Currency
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="payment in payments"
        :key="payment.id"
      >
        <td>{{ payment.category }}</td>
        <td>{{ payment.description }}</td>
        <td>{{ payment.amount }}</td>
        <td>{{ payment.currency }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">

const MOCK_PAYMENTS = [
  {
    id: '1',
    category: 'Food',
    subcategory: '',
    description: 'Terra pizza',
    amount: '25',
    currency: 'BYN',
  },
  {
    id: '2',
    category: 'Fuel',
    subcategory: '',
    description: '',
    amount: '75',
    currency: 'BYN',
  }
];

export default {
  data() {
    return {
      payments: MOCK_PAYMENTS,
    }
  },
  methods: {
  }
}
</script>


<style>
:root {
  --main-color-light: rgba(0, 128, 128, 0.5);
  --main-color: rgba(0, 128, 128, 1);
}

.payments-list {
  width: 600px;
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