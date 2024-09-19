export default function LoadingItem() {
  return (
    <li className="flex h-200 w-full max-w-379 shadow-1 bg-white-1 ">
      <div className="grow bg-gray-2 w-182 animate-pulse"></div>

      <div className="font-montSerrat flex flex-col py-6 flex grow px-2 w-160">
        <div className="bg-gray-2 w-full h-32 mb-3 rounded animate-pulse"></div>
        <div className="bg-gray-2 w-full h-32 mb-4 rounded animate-pulse"></div>
        <div className="bg-gray-2 w-full h-32 rounded animate-pulse"></div>
      </div>
    </li>
  );
}
