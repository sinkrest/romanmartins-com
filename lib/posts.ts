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
    slug: 'the-forkable-factory',
    title: 'The Forkable Factory',
    date: '2026-04-09',
    readingTime: '6 min read',
    excerpt: 'I was standing in a LEGO factory when I first saw a 3D printer work. That moment quietly shaped the next ten years of my life – and I think I\'m having it again.',
    content: `I was standing in a LEGO factory when I first saw a 3D printer work.

I was still a student. The factory was what you'd expect. Enormous injection moulding machines. Tool steel cut to tolerances I couldn't picture in my head. Millions of identical parts flying down conveyors. The whole place was built on one unshakeable idea – if you wanted a physical object, you made a mould, and the mould made the object. That was the law.

Somewhere in that same building, I saw a small machine slowly extruding plastic in thin layers, building a shape that had existed only as a file a minute ago.

I don't know if anyone else in the room felt it. For me, something cracked. I had been conditioned – by school, by the factory, by the whole industrial logic I walked through every day – to believe that physical objects came from tools. Steel, pressure, committees, specialists, months of lead time. And suddenly, here was a machine on a desk that could make an object without any of that. No mould. No setup. You pressed a button and a thing appeared.

That moment quietly shaped the next ten years of my life.

---

I chased it. I left moulding and started a small 3D printing company. I became obsessed with cutting out whatever part of the process was still slow. 3D modelling was slow, so I started using scanners – point a sensor at a physical object, digitise it in minutes, print it back out in a slightly new form. Another gate gone. Another layer of "only specialists can do this" falling away.

A few years later I ended up building something that would have been unthinkable when I started. A small team, a pile of AI tools, and a workflow that could turn a child into the hero of their own custom-written, custom-illustrated, printed and shipped storybook. Every child a hero of their own story. Five years earlier, that required a publisher, an illustrator, a print run, a distributor. Five years later, three people and a laptop could do it for one specific kid in one specific family.

Every time, the same pattern. A capability that used to require a large organisation collapsed into something a small group, or even one person, could do. The tools changed. The impulse stayed. You saw the thing that didn't exist yet, and you built it.

I've been living inside this pattern my whole adult life.

---

Now I'm living inside a new version of it.

For months I've been spending my mornings inside a folder on my laptop that behaves less like a project and more like a collaborator. It reads context files at the start of every session. It runs commands I designed. It remembers things I wrote months ago. When I tell it to go screen the sources, it knows which sources, what filters, where the output goes. It's not an assistant. It's closer to a personal operating system – an agentic environment where the unit of work is the folder, not the task.

I use it for knowledge work. And I keep catching myself thinking: I've seen this shape before.

---

Here's the part I find harder to talk about.

I think about people I've worked with over the years. Engineers with twenty, thirty, forty years of experience. The ones who carry the tribal knowledge of a product nobody ever wrote down. Why that supplier was chosen in 2009. Why that tolerance is tighter than the spec actually requires. Which parts of the compliance matrix are load-bearing and which are cruft from a regulation that changed eight years ago.

Some of them don't have a decade of working years left. And looking around, there isn't exactly a line of fresh engineers waiting to receive what they know. Getting qualified new people into industrial product development is hard. Keeping them is harder. A generation of quiet, hard-won knowledge is walking toward the door, and most organisations haven't built the thing that catches it.

I feel something about this I don't quite have a word for. Not nostalgia. Closer to fear, mixed with a stubborn sense that there's a way through.

Because if the pattern I've been living really is real – if capabilities keep collapsing from large organisations into small teams – then the same collapse is coming for product development itself. And if it's coming anyway, I'd rather help shape what it looks like.

---

Here is the thesis, as cleanly as I can say it.

Physical products should be developed the way software is. Context-engineered. Agent-assisted. Version-controlled. Fork-first. Built in public.

The spec, the BOM, the supplier network, the compliance matrix, the stage-gate, the test protocols, the tribal knowledge – all of it should live as structured files inside a repo an agent can read, reason over, and act inside of. The binder on the shelf becomes a git history. The retiring engineer's knowledge becomes context that outlives him. The handover becomes a clone.

And then – this is the part that still feels slightly insane when I say it out loud – the whole thing becomes forkable. You take someone else's industrial product, clone the repo, modify it for your market, let the agents reason over the new constraints, generate the updated compliance dossier, ship the parts through a distributed manufacturing API, and have a physical thing in your hands in weeks instead of years.

I call it the forkable factory. Not because it's a finished idea. Because it's the name I'm putting on a pattern I can't stop seeing.

---

The uncomfortable part of product development today is how much of the job is fighting the fragmentation itself. Twenty different tools. Spec in Word. BOM in Excel. Compliance in PDF. Suppliers in email threads. CAD in one system, tests in another, decisions in a meeting nobody took notes in. The cognitive load of holding it all together in your head is enormous. The waste is real – time, money, materials, and the quiet tax of every small error compounding down the line.

I'm not saying the forkable factory arrives tomorrow. I'm saying three ingredients are already on the table. Agentic development environments, where a folder becomes a reasoning substrate an agent can live inside. Distributed manufacturing APIs, where Xometry and Protolabs and Hubs have quietly turned the physical supply chain into something closer to a curl request. And compliance as code – standards as structured files, test protocols as executable scripts – early, ugly, real. None of them finished. All of them converging. Nobody has stirred them together yet.

---

Ten years from now, I think every serious physical product on earth will have a public, forkable, agent-native development repo. I think three-person teams will ship regulated hardware from bedrooms. I think the knowledge that used to walk out the door with a retiring engineer will live in files that survive him. I think "sovereign product development" – one small team, one country, no permission, a real industrial thing – will stop being a fantasy and start being a Tuesday.

I might be wrong about the timeline. I don't think I'm wrong about the direction. I've watched this pattern repeat three times already.

---

So here's what I'm doing about it.

I'm building a reference implementation. Not a product, not a startup, not a pitch deck. A real repo with a real fake industrial product inside – spec, BOM, suppliers, compliance, stage-gate, test protocols, agents that reason across all of it. I want to see what breaks first. I want to see which parts of the dream are ready and which parts are still science fiction. I want to publish the whole thing in public and let people tear it apart.

I'm going to write build logs. Messy ones. The kind where I admit what didn't work this week and what I changed my mind about. The maker movement was built on build logs, not whitepapers. I'd like to honour that.

And I'm looking for fellow weirdos. The people who've stood on a factory floor and also know what a context file is. The engineers who've managed a BOM and also shipped an agent. The hardware hackers who've looked at an agentic OS and quietly thought: wait, couldn't you point this at a product instead of a codebase?

If that describes you, I'd like to know you exist.

---

I don't have a clean ending for this. I don't think the idea is clean yet.

What I have is a memory of standing in a LEGO factory as a student, watching a machine make something without a mould, and feeling the ground shift under me. I didn't understand it then. I just knew the rules I'd been taught had a crack in them.

I've felt that three times now. Each time I chased it. Each time the tools got smaller, the teams got smaller, and the things we could build got bigger.

I'm feeling it again. I don't fully understand this one yet either. But I know what the crack looks like by now.

The material is changing. It always does. The impulse doesn't.

Build the thing. Show the work. Let it fork.`
  },
  {
    slug: 'the-quiet-ones',
    title: 'The Quiet Ones',
    date: '2026-04-06',
    readingTime: '5 min read',
    excerpt: 'The people who best understand how AI works in the real world are the ones least likely to tell you about it. That\'s a problem. And an opportunity.',
    content: `A few weeks ago I was on a call with a recruiter. She was filling an AI product role for a manufacturing company – the kind of company that makes real things, ships them in trucks, and measures quality in microns. She told me something that stuck.

"We get two hundred applications from people with 'AI' in their LinkedIn headline. Most of them have never set foot on a production floor. The people we actually want – the ones who understand manufacturing AND can think about AI implementation – they don't apply. They don't even know we're looking for them."

I knew exactly who she was talking about. I used to work with those people.

---

At LEGO, the people who ran the factory floor were not on LinkedIn. They were not building personal brands. They were not posting thought leadership about Industry 4.0. They were solving problems that most tech people don't know exist – problems like why a mould tool running at 210 degrees produces a part that's 0.03mm out of spec when the ambient humidity crosses 65%.

These people had what I'd call deep operational intelligence. Not the kind you put on a slide deck. The kind that lives in your hands and your instincts. They understood systems – real, physical systems with feedback loops, failure modes, tolerances, and consequences. If something went wrong, a customer got a defective product. If something went really wrong, a machine hurt someone.

That kind of knowledge doesn't translate well into a LinkedIn summary. "Managed injection moulding operations for 15 years" doesn't trend. It doesn't get reshared. It doesn't have a hook.

But here's what's strange. That knowledge is now arguably the most valuable thing in AI.

---

Everyone in tech is talking about AI agents, autonomous systems, AI in production. But "production" in tech usually means a server somewhere processing requests. In manufacturing, production means a physical line running 24 hours, where a 30-second delay costs thousands of euros and a bad decision can shut down a factory for a week.

The gap between what AI can theoretically do and what it can reliably do in a physical environment – that gap is enormous. And the people who understand that gap aren't the ones building AI models. They're the ones who've spent decades managing the environment where those models would need to work.

I think about this a lot now that I've moved from the factory floor to AI product work. The skills that made someone a great manufacturing leader – systems thinking, tolerance for ambiguity, obsession with failure modes, the ability to optimise a process that has a hundred interacting variables – these are exactly the skills that AI implementation needs. Not prompt engineering. Not knowing which model has the best benchmark score. The ability to look at a system and ask: where does this break? What happens when it's wrong? How do we know?

Manufacturing trained people to think that way for generations. And now the market is desperate for it – but looking in all the wrong places.

---

There's a deeper thing here about what "personal brand" means and who it was designed for.

The entire concept of personal branding grew up in the knowledge economy. It rewards people who produce visible, shareable, digital output. Writers, designers, developers, marketers – people whose work lives on screens. The system is perfectly optimised for people who already speak the language of the internet.

Manufacturing leaders don't. Their work lives in factories, in supply chains, in quality systems. Their output is a product on a shelf, not a post on a feed. They built their reputations through decades of consistent, quiet competence. In their world, the best compliment was that the line ran smoothly and nobody noticed.

Now the market is telling them: you need to be visible. You need to articulate your value. You need to show up where the hiring managers are scrolling. And for most of them, that feels deeply uncomfortable. Not because they lack confidence – but because their entire career rewarded the opposite behaviour.

The irony is sharp. The people most capable of solving AI's hardest implementation problems are the least visible in the market that's looking for them. They're not invisible because they have nothing to say. They're invisible because the system that surfaces talent was never built for how they work.

---

I'm not going to tell manufacturing leaders to start posting on LinkedIn. That advice is everywhere and it misses the point.

What I will say is this: the market is shifting underneath you faster than it looks. Companies that used to hire "digital transformation" consultants are now hiring AI implementation leads. The job descriptions are new, but the problems are old – how do you integrate a new technology into an existing operation without breaking what works? How do you manage a system that's partially autonomous? How do you build trust in a tool that's probabilistic?

You've been solving versions of these problems your entire career. You just called them something different.

The question isn't whether you're qualified. You are – probably more than most people applying with "AI strategist" in their title. The question is whether you'll make yourself findable before the window closes. Because right now, the market is wide open for people who understand both the physical and the digital. That won't last. Eventually the AI-native generation will learn enough about operations to fill the gap from the other side.

But right now, today, the quiet ones have an advantage that nobody else can fake: they actually know how things work.

---

I think the best personal brand isn't a brand at all. It's proof of work. It's building something that shows how you think, not just what you've done. A tool. A framework. A case study. Something someone can look at and immediately understand: this person knows what they're talking about.

That's how it worked on the factory floor. You didn't tell people you were good. You showed them a part that ran at zero defects for six months. The evidence was the work.

The material changed. The principle didn't. You don't need a brand. You need a body of work that speaks in a language the new market understands.

The quiet ones have always known that. They just need to build where people can see.`
  },
  {
    slug: 'the-personal-os',
    title: 'The Personal OS',
    date: '2026-03-23',
    readingTime: '4 min read',
    excerpt: 'I spent a decade shaping plastic at LEGO. Now I shape prompts. The material changed – the impulse didn\'t. But something bigger is happening.',
    content: `I spent ten years at LEGO. Not designing sets – working with the material itself. Polymers. Injection moulding. The physics of how melted plastic flows into a mould and becomes something a kid picks up and never puts down.

You develop a feel for it. Not just the science – the craft. You learn that a 0.02mm difference in a mould wall changes how the part ejects. You learn to read a machine by its sound. After enough years, the tools become invisible. You stop thinking about the process and start thinking through it.

When I left LEGO and started a 3D printing company, people said it was a big leap. It didn't feel like one. Same logic – material goes in, object comes out. The loop just got shorter. Instead of months from design to production part, it was hours. The machine sat on my desk instead of filling a factory hall.

Then I built an AI-powered children's book product. Custom stories, custom illustrations, printed and shipped. Another step removed from the physical. But the pattern was the same: understand the material, shape it, ship something real.

Now I spend my mornings in a terminal. Not writing code in the traditional sense – more like directing it. I describe what I want, an AI builds it, I shape the output, deploy it, and move on to the next thing. Last month I shipped six tools in three weeks. Not prototypes. Working products, live on the internet, doing useful things.

---

Here's what I keep thinking about.

Every tool I've ever used – the injection moulding machines, the 3D printers, the design software, the code editors – they were all generic. Built for everyone, configured for no one. You adapted yourself to the tool. Learned its interface, its quirks, its constraints. The tool didn't know you.

That's changing.

Right now, I have a workspace where an AI reads my context files at the start of every session. It knows what I'm building, what I've shipped, what's next. It runs commands I designed. It follows patterns I set. When I say "screen the feed," it knows what sources to check, what filters to apply, and where to put the output.

This isn't an app. It's not a SaaS product I'm subscribing to. It's closer to what I'd call a personal operating system – a layer between me and the digital world that's shaped around how I think and work.

And I think this is where everything is heading.

Not the metaverse. Not another platform. Something quieter and more fundamental: the interface itself becoming personal. Your tools knowing your context. Your workflows encoding your judgement. The gap between intention and execution collapsing – not because the AI is smarter, but because it's yours.

I think about the LEGO factory floor sometimes. Every operator had their station set up differently. Same machines, same moulds, but the experienced ones had arranged everything – the tools, the inspection lights, the reject bins – in a way that matched how they moved. Their workspace was an extension of how they thought.

We're about to have that digitally. Not a shared operating system that millions of people use the same way, but personal systems that evolve around individual people. Your AI doesn't just answer questions – it maintains your projects, remembers your preferences, runs your daily operations. It becomes the workshop, arranged around you.

The material changed – plastic, filament, pixels, prompts. The impulse didn't. You see something that doesn't exist yet, and you build it.

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
    excerpt: 'I made a snake game last week. Nobody cared. But sitting there watching the snake eat pixels on my screen, I couldn\'t stop thinking about what just happened – and what it means for everyone else.',
    content: `I made a snake game last week.

Not for a client. Not for a portfolio. I just sat down one evening, opened a terminal, described what I wanted to an AI, and twenty minutes later I had a working snake game running in my browser. Green snake, red apples, score counter, game over screen. The whole thing.

I showed it to my wife. She smiled, said "cool," and went back to do her own things. My kids couldnt care less. Nobody cared.

And honestly – why would they? It's a snake game. The most basic game ever made. The original hello world of game development. Every CS student has built one. It's as remarkable as a paper airplane.

But I sat there after everyone went to bed, staring at this stupid snake eating pixels, and I could not shake the feeling that something enormous had just happened.

---

Here's the thing. I'm not a game developer. I've never written game logic. I don't know how collision detection works. I couldn't tell you the difference between a game loop and a for loop until recently. Making a snake game – even a simple one – would have taken me weeks of tutorials, Stack Overflow, and frustration. Weeks I never would have spent, because I had no reason to. It wasn't my craft.

But that evening, the distance between "what if I made a snake game" and "here is a snake game" was twenty minutes. Not twenty minutes of struggle. Twenty minutes of describing, adjusting, and watching it appear.

I've spent my career around this kind of shift. At LEGO, I watched injection moulding go from something only trained operators could run to something a designer could prototype on a desktop machine. With 3D printing, I watched manufacturing move from factory floors to kitchen tables. Each time, the same pattern: a capability that belonged to specialists became available to everyone. And each time, the people who already had the capability shrugged. Of course you can 3D print a bracket. So what?

The "so what" always comes later. It comes when a million people who never would have made that bracket start making things no specialist would have thought to make.

---

Nobody is impressed by a snake game. That's exactly the point.

When the first personal computers appeared, the demo was always something trivial. A calculator. A blinking cursor. Hello world. The people who already had mainframes didn't see the revolution. They saw a toy. A worse version of what they already had.

The revolution wasn't in the quality of what the computer could do. It was in who could do it.

My snake game is bad. A real game developer would look at my code and wince. The architecture is naive, the animation is choppy, the difficulty curve is nonexistent. By professional standards, it's worthless.

But I made it. Me – a product manager who thinks in roadmaps and user stories, not in rendering engines and sprite sheets. I had an idea at 9 PM and a working game by 9:20. Not a mockup. Not a wireframe. A thing that runs.

Scale that to every person who's ever had an idea for a game, an app, a tool, a toy – and didn't build it because they didn't know how. That's not a small number. That's most of humanity. We've been living in a world where digital creation was gated by technical skill, and that gate is swinging open.

---

I keep thinking about the gap between what people imagine and what they can make. For most of history, that gap was enormous. You could picture a cathedral in your mind, but without years of mastering stone and engineering, it stayed in your mind. The craft was the bottleneck. The medium was the gatekeeper.

Every major tool shift in human history has narrowed that gap. The printing press. The camera. The word processor. 3D printers. Each one took something that required deep specialisation and made it accessible to someone with the intent but not the training.

AI is doing this for software. For digital creation broadly. And the snake game is my proof of concept - not because the game matters, but because the act of making it matters. A non-developer sat down and shipped a working piece of software in twenty minutes by describing what he wanted in plain language.

Nobody around me noticed. My wife was kind. My daughter was bored. If I posted it online, no one would care. Another snake game in a world full of snake games.

But deep down, I know I just watched something crack open. The same way the first person to print a page at home knew – even if no one around them understood – that the world just changed.

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
