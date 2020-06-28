---
title: Queues, Priority Queues, Min & Max Heaps 
date: "2020-06-28T22:40:31.169Z"
template: "post"
draft: false
slug: "queues-priority-queues-min-max-heaps"
category: "Data Structures"
tags:
  - "Algorithms"
  - "Data Structures"
  - "Programming"
description: "What are they and how to start applying them to problems."
---

# Introduction

This post will be mainly about how queues and priority queues work in addition to looking at how they can be implemented alongside applying them to various problems using Python.

Problems covered in this post that involve Queues / Priority Queues:
- [Guess The Data Structure](https://open.kattis.com/problems/guessthedatastructure)
- [Bank Queue](https://open.kattis.com/problems/bank)

# Queues

A queue is an abstract data type that allows for 2 operations: enqueue (insertion to the back of the queue) and dequeue (removal from the front of the queue). The picture below illustrates the process of enqueuing (adding) and dequeuing (polling) from a queue.

![](../media/queue.png)

> Source: [Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/600px-Data_Queue.svg.png)

Queues follow the FIFO principle or first-in first-out, meaning that the element that is least recently added gets priority over all other elements.

## Time Complexity

- Enqueue O(1)
- Dequeue O(1)
- Peek front O(1)
- Empty Check O(1)
* Contains Element & Remove Element O(n) ~ Worst case we need to look at every element in the queue.

## Python Implementation

A queue can be implemented using a stack, dynamic or static array, singly linked list or a doubly linked list. To keep things nice and simple I am going to be implementing a queue using a dynamic array (list) in Python.

`gist:terror/0392f3d079da9c66d7275a821de3a72c#Queue.py`


All of the operations mentioned above are now ready to be used in the above Queue implementation.

## Standard Library

Note that Python has a ready to use Queue data structure built into it's standard library. To use it, we can simply import queue from the standard library and declare an instance of the Queue class.

Below is an example of using the standard library implementation alongside relevent methods for operations discussed above.

`gist:terror/d6d51cd8d157fb93ddd05132e7f2c0af#QueueSTL.py`



# Priority Queues

Similar to a normal queue, however instead of the first-in first-out method utilized in the queue data structure, each element in the priority queue is assigned a specific priority based on comparison.

The priority that is assigned to an element is based on whether the priority queue is a min priority queue or a max priority queue.

A min priority queue assigns the smallest value in the priority queue with the highest priority whereas a max priority queue assigns the largest element in the priority queue with the highest priority.

Priority queues allow for enqueing (adding) and dequeing (polling) elements just like normal queues however after each operation, the queue must reorder itself in order to maintain the heap property, something we will see shortly.

Below illustrates enqueing and dequeing from a max priority queue.

![](../media/priority-queue.png)

> Source: [Programiz](https://cdn.programiz.com/sites/tutorial2program/files/Introduction.png)

## Heaps

Since priority queues are most commonly implemented using Heaps, I feel it is necessary to take a look at them.

A heap is a tree based data structure that maintains the heap property, which is that all nodes are ordered based on a comparison relationship. For instance, if A is a parent of B, all parent child relationships in the heap must order with respect to A and B.

Below is an example of a max-heap.

![](../media/binary-max-heap.png)

> Source: [Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/240px-Max-Heap.svg.png)

We can see that for any parent A and child B, A > B throughout the entire structure. Imagine a min heap being the same except for A < B.

If any element from the heap is removed or added, the heap maintains the heap property by either doing what's known as bubbling up or bubbling down. Futher material on these terms can be found [here](https://cs.nyu.edu/courses/fall02/V22.0310-002/lectures/lecture-12.html).

## Time Complexity (using Heap Implementation)

- Construction: O(n)  
- Polling: O(logn)  
- Adding: O(logn)  
- Peeking: O(1)  

Note for polling and adding it's O(logn) time because we need to restore the heap property each time.

There exist other more advanced operations for Priority Queues however for this post these operations will satisfy.

## Python Implementation

As mentioned before, priority queues are more commonly implemented using Heaps. However since implementing a Heap could grant another post in itself, I am going to implement the priority queue using a list.

`gist:terror/c679d46ba5ffc67956df8a53516c289e#PriorityQueue.py`


## Standard Library

No surprise, just like normal queues, Python has the priority queue data structure ready to be used in it's standard library. All we need to do is import heapq and get started. Note that this implementation of the priority queue uses a Heap, by default min heap, therefore the operations are optimized.

`gist:terror/d435119d1eb1b8c7a985aeab6be5162e#PriorityQueueSTL.py`

# Problem Applications

That's enough theory for now, let's dive into some problems and see how these data structures can be applied.

## Problem #1: Guess The Data Structure

This problem is cool because it covers stacks, queues and priority queues all in one. Albeit it's quite trivial but challenges the fundamentals pretty well.

My approach is to simulate each data structure and keep a bitset (array of 0s and 1s) of possibilities for each iteration of values.

In other words, see if the value popped off the unknown data structure fits with a certain data structure, else disregard it. In the end I print out whichever data structure it is based on the bitset values while also keeping note of edge cases.

### Code

`gist:terror/6bdbdf5dec082fb736bc9a7dcf4ce0cb#guessthedatastructure.py`

Note how queues follow first-in first-out, stacks follow first-in last-out and in this case, the priority queue is a max priority queue.

## Problem #2: Bank Queue

Pretty explicit in the title, we may need to use some kind of queue here. 

Assuming you have read the problem statement, keywords that may distinguish between using a priority queue and regular queue are words such as maximum or minimum.

The problem states we need to output the maximum amount of money the bank can make, therefore a max priority queue can be useful here, by always polling the max amounts each time we process someone.

Note that this problem can be classified as a greedy problem as well because our aim is to pick the best outcome each time we iterate.

### The Algorithm

- Sort everyone's dollar value with their corresponding wait time
- Iterate backwards starting from the longest wait time and add dollar values to the max priority queue
- Compare and pop the largest amounts from the priority each time we iterate

This algorithm works because we are only serving people worth being served, aka people with the most money. It will always generate a valid solution because we are never wasting time on people with amounts that aren't greater than some amount already in the priority queue.

### Code

`gist:terror/e9c92d59329d1b9d4cac9fc8186a13fb#BankQueue.py`

Note that we have to negate as we push onto the queue and also when we output because the python heapq library is min heap by default. By negating both ways we end up simulating a max heap.

# Conclusion

That concludes this post on Queues and Priority Queues, this post covered the fundamentals, how they can be implemented in Python and how they can be applied to a couple of problems.

All code related to this post can be found on my [Gist](https://gist.github.com/terror).