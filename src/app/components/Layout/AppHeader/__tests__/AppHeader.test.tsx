import { renderWithProviders } from "@/app/test/renderWithProvider"
import { describe, expect, it } from "vitest"
import AppHeader from ".."

describe("AppHeader", () => {
  it("should render without crashing", () => {
    const { container } = renderWithProviders(<AppHeader />)
    expect(container).toMatchSnapshot()
  })
})
