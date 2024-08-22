export default function StrategySection({ className = "" }) {
    return (
      <div
        className={`flex flex-col items-center justify-end self-stretch pt-[85px] text-left ${className}`}
      >
        <div className="z-0 flex w-[1920px] items-center">
          <div className="bg-div-overflow-hidden flex h-full w-full flex-shrink-0 flex-col items-center justify-end overflow-clip bg-cover bg-center pt-32" >
            <div className="z-[2] h-[5px] w-[1940px] flex-shrink-0 bg-sky-50" />
          </div>
        </div>
      </div>
    );
  }