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

### Vertical Slider
#### &nbsp;&nbsp; animated Slider text order - last to first , image order - first to last
##### &nbsp;&nbsp;&nbsp; 
   - clientHeight 
   - show elements by translateY in and out of actual view. 

### Toast notifications
#### &nbsp;&nbsp; add floating messages on click.
##### &nbsp;&nbsp;&nbsp; 
   - flex-end 
   - add created element.

### Github Profiles
#### &nbsp;&nbsp; search&present card of user from github api
##### &nbsp;&nbsp;&nbsp; 
   - main tag  
   - use 'axios' to get api data. ( promises)
   - font-family: inherit
   - input::placeholder
   - margin y-axis not working on inline objects
   - Array.slice(start, end_excluded)
   - target=_blank open new tab with link
   - form submit event , e.preventDefault to prevent form reset
   - font-size default 16px
   - error handling try-catch

### Double Click Heart
#### &nbsp;&nbsp; manual double click listener
##### &nbsp;&nbsp;&nbsp; 
   - font family - Oswald
   - event clientX clientY click position
   - element position by offsetTop, offsetLeft 

### Auto Text Effect
#### &nbsp;&nbsp; manual double click listener
##### &nbsp;&nbsp;&nbsp; 
   - setInterval is call once! in order to update time use setTimeout.
   -input type number.

### Password generator
#### &nbsp;&nbsp; setting password generator, copy to clipboard
##### &nbsp;&nbsp;&nbsp; 
   - Font -> Muli
   - word-wrap: break word
   - input:checked checked attr
   - String.fromCharCode()
   - Uppercase char 65-90
   - Lowercase char 97-122
   - Number char    48-57
   - copy to clipboard pattern
       - textarea.select()
       - document.execCommand('copy')

### Good, Cheap, Fast
#### &nbsp;&nbsp; styled checkbox
##### &nbsp;&nbsp;&nbsp; 
   - label fire event of related input (attribute for)
   - animation-fill-mode forwards, stays in finised animation position.

### Good, Cheap, Fast
#### &nbsp;&nbsp; styled checkbox
##### &nbsp;&nbsp;&nbsp; 
   - font-family Poppins

### Notes App
#### &nbsp;&nbsp; add notes , on save view as markdown, saved to localStorage
##### &nbsp;&nbsp;&nbsp; 
   - mark cdn to convert text to markdown.
   - localStorage
       - setItem
       - removeItem
       - clear 
   - JSON 
      - stringify
      - parse
   - DevTool -> Application -> localStorage

### Animated Countdown
#### &nbsp;&nbsp; cool animated countdown
##### &nbsp;&nbsp;&nbsp; 
   - manage to states [counter, final]
   - bounce effect with rotate 
   - centering with position.
   - animatation & keyframes.
   - css transform origin [x y] 
   - animationend event
   - Element.nextElementSibling 

### Image Carousel
#### &nbsp;&nbsp; image carousel with smooth transition from last to first
##### &nbsp;&nbsp;&nbsp; 
   - use last and first images twice to perform smooth transition  of last to first.
   - clearInterval(intervalName). 

### Hoverboard
#### &nbsp;&nbsp; paint boards squares
##### &nbsp;&nbsp;&nbsp; 
   - mouse over event
   - mouse out event