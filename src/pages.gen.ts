// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_IndexIndex_getConfig } from './pages/(index)/index';
// prettier-ignore
import type { getConfig as File_Slug_getConfig } from './pages/[slug]';
// prettier-ignore
import type { getConfig as File_Root_getConfig } from './pages/_root';

// prettier-ignore
type Page =
| ({ path: '/' } & GetConfigResponse<typeof File_IndexIndex_getConfig>)
| ({ path: '/[slug]' } & GetConfigResponse<typeof File_Slug_getConfig>)
| ({ path: '/_root' } & GetConfigResponse<typeof File_Root_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
