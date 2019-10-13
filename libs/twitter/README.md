# Installation

```bash
$ npm install axios @aspida/twitter
```

# Usage

```javascript
import axios from 'axios'
import api, { mock } from '@aspida/twitter'

axios.defaults.headers = { token: 'YOUR TOKEN' }

if (process.env.NODE_ENV !== 'production') {
  mock()
}

(async () => {
  const tweet = await api().collections.entriesJson.$get({
    params: { id: 'custom-539487832448843776' }
  })

  console.log(tweet)
})()
```
