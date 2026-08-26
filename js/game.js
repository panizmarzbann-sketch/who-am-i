/**
 * Who Am I? What Am I? - Game Logic Engine
 * Specially Crafted for Paniz Marzban
 */

class GameEngine {
  constructor() {
    this.currentLevel = "All";
    this.currentCategory = "all";
    this.currentMode = "detective"; // 'detective' | 'quiz' | 'speed' | 'party'
    
    this.cardPool = [];
    this.currentCardIndex = 0;
    this.currentCard = null;
    
    // Detective mode state
    this.revealedCluesCount = 1;
    this.revealedLetters = new Set();
    this.isCardSolved = false;

    // Blitz mode state
    this.blitzTimer = null;
    this.blitzTimeLeft = 60;
    this.blitzIsRunning = false;

    // Persistent User Stats
    this.stats = this.loadStats();
  }

  loadStats() {
    const saved = localStorage.getItem("paniz_game_stats");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.warn("Could not parse saved stats", e);
      }
    }
    return {
      score: 0,
      streak: 0,
      maxStreak: 0,
      solvedCount: 0,
      totalGuesses: 0,
      levelProgress: {
        A1: 0,
        A2: 0,
        B1: 0,
        B2: 0,
        C1: 0,
        C2: 0
      }
    };
  }

  saveStats() {
    localStorage.setItem("paniz_game_stats", JSON.stringify(this.stats));
  }

  resetStats() {
    this.stats = {
      score: 0,
      streak: 0,
      maxStreak: 0,
      solvedCount: 0,
      totalGuesses: 0,
      levelProgress: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }
    };
    this.saveStats();
  }

  initCards() {
    const cards = window.getCards ? window.getCards(this.currentLevel, this.currentCategory) : window.DEFAULT_CARDS;
    // Shuffle cards
    this.cardPool = this.shuffleArray([...cards]);
    this.currentCardIndex = 0;
    if (this.cardPool.length > 0) {
      this.loadCard(0);
    } else {
      this.currentCard = null;
    }
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  setLevel(level) {
    this.currentLevel = level;
    this.initCards();
  }

  setCategory(category) {
    this.currentCategory = category;
    this.initCards();
  }

  setMode(mode) {
    this.currentMode = mode;
    if (mode === 'speed') {
      this.startBlitz();
    } else {
      this.stopBlitz();
    }
  }

  loadCard(index) {
    if (index >= this.cardPool.length) {
      // Re-shuffle and start from beginning
      this.cardPool = this.shuffleArray([...this.cardPool]);
      this.currentCardIndex = 0;
    } else {
      this.currentCardIndex = index;
    }
    
    this.currentCard = this.cardPool[this.currentCardIndex];
    this.revealedCluesCount = 1;
    this.revealedLetters.clear();
    this.isCardSolved = false;

    return this.currentCard;
  }

  nextCard() {
    return this.loadCard(this.currentCardIndex + 1);
  }

  prevCard() {
    let prevIdx = this.currentCardIndex - 1;
    if (prevIdx < 0) prevIdx = Math.max(0, this.cardPool.length - 1);
    return this.loadCard(prevIdx);
  }

  // Detective Mode clue reveal
  revealNextClue() {
    if (this.revealedCluesCount < 4) {
      this.revealedCluesCount++;
      if (window.soundEngine) window.soundEngine.playClue();
      return true;
    }
    return false;
  }

  getPotentialPoints() {
    // Clue 1: 100pts, Clue 2: 75pts, Clue 3: 50pts, Clue 4: 25pts
    // Letter hint penalty: -5pts per revealed letter (min 10pts)
    const clueBase = [100, 75, 50, 25][this.revealedCluesCount - 1] || 25;
    const penalty = this.revealedLetters.size * 5;
    return Math.max(10, clueBase - penalty);
  }

  // Hints
  revealFirstLetter() {
    if (!this.currentCard) return;
    const clean = this.currentCard.answer.replace(/[^a-zA-Z]/g, "").toUpperCase();
    if (clean.length > 0) {
      this.revealedLetters.add(clean[0]);
      if (window.soundEngine) window.soundEngine.playHint();
    }
  }

  revealVowels() {
    if (!this.currentCard) return;
    const vowels = ["A", "E", "I", "O", "U"];
    const letters = this.currentCard.answer.toUpperCase().split("");
    letters.forEach(char => {
      if (vowels.includes(char)) {
        this.revealedLetters.add(char);
      }
    });
    if (window.soundEngine) window.soundEngine.playHint();
  }

  revealRandomLetter() {
    if (!this.currentCard) return;
    const letters = this.currentCard.answer.toUpperCase().replace(/[^A-Z]/g, "").split("");
    const unrevealed = letters.filter(l => !this.revealedLetters.has(l));
    if (unrevealed.length > 0) {
      const pick = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      this.revealedLetters.add(pick);
      if (window.soundEngine) window.soundEngine.playHint();
    }
  }

  // Answer matching algorithm
  normalizeString(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .trim()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "")
      .replace(/^(a|an|the)\s+/, "")
      .replace(/\s+/g, " ");
  }

  // Levenshtein distance for fuzzy matching
  levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  checkGuess(userGuess) {
    if (!this.currentCard) return false;
    this.stats.totalGuesses++;

    const normUser = this.normalizeString(userGuess);
    if (!normUser) return false;

    const accepted = (this.currentCard.acceptedAnswers || [this.currentCard.answer]).map(ans => 
      this.normalizeString(ans)
    );

    let isMatch = false;

    // 1. Direct match check
    for (let target of accepted) {
      if (normUser === target) {
        isMatch = true;
        break;
      }
    }

    // 2. Fuzzy match (allow 1 typo for answers with 5+ letters)
    if (!isMatch) {
      for (let target of accepted) {
        if (target.length >= 5 && Math.abs(target.length - normUser.length) <= 1) {
          if (this.levenshteinDistance(normUser, target) <= 1) {
            isMatch = true;
            break;
          }
        }
      }
    }

    if (isMatch) {
      this.isCardSolved = true;
      const pts = this.getPotentialPoints();
      this.stats.score += pts;
      this.stats.streak++;
      if (this.stats.streak > this.stats.maxStreak) {
        this.stats.maxStreak = this.stats.streak;
      }
      this.stats.solvedCount++;

      // Track level progress
      const lvl = this.currentCard.level;
      if (this.stats.levelProgress[lvl] !== undefined) {
        this.stats.levelProgress[lvl]++;
      }

      this.saveStats();
      if (window.soundEngine) window.soundEngine.playCorrect();
      this.triggerConfetti();
      return { success: true, pointsEarned: pts, card: this.currentCard };
    } else {
      this.stats.streak = 0;
      this.saveStats();
      if (window.soundEngine) window.soundEngine.playWrong();
      return { success: false };
    }
  }

  // Speed Blitz logic
  startBlitz(onTick, onComplete) {
    this.stopBlitz();
    this.blitzTimeLeft = 60;
    this.blitzIsRunning = true;
    
    this.blitzTimer = setInterval(() => {
      this.blitzTimeLeft--;
      if (onTick) onTick(this.blitzTimeLeft);

      if (this.blitzTimeLeft <= 0) {
        this.stopBlitz();
        if (onComplete) onComplete();
      }
    }, 1000);
  }

  stopBlitz() {
    if (this.blitzTimer) {
      clearInterval(this.blitzTimer);
      this.blitzTimer = null;
    }
    this.blitzIsRunning = false;
  }

  // Built-in Lightweight Pastel Confetti Engine
  triggerConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiColors = [
      "#ffd1dc", "#ffb3c1", "#ff85a1", "#f72585",
      "#bae0fd", "#a0c4ff", "#70a9ff", "#4361ee",
      "#d8f3dc", "#e2d4f0", "#fef08a"
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
        p.vy += 0.5; // gravity
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

window.gameEngine = new GameEngine();
