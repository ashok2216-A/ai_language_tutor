export function initAdaptiveQuizzes() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="module-header">
                <h2>Adaptive Quizzes</h2>
                <p>Test your knowledge with AI-powered quizzes that adapt to your skill level</p>
            </div>
            
            <div class="quiz-overview">
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Current Level</h3>
                        <p>Intermediate</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Progress</h3>
                        <p>72% to Advanced</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Quizzes Completed</h3>
                        <p>23 quizzes</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Accuracy</h3>
                        <p>78% correct</p>
                    </div>
                </div>
            </div>
            
            <div class="quiz-categories">
                <h3>Choose a Quiz Category</h3>
                <div class="category-cards">
                    <div class="category-card" id="grammar-quiz">
                        <div class="category-icon">
                            <i class="fas fa-spell-check"></i>
                        </div>
                        <div class="category-details">
                            <h4>Grammar</h4>
                            <p>Test your understanding of English grammar rules and structures</p>
                            <div class="progress-indicator">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 85%"></div>
                                </div>
                                <span class="progress-text">85% Mastery</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="category-card" id="vocabulary-quiz">
                        <div class="category-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <div class="category-details">
                            <h4>Vocabulary</h4>
                            <p>Expand your vocabulary with words commonly used in academic contexts</p>
                            <div class="progress-indicator">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 72%"></div>
                                </div>
                                <span class="progress-text">72% Mastery</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="category-card" id="listening-quiz">
                        <div class="category-icon">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="category-details">
                            <h4>Listening Comprehension</h4>
                            <p>Practice understanding spoken English in various contexts</p>
                            <div class="progress-indicator">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 68%"></div>
                                </div>
                                <span class="progress-text">68% Mastery</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="category-card" id="reading-quiz">
                        <div class="category-icon">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <div class="category-details">
                            <h4>Reading Comprehension</h4>
                            <p>Test your ability to understand and analyze written texts</p>
                            <div class="progress-indicator">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 79%"></div>
                                </div>
                                <span class="progress-text">79% Mastery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="recent-quizzes">
                <h3>Recent Quizzes</h3>
                <div class="quiz-history">
                    <div class="history-item">
                        <div class="history-icon">
                            <i class="fas fa-spell-check"></i>
                        </div>
                        <div class="history-details">
                            <h4>Advanced Conditionals</h4>
                            <p>Completed on April 12, 2025</p>
                            <div class="score-indicator">
                                <span class="score-label">Score:</span>
                                <span class="score-value">85%</span>
                            </div>
                        </div>
                        <div class="history-action">
                            <button class="btn-small">Review</button>
                        </div>
                    </div>
                    
                    <div class="history-item">
                        <div class="history-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <div class="history-details">
                            <h4>Academic Vocabulary - Science</h4>
                            <p>Completed on April 10, 2025</p>
                            <div class="score-indicator">
                                <span class="score-label">Score:</span>
                                <span class="score-value">72%</span>
                            </div>
                        </div>
                        <div class="history-action">
                            <button class="btn-small">Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('grammar-quiz').addEventListener('click', () => startQuiz('grammar'));
    document.getElementById('vocabulary-quiz').addEventListener('click', () => startQuiz('vocabulary'));
    document.getElementById('listening-quiz').addEventListener('click', () => startQuiz('listening'));
    document.getElementById('reading-quiz').addEventListener('click', () => startQuiz('reading'));
    
    // Update active navigation button
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-module="adaptive-quizzes"]').classList.add('active');
}

function startQuiz(quizType) {
    const contentArea = document.getElementById('content-area');
    
    // Different content based on quiz type
    let quizTitle, quizDescription;
    
    switch(quizType) {
        case 'grammar':
            quizTitle = 'Grammar Quiz';
            quizDescription = 'Test your understanding of English grammar rules and structures';
            break;
        case 'vocabulary':
            quizTitle = 'Vocabulary Quiz';
            quizDescription = 'Expand your vocabulary with words commonly used in academic contexts';
            break;
        case 'listening':
            quizTitle = 'Listening Comprehension Quiz';
            quizDescription = 'Practice understanding spoken English in various contexts';
            break;
        case 'reading':
            quizTitle = 'Reading Comprehension Quiz';
            quizDescription = 'Test your ability to understand and analyze written texts';
            break;
    }
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="quiz-session">
                <div class="session-header">
                    <h2>${quizTitle}</h2>
                    <p>${quizDescription}</p>
                    <div class="quiz-meta">
                        <span class="quiz-difficulty">Intermediate</span>
                        <span class="quiz-questions">10 questions</span>
                        <span class="quiz-time">15 minutes</span>
                    </div>
                </div>
                
                <div class="quiz-progress">
                    <div class="progress-text">Question <span class="current-question">1</span> of <span class="total-questions">10</span></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 10%"></div>
                    </div>
                </div>
                
                <div class="question-container">
                    ${generateQuestionContent(quizType, 1)}
                </div>
                
                <div class="quiz-navigation">
                    <button class="btn-outline disabled" id="prev-question">Previous</button>
                    <button class="btn-primary" id="next-question">Next</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('next-question').addEventListener('click', () => navigateQuestion('next', quizType));
    document.getElementById('prev-question').addEventListener('click', () => navigateQuestion('prev', quizType));
}

function generateQuestionContent(quizType, questionNumber) {
    // Sample questions for each quiz type
    let questionContent = '';
    
    if (quizType === 'grammar') {
        switch(questionNumber) {
            case 1:
                questionContent = `
                    <div class="question-content">
                        <h3>Choose the correct form to complete the sentence:</h3>
                        <p class="question-text">If I _____ more time, I would have completed the project.</p>
                        <div class="answer-options">
                            <label class="answer-option">
                                <input type="radio" name="q1" value="a">
                                <span class="option-text">had</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="b">
                                <span class="option-text">have had</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="c">
                                <span class="option-text">would have</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="d">
                                <span class="option-text">had had</span>
                            </label>
                        </div>
                    </div>
                `;
                break;
            case 2:
                questionContent = `
                    <div class="question-content">
                        <h3>Identify the error in the sentence:</h3>
                        <p class="question-text">Neither the students nor the teacher were able to solve the problem.</p>
                        <div class="answer-options">
                            <label class="answer-option">
                                <input type="radio" name="q2" value="a">
                                <span class="option-text">Neither</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q2" value="b">
                                <span class="option-text">the students</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q2" value="c">
                                <span class="option-text">were able</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q2" value="d">
                                <span class="option-text">No error</span>
                            </label>
                        </div>
                    </div>
                `;
                break;
            default:
                questionContent = `
                    <div class="question-content">
                        <h3>Complete the sentence with the correct form:</h3>
                        <p class="question-text">By the time we arrive, the movie _____ already _____.</p>
                        <div class="answer-options">
                            <label class="answer-option">
                                <input type="radio" name="q3" value="a">
                                <span class="option-text">will / start</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q3" value="b">
                                <span class="option-text">will / have started</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q3" value="c">
                                <span class="option-text">will have / started</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q3" value="d">
                                <span class="option-text">has / started</span>
                            </label>
                        </div>
                    </div>
                `;
        }
    } else if (quizType === 'vocabulary') {
        switch(questionNumber) {
            case 1:
                questionContent = `
                    <div class="question-content">
                        <h3>Choose the word that best completes the sentence:</h3>
                        <p class="question-text">The research findings were _____, challenging many long-held assumptions in the field.</p>
                        <div class="answer-options">
                            <label class="answer-option">
                                <input type="radio" name="q1" value="a">
                                <span class="option-text">conventional</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="b">
                                <span class="option-text">groundbreaking</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="c">
                                <span class="option-text">insignificant</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="d">
                                <span class="option-text">predictable</span>
                            </label>
                        </div>
                    </div>
                `;
                break;
            default:
                questionContent = `
                    <div class="question-content">
                        <h3>Choose the synonym for the underlined word:</h3>
                        <p class="question-text">The professor <u>elucidated</u> the complex theory with helpful examples.</p>
                        <div class="answer-options">
                            <label class="answer-option">
                                <input type="radio" name="q2" value="a">
                                <span class="option-text">complicated</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q2" value="b">
                                <span class="option-text">explained</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q2" value="c">
                                <span class="option-text">questioned</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q2" value="d">
                                <span class="option-text">dismissed</span>
                            </label>
                        </div>
                    </div>
                `;
        }
    } else if (quizType === 'listening') {
        questionContent = `
            <div class="question-content">
                <h3>Listen to the audio and answer the question:</h3>
                <div class="audio-player">
                    <button class="player-btn" id="play-audio">
                        <i class="fas fa-play"></i>
                    </button>
                    <div class="player-progress">
                        <div class="progress-bar" style="width: 0%"></div>
                    </div>
                    <span class="player-time">0:00 / 1:30</span>
                </div>
                <p class="question-text">What is the main topic of the lecture?</p>
                <div class="answer-options">
                    <label class="answer-option">
                        <input type="radio" name="q1" value="a">
                        <span class="option-text">Climate change effects on agriculture</span>
                    </label>
                    <label class="answer-option">
                        <input type="radio" name="q1" value="b">
                        <span class="option-text">Renewable energy sources</span>
                    </label>
                    <label class="answer-option">
                        <input type="radio" name="q1" value="c">
                        <span class="option-text">Urban planning challenges</span>
                    </label>
                    <label class="answer-option">
                        <input type="radio" name="q1" value="d">
                        <span class="option-text">Water conservation methods</span>
                    </label>
                </div>
            </div>
        `;
        
        // Add audio player functionality
        setTimeout(() => {
            const playButton = document.getElementById('play-audio');
            if (playButton) {
                playButton.addEventListener('click', toggleAudio);
            }
        }, 100);
    } else if (quizType === 'reading') {
        questionContent = `
            <div class="question-content">
                <h3>Read the passage and answer the question:</h3>
                <div class="reading-passage">
                    <p>The concept of sustainable development has gained significant traction in recent decades as societies grapple with the challenges of economic growth, environmental protection, and social equity. At its core, sustainable development seeks to meet the needs of the present without compromising the ability of future generations to meet their own needs. This approach recognizes the interconnectedness of economic, environmental, and social factors in creating long-term prosperity.</p>
                </div>
                <p class="question-text">According to the passage, what is the main goal of sustainable development?</p>
                <div class="answer-options">
                    <label class="answer-option">
                        <input type="radio" name="q1" value="a">
                        <span class="option-text">To prioritize economic growth over environmental concerns</span>
                    </label>
                    <label class="answer-option">
                        <input type="radio" name="q1" value="b">
                        <span class="option-text">To meet current needs while preserving resources for future generations</span>
                    </label>
                    <label class="answer-option">
                        <input type="radio" name="q1" value="c">
                        <span class="option-text">To focus exclusively on environmental protection</span>
                    </label>
                    <label class="answer-option">
                        <input type="radio" name="q1" value="d">
                        <span class="option-text">To reduce population growth in developing countries</span>
                    </label>
                </div>
            </div>
        `;
    }
    
    return questionContent;
}

function navigateQuestion(direction, quizType) {
    const currentQuestionElement = document.querySelector('.current-question');
    const totalQuestions = parseInt(document.querySelector('.total-questions').textContent);
    let currentQuestion = parseInt(currentQuestionElement.textContent);
    
    if (direction === 'next') {
        if (currentQuestion < totalQuestions) {
            currentQuestion++;
        } else {
            // If we're at the last question, show results
            showQuizResults();
            return;
        }
    } else {
        if (currentQuestion > 1) {
            currentQuestion--;
        }
    }
    
    // Update question number and progress bar
    currentQuestionElement.textContent = currentQuestion;
    const progressFill = document.querySelector('.quiz-progress .progress-fill');
    progressFill.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
    
    // Update navigation buttons
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    
    if (currentQuestion === 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    
    if (currentQuestion === totalQuestions) {
        nextButton.textContent = 'Submit';
    } else {
        nextButton.textContent = 'Next';
    }
    
    // Update question content
    const questionContainer = document.querySelector('.question-container');
    questionContainer.innerHTML = generateQuestionContent(quizType, currentQuestion);
    
    // Reinitialize audio player if it's a listening question
    if (quizType === 'listening') {
        const playButton = document.getElementById('play-audio');
        if (playButton) {
            playButton.addEventListener('click', toggleAudio);
        }
    }
}

function toggleAudio() {
    const playButton = document.getElementById('play-audio');
    const icon = playButton.querySelector('i');
    const progressBar = document.querySelector('.player-progress .progress-bar');
    const timeDisplay = document.querySelector('.player-time');
    
    if (icon.classList.contains('fa-play')) {
        // Start playing
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        
        // Simulate audio progress
        let progress = 0;
        const totalDuration = 90; // 1:30 in seconds
        
        window.audioInterval = setInterval(() => {
            progress++;
            const progressPercent = (progress / totalDuration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            
            const minutes = Math.floor(progress / 60);
            const seconds = progress % 60;
            timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')} / 1:30`;
            
            if (progress >= totalDuration) {
                clearInterval(window.audioInterval);
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        }, 1000);
    } else {
        // Pause playing
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        clearInterval(window.audioInterval);
    }
}

function showQuizResults() {
    const contentArea = document.getElementById('content-area');
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="results-session">
                <div class="results-header">
                    <h2>Quiz Results</h2>
                    <p>Your performance on the Grammar Quiz</p>
                </div>
                
                <div class="score-overview">
                    <div class="score-circle">
                        <div class="score-number">8</div>
                        <div class="score-label">out of 10</div>
                    </div>
                    
                    <div class="level-indicator">
                        <h3>Your Level</h3>
                        <div class="level-badge">Upper Intermediate</div>
                        <p>You're making great progress!</p>
                    </div>
                </div>
                
                <div class="performance-analysis">
                    <h3>Performance Analysis</h3>
                    
                    <div class="skill-breakdown">
                        <div class="skill-item">
                            <span class="skill-name">Conditionals</span>
                            <div class="skill-bar">
                                <div class="skill-fill" style="width: 90%"></div>
                            </div>
                            <span class="skill-value">90%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">Subject-Verb Agreement</span>
                            <div class="skill-bar">
                                <div class="skill-fill" style="width: 75%"></div>
                            </div>
                            <span class="skill-value">75%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">Tenses</span>
                            <div class="skill-bar">
                                <div class="skill-fill" style="width: 85%"></div>
                            </div>
                            <span class="skill-value">85%</span>
                        </div>
                        <div class="skill-item">
                            <span class="skill-name">Prepositions</span>
                            <div class="skill-bar">
                                <div class="skill-fill" style="width: 70%"></div>
                            </div>
                            <span class="skill-value">70%</span>
                        </div>
                    </div>
                </div>
                
                <div class="question-review">
                    <h3>Question Review</h3>
                    
                    <div class="review-toggle">
                        <button class="toggle-btn active" data-view="all">All Questions</button>
                        <button class="toggle-btn" data-view="incorrect">Incorrect Only</button>
                    </div>
                    
                    <div class="review-items">
                        <div class="review-item correct">
                            <div class="review-number">1</div>
                            <div class="review-content">
                                <p class="review-question">If I _____ more time, I would have completed the project.</p>
                                <div class="review-answer">
                                    <span class="answer-label">Your answer:</span>
                                    <span class="answer-text">had had</span>
                                    <span class="answer-status"><i class="fas fa-check"></i> Correct</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="review-item incorrect">
                            <div class="review-number">2</div>
                            <div class="review-content">
                                <p class="review-question">Identify the error in the sentence: Neither the students nor the teacher were able to solve the problem.</p>
                                <div class="review-answer">
                                    <span class="answer-label">Your answer:</span>
                                    <span class="answer-text">were able</span>
                                    <span class="answer-status"><i class="fas fa-times"></i> Incorrect</span>
                                </div>
                                <div class="correct-answer">
                                    <span class="answer-label">Correct answer:</span>
                                    <span class="answer-text">No error</span>
                                    <p class="explanation">The verb "were" is correct because "the teacher" is closer to the verb than "Neither the students".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="next-steps">
                    <h3>Recommended Next Steps</h3>
                    <div class="recommendation-cards">
                        <div class="recommendation-card">
                            <div class="recommendation-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div class="recommendation-details">
                                <h4>Advanced Subject-Verb Agreement</h4>
                                <p>Practice with complex subjects and special cases</p>
                                <button class="btn-primary">Start Lesson</button>
                            </div>
                        </div>
                        
                        <div class="recommendation-card">
                            <div class="recommendation-icon">
                                <i class="fas fa-tasks"></i>
                            </div>
                            <div class="recommendation-details">
                                <h4>Prepositions Master Quiz</h4>
                                <p>Strengthen your understanding of preposition usage</p>
                                <button class="btn-primary">Take Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="results-actions">
                    <button class="btn-primary" id="try-another-quiz">Try Another Quiz</button>
                    <button class="btn-outline" id="back-to-dashboard">Back to Dashboard</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('try-another-quiz').addEventListener('click', initAdaptiveQuizzes);
    document.getElementById('back-to-dashboard').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    // Toggle between all questions and incorrect only
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.view === 'incorrect') {
                document.querySelectorAll('.review-item.correct').forEach(item => {
                    item.style.display = 'none';
                });
            } else {
                document.querySelectorAll('.review-item.correct').forEach(item => {
                    item.style.display = 'flex';
                });
            }
        });
    });
}
