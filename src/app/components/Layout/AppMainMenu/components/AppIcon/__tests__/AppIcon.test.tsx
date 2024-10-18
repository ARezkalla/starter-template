import { renderWithProviders } from "@/app/test/renderWithProvider"
import { AppIcon } from "../"
import { it, describe } from "vitest"

describe("AppIcon", () => {
  it("should render", () => {
    const { container } = renderWithProviders(
      <AppIcon iconCode="code" sx={{}} />,
    )
    expect(container).toMatchSnapshot()
  })
  it("should render with question mark", () => {
    const { container } = renderWithProviders(<AppIcon iconCode="" sx={{}} />)
    expect(container).not.toMatchSnapshot()
  })
})
