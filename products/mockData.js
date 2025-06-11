const mockData = {
    keyboards: [
      {
        title: "Predator Aethon 700 Mechanical Gaming Keyboard",
        price: "₹9,499",
        image: "images/keyboards/pred_aethon.webp",
        description: "Unleash peak performance with the Predator Aethon 700 mechanical keyboard featuring dual switch technology for fast actuation, customizable RGB lighting, anti-ghosting, and media control dial. Built for gamers who demand both functionality and flair."
      },
      {
        title: "Redragon Shiva K512 RGB Membrane Gaming Keyboard",
        price: "₹3,299",
        image: "images/keyboards/Redragon-Shiva-K512-RGB-Mechanical-Keyboard-6.webp",
        description: "The Redragon Shiva K512 features 6 onboard macro keys, dedicated media controls, dynamic RGB backlighting, and 26-key rollover. Its quiet and comfortable typing feel with membrane switches makes it a perfect entry-level gaming keyboard for casual and hardcore gamers alike."
      },
      {
        title: "Razer BlackWidow V4 Pro Ultra-Chroma Mechanical Gaming Keyboard",
        price: "₹21,999",
        image: "images/keyboards/razer-blackwidow-ultimate-chroma-banner-main-page.png",
        description: "Dominate your gameplay with the Razer BlackWidow V4 Pro featuring per-key Razer Chroma RGB lighting, dedicated macro keys, media dial, wrist rest, and tactile mechanical switches. Built for advanced customization and marathon gaming comfort."
      },
      {
        title: "Razer Huntsman V2 Analog Gaming Keyboard",
        price: "₹19,499",
        image: "images/keyboards/https___hybrismediaprod.blob_.core_.windows.net_sys-master-phoenix-images-container_h93_h45_9662065344542_230921-huntsman-v3-pro-1500x1000-3.jpg",
        description: "Experience precision and performance like never before with the Razer Huntsman V2 Analog. Featuring analog optical switches, Razer Chroma RGB, dual-step actuation, and a magnetic wrist rest, it’s engineered for pro-level control and customizability."
      },
      {
        title: "ROG Strix Scope RX Optical Mechanical Gaming Keyboard",
        price: "₹11,499",
        image: "images/keyboards/ROGStrixScope.jpg",
        description: "Built for gamers who demand responsiveness and durability, the ROG Strix Scope RX features exclusive ROG RX Red optical mechanical switches, IP57 water and dust resistance, RGB lighting, and a solid aluminum top plate. Ideal for FPS gamers needing a wider Ctrl key and ultra-fast keystrokes."
      },
      {
        title: "HyperX Alloy Origins Mechanical Gaming Keyboard",
        price: "₹8,999",
        image: "images/keyboards/hyperx-alloy-origins-60-02.webp",
        description: "The HyperX Alloy Origins is a compact and sturdy keyboard featuring HyperX mechanical switches built for performance and longevity. With dynamic RGB lighting effects, full aircraft-grade aluminum body, and customizable macro support, it's ideal for competitive gaming setups."
      },
      {
        title: "Logitech G515 LIGHTSPEED TKL Wireless Gaming Keyboard",
        price: "₹14,499",
        image: "images/keyboards/logg515s.webp",
        description: "The Logitech G515 LIGHTSPEED is a low-profile, high-performance TKL wireless gaming keyboard. Featuring GL mechanical switches, LIGHTSPEED wireless technology, RGB lighting, and customizable macros, it delivers the perfect balance of responsiveness and minimalist style for serious gamers."
      },
      {
        title: "Logitech G Pro X Mechanical Gaming Keyboard",
        price: "₹12,999",
        image: "images/keyboards/LogGpro_.jpg",
        description: "The Logitech G Pro X is a tournament-grade mechanical gaming keyboard with swappable switches, compact tenkeyless design, detachable cable, and customizable LIGHTSYNC RGB. Built for pro-level performance and durability, it’s the choice of top esports athletes worldwide."
      }
     
    ],
    monitors: [
      {
        title: "Razer Raptor 27 QHD 165Hz Gaming Monitor",
        price: "₹55,999",
        image: "images/Monitors/raptor27.jpg",
        description: "Experience the ultimate in precision with the Razer Raptor 27. Boasting a 27” QHD IPS display, 165Hz refresh rate, 1ms response time, and support for both NVIDIA® G-SYNC® and AMD FreeSync™ Premium, this monitor is built for elite gamers. The aluminum build, RGB lighting, and cable management system make it a standout on any desk."
      },
      {
        title: "Acer Predator X27 E12 4K Gaming Monitor",
        price: "₹1,59,999",
        image: "images/Monitors/acerE12.webp",
        description: "Unleash ultra-HD gaming with the Acer Predator X27 (E12), featuring a stunning 27” 4K UHD display, 144Hz refresh rate (overclockable), and NVIDIA® G-SYNC® HDR. Boasting 99% AdobeRGB color accuracy, 1000 nits peak brightness, and quantum dot technology, it's built for serious gamers and creators who demand the best."
      },
       {
        title: "HP OMEN 27i 165Hz QHD Gaming Monitor",
        price: "₹32,999",
        image: "images/Monitors/hpomen.jpg",
        description: "Dominate your game with the HP OMEN 27i, featuring a 27-inch QHD IPS display, 165Hz refresh rate, 1ms response time, and NVIDIA® G-SYNC® compatibility. The sleek micro-edge design offers immersive visuals, while factory color calibration ensures stunning accuracy straight out of the box."
      },
      {
        title: "Acer Predator Helios 18 (S57 Series) Gaming Laptop",
        price: "₹2,19,999",
        image: "images/Monitors/acer57inchpred.webp",
        description: "Unleash extreme power with the Acer Predator Helios 18 S57 Gaming Laptop. Equipped with a 13th Gen Intel® Core™ i9 processor, NVIDIA® GeForce RTX™ 4080 GPU, 18-inch WQXGA 240Hz display, and advanced cooling with 5th Gen AeroBlade™ 3D fans. Perfect for AAA gaming, content creation, and heavy multitasking."
      },
       {
        title: "LG UltraGear 32GQ950-B 32” UHD Gaming Monitor",
        price: "₹89,999",
        image: "images/Monitors/LGultragear.jpg",
        description: "Dominate the battlefield with the LG UltraGear 32” 4K UHD Gaming Monitor. Featuring a Nano IPS display with VESA DisplayHDR™ 1000, 144Hz refresh rate (160Hz overclocked), 1ms response time, NVIDIA G-SYNC® compatibility, and DCI-P3 98% color gamut, it's engineered for extreme clarity, speed, and color precision."
      },
      {
        title: "ROG Swift OLED PG27AQDM 27” QHD 240Hz Monitor",
        price: "₹1,24,999",
        image: "images/Monitors/ROGOled.jpg",
        description: "Experience next-gen gaming with the ROG Swift OLED PG27AQDM. This 27” QHD OLED gaming monitor offers an ultra-fast 240Hz refresh rate and 0.03ms response time. With 1000-nit peak brightness, NVIDIA G-SYNC® compatibility, and ASUS Smart Cooling, it's designed for unbeatable color, motion clarity, and immersive gameplay."
      },
       {
        title: "Razer Raptor 27 Gaming Monitor – QHD 165Hz",
        price: "₹1,09,999",
        image: "images/Monitors/2019Computers_Game_Monitor_Razer_Raptor__CES_2019_on_a_black_background_130968_18.jpg",
        description: "The Razer Raptor 27 delivers uncompromising performance with a QHD 2560x1440 resolution, ultra-fast 165Hz refresh rate, and 1ms response time. Enjoy rich, accurate colors with 95% DCI-P3, Adaptive Sync support, THX Certification, and Razer Chroma RGB integration for the ultimate gaming setup."
      },
      {
        title: "ROG Swift PG32UQX 32” 4K UHD G-SYNC Gaming Monitor",
        price: "₹2,29,999",
        image: "images/Monitors/sK2reGEmHUXM6vXwvdWyk7.jpg",
        description: "The ROG Swift PG32UQX is the world’s first mini LED gaming monitor with 4K resolution, 144Hz refresh rate, and full-array local dimming with 1152 zones. Certified with NVIDIA G-SYNC® Ultimate for tear-free gameplay and ultra-high brightness up to 1400 nits, it's built for elite PC and console gaming performance."
      }
    ],
    consoles: [
      {
        title: "PlayStation 4 God of War Limited Edition Console (1TB)",
        price: "₹28,990",
        image: "images/consoles/psgow.jpg",
        description: "The PS4 God of War Limited Edition Console features a custom design inspired by the iconic Leviathan Axe. This 1TB console bundle includes a matching DualShock 4 controller and a copy of the award-winning God of War game. A collector's dream for fans of the series."
      },
      {
       title: "PlayStation 5 Spider-Man 2 Limited Edition Console Bundle",
        price: "₹49,990",
        image: "images/consoles/spiderman_ps5.jpg",
        description: "The PS5 Spider-Man 2 Limited Edition Console features a custom red-and-black design inspired by the symbiote suit. This bundle includes a special edition DualSense controller and a full game voucher for Marvel's Spider-Man 2 — perfect for fans of the franchise."
      },
      {
        title: "Xbox One 1TB Console – Black",
        price: "₹24,990",
        image: "images/consoles/pngtree-black-xbox-one-console-with-a-controller-next-to-it-picture-image_3638516.jpg",
        description: "The Xbox One 1TB Console is built for gaming and entertainment, featuring stunning graphics, fast loading times, and access to a massive library of games. With online multiplayer support and media apps, it's your all-in-one entertainment system."
      },
      {
        title: "Nintendo Switch Pro Console – Enhanced Edition",
        price: "₹34,990",
        image: "images/consoles/switch-pro-release-date-2022.avif",
        description: "The Nintendo Switch Pro is a premium edition of the hybrid console, offering enhanced performance, a brighter OLED screen, longer battery life, and a Pro Controller included. Perfect for gamers who play both at home and on the go."
      },
      {
        title: "Sony PlayStation 3 Super Slim 500GB Console – Black",
        price: "₹14,990",
        image: "images/consoles/ps3-black.avif",
        description: "The PlayStation 3 Super Slim offers high-quality gaming, Blu-ray playback, and access to a huge library of classic PlayStation titles. Its compact design and 500GB storage make it perfect for entertainment lovers and retro gamers alike."
      },
      {
        title: "Sony PlayStation 5 Console – Disc Edition",
        price: "₹54,990",
        image: "images/consoles/ps5.jpg",
        description: "The PlayStation 5 offers next-gen gaming with ultra-fast load times, stunning 4K graphics, and the immersive DualSense controller. Experience incredible performance, exclusive titles, and a new era of console gaming."
      },
      {
        title: "Microsoft Xbox One Console – 1TB",
        price: "₹34,990",
        image: "images/consoles/xbox-one-x-7n319y1k5isyfwcn.jpg",
        description: "Enjoy powerful gaming with the Xbox One. Featuring 1TB storage, 4K streaming capabilities, HDR support, and a vast library of games and entertainment apps."
      },
      {
        title: "Microsoft Xbox 360 Console – 250GB",
        price: "₹12,990",
        image: "images/consoles/xbox360.jpg",
        description: "The Xbox 360 offers an immersive gaming experience with 250GB storage, Xbox Live multiplayer, and access to a broad library of games and entertainment apps.",
      }
    ],
    chairs: [
      {
        title: "Valentium Ergonomic Gaming Chair with Recline & Lumbar Support",
        price: "₹14,999",
        image: "images/chairs/valentium.webp",
        description: "The Valentium Gaming Chair combines premium comfort with pro-level functionality. Featuring a reclining backrest, adjustable armrests, lumbar and neck support pillows, and a stylish racing-inspired design, it's perfect for long gaming sessions or working from home."
      },
      {
        title: "Synkx Ergonomic Gaming Chair with Lumbar Support & Recline",
        price: "₹12,499",
        image: "images/chairs/synk-x-chair-closeup.webp",
        description: "The Synkx Gaming Chair is designed for elite comfort and durability. Featuring 3D armrests, full reclining support up to 180°, high-density foam padding, adjustable lumbar and neck cushions, it’s perfect for serious gamers and professionals who demand long-term support."
      },
      {
        title: "Hathip High-Back Gaming Chair with Footrest & Lumbar Support",
        price: "₹13,299",
        image: "images/chairs/Hasthip.avif",
        description: "The Hathip Gaming Chair offers superior comfort and design, featuring a high-back design, extendable footrest, 135° recline, adjustable height, and cushioned lumbar & headrest support. It's the perfect ergonomic companion for gamers, streamers, and home-office users alike."
      },
      {
        title: "Green Soul Monster Ultimate Series Gaming Chair",
        price: "₹17,499",
        image: "images/chairs/Greensoul.webp",
        description: "The Green Soul Monster Ultimate Gaming Chair is ergonomically designed for extreme comfort and durability. Features include breathable premium fabric, adjustable 3D armrests, neck and lumbar pillows, multi-tilt lock, and a steel frame structure. Ideal for both work and long gaming sessions."
      },
      {
        title: "Secretlab Omega 2020 Series Gaming Chair",
        price: "₹39,999",
        image: "images/chairs/secretlabs.webp",
        description: "The Secretlab Omega Gaming Chair is the pinnacle of premium ergonomic design. Made with cold-cure foam and PRIME™ 2.0 PU leather, it features a memory foam lumbar pillow, full-metal 4D armrests, and a multi-tilt mechanism. A top choice for pro gamers and professionals alike."
      },
      {
        title: "DragonWar GC-012 Gaming Chair with Ergonomic Back Support",
        price: "₹11,999",
        image: "images/chairs/Dragonwar.jpg",
        description: "The DragonWar GC-012 Gaming Chair combines comfort and performance with high-density cushioning, adjustable height, full recline, and sturdy build quality. Ideal for gamers and professionals looking for reliable back and neck support during long sessions."
      },
      {
        title: "Zenez High Back Ergonomic Gaming Chair",
        price: "₹9,499",
        image: "images/chairs/Zenez.jpg",
        description: "The Zenez Gaming Chair offers reliable support for gamers and professionals with its high-back ergonomic design, adjustable height, and PU leather finish. Perfect for long hours of gaming or work, it blends comfort with durability at a great price."
      },
      {
        title: "Green Soul® Blade Gaming Chair with Adjustable Lumbar Support",
        price: "₹13,999",
        image: "images/chairs/GreenSoulBladeErgonomic.jpg",
        description: "The Green Soul® Blade Gaming Chair is built for intense gaming and extended work sessions. With its mesh-based backrest, adjustable lumbar & neck support, and 2D armrests, it ensures ergonomic comfort and breathability throughout the day."
      }
    ],
    mouse: [
      {
        title: "ASUS ROG Gladius II Gaming Mouse",
        price: "₹5,499",
        image: "images/mouses/gladius rog.jpg",
        description: "The ROG Gladius II features an ergonomic design, Aura Sync RGB lighting, 12000 DPI optical sensor, and detachable cable for ultimate precision and portability—perfect for competitive gamers."
      },
      {
        title: "Acer Predator Cestus 330 Gaming Mouse",
        price: "₹3,299",
        image: "images/mouses/Acer-Predator-Cestus-500-feature.jpg",
        description: "Dominate the competition with the Acer Predator Cestus 330 Gaming Mouse. With a 16000 DPI optical sensor, customizable RGB lighting, and ergonomic design, it’s built for precision and comfort during long gaming sessions."
      },
      {
        title: "Razer Predator",
        price: "₹8,999",
        image: "images/mouses/Reddragon Preadator.jpg",
        description: "The Razer Predator Gaming Mouse is a high-performance peripheral designed for competitive gamers, offering precision, speed, and ergonomic comfort. It typically features a high-DPI optical sensor (up to 20,000+ DPI), customizable RGB lighting, programmable buttons, and low-latency input. Built for durability and responsiveness, it’s ideal for fast-paced games and long gaming sessions."
      },
      {
        title: "Razer DeathAdder Essential Gaming Mouse",
        price: "₹1,899",
        image: "images/mouses/RazerDeathAdder.jpg",
        description: "The Razer DeathAdder Essential retains the classic ergonomic form that’s been a hallmark of Razer’s legacy. Equipped with a 6,400 DPI optical sensor, durable mechanical switches, and a sleek, comfortable design, it’s the go-to mouse for precision gaming."
      },
      {
        title: "Razer Basilisk V3 Wired Gaming Mouse",
        price: "₹5,999",
        image: "images/mouses/RazerBasilisk.jpg",
        description: "The Razer Basilisk V3 is a high-performance gaming mouse designed with precision, style, and comfort in mind. Featuring 11 programmable buttons, customizable RGB lighting, and a 26K DPI optical sensor, it’s the ultimate tool for competitive gamers."
      },
      {
        title: "Razer Naga Trinity Gaming Mouse",
        price: "₹7,499",
        image: "images/mouses/RazerNaga.jpg",
        description: "The Razer Naga Trinity offers 3 interchangeable side plates with 2, 7, and 12-button configurations, optimized for MOBA/MMO gaming. With a 16,000 DPI optical sensor and Razer Chroma RGB, it's built for speed, accuracy, and versatility."
      },
      {
        title: "Ant Esports GM320 RGB Wired Gaming Mouse",
        price: "₹799",
        image: "images/mouses/antesports.jpg",
        description: "The Ant Esports GM320 is an affordable RGB gaming mouse designed for precision and performance. Featuring a 7200 DPI sensor, ergonomic design, and 7 programmable buttons, it is a perfect choice for entry-level and mid-range gamers."
      },
      {
        title: "Ant Esports GM270W Black Edition Wired Gaming Mouse",
        price: "₹899",
        image: "images/mouses/ttesports.jpg",
        description: "The Ant Esports Black Edition GM270W offers a sleek black finish, ergonomic grip, customizable RGB lighting, and up to 7200 DPI. It's built to deliver responsive performance and long-lasting comfort during extended gaming sessions."
      },
      
      
    ]
  };