const container = document.getElementById('container');
const screenW = window.innerWidth;
const screenH = window.innerHeight;
const centerX = screenW / 2;
const centerY = screenH / 2;
const margin = 20;
const maxDist = 800;
let currentCenteredBubble = null;


const data = [
      { label: "<span style = 'font-size:15px' > Kerk Christian P. Magculang: </span> <br> A Chemical Engineer in the Making", 
        value: 190, 
        subtitle: "My UPD BS ChE Portfolio", image: "./src/Center.png" },
      {
        label: "GAMA: A Proposal for a New Source of Crude Oil for Malampaya Project",
        value: 90,
        subtitle: "Process Fluid Systems",
        desc: "In this project, we applied principles of fluid transport and momentum balance to design a high-pressure pipeline system for crude oil delivery, proposing a new source for the Malampaya Project. We analyzed pump sizing, pipe specifications, and safety mechanisms to ensure efficiency and reliability. This experience deepened my technical skills in fluid system design and introduced me to industry-relevant decision-making in energy transport. Presenting at the DP Fair, I also gained confidence in communicating engineering solutions to both experts and non-engineers. These skills—technical design, system analysis, and clear communication—will be essential as I pursue a career in energy systems and industrial operations.",
        img: "./src/130.png", // your image URL,
        mentor:"Mentor: Engr. Michael T. Castro",
        link: "https://drive.google.com/drive/folders/15qcgQj-viNKoXd-_C9OlEomnuENR1a8v?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "", color: "transparent" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the World", color: "#F8D8C7" },
          { label: "", color: "transparent" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      {
        label: "Pumapalakpak Kelpy Co.: A Design Project for the Biodiesel Production on the Transesterification of Seaweed (Padina boryana)",
        value: 120,
        subtitle: "Chemical Reaction Engineering",
        desc: "This project involved designing a chemical reactor system for producing biodiesel through the transesterification of Padina boryana seaweed, applying concepts from reaction kinetics, thermodynamics, and mass transport. Despite the difficulty of the course, I developed a deeper understanding of both homogeneous and heterogeneous reaction mechanisms and their influence on reactor performance. The challenge of selecting the appropriate reactor type and optimizing conditions taught me how to critically evaluate data, model reactions, and design for real-world constraints like conversion efficiency and sustainability. This experience strengthened my foundation in reaction engineering—critical for future work in biofuels, green chemistry, or process design.",
        img: "./src/128.png",
        mentor:"Mentor: Engr. Paul Gabriel Lerona",
        link: "https://drive.google.com/drive/folders/1NpE3v7PBVgfse2hnEFy9VZ34wTbkC13-?usp=share_link",
        children: [
         { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },,
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#4d9d8f" },
        ]
      },
      { 
        label: "A Feasibility Study on the Use of Elutriation and Chemical Coagulants To Recover Heavy Metals From Wastewater", 
        value: 105,
        subtitle: "Particle Technology",
        desc: "In this project, we explored particle separation methods—specifically elutriation and chemical coagulation—for recovering heavy metals from wastewater. The course provided a strong foundation in concepts like particle porosity, settling velocity, and fluid-particle interactions, which were crucial in designing our system. While handling and optimizing the coagulants posed challenges, the experience helped me build practical problem-solving skills and appreciate the role of solid-liquid separation in environmental engineering. This project reinforced the importance of sustainable water treatment solutions and enhanced my ability to apply theory to real-world environmental applications.",
        img: "./src/134.png",
        mentor:"Mentor: Dr. Donato Dela Cruz",
        link: "https://drive.google.com/drive/folders/1WWtBERb6fhvg87aOv8jnR6DKssWcYynP?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      {
        label: "Rice (Oryza sativa) bran oil extraction from rice bran pellets using ethanol via leaching and distillation",
        value: 90,
        subtitle: "Separation Processes",
        desc: "This project involved designing a system to extract rice bran oil using ethanol through leaching and subsequent recovery via distillation. The course deepened my understanding of separation principles, particularly liquid-liquid and gas-liquid extraction systems. Applying these concepts, we evaluated solvent efficiency, mass transfer, and component recovery to optimize the process. The hands-on nature of the project gave me practical insight into the challenges of scaling separation operations while ensuring product quality and sustainability. This strengthened my foundation in separation design, preparing me for future roles in food, pharmaceutical, or bioresource industries.",
        img: "./src/132.png",
        mentor:"Mentor: Dr. Ramuel John I. Tamargo",
        link: "https://drive.google.com/drive/folders/1OnyHkwGIXhi9yyhA2rfoUUh1PhGe8ZhV?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Design Comparisons of Continuous Dryers (Belt and Rotary Direct Heat) for Carabao Mangoes",
        value: 100,
        subtitle: "Separation Processes",
        desc: "This project involved designing and comparing belt and rotary direct heat dryers for processing Carabao mangoes, focusing on drying time, energy consumption, and operational costs. Applying principles from psychrometry and mass transfer, we analyzed the drying behavior of high-moisture fruits and evaluated each system’s efficiency and suitability for industrial-scale applications. The project enhanced my technical understanding of drying technologies and process optimization, especially in handling food products with variable moisture content and physical properties. This experience helped me appreciate the intersection of food engineering and sustainability, particularly in energy-efficient process design.",
        img: "./src/133.png",
        mentor:"Mentor: Dr. Donato Dela Cruz",
        link: "https://drive.google.com/drive/folders/1zowsKGICYh5J0PfXWs6UzLC0UB2mgY0u?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Feasibility and Sensitivity Analysis Report on the Construction of an Ammonia Production Plant in Lucena, Quezon", 
      value: 105,
        subtitle: "Chemical Plant and Process Economics",
        desc: "This project focused on evaluating the technical and economic feasibility of constructing an ammonia production plant in Lucena, Quezon, using crude glycerol as a hydrogen source via the Haber-Bosch process. Beyond process understanding, the study involved preparing cash flow projections, conducting profitability assessments, and calculating economic indicators such as IRR and payback period. The work deepened my knowledge of how engineering design aligns with financial viability, equipping me with practical tools in techno-economic analysis. This experience prepared me to evaluate investment decisions in chemical industries and link engineering processes with sustainable business models.",
        img: "./src/145.png",
        mentor:"Mentors: Dr. Carmelita J. Villanueva, Dr. Rizalinda de Leon, Dr. Marjorie L. Baynosa",
        link: "https://drive.google.com/drive/folders/1D6Ci7lq6ODcDVFvk_c9DfTx46PLkvDA4?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "A Case Study on the Downstream Processes of Bioethanol Production from Lignocellulosic Biomass Using Engineered S. cerevisiae Strains",
        value: 115,
        subtitle: "Introduction to Bioprocess Engineering",
        desc: "This case study explored the downstream processing of bioethanol derived from lignocellulosic biomass, focusing on the use of engineered Saccharomyces cerevisiae strains. By analyzing separation techniques, fermentation conditions, and strain-specific performance, we assessed the impact of microbial pathways—sugar-dependent and XR/XDH pathway-dependent—on process efficiency. The project emphasized ethanol yield, byproduct management, and the reduction of unit operations in optimizing production. Alongside solving growth kinetics using Monod equations, this study enhanced my understanding of how biological systems intersect with chemical engineering principles. It strengthened my ability to critically analyze bioprocess systems, an essential skill for future work in sustainable biofuel and biochemical industries.",
        img: "./src/170.png",
        mentor:"Mentor: Dr. Charlimagne M. Montealegre",
        link: "https://drive.google.com/drive/folders/1HV5pd2CYPEQFIqC7gGq_y9ZXlH29uRAK?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "An Industry Analysis of the Meat Processing Sector: A Case Study on Pampanga’s Best, Inc.", 
        value: 95,
        subtitle: "Chemical Process Industries",
        desc: "This case study provided an in-depth look into the Philippine meat processing industry, using Pampanga’s Best, Inc. as a lens to understand how traditional food manufacturing integrates modern technology and sustainability. We analyzed regulatory compliance, quality control systems, operational workflow, and consumer-driven innovation. The experience highlighted how chemical engineering principles apply not only in plant design but also in assessing process efficiency, food safety, and industrial adaptability. It developed my ability to evaluate real-world industrial systems, preparing me to address complex challenges in manufacturing, food processing, and sustainable production.",
        img: "./src/191.png",
        mentor:"Mentor: Engr. Nathaniel M. Saporsantos",
        link: "https://drive.google.com/drive/folders/1im1r3BIVE2aOXfeVffmBLzzMBXw17Z2I?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
           { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the World", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
         { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "An HSE Report of Urea Fertilizer Production Plant in Limay, Bataan",
        value: 85,
        subtitle: "Introduction to Health, Safety and Environment",
        desc: "This report focused on identifying and assessing health, safety, and environmental risks associated with a urea fertilizer production plant in Limay, Bataan. We conducted a thorough hazard analysis of raw materials, unit operations, and emissions, and proposed strategies for pollution control and sustainable waste management. The project strengthened my ability to integrate HSE considerations into process design and evaluation, ensuring safety and compliance across operations. This experience reinforced my commitment to responsible engineering practice—balancing efficiency with environmental stewardship and public health protection.",
        img: "./src/151.png",
        mentor:"Mentors: Dr. Carmelita J. Villanueva, Engr. Kristian July R. Yap",
        link: "https://drive.google.com/drive/folders/1ogbxHub_pQl5iLOefj59I-vRuU_GZ50q?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "", color: "transparent" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
           { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the World", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Optimization of SnCl2-HCl-catalyzed Levulinic Acid Production from Extracted Cellulose of Onion (Allium cepa) Skin",
        value: 115,
        subtitle: "Chemical Engineering Research/Thesis",
        desc: "This research aimed to optimize the production of levulinic acid—a valuable bio-based chemical—via acid-catalyzed hydrolysis of cellulose extracted from onion skins using a SnCl₂-HCl catalyst system. Conducted over two semesters, the work involved extensive laboratory experimentation, including cellulose extraction, batch reaction runs, and product analysis through UV-Vis spectrophotometry. Beyond developing technical and analytical skills, the project emphasized sustainability through the valorization of food waste, and reinforced the importance of laboratory ethics and rigorous research documentation. This experience sharpened my ability to design experiments, analyze data, and pursue green chemical solutions—preparing me for further work in research, bio-based processes, or sustainable product development.",
        img: "./src/Thesis.png",
        mentor:"Mentors: Dr. Rizalinda L. De Leon, Engr. Kristian July R. Yap",
        link: "https://drive.google.com/drive/folders/1EeLCRSvIVMuA3OKGfCqupvUEjxPorDDx?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the World", color: "#F8D8C7" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Sustainable Urea Fertilizer Production from Wastewater-Derived Ammonia and CO2 Captured from Flue Gas via Stamicarbon Technology: A Plant Design",
        value: 125,
        subtitle: "Chemical Engineering Plant Design",
        desc: "This plant design project served as the culmination of our chemical engineering education, integrating knowledge from technical, economic, and environmental domains. We proposed a sustainable urea production facility that utilizes ammonia recovered from wastewater and CO₂ captured from flue gas, implemented via Stamicarbon technology. Our group conducted a full market analysis, developed a sustainable process flow, designed unit operations and equipment, and assessed the plant’s profitability, HSE compliance, and site viability. This project demanded a deep synthesis of all major chemical engineering competencies—from thermodynamics to safety systems—and challenged us to balance innovation with real-world feasibility. It reinforced my preparedness to contribute to the engineering profession with a mindset rooted in sustainability, collaboration, and system-wide thinking.",
        img: "./src/PD.png",
        mentor:"Mentors: Engr. Marlon B. De Vera, Engr. Jan Goran T. Tomacruz, Engr. Francis N. Tanala",
        link: "https://drive.google.com/drive/folders/1gfhVIe501ImGoCbWn2WnvaUvXxI_r0JZ?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the World", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Project Audit: The Philippine Arena",
        value: 55,
        subtitle: "Project Management for Chemical Engineers",
        desc: "This project involved a detailed audit of the Philippine Arena through the lens of project management principles. We analyzed the project’s lifecycle, identified key stakeholders, and reviewed major issues encountered during planning and execution. Our group proposed solutions aligned with recognized project management frameworks, emphasizing risk mitigation, communication, and stakeholder alignment. This experience helped me understand how large-scale engineering projects are managed beyond the technical scope, highlighting the importance of organization, coordination, and strategic decision-making—skills that are essential for leadership roles in engineering practice.",
        img: "./src/198.png",
        mentor:"Mentor: Engr. Ma. Patricia Dolores D. Malicse",
        link: "https://drive.google.com/drive/folders/12K-ZH9on3QoYWMUZAe49ICVjbyOX2W56?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the World", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "", color: "transparent" },
        ]
        },
      { label: "Process Engineering Laboratory",
        value: 55,
        subtitle: "Projects: <br> Size Does Matter! A Particle Size and Energy Consumption Analysis on Alum Rock Size Reduction <br> Beading the Allegations: An Analysis on the Behavior of Glass Beads in Fluidization <br> Night-Meyer Before Christmas: Determination of the Mol. Wt. of Hexane via The Victor-Meyer Method <br> Ang Hot Niya!: An Analysis on the Effects of Aperture Gap and Distance on Incident Radiation <br> Please Flash After Use: Flash and Fire Point Determination of Ethanol-Water Mixtures <br> I Don’t Feel Any Pressure Right Now: An Analysis on Centrifugal Pumps",
        desc: "This course involved conducting and analyzing six distinct laboratory experiments, each targeting a key chemical engineering principle and reinforcing a unique technical concept. Writing formal lab reports for each developed my ability to interpret experimental data, identify sources of error, and present findings in a clear and structured manner. This experience strengthened both my practical and analytical skill sets, reinforcing my competence in hands-on experimentation and scientific communication.",
        img: "./src/135.png",
        mentor:"Mentors: Dr. Isaac Jerome C. Dela Cruz, Dr. Jay R T. Adolacion",
        link: "https://drive.google.com/drive/folders/1u-I6esQzl7ST87taONPd9GH5iGkeGW2-?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the World", color: "#F8D8C7" },
          { label: "", color: "transparent" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
        ]
      },
      { label: "Special Projects Laboratory",
       value: 55,
        subtitle: "Projects: <br> A Chemical Engineering Perspective on the Energy Storage Mechanisms of an 18650 Lithium-Ion Battery <br> Determination of Residence Time Distribution in a Plug Flow Reactor using Conductivity Measurements <br> Water diffusion modelling in a porous polymer matrix <br> Optimization of Sedimentation Efficiency in Soil-Laden Water Using Alum and Baking Soda as Coagulants",
        desc: "This course provided a unique opportunity to rotate among four different chemical engineering laboratories, where we conducted a series of experiments that ranged from modeling water diffusion in polymer matrices and analyzing residence time distribution in plug flow reactors, to optimizing sedimentation with eco-friendly coagulants. A highlight of this course was our independently designed experiment on the energy storage mechanisms of 18650 lithium-ion batteries, developed under the Laboratory of Electrochemical Engineering. Working closely with fellow students and professors, I honed my experimental design, data analysis, and interdisciplinary collaboration skills while learning to adapt to varying research environments and objectives. This experience deepened my curiosity and strengthened my confidence in applying chemical engineering principles to novel, real-world systems.",
        img: "./src/136.png",
        mentor:"Mentors: Dr. Joey D. Ocon, Engr. Mecaelah S. Palaganas",
        link: "https://drive.google.com/drive/folders/1dqBjE6WDBtazL1rrsYTHAO1rN5Yi3AM4?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "", color: "transparent" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
        ]
      },
      { label: "SpeChEl Delivery: Chemical Engineering Freshie Assistance 2020",
        value: 80,
        subtitle: "Overall Head",
        desc: "As my first major headship in college, I led SpeChEl Delivery: ChEFAsT 2020—a pioneering initiative to assist over 120 Chemical Engineering freshies, shiftees, and transferees in their transition to UP Diliman during the shift to remote learning. Amid the challenges of the pandemic, our team organized engaging online activities, provided academic and emotional support, and helped new students adjust to the university’s learning environment. This experience developed my leadership, communication, and empathy, and taught me how to manage a large-scale student support system under uncertain and evolving conditions—skills that are just as critical in engineering teams and workplace settings.",
        img: "./src/spechel.png",
        mentor:"",
        link: "https://drive.google.com/drive/folders/1iesTkeOM6IPxCz0QiQu_wwUW525HLv2a?usp=sharing",
        children: [
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Students' National Chemical Engineering Conference 2020",
        value: 75,
        subtitle: "Participants and Communications Head",
        desc: "As the PartiComm Head of the first fully online iteration of the Students' National Chemical Engineering Conference (SNCEC), I managed communication efforts for over 300 participants from chemical engineering programs across the Philippines. Despite the first ever shift to virtual platforms, our team successfully coordinated two major sub-events (National Chemical Engineering Symposium and Students Chemical Engineering Networking Event) by adapting communication strategies, streamlining processes, and ensuring participant engagement. This role honed my leadership and project coordination skills, particularly in managing stakeholders and navigating unexpected challenges—valuable traits for collaborative engineering environments.",
        img: "./src/sncec.png",
        mentor:"",
        link: "https://drive.google.com/drive/folders/1DtHbfLkc1WkpYh1XtnkmXeZLzJfiA-dz?usp=sharing",
        children: [
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "National Chemical Engineering Symposium 2023",
        value: 68,
        subtitle: "Event Head",
        desc: "I led the successful planning and execution of a nationwide event centered on renewable energy, which brought together over 100 Chemical Engineering students from across the Philippines. I curated the theme myself to promote sustainability, a value I deeply uphold, and invited four expert speakers from top academic and industry institutions. I also managed logistics, program development, promotions, and partnerships with organizations and universities to ensure strong participation. This project deepened my leadership, communication, and event management skills while allowing me to advocate for renewable energy as a vital direction for the chemical engineering profession.",
        img: "./src/naches.png",
        mentor:"Mentors: Engr. Jan Goran T. Tomacruz, Engr. Engr. John Von Wernher Dela Cruz",
        link: "https://drive.google.com/drive/folders/1Sud29lpGQ9ttn29oZV6nH8woGyZexyVT?usp=share_link",
        children: [
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Red Cross Volunteerism",
       value: 55,
        subtitle: "UP Red Cross Youth <br> Roles: <br> Alumni Communications Office Head <br> First Aid Booth Team Leader <br> Beneficiary Fun Run Externals Head <br> Active Volunteer for Various Events",
        desc: "As an active member of UP Red Cross Youth, I took on multiple leadership roles while consistently serving as a volunteer in various university and community events. We provided first aid services during large gatherings like UP Fair and DilGames, and organized impactful initiatives such as medical missions, blood donation drives, and first aid training sessions. A major highlight was leading the externals arm of a charity Fun Run, which successfully raised ₱100,000 for the Hemophilia Advocates of the Philippines. Through this work, I strengthened my skills in emergency response, event coordination, and public health advocacy, while staying grounded in compassion and community service.",
        img: "./src/rcy.png",
        mentor:"Mentor: Dr. Boss Sobremesana",
        link: "https://drive.google.com/drive/folders/1iUBAVjjfS3o1GyapGmN58i6adHfN-ojQ?usp=sharing",
        children: [
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Laboratory of Electrochemical Engineering (LEE) Apprenticeship",
       value: 75,
        subtitle: "Junior Apprentice 2020-2021",
        desc: "During the pandemic, I was shortlisted and selected as a junior apprentice at the UP Diliman Laboratory of Electrochemical Engineering (LEE), where I worked on output-based activities focused on optimizing renewable energy systems. The apprenticeship also gave me the opportunity to collaborate with students from Indonesia and Japan in an international program, where we co-designed a renewable energy plant. This early research experience exposed me to emerging technologies in sustainability and deepened my appreciation for cross-cultural teamwork and global perspectives in engineering. It strengthened my foundations in energy systems and sparked my continued interest in green innovation.",
        img: "./src/lee.png",
        mentor:"Mentor: Dr. Joey D. Ocon, Engr. Michael T. Castro, Engr. Jan Goran T. TOmacruz",
        link: "https://drive.google.com/drive/folders/1bopRO7ZQRyxYlSvINrn0FscEvEn-rO4Q?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "", color: "transparent" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Career Assistance Program for Engineering Students",
       value: 70,
        subtitle: "Sales Associate",
        desc: " I managed partnerships with various engineering student organizations, ensuring they fulfilled their roles and responsibilities in support of our events. I also actively worked to encourage participation from individual students, helping them connect with opportunities for career growth. Beyond this, I served as staff for CAPES Week, Upskill, Job Fair, and Mixer—four major initiatives aimed at empowering engineering students with professional readiness. This role strengthened my communication, stakeholder coordination, and event execution skills, all while deepening my sense of service to the engineering community.",
        img: "./src/capes.png",
        mentor:"",
        link: "https://drive.google.com/drive/folders/1kFmhJlZ9ECkrcGRPwk5QrQoVKWlyhZ9f?usp=sharing",
        children: [
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },,
          { label: "", color: "transparent" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Indakan Dance Competitions",
        value: 60,
        subtitle: "Competitions: <br> Ever After 2020: 1st Runner Up <br> Women of Pop 2023: 5th Place <br> Paint the Stage: 1st Runner Up <br> All Kill 2025: 6th Place",
        desc: "For four consecutive years, I represented my organization in the Indakan dance competition during Engineering Week, serving as a head in my first year and a supportive guide in the years that followed. Balancing intense practice sessions with academic demands challenged me to sharpen my time management, discipline, and resilience. Beyond performance, the experience taught me how to lead and uplift a team, navigate pressure, and contribute to a collective creative goal—skills that translate directly to collaboration and leadership in engineering environments.",
        img: "./src/indakan.png",
        mentor:"",
        link: "https://drive.google.com/drive/folders/11rT5RlhCLQ4JiKc7WO7xRiIVjPyXDUmg?usp=sharing",
        children: [
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "College of Engineering Lantern Parade 2024: Talanghay",
       value: 70,
        subtitle: "Human Resources Head <br> 1st Runner-up",
        desc: "As the HR Head for Talanghay, the College of Engineering’s official lantern entry for the 2025 UP Diliman Lantern Parade, I helped lead one of the most collaborative and high-impact projects of the year. From ideation and materials procurement to construction and lighting mechanisms, our steering committee oversaw every aspect of this large-scale creative build. I managed a volunteer force of over 150 students across three weeks—coordinating shifts, morale, and workflows—culminating in our lantern winning 1st Runner-Up overall. The experience deepened my leadership, logistics, and large-team coordination skills, while also proving that engineering can inspire and unite through creative expression.",
        img: "./src/lp.png",
        mentor:"Dr. Ma. Antonia Tanchuling, Dr. Djoan Kate Tungpalan",
        link: "https://drive.google.com/drive/folders/1BZKxvtsJ0Y4pWPNHSuCd3I5_GPGfAKOr?usp=sharing",
        children: [
          { label: "", color: "transparent" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
    ];

    function getHeatColor(value) {;
      return "#023e8a";
    }

    function isOverlapping(x, y, size, placed) {
      for (const b of placed) {
        const dx = b.x - x;
        const dy = b.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < (b.size / 2 + size / 2 + margin)) return true;
      }
      return false;
    }

const placedBubbles = [];

// Add center bubble
const centerData = data[0];
const centerSize = 250;
const centerBubble = document.createElement("div");
centerBubble.className = "bubble center";
centerBubble.style.width = `${centerSize}px`;
centerBubble.style.height = `${centerSize}px`;
centerBubble.style.left = "50%";
centerBubble.style.top = "50%";
centerBubble.style.transform = "translate(-50%, -50%)";
centerBubble.innerHTML = `
  <img src="${centerData.image}" alt="Profile Image" />
  <div>${centerData.label}</div>
  ${centerData.subtitle ? `<div class="subtitle">${centerData.subtitle}</div>` : ""}
`;
container.appendChild(centerBubble);
placedBubbles.push({ x: centerX, y: centerY, size: centerSize });

console.log(data.length);

for (let i = 1; i < data.length; i++) {
  const { label, value, subtitle, desc, img,mentor, link, children } = data[i];
  const size = 40 + value * 1.2;
  const color = getHeatColor(value);

  let placed = false;
  let attempts = 0;
  let x, y;

  while (!placed && attempts < 300) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * (maxDist - size / 2) + (centerSize / 2 + margin);
    x = centerX + dist * Math.cos(angle);
    y = centerY + dist * Math.sin(angle);

    if (
      x - size / 2 < 0 || x + size / 2 > screenW ||
      y - size / 2 < 0 || y + size / 2 > screenH
    ) {
      attempts++;
      continue;
    }

    if (!isOverlapping(x, y, size, placedBubbles)) {
      placed = true;

      const bubble = document.createElement("div");
      const imageURL = img ? img : "./src/128.png";

      bubble.childrenData = children || [];
      bubble.childBubbles = [];
      bubble.className = "bubble";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x - size / 2}px`;
      bubble.style.top = `${y - size / 2}px`;
      bubble.style.background = color;
      bubble.style.backgroundImage = `url(${imageURL})`;
      bubble.style.backgroundSize = "contain";
      console.log(`${img}`);
      bubble.innerHTML = `
        <div class="overlay"></div>
        <div class="bubble-label">${label}</div>
        <div class="bubble-details" style="display: none;">
          ${subtitle ? `<div class="subtitle">${subtitle}</div>` : ""}
          ${img ? `<img src="${img}" class="bubble-img" />` : ""}
          ${desc ? `<div class="desc">${desc}</div>` : ""}
          ${desc ? `<div class="mentor">${mentor}</div>` : ""}
          ${link ? `<a href="${link}" class="bubble-link" target="_blank">Learn More</a>` : ""}
        </div>
      `;

      container.appendChild(bubble);

      // Draw line from center to bubble
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);

      const line = document.createElement("div");
      line.className = "line";
      line.style.width = `${distance}px`;
      line.style.left = `${centerX}px`;
      line.style.top = `${centerY}px`;
      line.style.transform = `rotate(${angleDeg}deg)`;
      container.appendChild(line);
      bubble.line = line;

      gsap.from(bubble, {
        opacity: 0,
        scale: 0,
        delay: 0.03 * i,
        duration: 0.6,
        ease: "back.out(1.7)"
      });

      gsap.from(line, {
        scaleX: 0,
        transformOrigin: "left center",
        delay: 0.03 * i,
        duration: 0.5,
        ease: "power1.out"
      });

      // Save original position and size
      bubble.originalPosition = {
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size
      };

      let timeoutId;
      const delayedCircle = document.getElementById('delayedCircle');
      const leftCircle = document.getElementById('leftCircle');
      const rightCircle = document.getElementById('rightCircle');
      const lefterCircle = document.getElementById('lefterCircle');
      const leftestCircle = document.getElementById('leftestCircle');
      centerBubble.addEventListener("mouseenter", () => {
        gsap.to(centerBubble, {
          width: 300,
          height: 300,
          padding: 40,
          duration: 0.4,
          ease: "power2.out",
          zIndex: 499
        });

        overlay.style.opacity = 1;
        // overlay.style.backgroundImage = 'url("./src/image 206.png")';


        timeoutId = setTimeout(() => {
          delayedCircle.style.display = "flex";

          gsap.fromTo(delayedCircle, 
            { scale: 0, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)",
              onComplete: () => {
                gsap.fromTo([rightCircle, leftCircle, lefterCircle, leftestCircle],
                   { scale: 0, opacity: 0 }, 
                   { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)"}
                );
              }
             },
          );
        }, 20); // Change to 1000 if you want a 1s delay
      });

      // Don't hide the delayedCircle on centerBubble mouseleave
      centerBubble.addEventListener("mouseleave", () => {
        gsap.to(centerBubble, {
          width: 250,
          height: 250,
          padding: 0,
          duration: 0.4,
          ease: "power2.inOut",
          zIndex: 2
        });

        // overlay.style.opacity = 0;

        clearTimeout(timeoutId);
        // NOTE: Don't hide delayedCircle here
      });

      // ✅ Hide only when leaving the delayedCircle itself
      delayedCircle.addEventListener("mouseleave", () => {
        overlay.style.opacity = 0;

        gsap.to(delayedCircle, {
          opacity: 0,
          scale: 0,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            delayedCircle.style.display = "none";
             gsap.fromTo([rightCircle, leftCircle, lefterCircle, leftestCircle],
                { scale: 1, opacity: 1 }, 
                { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)"}
            );
          }
        });
      });

      bubble.isAnimating = false;

      bubble.addEventListener("mouseenter", () => {
        if (bubble.isAnimating || currentCenteredBubble) return;
        bubble.isAnimating = true;
        currentCenteredBubble = bubble;

        // const bubbleCenterX = screenW / 2 - 150;
        // const bubbleCenterY = screenH / 2 - 150;

        // Hide line when bubble goes to center
        if (bubble.line) bubble.line.style.opacity = 0;

       const vwToPx = (vw) => (window.innerWidth * vw) / 100;

        const targetSize = vwToPx(35); // Convert 35dvw to pixels
        const bubbleCenterX = screenW / 2 - targetSize / 2;
        const bubbleCenterY = screenH / 2 - targetSize / 2;

        gsap.to(bubble, {
          width: targetSize,
          height: targetSize,
          backgroundImage: "none",
          padding: 40,
          left: `${bubbleCenterX}px`,
          top: `${bubbleCenterY}px`,
          duration: 0.4,
          ease: "power2.out",
          zIndex: 499,
          onComplete: () => {
            bubble.isAnimating = false;
          }
        });


        overlay.style.opacity = 1;
        bubble.querySelector('.bubble-details')?.style.setProperty('display', 'flex');
        bubble.querySelector('.bubble-label')?.style.setProperty('max-width', '80%');

        const label = bubble.querySelector('.bubble-label');
        console.log(label);
        if (label) {
          label.classList.add('no-after');
        }


        if (bubble.childrenData.length > 0) {
          const angleStep = (2 * Math.PI) / bubble.childrenData.length;
          const radius =vwToPx(21);

          gsap.delayedCall(0.4, () => {
            const bubbleRect = bubble.getBoundingClientRect();
            const centerX = bubbleRect.left + bubbleRect.width / 2;
            const centerY = bubbleRect.top + bubbleRect.height / 2;

            bubble.childrenData.forEach((child, index) => {
              const angle = angleStep * index;
              const childX = centerX + radius * Math.cos(angle);
              const childY = centerY + radius * Math.sin(angle);

              const childBubble = document.createElement("div");
              childBubble.className = "bubble";
              const childSize = 115;
              childBubble.style.width = `${childSize}px`;
              childBubble.style.height = `${childSize}px`;
              childBubble.style.left = `${childX - childSize / 2}px`;
              childBubble.style.top = `${childY - childSize / 2}px`;
              childBubble.style.background = child.color || "transparent";
              childBubble.style.zIndex = 500;
              childBubble.style.color = '#000';
              childBubble.textContent = child.label;

              container.appendChild(childBubble);
              bubble.childBubbles.push(childBubble);

              gsap.from(childBubble, {
                opacity: 0,
                scale: 0,
                duration: 0.4,
                ease: "back.out(1.7)"
              });

              gsap.to(childBubble, {
                y: "-=5",
                duration: 1.5,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
              });
            });
          });
        }
      });

      bubble.addEventListener("mouseleave", () => {
        if (bubble.isAnimating) return;
        bubble.isAnimating = true;

        const original = bubble.originalPosition;

        gsap.to(bubble, {
          width: original.width,
          height: original.height,
          left: `${original.left}px`,
          top: `${original.top}px`,
          backgroundImage: `url(${imageURL})`,
          duration: 0.4,
          padding:10,
          ease: "power2.inOut",
          zIndex: 2,
          onComplete: () => {
            bubble.isAnimating = false;

            if (currentCenteredBubble === bubble) {
              currentCenteredBubble = null;
              overlay.style.opacity = 0;
            }
            if (bubble.line) bubble.line.style.opacity = 1;
          }
        });

        bubble.querySelector('.bubble-details')?.style.setProperty('display', 'none');
        bubble.querySelector('.bubble-label')?.style.setProperty('max-width', '100%');

        const label = bubble.querySelector('.bubble-label');
        console.log(label);
        if (label) {
          label.classList.remove('no-after');
        }

        bubble.childBubbles.forEach(child => child.remove());
        bubble.childBubbles = [];
      });
      placedBubbles.push({ x, y, size });
    } else {
      attempts++;
    }
  }
}

