import { createContext } from 'react';

// Initializes the UserContext object.
// We export it so it can be used by both the Provider (in App.jsx)
// and the Consumers (like UserDetails.jsx).
const UserContext = createContext(null);

export default UserContext;
