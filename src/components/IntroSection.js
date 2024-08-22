export default function IntroSection({
  className = "",
  containerStyle = "",
  textContainerStyle = "",
  text = "We are an award winning design agency that",
  text1 = "strongly believes in the power of creative ideas.",
  buttonContainerStyle = "",
  buttonTextStyle = "",
  text2 = "Get Started",
}) {
  return (
    <div className={`text-left ${containerStyle} ${className}`}>
      <div className={`self-stretch ${textContainerStyle}`}>
        <span>
          <p>{text}</p>
          <p>{text1}</p>
        </span>
      </div>
      <div
        className={`flex items-center justify-center rounded-[1000px] border-2 border-solid border-sky-400 bg-sky-400 ${buttonContainerStyle}`}
      >
        <button
          className={`text-center font-semibold text-white ${buttonTextStyle}`}
        >
          {text2}
        </button>
      </div>
    </div>
  );
}
