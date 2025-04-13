export function initWritingAssistant() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="module-header">
                <h2>Writing Assistant</h2>
                <p>Improve your writing skills with AI-powered feedback and suggestions</p>
            </div>
            
            <div class="writing-options">
                <div class="option-card" id="task1-option">
                    <div class="option-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="option-details">
                        <h3>Task 1: Academic</h3>
                        <p>Describe visual information (graph, table, chart, or diagram)</p>
                    </div>
                </div>
                
                <div class="option-card" id="task2-option">
                    <div class="option-icon">
                        <i class="fas fa-pen-fancy"></i>
                    </div>
                    <div class="option-details">
                        <h3>Task 2: Essay</h3>
                        <p>Write an essay in response to a point of view, argument or problem</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('task1-option').addEventListener('click', () => startWritingTask('task1'));
    document.getElementById('task2-option').addEventListener('click', () => startWritingTask('task2'));
    
    // Update active navigation button
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-module="writing-assistant"]').classList.add('active');
}

function startWritingTask(taskType) {
    const contentArea = document.getElementById('content-area');
    
    let taskTitle, taskDescription, taskPrompt, timeLimit;
    
    if (taskType === 'task1') {
        taskTitle = 'Task 1: Academic Report';
        taskDescription = 'You should spend about 20 minutes on this task.';
        taskPrompt = 'The graph below shows the percentage of people who used different types of mobile phones from 2010 to 2020.<br><br>Summarize the information by selecting and reporting the main features, and make comparisons where relevant.';
        timeLimit = 20;
    } else {
        taskTitle = 'Task 2: Essay';
        taskDescription = 'You should spend about 40 minutes on this task.';
        taskPrompt = 'Some people believe that universities should focus on providing academic skills rather than preparing students for employment.<br><br>To what extent do you agree or disagree?';
        timeLimit = 40;
    }
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="writing-task">
                <div class="task-header">
                    <h2>${taskTitle}</h2>
                    <p>${taskDescription}</p>
                    <div class="timer-container">
                        <span class="timer-label">Time Remaining:</span>
                        <span class="timer-display">${timeLimit}:00</span>
                    </div>
                </div>
                
                <div class="task-content">
                    <div class="prompt-container">
                        <h3>Task</h3>
                        <div class="prompt-card">
                            <p>${taskPrompt}</p>
                            ${taskType === 'task1' ? `
                            <div class="image-container">
                                <img src="src/images/sample-graph.png" alt="Sample graph" class="task-image">
                            </div>
                            ` : ''}
                        </div>
                        <div class="word-count-container">
                            <span class="word-count">0 words</span>
                            <span class="word-target">(Target: ${taskType === 'task1' ? '150-200' : '250-300'} words)</span>
                        </div>
                    </div>
                    
                    <div class="editor-container">
                        <div class="editor-toolbar">
                            <button class="toolbar-btn"><i class="fas fa-bold"></i></button>
                            <button class="toolbar-btn"><i class="fas fa-italic"></i></button>
                            <button class="toolbar-btn"><i class="fas fa-underline"></i></button>
                            <span class="separator"></span>
                            <button class="toolbar-btn"><i class="fas fa-list-ul"></i></button>
                            <button class="toolbar-btn"><i class="fas fa-list-ol"></i></button>
                            <span class="separator"></span>
                            <button class="toolbar-btn"><i class="fas fa-spell-check"></i></button>
                            <button class="toolbar-btn"><i class="fas fa-grammar"></i></button>
                        </div>
                        <div class="editor-area" contenteditable="true" id="writing-editor"></div>
                    </div>
                </div>
                
                <div class="task-actions">
                    <button class="btn-outline" id="back-button">Back</button>
                    <button class="btn-primary" id="submit-writing">Submit for Feedback</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('back-button').addEventListener('click', initWritingAssistant);
    document.getElementById('submit-writing').addEventListener('click', submitWriting);
    
    // Initialize word counter
    const editor = document.getElementById('writing-editor');
    const wordCount = document.querySelector('.word-count');
    
    editor.addEventListener('input', () => {
        const text = editor.innerText;
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = `${words.length} words`;
    });
    
    // Initialize timer
    startWritingTimer(timeLimit);
}

function startWritingTimer(minutes) {
    let totalSeconds = minutes * 60;
    const timerDisplay = document.querySelector('.timer-display');
    
    const timer = setInterval(() => {
        totalSeconds--;
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        
        timerDisplay.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
        
        if (totalSeconds <= 0) {
            clearInterval(timer);
            // Auto-submit when time is up
            submitWriting();
        }
    }, 1000);
    
    // Store timer ID to clear it if needed
    window.writingTimer = timer;
}

function submitWriting() {
    // Clear timer if it exists
    if (window.writingTimer) {
        clearInterval(window.writingTimer);
    }
    
    const contentArea = document.getElementById('content-area');
    const writingContent = document.getElementById('writing-editor').innerText;
    
    // Simulate loading state
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="feedback-loading">
                <div class="loading-spinner"></div>
                <h3>Analyzing your writing...</h3>
                <p>Our AI is evaluating your essay for grammar, vocabulary, coherence, and task achievement.</p>
            </div>
        </div>
    `;
    
    // Simulate API delay
    setTimeout(showWritingFeedback, 2000, writingContent);
}

function showWritingFeedback(writingContent) {
    const contentArea = document.getElementById('content-area');
    
    // Calculate word count
    const words = writingContent.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="writing-feedback">
                <div class="feedback-header">
                    <h2>Writing Feedback</h2>
                    <p>AI-powered analysis of your writing</p>
                </div>
                
                <div class="feedback-overview">
                    <div class="score-card">
                        <div class="score-header">
                            <h3>Overall Band</h3>
                        </div>
                        <div class="score-value">6.5</div>
                    </div>
                    
                    <div class="criteria-scores">
                        <div class="criteria-score">
                            <span class="criteria-label">Task Achievement</span>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 65%"></div>
                            </div>
                            <span class="criteria-value">6.5</span>
                        </div>
                        <div class="criteria-score">
                            <span class="criteria-label">Coherence & Cohesion</span>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 70%"></div>
                            </div>
                            <span class="criteria-value">7.0</span>
                        </div>
                        <div class="criteria-score">
                            <span class="criteria-label">Lexical Resource</span>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 65%"></div>
                            </div>
                            <span class="criteria-value">6.5</span>
                        </div>
                        <div class="criteria-score">
                            <span class="criteria-label">Grammatical Range</span>
                            <div class="score-bar">
                                <div class="score-fill" style="width: 60%"></div>
                            </div>
                            <span class="criteria-value">6.0</span>
                        </div>
                    </div>
                </div>
                
                <div class="essay-analysis">
                    <div class="essay-stats">
                        <div class="stat-item">
                            <span class="stat-label">Word Count</span>
                            <span class="stat-value">${wordCount} words</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Paragraphs</span>
                            <span class="stat-value">4</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Avg. Sentence Length</span>
                            <span class="stat-value">15 words</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Complex Sentences</span>
                            <span class="stat-value">40%</span>
                        </div>
                    </div>
                    
                    <div class="essay-content">
                        <h3>Your Essay</h3>
                        <div class="essay-text">
                            <p>${writingContent.replace(/\n/g, '</p><p>')}</p>
                        </div>
                    </div>
                    
                    <div class="detailed-feedback">
                        <h3>Detailed Feedback</h3>
                        
                        <div class="feedback-section">
                            <h4>Strengths</h4>
                            <ul>
                                <li>Good essay structure with clear introduction, body paragraphs, and conclusion</li>
                                <li>Effective use of topic sentences to introduce main ideas</li>
                                <li>Good range of vocabulary related to education and employment</li>
                            </ul>
                        </div>
                        
                        <div class="feedback-section">
                            <h4>Areas for Improvement</h4>
                            <ul>
                                <li>Some arguments lack sufficient supporting examples</li>
                                <li>Occasional grammatical errors with complex structures</li>
                                <li>Some repetition of key terms could be replaced with synonyms</li>
                                <li>Conclusion could more clearly restate your position</li>
                            </ul>
                        </div>
                        
                        <div class="feedback-section">
                            <h4>Grammar & Vocabulary Suggestions</h4>
                            <div class="suggestions-list">
                                <div class="suggestion-item">
                                    <div class="suggestion-original">universities should focus on</div>
                                    <div class="suggestion-improved">universities ought to prioritize</div>
                                </div>
                                <div class="suggestion-item">
                                    <div class="suggestion-original">students for employment</div>
                                    <div class="suggestion-improved">students for the workforce</div>
                                </div>
                                <div class="suggestion-item">
                                    <div class="suggestion-original">I think that</div>
                                    <div class="suggestion-improved">In my opinion,</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="feedback-actions">
                    <button class="btn-primary" id="try-again">Try Another Task</button>
                    <button class="btn-outline" id="back-to-dashboard">Back to Dashboard</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('try-again').addEventListener('click', initWritingAssistant);
    document.getElementById('back-to-dashboard').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
