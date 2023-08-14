import { VSCodeWeb, VSCodeWebInterface, VSCodeWebMock, isVSCodeEnvironment } from '@stack-spot/vscode-async-webview-client'
import { createVSCodeHooks } from '@stack-spot/vscode-async-webview-react'
import type { Bridge } from 'extension/Bridge'
import { bridgeMock } from './bridge-mock'

export const vscode: VSCodeWebInterface<Bridge> = isVSCodeEnvironment()
  ? new VSCodeWeb({})
  : new VSCodeWebMock({}, bridgeMock)
const vsHooks = createVSCodeHooks(vscode)
export const useBridgeState = vsHooks.useState
