import { BridgeMock } from '@stack-spot/vscode-async-webview-client'
import type { Bridge } from '../../extension/src/Bridge'

export const bridgeMock: BridgeMock<Bridge> = {
  showMessage: async (message) => console.log(message),
}
