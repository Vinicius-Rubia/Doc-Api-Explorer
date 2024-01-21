import { MenuBar, Sidebar } from "@/components";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { ptBR } from "date-fns/locale";
import React from "react";

export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    company: "Neo Energia",    
    description: "Parte do grupo espanhol Iberdrola, no Brasil desde 1997, sendo uma das líderes do setor elétrico.",
    date: "2023-10-22T09:00:00",
    badgeStatus: "Concluído",
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    company: "SKY",
    description: "TA SKY é maior a operadora de TV por assinatura via satélite do país. Desde sua inauguração, em 1996, distribui a programação 100% digital para seus assinantes, em todo o território nacional",
    date: "2023-10-22T10:30:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    company: "Market Place",
    description: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    date: "2023-04-10T11:45:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    company: "Claro",
    description: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: "2023-03-25T13:15:00",
    badgeStatus: "Concluído",
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    company: "API Teste 01",
    description: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    date: "2023-03-10T15:00:00",
    badgeStatus: "Concluído",
  },
  {
    id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
    company: "API Teste 02",
    description: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah",
    date: "2023-02-15T16:30:00",
    badgeStatus: "Concluído",
  },
  {
    id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
    company: "API Teste 03",
    description: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.\n\nBest regards, David",
    date: "2023-01-28T17:45:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "2f0130cb-39fc-44c4-bb3c-0a4337edaaab",
    company: "API Teste 03",
    description: "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nWe can start making arrangements to ensure a smooth and enjoyable trip.\n\nExcited to hear your thoughts! Olivia",
    date: "2022-12-20T18:30:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "de305d54-75b4-431b-adb2-eb6b9e546014",
    company: "API Teste 03",
    description: "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nIf there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.\n\nBest regards, James",
    date: "2022-11-30T19:15:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "7dd90c63-00f6-40f3-bd87-5060a24e8ee7",
    company: "API Teste 04",
    description: "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.\n\nI've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.\n\nPlease confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!\n\nBest, Sophia",
    date: "2022-11-05T20:30:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "99a88f78-3eb4-4d87-87b7-7b15a49a0a05",
    company: "API Teste 05",
    description: "I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.\n\nI've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.\n\nYour feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.\n\nRegards, Daniel",
    date: "2022-10-22T09:30:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    company: "API Teste 06",
    description: "Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.\n\nIf you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.\n\nIt's essential that our meeting is productive and addresses all relevant matters.\n\nLooking forward to our meeting! Ava",
    date: "2022-10-10T10:45:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",
    company: "API Teste 07",
    description: "The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.\n\nI'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.\n\nLet's make this product launch a resounding success!\n\nBest regards, William",
    date: "2022-09-20T12:00:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "ba54eefd-4097-4949-99f2-2a9ae4d1a836",
    company: "API Teste 08",
    description: "I've received the travel itinerary. It looks great! Thank you for your prompt assistance in arranging the details. I've reviewed the schedule and the accommodations, and everything seems to be in order. I'm looking forward to the trip, and I'm confident it'll be a smooth and enjoyable experience.\n\nIf there are any specific activities or attractions you recommend at our destination, please feel free to share your suggestions.\n\nExcited for the trip! Mia",
    date: "2022-09-10T13:15:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "df09b6ed-28bd-4e0c-85a9-9320ec5179aa",
    company: "API Teste 09",
    description: "Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.\n\nPlease let me know your thoughts and availability. We want this event to be both enjoyable and productive.\n\nTogether, we'll strengthen our team and boost our performance.\n\nRegards, Ethan",
    date: "2022-08-25T15:30:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
    company: "API Teste 10",
    description: "The budget has been approved. We can proceed with the project. I'm delighted to inform you that our budget proposal has received the green light from the finance department. This is a significant milestone, and it means we can move forward with the project as planned.\n\nI've attached the finalized budget for your reference. Let's ensure that we stay on track and deliver the project on time and within budget.\n\nIt's an exciting time for us! Chloe",
    date: "2022-08-10T16:45:00",
    badgeStatus: "Em desenvolvimento",
  },
  {
    id: "6c9a7f94-8329-4d70-95d3-51f68c186ae1",
    company: "API Teste 11",
    description: "Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.\n\nI've done some research and have a few routes in mind.\n\nLet me know if you're interested, and we can plan the details.\n\nIt's sure to be a memorable experience! Samuel",
    date: "2022-07-28T17:30:00",
    badgeStatus: "Em desenvolvimento",
  },
]

export const Home: React.FC = () => {
  return (
    <div className="h-screen relative">
      <MenuBar />
      <div className="flex absolute bottom-0 top-10 left-0 z-10">
        <div className="w-[250px] border-r border-zinc-800 hidden md:block">
          <Sidebar />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-40px)]">
        <div className="flex flex-col gap-4 flex-1 justify-center items-center text-white md:ml-[250px]">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 p-4">
            {mails.map((item) => (
              <button
                key={item.id}
                className="flex flex-col items-start gap-2 rounded-md border border-zinc-800 p-3 text-left text-sm transition-all hover:bg-zinc-800"
              >
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="font-semibold">{item.company}</div>
                    <div className="ml-auto text-xs">
                      {formatDistanceToNow(new Date(item.date), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </div>
                  </div>
                </div>
                <div className="line-clamp-2 text-xs text-zinc-400">
                  {item.description.substring(0, 300)}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{item.badgeStatus}</Badge>
                </div>
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
