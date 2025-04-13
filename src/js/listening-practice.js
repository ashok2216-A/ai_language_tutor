export function initListeningPractice() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="module-header">
                <h2>Listening Practice</h2>
                <p>Improve your listening comprehension with authentic audio samples</p>
            </div>
            
            <div class="practice-overview">
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-headphones"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Current Level</h3>
                        <p>Band 7.0</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Target Level</h3>
                        <p>Band 8.0</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Sessions Completed</h3>
                        <p>8 sessions</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Progress</h3>
                        <p>+0.5 bands in 30 days</p>
                    </div>
                </div>
            </div>
            
            <div class="listening-sections">
                <h3>Choose a Listening Section</h3>
                <div class="section-cards">
                    <div class="section-card" id="section1">
                        <div class="section-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="section-details">
                            <h4>Section 1: Social Needs</h4>
                            <p>Practice with conversations about everyday social contexts</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level easy">Easy</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section-card" id="section2">
                        <div class="section-icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <div class="section-details">
                            <h4>Section 2: Work Situations</h4>
                            <p>Listen to monologues set in work-related situations</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level medium">Medium</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section-card" id="section3">
                        <div class="section-icon">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="section-details">
                            <h4>Section 3: Educational Context</h4>
                            <p>Practice with conversations between up to four people in an educational context</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level medium">Medium</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section-card" id="section4">
                        <div class="section-icon">
                            <i class="fas fa-university"></i>
                        </div>
                        <div class="section-details">
                            <h4>Section 4: Academic Lecture</h4>
                            <p>Listen to academic monologues on specialized topics</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level hard">Hard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="recent-activities">
                <h3>Recent Activities</h3>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon listening">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="activity-details">
                            <h4>Section 3: University Research Discussion</h4>
                            <p>Score: 8/10 correct answers</p>
                            <span class="activity-time">April 11, 2025</span>
                        </div>
                        <div class="activity-action">
                            <button class="btn-small">Review</button>
                        </div>
                    </div>
                    
                    <div class="activity-item">
                        <div class="activity-icon listening">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="activity-details">
                            <h4>Section 2: Museum Tour Guide</h4>
                            <p>Score: 7/10 correct answers</p>
                            <span class="activity-time">April 9, 2025</span>
                        </div>
                        <div class="activity-action">
                            <button class="btn-small">Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('section1').addEventListener('click', () => startListeningPractice('section1'));
    document.getElementById('section2').addEventListener('click', () => startListeningPractice('section2'));
    document.getElementById('section3').addEventListener('click', () => startListeningPractice('section3'));
    document.getElementById('section4').addEventListener('click', () => startListeningPractice('section4'));
    
    // Update active navigation button
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-module="listening-practice"]').classList.add('active');
}

function startListeningPractice(sectionType) {
    const contentArea = document.getElementById('content-area');
    
    // Different content based on section type
    let sectionTitle, sectionDescription, audioSource;
    
    switch(sectionType) {
        case 'section1':
            sectionTitle = 'Section 1: Social Needs';
            sectionDescription = 'A conversation between two people set in an everyday social context.';
            audioSource = 'src/audio/section1-sample.mp3';
            break;
        case 'section2':
            sectionTitle = 'Section 2: Work Situations';
            sectionDescription = 'A monologue set in an everyday social context.';
            audioSource = 'src/audio/section2-sample.mp3';
            break;
        case 'section3':
            sectionTitle = 'Section 3: Educational Context';
            sectionDescription = 'A conversation between up to four people set in an educational context.';
            audioSource = 'src/audio/section3-sample.mp3';
            break;
        case 'section4':
            sectionTitle = 'Section 4: Academic Lecture';
            sectionDescription = 'A monologue on an academic subject.';
            audioSource = 'src/audio/section4-sample.mp3';
            break;
    }
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="listening-session">
                <div class="session-header">
                    <h2>${sectionTitle}</h2>
                    <p>${sectionDescription}</p>
                </div>
                
                <div class="audio-player-container">
                    <div class="audio-player-controls">
                        <button class="player-btn" id="play-btn">
                            <i class="fas fa-play"></i>
                        </button>
                        <div class="player-progress">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        <div class="player-time">
                            <span class="current-time">00:00</span>
                            <span class="total-time">03:45</span>
                        </div>
                        <button class="player-btn" id="volume-btn">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                    <div class="player-instructions">
                        <p>Listen to the audio and answer the questions below. You can play the audio up to 2 times.</p>
                    </div>
                </div>
                
                <div class="questions-container">
                    <h3>Questions</h3>
                    
                    <div class="question-item">
                        <div class="question-number">1</div>
                        <div class="question-content">
                            <p>What is the woman's name?</p>
                            <div class="answer-options">
                                <label class="answer-option">
                                    <input type="radio" name="q1" value="a">
                                    <span class="option-text">Sarah Johnson</span>
                                </label>
                                <label class="answer-option">
                                    <input type="radio" name="q1" value="b">
                                    <span class="option-text">Sandra Jones</span>
                                </label>
                                <label class="answer-option">
                                    <input type="radio" name="q1" value="c">
                                    <span class="option-text">Samantha Jenkins</span>
                                </label>
                                <label class="answer-option">
                                    <input type="radio" name="q1" value="d">
                                    <span class="option-text">Susan Jackson</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="question-item">
                        <div class="question-number">2</div>
                        <div class="question-content">
                            <p>What is the purpose of the conversation?</p>
                            <div class="answer-options">
                                <label class="answer-option">
                                    <input type="radio" name="q2" value="a">
                                    <span class="option-text">To book a hotel room</span>
                                </label>
                                <label class="answer-option">
                                    <input type="radio" name="q2" value="b">
                                    <span class="option-text">To inquire about a job</span>
                                </label>
                                <label class="answer-option">
                                    <input type="radio" name="q2" value="c">
                                    <span class="option-text">To register for a course</span>
                                </label>
                                <label class="answer-option">
                                    <input type="radio" name="q2" value="d">
                                    <span class="option-text">To make a complaint</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="question-item">
                        <div class="question-number">3</div>
                        <div class="question-content">
                            <p>Complete the form below with NO MORE THAN THREE WORDS for each answer.</p>
                            <div class="form-completion">
                                <div class="form-field">
                                    <span class="field-label">Address:</span>
                                    <input type="text" class="field-input" placeholder="Type your answer">
                                </div>
                                <div class="form-field">
                                    <span class="field-label">Phone number:</span>
                                    <input type="text" class="field-input" placeholder="Type your answer">
                                </div>
                                <div class="form-field">
                                    <span class="field-label">Preferred start date:</span>
                                    <input type="text" class="field-input" placeholder="Type your answer">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="session-actions">
                    <button class="btn-outline" id="back-to-sections">Back</button>
                    <button class="btn-primary" id="submit-answers">Submit Answers</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('back-to-sections').addEventListener('click', initListeningPractice);
    document.getElementById('submit-answers').addEventListener('click', submitListeningAnswers);
    document.getElementById('play-btn').addEventListener('click', toggleAudioPlayback);
    
    // Simulate audio player functionality
    initAudioPlayer();
}

function initAudioPlayer() {
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.querySelector('.player-progress .progress-bar');
    const currentTime = document.querySelector('.current-time');
    
    // Simulate audio playback
    let isPlaying = false;
    let playbackInterval;
    let currentSeconds = 0;
    const totalSeconds = 225; // 3:45 in seconds
    
    window.toggleAudioPlayback = function() {
        if (isPlaying) {
            // Pause audio
            clearInterval(playbackInterval);
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
        } else {
            // Play audio
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
            
            playbackInterval = setInterval(() => {
                currentSeconds++;
                const progressPercent = (currentSeconds / totalSeconds) * 100;
                progressBar.style.width = `${progressPercent}%`;
                
                const minutes = Math.floor(currentSeconds / 60);
                const seconds = currentSeconds % 60;
                currentTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                if (currentSeconds >= totalSeconds) {
                    clearInterval(playbackInterval);
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                    isPlaying = false;
                }
            }, 1000);
        }
    };
}

function submitListeningAnswers() {
    const contentArea = document.getElementById('content-area');
    
    // Simulate loading state
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="feedback-loading">
                <div class="loading-spinner"></div>
                <h3>Checking your answers...</h3>
                <p>We're evaluating your listening comprehension.</p>
            </div>
        </div>
    `;
    
    // Simulate API delay
    setTimeout(showListeningResults, 1500);
}

function showListeningResults() {
    const contentArea = document.getElementById('content-area');
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="results-session">
                <div class="results-header">
                    <h2>Listening Results</h2>
                    <p>Your performance on Section 1: Social Needs</p>
                </div>
                
                <div class="score-overview">
                    <div class="score-circle">
                        <div class="score-number">8</div>
                        <div class="score-label">out of 10</div>
                    </div>
                    
                    <div class="band-score">
                        <h3>Estimated Band Score</h3>
                        <div class="band-value">7.5</div>
                    </div>
                </div>
                
                <div class="answers-review">
                    <h3>Review Your Answers</h3>
                    
                    <div class="answer-item correct">
                        <div class="answer-number">1</div>
                        <div class="answer-content">
                            <p class="question-text">What is the woman's name?</p>
                            <div class="your-answer">
                                <span class="answer-label">Your answer:</span>
                                <span class="answer-text">Sandra Jones</span>
                                <span class="answer-status"><i class="fas fa-check"></i> Correct</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="answer-item correct">
                        <div class="answer-number">2</div>
                        <div class="answer-content">
                            <p class="question-text">What is the purpose of the conversation?</p>
                            <div class="your-answer">
                                <span class="answer-label">Your answer:</span>
                                <span class="answer-text">To register for a course</span>
                                <span class="answer-status"><i class="fas fa-check"></i> Correct</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="answer-item incorrect">
                        <div class="answer-number">3</div>
                        <div class="answer-content">
                            <p class="question-text">Complete the form: Address</p>
                            <div class="your-answer">
                                <span class="answer-label">Your answer:</span>
                                <span class="answer-text">24 Oak Street</span>
                                <span class="answer-status"><i class="fas fa-times"></i> Incorrect</span>
                            </div>
                            <div class="correct-answer">
                                <span class="answer-label">Correct answer:</span>
                                <span class="answer-text">42 Oak Avenue</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="listening-tips">
                    <h3>Tips for Improvement</h3>
                    <ul>
                        <li>Pay closer attention to specific details like addresses and numbers</li>
                        <li>Practice note-taking while listening to capture key information</li>
                        <li>Listen for signpost words that indicate important information is coming</li>
                    </ul>
                </div>
                
                <div class="results-actions">
                    <button class="btn-primary" id="try-another">Try Another Section</button>
                    <button class="btn-outline" id="back-to-dashboard">Back to Dashboard</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('try-another').addEventListener('click', initListeningPractice);
    document.getElementById('back-to-dashboard').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
