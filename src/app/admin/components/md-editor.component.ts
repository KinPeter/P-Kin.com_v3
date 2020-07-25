import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'pk-md-editor',
  template: `
    <div class="editor">
      <div class="editor-left">
        <div class="editor-left__toolbar">
          <div class="toolbar__button" (click)="onMakeBold()">
            <pk-icon-md-bold></pk-icon-md-bold>
          </div>
          <div class="toolbar__button" (click)="onMakeItalic()">
            <pk-icon-md-italic></pk-icon-md-italic>
          </div>
          <div class="toolbar__button" (click)="onStrikeThrough()">
            <pk-icon-md-strike-through></pk-icon-md-strike-through>
          </div>
          <div class="toolbar__button toolbar__button_spacer" (click)="onMakeCode()">
            <pk-icon-md-code></pk-icon-md-code>
          </div>
          <div class="toolbar__button" (click)="onAddHeading1()">
            H1
          </div>
          <div class="toolbar__button" (click)="onAddHeading2()">
            H2
          </div>
          <div class="toolbar__button toolbar__button_spacer" (click)="onAddHeading3()">
            H3
          </div>
          <div class="toolbar__button" (click)="onInsertLink()">
            <pk-icon-md-link></pk-icon-md-link>
          </div>
          <div class="toolbar__button" (click)="onInsertImage()">
            <pk-icon-md-image></pk-icon-md-image>
          </div>

          <div class="toolbar__spacer"></div>

          <span class="toolbar__unsaved-indicator" *ngIf="valueChanged">Unsaved changes!</span>
          <button
            [disabled]="!valueChanged"
            class="pk-button pk-button_accent"
            (click)="onUpdate()"
          >
            save
          </button>
        </div>
        <textarea class="pk-input" #textarea [(ngModel)]="localValue"></textarea>
      </div>
      <div class="editor-right">
        <p>Preview:</p>
        <div
          class="editor-right__preview markdown-text"
          linksTargetBlank
          [innerHTML]="localValue | marked"
        ></div>
      </div>
    </div>
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

      .toolbar__button {
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--font-sans-serif), sans-serif;
        font-weight: bold;
        cursor: pointer;
      }

      .toolbar__spacer {
        flex-grow: 1;
      }

      .toolbar__unsaved-indicator {
        color: var(--color-danger);
        height: 36px;
        font-size: 0.9rem;
        padding: 7px 12px;
      }

      .toolbar__button > * {
        height: 24px;
      }

      .toolbar__button:hover {
        background: var(--background-color-secondary);
      }

      .toolbar__button_spacer {
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
        resize: none;
      }
    `,
  ],
})
export class MdEditorComponent implements OnChanges {
  @Input() value = '';
  localValue = '';

  @Output() updateMd: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('textarea') textarea: ElementRef<HTMLTextAreaElement> | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      this.localValue = this.value;
    }
  }

  public get valueChanged(): boolean {
    return this.value !== this.localValue;
  }

  onUpdate(): void {
    this.updateMd.emit(this.localValue);
  }

  onMakeBold(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '**' + selection + '**';
    this.localValue = textBefore + newText + textAfter;
  }
  onMakeItalic(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '*' + selection + '*';
    this.localValue = textBefore + newText + textAfter;
  }
  onStrikeThrough(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '~~' + selection + '~~';
    this.localValue = textBefore + newText + textAfter;
  }
  onMakeCode(): void {
    const { textBefore, textAfter, selection } = this.splitAndGetSelection();
    const newText = '`' + selection + '`';
    this.localValue = textBefore + newText + textAfter;
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
    this.localValue = textBefore + newText + textAfter;
  }

  private splitTextAtCursor(): { textBefore: string; textAfter: string } {
    if (!this.textarea) throw new Error('No textarea');
    const cursorPos = this.textarea.nativeElement.selectionStart;
    const textBefore = this.localValue.substring(0, cursorPos);
    const textAfter = this.localValue.substring(cursorPos, this.localValue.length);
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
    const textBefore = this.localValue.substring(0, startPos);
    const selection = this.localValue.substring(startPos, endPos);
    const textAfter = this.localValue.substring(endPos, this.localValue.length);
    return {
      textBefore,
      textAfter,
      selection,
    };
  }
}
