    // const container = document.getElementById('container');
    // const screenW = window.innerWidth;
    // const screenH = window.innerHeight;
    // const centerX = screenW / 2;
    // const centerY = screenH / 2;
    // const margin = 20;
    // const maxDist = 300;

    // const data = [
    //   { label: "Kerk Magculang: A Chemical Engineer in the Making", value: 100, subtitle: "My UPD BS ChE Portfolio", image: "YOUR_IMAGE_URL_HERE" },
    //   {
    //     label: "Process Fluid Systems",
    //     value: 80,
    //     subtitle: "Fluid Flow Mastery",
    //     desc: "In-depth study on transport phenomena and pumping systems.",
    //     img: "https://via.placeholder.com/80", // your image URL
    //     link: "https://example.com/fluid-systems"
    //   },
    //   {
    //     label: "Chemical Reaction Engineering",
    //     value: 75,
    //     subtitle: "Kinetics & Reactor Design",
    //     desc: "Explore reaction rates, mechanisms, and reactor models.",
    //     img: "https://via.placeholder.com/80",
    //     link: "https://example.com/chem-reaction",
    //     children: [
    //       { label: "Engineeing Knowledge", color: "#e63946" },
    //       { label: "Problem Analysis", color: "#457b9d" },
    //       { label: "" },
    //       { label: "Digital Tools Usage", color: "#2a9d8f" },
    //       { label: "", },
    //       { label: "Individual and Collaborative Work", color: "#3e9d8f" },
    //       { label: "The Engineering and the world", color: "#4d9d8f" },
    //       { label: "Ethics", color: "#4d9d8f" },
    //       { label: "",},
    //       { label: "", },
    //       { label: "Project Management", color: "#4d9d8f" },
    //       { label: "Lifelong Learning", color: "#4d9d8f" },
    //     ]
    //   },
    //   {
    //     label: "Separation Process",
    //     value: 75,
    //     subtitle: "Kinetics & Reactor Design",
    //     desc: "Explore reaction rates, mechanisms, and reactor models.",
    //     img: "https://via.placeholder.com/80",
    //     link: "https://example.com/chem-reaction",
    //     children: [
    //       { label: "Engineeing Knowledge", color: "#e63946" },
    //       { label: "Problem Analysis", color: "#457b9d" },
    //       { label: "Design & Development of Solutions", color: "#2a9d8f" },
    //       { label: "Digital Tools Usage", color: "#2a9d8f" },
    //       { label: "Investigation", color: "#ea9d8f" },
    //       { label: "Individual and Collaborative Work", color: "#3e9d8f" },
    //       { label: "The Engineering and the world", color: "#4d9d8f" },
    //       { label: "Ethics", color: "#4d9d8f" },
    //       { label: "Individual & Collaborative Work", color: "#4d9d8f" },
    //       { label: "Communication", color: "#4d9d8f" },
    //       { label: "Project Management", color: "#4d9d8f" },
    //       { label: "Lifelong Learning", color: "#4d9d8f" },
    //     ]
    //   },
    //   { label: "Separation Processes", value: 85 },
    //   { label: "Particle Technology", value: 50 },
    //   { label: "Process Engineering Laboratory", value: 60 },
    //   { label: "Chemical Plant and Process Economics", value: 40 },
    //   { label: "Chemical Engineering Research", value: 70 },
    //   { label: "Introduction to Bioprocess Engineering", value: 65 },
    //   { label: "Chemical Process Development and Plant Economics", value: 58 },
    //   { label: "Introduction to Health, Safety and Environment", value: 45 },
    //   { label: "Special Projects Laboratory", value: 55 },
    //   { label: "Chemical Process Industries", value: 35 },
    //   { label: "SpeChEl Delivery: Chemical Engineering Freshie Assistance", value: 30 },
    //   { label: "National Chemical Engineering Symposium", value: 88 },
    //   { label: "Red Cross Volunteerism", value: 25 },
    //   { label: "Laboratory of Electrochemical Engineering Apprenticeship", value: 68 },
    //   { label: "Career Assistance Program for Engineering Students", value: 52 },
    //   { label: "Indakan Dance Competitions", value: 20 },
    //   { label: "Engineering Week Shenanigans", value: 33 },
    //   { label: "Students' National Chemical Engineering Conference", value: 77 }
    // ];

    // function getHeatColor(value) {
    //   if (value > 80) return "#e60000";
    //   if (value > 60) return "#ffaa00";
    //   return "#00cc66";
    // }

    // function isOverlapping(x, y, size, placed) {
    //   for (const b of placed) {
    //     const dx = b.x - x;
    //     const dy = b.y - y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);
    //     if (distance < (b.size / 2 + size / 2 + margin)) return true;
    //   }
    //   return false;
    // }

    // const placedBubbles = [];

    // // Add center bubble
    // const centerData = data[0];
    // const centerSize = 180;
    // const centerBubble = document.createElement("div");
    // centerBubble.className = "bubble center";
    // centerBubble.style.width = `${centerSize}px`;
    // centerBubble.style.height = `${centerSize}px`;
    // centerBubble.style.left = "50%";
    // centerBubble.style.top = "50%";
    // centerBubble.style.transform = "translate(-50%, -50%)";
    // centerBubble.innerHTML = `
    //   <img src="${centerData.image}" alt="Profile Image" />
    //   <div>${centerData.label}</div>
    //   ${centerData.subtitle ? `<div class="subtitle">${centerData.subtitle}</div>` : ""}
    // `;
    // container.appendChild(centerBubble);
    // placedBubbles.push({ x: centerX, y: centerY, size: centerSize });

    // // Create other bubbles + dashed lines
    // for (let i = 1; i < data.length; i++) {
    //   const { label, value, subtitle, desc, img, link, children } = data[i];
    //   const size = 40 + value * 1.2;
    //   const color = getHeatColor(value);

    //   let placed = false;
    //   let attempts = 0;
    //   let x, y;

    //   while (!placed && attempts < 300) {
    //     const angle = Math.random() * Math.PI * 2;
    //     const dist = Math.random() * (maxDist - size / 2) + (centerSize / 2 + margin);
    //     x = centerX + dist * Math.cos(angle);
    //     y = centerY + dist * Math.sin(angle);

    //     if (
    //       x - size / 2 < 0 || x + size / 2 > screenW ||
    //       y - size / 2 < 0 || y + size / 2 > screenH
    //     ) {
    //       attempts++;
    //       continue;
    //     }

    //     if (!isOverlapping(x, y, size, placedBubbles)) {
    //       placed = true;

    //       // bubble
    //       const bubble = document.createElement("div");
    //       bubble.childrenData = children || [];
    //       bubble.childBubbles = [];
    //       bubble.className = "bubble";
    //       bubble.style.width = `${size}px`;
    //       bubble.style.height = `${size}px`;
    //       bubble.style.left = `${x - size / 2}px`;
    //       bubble.style.top = `${y - size / 2}px`;
    //       bubble.style.background = color;
    //       //bubble.textContent = label;
    //       bubble.innerHTML = `
    //         <div class="bubble-label">${label}</div>
    //         <div class="bubble-details" style="display: none;">
    //           ${subtitle ? `<div class="subtitle">${subtitle}</div>` : ""}
    //           ${img ? `<img src="${img}" class="bubble-img" />` : ""}
    //           ${desc ? `<div class="desc">${desc}</div>` : ""}
    //           ${link ? `<a href="${link}" class="bubble-link" target="_blank">Learn More</a>` : ""}
    //         </div>
    //       `;


    //       container.appendChild(bubble);

    //       // line
    //       const dx = x - centerX;
    //       const dy = y - centerY;
    //       const distance = Math.sqrt(dx * dx + dy * dy);
    //       const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);

    //       const line = document.createElement("div");
    //       line.className = "line";
    //       line.style.width = `${distance}px`;
    //       line.style.left = `${centerX}px`;
    //       line.style.top = `${centerY}px`;
    //       line.style.transform = `rotate(${angleDeg}deg)`;
    //       container.appendChild(line);

    //       gsap.from(bubble, {
    //         opacity: 0,
    //         scale: 0,
    //         delay: 0.03 * i,
    //         duration: 0.6,
    //         ease: "back.out(1.7)"
    //       });

    //       gsap.from(line, {
    //         scaleX: 0,
    //         transformOrigin: "left center",
    //         delay: 0.03 * i,
    //         duration: 0.5,
    //         ease: "power1.out"
    //       });

    //       // Save original size and position
    //       const original = {
    //         width: size,
    //         height: size,
    //         left: x - size / 2,
    //         top: y - size / 2
    //       };

    //       centerBubble.addEventListener("mouseenter", () => {
    //         gsap.to(centerBubble, {
    //           width: 300,
    //           height: 300,
    //           padding:40,
    //           duration: 0.4,
    //           ease: "power2.out",
    //           zIndex: 499
    //         });
    //          overlay.style.opacity = 1;
    //       });

    //       centerBubble.addEventListener("mouseleave", () => {
    //         gsap.to(centerBubble, {
    //           width: 180,
    //           height: 180,
    //           duration: 0.4,
    //           ease: "power2.inOut",
    //           zIndex: 2
    //         });
    //          overlay.style.opacity = 0;
    //       });

    //       bubble.addEventListener("mouseenter", () => {
    //         gsap.to(bubble, {
    //           width: 300,
    //           height: 300,
    //           padding:40,
    //           left: original.left - (300 - size) / 2,
    //           top: original.top - (300 - size) / 2,
    //           duration: 0.4,
    //           ease: "power2.out",
    //           zIndex: 499
    //         });
    //         overlay.style.opacity = 1;
    //         bubble.querySelector('.bubble-details')?.style.setProperty('display', 'block');
    //         if (bubble.childrenData.length > 0) {
    //           const angleStep = (2 * Math.PI) / bubble.childrenData.length;
    //           const radius = 200; // Closer

    //           bubble.childrenData.forEach((child, index) => {
    //             const angle = angleStep * index;
    //             const bubbleRect = bubble.getBoundingClientRect();
    //             const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2;
    //             const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2;

    //             const childX = bubbleCenterX + radius * Math.cos(angle);
    //             const childY = bubbleCenterY + radius * Math.sin(angle);


    //             const childBubble = document.createElement("div");
    //             childBubble.className = "bubble";
    //             childBubble.style.width = "80px";
    //             childBubble.style.height = "80px";
    //             childBubble.style.left = `${childX - 40}px`;
    //             childBubble.style.top = `${childY - 40}px`;
    //             childBubble.style.background = child.color || "transparent";
    //             childBubble.style.zIndex = 500;
    //             childBubble.textContent = child.label;

    //             container.appendChild(childBubble);
    //             bubble.childBubbles.push(childBubble);

    //             gsap.from(childBubble, {
    //               opacity: 0,
    //               scale: 0,
    //               duration: 0.4,
    //               ease: "back.out(1.7)"
    //             });

    //             gsap.to(childBubble, {
    //               y: "-=5",
    //               duration: 1.5,
    //               ease: "sine.inOut",
    //               repeat: -1,
    //               yoyo: true
    //             });
    //           });
    //         }
    //       });

    //       bubble.addEventListener("mouseleave", () => {
    //         gsap.to(bubble, {
    //           width: original.width,
    //           height: original.height,
    //           left: original.left,
    //           top: original.top,
    //           duration: 0.4,
    //           ease: "power2.inOut",
    //           zIndex: 2
    //         });
    //         overlay.style.opacity = 0;
    //         bubble.querySelector('.bubble-details')?.style.setProperty('display', 'none');
    //         bubble.childBubbles.forEach(child => child.remove());
    //         bubble.childBubbles = [];
    //       });


    //       placedBubbles.push({ x, y, size });
    //     } else {
    //       attempts++;
    //     }
    //   }
    // }

const container = document.getElementById('container');
const screenW = window.innerWidth;
const screenH = window.innerHeight;
const centerX = screenW / 2;
const centerY = screenH / 2;
const margin = 20;
const maxDist = 300;
let currentCenteredBubble = null;


const data = [
      { label: "Kerk Magculang: A Chemical Engineer in the Making", value: 100, subtitle: "My UPD BS ChE Portfolio", image: "./src/130.png" },
      {
        label: "GAMA: A Proposal for a New Source of Crude Oil for Malampaya Project",
        value: 80,
        subtitle: "Process Fluid Systems",
        desc: "In this project, we applied principles of fluid transport and momentum balance to design a high-pressure pipeline system for crude oil delivery, proposing a new source for the Malampaya Project. We analyzed pump sizing, pipe specifications, and safety mechanisms to ensure efficiency and reliability. This experience deepened my technical skills in fluid system design and introduced me to industry-relevant decision-making in energy transport. Presenting at the DP Fair, I also gained confidence in communicating engineering solutions to both experts and non-engineers. These skills—technical design, system analysis, and clear communication—will be essential as I pursue a career in energy systems and industrial operations.",
        img: "./src/130.png", // your image URL,
        mentor:"mamao",
        link: "https://drive.google.com/drive/folders/15qcgQj-viNKoXd-_C9OlEomnuENR1a8v?usp=share_link",
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
      {
        label: "Chemical Reaction Engineering",
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
      {
        label: "Separation Process",
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
      { label: "Separation Processes", value: 85 },
      { label: "Particle Technology", value: 50 },
      { label: "Process Engineering Laboratory", value: 60 },
      { label: "Chemical Plant and Process Economics", value: 40 },
      { label: "Chemical Engineering Research", value: 70 },
      { label: "Introduction to Bioprocess Engineering", value: 65 },
      { label: "Chemical Process Development and Plant Economics", value: 58 },
      { label: "Introduction to Health, Safety and Environment", value: 65 },
      { label: "Special Projects Laboratory", value: 55 },
      { label: "Chemical Process Industries", value: 35 },
      { label: "SpeChEl Delivery: Chemical Engineering Freshie Assistance", value: 70 },
      { label: "National Chemical Engineering Symposium", value: 88 },
      { label: "Red Cross Volunteerism", value: 45 },
      { label: "Laboratory of Electrochemical Engineering Apprenticeship", value: 68 },
      { label: "Career Assistance Program for Engineering Students", value: 52 },
      { label: "Indakan Dance Competitions", value: 50 },
      { label: "Engineering Week Shenanigans", value: 54 },
      { 
        label: "Students' National Chemical Engineering Conference", value: 77, 
        value: 75,
        subtitle: "Kinetics & Reactor Design",
        desc: "Explore reaction rates, mechanisms, and reactor models.",
        img: "./src/130.png",
        mentor:"mamao",
        link: "https://example.com/chem-reaction",
        children: [
          { label: "Engineering Knowledge", color: "#e63946" },
          { label: "Problem Analysis", color: "#457b9d" },
          { label: "Design & Development of Solutions" },
          { label: "Digital Tools Usage", color: "#2a9d8f" },
          { label: "Investigation", },
          { label: "Individual and Collaborative Work", color: "#3e9d8f" },
          { label: "The Engineering and the world", color: "#4d9d8f" },
          { label: "Ethics", color: "#4d9d8f" },
          { label: "Communication",},
          { label: "Project Management", color: "#4d9d8f" },
          { label: "Lifelong Learning", color: "#4d9d8f" },
        ]
      }
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
const centerSize = 180;
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
      bubble.childrenData = children || [];
      bubble.childBubbles = [];
      bubble.className = "bubble";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x - size / 2}px`;
      bubble.style.top = `${y - size / 2}px`;
      bubble.style.background = color;
      bubble.innerHTML = `
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

      centerBubble.addEventListener("mouseenter", () => {
        gsap.to(centerBubble, {
          width: 300,
          height: 300,
          padding:40,
          duration: 0.4,
          ease: "power2.out",
          zIndex: 499
        });
          overlay.style.opacity = 1;
      });

      centerBubble.addEventListener("mouseleave", () => {
        gsap.to(centerBubble, {
          width: 180,
          height: 180,
          duration: 0.4,
          ease: "power2.inOut",
          zIndex: 2
        });
          overlay.style.opacity = 0;
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

        if (bubble.childrenData.length > 0) {
          const angleStep = (2 * Math.PI) / bubble.childrenData.length;
          const radius = 320;

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

        bubble.childBubbles.forEach(child => child.remove());
        bubble.childBubbles = [];
      });
      placedBubbles.push({ x, y, size });
    } else {
      attempts++;
    }
  }
}

