import { ethers } from "ethers";

// read only provider pointing to mumbai. It allows read only access to the mumbai blockchain
export const readOnlyProvider = new ethers.JsonRpcProvider(
    import.meta.env.VITE_LISK_RPC
);

export const wssProvider = new ethers.WebSocketProvider(
    import.meta.env.VITE_WSS_LISK_RPC
);

// read/write provider, that allows you to read data and also sign transaction on whatever chain it's pointing to
export const getProvider = (provider) => new ethers.BrowserProvider(provider);

