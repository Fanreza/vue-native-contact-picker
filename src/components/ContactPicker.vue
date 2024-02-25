<script setup lang="ts">
import { ref } from 'vue'

const supported = 'contacts' in navigator && 'ContactsManager' in window

interface ContactProperties {
  name: Array<string>
  email: Array<string>
  tel: Array<string>
  address: Array<string>
  icon: Array<Blob>
}

const props = ['name', 'email', 'tel', 'address', 'icon']
const opts = { multiple: true }

const contacts = ref<ContactProperties[]>([])
const errors = ref('')

const handlePickContact = async () => {
  try {
    // @ts-ignore
    const contacts = await navigator?.contacts.select(props, opts)
    handleResults(contacts)
  } catch (ex: any) {
    errors.value = ex
  }
}

const handleResults = (result: ContactProperties[]) => {
  contacts.value = result
}

const blobToImage = (blob: Blob) => {
  return URL.createObjectURL(new Blob([blob], { type: 'image/png' }))
}
</script>

<template>
  <div>
    <button @click="handlePickContact">Pick</button>
    <p v-if="errors">{{ errors }}</p>
    <p v-else-if="!supported">Not supported</p>
    <div v-for="contact in contacts">
      <img :src="blobToImage(contact.icon[0])" alt="" />
      <p>{{ contact.name }}</p>
      <p>{{ contact.email }}</p>
      <p>{{ contact.tel }}</p>
      <p>{{ contact.address }}</p>
    </div>

    <pre>{{ contacts }}</pre>
  </div>
</template>

<style scoped></style>
