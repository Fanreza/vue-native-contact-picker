<script setup lang="ts">
import ContactPicker from '@/components/ContactPicker.vue'

const handlePicked = (contacts: any) => {
  console.log(contacts)
}

const handleErrors = (error: string) => {
  console.error(error)
}
</script>

<template>
  <div>
    <ContactPicker
      :props-select="['name', 'email', 'tel', 'address', 'icon']"
      :multiple="true"
      @errors="handleErrors"
      @picked="handlePicked"
    />
  </div>
</template>
