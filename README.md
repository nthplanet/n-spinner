# N Spinner

This is a custom loading animation that I built on top of [N-Pass](https://github.com/TSnark/n-pass) for my project, [Nth Planet](https://nthpla.net). 

I built a simple HTML page to showcase the animation here:  
[Live Demo](https://nthplanet.github.io/n-spinner/)

I've also added a directory here called [/add-to-n-pass](add-to-n-pass) which includes all of the NPass files that I modified to accomplish this.

### How I Created NSpinner
It should be noted that I am a very inexeperienced developer, so the steps I took to accomplish this may be very far from the most efficient. Still, I've included a breakdown here in hopes that some may find it interesting, or better yet, let me know what I could have done better.

1. To animate svg elements, you need to tag them with individual class names. This meant I needed to "manually" reconstruct the N image instead of just pulling in the svg data.
  1. Within the NCard.tsx file, I built a skeleton of the N svg, but then needed to find a way to import the relevant numeric values when an N is selected.
  1. The client 'n.ts' did not seem to return the individual numeric values by default, so I made the necessary changes within that file, and then added those values to my svg skeleton in NCard.tsx.
  1. I also learned that Safari/Webkit does not support animating Text elements within svg, so I added group(g) tags around each number.
1. I'm sure there's a better way to trigger the start of an animation, but I decided to create a new file called NCardAnimated.tsx that is identical to NCard.tsx, but the elements are tagged with different CSS class names which include animation. My naive solution was to just hide/show NCardAnimated when minting is initiated.
1. I then added a bunch of poorly written and unorganized styles to globals.css
  1. First, the numbers are all translated to new (x,y) positions that I calculated by hand.
  1. Then, the entire Flex is rotated (and nested within another Flex that has overflow set to hidden)

Anyways, I had a lot of fun building this. 

Huge shout out to TSnark and Knav for N-Pass. It's been a great playground for me.
