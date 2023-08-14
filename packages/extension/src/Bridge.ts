import { VSCodeWebviewBridge } from '@stack-spot/vscode-async-webview-backend'
import { ViewState } from './ViewState'
import { window } from 'vscode'

export class Bridge extends VSCodeWebviewBridge<ViewState> {
  async showMessage(message: string) {
    const action = await window.showInformationMessage(message, 'reset counter', 'close')
    if (action === 'reset counter') {
      this.state.set('counter', 0)
    }
  }
}
