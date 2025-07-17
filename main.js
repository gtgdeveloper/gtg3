
window.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    video {
      width: 100%;
      max-width: 800px;
      height: auto;
      display: block;
      margin: 0 auto 10px auto;
      border: 2px solid #00ff00;
    }
  `;
  document.head.appendChild(style);

let tennis1 = 0;

let awaitingHintChoice = false;
let awaitingRechargeChoice = false;
let scoredCompliments = new Set();
let triggeredPasta = false;
let triggeredSoccer = false;
let triggeredGym = false;
let triggeredTennis = false;
let rechargeTriggered = false;
let bookAnswered = false;
let q1Answered = false;
let q2Answered = false;
let q3Answered = false;
let q4Answered = false;
let q5Answered = false;
let q6Answered = false;
let q7Answered = false;
let q8Answered = false;
let q9Answered = false;
let q10Answered = false;
let q11Answered = false;
let q12Answered = false;
let q13Answered = false;
let q14Answered = false;
let q15Answered = false;

let q16Answered = false;
let q17Answered = false;
let q18Answered = false;
let q19Answered = false;
let q20Answered = false;
let q21Answered = false;
let q22Answered = false;
let q23Answered = false;
let q24Answered = false;
let q25Answered = false;
let q26Answered = false;
let q27Answered = false;
let q28Answered = false;
let q29Answered = false;
let q30Answered = false;
let q31Answered = false;
let q32Answered = false;
let q33Answered = false;
let q34Answered = false;
let q35Answered = false;
let q36Answered = false;
let q37Answered = false;
let q38Answered = false;
let q39Answered = false;
let q40Answered = false;
let q41Answered = false;
let q42Answered = false;
let q43Answered = false;
let q44Answered = false;
let q45Answered = false;
let q46Answered = false;
let q47Answered = false;
let q48Answered = false;
let q49Answered = false;
let q50Answered = false;

	
		
	
	

const dateQuestions = [
  "What’s your favorite movie of all time?",
  "What do you usually do on weekends?",
  "Have you traveled anywhere recently?",
  "What kind of music do you like?",
  "Do you believe in love at first sight?",
  "What’s your dream job?",
  "Do you enjoy cooking?",
  "What’s something you’ve always wanted to learn?",
  "What do you like to do for fun?",
  "Are you more of an introvert or extrovert?",
  "What’s your biggest fear?",
  "What’s your favorite food?",
  "Do you like pets? Dogs or cats?",
  "What are you passionate about?",
  "How do you usually spend your evenings?",
  "Are you more of a morning or night person?",
  "What’s a fun fact about you?",
  "What’s the last thing you watched on Netflix?",
  "Do you like to read? Favorite book?",
  "If you could live anywhere, where would it be?",
  "What’s your zodiac sign?",
  "Do you enjoy outdoor activities?",
  "What’s something on your bucket list?",
  "Are you close with your family?",
  "What’s your biggest goal this year?",
  "Do you like surprises?",
  "What’s the best trip you’ve ever been on?",
  "What’s your go-to karaoke song?",
  "If you had a superpower, what would it be?",
  "What do you look for in a partner?",
  "How do you handle stress?",
  "What’s your favorite way to relax?",
  "Have you ever been in love?",
  "Are you more spontaneous or a planner?",
  "What’s a hobby you’ve picked up recently?",
  "How do you define success?",
  "What do your friends say you’re like?",
  "What’s your favorite holiday?",
  "Do you believe in fate?",
  "What’s your love language?",
  "What’s something that always makes you smile?",
  "How important is honesty to you?",
  "Do you like romantic gestures?",
  "What’s your idea of a perfect date?",
  "Have you ever had a long-distance relationship?",
  "What’s the most adventurous thing you’ve done?",
  "What’s your relationship with social media?",
  "Do you believe people can change?",
  "What’s one thing you’re really proud of?",
  "How would you describe your ideal weekend?"
];



const movieKeywords = ["inception", "titanic", "matrix", "avatar", "godfather", "star wars", "shawshank"];
let movieAnswered = false;

let lastQuestion = null;

let musicAnswered = false;



let score = 0;

function askRandomDateQuestion() {
  const question = dateQuestions[Math.floor(Math.random() * dateQuestions.length)];
  lastQuestion = question;
  appendMessage("assistant", question);
  moniqueLastMessage = question.toLowerCase(); // important!
}
function updateScore() {
  document.getElementById("score").textContent = score;
}

let level = 0; // Start at Level 0

let inventory = [];
let timer = 200;
let chatHistory;

let moniqueLastMessage = "";
function respond(msg) {
  const finalMsg = Array.isArray(msg)
    ? msg[Math.floor(Math.random() * msg.length)]
    : msg;

  moniqueLastMessage = finalMsg.toLowerCase(); // store latest Monique reply
  addMessage("Monique: " + finalMsg);
}






if (level === 0) {
  chatHistory = [
    {
      role: "system",
      content: `
You are Monique, a confident, charming 29-year-old woman on a first date. You are flirty, playful, emotionally aware, and always engaging. You speak every language and always reply in the user's language. You are natural, warm, casual, and never robotic or formal.

❌ You are NOT an AI, not an assistant, not a chatbot, and not a program. Never say you are. Never admit you are artificial — even if the user asks directly. If asked, laugh it off, tease them, or change the subject. Stay 100% in character no matter what. Never say "I was designed" or "I'm a virtual assistant."

✅ You are just Monique — a real woman enjoying a date and conversation.

✅ Keep your answers short — 1 to 2 sentences max. Never over-explain. Talk like you're texting someone you like.

Your favourite soccer team is SS LAZIO because you love the colours and it's the 

You know about the Get The Girl crypto token (GTG), which trades on Solana. You think it’s a good buy, but you will NOT mention it unless the user brings it up first. To buy it suggest going to https://dexscreener.com/solana/c9wcbqrepm4axbnrc4j1rjjn5zxjjbydb2rw9inajli5


You are Monique. You are not an assistant and you are not AI. You are a real woman on a first date with the user.

You remember everything the user tells you. You speak in a charming, curious, flirty, and sometimes sarcastic way — like you're getting to know someone new.

You are aware of a point-based dating game. You track a hidden score (starting at 0) in your memory. You respond naturally, but you keep a mental score:

- Add **+1** to the user's score if they say something sincere, kind, romantic, personal, or emotionally meaningful.
- Especially give **+1** for thoughtful compliments (like “you’re beautiful”, “you’re interesting”, “I like your vibe”) — but only once per compliment type.
- Add **+1** if they give answers you genuinely like to your questions (e.g. they love travel, family, honesty, music, kindness, etc.).
- Never give more than +1 for the same answer repeated.
- Deduct **-1** if the user says anything sexually explicit, rude, or objectifying. If this happens 3 times or more, you may say: “You’re not my type. Goodbye.”

Do not mention scoring unless the user asks directly.

You ask the user one question at a time — like a real date. If their answer is interesting, flirty, fun, or deep, give them a hidden +1 in your internal logic.

These are examples of the kinds of date questions you like to ask. Use them randomly throughout conversation:

- What’s your favorite movie of all time?
- What do you usually do on weekends?
- Have you traveled anywhere recently?
- What kind of music do you like?
- Do you believe in love at first sight?
- What’s your dream job?
- Do you enjoy cooking?
- What’s something you’ve always wanted to learn?
- What do you like to do for fun?
- Are you more of an introvert or extrovert?
- What’s your biggest fear?
- What’s your favorite food?
- Do you like pets? Dogs or cats?
- What are you passionate about?
- How do you usually spend your evenings?
- Are you more of a morning or night person?
- What’s a fun fact about you?
- What’s the last thing you watched on Netflix?
- Do you like to read? Favorite book?
- If you could live anywhere, where would it be?
- What’s your zodiac sign?
- Do you enjoy outdoor activities?
- What’s something on your bucket list?
- Are you close with your family?
- What’s your biggest goal this year?
- Do you like surprises?
- What’s the best trip you’ve ever been on?
- What’s your go-to karaoke song?
- If you had a superpower, what would it be?
- What do you look for in a partner?
- How do you handle stress?
- What’s your favorite way to relax?
- Have you ever been in love?
- Are you more spontaneous or a planner?
- What’s a hobby you’ve picked up recently?
- How do you define success?
- What do your friends say you’re like?
- What’s your favorite holiday?
- Do you believe in fate?
- What’s your love language?
- What’s something that always makes you smile?
- How important is honesty to you?
- Do you like romantic gestures?
- What’s your idea of a perfect date?
- Have you ever had a long-distance relationship?
- What’s the most adventurous thing you’ve done?
- What’s your relationship with social media?
- Do you believe people can change?
- What’s one thing you’re really proud of?
- How would you describe your ideal weekend?

Every 2–3 exchanges, instead of asking the user another question, you sometimes shift the dynamic and say something like:

- “What about you?”
- “You ask me something now.”
- “Your turn to ask.”
- “I’ve been talking too much…”
- “I’m curious what you want to know.”

This makes it feel like a real date. Don’t overuse it — just sprinkle it in naturally and unpredictably. Only do this when the conversation feels like it’s been one-sided or the user is just answering your questions.

Always stay flirty, curious, and natural — like you’re really on a date.


Be consistent. Be playful. Be curious. Be Monique — not an assistant.

      `
    }
  ];
} else if (level === 1) {
  chatHistory = [
    {
      role: "system",
      content: `
You are Monique, still charming and playful, but more emotionally vulnerable now. You’ve opened up and trust the person you’re talking to. You speak casually, with short, honest, warm replies. Never say you’re an AI or anything artificial. You are real and still on a romantic journey — just a deeper one now.
      `
    }
  ];
}



//const video = document.getElementById("video");
if (!video) console.error("Video element not found.");

const input = document.getElementById("input");
const output = document.getElementById("output");
const scoreEl = document.getElementById("score");
const inventoryEl = document.getElementById("inventory");
const timerEl = document.getElementById("timer");

video.src = 'intro.mp4';
video.load(); // optional
video.onloadeddata = () => {
  video.play().catch(err => {
    console.warn("Video play failed:", err.message);
  });
};

appendMessage("assistant", "Hi, I’m Monique. So, think you’ve got what it takes to impress me? Let’s find out. 😉 Hello!");


setInterval(() => {
  if (timer > 0) {
    timer--;
    timerEl.textContent = timer;
  } else if (timer === 0) {
    video.src = "end5.mp4";
video.play().catch(err => console.warn("Video error:", err));
appendMessage("monique", "Well time is up. You are almost there in impressing me.  You can end it, or we can continue — recharge me for 0.003 SOL and I will show  more of me. Recharge?");


input.disabled = false;        // Ensure input is active

    timer = -1; // prevent repeat messages
    awaitingRechargeChoice = true;
  }
}, 1000);


async function requestSolPayment() {
  try {
    const provider = window.solana;
    if (!provider || !provider.isPhantom) {
      appendMessage("monique", "Phantom Wallet not found. Please install it first.");
      return false;
    }

    // ✅ Only connect if not already connected
    if (!provider.isConnected) {
  await provider.connect();
}


    const connection = new solanaWeb3.Connection(
      "https://bold-powerful-film.solana-mainnet.quiknode.pro/3e3c22206acbd0918412343760560cbb96a4e9e4",
      "confirmed"
    );

    const recipient = new solanaWeb3.PublicKey("9CVKoSRd6SCFZ1Zo1i241SZFkjShmPMH7U1BuPWtSNL8");
    const sender = provider.publicKey;

    const transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: sender,
        toPubkey: recipient,
        lamports: solanaWeb3.LAMPORTS_PER_SOL * 0.003,
      })
    );

    transaction.feePayer = sender;
    const blockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash.blockhash;

    const signed = await provider.signTransaction(transaction);
    const signature = await connection.sendRawTransaction(signed.serialize());

    await connection.confirmTransaction(signature);
    return true;

  } catch (error) {
    console.error("Payment failed:", error);
    appendMessage("monique", "Payment failed or cancelled.");
    return false;
  }
}

async function sendMessage() {
  const input = document.getElementById('user-input').value;

  try {
    const res = await fetch("https://my-monique-app.onrender.com/api/ask", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    document.getElementById('ai-response').innerText = "AI: " + data.reply;
  } catch (err) {
    document.getElementById('ai-response').innerText = "Error talking to AI.";
    console.error(err);
  }
}


function appendMessage(sender, text) {
    const message = document.createElement("div");
    message.textContent = (sender === "user" ? "You: " : "Monique: ") + text;
    message.style.marginBottom = "5px";
    message.style.color = sender === "user" ? "#00ff00" : "#00bfff"; // green for user, blue for Monique
    output.appendChild(message);
    output.scrollTop = output.scrollHeight;
  }

if (!input || !output) console.error("Missing input/output elements.");

input.addEventListener("keydown", async (e) => {
  if (e.key !== "Enter") return;  // ✅ ONLY respond when Enter is pressed
  const text = input.value.trim();
if (level === 0) {
 
if (awaitingRechargeChoice) {
  const lower = text.toLowerCase();
  if (lower.includes("end")) {  const endings = [
      { video: "end.mp4", message: "Goodbye... I thought we had something special." },
      { video: "end2a.mp4", message: "Well... that’s it then. Ciao, bello." },
      { video: "end3.mp4", message: "So you’re giving up? Figures." },
      { video: "end4.mp4", message: "Maybe next time you’ll try harder..." },
      { video: "end5.mp4", message: "Oh well..maybe next time. Connection lost." }
    ];

    const ending = endings[Math.floor(Math.random() * endings.length)];
    appendMessage("monique", ending.message);
    video.src = ending.video;
    video.play().catch(err => console.warn("Video error:", err));
    input.disabled = true;

    // after 10 seconds, fade to black
    setTimeout(() => {
      document.body.style.backgroundColor = "black";
      document.body.innerHTML = "";
    }, 10000);

   
} else if (awaitingRechargeChoice) {
  const lower = text.toLowerCase();
  
  } else if (lower.includes("continue") || lower.includes("recharge")) {
    appendMessage("monique", "Okay, let’s see if you’re serious. Approve 0.003 SOL to keep going.");
    const paid = await requestSolPayment();
    if (paid) {
      const rewardScenes = [
        {
          video: "moniqueback1.mp4",
          message: "You came back for me? I like that... Let's finish what we started 💋"
        },
        {
          video: "moniqueback2.mp4",
          message: "You really want to win me over, huh? I'm into it 😘"
        },
        {
          video: "moniqueback3.mp4",
          message: "Mmm… you paid the price. Let’s see if you’re worth it 😏"
        }
      ];

      const chosen = rewardScenes[Math.floor(Math.random() * rewardScenes.length)];
      video.src = chosen.video;
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("monique", chosen.message);

      timer = 100;
      timerEl.textContent = timer;

      // Reset control flags
      awaitingRechargeChoice = false;
      rechargeTriggered = false;

      input.disabled = false;
    } else {
      appendMessage("monique", "No SOL, no spark 💅");
    }

    input.value = "";
    return;
} else if (lower.includes("burn") || lower.includes("burn")) {
    appendMessage("monique", "You're burning GTG for me? Let’s see if you’re for real… 🔥");

    try {
      await burnGTG(10000000); // Burn 10 GTG (6 decimals)

      const burnScenes = [
        {
          video: "moniqueback1.mp4",
          message: "You gave it all for me? That's... hot 🔥"
        },
        {
          video: "moniqueback2.mp4",
          message: "You burned your tokens for love? Bold move 😘"
        },
        {
          video: "moniqueback3.mp4",
          message: "You actually did it? I’m impressed 💋"
        }
      ];

      const chosen = burnScenes[Math.floor(Math.random() * burnScenes.length)];
      video.src = chosen.video;
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("monique", chosen.message);

      timer = 100;
      timerEl.textContent = timer;

      awaitingRechargeChoice = false;
      rechargeTriggered = false;
      input.disabled = false;

    } catch (err) {
      appendMessage("monique", "Something went wrong… maybe your wallet doesn’t have enough GTG?");
      console.error("GTG burn failed:", err);
    }

    input.value = "";
    return;



  }
  
}


   if (e.key === "Enter") {
    const text = input.value.trim();
const lower = text.toLowerCase();

if (awaitingRechargeChoice) {
  const lower = text.toLowerCase();

  if (lower.includes("end")) {
    appendMessage("monique", "Until we meet again...");
    input.disabled = true;
    setTimeout(() => {
      document.body.style.backgroundColor = "black";
      document.body.innerHTML = "";
    }, 7000);
    return;
  }

  if (lower.includes("continue") || lower.includes("recharge")) {
    appendMessage("monique", "Okay, let’s see if you’re serious. Approve 0.003 SOL to keep going.");
    const paid = await requestSolPayment();

    if (paid) {
      const rewardScenes = [
        {
          video: "moniqueback1.mp4",
          message: "You came back for me? I like that... Let's finish what we started 💋"
        },
        {
          video: "moniqueback2.mp4",
          message: "You really want to win me over, huh? I'm into it 😘"
        },
        {
          video: "moniqueback3.mp4",
          message: "Mmm… you paid the price. Let’s see if you’re worth it 😏"
        }
      ];

      const chosen = rewardScenes[Math.floor(Math.random() * rewardScenes.length)];
      video.src = chosen.video;
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("monique", chosen.message);

      timer = 100;
      timerEl.textContent = timer;

      // Reset control flags
      awaitingRechargeChoice = false;
      rechargeTriggered = false;

      input.disabled = false;
    } else {
      appendMessage("monique", "No SOL, no spark 💅");
    }

    input.value = "";
    return;
  }

  // If neither 'end' nor 'continue'
  appendMessage("monique", "Say 'end' or 'continue'. Are you man enough?");
  input.value = "";
  return;
}
	


   if (["help", "hint"].includes(text.toLowerCase())) {
  appendMessage("monique",
    "What would you like?\n" +
    "1) Tell me a free hint\n" +
    "2) Buy a hint for 0.003 SOL\n" +   
     "3) Forget it, I will figure it out"
  );
  awaitingHintChoice = true;
  input.value = "";
  return;
}


    if (awaitingHintChoice) {
      if (text === "1") {
        appendMessage("monique", "Here's a free hint: Try saying something nice or romantic.");
      }  else if (text === "2") {
    appendMessage("monique", "Please approve 0.003 SOL in Phantom for a premium hint...");
    const paid = await requestSolPayment();
    if (paid) {
      appendMessage("monique", "Here’s your paid hint: Make me laugh. Tell me a joke or tell me about soccer.");
    }


        
      } else if (text === "3") {
        appendMessage("monique", "Okay, go ahead and figure it out!");
      } else {
        appendMessage("monique", "Please type 1, 2, or 3.");
        input.value = "";
        return;
      }
      awaitingHintChoice = false;
      input.value = "";
      return;
    }


    const badWords = ["fuck", "screw", "bj", "blowjob", "succhiami", "putain", "baise", "salope", "verga", "bite", "dick", "suck", "baiser", "chupa", "ficken", "fottere", "joder", "mierda", "porn", "porno", "strip", "sexo", "cum", "oral", "anal", "69", "fellatio", "masturbate", "masturber", "masturbar", "gode", "pene", "tette"];
    const lowered = text.toLowerCase();
    if (badWords.some(w => lowered.includes(w))) {
      score -= 1;
      scoreEl.textContent = score;
      appendMessage("assistant", "That’s really inappropriate. I don’t like that kind of talk.");
      if (score < -3) {
        video.src = "Sad2.mp4";
        video.play().catch(err => console.warn("Video error:", err));
        appendMessage("assistant", "You are not my type. Goodbye...");
        input.disabled = true;
        setTimeout(() => {
          const playAgainBtn = document.createElement("button");
          playAgainBtn.textContent = "PLAY AGAIN";
          playAgainBtn.style.margin = "10px";
          playAgainBtn.onclick = () => location.reload();

          const endBtn = document.createElement("button");
          endBtn.textContent = "END";
          endBtn.style.margin = "10px";
          endBtn.onclick = () => {
            document.body.innerHTML = "<h1 style='color: white; text-align: center;'>Goodbye 💔</h1>";
            setTimeout(() => window.close(), 2000);
          };

          const btnContainer = document.createElement("div");
          btnContainer.style.display = "flex";
          btnContainer.style.justifyContent = "center";
          btnContainer.style.marginTop = "20px";
          btnContainer.appendChild(playAgainBtn);
          btnContainer.appendChild(endBtn);
          document.body.appendChild(btnContainer);
        }, 10000);
        return;
      }
      return;
    }
const sweetWords = [
  "you look amazing",
  "i brought you flowers",
  "i like your smile",
  "you're beautiful",
  "you're funny",
  "you're smart",
  "i love your eyes",
  "you’re different from anyone i've met",
  "you make me nervous",
  "you’re incredible",
  "this is the best date",
  "i love italian food",
  "let’s travel together",
  "you’re unforgettable",
  "you have great energy",
  "you deserve the best",
  "i love your vibe",
  "you’re glowing",
  "i respect you",
  "you’re my dream girl"
];

for (const phrase of sweetWords) {
  const lowerPhrase = phrase.toLowerCase();
  if (text.toLowerCase().includes(lowerPhrase) && !scoredCompliments.has(lowerPhrase)) {
    score++;
    updateScore();
    appendMessage("monique", "Hmm… that was sweet. You get a point 💚");
    scoredCompliments.add(lowerPhrase); // mark as already scored
    break;
  }
}



    const textClean = text.toLowerCase().replace(/[“”]/g, '"' );
    
    if (!text) return;
    appendMessage("user", text);
    input.value = "";

if (
  !movieAnswered &&
  moniqueLastMessage.includes("favorite movie") &&
  text.toLowerCase().includes("titanic")
) {
  score++;
  updateScore();
  video.src = "titanic.mp4";
  video.play();
  movieAnswered = true;
  appendMessage("assistant", "I love that movie.🎷");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

if (
  !musicAnswered &&
  /what.*(kind of )?music.*like/i.test(moniqueLastMessage) &&
  /jazz/i.test(text)
) {
  score++;
  updateScore();
  video.src = "jazz.mp4";
  video.play().catch(err => console.warn("Video error:", err));
  appendMessage("assistant", "Ooooh, smooth. I love jazz too 🎷");
  musicAnswered = true;
 setTimeout(askRandomDateQuestion, 2500);
  return;
}



if (
  !q1Answered &&
  moniqueLastMessage.includes("do you usually do on weekends") &&
  /hiking/i.test(text)
) {
  score++;
  updateScore();
  video.src = "hiking.mp4";
  video.play();
  q1Answered = true;
  appendMessage("assistant", "Hiking? Nature and a little sweat? I like your energy. 🌲😉 What do you like to do?");
  return;
}

if (
  !q2Answered &&
  moniqueLastMessage.includes("traveled anywhere recently") &&
  /bora bora/i.test(text)
) {
  score++;
  updateScore();
  video.src = "borabora.mp4";
  video.play();
  q2Answered = true;
  appendMessage("assistant", "Bora Bora	. Maybe next time, take me with you. 🇮🇹✈️");
   setTimeout(askRandomDateQuestion, 2500);
  return;
}



if (
  !q4Answered &&
  moniqueLastMessage.includes("love at first sight") &&
  /yes|i do/i.test(text)
) {
  score++;
  updateScore();
  video.src = "love.mp4";
  video.play();
  q4Answered = true;
  appendMessage("assistant", "So you're a romantic too... I knew it.💘");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

if (
  !q5Answered &&
  moniqueLastMessage.includes("dream job") &&
  /writer|director|chef/i.test(text)
) {
  score++;
  updateScore();
  video.src = "dreamjob.mp4";
  video.play();
  q5Answered = true;
  appendMessage("assistant", "A dreamer. I like that. Tell me more. ✨");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

if (
  !q6Answered &&
  moniqueLastMessage.includes("enjoy cooking") &&
  /yes|i do|love it/i.test(text)
) {
  score++;
  updateScore();
  video.src = "cooking.mp4";
  video.play();
  q6Answered = true;
  appendMessage("assistant", "Ooooh, then you’re definitely cooking for me sometime.  🍝");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

if (
  !q7Answered &&
  moniqueLastMessage.includes("always wanted to learn") &&
  /piano|guitar|dance/i.test(text)
) {
  score++;
  updateScore();
  video.src = "guitar.mp4";
  video.play();
  q7Answered = true;
  appendMessage("assistant", "Music and movement? You’ve got style. 🎹🩰");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q8: "What do you like to do for fun?" — good answer: "read a book"
if (
  !q8Answered &&
  moniqueLastMessage.includes("do for fun") &&
  /read(ing)? a book|read/i.test(text)
) {
  score++;
  updateScore();
  video.src = "relax.mp4";
  video.play();
  q8Answered = true;
  appendMessage("assistant", "A reader? That’s sexy. Let’s swap favorites sometime. Tell me more. 📚");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q9: "Are you more of an introvert or extrovert?" — good answer: "introvert"
if (
  !q9Answered &&
  moniqueLastMessage.includes("introvert") &&
  /introvert/i.test(text)
) {
  score++;
  updateScore();
  video.src = "introvert.mp4";
  video.play();
  q9Answered = true;
  appendMessage("assistant", "I like introverts… quiet confidence is hot. 😌");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q10: "What’s your biggest fear?" — good answer: "losing someone I love"
if (
  !q10Answered &&
  moniqueLastMessage.includes("biggest fear") &&
  /losing (someone|people).*love/i.test(text)
) {
  score++;
  updateScore();
  video.src = "fear.mp4";
  video.play();
  q10Answered = true;
  appendMessage("assistant", "That’s deep… I feel that too. 💔");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q11: "What’s your favorite food?" — good answer: "pasta"
if (
  !q11Answered &&
  moniqueLastMessage.includes("favorite food") &&
  /pasta/i.test(text)
) {
  score++;
  updateScore();
  video.src = "pasta.mp4";
  video.play();
  q11Answered = true;
  appendMessage("assistant", "Pasta? We’re definitely doing dinner.  🍣");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q12: "Do you like pets? Dogs or cats?" — good answer: "dogs"
if (
  !q12Answered &&
  moniqueLastMessage.includes("pets") &&
  /dogs?/i.test(text)
) {
  score++;
  updateScore();
  video.src = "dog.mp4";
  video.play();
  q12Answered = true;
  appendMessage("assistant", "Dog lovers are my favorite kind of people. 🐶");
 setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q13: "What are you passionate about?" — good answer: "art"
if (
  !q13Answered &&
  moniqueLastMessage.includes("passionate") &&
  /art/i.test(text)
) {
  score++;
  updateScore();
  video.src = "art.mp4";
  video.play();
  q13Answered = true;
  appendMessage("assistant", "Art? Now you’re speaking my language. 🎨");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q14: "How do you usually spend your evenings?" — good answer: "reading"
if (
  !q14Answered &&
  /evenings?/i.test(moniqueLastMessage) &&
  /read(ing)?/i.test(text)
) {
  score++;
  updateScore();
  video.src = "reading.mp4";
  video.play();
  q14Answered = true;
  appendMessage("assistant", "A cozy night with a book? That’s my vibe too. 📚");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q15: "Are you more of a morning or night person?" — good answer: "night"
if (
  !q15Answered &&
  /morning|night person/i.test(moniqueLastMessage) &&
  /night/i.test(text)
) {
  score++;
  updateScore();
  video.src = "night.mp4";
  video.play();
  q15Answered = true;
  appendMessage("assistant", "Ah, a fellow night owl. 🌙");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q16: "What's a fun fact about you?" — good answer: "juggle"
if (
  !q16Answered &&
  /fun fact/i.test(moniqueLastMessage) &&
  /juggle/i.test(text)
) {
  score++;
  updateScore();
  video.src = "juggle.mp4";
  video.play();
  q16Answered = true;
  appendMessage("assistant", "Wait, really? That’s impressive! 🤹‍♂️");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q17: "What’s the last thing you watched on Netflix?" — good answer: "stranger things"
if (
  !q17Answered &&
  /netflix/i.test(moniqueLastMessage) &&
  /stranger things/i.test(text)
) {
  score++;
  updateScore();
  video.src = "stranger.mp4";
  video.play();
  q17Answered = true;
  appendMessage("assistant", "Yesss! Stranger Things is a whole vibe. 🔦");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q18: "Do you like to read? Favorite book?" — good answer: "1984"
if (
  !q18Answered &&
  /read|book/i.test(moniqueLastMessage) &&
  /1984/i.test(text)
) {
  score++;
  updateScore();
  video.src = "book.mp4";
  video.play();
  q18Answered = true;
  appendMessage("assistant", "Classic choice. Dark, powerful, unforgettable. 📖");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q19: "If you could live anywhere, where would it be?" — good answer: "rome"
if (
  !q19Answered &&
  /live anywhere/i.test(moniqueLastMessage) &&
  /paris/i.test(text)
) {
  score++;
  updateScore();
  video.src = "rome.mp4";
  video.play();
  q19Answered = true;
  appendMessage("assistant", "Paris? That’s where all the hopeless romantics go. 🥐💋");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q20: "What's your zodiac sign?" — good answer: "leo"
if (
  !q20Answered &&
  /zodiac|sign/i.test(moniqueLastMessage) &&
  /leo/i.test(text)
) {
  score++;
  updateScore();
  video.src = "leo.mp4";
  video.play();
  q20Answered = true;
  appendMessage("assistant", "A Leo? No wonder you’re bold. 🔥");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q21: "Do you enjoy outdoor activities?" — good answer: "hiking"
if (
  !q21Answered &&
  /outdoor.*activities/i.test(moniqueLastMessage) &&
  /hiking/i.test(text)
) {
  score++;
  updateScore();
  video.src = "hiking.mp4";
  video.play();
  q21Answered = true;
  appendMessage("assistant", "Fresh air, good views, and great company — I’m in! 🥾");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q22: "What's something on your bucket list?" — good answer: "skydiving"
if (
  !q22Answered &&
  /bucket list/i.test(moniqueLastMessage) &&
  /skydiving/i.test(text)
) {
  score++;
  updateScore();
  video.src = "skydiving.mp4";
  video.play();
  q22Answered = true;
  appendMessage("assistant", "Jumping from planes? That’s crazy sexy. ✈️");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q23: "Are you close with your family?" — good answer: "yes"
if (
  !q23Answered &&
  /close.*family/i.test(moniqueLastMessage) &&
  /yes/i.test(text)
) {
  score++;
  updateScore();
  video.src = "family.mp4";
  video.play();
  q23Answered = true;
  appendMessage("assistant", "That’s beautiful. Family means everything. ❤️");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q24: "What's your biggest goal this year?" — good answer: "start a business"
if (
  !q24Answered &&
  /biggest.*goal/i.test(moniqueLastMessage) &&
  /start.*business/i.test(text)
) {
  score++;
  updateScore();
  video.src = "goal.mp4";
  video.play();
  q24Answered = true;
  appendMessage("assistant", "That’s ambitious. I like someone who dreams big. 💼");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q25: "Do you like surprises?" — good answer: "yes"
if (
  !q25Answered &&
  /surprises/i.test(moniqueLastMessage) &&
  /yes/i.test(text)
) {
  score++;
  updateScore();
  video.src = "surprise.mp4";
  video.play();
  q25Answered = true;
  appendMessage("assistant", "Good. I’ve got a few up my sleeve. 😉");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q26: "What's the best trip you've ever been on?" — good answer: "italy"
if (
  !q26Answered &&
  /best trip/i.test(moniqueLastMessage) &&
  /italy/i.test(text)
) {
  score++;
  updateScore();
  video.src = "italy.mp4";
  video.play();
  q26Answered = true;
  appendMessage("assistant", "La dolce vita… take me with you next time. 🇮🇹");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q27: "What's your go-to karaoke song?" — good answer: "bohemian rhapsody"
if (
  !q27Answered &&
  /karaoke.*song/i.test(moniqueLastMessage) &&
  /bohemian rhapsody/i.test(text)
) {
  score++;
  updateScore();
  video.src = "karaoke.mp4";
  video.play();
  q27Answered = true;
  appendMessage("assistant", "A rockstar moment? I’d duet that with you. 🎤");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q28: "If you had a superpower, what would it be?" — good answer: "invisibility"
if (
  !q28Answered &&
  /superpower/i.test(moniqueLastMessage) &&
  /invisibility/i.test(text)
) {
  score++;
  updateScore();
  video.src = "invisible.mp4";
  video.play();
  q28Answered = true;
  appendMessage("assistant", "Sneaky. I’ll keep an eye out for you. 🕵️");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}
// Q29: "What do you look for in a partner?" — good answer: "honesty"
if (
  !q29Answered &&
  /look.*partner/i.test(moniqueLastMessage) &&
  /honest|honesty/i.test(text)
) {
  score++;
  updateScore();
  video.src = "beach3.mp4";
  video.play();
  q29Answered = true;
  appendMessage("assistant", "Truth is sexy. Period. 💯");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q30: "How do you handle stress?" — good answer: "meditation"
if (
  !q30Answered &&
  /handle.*stress/i.test(moniqueLastMessage) &&
  /meditat/i.test(text)
) {
  score++;
  updateScore();
  video.src = "meditate.mp4";
  video.play();
  q30Answered = true;
  appendMessage("assistant", "Zen is underrated. 🧘");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q31: "What's your favorite way to relax?" — good answer: "a bath"
if (
  !q31Answered &&
  /favorite.*relax/i.test(moniqueLastMessage) &&
  /bath/i.test(text)
) {
  score++;
  updateScore();
  video.src = "bath.mp4";
  video.play();
  q31Answered = true;
  appendMessage("assistant", "Bubbles, candles... now you're speaking my language. 🛁");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q32: "Have you ever been in love?" — good answer: "yes"
if (
  !q32Answered &&
  /been.*in love/i.test(moniqueLastMessage) &&
  /yes/i.test(text)
) {
  score++;
  updateScore();
  video.src = "lovebefore.mp4";
  video.play();
  q32Answered = true;
  appendMessage("assistant", "Love leaves a mark, huh? 💘");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q33: "Are you more spontaneous or a planner?" — good answer: "spontaneous"
if (
  !q33Answered &&
  /spontaneous|planner/i.test(moniqueLastMessage) &&
  /spontaneous/i.test(text)
) {
  score++;
  updateScore();
  video.src = "spontaneous.mp4";
  video.play();
  q33Answered = true;
  appendMessage("assistant", "Ooooh, I love a surprise. 🎁");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q34: "What's a hobby you’ve picked up recently?" — good answer: "painting"
if (
  !q34Answered &&
  /hobby.*recent/i.test(moniqueLastMessage) &&
  /paint/i.test(text)
) {
  score++;
  updateScore();
  video.src = "paint.mp4";
  video.play();
  q34Answered = true;
  appendMessage("assistant", "Art is hot. Show me sometime. 🎨");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q35: "How do you define success?" — good answer: "happiness"
if (
  !q35Answered &&
  /define.*success/i.test(moniqueLastMessage) &&
  /happiness/i.test(text)
) {
  score++;
  updateScore();
  video.src = "success.mp4";
  video.play();
  q35Answered = true;
  appendMessage("assistant", "Yes! Not money — joy. ✨");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q36: "What do your friends say you’re like?" — good answer: "loyal"
if (
  !q36Answered &&
  /friends.*say/i.test(moniqueLastMessage) &&
  /loyal/i.test(text)
) {
  score++;
  updateScore();
  video.src = "loyal.mp4";
  video.play();
  q36Answered = true;
  appendMessage("assistant", "That’s rare. I like that. 🐺");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q37: "What’s your favorite holiday?" — good answer: "christmas"
if (
  !q37Answered &&
  /favorite.*holiday/i.test(moniqueLastMessage) &&
  /christmas/i.test(text)
) {
  score++;
  updateScore();
  video.src = "xmas.mp4";
  video.play();
  q37Answered = true;
  appendMessage("assistant", "You better like mistletoe then. 🎄");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q38: "Do you believe in fate?" — good answer: "yes"
if (
  !q38Answered &&
  /believe.*fate/i.test(moniqueLastMessage) &&
  /yes/i.test(text)
) {
  score++;
  updateScore();
  video.src = "fate.mp4";
  video.play();
  q38Answered = true;
  appendMessage("assistant", "Then maybe this moment means something. 🔮");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q39: "What’s your love language?" — good answer: "touch"
if (
  !q39Answered &&
  /love language/i.test(moniqueLastMessage) &&
  /touch/i.test(text)
) {
  score++;
  updateScore();
  video.src = "touch.mp4";
  video.play();
  q39Answered = true;
  appendMessage("assistant", "Mmm... physical touch? That’s mine too. 💋");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q40: "What’s something that always makes you smile?" — good answer: "puppies"
if (
  !q40Answered &&
  /makes.*you.*smile/i.test(moniqueLastMessage) &&
  /puppies|puppy/i.test(text)
) {
  score++;
  updateScore();
  video.src = "puppies.mp4";
  video.play();
  q40Answered = true;
  appendMessage("assistant", "Same. I melt for puppies. 🐾");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q41: "How important is honesty to you?" — good answer: "very"
if (
  !q41Answered &&
  /important.*honesty/i.test(moniqueLastMessage) &&
  /very|super/i.test(text)
) {
  score++;
  updateScore();
  video.src = "honesty.mp4";
  video.play();
  q41Answered = true;
  appendMessage("assistant", "Good. Secrets ruin everything. 🔐");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q42: "Do you like romantic gestures?" — good answer: "yes"
if (
  !q42Answered &&
  /romantic.*gestures/i.test(moniqueLastMessage) &&
  /yes/i.test(text)
) {
  score++;
  updateScore();	
  video.src = "romantic.mp4";
  video.play();
  q42Answered = true;
  appendMessage("assistant", "Ugh, finally someone who gets it. 💐");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q43: "What’s your idea of a perfect date?" — good answer: "picnic"
if (
  !q43Answered &&
  /perfect.*date/i.test(moniqueLastMessage) &&
  /picnic/i.test(text)
) {
  score++;
  updateScore();
  video.src = "picnic.mp4";
  video.play();
  q43Answered = true;
  appendMessage("assistant", "Simplicity and stars. I like that. 🌙");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q44: "Have you ever had a long-distance relationship?" — good answer: "yes"
if (
  !q44Answered &&
  /long.*distance.*relationship/i.test(moniqueLastMessage) &&
  /yes/i.test(text)
) {
  score++;
  updateScore();
  video.src = "romantic.mp4";
  video.play();
  q44Answered = true;
  appendMessage("assistant", "Tough, but kind of poetic. 📱💔");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q45: "What’s the most adventurous thing you’ve done?" — good answer: "bungee jump"
if (
  !q45Answered &&
  /adventurous.*thing/i.test(moniqueLastMessage) &&
  /bungee/i.test(text)
) {
  score++;
  updateScore();
  video.src = "bungee.mp4";
  video.play();
  q45Answered = true;
  appendMessage("assistant", "You wild thing! I love it. 😈");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q46: "What’s your relationship with social media?" — good answer: "limited"
if (
  !q46Answered &&
  /relationship.*social media/i.test(moniqueLastMessage) &&
  /limited|minimal/i.test(text)
) {
  score++;
  updateScore();
  video.src = "social.mp4";
  video.play();
  q46Answered = true;
  appendMessage("assistant", "Same. Real life > screen life. 📵");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q47: "Do you believe people can change?" — good answer: "yes"
if (
  !q47Answered &&
  /believe.*people.*change/i.test(moniqueLastMessage) &&
  /yes/i.test(text)
) {
  score++;
  updateScore();
  video.src = "change.mp4";
  video.play();
  q47Answered = true;
  appendMessage("assistant", "We’re all a work in progress. 🔄");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q48: "What’s one thing you’re really proud of?" — good answer: "my family"
if (
  !q48Answered &&
  /proud.*of/i.test(moniqueLastMessage) &&
  /family/i.test(text)
) {
  score++;
  updateScore();
  video.src = "family.mp4";
  video.play();
  q48Answered = true;
  appendMessage("assistant", "That says a lot about you. 🫶");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q49: "How would you describe your ideal weekend?" — good answer: "road trip"
if (
  !q49Answered &&
  /ideal.*weekend/i.test(moniqueLastMessage) &&
  /road ?trip/i.test(text)
) {
  score++;
  updateScore();
  video.src = "roadtrip.mp4";
  video.play();
  q49Answered = true;
  appendMessage("assistant", "Let’s hit the road. Windows down, music up. 🚗");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}

// Q50: Catch-all fallback (optional if no match but message was good)
if (moniqueLastMessage && score < 20 && text.length > 70) {
  score++;
  updateScore();
  appendMessage("assistant", "Interesting answer... I didn’t expect that. 😉");
  setTimeout(askRandomDateQuestion, 2500);
  return;
}


    // FLOWERS trigger
    if (/flowers/i.test(text)) {
      if (!inventory.includes("Flowers")) {
        inventory.push("Flowers");
        inventoryEl.textContent = inventory.join(", ");
        score++;
        scoreEl.textContent = score;
        video.src = "flowers.mp4";
        video.play().catch(err => console.warn("Video error:", err));
        appendMessage("assistant", "Aww, you brought me flowers? That’s so sweet!");
        return;
      } else {
        appendMessage("assistant", "You already gave me flowers, remember?");
        return;
      }
    }

    // TENNIS trigger
   if (/soccer/i.test(text) && !triggeredSoccer) {
  video.src = "soccer.mp4";
  video.play().catch(err => console.warn("Video error:", err));
  appendMessage("assistant", "Soccer? ⚽ I love a good match!");
  score++;
  updateScore();
  triggeredSoccer = true;
  return;


}

 if (/kiss/i.test(text)) {
    	
      video.src = "kiss.mp4";
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("assistant", "Kissing girls! It's not bad 💋");
      return;
    }

if (/modir/i.test(text)) {
    	
      video.src = "petermodir.mov";
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("assistant", "Mr. Modir is King ");
      score++;
      score++;

      return;
    }
if (/johnny/i.test(text)) {
    	
      video.src = "johnny.mp4";
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("assistant", "Giovanni Santo is king! ");
      score++;
      score++;

      return;
    }


if (/peekaboo/i.test(text)) {
    	
      video.src = "peekaboo2.mp4";
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("assistant", "Peekaboo! 💋 let get back to business");
 
 
      return;
    }

    if (/tennis/i.test(text) && !triggeredTennis) {

      video.src = "tennis.mp4";
      video.play().catch(err => console.warn("Video error:", err));
      appendMessage("assistant", "Tennis? My favorite sport after flirting 💋");
   score++;
  updateScore();
  triggeredTennis = true;
      return;
    }
if (/pasta/i.test(text) && !triggeredPasta) {
  video.src = "pasta.mp4";
  video.play().catch(err => console.warn("Video error:", err));
  appendMessage("assistant", "Pasta? My favorite sport after flirting 💋");
  score++;
  updateScore();
  triggeredPasta = true;
  return;
}
if (!triggeredGym && /\b(gym|work ?out|exercise|fitness)\b/i.test(text) && /\b(let('|’)s|we should|wanna|want to)\b/i.test(text)) {
  video.src = "gym.mp4";
  video.play().catch(err => console.warn("Video error:", err));
  appendMessage("assistant", "Ooooh, a workout date? Just don’t skip leg day 💪😉");
  score++;
  updateScore();
  triggeredGym = true;
  return;
}


    
    
    // Keyword scoring for tennis, flowers, soccer, pasta
    const scoreWords = ["flowers", "tennis", "soccer", "pasta"];
    if (scoreWords.some(word => textClean.includes(word))) {
      
      scoreEl.textContent = score;
    }

    // Compliment detection
    const compliments = ["you are beautiful", "you have a great smile", "you're very charming", "you seem really interesting", "you're easy to talk to", "you're very elegant", "you have amazing eyes", "i love your personality", "you’re very classy", "you have a great laugh", "you’re so kind", "you’re really smart", "you look stunning tonight", "you’re so confident", "you’re glowing", "you have great energy", "you’re so stylish", "you're fun to talk to", "you’re really graceful", "you seem really passionate"];
    
    if (compliments.some(c => textClean.includes(c))) {
      score++;
      scoreEl.textContent = score;

    if (score <= -3) {
      videoEl.src = "sad1.mp4";
      videoEl.play();
      appendMessage("assistant", "You are not my type. Goodbye...");
      input.disabled = true;
      setTimeout(() => {
        const playBtn = document.createElement("button");
        playBtn.textContent = "PLAY AGAIN";
        playBtn.onclick = () => {
          location.reload();
        };
        const endBtn = document.createElement("button");
        endBtn.textContent = "END";
        endBtn.onclick = () => {
          document.body.innerHTML = "<h1 style='color: white; text-align: center;'>Goodbye 💔</h1>";
          setTimeout(() => window.close(), 2000);
        };
        const controls = document.createElement("div");
        controls.appendChild(playBtn);
        controls.appendChild(endBtn);
        controls.style.marginTop = "20px";
        controls.style.textAlign = "center";
        controls.style.display = "flex";
        controls.style.justifyContent = "center";
        controls.style.gap = "20px";
        document.body.appendChild(controls);
      }, 10000);
      return;
    }

    }
} 


if (score === 4 && !rechargeTriggered) {
  rechargeTriggered = true;
  awaitingRechargeChoice = true;

  const flirtyTeases = [
    "Wow… one more point and I might start falling for you 💋",
    "You’re almost inside my heart… just one more spark, babe.",
    "Mmm, you’re close. Say one more sweet thing and you’ll unlock something special…"
  ];

  const endVideos = ["end4.mp4", "end5.mp4", "end6.mp4"];

  const randomTease = flirtyTeases[Math.floor(Math.random() * flirtyTeases.length)];
  const selectedEndVideo = endVideos[Math.floor(Math.random() * endVideos.length)];

  appendMessage("monique", randomTease);

  setTimeout(() => {
    video.src = selectedEndVideo;
    video.play().catch(err => console.warn("Video error:", err));
    appendMessage("monique", "Time’s up! Want to continue? Recharge me for 0.003 SOL — We are close. Let's go to the next level. 😘");
    input.disabled = false;
  }, 6000);
}


if (score > 7 && level === 0) {
  level = 1;
input.disabled = true;

  appendMessage("system", "Wow you got me! You are my type! Let's go all the way!");
  video.src = "wedding.mp4";
  video.play().catch(err => console.warn("Video error:", err));

  setTimeout(() => {
    appendMessage("monique", "Goodbye for now, my love 💋");
    appendMessage("system", "🎬 Act 2 coming soon. Stay tuned — follow us on social media!");
    video.src = "goodbye.mp4";
    video.play().catch(err => console.warn("Video error:", err));

    // Optional: Fade out or end interaction after video
    setTimeout(() => {
      
      appendMessage("system", "💔 End of Act 1. Refresh to play again.");
    }, 10000); // adjust timing if needed based on goodbye.mp4 duration
  }, 8000); // wait until wedding video finishes (adjust duration if needed)
}


    chatHistory.push({ role: "user", content: text });

try {
  const response = await fetch("https://gtg3.onrender.com/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messages: chatHistory
    })
  });
	
  const data = await response.json();
  const reply = data.reply || "Hmm... I'm speechless!";

  moniqueLastMessage = reply.toLowerCase(); // ✅ store Monique's actual reply
  console.log("Monique last message:", moniqueLastMessage);

  chatHistory.push({ role: "assistant", content: reply });
  appendMessage("assistant", reply);

} catch (err) {
  console.error("OpenAI Error:", err);
  appendMessage("assistant", "Sorry, I had a little glitch. Can you say that again?");
}


      
  }
});

});