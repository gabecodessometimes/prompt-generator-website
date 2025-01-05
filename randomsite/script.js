// List of prompts categorized by length (short, moderate, and long)
const prompts = {
    short: [
        "Write a sentence about a detective.",
        "Describe a futuristic gadget.",
        "Give advice on becoming more productive.",
        "Write a short poem about nature.",
        "Describe a quick escape plan for a superhero.",
        "What is the essence of true friendship in one sentence?",
        "Explain the concept of minimalism in a few words.",
        "Create a catchy slogan for a new business.",
        "Describe your dream vacation destination in one sentence.",
        "Write a fun fact about the universe.",
        "Summarize your life philosophy in a sentence.",
        "Describe a memorable event in one sentence.",
        "Write a motivational quote for someone starting a new journey.",
        "What is the perfect way to spend a rainy day?",
        "Write a brief description of a futuristic car.",
        "Give advice to someone starting a new job.",
        "Describe a conversation between two strangers on a train.",
        "Summarize your favorite book in one sentence.",
        "Describe a new sport or game you invented.",
        "Write about a mysterious object found in an attic.",
        "What would you do if you could teleport anywhere?",
        "Write a few words about a magical forest.",
        "Describe your ideal morning routine.",
        "Write a catchy line for a motivational speech.",
        "What’s the most interesting thing you've ever learned?",
        "Write a sentence about a character who never speaks.",
        "Describe an unexpected encounter on the way home.",
        "Write a short letter to your future self.",
        "Give advice for someone who feels stuck in life.",
        "Write a description of a sunset over the ocean.",
        "Describe an unusual food combination you like.",
        "Write a sentence about an ancient civilization.",
        "Describe a hidden treasure you’ve just discovered.",
        "Write a short poem about the moon.",
        "Describe a place where time doesn’t exist.",
        "What’s your favorite way to relax?",
        "Write a sentence about someone who is always late.",
        "Describe a futuristic mode of transportation.",
        "Write a sentence about a hidden door in a library.",
        "Describe an unexpected turn of events during a vacation.",
        "Summarize your childhood in a sentence.",
        "Describe the most beautiful sunset you've ever seen.",
        "Write a sentence about a perfect day.",
        "Describe the best gift you’ve ever received.",
        "Write about a character who has the power of invisibility.",
        "Describe your favorite season in one sentence.",
        "What’s your favorite place in the world?",
        "Write about a character who can communicate with machines.",
        "Describe the feeling of flying for the first time.",
        "What would you do if you found a map leading to hidden treasure?",
        "Imagine waking up with a new superpower. What would it be?",
        "Write about a day in the life of a professional thief.",
        "Describe a world where the oceans have dried up.",
        "Write about a world where every person has a pet dragon.",
        "What’s the most beautiful thing you've ever seen?",
        "Write about a time you witnessed a random act of kindness.",
        "Describe an object that has sentimental value to you.",
        "Write about a character who finds an old, forgotten letter.",
        "Describe a situation where someone is forced to confront their worst fear.",
        "What would you do if you could talk to animals for one day?",
        "Write about a character who can’t lie.",
        "What’s your favorite place in the world, and why?",
        "Write about a mysterious key that unlocks a hidden door.",
        "What would you do if you had to live a week without technology?",
        "Imagine a character who can never leave their home. What do they do all day?",
        "Write a description of a perfect, peaceful day.",
        "What’s the one thing you can’t live without?",
        "Describe a place you would never want to visit.",
        "Write about a mysterious figure who shows up at midnight.",
        "What happens when a character discovers a strange, ancient artifact?",
        "Imagine living in a world where gravity no longer exists.",
        "Write a sentence about someone who is too honest for their own good.",
        "Describe a place you’ve always wanted to visit but never have.",
        "What happens when someone wakes up in a world where no one remembers them?",
        "Write about a character who wakes up with no memory of who they are.",
        "Imagine you can control the weather for one day. What do you do?",
        "Write a description of a person who loves to daydream.",
        "Write about a character who is constantly late to everything.",
        "Describe the world if humans could communicate through telepathy.",
        "What’s your favorite childhood memory?",
        "Write about someone who is afraid of the dark.",
        "Imagine a world where every decision you make is made for you.",
        "What would you do if you could time travel for one day?",
        "Write a short poem about hope.",
        "What’s the worst decision you’ve ever made?",
        "Describe a character who can never make a decision.",
        "Write about a character who keeps a secret that could change everything.",
        "Write about someone who has lost their sense of taste.",
        "Imagine a character who lives in a world with no color.",
        "What happens when someone enters a house with no doors or windows?",
        "Write about a character who’s always looking for something but never finds it.",
        "Describe a place that feels both familiar and foreign at the same time.",
        "Write about someone who can never tell the truth."
    ],
    moderate: [
        "Write a short story about a detective who can see into the future and solves a case before it even happens.",
        "Imagine a world where humans can communicate with animals. What challenges do they face in their day-to-day lives, and how has society adapted?",
        "Describe a futuristic city where all transportation is automated and sustainable, with advanced AI systems that manage traffic and pollution.",
        "Create a character who is both a villain and a hero. What makes them conflicted, and how do they struggle to reconcile their opposing roles?",
        "Write a letter from a time traveler to their future self, explaining how the world has changed over the centuries and offering advice on what to do next.",
        "Imagine a society where all members are born with a unique talent. How does this affect their lives, and what challenges do they face trying to find their place in the world?",
        "Describe a world where people age in reverse, starting old and becoming younger as time passes. How do relationships, careers, and society function in such a world?",
        "Write a scene where a character discovers a secret that will change the course of history forever. What is the secret, and how does it affect the character?",
        "Describe the daily life of someone who has the ability to control the weather. How do they use their power, and what are the consequences?",
        "Imagine a society where people are born with only one emotion they can ever feel. What would this society be like, and how would they navigate their relationships?",
        "Create a story where an astronaut stranded on another planet finds evidence of intelligent life. How do they react to this discovery, and what impact does it have on their mission?",
        "Write about a character who discovers a hidden city under the ocean. What do they find there, and how does it change their life forever?",
        "Describe the world 100 years in the future. What technologies, societies, and advancements have been made, and how have they shaped humanity’s destiny?",
        "Write a letter from someone who’s been living in a virtual reality for 10 years. What have they learned from their experiences, and how do they view the real world?",
        "Imagine a society where memory can be erased. Write a story about a character who’s been through this process, and the impact it has on their life and relationships.",
        "Describe the life of a person who has the ability to read minds. How do they cope with knowing everyone’s secrets, and how does it change their view of the world?",
        "Create a world where people have wings. What challenges would they face in daily life, and how would society function with this new physical trait?",
        "Write a story about a character who can alter time by simply thinking about it. How do they use this power, and what are the consequences of tampering with time?",
        "Imagine a world where humans live underwater. Describe what a typical day would look like for an underwater citizen, and the challenges they face living in such an environment.",
        "Write a story about a person who becomes an overnight celebrity. How do they handle the pressure, and what sacrifices do they have to make for fame?",
        "Create a world where everyone can see the future, but only for one minute each day. How do people adapt to this limitation, and how does it affect their decision-making?",
        "Describe a world where technology is outlawed, and people live with only the most basic tools. How has society survived, and what challenges do they face without modern tech?",
        "Write a story about a character who is born with no sense of fear. How does this affect their relationships and their interactions with the world around them?",
        "Imagine a future where humans can transfer their consciousness into machines. How does this affect the concept of identity and personal existence?",
        "Write about a person who stumbles upon a mysterious artifact that grants them one wish, but at a great cost. What do they wish for, and what happens afterward?",
        "Create a world where everyone has a clone that lives a separate life. What impact does this have on relationships, individuality, and personal growth?",
        "Write about a character who must choose between saving a loved one or saving the world. How do they decide, and what consequences follow their choice?",
        "Describe the social dynamics in a world where people can live forever. How do people deal with immortality, and what problems arise from never-ending life?",
        "Imagine a world where emotions are tangible and can be traded. How does this affect society, and what new industries or systems would emerge around this idea?",
        "Write a story about a person who can communicate with their past self. What advice do they give each other, and how does this influence their decisions?",
        "Create a character who can manipulate dreams. How do they use this ability, and what are the ethical dilemmas they face?",
        "Describe the world where books are illegal. How do people resist this law, and what role does underground knowledge play in society?",
        "Write about a society where everyone has the ability to control one element of nature. How do they use their powers, and what impact does this have on their world?",
        "Imagine a city where everyone has to wear a mask. What happens when one person removes theirs, and what does it reveal about their true identity?",
        "Write about a character who discovers a secret society beneath their city. What do they do with this newfound knowledge?",
        "Create a world where people are born with the ability to see into other people’s dreams. How does this affect relationships and privacy?",
        "Imagine a future where Earth is no longer habitable. What do people do next, and how do they decide where to go?",
        "Write a story about a character who accidentally erases part of their memory. How do they piece together their past, and what’s lost in the process?",
        "Describe a society where every person is given a unique, predetermined role. What happens when someone wants to change their role?",
        "Write about a society where everyone is connected through a neural link. How does this affect privacy, relationships, and personal identity?",
        "Imagine a world where people can switch bodies with others. How do they use this ability, and what complications arise from it?",
        "Write a story about a character who discovers they are the last person on Earth. How do they survive, and what do they do with the vast emptiness?",
        "Create a world where humans have evolved to live in space. What challenges do they face living on a different planet, and how have they adapted to zero gravity?",
        "Write a letter to your future self, explaining how you’ve changed over the years and what advice you would give yourself for the future.",
        "Imagine a world where there are no seasons. What changes would occur in the environment, and how would people adapt?",
        "Write about a character who discovers an underground library filled with books from alternate universes. What knowledge do they gain?",
        "Create a society where everyone is born with an animal companion. How does this affect personal relationships and social status?",
        "Write about a detective who solves crimes by experiencing the emotions of the victim. How do they use this power to uncover the truth?",
        "Imagine a society where everyone is required to wear a mask at all times. What happens when one person decides to stop wearing theirs?",
        "Describe a character who wakes up in a parallel universe where everything is the same except for one small detail. How do they react to this change?",
        "Write about a world where memories can be bought, sold, or traded. What consequences does this have on personal identity and relationships?",
        "Create a story about a world where dreams are shared experiences. What happens when someone’s dream is interrupted?",
        "Imagine a world where every person has a unique, magical ability. Write about a character whose power has just been revealed.",
        "Write a story about a civilization that lives entirely underwater. How do they survive, and what challenges do they face on a daily basis?",
        "Write about a city where the streets are alive and can move, change direction, and rearrange themselves.",
        "Imagine a society where everyone knows exactly when they will die. How does this knowledge affect how people live their lives?",
        "Create a world where every person can rewind time once in their life. What would you do with your one chance to go back?",
        "Write about a character who can change the course of history by making one small, seemingly insignificant choice.",
        "Imagine a world where no one can speak the truth, but everyone can only speak lies. How do people communicate in such a society?"
    
    ],
    long: [
        "What does it mean to truly live in the present moment? Reflect on this concept from both a philosophical and practical perspective, including examples from ancient and modern thinkers. Discuss how different cultures approach mindfulness and how individuals can cultivate a present-centered life.",
        "Describe a future where humans colonize Mars. What challenges would they face in terms of survival, ethics, and society? Discuss the implications of creating a new civilization on another planet, including the environmental, social, and technological hurdles that need to be overcome.",
        "Imagine a world where technology advances at a rate faster than humans can adapt. What impact does this have on society, and how does it affect people's relationships, employment, and daily lives? Consider both the benefits and risks of such rapid innovation, and how humans might cope with being left behind in certain areas of life.",
        "Write a detailed guide on how to survive a zombie apocalypse using only household items. Include not only practical survival tips but also how to navigate the social and psychological challenges that arise in such a dangerous world. What moral dilemmas would people face, and how would they adapt to a new way of life?",
        "Create a detailed character backstory for a hero who has a tragic flaw that makes them unable to trust others. Explore their past, their motivations, and the key events that led them to become a hero. How does their inability to trust shape their actions, their relationships, and the way they perceive the world? How does this flaw ultimately become a strength or a weakness?",
        "Imagine a future where artificial intelligence and human beings live alongside one another. How has society evolved to accommodate this partnership? Explore the ethical, social, and political consequences of this collaboration. What challenges would arise in terms of privacy, labor, and personal freedoms?",
        "Write an essay on the moral implications of immortality. What does it mean for a person to live forever, and how would society change if immortality were possible? Consider the impact on family, relationships, and resources. What role would death play in such a world, and how would people cope with an infinite lifespan?",
        "Create a detailed vision of a utopian world where everyone has everything they need but no one has anything they want. What does this society look like? How does the lack of desire influence the way people live, work, and interact with one another?",
        "Write a story about a society where books are banned, and information is controlled by a government organization. How do individuals in this world resist the oppression, and what role does knowledge play in their fight for freedom?",
        "Imagine a society where technology is banned, and all communication must be done in person. How does this affect people's relationships, businesses, and daily routines? What do they lose and gain by returning to a more 'natural' way of life, and what challenges arise in such a world?",
        "Describe the life of a person who can manipulate time. What consequences arise from their actions, and how do they balance the temptation to change history with the knowledge of how their choices affect the future?",
        "Write a story about an alternate reality where humans have evolved to communicate through thought alone. How does this change the way society functions, and what are the challenges that come with it?",
        "Create a world where every person can communicate with one animal of their choice. How does this ability change the relationship between humans and animals, and how does society adapt to this new form of communication?",
        "Write a letter from a future civilization to the past, offering advice on how to avoid the mistakes that led to their downfall. What key lessons do they share, and how do they reflect on their own history?",
        "Imagine a society where personal identity is fluid and people can change their appearance and personality at will. How does this affect relationships, politics, and daily life?",
        "Write a detailed guide on how to thrive in a post-apocalyptic world. What resources would you need, and what emotional and psychological challenges would arise in such a hostile environment?",
        "Create a world where every person is born with a unique superpower. How does society function, and what challenges do people face in utilizing their abilities?",
        "Describe the daily life of someone who lives in a virtual reality where they can experience anything they desire. How do they navigate this perfect world, and what happens when they begin to question the nature of their reality?",
        "Write a story about a character who discovers a device that allows them to relive their past memories. How does this ability impact their present, and how does it change their perspective on life?",
        "Imagine a world where emotions are stored in digital form and can be traded or sold. What new industries would arise around this concept, and how would people’s emotions affect their value?",
        "Write an essay on the ethical implications of genetic engineering. What should humanity’s responsibility be when it comes to altering DNA, and how far should science go in shaping future generations?",
        "Create a story about a society where people can live without sleep. How does this change their productivity, social lives, and overall health? What new challenges do they face?",
        "Describe a future where humans have discovered a way to communicate with extraterrestrial life. How does this discovery impact humanity, and what new challenges and opportunities does it bring?",
        "Write a detailed history of a fictional civilization that thrived thousands of years ago. What caused their rise and fall, and what remnants of their culture exist today?",
        "Imagine a society where everyone must contribute to the greater good through a personal sacrifice. How does this affect personal freedom, and what are the implications for community life?",
        "Write a story about a time traveler who accidentally alters a critical moment in history. How does this impact their present-day reality, and what do they have to do to set things right?",
        "Create a character who has lived through multiple lifetimes and retains memories from each one. How do they cope with the weight of their knowledge, and how do they navigate relationships with people who are unaware of their past lives?",
        "What does it mean to truly live in the present moment? Reflect on this concept from both a philosophical and practical perspective, including examples from ancient and modern thinkers. Discuss how different cultures approach mindfulness and how individuals can cultivate a present-centered life.",
        "Describe a future where humans colonize Mars. What challenges would they face in terms of survival, ethics, and society? Discuss the implications of creating a new civilization on another planet, including the environmental, social, and technological hurdles that need to be overcome.",
        "Imagine a world where technology advances at a rate faster than humans can adapt. What impact does this have on society, and how does it affect people's relationships, employment, and daily lives? Consider both the benefits and risks of such rapid innovation, and how humans might cope with being left behind in certain areas of life.",
        "Write a detailed guide on how to survive a zombie apocalypse using only household items. Include not only practical survival tips but also how to navigate the social and psychological challenges that arise in such a dangerous world. What moral dilemmas would people face, and how would they adapt to a new way of life?",
        "Create a detailed character backstory for a hero who has a tragic flaw that makes them unable to trust others. Explore their past, their motivations, and the key events that led them to become a hero. How does their inability to trust shape their actions, their relationships, and the way they perceive the world? How does this flaw ultimately become a strength or a weakness?",
        "Imagine a future where artificial intelligence and human beings live alongside one another. How has society evolved to accommodate this partnership? Explore the ethical, social, and political consequences of this collaboration. What challenges would arise in terms of privacy, labor, and personal freedoms?",
        "Write an essay on the moral implications of immortality. What does it mean for a person to live forever, and how would society change if immortality were possible? Consider the impact on family, relationships, and resources. What role would death play in such a world, and how would people cope with an infinite lifespan?",
        "Create a detailed vision of a utopian world where everyone has everything they need but no one has anything they want. What does this society look like? How does the lack of desire influence the way people live, work, and interact with one another?",
        "Write a story about a society where books are banned, and information is controlled by a government organization. How do individuals in this world resist the oppression, and what role does knowledge play in their fight for freedom?",
        "Imagine a society where technology is banned, and all communication must be done in person. How does this affect people's relationships, businesses, and daily routines? What do they lose and gain by returning to a more 'natural' way of life, and what challenges arise in such a world?",
        "Describe the life of a person who can manipulate time. What consequences arise from their actions, and how do they balance the temptation to change history with the knowledge of how their choices affect the future?",
        "Write a story about an alternate reality where humans have evolved to communicate through thought alone. How does this change the way society functions, and what are the challenges that come with it?",
        "Create a world where every person is born with a unique superpower. How does society function, and what challenges do people face in utilizing their abilities?",
        "Write a letter from a future civilization to the past, offering advice on how to avoid the mistakes that led to their downfall. What key lessons do they share, and how do they reflect on their own history?",
        "Imagine a society where personal identity is fluid and people can change their appearance and personality at will. How does this affect relationships, politics, and daily life?",
        "Write a detailed guide on how to thrive in a post-apocalyptic world. What resources would you need, and what emotional and psychological challenges would arise in such a hostile environment?",
        "Create a world where every person is born with a special talent. How does society use these talents, and what happens when someone is born without one?",
        "Describe the daily life of someone who lives in a virtual reality where they can experience anything they desire. How do they navigate this perfect world, and what happens when they begin to question the nature of their reality?",
        "Write a story about a character who discovers a device that allows them to relive their past memories. How does this ability impact their present, and how does it change their perspective on life?",
        "Imagine a world where emotions are stored in digital form and can be traded or sold. What new industries would arise around this concept, and how would people’s emotions affect their relationships?",
        "Create a world where time travel exists but is strictly regulated. Who controls the time travel technology, and what happens when someone decides to use it for their own personal gain?",
        "Describe a society where human consciousness can be uploaded into a digital format. What are the implications for personal identity, relationships, and the concept of life and death?"
    ]
};

// Function to generate a random prompt based on the selected length
function generatePrompt() {
    const length = document.getElementById('promptLength').value; // Get the selected prompt length
    const promptCategory = getPromptCategory(length);
    
    // Select a random prompt from the appropriate category
    const randomPrompt = promptCategory[Math.floor(Math.random() * promptCategory.length)];

    // Display the prompt on the page
    document.getElementById('prompt').textContent = randomPrompt;
}

// Function to get the appropriate category of prompts based on the selected length
function getPromptCategory(length) {
    switch (length) {
        case "1":
            return prompts.short;
        case "2":
            return prompts.moderate;
        case "3":
            return prompts.long;
        default:
            return prompts.moderate; // Default to moderate if something goes wrong
    }
}

// Function to copy the prompt to the clipboard
function copyPrompt() {
    const promptText = document.getElementById('prompt').textContent;
    navigator.clipboard.writeText(promptText).then(function() {
        alert("Prompt copied to clipboard!");
    }, function() {
        alert("Failed to copy prompt. Please try again.");
    });
}

// Call generatePrompt on page load to display a prompt initially
window.onload = generatePrompt;
