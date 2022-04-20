# 🔥 Vue 3 + Vue Router + Vite + Typescript + SSR ✔

![Vite, Vue, Tailwind CSS](http://svgur.com/i/fs4.svg)

## This starter template includes:

- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Vue Router v4](https://github.com/vuejs/router)
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

- axios interceptor
- custom svg loader (`v-icon`)
- pre-defined validation rules (`required|email`)

### global components

- `v-icon`

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

vite uses **native ES modules**, `92.8%` of modern browsers(April 2022) support `<script type="module">`. We have added a vite's official plugin([Check it out](https://www.npmjs.com/package/@vitejs/plugin-legacy)) to support legacy browsers as well, this means that, if your clients are visiting from older browsers, the site will still work **(even in IE)**

## Creators / Maintainers

- [@amoramishvili](https://github.com/amoramishvili)
- [@chkhaidzebeka](https://github.com/chkhaidzebeka)
