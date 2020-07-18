import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pk-loading',
  template: `
    <div class="loading-element loading-element_header"></div>
    <div class="loading-block">
      <div class="loading-element loading-element_block"></div>
      <div class="loading-block__lines">
        <div class="loading-element loading-element_line"></div>
        <div class="loading-element loading-element_line"></div>
        <div class="loading-element loading-element_line"></div>
        <div class="loading-element loading-element_line"></div>
      </div>
    </div>
    <div class="loading-block">
      <div class="loading-element loading-element_block"></div>
      <div class="loading-block__lines">
        <div class="loading-element loading-element_line"></div>
        <div class="loading-element loading-element_line"></div>
        <div class="loading-element loading-element_line"></div>
        <div class="loading-element loading-element_line"></div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: var(--background-color);
        opacity: 0;
        animation: fadeIn 0.2s forwards;
        z-index: 2;
      }
      .loading-element {
        margin-left: 1rem;
        background: linear-gradient(
          -75deg,
          var(--background-color),
          var(--background-color-secondary),
          var(--background-color)
        );
        opacity: 0.6;
        animation: loading-gradient 2.5s ease infinite;
        background-size: 400% 400%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        filter: blur(2px);
      }
      @keyframes loading-gradient {
        0% {
          background-position: 0 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0 50%;
        }
      }
      .loading-element_header {
        width: 30vw;
        height: 2rem;
        margin-top: 1rem;
      }
      .loading-element_block {
        width: calc(100vw - 2rem);
        height: 33vh;
        margin-top: 2rem;
      }
      .loading-element_line {
        width: 55vw;
        height: 1.5rem;
        margin-top: 1rem;
      }
      @media (min-width: 912px) {
        .loading-block {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .loading-block__lines {
          margin-top: 3rem;
        }
        .loading-element_header {
          width: 30vw;
          height: 2rem;
          margin-left: 90px;
          margin-top: 2rem;
        }
        .loading-element_block {
          width: 35vw;
          height: 33vh;
          margin-top: 5rem;
        }
        .loading-element_line {
          width: 30vw;
          height: 1.5rem;
          margin-top: 2rem;
        }
      }
    `,
  ],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
