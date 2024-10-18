import { renderWithProviders } from "@/app/test/renderWithProvider"
import SelectedIcon from "../"
import { it, describe } from "vitest"

describe("SelectedIcon", () => {
  it("should render", () => {
    const { container } = renderWithProviders(
      <SelectedIcon iconCode="code" isActive={true} />,
    )
    expect(container).toMatchSnapshot()
  })
})
