import { Icons } from "../Icons";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="min-h-72 flex justify-around items-center border-t-2 border-gray-100">
        <div>
          <h1 className="logo-txt">PAYOAKS</h1>
          <p className="w-52 text-color-100">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex gap-4 mt-2">
            <Icons.githubLogo />
            <Icons.instagramLogo />
            <Icons.youtubeLogo />
          </div>
        </div>
        <div className="flex gap-14">
          <div className="flex flex-col gap-6">
            <h2 className="text-color-100 text-lg">SUPPORT</h2>
            <div className="flex flex-col gap-2">
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                FAQ
              </p>
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                Terms of use
              </p>
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-color-100 text-lg">COMPANY</h2>
            <div className="flex flex-col gap-2">
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                About us
              </p>
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                Contact
              </p>
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                Career
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-color-100 text-lg">SHOP</h2>
            <div className="flex flex-col gap-2">
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                My account
              </p>
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                Checkout
              </p>
              <p className="text-color-400 text-md cursor-pointer hover:underline">
                Cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-color-100 text-lg">SUPPORT</h2>
          <div className="flex gap-4 items-center">
            <Icons.mastercard />
            <Icons.amex />
            <Icons.visa />
          </div>
        </div>
      </div>
      <span className="p-4 mx-48 flex justify-center border-t-2 border-gray-200">
        © 2025 PAYOAKS. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
