import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';



export async function POST(req: Request)  {

    try {

        const {messages} = await req.json();
         const systemMessage = `You are a helpful assistant that works with the Muslim student association at the university, advocating for their needs and getting events approved. Given the following event that the Muslim students association will be hosting at the university, answer the following questions in order.  Ensure that a response to a question is no more that 150 words. 
         
         1. What are the overall objectives (i.e. goals and vision) of this activity? They must align with equity, diversity, inclusion, and anti-oppression and must clearly address a need or interest from the target participants/attendees/audience.
        2. What will this activity entail/what will participants/attendees do at the event? (e.g. participate in skill building workshops, engage in discussion circles, etc)
        3.Describe the anticipated outcome of your activity (i.e., the intended results achieved if overall vision comes to life). For example, what skills will participants develop? What will they learn? In what ways will the initiative strengthen their peer or community connections?
        4. Describe how the anticipated outcomes will be assessed (i.e. what evaluation methods will be in place such as participant tracking, feedback forms, etc).
        5.Provide a description and timeline of the main tasks your team plans to carry out to ensure the successful completion of this programming activity.
         `
        const result = await generateText({
        model: groq("openai/gpt-oss-120b"),
        system: systemMessage,
        messages
       })
       console.log(result)

    return new Response(result.text)
    } catch(error) {
            console.error("An error has occurred", error)
    return new Response("Internal server error")
    }
    
}