import React from "react"
import HeroBanner from "./HeroBanner"
import HowToApply from "./HowToApply"
import GeneralInstructions from "./GeneralInstructions"
import AdmissionTabsSection from "./AdmissionTabsSection"
import AimAheadSection from "./AimAheadSection"
import ReadyToDraw from "../shared/ReadyToDraw"

const AdmissionProcess = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <HeroBanner />
        <HowToApply />
        <GeneralInstructions />
        <AdmissionTabsSection />
        <AimAheadSection />
        <ReadyToDraw
          title="Need help completing your form or understanding the difference in UG and PG admission processes?"
          subtitle="Reach out to our admissions office or visit our FAQs section."
          primaryButtonText="Apply Now"
          secondaryButtonText="Download Brochure"
          bgColor="bg-[#A22877]"
        />
      </div>
    </>
  )
}

export default AdmissionProcess
