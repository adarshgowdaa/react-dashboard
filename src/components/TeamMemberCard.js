import styles from "../style/TeamMemberCard.module.css";

export default function TeamMemberCard({
  className = "",
  container1 = "",
  text = "Coriss Ambady",
  text1 = "Financial Analyst",
}) {
  return (
    <div
      className={`flex flex-col items-start justify-center gap-y-[11px] rounded-lg bg-white py-10 pl-10 pr-14 text-left drop-shadow-lg ${className}`}
    >
      <div
        className={`h-24 max-h-full w-24 max-w-full flex-shrink-0 rounded-full bg-no-repeat ${container1} ${styles.backgroundImage}`}
      />
      <div className="flex items-end pt-[11px]">
        <div className="text-xl font-semibold leading-[29px] text-slate-700">
          {text}
        </div>
      </div>
      <div className="text-sm font-semibold uppercase leading-6 tracking-wide text-gray-400">
        {text1}
      </div>
      <div className="self-stretch pt-[6.8px] [max-width:202px]">
        <div className="text-[17px] font-medium leading-[29px] text-gray-500">
          <span>
            <p>Fermentum massa justo sit</p>
            <p>amet risus morbi leo.</p>
          </span>
        </div>
      </div>
    </div>
  );
}