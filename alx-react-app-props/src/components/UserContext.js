import { createContext } from 'react';

/**
 * Initializes the UserContext object.
 * The argument passed to createContext (null in this case) is the default
 * value used when a component consumes the context but has no matching Provider
 * above it in the tree.
 */
const UserContext = createContext(null);

export default UserContext;
