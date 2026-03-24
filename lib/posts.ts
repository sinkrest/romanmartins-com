export interface Post {
  slug: string
  title: string
  date: string
  readingTime: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'the-personal-os',
    title: 'The Personal OS',
    date: '2026-03-23',
    readingTime: '4 min read',
    excerpt: 'I spent a decade shaping plastic at LEGO. Now I shape prompts. The material changed — the impulse didn\'t. But something bigger is happening.',
    content: `I spent ten years at LEGO. Not designing sets — working with the material itself. Polymers. Injection moulding. The physics of how melted plastic flows into a mould and becomes something a kid picks up and never puts down.

You develop a feel for it. Not just the science — the craft. You learn that a 0.02mm difference in a mould wall changes how the part ejects. You learn to read a machine by its sound. After enough years, the tools become invisible. You stop thinking about the process and start thinking through it.

When I left LEGO and started a 3D printing company, people said it was a big leap. It didn't feel like one. Same logic — material goes in, object comes out. The loop just got shorter. Instead of months from design to production part, it was hours. The machine sat on my desk instead of filling a factory hall.

Then I built an AI-powered children's book product. Custom stories, custom illustrations, printed and shipped. Another step removed from the physical. But the pattern was the same: understand the material, shape it, ship something real.

Now I spend my mornings in a terminal. Not writing code in the traditional sense — more like directing it. I describe what I want, an AI builds it, I shape the output, deploy it, and move on to the next thing. Last month I shipped six tools in three weeks. Not prototypes. Working products, live on the internet, doing useful things.

---

Here's what I keep thinking about.

Every tool I've ever used — the injection moulding machines, the 3D printers, the design software, the code editors — they were all generic. Built for everyone, configured for no one. You adapted yourself to the tool. Learned its interface, its quirks, its constraints. The tool didn't know you.

That's changing.

Right now, I have a workspace where an AI reads my context files at the start of every session. It knows what I'm building, what I've shipped, what's next. It runs commands I designed. It follows patterns I set. When I say "screen the feed," it knows what sources to check, what filters to apply, and where to put the output.

This isn't an app. It's not a SaaS product I'm subscribing to. It's closer to what I'd call a personal operating system — a layer between me and the digital world that's shaped around how I think and work.

And I think this is where everything is heading.

Not the metaverse. Not another platform. Something quieter and more fundamental: the interface itself becoming personal. Your tools knowing your context. Your workflows encoding your judgement. The gap between intention and execution collapsing — not because the AI is smarter, but because it's yours.

I think about the LEGO factory floor sometimes. Every operator had their station set up differently. Same machines, same moulds, but the experienced ones had arranged everything — the tools, the inspection lights, the reject bins — in a way that matched how they moved. Their workspace was an extension of how they thought.

We're about to have that digitally. Not a shared operating system that millions of people use the same way, but personal systems that evolve around individual people. Your AI doesn't just answer questions — it maintains your projects, remembers your preferences, runs your daily operations. It becomes the workshop, arranged around you.

The material changed — plastic, filament, pixels, prompts. The impulse didn't. You see something that doesn't exist yet, and you build it.

The difference now is that the building material is getting personal.

---

I'm going to write here occasionally. Not on a schedule. Not about a topic. Just thinking out loud about what it's like to build things in a time when the tools are changing faster than anyone can document.

If that sounds interesting, stick around.`
  },
  {
    slug: 'the-game-i-didnt-plan-to-make',
    title: 'The Game I Didn\'t Plan to Make',
    date: '2026-02-28',
    readingTime: '4 min read',
    excerpt: 'I made a snake game last week. Nobody cared. But sitting there watching the snake eat pixels on my screen, I couldn\'t stop thinking about what just happened — and what it means for everyone else.',
    content: `I made a snake game last week.

Not for a client. Not for a portfolio. I just sat down one evening, opened a terminal, described what I wanted to an AI, and twenty minutes later I had a working snake game running in my browser. Green snake, red apples, score counter, game over screen. The whole thing.

I showed it to my wife. She smiled, said "cool," and went back to her book. My daughter played it for three minutes, got bored, and asked for YouTube. Nobody cared.

And honestly — why would they? It's a snake game. The most basic game ever made. The original hello world of game development. Every CS student has built one. It's as remarkable as a paper airplane.

But I sat there after everyone went to bed, staring at this stupid snake eating pixels, and I could not shake the feeling that something enormous had just happened.

---

Here's the thing. I'm not a game developer. I've never written game logic. I don't know how collision detection works. I couldn't tell you the difference between a game loop and a for loop until recently. Making a snake game — even a simple one — would have taken me weeks of tutorials, Stack Overflow, and frustration. Weeks I never would have spent, because I had no reason to. It wasn't my craft.

But that evening, the distance between "what if I made a snake game" and "here is a snake game" was twenty minutes. Not twenty minutes of struggle. Twenty minutes of describing, adjusting, and watching it appear.

I've spent my career around this kind of shift. At LEGO, I watched injection moulding go from something only trained operators could run to something a designer could prototype on a desktop machine. With 3D printing, I watched manufacturing move from factory floors to kitchen tables. Each time, the same pattern: a capability that belonged to specialists became available to everyone. And each time, the people who already had the capability shrugged. Of course you can 3D print a bracket. So what?

The "so what" always comes later. It comes when a million people who never would have made that bracket start making things no specialist would have thought to make.

---

Nobody is impressed by a snake game. That's exactly the point.

When the first personal computers appeared, the demo was always something trivial. A calculator. A blinking cursor. Hello world. The people who already had mainframes didn't see the revolution. They saw a toy. A worse version of what they already had.

The revolution wasn't in the quality of what the computer could do. It was in who could do it.

My snake game is bad. A real game developer would look at my code and wince. The architecture is naive, the animation is choppy, the difficulty curve is nonexistent. By professional standards, it's worthless.

But I made it. Me — a product manager who thinks in roadmaps and user stories, not in rendering engines and sprite sheets. I had an idea at 9 PM and a working game by 9:20. Not a mockup. Not a wireframe. A thing that runs.

Scale that to every person who's ever had an idea for a game, an app, a tool, a toy — and didn't build it because they didn't know how. That's not a small number. That's most of humanity. We've been living in a world where digital creation was gated by technical skill, and that gate is swinging open.

---

I keep thinking about the gap between what people imagine and what they can make. For most of history, that gap was enormous. You could picture a cathedral in your mind, but without years of mastering stone and engineering, it stayed in your mind. The craft was the bottleneck. The medium was the gatekeeper.

Every major tool shift in human history has narrowed that gap. The printing press. The camera. The word processor. 3D printers. Each one took something that required deep specialisation and made it accessible to someone with the intent but not the training.

AI is doing this for software. For digital creation broadly. And the snake game is my proof of concept — not because the game matters, but because the act of making it matters. A non-developer sat down and shipped a working piece of software in twenty minutes by describing what he wanted in plain language.

Nobody around me noticed. My wife was kind. My daughter was bored. If I posted it online, no one would care. Another snake game in a world full of snake games.

But deep down, I know I just watched something crack open. The same way the first person to print a page at home knew — even if no one around them understood — that the world just changed.

The snake game is my hello world. And hello world was never about the program. It was about proving the machine works.

The machine works.`
  }
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
