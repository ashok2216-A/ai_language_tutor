export function initDiagnosticTest() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="module-header">
                <h2>Diagnostic Assessment</h2>
                <p>Complete this 20-minute test to assess your current language proficiency level</p>
            </div>
            
            <div class="test-overview">
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Duration</h3>
                        <p>20 minutes</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-list-check"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Questions</h3>
                        <p>25 questions</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-chart-simple"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Result</h3>
                        <p>Immediate feedback</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Skills Assessed</h3>
                        <p>Reading, Writing, Listening, Speaking</p>
                    </div>
                </div>
            </div>
            
            <div class="test-description">
                <h3>What to Expect</h3>
                <p>This diagnostic test will evaluate your current proficiency in all four language skills. The test adapts to your level as you progress, providing an accurate assessment of your abilities.</p>
                
                <div class="test-sections">
                    <div class="test-section">
                        <div class="section-icon">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <div class="section-details">
                            <h4>Reading (5 minutes)</h4>
                            <p>Short passages with comprehension questions to assess your reading skills.</p>
                        </div>
                    </div>
                    <div class="test-section">
                        <div class="section-icon">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="section-details">
                            <h4>Listening (5 minutes)</h4>
                            <p>Audio clips with comprehension questions to evaluate your listening abilities.</p>
                        </div>
                    </div>
                    <div class="test-section">
                        <div class="section-icon">
                            <i class="fas fa-pen-nib"></i>
                        </div>
                        <div class="section-details">
                            <h4>Writing (5 minutes)</h4>
                            <p>Short writing task to assess your written expression and grammar.</p>
                        </div>
                    </div>
                    <div class="test-section">
                        <div class="section-icon">
                            <i class="fas fa-microphone"></i>
                        </div>
                        <div class="section-details">
                            <h4>Speaking (5 minutes)</h4>
                            <p>Recorded responses to prompts to evaluate your speaking proficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="test-instructions">
                <h3>Before You Begin</h3>
                <ul>
                    <li>Ensure you have a quiet environment for the speaking and listening sections</li>
                    <li>Have a microphone ready for the speaking section</li>
                    <li>Set aside 20 uninterrupted minutes to complete the assessment</li>
                    <li>Answer all questions to the best of your ability</li>
                </ul>
            </div>
            
            <div class="test-actions">
                <button id="start-diagnostic-test" class="btn-primary">Start Assessment</button>
                <button class="btn-outline">Learn More</button>
            </div>
        </div>
    `;
    
    document.getElementById('start-diagnostic-test').addEventListener('click', startDiagnosticTest);
    
    // Update active navigation button
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-module="diagnostic-test"]').classList.add('active');
}

function startDiagnosticTest() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="test-progress">
                <div class="progress-indicator">
                    <div class="progress-bar" style="width: 0%"></div>
                </div>
                <div class="progress-stats">
                    <span class="current-section">Reading Section</span>
                    <span class="time-remaining">05:00 remaining</span>
                </div>
            </div>
            
            <div class="test-content">
                <div class="reading-section">
                    <h3>Reading Passage</h3>
                    <div class="reading-passage">
                        <p>The impact of artificial intelligence on education has been profound and far-reaching. As technology continues to evolve, educational institutions are finding new ways to incorporate AI into their teaching methodologies. From personalized learning experiences to automated grading systems, AI is transforming how students learn and how educators teach.</p>
                        <p>One of the most significant advantages of AI in education is its ability to adapt to individual learning styles. Unlike traditional classroom settings where teachers must cater to the needs of many students simultaneously, AI-powered systems can analyze each student's strengths, weaknesses, and learning preferences to create customized learning paths. This personalization ensures that students receive the support they need in areas where they struggle while allowing them to progress quickly through concepts they grasp easily.</p>
                    </div>
                    
                    <div class="question-container">
                        <h4>Question 1 of 5</h4>
                        <p class="question-text">According to the passage, what is one of the most significant advantages of AI in education?</p>
                        <div class="answer-options">
                            <label class="answer-option">
                                <input type="radio" name="q1" value="a">
                                <span class="option-text">Reducing the need for human teachers</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="b">
                                <span class="option-text">Adapting to individual learning styles</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="c">
                                <span class="option-text">Lowering the cost of education</span>
                            </label>
                            <label class="answer-option">
                                <input type="radio" name="q1" value="d">
                                <span class="option-text">Increasing student enrollment</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="test-navigation">
                        <button class="btn-secondary disabled">Previous</button>
                        <button class="btn-primary" id="next-question">Next</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize timer
    let timeRemaining = 300; // 5 minutes in seconds
    const timerDisplay = document.querySelector('.time-remaining');
    const progressBar = document.querySelector('.progress-bar');
    
    const timer = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} remaining`;
        
        // Update progress bar (assuming 5 minutes = 300 seconds)
        const progressPercent = 100 - (timeRemaining / 300 * 100);
        progressBar.style.width = `${progressPercent}%`;
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            moveToNextSection();
        }
    }, 1000);
    
    // Handle next question button
    document.getElementById('next-question').addEventListener('click', () => {
        // In a real app, this would save the answer and load the next question
        // For this demo, we'll simulate moving to the next section
        clearInterval(timer);
        moveToNextSection();
    });
}

function moveToNextSection() {
    // In a real app, this would transition to the next section of the test
    // For this demo, we'll show a completion message
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="test-complete">
                <div class="complete-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Diagnostic Test Completed!</h2>
                <p>Thank you for completing the diagnostic assessment. Your results are being processed.</p>
                
                <div class="results-preview">
                    <h3>Preliminary Results</h3>
                    <div class="score-cards">
                        <div class="score-card">
                            <div class="score-header">
                                <i class="fas fa-book-open"></i>
                                <h4>Reading</h4>
                            </div>
                            <div class="score-value">7.0</div>
                        </div>
                        <div class="score-card">
                            <div class="score-header">
                                <i class="fas fa-headphones"></i>
                                <h4>Listening</h4>
                            </div>
                            <div class="score-value">6.5</div>
                        </div>
                        <div class="score-card">
                            <div class="score-header">
                                <i class="fas fa-pen-nib"></i>
                                <h4>Writing</h4>
                            </div>
                            <div class="score-value">6.0</div>
                        </div>
                        <div class="score-card">
                            <div class="score-header">
                                <i class="fas fa-microphone"></i>
                                <h4>Speaking</h4>
                            </div>
                            <div class="score-value">6.5</div>
                        </div>
                    </div>
                    
                    <div class="overall-score">
                        <h3>Overall Band Score</h3>
                        <div class="overall-score-value">6.5</div>
                    </div>
                </div>
                
                <div class="next-steps">
                    <h3>Recommended Next Steps</h3>
                    <p>Based on your results, we've created a personalized learning plan to help you improve your skills.</p>
                    <button class="btn-primary" id="view-dashboard">View Your Dashboard</button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('view-dashboard').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
