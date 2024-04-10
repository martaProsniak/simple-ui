import { Component, Prop, h, Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sui-modal',
  styleUrl: 'sui-modal.css',
  shadow: true,
})
export class SuiModal {
  @Prop({ reflect: true, mutable: true }) opened = false;
  @Prop() header: string = 'Confirm your choice';
  @Prop() showHeader = true;
  @Prop() cancelText = 'Cancel';
  @Prop() confirmText = 'Confirm';
  @Event({
    bubbles: true,
    composed: true,
  })
  suiUserChoice: EventEmitter<boolean>;
  @Prop() withConfirmation = false;

  @Method()
  open() {
    if (this.opened) return;
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  cancel() {
    if (this.withConfirmation) {
      this.suiUserChoice.emit(false);
    }
    this.close();
  }

  confirm() {
    if (this.withConfirmation) {
      this.suiUserChoice.emit(true);
    }
    this.close();
  }

  render() {
    return [
      <div class={`sui-backdrop ${this.opened ? 'sui-backdrop--open' : ''}`} part="backdrop" onClick={this.cancel.bind(this)}></div>,
      <div class={`sui-dialog ${this.opened ? 'sui-dialog--open' : ''}`} part="dialog">
        {this.showHeader ? (
          <div class="sui-dialog-header" part="header">
            <h1>{this.header}</h1>
            <hr />
          </div>
        ) : null}
        <div class="sui-dialog-content" part="content">
          <slot></slot>
        </div>
        <hr />
        <div class="sui-dialog-footer" part="footer">
          <button class="sui-btn" part="button" onClick={this.cancel.bind(this)}>
            {this.cancelText}
          </button>
          {this.withConfirmation ? (
            <button class="sui-btn" part="button" onClick={this.confirm.bind(this)}>
              {this.confirmText}
            </button>
          ) : null}
        </div>
      </div>,
    ];
  }
}
