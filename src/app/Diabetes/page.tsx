import React from "react";
import { Image } from "@chakra-ui/react";
const img5 = "/2.png";
const page = () => {
  return (
    <div className="bg-black text-white ">
      <div className="flex flex-col items-center justify-center sm:flex-row bg-white">
        <Image className="w-90 h-auto" src={img5} alt="" />
        <div className="text-center  w-1/2">
          <h1 className="text-6xl font-bold">
            <span className="text-3xl md:text-5xl font-bold text-green-600">
              Diabetes Patients
            </span>
          </h1>
        </div>
      </div>
      <div className="lg:px-60 md:px-20 pt-20 px-12 pb-12">
        <h2 className=" text-xl font-semibold text-center mb-5">
          Care and Treatment Strategies for Managing Diabetes
        </h2>
        <ol className="list-decimal  text-white">
          Diabetes management requires a comprehensive approach that includes
          lifestyle modifications, medication adherence, and regular monitoring.
          In this section, we will explore effective care and treatment
          strategies for individuals living with diabetes.
          <br />
          <br />
          <li>
            Medication Management: <br />
            <ul className=" list-disc">
              <li>
                Discuss the various medications commonly prescribed for diabetes
                management, including insulin, oral medications (such as
                metformin), and injectables (like GLP-1 receptor agonists).
              </li>
              <li>
                Explain the importance of medication adherence, proper dosage
                administration, and potential side effects.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Blood Glucose Monitoring: <br />
            <ul className=" list-disc">
              <li>
                Emphasize the importance of regular blood glucose monitoring to
                maintain optimal control of diabetes.
              </li>
              <li>
                Introduce different monitoring methods, including traditional
                fingerstick testing, continuous glucose monitoring (CGM)
                systems, and flash glucose monitoring (FGM) devices.
              </li>
              <li>
                Provide guidance on interpreting blood glucose readings and
                making adjustments to treatment plans based on the results.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Nutritional Therapy: <br />
            <ul className=" list-disc">
              <li>
                Highlight the significance of a well-balanced diet in diabetes
                management, focusing on portion control, carbohydrate counting,
                and glycemic index considerations.
              </li>
              <li>
                Offer practical tips for meal planning, grocery shopping, and
                dining out while managing diabetes.
              </li>
              <li>
                Suggest incorporating a variety of nutrient-rich foods, such as
                fruits, vegetables, whole grains, lean proteins, and healthy
                fats into daily meals.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Physical Activity and Exercise: <br />
            <ul className=" list-disc">
              <li>
                Stress the benefits of regular physical activity in improving
                insulin sensitivity, controlling blood sugar levels, and
                managing weight.
              </li>
              <li>
                Recommend a combination of aerobic exercises (like walking,
                swimming, or cycling) and strength training activities to
                enhance overall fitness.
              </li>
            </ul>
          </li>
          <br />
          <li>
            5. Diabetes Education and Self-Management:
            <br />
            <ul className=" list-disc">
              <li>
                Advocate for diabetes education programs that empower patients
                with knowledge and skills to self-manage their condition
                effectively.
              </li>
              <li>
                Encourage patients to attend diabetes self-management classes,
                workshops, or support groups to learn about disease management,
                problem-solving techniques, and goal setting.
              </li>
            </ul>
          </li>
          <br />
          <li>
            Regular Healthcare Monitoring and Check-Ups: <br />
            <ul className=" list-disc">
              <li>
                Stress the importance of regular healthcare visits and
                diabetes-related screenings to monitor disease progression and
                assess overall health.
              </li>
              <li>
                Encourage patients to schedule regular check-ups with their
                primary care physician, endocrinologist, or diabetes care team.
              </li>
              <li>
                Provide guidance on scheduling appointments for routine blood
                tests, eye exams, foot exams, and other recommended screenings.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default page;
