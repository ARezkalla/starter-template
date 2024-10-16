import { renderWithProviders } from "@/app/test/renderWithProvider"
import { describe, expect, it, vi } from "vitest"
import LogoutButton from ".."
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

describe("LogoutButton", () => {
  it("should render without crashing", () => {
    const { container } = renderWithProviders(<LogoutButton />)
    expect(container).toMatchSnapshot()
  })
  it("should disable button when clicked", async () => {
    const { getByText } = renderWithProviders(<LogoutButton />)
    const user = userEvent.setup()
    const button = getByText(/logout/i)
    await user.click(button)
    expect(button).toHaveProperty("disabled")
  })
})
