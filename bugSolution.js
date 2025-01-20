```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function MyAPIHandler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    // Access session data here
    res.status(200).json({ message: 'Authenticated!', session });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
```