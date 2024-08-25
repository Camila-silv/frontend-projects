export default function CategoryItem({ src, alt, label }) {
  return (
    <li className=" w-146 h-192 cursor-pointer hover:ease-in duration-300  hover:transition  hover:scale-105  md:w-211 lg:w-160">
      <img src={src} alt={alt} className="w-full h-157" />
      <span className="bg-black-1 text-white-1 w-full inline-block text-center py-1">
        {label}
      </span>
    </li>
  );
}
