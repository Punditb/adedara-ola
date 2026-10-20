export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  place: string;
};

// To add a testimonial, copy one block below and change the text. Only add real, approved testimonials.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Adedara Ola & Co. almost literally walked me through the educational path of land titles obtainment, which has now made me to see how simple and important every stage of the process is, without any form of obscurantism. I therefore strongly recommend them for any person or land owner wanting the best handler for this important part of real estates.",
    name: "Pharm. (Mrs.) Inegbu Uloma",
    role: "CEO, Chijons Pharmacy & Stores",
    place: "Surulere, Lagos",
  },
  {
    quote:
      "Our experience with Adedara Ola & Co. Limited has been excellent. They handled our engagements with great expertise, timeliness, and attention to detail. Their professional approach and clear communication made the processes seamless.",
    name: "Mr. Joseph N.M.",
    place: "Surulere, Lagos",
  },
  {
    quote:
      "When it seems as if our church project will almost not be approved after four (4) solid years of chase, our dream finally came through when we got handed our full approval with some huge penalties waivers from LASPPPA HQ. Thanks to Adedara Ola & Co. Limited for their swift and smart timely intervention for this long-sought realization.",
    name: "Pastor Anthony Ezeamii",
    role: "Regional Pastor, Deeper Life Bible Church",
    place: "Aguda, Surulere, Lagos",
  },
];