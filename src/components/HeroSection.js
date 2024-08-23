import IntroSection from "./IntroSection";
import StrategyHeadSection from "./StrategyHeadSection";

export default function HeroSection({ className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-end gap-y-11 self-stretch bg-white pt-[90px] text-left ${className}`}
    >
      <div className="flex items-center justify-center self-stretch pr-[0.01px]">
        <div className="flex flex-wrap items-center justify-center gap-x-[106px] gap-y-[106px] min-[1910px]:flex-nowrap">
          <div className="flex flex-col items-center justify-end pt-8">
            <div className="flex w-[460px] flex-col items-start gap-y-7">
              <div className="w-96 text-[54px] font-semibold leading-[62px]">
                <span>
                  <p className="text-slate-700">A digital agency</p>
                  <p className="text-slate-700">specializing on</p>
                  <p className="text-sky-400">mobile design</p>
                </span>
              </div>
              <IntroSection
                text="We are an award winning design agency that"
                text1="strongly believes in the power of creative ideas."
                text2="Get Started"
                containerStyle="gap-y-10 self-stretch [max-width:460px]"
                textContainerStyle="text-gray-500 font-medium text-[22px] leading-[34px]"
                buttonContainerStyle="px-7 pb-[18px] pt-[17px]"
                buttonTextStyle="text-[17px] leading-[29px]"
              />
            </div>
          </div>
          <div className="hero-img h-[505px] max-h-full w-[723px] max-w-full flex-shrink-0 bg-no-repeat [background-position:0px_0px] [background-size:100%_100%]" />
        </div>
      </div>
      <div className="flex items-end justify-center self-stretch pl-[0.34px] pt-12">
        <div className="text-center text-[17px] font-medium leading-[29px] text-gray-500">
          Trusted by over 2K+ clients across the world
        </div>
      </div>
      <div className="flex items-center justify-center self-stretch">
        <div className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-3.5 min-[1910px]:flex-nowrap">
          <div className="flex flex-col items-center self-stretch">
            <div className="hero-c1 h-8 w-40 max-w-full flex-shrink-0 bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div className="hero-c2 h-[38px] w-40 max-w-full flex-shrink-0 bg-no-repeat bg-center bg-contain"></div>
          <div className="flex flex-col items-center pt-[0.54px]">
            <div className="hero-c3 h-[30px] w-40 max-w-full flex-shrink-0 bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div className="flex flex-col items-center pt-[1.2px]">
            <div className="hero-c4 h-7 w-40 max-w-full flex-shrink-0 bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div className="flex flex-col items-center self-stretch">
            <div className="hero-c5 h-9 w-40 max-w-full flex-shrink-0 bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div className="flex flex-col items-center pt-[2.6px]">
            <div className="hero-c6 h-6 w-40 max-w-full flex-shrink-0 bg-no-repeat bg-center bg-contain"></div>
          </div>
          <div className="flex flex-col items-center self-stretch">
            <div className="hero-c7 h-[34px] w-40 max-w-full flex-shrink-0 bg-no-repeat bg-center bg-contain"></div>
          </div>
        </div>
      </div>
      <StrategyHeadSection />
    </div>
  );
}
