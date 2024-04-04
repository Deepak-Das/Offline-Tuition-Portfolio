import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-700 px-20 py-10">
      <Image src={"assets/logo.svg"} alt="logo.svg" width={150} height={150} />

      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
