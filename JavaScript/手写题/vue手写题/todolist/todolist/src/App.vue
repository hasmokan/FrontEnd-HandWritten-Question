<template>
  <div class="App">
    <div class="outer">
      <div class="titleInput">
        <input v-model="inputValue" type="text" /><button @click="add">添加</button>
      </div>
      <div style="display: flex">
        <ol>
          <li v-for="(item, index) in List" :key="item">
            <input @click="addToDoneList(index)" type="checkbox" /> {{ item }}
          </li>
        </ol>
        <div style="width: 100px; height: 100px"></div>
        <ol>
          <li v-for="(item, index) in doneList" :key="item">
            {{ item }}
            <button @click="deleteItem(index)">删除当前元素</button>
          </li>
        </ol>
      </div>

      <div class="footer">
        <button @click="cleanList" class="cleaner">清除所有</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let List = ref<string[]>([])
let doneList = ref<string[]>([])
let inputValue = ref<string>('')

let addToDoneList = (index: number) => {
  let tmp = List.value[index]
  List.value.splice(index, 1)
  doneList.value.push(tmp)
}

let add = () => {
  List.value.push(inputValue.value)
}

let cleanList = () => {
  List.value = []
  doneList.value = []
}

let deleteItem = (index: number) => {
  doneList.value.splice(index, 1)
}
</script>

<style scoped>
.App {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.outer {
  margin-top: 200px;
}

.titleInput {
  display: flex;
}
</style>
