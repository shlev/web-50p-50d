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

   ### FAQ
#### &nbsp;&nbsp; key press show key data
##### &nbsp;&nbsp;&nbsp; 
   - font-awesome icon in css
   - element parentNode
   - classList.toggle

### Random Choice picker
#### &nbsp;&nbsp; random selection of manually inserted options.
##### &nbsp;&nbsp;&nbsp; 
   - Input.focus()
   - event.key
   - Strin.split() 
   - String.trim() clear spaces
   - Array.filter()
   - Array.map()
   - event loop. managing async(including setTimeout, setInterval)

### Animated Navigator
#### &nbsp;&nbsp; cool navigator.
##### &nbsp;&nbsp;&nbsp; 
   - background-image: linear-gradient to split background colors;
   - rotate more than 360 to spin.
   - top,left take precedance over bottom,right
      to avoid it set top,left to auto.

### Increment Counter
#### &nbsp;&nbsp; responsive counter, include speed count.
##### &nbsp;&nbsp;&nbsp; 
   - Roboto Mono font - tech font
   - font-awesome fab for social icons
   - font-awesome fa-3x increase size by 3
   - data-x geting element data - getAttribute('data-target')
   - @media(max-width: [x]px - responsive

### Drink Water
#### &nbsp;&nbsp; select small cups to fill big cup, events, view.
##### &nbsp;&nbsp;&nbsp; 
   - element.nextElementSibling.

### Movie App
#### &nbsp;&nbsp; show movies from api, option to search by text. (https://www.themoviedb.org/settings/api)
##### &nbsp;&nbsp;&nbsp; 
   - Form - for search.
   - flex-end
   - fetch data from api using apikey
   - api requests
   - event.preventDeafult()
   - window.location.reload();
   - element appendChild

### Background slider
#### &nbsp;&nbsp; image slider, fits background image to highlighted image.
##### &nbsp;&nbsp;&nbsp; 
   - image positioning.
   - ::before used to create overlay effect.
   - box-shadow to create visual frame.

### Theme Clock
#### &nbsp;&nbsp; analog, digital clock, them colored.
##### &nbsp;&nbsp;&nbsp; 
   - Font Heebo
   - css var set by selection
   - transform-origin , set anchor of transform

### Button ripple effect
#### &nbsp;&nbsp; visual effect by click position.
##### &nbsp;&nbsp;&nbsp; 
   - Event.clientX Event.clientY
   - e.target.offsetTop -> y position of event subject element 
   - e.target.offsetLeft -> x position of event subject element

   - using function and not arrow allows using this
   - .appendChild add element
   - remove circle element after done using it.

### Drag n Drop
#### &nbsp;&nbsp; drag image and attach to drop zones
##### &nbsp;&nbsp;&nbsp; 
   - @media query.
   - draggble: true to enable drag.
   - drag events. 
   - setTimeout to pause for catching the drag 

### Drawing app
#### &nbsp;&nbsp; drawing on canvas control color and line-width
##### &nbsp;&nbsp;&nbsp; 
   - canvas
   - input:color
   - .toolbox > * ->select all direct childs
   - .toolbox > *:last-child select last child

### Kinetic loader
#### &nbsp;&nbsp; triangles animation
##### &nbsp;&nbsp;&nbsp; 
   - css triangles
   - keyframes animation

### Content placeholder
#### &nbsp;&nbsp; card with cool loading animation
##### &nbsp;&nbsp;&nbsp; 
   - https://randomuser.me/ getting random user data
   - rounded image
   - gradient background animation

### Sticky Navigation
#### &nbsp;&nbsp; nav stick on scroll and change view
##### &nbsp;&nbsp;&nbsp; 
   - https://images.pexels.com free images
   - ::before to create overlay.
   - position fixed.
   - strech element with position fixed left-right = 0;
   - window scroll event