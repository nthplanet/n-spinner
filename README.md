# N Spinner

This is a custom loading animation that I built on top of [N-Pass](https://github.com/TSnark/n-pass) for my project, [Nth Planet](https://nthpla.net). 

---

#### Repo Contents

Simple HTML page to showcase the animation:  
[Demo](https://nthplanet.github.io/n-spinner/)

Directory with all of the N-Pass files that I modified:  
[/add-to-n-pass](add-to-n-pass)

Easiest way to view code:   
[index.html](index.html) & [styles.css](styles.css)  

---

#### Dev Diary
It should be noted that I am a <ins>very</ins> inexperienced developer, so the steps I took to accomplish this may be very far from the most efficient. Still, I've included a breakdown here in hopes that some may find it interesting, or better yet, let me know what I could have done better.

1. To animate SVG elements individually, you need to tag them with individual class names. This meant I needed to "manually" reconstruct the N image instead of just pulling in the SVG data directly from the contract.
  1. Within the NCard.tsx file, I built a skeleton of the N image, but then needed to find a way to import the relevant numeric values when an N is selected.
  1. The client 'n.ts' did not seem to return the individual numeric values by default, so I made the necessary changes within that file, and then added those values to my reconstruction.
  1. N is built with SVG text elements, and I later learned that Safari does not support animating SVG text, so I added group(g) tags around each number and animated those instead.
1. I'm certain there are many better ways to trigger the start of an animation, but I decided to create a new file called NCardAnimated.tsx, which is identical to NCard.tsx except that the elements are assigned to a different set of CSS classes. In the solution I went with, NCardAnimated is revealed in place of NCard when minting is initiated.
1. I then added a bunch of CSS animations to the global styles file. First, the N numbers are all transformed to new positions to form a circle. And then, the entire surrounding Flex is rotated to achieve the spin.

Anyways, I had a lot of fun building this. 

Huge shout out to TSnark and Knav for N-Pass. It's been a great playground for me.

