Algorithm Visualizer - Interactive Sorting Algorithm Learning Tool

A beautiful, feature-rich web application that visualizes various sorting algorithms in real-time. Perfect for students, educators, and anyone interested in understanding how different sorting algorithms work!

Features
Core Functionality

6 Sorting Algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort

Real-time Visualization: Watch algorithms sort data step-by-step with smooth animations

Interactive Controls: Adjust array size (20-150 elements) and visualization speed (5 levels)

Live Statistics Tracking:

Comparisons count

Array accesses count

Swaps performed

Time elapsed

Modern UI/UX

Glassmorphism Design: Beautiful frosted glass effect with backdrop blur

Gradient Backgrounds: Eye-catching purple-blue gradient theme

Smooth Animations: CSS transitions and animated bars

Responsive Layout: Works on desktop, tablet, and mobile devices

Glow Effects: Visual feedback with colored shadows during sorting

Audio & Interaction

Sound Effects: Audio feedback for comparisons, swaps, and sorted elements

Sound Toggle: Enable/disable audio with one click

Pause/Resume: Control visualization flow during execution

Reset Statistics: Clear counters and restart tracking

Educational Features

Algorithm Descriptions: Detailed explanations for each algorithm

Complexity Display:

Time complexity (best, average, worst case)

Space complexity

Key Properties: Learn the characteristics of each algorithm

Color-Coded Visualization:

Yellow: Elements being compared

Red: Elements being swapped

Green: Elements in final sorted position

Blue: Unsorted elements

Quick Start
Option 1: Direct Use

Download or clone this repository

Open index.html in any modern web browser

Start visualizing algorithms!

Option 2: Local Server
# Navigate to project directory
cd Algorithm-Visualizer-main

# If you have Python installed:
python -m http.server 8000

# Or with Node.js:
npx serve

# Then open http://localhost:8000 in your browser

How to Use

Generate Array: Click "Generate New Array!" to create a random array

Adjust Settings:

Move the size slider to change array size

Move the speed slider to adjust visualization speed

Select Algorithm: Click on any algorithm button (Bubble, Selection, etc.)

Watch & Learn: Observe the visualization and read the algorithm description

Control Playback: Use Pause/Resume during execution

Review Stats: Check comparisons, swaps, and time elapsed

Algorithms Explained
Bubble Sort

Time: O(N²) worst/average, O(N) best

Space: O(1)

Best for: Small datasets, nearly sorted data

How it works: Repeatedly swaps adjacent elements if they're in wrong order

Selection Sort

Time: O(N²) all cases

Space: O(1)

Best for: Small lists, minimizing swaps

How it works: Finds minimum element and places it at the beginning

Insertion Sort

Time: O(N²) worst/average, O(N) best

Space: O(1)

Best for: Small datasets, online sorting, nearly sorted data

How it works: Builds sorted array one element at a time

Merge Sort

Time: O(N log N) all cases

Space: O(N)

Best for: Large datasets, stable sorting required

How it works: Divides array in half, sorts recursively, then merges

Quick Sort

Time: O(N log N) average, O(N²) worst

Space: O(log N)

Best for: Large datasets, general-purpose sorting

How it works: Picks pivot, partitions around it, sorts recursively

Heap Sort

Time: O(N log N) all cases

Space: O(1)

Best for: Large datasets, guaranteed performance

How it works: Builds max heap, repeatedly extracts maximum

Color Scheme

The visualizer uses a modern color palette:

Primary Gradient: Purple to Blue (#667eea → #764ba2)

Success Green: Sorted elements (#38ef7d → #11998e)

Warning Yellow: Comparisons (#FFD700)

Error Red: Swaps (#FF4444)

Glass Effect: Semi-transparent white overlays with backdrop blur

Technologies Used

HTML5: Semantic structure

CSS3: Modern styling with gradients, glassmorphism, animations

JavaScript (ES5+): Algorithm implementation and DOM manipulation

Web Audio API: Sound effects generation

Project Structure
Algorithm-Visualizer/
├── index.html
├── README.md
├── Css/
│   └── style.css
└── scripts/
    ├── main.js
    ├── visualizations.js
    ├── algo_descriptions.js
    ├── bubble_sort.js
    ├── selection_sort.js
    ├── insertion_sort.js
    ├── merge_sort.js
    ├── quich_sort.js
    └── heap_sort.js

Key Features Breakdown
Statistics Dashboard

Real-time tracking of:

Comparisons: How many times elements are compared

Array Accesses: Total array read/write operations

Swaps: Number of element exchanges

Time Elapsed: Duration of sorting in seconds

Control Panel

Pause Button: Freeze animation mid-execution

Reset Stats: Clear all counters

Sound Toggle: Enable/disable audio feedback

Visual Feedback

Smooth color transitions during sorting

Glow effects on active elements

Bar animations on array generation

Responsive hover effects on buttons

Performance Tips

Speed 1-2: Best for learning, see every step clearly

Speed 3: Balanced view

Speed 4-5: Quick demonstration for large arrays

Array Size 20-50: Great for understanding algorithm flow

Array Size 100-150: Test performance characteristics

Contributing

Contributions are welcome! Here are some ideas:

Add more sorting algorithms (Radix, Counting, Shell, etc.)

Implement searching algorithms

Add data structure visualizations

Improve mobile responsiveness

Add dark/light theme toggle

Custom array input feature

License

This project is open source and available for educational purposes.

Acknowledgments

Inspired by the need for visual learning tools

Built with modern web technologies

Designed for students and educators

Support

If you encounter any issues or have suggestions:

Open an issue in the repository

Check existing issues for solutions

Contribute improvements via pull requests