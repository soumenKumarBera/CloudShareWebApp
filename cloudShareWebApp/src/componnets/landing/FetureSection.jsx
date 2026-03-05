
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { CiClock1 } from "react-icons/ci";

const FetureSection = ({ fetures }) => {
  const renderIcon = (iconeName, iconeColor) => {
    const icconProps = { size: 25, className: iconeColor };

    switch (iconeName) {
      case "ArrowUPCircle":
        return <IoArrowUpCircleOutline {...icconProps} />;

      case "Shield":
        return <FaShieldAlt {...icconProps} />;

      case "Share2":
        return <FiShare2 {...icconProps} />;

      case "CreditCard":
        return <CiCreditCard1 {...icconProps} />;

      case "FileText":
        return <FiFileText {...icconProps} />;

      case "Clock":
        return <CiClock1 {...icconProps} />;

      default:
        return <FiFileText {...icconProps} />;
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for the file sharing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            CloudShare provides all the tools you need to manage your digital
            content
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fetures.map((item, index) => (
              <div className="pt-6 border border-grey-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white ">
                <div
                  key={index}
                  className="flow-root bg-gray-50 rounded-lg px-6 pb-8"
                >
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                      {renderIcon(item.iconeNmae, item.iconeColor)}
                    </div>
                    <h3 className="mt-5 text-lg font-medium text-gray-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FetureSection;
