# 🔥 Vue 3 + Vue Router + Pinia + Vite + Typescript + SSR ✔

![Vite, Vue, Tailwind CSS](http://svgur.com/i/fs4.svg)

## This starter template includes:

- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Vue Router v4](https://github.com/vuejs/router)
- [Pinia Store](https://pinia.vuejs.org/introduction.html)
- [Vite](https://vitejs.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/)
- [Legacy Browsers Support](https://www.npmjs.com/package/@vitejs/plugin-legacy)
- [Server Side Rendering]()



### Getting Started

```bash
npx degit amoramishvili/vue-vite vite-vue
cd vite-vue
```

```bash
yarn
yarn run dev
```



### Tools added:
* axios interceptor
* custom svg loader (`v-icon`)
* pre-defined validation rules (`required|email`)



### global components
* `v-icon`
#### usage
```typescript
// src/utils/vIcon.ts

// - import svg file
import dislike from "../../assets/icons/dislike.svg";
...

// - then "register" in components object
components: {
    dislike,
},


// finally you can use it in any component
<v-icon name="dislike" />
```


## Browser support

vite uses __native ES modules__, `92.8%` of modern browsers(April 2022) support `<script type="module">`. We have added a vite's official plugin([Check it out](https://www.npmjs.com/package/@vitejs/plugin-legacy)) to support legacy browsers as well, this means that, if your clients are visiting from older browsers, the site will still work __(even in IE)__


## Creators / Maintainers
* [@amoramishvili](https://github.com/amoramishvili)
* [@chkhaidzebeka](https://github.com/chkhaidzebeka)
