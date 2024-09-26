<template>
  <div class="a">
    <div>
      <h1>Hiiiiiiiiiiiiiii</h1>
    </div>
    <div>
      <table v-if="list" class="border-collapse">
        <thead>
        <tr>
          <th>Name</th>
          <th>Identifier</th>
          <th>Typ</th>
          <th>Erlaubte Werte</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list">
          <td>{{ item.name }}</td>
          <td>{{ item.iden }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.values.join(', ') }}</td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: list } = useFetch("/api/file") 
</script>

<style>
td {
  border: 2px solid black;
  padding: 5px;
}
th {
  border: 2px solid black;
  padding: 5px;
}
.a {
  padding: 20px;
}
</style>