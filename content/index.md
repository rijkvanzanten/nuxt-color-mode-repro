# Dark Mode code block shenanigans

Note how the code block down below doesn't switch to dark-mode when switching color mode to dark. This is because color mode defaults to `classSuffix` of `-mode`.

```ts
// This is some code
function sayHi(name: string) {
	return `Hi ${name}!`;
}

sayHi('Rijk');
```

When setting `classSuffix` to `""` in `nuxt.config.ts`, the class will be the expected `.dark` instead of `.dark-mode`, which in turn makes shiki work as intended as well.