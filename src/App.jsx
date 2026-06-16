import { useState } from "react";

const books = [
  {
    id: "striped",
    title: "The Boy in the Striped Pajamas",
    author: "John Boyne",
    genre: "Historical Fiction",
    lexile: "1080L",
    color: "#2C3E50",
    accent: "#E8C547",
    emoji: "📖",
    isbn: "9780385751063",
    summary: {
      overview:
        "Set during World War II, this novel follows nine-year-old Bruno, the son of a Nazi commandant who has been assigned to oversee a concentration camp. After his family relocates from their comfortable home in Berlin to a grim house near the camp — called 'Out-With' (Auschwitz) by Bruno — he is lonely and bored. Exploring forbidden territory, he befriends Shmuel, a Jewish boy his exact age who lives on the other side of a wire fence. Neither boy fully understands the horrific reality that separates them. The story builds to a devastating, ironic conclusion that reflects the senseless cruelty of hatred and genocide.",
      themes: [
        "Innocence and ignorance in the face of evil",
        "The power and limits of friendship across difference",
        "Prejudice, dehumanization, and their consequences",
        "Identity — who we are vs. who we are told we are",
        "The moral responsibility of ordinary people during atrocity",
      ],
      characters: [
        { name: "Bruno", role: "Protagonist — a naïve, curious 9-year-old German boy who sees the world as an adventure" },
        { name: "Shmuel", role: "Bruno's Jewish friend behind the fence — quiet, thin, and deeply sad, representing the victims of the Holocaust" },
        { name: "Father (Ralf)", role: "The Commandant — a cold, ambitious Nazi officer who values duty over family" },
        { name: "Mother", role: "Conflicted and increasingly disturbed by what she witnesses; represents moral unease" },
        { name: "Gretel", role: "Bruno's older sister who is gradually indoctrinated by Nazi ideology" },
        { name: "Lieutenant Kotler", role: "A cruel, fanatical young Nazi soldier who intimidates everyone, including Bruno" },
      ],
      setting: "Berlin and 'Out-With' (Auschwitz), Poland, during World War II, approximately 1942–1943.",
      literaryDevices: [
        { device: "Irony", example: "Bruno mispronounces names — 'Out-With' for Auschwitz, 'the Fury' for the Führer — showing his ignorance of the evil around him." },
        { device: "Point of View (Limited 3rd Person)", example: "We only know what Bruno knows, which creates dramatic irony — the reader understands the Holocaust's horror while Bruno does not." },
        { device: "Symbolism", example: "The fence represents the division between freedom and imprisonment, between the oppressor and the oppressed." },
        { device: "Foreshadowing", example: "Bruno's fascination with the people in 'striped pajamas' and his dangerous plan to go under the fence hint at the tragic ending." },
        { device: "Allegory", example: "The two boys — same birthday, same age — symbolize that children are born equal; it is society that creates division." },
      ],
      authorPurpose:
        "John Boyne uses a child narrator to make the horrors of the Holocaust accessible, while also critiquing how ordinary people — even children — can be shaped by their environment. The story forces readers to consider the consequences of complicity, silence, and blind obedience.",
    },
    questions: [
      {
        type: "Multiple Choice",
        skill: "Theme",
        staar: true,
        map: true,
        question:
          "Which theme is MOST strongly developed throughout the novel?",
        options: [
          "A. War always produces heroes and villains in equal measure.",
          "B. Friendship can exist even between people kept apart by hatred and injustice.",
          "C. Children should always obey their parents, no matter the circumstance.",
          "D. Adventure and exploration always lead to discovery.",
        ],
        answer: "B",
        explanation:
          "Bruno and Shmuel's friendship across the barbed wire fence is the novel's central relationship and drives its most important ideas about human connection despite systems of oppression.",
      },
      {
        type: "Multiple Choice",
        skill: "Point of View & Dramatic Irony",
        staar: true,
        map: true,
        question:
          "The author tells the story through Bruno's limited perspective. How does this narrative choice affect the reader's experience?",
        options: [
          "A. It prevents the reader from understanding the seriousness of the Holocaust.",
          "B. It allows the reader to know less than the characters in the story.",
          "C. It creates dramatic irony — the reader understands the danger that Bruno does not.",
          "D. It makes Bruno a more reliable narrator than an adult would be.",
        ],
        answer: "C",
        explanation:
          "Because we know what Auschwitz is while Bruno does not, Boyne creates dramatic irony — tension that comes from the gap between what the character knows and what the audience understands.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Character Analysis",
        staar: true,
        map: false,
        question:
          "Part A: What does Bruno's friendship with Shmuel reveal about his character?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. Bruno is selfish and uses Shmuel for entertainment.\nPart A — B. Bruno has genuine empathy that his upbringing has not yet destroyed.\nPart A — C. Bruno understands the difference between Jews and Germans.\nPart A — D. Bruno is afraid of his father and rebels through the friendship.\n\nPart B — A. Bruno brings Shmuel food and risks punishment to maintain their friendship.\nPart B — B. Bruno tells Lieutenant Kotler that he has never met Shmuel.\nPart B — C. Bruno complains that Out-With is boring and he misses Berlin.\nPart B — D. Bruno wants to explore the other side of the fence out of curiosity.",
        ],
        answer: "Part A: B | Part B: A",
        explanation:
          "Bruno's consistent effort to bring Shmuel food and his emotional distress when he betrays him (Part B option B) both point toward genuine empathy. The BEST evidence is the food — a deliberate, repeated act of care.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Textual Evidence & Inference",
        staar: true,
        map: false,
        question:
          "How does the setting of 'Out-With' influence Bruno's understanding of the world around him? Use evidence from the text to support your response.",
        options: [],
        answer:
          "Strong responses should: (1) identify that the isolated, unfamiliar setting limits Bruno's information, (2) note that he is told only what adults choose to share, and (3) use specific details — such as the fence, the striped pajamas, or what he observes from his bedroom window — as textual evidence.",
        explanation:
          "STAAR SCR responses are scored on clarity of claim, use of relevant textual evidence, and explanation of how the evidence supports the claim (RAC or RACES strategy).",
        strongExample: "In The Boy in the Striped Pajamas, Boyne uses the setting of Out-With to keep Bruno — and the reader — in a state of deliberate ignorance. Because Bruno is isolated from the outside world and told only what adults choose to share, he misinterprets everything he sees. For example, Bruno observes the people in 'striped pajamas' through his bedroom window and thinks they must live there by choice, never imagining the horror of what the camp actually is. This detail shows that the setting is not just a backdrop but a tool the author uses to control what Bruno — and through him, the reader — understands. The setting creates the novel's central dramatic irony: the reader slowly fills in the truth that Bruno can never quite see.",
        weakExample: "The setting of Out-With affects Bruno's understanding because it is in a different place than Berlin. Bruno doesn't know a lot about what is happening around him. The setting is important to the story.",
        weakFeedback: "This response loses points because it makes only vague, general claims with no specific textual evidence. Saying 'Bruno doesn't know a lot' restates the question without analyzing it. A strong response names a specific detail from the text and explains exactly how that detail reveals something about the setting's effect on Bruno's understanding.",
      },
      {
        type: "Multiple Choice",
        skill: "Figurative Language / Symbolism",
        staar: true,
        map: true,
        question:
          "The fence in the novel serves as a symbol. What does it MOST likely represent?",
        options: [
          "A. The physical danger of exploring new places",
          "B. The boundary between childhood and adulthood",
          "C. The divisions created by prejudice, power, and hatred",
          "D. Bruno's father's authority over the family",
        ],
        answer: "C",
        explanation:
          "The fence divides the free from the imprisoned, the oppressor from the oppressed. It is not just a physical barrier — it is the tangible form of Nazi ideology made real in Bruno's world.",
      },
      {
        type: "Multiple Choice",
        skill: "Author's Purpose",
        staar: true,
        map: true,
        question:
          "Why did the author most likely choose a nine-year-old boy as the narrator of a story about the Holocaust?",
        options: [
          "A. To show that children during WWII were unaffected by the conflict",
          "B. To use a child's innocent perspective to highlight the absurdity and horror of hatred",
          "C. To argue that children are better observers of history than adults",
          "D. To make the story appropriate for younger readers by avoiding difficult topics",
        ],
        answer: "B",
        explanation:
          "Boyne uses Bruno's innocence deliberately. A child who doesn't understand what he sees makes the horror more powerful, not less — because the reader fills in the gap between Bruno's confusion and the historical reality.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "In the novel, Lieutenant Kotler is described as 'fanatical' in his devotion to Nazi ideology. Based on context, what does 'fanatical' mean?",
        options: [
          "A. Reluctant and uncertain",
          "B. Casually interested but not committed",
          "C. Extremely and unreasonably devoted to a belief",
          "D. Openly critical of rules and authority",
        ],
        answer: "C",
        explanation:
          "'Fanatical' comes from the Latin word for temple, suggesting someone driven by almost religious passion. In context, Kotler is shown to be dangerously extreme in his beliefs — making C the only accurate match.",
      },
      {
        type: "Extended Constructed Response (ECR)",
        skill: "Theme + Textual Evidence + Writing",
        staar: true,
        map: false,
        question:
          "The author of The Boy in the Striped Pajamas suggests that ordinary people who remain silent or ignorant during injustice share responsibility for its consequences. Write a response in which you analyze how the novel develops this idea. Use specific evidence from the text to support your analysis.",
        options: [],
        answer:
          "Strong responses should: (1) State a clear, specific claim about the theme; (2) Identify at least two characters who represent silence/complicity (e.g., the Mother, Bruno himself when he denies knowing Shmuel); (3) Cite specific textual evidence for each; (4) Explain how each piece of evidence supports the claim; (5) Conclude with a statement about the broader significance of the theme.",
        explanation:
          "ECR responses are scored on thesis clarity, quality and integration of textual evidence, depth of analysis, and writing conventions. Aim for 3–5 developed paragraphs.",
        strongExample: "In The Boy in the Striped Pajamas, John Boyne argues that ordinary people who choose comfort over conscience bear responsibility for the evil that results. This theme is developed most powerfully through the Mother and Bruno himself. The Mother knows enough about the camp to be disturbed — she begins drinking and argues with the Father about returning to Berlin — yet she never acts on her moral discomfort. Her inaction is not ignorance; it is a choice. Bruno, too, chooses his own comfort when he denies knowing Shmuel to Lieutenant Kotler, sacrificing his friend to avoid punishment. Both characters represent the moral failure Boyne is warning against: awareness without action. The novel suggests that silence in the face of injustice is not neutrality — it is a form of participation.",
        weakExample: "The Boy in the Striped Pajamas shows that people should not be silent when bad things happen. Bruno and his family knew bad things were happening. They should have done something to help. This is why the theme of the book is about responsibility.",
        weakFeedback: "This response has a theme but no textual evidence and no analysis. It tells the reader what to think without proving it. A strong ECR identifies specific characters, cites specific moments from the text, and then explains — in analytical sentences, not summary — what those moments prove about the theme. The claim 'they should have done something' needs to become 'the Mother's choice to drink and argue privately rather than act publicly represents Boyne's argument that private moral discomfort without action is its own form of complicity.'",
        staar: true,
        map: true,
        question:
          "How does Gretel change over the course of the novel, and what does her transformation represent?",
        options: [
          "A. She becomes kinder and more compassionate as she matures",
          "B. She gradually adopts Nazi ideology, showing how propaganda shapes young minds",
          "C. She grows distant from her family because she misses Berlin",
          "D. She begins to question the war but keeps her doubts private",
        ],
        answer: "B",
        explanation:
          "Gretel begins as a typical older sister — bossy and self-absorbed — but progressively fills her bedroom walls with maps of Nazi territorial expansion and absorbs the ideology around her without question. Her transformation is not incidental; Boyne uses it to show how ordinary children become complicit in systems of hatred simply by absorbing what adults around them model and normalize.",
      },
      {
        type: "Multiple Choice",
        skill: "Irony — Situational",
        staar: true,
        map: true,
        question:
          "At the novel's end, Bruno dresses in striped pajamas and crawls under the fence to help Shmuel find his father. What type of irony does this moment create?",
        options: [
          "A. Verbal irony — Bruno says one thing but means another",
          "B. Situational irony — the outcome is the opposite of what Bruno and the reader hoped for",
          "C. Dramatic irony — only the reader knows Bruno is about to be harmed",
          "D. Comic irony — the situation is humorous despite seeming serious",
        ],
        answer: "B",
        explanation:
          "Situational irony occurs when events turn out opposite to what was expected or intended. Bruno's act of compassion — his most genuinely heroic moment — leads directly to his death. The boy whose innocence was meant to protect him is destroyed by the very system his father upholds. The outcome is the cruelest possible reversal of expectation.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "The novel describes the Commandant's new role at Out-With as one of great 'prestige.' Based on context, what does 'prestige' most likely mean?",
        options: [
          "A. Physical danger and personal sacrifice",
          "B. High status and the respect or admiration of others",
          "C. Financial reward given as payment for difficult work",
          "D. Loneliness that comes from being far from home",
        ],
        answer: "B",
        explanation:
          "In context, the Father's transfer to Out-With is framed by the Nazi regime as an honor — a sign of their trust in him. 'Prestige' refers to the admiration and elevated status associated with an important position. The bitter irony is that this 'prestigious' post is overseeing a death camp.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Character Analysis — The Mother",
        staar: true,
        map: false,
        question:
          "Part A: How does the Mother's attitude toward living at Out-With change as the novel progresses?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. She becomes increasingly enthusiastic about her husband's important role.\nPart A — B. She grows more distressed and morally troubled by what she witnesses at the camp.\nPart A — C. She remains indifferent and focused entirely on maintaining the household.\nPart A — D. She tries to convince her husband to resign but accepts his refusal peacefully.\n\nPart B — A. The Mother begins drinking more heavily and argues with the Father about returning to Berlin.\nPart B — B. The Mother decorates the Out-With house to make it feel like their Berlin home.\nPart B — C. The Mother tells Bruno that the people behind the fence are not their concern.\nPart B — D. The Mother praises Lieutenant Kotler's dedication to his duties.",
        ],
        answer: "Part A: B | Part B: A",
        explanation:
          "The Mother's increasing despair — signaled by her drinking and arguments with the Father about leaving — marks her as the character most visibly corroded by proximity to the camp's horrors. Unlike the Father, she cannot maintain comfortable distance from what she knows is happening. Her deterioration is Boyne's signal that moral awareness, even without action, has a cost.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Author's Craft — Allegory",
        staar: true,
        map: false,
        question:
          "Bruno and Shmuel share the same birthday and are described as mirror images of each other. How does this detail function as an allegory, and what idea does it communicate about the children on either side of the fence? Use evidence from the novel in your response.",
        options: [],
        answer:
          "Strong responses should: (1) Define or explain allegory as using specific details to represent a broader truth; (2) Explain that the boys' shared birthday and mirrored descriptions suggest they were born equal — that nothing inherent separates them; (3) Connect this to the novel's larger argument that the division between prisoner and free person is entirely man-made, not natural; (4) Cite the shared birthday or physical mirroring as specific textual evidence.",
        explanation:
          "SCR responses should use the RACES strategy and run 4–6 focused sentences. The key analytical move here is connecting a specific detail (shared birthday) to a larger thematic idea (the artificial nature of racial and social division).",
        strongExample: "In The Boy in the Striped Pajamas, Boyne uses the detail that Bruno and Shmuel share the same birthday as an allegory for the idea that no child is born deserving imprisonment or freedom — those fates are imposed by the society around them. The two boys are described in nearly identical terms: same age, same size, same sense of curiosity. This mirroring argues that the only thing separating Bruno from Shmuel is an accident of birth — which family they were born into, which side of the fence they appeared on. Boyne uses this allegory to show that the fence between them is not natural or inevitable; it is man-made, and therefore it is a moral choice, not a fact of nature.",
        weakExample: "Bruno and Shmuel share a birthday which is interesting because they are very different. One is free and one is not. This shows that life is not fair.",
        weakFeedback: "This response identifies the detail but doesn't explain what it means allegorically. 'Life is not fair' is too vague to score well — it's a feeling, not an analysis. A strong response explains the specific idea the allegory communicates: that the division between the boys is artificial and man-made, which is Boyne's moral argument about the Holocaust.",
      },
      {
        type: "Multiple Choice",
        skill: "Mood and Tone",
        staar: true,
        map: true,
        question:
          "How does the author establish a mood of unease and dread throughout the novel, even in scenes that appear calm?",
        options: [
          "A. By describing graphic scenes of violence at the concentration camp",
          "B. By using Bruno's innocent misunderstandings to hint at a danger the reader recognizes but Bruno does not",
          "C. By having adult characters openly discuss the horrors of the Holocaust with Bruno",
          "D. By including detailed historical facts about World War II in each chapter",
        ],
        answer: "B",
        explanation:
          "Boyne maintains dread not through explicit description but through dramatic irony. When Bruno cheerfully describes the 'striped pajamas' or mispronounces 'Auschwitz,' the reader's knowledge of what those words actually mean creates a persistent, quiet horror. The calm surface of Bruno's observations makes the underlying reality more disturbing, not less.",
      },
      {
        type: "Extended Constructed Response (ECR)",
        skill: "Character + Theme + Writing",
        staar: true,
        map: false,
        question:
          "Through the character of Lieutenant Kotler, John Boyne explores how ideology can dehumanize both its victims and those who enforce it. Write a response in which you analyze how Kotler's characterization develops this idea. Use specific evidence from the novel to support your analysis.",
        options: [],
        answer:
          "Strong responses should: (1) Open with a clear thesis connecting Kotler's character to the theme of ideology and dehumanization; (2) Analyze specific scenes — such as Kotler's treatment of Pavel, his interactions with Shmuel, or his behavior toward the household — as evidence; (3) Argue that Kotler's cruelty is not personal but systemic — he is what the Nazi ideology produced; (4) Consider how Bruno's discomfort around Kotler functions as a moral signal even before Bruno fully understands why; (5) Conclude by connecting this character study to the novel's broader warning about systems that normalize cruelty.",
        explanation:
          "ECR responses are scored on thesis strength, analytical depth, evidence integration, and writing conventions. Avoid summarizing what Kotler does — analyze what his characterization means and how Boyne uses him to develop the novel's themes.",
        strongExample: "Boyne uses Lieutenant Kotler to show that ideology, when it removes individual moral judgment, produces cruelty not as an exception but as a feature. Kotler does not appear cruel because of personal hatred — he is cruel because the system he serves demands and rewards it. When he humiliates Pavel or threatens Shmuel, he does so without visible emotion, as though it requires no thought. This is Boyne's point: the most dangerous evil is not passionate hatred but bureaucratic indifference. Even Bruno — a nine-year-old with no political understanding — feels something wrong about Kotler, and this discomfort is Boyne's signal that moral awareness is available even to children, if they choose to act on it. Kotler represents what happens when a person surrenders that awareness entirely to an ideology that tells them cruelty is duty.",
        weakExample: "Lieutenant Kotler is a mean character in the story. He is cruel to the Jewish people and also to Pavel. He represents the Nazis. Boyne includes him to show that bad people existed during the Holocaust.",
        weakFeedback: "This response summarizes Kotler's role but does not analyze it. Saying he 'represents the Nazis' is true but obvious — the analytical question is HOW and WHY Boyne characterizes him this specific way, and what that reveals about how ideology operates. A strong ECR moves from observation ('Kotler is cruel') to analysis ('Kotler's cruelty is effortless — which is Boyne's argument that systemic evil is most dangerous when it becomes routine and ordinary').",
      },
    ],
  },
  {
    id: "sge",
    title: "The School for Good and Evil",
    author: "Soman Chainani",
    genre: "Fantasy / Fairy Tale Retelling",
    lexile: "770L",
    color: "#4A235A",
    accent: "#A569BD",
    emoji: "🏰",
    isbn: "9780062104939",
    summary: {
      overview:
        "Every four years, two children are stolen from the village of Gavaldon and taken to the School for Good and Evil — a mysterious institution where future fairy-tale heroes and villains are trained. Sophie, a beautiful girl who dreams of becoming a princess, is certain she belongs in the School for Good. Her best friend Agatha, dark and strange and misunderstood, seems destined for Evil. But when they arrive, everything is reversed: Sophie is placed in the School for Evil, and Agatha in the School for Good. As both girls struggle to switch schools and reclaim their 'rightful' places, they begin to question everything they thought they knew about good, evil, beauty, and belonging. The novel ultimately argues that the line between good and evil is far more complicated — and far more personal — than fairy tales suggest.",
      themes: [
        "Appearances can be deceiving — true goodness and true evil are defined by choices, not looks",
        "Friendship and loyalty as forces more powerful than rivalry or competition",
        "The danger of vanity, selfishness, and the desire for power",
        "Identity — who we believe we are vs. who we actually are",
        "Subverting fairy-tale tropes: questioning 'happily ever after' and what it means to be a hero",
        "Belonging, self-acceptance, and embracing what makes you different",
      ],
      characters: [
        { name: "Sophie", role: "Co-protagonist — beautiful, vain, and obsessed with being a princess; placed in the School for Evil, which reveals uncomfortable truths about her true nature" },
        { name: "Agatha", role: "Co-protagonist — plain, kind, and loyal; placed in the School for Good, where she proves that virtue is about character, not appearance" },
        { name: "Tedros", role: "Prince Charming's son — handsome, proud, and conflicted; his evolving relationship with Agatha challenges his assumptions about what a hero should look like" },
        { name: "Professor Dovey", role: "Head of the School for Good — proper and principled, she represents the traditional rules of fairy-tale morality" },
        { name: "Lady Lesso", role: "Head of the School for Evil — sharp and ruthless, she sees something interesting in Sophie that others miss" },
        { name: "The School Master", role: "The mysterious figure who controls both schools — his true motivations are the novel's central mystery" },
      ],
      setting: "The magical village of Gavaldon and the twin Schools for Good and Evil — one gleaming and golden, one dark and decayed — in a fairy-tale world where stories are literally written into history.",
      literaryDevices: [
        { device: "Subversion / Parody of Genre", example: "The novel deliberately flips fairy-tale expectations — the 'pretty' girl ends up in Evil and the 'ugly' girl in Good — forcing the reader to question the assumptions built into classic stories." },
        { device: "Foil Characters", example: "Sophie and Agatha are foils: Sophie is beautiful but selfish; Agatha is plain but genuinely good. Their contrast drives every major conflict and theme." },
        { device: "Symbolism", example: "The two schools represent not just good vs. evil, but also society's tendency to judge by appearance — the gleaming School for Good is built on shallow standards." },
        { device: "Irony", example: "Sophie's desperate attempts to act 'good' often reveal her selfishness, while Agatha's instinct to help others shows real goodness without effort." },
        { device: "Foreshadowing", example: "Early clues about Sophie's vanity and Agatha's loyalty hint at where each girl truly belongs long before either character accepts it." },
        { device: "Motif", example: "Fairy-tale conventions (the prince, the princess, the wish, the test) appear throughout but are consistently twisted to challenge the reader's expectations." },
      ],
      authorPurpose:
        "Soman Chainani uses the structure of classic fairy tales to challenge their most dangerous messages — that beauty equals goodness, that princesses need rescuing, and that heroes and villains are born, not made. He wants readers to question inherited stories and think critically about what they truly value in themselves and others.",
    },
    questions: [
      {
        type: "Multiple Choice",
        skill: "Theme",
        staar: true,
        map: true,
        question:
          "Which statement BEST expresses a central theme of The School for Good and Evil?",
        options: [
          "A. Beauty and goodness always go together in the natural world.",
          "B. True good and evil are determined by a person's choices, not their appearance.",
          "C. Friendship is less important than following the rules of society.",
          "D. Heroes are born with special qualities that cannot be learned.",
        ],
        answer: "B",
        explanation:
          "The novel's entire premise subverts the fairy-tale assumption that beautiful = good and ugly = evil. Sophie and Agatha's reversed placements force both characters — and the reader — to reckon with what actually makes someone good or evil: their choices and values, not their looks.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Analysis — Foil",
        staar: true,
        map: true,
        question:
          "Sophie and Agatha function as foil characters. What is the PRIMARY purpose of using foil characters in a story?",
        options: [
          "A. To give the protagonist a companion who agrees with all of their decisions",
          "B. To create humor by making two characters act in identical ways",
          "C. To highlight each character's contrasting traits, making both more clearly defined",
          "D. To show that one character is superior to the other in every way",
        ],
        answer: "C",
        explanation:
          "A foil is a character whose contrasting traits highlight the qualities of another character. Sophie's vanity makes Agatha's selflessness stand out even more — and vice versa. Neither character would be as clearly defined without the contrast the other provides.",
      },
      {
        type: "Multiple Choice",
        skill: "Author's Craft — Genre Subversion",
        staar: true,
        map: true,
        question:
          "The author places Sophie — who looks like a fairy-tale princess — in the School for Evil, and Agatha — who looks like a villain — in the School for Good. What is the MOST LIKELY reason Chainani makes this choice?",
        options: [
          "A. To show that fairy-tale schools make frequent sorting mistakes",
          "B. To challenge the idea that appearance determines a person's character or worth",
          "C. To suggest that beautiful people are secretly always evil",
          "D. To make readers feel sorry for Sophie and root against Agatha",
        ],
        answer: "B",
        explanation:
          "This is the novel's central act of subversion. By reversing expectations from the very first chapter, Chainani signals to the reader that this story will question — not confirm — the shallow rules of traditional fairy tales. Appearance tells us nothing about character.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Character Motivation + Textual Evidence",
        staar: true,
        map: false,
        question:
          "Part A: What does Sophie's reaction to being placed in the School for Evil reveal about her character at the beginning of the novel?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. Sophie is humble and willing to learn from her mistakes.\nPart A — B. Sophie is self-aware and recognizes she has flaws to work on.\nPart A — C. Sophie is vain and concerned with how others perceive her rather than who she truly is.\nPart A — D. Sophie is brave and determined to prove the school wrong through hard work.\n\nPart B — A. Sophie immediately tries to understand the curriculum at the School for Evil.\nPart B — B. Sophie spends her early days at Evil obsessing over her appearance and insisting there has been a mistake.\nPart B — C. Sophie forms a genuine friendship with her Evil classmates to learn from them.\nPart B — D. Sophie accepts Lady Lesso's guidance and works to improve herself.",
        ],
        answer: "Part A: C | Part B: B",
        explanation:
          "Sophie's first instinct is not self-reflection — it is denial and image-management. She insists the sorting is wrong because she cannot imagine that her beautiful exterior could be hiding anything less than goodness. This is precisely what makes her a compelling character study in vanity.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "In the novel, Agatha is described as someone who 'subverts' expectations at every turn. Based on context clues, what does 'subvert' most likely mean?",
        options: [
          "A. To strengthen and reinforce what is already expected",
          "B. To undermine or overturn something established or assumed",
          "C. To carefully follow all rules and traditions",
          "D. To ignore a situation completely without reacting",
        ],
        answer: "B",
        explanation:
          "'Subvert' comes from Latin meaning to overturn from below. In context, Agatha consistently acts in ways that contradict what people expect from someone who looks like her — she is kind when expected to be cruel, brave when expected to fail. This is confirmed by the surrounding text whenever her actions surprise other characters.",
      },
      {
        type: "Multiple Choice",
        skill: "Symbolism",
        staar: true,
        map: true,
        question:
          "In the novel, the School for Good is described as gleaming and golden, while the School for Evil is dark and decayed. What do these contrasting descriptions MOST likely symbolize?",
        options: [
          "A. That good and evil are easy to identify in real life",
          "B. Society's tendency to value surface beauty over inner character — and the novel's challenge to that belief",
          "C. That students in the School for Good are always treated fairly",
          "D. The different climates found in magical versus ordinary worlds",
        ],
        answer: "B",
        explanation:
          "The schools look exactly as society expects — beautiful = good, ugly = evil. But the novel systematically shows that these appearances are misleading. The gleaming School for Good enforces shallow standards; the dark School for Evil holds complex, interesting characters. The contrast is ironic, not literal.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Theme + Textual Evidence",
        staar: true,
        map: false,
        question:
          "How does the friendship between Sophie and Agatha develop a theme about what truly matters in a person? Use evidence from the novel to support your response.",
        options: [],
        answer:
          "Strong responses should: (1) State a clear theme — e.g., true friendship is based on loyalty and genuine care, not shared beauty or social status; (2) Explain how Agatha's loyalty to Sophie (even when Sophie treats her poorly) and Sophie's eventual recognition of Agatha's value develops that theme; (3) Include at least one specific detail from the text as evidence; (4) Explain how the evidence connects back to the theme.",
        explanation:
          "Use the RACES strategy: Restate the question, Answer with your claim, Cite a specific detail, Explain how it supports your claim, and Summarize the connection to theme. SCR responses should be 4–6 focused sentences.",
        strongExample: "In The School for Good and Evil, Chainani develops the theme that true friendship is defined by loyalty regardless of circumstances, through Agatha's repeated choice to prioritize Sophie over her own comfort and social standing. Even after Sophie dismisses and belittles her, Agatha continues trying to help her — not because Sophie deserves it, but because Agatha's care is unconditional. This one-sided loyalty is the novel's most powerful argument about what friendship actually looks like: not a balanced transaction between equals, but a commitment that holds even when the other person fails you. Chainani uses Agatha's consistent returns to Sophie's side as evidence that real friendship is defined not by what you receive, but by what you choose to give.",
        weakExample: "Agatha and Sophie have a strong friendship because Agatha always helps Sophie. This shows that true friends stick together no matter what. Their friendship is important to the story.",
        weakFeedback: "'True friends stick together' is a cliché, not a theme analysis. A strong SCR names a specific moment of loyalty, explains what that moment demonstrates about the nature of real friendship, and connects it to an idea Chainani is developing — not just restating that friendship is good. The analytical move is: what does Agatha's unconditional loyalty cost her, and what does Chainani argue about friendship through that cost?",
      },
      {
        type: "Multiple Choice",
        skill: "Point of View & Narrative Structure",
        staar: true,
        map: true,
        question:
          "The novel is told in third-person limited perspective, following Sophie and Agatha in alternating sections. How does this narrative structure MOST affect the reader's understanding of the story?",
        options: [
          "A. It makes it impossible to understand either character's motivations",
          "B. It allows the reader to see both girls' inner thoughts and sympathize with each of their struggles",
          "C. It makes Sophie appear more sympathetic because her chapters come first",
          "D. It prevents the reader from knowing what happens in each school",
        ],
        answer: "B",
        explanation:
          "By giving both Sophie and Agatha interior chapters, Chainani makes sure the reader understands each girl's fears, desires, and logic — even when they are wrong or selfish. This prevents the story from being a simple 'root for Agatha' experience and creates genuine complexity in both characters.",
      },
      {
        type: "Multiple Choice",
        skill: "Conflict — Internal vs. External",
        staar: true,
        map: true,
        question:
          "Which statement BEST describes the relationship between Sophie's internal and external conflicts in the novel?",
        options: [
          "A. Sophie's external conflict with the School for Evil is entirely separate from any internal struggle she faces.",
          "B. Sophie's internal conflict — her refusal to accept her true nature — drives and intensifies every external conflict she encounters.",
          "C. Sophie's external conflict is resolved when she switches schools, ending her internal struggle as well.",
          "D. Sophie's internal conflict is caused entirely by Agatha's presence at the school.",
        ],
        answer: "B",
        explanation:
          "Sophie's core internal conflict is her inability to acknowledge the selfish, vain person she actually is. This refusal to self-reflect is exactly what makes every external situation worse — she manipulates, lies, and schemes because she cannot accept that her placement in Evil might be correct. The internal and external conflicts are inseparable; resolving one requires resolving the other.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "The novel describes the School Master as 'enigmatic.' Based on context clues, what does 'enigmatic' most likely mean?",
        options: [
          "A. Friendly and approachable, putting others at ease",
          "B. Cruel and openly threatening to everyone around him",
          "C. Mysterious and difficult to understand or predict",
          "D. Wise and all-knowing, with clear and stated intentions",
        ],
        answer: "C",
        explanation:
          "'Enigmatic' shares a root with 'enigma,' meaning a puzzle or mystery. In context, the School Master's true motivations and loyalties are never fully clear — students and teachers alike cannot predict or fully understand him. The surrounding scenes, in which characters speak about him in hushed, uncertain terms, confirm this meaning.",
      },
      {
        type: "Multiple Choice",
        skill: "Setting — Function and Meaning",
        staar: true,
        map: true,
        question:
          "How does the setting of the two schools function beyond simply providing a physical location for the story?",
        options: [
          "A. The schools exist only to separate the main characters and create logistical conflict.",
          "B. The schools embody the novel's central argument about how society sorts people into categories based on surface-level judgments.",
          "C. The schools demonstrate that magical worlds operate by completely different rules than the real world.",
          "D. The schools serve primarily to introduce a large number of supporting characters.",
        ],
        answer: "B",
        explanation:
          "The schools are not just locations — they are the novel's central symbol. The sorting system, the physical appearance of each campus, and the rules students must follow all externalize the way society categorizes people based on looks and assumptions. Chainani makes the setting do thematic work: every detail of the schools reinforces and then challenges the idea that good and evil are visible, sortable categories.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Theme — Friendship vs. Self-Interest",
        staar: true,
        map: false,
        question:
          "Part A: How does Agatha's loyalty to Sophie develop a theme about the nature of true friendship?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. True friendship requires both people to be equally talented and successful.\nPart A — B. True friendship means standing by someone even when they treat you poorly or take you for granted.\nPart A — C. True friendship only survives when both people share the same goals and values.\nPart A — D. True friendship requires the friends to be placed in the same school or social group.\n\nPart B — A. Agatha continues trying to help Sophie even after Sophie repeatedly dismisses, belittles, or betrays her trust.\nPart B — B. Agatha agrees with every decision Sophie makes because she values keeping the peace.\nPart B — C. Agatha leaves Sophie behind once she finds friends in the School for Good.\nPart B — D. Agatha only helps Sophie because she wants to return to Gavaldon herself.",
        ],
        answer: "Part A: B | Part B: A",
        explanation:
          "The novel consistently shows Agatha choosing Sophie's wellbeing over her own comfort or social standing — even when Sophie is at her most selfish and cruel. This one-sided loyalty is not presented as weakness; it is presented as the most powerful force in the story. The textual evidence is Agatha's repeated returns to Sophie's side after being pushed away.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Character Change — Sophie",
        staar: true,
        map: false,
        question:
          "How does Sophie change — or fail to change — over the course of the novel, and what does this reveal about the novel's message regarding self-awareness? Use evidence from the text in your response.",
        options: [],
        answer:
          "Strong responses should: (1) Acknowledge that Sophie undergoes some change — she glimpses moments of genuine connection and doubt — but largely resists full self-awareness throughout Book 1; (2) Explain that her resistance to change is itself a thematic statement: true growth requires honest self-reflection, which Sophie avoids; (3) Cite at least one specific moment where Sophie has the opportunity to change and chooses vanity or self-interest instead; (4) Connect this to the novel's larger theme about the relationship between self-knowledge and genuine goodness.",
        explanation:
          "This question targets character change — a high-frequency STAAR skill. Strong responses avoid simply summarizing what Sophie does and instead analyze what her behavior pattern reveals. Use RACES and aim for 4–6 sentences.",
        strongExample: "In The School for Good and Evil, Sophie's resistance to genuine self-awareness reveals Chainani's message that true growth requires honest self-reflection — and that some people choose comfort over truth. Though Sophie has moments where she glimpses the gap between who she believes she is and who she actually is, she consistently chooses to reframe those moments as injustice rather than insight. For example, when her Good-like instincts occasionally surface, she quickly redirects them toward self-interest, as if kindness is only valuable if it earns her the outcome she wants. This pattern — awareness followed by avoidance — is itself the novel's argument: Sophie cannot grow because she will not look at herself clearly.",
        weakExample: "Sophie changes a little bit throughout the story but not very much. She still wants to be in the School for Good at the end. She is a complicated character because she does some good things and some bad things.",
        weakFeedback: "This response describes Sophie without analyzing her. 'She does some good things and some bad things' is an observation, not a claim. A strong SCR makes a specific argument — for example, that Sophie's pattern of awareness-then-avoidance is itself the thematic statement — and supports it with a specific moment from the text."
      },
      {
        type: "Multiple Choice",
        skill: "Foreshadowing",
        staar: true,
        map: true,
        question:
          "Early in the novel, Agatha instinctively acts to protect others — including Sophie — without being asked or rewarded. How does this pattern of behavior function as foreshadowing?",
        options: [
          "A. It foreshadows that Agatha will eventually become the head of the School for Evil.",
          "B. It foreshadows that Agatha's natural instinct toward others is genuine goodness, making her placement in Good inevitable.",
          "C. It foreshadows that Agatha will eventually betray Sophie when the pressure becomes too great.",
          "D. It foreshadows that the School for Good will reject Agatha once they discover her background.",
        ],
        answer: "B",
        explanation:
          "Foreshadowing plants clues early that pay off later. Agatha's protective instincts — helping animals, defending the vulnerable, staying loyal without expectation of reward — are all early signals that she belongs in the School for Good, regardless of her appearance. The sorting system confirms what the reader already sensed from Agatha's established behavioral pattern.",
      },
      {
        type: "Extended Constructed Response (ECR)",
        skill: "Comparative Character Analysis + Writing",
        staar: true,
        map: false,
        question:
          "Compare how Sophie and Agatha each respond to being placed in an unexpected school. In a well-developed response, analyze what each character's reaction reveals about her true character, and explain how this contrast develops a central theme of the novel. Use specific evidence from the text to support your analysis.",
        options: [],
        answer:
          "Strong responses should: (1) Open with a thesis that identifies both the contrast and the theme it develops (e.g., true character is revealed by how we respond to adversity, not by how we appear); (2) Analyze Sophie's response — denial, obsession with appearance, scheming to switch schools — and what it reveals about her vanity and self-deception; (3) Analyze Agatha's response — discomfort but a willingness to engage, focus on Sophie's wellbeing over her own status — and what it reveals about her genuine goodness; (4) Explain how the contrast between the two responses is the engine that drives the novel's central theme; (5) Conclude by connecting the comparison to a broader idea about self-knowledge and moral character.",
        explanation:
          "Comparative ECR questions are among the most demanding STAAR writing tasks. Strong responses spend roughly equal time on each character and make sure every body paragraph contains a claim, textual evidence, and explicit analysis of what the evidence means. Avoid summarizing — every sentence should advance the argument.",
        strongExample: "Chainani reveals each character's true nature not by telling the reader who they are, but by showing how they respond when placed in an environment that contradicts their self-image. Sophie's response to Evil School — denial, obsession with her reflection, frantic scheming — is the behavior of someone who has built her identity on external validation. She cannot accept the placement because her entire sense of self depends on being seen as good, not on actually being good. Agatha's response, by contrast, is discomfort without performance — she is unsettled by Good School but her first instinct is to find Sophie, not to cultivate her own status. This contrast is Chainani's argument: true character is revealed not in moments of comfort, but in moments of disruption. Sophie's disruption exposes vanity; Agatha's exposes genuine loyalty.",
        weakExample: "Sophie was upset when she was placed in the School for Evil because she thought she should be in Good. Agatha was placed in Good but she did not feel like she belonged there either. Both of them had trouble adjusting to their new schools.",
        weakFeedback: "This response summarizes what happened but never analyzes what it means. 'Both had trouble adjusting' treats the characters as equivalent when the whole point of the comparison is that their responses are completely different in what they reveal. A strong comparative ECR explains specifically what each response reveals about each character's inner nature, and connects that to the theme being developed."
      },
    ],
  },
  {
    id: "lightning",
    title: "The Lightning Thief",
    author: "Rick Riordan",
    genre: "Fantasy / Mythology / Adventure",
    lexile: "680L",
    color: "#1A3A5C",
    accent: "#3498DB",
    emoji: "⚡",
    isbn: "9780786838653",
    summary: {
      overview:
        "Twelve-year-old Percy Jackson has always been different — he struggles in school, gets expelled repeatedly, and strange, dangerous things seem to follow him wherever he goes. When a math teacher transforms into a monster and attacks him on a class trip, Percy's world is turned upside down. He discovers he is a demigod: the son of a Greek god and a human mother. Taken to Camp Half-Blood — a training ground for children of the Olympians — Percy learns that the ancient Greek gods are very much alive and that their conflicts are tearing apart the modern world. He is accused of stealing Zeus's master lightning bolt, and if he can't return it before the summer solstice, a war among the gods will destroy civilization. With his best friend Grover (a satyr) and Annabeth (daughter of Athena), Percy races across the United States on a quest that tests every ounce of his courage, loyalty, and growing sense of who he truly is.",
      themes: [
        "Identity and self-discovery — learning who you are and what you are capable of",
        "Loyalty and friendship as the foundations of true heroism",
        "The relationship between fate and free will — are heroes born or made?",
        "Family, belonging, and the pain of absent or neglectful parents",
        "Appearance vs. reality — things in the modern world disguise their mythological nature",
        "Courage in the face of the unknown — acting even when afraid",
      ],
      characters: [
        { name: "Percy Jackson", role: "Protagonist — a dyslexic, ADHD 12-year-old who discovers he is the son of Poseidon; impulsive but deeply loyal and brave under pressure" },
        { name: "Annabeth Chase", role: "Daughter of Athena — intelligent, strategic, and proud; Percy's most important ally and the brains of their quest" },
        { name: "Grover Underwood", role: "Percy's best friend and a satyr — anxious but devoted; provides both comic relief and genuine emotional support" },
        { name: "Poseidon", role: "Percy's divine father — powerful but largely absent; his distance reflects the complicated feelings Percy has about not being claimed sooner" },
        { name: "Luke Castellan", role: "Son of Hermes — outwardly friendly but secretly resentful of the Olympian gods; represents what Percy could become if he surrenders to bitterness" },
        { name: "Chiron", role: "Camp Half-Blood's trainer (disguised as a Latin teacher) — wise, patient, and deeply principled" },
        { name: "Ares", role: "God of War — serves as an antagonist who manipulates Percy; represents brute force without wisdom or honor" },
      ],
      setting: "Modern-day United States — from New York City and Long Island (Camp Half-Blood) across the country to Los Angeles (the Underworld's entrance), with mythological locations layered beneath the surface of the everyday world.",
      literaryDevices: [
        { device: "First-Person Narrator", example: "Percy narrates in a direct, conversational voice that pulls the reader into his confusion and wonder — we discover the mythological world exactly as he does." },
        { device: "Allusion", example: "The entire novel is built on allusions to Greek mythology — the Minotaur, Medusa, the Underworld, the Olympians — requiring the reader to connect modern events to ancient stories." },
        { device: "Foreshadowing", example: "Percy's unexpected ability to survive in water and communicate with sea creatures hints at his parentage long before Poseidon claims him." },
        { device: "Dramatic Irony", example: "The reader may recognize the identity of the true villain (Kronos's influence through Luke) before Percy does, creating suspense." },
        { device: "Motif — Disguise / Appearance vs. Reality", example: "The Mist hides the mythological world from mortals; monsters appear as humans; gods disguise themselves. Nothing is what it seems on the surface." },
        { device: "The Hero's Journey (Epic Structure)", example: "Percy follows the classic hero's journey: the call to adventure, crossing the threshold (entering Camp Half-Blood), trials, a descent (the Underworld), and a return transformed." },
      ],
      authorPurpose:
        "Rick Riordan originally invented Percy Jackson to help his son — who has ADHD and dyslexia — feel heroic rather than broken. The novel reframes those 'differences' as divine gifts (ADHD = battlefield instincts; dyslexia = a brain wired for Ancient Greek). More broadly, Riordan uses Greek mythology to make readers curious about the ancient world while exploring timeless questions about identity, family, and what it means to be a hero.",
    },
    questions: [
      {
        type: "Multiple Choice",
        skill: "Theme",
        staar: true,
        map: true,
        question:
          "Which statement BEST expresses a central theme of The Lightning Thief?",
        options: [
          "A. Powerful families always protect their children from danger.",
          "B. True heroism comes from loyalty, courage, and knowing who you are — not from power alone.",
          "C. The gods of ancient Greece were more just than modern institutions.",
          "D. Intelligence and planning are more important than any other quality in a hero.",
        ],
        answer: "B",
        explanation:
          "Percy defeats challenges not because he is the most powerful demigod, but because he acts out of loyalty to his friends and mother, faces his fears, and gradually accepts who he is. Ares, who has raw power, is defeated precisely because he lacks honor. The novel consistently rewards character over strength.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Analysis — Motivation",
        staar: true,
        map: true,
        question:
          "Which of the following BEST describes Percy's primary motivation throughout most of the novel?",
        options: [
          "A. To become the most respected hero at Camp Half-Blood",
          "B. To prove to the Olympian gods that he is worthy of their attention",
          "C. To rescue his mother from the Underworld and stop a war among the gods",
          "D. To discover which Olympian is his parent before the summer solstice",
        ],
        answer: "C",
        explanation:
          "Percy's emotional core is his love for his mother. He accepts the dangerous quest not for glory, but to save her. Stopping the war is essential too, but the personal motivation — rescuing Sally Jackson — is what drives his courage in the darkest moments of the story.",
      },
      {
        type: "Multiple Choice",
        skill: "Literary Device — Allusion",
        staar: true,
        map: true,
        question:
          "The novel makes frequent allusions to Greek mythology — Medusa, the Minotaur, the Underworld — embedded in the modern world. What is the MOST LIKELY purpose of these allusions?",
        options: [
          "A. To show that modern America is exactly like ancient Greece",
          "B. To replace the need for a plot by relying on stories readers already know",
          "C. To connect Percy's present-day journey to the ancient tradition of heroic quests, giving his struggles greater meaning",
          "D. To suggest that Greek mythology is more accurate than modern science",
        ],
        answer: "C",
        explanation:
          "By embedding ancient myths into the modern world, Riordan places Percy within a long tradition of heroism. The allusions do more than entertain — they signal to the reader that Percy's journey is part of something much larger than one boy's adventure. They also reward readers who recognize the references.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Character Analysis + Textual Evidence",
        staar: true,
        map: false,
        question:
          "Part A: What does Luke Castellan's resentment toward the Olympian gods reveal about a theme in the novel?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. Luke shows that all demigods eventually turn evil.\nPart A — B. Luke illustrates how neglect and bitterness can corrupt even someone with heroic potential.\nPart A — C. Luke proves that children of minor gods are always less loyal than children of major gods.\nPart A — D. Luke demonstrates that the gods are right to keep their distance from their children.\n\nPart B — A. Luke was never a strong fighter, which made him feel overlooked at camp.\nPart B — B. Luke tells Percy that Hermes never visited or paid attention to him, fueling his anger and eventual betrayal.\nPart B — C. Luke loses a contest to Annabeth, which makes him resentful of Percy's friendship with her.\nPart B — D. Luke secretly worked with Ares to steal the lightning bolt for personal gain.",
        ],
        answer: "Part A: B | Part B: B",
        explanation:
          "Luke is a warning about what Percy could become. His father Hermes's absence created a wound that festered into betrayal. The novel uses this to explore how parental neglect — even divine neglect — has real consequences. Luke's explicit conversation with Percy about Hermes is the clearest textual evidence of this.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "In the novel, Percy is described as 'impulsive' in many of his decisions during the quest. Based on context clues, what does 'impulsive' most likely mean?",
        options: [
          "A. Acting only after careful planning and deliberation",
          "B. Following the advice of others rather than thinking independently",
          "C. Acting quickly on instinct without fully thinking through consequences",
          "D. Moving slowly and cautiously to avoid making mistakes",
        ],
        answer: "C",
        explanation:
          "Throughout the novel, Percy repeatedly acts before thinking — charging into monster fights, making decisions without consulting Annabeth, diving into the ocean instinctively. Context clues reinforce that 'impulsive' describes someone driven by impulse (sudden feeling) rather than reason. Notably, the novel frames this trait as both a flaw and a strength.",
      },
      {
        type: "Multiple Choice",
        skill: "Author's Craft — Point of View",
        staar: true,
        map: true,
        question:
          "The Lightning Thief is narrated in first person by Percy Jackson. How does this point of view MOST affect the reader's experience of the story?",
        options: [
          "A. It allows the reader to know more about the plot than Percy does",
          "B. It creates a sense of suspense and discovery because the reader learns information exactly when Percy does",
          "C. It makes Percy the least reliable narrator since he is only a child",
          "D. It prevents the reader from understanding Annabeth's and Grover's motivations",
        ],
        answer: "B",
        explanation:
          "First-person narration limits the reader to Percy's perspective — we are surprised when he is surprised, confused when he is confused, and thrilled when he figures something out. This creates an immersive experience where the reader essentially lives the quest alongside Percy rather than watching from a distance.",
      },
      {
        type: "Multiple Choice",
        skill: "Plot Structure — Hero's Journey",
        staar: true,
        map: true,
        question:
          "Percy's story follows the structure of a classic hero's journey. Which of the following story events represents the 'crossing the threshold' stage — the moment Percy fully commits to entering the new, dangerous world?",
        options: [
          "A. Percy's Latin teacher transforms into a Fury and attacks him",
          "B. Percy arrives at Camp Half-Blood and learns the truth about demigods",
          "C. Percy accepts the quest to retrieve Zeus's lightning bolt",
          "D. Percy descends into the Underworld to confront Hades",
        ],
        answer: "C",
        explanation:
          "In the hero's journey, 'crossing the threshold' is the moment the hero chooses to fully commit to the adventure. Arriving at camp introduces Percy to the new world, but formally accepting the quest — with full knowledge of the danger — is the true threshold crossing. Everything before is preparation; everything after is the journey.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Theme + Textual Evidence",
        staar: true,
        map: false,
        question:
          "How does Rick Riordan use Percy's ADHD and dyslexia to develop a theme about identity and self-worth? Use evidence from the novel to support your response.",
        options: [],
        answer:
          "Strong responses should: (1) State a clear theme — e.g., qualities that make someone feel 'broken' in one context can be powerful gifts in another; (2) Explain how Percy's learning differences are reframed in the novel (ADHD = battle instincts, dyslexia = brain wired for Ancient Greek); (3) Cite at least one specific moment where Percy's 'differences' help him succeed; (4) Connect back to the theme about identity and self-acceptance.",
        explanation:
          "STAAR SCR responses are scored on the clarity of the claim, quality of textual evidence, and explanation of how the evidence supports the claim. Use the RACES strategy and aim for 4–6 focused sentences.",
        strongExample: "In The Lightning Thief, Riordan reframes Percy's ADHD and dyslexia as divine gifts rather than disabilities, developing the theme that what makes someone feel broken in one context may be exactly what makes them powerful in another. Percy's dyslexia — which has gotten him expelled from school after school — is revealed to be a brain wired for ancient Greek. His ADHD, labeled as inability to focus, is reframed as battle instincts that keep him alive during monster attacks. During the encounter with the Minotaur, Percy's impulsive, hyperactive response is precisely what saves him. Riordan uses this reframing to argue that identity and self-worth should not be measured by the standards of institutions that were never designed for you.",
        weakExample: "Percy has ADHD and dyslexia which make school hard for him. But in the book they become his strengths. This shows that being different can be a strength.",
        weakFeedback: "'Being different can be a strength' is a theme statement without analysis. A strong SCR connects a specific moment from the text to the theme and explains the connection — for example, citing the Minotaur encounter and analyzing what Percy's instinctive response demonstrates about how his 'flaw' functions as a gift in a context designed for who he actually is.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Analysis — Annabeth",
        staar: true,
        map: true,
        question:
          "How does Annabeth's characterization challenge traditional ideas about what a hero looks like?",
        options: [
          "A. Annabeth uses physical strength to defeat monsters, showing she is as powerful as Percy.",
          "B. Annabeth leads through intelligence and strategy, demonstrating that heroism does not require brute force.",
          "C. Annabeth's emotions make her unreliable in dangerous situations, which Percy must compensate for.",
          "D. Annabeth is more heroic than Percy because she has been at camp longer.",
        ],
        answer: "B",
        explanation:
          "Annabeth repeatedly solves problems through planning, knowledge of mythology, and strategic thinking rather than combat. Her greatest contributions to the quest — knowing which monsters they face, how to navigate the Underworld, understanding the prophecy — all come from her mind. Riordan uses her to argue that intelligence is just as heroic as strength, expanding the traditional definition of what a hero can be.",
      },
      {
        type: "Multiple Choice",
        skill: "Mood and Tone",
        staar: true,
        map: true,
        question:
          "How does Riordan establish a tone that is adventurous and humorous despite the life-threatening dangers Percy faces throughout the quest?",
        options: [
          "A. By minimizing the danger so that readers never feel Percy is truly at risk",
          "B. By using Percy's first-person, conversational voice to narrate even terrifying events with wit and self-awareness",
          "C. By having other characters reassure Percy that everything will be fine",
          "D. By setting most dangerous scenes during the daytime so they feel less frightening",
        ],
        answer: "B",
        explanation:
          "Percy's narrating voice is the key to the novel's tone. He comments on monster attacks with sarcasm, describes his own near-death experiences with exasperation, and jokes even in crisis. This voice does not eliminate tension — it channels it. The humor is a coping mechanism that feels authentic to a twelve-year-old boy, and it keeps the novel propulsive and fun even when the stakes are high.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "At Camp Half-Blood, Percy is told that being a demigod makes him 'formidable' but also dangerous to those around him. Based on context clues, what does 'formidable' most likely mean?",
        options: [
          "A. Clumsy and unpredictable in unfamiliar situations",
          "B. Inspiring fear or respect because of great power or ability",
          "C. Cautious and reluctant to take action",
          "D. Friendly and approachable to both humans and monsters",
        ],
        answer: "B",
        explanation:
          "'Formidable' comes from the Latin formidare, meaning to fear. In context, being called formidable is both a compliment and a warning — Percy's power as a son of Poseidon commands respect but also attracts dangerous enemies. The pairing of 'formidable' with 'dangerous to those around him' confirms the meaning: his power is impressive and intimidating.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Theme — Belonging and Identity",
        staar: true,
        map: false,
        question:
          "Part A: How does Percy's experience at Camp Half-Blood develop the theme of belonging and identity?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. Camp Half-Blood makes Percy feel completely at home immediately upon his arrival.\nPart A — B. Percy's struggle to be claimed and accepted at camp mirrors his lifelong feeling of not fitting in — and his journey toward understanding who he truly is.\nPart A — C. Camp Half-Blood shows Percy that identity is determined entirely by which god is your parent.\nPart A — D. Percy feels he belongs at camp only after he wins a capture-the-flag battle.\n\nPart B — A. Percy is not claimed by Poseidon for weeks after arriving at camp, leaving him without a cabin or a defined place among the demigods.\nPart B — B. Percy immediately wins the respect of all campers by defeating a Minotaur before he even arrives.\nPart B — C. The camp director assigns Percy a permanent cabin before his parentage is revealed.\nPart B — D. Percy decides he prefers his regular school to Camp Half-Blood after his first week.",
        ],
        answer: "Part A: B | Part B: A",
        explanation:
          "The delay in Percy being claimed is one of the novel's most pointed details. Just as he has always been the kid who doesn't fit in — expelled from schools, misunderstood by teachers — at camp he is literally unclaimed, without a place. The moment Poseidon's trident appears above his head is not just a plot reveal; it is Percy finally knowing, for the first time, exactly who he is and where he belongs.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Conflict — Character vs. Society",
        staar: true,
        map: false,
        question:
          "Percy is accused of stealing Zeus's lightning bolt without any evidence against him. How does this conflict reflect a theme about justice, power, and how the powerful treat those with less power? Use evidence from the novel in your response.",
        options: [],
        answer:
          "Strong responses should: (1) Identify the theme — e.g., those with power often make assumptions about those without it, and the accused must prove innocence rather than guilt being proven; (2) Explain that Percy is presumed guilty by the Olympian gods simply because he is a son of Poseidon and was present; (3) Connect this to Percy's real-world experiences of being blamed and expelled from schools for things he did not fully control; (4) Cite at least one specific detail from the novel as evidence; (5) Explain what this pattern reveals about how power operates in both the mythological and human world.",
        explanation:
          "This SCR targets the higher-order skill of connecting a specific plot conflict to a broader theme. Strong responses make the thematic link explicit — they don't just describe what happened, they explain what it means. Use RACES and aim for 5–6 focused sentences.",
        strongExample: "In The Lightning Thief, Riordan uses the false accusation against Percy to develop the theme that the powerful often treat the powerless as guilty by default. Percy is accused of stealing Zeus's lightning bolt with no evidence beyond his identity — he is Poseidon's son, he was present, and therefore he must be responsible. This mirrors Percy's experiences in the mortal world, where he is repeatedly expelled for incidents he did not fully control, and where teachers assume the worst before investigating. Riordan uses both contexts to argue the same point: when institutions hold power to punish, individuals with less power must prove their innocence rather than being presumed innocent. This parallel between Olympus and a public school is not accidental — it is the novel's quiet critique of how power operates in any institution.",
        weakExample: "Percy is accused of stealing the lightning bolt even though he didn't do it. This is unfair because the gods just assumed he was guilty. This shows that the gods are not very just.",
        weakFeedback: "'The gods are not very just' is a surface-level observation. A strong SCR connects the accusation to a specific theme about power — explaining that Percy's situation follows the same pattern as his school expulsions, and that Riordan uses this repeating pattern to argue something about how institutions treat those with less power. The connection between the mythological and real-world pattern is where the analysis lives.",
      },
      {
        type: "Multiple Choice",
        skill: "Figurative Language — Metaphor",
        staar: true,
        map: true,
        question:
          "Riordan describes the Mist as a force that causes mortals to see mythological creatures and events as ordinary, explainable things. What idea does the Mist function as a metaphor for?",
        options: [
          "A. The idea that magic is always invisible to people who do not believe in it",
          "B. The way people rationalize or ignore extraordinary things happening around them that they are not prepared to see",
          "C. The scientific explanation for why humans cannot see into other dimensions",
          "D. The gods' deliberate cruelty in hiding the truth from ordinary people",
        ],
        answer: "B",
        explanation:
          "The Mist is a rich metaphor for how people filter reality through the lens of what they already believe or expect. When mortals see a monster, they perceive something ordinary — their minds construct a 'reasonable' explanation. Riordan uses this to comment on how humans often miss what is extraordinary or dangerous right in front of them because they are not looking for it, or because accepting the truth would be too disruptive.",
      },
      {
        type: "Extended Constructed Response (ECR)",
        skill: "Myth + Modern World + Theme Analysis",
        staar: true,
        map: false,
        question:
          "Rick Riordan deliberately sets an ancient mythological story in the modern United States. Write a response in which you analyze the effect of this setting choice. How does placing Greek gods and monsters in the contemporary world develop a theme or reinforce the novel's central ideas? Use specific evidence from the text to support your analysis.",
        options: [],
        answer:
          "Strong responses should: (1) Open with a thesis about what the modern setting accomplishes thematically — e.g., it argues that ancient human struggles (pride, loyalty, jealousy, the search for identity) are timeless and still alive today; (2) Analyze two or more specific examples where a mythological element in a modern setting creates meaning — such as Olympus atop the Empire State Building, the Underworld beneath Los Angeles, or Medusa running a garden statue shop; (3) Explain what each example suggests about the modern world or human nature; (4) Connect the setting choices back to the novel's themes about heroism, identity, or belonging; (5) Conclude by arguing why this setting choice makes the mythology feel relevant rather than remote.",
        explanation:
          "This is a sophisticated ECR that asks students to analyze craft choices (setting) rather than just theme or character. Strong responses treat each modern-mythological pairing as evidence and explain its specific effect. Avoid simply listing locations — analyze what each pairing means.",
        strongExample: "By placing Mount Olympus on the 600th floor of the Empire State Building and the Underworld beneath Los Angeles, Riordan argues that the ancient conflicts embodied in Greek mythology — ambition, jealousy, the hunger for power, the search for identity — are not relics of the past but living forces shaping the modern world. Each modern location is chosen with thematic precision: Olympus above the center of American ambition signals that the gods' hunger for power mirrors the most recognizable drives of contemporary society. The Underworld beneath Hollywood — a city built on illusion and the performance of fame — suggests that escapism and denial of mortality are as modern as they are ancient. Riordan's setting is not decoration; it is his argument that mythology survives because the human conditions it describes never went away.",
        weakExample: "Riordan sets the story in modern America which makes it interesting because you can see places you recognize. Olympus is on top of the Empire State Building and the Underworld is in Los Angeles. This makes the mythology feel more real.",
        weakFeedback: "'Makes it feel more real' describes an effect but doesn't analyze a meaning. A strong ECR explains WHY each specific location was chosen — what does the Empire State Building say about Olympus and the kind of power it represents? What does Los Angeles say about the Underworld? Every location choice should be analyzed as a deliberate argument about the modern world, not just noted as a detail."
      },
    ],
  },
  {
    id: "lemoncello",
    title: "Mr. Lemoncello's Very First Game",
    author: "Chris Grabenstein",
    genre: "Realistic Fiction / Mystery / Adventure",
    lexile: "650L",
    color: "#1A5276",
    accent: "#F4D03F",
    emoji: "🎮",
    isbn: "9780593482469",
    summary: {
      overview:
        "This is the origin story of the beloved Luigi Lemoncello — inventor of fantastical games and puzzles. As a twelve-year-old kid growing up in a large, chaotic Italian-American family in the 1970s, Luigi is dismissed by everyone around him as a dreamer with silly ideas. But when he invents an epic board game to impress the girl he has a crush on — and to compete in a contest — his creativity, persistence, and love of wordplay take center stage. The novel is a heartwarming, funny adventure about believing in yourself when no one else does, and how imagination can turn into something extraordinary.",
      themes: [
        "Creativity and the courage to pursue unconventional ideas",
        "Perseverance — continuing despite failure and rejection",
        "The value of imagination and play",
        "Family dynamics and finding your place in a crowd",
        "Friendship, collaboration, and sharing your gifts with others",
      ],
      characters: [
        { name: "Luigi Lemoncello (young)", role: "Protagonist — imaginative, quirky, and passionate about games; dismissed by family but driven by his own vision" },
        { name: "Mr. Lemoncello (adult narrator)", role: "The older, successful inventor narrating his own origin story — playful, wise, and warmly humorous" },
        { name: "Luigi's family", role: "A large, loud family who often overlook Luigi's talents, representing the challenge of being 'the different one'" },
        { name: "Pinky Weidemeyer", role: "The girl Luigi wants to impress — her admiration gives him motivation" },
        { name: "Various contest competitors", role: "Rivals who push Luigi to think harder and be more creative" },
      ],
      setting: "Alexandriaville, Ohio in the 1970s — a small town where Luigi's big imagination struggles to find space to grow.",
      literaryDevices: [
        { device: "First-Person Flashback Narration", example: "Adult Lemoncello narrates his own childhood, giving the story warmth and the sense that this is a 'how I got here' tale." },
        { device: "Humor and Wordplay", example: "Grabenstein fills the text with puns, riddles, and clever language — mirroring the kind of game Lemoncello would eventually create." },
        { device: "Foreshadowing", example: "Every game Luigi invents as a child is a small preview of the spectacular games he will design as an adult." },
        { device: "Characterization through Detail", example: "Luigi's ideas are always described in vivid, sensory detail — showing the reader how his mind works rather than telling us he is creative." },
        { device: "Theme through Conflict", example: "Luigi's constant struggle to be heard in his family mirrors the external contest conflict — both are about proving that your ideas have value." },
      ],
      authorPurpose:
        "Grabenstein wrote this as an origin story to show that creativity and persistence matter more than instant recognition. He wants readers — especially those who feel overlooked — to see that having a big imagination is a gift, not a flaw.",
    },
    questions: [
      {
        type: "Multiple Choice",
        skill: "Theme",
        staar: true,
        map: true,
        question:
          "Which statement BEST expresses a central theme of Mr. Lemoncello's Very First Game?",
        options: [
          "A. Success in competitions always requires luck more than skill.",
          "B. Family support is the only thing that leads to creative achievement.",
          "C. Imagination and persistence can turn an overlooked idea into something great.",
          "D. Playing games is less valuable than traditional academic achievement.",
        ],
        answer: "C",
        explanation:
          "Luigi's entire arc is built around an unconventional idea that his family dismisses — but his refusal to give up, combined with his creative thinking, drives him toward success. This is the novel's core message.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Motivation",
        staar: true,
        map: true,
        question:
          "At the beginning of the story, what is Luigi's PRIMARY motivation for creating his game?",
        options: [
          "A. To win prize money so he can help his family",
          "B. To impress Pinky Weidemeyer and win a contest",
          "C. To prove to his teachers that games are educational",
          "D. To start a business selling games in his neighborhood",
        ],
        answer: "B",
        explanation:
          "Luigi's initial spark is a mixture of wanting to impress Pinky and compete in a game-design contest. Both are personal, immediate motivations — the larger lesson about creativity emerges as the story develops.",
      },
      {
        type: "Multiple Choice",
        skill: "Narrative Point of View",
        staar: true,
        map: true,
        question:
          "The novel is told from the perspective of adult Luigi looking back on his childhood. How does this narrative choice affect the tone of the story?",
        options: [
          "A. It makes the story feel tense and uncertain because the outcome is unknown.",
          "B. It creates a warm, reflective tone because we know the narrator eventually succeeded.",
          "C. It distances the reader from Luigi's emotions during key events.",
          "D. It allows other characters to share their perspectives equally.",
        ],
        answer: "B",
        explanation:
          "Knowing that the narrator grew up to become the famous Mr. Lemoncello means the childhood struggles feel safe — we're hearing a success story being told by the person who lived it. This creates warmth and nostalgia.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Inference + Textual Evidence",
        staar: true,
        map: false,
        question:
          "Part A: Based on the novel, what can the reader infer about how Luigi's family views his love of games?\n\nPart B: Which detail BEST supports the inference in Part A?",
        options: [
          "Part A — A. His family fully supports his creativity and helps him succeed.\nPart A — B. His family is indifferent — they neither support nor discourage him.\nPart A — C. His family dismisses his interest in games as a waste of time.\nPart A — D. His family is proud of him but worried about his future.\n\nPart B — A. Luigi often has to work on his game ideas alone, without help from siblings.\nPart B — B. His family throws him a party when he wins the contest.\nPart B — C. His parents buy him supplies for his game whenever he asks.\nPart B — D. His siblings all want to playtest his games before he enters them.",
        ],
        answer: "Part A: C | Part B: A",
        explanation:
          "The novel establishes that Luigi's large family is busy and loud, and his game ideas go largely unnoticed or are treated as strange. Working alone is the clearest textual signal of that dynamic.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "The text describes Luigi as 'tenacious' in the way he pursues his game idea despite setbacks. Based on context clues in the novel, what does 'tenacious' most likely mean?",
        options: [
          "A. Easily discouraged when things go wrong",
          "B. Holding firmly to a goal and refusing to give up",
          "C. Careful and methodical in planning every step",
          "D. Willing to change direction whenever a problem arises",
        ],
        answer: "B",
        explanation:
          "'Tenacious' (from Latin tenere, to hold) means gripping onto something firmly — in this case, Luigi grips his dream even when it gets difficult. Context clues like 'despite setbacks' reinforce this meaning.",
      },
      {
        type: "Multiple Choice",
        skill: "Author's Craft — Humor",
        staar: true,
        map: true,
        question:
          "Chris Grabenstein uses wordplay and humor throughout the novel. What is the MOST LIKELY reason the author makes this choice?",
        options: [
          "A. To keep the story light so that readers do not have to think deeply",
          "B. To reflect Luigi's personality and the playful spirit of game design",
          "C. To show that the story is not meant to be taken seriously",
          "D. To appeal to younger readers who would not understand a serious tone",
        ],
        answer: "B",
        explanation:
          "The humor is not accidental — it mirrors who Luigi is. A story about a future game inventor told in a playful, puzzle-filled way shows rather than tells readers what kind of mind Lemoncello has.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Theme + Evidence",
        staar: true,
        map: false,
        question:
          "How does Luigi's relationship with his family contribute to the development of a theme in Mr. Lemoncello's Very First Game? Use evidence from the text in your response.",
        options: [],
        answer:
          "Strong responses should: (1) Identify a clear theme (e.g., believing in yourself when others do not); (2) Explain how the family dynamic — being overlooked in a large household — creates the challenge Luigi must overcome; (3) Use at least one specific detail from the text as evidence; (4) Explain how that evidence connects to the theme.",
        explanation:
          "Use the RACES strategy: Restate the question, Answer with a claim, Cite evidence, Explain the evidence, and Summarize/connect back to the theme.",
        strongExample: "In Mr. Lemoncello's Very First Game, Grabenstein uses Luigi's relationship with his large, chaotic family to develop the theme that believing in yourself requires more courage when the people closest to you cannot see your potential. Because Luigi's family is constantly busy and loud, his game ideas go unnoticed — he works on them alone, without anyone asking to help or play. This isolation is not cruel, but it is costly: Luigi must sustain his creative energy entirely on his own, without the fuel of external encouragement. Grabenstein uses this dynamic to argue that self-belief under those conditions is not just a personality trait — it is an act of courage.",
        weakExample: "Luigi's family doesn't always support his ideas. They are a big family and sometimes they ignore him. This makes Luigi have to work by himself which is hard for him.",
        weakFeedback: "'This is hard for him' describes an emotion without analyzing a theme. A strong SCR identifies what the family dynamic reveals thematically and connects that to a broader argument Grabenstein is making. The analytical move is: what does Luigi's isolation require of him, and what does the novel say about that requirement?"
      },
      {
        type: "Multiple Choice",
        skill: "Plot Structure — Conflict",
        staar: true,
        map: true,
        question:
          "Which type of conflict is MOST central to the plot of Mr. Lemoncello's Very First Game?",
        options: [
          "A. Character vs. Nature — Luigi struggles against the physical world",
          "B. Character vs. Character — Luigi battles a specific villain",
          "C. Character vs. Self — Luigi must overcome self-doubt to pursue his dream",
          "D. Character vs. Society — Luigi fights against a large institution",
        ],
        answer: "C",
        explanation:
          "While external conflicts exist (the contest, his family's dismissiveness), the core tension is internal — Luigi must believe in his own idea enough to see it through. That inner struggle is the heart of the story.",
      },
      {
        type: "Multiple Choice",
        skill: "Foreshadowing",
        staar: true,
        map: true,
        question:
          "Throughout the novel, each game Luigi invents as a child contains elements that preview his future as a world-famous inventor. How does this pattern function as foreshadowing?",
        options: [
          "A. It shows that Luigi's games are too complicated for anyone around him to enjoy",
          "B. It plants early signals that Luigi's 'silly' childhood ideas are the seeds of something genuinely extraordinary",
          "C. It foreshadows that Luigi will eventually abandon game design for a more practical career",
          "D. It creates suspense by making the reader wonder if Luigi will ever be taken seriously",
        ],
        answer: "B",
        explanation:
          "Foreshadowing creates meaning in hindsight — details that seem small early on take on greater significance later. Each childhood game Luigi designs contains the creativity, wordplay, and layered thinking that will define his adult career. The reader, knowing this is an origin story, can recognize these moments as early proof of what Luigi will become, even when no one around him does.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "The novel describes Luigi's game ideas as 'whimsical' — a word his family uses dismissively, but that the narrator reclaims as a compliment. Based on context, what does 'whimsical' most likely mean?",
        options: [
          "A. Practical and carefully designed to solve a specific problem",
          "B. Playfully imaginative in a way that is unpredictable and creative",
          "C. Overly complicated and difficult for others to understand",
          "D. Old-fashioned and out of step with what is currently popular",
        ],
        answer: "B",
        explanation:
          "'Whimsical' describes something driven by whim — a playful, unpredictable kind of imagination. In context, Luigi's family uses the word to mean 'not serious,' but the adult narrator uses it to show that this quality — this creative spontaneity — is exactly what made Lemoncello's games beloved. The word is redefined over the course of the story from a criticism into a gift.",
      },
      {
        type: "Multiple Choice",
        skill: "Author's Craft — Tone",
        staar: true,
        map: true,
        question:
          "The adult Mr. Lemoncello narrates his own childhood story with warmth, humor, and affection — even when describing difficult moments of being overlooked or dismissed. How does this tonal choice shape the reader's experience?",
        options: [
          "A. It creates suspense because the reader does not know whether Luigi will succeed",
          "B. It signals to the reader that the difficult moments ultimately led somewhere worthwhile, creating comfort even in hard scenes",
          "C. It distances the reader from Luigi's childhood emotions, making it harder to feel invested",
          "D. It makes the family members appear more villainous than they truly are",
        ],
        answer: "B",
        explanation:
          "When a narrator looks back on hardship with warmth rather than bitterness, it signals that those experiences were survivable — even formative. The adult Lemoncello's affectionate retelling tells the reader: these struggles shaped something remarkable. This tonal safety net lets the reader fully feel Luigi's childhood frustrations without despair, because the narrator is living proof that things turned out well.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Characterization — Showing vs. Telling",
        staar: true,
        map: false,
        question:
          "Part A: How does Grabenstein show Luigi's creativity rather than simply telling the reader he is creative?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. The narrator directly states many times that Luigi is the most creative person in his family.\nPart A — B. Grabenstein shows Luigi's creativity by having other characters constantly praise his ideas.\nPart A — C. Grabenstein shows Luigi's creativity through specific, vivid descriptions of the games Luigi designs and the problems he solves within them.\nPart A — D. Grabenstein tells us Luigi is creative by comparing him to famous inventors from history.\n\nPart B — A. The narrator says 'Luigi was the most imaginative child anyone had ever seen.'\nPart B — B. Luigi's siblings repeatedly ask him to share his game designs with their friends.\nPart B — C. The game Luigi creates for the contest is described in specific, inventive detail — its rules, its wordplay, its layered puzzles — allowing the reader to see exactly how his mind works.\nPart B — D. A teacher writes a note home praising Luigi's unusual way of thinking.",
        ],
        answer: "Part A: C | Part B: C",
        explanation:
          "'Show, don't tell' is a foundational craft principle. Rather than announcing that Luigi is creative, Grabenstein lets the reader experience Luigi's creativity directly through the specific, imaginative details of his game designs. The reader arrives at the conclusion 'Luigi is creative' through evidence, not declaration — which is far more convincing and engaging.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Theme — Failure and Growth",
        staar: true,
        map: false,
        question:
          "How does Luigi respond to setbacks and early failures in the novel, and what does his response reveal about a theme the author is developing? Use evidence from the text to support your response.",
        options: [],
        answer:
          "Strong responses should: (1) State a clear theme — e.g., failure is not the opposite of success; it is a necessary part of it; (2) Describe how Luigi responds to a specific setback — not by quitting, but by adjusting, rebuilding, or trying a different angle; (3) Cite at least one specific detail from the novel as evidence; (4) Explain how Luigi's response to failure differs from what might be expected, and what that difference reveals about his character and the author's message.",
        explanation:
          "STAAR SCR responses require a claim, specific evidence, and analysis of the connection between the two. This question targets a secondary theme (failure as part of growth) that is distinct from the main theme already covered, giving students practice with layered thematic thinking.",
        strongExample: "In Mr. Lemoncello's Very First Game, Grabenstein develops the theme that failure is not the opposite of success but a necessary part of it, through Luigi's response to setbacks during the contest. When an early version of his game does not work as intended, Luigi does not treat the failure as proof that his idea was wrong — he treats it as information about how to make the idea better. He adjusts, rebuilds, and tries again from a different angle. This response matters because it is the opposite of what the people around him expect: they interpret his failures as confirmation that games are a waste of time. Grabenstein uses Luigi's persistence through failure to argue that the ability to learn from what goes wrong — rather than be defined by it — is the actual creative skill that separates people who build extraordinary things from those who abandon their ideas too soon.",
        weakExample: "Luigi fails a few times in the story but he keeps trying. This teaches us that we should never give up. Luigi eventually succeeds because he does not quit.",
        weakFeedback: "'Never give up' is a cliché, not a theme analysis. A strong SCR identifies a specific moment of failure, describes Luigi's specific response to it, and then explains what that response reveals about Grabenstein's argument. The theme is not just 'persistence' — it's something more precise: that the capacity to learn from failure, rather than be defeated by it, is a distinct and learnable skill.",
      },
      {
        type: "Multiple Choice",
        skill: "Genre — Realistic Fiction",
        staar: true,
        map: true,
        question:
          "Mr. Lemoncello's Very First Game is classified as realistic fiction. Which of the following BEST explains why this genre label fits the novel?",
        options: [
          "A. The story is based entirely on true historical events and real people",
          "B. The story contains no conflict or tension — it reflects everyday life as it is",
          "C. The story features invented characters and events that could plausibly happen in the real world, without magic or fantasy elements",
          "D. The story is set in a world where the laws of nature operate differently than in reality",
        ],
        answer: "C",
        explanation:
          "Realistic fiction tells invented stories set in the real world, with characters who behave and face challenges that real people could plausibly experience. Luigi's family dynamics, the game design contest, and his social struggles are all imaginative but grounded — nothing happens that couldn't occur in real life. This distinguishes it from fantasy (Percy Jackson) or fairy-tale fiction (School for Good and Evil), and it is a genre distinction STAAR tests explicitly.",
      },
      {
        type: "Extended Constructed Response (ECR)",
        skill: "Theme + Setting + Writing",
        staar: true,
        map: false,
        question:
          "In Mr. Lemoncello's Very First Game, the author suggests that the environment we grow up in can either nurture or suppress our potential — but that individuals have the power to pursue their gifts regardless. Write a response analyzing how the novel develops this idea through Luigi's relationship with his setting — his family, his town, and his time period. Use specific evidence from the text to support your analysis.",
        options: [],
        answer:
          "Strong responses should: (1) Open with a clear thesis connecting setting (family, community, era) to the theme of nurturing vs. suppressing potential; (2) Analyze how the large, chaotic family home — where Luigi's ideas are drowned out — represents a suppressive environment, with specific evidence; (3) Analyze how the small-town Ohio setting of the 1970s adds another layer — limited exposure, limited models of unconventional success; (4) Argue that Luigi's persistence despite this environment is the novel's core act of heroism; (5) Conclude by connecting this to the author's purpose: Grabenstein wrote this for readers who feel overlooked by their own environments.",
        explanation:
          "This ECR asks students to use setting analytically — not just as backdrop but as a force that acts on character and theme. Strong responses treat the family home, the town, and the era as separate but related elements, each contributing to the novel's central argument about potential and environment.",
        strongExample: "Grabenstein uses Luigi's setting — a crowded house, a small Ohio town, the 1970s — not simply as background but as a force that actively suppresses his potential, making his eventual success a more powerful argument about individual agency. The Lemoncello household is loud and populated with people who have no framework for imagining a career built on game design; in the 1970s, that path had no visible models. Luigi's town offers no mentors, no creative community, no evidence that someone like him could build something like what he imagines. Yet Luigi persists — and Grabenstein's argument emerges from this gap between environment and outcome: external conditions can limit what a person sees as possible, but they cannot eliminate the internal drive that refuses to accept those limits. Luigi's origin story is ultimately an argument that the most important resource for creative people is not opportunity — it is the stubbornness to pursue what you believe in when the environment offers you no proof it is worth pursuing.",
        weakExample: "Luigi grows up in a small town in Ohio in the 1970s. His family is big and loud and does not pay much attention to him. This setting makes it harder for Luigi to pursue his dreams because no one supports him.",
        weakFeedback: "This response describes the setting but doesn't analyze it. 'No one supports him' is an observation — a strong ECR explains what that lack of support requires of Luigi, and connects that to Grabenstein's larger thematic argument. The setting analysis should answer: what does this specific environment reveal about what Luigi has to overcome, and what does the novel say about whether environment determines outcome?"
      },
    ],
  },
  {
    id: "restart",
    title: "Restart",
    author: "Gordon Korman",
    genre: "Realistic Fiction / Mystery",
    lexile: "650L",
    color: "#1B4F35",
    accent: "#58D68D",
    emoji: "🔄",
    isbn: "9781338053777",
    summary: {
      overview:
        "Chase Ambrose falls off a roof and wakes up in the hospital with no memory of who he is. The problem — which Chase doesn't know yet — is that the person he was before the accident was the most feared and hated bully at Hiawassee Middle School. As Chase tries to figure out who he is through the eyes of classmates who either idolize him (his old crew of bullies) or despise him (nearly everyone else), he begins building a new identity rooted in kindness, courage, and genuine friendship. The novel is told from multiple perspectives — Chase, his victims, his teachers, and his family — which allows the reader to see the full picture of who Chase was, who he is now, and who he chooses to become. Restart is ultimately a story about whether people can truly change, and whether a second chance is something that must be earned.",
      themes: [
        "Identity — who we are is defined by our choices, not our past or our reputation",
        "The possibility and difficulty of genuine change and redemption",
        "Empathy — understanding others requires seeing the world through their experience",
        "Bullying and its lasting damage on victims, even after the bully changes",
        "Second chances — whether they are deserved, and what we do with them",
        "Courage — it takes more bravery to be kind than to be feared",
      ],
      characters: [
        { name: "Chase Ambrose", role: "Protagonist — a former bully who loses his memory after a fall; free from his past self, he begins building a genuinely different identity through the choices he makes" },
        { name: "Shoshanna Weber", role: "One of Chase's former victims — sharp, guarded, and understandably skeptical of his change; her perspective grounds the novel's moral stakes" },
        { name: "Joel Weber", role: "Shoshanna's brother and a veteran Chase once tormented; his story is central to the novel's most important lessons about honor and cruelty's real cost" },
        { name: "Aaron Haikney", role: "Chase's former best friend and fellow bully — represents who Chase was; his resentment of the new Chase creates the novel's central external conflict" },
        { name: "Bear Bratkowski", role: "Another member of Chase's old crew — slower to turn on Chase but ultimately loyal to the group's old hierarchy" },
        { name: "Mr. Solway", role: "A WWII veteran and resident at the care facility where Chase volunteers; their unlikely friendship becomes the emotional heart of the story" },
        { name: "Chase's family", role: "His mother is relieved by the change; his sister recognizes it and is ambivalent — she knew how bad the old Chase truly was" },
      ],
      setting: "Contemporary Hiawassee Middle School and its surrounding community — a realistic suburban setting where Chase's past actions left real, lasting damage on the people around him.",
      literaryDevices: [
        { device: "Multiple Perspectives / Multi-POV Narration", example: "The novel rotates between Chase, Shoshanna, and other characters. Each narrator reveals a different piece of Chase's past and present — no single perspective tells the full truth, forcing the reader to construct it from all of them." },
        { device: "Dramatic Irony", example: "The reader learns about Chase's bullying history through other characters' chapters before Chase fully understands it himself — creating a tension between who Chase thinks he is and who the evidence shows he was." },
        { device: "Characterization through Contrast", example: "Every scene of the new Chase choosing kindness is implicitly contrasted with what we've learned about what the old Chase would have done in the same moment." },
        { device: "Symbolism", example: "The video footage of Chase bullying Joel serves as a literal record of who the old Chase was — a symbol of the past that cannot be erased even when memory is." },
        { device: "Motif — Earned vs. Unearned", example: "Throughout the novel, characters debate whether Chase deserves his second chance. The motif of 'earning' trust, friendship, and forgiveness runs through every subplot." },
        { device: "Theme through Structure", example: "The multi-POV structure is itself thematic: it argues that bullying's damage is experienced differently by victim and perpetrator, and that understanding requires hearing from all sides." },
      ],
      authorPurpose:
        "Gordon Korman uses the premise of amnesia not as a gimmick but as a philosophical tool: if you stripped away everything a person has been told about who they are, what kind of person would they choose to become? The novel challenges both its characters and its readers to think seriously about whether identity is fixed or fluid, and whether redemption requires more than just stopping the harmful behavior — it requires actively repairing the damage done.",
    },
    questions: [
      {
        type: "Multiple Choice",
        skill: "Theme — Identity and Choice",
        staar: true,
        map: true,
        question:
          "Which statement BEST expresses a central theme of Restart?",
        options: [
          "A. A person's true identity is permanently fixed by their earliest experiences.",
          "B. Forgetting the past is the most effective way to become a better person.",
          "C. Who we are is ultimately defined by the choices we make, not the reputation we inherit.",
          "D. Popularity and social status are the most reliable guides to a person's character.",
        ],
        answer: "C",
        explanation:
          "The novel's central premise — Chase losing his memory — strips away his reputation and forces him to make choices without the social pressure of his old identity. Korman uses this to argue that character is built through decisions, not assigned by history. The new Chase's choices consistently reveal a better person than the old Chase's choices did, which is the novel's core argument about identity.",
      },
      {
        type: "Multiple Choice",
        skill: "Author's Craft — Multiple Perspectives",
        staar: true,
        map: true,
        question:
          "The novel is told from multiple characters' perspectives rather than Chase's alone. What is the MOST IMPORTANT effect of this narrative choice?",
        options: [
          "A. It allows the reader to root for Chase without having to think critically about his past actions.",
          "B. It gives the reader a complete picture of Chase's history and its impact — information Chase himself does not have.",
          "C. It creates confusion by making it unclear whose story the novel is really telling.",
          "D. It allows Korman to describe the same events multiple times for emphasis.",
        ],
        answer: "B",
        explanation:
          "The multi-POV structure is the novel's most important craft choice. Chase can only know himself through his present choices, but the reader sees the full scope of the damage his past self caused — through Shoshanna's guarded skepticism, Joel's trauma, Mr. Solway's observations, and others. This gap between what Chase knows and what the reader knows is where the novel's moral complexity lives.",
      },
      {
        type: "Multiple Choice",
        skill: "Dramatic Irony",
        staar: true,
        map: true,
        question:
          "Throughout the early chapters, Chase is confused by classmates who either fear him or idolize him for reasons he cannot understand. How does this create dramatic irony?",
        options: [
          "A. The reader is just as confused as Chase and discovers the truth alongside him.",
          "B. The reader knows from other characters' perspectives what Chase did — making his confusion both sympathetic and uncomfortable to watch.",
          "C. The reader knows Chase will regain his memory by the end of the first chapter.",
          "D. The reader understands that Chase's classmates are overreacting to normal middle school behavior.",
        ],
        answer: "B",
        explanation:
          "Dramatic irony occurs when the reader knows something a character does not. By the time we experience Chase's bewilderment at his classmates' reactions, we have already read enough from Shoshanna's and others' perspectives to understand exactly what he did to them. His confusion is genuine and even a little sympathetic — but we know too much to fully share it. That discomfort is the novel's most powerful emotional tool.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Analysis — Shoshanna",
        staar: true,
        map: true,
        question:
          "Why is Shoshanna's skepticism of Chase's change important to the novel's theme rather than simply being an obstacle for Chase to overcome?",
        options: [
          "A. Shoshanna's skepticism shows that she is a less forgiving person than the other characters.",
          "B. Shoshanna represents the legitimate perspective of victims — her distrust is rational, earned, and morally necessary in a story about redemption.",
          "C. Shoshanna's reluctance to forgive Chase creates the novel's primary conflict and must be resolved for the story to end.",
          "D. Shoshanna serves mainly as a contrast to Aaron, who represents the opposite extreme.",
        ],
        answer: "B",
        explanation:
          "Korman does not present Shoshanna's wariness as a flaw to be corrected. It is the most honest and justified response in the novel. Her perspective forces both Chase and the reader to reckon with a crucial truth: the bully's change does not automatically undo the victim's pain. Her skepticism is not the problem the novel solves — it is the moral standard the novel holds Chase accountable to.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Character Motivation — Aaron",
        staar: true,
        map: false,
        question:
          "Part A: What does Aaron's growing hostility toward the new Chase reveal about Aaron's character?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. Aaron genuinely wants Chase to recover fully and return to his old self.\nPart A — B. Aaron's identity and social power depended entirely on Chase's bullying — the new Chase threatens everything Aaron built his status on.\nPart A — C. Aaron is concerned that Chase's memory loss is more serious than the doctors believe.\nPart A — D. Aaron is jealous of the new friendships Chase is forming with students he once bullied.\n\nPart B — A. Aaron encourages Chase to join the video production club to help him make new friends.\nPart B — B. Aaron repeatedly pressures Chase to act like 'himself' and grows angry when Chase refuses to bully or intimidate others.\nPart B — C. Aaron visits Chase in the hospital to offer support during his recovery.\nPart B — D. Aaron tells teachers he is worried about Chase's wellbeing after the accident.",
        ],
        answer: "Part A: B | Part B: B",
        explanation:
          "Aaron is one of the novel's most revealing characters because his reaction exposes something uncomfortable: Chase's cruelty was a social currency that others built their own power on. When Chase stops being cruel, Aaron loses his status — not because of anything Chase took from him, but because Aaron had nothing of his own to stand on. His aggression toward the new Chase is self-preservation, not loyalty.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "In the novel, Chase's former behavior is described as 'predatory' by one of his victims. Based on context clues, what does 'predatory' most likely mean?",
        options: [
          "A. Clumsy and unaware of how his actions affected others",
          "B. Deliberately targeting those who are weaker or more vulnerable in order to dominate them",
          "C. Competitive in a way that was healthy and motivating for other students",
          "D. Impulsive and uncontrolled, acting without thinking about consequences",
        ],
        answer: "B",
        explanation:
          "'Predatory' draws from the word 'predator' — an animal that hunts weaker prey. In context, the word describes behavior that was calculated and targeted, not random. Chase didn't stumble into being cruel; he selected specific victims and used specific tactics. Understanding this distinction — intentional vs. accidental harm — is central to the novel's moral argument about whether Chase truly deserves his second chance.",
      },
      {
        type: "Multiple Choice",
        skill: "Symbolism — The Video",
        staar: true,
        map: true,
        question:
          "In the novel, a video recording of Chase bullying Joel becomes a significant object in the story. What does this video MOST LIKELY symbolize?",
        options: [
          "A. The power of technology to expose wrongdoing in middle school environments",
          "B. The permanent record of harm — the past cannot be erased even when memory is lost",
          "C. Joel's desire for revenge against Chase for what he did",
          "D. Evidence that Chase's bullying was not as serious as other characters claimed",
        ],
        answer: "B",
        explanation:
          "The video is the novel's most powerful symbol precisely because it does what Chase's amnesia cannot undo — it preserves the truth of who he was and what he did. Memory can be lost, but the consequences of actions remain. The video forces Chase (and the reader) to confront the gap between the person Chase feels like now and the person the evidence proves he was. Korman uses it to argue that change must be measured against real damage, not just good intentions.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Relationship — Chase and Mr. Solway",
        staar: true,
        map: true,
        question:
          "Why is Chase's friendship with Mr. Solway at the veterans' care facility significant to the development of Chase's character?",
        options: [
          "A. Mr. Solway is the only character who knows Chase's full history and can judge him objectively.",
          "B. The friendship allows Chase to experience genuine connection built entirely on who he is now — not who he was — and to understand what it means to show up for someone else.",
          "C. Mr. Solway helps Chase remember his past by sharing stories about war and sacrifice.",
          "D. The friendship gives Chase a way to avoid dealing with the consequences of his past at school.",
        ],
        answer: "B",
        explanation:
          "Mr. Solway doesn't know who the old Chase was. Their friendship is one of the only relationships in the novel built completely on the new Chase's choices and character. In it, Chase discovers what it feels like to be genuinely valued — and to genuinely value someone in return. This relationship is also where Chase learns the cost of real courage: Mr. Solway's war stories redefine bravery in a way that reshapes how Chase sees his old bullying persona.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Textual Evidence — Redemption",
        staar: true,
        map: false,
        question:
          "Does Chase earn his second chance by the end of the novel, or does he simply benefit from luck? Use evidence from the text to support your position.",
        options: [],
        answer:
          "Strong responses should: (1) Take a clear position — yes, Chase earns it, or no, earning implies the victims' forgiveness which is not his to claim; (2) Support the position with at least two specific actions Chase takes (e.g., defending Joel, standing up to Aaron, volunteering honestly at the care facility); (3) Acknowledge the counterargument — that Chase's good behavior came easier because he doesn't remember what he did; (4) Conclude with a statement about what 'earning' a second chance actually requires.",
        explanation:
          "This SCR is intentionally open-ended — there is no single correct position. STAAR rewards responses that take a defensible claim, support it with specific evidence, and demonstrate awareness of complexity. Responses that argue both 'yes' and 'no' without committing to a position will score lower than those with a clear, supported stance.",
        strongExample: "Chase earns his second chance not because he remembers what he did, but because his choices — made without the weight of memory — consistently reflect the kind of person he is choosing to become. When he stands between Aaron and Joel at the video production club, knowing it will cost him his old social standing, he is not acting from guilt. He is acting from a genuine sense of what is right, which is more meaningful than guilt-driven behavior. Korman suggests that earning a second chance is not about fully atoning for every past action — it is about consistently choosing to be better when it matters. Chase does this, repeatedly, even when it costs him something real.",
        weakExample: "I think Chase earns his second chance because he does a lot of good things in the book. He helps Joel and he volunteers at the care facility. He also stands up to Aaron which is brave. So yes, I think he deserves it.",
        weakFeedback: "This response lists evidence but never analyzes it. 'He does a lot of good things' is a summary. A strong SCR takes a clear position AND explains what the evidence proves — not just what Chase did, but what his choices reveal about who he is becoming, and why that matters to Korman's argument about redemption. The counterargument also needs to be acknowledged and rebutted: that his good behavior came easier without the weight of remembering what he did.",
      },
      {
        type: "Multiple Choice",
        skill: "Conflict — Internal vs. External",
        staar: true,
        map: true,
        question:
          "Which type of conflict is MOST central to Chase's arc throughout the novel?",
        options: [
          "A. Character vs. Nature — Chase struggles to physically recover from his injury",
          "B. Character vs. Character — Chase battles Aaron for social dominance at school",
          "C. Character vs. Self — Chase must decide who he wants to be when the pressure to return to his old ways intensifies",
          "D. Character vs. Society — Chase fights against a school system that refuses to believe he has changed",
        ],
        answer: "C",
        explanation:
          "While external conflicts exist — Aaron's pressure, Shoshanna's skepticism, the school's history — the core of the novel is Chase's internal struggle. When Aaron and his old crew pressure him to return to bullying, when it would be easy to slip back into the power his old reputation provides, Chase must actively choose who he is. That moment of choice, repeated throughout the novel, is where his real character is forged.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Theme — Victims and Forgiveness",
        staar: true,
        map: false,
        question:
          "Part A: What does the novel suggest about whether victims of bullying are obligated to forgive those who hurt them?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. The novel suggests that forgiving bullies is necessary for victims to heal and move forward.\nPart A — B. The novel suggests that victims have no obligation to forgive — their healing is separate from the bully's redemption.\nPart A — C. The novel suggests that forgiveness is only possible after the bully publicly admits everything they did.\nPart A — D. The novel suggests that victims who do not forgive are allowing their pain to define them unnecessarily.\n\nPart B — A. Shoshanna ultimately gives Chase a warm welcome back into the friend group once he proves himself.\nPart B — B. Shoshanna's wariness toward Chase never fully disappears — and the novel treats this as legitimate, not as a character flaw she needs to overcome.\nPart B — C. Joel tells Chase he forgives him after Chase stands up for him publicly.\nPart B — D. The narrative ends with all of Chase's former victims expressing complete forgiveness.",
        ],
        answer: "Part A: B | Part B: B",
        explanation:
          "Korman is careful not to resolve this novel with easy, feel-good forgiveness. Shoshanna's lingering caution at the end is not presented as her failing — it is presented as the honest, rational response of someone who was genuinely hurt. The novel separates Chase's redemption from his victims' emotional recovery, arguing these are two different processes on two different timelines. This is one of the novel's most mature and important ideas.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question:
          "A teacher in the novel describes Chase's pre-amnesia behavior as 'reprehensible.' Based on context clues, what does 'reprehensible' most likely mean?",
        options: [
          "A. Worthy of praise and recognition for its boldness",
          "B. Understandable given the difficult circumstances Chase was raised in",
          "C. Deserving of strong moral condemnation",
          "D. Unusual but not necessarily harmful to others",
        ],
        answer: "C",
        explanation:
          "'Reprehensible' means deserving of censure or blame — it comes from the Latin reprehendere, meaning to grab hold of and hold back, and evolved to describe behavior that should be condemned. In context, the teacher is not hedging or qualifying: Chase's past actions are described as morally indefensible. The word signals that the novel does not ask readers to excuse what the old Chase did — only to consider whether people can genuinely change.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Author's Craft — Multi-POV Structure",
        staar: true,
        map: false,
        question:
          "How does the novel's use of multiple narrators shape the reader's understanding of Chase's character in a way that a single first-person narrator could not? Use evidence from the text to support your response.",
        options: [],
        answer:
          "Strong responses should: (1) Explain that a single narrator (Chase) would limit the reader to Chase's own limited, memory-free perspective; (2) Identify at least two specific things the reader learns from other narrators that Chase does not know about himself — for example, the specific cruelty of past incidents described by Shoshanna or Joel; (3) Explain how this gap between what Chase knows and what the reader knows creates dramatic irony and deepens the moral stakes; (4) Connect this craft choice back to the novel's theme: understanding bullying's full impact requires hearing from both the bully and the bullied.",
        explanation:
          "This SCR targets author's craft at a sophisticated level — asking students to analyze why a structural choice matters, not just what it is. STAAR rewards responses that connect craft decisions to thematic meaning. Use RACES and aim for 5–6 focused sentences.",
        strongExample: "In Restart, Korman's use of multiple narrators allows the reader to understand Chase's character more fully than Chase himself can — and this gap is where the novel's moral argument lives. A single narrator (Chase) would give us only a confused boy trying to figure out who he is; he has no access to his own past. But because Shoshanna's chapters precede many of Chase's, we know exactly what Chase did to her and Joel before we experience Chase's bewilderment at their coldness. This structure creates dramatic irony that is also an act of empathy — Korman forces the reader to occupy the victim's perspective first, which means we carry that knowledge into every scene featuring the new Chase. We can see his growth clearly precisely because we understand the full distance he has traveled from who he was.",
        weakExample: "The novel uses multiple narrators because it is told from different perspectives. We get to see the story from Chase's point of view and also from Shoshanna's point of view. This helps the reader understand what is happening better.",
        weakFeedback: "'Helps the reader understand what is happening better' is too vague to score well. A strong SCR identifies a specific thing the reader learns from a non-Chase narrator that Chase himself cannot know, and then explains what knowing that specific thing does to the reader's experience of Chase's chapters. The analytical move is: what does the structural arrangement of perspectives do to the reader's moral experience of the story?"
      },
      {
        type: "Multiple Choice",
        skill: "Genre — Realistic Fiction",
        staar: true,
        map: true,
        question:
          "Although Chase's amnesia might seem like an unusual plot device, Restart is classified as realistic fiction. Which element BEST justifies this genre classification?",
        options: [
          "A. Amnesia from a head injury is medically impossible, which places the novel in the fantasy genre.",
          "B. All of the events, relationships, and consequences in the novel — including the amnesia — could plausibly occur in the real world.",
          "C. The novel is based on a true story about a bully who fell off a roof.",
          "D. The school setting makes any novel automatically realistic fiction, regardless of plot elements.",
        ],
        answer: "B",
        explanation:
          "Realistic fiction is defined by stories set in the real world with events that could plausibly happen — not by stories without any unusual circumstances. Memory loss from head trauma is a real medical phenomenon. The school conflicts, family dynamics, veteran friendships, and social consequences of bullying are all grounded in recognizable reality. Nothing in the novel requires a suspension of real-world rules, which distinguishes it from fantasy.",
      },
      {
        type: "Extended Constructed Response (ECR)",
        skill: "Theme + Multiple Perspectives + Writing",
        staar: true,
        map: false,
        question:
          "Gordon Korman structures Restart so that the reader understands Chase's bullying through the eyes of its victims before Chase himself fully does. Write a response in which you analyze how this structural choice develops the novel's central ideas about empathy and the true cost of cruelty. Use specific evidence from the text to support your analysis.",
        options: [],
        answer:
          "Strong responses should: (1) Open with a clear thesis connecting the multi-POV structure to the themes of empathy and the lasting impact of cruelty; (2) Analyze at least two specific examples of what a victim-narrator (Shoshanna, Joel, or another) reveals about the old Chase's behavior and its consequences — with specific detail; (3) Explain how reading these perspectives before or alongside Chase's own chapters forces the reader to hold Chase accountable even while following his journey; (4) Argue that the structural choice is itself an act of empathy — Korman insists the reader occupy the victim's perspective, not just the perpetrator's; (5) Conclude by connecting this to the author's purpose: the novel is not just a redemption story for Chase — it is a demand that readers understand what needs to be redeemed, and why.",
        explanation:
          "This ECR asks students to analyze structure as a thematic tool — one of the highest-order STAAR and MAP reading skills at Grade 8. Strong responses go beyond summarizing each narrator's perspective and instead analyze what the structural arrangement of those perspectives does to the reader's moral experience of the novel. Aim for an introduction, 3 analytical body paragraphs, and a conclusion.",
        strongExample: "Korman's decision to give Shoshanna and Joel chapters that precede many of Chase's own is not a neutral structural choice — it is a demand that the reader feel the weight of Chase's past before they are allowed to sympathize with his present. When we read about Joel's humiliation at Chase's hands, and then immediately read a chapter in which Chase is confused about why people fear him, the dramatic irony is not merely clever — it is morally uncomfortable. We know what Chase did. We watch him not knowing. And that discomfort is Korman's thematic point: empathy for a bully's redemption must be earned by first fully understanding what needs to be redeemed. The structure ensures that the reader cannot simply forgive Chase because he seems nice now — we have to carry the evidence of who he was into every scene of who he is becoming. This is how Korman uses architecture to argue that change is meaningful only when measured against real damage.",
        weakExample: "The book uses multiple perspectives to show different characters' views. Shoshanna's chapters show that she was hurt by Chase. Chase's chapters show that he doesn't remember what he did. This helps the reader see the full picture of what happened.",
        weakFeedback: "'Helps the reader see the full picture' describes what the structure does but not what it means. A strong ECR analyzes the effect of the structural arrangement — specifically, what does it do to the reader's moral experience to read the victim's perspective first? How does that sequencing shape the reader's response to Chase's confusion and growth? The goal is not to describe each narrator but to argue what the arrangement of narrators accomplishes thematically."
      },
    ],
  },
  {
    id: "tollbooth",
    title: "The Phantom Tollbooth",
    author: "Norton Juster",
    genre: "Fantasy / Allegory / Adventure",
    lexile: "1000L",
    color: "#6E2C00",
    accent: "#F0A500",
    emoji: "🚗",
    isbn: "9780394820378",
    summary: {
      overview:
        "Milo is a bored, listless boy who finds no meaning or excitement in anything — school, learning, or the world around him. One day a mysterious tollbooth appears in his room. He drives through it and enters the Lands Beyond, a fantastical kingdom where words and numbers are at war, Rhyme and Reason have been banished, and logic, language, and learning are literal places and characters. Accompanied by Tock the Watchdog and the Humbug, Milo embarks on a quest to rescue the princesses Rhyme and Reason from the Castle in the Air. Along the way he encounters the Whether Man, the Soundkeeper, the Mathemagician, the Terrible Trivium, and dozens of other characters who are each walking embodiments of ideas. The journey transforms Milo — he returns home as someone who has discovered that the world is endlessly interesting if you pay attention to it.",
      themes: [
        "The danger of apathy and boredom — failing to engage with the world is its own kind of imprisonment",
        "The interdependence of words and numbers — learning and language are not opposites but partners",
        "Curiosity as the foundation of a meaningful life",
        "The value of Rhyme and Reason — without them, the world descends into nonsense",
        "Growth through adventure — Milo becomes capable by choosing to try, not by being naturally gifted",
        "Time — its preciousness and how we waste or honor it",
      ],
      characters: [
        { name: "Milo", role: "Protagonist — a bored, disengaged boy who transforms through his journey into someone who finds the world endlessly fascinating" },
        { name: "Tock", role: "A Watchdog with a clock in his body — represents the value and preciousness of time; Milo's most loyal companion" },
        { name: "The Humbug", role: "A pompous, boastful beetle who often misleads Milo — represents the danger of following confident-sounding nonsense" },
        { name: "Rhyme and Reason", role: "The banished princesses whose absence has caused chaos in the Lands Beyond — represent the harmony between language and logic" },
        { name: "The Mathemagician", role: "Ruler of Digitopolis — represents the power and beauty of numbers; his rivalry with the Wordsmith mirrors false conflicts between disciplines" },
        { name: "King Azaz the Unabridged", role: "Ruler of Dictionopolis — represents the power of words; his feud with the Mathemagician is the source of the kingdom's dysfunction" },
        { name: "The Terrible Trivium", role: "A villain who assigns meaningless, endless tasks — represents wasted time and purposeless busywork" },
      ],
      setting: "The Lands Beyond — a magical allegorical kingdom where abstract concepts (words, numbers, time, color, sound, sense) are literal places, people, and objects. Reached through the Phantom Tollbooth that appears in Milo's bedroom.",
      literaryDevices: [
        { device: "Allegory", example: "Almost every character, place, and event represents an abstract idea. Dictionopolis represents the world of words; Digitopolis represents numbers; the Doldrums represent apathy and inaction. The entire novel is an extended allegory for the life of the mind." },
        { device: "Wordplay and Puns", example: "Juster builds the world almost entirely out of language jokes — 'jumping to conclusions' is a literal island, 'half-baked ideas' are served as food, characters eat their words. The humor is inseparable from the intellectual content." },
        { device: "Personification", example: "Abstract concepts become characters: the Whether Man (weather/whether), the Soundkeeper, the Dodecahedron (a math shape who speaks). Juster personifies ideas to make them tangible and funny." },
        { device: "Satire", example: "Juster satirizes how people treat education — as pointless busywork — through the Terrible Trivium's meaningless tasks and the endless bureaucracy of the Lands Beyond." },
        { device: "The Hero's Journey", example: "Milo follows the classic structure: a call to adventure (the tollbooth), crossing the threshold, trials, allies (Tock, the Humbug), a central quest, and a return transformed." },
        { device: "Irony", example: "The boy who finds everything boring embarks on the most intellectually rich adventure imaginable — Juster's irony is that the cure for boredom was always available; Milo simply wasn't paying attention." },
      ],
      authorPurpose:
        "Norton Juster wrote The Phantom Tollbooth to celebrate the joy of learning, language, and thinking — and to challenge the idea that education is dull. By turning words and numbers into a fantastical landscape, he argues that the tools of the mind are not obstacles to adventure but the source of it. The novel is a love letter to curiosity itself.",
    },
    questions: [
      {
        type: "Multiple Choice",
        skill: "Theme — Apathy vs. Engagement",
        staar: true,
        map: true,
        question: "Which statement BEST expresses a central theme of The Phantom Tollbooth?",
        options: [
          "A. Learning is a punishment that adults impose on children who would rather play.",
          "B. The world is endlessly fascinating to those who choose to pay attention — boredom is a choice, not a condition.",
          "C. Fantasy worlds are more valuable than the real world because they offer escape from responsibility.",
          "D. Words and numbers are in competition, and a person must choose to be better at one or the other.",
        ],
        answer: "B",
        explanation: "Milo begins the novel completely disengaged from everything around him. His journey transforms him not by changing the world but by changing how he looks at it. Juster's argument is that the richness and strangeness Milo discovers in the Lands Beyond was always present in the real world — he simply wasn't looking. Boredom, the novel argues, is a failure of attention, not a feature of reality.",
      },
      {
        type: "Multiple Choice",
        skill: "Allegory",
        staar: true,
        map: true,
        question: "The Phantom Tollbooth is classified as an allegory. Which of the following BEST explains what this means?",
        options: [
          "A. The story takes place in a fantasy world with no connection to real-world ideas",
          "B. Every character, place, and event represents an abstract idea or concept from real life",
          "C. The story uses animals as main characters to teach moral lessons",
          "D. The author uses the story to criticize a specific historical event or political figure",
        ],
        answer: "B",
        explanation: "An allegory uses a narrative — characters, settings, and plot — to represent ideas that exist outside the story. In The Phantom Tollbooth, Dictionopolis represents the world of words, Digitopolis represents mathematics, the Doldrums represent apathy, and the Terrible Trivium represents wasted time. The adventure is literally a journey through a landscape of ideas.",
      },
      {
        type: "Multiple Choice",
        skill: "Literary Device — Wordplay and Puns",
        staar: true,
        map: true,
        question: "Norton Juster constructs much of the novel's world out of wordplay and puns — 'jumping to conclusions' is a literal island, 'eating your words' is an actual meal. What is the MOST LIKELY purpose of this technique?",
        options: [
          "A. To make the story easier to read by keeping the vocabulary simple",
          "B. To argue that language is meaningless and words can be twisted to mean anything",
          "C. To demonstrate that language is rich, layered, and alive — that words contain worlds within them",
          "D. To create humor that distracts the reader from the more serious themes of the story",
        ],
        answer: "C",
        explanation: "Juster's wordplay is not decoration — it is the novel's central argument in action. By making idioms literal, he shows that language is not just a tool for communication but a world unto itself, full of history, ambiguity, and surprise. Every pun is Juster's way of saying: look more closely at the words you use every day. They are stranger and richer than you think.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Analysis — Tock",
        staar: true,
        map: true,
        question: "Tock the Watchdog has a large alarm clock ticking inside his body. What does Tock MOST LIKELY symbolize?",
        options: [
          "A. The importance of being on time for school and appointments",
          "B. The preciousness of time and the cost of wasting it",
          "C. The idea that technology has replaced human connection",
          "D. The conflict between the past and the future",
        ],
        answer: "B",
        explanation: "Tock is a walking, breathing reminder that time passes constantly and cannot be recovered. His name reinforces his purpose — a watchdog who watches over time. In a novel about a boy who has wasted enormous amounts of time through boredom and inattention, Tock's presence is a constant, gentle rebuke: time is the most precious thing you have, and spending it on nothing is the greatest loss.",
      },
      {
        type: "Multiple Choice",
        skill: "Character Analysis — The Terrible Trivium",
        staar: true,
        map: true,
        question: "The Terrible Trivium assigns Milo and his companions endless, meaningless tasks — moving sand grain by grain, emptying a well with a thimble. What does the Terrible Trivium represent as an allegorical character?",
        options: [
          "A. The value of hard work and dedication to difficult goals",
          "B. The dangers of physical exhaustion during long journeys",
          "C. Wasted time and the seductive pull of purposeless busywork",
          "D. Teachers who assign too much homework to their students",
        ],
        answer: "C",
        explanation: "The Terrible Trivium is the allegorical embodiment of triviality — pointless activity that consumes time without producing anything meaningful. His tasks are endless by design: you can never finish them. Juster uses him to warn against the kind of passive, habitual, purposeless activity that fills life without enriching it — the adult equivalent of Milo's listless boredom at the start of the novel.",
      },
      {
        type: "Multiple Choice",
        skill: "Author's Craft — Satire",
        staar: true,
        map: true,
        question: "Juster satirizes how people approach education in many scenes throughout the novel. What is satire, and how does it function here?",
        options: [
          "A. Satire is a type of serious drama that critiques society through tragedy",
          "B. Satire uses humor, irony, and exaggeration to criticize or expose flaws in people or institutions",
          "C. Satire is a narrative technique that hides the author's true meaning behind confusing language",
          "D. Satire is only used in nonfiction writing to critique political figures",
        ],
        answer: "B",
        explanation: "Juster uses the absurd bureaucracy and nonsensical rules of the Lands Beyond to satirize the way education is often treated — as arbitrary, pointless, and disconnected from real curiosity. By exaggerating these tendencies to comic extremes (characters who speak only in clichés, schools that teach useless information), he makes a serious argument: education should cultivate wonder, not kill it.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Theme — Words vs. Numbers",
        staar: true,
        map: false,
        question: "Part A: What does the feud between King Azaz (ruler of Dictionopolis) and the Mathemagician (ruler of Digitopolis) represent thematically?\n\nPart B: Which detail from the novel BEST supports your answer to Part A?",
        options: [
          "Part A — A. The feud shows that political rivalries always lead to war and destruction.\nPart A — B. The feud represents the false idea that words and numbers are opposites that cannot coexist, when in fact both are essential.\nPart A — C. The feud proves that words are more important than numbers for living a meaningful life.\nPart A — D. The feud is simply a plot device to give Milo a conflict to resolve on his quest.\n\nPart B — A. Both rulers agree to help Milo only on the condition that he never uses the other's domain again.\nPart B — B. Both rulers give Milo a gift for his journey — one gives words, the other gives numbers — and both gifts are equally essential to completing the quest.\nPart B — C. The Mathemagician destroys all words in Digitopolis to assert his dominance.\nPart B — D. King Azaz admits that numbers are superior and concedes the argument to the Mathemagician.",
        ],
        answer: "Part A: B | Part B: B",
        explanation: "The feud between Azaz and the Mathemagician is Juster's satire of the false divide between 'word people' and 'math people.' By having both rulers give Milo gifts that he needs equally, and by making their shared banishment of Rhyme and Reason the source of all their problems, Juster argues that language and mathematics are complementary tools of the same reasoning mind — not rivals.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question: "Early in the novel, Milo is described as approaching everything with 'lethargy.' Based on context clues, what does 'lethargy' most likely mean?",
        options: [
          "A. Intense curiosity and eagerness to explore new ideas",
          "B. A state of sluggish disinterest and lack of energy or enthusiasm",
          "C. Careful, methodical attention to every detail",
          "D. Restless anxiety that makes it hard to stay focused",
        ],
        answer: "B",
        explanation: "'Lethargy' comes from the Greek for forgetfulness and describes a state of sluggish inactivity. In context, Milo does not dislike any particular thing — he is indifferent to everything equally. He moves through life without energy, interest, or engagement. This opening characterization establishes exactly what the adventure must cure: not ignorance, but apathy.",
      },
      {
        type: "Multiple Choice",
        skill: "Plot Structure — Hero's Journey",
        staar: true,
        map: true,
        question: "How does Milo's character at the END of the novel contrast with who he was at the BEGINNING, and what does this arc reveal about the novel's central theme?",
        options: [
          "A. Milo returns unchanged, suggesting that fantasy adventures have no real impact on real life",
          "B. Milo returns more disciplined and organized, suggesting that the theme is about following rules",
          "C. Milo returns curious, engaged, and eager to explore — his transformation reveals that the theme is about the power of choosing to pay attention",
          "D. Milo returns sadder than before, understanding that the real world can never match the magic of the Lands Beyond",
        ],
        answer: "C",
        explanation: "The contrast between beginning-Milo (bored with everything) and ending-Milo (eager to re-examine the real world) is the novel's entire argument made visible. Crucially, the real world hasn't changed — Milo has. He now sees it as full of the same richness and strangeness he found in the Lands Beyond. The theme is not that adventure changes the world; it is that curiosity changes how you experience it.",
      },
      {
        type: "Multiple Choice",
        skill: "Personification — The Doldrums",
        staar: true,
        map: true,
        question: "The Doldrums are a place where thinking and laughing are illegal and nothing ever changes. What abstract idea do the Doldrums personify?",
        options: [
          "A. Depression and mental illness, represented as a literal place Milo must escape",
          "B. Apathy and the paralysis of a mind that refuses to engage — Milo's own mental state at the novel's opening",
          "C. The boredom of school, satirized as a place where children are sent against their will",
          "D. The danger of overthinking, where too many ideas cause paralysis",
        ],
        answer: "B",
        explanation: "The Doldrums are a literal externalization of Milo's interior state at the novel's opening. A mind that does not think, does not laugh, and in which nothing ever changes is a mind trapped in the Doldrums. Juster uses the device to make Milo's problem visible and concrete — and to signal that the cure is thinking itself. Tock rescues them precisely because being a Watchdog means he values the active, purposeful use of time.",
      },
      {
        type: "Vocabulary in Context",
        skill: "Vocabulary",
        staar: true,
        map: true,
        question: "The Whether Man tells Milo it is 'far more important to know whether there will be weather than what the weather will be.' The joke depends on the word 'whether.' Based on context, what does this exchange satirize?",
        options: [
          "A. The uselessness of weather forecasting as a science",
          "B. The way some people speak with great confidence about things that are trivially meaningless",
          "C. The difficulty of learning vocabulary words that sound alike",
          "D. The idea that asking questions is more important than finding answers",
        ],
        answer: "B",
        explanation: "The Whether Man is a walking pun — his name sounds like 'weather man' but he speaks only in whether/or constructions, confidently discussing what is essentially nothing. Juster uses him to satirize a certain kind of speech: authoritative-sounding language that, on examination, says nothing at all. This is one of the novel's recurring targets: the difference between the appearance of wisdom and actual thinking.",
      },
      {
        type: "Part A / Part B (Evidence-Based)",
        skill: "Character Change — Milo",
        staar: true,
        map: false,
        question: "Part A: What is the most significant thing Milo learns from his journey through the Lands Beyond?\n\nPart B: Which moment from the novel BEST demonstrates that Milo has learned this lesson?",
        options: [
          "Part A — A. Milo learns that words are more important than numbers and should be studied first.\nPart A — B. Milo learns that the real world, examined with curiosity and attention, is just as rich and strange as any fantasy.\nPart A — C. Milo learns that he must complete difficult tasks to prove his worth before he can be happy.\nPart A — D. Milo learns that boredom is caused by school and disappears once he is free of it.\n\nPart B — A. When Milo returns home and immediately wants to go back through the tollbooth for another adventure.\nPart B — B. When Milo returns home and realizes that the tollbooth has vanished — but instead of feeling loss, he looks around his room and sees it full of things to explore, eager to begin.\nPart B — C. When Milo successfully rescues Rhyme and Reason and is celebrated by the entire Lands Beyond.\nPart B — D. When Milo defeats the Terrible Trivium by refusing to complete any more of his pointless tasks.",
        ],
        answer: "Part A: B | Part B: B",
        explanation: "The novel's most important moment is not the rescue of Rhyme and Reason but the ending: Milo finds the tollbooth gone and, rather than despair, looks around his ordinary room and sees it as a place full of things to discover. The fantasy world gave him the lens; the real world was always the destination. This is Juster's full argument — curiosity transforms reality itself.",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Allegory + Textual Evidence",
        staar: true,
        map: false,
        question: "Choose ONE location in the Lands Beyond (Dictionopolis, Digitopolis, the Doldrums, or another) and explain what abstract idea it represents and how Juster uses it to develop a theme in the novel. Use evidence from the text to support your response.",
        options: [],
        answer: "Strong responses should: (1) Name a specific location and clearly state what abstract idea it represents; (2) Describe at least one specific scene or detail from that location as textual evidence; (3) Explain how that location's characteristics develop a theme — what argument is Juster making through this allegorical place? (4) Connect the location back to Milo's overall journey and transformation.",
        explanation: "This SCR tests allegorical reading — a high-value Grade 8 skill. Strong responses do not just identify what a location represents but explain how Juster uses it to make a thematic argument. Use RACES and aim for 4–6 focused sentences.",
        strongExample: "In The Phantom Tollbooth, the Doldrums represent the paralysis of a mind that refuses to engage with the world — the exact condition Milo suffers from at the novel's opening. In the Doldrums, thinking and laughing are literally illegal, and nothing ever changes. Juster uses this allegorical place to give Milo's internal boredom a visible, physical form: rather than telling us Milo is disengaged, Juster shows us a landscape where disengagement is the law. The fact that Tock — a Watchdog who values time — is what rescues them signals the novel's argument: the cure for apathy is not entertainment but the active, purposeful use of your mind and your time.",
        weakExample: "The Doldrums is a place in the story where nothing is allowed to happen. Milo gets stuck there because he wasn't paying attention. This shows that being bored is bad and you should always be active.",
        weakFeedback: "'Being bored is bad' is a moral, not a theme analysis. A strong SCR identifies what the Doldrums represent allegorically, cites a specific detail that supports that interpretation, and then explains what argument Juster is making through that allegorical choice. The analytical move is: what does making the Doldrums a place with actual laws against thinking say about how Juster views apathy?",
      },
      {
        type: "Short Constructed Response (SCR)",
        skill: "Irony + Theme",
        staar: true,
        map: false,
        question: "It is ironic that Milo — who is bored by everything in the real world — ends up in a kingdom where every idea, word, and number comes alive as a fantastical adventure. How does Juster use this irony to develop the novel's central theme? Use evidence from the text in your response.",
        options: [],
        answer: "Strong responses should: (1) Explain the irony clearly — the boy who finds everything boring encounters the richest possible landscape of ideas; (2) Connect the irony to the theme — that the richness Milo finds in the Lands Beyond was always present in the real world, he simply wasn't paying attention; (3) Cite at least one specific detail from the Lands Beyond as evidence; (4) Explain how the ending (Milo returning to his ordinary room and finding it fascinating) resolves the irony and confirms the theme.",
        explanation: "This SCR requires understanding irony and connecting it to thematic argument — two distinct skills. Strong responses identify the irony precisely and then explain what Juster is saying through it. Use RACES and aim for 5–6 focused sentences.",
        strongExample: "The central irony of The Phantom Tollbooth is that Milo — who cannot find anything interesting in the real world — is transported to a kingdom where every idea he dismissed at school (words, numbers, time, reason) becomes a spectacular, living adventure. Juster uses this irony deliberately: the Lands Beyond is not a different world from Milo's reality but a more honest version of it. Dictionopolis and Digitopolis are what words and numbers actually are — vast, strange, endlessly deep — if you pay attention to them. The irony resolves at the novel's end when Milo returns home and sees his ordinary room as full of things to explore. Juster's argument is that the adventure was never in the Lands Beyond; it was always in the curious mind.",
        weakExample: "It is ironic that Milo is bored but ends up on an exciting adventure. This is because he discovers that learning can be fun. The story teaches us that we should pay more attention in school.",
        weakFeedback: "'Learning can be fun' is a cliché, not a thematic analysis. A strong SCR explains what the specific irony reveals — that the richness Milo finds in fantasy was always present in reality, which is a very different and more precise argument than 'school can be interesting.' The analytical move is connecting the irony to the novel's specific claim about curiosity and attention.",
      },
      {
        type: "Extended Constructed Response (ECR)",
        skill: "Allegory + Theme + Writing",
        staar: true,
        map: false,
        question: "Norton Juster uses allegory throughout The Phantom Tollbooth to argue that the tools of learning — words, numbers, reason, and time — are not burdens to endure but the foundations of a rich and meaningful life. Write a response in which you analyze how at least two allegorical elements (characters, places, or events) develop this argument. Use specific evidence from the text to support your analysis.",
        options: [],
        answer: "Strong responses should: (1) Open with a clear thesis connecting the allegorical elements to Juster's argument about learning and a meaningful life; (2) Analyze at least two specific allegorical elements — e.g., the Doldrums (apathy as a literal trap), Tock (time as precious), the Terrible Trivium (meaningless busyness), Dictionopolis/Digitopolis (the false war between words and numbers); (3) For each, cite a specific scene or detail and explain what it argues; (4) Connect both elements to the same overarching theme; (5) Conclude by explaining what Juster ultimately wants the reader to take away about the relationship between curiosity, learning, and the quality of a life.",
        explanation: "This ECR asks students to synthesize across multiple allegorical elements — the highest-order allegorical reading skill. Strong responses do not simply identify what each element represents but analyze what Juster is arguing through the combination of them. Aim for an introduction, 2–3 analytical body paragraphs, and a conclusion. Every sentence should advance the argument.",
        strongExample: "In The Phantom Tollbooth, Norton Juster uses allegory to argue that the tools of learning — words, numbers, time, and reason — are not obstacles to a fulfilling life but its very architecture. Two of the novel's most powerful allegorical elements make this argument with particular force. The Terrible Trivium assigns Milo tasks that are endless and meaningless — moving sand grain by grain, emptying a well with a thimble — designed to consume time without producing anything. He represents the seductive pull of purposeless activity: the comfortable feeling of being busy while accomplishing nothing. Juster places him near the end of the journey as a final, most dangerous temptation, because mindless busyness is harder to escape than obvious failure. In contrast, Tock the Watchdog — a dog with a clock ticking inside him — represents time used purposefully. His presence throughout Milo's journey is a constant reminder that every moment has weight. Together, these two characters argue the same point from opposite directions: time is the most finite resource a person has, and how you choose to spend it — on trivial busywork or on genuine engagement — determines the shape of your life. Juster's allegory is ultimately a case for paying attention: not because school demands it, but because a curious mind is the only tool capable of turning an ordinary room into an adventure.",
        weakExample: "The Terrible Trivium is a villain who makes Milo do useless tasks. Tock is a dog with a clock who helps Milo on his journey. Both of these characters are important to the story because they help develop the theme that time is important and you should not waste it.",
        weakFeedback: "This response summarizes the characters but does not analyze them as allegorical elements. 'Time is important' is too broad — a strong ECR identifies what specific argument Juster is making through each character's design and placement in the story. The analytical questions to answer are: Why is the Trivium placed near the end of the journey? What does Tock's constant presence throughout say about time's relationship to the entire adventure? And how do the two characters work together to make the same argument from different angles?",
      },
    ],
  },
];

const questionTypeColors = {
  "Multiple Choice": { bg: "#EBF5FB", border: "#2980B9", label: "#1A5276" },
  "Part A / Part B (Evidence-Based)": { bg: "#FEF9E7", border: "#D4AC0D", label: "#7D6608" },
  "Short Constructed Response (SCR)": { bg: "#EAFAF1", border: "#27AE60", label: "#1E8449" },
  "Extended Constructed Response (ECR)": { bg: "#FDEDEC", border: "#E74C3C", label: "#922B21" },
  "Vocabulary in Context": { bg: "#F5EEF8", border: "#8E44AD", label: "#6C3483" },
};

const isWrittenResponse = (type) =>
  type.includes("Short Constructed") || type.includes("Extended Constructed");

const assessmentBadge = (staar, map) => (
  <span style={{ display: "flex", gap: 6 }}>
    {staar && (
      <span style={{ background: "#C0392B", color: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>
        STAAR
      </span>
    )}
    {map && (
      <span style={{ background: "#1F618D", color: "#fff", borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>
        MAP
      </span>
    )}
  </span>
);

// ── RACES Writing Frame ──────────────────────────────────────────────────────
function RACESFrame({ type }) {
  const isECR = type.includes("Extended");
  const steps = isECR
    ? [
        { letter: "R", label: "Restate", desc: "Restate the prompt in your own words as your opening sentence." },
        { letter: "A", label: "Assert", desc: "State your claim/thesis clearly and specifically — this is your argument." },
        { letter: "C", label: "Cite", desc: "Quote or closely paraphrase at least 2 specific pieces of textual evidence." },
        { letter: "E", label: "Explain", desc: "Explain HOW each piece of evidence proves your claim. Don't assume it's obvious." },
        { letter: "S", label: "Summarize", desc: "Wrap up with a conclusion that connects your analysis back to the bigger theme or author's purpose." },
      ]
    : [
        { letter: "R", label: "Restate", desc: "Restate the question in one opening sentence." },
        { letter: "A", label: "Answer", desc: "State your answer/claim directly and clearly." },
        { letter: "C", label: "Cite", desc: "Cite one specific piece of textual evidence." },
        { letter: "E", label: "Explain", desc: "Explain how the evidence supports your claim." },
        { letter: "S", label: "Summarize", desc: "Wrap up with one closing sentence connecting to the theme." },
      ];
  return (
    <div style={{ background: "#F0FFF4", border: "1.5px solid #27AE60", borderRadius: 10, padding: "14px 16px", marginBottom: 14 }}>
      <div style={{ fontWeight: 800, fontSize: 12, color: "#1E8449", letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>
        ✏️ RACES Writing Framework — {isECR ? "ECR (3–5 paragraphs)" : "SCR (4–6 sentences)"}
      </div>
      <div style={{ display: "grid", gap: 7 }}>
        {steps.map((s) => (
          <div key={s.letter} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ background: "#27AE60", color: "#fff", borderRadius: 6, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13, flexShrink: 0 }}>
              {s.letter}
            </span>
            <div>
              <span style={{ fontWeight: 700, fontSize: 12, color: "#1E8449" }}>{s.label}: </span>
              <span style={{ fontSize: 12, color: "#2C3E50", lineHeight: 1.5 }}>{s.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Sentence Starters ────────────────────────────────────────────────────────
function SentenceStarters({ type, bookColor }) {
  const [open, setOpen] = useState(false);
  const isECR = type.includes("Extended");
  const starters = isECR
    ? {
        "Opening / Thesis": [
          "In [Title], [Author] develops the theme that…",
          "Throughout the novel, [Author] suggests that…",
          "The author uses [character/device] to argue that…",
        ],
        "Introducing Evidence": [
          "For example, when [character] [action], it reveals that…",
          "This is evident when the text states…",
          "One key moment occurs when…",
        ],
        "Explaining Evidence": [
          "This demonstrates that… because…",
          "The significance of this is that…",
          "This choice by the author shows the reader that…",
        ],
        "Conclusion": [
          "Ultimately, [Author] uses [device/character] to show that…",
          "Through this analysis, it is clear that…",
          "This theme matters because it reveals…",
        ],
      }
    : {
        "Opening Claim": [
          "In [Title], [Author] shows that…",
          "The text suggests that [character] is… because…",
          "One important theme in [Title] is…",
        ],
        "Citing Evidence": [
          "For example, when [character]…",
          "The text shows this when…",
          "A specific detail that supports this is…",
        ],
        "Explaining": [
          "This reveals that… because…",
          "This is important because it shows…",
          "The author includes this to demonstrate…",
        ],
      };

  return (
    <div style={{ marginBottom: 14 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none", border: `1.5px solid ${bookColor}`, borderRadius: 8,
          padding: "6px 14px", fontSize: 12, fontWeight: 700, color: bookColor,
          cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
        }}
      >
        💬 {open ? "Hide" : "Show"} Sentence Starters
      </button>
      {open && (
        <div style={{ marginTop: 10, background: "#FDFEFE", border: `1px solid ${bookColor}44`, borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontWeight: 700, fontSize: 11, color: "#888", letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>
            Use these to get started — replace [ ] with your own words
          </div>
          {Object.entries(starters).map(([section, lines]) => (
            <div key={section} style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 11, color: bookColor, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 5 }}>{section}</div>
              {lines.map((line, i) => (
                <div key={i} style={{ fontFamily: "'Georgia', serif", fontSize: 12.5, color: "#2C3E50", lineHeight: 1.6, padding: "3px 0 3px 10px", borderLeft: `3px solid ${bookColor}55` }}>
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Scoring Rubric ───────────────────────────────────────────────────────────
function ScoringRubric({ type }) {
  const [open, setOpen] = useState(false);
  const isECR = type.includes("Extended");

  const rubric = isECR
    ? [
        { score: "4", label: "Accomplished", color: "#1E8449", bg: "#EAFAF1", desc: "Clear, specific thesis. Two or more pieces of well-chosen textual evidence. Thorough explanation of how each piece supports the claim. Demonstrates deep understanding of theme/author's craft. Strong organization, precise word choice, few if any errors." },
        { score: "3", label: "Satisfactory", color: "#D4AC0D", bg: "#FEF9E7", desc: "Adequately stated thesis. At least two pieces of relevant evidence. Explanation is present but may be surface-level for one piece. Generally organized with minor errors that don't affect meaning." },
        { score: "2", label: "Developing", color: "#E67E22", bg: "#FEF5EC", desc: "Vague or general claim. One piece of evidence, or evidence is present but weakly connected to the claim. Explanation is missing or unclear. Some organization issues; errors may affect clarity." },
        { score: "1", label: "Emerging", color: "#C0392B", bg: "#FDEDEC", desc: "No clear claim, or claim does not address the prompt. Little or no textual evidence. No explanation connecting evidence to claim. Significant organization and convention errors." },
        { score: "0", label: "No Response", color: "#7F8C8D", bg: "#F2F3F4", desc: "Off-topic, blank, or simply copies the question without attempting a response." },
      ]
    : [
        { score: "2", label: "Strong", color: "#1E8449", bg: "#EAFAF1", desc: "Clear, direct claim that answers the question. One or more specific pieces of textual evidence, accurately cited. Clear explanation of how the evidence supports the claim. Focused and coherent — all sentences work toward the same point." },
        { score: "1", label: "Partial", color: "#D4AC0D", bg: "#FEF9E7", desc: "Claim is present but vague or partially addresses the question. Evidence is present but may be general or loosely connected. Explanation is incomplete or implied rather than stated. Some relevant ideas present despite organizational weakness." },
        { score: "0", label: "Insufficient", color: "#C0392B", bg: "#FDEDEC", desc: "No clear claim, no textual evidence, or response does not address the prompt. May be off-topic, too brief to evaluate, or simply repeats the question." },
      ];

  return (
    <div style={{ marginBottom: 14 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none", border: "1.5px solid #7F8C8D", borderRadius: 8,
          padding: "6px 14px", fontSize: 12, fontWeight: 700, color: "#555",
          cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
        }}
      >
        📊 {open ? "Hide" : "Show"} Scoring Rubric ({isECR ? "0–4 pts" : "0–2 pts"})
      </button>
      {open && (
        <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
          {rubric.map((r) => (
            <div key={r.score} style={{ background: r.bg, border: `1.5px solid ${r.color}55`, borderRadius: 8, padding: "10px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: r.color, color: "#fff", borderRadius: 6, minWidth: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                {r.score}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 12, color: r.color, marginBottom: 3 }}>{r.label}</div>
                <div style={{ fontSize: 12, color: "#2C3E50", lineHeight: 1.55 }}>{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Strong vs Weak Example ───────────────────────────────────────────────────
function StrongWeakExample({ q, bookColor }) {
  const [open, setOpen] = useState(false);
  if (!q.strongExample || !q.weakExample) return null;
  return (
    <div style={{ marginBottom: 14 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none", border: "1.5px solid #8E44AD", borderRadius: 8,
          padding: "6px 14px", fontSize: 12, fontWeight: 700, color: "#8E44AD",
          cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
        }}
      >
        🔍 {open ? "Hide" : "See"} Strong vs. Weak Response Example
      </button>
      {open && (
        <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
          <div style={{ background: "#EAFAF1", border: "1.5px solid #27AE60", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontWeight: 800, fontSize: 12, color: "#1E8449", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
              ✅ Strong Response
            </div>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: 13, color: "#1A252F", lineHeight: 1.65, margin: 0 }}>{q.strongExample}</p>
          </div>
          <div style={{ background: "#FDEDEC", border: "1.5px solid #E74C3C", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontWeight: 800, fontSize: 12, color: "#922B21", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
              ❌ Weak Response — and Why It Loses Points
            </div>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: 13, color: "#1A252F", lineHeight: 1.65, margin: "0 0 8px 0" }}>{q.weakExample}</p>
            <p style={{ fontSize: 12, color: "#922B21", lineHeight: 1.55, margin: 0, fontWeight: 600 }}>{q.weakFeedback}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Question Card ───────────────────────────────────────────────────────
function QuestionCard({ q, index, bookColor, unlocked }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const colors = questionTypeColors[q.type] || { bg: "#F0F0F0", border: "#999", label: "#333" };
  const isWritten = isWrittenResponse(q.type);

  // When global lock is re-engaged, hide any open answers
  const wasUnlocked = unlocked;
  const [prevUnlocked, setPrevUnlocked] = useState(unlocked);
  if (prevUnlocked !== unlocked) {
    setPrevUnlocked(unlocked);
    if (!unlocked) setRevealed(false);
  }

  const handleRevealClick = () => {
    if (unlocked) {
      setRevealed(!revealed);
    } else {
      setShowPrompt(true);
    }
  };

  return (
    <div
      style={{
        background: colors.bg,
        border: `2px solid ${colors.border}`,
        borderRadius: 12,
        padding: "20px 22px",
        marginBottom: 18,
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ background: colors.border, color: "#fff", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 700 }}>
            Q{index + 1} · {q.type}
          </span>
          <span style={{ background: "#ECF0F1", color: "#555", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 600 }}>
            {q.skill}
          </span>
          {isWritten && (
            <span style={{ background: "#8E44AD", color: "#fff", borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 700 }}>
              ✏️ Written Response
            </span>
          )}
        </div>
        {assessmentBadge(q.staar, q.map)}
      </div>

      {/* Question text */}
      <p style={{ fontFamily: "'Georgia', serif", fontSize: 15.5, lineHeight: 1.65, color: "#2C3E50", marginBottom: 14, whiteSpace: "pre-line" }}>
        {q.question}
      </p>

      {/* MC Options */}
      {q.options.length > 0 && (
        <div style={{ marginBottom: 14 }}>
          {q.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => setSelectedOption(i)}
              style={{
                padding: "9px 14px",
                marginBottom: 6,
                borderRadius: 8,
                border: `1.5px solid ${selectedOption === i ? colors.border : "#CBD5E0"}`,
                background: selectedOption === i ? `${colors.border}18` : "#fff",
                cursor: "pointer",
                fontSize: 14,
                lineHeight: 1.55,
                color: "#2C3E50",
                transition: "all 0.15s ease",
                whiteSpace: "pre-line",
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {/* Writing support tools */}
      {isWritten && (
        <div style={{ marginBottom: 14 }}>
          <RACESFrame type={q.type} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <SentenceStarters type={q.type} bookColor={bookColor} />
            <ScoringRubric type={q.type} />
            <StrongWeakExample q={q} bookColor={bookColor} />
          </div>
        </div>
      )}

      {/* Inline PIN prompt (shows when locked and button clicked) */}
      {showPrompt && !unlocked && (
        <div style={{
          background: "#1A252F",
          border: "2px solid #E74C3C",
          borderRadius: 10,
          padding: "14px 18px",
          marginBottom: 14,
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 20 }}>🔒</span>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
            Answers are locked. Ask a parent to unlock in the header above.
          </span>
          <button
            onClick={() => setShowPrompt(false)}
            style={{
              background: "none", border: "1px solid rgba(255,255,255,0.3)",
              color: "rgba(255,255,255,0.6)", borderRadius: 6,
              padding: "4px 12px", fontSize: 12, cursor: "pointer",
            }}
          >
            OK
          </button>
        </div>
      )}

      {/* Reveal button */}
      <button
        onClick={handleRevealClick}
        style={{
          background: revealed ? "#7F8C8D" : unlocked ? colors.border : "#7F8C8D",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "9px 20px",
          fontSize: 13,
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: 0.3,
          display: "flex",
          alignItems: "center",
          gap: 8,
          opacity: unlocked ? 1 : 0.75,
        }}
      >
        {!unlocked ? "🔒 Answer Locked" : revealed ? "▲ Hide Answer Guide" : "▼ Show Answer Guide"}
      </button>

      {/* Answer + explanation */}
      {revealed && unlocked && (
        <div
          style={{
            marginTop: 14,
            background: "#fff",
            border: `1.5px solid ${colors.border}`,
            borderRadius: 8,
            padding: "14px 16px",
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontWeight: 800, color: colors.label, fontSize: 13, textTransform: "uppercase", letterSpacing: 0.5 }}>
              ✓ Answer:{" "}
            </span>
            <span style={{ fontFamily: "'Georgia', serif", fontSize: 14, color: "#1A252F" }}>{q.answer}</span>
          </div>
          <div>
            <span style={{ fontWeight: 800, color: colors.label, fontSize: 13, textTransform: "uppercase", letterSpacing: 0.5 }}>
              💡 Why:{" "}
            </span>
            <span style={{ fontFamily: "'Georgia', serif", fontSize: 14, color: "#2C3E50", lineHeight: 1.6 }}>{q.explanation}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── PIN Modal ────────────────────────────────────────────────────────────────
const CORRECT_PIN = "0305"; // ← Change this to your preferred PIN

function PinModal({ onSuccess, onCancel }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleDigit = (d) => {
    if (pin.length < 4) {
      const next = pin + d;
      setPin(next);
      setError(false);
      if (next.length === 4) {
        setTimeout(() => {
          if (next === CORRECT_PIN) {
            onSuccess();
          } else {
            setShake(true);
            setError(true);
            setTimeout(() => { setPin(""); setShake(false); }, 600);
          }
        }, 120);
      }
    }
  };

  const handleClear = () => { setPin(""); setError(false); };

  const digits = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["⌫","0","✓"],
  ];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.75)",
      display: "flex", alignItems: "center", justifyContent: "center",
      backdropFilter: "blur(4px)",
    }}
      onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div style={{
        background: "#1A252F",
        borderRadius: 20,
        padding: "32px 28px",
        width: 300,
        boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        border: `2px solid ${error ? "#E74C3C" : "rgba(255,255,255,0.1)"}`,
        animation: shake ? "shake 0.5s ease" : "none",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🔐</div>
        <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>Parent Access</div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 24 }}>
          Enter your PIN to unlock answers
        </div>

        {/* PIN dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{
              width: 16, height: 16, borderRadius: "50%",
              background: pin.length > i ? (error ? "#E74C3C" : "#27AE60") : "rgba(255,255,255,0.2)",
              transition: "background 0.15s ease",
              border: `2px solid ${pin.length > i ? (error ? "#E74C3C" : "#27AE60") : "rgba(255,255,255,0.3)"}`,
            }} />
          ))}
        </div>

        {/* Keypad */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
          {digits.flat().map((d, i) => (
            <button
              key={i}
              onClick={() => {
                if (d === "⌫") handleClear();
                else if (d === "✓") {} // auto-submits at 4 digits
                else handleDigit(d);
              }}
              style={{
                background: d === "✓" ? "#27AE60" : d === "⌫" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "16px 0",
                fontSize: d === "⌫" || d === "✓" ? 18 : 20,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.1s",
              }}
              onMouseEnter={e => e.target.style.background = d === "✓" ? "#1E8449" : "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.target.style.background = d === "✓" ? "#27AE60" : d === "⌫" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.1)"}
            >
              {d}
            </button>
          ))}
        </div>

        {error && (
          <div style={{ color: "#E74C3C", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
            Incorrect PIN — try again
          </div>
        )}

        <button
          onClick={onCancel}
          style={{
            background: "none", border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.5)", borderRadius: 8,
            padding: "8px 24px", fontSize: 13, cursor: "pointer", marginTop: 4,
          }}
        >
          Cancel
        </button>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}

// ── Book Grid Card ────────────────────────────────────────────────────────────
function BookGridCard({ book, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        transform: active ? "translateY(-6px) scale(1.03)" : hovered ? "translateY(-3px) scale(1.01)" : "none",
      }}
    >
      {/* Cover image */}
      <div style={{
        width: "100%",
        aspectRatio: "2/3",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: active
          ? `0 16px 40px ${book.color}88, 0 0 0 3px ${book.color}`
          : hovered
          ? "0 10px 30px rgba(0,0,0,0.6)"
          : "0 4px 16px rgba(0,0,0,0.4)",
        transition: "all 0.2s ease",
        position: "relative",
        background: book.color,
      }}>
        {!imgError ? (
          <img
            src={coverUrl}
            alt={book.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.2s ease",
              opacity: hovered ? 0.85 : 1,
            }}
          />
        ) : (
          /* Fallback if cover doesn't load */
          <div style={{
            width: "100%", height: "100%",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: 16, textAlign: "center",
            background: `linear-gradient(160deg, ${book.color} 0%, ${book.color}99 100%)`,
          }}>
            <span style={{ fontSize: 40, marginBottom: 12 }}>{book.emoji}</span>
            <div style={{ color: "#fff", fontFamily: "'Georgia', serif", fontSize: 13, fontWeight: 800, lineHeight: 1.3 }}>
              {book.title}
            </div>
          </div>
        )}

        {/* Active overlay indicator */}
        {active && (
          <div style={{
            position: "absolute", inset: 0,
            background: `${book.color}22`,
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            paddingTop: 10,
          }}>
            <span style={{
              background: book.accent, color: "#1a1a1a",
              borderRadius: 6, padding: "3px 10px",
              fontSize: 10, fontWeight: 900, letterSpacing: 0.5,
              textTransform: "uppercase", boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}>
              ✓ Selected
            </span>
          </div>
        )}

        {/* Hover overlay with quick info */}
        {hovered && !active && (
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 6, padding: 12,
          }}>
            <span style={{
              background: book.color, color: "#fff",
              borderRadius: 6, padding: "4px 12px",
              fontSize: 11, fontWeight: 800,
            }}>{book.lexile}</span>
            <span style={{
              background: "rgba(255,255,255,0.15)", color: "#fff",
              borderRadius: 6, padding: "4px 12px",
              fontSize: 11, fontWeight: 700,
            }}>{book.questions.length} Questions</span>
          </div>
        )}
      </div>

      {/* Title below cover */}
      <div style={{ marginTop: 10, textAlign: "center", width: "100%" }}>
        <div style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 800,
          fontSize: 12.5,
          color: active ? "#fff" : "rgba(255,255,255,0.88)",
          lineHeight: 1.3,
          marginBottom: 3,
        }}>
          {book.title}
        </div>
        <div style={{
          fontSize: 11,
          color: active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
          fontWeight: 500,
        }}>
          {book.author}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeBook, setActiveBook] = useState(0);
  const [activeTab, setActiveTab] = useState("summary");
  const [unlocked, setUnlocked] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const book = books[activeBook];

  const handleSelectBook = (i) => {
    setActiveBook(i);
    setActiveTab("summary");
    // Scroll content into view smoothly
    setTimeout(() => {
      document.getElementById("book-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0d1117 0%, #161b22 40%, #0d1b2a 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      {/* PIN Modal */}
      {showPin && (
        <PinModal
          onSuccess={() => { setUnlocked(true); setShowPin(false); }}
          onCancel={() => setShowPin(false)}
        />
      )}

      {/* ── Header ── */}
      <header style={{
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 40px",
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(16px)",
      }}>
        <div style={{
          maxWidth: 1400, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64, gap: 16,
        }}>
          {/* Logo + title */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 26 }}>📚</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, fontFamily: "'Georgia', serif", lineHeight: 1.2 }}>
                Grade 8 ELAR Summer Study Guide
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 1 }}>
                Texas STAAR &amp; NWEA MAP · Rising 8th Grade
              </div>
            </div>
          </div>

          {/* Center badges */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {[
              { label: "STAAR", color: "#C0392B" },
              { label: "MAP", color: "#1F618D" },
            ].map(b => (
              <span key={b.label} style={{
                background: `${b.color}33`, border: `1px solid ${b.color}66`,
                color: "#fff", borderRadius: 6, padding: "3px 10px",
                fontSize: 11, fontWeight: 800, letterSpacing: 0.5,
              }}>{b.label}</span>
            ))}
          </div>

          {/* Lock control */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {unlocked ? (
              <>
                <span style={{
                  background: "rgba(39,174,96,0.15)", border: "1px solid #27AE6066",
                  color: "#27AE60", borderRadius: 8, padding: "5px 12px",
                  fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 6,
                }}>🔓 Unlocked</span>
                <button onClick={() => setUnlocked(false)} style={{
                  background: "rgba(231,76,60,0.15)", border: "1px solid #E74C3C66",
                  color: "#E74C3C", borderRadius: 8, padding: "5px 14px",
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                }}>🔒 Lock</button>
              </>
            ) : (
              <>
                <span style={{
                  background: "rgba(231,76,60,0.12)", border: "1px solid rgba(231,76,60,0.35)",
                  color: "rgba(231,76,60,0.85)", borderRadius: 8, padding: "5px 12px",
                  fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 6,
                }}>🔒 Locked</span>
                <button onClick={() => setShowPin(true)} style={{
                  background: "rgba(39,174,96,0.15)", border: "1px solid #27AE6066",
                  color: "#27AE60", borderRadius: 8, padding: "5px 14px",
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                }}>🔑 Unlock</button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ── Book Grid ── */}
      <section style={{ padding: "40px 40px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ marginBottom: 20, display: "flex", alignItems: "baseline", gap: 12 }}>
            <h2 style={{ color: "#fff", fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 800, margin: 0 }}>
              Select a Book
            </h2>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
              {books.length} books · click any card to open
            </span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 20,
            alignItems: "start",
          }}>
            {books.map((b, i) => (
              <BookGridCard
                key={b.id}
                book={b}
                active={activeBook === i}
                onClick={() => handleSelectBook(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Book Content ── */}
      <main id="book-content" style={{ padding: "0 40px 80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>

          {/* Colored book banner */}
          <div style={{
            background: `linear-gradient(135deg, ${book.color} 0%, ${book.color}cc 100%)`,
            borderRadius: "16px 16px 0 0",
            padding: "28px 36px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 44, lineHeight: 1 }}>{book.emoji}</span>
              <div>
                <h1 style={{
                  color: "#fff", margin: "0 0 4px 0",
                  fontSize: 26, fontFamily: "'Georgia', serif", fontWeight: 800,
                }}>
                  {book.title}
                </h1>
                <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: 15 }}>
                  by {book.author}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{
                background: book.accent, color: "#1a1a1a",
                borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 800,
              }}>{book.genre}</span>
              <span style={{
                background: "rgba(255,255,255,0.18)", color: "#fff",
                borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700,
              }}>Lexile {book.lexile}</span>
              <span style={{
                background: "rgba(255,255,255,0.18)", color: "#fff",
                borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700,
              }}>{book.questions.length} Questions</span>
            </div>
          </div>

          {/* Tab nav */}
          <div style={{
            background: "#fff",
            borderBottom: "2px solid #EAF0F6",
            display: "flex",
            gap: 0,
          }}>
            {[
              { id: "summary", label: "📖 Book Summary" },
              { id: "questions", label: `❓ Practice Questions (${book.questions.length})` },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  background: "none", border: "none",
                  borderBottom: activeTab === t.id ? `3px solid ${book.color}` : "3px solid transparent",
                  padding: "16px 28px",
                  fontSize: 14, fontWeight: activeTab === t.id ? 800 : 500,
                  color: activeTab === t.id ? book.color : "#7F8C8D",
                  cursor: "pointer", transition: "all 0.15s ease",
                  marginBottom: -2,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div style={{
            background: "#fff",
            borderRadius: "0 0 16px 16px",
            padding: "36px 40px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
          }}>

            {/* ── SUMMARY TAB ── */}
            {activeTab === "summary" && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "36px 48px",
              }}>
                {/* Overview — full width */}
                <section style={{ gridColumn: "1 / -1" }}>
                  <h3 style={{ color: book.color, fontFamily: "'Georgia', serif", fontSize: 19, marginBottom: 12, borderLeft: `4px solid ${book.color}`, paddingLeft: 14 }}>
                    What Is This Book About?
                  </h3>
                  <p style={{ fontFamily: "'Georgia', serif", fontSize: 15.5, lineHeight: 1.8, color: "#2C3E50", margin: 0 }}>
                    {book.summary.overview}
                  </p>
                </section>

                {/* Themes */}
                <section>
                  <h3 style={{ color: book.color, fontFamily: "'Georgia', serif", fontSize: 19, marginBottom: 14, borderLeft: `4px solid ${book.color}`, paddingLeft: 14 }}>
                    Key Themes
                  </h3>
                  <div style={{ display: "grid", gap: 10 }}>
                    {book.summary.themes.map((t, i) => (
                      <div key={i} style={{
                        display: "flex", gap: 10, alignItems: "flex-start",
                        background: "#F8F9FA", borderRadius: 8, padding: "10px 14px",
                      }}>
                        <span style={{ color: book.color, fontSize: 16, marginTop: 1, flexShrink: 0 }}>◆</span>
                        <span style={{ fontFamily: "'Georgia', serif", fontSize: 14, color: "#2C3E50", lineHeight: 1.55 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Setting + Author's Purpose stacked */}
                <div style={{ display: "grid", gap: 28 }}>
                  <section>
                    <h3 style={{ color: book.color, fontFamily: "'Georgia', serif", fontSize: 19, marginBottom: 12, borderLeft: `4px solid ${book.color}`, paddingLeft: 14 }}>
                      Setting
                    </h3>
                    <p style={{ fontFamily: "'Georgia', serif", fontSize: 14.5, lineHeight: 1.7, color: "#2C3E50", background: "#F8F9FA", padding: "14px 16px", borderRadius: 8, margin: 0 }}>
                      {book.summary.setting}
                    </p>
                  </section>
                  <section>
                    <h3 style={{ color: book.color, fontFamily: "'Georgia', serif", fontSize: 19, marginBottom: 12, borderLeft: `4px solid ${book.color}`, paddingLeft: 14 }}>
                      Author's Purpose
                    </h3>
                    <p style={{ fontFamily: "'Georgia', serif", fontSize: 14.5, lineHeight: 1.75, color: "#2C3E50", fontStyle: "italic", background: "#F8F9FA", padding: "14px 18px", borderRadius: 8, borderLeft: `4px solid ${book.color}`, margin: 0 }}>
                      {book.summary.authorPurpose}
                    </p>
                  </section>
                </div>

                {/* Characters — full width */}
                <section style={{ gridColumn: "1 / -1" }}>
                  <h3 style={{ color: book.color, fontFamily: "'Georgia', serif", fontSize: 19, marginBottom: 14, borderLeft: `4px solid ${book.color}`, paddingLeft: 14 }}>
                    Key Characters
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: 10,
                  }}>
                    {book.summary.characters.map((c, i) => (
                      <div key={i} style={{
                        background: "#F8F9FA", borderRadius: 8, padding: "12px 16px",
                        display: "flex", gap: 14, alignItems: "flex-start",
                        borderLeft: `3px solid ${book.color}44`,
                      }}>
                        <span style={{ fontWeight: 800, color: book.color, minWidth: 120, fontSize: 13.5 }}>{c.name}</span>
                        <span style={{ fontFamily: "'Georgia', serif", fontSize: 13.5, color: "#555", lineHeight: 1.55 }}>{c.role}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Literary Devices — full width */}
                <section style={{ gridColumn: "1 / -1" }}>
                  <h3 style={{ color: book.color, fontFamily: "'Georgia', serif", fontSize: 19, marginBottom: 14, borderLeft: `4px solid ${book.color}`, paddingLeft: 14 }}>
                    Literary Devices to Know
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: 10,
                  }}>
                    {book.summary.literaryDevices.map((d, i) => (
                      <div key={i} style={{ background: "#F8F9FA", borderRadius: 8, padding: "14px 16px", borderTop: `3px solid ${book.color}` }}>
                        <div style={{ fontWeight: 800, color: book.color, fontSize: 13.5, marginBottom: 6 }}>{d.device}</div>
                        <div style={{ fontFamily: "'Georgia', serif", fontSize: 13.5, color: "#555", lineHeight: 1.55 }}>{d.example}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ── QUESTIONS TAB ── */}
            {activeTab === "questions" && (
              <div>
                {/* Score banner */}
                <div style={{
                  background: "linear-gradient(135deg, #1B2A4A 0%, #1F3C6B 100%)",
                  borderRadius: 12, padding: "18px 24px", marginBottom: 12,
                  display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center",
                }}>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {[
                      { label: "STAAR Score", val: "1769", sub: "Meets Grade Level" },
                      { label: "Reading", val: "23/29", sub: "79% — Strong" },
                      { label: "Writing", val: "19/27", sub: "70% — Focus Area ⬆️" },
                      { label: "Lexile", val: "1155L", sub: "Above Grade 8 range" },
                    ].map(s => (
                      <div key={s.label} style={{
                        background: "rgba(255,255,255,0.08)", borderRadius: 8,
                        padding: "8px 16px", textAlign: "center", minWidth: 96,
                      }}>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>{s.label}</div>
                        <div style={{ fontSize: 17, fontWeight: 900, color: "#fff" }}>{s.val}</div>
                        <div style={{ fontSize: 10, color: s.label === "Writing" ? "#F39C12" : "rgba(255,255,255,0.55)", fontWeight: 600 }}>{s.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: 1, minWidth: 220, borderLeft: "1px solid rgba(255,255,255,0.12)", paddingLeft: 20 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: "#F39C12", marginBottom: 5 }}>🎯 Summer Focus: Writing (SCR & ECR)</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                      Lexile 1155L is already above the Grade 8 range — reading comprehension is strong. Every SCR and ECR includes a RACES framework, sentence starters, scoring rubric, and strong vs. weak examples.
                    </div>
                  </div>
                </div>
                <div style={{
                  background: "#EBF5FB", border: "1px solid #AED6F1", borderRadius: 10,
                  padding: "12px 18px", fontSize: 13, color: "#1A5276", lineHeight: 1.6, marginBottom: 24,
                }}>
                  <strong>📋 How to use:</strong> For MC questions, tap an answer then reveal the explanation. For <strong>✏️ Written Response</strong> questions, draft your answer on paper first using the RACES framework, then compare to the answer guide.
                </div>

                {/* Questions grid — two columns on wide screens */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
                  gap: 18,
                  alignItems: "start",
                }}>
                  {book.questions.map((q, i) => (
                    <QuestionCard key={i} q={q} index={i} bookColor={book.color} unlocked={unlocked} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <div style={{ textAlign: "center", paddingBottom: 32, color: "rgba(255,255,255,0.25)", fontSize: 11 }}>
        Aligned to Texas TEKS · STAAR Grade 8 RLA Blueprint · NWEA MAP Growth Reading Skills
      </div>
    </div>
  );
}
