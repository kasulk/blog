# 2 important points

1. No ESM `imports`/`exports` in MDX files
1. No frontmatter in pages (with exceptions)

#### 1. No ESM imports/exports in MDX files

When using `next-mdx-remote`, ESM `import` and `export` statements cannot be used inside MDX files. If you need to use components in your MDX files, they should be provided as a prop to `<MDXRemote />` or via context.

#### 2. No frontmatter in pages (with exceptions)

MDX-files imported as components into pages are processed by `@next/mdx` and DO NOT support frontmatter.

Blogs on the other hand are fetched from the `content/blogs` folder and are compiled by `next-mdx-remote` and therefore DO support frontmatter.

So:
Don't use frontmatter in pages. Use frontmatter in blogs only.

In pages frontmatter shouldn't be neccessary anyway...

Besides, it's always possible to create pages without MDX ;)

In an emergency, `compileMDX` from `next-mdx-remote` can be used like so:

```tsx
import { compileMDX } from 'next-mdx-remote/rsc'

...

async function Page() {
	const { content, frontmatter } = await compileMDX({
		source: 'Some **mdx** text.',
        options: { parseFrontmatter: true },
		components: customComponents,
	})

	return (
      <>
        <h1>{frontmatter.title}</h1>
        {content}
      </>
    )

}
```
