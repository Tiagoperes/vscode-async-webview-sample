import { VSCodeWeb, VSCodeWebInterface } from '@stack-spot/vscode-async-webview-client'
import { createVSCodeHooks } from '@stack-spot/vscode-async-webview-react'
import type { Bridge } from 'extension/Bridge'

export const vscode: VSCodeWebInterface<Bridge> = new VSCodeWeb<Bridge>({})
const vsHooks = createVSCodeHooks(vscode)
export const useAPIState = vsHooks.useState
