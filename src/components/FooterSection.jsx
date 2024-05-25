import { footer } from "../constants";
export default function FooterSection() {
  console.log();
  return (
    <>
      <div className="bg-neutral-800 py-10   text-center px-4">
        <p className="text-gray-500">{footer.desc}</p>

        <ul className="flex flex-row justify-center gap-2 lg:py-10 mt-5 lg:mt-0">
          {footer.footLinks.map((links, index) => (
            <li key={index} className="hover:text-blue-500 text-sm cursor-pointer">
              {links.label}
            </li>
          ))}
        </ul>
        <ul className="flex flex-row justify-center gap-6  mt-5 lg:mt-0">
          {footer.icons.map((icon, index) => (
            <li
              key={index}
              className="hover:text-blue-500 border-2 p-2 hover:-translate-y-2 transition-all  border-orange-500 rounded-full"
            >
              <span className="  cursor-pointer    text-lg text-orange-500">
                {icon.icon}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
