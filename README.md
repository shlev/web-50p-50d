# 50 mini projects HTML, CSS, VanillaJS

### Expanding Cards 
&nbsp;&nbsp;&nbsp;<small>Photos source: https://unsplash.com/</small>
### Progress Steps
### Rotating Navigation
&nbsp;&nbsp;&nbsp;<small>Hide/Show objects using transform styling.
- transform
-- rotate
-- translateX
-- transform-origin</small>

### Hidden Search
&nbsp;&nbsp;&nbsp;<small> Hidden search animated widget
- background-image: linear-gradient
- transform
-- translateX
- element position</small>

### Blury Image
&nbsp;&nbsp;&nbsp;<small> Blur image by precentage
- filter: ([x]px) 
- calc() function
- negative position

setting negative position and increase image size to hide blur distance from the edges

use function scaling source-range to target-range
</small>

### Scroll animation
#### &nbsp;&nbsp; add/remove content on scrolling vertically
##### &nbsp;&nbsp;&nbsp; 
    - element.getBoundingClientRect -> get element position/size info
    - window scroll event.

### Split Landing Page
#### &nbsp;&nbsp; toggle section focus on event
##### &nbsp;&nbsp;&nbsp; 
   - ::before to create overlay

### Form Input Wave
#### &nbsp;&nbsp; animate text on event
##### &nbsp;&nbsp;&nbsp; 
   - transition *cube-bazier* for animation.
   - transition delay to create bounce effect.
   - css selector '+' -> first child of type

### Sound Board
#### &nbsp;&nbsp; buttons playing sounds(.mp3)
##### &nbsp;&nbsp;&nbsp; 
   - audio element for playing sound.
   - document.createElement , adding elements to DOM on the fly.

### Dad Jokes
#### &nbsp;&nbsp; randomly showing jokes fetched from api
##### &nbsp;&nbsp;&nbsp; 
   - letter spacing, line-height
   - fetch api
   - promise
   - await async
   - devtools network tab to check requests.

### Event key Code
#### &nbsp;&nbsp; key press show key data
##### &nbsp;&nbsp;&nbsp; 
   - display inline-flex => effect the flex container **NOT** the its contained flex items.
   - keydown event.
   - extract key param from event.