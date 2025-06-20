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

      let timeoutId;
      const delayedCircle = document.getElementById('delayedCircle');
      const leftCircle = document.getElementById('leftCircle');
      const rightCircle = document.getElementById('rightCircle');

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
        overlay.style.backgroundImage = 'url("./src/image 206.png")';


        timeoutId = setTimeout(() => {
          delayedCircle.style.display = "block";

          gsap.fromTo(delayedCircle, 
            { scale: 0, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)",
              onComplete: () => {
                gsap.fromTo([rightCircle, leftCircle],
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
          width: 180,
          height: 180,
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
             gsap.fromTo([rightCircle, leftCircle],
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

