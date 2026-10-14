export const OTHER = "Other (please specify)";

export type Value = string | string[];
export type Values = Record<string, Value>;

export type Question = {
  id: string;
  section: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "textarea" | "radio" | "checkbox" | "select";
  options?: string[];
  required?: boolean;
  help?: string;
  showIf?: { id: string; in: string[] };
};

const PROFESSIONS = [
  "Architect", "Architectural Designer", "Interior Designer", "Structural Engineer", "Civil Engineer",
  "Electrical Engineer", "Mechanical Engineer", "Quantity Surveyor", "Building Surveyor",
  "Estate Surveyor and Valuer", "Real Estate Agent", "Property Consultant", "Property Manager",
  "Project Manager", "Construction Manager", "Site Supervisor", "Builder", "Bricklayer/Mason", "Carpenter",
  "Electrician", "Plumber", "Painter", "Tiler", "Roofer", "POP Installer/Ceiling Specialist",
  "Aluminium and Glass Fabricator", "Welder/Metal Fabricator", "Furniture Maker", "Cabinet Maker",
  "HVAC/AC Technician", "Generator and Electrical Installation Technician", "Interior Decoration Specialist",
  "Landscape Designer/Gardener", "3D Visualizer/Architectural Renderer", "Architectural Animator",
  "Graphic Designer", "CAD Technician/Draughtsperson", "Real Estate Photographer/Videographer",
  "Property Marketing Specialist", "Facility Management Professional",
  "Cleaning and Post-Construction Cleaning Specialist", "Security Systems/CCTV Installer",
  "Building Materials Supplier", OTHER,
];

const SERVICES = [
  "Architectural Design and Building Plans", "Building Construction", "Structural Design and Engineering",
  "Building Renovation and Refurbishment", "Interior Design and Decoration", "Space Planning",
  "3D Modelling and Visualization", "Architectural Animation and Walkthroughs",
  "Quantity Surveying and Cost Estimation", "Property Valuation", "Land Surveying",
  "Building Inspection and Assessment", "Property Documentation Support", "Property Sales and Marketing",
  "Property Leasing and Letting", "Property Management", "Construction Project Management",
  "Site Supervision", "Masonry and Bricklaying", "Plumbing and Water Systems",
  "Electrical Installation and Maintenance", "Painting and Finishing", "Tiling and Flooring",
  "Roofing and Waterproofing", "Ceiling and POP Installation", "Carpentry and Woodwork",
  "Furniture Production and Installation", "Aluminium and Glass Works", "Welding and Metal Fabrication",
  "Air Conditioning and Ventilation", "Landscaping and Outdoor Design", "Cleaning and Facility Maintenance",
  "Real Estate Photography and Videography", "Property Content Creation and Digital Marketing",
  "Security Systems Installation", "Building Materials Supply", OTHER,
];

const PROJECT_TYPES = [
  "Residential Buildings", "Commercial Buildings", "Office Spaces", "Retail Spaces and Shops",
  "Industrial Buildings", "Land Development", "Interior Fit-Outs", "Building Renovation and Remodelling",
  "New Building Construction", "Property Maintenance", "Real Estate Marketing and Presentation", OTHER,
];

const LOCATIONS = [
  "Lagos State", "Ogun State", "Abuja/FCT", "Other states in Nigeria", "Remote/Online Services Only",
  "Willing to Travel for Suitable Projects",
];

const YES_NO = ["Yes", "No"];

// ---------------- STAGE 1 ----------------
export const STAGE1_QUESTIONS: Question[] = [
  { id: "q1", section: "Personal information", label: " Full name", type: "text", required: true },
  { id: "q2", section: "Personal information", label: " Phone number", type: "tel", required: true },
  { id: "q3", section: "Personal information", label: " WhatsApp number", type: "tel" },
  { id: "q4", section: "Personal information", label: " Email address", type: "email", required: true },
  { id: "q5", section: "Personal information", label: " Residential address", type: "text", required: true },
  { id: "q6", section: "Personal information", label: " City/town of residence", type: "text", required: true },
  { id: "q7", section: "Personal information", label: " State of residence", type: "text", required: true },
  { id: "q8", section: "Personal information", label: " Gender (optional)", type: "radio", options: ["Male", "Female", "Prefer not to say"] },
  { id: "q9", section: "Personal information", label: " Preferred method of contact", type: "checkbox", options: ["Phone Call", "WhatsApp", "Email"] },

  { id: "q10", section: "Professional information", label: " What is your primary profession or area of specialization?", type: "select", options: PROFESSIONS, required: true, help: "Select the most appropriate option." },
  { id: "q11", section: "Professional information", label: " Do you have any professional certifications, licences or trade qualifications relevant to your profession?", type: "radio", options: ["Yes", "No", "Currently in Training"], required: true },
  { id: "q12", section: "Professional information", label: " Please state your qualifications, certifications or licences.", type: "textarea", showIf: { id: "q11", in: ["Yes", "Currently in Training"] } },
  { id: "q14", section: "Professional information", label: " How many years of relevant professional or practical experience do you have?", type: "radio", options: ["Less than 1 year", "1–2 years", "3–5 years", "6–10 years", "More than 10 years"], required: true },
  { id: "q15", section: "Professional information", label: " Are you registered with a relevant professional body or regulatory authority, where applicable?", type: "radio", options: ["Yes", "No", "Not Applicable"], required: true },
  { id: "q16", section: "Professional information", label: " Please state the name of the professional body or regulatory authority and your registration status.", type: "textarea", showIf: { id: "q15", in: ["Yes"] } },

  { id: "q17", section: "Services and expertise", label: " What services can you provide to Adedara Ola & Co. and its clients?", type: "checkbox", options: SERVICES, required: true, help: "Select all that apply." },
  { id: "q18", section: "Services and expertise", label: " Briefly describe your core expertise and the specific services you can deliver.", type: "textarea", required: true },

  { id: "q25", section: "Portfolio", label: " Please provide a link to your portfolio or samples of previous work, where applicable.", type: "url", help: "For example drawings, designs, construction photographs, project videos or 3D renders. Start the link with https://" },

  { id: "q30", section: "Availability", label: " Are you available to take on additional projects when opportunities arise?", type: "radio", options: ["Yes, immediately", "Yes, with advance notice", "Depending on my existing workload", "Not currently available"], required: true },
  { id: "q32", section: "Availability", label: " In which locations are you available to work?", type: "checkbox", options: LOCATIONS, required: true, help: "Select all that apply." },
  { id: "q33", section: "Availability", label: " If applicable, specify the locations where you can readily execute projects.", type: "textarea" },
];

// ---------------- STAGE 2 ----------------
export const STAGE2_QUESTIONS: Question[] = [
  { id: "q13", section: "Qualifications", label: " What is your highest relevant educational or professional qualification?", type: "radio", required: true, options: ["Primary Education", "Secondary Education", "Technical/Vocational Training", "Trade Certification", "OND/NCE", "HND/Bachelor’s Degree", "Postgraduate Qualification", "Professional Certification", "Other"] },

  { id: "q19", section: "Services and project types", label: " Are there any additional services you can provide beyond your primary profession?", type: "radio", options: YES_NO },
  { id: "q20", section: "Services and project types", label: " Please specify the additional services.", type: "textarea", showIf: { id: "q19", in: ["Yes"] } },
  { id: "q21", section: "Services and project types", label: " Which types of projects are you equipped to handle?", type: "checkbox", options: PROJECT_TYPES, help: "Select all that apply." },

  { id: "q22", section: "Experience and portfolio", label: " Briefly describe your relevant work experience.", type: "textarea", required: true },
  { id: "q23", section: "Experience and portfolio", label: " Have you worked on completed real estate, construction, design or property-related projects before?", type: "radio", options: YES_NO, required: true },
  { id: "q24", section: "Experience and portfolio", label: " Briefly describe some of the projects you have worked on, including your responsibilities.", type: "textarea", showIf: { id: "q23", in: ["Yes"] } },
  { id: "q27", section: "Experience and portfolio", label: " Can you provide references from previous clients, employers or project partners if requested?", type: "radio", options: YES_NO, required: true },
  { id: "q28", section: "Experience and portfolio", label: " Name and contact details of a professional reference", type: "textarea", showIf: { id: "q27", in: ["Yes"] }, help: "Please make sure your referee is happy for you to share their details." },

  { id: "q29", section: "Availability and capacity", label: " What is your current professional arrangement?", type: "radio", required: true, options: ["Self-Employed/Freelancer", "Business Owner", "Employed but Available for External Projects", "Independent Skilled Worker", "Part of a Professional Firm or Team", OTHER] },
  { id: "q31", section: "Availability and capacity", label: " What is your preferred working arrangement?", type: "radio", required: true, options: ["Project-Based Engagement", "Short-Term Contract", "Long-Term Project Engagement", "Consultancy", "Supply of Materials or Equipment", "A combination of the above"] },
  { id: "q34", section: "Availability and capacity", label: " Do you have access to the tools, equipment, software or workforce required for your services?", type: "radio", required: true, options: ["Yes, I have the necessary resources.", "Partially; I may require additional resources.", "No; resources would need to be provided or arranged."] },
  { id: "q35", section: "Availability and capacity", label: " If you operate as a business or professional team, how many people can you deploy to a project when required?", type: "text" },
  { id: "q36", section: "Availability and capacity", label: " What is your estimated response time when contacted about a potential project?", type: "radio", required: true, options: ["Within a Few Hours", "Within 24 Hours", "Within 2–3 Days", "Depending on the Nature of the Project"] },

  { id: "q37", section: "Pricing and commercial arrangements", label: " How do you normally charge for your services?", type: "radio", required: true, options: ["Per Project", "Per Day", "Per Hour", "Per Square Metre or Other Unit", "Percentage of Project Cost", "Based on an Agreed Contract", "Depends on the Nature of the Project"] },
  { id: "q38", section: "Pricing and commercial arrangements", label: " What is your typical fee range for your services?", type: "textarea", required: true, help: "Please state your usual rates and the relevant unit of measurement, where applicable." },
  { id: "q39", section: "Pricing and commercial arrangements", label: " Are your rates negotiable depending on the project scope, budget and duration?", type: "radio", required: true, options: ["Yes", "No", "Subject to Discussion"] },
  { id: "q40", section: "Pricing and commercial arrangements", label: " Are you willing to provide a quotation or cost estimate when invited to participate in a project?", type: "radio", required: true, options: YES_NO },
  { id: "q41", section: "Pricing and commercial arrangements", label: " Are you willing to work under a written agreement defining the project scope, responsibilities, payment terms and delivery expectations?", type: "radio", required: true, options: ["Yes", "No", "Subject to Review"] },
  { id: "q42", section: "Pricing and commercial arrangements", label: " Please state any specific commercial requirements or conditions we should know about.", type: "textarea" },

  { id: "q43", section: "Professional standards and reliability", label: " Are you willing to comply with agreed project specifications, timelines, quality standards and safety requirements?", type: "radio", required: true, options: YES_NO },
  { id: "q44", section: "Professional standards and reliability", label: " Are you willing to provide progress updates and communicate promptly throughout a project?", type: "radio", required: true, options: YES_NO },
  { id: "q45", section: "Professional standards and reliability", label: " Are you willing to protect confidential information relating to the company, its clients and its projects?", type: "radio", required: true, options: YES_NO },
  { id: "q46", section: "Professional standards and reliability", label: " Are you willing to correct verified defects attributable to your work in accordance with the terms agreed for a particular project?", type: "radio", required: true, options: ["Yes", "No", "Subject to the Project Agreement"] },
  { id: "q47", section: "Professional standards and reliability", label: " Have you ever been suspended, disciplined or had a relevant professional licence or registration revoked for professional misconduct?", type: "radio", required: true, options: ["Yes", "No", "Not Applicable"] },
  { id: "q48", section: "Professional standards and reliability", label: " Please provide a brief explanation.", type: "textarea", showIf: { id: "q47", in: ["Yes"] } },
  { id: "q49", section: "Professional standards and reliability", label: " Is there any additional information that may help us assess your suitability as an associate?", type: "textarea" },
];