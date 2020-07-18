import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pk-md-editor',
  template: `
    <div class="editor">
      <div class="editor-left">
        <div class="editor-left__toolbar">
          <div class="toolbar-button" (click)="onMakeBold()">
            <pk-icon-md-bold></pk-icon-md-bold>
          </div>
          <div class="toolbar-button" (click)="onMakeItalic()">
            <pk-icon-md-italic></pk-icon-md-italic>
          </div>
          <div class="toolbar-button" (click)="onStrikeThrough()">
            <pk-icon-md-strike-through></pk-icon-md-strike-through>
          </div>
          <div class="toolbar-button toolbar-button_spacer" (click)="onMakeCode()">
            <pk-icon-md-code></pk-icon-md-code>
          </div>
          <div class="toolbar-button" (click)="onAddHeading1()">
            H1
          </div>
          <div class="toolbar-button" (click)="onAddHeading2()">
            H2
          </div>
          <div class="toolbar-button toolbar-button_spacer" (click)="onAddHeading3()">
            H3
          </div>
          <div class="toolbar-button" (click)="onInsertLink()">
            <pk-icon-md-link></pk-icon-md-link>
          </div>
          <div class="toolbar-button" (click)="onInsertImage()">
            <pk-icon-md-image></pk-icon-md-image>
          </div>
        </div>
        <textarea #textarea [(ngModel)]="value"></textarea>
      </div>
      <div class="editor-right">
        <p>Preview:</p>
        <div class="editor-right__preview markdown-text" [innerHTML]="value | marked"></div>
      </div>
    </div>

    <button (click)="onUpdate()">Update</button>
    {{ jsonString }}
    <div class="markdown-text" [innerHTML]="parsed | marked"></div>
  `,
  styles: [
    `
      .editor {
        display: flex;
        flex-wrap: wrap;
        height: 450px;
      }
      .editor-left,
      .editor-right {
        width: 50%;
        min-width: 400px;
      }
      .editor-right {
        padding-left: 12px;
        height: 100%;
      }
      .editor-right p {
        height: 38px;
        margin: 0;
        display: flex;
        align-items: center;
        font-family: var(--font-sans-serif), sans-serif;
        font-weight: bold;
      }
      .editor-left__toolbar {
        height: 38px;
        display: flex;
      }
      .toolbar-button {
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--font-sans-serif), sans-serif;
        font-weight: bold;
        cursor: pointer;
      }
      .toolbar-button > * {
        height: 24px;
      }
      .toolbar-button:hover {
        background: var(--background-color-secondary);
      }
      .toolbar-button_spacer {
        margin-right: 12px;
      }
      .editor-right__preview {
        height: calc(100% - 50px);
        overflow: auto;
        padding-right: 12px;
      }
      textarea {
        width: 100%;
        min-height: 400px;
        background: var(--background-color-secondary);
        color: var(--text-color);
        resize: none;
      }
      textarea:focus {
        border-radius: 0;
      }
    `,
  ],
})
export class MdEditorComponent implements OnInit {
  @Input() value =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolor doloremque fugit itaque neque omnis quidem sapiente. Amet aspernatur atque blanditiis corporis cum delectus deleniti dicta doloremque dolores ea et eveniet exercitationem expedita hic in incidunt ipsam ipsum, iste itaque iure labore laudantium magnam molestiae nam nisi nobis numquam odit officia omnis qui quibusdam quod repellat similique tempore tenetur ullam voluptate? Amet aperiam beatae consectetur, consequatur debitis eaque iure minus nostrum odit placeat qui quibusdam quisquam totam ullam ut velit voluptatem! Earum est maiores minus nemo nesciunt quaerat sed, velit voluptas. Blanditiis cum itaque nam neque nihil numquam perferendis sequi.';
  jsonString = '';
  parsed = '';

  @ViewChild('textarea') textarea: ElementRef<HTMLTextAreaElement> | undefined;

  constructor() {}

  ngOnInit(): void {}

  onUpdate(): void {
    this.jsonString = JSON.stringify(this.value);
    this.parsed = JSON.parse(this.jsonString);
  }

  onMakeBold(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '**' + selection + '**';
    this.value = textBefore + newText + textAfter;
  }
  onMakeItalic(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '*' + selection + '*';
    this.value = textBefore + newText + textAfter;
  }
  onStrikeThrough(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '~~' + selection + '~~';
    this.value = textBefore + newText + textAfter;
  }
  onMakeCode(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '`' + selection + '`';
    this.value = textBefore + newText + textAfter;
  }

  onAddHeading1(): void {
    this.insertToCursor('\n# ');
  }

  onAddHeading2(): void {
    this.insertToCursor('\n## ');
  }

  onAddHeading3(): void {
    this.insertToCursor('\n### ');
  }

  onInsertLink(): void {
    this.insertToCursor('[title](https://www.example.com)');
  }

  onInsertImage(): void {
    this.insertToCursor('![alt text](image.jpg)');
  }

  private insertToCursor(newText: string): void {
    const { textBefore, textAfter } = this.splitTextAtCursor();
    this.value = textBefore + newText + textAfter;
  }

  private splitTextAtCursor(): { textBefore: string; textAfter: string } {
    if (!this.textarea) throw new Error('No textarea');
    const cursorPos = this.textarea.nativeElement.selectionStart;
    const textBefore = this.value.substring(0, cursorPos);
    const textAfter = this.value.substring(cursorPos, this.value.length);
    return {
      textBefore,
      textAfter,
    };
  }

  private splitAndGetSelection(): { textBefore: string; textAfter: string; selection: string } {
    if (!this.textarea) throw new Error('No textarea');
    const el = this.textarea.nativeElement;
    const startPos = Math.min(el.selectionStart, el.selectionEnd);
    const endPos = Math.max(el.selectionStart, el.selectionEnd);
    const textBefore = this.value.substring(0, startPos);
    const selection = this.value.substring(startPos, endPos);
    const textAfter = this.value.substring(endPos, this.value.length);
    return {
      textBefore,
      textAfter,
      selection,
    };
  }
}
