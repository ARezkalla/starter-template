import React, { PropsWithChildren } from "react"

import { createTestStore } from "@store/store"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { render } from "@testing-library/react"
import type { RenderOptions } from "@testing-library/react"

import ThemeProvider from "../theme/ThemeProvider"
import { injectStore } from "./utils"
import { Store } from "@reduxjs/toolkit"

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: any
  initialEntries?: string[]
  store?: Store
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    initialEntries = undefined,
    store = createTestStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  injectStore(store)
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <ThemeProvider>
        <Provider store={store}>
          <MemoryRouter initialEntries={initialEntries}>
            {children}
          </MemoryRouter>
        </Provider>
      </ThemeProvider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

// re-export everything
export * from "@testing-library/react"
