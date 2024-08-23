import TeamMemberCard from "./TeamMemberCard";
import styles from "../style/CompanyFactsSection.module.css";

export default function CompanyFactsSection({ className = "" }) {
  return (
    <div
      className={`flex flex-col justify-center gap-y-2 self-stretch bg-white pt-10 text-left ${className}`}
    >
      <div className="flex items-center justify-center">
        <div className="flex items-center pr-24">
          <div
            className={`${styles.companyFactsContainer} font-semibold text-slate-700`}
          >
            <div className={`${styles.companyFactsHeader} gap-y-4`}>
              <section className="uppercase leading-[22px] tracking-wide text-sky-400">
                Company Facts
              </section>
              <div className="self-stretch text-[42px] leading-[50px]">
                <span>
                  <p>We are proud of</p>
                  <p>our design team</p>
                </span>
              </div>
            </div>
            <div
              className={`${styles.factsItemsContainer} text-center text-[41px] leading-[41px]`}
            >
              <div className="flex flex-col items-center gap-y-5">
                <div className="flex items-center justify-center pr-[0.35px] text-center">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-sky-100 bg-sky-100 p-[15px]"></div>
                </div>
                <div className="text-center">1000+</div>
              </div>
              <div className="flex flex-col items-center gap-y-5">
                <div className="flex items-center justify-center pr-[0.36px] text-center">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-sky-100 bg-sky-100 p-[15px]"></div>
                </div>
                <div className="text-center">50K+</div>
              </div>
              <div className="flex flex-col items-center gap-y-5 pl-[19px]">
                <div className="flex items-center justify-center pr-[0.3px] text-center">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-sky-100 bg-sky-100 p-[15px]"></div>
                </div>
                <div className="text-center">20+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center pr-20">
          <div
            className={`${styles.textContainer} text-[17px] font-medium leading-[29px] text-gray-500`}
          >
            <div className="w-80 flex-shrink-0 self-stretch pt-4">
              <div>
                <section className="inline">
                  <p>Just sit back and relax while we take care</p>
                  <p>of your business needs for you.</p>
                </section>
              </div>
            </div>
            <div className="pl-12">Completed Projects</div>
            <div>Happy Customers</div>
            <div className="pl-[26px]">Awards Won</div>
          </div>
        </div>
      </div>
      <div className={`${styles.teamMembersContainer} leading-[29px]`}>
        <TeamMemberCard container1="bg-[url(../assets/img/member-1.jpeg)]" text="Coriss Ambady" text1="Financial Analyst" />
        <TeamMemberCard container1="bg-[url(../assets/img/member-2.jpeg)]" text="Cory Zamora" text1="Marketing Specialist" />
        <TeamMemberCard container1="bg-[url(../assets/img/member-3.jpeg)]" text="Nikolas Brooten" text1="Sales Manager" />
        <TeamMemberCard container1="bg-[url(../assets/img/member-4.jpeg)]" text="Jackie Sanders" text1="Investment Planner" />
      </div>
    </div>
  );
}
