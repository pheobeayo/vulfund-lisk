import { ethers } from "ethers";
import abi from './abi.json'

export const getVulfundContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        abi,
        providerOrSigner
    );