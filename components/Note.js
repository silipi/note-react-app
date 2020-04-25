import React from 'react'

export default function Note(props) {
  return (
    <div class="card w-50 mx-auto my-4">
      <div class="card-body">
        <h4 class="card-title">{props.cardTitle || "Título padrão."}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{props.cardSubtitle || "Subtítulo padrão."}</h6>
        <p class="card-text">{props.cardText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat purus dolor, sed consectetur felis commodo placerat. Suspendisse ac dui eu purus blandit pellentesque sit amet nec arcu. Donec faucibus ipsum pretium ultricies rhoncus. "}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  )
}
