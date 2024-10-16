import { renderWithProviders } from "@/app/test/renderWithProvider"
import { expect, it, describe } from "vitest"
import UserDrawerSettings from "../"

describe("UserDrawerSettings", () => {
  it("should render without crashing", () => {
    const { container } = renderWithProviders(
      <UserDrawerSettings>
        <></>
      </UserDrawerSettings>,
    )
    expect(container).toMatchSnapshot()
  })
})
