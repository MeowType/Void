# Void
Typescript void value on runtime

```typescript
import { Void } from '@meowtype/void'

const x: void = Void
```
```typescript
import { Void, isVoid, isVoidNonStrict } from '@meowtype/void'

isVoid(Void)
// true
isVoid(null)
// false

isVoidNonStrict(Void)
// true
isVoidNonStrict(null)
// true
```
---
<br>  
<br>  
<br>  

# Build
```
npm i
npm run build
```
