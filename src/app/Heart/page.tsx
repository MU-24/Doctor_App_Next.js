import React from "react";
import { Image } from "@chakra-ui/react";
const page = () => {
  return (
    <div className="bg-black text-white ">
      <div className="flex flex-col items-center justify-center sm:flex-row bg-white">
        <Image
          className=" w-1/2 h-auto"
          src="https://s3-alpha-sig.figma.com/img/336c/30e5/fbad42cddfe8ae89226ea94496120971?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I91GmP14E740p4bdy4ntttDYIhIyVtr1G4psp13hCX7ArBJNg6RapgUz0FDw0jN~vza1uOo-GnXQqUFwN64IPK4r4AmJDMxI14syU3p9at~-8rKXwbC9jx3MgBIky-KFZi0ieEODpRR1Kqzj-osIN3S0RFtgEdcH4pMYFwJsyBKA6m6KGh~bexxWnY7~KNjNCcvVeRZ-FXEUUQDWcLmc1dPTSGnF~Aq1r~~tQGEI3IyYNa0l7EdEL-9MProuT~s2ffnTkP9MNY1pxiaolBIIBgXecYRi~04fBwuSMfUahna8jYYSyBBuTVTi6SkFkn2glKoxRFsDMjePfBDJAGjOLw__"
          alt=""
        />
        <div className="text-center  w-1/2">
          <h1 className="text-6xl font-bold">
            <span className="text-5xl font-bold text-green-600">
              HeartAttack Patients
            </span>
          </h1>
        </div>
      </div>
     
      <div className="lg:px-60 md:px-20 pt-20 px-12 pb-12">
        <h2 className=" text-xl font-semibold text-center mb-5">
          Understanding Heart Attacks: Care and Treatment Strategies for
          Recovery{" "}
        </h2>
        <ol className="list-decimal  text-white">
          Introduce the topic of coughing as a common symptom of various
          respiratory conditions, ranging from the common cold to more serious
          illnesses like bronchitis or pneumonia. Emphasize the importance of
          proper care and treatment to alleviate cough symptoms and promote
          recovery.
          <br />
          <br />
          <li>
            Understanding Coughs: Types and Causes:
            <br />
            <ul className=" list-disc">
              <li>
                Describe the different types of coughs, including dry coughs,
                productive coughs (with mucus), and chronic coughs lasting
                longer than eight weeks.
              </li>
              <li>
                Discuss common causes of coughing, such as viral infections
                (e.g., cold or flu), allergies, asthma, smoking, environmental
                irritants, and underlying medical conditions.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Home Remedies and Self-Care: <br />
            <ul className=" list-disc">
              <li>
                Provide a list of natural and home remedies to help soothe and
                relieve cough symptoms, such as:
              </li>
              <li>
                Hydration: Drinking plenty of fluids, including water, herbal
                teas, and warm broths, to help thin mucus and soothe the throat.
              </li>
              <li>
                Humidification: Using a humidifier or steam inhalation to add
                moisture to the air and ease congestion.
              </li>
              <li>
                Honey and herbal teas: Sipping on warm beverages containing
                honey, ginger, or lemon to soothe throat irritation and suppress
                coughing.
              </li>
              <li>
                Rest: Getting adequate rest and sleep to support the body
                immune response and promote healing.
              </li>
              <li>
                Emphasize the importance of avoiding tobacco smoke, air
                pollutants, and other environmental triggers that can exacerbate
                cough symptoms.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Over-the-Counter Medications: <br />
            <ul className=" list-disc">
              <li>
                Discuss the use of over-the-counter cough medications to relieve
                cough symptoms, including cough suppressants and expectorants.
              </li>
              <li>
                Explain the differences between cough suppressants (which reduce
                the urge to cough) and expectorants (which help loosen mucus),
                and when each type may be appropriate.
              </li>
              <li>
                Provide guidance on selecting appropriate cough medications
                based on individual symptoms and medical history, and emphasize
                the importance of following dosage instructions.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Prescription Medications and Medical Treatments: <br />
            <ul className=" list-disc">
              <li>
                Offer advice on lifestyle changes and environmental
                modifications to help reduce cough triggers and promote
                respiratory health, such as:
              </li>
              <li>
                Discuss common causes of coughing, such as viral infections
                (e.g., cold or flu), allergies, asthma, smoking, environmental
                irritants, and underlying medical conditions.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Seeking Medical Evaluation: When to See a Doctor: <br />
            <ul className=" list-disc">
              <li>
                Describe the different types of coughs, including dry coughs,
                productive coughs (with mucus), and chronic coughs lasting
                longer than eight weeks.
              </li>
              <li>
                Discuss common causes of coughing, such as viral infections
                (e.g., cold or flu), allergies, asthma, smoking, environmental
                irritants, and underlying medical conditions.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Regular Healthcare Monitoring and Check-Ups:
            <br />
            <ul className=" list-disc">
              <li>
                Describe the different types of coughs, including dry coughs,
                productive coughs (with mucus), and chronic coughs lasting
                longer than eight weeks.
              </li>
              <li>
                Discuss common causes of coughing, such as viral infections
                (e.g., cold or flu), allergies, asthma, smoking, environmental
                irritants, and underlying medical conditions.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default page;
