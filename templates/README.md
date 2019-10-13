# Installation

```bash
$ npm install axios @aspida/<% name %>
```

# Usage

```javascript
import api, { mock } from '@aspida/<% name %>'

if (process.env.NODE_ENV !== 'production') {
  mock()
}

;(async () => {
  const user = await api().users._userId(0).$get()

  console.log(user) // { id: 0, name: 'aaaa' }
})()
```
