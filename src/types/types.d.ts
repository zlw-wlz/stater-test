/* eslint-disable functional/no-return-void */
declare module 'awg-editor' {
  interface AwgEditorInstance {
    language: string
    setLanguage: (lan: string) => void
    defineTheme: () => void
    initSuggestions: (params: string[] | SuggestionsParams[]) => void
    initHover: (params: HoverParams | HoverParams[], formate?: boolean) => void
    dispose: () => void
    // initCodeEditor:(dom:HTMLElement)=>editor.IStandaloneCodeEditor | null
  }
  interface SuggestionsParams {
    label: string
    text: string
    detail: string
    kind: string
  }
  interface HoverParams {
    type: string
    value: string
    key: string
  }
}
