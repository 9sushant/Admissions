import React, { useState, forwardRef, useCallback } from "react";
import {
  CheckCircleIcon,
  PhoneIcon,
  GraduationCapIcon,
  SparklesIcon,
  ZapIcon,
  UsersIcon,
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  BookOpenIcon,
  TrophyIcon,
  MapPinIcon,
  MailIcon,
  InstagramIcon,
  XCircleIcon,
} from "./Icons";

/* ----------------------------- Section Wrapper ----------------------------- */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = "" }, ref) => (
    <section
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="container mx-auto max-w-6xl">{children}</div>
    </section>
  )
);
Section.displayName = "Section";

/* ----------------------------- Hero Section ----------------------------- */
interface HeroSectionProps {
  onApplyNowClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyNowClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-gray-900 overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]" />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          India’s First AI-Powered School 
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          A new generation school for future-ready learners in Varanasi.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onApplyNowClick}
            className="w-full sm:w-auto text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            Apply for Admissions 2025–26
          </button>
          <a
            href="tel:+911234567890"
            className="w-full sm:w-auto text-lg font-semibold bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <PhoneIcon className="w-5 h-5" />
            Call Now: +91 63079 30834
          </a>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------- Trust Markers ----------------------------- */
export const TrustMarkers = () => {
  const markers = [
    { icon: <GraduationCapIcon />, text: "CBSE Curriculum" },
    { icon: <SparklesIcon />, text: "Practical Exposure + Real-World Skills" },
    { icon: <ZapIcon />, text: "AI Integrated Teaching" },
    { icon: <UsersIcon />, text: "53+ Year Legacy of Sunbeam Education Culture" },
  ];

  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {markers.map((marker, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300"
            >
              <div className="text-blue-400">
                {React.cloneElement(marker.icon, { className: "w-6 h-6" })}
              </div>
              <span className="text-sm sm:text-base font-medium">{marker.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ----------------------------- Why Choose Us ----------------------------- */
export const WhyChooseUsSection = () => {
  const points = [
    {
      icon: <LightBulbIcon />,
      text: "We combine academics with real world application and modern problem solving.",
    },
    {
      icon: <HeartIcon />,
      text: "Every student develops public speaking, confidence and strong communication skills.",
    },
    {
      icon: <ShieldCheckIcon />,
      text: "Safe, disciplined, value-based environment rooted in Banaras culture.",
    },
    {
      icon: <CpuChipIcon />,
      text: "Future-first learning using Artificial Intelligence inside classrooms.",
    },
    {
      icon: <TrophyIcon />,
      text: "Students get personalised support through data-based feedback (not just marks).",
    },
  ];

  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Dalimss Sunbeam Global School Sigra?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            className={`flex items-start space-x-4 p-6 bg-gray-800 rounded-xl ${
              index >= 3 ? "md:col-start-auto lg:col-start-2" : ""
            } ${index === 4 ? "lg:col-start-auto" : ""}`}
          >
            <div className="flex-shrink-0 text-blue-500 mt-1">
              {React.cloneElement(point.icon, { className: "w-7 h-7" })}
            </div>
            <p className="text-gray-300">{point.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

/* ----------------------------- AI Powered Section ----------------------------- */
export const AIPoweredSection = () => (
  <Section className="bg-gray-950">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Powered Future Learning</h2>
        <p className="text-lg text-gray-400 mb-8">
          Dalimss Sunbeam Sigra stands apart because we prepare children for tomorrow:
        </p>
        <ul className="space-y-4">
          {[
            "AI assisted Lesson Planning for teachers",
            "AI based personalised question generation for students",
            "Smart board presentation mode for modern classroom teaching",
            "Focus on critical thinking, creativity & real understanding (not rote learning)",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center md:text-left bg-gray-800 p-8 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10">
        <p className="text-2xl font-semibold italic text-gray-200">
          "This is not just a school. This is future education being built today in Varanasi."
        </p>
      </div>
    </div>
  </Section>
);

/* ----------------------------- Experiential Learning (NEW) ----------------------------- */
export const ExperientialLearningSection = () => {
  const experiences = [
    { title: "Horse Therapy", desc: "Emotional strength & confidence" },
    { title: "Sustainability Projects", desc: "Environmental awareness & leadership" },
    { title: "Hobby Clubs & Skill Labs", desc: "Exploration + real talent discovery" },
    { title: "Sports & Fitness", desc: "Strong mind + strong body" },
  ];

  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experiential Learning</h2>
      <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Our campus provides learning beyond books:
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((e, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center transition-all duration-300 hover:border-blue-500 hover:scale-105">
            <p className="text-xl font-semibold text-blue-400 mb-2">{e.title}</p>
            <p className="text-gray-300">{e.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

/* ----------------------------- Academics ----------------------------- */
export const AcademicsSection = () => (
  <Section className="bg-gray-800">
    <div className="text-center max-w-3xl mx-auto">
      <BookOpenIcon className="w-16 h-16 mx-auto mb-4 text-blue-400" />
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Academics</h2>
      <div className="space-y-4 text-lg text-gray-300">
        <p>CBSE Curriculum</p>
        <p>Strong foundational literacy + numeracy building</p>
        <p>Tech integrated learning from early classes</p>
        <p>Continuous assessment + personalised feedback</p>
      </div>
    </div>
  </Section>
);

/* ----------------------------- Parents Trust ----------------------------- */
export const ParentTrustSection = () => (
  <Section>
    <div className="text-center max-w-3xl mx-auto">
      <UsersIcon className="w-16 h-16 mx-auto mb-4 text-blue-400" />
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Parents Trust Dalimss Sunbeam</h2>
      <p className="text-lg text-gray-300">
        We are the most respected education names of Varanasi with thousands of families trusting our legacy, discipline, academics and values.
      </p>
    </div>
  </Section>
);

/* ----------------------------- Admission Process (NEW) ----------------------------- */
export const AdmissionProcessSection = () => {
  const steps = [
    { title: 'Fill Enquiry Form', description: 'Start your journey by filling out the online admission form.' },
    { title: 'School Team Contacts You', description: 'Our admission counselors will get in touch to guide you.' },
    { title: 'Campus Tour & Counselling', description: 'Visit our state-of-the-art campus and meet our team.' },
    { title: 'If Selected', description: 'meet our team.' },
    { title: 'Admission Confirmation', description: "Complete the final steps to secure your child's place." },
  ];

  return (
    <Section className="bg-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Admission Process</h2>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gray-700 hidden md:block" />
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 flex md:justify-end">
                {index % 2 === 0 && (
                  <div className="text-left md:text-right w-full">
                    <h3 className="text-2xl font-bold text-blue-400">{step.title}</h3>
                    <p className="text-gray-300 mt-2">{step.description}</p>
                  </div>
                )}
              </div>

              <div className="relative my-4 md:my-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 relative">
                  {index + 1}
                </div>
              </div>

              <div className="md:w-1/2 md:pl-8">
                {index % 2 !== 0 && (
                  <div className="text-left w-full">
                    <h3 className="text-2xl font-bold text-blue-400">{step.title}</h3>
                    <p className="text-gray-300 mt-2">{step.description}</p>
                  </div>
                )}
                {index % 2 === 0 && (
                  <div className="hidden md:block w-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

/* ----------------------------- Form submission (unchanged) ----------------------------- */
/* ------------- FIXED Google Apps Script submission function --------------- */
async function submitApplicationApi(formData: any) {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyeh7Ge5bZjGbi21lUqvSD_t--wc3buX6A1xR9-7KuP-R6p4xdKM2hTwJiedAJHXecYAw/exec";

  const body = new URLSearchParams({
    studentName: formData.studentName,
    email: formData.email,
    parentName: formData.parentName,
    classSeeking: formData.classSeeking,
    locality: formData.locality,
    mobileNumber: formData.mobileNumber,
  }).toString();

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // ✅ IMPORTANT FOR GOOGLE SCRIPT
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    return { success: true }; // ✅ assume success (no-cors cannot read response)
  } catch (error: any) {
    console.error("Submission failed:", error);
    return { success: false, message: error.message || "Failed to submit." };
  }
}

/* ----------------------------- Admission Form ----------------------------- */
export const AdmissionForm = forwardRef<HTMLElement>((props, ref) => {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    parentName: "",
    classSeeking: "",
    locality: "",
    mobileNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmission = useCallback(async () => {
    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      const result = await submitApplicationApi(formData);
      if (result.success) setSubmissionState("success");
      else {
        setErrorMessage(result.message || "Please try again.");
        setSubmissionState("error");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Please try again.");
      setSubmissionState("error");
    }
  }, [formData]);

  if (submissionState === "error")
    return (
      <Section ref={ref} className="bg-gray-950">
        <div className="rounded-lg bg-gray-800 p-8 text-center">
          <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-red-400">Submission Failed</h3>
          <p className="mt-2 text-gray-300">{errorMessage}</p>
          <button
            onClick={handleSubmission}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Try Again
          </button>
        </div>
      </Section>
    );

  if (submissionState === "success")
    return (
      <Section ref={ref} className="bg-gray-950">
        <div className="text-center py-10 max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-300">Your enquiry has been submitted. Our team will contact you shortly.</p>
        </div>
      </Section>
    );

  return (
    <Section ref={ref} className="bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Apply Now For Admissions 2025–26</h2>
        <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmission();
            }}
            className="space-y-6"
          >
            {[
              { id: "parentName", label: "Parent Name", type: "text" },
              { id: "studentName", label: "Student Name", type: "text" },
              { id: "classSeeking", label: "Class seeking admission", type: "text" },
              { id: "mobileNumber", label: "Mobile Number", type: "tel" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "locality", label: "Area / Locality", type: "text" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={(formData as any)[id]}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={submissionState === "submitting"}
              className="w-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition duration-300 disabled:bg-blue-800 flex items-center justify-center"
            >
              {submissionState === "submitting" ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
});
AdmissionForm.displayName = "AdmissionForm";

/* ----------------------------- Footer ----------------------------- */
export const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-8 text-gray-400">
    <div className="container mx-auto max-w-6xl px-4 text-center sm:text-left">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-white text-lg mb-2">Dalimss Sunbeam Global School Sigra</h3>
          <p>This is an official admission page for Dalimss Sunbeam Global School Sigra.</p>
        </div>
        <div>
          <h3 className="font-bold text-white text-lg mb-2">Contact Us</h3>
          <p className="flex items-center justify-center sm:justify-start gap-2"><MapPinIcon className="w-5 h-5" /> Varanasi</p>
          <p className="flex items-center justify-center sm:justify-start gap-2"><PhoneIcon className="w-5 h-5" /> +91 63079 30834</p>
        </div>
        <div>
          <h3 className="font-bold text-white text-lg mb-2">Follow Us</h3>

        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Dalimss Sunbeam Global School. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

/* ----------------------------- Sticky CTA (NEW) ----------------------------- */
interface StickyCTAProps {
  onApplyNowClick: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onApplyNowClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-3 border-t border-gray-700 z-50 md:hidden">
      <button
        onClick={onApplyNowClick}
        className="w-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg shadow-blue-600/30"
      >
        Apply for Admissions 2025–26
      </button>
    </div>
  );
};
