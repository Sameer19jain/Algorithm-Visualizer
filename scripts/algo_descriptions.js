// Algorithm descriptions and information

var algoDescriptions = {
    "Bubble": {
        title: "Bubble Sort",
        description: "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements 'bubble' to the top of the list.",
        properties: [
            "Simple and easy to understand",
            "Stable sorting algorithm",
            "In-place sorting (requires minimal extra space)",
            "Performs well on nearly sorted data",
            "Not suitable for large datasets"
        ]
    },
    "Selection": {
        title: "Selection Sort",
        description: "Selection Sort divides the input list into two parts: a sorted portion at the left end and an unsorted portion at the right end. Initially, the sorted portion is empty and the unsorted portion is the entire list. The algorithm finds the minimum element in the unsorted portion and swaps it with the leftmost unsorted element, moving the boundary one element to the right.",
        properties: [
            "Simple and easy to implement",
            "Not stable (relative order may change)",
            "In-place sorting algorithm",
            "Performs well on small lists",
            "Minimum number of swaps (n-1)"
        ]
    },
    "Insertion": {
        title: "Insertion Sort",
        description: "Insertion Sort builds the final sorted array one item at a time. It works the way you might sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.",
        properties: [
            "Efficient for small data sets",
            "Stable sorting algorithm",
            "In-place sorting",
            "Efficient for nearly sorted data",
            "Online algorithm (can sort as it receives data)"
        ]
    },
    "Merge": {
        title: "Merge Sort",
        description: "Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the two sorted halves. The merge operation is the key process that assumes that both halves are sorted and merges them into one sorted array.",
        properties: [
            "Divide and conquer algorithm",
            "Stable sorting algorithm",
            "Guaranteed O(n log n) performance",
            "Requires extra space for merging",
            "Excellent for large datasets"
        ]
    },
    "Quick": {
        title: "Quick Sort",
        description: "Quick Sort is a highly efficient divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.",
        properties: [
            "Very efficient on average",
            "Divide and conquer algorithm",
            "In-place sorting (low memory overhead)",
            "Not stable by default",
            "Worst case O(n²) but rare with good pivot selection"
        ]
    },
    "Heap": {
        title: "Heap Sort",
        description: "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides its input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the largest element and moving it to the sorted region. The algorithm builds a max heap and then repeatedly extracts the maximum element.",
        properties: [
            "In-place sorting algorithm",
            "Not stable",
            "Guaranteed O(n log n) performance",
            "No need for extra space",
            "Used in priority queues"
        ]
    }
};

// Update description when algorithm is selected
for(var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", function() {
        updateDescription(this.innerHTML);
    });
}

function updateDescription(algoName) {
    var descContainer = document.getElementById("algoDescription");
    var algo = algoDescriptions[algoName];
    
    if (algo) {
        var html = "<h4>" + algo.title + "</h4>";
        html += "<p>" + algo.description + "</p>";
        html += "<h4 style='margin-top: 15px; font-size: medium;'>Key Properties:</h4>";
        html += "<ul style='text-transform: none; font-size: medium; line-height: 1.8; margin-left: 20px;'>";
        
        for (var i = 0; i < algo.properties.length; i++) {
            html += "<li>" + algo.properties[i] + "</li>";
        }
        
        html += "</ul>";
        descContainer.innerHTML = html;
    }
}
