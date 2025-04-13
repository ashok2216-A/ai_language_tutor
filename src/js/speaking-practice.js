export function initSpeakingPractice() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="module-header">
                <h2>Speaking Practice</h2>
                <p>Improve your speaking skills with AI-powered conversation practice</p>
            </div>
            
            <div class="practice-overview">
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-microphone"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Current Level</h3>
                        <p>Band 6.5</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Target Level</h3>
                        <p>Band 7.5</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Sessions Completed</h3>
                        <p>12 sessions</p>
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
            
            <div class="practice-options">
                <h3>Choose a Practice Type</h3>
                <div class="practice-cards">
                    <div class="practice-card" id="part1-practice">
                        <div class="practice-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="practice-details">
                            <h4>Part 1: Introduction & Interview</h4>
                            <p>Practice answering personal questions about familiar topics like work, study, hometown, and interests.</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level easy">Easy</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-card" id="part2-practice">
                        <div class="practice-icon">
                            <i class="fas fa-comment"></i>
                        </div>
                        <div class="practice-details">
                            <h4>Part 2: Long Turn</h4>
                            <p>Practice speaking for 1-2 minutes on a given topic with preparation time.</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level medium">Medium</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-card" id="part3-practice">
                        <div class="practice-icon">
                            <i class="fas fa-comments"></i>
                        </div>
                        <div class="practice-details">
                            <h4>Part 3: Discussion</h4>
                            <p>Practice discussing abstract ideas and giving opinions on complex topics.</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level hard">Hard</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="practice-card" id="mock-test">
                        <div class="practice-icon">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <div class="practice-details">
                            <h4>Full Mock Test</h4>
                            <p>Complete a full IELTS speaking test with all three parts and receive detailed feedback.</p>
                            <div class="difficulty">
                                <span class="difficulty-label">Difficulty:</span>
                                <span class="difficulty-level hard">Hard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="recent-feedback">
                <h3>Recent Feedback</h3>
                <div class="feedback-container">
                    <div class="feedback-item">
                        <div class="feedback-header">
                            <h4>Part 2: Describe a place you like to visit</h4>
                            <span class="feedback-date">April 10, 2025</span>
                        </div>
                        <div class="feedback-scores">
                            <div class="feedback-score">
                                <span class="score-label">Fluency</span>
                                <span class="score-value">7.0</span>
                            </div>
                            <div class="feedback-score">
                                <span class="score-label">Vocabulary</span>
                                <span class="score-value">6.5</span>
                            </div>
                            <div class="feedback-score">
                                <span class="score-label">Grammar</span>
                                <span class="score-value">6.5</span>
                            </div>
                            <div class="feedback-score">
                                <span class="score-label">Pronunciation</span>
                                <span class="score-value">6.0</span>
                            </div>
                        </div>
                        <div class="feedback-summary">
                            <p>Good use of descriptive language. Work on reducing hesitations and improving sentence structure. Practice pronunciation of 'th' sounds.</p>
                        </div>
                        <button class="btn-small">View Full Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for practice cards
    document.getElementById('part1-practice').addEventListener('click', () => startSpeakingPractice('part1'));
    document.getElementById('part2-practice').addEventListener('click', () => startSpeakingPractice('part2'));
    document.getElementById('part3-practice').addEventListener('click', () => startSpeakingPractice('part3'));
    document.getElementById('mock-test').addEventListener('click', () => startSpeakingPractice('mock'));
    
    // Update active navigation button
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-module="speaking-practice"]').classList.add('active');
}

function startSpeakingPractice(practiceType) {
    const contentArea = document.getElementById('content-area');
    
    // Different content based on practice type
    let practiceTitle, practiceDescription, practicePrompt;
    
    switch(practiceType) {
        case 'part1':
            practiceTitle = 'Part 1: Introduction & Interview';
            practiceDescription = 'In this section, you will answer questions about yourself and familiar topics.';
            practicePrompt = 'Let\'s talk about your hometown. What do you like about living there?';
            break;
        case 'part2':
            practiceTitle = 'Part 2: Long Turn';
            practiceDescription = 'In this section, you will speak for 1-2 minutes on a given topic.';
            practicePrompt = 'Describe a book that you enjoyed reading. You should say:\n- What the book was\n- What it was about\n- Why you decided to read it\n- And explain why you enjoyed it';
            break;
        case 'part3':
            practiceTitle = 'Part 3: Discussion';
            practiceDescription = 'In this section, you will discuss more abstract ideas related to the Part 2 topic.';
            practicePrompt = 'Do you think reading habits are changing with the rise of digital media? How might this affect education?';
            break;
        case 'mock':
            practiceTitle = 'Full Mock Test';
            practiceDescription = 'This is a complete IELTS Speaking test simulation with all three parts.';
            practicePrompt = 'Let\'s begin with Part 1. Could you tell me your name and where you\'re from?';
            break;
    }
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="practice-session">
                <div class="session-header">
                    <h2>${practiceTitle}</h2>
                    <p>${practiceDescription}</p>
                </div>
                
                <div class="session-content">
                    <div class="prompt-container">
                        <h3>Your Task</h3>
                        <div class="prompt-card">
                            <p>${practicePrompt}</p>
                        </div>
                        
                        ${practiceType === 'part2' ? `
                        <div class="preparation-timer">
                            <h4>Preparation Time</h4>
                            <div class="timer">01:00</div>
                            <div class="timer-progress">
                                <div class="timer-bar" style="width: 100%"></div>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="recording-container">
                        <div class="microphone-status">
                            <div class="mic-icon">
                                <i class="fas fa-microphone"></i>
                            </div>
                            <div class="status-text">Ready to record</div>
                        </div>
                        
                        <div class="recording-controls">
                            <button class="btn-primary" id="start-recording">
                                <i class="fas fa-play"></i> Start Recording
                            </button>
                            <button class="btn-secondary disabled" id="stop-recording">
                                <i class="fas fa-stop"></i> Stop Recording
                            </button>
                        </div>
                        
                        <div class="recording-time">
                            <span>00:00</span>
                        </div>
                        
                        <div class="recording-visualizer">
                            <canvas id="visualizer" height="60"></canvas>
                        </div>
                    </div>
                </div>
                
                <div class="session-actions">
                    <button class="btn-outline" id="back-to-practice">Back to Practice Options</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('start-recording').addEventListener('click', startRecording);
    document.getElementById('stop-recording').addEventListener('click', stopRecording);
    document.getElementById('back-to-practice').addEventListener('click', initSpeakingPractice);
    
    // If it's part 2, start the preparation timer
    if (practiceType === 'part2') {
        startPreparationTimer();
    }
    
    // Initialize visualizer
    initVisualizer();
}

function startPreparationTimer() {
    let timeRemaining = 60; // 1 minute in seconds
    const timerDisplay = document.querySelector('.timer');
    const timerBar = document.querySelector('.timer-bar');
    
    const timer = setInterval(() => {
        timeRemaining--;
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `00:${seconds.toString().padStart(2, '0')}`;
        
        // Update timer bar
        const progressPercent = (timeRemaining / 60) * 100;
        timerBar.style.width = `${progressPercent}%`;
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            // Auto-start recording when prep time is over
            document.getElementById('start-recording').click();
        }
    }, 1000);
}

function startRecording() {
    // In a real app, this would access the microphone and start recording
    console.log('Recording started');
    
    // Update UI
    document.getElementById('start-recording').classList.add('disabled');
    document.getElementById('stop-recording').classList.remove('disabled');
    document.querySelector('.microphone-status .status-text').textContent = 'Recording...';
    document.querySelector('.microphone-status .mic-icon i').classList.add('recording');
    
    // Start recording timer
    let recordingTime = 0;
    const recordingDisplay = document.querySelector('.recording-time span');
    
    window.recordingTimer = setInterval(() => {
        recordingTime++;
        const minutes = Math.floor(recordingTime / 60);
        const seconds = recordingTime % 60;
        recordingDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
    
    // Simulate recording visualization
    animateVisualizer();
}

function stopRecording() {
    // In a real app, this would stop the recording and process the audio
    console.log('Recording stopped');
    
    // Update UI
    document.getElementById('stop-recording').classList.add('disabled');
    document.querySelector('.microphone-status .status-text').textContent = 'Processing...';
    document.querySelector('.microphone-status .mic-icon i').classList.remove('recording');
    
    // Stop recording timer
    clearInterval(window.recordingTimer);
    
    // Stop visualizer animation
    stopVisualizerAnimation();
    
    // Simulate processing delay then show results
    setTimeout(showFeedback, 2000);
}

function showFeedback() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="feedback-session">
                <div class="feedback-header">
                    <h2>Speaking Feedback</h2>
                    <p>AI-powered analysis of your speaking performance</p>
                </div>
                
                <div class="recording-playback">
                    <h3>Your Recording</h3>
                    <div class="audio-player">
                        <button class="play-button">
                            <i class="fas fa-play"></i>
                        </button>
                        <div class="audio-progress">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        <span class="audio-time">00:00 / 01:24</span>
                    </div>
                </div>
                
                <div class="feedback-scores">
                    <h3>Performance Scores</h3>
                    <div class="score-grid">
                        <div class="score-item">
                            <div class="score-label">Fluency & Coherence</div>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 70%"></div>
                            </div>
                            <div class="score-value">7.0</div>
                        </div>
                        <div class="score-item">
                            <div class="score-label">Lexical Resource</div>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 65%"></div>
                            </div>
                            <div class="score-value">6.5</div>
                        </div>
                        <div class="score-item">
                            <div class="score-label">Grammatical Range</div>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 65%"></div>
                            </div>
                            <div class="score-value">6.5</div>
                        </div>
                        <div class="score-item">
                            <div class="score-label">Pronunciation</div>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 60%"></div>
                            </div>
                            <div class="score-value">6.0</div>
                        </div>
                    </div>
                    
                    <div class="overall-score">
                        <h3>Overall Band Score</h3>
                        <div class="overall-score-value">6.5</div>
                    </div>
                </div>
                
                <div class="detailed-feedback">
                    <h3>Detailed Feedback</h3>
                    <div class="feedback-transcript">
                        <h4>Transcript</h4>
                        <p>I would like to talk about a book that I really enjoyed reading recently. It's called "Sapiens" by Yuval Noah Harari. This book is about the history of humankind, from the early evolution of humans to the present day. It covers how we developed societies, religions, and technologies.</p>
                        <p>I decided to read it because I heard many people talking about it, including some famous people like Bill Gates who recommended it. Also, I'm very interested in history and understanding how humans have evolved over time.</p>
                        <p>I enjoyed this book because it presents complex ideas in a very accessible way. The author has a talent for explaining difficult concepts clearly. I also liked how it challenged many of my assumptions about history and human development.</p>
                    </div>
                    
                    <div class="feedback-analysis">
                        <h4>Strengths</h4>
                        <ul>
                            <li>Good organization of ideas with clear introduction and conclusion</li>
                            <li>Effective use of specific examples to support main points</li>
                            <li>Good range of vocabulary related to books and reading</li>
                        </ul>
                        
                        <h4>Areas for Improvement</h4>
                        <ul>
                            <li>Some hesitations and filler words reduced fluency</li>
                            <li>Limited use of complex grammatical structures</li>
                            <li>Pronunciation of certain words could be improved (e.g., "evolved", "author")</li>
                        </ul>
                        
                        <h4>Recommended Practice</h4>
                        <ul>
                            <li>Practice using more complex sentence structures</li>
                            <li>Work on reducing filler words like "um" and "like"</li>
                            <li>Focus on pronunciation of problematic sounds</li>
                        </ul>
                    </div>
                </div>
                
                <div class="feedback-actions">
                    <button class="btn-primary" id="try-again">Practice Again</button>
                    <button class="btn-outline" id="back-to-practice">Back to Practice Options</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('try-again').addEventListener('click', () => startSpeakingPractice('part2'));
    document.getElementById('back-to-practice').addEventListener('click', initSpeakingPractice);
}

function initVisualizer() {
    const canvas = document.getElementById('visualizer');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentNode.offsetWidth;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw baseline
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.stroke();
}

function animateVisualizer() {
    const canvas = document.getElementById('visualizer');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;
    
    // Animation variables
    let animationId;
    const bars = 100;
    const barWidth = width / bars;
    
    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Draw baseline
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.stroke();
        
        // Draw bars
        for (let i = 0; i < bars; i++) {
            // Simulate audio data with random heights
            const barHeight = Math.random() * 30 + 5;
            
            ctx.fillStyle = 'rgba(67, 97, 238, 0.8)';
            ctx.fillRect(i * barWidth, centerY - barHeight / 2, barWidth - 1, barHeight);
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Store animation ID for stopping later
    window.visualizerAnimationId = animationId;
}

function stopVisualizerAnimation() {
    if (window.visualizerAnimationId) {
        cancelAnimationFrame(window.visualizerAnimationId);
    }
}
