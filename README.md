## vue-native-contact-picker

Vue wrapper for ContactPicker API

**This feature require user to accept permission and the website must run in secure environment (https)**

## Install

```shell
`npm i vue-native-contact-picker`
```

Import and register component

**Global**

```js
import { createApp } from 'vue'
import App from './App.vue'

import { ContactPicker } from 'vue-native-contact-picker'

const app = createApp(App)
app.component('ContactPicker', ContactPicker)
```

**Local**

```vue
<script setup lang="ts">
import { ContactPicker } from 'vue-native-contact-picker'

const handlePicked = (contacts: any) => {
  console.log(contacts)
}

const handleErrors = (error: string) => {
  console.error(error)
}
</script>

<template>
  <ContactPicker
    :props-select="['name', 'email', 'tel', 'address', 'icon']"
    :multiple="true"
    @errors="handleErrors"
    @picked="handlePicked"
  />
</template>
```

## Browser Support

[Specification]('https://w3c.github.io/contact-picker/spec/')

| Browser       | Version |
| ------------- | ------- |
| Chrome Mobile | 120     |

## Props

| Name        | Value                                    | Default                                     |
| ----------- | ---------------------------------------- | ------------------------------------------- |
| propsSelect | Array of name, email, tel, address, icon | ['name', 'email', 'tel', 'address', 'icon'] |
| multiple    | boolean                                  | true                                        |

## Events

| Name   | Value                                                                                                                         |
| ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| picked | Object { name: Array of string, email: Array of string, tel: Array of string, address: Array of string, icon: Array of Blob } |
| errors | Object Errors                                                                                                                 |
