/**
 * Who Am I? What Am I? - UI & Application Controller
 * Created for Paniz Marzban
 */

document.addEventListener("DOMContentLoaded", () => {
  const game = window.gameEngine;
  const audio = window.soundEngine;

  // DOM Elements
  const soundToggleBtn = document.getElementById("sound-toggle-btn");
  const soundIcon = document.getElementById("sound-icon");
  const statsModalBtn = document.getElementById("stats-modal-btn");
  const certModalBtn = document.getElementById("cert-modal-btn");
  const addCardModalBtn = document.getElementById("add-card-modal-btn");

  // Domain & Address bar
  const copyAddressBtn = document.getElementById("copy-address-btn");
  const copyUrlBtn = document.getElementById("copy-url-btn");
  const domainInfoBtn = document.getElementById("domain-info-btn");
  const domainModal = document.getElementById("domain-modal");
  const domainCloseBtn = document.getElementById("domain-close-btn");
  const copyModalUrlBtn = document.getElementById("copy-modal-url-btn");
  const appToast = document.getElementById("app-toast");

  // HUD
  const hudScore = document.getElementById("hud-score");
  const hudStreak = document.getElementById("hud-streak");
  const hudSolved = document.getElementById("hud-solved");
  const hudLevel = document.getElementById("hud-level");

  // Filters & Modes
  const levelPills = document.querySelectorAll(".level-pill");
  const categoryChips = document.querySelectorAll(".chip-btn");
  const modeBtns = document.querySelectorAll(".mode-btn");

  // Game Sections
  const detectiveSection = document.getElementById("detective-section");
  const quizSection = document.getElementById("quiz-section");
  const speedSection = document.getElementById("speed-section");
  const partySection = document.getElementById("party-section");

  // Detective elements
  const cardBadgeType = document.getElementById("card-badge-type");
  const cardBadgeLevel = document.getElementById("card-badge-level");
  const cardPointsPotential = document.getElementById("card-points-potential");
  const cluesContainer = document.getElementById("clues-container");
  const letterTilesContainer = document.getElementById("letter-tiles-container");
  const guessForm = document.getElementById("guess-form");
  const guessInput = document.getElementById("guess-input");
  const nextCardBtn = document.getElementById("next-card-btn");

  // Hints
  const hintFirstLetterBtn = document.getElementById("hint-first-letter");
  const hintVowelsBtn = document.getElementById("hint-vowels");
  const hintRandomBtn = document.getElementById("hint-random");

  // Quiz elements
  const quizBadgeType = document.getElementById("quiz-badge-type");
  const quizBadgeLevel = document.getElementById("quiz-badge-level");
  const quizCluesContainer = document.getElementById("quiz-clues-container");
  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const quizNextBtn = document.getElementById("quiz-next-btn");

  // Speed blitz elements
  const speedTimerSec = document.getElementById("speed-timer-sec");
  const speedBarFill = document.getElementById("speed-bar-fill");
  const speedCardBadge = document.getElementById("speed-card-badge");
  const speedCluesContainer = document.getElementById("speed-clues-container");
  const speedGuessForm = document.getElementById("speed-guess-form");
  const speedGuessInput = document.getElementById("speed-guess-input");
  const speedPassBtn = document.getElementById("speed-pass-btn");

  // Party elements
  const partyBadgeType = document.getElementById("party-badge-type");
  const partyBadgeLevel = document.getElementById("party-badge-level");
  const partyClueText = document.getElementById("party-clue-text");
  const partyRevealBtn = document.getElementById("party-reveal-btn");
  const partyAnswerBox = document.getElementById("party-answer-box");
  const partyPrevBtn = document.getElementById("party-prev-btn");
  const partyNextBtn = document.getElementById("party-next-btn");

  // Modals
  const victoryModal = document.getElementById("victory-modal");
  const modalVictoryEmoji = document.getElementById("modal-victory-emoji");
  const modalVictoryAnswer = document.getElementById("modal-victory-answer");
  const modalVictoryPoints = document.getElementById("modal-victory-points");
  const modalVictoryFact = document.getElementById("modal-victory-fact");
  const modalVictoryNextBtn = document.getElementById("modal-victory-next-btn");
  const modalVictoryCloseBtn = document.getElementById("modal-victory-close-btn");

  const statsModal = document.getElementById("stats-modal");
  const statsCloseBtn = document.getElementById("stats-close-btn");
  const certModal = document.getElementById("cert-modal");
  const certCloseBtn = document.getElementById("cert-close-btn");
  const printCertBtn = document.getElementById("print-cert-btn");
  const creatorModal = document.getElementById("creator-modal");
  const creatorCloseBtn = document.getElementById("creator-close-btn");
  const customCardForm = document.getElementById("custom-card-form");

  // ========================================================
  // INITIALIZATION
  // ========================================================
  updateAudioIcon();
  game.initCards();
  renderHUD();
  renderCurrentView();

  // ========================================================
  // TOAST & CLIPBOARD HELPER
  // ========================================================
  function showToast(message) {
    if (!appToast) return;
    appToast.textContent = message;
    appToast.classList.add("show");
    setTimeout(() => {
      appToast.classList.remove("show");
    }, 2800);
  }

  function copyAddressToClipboard() {
    const url = "https://panizmarzban.com/who-am-i";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        audio.playPop();
        showToast("✨ Copied: https://panizmarzban.com/who-am-i");
      }).catch(() => {
        fallbackCopyText(url);
      });
    } else {
      fallbackCopyText(url);
    }
  }

  function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      audio.playPop();
      showToast("✨ Copied: " + text);
    } catch (e) {
      alert("Address URL: " + text);
    }
    document.body.removeChild(textarea);
  }

  if (copyAddressBtn) {
    copyAddressBtn.addEventListener("click", copyAddressToClipboard);
  }
  if (copyUrlBtn) {
    copyUrlBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      copyAddressToClipboard();
    });
  }

  // Domain modal triggers
  if (domainInfoBtn) {
    domainInfoBtn.addEventListener("click", () => {
      audio.playPop();
      domainModal.classList.add("open");
    });
  }

  if (domainCloseBtn) {
    domainCloseBtn.addEventListener("click", () => {
      audio.playPop();
      domainModal.classList.remove("open");
    });
  }

  if (copyModalUrlBtn) {
    copyModalUrlBtn.addEventListener("click", () => {
      copyAddressToClipboard();
    });
  }

  // ========================================================
  // AUDIO TOGGLE
  // ========================================================
  soundToggleBtn.addEventListener("click", () => {
    const isMuted = audio.toggleMute();
    updateAudioIcon();
    if (!isMuted) audio.playPop();
  });

  function updateAudioIcon() {
    if (audio.isMuted()) {
      soundIcon.textContent = "🔇";
      soundToggleBtn.title = "Unmute Sound Effects";
    } else {
      soundIcon.textContent = "🔊";
      soundToggleBtn.title = "Mute Sound Effects";
    }
  }

  // ========================================================
  // HUD UPDATE
  // ========================================================
  function renderHUD() {
    hudScore.textContent = game.stats.score;
    hudStreak.textContent = game.stats.streak;
    hudSolved.textContent = game.stats.solvedCount;
    hudLevel.textContent = game.currentLevel;
  }

  // ========================================================
  // LEVEL FILTER SELECTOR
  // ========================================================
  levelPills.forEach(pill => {
    pill.addEventListener("click", () => {
      audio.playPop();
      levelPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const lvl = pill.getAttribute("data-level");
      game.setLevel(lvl);
      renderHUD();
      renderCurrentView();
    });
  });

  // ========================================================
  // CATEGORY FILTER SELECTOR
  // ========================================================
  categoryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      audio.playPop();
      categoryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.getAttribute("data-category");
      game.setCategory(cat);
      renderCurrentView();
    });
  });

  // ========================================================
  // MODE SELECTOR
  // ========================================================
  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audio.playPop();
      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-mode");
      game.setMode(mode);

      // Hide all mode sections
      detectiveSection.style.display = "none";
      quizSection.style.display = "none";
      speedSection.style.display = "none";
      partySection.style.display = "none";

      if (mode === "detective") detectiveSection.style.display = "flex";
      if (mode === "quiz") quizSection.style.display = "flex";
      if (mode === "speed") speedSection.style.display = "flex";
      if (mode === "party") partySection.style.display = "flex";

      renderCurrentView();
    });
  });

  function renderCurrentView() {
    if (!game.currentCard) {
      alert("No cards found for this level/category combination. Try selecting 'All'!");
      return;
    }

    if (game.currentMode === "detective") renderDetectiveCard();
    if (game.currentMode === "quiz") renderQuizCard();
    if (game.currentMode === "speed") renderSpeedCard();
    if (game.currentMode === "party") renderPartyCard();
  }

  // ========================================================
  // DETECTIVE MODE RENDER & LOGIC
  // ========================================================
  function renderDetectiveCard() {
    const card = game.currentCard;
    if (!card) return;

    cardBadgeType.textContent = card.type === "who" ? "👤 WHO AM I?" : "✨ WHAT AM I?";
    cardBadgeLevel.textContent = `CEFR ${card.level}`;
    cardPointsPotential.textContent = `+${game.getPotentialPoints()} pts`;

    // Render Clues
    cluesContainer.innerHTML = "";
    card.clues.forEach((clueText, idx) => {
      const clueNum = idx + 1;
      const isRevealed = clueNum <= game.revealedCluesCount;

      const clueEl = document.createElement("div");
      clueEl.className = `clue-card ${isRevealed ? "revealed" : "locked"}`;

      if (isRevealed) {
        clueEl.innerHTML = `
          <div class="clue-number-badge">${clueNum}</div>
          <div class="clue-content">
            <div class="clue-text">${clueText}</div>
            <div class="clue-points">${clueNum === 1 ? "Top Clue (+100 pts)" : `Clue ${clueNum}`}</div>
          </div>
        `;
      } else {
        clueEl.innerHTML = `
          <div class="clue-number-badge">🔒</div>
          <div class="clue-content">
            <div class="clue-text"><strong>Click to unlock Clue #${clueNum}</strong> (-25 pts)</div>
          </div>
        `;
        clueEl.addEventListener("click", () => {
          if (clueNum === game.revealedCluesCount + 1) {
            game.revealNextClue();
            renderDetectiveCard();
          }
        });
      }

      cluesContainer.appendChild(clueEl);
    });

    // Render Word Tiles
    renderLetterTiles();

    // Reset input
    guessInput.value = "";
    guessInput.focus();
  }

  function renderLetterTiles() {
    if (!game.currentCard) return;
    letterTilesContainer.innerHTML = "";
    const answer = game.currentCard.answer;

    for (let char of answer) {
      const upper = char.toUpperCase();
      const tile = document.createElement("div");

      if (char === " ") {
        tile.className = "letter-tile space";
      } else if (/[a-zA-Z]/.test(char)) {
        if (game.revealedLetters.has(upper) || game.isCardSolved) {
          tile.className = "letter-tile revealed";
          tile.textContent = upper;
        } else {
          tile.className = "letter-tile";
          tile.textContent = "_";
        }
      } else {
        tile.className = "letter-tile revealed";
        tile.textContent = char;
      }
      letterTilesContainer.appendChild(tile);
    }
  }

  // Clue Detective Guess Handler
  guessForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = guessInput.value.trim();
    if (!guess) return;

    const result = game.checkGuess(guess);
    renderHUD();

    if (result.success) {
      renderLetterTiles();
      showVictoryModal(result.card, result.pointsEarned);
    } else {
      guessInput.style.borderColor = "#ff4d6d";
      guessInput.classList.add("shake-animation");
      setTimeout(() => {
        guessInput.style.borderColor = "";
        guessInput.classList.remove("shake-animation");
      }, 500);
    }
  });

  nextCardBtn.addEventListener("click", () => {
    audio.playPop();
    game.nextCard();
    renderDetectiveCard();
  });

  // Detective Hint Buttons
  hintFirstLetterBtn.addEventListener("click", () => {
    game.revealFirstLetter();
    cardPointsPotential.textContent = `+${game.getPotentialPoints()} pts`;
    renderLetterTiles();
  });

  hintVowelsBtn.addEventListener("click", () => {
    game.revealVowels();
    cardPointsPotential.textContent = `+${game.getPotentialPoints()} pts`;
    renderLetterTiles();
  });

  hintRandomBtn.addEventListener("click", () => {
    game.revealRandomLetter();
    cardPointsPotential.textContent = `+${game.getPotentialPoints()} pts`;
    renderLetterTiles();
  });

  // ========================================================
  // QUIZ MODE RENDER & LOGIC
  // ========================================================
  function renderQuizCard() {
    const card = game.currentCard;
    if (!card) return;

    quizBadgeType.textContent = card.type === "who" ? "👤 WHO AM I?" : "✨ WHAT AM I?";
    quizBadgeLevel.textContent = `CEFR ${card.level}`;

    // Show top 2 clues
    quizCluesContainer.innerHTML = `
      <div class="clue-card revealed">
        <div class="clue-number-badge">1</div>
        <div class="clue-content"><div class="clue-text">${card.clues[0]}</div></div>
      </div>
      <div class="clue-card revealed">
        <div class="clue-number-badge">2</div>
        <div class="clue-content"><div class="clue-text">${card.clues[1]}</div></div>
      </div>
    `;

    // Options
    quizOptionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    // Make sure we have 4 options
    let options = card.options || [card.answer, "Mystery Item 1", "Mystery Item 2", "Mystery Item 3"];
    options = game.shuffleArray([...options]);

    options.forEach((opt, idx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "quiz-option-card";
      optBtn.innerHTML = `
        <div class="option-letter">${letters[idx]}</div>
        <span>${opt}</span>
      `;

      optBtn.addEventListener("click", () => {
        const allBtns = quizOptionsContainer.querySelectorAll(".quiz-option-card");
        allBtns.forEach(b => b.classList.add("disabled"));

        const result = game.checkGuess(opt);
        renderHUD();

        if (result.success) {
          optBtn.classList.add("correct");
          setTimeout(() => {
            showVictoryModal(result.card, result.pointsEarned);
          }, 600);
        } else {
          optBtn.classList.add("wrong");
          // Highlight the right one
          allBtns.forEach(b => {
            if (game.normalizeString(b.querySelector("span").textContent) === game.normalizeString(card.answer)) {
              b.classList.add("correct");
            }
          });
        }
      });

      quizOptionsContainer.appendChild(optBtn);
    });
  }

  quizNextBtn.addEventListener("click", () => {
    audio.playPop();
    game.nextCard();
    renderQuizCard();
  });

  // ========================================================
  // SPEED BLITZ MODE
  // ========================================================
  function renderSpeedCard() {
    const card = game.currentCard;
    if (!card) return;

    speedCardBadge.textContent = `${card.type === "who" ? "👤 WHO" : "✨ WHAT"} • CEFR ${card.level}`;
    speedCluesContainer.innerHTML = `
      <div class="clue-card revealed">
        <div class="clue-number-badge">⚡</div>
        <div class="clue-content">
          <div class="clue-text"><strong>${card.clues[0]}</strong> ${card.clues[1]}</div>
        </div>
      </div>
    `;

    speedGuessInput.value = "";
    speedGuessInput.focus();
  }

  speedGuessForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = speedGuessInput.value.trim();
    if (!guess) return;

    const result = game.checkGuess(guess);
    renderHUD();

    if (result.success) {
      game.nextCard();
      renderSpeedCard();
    } else {
      speedGuessInput.style.borderColor = "#ff4d6d";
      setTimeout(() => { speedGuessInput.style.borderColor = ""; }, 400);
    }
  });

  speedPassBtn.addEventListener("click", () => {
    audio.playPop();
    game.nextCard();
    renderSpeedCard();
  });

  // Blitz ticker callback
  if (game.currentMode === "speed") {
    game.startBlitz(
      (timeLeft) => {
        speedTimerSec.textContent = `${timeLeft}s`;
        speedBarFill.style.width = `${(timeLeft / 60) * 100}%`;
      },
      () => {
        audio.playLevelUp();
        alert(`⏰ Time's Up! You scored ${game.stats.score} points!`);
      }
    );
  }

  // ========================================================
  // PARTY / PRESENTER MODE
  // ========================================================
  function renderPartyCard() {
    const card = game.currentCard;
    if (!card) return;

    partyBadgeType.textContent = card.type === "who" ? "👤 WHO AM I?" : "✨ WHAT AM I?";
    partyBadgeLevel.textContent = `CEFR ${card.level} • Category: ${card.category.toUpperCase()}`;
    
    // Combine clues for rich party guessing
    partyClueText.innerHTML = card.clues.map((c, i) => `<p style="margin-bottom: 8px;"><strong>${i+1}.</strong> ${c}</p>`).join("");
    
    partyAnswerBox.style.display = "none";
    partyRevealBtn.textContent = "👁️ Reveal Secret Answer";
  }

  partyRevealBtn.addEventListener("click", () => {
    audio.playLevelUp();
    const card = game.currentCard;
    partyAnswerBox.innerHTML = `<span>${card.emoji || "✨"}</span> ${card.answer}`;
    partyAnswerBox.style.display = "inline-block";
    game.triggerConfetti();
  });

  partyPrevBtn.addEventListener("click", () => {
    audio.playPop();
    game.prevCard();
    renderPartyCard();
  });

  partyNextBtn.addEventListener("click", () => {
    audio.playPop();
    game.nextCard();
    renderPartyCard();
  });

  // ========================================================
  // VICTORY MODAL
  // ========================================================
  function showVictoryModal(card, points) {
    modalVictoryEmoji.textContent = card.emoji || "🎉";
    modalVictoryAnswer.textContent = card.answer;
    modalVictoryPoints.textContent = `+${points} Points`;
    modalVictoryFact.textContent = card.funFact || "Great job guessing this card!";
    victoryModal.classList.add("open");
  }

  modalVictoryNextBtn.addEventListener("click", () => {
    audio.playPop();
    victoryModal.classList.remove("open");
    game.nextCard();
    renderCurrentView();
  });

  modalVictoryCloseBtn.addEventListener("click", () => {
    audio.playPop();
    victoryModal.classList.remove("open");
  });

  // ========================================================
  // STATS MODAL
  // ========================================================
  statsModalBtn.addEventListener("click", () => {
    audio.playPop();
    renderStatsModal();
    statsModal.classList.add("open");
  });

  statsCloseBtn.addEventListener("click", () => {
    audio.playPop();
    statsModal.classList.remove("open");
  });

  function renderStatsModal() {
    document.getElementById("stat-total-score").textContent = game.stats.score;
    document.getElementById("stat-max-streak").textContent = game.stats.maxStreak;
    document.getElementById("stat-cards-solved").textContent = game.stats.solvedCount;
    
    // Level progress breakdown
    const grid = document.getElementById("stat-levels-breakdown");
    grid.innerHTML = "";
    ["A1", "A2", "B1", "B2", "C1", "C2"].forEach(lvl => {
      const count = game.stats.levelProgress[lvl] || 0;
      const box = document.createElement("div");
      box.style.cssText = "background: var(--pink-50); border: 1.5px solid var(--pink-200); border-radius: 12px; padding: 10px; text-align: center;";
      box.innerHTML = `
        <div style="font-weight: 800; font-family: 'Fredoka'; color: var(--pink-500);">${lvl}</div>
        <div style="font-size: 1.2rem; font-weight: 700;">${count} Solved</div>
      `;
      grid.appendChild(box);
    });
  }

  // ========================================================
  // CERTIFICATE OF MASTERY MODAL
  // ========================================================
  certModalBtn.addEventListener("click", () => {
    audio.playLevelUp();
    certModal.classList.add("open");
    game.triggerConfetti();
  });

  certCloseBtn.addEventListener("click", () => {
    audio.playPop();
    certModal.classList.remove("open");
  });

  printCertBtn.addEventListener("click", () => {
    window.print();
  });

  // ========================================================
  // CUSTOM CARD CREATOR
  // ========================================================
  addCardModalBtn.addEventListener("click", () => {
    audio.playPop();
    creatorModal.classList.add("open");
  });

  creatorCloseBtn.addEventListener("click", () => {
    audio.playPop();
    creatorModal.classList.remove("open");
  });

  customCardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const answer = document.getElementById("new-card-answer").value.trim();
    const type = document.getElementById("new-card-type").value;
    const category = document.getElementById("new-card-category").value;
    const level = document.getElementById("new-card-level").value;
    const emoji = document.getElementById("new-card-emoji").value.trim() || "✨";
    const clue1 = document.getElementById("new-card-clue1").value.trim();
    const clue2 = document.getElementById("new-card-clue2").value.trim();
    const clue3 = document.getElementById("new-card-clue3").value.trim();
    const clue4 = document.getElementById("new-card-clue4").value.trim();
    const funFact = document.getElementById("new-card-fact").value.trim();

    if (!answer || !clue1 || !clue2) {
      alert("Please fill in the secret answer and at least 2 clues!");
      return;
    }

    const newCard = {
      id: `custom-${Date.now()}`,
      answer: answer,
      acceptedAnswers: [answer.toLowerCase()],
      type: type,
      category: category,
      level: level,
      emoji: emoji,
      clues: [clue1, clue2, clue3 || clue2, clue4 || clue1],
      options: [answer, "Option B", "Option C", "Option D"],
      funFact: funFact || "Created by Paniz Marzban's Custom Game Builder!"
    };

    // Save to LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem("paniz_custom_cards") || "[]");
      existing.push(newCard);
      localStorage.setItem("paniz_custom_cards", JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }

    audio.playLevelUp();
    game.triggerConfetti();
    showToast("🎉 Custom Card Created Successfully!");
    creatorModal.classList.remove("open");
    customCardForm.reset();

    // Reload cards and show the new card
    game.initCards();
    renderCurrentView();
  });
});
