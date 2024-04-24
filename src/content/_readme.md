# 2 important points

1. No ESM `imports`/`exports` in MDX files

#### 1. No ESM imports/exports in MDX files

When using `next-mdx-remote`, ESM `import` and `export` statements cannot be used inside MDX files. If you need to use components in your MDX files, they should be provided as a prop to `<MDXRemote />` (or via context).

Example:

```tsx
<MDXRemote
  {...props}
  // pass custom components through components prop:
  components={{ ...customComponents, ...(props.components || {}) }}
  // pass custom data/variables through options/scope prop:
  options={{ scope: { ...siteConfig, ...(props.options?.scope || {}) } }}
/>
```

another example by gaudion:
[here](https://gaudion.dev/blog/nextjs-mdx-blog#6-create-mdx-components)
