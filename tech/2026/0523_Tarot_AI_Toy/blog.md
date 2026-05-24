# How We Made a Tarot AI Toy in One Day

On May 23, 2026, we built a small web toy for PhiloCoffee: [PhiloCoffee Tarot Studio](https://philocoffee.github.io/Magic_Tarrow/).

The idea was simple: turn a club question into a shared ritual. A user types a question, chooses a session flavor, draws one, three, or five cards, and receives a short reading that connects coffee, philosophy, and collective action. The finished tool supports English, Chinese, and Italian; light and dark modes; desktop and mobile layouts; custom card themes; and a GitHub Pages deployment.

This post is a record of the workflow. It is less about "tarot" as fortune telling and more about using AI as a fast prototyping partner for club culture, visual identity, and playful interaction.

## 1. Start From a Real Social Scene

The first design constraint was not technical. It was social.

We did not want a generic tarot app. We wanted something that could sit naturally inside PhiloCoffee: a club where coffee, philosophy, discussion, and campus life already overlap.

So the app started with questions like:

- What should our club notice before the next gathering?
- How can a card draw become a conversation starter?
- How can the output invite action instead of pretending to predict fate?

That gave us the shape of the interface: a question box, flavor choices such as Coffee / Philosophy / Community / Future, spread sizes, deck themes, and three output panels:

- **Reading**: the interpretation of the spread.
- **Brew Prompt**: a small hosting or discussion instruction.
- **Agora Note**: a closing action for the group.

The lesson: begin with the ritual you want people to have, then build the software around it.

## 2. Generate a Complete Visual World

The second step was building the card deck.

We used AI image generation to create 22 Major Arcana cards with a PhiloCoffee theme. Each card kept the structure of tarot but translated it into our club's vocabulary: cups, books, salons, campus paths, coffee tools, handwritten notes, and philosophical symbols.

Then we added two more visual layers:

- a **classic Rider-Waite-Smith** deck for comparison
- a **responsive PhiloCoffee background pack** with light and night styles for desktop and mobile

This mattered because the toy became more than a form. It had an atmosphere. The cards and backgrounds made the website feel like a small club object, not just a demo.

The practical trick was to keep the theme system flexible. Card themes live in a JSON registry, and each theme points to its own folder of images. That means future decks can be added without rewriting the app.

## 3. Build the Smallest Complete Static App

We chose plain HTML, CSS, and JavaScript.

That was deliberate. A toy that should be shared quickly does not need a backend, database, login system, or build pipeline. A static website is easier to debug, easier to host, and easier for club members to fork later.

The first version included:

- card drawing
- 1 / 3 / 5 card spreads
- themed reading text
- deck switching
- theme import through a JSON file
- copyable session summaries

Then we improved it through quick feedback:

- fixed Chinese / English switching
- added Italian
- translated the app title
- removed distracting statistic blocks
- added random upright / reversed card orientation
- fixed the classic deck image shape
- made card selection robust when a specific card image was added later

The workflow was conversational: build, look, notice what feels wrong, patch, verify, repeat.

## 4. Design for Phones Early

Once the desktop version worked, we asked: can this be used during an actual club gathering?

That meant phone support.

We added a local Wi-Fi preview script so the app could be opened from a phone while running on a laptop. Then we tested mobile layout directly from the computer using browser device emulation. The mobile version needed a different rhythm: controls first, cards clear, text blocks readable, and no tiny desktop-only layout assumptions.

This step changed the design. It forced us to stop thinking of the app as a screenshot and start thinking of it as a tool someone might hold in one hand while talking with friends.

## 5. Add Dark Mode and Backgrounds Without Killing Readability

The background pack had a beautiful paper texture, coffee plants, manuscript motifs, and black-gold night variants.

The first attempt almost hid the background behind the UI. We discovered the issue by debugging CSS layers: the fallback gradient sat above the actual background image, and the foreground panels were too opaque.

The fix was subtle:

- put the selected background artwork above the fallback gradient
- keep a light readability wash on top
- make the main workspace, sidebar, inputs, and reading panels translucent
- reduce backdrop blur so the texture stayed visible

This was a good reminder that visual debugging is often layer debugging. If an image "does not show," it may be loaded perfectly and simply covered by a well-intentioned design layer.

## 6. Package It for the Web

Because the app is static, GitHub Pages was the natural deployment target.

We packaged it with:

- `.nojekyll` so GitHub Pages serves files directly
- a GitHub Actions Pages workflow
- relative asset paths so the app works under `/Magic_Tarrow/`
- a `manifest.webmanifest`
- a service worker for lightweight PWA behavior
- an SVG icon

Now the app can live at:

[https://philocoffee.github.io/Magic_Tarrow/](https://philocoffee.github.io/Magic_Tarrow/)

We also added a redirect page on the main club website:

[https://philocoffee.github.io/tarot/](https://philocoffee.github.io/tarot/)

That small connection matters. A toy becomes more real when it is part of the club's public website instead of floating alone in a repository.

## 7. Reduce the Load

The generated PhiloCoffee cards were large PNG files. The set looked good, but it was too heavy for a phone-first web toy.

So we created JPEG delivery copies for the PhiloCoffee cards and backgrounds. The referenced PhiloCoffee visual assets dropped from about 85.6 MB to about 11.8 MB. The original PNG files remain in the repository as source material, while the GitHub Pages workflow removes the unreferenced source PNGs from the deployed artifact.

This is a useful pattern for club projects:

- keep high-quality source files in the repo when useful
- serve lighter files to visitors
- make the deploy workflow protect the public site from unnecessary weight

## 8. What AI Was Good At

AI helped most in four places:

- turning a vague idea into a concrete interface
- generating a large coherent image set
- iterating quickly on language and tone
- helping package the project for deployment

But the human decisions still mattered:

- choosing the club ritual
- deciding what felt too generic
- spotting broken translation and visual issues
- asking for mobile, dark mode, and homepage integration
- judging when the UI felt like PhiloCoffee

The best workflow was not "ask AI to make everything." It was closer to pair work: the human kept taste, context, and direction; the AI kept momentum.

## 9. The One-Day Recipe

If another club wants to make a similar AI toy in one day, this is the recipe:

1. Pick a real group ritual.
2. Define the smallest complete interaction.
3. Generate or collect a coherent visual asset set.
4. Build a static HTML / CSS / JS prototype.
5. Add flexible data files for future themes.
6. Test language, mobile, and dark mode early.
7. Optimize images before publishing.
8. Deploy on GitHub Pages.
9. Link it from the club homepage.
10. Write down the workflow so the next project starts faster.

The result does not need to be a polished product in the commercial sense. It needs to be alive enough that people can use it, react to it, and imagine the next version.

That is a good standard for a club toy: small, situated, shareable, and a little strange in the right way.

Try it here:

[PhiloCoffee Tarot Studio](https://philocoffee.github.io/Magic_Tarrow/)
