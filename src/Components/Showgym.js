import React from 'react'

const Showgym = (props) => {
    console.log(props)  
    return (
        <div>
        <h1 className="title">{props.title}</h1>
        <div id="slideshow">
  <div class="slide-wrapper">
    <div class="slide"><img src={`../images/${props.id}.jpg`} className="" alt="" /></div>
    <div class="slide"><h1 class="slide-number">2</h1></div>
    <div class="slide"><h1 class="slide-number">3</h1></div>
    <div class="slide"><h1 class="slide-number">4</h1></div>
    <div class="slide"><h1 class="slide-number">5</h1></div>
  </div>
</div>
<div class="pagination">
    <a href="#slide-1"><span>1</span></a>
    <a href="#slide-2"><span>2</span></a>
    <a href="#slide-3"><span>3</span></a>
    <a href="#slide-4"><span>4</span></a>
    <a href="#slide-5"><span>5</span></a>
    <a href="#slide-6"><span>6</span></a>
    <a href="#slide-7"><span>7</span></a>
  </div>

        

    </div>
    )
}

export default Showgym
