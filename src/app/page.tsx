"use client"
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
export default function Home() {
  const [answers, setAnswers] = useState<string[]>([]);
  const answersRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
 
    setAnswers([
      "This is a sample generated answer for your activity form.",
      "You can replace this with actual AI-generated content.",
    ]);
    setTimeout(() => {
      answersRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-neutral-900 dark:to-neutral-800">
      <div className="w-full max-w-3xl">
       <div>
        <div className="flex flex-row gap-4">
          <Image 
          src="/icon.png"
          width={40}
          height={40}
          alt = "logo"
          />
              

          <h1 className="text-4xl font-extrabold tracking-tight text-primary drop-shadow-sm">MSA AI</h1>
          </div>
          <p className="text-lg text-muted-foreground mt-2">A program to assist with administrative/time consuming tasks, such as room bookings and activity forms</p>
       </div>
        {/* <div>
        <h2 className="text-2xl font-bold mb-4 text-primary">Room Booking </h2>
        <p>Event description: Please describe the benefit of the event to the Laurier community        </p>
        
        </div> */}
        <div className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 text-primary">Activity Forms</h2>
          <div>
            <h3 className="text-lg font-semibold mb-2">Event title and brief description</h3>
            <Input className="flex-1 focus:ring-2 focus:ring-primary/60 transition" placeholder="Type your question..." />
            <p className="font-bold py-4">Activity form question list:</p>
            <ul className="flex flex-col gap-4 pl-4 list-none">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>What are the overall objectives (i.e. goals and vision) of this activity? They must align with equity, diversity, inclusion, and anti-oppression and must clearly address a need or interest from the target participants/attendees/audience.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>What will this activity entail/what will participants/attendees do at the event? (e.g. participate in skill building workshops, engage in discussion circles, etc)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Describe the anticipated outcome of your activity (i.e., the intended results achieved if overall vision comes to life). For example, what skills will participants develop? What will they learn? In what ways will the initiative strengthen their peer or community connections?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Describe how the anticipated outcomes will be assessed (i.e. what evaluation methods will be in place such as participant tracking, feedback forms, etc).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Provide a description and timeline of the main tasks your team plans to carry out to ensure the successful completion of this programming activity.</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Label className="w-full sm:w-auto">Got another question to add?</Label>
              <Input className="flex-1 focus:ring-2 focus:ring-primary/60 transition" placeholder="Type your question..." />
              <Button variant="outline" className="hover:cursor-pointer m-2 shadow-md transition hover:bg-primary/10" onClick={handleGenerate}>
                Generate answers
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Generated Answers Section */}
      {answers.length > 0 && (
        <div ref={answersRef} className="mt-12 bg-primary/5 dark:bg-primary/10 rounded-xl p-8 border border-primary/20 shadow-md w-full max-w-3xl">
          <h2 className="text-xl font-bold text-primary mb-4">Generated Answers</h2>
          <ul className="list-disc pl-6 space-y-2">
            {answers.map((ans, idx) => (
              <li key={idx} className="text-base text-foreground/90">{ans}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
