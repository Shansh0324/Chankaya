export interface PopupContent {
  title: string;
  titleAccent?: string;
  description: string[];
  impactTitle?: string;
  impactItems?: string[];
}

export const bentoPopupData: Record<string, PopupContent> = {
  "true-beauty": {
    title: "True",
    titleAccent: "Beauty",
    description: [
      "We believe that true beauty lies in solving real-world problems through <span class='text-[#ff9800] font-semibold'>modernized solutions</span> that make life easier and more meaningful.",
      "Our platform connects people with innovative technologies, creating seamless experiences that bridge the gap between complex problems and <span class='text-[#ff9800] font-semibold'>elegant solutions</span>.",
      "From intuitive user interfaces to powerful backend systems, we craft digital experiences that not only function flawlessly but also inspire and delight users at every touchpoint."
    ],
    impactTitle: "Our Impact",
    impactItems: [
      "Streamlined workflows that save valuable time",
      "Intuitive designs that reduce learning curves", 
      "Accessible solutions for everyone",
      "Sustainable technology for the future"
    ]
  },
  "real-view": {
    title: "Real",
    titleAccent: "View",
    description: [
      "Experience the world through a <span class='text-[#ff9800] font-semibold'>crystal-clear lens</span> that reveals hidden possibilities and untapped potential in every challenge.",
      "Our real-view approach strips away complexity to show you what truly matters, enabling faster decision-making and better outcomes.",
      "We provide transparent insights that help you see beyond the surface, understanding the <span class='text-[#ff9800] font-semibold'>real impact</span> of every choice you make."
    ],
    impactTitle: "Clear Benefits",
    impactItems: [
      "Data-driven insights for informed decisions",
      "Transparent processes with no hidden complexities",
      "Real-time feedback and measurable results",
      "Authentic user experiences that build trust"
    ]
  },
  "warmth": {
    title: "W",
    titleAccent: "a",
    description: [
      "Technology doesn't have to be cold and impersonal. We infuse <span class='text-[#ff9800] font-semibold'>human warmth</span> into every digital interaction, creating connections that feel natural and meaningful.",
      "Our approach prioritizes empathy and understanding, ensuring that behind every pixel and line of code is a genuine desire to improve people's lives.",
      "We build solutions that not only work efficiently but also make users feel <span class='text-[#ff9800] font-semibold'>valued and understood</span> throughout their journey."
    ],
    impactTitle: "Human Touch",
    impactItems: [
      "Personalized experiences that adapt to individual needs",
      "Compassionate support systems and assistance",
      "Community-driven features that foster connection",
      "Inclusive design that welcomes everyone"
    ]
  },
  "loved-moments": {
    title: "Loved",
    titleAccent: "Moments",
    description: [
      "Every interaction should be a moment worth remembering. We create <span class='text-[#ff9800] font-semibold'>memorable experiences</span> that users cherish and want to share with others.",
      "Our design philosophy centers around crafting delightful surprises and meaningful touchpoints that transform routine tasks into moments of joy.",
      "From micro-interactions to major milestones, we ensure every step of the user journey creates positive, <span class='text-[#ff9800] font-semibold'>lasting impressions</span>."
    ],
    impactTitle: "Memorable Impact",
    impactItems: [
      "Delightful animations and smooth interactions",
      "Celebration of user achievements and milestones",
      "Surprise features that exceed expectations",
      "Shareable moments that create viral enthusiasm"
    ]
  }
};