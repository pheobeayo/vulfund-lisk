import { useState } from "react";
import { getProvider } from "../constants/providers";
import { isSupportedChain } from "../connection";
import { getVulfundContract } from "../constants/contract";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SigninDetails = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgData, setOrgData] = useState("");
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const changeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 1) {
        setError('File size exceeds 1MB. Please choose a smaller file.');
        setSelectedFile(null);
      } else {
        setError('');
        setSelectedFile(file);
        handleSubmission(file); 
      }
    }
  };

  const handleSubmission = async (file) => {
    setIsUploading(true); 
    try {
      const formData = new FormData();
      formData.append("file", file);
      const metadata = JSON.stringify({
        name: "Avatar",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      setImageUrl(`ipfs://${resData.IpfsHash}`);

      toast.success("Upload Successful", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Upload failed", {
        position: "top-center",
      });
    } finally {
      setIsUploading(false); 
    }
  };

  async function handleSignup() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getVulfundContract(signer);

    try {
      const transaction = await contract.signUp(imageUrl, orgName, orgData);
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Registration successful!", {
          position: "top-center",
        });
      }

      toast.error("Registration failed", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Registration failed!", {
        position: "top-center",
      });
    } finally {
      setImageUrl("");
      setOrgData("");
      setOrgName("");
    }
  }

  return (
    <div className="w-screen">
      <div className="grid place-items-center bg-white">
        <div className="w-1/2 p-8 rounded-lg text-[#110A03] flex flex-col items-center bg-white lg:w-[30%] md:w-[30%]  mx-auto">
          <h1 className="text-3xl font-serif text-[#110A03] font-bold mt-16">
            Sign up
          </h1>
          <label className="block mt-4 mb-2 text-base font-bold text-[#110A03] dark:text-[#110A03] text-center">
            Upload Organization Image
          </label>
          {imageUrl ? (
            <input
              type="text"
              value={imageUrl}
              placeholder="Organization Image"
              className="bg-white font-bold border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#3B3B3B] focus:border-[#110A03] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"
              readOnly
            />
          ) : (
            <div className="relative mb-4">
              <input
                type="file"
                placeholder="Organization Image"
                className={`bg-white font-bold border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#3B3B3B] focus:border-[#110A03] block w-full p-2.5 backdrop-blur-lg outline-none ${isUploading ? "cursor-not-allowed" : ""}`}
                onChange={changeHandler}
                disabled={isUploading}
              />
              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-lg">
                  <div className="loader"></div> {/* Add your loading spinner here */}
                </div>
              )}
            </div>
          )}
          <input
            type="text"
            placeholder="Organization Name"
            className="bg-white border border-[#110A03] text-[#110A03] text-sm font-bold rounded-lg focus:ring-[#3B3B3B] focus:border-[#110A03] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"
            onChange={(e) => setOrgName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Organization Data"
            className="bg-white border border-[#110A03] text-[#110A03] text-sm font-bold rounded-lg focus:ring-[#3B3B3B] focus:border-[#110A03] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"
            onChange={(e) => setOrgData(e.target.value)}
          />
          <button
            className="bg-[#110A03] hover:bg-[#DA8450] text-white py-2 px-4 rounded lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4"
            onClick={handleSignup}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninDetails;