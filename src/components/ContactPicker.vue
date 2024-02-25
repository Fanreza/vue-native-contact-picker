<script setup lang="ts">
interface Props {
  propsSelect?: Array<'name' | 'email' | 'tel' | 'address' | 'icon'>
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  propsSelect: () => ['name', 'email', 'tel', 'address', 'icon'],
  multiple: true
})

const emit = defineEmits<{
  picked: [ContactProperties[]]
  errors: [value: string]
}>()

const supported = 'contacts' in navigator && 'ContactsManager' in window

interface ContactProperties {
  name: Array<string>
  email: Array<string>
  tel: Array<string>
  address: Array<string>
  icon: Array<Blob>
}

const options = { multiple: props.multiple }

const handlePickContact = async () => {
  try {
    // @ts-ignore
    const results: ContactProperties[] = await navigator?.contacts.select(
      props.propsSelect,
      options
    )

    emit('picked', results)
  } catch (er: any) {
    emit('errors', er)
  }
}
</script>

<template>
  <button @click="handlePickContact">{{ !supported ? 'Not Supported' : 'Pick Contact' }}</button>
</template>

<style scoped></style>
