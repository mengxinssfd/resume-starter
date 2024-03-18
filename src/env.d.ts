interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly APP_TITLE: string;
  readonly APP_ENTRY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
