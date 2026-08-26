/**
 * Funny Pastel Hangman - Game Engine
 * Designed by Paniz (@panizteacher)
 * Theme: Pastel Pink, Purple & Cyan
 */

class HangmanEngine {
  constructor() {
    this.maxLives = 6;
    this.livesLeft = 6;
    this.currentLevel = "All";
    this.wordPool = [];
    this.currentWordObj = null;
    this.currentWord = "";
    this.guessedLetters = new Set();
    this.isGameOver = false;
    this.isWon = false;

    this.stats = this.loadStats();
  }

  loadStats() {
    const saved = localStorage.getItem("paniz_hangman_stats");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.warn(e);
      }
    }
    return {
      wins: 0,
      losses: 0,
      streak: 0,
      maxStreak: 0,
      levelWins: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }
    };
  }

  saveStats() {
    localStorage.setItem("paniz_hangman_stats", JSON.stringify(this.stats));
  }

  initGame(level = "All") {
    this.currentLevel = level;
    const words = window.getHangmanWords ? window.getHangmanWords(level) : window.HANGMAN_WORDS;
    this.wordPool = this.shuffleArray([...words]);
    this.startNewRound();
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  startNewRound() {
    if (this.wordPool.length === 0) {
      const words = window.getHangmanWords ? window.getHangmanWords(this.currentLevel) : window.HANGMAN_WORDS;
      this.wordPool = this.shuffleArray([...words]);
    }

    this.currentWordObj = this.wordPool.pop();
    this.currentWord = this.currentWordObj.word.toUpperCase();
    this.guessedLetters.clear();
    this.livesLeft = this.maxLives;
    this.isGameOver = false;
    this.isWon = false;

    return this.currentWordObj;
  }

  guessLetter(letter) {
    if (this.isGameOver) return null;
    const char = letter.toUpperCase();
    if (this.guessedLetters.has(char)) return null;

    this.guessedLetters.add(char);

    if (this.currentWord.includes(char)) {
      if (window.soundEngine) window.soundEngine.playPop();

      // Check if won
      const hasWon = this.currentWord.split("").every(c => this.guessedLetters.has(c));
      if (hasWon) {
        this.isGameOver = true;
        this.isWon = true;
        this.stats.wins++;
        this.stats.streak++;
        if (this.stats.streak > this.stats.maxStreak) {
          this.stats.maxStreak = this.stats.streak;
        }
        const lvl = this.currentWordObj.level;
        if (this.stats.levelWins[lvl] !== undefined) {
          this.stats.levelWins[lvl]++;
        }
        this.saveStats();
        if (window.soundEngine) window.soundEngine.playCorrect();
        this.triggerConfetti();
      }

      return { hit: true, won: this.isWon, lives: this.livesLeft };
    } else {
      this.livesLeft--;
      if (window.soundEngine) window.soundEngine.playWrong();

      if (this.livesLeft <= 0) {
        this.isGameOver = true;
        this.isWon = false;
        this.stats.losses++;
        this.stats.streak = 0;
        this.saveStats();
      }

      return { hit: false, won: false, lives: this.livesLeft, gameOver: this.isGameOver };
    }
  }

  revealHintVowel() {
    if (this.isGameOver) return;
    const vowels = ["A", "E", "I", "O", "U"];
    const unrevealedVowels = vowels.filter(v => this.currentWord.includes(v) && !this.guessedLetters.has(v));
    if (unrevealedVowels.length > 0) {
      const pick = unrevealedVowels[0];
      return this.guessLetter(pick);
    }
    return null;
  }

  triggerConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiColors = [
      "#ffd1dc", "#ffb3c1", "#d8bbff", "#e2d4f0",
      "#a0c4ff", "#cbf3f0", "#b9fbc0", "#fde2e4"
    ];

    const particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() * 200 - 100),
        y: canvas.height * 0.4 + (Math.random() * 100 - 50),
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 10 + 6,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let frames = 0;
    function render() {
      frames++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5;
        p.vx *= 0.98;
        p.rotation += p.rotSpeed;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          ctx.restore();
        }
      });

      if (alive && frames < 140) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    render();
  }
}

// Draw Funny Bob the Marshmallow & Pastel Balloons
function renderBobCharacter(svgEl, livesLeft) {
  if (!svgEl) return;

  const balloonColors = [
    "#ffd1dc", // Pink
    "#a0c4ff", // Sky Cyan
    "#d8bbff", // Purple
    "#b9fbc0", // Mint
    "#fef08a", // Soft Yellow
    "#ffc6ff"  // Rose
  ];

  let balloonsSvg = "";
  for (let i = 0; i < livesLeft; i++) {
    const angle = (i - (livesLeft - 1) / 2) * 26;
    const bx = 160 + Math.sin((angle * Math.PI) / 180) * 85;
    const by = 85 - Math.cos((angle * Math.PI) / 180) * 45;
    const color = balloonColors[i % balloonColors.length];

    balloonsSvg += `
      <!-- Balloon String -->
      <path d="M ${bx} ${by + 24} Q 160 ${by + 60}, 160 180" stroke="#cbd5e1" stroke-width="1.8" fill="none" stroke-dasharray="3,2" />
      <!-- Balloon -->
      <g transform="translate(${bx}, ${by})">
        <ellipse cx="0" cy="0" rx="20" ry="24" fill="${color}" stroke="#ffffff" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))" />
        <ellipse cx="-6" cy="-8" rx="5" ry="8" fill="#ffffff" opacity="0.5" />
        <polygon points="-3,23 3,23 0,27" fill="${color}" />
      </g>
    `;
  }

  // Bob's Funny Face depending on lives
  let faceSvg = "";
  let bodyBounceClass = "bob-happy";

  if (livesLeft === 6) {
    // Super Happy
    faceSvg = `
      <!-- Blushing cheeks -->
      <circle cx="142" cy="218" r="7" fill="#ffb3c1" opacity="0.6" />
      <circle cx="178" cy="218" r="7" fill="#ffb3c1" opacity="0.6" />
      <!-- Happy eyes -->
      <path d="M 136 210 Q 142 202, 148 210" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M 172 210 Q 178 202, 184 210" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round" />
      <!-- Smile -->
      <path d="M 152 220 Q 160 228, 168 220" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round" />
      <!-- Little party hat -->
      <polygon points="160,150 148,172 172,172" fill="#ffc6ff" stroke="#d8bbff" stroke-width="2" />
      <circle cx="160" cy="148" r="4" fill="#fef08a" />
    `;
  } else if (livesLeft === 5) {
    // Sweat drop
    faceSvg = `
      <circle cx="142" cy="218" r="7" fill="#ffb3c1" opacity="0.6" />
      <circle cx="178" cy="218" r="7" fill="#ffb3c1" opacity="0.6" />
      <circle cx="142" cy="208" r="4" fill="#2b2d42" />
      <circle cx="178" cy="208" r="4" fill="#2b2d42" />
      <path d="M 154 222 Q 160 226, 166 222" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round" />
      <!-- Sweat drop -->
      <path d="M 188 198 Q 192 208, 186 212 Q 182 208, 188 198 Z" fill="#70a9ff" />
    `;
  } else if (livesLeft === 4) {
    // Sunglasses (Cool)
    faceSvg = `
      <circle cx="142" cy="220" r="7" fill="#ffb3c1" opacity="0.6" />
      <circle cx="178" cy="220" r="7" fill="#ffb3c1" opacity="0.6" />
      <!-- Sunglasses -->
      <polygon points="132,204 152,204 148,216 136,216" fill="#2b2d42" rx="3" />
      <polygon points="168,204 188,204 184,216 172,216" fill="#2b2d42" rx="3" />
      <line x1="152" y1="208" x2="168" y2="208" stroke="#2b2d42" stroke-width="3" />
      <line x1="130" y1="206" x2="122" y2="204" stroke="#2b2d42" stroke-width="2" />
      <line x1="190" y1="206" x2="198" y2="204" stroke="#2b2d42" stroke-width="2" />
      <!-- Smug smile -->
      <path d="M 152 224 Q 162 228, 168 221" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round" />
    `;
  } else if (livesLeft === 3) {
    // Dizzy swirl eyes
    faceSvg = `
      <!-- Dizzy X eyes -->
      <path d="M 137 205 L 147 215 M 147 205 L 137 215" stroke="#4361ee" stroke-width="3" stroke-linecap="round" />
      <path d="M 173 205 L 183 215 M 183 205 L 173 215" stroke="#4361ee" stroke-width="3" stroke-linecap="round" />
      <!-- Wobbly mouth -->
      <path d="M 150 224 Q 155 220, 160 224 Q 165 228, 170 224" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round" />
    `;
  } else if (livesLeft === 2) {
    // Sad dropped ice cream
    faceSvg = `
      <circle cx="142" cy="208" r="4" fill="#2b2d42" />
      <circle cx="178" cy="208" r="4" fill="#2b2d42" />
      <path d="M 152 226 Q 160 218, 168 226" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round" />
      <!-- Dropped ice cream splat on cloud -->
      <g transform="translate(195, 255)">
        <polygon points="0,0 8,16 -4,14" fill="#fde2e4" stroke="#e0a96d" stroke-width="1.5" />
        <circle cx="4" cy="18" r="8" fill="#ff85a1" />
      </g>
    `;
  } else if (livesLeft === 1) {
    // Shocked panic
    faceSvg = `
      <!-- Wide shock eyes -->
      <circle cx="142" cy="206" r="8" fill="#ffffff" stroke="#2b2d42" stroke-width="2.5" />
      <circle cx="142" cy="206" r="3" fill="#2b2d42" />
      <circle cx="178" cy="206" r="8" fill="#ffffff" stroke="#2b2d42" stroke-width="2.5" />
      <circle cx="178" cy="206" r="3" fill="#2b2d42" />
      <!-- Open O mouth -->
      <ellipse cx="160" cy="226" rx="7" ry="9" fill="#2b2d42" />
    `;
  } else {
    // 0 Lives: Landed in Strawberry Pudding!
    faceSvg = `
      <path d="M 137 205 L 147 215 M 147 205 L 137 215" stroke="#f72585" stroke-width="3" stroke-linecap="round" />
      <path d="M 173 205 L 183 215 M 183 205 L 173 215" stroke="#f72585" stroke-width="3" stroke-linecap="round" />
      <path d="M 152 225 Q 160 230, 168 225" stroke="#f72585" stroke-width="3" fill="none" stroke-linecap="round" />
    `;
  }

  svgEl.innerHTML = `
    <!-- Floating Clouds Background -->
    <g opacity="0.7">
      <path d="M 30 260 Q 50 240, 80 255 Q 110 235, 140 260 Q 150 280, 120 285 Q 70 290, 40 280 Z" fill="#e0effe" />
      <path d="M 180 265 Q 210 245, 240 260 Q 270 240, 295 265 Q 305 285, 280 290 Q 220 295, 190 285 Z" fill="#f3e8ff" />
    </g>

    ${balloonsSvg}

    <!-- Bob the Marshmallow Body -->
    <g class="${bodyBounceClass}" id="bob-character-body">
      <!-- Main body (Marshmallow cylinder / rounded rectangle) -->
      <rect x="118" y="170" width="84" height="74" rx="36" fill="url(#bobGradient)" stroke="#ffffff" stroke-width="3" filter="drop-shadow(0 8px 16px rgba(216,187,255,0.3))" />
      
      <!-- Bob Face Expression -->
      ${faceSvg}

      <!-- Cute little feet -->
      <ellipse cx="140" cy="245" rx="10" ry="6" fill="#ffd1dc" stroke="#ffffff" stroke-width="1.5" />
      <ellipse cx="180" cy="245" rx="10" ry="6" fill="#ffd1dc" stroke="#ffffff" stroke-width="1.5" />
    </g>

    <!-- Gradients -->
    <defs>
      <linearGradient id="bobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="50%" stop-color="#fdf0f5" />
        <stop offset="100%" stop-color="#e8f4f8" />
      </linearGradient>
    </defs>
  `;
}

window.hangmanEngine = new HangmanEngine();
window.renderBobCharacter = renderBobCharacter;
