---
menus: "main" # don't change
title: "HackUTD 2025"
date: "2025-11-08"
summary: "Myself and three other teammates competed in HackUTD, the largest overnight hackathon in North America, against ~1,200 participants (only 36% of applicants were accepted), comprising 367 teams. We chose to compete in the two most competitive tracks sponsored by NVIDIA and Toyota Financial Services, with 103 and 69 teams respectively in each, and won **First Place** in both tracks.
<br><br>
We brainstormed, requirements-engineered, and built **Toyotron**, a multi-agent Toyota concierge that helps users find the right car for them based on their needs and preferences, schedule test drives, learn about financing and insurance, and value their trade-ins. The agents can be accessed via a web chat interface or through a phone call (real, not simulated), or can browse the catalog of cars and use a traditional compare tool if they wish.
<br><br>
We used two APIs for gathering vehicle data and images, then used Python to merge, filter, and clean the datasets, leaving us with 1,150 different Toyota models, years, and trims. We then allowed each agent (each using NVIDIA’s Nemotron 49b model via OpenRouter) to search and filter through the dataset through a custom tool given to the agents via Vercel’s AI SDK. The agents specialize in intent parsing, vehicle search, finance calculations, and report generations, and all collaborate seamlessly. We also made tools for sending Google Calendar invites, sending emails via Resend, and decoding VINs using the NHTSA API.
<br><br>
For valuing trade-ins, we used GPT-4o Vision to view images and determine a condition score and an itemized list of each identified visual defect, then used the pulled VIN to find a matching car from our cars database, then discounted the matching car’s MSRP based on age and condition of the user’s car.
<br><br>
To interface with the agents, we built a website with Next.js 16, Tailwind v4, TypeScript, and Supabase for data storage and authentication, as well as a phone agent using Retell AI.
<br><br>
[view the repo](https://github.com/anbguye/hackutd-Toyota-Toyotron), view our [live site](https://toyota-toyotron.vercel.app), or [view our hackathon submission](https://devpost.com/software/toyotron)"
backgroundColor: "#101010"
accentColor: "#FFFFFF"
---
{{< figure src="landing.png" title="Landing Page" caption="" width="1600" >}}
{{< figure src="chat.png" title="Chat Interface Recommendations" caption="" width="1600" >}}
{{< figure src="booking.png" title="Booking a Test Drive" caption="" width="1600" >}}
{{< figure src="recs.png" title="Emailing Recommendations" caption="" width="1600" >}}
{{< figure src="tradein.png" title="Valuing a Trade-In" caption="" width="1600" >}}