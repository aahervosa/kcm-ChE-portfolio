const container = document.getElementById('container');
const screenW = window.innerWidth;
const screenH = window.innerHeight;
const centerX = screenW / 2;
const centerY = screenH / 2;
const margin = 20;
const maxDist = 500;
let currentCenteredBubble = null;


const data = [
      { label: "<span style = 'font-size:15px' > Kerk Christian P. Magculang: </span> <br> A Chemical Engineer in the Making", 
        value: 200, 
        subtitle: "My UPD BS ChE Portfolio", image: "./src/center.png" },
      {
        label: "GAMA: A Proposal for a New Source of Crude Oil for Malampaya Project",
        value: 80,
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
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "", color: "transparent" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      {
        label: "Pumapalakpak Kelpy Co.: A Design Project for the Biodiesel Production on the Transesterification of Seaweed (Padina boryana)",
        value: 100,
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
        value: 90,
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
        value: 75,
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
      value: 90,
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
        value: 100,
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
        value: 75,
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
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
         { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "An HSE Report of Urea Fertilizer Production Plant in Limay, Bataan",
        value: 70,
        subtitle: "Introduction to Health, Safety and Environment",
        desc: "This report focused on identifying and assessing health, safety, and environmental risks associated with a urea fertilizer production plant in Limay, Bataan. We conducted a thorough hazard analysis of raw materials, unit operations, and emissions, and proposed strategies for pollution control and sustainable waste management. The project strengthened my ability to integrate HSE considerations into process design and evaluation, ensuring safety and compliance across operations. This experience reinforced my commitment to responsible engineering practice—balancing efficiency with environmental stewardship and public health protection.",
        img: "./src/151.png",
        mentor:"Mentor: Dr. Carmelita J. Villanueva, Engr. Kristian July R. Yap",
        link: "https://drive.google.com/drive/folders/1ogbxHub_pQl5iLOefj59I-vRuU_GZ50q?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "", color: "transparent" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
           { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Optimization of SnCl2-HCl-catalyzed Levulinic Acid Production from Extracted Cellulose of Onion (Allium cepa) Skin",
        value: 90,
        subtitle: "Chemical Engineering Research/Thesis",
        desc: "This research aimed to optimize the production of levulinic acid—a valuable bio-based chemical—via acid-catalyzed hydrolysis of cellulose extracted from onion skins using a SnCl₂-HCl catalyst system. Conducted over two semesters, the work involved extensive laboratory experimentation, including cellulose extraction, batch reaction runs, and product analysis through UV-Vis spectrophotometry. Beyond developing technical and analytical skills, the project emphasized sustainability through the valorization of food waste, and reinforced the importance of laboratory ethics and rigorous research documentation. This experience sharpened my ability to design experiments, analyze data, and pursue green chemical solutions—preparing me for further work in research, bio-based processes, or sustainable product development.",
        img: "./src/Thesis.png",
        mentor:"Mentor: Dr. Rizalinda L. De Leon, Engr. Kristian July R. Yap",
        link: "https://drive.google.com/drive/folders/1EeLCRSvIVMuA3OKGfCqupvUEjxPorDDx?usp=share_link",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "", color: "transparent" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Sustainable Urea Fertilizer Production from Wastewater-Derived Ammonia and CO2 Captured from Flue Gas via Stamicarbon Technology: A Plant Design",
        value: 140,
        subtitle: "Chemical Engineering Plant Design",
        desc: "This plant design project served as the culmination of our chemical engineering education, integrating knowledge from technical, economic, and environmental domains. We proposed a sustainable urea production facility that utilizes ammonia recovered from wastewater and CO₂ captured from flue gas, implemented via Stamicarbon technology. Our group conducted a full market analysis, developed a sustainable process flow, designed unit operations and equipment, and assessed the plant’s profitability, HSE compliance, and site viability. This project demanded a deep synthesis of all major chemical engineering competencies—from thermodynamics to safety systems—and challenged us to balance innovation with real-world feasibility. It reinforced my preparedness to contribute to the engineering profession with a mindset rooted in sustainability, collaboration, and system-wide thinking.",
        img: "./src/PD.png",
        mentor:"Mentor: Engr. Marlon B. De Vera, Engr. Jan Goran T. Tomacruz, Engr. Francis N. Tanala",
        link: "https://drive.google.com/drive/folders/1gfhVIe501ImGoCbWn2WnvaUvXxI_r0JZ?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Project Audit: The Philippine Arena",
        value: 60,
        subtitle: "Project Management for Chemical Engineers",
        desc: "This project involved a detailed audit of the Philippine Arena through the lens of project management principles. We analyzed the project’s lifecycle, identified key stakeholders, and reviewed major issues encountered during planning and execution. Our group proposed solutions aligned with recognized project management frameworks, emphasizing risk mitigation, communication, and stakeholder alignment. This experience helped me understand how large-scale engineering projects are managed beyond the technical scope, highlighting the importance of organization, coordination, and strategic decision-making—skills that are essential for leadership roles in engineering practice.",
        img: "./src/198.png",
        mentor:"Mentor: Engr. Ma. Patricia Dolores D. Malicse",
        link: "https://drive.google.com/drive/folders/12K-ZH9on3QoYWMUZAe49ICVjbyOX2W56?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
        },
      { label: "Process Engineering Laboratory",
        value: 75,
        subtitle: "Projects: Size Does Matter! A Particle Size and Energy Consumption Analysis on Alum Rock Size Reduction <br> Beading the Allegations: An Analysis on the Behavior of Glass Beads in Fluidization <br> Night-Meyer Before Christmas: Determination of the Molecular Weight of Hexane via The Victor-Meyer Method, Ang Hot Niya!: An Analysis on the Effects of Aperture Gap and Distance on Incident Radiation, Please Flash After Use: Flash and Fire Point Determination of Ethanol-Water Mixtures, I Don’t Feel Any Pressure Right Now: An Analysis on Centrifugal Pumps",
        desc: "This course involved conducting and analyzing six distinct laboratory experiments, each targeting a key chemical engineering principle and reinforcing a unique technical concept. Writing formal lab reports for each developed my ability to interpret experimental data, identify sources of error, and present findings in a clear and structured manner. This experience strengthened both my practical and analytical skill sets, reinforcing my competence in hands-on experimentation and scientific communication.",
        img: "./src/130.png",
        mentor:"Mentor: Dr. Isaac Jerome C. Dela Cruz, Dr. Jay R T. Adolacion",
        link: "https://drive.google.com/drive/folders/1u-I6esQzl7ST87taONPd9GH5iGkeGW2-?usp=sharing",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Special Projects Laboratory",
       value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "", color: "transparent" },
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
      { label: "SpeChEl Delivery: Chemical Engineering Freshie Assistance 2020",
        value: 80,
        subtitle: "Overall Head",
        desc: "As my first major headship in college, I led SpeChEl Delivery: ChEFAsT 2020—a pioneering initiative to assist over 120 Chemical Engineering freshies, shiftees, and transferees in their transition to UP Diliman during the shift to remote learning. Amid the challenges of the pandemic, our team organized engaging online activities, provided academic and emotional support, and helped new students adjust to the university’s learning environment. This experience developed my leadership, communication, and empathy, and taught me how to manage a large-scale student support system under uncertain and evolving conditions—skills that are just as critical in engineering teams and workplace settings.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "National Chemical Engineering Symposium",
        value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Red Cross Volunteerism",
       value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Laboratory of Electrochemical Engineering Apprenticeship",
       value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Career Assistance Program for Engineering Students",
       value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Indakan Dance Competitions",
       value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
          { label: "Communication", color: "#F9D5E5"},
          { label: "Project Management", color: "#D9E5C3" },
          { label: "Lifelong Learning", color: "#D3EAF2" },
        ]
      },
      { label: "Engineering Week Shenanigans",
       value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#A7C7E7" },
          { label: "Problem Analysis", color: "#D6CDEA" },
          { label: "Design & Development of Solutions", color: "#BEE3BE" },
          { label: "Digital Tools Usage", color: "#FFD8B1" },
          { label: "Investigation", color: "#C7CEDB" },
          { label: "Individual and Collaborative Work", color: "#B3DDD1" },
          { label: "The Engineering and the world", color: "#F8D8C7" },
          { label: "Ethics", color: "#FFF4B1" },
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

