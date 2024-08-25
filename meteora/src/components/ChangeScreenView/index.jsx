export default function ChangeScreenView({ src, alt }) {
  return (
    <>
      <div className="w-screen flex-shrink-0">
        <img src={src} alt={alt} className="w-screen h-full flex" />
      </div>
      <div className="w-screen flex-shrink-0">
        <img src={src} alt={alt} className="w-screen h-full" />
      </div>
      <div className="w-screen flex-shrink-0">
        <img src={src} alt={alt} className="w-screen h-full" />
      </div>
    </>
  );
}
