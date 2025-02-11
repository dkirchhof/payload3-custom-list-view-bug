# Payload 3 Custom List View Bug?

How to render custom list views in Payload 3? SSR vs CSR? Is it a bug?

## Reproduction Steps

1.

```
npm install
npm run dev
```

2. Goto http://localhost:3000/admin/collections/users
3. You should see a custom table
4. Change columns
5. :boom: Default table will be displayed
