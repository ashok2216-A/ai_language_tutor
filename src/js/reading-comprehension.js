export function initReadingComprehension() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="module-header">
                <h2>Reading Comprehension</h2>
                <p>Improve your reading skills with academic and general passages</p>
            </div>
            
            <div class="practice-overview">
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Current Level</h3>
                        <p>Band 7.5</p>
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
                        <p>15 sessions</p>
                    </div>
                </div>
                <div class="overview-card">
                    <div class="overview-icon">
                        <i class="fas fa-tachometer-alt"></i>
                    </div>
                    <div class="overview-details">
                        <h3>Reading Speed</h3>
                        <p>280 words/min</p>
                    </div>
                </div>
            </div>
            
            <div class="reading-categories">
                <h3>Choose a Reading Category</h3>
                <div class="category-tabs">
                    <button class="category-tab active" data-category="academic">Academic</button>
                    <button class="category-tab" data-category="general">General Training</button>
                </div>
                
                <div class="passage-cards">
                    <div class="passage-card" id="passage1">
                        <div class="passage-header">
                            <h4>The Impact of Climate Change on Agriculture</h4>
                            <div class="passage-meta">
                                <span class="passage-difficulty">Advanced</span>
                                <span class="passage-time">20 minutes</span>
                            </div>
                        </div>
                        <div class="passage-preview">
                            <p>This passage examines how global climate change is affecting agricultural practices worldwide and the adaptations farmers are implementing to maintain food security...</p>
                        </div>
                        <div class="passage-actions">
                            <button class="btn-primary">Start Reading</button>
                        </div>
                    </div>
                    
                    <div class="passage-card" id="passage2">
                        <div class="passage-header">
                            <h4>The Evolution of Urban Transportation</h4>
                            <div class="passage-meta">
                                <span class="passage-difficulty">Intermediate</span>
                                <span class="passage-time">15 minutes</span>
                            </div>
                        </div>
                        <div class="passage-preview">
                            <p>This passage explores how transportation systems in cities have evolved over the past century and how modern urban planning is addressing current challenges...</p>
                        </div>
                        <div class="passage-actions">
                            <button class="btn-primary">Start Reading</button>
                        </div>
                    </div>
                    
                    <div class="passage-card" id="passage3">
                        <div class="passage-header">
                            <h4>Artificial Intelligence in Healthcare</h4>
                            <div class="passage-meta">
                                <span class="passage-difficulty">Advanced</span>
                                <span class="passage-time">20 minutes</span>
                            </div>
                        </div>
                        <div class="passage-preview">
                            <p>This passage discusses the current and potential applications of artificial intelligence in healthcare settings, from diagnostics to treatment planning...</p>
                        </div>
                        <div class="passage-actions">
                            <button class="btn-primary">Start Reading</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="reading-skills">
                <h3>Reading Skills Analysis</h3>
                <div class="skills-chart">
                    <div class="skill-bar">
                        <span class="skill-label">Skimming & Scanning</span>
                        <div class="skill-progress">
                            <div class="skill-fill" style="width: 85%"></div>
                        </div>
                        <span class="skill-value">85%</span>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-label">Vocabulary Recognition</span>
                        <div class="skill-progress">
                            <div class="skill-fill" style="width: 75%"></div>
                        </div>
                        <span class="skill-value">75%</span>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-label">Detail Identification</span>
                        <div class="skill-progress">
                            <div class="skill-fill" style="width: 80%"></div>
                        </div>
                        <span class="skill-value">80%</span>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-label">Inference & Deduction</span>
                        <div class="skill-progress">
                            <div class="skill-fill" style="width: 70%"></div>
                        </div>
                        <span class="skill-value">70%</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.querySelectorAll('.passage-card .btn-primary').forEach((button, index) => {
        button.addEventListener('click', () => startReadingExercise(index + 1));
    });
    
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // In a real app, this would filter passages by category
        });
    });
    
    // Update active navigation button
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-module="reading-comprehension"]').classList.add('active');
}

function startReadingExercise(passageId) {
    const contentArea = document.getElementById('content-area');
    
    // For this example, we'll use the same passage content regardless of ID
    const passageTitle = "The Impact of Climate Change on Agriculture";
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="reading-exercise">
                <div class="exercise-header">
                    <h2>${passageTitle}</h2>
                    <div class="timer-container">
                        <span class="timer-label">Time Remaining:</span>
                        <span class="timer-display">20:00</span>
                    </div>
                </div>
                
                <div class="reading-content">
                    <div class="passage-container">
                        <div class="passage-text">
                            <h3>The Impact of Climate Change on Agriculture</h3>
                            
                            <p>Climate change is already affecting agriculture, with effects unevenly distributed across the world. Future climate change will likely negatively affect crop production in low latitude countries, while effects in northern latitudes may be positive or negative. Climate change will probably increase the risk of food insecurity for some vulnerable groups, such as the poor.</p>
                            
                            <p>Agriculture is an economic activity that is highly dependent on weather and climate in order to produce the food and fiber necessary to sustain human life. Not surprisingly, agriculture is deemed to be an economic activity that is expected to be vulnerable to climate variability and change. The vulnerability of agriculture to climate change is strongly dependent on the responses taken by humans to moderate the effects of climate change.</p>
                            
                            <p>Adaptation is key to managing the impacts of climate change on agriculture and the food system. Farmers have a long record of adapting to the impacts of weather and climate. These adaptations include planting different crops, shifting the timing of planting and harvesting, and implementing new technologies. Historically, farmers have adapted to changes in weather and climate when they had adequate information, incentives, and access to resources. However, the magnitude and rate of climate change in the future may exceed the ability of many farmers to adapt.</p>
                            
                            <p>Technological innovations, including the development of new crop varieties that are more resistant to drought, heat, and waterlogging, can increase the resilience of agricultural systems to climate change. Innovations in water management, including more efficient irrigation systems and water harvesting, can help farmers adapt to changes in precipitation and water availability. Improved forecasting and early warning systems can help farmers make better decisions about planting and harvesting.</p>
                            
                            <p>Climate change is also expected to affect the distribution and intensity of crop pests and diseases. Higher temperatures and changes in precipitation patterns can lead to the expansion of pest and disease ranges, as well as the emergence of new pests and diseases. This can result in increased crop losses and reduced food security. Adaptation strategies include the development of pest-resistant crop varieties, improved pest monitoring and management, and changes in farming practices.</p>
                            
                            <p>The impacts of climate change on agriculture are not limited to changes in crop yields. Climate change can also affect the nutritional quality of food crops. Studies have shown that elevated carbon dioxide levels can reduce the protein, zinc, and iron content of crops such as wheat, rice, and soybeans. This could have significant implications for human nutrition and health, particularly in regions where these crops are staple foods.</p>
                        </div>
                    </div>
                    
                    <div class="questions-container">
                        <h3>Questions</h3>
                        
                        <div class="question-group">
                            <h4>Questions 1-3: Choose the correct letter, A, B, C, or D.</h4>
                            
                            <div class="question-item">
                                <div class="question-number">1</div>
                                <div class="question-content">
                                    <p>According to the passage, how will climate change affect agriculture in different regions?</p>
                                    <div class="answer-options">
                                        <label class="answer-option">
                                            <input type="radio" name="q1" value="a">
                                            <span class="option-text">It will have positive effects in all regions.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q1" value="b">
                                            <span class="option-text">It will have negative effects in all regions.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q1" value="c">
                                            <span class="option-text">It will have negative effects in low latitudes and mixed effects in northern latitudes.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q1" value="d">
                                            <span class="option-text">It will have positive effects in low latitudes and negative effects in northern latitudes.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="question-item">
                                <div class="question-number">2</div>
                                <div class="question-content">
                                    <p>What does the passage suggest about farmers' ability to adapt to climate change?</p>
                                    <div class="answer-options">
                                        <label class="answer-option">
                                            <input type="radio" name="q2" value="a">
                                            <span class="option-text">Farmers have never been able to adapt to climate changes.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q2" value="b">
                                            <span class="option-text">Farmers will easily adapt to future climate changes.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q2" value="c">
                                            <span class="option-text">Farmers have adapted in the past but future changes may be too rapid or severe.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q2" value="d">
                                            <span class="option-text">Farmers will only be able to adapt if they receive government subsidies.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="question-item">
                                <div class="question-number">3</div>
                                <div class="question-content">
                                    <p>According to the passage, how might climate change affect the nutritional quality of crops?</p>
                                    <div class="answer-options">
                                        <label class="answer-option">
                                            <input type="radio" name="q3" value="a">
                                            <span class="option-text">It might increase the protein content of all crops.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q3" value="b">
                                            <span class="option-text">It might reduce the protein, zinc, and iron content of some crops.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q3" value="c">
                                            <span class="option-text">It will have no effect on nutritional quality.</span>
                                        </label>
                                        <label class="answer-option">
                                            <input type="radio" name="q3" value="d">
                                            <span class="option-text">It might reduce crop yields but increase nutritional quality.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="question-group">
                            <h4>Questions 4-6: Complete the summary using the list of words, A-H, below.</h4>
                            <p>Adaptation strategies for agriculture include developing new crop varieties that are more resistant to <input type="text" class="fill-blank" data-question="q4" placeholder="4"> and heat, improving <input type="text" class="fill-blank" data-question="q5" placeholder="5"> systems, and creating better forecasting and <input type="text" class="fill-blank" data-question="q6" placeholder="6"> systems to help farmers make informed decisions.</p>
                            
                            <div class="word-bank">
                                <div class="word-option">A. drought</div>
                                <div class="word-option">B. flooding</div>
                                <div class="word-option">C. transportation</div>
                                <div class="word-option">D. irrigation</div>
                                <div class="word-option">E. early warning</div>
                                <div class="word-option">F. distribution</div>
                                <div class="word-option">G. communication</div>
                                <div class="word-option">H. monitoring</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="exercise-actions">
                    <button class="btn-outline" id="back-to-passages">Back</button>
                    <button class="btn-primary" id="submit-reading">Submit Answers</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('back-to-passages').addEventListener('click', initReadingComprehension);
    document.getElementById('submit-reading').addEventListener('click', submitReadingAnswers);
    
    // Initialize timer
    startReadingTimer(20); // 20 minutes
}

function startReadingTimer(minutes) {
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
            submitReadingAnswers();
        }
    }, 1000);
    
    // Store timer ID to clear it if needed
    window.readingTimer = timer;
}

function submitReadingAnswers() {
    // Clear timer if it exists
    if (window.readingTimer) {
        clearInterval(window.readingTimer);
    }
    
    const contentArea = document.getElementById('content-area');
    
    // Simulate loading state
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="feedback-loading">
                <div class="loading-spinner"></div>
                <h3>Checking your answers...</h3>
                <p>We're evaluating your reading comprehension.</p>
            </div>
        </div>
    `;
    
    // Simulate API delay
    setTimeout(showReadingResults, 1500);
}

function showReadingResults() {
    const contentArea = document.getElementById('content-area');
    
    contentArea.innerHTML = `
        <div class="module-container">
            <div class="results-session">
                <div class="results-header">
                    <h2>Reading Results</h2>
                    <p>Your performance on "The Impact of Climate Change on Agriculture"</p>
                </div>
                
                <div class="score-overview">
                    <div class="score-circle">
                        <div class="score-number">5</div>
                        <div class="score-label">out of 6</div>
                    </div>
                    
                    <div class="band-score">
                        <h3>Estimated Band Score</h3>
                        <div class="band-value">8.0</div>
                    </div>
                </div>
                
                <div class="performance-analysis">
                    <h3>Performance Analysis</h3>
                    
                    <div class="analysis-chart">
                        <div class="chart-label">Reading Speed</div>
                        <div class="chart-bar">
                            <div class="chart-fill" style="width: 85%"></div>
                        </div>
                        <div class="chart-value">285 words/min</div>
                    </div>
                    
                    <div class="analysis-chart">
                        <div class="chart-label">Comprehension Rate</div>
                        <div class="chart-bar">
                            <div class="chart-fill" style="width: 83%"></div>
                        </div>
                        <div class="chart-value">83%</div>
                    </div>
                    
                    <div class="analysis-chart">
                        <div class="chart-label">Detail Identification</div>
                        <div class="chart-bar">
                            <div class="chart-fill" style="width: 90%"></div>
                        </div>
                        <div class="chart-value">90%</div>
                    </div>
                    
                    <div class="analysis-chart">
                        <div class="chart-label">Inference Skills</div>
                        <div class="chart-bar">
                            <div class="chart-fill" style="width: 75%"></div>
                        </div>
                        <div class="chart-value">75%</div>
                    </div>
                </div>
                
                <div class="answers-review">
                    <h3>Review Your Answers</h3>
                    
                    <div class="answer-item correct">
                        <div class="answer-number">1</div>
                        <div class="answer-content">
                            <p class="question-text">According to the passage, how will climate change affect agriculture in different regions?</p>
                            <div class="your-answer">
                                <span class="answer-label">Your answer:</span>
                                <span class="answer-text">It will have negative effects in low latitudes and mixed effects in northern latitudes.</span>
                                <span class="answer-status"><i class="fas fa-check"></i> Correct</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="answer-item correct">
                        <div class="answer-number">2</div>
                        <div class="answer-content">
                            <p class="question-text">What does the passage suggest about farmers' ability to adapt to climate change?</p>
                            <div class="your-answer">
                                <span class="answer-label">Your answer:</span>
                                <span class="answer-text">Farmers have adapted in the past but future changes may be too rapid or severe.</span>
                                <span class="answer-status"><i class="fas fa-check"></i> Correct</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="answer-item incorrect">
                        <div class="answer-number">4</div>
                        <div class="answer-content">
                            <p class="question-text">Complete the summary: Adaptation strategies include developing new crop varieties that are more resistant to _____ and heat.</p>
                            <div class="your-answer">
                                <span class="answer-label">Your answer:</span>
                                <span class="answer-text">B. flooding</span>
                                <span class="answer-status"><i class="fas fa-times"></i> Incorrect</span>
                            </div>
                            <div class="correct-answer">
                                <span class="answer-label">Correct answer:</span>
                                <span class="answer-text">A. drought</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="improvement-tips">
                    <h3>Tips for Improvement</h3>
                    <ul>
                        <li>Practice skimming techniques to quickly identify main ideas</li>
                        <li>Work on identifying specific details in complex passages</li>
                        <li>Improve your ability to make inferences from implied information</li>
                        <li>Expand your academic vocabulary to better understand scientific texts</li>
                    </ul>
                </div>
                
                <div class="results-actions">
                    <button class="btn-primary" id="try-another-passage">Try Another Passage</button>
                    <button class="btn-outline" id="back-to-dashboard">Back to Dashboard</button>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('try-another-passage').addEventListener('click', initReadingComprehension);
    document.getElementById('back-to-dashboard').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
