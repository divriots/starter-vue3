<template>
  <div style="position: fixed; width: 100%">
    <div style="position: relative">
      <header class="header">
        <div class="logo" aria-label="dockit-vue" v-html="logoSvg"></div>
        <div class="content-top">
          <button
            class="color-switch"
            aria-label="Color switch"
            v-html="sunSvg"
          ></button>
        </div>
      </header>
    </div>
  </div>
  <aside class="navigation">
    <ul
      v-for="group in pagesGraph.filter(
        (group) => !group.children || group.children.length > 0
      )"
    >
      <li>
        <span v-if="group.children" class="package">{{ group.key }}</span>
        <ul v-for="child in group.children || [group]">
          <li>
            <a
              :href="getPageUrlWithoutOrigin(child.page)"
              :aria-current="
                currentPage === getPageUrlWithoutOrigin(child.page)
                  ? 'location'
                  : undefined
              "
              >{{ child.key }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  <main class="content">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import '@divriots/dockit-core/style.css';
import type { Context, Page } from '@divriots/studio-doc-compiler';
import '@divriots/dockit-core/layout/dockit-layout.define.js';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import { setupSpeedyLinks } from '@divriots/dockit-core/speedy-links';
import '~/theme/src/theme.scss';
import moonSvg from './moon.svg?raw';
import sunSvg from './sun.svg?raw';
import logoSvg from './logo.svg?raw';
// TODO would be nice to type
import { pagesGraph, mapPageUrlToRenderModuleUrl, base } from '~doc-context';

setupSpeedyLinks({
  mapLinkUrlToModuleUrl: (url) => mapPageUrlToRenderModuleUrl(url),
});
const getPageUrlWithoutOrigin = (page: Page) => base + page.url;
const currentPage = location.pathname;
</script>

<style lang="scss">
.box {
  width: 6rem;
  height: 6rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: #2f855a;
  border-radius: 0.2rem;
}

.white {
  background-color: #ffffff;
}
</style>

<style scoped lang="scss">
* {
  --spacer: 1rem;
  --header-height: calc(var(--header-content-height) + 2 * var(--spacer));
  --nav-width: calc(10rem + 2 * var(--spacer));
  --header-content-height: 3rem;
  --logo-height: var(--header-content-height);
}
.header {
  width: 100%;
  display: flex;
  height: var(--header-height);
  background-color: white;

  .logo {
    padding: var(--spacer);
    width: var(--nav-width);
    > :first-child {
      width: 100%;
      height: var(--logo-height);
    }
  }

  .content-top {
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .color-switch {
      border: none;
      color: white;
      cursor: pointer;
      align-self: flex-end;
      height: var(--header-content-height);
      width: var(--header-content-height);
      background-color: gray;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 100%;
      }
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
}

.navigation {
  padding: 1rem;
  position: fixed;
  top: var(--header-height);
  height: calc(100vh - var(--header-height));
  width: var(--nav-width);
  box-sizing: border-box;
  overflow-y: auto;

  a[aria-current='location'] {
    font-weight: bold;
    background-color: rgba(128, 128, 128, 0.15);
    border-radius: 0.25rem;
  }

  .package {
    padding: 3rem 0;
    opacity: 0.5;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;

    a {
      display: flex;
      padding: 0.25rem 0rem;
    }

    li > span {
      color: var(--dockit-layout-navigation-group-heading-color);
      text-transform: uppercase;
    }
  }
}
.content {
  padding-top: var(--header-content-height);
  padding-left: var(--nav-width);
}
</style>
