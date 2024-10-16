import { renderWithProviders } from "@/app/test/renderWithProvider"
import { describe, expect, it } from "vitest"
import SearchBar from ".."
import "@testing-library/jest-dom"

describe("SearchBar", () => {
  it("should render without crashing", () => {
    const { container } = renderWithProviders(<SearchBar />)
    expect(container).toMatchSnapshot()
  })
})
