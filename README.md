# Void
Typescript void value on runtime

```typescript
import { Void } from 'void'

const x: void = Void
```
```typescript
import { Void, isVoid, isVoidNonStrict } from 'void'

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